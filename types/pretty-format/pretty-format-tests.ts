import prettyFormat = require('pretty-format');

prettyFormat({ something: 'value' });

prettyFormat({ something: 'value' }, {
    plugins: [
        prettyFormat.plugins.ReactElement,
        prettyFormat.plugins.ReactTestComponent,
    ]
});
