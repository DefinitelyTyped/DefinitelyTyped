import * as express from 'express';
import * as expressEjsLayouts from 'express-ejs-layouts';

function expressRequestHandlerTest() {
    const app = express()
        .use(expressEjsLayouts());
}
