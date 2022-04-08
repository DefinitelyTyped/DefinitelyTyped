import StringReplacePlugin = require('string-replace-webpack-plugin');

StringReplacePlugin.replace('babel-loader', {
    replacements: [
        {
            // Taken from:
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter
            pattern: /([^\d]*)(\d*)([^\w]*)/,
            replacement: (match, p1, p2, p3, offset, string) => {
                // p1 is nondigits, p2 digits, and p3 non-alphanumerics
                return [p1, p2, p3].join(' - ');
            }
        }
    ]
});

new StringReplacePlugin();
