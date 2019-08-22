import express = require('express');
import noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');

const app = express();
app.use(noopServiceWorkerMiddleware());
app.listen(8080);
