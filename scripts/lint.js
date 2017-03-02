// Usage: npm run lint -- my-package-name
const pkg = process.argv[2];
const execSync = require("child_process").execSync;
const existsSync = require("fs").existsSync;
const path = require("path");

// Path of tslint when `types-publisher` is symlinked
const symlinkedTslintPath = "../node_modules/types-publisher/node_modules/tslint"
let tslintPath =  existsSync(path.join(pkg, symlinkedTslintPath)) ? symlinkedTslintPath : "../node_modules/tslint";
// An older version (e.g. abs/v0) is in a nested directory, so needs to look one more level up for tslint.
if (pkg.includes("/") && pkg[pkg.length - 1] !== "/") {
    tslintPath = path.join("..", tslintPath);
}

const cmd = `node ${tslintPath}/lib/tslint-cli --format stylish "**/*.ts"`;
console.log(cmd);

try {
    // Child process writes directly to our own stdout
    execSync(cmd, { cwd: pkg, stdio: "inherit" });
} catch (_) {
    // Process should have printed out error info
}
