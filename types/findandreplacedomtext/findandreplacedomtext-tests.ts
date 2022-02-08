import findAndReplaceDOMText from 'findandreplacedomtext';

// Mock functions
const forcedAContext = (el: HTMLElement) => {
    return el.nodeName.toLowerCase() === 'a';
};

// Init some HTML node
const d = document.createElement('div');
d.innerHTML = 'This is a test';

// Tests
findAndReplaceDOMText(d, { find: /TEST/, wrap: 'x' });

findAndReplaceDOMText(d, { find: '??test', wrap: 'x' });

findAndReplaceDOMText(d, { find: /x+/, wrap: 'z' });

findAndReplaceDOMText(d, { find: /(TEST)hello/, wrap: 'x', replace: '$1' });

findAndReplaceDOMText(d, { find: /(TEST)hello/g, wrap: 'x', replace: '$1' });

findAndReplaceDOMText(d, { find: /\s(TEST)(hello)/g, wrap: 'x', replace: '$2' });

findAndReplaceDOMText(d, { find: /\bat\b/, wrap: 'x' });

findAndReplaceDOMText(d, { find: /\bat\b/g, wrap: 'x' });

findAndReplaceDOMText(d, {
    find: /\bAAA\b/,
    wrap: 'x',
    forceContext: el => {
        return el.nodeName.toLowerCase() === 'p';
    },
});

findAndReplaceDOMText(d, { find: /FooBar/, wrap: 'x' });

findAndReplaceDOMText(d, { find: /FooBar/, wrap: 'x', forceContext: true });

findAndReplaceDOMText(d, { find: /FooBar/, wrap: 'x', forceContext: false });

findAndReplaceDOMText(d, { find: /FooBar/, wrap: 'x', forceContext: forcedAContext });

findAndReplaceDOMText(d, { find: /FooBar/, wrap: 'x', forceContext: forcedAContext });

findAndReplaceDOMText(d, {
    find: /test/gi,
    replace: portion => {
        const e = document.createElement('x');
        e.className = 'f';
        e.appendChild(document.createTextNode(portion.text));
        return e;
    },
});

findAndReplaceDOMText(d, {
    find: /test/gi,
    wrap: document.createElement('z'),
});

findAndReplaceDOMText(d, { find: /x/, wrap: 'em' });

findAndReplaceDOMText(d, {
    find: /a/g,
    replace: portion => {
        return document.createTextNode('b' + portion.text);
    },
});

findAndReplaceDOMText(d, {
    find: 'foo',
    replace: 'bar',
});

findAndReplaceDOMText(d, {
    find: /(\d+)/g,
    replace: 'aaa$1',
});

findAndReplaceDOMText(d, {
    find: /(a)(b)(c)/g,
    replace: '$3$2$1',
});

findAndReplaceDOMText(d, {
    find: /[a-z]{2}/g,
    replace: '_$0_$&_',
});

findAndReplaceDOMText(d, {
    find: /\ba\b/,
    replace: '[$`]',
});

findAndReplaceDOMText(d, {
    find: /\ba\b/,
    replace: "[$']",
});

findAndReplaceDOMText(d, {
    find: /(1+)(\s+)?(3+)/g,
    replace: '$3$2$1',
});

findAndReplaceDOMText(d, {
    find: /foo/g,
    wrap: 'span',
    filterElements: el => {
        return !/^(?:script|style)$/i.test(el.nodeName);
    },
});

findAndReplaceDOMText(d, {
    find: /foo/g,
    wrap: 'span',
    filterElements: el => {
        return 'script' !== el.nodeName.toLowerCase();
    },
});

findAndReplaceDOMText(d, {
    find: /\w{2}/g,
    replace: '$`',
}).revert();

findAndReplaceDOMText(d, {
    find: /\ba\b/,
    replace: 'something',
}).revert();

findAndReplaceDOMText(d, {
    find: /\d{5}/g,
    wrap: 'span',
}).revert();

findAndReplaceDOMText(d, { find: /FooBar/, wrapClass: 'my-class' });

findAndReplaceDOMText(d, {
    find: /hello/i,
    wrap: 'span',
    portionMode: 'first',
});

findAndReplaceDOMText(d, {
    find: /hello/i,
    wrap: 'span',
    portionMode: 'retain',
});

findAndReplaceDOMText(d, {
    find: /123/g,
    replace: '999',
    preset: 'prose',
});

findAndReplaceDOMText(d, {
    find: /A+/g,
    replace: portion => {
        return portion.indexInMatch;
    },
});

findAndReplaceDOMText(d, {
    find: /A+/g,
    replace: portion => {
        return portion.indexInMatch;
    },
});

findAndReplaceDOMText(d, {
    find: /A+/g,
    replace: portion => {
        return portion.indexInMatch;
    },
});
