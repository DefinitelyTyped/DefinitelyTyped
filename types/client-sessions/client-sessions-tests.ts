import express = require("express");
import session = require("client-sessions");

const secret = "yolo";
const app = express();
const options = { secret };

let middleware = session(options);
middleware = session({ secret, cookieName: "_s" });
middleware = session({ secret, duration: 600000 });
middleware = session({ secret, activeDuration: 42 });
middleware = session({
  secret,
  cookie: {
    httpOnly: false,
  }
});

app.use(middleware);
app.use((req: any, res: any) => {
  req.session = { test: true };
});

const encoded = session.util.encode(options, { test: true });
session.util.decode(options, encoded);
