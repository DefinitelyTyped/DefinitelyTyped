import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MessengerDestinationPageWelcomeMessage
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MessengerDestinationPageWelcomeMessage extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        page_welcome_message_body: "page_welcome_message_body";
        page_welcome_message_type: "page_welcome_message_type";
        template_name: "template_name";
        time_created: "time_created";
        time_last_used: "time_last_used";
    }>;
}
