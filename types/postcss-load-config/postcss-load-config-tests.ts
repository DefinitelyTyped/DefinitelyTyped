import postcss = require("postcss");
import postcssrc = require("postcss-load-config");

postcssrc();
postcssrc({ map: { inline: true } });
postcssrc({ env: 'development' }, 'path');
postcssrc({ from: 'from', to: 'to' }, 'path', { cache: true }).then(({ options, plugins }) => {
    postcss(plugins).process('css', options);
});

postcssrc.sync({ parser: 'my-parser' }, 'path', { cache: true });
