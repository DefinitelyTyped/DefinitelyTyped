import express = require('express');
import { Request, Response } from 'express-serve-static-core';
//import Cors = require('cors');
//import runMiddleware = require('expmidd');

/*const cors = Cors({
    methods: ['GET'],
});*/
namespace expmidd_tests {
    const app = express();
    app.get('/', async (req: Request, res: Response) => {
       // await runMiddleware(req, res, cors);
        res.send('hello world');
    });
}
