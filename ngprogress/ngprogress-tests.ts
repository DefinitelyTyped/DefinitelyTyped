/// <reference path="./ngprogress.d.ts" />


var ngProgress: NgProgress.INgProgress = <any> {};

ngProgress.start();
ngProgress.height('10px');
ngProgress.color('red');
var statusResult: number = ngProgress.status();
ngProgress.stop();
ngProgress.set(50);
ngProgress.reset();
ngProgress.complete();

