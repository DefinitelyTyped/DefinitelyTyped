import { Company } from './Company';
import { SocialProfile, Segment, Avatar, LocationData } from './User';
import { Tag } from './Tag';

export type VisitorIdentifier = { id: string } | { user_id: string };

export interface Visitor {
    type: 'visitor'; // value is 'visitor'
    readonly id: string; // The Intercom defined id representing the Visitor
    user_id: string | null; // Automatically generated identifier for the Visitor
    name: string | null; // The name of the Visitor
    avatar: Avatar; // An avatar object for the Visitor
    location_data: LocationData | {}; // A Location Object relating to the Visitor
    last_request_at: number | null; // The time the Lead last recorded making a request
    readonly created_at: number; // The time the Visitor was added to Intercom
    readonly updated_at: number; // The last time the Visitor was updated
    social_profiles: SocialProfile[]; // A list of social profiles associated with the Visitor
    unsubscribed_from_emails: boolean; // Whether the Visitor is unsubscribed from emails
    tags: Tag[]; // A list of tags associated with the Visitor
    segments: Segment[]; // A list of segments the Visitor
    custom_attributes: { [key: string]: any }; // The custom attributes you have set on the Visitor
}
