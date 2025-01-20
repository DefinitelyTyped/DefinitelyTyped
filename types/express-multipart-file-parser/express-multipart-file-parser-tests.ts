import fileParserDefault = require("express-multipart-file-parser");
const fileParser = fileParserDefault.fileParser;

// mock of express request handler
type RequestHandler = (_req: any, _res: any, _next: any) => void;

// mock of express app
declare const app: {
    // IRouterMatcher
    use(path: string, ..._handlers: RequestHandler[]): void;
    use(path: string, _handlers: RequestHandler | RequestHandler[]): void;

    // IRouterHandler
    use(_handlers: RequestHandler | RequestHandler[]): void;
    use(..._handlers: RequestHandler[]): void;
};

// $ExpectType FileParser
fileParserDefault;

// $ExpectType FileParserFactory
fileParser;

// $ExpectType RequestHandler[]
fileParser();

fileParserDefault.push((_req, _res, _next) => {});
fileParserDefault.pop();

app.use(fileParserDefault);
app.use(fileParser());
app.use(fileParser({ rawBodyOptions: { limit: "10mb" } }));
app.use(fileParser({ busboyOptions: { limits: { fields: 2 } } }));

// @ts-expect-error
app.use(fileParser({ otherOptions: { foo: "bar" } }));

// @ts-expect-error
app.use(fileParser("string"));

// @ts-expect-error
app.use(fileParser(123));
