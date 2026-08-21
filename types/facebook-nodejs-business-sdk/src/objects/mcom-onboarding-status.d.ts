import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * McomOnboardingStatus
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class McomOnboardingStatus extends AbstractCrudObject {
    static get Fields(): Readonly<{
        onboarding_status: "onboarding_status";
        page_id: "page_id";
    }>;
}
