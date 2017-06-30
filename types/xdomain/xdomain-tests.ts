

xdomain.masters({
  'http://abc.example.com': '/api/*'
});

xdomain.slaves({
  "http://xyz.example.com": "/proxy.html"
});

xdomain.debug = true;
xdomain.on("log", (msg) => console.log(msg));
xdomain.on("timeout", () => console.log("timeout"));
xdomain.cookies.master = "MASTER";
