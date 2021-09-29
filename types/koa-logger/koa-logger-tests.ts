import koa = require('koa');
import logger = require('koa-logger');

const app = new koa();
app.use(logger());
app.use(
    logger((str, args) => {
        const [format, method, url, status, time, length] = args;
        console.log(str);
        console.log({
            format,
            method,
            url,
            status,
            time,
            length,
        });
    }),
);
app.use(
    logger({
        transporter: (str, args) => {
            const [format, method, url, status, time, length] = args;
            console.log(str);
            console.log({
                format,
                method,
                url,
                status,
                time,
                length,
            });
        },
    }),
);
