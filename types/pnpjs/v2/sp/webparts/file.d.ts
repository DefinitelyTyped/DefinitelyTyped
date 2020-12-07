import { WebPartsPersonalizationScope, ILimitedWebPartManager } from "./types";
declare module "../files/types" {
    interface _File {
        getLimitedWebPartManager(scope?: WebPartsPersonalizationScope): ILimitedWebPartManager;
    }
    interface IFile {
        /**
         * Specifies the control set used to access, modify, or add Web Parts associated with this Web Part Page and view.
         * An exception is thrown if the file is not an ASPX page.
         *
         * @param scope The WebPartsPersonalizationScope view on the Web Parts page.
         */
        getLimitedWebPartManager(scope?: WebPartsPersonalizationScope): ILimitedWebPartManager;
    }
}
//# sourceMappingURL=file.d.ts.map