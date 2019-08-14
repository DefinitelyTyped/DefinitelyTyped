


declare const ngProgress: NgProgress.INgProgress;

ngProgress.start();
ngProgress.height('10px');
ngProgress.color('red');
var statusResult: number = ngProgress.status();
ngProgress.stop();
ngProgress.set(50);
ngProgress.reset();
ngProgress.complete();

