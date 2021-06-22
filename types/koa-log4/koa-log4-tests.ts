import Koa = require('koa');
import KoaLog4 = require('koa-log4');

const DEFAULT_FORMAT = ':remote-addr - -' +
    ' ":method :url HTTP/:http-version"' +
    ' :status :content-length ":referrer"' +
    ' ":user-agent"';

const DEFAULT_OPTIONS: KoaLog4.Options = {
    format: DEFAULT_FORMAT,
    level: KoaLog4.levels.INFO
};

const koaLog4Mid = KoaLog4.koaLogger(KoaLog4.getLogger(), DEFAULT_OPTIONS);

const app = new Koa();
app.use(koaLog4Mid);
app.listen(80);
