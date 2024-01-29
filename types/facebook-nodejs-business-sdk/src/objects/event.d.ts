import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
import LiveVideo from './live-video';
/**
 * Event
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Event extends AbstractCrudObject {
    static get Fields(): Readonly<{
        attending_count: "attending_count";
        can_guests_invite: "can_guests_invite";
        category: "category";
        cover: "cover";
        created_time: "created_time";
        declined_count: "declined_count";
        description: "description";
        discount_code_enabled: "discount_code_enabled";
        end_time: "end_time";
        event_times: "event_times";
        guest_list_enabled: "guest_list_enabled";
        id: "id";
        interested_count: "interested_count";
        is_canceled: "is_canceled";
        is_draft: "is_draft";
        is_online: "is_online";
        is_page_owned: "is_page_owned";
        maybe_count: "maybe_count";
        name: "name";
        noreply_count: "noreply_count";
        online_event_format: "online_event_format";
        online_event_third_party_url: "online_event_third_party_url";
        owner: "owner";
        parent_group: "parent_group";
        place: "place";
        registration_setting: "registration_setting";
        scheduled_publish_time: "scheduled_publish_time";
        start_time: "start_time";
        ticket_setting: "ticket_setting";
        ticket_uri: "ticket_uri";
        ticket_uri_start_sales_time: "ticket_uri_start_sales_time";
        ticketing_privacy_uri: "ticketing_privacy_uri";
        ticketing_terms_uri: "ticketing_terms_uri";
        timezone: "timezone";
        type: "type";
        updated_time: "updated_time";
    }>;
    static get Category(): Readonly<{
        classic_literature: "CLASSIC_LITERATURE";
        comedy: "COMEDY";
        crafts: "CRAFTS";
        dance: "DANCE";
        drinks: "DRINKS";
        fitness_and_workouts: "FITNESS_AND_WORKOUTS";
        foods: "FOODS";
        games: "GAMES";
        gardening: "GARDENING";
        healthy_living_and_self_care: "HEALTHY_LIVING_AND_SELF_CARE";
        health_and_medical: "HEALTH_AND_MEDICAL";
        home_and_garden: "HOME_AND_GARDEN";
        music_and_audio: "MUSIC_AND_AUDIO";
        parties: "PARTIES";
        professional_networking: "PROFESSIONAL_NETWORKING";
        religions: "RELIGIONS";
        shopping_event: "SHOPPING_EVENT";
        social_issues: "SOCIAL_ISSUES";
        sports: "SPORTS";
        theater: "THEATER";
        tv_and_movies: "TV_AND_MOVIES";
        visual_arts: "VISUAL_ARTS";
    }>;
    static get OnlineEventFormat(): Readonly<{
        fb_live: "fb_live";
        messenger_room: "messenger_room";
        none: "none";
        other: "other";
        third_party: "third_party";
    }>;
    static get Type(): Readonly<{
        community: "community";
        friends: "friends";
        group: "group";
        private: "private";
        public: "public";
        work_company: "work_company";
    }>;
    static get EventStateFilter(): Readonly<{
        canceled: "canceled";
        draft: "draft";
        published: "published";
        scheduled_draft_for_publication: "scheduled_draft_for_publication";
    }>;
    static get TimeFilter(): Readonly<{
        past: "past";
        upcoming: "upcoming";
    }>;
    getComments(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getComments(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getComments(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getFeed(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getFeed(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getFeed(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getLiveVideos(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getLiveVideos(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getLiveVideos(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createLiveVideo(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<LiveVideo>;
    getPhotos(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getPhotos(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getPhotos(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getPicture(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getPicture(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getPicture(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getPosts(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getPosts(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getPosts(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getRoles(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getRoles(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getRoles(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTicketTiers(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getTicketTiers(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getTicketTiers(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getVideos(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getVideos(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getVideos(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<any, any>): Promise<Event>;
}
