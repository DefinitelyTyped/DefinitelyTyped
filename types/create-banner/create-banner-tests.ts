import createBanner = require('create-banner');

createBanner();
createBanner({ case: 'camel-case' });
createBanner({ case: 'camelCase' });
createBanner({ case: 'Title Case', template: 'inline' });
createBanner({
    template: `/*!
   * @name v@version
   * @license (c) @author.name
   */
  `,
});
createBanner({
    template: 'Hello world!',
});
createBanner({
    data: {
        name: 'Library.js',
    },
});
createBanner({
    case: 'param-case',
    data: {
        name: 'Library.js',
        date: new Date().toISOString(),
    },
});
