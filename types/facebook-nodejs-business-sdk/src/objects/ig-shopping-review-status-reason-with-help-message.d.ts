import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * IGShoppingReviewStatusReasonWithHelpMessage
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGShoppingReviewStatusReasonWithHelpMessage extends AbstractCrudObject {
    static get Fields(): Readonly<{
        code: "code";
        help_url: "help_url";
        message: "message";
    }>;
}
