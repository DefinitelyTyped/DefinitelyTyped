export declare type AllowedDefaultColumnValues = number | string | boolean | {
    wssId: string;
    termName: string;
    termId: string;
};
export interface IFieldDefaultProps {
    /**
     * Internal name of the field
     */
    name: string;
    /**
     * The value of the field to set
     */
    value: AllowedDefaultColumnValues | AllowedDefaultColumnValues[];
}
export interface IFieldDefault extends IFieldDefaultProps {
    /**
     * The unencoded server relative path for this default
     */
    path: string;
}
//# sourceMappingURL=types.d.ts.map