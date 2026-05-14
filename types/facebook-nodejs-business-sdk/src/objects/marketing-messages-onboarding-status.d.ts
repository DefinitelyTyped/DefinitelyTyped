import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MarketingMessagesOnboardingStatus
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MarketingMessagesOnboardingStatus extends AbstractCrudObject {
    static get Fields(): Readonly<{
        status: "status";
        time: "time";
    }>;
}
