import historyApiFallback = require('connect-history-api-fallback');
import express = require('express');

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

const htmlAcceptHeaders = ['text/html', 'application/xhtml+xml'] as const;
historyApiFallback({htmlAcceptHeaders});

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

const emptyArray = [] as const;
historyApiFallback({rewrites: emptyArray});

// Unfortunately this won't prevent a regression because of
// https://github.com/microsoft/TypeScript/issues/13347, however it's the right thing to test.
const options: {readonly index: string} = {
    index: 'index.html',
};
historyApiFallback(options);
