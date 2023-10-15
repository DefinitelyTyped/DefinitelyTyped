import which = require("which");

const path = which.sync("cat"); // $ExpectType string

const promise: Promise<string> = which("cat");
const promise1: Promise<string> = which("cat", { all: false });
const promise2: Promise<string[]> = which("cat", { all: true });
const promise3: Promise<string> = which("cat", { nothrow: true });

which("node")
    .then(resolvedPath => {
        resolvedPath; // $ExpectType string
    })
    .catch(er => {});

(async () => {
    const path = await which("cat");
});

const paths = which.sync("cat", { all: true });
for (const path of paths) {
    path; // $ExpectType string
}

const paths2 = which.sync("cat", { all: true, nothrow: true });
if (paths2 !== null) {
    for (const path of paths2) {
        path; // $ExpectType string
    }
}

const path2 = which.sync("cat", { path: "replacement path", pathExt: "replacement pathext" });
which.sync("cat"); // $ExpectType string
