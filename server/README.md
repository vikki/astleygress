# Distestful
Distributed testing ideas!

## To run:

### Pre-requisites
(Lots!) - you will need: helm, tilt, docker, a local kind cluster + registry

### Set up the image

    docker build -t distestful .
    docker tag distestful localhost:5000/distestful:latest
    docker push localhost:5000/distestful:latest

### Release the deployment

    tilt up

### To try it out!
Go to http://localhost:1234 with a browser or curl, and it should say Hello World! 
(I appreciate this is a lot of effort to get an incredibly simple page, but we're going somewhere with this :P)


### To turn it off

    tilt down
