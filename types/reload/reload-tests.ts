import reload = require("reload");
import express = require("express");

const app = express();
reload(app).then(result => {
    // $ExpectType Reload
    result;
});

reload(app, { webSocketServerWaitStart: true }).then(result => {
    // $ExpectType ReloadWithWebSocketServer
    result;
});
