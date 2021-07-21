import * as Polka from 'polka';

const middleware: Polka.Middleware = async (req, res, next) => {
    const originalUrl = req.originalUrl;
    const path = req.path;

    await new Promise<void>((resolve, reject) => resolve());
    next();
};

const routesA = Polka()
    .use(middleware)
    .get('/a', (req, res) => {})
    .post('/b', (req, res) => {});

const routesB = Polka()
    .get('/1', (req, res) => {
        app.server?.close();
    })
    .delete('/2', (req, res) => {});

const app = Polka()
    .use(middleware, middleware)
    .use('/path-a', routesA)
    .use('/path-b', routesB);

app.listen(3000);

const short = Polka().get('/abc', () => {}).listen(3000);
