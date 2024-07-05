import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductCatalogExampleFeed
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogExampleFeed extends AbstractCrudObject {
    static get Fields(): Readonly<{
        example_feed: "example_feed";
    }>;
}
