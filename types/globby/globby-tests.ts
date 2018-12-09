import { IOptions } from 'glob';

import globby = require('globby');

(async () => {
    let result: string[];

    /**
     * Standard `pattern` usage
     */
    result = await globby('*.tmp');
    result = await globby(['a.tmp', '*.tmp', '!{c,d,e}.tmp']);

    result = globby.sync('*.tmp');
    result = globby.sync(['a.tmp', '*.tmp', '!{c,d,e}.tmp']);

    /**
     * `expandDirectories` option
     */
    result = await globby('*.tmp', { expandDirectories: false });
    result = globby.sync('*.tmp', { expandDirectories: false });
    result = await globby('*.tmp', { expandDirectories: ['a*', 'b*'] });
    result = globby.sync('*.tmp', { expandDirectories: ['a*', 'b*'] });
    result = await globby('*.tmp', {
        expandDirectories: {
            files: ['a', 'b'],
            extensions: ['tmp']
        }
    });
    result = globby.sync('*.tmp', {
        expandDirectories: {
            files: ['a', 'b'],
            extensions: ['tmp']
        }
    });

    /**
     * Options passed through from `fast-glob`
     */
    result = await globby('*.tmp', { ignore: ['**/b.tmp'] });
    result = globby.sync('*.tmp', { ignore: ['**/b.tmp'] });
})();

const tasks: Array<{
    pattern: string;
    options: IOptions;
}> = globby.generateGlobTasks(['*.tmp', '!b.tmp'], { ignore: ['c.tmp'] });

console.log(globby.hasMagic('**'));
console.log(globby.hasMagic(['**', 'path1', 'path2']));
console.log(!globby.hasMagic(['path1', 'path2']));

(async () => {
    let result: (path: string) => boolean;

    /**
     * Standard `gitignore` usage
     */
    result = await globby.gitignore();
    result = globby.gitignore.sync();

    /** With options */
    result = await globby.gitignore({
        cwd: __dirname,
        ignore: ['**/b.tmp']
    });
    result = globby.gitignore.sync({
        cwd: __dirname,
        ignore: ['**/b.tmp']
    });
})();
