// Usage: npm run lint -- my-package-name
const pkg = process.argv[2];
const execSync = require("child_process").execSync;
const cmd = `node node_modules/tslint/lib/tslint-cli --format stylish ${pkg}/**/*.d.ts`;
console.log(cmd);
try {
    // Child process writes directly to our own stdout
    execSync(cmd, { stdio: "inherit" });
} catch (_) {
    // Process should have printed out error info
}
