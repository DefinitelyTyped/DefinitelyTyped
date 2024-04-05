import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * Tab
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Tab extends AbstractCrudObject {
    static get Fields(): Readonly<{
        application: "application";
        custom_image_url: "custom_image_url";
        custom_name: "custom_name";
        id: "id";
        image_url: "image_url";
        is_non_connection_landing_tab: "is_non_connection_landing_tab";
        is_permanent: "is_permanent";
        link: "link";
        name: "name";
        position: "position";
    }>;
}
