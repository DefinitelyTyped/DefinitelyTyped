import * as root from 'app-root-path';

let resolvedPath: string;
resolvedPath = root.resolve('../dir');
resolvedPath = root.path;
resolvedPath = root.toString();
let resolvedModule: any = root.require('app-root-path');
root.setPath('C:\\app-root');

