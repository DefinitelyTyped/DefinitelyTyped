import Serverless = require('../index');

declare class Utils {
    constructor(serverless: Serverless);

    getVersion(): string;
    dirExistsSync(dirPath: string): boolean;
    fileExistsSync(filePath: string): boolean;
    writeFileDir(filePath: string): void;
    writeFileSync(filePath: string, contents: string): void;
    writeFile(filePath: string, contents: string): PromiseLike<{}>;
    appendFileSync(filePath: string, contents: string): PromiseLike<{}>;
    readFileSync(filePath: string): {};
    readFile(filePath: string): PromiseLike<{}>;
    walkDirSync(dirPath: string): string[];
    copyDirContentsSync(srcDir: string, destDir: string): void;
    generateShortId(length: number): string;
    findServicePath(): string;
    logStat(serverless: Serverless, context: string): PromiseLike<{}>;
}

export = Utils;
