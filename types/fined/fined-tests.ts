import fined = require('fined');

// $ExpectType Result | null
fined({ path: 'path/to/file', extensions: ['.js', '.json'] });

const opts = {
    name: '.app',
    cwd: '.',
    extensions: {
        rc: 'default-rc-loader',
        '.yml': 'default-yml-loader',
    },
};

fined({ path: '.' }, opts);
fined({ path: '~', extensions: { rc: 'some-special-rc-loader' } }, opts);
fined({ path: '~' }, {});
fined({ path: '~' }, { extensions: '.ext' });
