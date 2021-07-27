import nodeNetstat = require("node-netstat");
import { Stream } from "stream";

const mockLine =
    "tcp6       0      0  ffff::ffff:ffff:.00000 ffff::ffff:ffff:.00000 ESTABLISHED 000000 000000    000      0 0x000 0x00000000";
const mockLineHandlerCallback: nodeNetstat.LineHandler = _ => false;

nodeNetstat({ watch: true, sync: true, limit: 2, filter: { protocol: "tcp", local: { port: 3306 } } }, () => false);

nodeNetstat.commands; // $ExpectType Commands
nodeNetstat.commands.linux; // $ExpectType Command
nodeNetstat.commands.darwin.args; // $ExpectType string[]
nodeNetstat.commands.win32.cmd; // $ExpectType string

nodeNetstat.version; // $ExpectType string

const darwinParser = nodeNetstat.parsers.darwin; // $ExpectType Parser
darwinParser(mockLine, mockLineHandlerCallback); // $ExpectType boolean | void

const linuxParserFactory = nodeNetstat.parserFactories.linux; // $ExpectType ParserFactory
const linuxParser = linuxParserFactory({ parseName: true }); // $ExpectType Parser
linuxParser(mockLine, mockLineHandlerCallback); // $ExpectType boolean | void

nodeNetstat.filters.conditional(mockLineHandlerCallback, { protocol: "tcp" }); // $ExpectType boolean | void
nodeNetstat.filters.limit(mockLineHandlerCallback, 5); // $ExpectType boolean | void

nodeNetstat.utils.noop(); // $ExpectType void
nodeNetstat.utils.parseAddress("ffff::ffff:ffff:.00000"); // $ExpectType Address
const normalizedValues = nodeNetstat.utils.normalizeValues({
    protocol: "tcp6",
    pid: "000",
    local: "ffff::ffff:ffff:.00000",
    remote: "ffff::ffff:ffff:.00000",
    state: "ESTABLISHED",
});
normalizedValues; // $ExpectType ParsedItem
nodeNetstat.utils.emitLines(new Stream.Readable()); // $ExpectType void
nodeNetstat.utils.parseLines(mockLine); // $ExpectType string[]
