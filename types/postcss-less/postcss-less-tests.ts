import postcss = require('postcss');
import less = require('postcss-less');

const lessCode = `
@import "foo.less";
a { @link-color: blue; }
.my-mixin(#FFF);
.my-mixin-important(#FFF) !important;
each(@selectors, {
  .sel-@{value} {
    a: b;
  }
});
`;

postcss().process(lessCode, { syntax: less });

less.parse(lessCode).walkAtRules(atRule => {
    const lessAtRule = atRule as less.AtRule;

    if ('import' in lessAtRule) {
        assert(lessAtRule.import === true);
        assert(typeof lessAtRule.filename === 'string');

        const { options } = lessAtRule;
        if (options) {
            assert(typeof options === 'string');
        } else {
            assert(options === undefined);
        }
    }

    if ('variable' in lessAtRule) {
        assert(lessAtRule.variable === true);
        assert(typeof lessAtRule.value === 'string');
    }

    if ('mixin' in lessAtRule) {
        assert(lessAtRule.mixin === true);

        const { important } = lessAtRule;
        if (important) {
            assert(important === true);
        } else {
            assert(important === undefined);
        }
    }

    if ('function' in lessAtRule) {
        assert(lessAtRule.function === true);
    }
});

less.parse('.a:extend(.b) {}').walkRules(rule => {
    const lessRule = rule as less.Rule;
    assert(lessRule.extend === true);
});

less.parse('&:extend(.a)').walkDecls(decl => {
    const lessDecl = decl as less.Declaration;
    assert(lessDecl.extend === true);
});

less.parse('// a').walkComments(comment => {
    const lessComment = comment as less.Comment;
    assert(lessComment.inline === true);
});

less.stringify(less.parse(lessCode), (part, node, type) => {
    assert(typeof part === 'string');

    if (node) {
        assert(typeof node.root === 'function');
    } else {
        assert(node === undefined);
    }

    if (type) {
        assert(type === 'start' || type === 'end');
    } else {
        assert(type === undefined);
    }
});

assert(typeof less.nodeToString(less.parse(lessCode)) === 'string');

function assert(condition: any) {
    if (!condition) {
        throw new Error('Assertion failed');
    }
}
