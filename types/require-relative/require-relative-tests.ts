import relative = require('require-relative');

// requiring modules relatively
const someModule: any = relative('./some-module', '/home/kamicane');
const someLocalModule: any = relative('./some-module');

// resolving modules relatively
const someModulePath: string = relative.resolve('./some-module', '/home/kamicane');
const someLocalModulePath: string = relative.resolve('./some-module');
