/// <reference path="gulp-footer.d.ts" />
var footer : IGulpFooter;

footer('template')
footer('template', { data:'here' })
footer.fromFile('path/to/file')
footer.fromFile('path/to/file', { data:'here' })
