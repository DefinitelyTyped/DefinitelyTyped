import * as fs from "node:fs";
import * as stringify from "json-stable-stringify";
import * as path from "node:path";
import { Configuration as Config, Linter } from "tslint";
import { isExternalDependency } from "./dependencies";

/**
 * Represents a package from the linter's perspective.
 * For example, `DefinitelyTyped/types/react` and `DefinitelyTyped/types/react/v15` are different
 * packages.
 */
export class LintPackage {
    /** @type {import("typescript").SourceFile[]} */
    #files = [];
    #rootDir;
    #program;

    /**
     * @param {string} rootDir
     */
    constructor(rootDir) {
        this.#rootDir = rootDir;
        this.#program = Linter.createProgram(path.join(this.#rootDir, "tsconfig.json"));
    }

    config() {
        return Config.readConfigurationFile(path.join(this.#rootDir, "tslint.json"));
    }

    /**
     * @param {string} filePath
     */
    addFile(filePath) {
        const file = this.#program.getSourceFile(filePath);
        if (file) {
            this.#files.push(file);
        }
    }

    /**
     * @param {import("tslint").ILinterOptions} opts
     * @param {import("tslint").Configuration.IConfigurationFile} config
     */
    lint(opts, config) {
        const linter = new Linter(opts, this.#program);
        for (const file of this.#files) {
            if (ignoreFile(file, this.#rootDir, this.#program)) {
                continue;
            }
            linter.lint(file.fileName, file.text, config);
        }
        return linter.getResult();
    }

    /**
     * @param {import("tslint").Configuration.RawConfigFile} config
     */
    updateConfig(config) {
        fs.writeFileSync(path.join(this.#rootDir, "tslint.json"), stringify(config, { space: 4 }), {
            encoding: "utf8",
            flag: "w",
        });
    }
}

/**
 * @param {import("typescript").SourceFile} file
 * @param {string} dirPath
 * @param {import("typescript").Program} program
 */
function ignoreFile(file, dirPath, program) {
    return program.isSourceFileDefaultLibrary(file) || isExternalDependency(file, path.resolve(dirPath), program);
}
