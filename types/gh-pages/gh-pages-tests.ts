/// <reference types="node" />
import ghpages = require('gh-pages');

const dir = './';
const emptyOptions = {};
const callback = (err: any) => {};

ghpages.publish(dir, callback);
ghpages.publish(dir, emptyOptions, callback);
ghpages.publish('dist', { history: false }, callback);
ghpages.publish(
    'dist',
    {
        remove: '*.json',
        repo: `https://${process.env.GH_TOKEN}@github.com/user/private-repo.git`,
        silent: true,
        git: '/path/to/git',
        user: {
            name: 'Daniel',
            email: 'daniel@example.com',
        },
        history: true,
    },
    callback,
);

ghpages.defaults.remote; // $ExpectType string
