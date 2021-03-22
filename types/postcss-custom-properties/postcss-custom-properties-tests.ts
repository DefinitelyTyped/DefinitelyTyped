import postcss = require('postcss');
import postcssCustomProperties = require('postcss-custom-properties');
import { CustomPropertiesObject, Options } from 'postcss-custom-properties';

const css = `:root {
    --color: red;
  }

  h1 {
    color: var(--color);
  }`;

const pluginOptions: Options = {
    preserve: true,
    importFrom: 'path/to/file.css',
    exportTo: 'path/to/file.css',
};

const processOptions = {
    from: 'src/app.css',
    to: 'dest/app.css',
};

postcssCustomProperties.process(css, processOptions, pluginOptions);

postcss([postcssCustomProperties(pluginOptions)]).process(css, processOptions);

postcssCustomProperties({
    importFrom: 'path/to/file.css',
});

postcssCustomProperties({
    importFrom: [
        'path/to/file.css',
        'and/then/this.js',
        'and/then/that.json',
        {
            customProperties: { '--color': 'red' },
        },
        () => {
            const customProperties = { '--color': 'red' };

            return { customProperties };
        },
    ],
});

postcssCustomProperties({
    exportTo: 'path/to/file.css', // :root { --color: red; }
});

const customProperties = {
    '--ref-color': 'var(--color)',
    '--color': 'rgb(255, 0, 0)',
    '--color-h': '0',
    '--color-s': '100%',
    '--color-l': '50%',
    '--color-hsl': 'hsl(var(--color-h), var(--color-s), var(--color-l))',
    '--circular': 'var(--circular-2)',
    '--circular-2': 'var(--circular)',
    '--margin': '0 10px 20px 30px',
    '--theme-color': '#053',
};

const cachedObject: CustomPropertiesObject = {
    customProperties,
};

postcssCustomProperties({
    exportTo: [
        'path/to/file.css',
        'and/then/this.js',
        'and/then/this.mjs',
        'and/then/that.json',
        cachedObject,
        (customProperties: CustomPropertiesObject) => {
            customProperties;
        },
    ],
});
