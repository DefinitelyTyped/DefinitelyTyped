import cors = require('micro-cors');
import micro from 'micro';

namespace micro_cors_tests {
    const handler = cors();

    cors({ allowMethods: ['PUT', 'POST'] })

    cors({
        maxAge: '1000',
        origin: '*',
        allowHeaders: [],
        allowMethods: [],
        exposeHeaders: []
    })

    handler(async (req, res) => {})
    handler(async (req, res) => 'data')

    handler((req, res) => {})
    handler((req, res) => Promise.resolve('data'))
    handler((req, res) => 'data')

    micro(handler((req, res) => {}))
}
