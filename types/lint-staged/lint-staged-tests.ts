import type { Config } from "lint-staged";

let config: Config;

// https://github.com/okonet/lint-staged#lintstagedrc-example
config = {
    "*": "your-cmd",
};

// https://github.com/okonet/lint-staged#task-concurrency
config = {
    "*.ts": "eslint",
    "*.md": "prettier --list-different",
};
config = {
    "*.ts": ["prettier --list-different", "eslint"],
    "*.md": "prettier --list-different",
};

const micromatch = (allStagedFiles: string[], patterns: string[]) => [] as string[];

// https://github.com/okonet/lint-staged#example-export-a-function-to-build-your-own-matchers
config = allStagedFiles => {
    const shFiles = micromatch(allStagedFiles, ["**/src/**/*.sh"]);
    if (shFiles.length) {
        return `printf '%s\n' "Script files aren't allowed in src directory" >&2`;
    }
    const codeFiles = micromatch(allStagedFiles, ["**/*.js", "**/*.ts"]);
    const docFiles = micromatch(allStagedFiles, ["**/*.md"]);
    return [`eslint ${codeFiles.join(" ")}`, `mdl ${docFiles.join(" ")}`];
};

// https://github.com/okonet/lint-staged#example-wrap-filenames-in-single-quotes-and-run-once-per-file
config = {
    "**/*.js?(x)": filenames => filenames.map(filename => `prettier --write '${filename}'`),
};

// https://github.com/okonet/lint-staged#example-run-tsc-on-changes-to-typescript-files-but-do-not-pass-any-filename-arguments
config = {
    "**/*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
};

// https://github.com/okonet/lint-staged#example-run-eslint-on-entire-repo-if-more-than-10-staged-files
config = {
    "**/*.js?(x)": filenames => (filenames.length > 10 ? "eslint ." : `eslint ${filenames.join(" ")}`),
};
