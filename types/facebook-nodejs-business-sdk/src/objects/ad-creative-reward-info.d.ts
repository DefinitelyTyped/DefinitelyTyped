import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeRewardInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeRewardInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        reward_offer_id: "reward_offer_id";
        reward_program_id: "reward_program_id";
    }>;
}
