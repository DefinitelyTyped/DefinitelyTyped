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
app.use(fileParser({ otherOptions: { foo: 'bar' } }));
