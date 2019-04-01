import WebpackBar = require('webpackbar');

new WebpackBar();

new WebpackBar({ color: '#ff0000' });

new WebpackBar({ name: 'custom name here' });

new WebpackBar({ profile: false });

new WebpackBar({ fancy: false });

new WebpackBar({ basic: false });

new WebpackBar({
    reporter: {
        start: (context) => {},
    },
});

new WebpackBar({
    reporters: ['fancy'],
});
