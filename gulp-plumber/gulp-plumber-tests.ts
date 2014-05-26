/// <reference path="gulp-plumber.d.ts" />
var plumber : IGulpPlumber;

plumber()
plumber({ inherit: true })
plumber({ errorHandler: true })
plumber({ inherit: true, errorHandler: true })
