print("^^^ running against: " + k8s_context())

### dep: istioctl install --set profile=demo --set meshConfig.outboundTrafficPolicy.mode=REGISTRY_ONLY

k8s_yaml('./sleep-with-sidecar.yaml')
k8s_yaml('./sni-configmap.yaml')
k8s_yaml('./egressgateway-with-sni-proxy.yaml')
k8s_yaml('./service-entry-disable-localhost-mtls.yaml')
k8s_yaml('./service-entry-wikipedia.yaml')
k8s_yaml('./egress-gw.yaml')
k8s_yaml('./envoy-filter.yaml')





## To test:
## export SOURCE_POD=$(kubectl get pod -l app=sleep -o jsonpath={.items..metadata.name})
