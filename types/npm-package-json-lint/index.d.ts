// Type definitions for npm-package-json-lint 5.1
// Project: https://github.com/tclindner/npm-package-json-lint
// Definitions by: Hannes Leutloff <https://github.com/yeldiRium>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface LintIssue {
    lintId: string;
    severity: 'error' | 'warning';
    node: 'string';
    lintMessage: 'string';
}

interface FileLintResult {
    filePath: string;
    issues: LintIssue[];
    ignored: boolean;
    errorCount: number;
    warningCount: number;
}

interface LinterResult {
    results: FileLintResult[];
    ignoreCount: number;
    errorCount: number;
    warningCount: number;
}

type NpmPackageJsonLintOptions = {
    cwd?: string;
    config?: object;
    configFile: string;
    configBaseDirectory?: string;
    quiet?: boolean;
    ignorePath?: string;
    fix?: boolean;
} & (
    | {
          packageJsonObject: object;
          packageJsonFilePath?: string;
      }
    | {
          patterns: string[];
      }
);

declare class NpmPackageJsonLint {
    constructor(options: NpmPackageJsonLintOptions);

    lint(): LinterResult;
}

export { FileLintResult, LinterResult, LintIssue, NpmPackageJsonLint };
