/// <reference path="gulp-rename.d.ts" />
var rename : IGulpRename;

rename((dir, base, ext) => 'abc')
rename({ prefix: 'abc-' })
rename({ suffix: '-def' })
rename({ ext: '.ehi' })
rename({ prefix: 'abc-', suffix: '-def' })
rename({ prefix: 'abc-', suffix: '-def', ext: '.ehi' })
rename({ suffix: '-def', ext: '.ehi' })
