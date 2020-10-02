
import which = require("which");

which("cat", (err, path) => {
  console.log(path);
});

var path = which.sync("cat");
console.log(path);

which("cat", {all: true}, (err, paths) => {
  if(err) return;
  if(paths) {
    for(let path of paths) {
      console.log(path);
    }
  }
});

var promise: Promise<string> = which("cat");
var promise1: Promise<string> = which("cat", { all: false });
var promise2: Promise<string[]> = which("cat", { all: true });

var paths = which.sync("cat", {all: true});
for(let path of paths) {
  console.log(path);
}

var paths2 = which.sync("cat", {all: true, nothrow: true});
if(paths2 !== null) {
  for(let path of paths2) {
    console.log(path);
  }
}

var path2 = which.sync("cat", {path: 'replacement path', pathExt: 'replacement pathext'});
which("cat", {path: 'replacement path', pathExt: 'replacement pathext'}, (err, path) => {
  const a: string = path!;
});
