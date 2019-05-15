import express = require('express');
import expressEjsLayouts = require('express-ejs-layouts');

function expressRequestHandlerTest() {
    const app = express()
        .use(expressEjsLayouts());
}
