import * as find from "find";

const stringPattern = ".d.ts";
const regexPattern = /ts(config|lint)\.json/;
const rootDir = ".";

const emptyCb = (): void => { };
const errorCb = (err: Error): void => { };
const stringArrayCallback = (paths: string[]): void => { };
const singleStringCb = (paths: string): void => { };

find.file(rootDir, (dirs: string[]): void => { }).error(emptyCb); // $ExpectType void
find.file(rootDir, (dirs: string[]): void => { }).error(errorCb); // $ExpectType void
find.file(stringPattern, rootDir, (dirs: string[]): void => { }).error(errorCb); // $ExpectType void
find.file(regexPattern, rootDir, (dirs: string[]): void => { }).error(errorCb); // $ExpectType void
find.fileSync(rootDir); // $ExpectType string[]
find.fileSync(stringPattern, rootDir); // $ExpectType string[]
find.fileSync(regexPattern, rootDir); // $ExpectType string[]
find.eachFile(rootDir, singleStringCb).end(emptyCb).error(errorCb).end(emptyCb); // $ExpectType FindEachStream
find.eachFile(stringPattern, rootDir, singleStringCb).end(emptyCb).error(errorCb).end(emptyCb); // $ExpectType FindEachStream
find.eachFile(regexPattern, rootDir, singleStringCb).end(emptyCb).error(errorCb).end(emptyCb); // $ExpectType FindEachStream

find.dir(stringPattern, rootDir, (dirs: string[]): void => { }).error(emptyCb); // $ExpectType void
find.dir(stringPattern, rootDir, (dirs: string[]): void => { }).error(errorCb); // $ExpectType void
find.dir(regexPattern, rootDir, (dirs: string[]): void => { }).error(errorCb); // $ExpectType void
find.dir(rootDir, (dirs: string[]): void => { }).error(errorCb); // $ExpectType void
find.dirSync(rootDir); // $ExpectType string[]
find.dirSync(stringPattern, rootDir); // $ExpectType string[]
find.dirSync(regexPattern, rootDir); // $ExpectType string[]
find.eachDir(rootDir, singleStringCb).end(emptyCb).error(errorCb).end(emptyCb); // $ExpectType FindEachStream
find.eachDir(stringPattern, rootDir, singleStringCb).end(emptyCb).error(errorCb).end(emptyCb); // $ExpectType FindEachStream
find.eachDir(regexPattern, rootDir, singleStringCb).end(emptyCb).error(errorCb).end(emptyCb); // $ExpectType FindEachStream
