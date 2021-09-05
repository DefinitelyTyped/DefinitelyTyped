import { docopt } from "docopt";

var doc = `
Usage:
  docopt-tests.ts tcp <host> <port> [--timeout=<seconds>]
  docopt-tests.ts serial <port> [--baud=9600] [--timeout=<seconds>]
  docopt-tests.ts -h | --help | --version
`;
docopt(doc, { version: '0.1.1rc' });
docopt(doc)