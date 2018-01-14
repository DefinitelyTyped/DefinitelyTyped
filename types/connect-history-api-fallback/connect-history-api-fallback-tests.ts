import * as historyApiFallback from 'connect-history-api-fallback';

import * as express from "express";

const app = express();
app.use(historyApiFallback());

historyApiFallback({
    verbose: true
});

historyApiFallback({
    logger: console.log.bind(console)
});

historyApiFallback({
    rewrites: [
        { from: /\/soccer/, to: '/soccer.html' }
    ]
});

historyApiFallback({
    index: 'default.html'
});

historyApiFallback({
    htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
});

historyApiFallback({
    rewrites: [
        {
            from: /^\/libs\/(.*)$/,
            to(context) {
                return './bower_components' + context.parsedUrl.pathname;
            }
        }
    ]
});

historyApiFallback({
    rewrites: [
        {
            from: /\/app\/login/,
            to: function onMatch(ctx) {
                if (ctx.parsedUrl.path && ctx.parsedUrl.path.indexOf('.js')) {
                    return ctx.parsedUrl.href || '';
                }
                return '/app/login/index.html';
            }
        }
    ]
});

historyApiFallback({
    rewrites: [
        {
            from: /^\/libs\/(.*)$/,
            to(context) {
                return `/${context.match[2]}/${context.match[3]}`;
            }
        }
    ]
});
