import twig = require('twig');

const value: any = "";
const str = "";
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
    async: value
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
        'twig options': value
    }
};

twig.extendFilter(str, (left: any, ...params: any[]) => {
    return str;
});

twig.extendFunction(str, (...params: any[]) => {
    return str;
});

twig.extendTest(str, (value: any) => bool);
twig.extendTag(value);

const compiled = twig.compile(str, compOpts);

twig.renderFile(str, compOpts, (err, result) => {
});

twig.renderFile(str, {}, (err, result) => {
});

twig.renderFile(str, (err, result) => {
}, null);

twig.__express(str, compOpts, (err, result) => {
});
twig.cache(bool);
