import { IFieldDefault } from "./types";
declare module "../lists/types" {
    interface _List {
        getDefaultColumnValues(): Promise<IFieldDefault[]>;
        setDefaultColumnValues(defaults: IFieldDefault[]): Promise<void>;
    }
    interface IList {
        /**
         * Gets the default column value for a given list
         */
        getDefaultColumnValues(): Promise<IFieldDefault[]>;
        /**
         * Replaces all the column defaults with the supplied values
         *
         * @param defaults
         */
        setDefaultColumnValues(defaults: IFieldDefault[]): Promise<void>;
    }
}
//# sourceMappingURL=list.d.ts.map