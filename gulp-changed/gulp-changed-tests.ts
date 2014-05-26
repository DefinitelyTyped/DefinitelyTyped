/// <reference path="gulp-changed.d.ts" />
var changed : IGulpChanged;

changed('dest')
changed('dest', { cwd: 'abc' })
changed('dest', { extension: 'abc' })
changed('dest', { cwd: 'abc', extension: 'abc' })

