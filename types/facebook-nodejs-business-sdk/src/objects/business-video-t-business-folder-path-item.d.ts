import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessVideoTBusinessFolderPathItem
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessVideoTBusinessFolderPathItem extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        parent_folder_id: "parent_folder_id";
        type: "type";
    }>;
}
