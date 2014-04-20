/// <reference path="gulp-header.d.ts" />
var header : IGulpHeader;

header('template')
header('template', { data:'here' })
header.fromFile('path/to/file')
header.fromFile('path/to/file', { data:'here' })
