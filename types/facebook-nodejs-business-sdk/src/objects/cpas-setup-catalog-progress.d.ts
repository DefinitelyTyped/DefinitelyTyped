import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CPASSetupCatalogProgress
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CPASSetupCatalogProgress extends AbstractCrudObject {
    static get Fields(): Readonly<{
        child_catalog_count: "child_catalog_count";
        child_catalog_issues: "child_catalog_issues";
        id: "id";
        issues: "issues";
        name: "name";
    }>;
}
