/**
 * @file
 * Everything from https://usercentrics.com/docs/web/implementation/ui/interfaces/
 */

import type { TCFUserDecisionOnVendor } from "./integration-types";

/**
 * A user's consent decision on all TCF options
 * @see https://usercentrics.com/docs/web/implementation/ui/interfaces/#tcfdecisions
 */
export interface TCFDecisions {
    /** A user's consent decision on TCF purposes */
    purposes?: TCFUserDecisionOnPurpose[];

    /** A user's consent decision on TCF special features */
    specialFeatures?: TCFUserDecisionOnSpecialFeature[];

    /** A user's consent decision on TCF vendors */
    vendors?: TCFUserDecisionOnVendor[];
}

/** @see https://usercentrics.com/docs/web/implementation/ui/interfaces/#basetcfuserdecision */
export interface BaseTCFUserDecision {
    /** Indicates if the user gave consent (true) or denied consent (false) */
    consent?: boolean;

    /**
     * The id of the purpose/vendor the consent decision belongs to.
     * Note: Different pages in the Usercentrics docs disagree on the type, so both are allowed:
     * https://usercentrics.com/docs/web/implementation/ui/interfaces/#basetcfuserdecision (number)
     * https://usercentrics.com/docs/web/features/api/control-functionality/#updatecategoriesconsents (string)
     */
    id: number | string;
}

/**
 * A user's consent decision for a single purpose
 * @see https://usercentrics.com/docs/web/implementation/ui/interfaces/#tcfuserdecisiononpurpose
 */
export interface TCFUserDecisionOnPurpose extends BaseTCFUserDecision {
    /** Indicates if the user gave legitimate interest consent (true) or denied consent (false) */
    legitimateInterestConsent?: boolean;
}

/**
 * A user's consent decision for a single special feature
 * @see https://usercentrics.com/docs/web/implementation/ui/interfaces/#tcfuserdecisiononspecialfeature
 */
export interface TCFUserDecisionOnSpecialFeature extends BaseTCFUserDecision {
    /** passing consent is compulsory */
    consent: boolean;
}
