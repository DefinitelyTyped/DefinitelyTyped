import docopt = require("docopt");

var doc = `
Usage:
  quick_example.coffee tcp <host> <port> [--timeout=<seconds>]
  quick_example.coffee serial <port> [--baud=9600] [--timeout=<seconds>]
  quick_example.coffee -h | --help | --version
`;
docopt(doc, { version: '0.1.1rc' });
