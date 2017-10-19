import * as parent from 'parent-package-json';

const pathToParent: string = (parent() as parent.ParentPackage).path;
const pathToParentBool: boolean = (parent() as boolean);
const pathToParentOfCustomPath: string = (parent('/My/Cool/Folder') as parent.ParentPackage).path;

const pathToParentOfParent: string = (parent(null, 1) as parent.ParentPackage).path;
const contentOfParent: string = (parent() as parent.ParentPackage).read();
const JSONOfParent = (parent() as parent.ParentPackage).parse();
const versionOfParent = JSONOfParent.version;
