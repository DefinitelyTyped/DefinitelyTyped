import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * BroadTargetingCategories
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BroadTargetingCategories extends AbstractCrudObject {
    static get Fields(): Readonly<{
        category_description: "category_description";
        id: "id";
        name: "name";
        parent_category: "parent_category";
        path: "path";
        size_lower_bound: "size_lower_bound";
        size_upper_bound: "size_upper_bound";
        source: "source";
        type: "type";
        type_name: "type_name";
        untranslated_name: "untranslated_name";
        untranslated_parent_name: "untranslated_parent_name";
    }>;
}
