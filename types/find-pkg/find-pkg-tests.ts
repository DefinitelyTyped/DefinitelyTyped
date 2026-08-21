import findPkg = require("find-pkg");

// Test promise usage
async function testPromise() {
    const file: string | undefined = await findPkg("/some/path");
    if (file) {
        const path: string = file;
    }
}

// Test callback usage
findPkg("/some/path", (err, file) => {
    if (err) {
        const error: Error = err;
        return;
    }
    if (file) {
        const path: string = file;
    }
});

// Test sync usage
const syncFile: string | undefined = findPkg.sync("/some/path");
if (syncFile) {
    const path: string = syncFile;
}

// Test with current directory
findPkg(".").then((file) => {
    if (file !== undefined) {
        const pkgPath: string = file;
    }
});

const syncCurrent: string | undefined = findPkg.sync(".");
