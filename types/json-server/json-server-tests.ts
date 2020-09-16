import * as jsonServer from 'json-server';

const server = jsonServer.create();

const inMemoryDbRouter = jsonServer.router({ todos: [] as any[], users: [] as any[] });

const router = jsonServer.router('db.json', { foreignKeySuffix: '_id' });

const middlewaresOptions: jsonServer.MiddlewaresOptions = {
    bodyParser: true,
    logger: false,
    noCors: true,
    readOnly: true,
    static: 'assets',
};

const middlewares = jsonServer.defaults(middlewaresOptions);

const rewriter = jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id',
});

server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now();
    }
    next();
});

server.use(rewriter);

server.use(middlewares);

server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running');
});
