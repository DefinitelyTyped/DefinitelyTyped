import toAbsoluteGlob = require('to-absolute-glob');

let result: string = toAbsoluteGlob('foo.*');
result = toAbsoluteGlob('/foo.*', {root: '/bar'});
result = toAbsoluteGlob('foo.*', {cwd: '/bar'});
result = toAbsoluteGlob('foo.*', {cwd: '/bar', root: '/bar'});
