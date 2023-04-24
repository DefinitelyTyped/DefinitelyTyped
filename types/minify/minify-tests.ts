import { minify, Options } from 'minify';

const options: Options = {
    html: {
        removeAttributeQuotes: false,
        removeOptionalTags: false,
        caseSensitive: true,
    },
    css: {
        compatibility: '*',
        sourceMap: true,
    },
    js: {
        ecma: 5,
        compress: true,
    },
    img: {
        maxSize: 4096,
    },
};

minify('./client.js'); // $ExpectType Promise<string>
minify('./client.js', options); // $ExpectType Promise<string>

async () => {
    const data = await minify('./client.js', options); // $ExpectType string
};

// js
async () => {
    const js = 'function isTrueFalse() { if (true !== false) { return true; } }';
    const options = {
        js: {
            compress: {
                booleans_as_integers: true,
            },
        },
    };
    const minifyOutput = await minify.js(js, options);
};

// html
async () => {
    const html = '<html>\n<body>\nhello world\n</body></html>';
    const options = {
        removeComments: true,
        removeCommentsFromCDATA: true,
    };
    const minifyOutput = await minify.html(html);
};

// css
async () => {
    const css = 'color: #FFFFFF';
    const minifyOutput = await minify.css(css);
};

// img
async () => {
    const css = `.double-quote {
        background: url("../img/background-pattern.gif");
      }`;
    const minifyOutput = await minify.img('img', css);
};
