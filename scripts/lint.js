// Usage: npm run lint -- my-package-name
const pkg = process.argv[2];
const execSync = require("child_process").execSync;
const existsSync = require("fs").existsSync;
const path = require("path");

// Path of tslint when `types-publisher` is symlinked
const symlinkedTslintPath = "../node_modules/types-publisher/node_modules/tslint"
const tslintPath =  existsSync(path.join(pkg, symlinkedTslintPath)) ? symlinkedTslintPath : "../node_modules/tslint";
const cmd = `node ${tslintPath}/lib/tslint-cli --format stylish "**/*.d.ts"`;
console.log(cmd);

try {
    // Child process writes directly to our own stdout
    execSync(cmd, { cwd: pkg, stdio: "inherit" });
} catch (_) {
    // Process should have printed out error info
}
