import liveServer = require('live-server');

liveServer.start({
    port: 8181,
    host: '0.0.0.0',
    root: '/public',
    open: false,
    ignore: 'scss,my/templates',
    file: 'index.html',
    wait: 1000,
    mount: [['/components', './node_modules']],
    logLevel: 2,
    middleware: [
        (req: any, res: any, next: any) => {
            next();
        },
    ],
});

liveServer.shutdown();
