import * as Polka from 'polka';

const middleware: Polka.Middleware = async (req, res, next) => {
    await new Promise((resolve, reject) => resolve());
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
    .use('/path-a', routesA)
    .use('/path-b', routesB);
