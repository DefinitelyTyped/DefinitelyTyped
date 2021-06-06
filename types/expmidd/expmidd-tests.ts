import * as http from 'http';
//import express = require('express');

import { Request, Response } from 'express';

//import Cors = require('cors');
//import runMiddleware = require('expmidd');

/*const cors = Cors({
    methods: ['GET'],
});*/
/*namespace expmidd_tests {
    const app = express();
    app.get('/', async (req: Request, res: Response) => {
       // await runMiddleware(req, res, cors);
        res.send('hello world');
    });
}*/

namespace expmidd_tests {
    const host = 'localhost';
    const port = 8000;
    const requestListener: any = function (req: Request, res: Response) {
        res.writeHead(200);
        res.end("hello world");
    };
    const server = http.createServer(requestListener);
    server.listen(port, host, () => {
        console.log(`Server is running on http://${host}:${port}`);
    });
}
