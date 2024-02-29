import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativePostClickConfiguration
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativePostClickConfiguration extends AbstractCrudObject {
    static get Fields(): Readonly<{
        post_click_item_description: "post_click_item_description";
        post_click_item_headline: "post_click_item_headline";
    }>;
}
