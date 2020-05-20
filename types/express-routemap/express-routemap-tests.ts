import express = require('express');
import displayRoutes = require('express-routemap');

const server = express();
server.listen(3000, () => {
    displayRoutes(server); // $ExpectType void
});
