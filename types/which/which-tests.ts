import which = require("which");

which.sync("cat"); // $ExpectType string

// Rewrite proomise to promise6 but using ExpectType
which("cat"); // $ExpectType Promise<string>
which("cat", { all: false }); // $ExpectType Promise<string>
which("cat", { all: true }); // $ExpectType Promise<readonly string[]>
which("cat", { nothrow: true }); // $ExpectType Promise<string | null>
which("cat", { all: true, nothrow: true }); // $ExpectType Promise<readonly string[] | null>

// @ts-expect-error -- `alll` is not a valid option
which("cat", { alll: true, nothrow: true }); // $ExpectError

// @ts-expect-error -- 42 is not a boolean | undefined
which("cat", { all: 42, nothrow: true }); // $ExpectError

// If we cannot infer the exact value passed to `all` or `nothrow`, we should give both options.
var b: boolean = Math.random() < 0.5;
which("cat", { all: b }); // $ExpectType Promise<string | readonly string[]>
which("cat", { nothrow: b }); // $ExpectType Promise<string | null>
which("cat", { all: b, nothrow: b }); // $ExpectType Promise<string | readonly string[] | null>

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
