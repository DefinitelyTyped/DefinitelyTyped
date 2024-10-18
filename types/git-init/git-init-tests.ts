import init = require("git-init");

// $ExpectType void
init((err: Error | null, stdout: any, stderr: any) => {
    // something here
});
// $ExpectType void
init("./something/", (err: Error | null, stdout: any, stderr: any) => {
    // something here
});
// @ts-expect-error
init(5);
// @ts-expect-error
init("./something", 5);
