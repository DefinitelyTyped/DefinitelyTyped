import { IDirectoryObjects } from "./types";
export { IDirectoryObject, DirectoryObjectTypes, DirectoryObject, DirectoryObjects, IDirectoryObjects, } from "./types";
declare module "../rest" {
    interface GraphRest {
        readonly directoryObjects: IDirectoryObjects;
    }
}
//# sourceMappingURL=index.d.ts.map