import Logger = require("bunyan");
import bunyanLogentries = require("bunyan-logentries");

var logger: Logger = Logger.createLogger({
  name: "foobar",
  streams: [{
    level: "info",
    stream: bunyanLogentries.createStream({token: "foobar"}),
    type: "raw"
  }]
});
