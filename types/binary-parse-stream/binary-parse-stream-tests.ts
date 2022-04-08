import BinaryParseStream = require('binary-parse-stream');

class Decoder extends BinaryParseStream {}

BinaryParseStream.One;
BinaryParseStream.extend(new Decoder());
