import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AudiencePermissionForActions
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AudiencePermissionForActions extends AbstractCrudObject {
    static get Fields(): Readonly<{
        can_edit: "can_edit";
        can_see_insight: "can_see_insight";
        can_share: "can_share";
        subtype_supports_lookalike: "subtype_supports_lookalike";
        supports_recipient_lookalike: "supports_recipient_lookalike";
    }>;
}
