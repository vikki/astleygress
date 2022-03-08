'use strict';

const Hapi = require('@hapi/hapi');
const got = require('got');

const init = async () => {

    const server = Hapi.server({
        port: process.env.PORT || 4000,
        //host: 'localhost' // don't specify the host or you get problems with port forwarding
    });

    server.route({
        method: 'GET',
        path: '/whoo',
        handler: async (request, h) => {
            try {
                // this works if you can get the value of NODE_EXTRA_CA_CERTS set to the right file on the box
                const out = await got('https://de.wikipedia.org/wiki/Main_Page').text();
                console.log({out});
                return `Hello, ${out}!`;
            } catch (e) {
                console.log(e);
                throw e;
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/health',
        handler: async (request, h) => {
            return `everything's shiny cap'n`;
            
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();