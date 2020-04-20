import Filter = require('bad-words');

new Filter();
new Filter({
    emptyList: true,
    list: [],
    exclude: [],
    placeHolder: 'a',
    regex: /a/,
    replaceRegex: /a/,
    splitRegex: /a/,
});
const f = new Filter();
f.addWords('a', 'b', 'c');
const clean: string = f.clean('something dirty');
const profane: boolean = f.isProfane('something dirty');
f.removeWords('a', 'b', 'c');
const replace: string = f.replaceWord('a');
