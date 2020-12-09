import { ITypedHash } from "@pnp/common";
export interface ISPKeyValueCollection {
    __metadata: {
        type: "Collection(SP.KeyValue)";
    };
    results: {
        __metadata: {
            type: "SP.KeyValue";
        };
        Key: string;
        Value: string;
        ValueType: "Edm.String";
    }[];
}
/**
 * Creates an object representing a SharePoint Collection(SP.KeyValue)
 *
 * @param obj The plain object defining the properties
 */
export declare function objectToSPKeyValueCollection(obj: ITypedHash<string | number | boolean>): ISPKeyValueCollection;
//# sourceMappingURL=objectToSPKeyValueCollection.d.ts.map