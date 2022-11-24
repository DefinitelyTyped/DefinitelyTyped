import packlist = require('npm-packlist');

let result: string[] = packlist.sync();
result = packlist.sync({});
result = packlist.sync({path: 'foo'});
result = packlist.sync({path: 'foo', packageJsonCache: new Map().set('test', 'test')});
(async () => {
    result = await packlist();
    result = await packlist({});
    result = await packlist({path: 'foo'});
    packlist(undefined, (r) => result = r);
    packlist({path: 'foo'}, (r) => result = r);
})();
