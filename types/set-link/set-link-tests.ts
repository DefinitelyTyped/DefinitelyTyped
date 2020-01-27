import express = require('express');
import setLink = require('set-link');

const app = express();

app.use(setLink);

function handler(req: express.Request, res: express.Response) {
    res.setLink('http://example.com/', 'self');
}
