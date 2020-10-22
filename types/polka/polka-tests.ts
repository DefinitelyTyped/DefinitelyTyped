import * as compression from 'compression';
import * as Polka from 'polka';

interface MyResponse {
    foo: string;
}

const middleware: Polka.Middleware<any, MyResponse, any, any> = async (req, res, next) => {
    const originalUrl = req.originalUrl;
    const path = req.path;

    res.send({ foo: 'bar' });

    await new Promise<void>((resolve, reject) => resolve());
    next();
};

const routesA = Polka()
    .use(middleware)
    .get('/a', (req, res) => {})
    .post('/b', (req, res) => {});

const routesB = Polka()
    .get('/1', (req, res) => {})
    .delete('/2', (req, res) => {});

const app = Polka()
    .use(compression({ threshold: 0 }))
    .use('/path-a', routesA)
    .use('/path-b', routesB);

app.listen(3000);

const short = Polka().get('/abc', () => {}).listen(3000);
