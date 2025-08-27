import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessImageTBusinessFolderPathItem
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessImageTBusinessFolderPathItem extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        parent_folder_id: "parent_folder_id";
        type: "type";
    }>;
}
