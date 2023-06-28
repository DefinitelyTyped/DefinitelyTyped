import fileParserDefault = require('express-multipart-file-parser');
const fileParser = fileParserDefault.fileParser;
import express from 'express';

const app = express();

// $ExpectType FileParser
fileParserDefault;

// $ExpectType RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>
fileParser();

app.use(fileParserDefault);
app.use(fileParser());
app.use(fileParser({ rawBodyOptions: { limit: '10mb' } }));
app.use(fileParser({ busboyOptions: { limits: { fields: 2 } } }));

// @ts-expect-error
app.use(fileParser({ otherOptions: { foo: 'bar' } }));
