import express = require('express');
import noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');

const app = express();
app.use(noopServiceWorkerMiddleware('/test/'));
app.listen(8080);
