import twig = require('twig');

const value: any = '';
const str = '';
const bool = false;

const params: twig.Parameters = {
    id: value,
    path: value,
    base: value,
    blocks: value,
    macros: value,
    method: value,
    name: value,
    options: value,
    href: value,
    async: value,
};

const temp: twig.Template = twig.twig(params);

const result: string = temp.render();

const async_result: string | Promise<string> = temp.render(undefined, undefined, true);

function twig_async_param(b: boolean) {
    const maybe_async_result: string | Promise<string> = temp.render(undefined, undefined, b);
}

twig_async_param(true);
twig_async_param(false);

const compOpts: twig.CompileOptions = {
    filename: str,
    settings: {
        views: value,
        'twig options': value,
    },
};

twig.extendFilter('backwords', value => {
    return value.split(' ').reverse().join(' ');
});

twig.extendFilter(str, (left: any, params: any[] | false) => {
    return str;
});

twig.extendFunction(str, (...params: any[]) => {
    return str;
});

twig.extendTest(str, (value: any) => bool);
twig.extendTag(value);

const compiled = twig.compile(str, compOpts);

const renderOpts: twig.RenderOptions = {
    allowAsync: true,
    settings: value,
    sampleValue: value,
};

twig.renderFile(str, renderOpts, (err, result) => {});
twig.renderFile(str, (err, result) => {});

twig.__express(str, compOpts, (err, result) => {});
twig.cache(bool);

// expose the internal Twig object for extension
twig.extend(Twig => {
    Twig.exports.extendTag({
        // unique name for tag type
        type: 'flag',
        // regex match for tag (flag white-space anything)
        regex: /^flag\s+(.+)$/u,
        // this is a standalone tag and doesn't require a following tag
        next: [],
        open: true,

        // runs on matched tokens when the template is loaded. (once per template)
        compile(token) {
            const [, expression] = token.match;

            // compile returns the raw token, mutating it before returning
            // by adding "stack" and deleting the "value" property
            const compiled = Twig.expression.compile({ value: expression, type: 'my-type' });

            compiled.type; // $ExpectType string

            // while technically tokens don't start with this property,
            // this is a pattern used heavily in the library itself
            token.stack = Twig.expression.compile({
                value: expression,
            }).stack;

            return token;
        },

        // Runs when the template is rendered
        parse(token, context, chain) {
            // parse the tokens into a value with the render context
            const name = Twig.expression.parse.apply(this, [token.stack, context]);
            const output = '';

            return {
                chain,
                output,
            };
        },
    });
});
