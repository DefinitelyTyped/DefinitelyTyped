import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ConversionActionQuery
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ConversionActionQuery extends AbstractCrudObject {
    static get Fields(): Readonly<{
        action_type: "action.type";
        application: "application";
        conversion_id: "conversion_id";
        creative: "creative";
        dataset: "dataset";
        event: "event";
        event_creator: "event.creator";
        event_type: "event_type";
        fb_pixel: "fb_pixel";
        fb_pixel_event: "fb_pixel_event";
        leadgen: "leadgen";
        object: "object";
        object_domain: "object.domain";
        offer: "offer";
        offer_creator: "offer.creator";
        offsite_pixel: "offsite_pixel";
        page: "page";
        page_parent: "page.parent";
        post: "post";
        post_object: "post.object";
        post_object_wall: "post.object.wall";
        post_wall: "post.wall";
        question: "question";
        question_creator: "question.creator";
        response: "response";
        subtype: "subtype";
    }>;
}
