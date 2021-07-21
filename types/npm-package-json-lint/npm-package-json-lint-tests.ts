import { NpmPackageJsonLint } from 'npm-package-json-lint';

new NpmPackageJsonLint({
    configFile: '/foo/bar',
    patterns: [],
});
new NpmPackageJsonLint({
    configFile: '/foo/bar',
    packageJsonObject: {},
});
new NpmPackageJsonLint({
    configFile: '/foo/bar',
    packageJsonObject: {},
    packageJsonFilePath: '/foo/bar/package.json',
});
const linter = new NpmPackageJsonLint({
    cwd: '/foo/bar',
    configFile: '/foo/bar/.npmpackagejsonlintrc.json',
    config: {
        rules: {
            'require-author': 'error',
        },
    },
    packageJsonObject: {
        author: 'foobar',
    },
    quiet: true,
    fix: false,
});

const linterResult = linter.lint();

linterResult.ignoreCount;
linterResult.errorCount;
linterResult.warningCount;
for (const result of linterResult.results) {
    result.filePath;
    result.ignored;
    result.errorCount;
    result.warningCount;
    for (const issue of result.issues) {
        issue.lintId;
        issue.severity;
        issue.node;
        issue.lintMessage;
    }
}
