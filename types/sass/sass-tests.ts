import * as sass from 'sass';

sass.renderSync({
    file: 'index.scss',
    sourceMap: true,
    verbose: true,
    quietDeps: true,
    logger: {
        warn: (message, options) => {
            // $ExpectType boolean
            options.deprecation;
            if (options.span) {
                const log = `${options.span.url}:${options.span.start.line}:${options.span.start.column}`;
            } else {
                const log = `::: ${message}\n`;
            }
        },
        debug: (message, options) => {
            if (options.span) {
                const log = `${options.span.url}:${options.span.start.line}:${options.span.start.column}`;
            } else {
                const log = `::: ${message}\n`;
            }
        },
    },
    outFile: 'index.css',
});

const n0: sass.types.Number = new sass.types.Number(0);
const m: sass.types.Map = new sass.types.Map(3);
const t: sass.types.Boolean = sass.types.Boolean.TRUE;
const s: sass.types.String = new sass.types.String('foo');
m.setValue(0, t);
m.setValue(1, sass.types.Null.NULL);
m.setValue(2, s);
