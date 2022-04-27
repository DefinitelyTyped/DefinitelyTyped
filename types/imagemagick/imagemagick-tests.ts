import imagemagick = require('imagemagick');
import child_process = require('child_process');

var str: string = null;
var num: number = 0;
var cp: child_process.ChildProcess;

cp = imagemagick.identify(str, (err: Error, res: imagemagick.Features) => {
    str = res.format;
    num = res.width;
    num = res.height;
    num = res.depth;
});

cp = imagemagick.convert(str, num, (err: Error, res: any) => {

});

cp = imagemagick.resize({
    width: num,
    height: num
}, (err: Error, res: any) => {

});
