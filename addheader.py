    """Add an HTTP header to each response."""


    from flask import Flask
    from mitmproxy.addons import asgiapp
    import threading

    app = Flask("proxapp")
    data = 'foo'
    host_name = "0.0.0.0"
    port = 23336
    enabled = True
    addons = []

    class AddHeader:
      def __init__(self):
          self.num = 0
          threading.Thread(target=lambda: app.run(host=host_name, port=port, debug=True, use_reloader=False)).start()

      def response(self, flow):
          self.num = self.num + 1
          flow.response.headers["count"] = str(self.num)

    @app.route('/')
    def hello_world() -> str:
        return 'Hello World! yay'

    @app.route('/on')
    def on() -> str:
        addons = [
            AddHeader()
        ]
        return 'whoo on'

    @app.route('/off')
    def off() -> str:
        addons = [
        ]
        return 'whoo offf'
