import express = require('express');
import redirectServedPathMiddleware = require('react-dev-utils/redirectServedPathMiddleware');

const app = express();
app.use(redirectServedPathMiddleware('/test/'));
app.listen(8080);
