import postcss from 'postcss';
import postcssMixins = require('postcss-mixins');

// Using with postcss with and without config
postcss([postcssMixins]);
postcss([postcssMixins()]);
postcss([postcssMixins({})]);

// Defining mixins
postcssMixins({
    mixins: {
        // Modfifying the mixin directly
        mixinFn1(mixin, arg1, arg2) {
            arg1; // $ExpectType string
            arg2; // $ExpectType string

            const rule = postcss.rule();
            rule.append(mixin.nodes);
            mixin.replaceWith(rule);
        },

        // Returning new nodes
        mixinFn2(_mixin, color) {
            return {
                top: 10,
                '&:hover': { color },
            };
        },

        // @ts-expect-error
        invalidFn() {
            return 1234;
        },

        // Mixin object
        mixinObj: {
            top: 10,
            '&:hover': { color: 'red' },
        },
    },
});

postcssMixins({ mixinsDir: './mixins' });
postcssMixins({ mixinsDir: ['./mixins'] });

postcssMixins({ mixinsFiles: './mixins/!(*.spec.js)' });
postcssMixins({ mixinsFiles: ['./mixins/!(*.spec.js)'] });

postcssMixins({ silent: true });
