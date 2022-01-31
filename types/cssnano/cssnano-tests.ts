import cssnano = require('cssnano');

cssnano();
cssnano({
    configFile: '/path/to/config',
});
cssnano({
    preset: 'default',
});
cssnano({
    preset: [
        'default',
        {
            discardComments: {
                removeAll: true,
            },
        },
    ],
});
