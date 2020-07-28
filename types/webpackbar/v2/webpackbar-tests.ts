import WebpackBar = require('webpackbar');

new WebpackBar();

new WebpackBar({ color: '#ff0000' });

new WebpackBar({ stream: process.stdout });

new WebpackBar({ done: (sharedState, ctx) => {} });
