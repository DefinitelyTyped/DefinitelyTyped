import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductCatalogDiagnosticGroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogDiagnosticGroup extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get AffectedChannels(): Record<string, any>;
    static get AffectedEntity(): Record<string, any>;
    static get AffectedFeatures(): Record<string, any>;
    static get Severity(): Record<string, any>;
    static get Type(): Record<string, any>;
    static get AffectedEntities(): Record<string, any>;
    static get Severities(): Record<string, any>;
    static get Types(): Record<string, any>;
}
