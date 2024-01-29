import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CatalogItemAppealStatus
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogItemAppealStatus extends AbstractCrudObject {
    static get Fields(): Readonly<{
        handle: "handle";
        item_id: "item_id";
        status: "status";
        use_cases: "use_cases";
    }>;
    static get Status(): Readonly<{
        this_item_cannot_be_appealed_as_it_is_either_approved_or_already_has_an_appeal: "This item cannot be appealed as it is either approved or already has an appeal";
        this_item_is_not_rejected_for_any_of_channels: "This item is not rejected for any of channels";
        we_ve_encountered_unexpected_error_while_processing_this_request_please_try_again_later_: "We've encountered unexpected error while processing this request. Please try again later !";
        you_ve_reached_the_maximum_number_of_item_requests_you_can_make_this_week_you_ll_be_able_to_request_item_reviews_again_within_the_next_7_days_: "You've reached the maximum number of item requests you can make this week. You'll be able to request item reviews again within the next 7 days.";
        your_request_was_received_see_information_below_to_learn_more_: "Your request was received. See information below to learn more.";
    }>;
}
