import { IncomingMessage, ServerResponse } from 'http';
import Koa = require('koa');
import morgan = require('koa-morgan');

const app = new Koa();

app.use(morgan('combined'));
app.use(morgan('common'));
app.use(morgan('dev'));
app.use(morgan('short'));
app.use(morgan('tiny'));
app.use(morgan(':remote-addr :method :url'));

const tokenCallback: morgan.TokenCallbackFn = (req: IncomingMessage, res: ServerResponse): string => {
    if (req.headers['request-id']) {
        if (Array.isArray(req.headers['request-id'])) {
            return (req.headers['request-id'] as string[]).join(';');
        } else {
            return req.headers['request-id'] as string;
        }
    } else {
        return '-';
    }
};

morgan.token('id', tokenCallback);

const stream: morgan.StreamOptions = {
    write: (str: string) => {
        console.log(str);
    }
};

app.use(morgan('combined', {
    buffer: true,
    immediate: true,
    skip: (req: IncomingMessage, res: ServerResponse) => res.statusCode < 400,
    stream
}));

// test interface definition for morgan

// a named custom format defined as string (example: extend 'tiny' format with user-agent token)
morgan.format('tiny-extended', ':method :url :status :res[content-length] - :response-time ms :user-agent');
app.use(morgan('tiny-extended'));

// a named custom format defined using the Function signature (example: extend 'dev' format with user-agent token)

// extend morgan.FormatFn interface with memoizer property to avoid unnecessary re-compiling
// of status-code range driven colorized format functions
interface FormatFnIndexer {
    [memoizerName: string]: morgan.FormatFn;
}

interface ExtendedFormatFn extends morgan.FormatFn {
    memoizer?: FormatFnIndexer;
}

const developmentExtendedFormatLine: ExtendedFormatFn = (tokens, req: IncomingMessage, res: ServerResponse): string => {
    // get the status code if response written
    const status = res.statusCode
        ? res.statusCode
        : undefined;

    // get status color
    const color = status && status >= 500 ? 31 // red
        : status && status >= 400 ? 33 // yellow
        : status && status >= 300 ? 36 // cyan
        : status && status >= 200 ? 32 // green
        : 0; // no color

    // get colored format function, if previously memoized, otherwise undefined
    let fn: morgan.FormatFn|undefined = developmentExtendedFormatLine.memoizer ? developmentExtendedFormatLine.memoizer[color] : undefined;

    if (!fn) {
        if (!developmentExtendedFormatLine.memoizer) {
            developmentExtendedFormatLine.memoizer = {};
        }

        fn = developmentExtendedFormatLine.memoizer[color] = morgan.compile(
            `\x1b[0m:method :url \x1b[${color}m:status \x1b[0m:response-time ms - :res[content-length]\x1b[0m :user-agent`);
    }

    return fn(tokens, req, res);
};

developmentExtendedFormatLine.memoizer = {};

morgan.format('dev-extended', developmentExtendedFormatLine);
app.use(morgan('dev-extended'));
