import * as parent from 'parent-package-json';

const hasParent = parent();
if (hasParent !== false) {
    const pathToParent: string = parent().path;
    const pathToParentOfCustomPath: string = parent('/My/Cool/Folder').path;
    const pathToParentOfParent: string = parent(null, 1).path;
    const contentOfParent: string = parent().read();
    const JSONOfParent = parent().parse();
    const versionOfParent = JSONOfParent.version;
}

const hasParentFalse: false = parent();
