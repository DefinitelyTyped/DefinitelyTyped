import { Server, version, mime } from 'node-static';

const server = new Server(__dirname);
const pathname = server.resolve('./tsconfig.json');
const mimetype = mime.getType(pathname);
const versionNum = version.join('.');
console.log(`The node-static server constructed an instance of itself, fetched the mimetype of ${pathname} (${mimetype}), and has a version of ${versionNum}! The package is working.`);
