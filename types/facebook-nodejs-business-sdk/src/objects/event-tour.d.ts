import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * EventTour
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EventTour extends AbstractCrudObject {
    static get Fields(): Readonly<{
        description: "description";
        dominant_color: "dominant_color";
        end_time: "end_time";
        id: "id";
        is_past: "is_past";
        last_event_timestamp: "last_event_timestamp";
        name: "name";
        num_events: "num_events";
        photo: "photo";
        scheduled_publish_timestamp: "scheduled_publish_timestamp";
        start_time: "start_time";
        ticketing_uri: "ticketing_uri";
        video: "video";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<EventTour>;
}
