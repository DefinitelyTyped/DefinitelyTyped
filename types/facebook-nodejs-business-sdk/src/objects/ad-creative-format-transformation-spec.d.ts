import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeFormatTransformationSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeFormatTransformationSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        data_source: "data_source";
        format: "format";
    }>;
}
