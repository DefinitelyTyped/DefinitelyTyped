import "../folders/list";
declare module "../lists/types" {
    interface _List {
        getSiteScript(): Promise<string>;
    }
    interface IList {
        /**
         * Gets the site script syntax (JSON) from the current list
         */
        getSiteScript(): Promise<string>;
    }
}
//# sourceMappingURL=list.d.ts.map