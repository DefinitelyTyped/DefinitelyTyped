import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativeLinkDataTemplateVideoSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeLinkDataTemplateVideoSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        categorization_criteria: "categorization_criteria";
        customization: "customization";
        template_id: "template_id";
    }>;
}
