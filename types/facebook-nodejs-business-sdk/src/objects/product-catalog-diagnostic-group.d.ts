import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ProductCatalogDiagnosticGroup
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogDiagnosticGroup extends AbstractCrudObject {
    static get Fields(): Readonly<{
        affected_channels: "affected_channels";
        affected_entity: "affected_entity";
        affected_features: "affected_features";
        diagnostics: "diagnostics";
        error_code: "error_code";
        number_of_affected_entities: "number_of_affected_entities";
        number_of_affected_items: "number_of_affected_items";
        severity: "severity";
        subtitle: "subtitle";
        title: "title";
        type: "type";
    }>;
    static get AffectedChannels(): Readonly<{
        business_inbox_in_messenger: "business_inbox_in_messenger";
        shops: "shops";
        test_capability: "test_capability";
        universal_checkout: "universal_checkout";
        us_marketplace: "us_marketplace";
    }>;
    static get AffectedEntity(): Readonly<{
        product_catalog: "product_catalog";
        product_item: "product_item";
        product_set: "product_set";
    }>;
    static get AffectedFeatures(): Readonly<{
        augmented_reality: "augmented_reality";
        checkout: "checkout";
    }>;
    static get Severity(): Readonly<{
        must_fix: "MUST_FIX";
        opportunity: "OPPORTUNITY";
    }>;
    static get Type(): Readonly<{
        ar_visibility_issues: "AR_VISIBILITY_ISSUES";
        attributes_invalid: "ATTRIBUTES_INVALID";
        attributes_missing: "ATTRIBUTES_MISSING";
        category: "CATEGORY";
        checkout: "CHECKOUT";
        da_visibility_issues: "DA_VISIBILITY_ISSUES";
        image_quality: "IMAGE_QUALITY";
        low_quality_title_and_description: "LOW_QUALITY_TITLE_AND_DESCRIPTION";
        policy_violation: "POLICY_VIOLATION";
        shops_visibility_issues: "SHOPS_VISIBILITY_ISSUES";
    }>;
    static get AffectedEntities(): Readonly<{
        product_catalog: "product_catalog";
        product_item: "product_item";
        product_set: "product_set";
    }>;
    static get Severities(): Readonly<{
        must_fix: "MUST_FIX";
        opportunity: "OPPORTUNITY";
    }>;
    static get Types(): Readonly<{
        ar_visibility_issues: "AR_VISIBILITY_ISSUES";
        attributes_invalid: "ATTRIBUTES_INVALID";
        attributes_missing: "ATTRIBUTES_MISSING";
        category: "CATEGORY";
        checkout: "CHECKOUT";
        da_visibility_issues: "DA_VISIBILITY_ISSUES";
        image_quality: "IMAGE_QUALITY";
        low_quality_title_and_description: "LOW_QUALITY_TITLE_AND_DESCRIPTION";
        policy_violation: "POLICY_VIOLATION";
        shops_visibility_issues: "SHOPS_VISIBILITY_ISSUES";
    }>;
}
