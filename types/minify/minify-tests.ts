import minify = require('minify');
import { Options } from 'minify';

const options: Options = {
    html: {
        removeAttributeQuotes: false,
        removeOptionalTags: false,
    },
    css: {
        compatibility: '*',
    },
    js: {
        ecma: 5,
    },
    img: {
        maxSize: 4096,
    },
};

minify('./client.js'); // $ExpectType Promise<string>
minify('./client.js', options); // $ExpectType Promise<string>

(async () => {
    const data = await minify('./client.js', options); // $ExpectType string
})();
