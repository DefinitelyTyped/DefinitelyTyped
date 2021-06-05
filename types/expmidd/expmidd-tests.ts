import { Request, Response } from 'express';
import runMiddleware from 'expmidd';
import * as Cors from 'cors';
import * as express from 'express';

const cors = Cors({
    methods: ['GET'],
});
namespace expmidd_tests {
    const app = express();
    app.get('/', async (req: Request, res: Response) => {
        await runMiddleware(req, res, cors);
        res.send('hello world');
    });
}
