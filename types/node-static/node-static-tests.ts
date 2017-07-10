import {Server, version, mime} from 'node-static';

let server = new Server(__dirname);
let pathname = server.resolve('./tsconfig.json');
let mimetype = mime.lookup(pathname, '');
let versionNum = version.join('.');
console.log(`The node-static server constructed an instance of itself, fetched the mimetype of ${pathname} (${mimetype}), and has a version of ${versionNum}! The package is working.`);
