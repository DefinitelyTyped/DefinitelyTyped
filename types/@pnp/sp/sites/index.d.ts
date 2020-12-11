import { ISite } from "./types";
export { IOpenWebByIdResult, ISite, Site, IContextInfo, IDocumentLibraryInformation, } from "./types";
declare module "../rest" {
    interface SPRest {
        readonly site: ISite;
    }
}
//# sourceMappingURL=index.d.ts.map