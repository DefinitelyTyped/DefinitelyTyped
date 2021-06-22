import cors = require('micro-cors');
import micro from 'micro';

const handler = cors();

cors({ allowMethods: ['PUT', 'POST'] });

cors({
    maxAge: 1000,
    origin: '*',
    allowHeaders: [],
    allowMethods: [],
    exposeHeaders: [],
    allowCredentials: true
});

handler(async (req, res) => {});
handler((req, res) => {});
micro(handler((req, res) => {}));
