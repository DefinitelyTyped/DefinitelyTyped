import * as fs from "node:fs";
import * as stringify from "json-stable-stringify";
import * as path from "node:path";
import { Configuration as Config, ILinterOptions, Linter, LintResult } from "tslint";
import ts from "typescript";
import { isExternalDependency } from "./dependencies";

/**
 * Represents a package from the linter's perspective.
 * For example, `DefinitelyTyped/types/react` and `DefinitelyTyped/types/react/v15` are different
 * packages.
 */
export class LintPackage {
    private files: ts.SourceFile[] = [];
    private program: ts.Program;

    constructor(private rootDir: string) {
        this.program = Linter.createProgram(path.join(this.rootDir, "tsconfig.json"));
    }

    config(): Config.RawConfigFile {
        return Config.readConfigurationFile(path.join(this.rootDir, "tslint.json"));
    }

    addFile(filePath: string): void {
        const file = this.program.getSourceFile(filePath);
        if (file) {
            this.files.push(file);
        }
    }

    lint(opts: ILinterOptions, config: Config.IConfigurationFile): LintResult {
        const linter = new Linter(opts, this.program);
        for (const file of this.files) {
            if (ignoreFile(file, this.rootDir, this.program)) {
                continue;
            }
            linter.lint(file.fileName, file.text, config);
        }
        return linter.getResult();
    }

    updateConfig(config: Config.RawConfigFile): void {
        fs.writeFileSync(
            path.join(this.rootDir, "tslint.json"),
            stringify(config, { space: 4 }),
            { encoding: "utf8", flag: "w" });
    }
}

function ignoreFile(file: ts.SourceFile, dirPath: string, program: ts.Program): boolean {
    return program.isSourceFileDefaultLibrary(file) || isExternalDependency(file, path.resolve(dirPath), program);
}
