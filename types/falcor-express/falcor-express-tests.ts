import express = require('express');
import Router = require('falcor-router');
import falcorExpress = require('falcor-express')

const app = express();
class MyRouter extends Router.createClass([{
    route: 'greeting',
    get() {
        return {json: {greeting: 'Hello, world'}};
    }
}]){
    constructor() {
        super();
    }
}

app.use('/model.json', falcorExpress.dataSourceRoute((req, res) => new MyRouter()));

app.listen(3000);

