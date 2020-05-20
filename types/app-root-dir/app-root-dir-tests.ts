import * as rootDir from 'app-root-dir';

let appRootPath: string;

rootDir.set('__dirname');
appRootPath = rootDir.get();
