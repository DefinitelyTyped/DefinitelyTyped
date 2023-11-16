import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativeInteractiveComponentsSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeInteractiveComponentsSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        child_attachments: "child_attachments";
        components: "components";
    }>;
}
