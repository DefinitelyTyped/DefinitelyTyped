import ziggy = require('ziggy-js');

new ziggy.Router();

// $ExpectType Router
ziggy.default();

// $ExpectType string
ziggy.default("test");

const Ziggy = {
    routes:  {
        'posts.show': {
            uri: 'posts/{post}',
            methods:  [
                'GET' as const,
                'HEAD' as const
            ]
        }
    },
    defaults: {},
    url: 'https://ziggy.test',
};

// $ExpectType string
ziggy.default("posts.show", 1, undefined, Ziggy);           // 'https://ziggy.test/posts/1'

// $ExpectType string
ziggy.default("posts.show", [1], undefined, Ziggy);         // 'https://ziggy.test/posts/1'

// $ExpectType string
ziggy.default("posts.show", { post: 1 }, undefined, Ziggy); // 'https://ziggy.test/posts/1'

// $ExpectType Router
ziggy.default(undefined, undefined, undefined, Ziggy);

// $ExpectType boolean
new ziggy.Router().current("test");

// $ExpectType string | undefined
new ziggy.Router().current();
