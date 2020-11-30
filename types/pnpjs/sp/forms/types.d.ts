import { _SharePointQueryableInstance, _SharePointQueryableCollection } from "../sharepointqueryable";
import { PageType } from "../types";
/**
 * Describes a collection of Form objects
 *
 */
export declare class _Forms extends _SharePointQueryableCollection<IFormInfo[]> {
    /**
     * Gets a form by id
     *
     * @param id The guid id of the item to retrieve
     */
    getById(id: string): IForm;
}
export interface IForms extends _Forms {
}
export declare const Forms: import("../sharepointqueryable").ISPInvokableFactory<IForms>;
/**
 * Describes a single of Form instance
 *
 */
export declare class _Form extends _SharePointQueryableInstance<IFormInfo> {
}
export interface IForm extends _Form {
}
export declare const Form: import("../sharepointqueryable").ISPInvokableFactory<IForm>;
export interface IFormInfo {
    FormType: PageType;
    Id: string;
    ResourcePath: {
        DecodedUrl: string;
    };
    DecodedUrl: string;
    ServerRelativeUrl: string;
}
//# sourceMappingURL=types.d.ts.map