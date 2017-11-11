import * as find from "find";

const stringPattern = ".d.ts";
const regexPattern = /ts(config|lint)\.json/;
const rootDir = ".";

const emptyCb = (): void => { };
const errorCb = (err: Error): void => { };
const stringArrayCallback = (paths: string[]): void => { };
const singleStringCb = (paths: string): void => { };

find.file(rootDir, (dirs: string[]): void => { }).error(emptyCb);
find.file(rootDir, (dirs: string[]): void => { }).error(errorCb);
find.file(stringPattern, rootDir, (dirs: string[]): void => { }).error(errorCb);
find.file(regexPattern, rootDir, (dirs: string[]): void => { }).error(errorCb);
find.fileSync(rootDir).push("");
find.fileSync(stringPattern, rootDir).push("");
find.fileSync(regexPattern, rootDir).push("");
find.eachFile(rootDir, singleStringCb).end(emptyCb).error(errorCb).end(emptyCb);
find.eachFile(stringPattern, rootDir, singleStringCb).end(emptyCb).error(errorCb).end(emptyCb);
find.eachFile(regexPattern, rootDir, singleStringCb).end(emptyCb).error(errorCb).end(emptyCb);

find.dir(stringPattern, rootDir, (dirs: string[]): void => { }).error(emptyCb);
find.dir(stringPattern, rootDir, (dirs: string[]): void => { }).error(errorCb);
find.dir(regexPattern, rootDir, (dirs: string[]): void => { }).error(errorCb);
find.dir(rootDir, (dirs: string[]): void => { }).error(errorCb);
find.dirSync(rootDir).push("");
find.dirSync(stringPattern, rootDir).push("");
find.dirSync(regexPattern, rootDir).push("");
find.eachDir(rootDir, singleStringCb).end(emptyCb).error(errorCb).end(emptyCb);
find.eachDir(stringPattern, rootDir, singleStringCb).end(emptyCb).error(errorCb).end(emptyCb);
find.eachDir(regexPattern, rootDir, singleStringCb).end(emptyCb).error(errorCb).end(emptyCb);
