import { IOptions } from 'glob';

import globby = require("globby");

(async () => {
    let result: string[];
    result = await globby('*.tmp');
    result = await globby(['a.tmp', '*.tmp', '!{c,d,e}.tmp']);

    result = globby.sync('*.tmp');
    result = globby.sync(['a.tmp', '*.tmp', '!{c,d,e}.tmp']);

    result = await globby('*.tmp', Object.freeze({ignore: []}));
    result = globby.sync('*.tmp', Object.freeze({ignore: []}));

    result = await globby('*.tmp', Object.freeze({onlyDirectories: true}));
    result = globby.sync('*.tmp', Object.freeze({onlyDirectories: true}));
})();

const tasks: Array<{
    pattern: string,
    options: IOptions
}> = globby.generateGlobTasks(['*.tmp', '!b.tmp'], {ignore: ['c.tmp']});

console.log(globby.hasMagic('**'));
console.log(globby.hasMagic(['**', 'path1', 'path2']));
console.log(!globby.hasMagic(['path1', 'path2']));
