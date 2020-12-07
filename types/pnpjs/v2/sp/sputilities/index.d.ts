import { IUtilities } from "./types";
export { ICreateWikiPageResult, IEmailProperties, IUtilities, IWikiPageCreationInfo, Utilities, } from "./types";
declare module "../rest" {
    interface SPRest {
        readonly utility: IUtilities;
    }
}
//# sourceMappingURL=index.d.ts.map