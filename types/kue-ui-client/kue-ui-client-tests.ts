import * as express from 'express';
import * as kueUiClient from 'kue-ui-client';

const app = express();

app.use(express.static(kueUiClient.getDistPath(), { index: false }));

app.get('index.html', (req, res) => {
    res.contentType('html')
        .send(kueUiClient.getIndexFile())
        .end();
});
