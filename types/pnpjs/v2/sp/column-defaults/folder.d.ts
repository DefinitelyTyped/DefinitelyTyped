import "../lists/web";
import { IFieldDefault, IFieldDefaultProps } from "./types";
declare module "../folders/types" {
    interface _Folder {
        getDefaultColumnValues(): Promise<IFieldDefault[]>;
        setDefaultColumnValues(defaults: IFieldDefaultProps[], merge?: boolean): Promise<void>;
        clearDefaultColumnValues(): Promise<void>;
    }
    interface IFolder {
        /**
         * Gets the default column value for a given list
         */
        getDefaultColumnValues(): Promise<IFieldDefault[]>;
        /**
         *
         * Sets the default column values for this folder
         *
         * @param fieldDefaults The values to set including field name and appropriate value
         * @param merge If true (default) existing values will be updated and new values added, otherwise all defaults are replaced for this folder
         */
        setDefaultColumnValues(defaults: IFieldDefaultProps[], merge?: boolean): Promise<void>;
        /**
         * Clears all defaults from this folder
         */
        clearDefaultColumnValues(): Promise<void>;
    }
}
//# sourceMappingURL=folder.d.ts.map