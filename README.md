
TODO: uninline the add header app form the config file, it's impossible to edit as a big string!


Curling through a logging and modifying egress proxy now works!

You'll need to give the client app the cacert:

    kubectl cp -n istio-system istio-system/SNI_PROXY_POD:/.mitmproxy/mitmproxy-ca-cert.pem -c sni-proxy /tmpdir/mitmproxy-ca-cert.pem
    kubectl cp /tmpdir/mitmproxy-ca-cert.pem $SLEEP_POD:/tmp/mitmproxy-ca-cert.pem

....and then you can do: 

    kubectl exec "$SOURCE_POD" -c sleep -- sh -c 'curl -v --cacert /tmp/mitmproxy-ca-cert.pem https://simple.wikipedia.org/wiki/Main_Page'

and mitmproxy will log the request (as the sni proxy, found via: ` kubectl get pod -l istio=egressgateway-with-sni-proxy -n istio-system`)

(can maybe do this transparently in node by setting NODE_EXTRA_CA_CERTS)


Exposes a server on port 23336 that can control whether or not the header `count` is included in responses that go through the proxy.

You can enable or disable this feature by going to `http://localhost:23336/on` and `http://localhost:23336/off` respectively.