import fileParserDefault = require('express-multipart-file-parser');
const fileParser = fileParserDefault.fileParser;

// $ExpectType FileParser
fileParserDefault;

// $ExpectType RequestHandler
fileParser();

fileParserDefault;
fileParser();
fileParser({ rawBodyOptions: { limit: '10mb' } });
fileParser({ busboyOptions: { limits: { fields: 2 } } });

// @ts-expect-error
fileParser({ otherOptions: { foo: 'bar' } });

// @ts-expect-error
fileParser('string');

// @ts-expect-error
fileParser(123);
