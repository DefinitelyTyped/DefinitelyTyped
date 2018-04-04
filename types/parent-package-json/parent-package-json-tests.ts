import parent = require('parent-package-json');

const hasParent = parent('/optional/path/', 1);

if (hasParent !== false) {
    const pathToParent: string = hasParent.path;
    const contentOfParent: string = hasParent.read();
    const JSONOfParent = hasParent.parse();
    const versionOfParent = JSONOfParent.version;
}
