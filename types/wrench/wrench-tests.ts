
import wrench = require('wrench');

var str: string;
var num: number;
var bool: boolean;
var strArr: string[];
var line: wrench.LineReader;

strArr = wrench.readdirSyncRecursive(str);
wrench.rmdirSyncRecursive(str);
wrench.rmdirSyncRecursive(str, bool);
wrench.copyDirSyncRecursive(str, str);
wrench.copyDirSyncRecursive(str, str, {
    preserve: bool
});
wrench.chmodSyncRecursive(str, num);
wrench.chownSyncRecursive(str, num, num);
wrench.mkdirSyncRecursive(str, num);
wrench.readdirRecursive(str, (err: Error, files: string[]) => {

});
wrench.rmdirRecursive(str, (err: Error) => {

});
wrench.copyDirRecursive(str, str, (err: Error) => {

});

line = new wrench.LineReader(str);
line = new wrench.LineReader(str, num);

str = line.getNextLine();
bool = line.hasNextLine();
num = line.getBufferAndSetCurrentPosition(num);
