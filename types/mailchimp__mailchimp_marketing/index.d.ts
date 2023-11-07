/*
These type definitions are missing many of the actual definitions within the Mailchimp marketing API.

Any additions or improvements would be much appreciated!
*/

/**
 * Set the configuration (API key, access token & server) for this Mailchimp instance.
 * @param config The configuration to set for this Mailchimp instance.
 */
export function setConfig(config: Config): void;

export interface Config {
    /**
     * API key for your Mailchimp marketing account.
     */
    apiKey?: string | undefined;
    /**
     * Access token for authentication.
     */
    accessToken?: string | undefined;
    /**
     * Mailchimp server to route to. For example, `'us10'`.
     */
    server?: string | undefined;
}

export type Status = "subscribed" | "unsubscribed" | "cleaned" | "pending" | "transactional";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD";

export type MergeFieldType =
    | "text"
    | "number"
    | "address"
    | "phone"
    | "date"
    | "url"
    | "imageurl"
    | "radio"
    | "dropdown"
    | "birthday"
    | "zip";

/**
 * Anything with this type must confirm to Mailchimp's only valid time format:
 * `YYYY-MM-DDTHH:MM:SSZ`
 */
export type TimeString = string;

export interface Link {
    rel: string;
    href: string;
    method: HttpMethod;
    targetSchema: string;
    schema: string;
}

export interface ErrorResponse {
    type: string;
    title: string;
    status: number;
    detail: string;
    instance: string;
}

export interface Body {
    status?: Status | undefined;
    email_type?: string | undefined;
    merge_fields?: Record<string, any> | undefined;
    interests?: Record<string, any> | undefined;
    language?: string | undefined;
    vip?: boolean | undefined;
    location?:
        | {
            latitude: number;
            longitude: number;
        }
        | undefined;
    marketing_permissions?:
        | Array<{
            marketing_permission_id: string;
            enabled: boolean;
        }>
        | undefined;
    ip_signup?: string | undefined;
    timestamp_signup?: string | undefined;
    ip_opt?: string | undefined;
    timestamp_opt?: string | undefined;
}

export namespace segmentConditions {
    /**
     * Segment by interaction with a specific campaign.
     */
    interface Aim {
        /**
         * Possible value: "Aim".
         */
        condition_type: string;

        /**
         * Segment by interaction with a specific campaign. Possible value: "aim".
         */
        field: string;

        /**
         * The status of the member with regard to their campaign interaction. One of the following: opened, clicked, was sent, didn't open, didn't click, or was not sent. Possible values: "open", "click", "sent", "noopen", "noclick", or "nosent".
         */
        op: string;

        /**
         * Either the web id value for a specific campaign or 'any' to account for subscribers who have/have not interacted with any campaigns.
         */

        value: string;
    }

    /**
     * Segment by interaction with an Automation workflow.
     */
    interface Automation {
        /**
         * Possible value: "Automation".
         */
        condition_type: string;

        /**
         * Segment by interaction with an Automation workflow. Possible value: "automation".
         */
        field: string;

        /**
         * The status of the member with regard to the automation workflow. One of the following: has started the workflow, has completed the workflow, has not started the workflow, or has not completed the workflow. Possible values: "started", "completed", "not_started", or "not_completed".
         */
        op: string;

        /**
         * The web id for the automation workflow to segment against.
         */
        value: string;
    }

    /**
     * Segment by poll activity.
     */
    interface CampaignPoll {
        /**
         * Possible value: "CampaignPoll".
         */
        condition_type: string;

        /**
         * Segment by poll activity. Possible value: "poll".
         */
        field: string;

        /**
         * Members have/have not interacted with a specific poll in a Mailchimp email. Possible values: "member" or "notmember".
         */
        op: string;

        /**
         * The id for the poll.
         */
        value: number;
    }

    /**
     * Segment by interaction with a campaign via Conversations.
     */
    interface Conversation {
        /**
         * Possible value: "Conversation".
         */
        condition_type: string;

        /**
         * Segment by interaction with a campaign via Conversations. Possible value: "conversation".
         */
        field: string;

        /**
         * The status of a member's interaction with a conversation. One of the following: has replied or has not replied. Possible values: "member" or "notmember".
         */
        op: string;

        /**
         * The web id value for a specific campaign or 'any' to account for subscribers who have/have not interacted with any campaigns.
         */
        value: string;
    }

    /**
     * Segment by a specific date field.
     */
    interface Date {
        /**
         * Possible value: "Date".
         */
        condition_type: string;

        /**
         * The type of date field to segment on: The opt-in time for a signup, the date the subscriber was last updated, or the date of their last ecomm purchase. Possible values: "timestamp_opt", "info_changed", or "ecomm_date".
         */
        field: string;

        /**
         * When the event took place:  Before, after, is a specific date, is not a specific date, is blank, or is not blank. Possible values: "greater", "less", "is", "not", "blank", "blank_not", "within", or "notwithin".
         */
        op: string;

        /**
         * What type of data to segment on: a specific date, a specific campaign, or the last campaign sent.
         */
        value: string;

        /**
         * When segmenting on 'date' or 'campaign', the date for the segment formatted as YYYY-MM-DD or the web id for the campaign.
         */
        extra: string;
    }

    /**
     * Segment by use of a particular email client.
     */
    interface EmailClient {
        /**
         * Possible value: "EmailClient".
         */
        condition_type: string;

        /**
         * Segment by use of a particular email client. Possible value: "email_client".
         */
        field: string;

        /**
         * Whether to match email clients that do or do not match the value. Possible values: "client_is" or "client_not".
         */
        op: string;

        /**
         * The name of the email client.
         */
        value: string;
    }

    /**
     * Segment by language.
     */
    interface Language {
        /**
         * Possible value: "Language".
         */
        condition_type: string;

        /**
         * Segment by language. Possible value: "language".
         */
        field: string;

        /**
         * Whether the member's language is or is not set to a specific language. Possible values: "is" or "not".
         */
        op: string;

        /**
         * A two-letter language identifier.
         */
        value: string;
    }

    /**
     * Segment by member rating.
     */
    interface MemberRating {
        /**
         * Possible value: "MemberRating".
         */
        condition_type: string;

        /**
         * Segment by member rating. Possible value: "rating".
         */
        field: string;

        /**
         * Members who have have a rating that is/not exactly a given number or members who have a rating greater/less than a given number. Possible values: "is", "not", "greater", or "less".
         */
        op: string;

        /**
         * The star rating number to segment against.
         */
        value: number;
    }

    /**
     * Segment by signup source.
     */
    interface SignupSource {
        /**
         * Possible value: "SignupSource".
         */
        condition_type: string;

        /**
         * Possible value: "source".
         */
        field: string;

        /**
         * Whether the member's signup source was/was not a particular value. Possible values: "source_is" or "source_not".
         */
        op: string;

        /**
         * The signup source.
         */
        value: string;
    }

    /**
     * Segment by interaction with a SurveyMonkey survey.
     */
    interface SurveyMonkey {
        /**
         * Possible value: "SurveyMonkey".
         */
        condition_type: string;

        /**
         * Segment by interaction with a SurveyMonkey survey. Possible value: "survey_monkey".
         */
        field: string;

        /**
         * The status of the member with regard to the survey. One of the following: has started the survey, has completed the survey, has not started the survey, or has not completed the survey. Possible values: "started", "completed", "not_started", or "not_completed".
         */
        op: string;

        /**
         * The unique ID of the SurveyMonkey survey.
         */
        value: string;
    }

    /**
     * Segment by VIP status.
     */
    interface VIP {
        /**
         * Possible value: "VIP".
         */
        condition_type: string;

        /**
         * Segmenting based off of a subscriber's VIP status. Possible value: "gmonkey".
         */
        field: string;

        /**
         * Whether the member is or is not marked as VIP. Possible values: "member" or "notmember".
         */
        op: string;
    }

    /**
     * Segment by an interest group merge field.
     */
    interface Interests {
        /**
         * Possible value: "Interests".
         */
        condition_type: string;

        /**
         * Segmenting based on interest group information. This should start with 'interests-' followed by the grouping id. Ex. 'interests-123'.
         */
        field: string;

        /**
         * Whether the member is a part of one, all, or none of the groups. Possible values: "interestcontains", "interestcontainsall", or "interestnotcontains".
         */
        op: string;

        /**
         * An array containing strings, each representing a group id.
         */
        value: string[];
    }

    /**
     * Segment by purchases in specific items or categories.
     */
    interface EcommCategory {
        /**
         * Possible value: "EcommCategory".
         */
        condition_type: string;

        /**
         * Segment by purchases in specific items or categories. Possible values: "ecomm_cat" or "ecomm_prod".
         */
        field: string;

        /**
         * A member who has purchased from a category/specific item that is/is not a specific name, where the category/item name contains/doesn't contain a specific phrase or string, or a category/item name that starts/ends with a string. Possible values: "is", "not", "contains", "notcontain", "starts", or "ends".
         */
        op: string;

        /**
         * The ecommerce category/item information.
         */
        value: string;
    }

    /**
     * Segment by average spent total, number of orders, total number of products purchased, or average number of products per order.
     */
    interface EcommNumber {
        /**
         * Possible value: "EcommNumber".
         */
        condition_type: string;

        /**
         * Segment by average spent total, number of orders, total number of products purchased, or average number of products per order. Possible values: "ecomm_spent_avg", "ecomm_orders", "ecomm_prod_all", or "ecomm_avg_ord".
         */
        field: string;

        /**
         * Members who have spent exactly, have not spent exactly, spent more, or spent less than the segment value. Possible values: "is", "not", "greater", or "less".
         */
        op: string;

        /**
         * Members who have spent exactly, have not spent exactly, spent more, or spent less than this amount.
         */
        value: number;
    }

    /**
     * Segment by whether someone has purchased anything.
     */
    interface EcommPurchased {
        /**
         * Possible value: "EcommPurchased".
         */
        condition_type: string;

        /**
         * Segment by whether someone has purchased anything. Possible value: "ecomm_purchased".
         */
        field: string;

        /**
         * Members who have ('member') or have not ('notmember') purchased. Possible values: "member" or "notmember".
         */
        op: string;
    }

    /**
     * Segment by amount spent on a single order or across all orders.
     */
    interface EcommSpent {
        /**
         * Possible value: "EcommSpent".
         */
        condition_type: string;

        /**
         * Segment by amount spent on a single order or across all orders. Possible values: "ecomm_spent_one" or "ecomm_spent_all".
         */
        field: string;

        /**
         * Members who have spent 'more' or 'less' than then specified value. Possible values: "greater" or "less".
         */
        op: string;

        /**
         * The total amount a member spent.
         */
        value: number;
    }

    /**
     * Segment by purchases from a specific store.
     */
    interface EcommStore {
        /**
         * Possible value: "EcommStore".
         */
        condition_type: string;

        /**
         * Segment by purchases from a specific store. Possible value: "ecomm_store".
         */
        field: string;

        /**
         * Members who have or have not purchased from a specific store. Possible values: "is" or "not".
         */
        op: string;

        /**
         * The store id to segment against.
         */
        value: string;
    }

    /**
     * Segment by Goal activity.
     */
    interface GoalActivity {
        /**
         * Possible value: "GoalActivity".
         */
        condition_type: string;

        /**
         * Segment by Goal activity. Possible value: "goal".
         */
        field: string;

        /**
         * Whether the website URL is/not exactly, contains/doesn't contain, starts with/ends with a string. Possible values: "is", "goal_not", "contains", "goal_notcontain", "starts", or "ends".
         */
        op: string;

        /**
         * The URL to check Goal activity against.
         */
        value: string;
    }

    /**
     * Segment by most recent interaction with a website.
     */
    interface GoalTimestamp {
        /**
         * Possible value: "GoalTimestamp".
         */
        condition_type: string;

        /**
         * Segment by most recent interaction with a website. Possible value: "goal_last_visited".
         */
        field: string;

        /**
         * Whether the website activity happened after, before, or at a given timestamp. Possible values: "greater", "less", or "is".
         */
        op: string;

        /**
         * The date to check Goal activity against.
         */
        value: string;
    }

    /**
     * Segment by similar subscribers.
     */
    interface FuzzySegment {
        /**
         * Possible value: "FuzzySegment".
         */
        condition_type: string;

        /**
         * Segment by similar subscribers. Possible value: "fuzzy_segment".
         */
        field: string;

        /**
         * Members who are/are not apart of a 'similar subscribers' segment. Possible values: "fuzzy_is" or "fuzzy_not".
         */
        op: string;

        /**
         * The id for the 'similar subscribers' segment.
         */
        value: number;
    }

    /**
     * Segment by a given static segment.
     */
    interface StaticSegment {
        /**
         * Possible value: "StaticSegment".
         */
        condition_type: string;

        /**
         * Segment by a given static segment. Possible value: "static_segment".
         */
        field: string;

        /**
         * Members who are/are not apart of a static segment. Possible values: "static_is" or "static_not".
         */
        op: string;

        /**
         * The id for the static segment.
         */
        value: number;
    }

    /**
     * Segment by a specific country or US state.
     */
    interface IpGeoCountryState {
        /**
         * Possible value: "IPGeoCountryState".
         */
        condition_type: string;

        /**
         * Segmenting subscribers who are within a specific location. Possible value: "ipgeo".
         */
        field: string;

        /**
         * Segment members who are within a specific country or US state. Possible values: "ipgeocountry", "ipgeonotcountry", "ipgeostate", or "ipgeonotstate".
         */
        op: string;

        /**
         * The two-letter country code or US state abbreviation.
         */
        value: string;
    }

    /**
     * Segment by a specific geographic region.
     */
    interface IpGeoIn {
        /**
         * Possible value: "IPGeoIn".
         */
        condition_type: string;

        /**
         * Segmenting subscribers who are within a specific location. Possible value: "ipgeo".
         */
        field: string;

        /**
         * Segment members who are within a specific geographic region. Possible values: "ipgeoin" or "ipgeonotin".
         */
        op: string;

        /**
         * The radius of the target location.
         */
        value: number;

        /**
         * The address of the target location.
         */
        addr?: string;

        /**
         * The latitude of the target location.
         */
        lat?: string;

        /**
         * The longitude of the target location.
         */
        lng?: string;
    }

    /**
     * Segment by a specific US ZIP code.
     */
    interface IpGeoInZip {
        /**
         * Possible value: "IPGeoInZip".
         */
        condition_type: string;

        /**
         * Segmenting subscribers who are within a specific location. Possible value: "ipgeo".
         */
        field: string;

        /**
         * Segment members who are within a specific US ZIP code. Possible value: "ipgeoinzip".
         */
        op: string;

        /**
         * The radius of the target location.
         */
        value: number;

        /**
         * The zip code to segment against.
         */
        extra: number;
    }

    /**
     * Segment members whose location information is unknown.
     */
    interface IpGeoUnknown {
        /**
         * Possible value: "IPGeoUnknown".
         */
        condition_type: string;

        /**
         * Segmenting subscribers who are within a specific location. Possible value: "ipgeo".
         */
        field: string;

        /**
         * Segment members for which location information is unknown. Possible value: "ipgeounknown".
         */
        op: string;
    }

    /**
     * Segment by a specific US ZIP code.
     */
    interface IpGeoZip {
        /**
         * Possible value: "IPGeoZip".
         */
        condition_type: string;

        /**
         * Segmenting subscribers who are within a specific location. Possible value: "ipgeo".
         */
        field: string;

        /**
         * Segment members who are/are not within a specific US zip code. Possible values: "ipgeoiszip" or "ipgeonotzip".
         */
        op: string;

        /**
         * The 5-digit zip code.
         */
        value: number;
    }

    /**
     * Segment by age ranges in Social Profiles data.
     */
    interface SocialAge {
        /**
         * Possible value: "SocialAge".
         */
        condition_type: string;

        /**
         * Segment by age ranges in Social Profiles data. Possible value: "social_age".
         */
        field: string;

        /**
         * Members who are/not the exact criteria listed. Possible values: "is" or "not".
         */
        op: string;

        /**
         * The age range to segment. Possible values: "18-24", "25-34", "35-54", or "55+".
         */
        value: string;
    }

    /**
     * Segment by listed gender in Social Profiles data.
     */
    interface SocialGender {
        /**
         * Possible value: "SocialGender".
         */
        condition_type: string;

        /**
         * Segment by listed gender in Social Profiles data. Possible value: "social_gender".
         */
        field: string;

        /**
         * Members who are/not the exact criteria listed. Possible values: "is" or "not".
         */
        op: string;

        /**
         * The Social Profiles gender to segment. Possible values: "male" or "female".
         */
        value: string;
    }

    /**
     * Segment by influence rating in Social Profiles data.
     */
    interface SocialInfluence {
        /**
         * Possible value: "SocialInfluence".
         */
        condition_type: string;

        /**
         * Segment by influence rating in Social Profiles data. Possible value: "social_influence".
         */
        field: string;

        /**
         * Members who have a rating that is/not or greater/less than the rating provided. Possible values: "is", "not", "greater", or "less".
         */
        op: string;

        /**
         * The Social Profiles influence rating to segment.
         */
        value: number;
    }

    /**
     * Segment by social network in Social Profiles data.
     */
    interface SocialNetworkMember {
        /**
         * Possible value: "SocialNetworkMember".
         */
        condition_type: string;

        /**
         * Segment by social network in Social Profiles data. Possible value: "social_network".
         */
        field: string;

        /**
         * Members who are/not on a given social network. Possible values: "member" or "notmember".
         */
        op: string;

        /**
         * The social network to segment against. Possible values: "twitter", "facebook", "linkedin", "flickr", "foursquare", "lastfm", "myspace", "quora", "vimeo", "yelp", or "youtube".
         */
        value: string;
    }

    /**
     * Segment by social network in Social Profiles data.
     */
    interface SocialNetworkFollow {
        /**
         * Possible value: "SocialNetworkFollow".
         */
        condition_type: string;

        /**
         * Segment by social network in Social Profiles data. Possible value: "social_network".
         */
        field: string;

        /**
         * Members who are/not following a linked account on a given social network. Possible values: "follow" or "notfollow".
         */
        op: string;

        /**
         * The social network to segment against. Possible value: "twitter_follow".
         */
        value: string;
    }

    /**
     * Segment by an address-type merge field.
     */
    interface AddressMerge {
        /**
         * Possible value: "AddressMerge".
         */
        condition_type: string;

        /**
         * An address-type merge field to segment.
         */
        field: string;

        /**
         * Whether the member's address merge field contains/does not contain a value or is/is not blank. Possible values: "contains", "notcontain", "blank", or "blank_not".
         */
        op: string;

        /**
         * The value to segment a text merge field with.
         */
        value: string;
    }

    /**
     * Segment by an address-type merge field within a given distance.
     */
    interface ZipMerge {
        /**
         * Possible value: "ZipMerge".
         */
        condition_type: string;

        /**
         * An address or zip-type merge field to segment.
         */
        field: string;

        /**
         * Whether the member's address merge field is within a given distance from a city or zip. Possible value: "geoin".
         */
        op: string;

        /**
         * The distance from the city/zip.
         */
        value: string;

        /**
         * The city or the zip being used to segment against.
         */
        extra: string;
    }

    /**
     * Segment by a contact's birthday.
     */
    interface BirthdayMerge {
        /**
         * Possible value: "BirthdayMerge".
         */
        condition_type: string;

        /**
         * A date merge field to segment.
         */
        field: string;

        /**
         * Whether the member's birthday merge information is/is not a certain date or is/is not blank. Possible values: "is", "not", "blank", or "blank_not".
         */
        op: string;

        /**
         * A date to segment against (mm/dd).
         */
        value: string;
    }

    /**
     * Segment by a given date merge field.
     */
    interface DateMerge {
        /**
         * Possible value: "DateMerge".
         */
        condition_type: string;

        /**
         * A date merge field to segment.
         */
        field: string;

        /**
         * Whether the member's merge information is/is not, is greater/less than a value or is/is not blank. Possible values: "is", "not", "less", "blank", "blank_not", or "greater".
         */
        op: string;

        /**
         * A date to segment against.
         */
        value: string;
    }

    /**
     * Segment by a given dropdown or radio button merge field.
     */
    interface SelectMerge {
        /**
         * Possible value: "SelectMerge".
         */
        condition_type: string;

        /**
         * A merge field to segment.
         */
        field: string;

        /**
         * Whether the member's merge information is/is not a value or is/is not blank. Possible values: "is", "not", "blank", "blank_not", "notcontain", or "contains".
         */
        op: string;

        /**
         * The value to segment a text merge field with.
         */
        value: string;
    }

    /**
     * Segment by a given text or number merge field.
     */
    interface TextMerge {
        /**
         * Possible value: "TextMerge".
         */
        condition_type: string;

        /**
         * A text or number merge field to segment.
         */
        field: string;

        /**
         * Whether the member's merge information is/is not, contains/does not contain, starts/ends with, or is greater/less than a value. Possible values: "is", "not", "contains", "notcontain", "starts", "ends", "greater", "less", "blank", or "blank_not".
         */
        op: string;

        /**
         * The value to segment a text or number merge field with.
         */
        value: string;
    }

    /**
     * Segment by email address.
     */
    interface EmailAddress {
        /**
         * Possible value: "EmailAddress".
         */
        condition_type: string;

        /**
         * Segmenting based off of a subscriber's email address. Possible values: "merge0" or "EMAIL".
         */
        field: string;

        /**
         * Whether the email address is/not exactly, contains/doesn't contain, starts/ends with a string. Possible values: "is", "not", "contains", "notcontain", "starts", "ends", "greater", or "less".
         */
        op: string;

        /**
         * The value to compare the email against.
         */
        value: string;
    }

    /**
     * Segment by predicted gender.
     */
    interface PredictedGender {
        /**
         * Possible value: "PredictedGender".
         */
        condition_type: string;

        /**
         * Segment by predicted gender. Possible value: "predicted_gender".
         */
        field: string;

        /**
         * Members who are/not the exact criteria listed. Possible values: "is" or "not".
         */
        op: string;

        /**
         * The predicted gender to segment. Possible values: "male" or "female".
         */
        value: string;
    }

    /**
     * Segment by predicted age.
     */
    interface PredictedAge {
        /**
         * Possible value: "PredictedAge".
         */
        condition_type: string;

        /**
         * Segment by predicted age. Possible value: "predicted_age_range".
         */
        field: string;

        /**
         * Members who are/not the exact criteria listed. Possible value: "is".
         */
        op: string;

        /**
         * The predicted age to segment. Possible values: "18-24", "25-34", "35-44", "45-54", "55-64", or "65+".
         */
        value: string;
    }

    /**
     * Segment by when people subscribed.
     */
    interface NewSubscribers {
        /**
         * Possible value: "NewSubscribers".
         */
        condition_type: string;

        /**
         * Segment by when people subscribed. Possible value: "timestamp_opt".
         */
        field: string;

        /**
         * When the event took place, namely within a time frame. Possible value: "date_within".
         */
        op: string;

        /**
         * What type of data to segment on: a specific date, a specific campaign, or the last campaign sent.
         */
        value: string;
    }
}

export type AnySegmentCondition =
    | segmentConditions.AddressMerge
    | segmentConditions.Aim
    | segmentConditions.Automation
    | segmentConditions.BirthdayMerge
    | segmentConditions.CampaignPoll
    | segmentConditions.Conversation
    | segmentConditions.DateMerge
    | segmentConditions.EmailAddress
    | segmentConditions.EcommCategory
    | segmentConditions.EcommPurchased
    | segmentConditions.EcommStore
    | segmentConditions.FuzzySegment
    | segmentConditions.GoalActivity
    | segmentConditions.GoalTimestamp
    | segmentConditions.Interests
    | segmentConditions.IpGeoCountryState
    | segmentConditions.IpGeoIn
    | segmentConditions.IpGeoInZip
    | segmentConditions.IpGeoUnknown
    | segmentConditions.IpGeoZip
    | segmentConditions.Language
    | segmentConditions.MemberRating
    | segmentConditions.NewSubscribers
    | segmentConditions.PredictedAge
    | segmentConditions.PredictedGender
    | segmentConditions.SelectMerge
    | segmentConditions.SignupSource
    | segmentConditions.SocialAge
    | segmentConditions.SocialGender
    | segmentConditions.SocialInfluence
    | segmentConditions.SocialNetworkFollow
    | segmentConditions.SocialNetworkMember
    | segmentConditions.StaticSegment
    | segmentConditions.TextMerge
    | segmentConditions.VIP
    | segmentConditions.ZipMerge
    | segmentConditions.Date
    | segmentConditions.EcommNumber
    | segmentConditions.EcommSpent
    | segmentConditions.EmailClient
    | segmentConditions.SurveyMonkey;

/**
 * PingApi
 */
export namespace ping {
    interface APIHealthStatus {
        /**
         * The current status of the Mailchimp API.
         */
        health_status: string;
    }

    /**
     * A health check for the API that won't return any account-specific information.
     * @return A {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/APIHealthStatus}
     */
    function get(): APIHealthStatus | ErrorResponse;
}

/**
 * ListsApi
 */
export namespace lists {
    /**
     * @deprecated No longer used, according to Mailchimp API documentation: https://mailchimp.com/developer/marketing/api/lists/get-lists-info/
     */
    type ListVisibility = "pub" | "prv";

    interface Contact {
        company: string;
        address1: string;
        address2: string;
        city: string;
        state: string;
        zip: string;
        country: string;
        phone: string;
    }

    interface List {
        id: string;
        web_id: number;
        name: string;
        contact: Contact;
        permission_reminder: string;
        use_archive_bar: boolean;
        campaign_defaults: {
            from_name: string;
            from_email: string;
            subject: string;
            language: string;
        };
        notify_on_subscribe: boolean;
        notify_on_unsubscribe: boolean;
        date_created: TimeString;
        list_rating: number;
        email_type_option: boolean;
        subscribe_url_short: string;
        subscribe_url_long: string;
        beamer_address: string;
        visibility: ListVisibility;
        double_optin: boolean;
        has_welcome: boolean;
        marketing_permissions: boolean;
        modules: string[];
        stats: {
            member_count: number;
            total_contacts: number;
            unsubscribe_count: number;
            cleaned_count: number;
            member_count_since_send: number;
            unsubscribe_count_since_send: number;
            cleaned_count_since_send: number;
            campaign_count: number;
            campaign_last_sent: TimeString;
            merge_field_count: number;
            avg_sub_rate: number;
            avg_unsub_rate: number;
            target_sub_rate: number;
            open_rate: number;
            click_rate: number;
            last_sub_date: TimeString;
            last_unsub_date: TimeString;
        };
        _links: Link[];
    }

    interface ListOptions {
        /**
         * If true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.
         */
        skipMergeValidation?: boolean;

        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: string[];

        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: string[];

        /**
         * The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
         */
        count?: number;

        /**
         * Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip.
         * Default value is 0. (default to 0)
         */
        offset?: number;

        /**
         * Restrict response to lists created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        beforeDateCreated?: string;

        /**
         * Restrict results to lists created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        sinceDateCreated?: string;

        /**
         * Restrict results to lists created before the last campaign send date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        beforeCampaignLastSent?: string;

        /**
         * Restrict results to lists created after the last campaign send date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        sinceCampaignLastSent?: string;

        /**
         * Restrict results to lists that include a specific subscriber's email address.
         */
        email?: string;

        /**
         * Returns files sorted by the specified field.
         */
        sortField?: string;

        /**
         * Determines the order direction for sorted results.
         */
        sortDir?: string;

        /**
         * Restrict results to lists that contain an active, connected, undeleted ecommerce store.
         */
        hasEcommerceStore?: boolean;

        /**
         * Return the total_contacts field in the stats response, which contains an approximate count of all contacts in any state.
         */
        includeTotalContacts?: boolean;

        /**
         * Return merge fields with the specified type.
         */
        type?: MergeFieldType;

        /**
         * Return merge fields that are of the specified required type.
         */
        required?: boolean;
    }

    interface ListsSuccessResponse {
        lists: List[];
        total_items: number;
        constraints: {
            may_create: boolean;
            max_instances: number;
            current_total_instances: number;
        };
        _links: Link[];
    }

    type ListStatusTag = "active" | "inactive";

    interface AddListMemberBody extends Body {
        email_address: string;
        tags?: string[] | undefined;
    }

    interface UpdateListMemberBody extends Body {
        email_address?: string | undefined;
    }

    interface SetListMemberBody extends Body {
        email_address: string;
        status_if_new: Status;
    }

    interface ListTagBody {
        name: string;
        status: ListStatusTag;
    }

    interface MemberTagsBody {
        tags: ListTagBody[];
    }

    interface MembersSuccessResponse {
        id: string;
        email_address: string;
        unique_email_id: string;
        contact_id: string;
        full_name: string;
        web_id: number;
        email_type: string;
        status: string;
        unsubscribe_reason: string;
        consents_to_one_to_one_messaging: boolean;
        merge_fields: Record<string, any>;
        interests: Record<string, any>;
        stats: MemberStats;
        ip_signup: string;
        timestamp_signup: string;
        ip_opt: string;
        timestamp_opt: string;
        member_rating: string;
        last_changed: string;
        language: string;
        vip: boolean;
        email_client: string;
        location: FullMemberLocation;
        marketing_permissions: MemberMarketingPermissions[];
        last_note: MemberLastNote;
        source: string;
        tags_count: number;
        tags: Tags[];
        list_id: string;
        _links: Link[];
    }

    interface MemberStats {
        avg_open_rate: number;
        avg_click_rate: number;
        ecommerce_data: MemberEcommerceData;
    }

    interface MemberEcommerceData {
        total_revenue: number;
        number_of_orders: number;
        currency_code: number;
    }

    interface MemberLocation {
        latitude: number;
        logitude: number;
    }

    interface FullMemberLocation extends MemberLocation {
        gmtoff: number;
        dstoff: number;
        country_code: string;
        timezone: string;
        region: string;
    }

    interface MemberMarketingPermissions extends MemberMarketingPermissionsInput {
        text: string;
    }

    interface MemberMarketingPermissionsInput {
        marketing_permission_id: string;
        enabled: boolean;
    }

    interface MemberLastNote {
        note_id: number;
        created_at: string;
        created_by: string;
        note: string;
    }

    interface Tags {
        id: number;
        name: string;
    }

    interface MergeField {
        merge_id: number;
        tag: string;
        name: string;
        type: MergeFieldType;
        required: boolean;
        default_value: string;
        public: boolean;
        display_order: number;
        options: {
            default_country: number;
            phone_format: string;
            date_format: string;
            choices: string[];
            size: number;
        };
        help_text: string;
        list_id: string;
        _links: Link[];
    }

    interface MergeFieldSuccessResponse {
        merge_fields: MergeField[];
        list_id: string;
        total_items: number;
        _links: Link[];
    }

    interface BatchListMembersOpts {
        skipMergeValidation?: boolean;
        skipDuplicateCheck?: boolean;
    }

    interface BatchListMembersResponse {
        new_members?: MembersSuccessResponse[];
        updated_members?: MembersSuccessResponse[];
        errors?: Array<{
            email_address: string;
            error: string;
            error_code: string;
            field: string;
            field_message: string;
        }>;
    }

    type EmailType = "text" | "html";

    interface BatchListMembersBodyMembersObject {
        email_address: string;
        email_type: EmailType;
        status: Status;
        vip?: boolean;
        location?: {
            latitude: number;
            longtitude: number;
        };
        tags?: string[]; // non-documented tho still available to use
        ip_signup?: string;
        timestamp_signup?: string;
        ip_opt?: string;
        timestamp_opt?: string;
        language?: string; // https://mailchimp.com/help/view-and-edit-contact-languages/
        merge_fields?: { [k: string]: string }; // https://mailchimp.com/developer/marketing/docs/merge-fields/#structure
    }

    interface BatchListMembersBody {
        members: BatchListMembersBodyMembersObject[];
        sync_tags?: boolean;
        update_existing?: boolean;
    }

    interface CreateListMemberEventBody extends Body {
        name: string;
        properties?: object | undefined;
        is_syncing?: boolean | undefined;
        occurred_at?: string | undefined;
    }

    interface Category {
        list_id: string;
        id: string;
        title: string;
        display_order: number;
        type: string;
        _links: Link[];
    }

    interface GetListInterestCategoriesResponse {
        list_id: string;
        categories: Category[];
        total_items: number;
        _links: Link[];
    }

    interface Interest {
        category_id: string;
        list_id: string;
        id: string;
        name: string;
        subscriber_count: string;
        display_order: number;
        _links: Link[];
    }

    interface ListInterestCategoryInterestsResponse {
        list_id: string;
        category_id: string;
        interests: Interest[];
        total_items: number;
        _links: Link[];
    }

    interface ListMemberTagsOptions {
        /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
        fields?: string[];
        /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
        excludeFields?: string[];
        /** The number of records to return. */
        count?: number;
        /** The number of records from a collection to skip. Iterating over large collections with this parameter can be slow. */
        offset?: number;
    }

    interface ListMemberTag extends Tags {
        /** The date and time the tag was added to the list member in ISO 8601 format. */
        date_added: string;
    }

    interface ListMemberTagsResponse {
        tags: ListMemberTag[];
        total_items: number;
        _links: Link[];
    }

    /**
     * Batch subscribe or unsubscribe
     * https://mailchimp.com/developer/marketing/api/lists/batch-subscribe-or-unsubscribe//
     * @param listId The unique ID for the list.
     * @param body
     * @param opts Optional parameters
     */
    function batchListMembers(
        listId: string,
        body: BatchListMembersBody,
        opts?: BatchListMembersOpts,
    ): Promise<BatchListMembersResponse | ErrorResponse>;

    /**
     * Add or update a list member.
     * @param listId The unique ID for the list.
     * @param subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param body
     * @param opts Optional parameters
     * @param opts.skipMergeValidation If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.
     * @return A {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMembers2}
     */
    function setListMember(
        listId: string,
        subscriberHash: string,
        body: SetListMemberBody,
        opts?: ListOptions,
    ): Promise<MembersSuccessResponse | ErrorResponse>;

    /**
     * Get information about a specific list member, including a currently subscribed, unsubscribed, or bounced member.
     * @param listId The unique ID for the list.
     * @param subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param opts Optional parameters
     * @param opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return A {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMembers2}
     */
    function getListMember(
        listId: string,
        subscriberHash: string,
        opts?: ListOptions,
    ): Promise<MembersSuccessResponse | ErrorResponse>;

    /**
     * Add a new member to the list.
     * @param listId The unique ID for the list.
     * @param body
     * @param opts Optional parameters
     * @param opts.skipMergeValidation If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.
     * @return A {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMembers2}
     */
    function addListMember(
        listId: string,
        body: AddListMemberBody,
        opts?: ListOptions,
    ): Promise<MembersSuccessResponse | ErrorResponse>;

    /**
     * Update information for a specific list member.
     * @param listId The unique ID for the list.
     * @param subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param body
     * @param opts Optional parameters
     * @param opts.skipMergeValidation If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.
     * @return A {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMembers2}
     */
    function updateListMember(
        listId: string,
        subscriberHash: string,
        body: UpdateListMemberBody,
        opts?: ListOptions,
    ): Promise<MembersSuccessResponse | ErrorResponse>;

    /**
     * Archive list member
     * Archive a list member. To permanently delete, use the delete-permanent action.
     * @param listId The unique ID for the list.
     * @param subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @return A {@link https://www.promisejs.org/|Promise}
     */
    function deleteListMember(listId: string, subscriberHash: string): Promise<{} | ErrorResponse>;

    /**
     * Delete list member
     * Delete all personally identifiable information related to a list member, and remove them from a list. This will make it impossible to re-import the list member.
     * @param listId The unique ID for the list.
     * @param subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @return A {@link https://www.promisejs.org/|Promise}
     */
    function deleteListMemberPermanent(listId: string, subscriberHash: string): Promise<{} | ErrorResponse>;

    /**
     * Get the tags on a list member.
     * @see https://mailchimp.com/developer/marketing/api/list-member-tags/list-member-tags/
     * @param listId The unique ID for the list.
     * @param subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @param opts Optional parameters
     * @param opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination),
     */
    function getListMemberTags(
        listId: string,
        subscriberHash: string,
        opts?: ListMemberTagsOptions,
    ): Promise<ListMemberTagsResponse | ErrorResponse>;

    /**
     * Add or remove member tags
     * Add or remove tags from a list member. If a tag that does not exist is passed in and set as 'active', a new tag will be created.
     * @param listId The unique ID for the list.
     * @param subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @param body
     * @return A {@link https://www.promisejs.org/|Promise}
     */
    function updateListMemberTags(listId: string, subscriberHash: string, body: any): Promise<{} | ErrorResponse>;

    /**
     * Get information about all lists in the account.
     * @param opts Optional parameters
     * @param opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination),
     * this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param opts.beforeDateCreated Restrict response to lists created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param opts.sinceDateCreated Restrict results to lists created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param opts.beforeCampaignLastSent Restrict results to lists created before the last campaign send date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param opts.sinceCampaignLastSent Restrict results to lists created after the last campaign send date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
     * @param opts.email Restrict results to lists that include a specific subscriber's email address.
     * @param opts.sortField Returns files sorted by the specified field.
     * @param opts.sortDir Determines the order direction for sorted results.
     * @param opts.hasEcommerceStore Restrict results to lists that contain an active, connected, undeleted ecommerce store.
     * @param opts.includeTotalContacts Return the total_contacts field in the stats response, which contains an approximate count of all contacts in any state.
     * @return A {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriberLists}
     */
    function getAllLists(opts?: ListOptions): Promise<ListsSuccessResponse | ErrorResponse>;

    /**
     * Get the merge fields for a list.
     * @param listId The unique ID for the list.
     * @param opts Optional parameters
     * @param opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @param opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
     * @param opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination),
     * this it the number of records from a collection to skip. Default value is 0. (default to 0)
     * @param opts.type The type of merge filed to return.
     * @param opts.required Whether to return required merge fields or not.
     * @return A {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MergeFieldSuccessResponse}
     */
    function getListMergeFields(listId: string, opts?: ListOptions): Promise<MergeFieldSuccessResponse | ErrorResponse>;

    /**
     * Add an event for a list member.
     * @param listId The unique ID for the list.
     * @param subscriberHash The MD5 hash of the lowercase version of the list member's email address.
     * @param body
     * @param body.name The name for this type of event ('purchased', 'visited', etc). Must be 2-30 characters in length
     * @param body.properties An optional list of properties
     * @param body.is_syncing Events created with the is_syncing value set to true will not trigger automations.
     * @param body.occurred_at The date and time the event occurred in ISO 8601 format.
     * @return A {@link https://www.promisejs.org/|Promise}, with empty response
     */
    function createListMemberEvent(
        listId: string,
        subscriberHash: string,
        body: CreateListMemberEventBody,
    ): Promise<{} | ErrorResponse>;

    /**
     * Get a list of interest categories.
     * @param listId The unique ID for the list.
     * @return A {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetListInterestCategoriesResponse}
     */
    function getListInterestCategories(listId: string): Promise<GetListInterestCategoriesResponse | ErrorResponse>;

    /**
     * Get a list of interests in a specific interest category.
     * @param listId The unique ID for the list.
     * @param interestCategoryId The unique ID for the interest category.
     * @return A {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListInterestCategoryInterestsResponse}
     */
    function listInterestCategoryInterests(
        listId: string,
        interestCategoryId: string,
    ): Promise<ListInterestCategoryInterestsResponse | ErrorResponse>;
}

/**
 * Campaigns API
 */
export namespace campaigns {
    interface Campaigns {
        /**
         * A string that uniquely identifies this campaign.
         */
        id: string;

        /**
         * The ID used in the Mailchimp web application. View this campaign in your Mailchimp account at https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}.
         */
        web_id: string;

        /**
         * If this campaign is the child of another campaign, this identifies the parent campaign. For Example, for RSS or Automation children.
         */
        parent_campaign_id: string;

        /**
         * There are four types of [campaigns](https://mailchimp.com/help/getting-started-with-campaigns/) you can create in Mailchimp. A/B Split campaigns have been deprecated and variate campaigns should be used instead. Possible values: "regular", "plaintext", "absplit", "rss", or "variate".
         */
        type: string;

        /**
         * The date and time the campaign was created in ISO 8601 format.
         */
        create_time: TimeString;

        /**
         * The link to the campaign's archive version in ISO 8601 format.
         */
        archive_url: string;

        /**
         * The original link to the campaign's archive version.
         */
        long_archive_url: string;

        /**
         * The current status of the campaign. Possible values: "save", "paused", "schedule", "sending", "sent", "canceled", "canceling", or "archived".
         */
        status: string;

        /**
         * The total number of emails sent for this campaign.
         */
        emails_sent: number;

        /**
         * The date and time a campaign was sent.
         */
        send_time: TimeString;

        /**
         * How the campaign's content is put together. Possible values: "template", "html", "url", or "multichannel".
         */
        content_type: string;

        /**
         * Determines if the campaign needs its blocks refreshed by opening the web-based campaign editor. Deprecated and will always return false.
         */
        needs_block_refresh: boolean;

        /**
         * Determines if the campaign qualifies to be resent to non-openers.
         */
        resendable: boolean;

        /**
         * List settings for the campaign.
         */
        recipients: {
            /**
             * The unique list id.
             */
            list_id: string;

            /**
             * The status of the list used, namely if it's deleted or disabled.
             */
            list_is_active: boolean;

            /**
             * The name of the list.
             */
            list_name: string;

            /**
             * A description of the [segment](https://mailchimp.com/help/create-and-send-to-a-segment/) used for the campaign. Formatted as a string marked up with HTML.
             */
            segment_text: string;

            /**
             * Count of the recipients on the associated list. Formatted as an integer.
             */
            recipient_count: number;

            /**
             * An object representing all segmentation options. This object should contain a saved_segment_id to use an existing segment, or you can create a new segment by including both match and conditions options.
             */
            segment_opts: {
                /**
                 * The id for an existing saved segment.
                 */
                saved_segment_id: number;

                /**
                 * The prebuilt segment id, if a prebuilt segment has been designated for this campaign.
                 */
                prebuilt_segment_id: string;

                /**
                 * Segment match type. Possible values: "any" or "all".
                 */
                match: string;

                /**
                 * Segment match conditions. There are multiple possible types, see the [condition types documentation](https://mailchimp.com/developer/marketing/docs/alternative-schemas/#segment-condition-schemas).
                 */
                conditions: AnySegmentCondition[];
            };
        };

        /**
         * The settings for your campaign, including subject, from name, reply-to address, and more.
         */
        settings: {
            /**
             * The subject line for the campaign.
             */
            subject_line: string;

            /**
             * The preview text for the campaign.
             */
            preview_text: string;

            /**
             * The title of the campaign.
             */
            title: string;

            /**
             * The 'from' name on the campaign (not an email address).
             */
            from_name: string;

            /**
             * The reply-to email address for the campaign.
             */
            reply_to: string;

            /**
             * Use Mailchimp Conversation feature to manage out-of-office replies.
             */
            use_conversation: boolean;

            /**
             * The campaign's custom 'To' name. Typically the first name [audience field](https://mailchimp.com/help/getting-started-with-merge-tags/).
             */
            to_name: string;

            /**
             * If the campaign is listed in a folder, the id for that folder.
             */
            folder_id: string;

            /**
             * Whether Mailchimp [authenticated](https://mailchimp.com/help/about-email-authentication/) the campaign. Defaults to true.
             */
            authenticate: boolean;

            /**
             * Automatically append Mailchimp's [default footer](https://mailchimp.com/help/about-campaign-footers/) to the campaign.
             */
            auto_footer: boolean;

            /**
             * Automatically inline the CSS included with the campaign content.
             */
            inline_css: boolean;

            /**
             * Automatically tweet a link to the [campaign archive](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) page when the campaign is sent.
             */
            auto_tweet: boolean;

            /**
             * An array of [Facebook](https://mailchimp.com/help/connect-or-disconnect-the-facebook-integration/) page ids to auto-post to.
             */
            auto_fb_post: string[];

            /**
             * Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to true.
             */
            fb_comments: boolean;

            /**
             * Send this campaign using [Timewarp](https://mailchimp.com/help/use-timewarp/).
             */
            timewarp: boolean;

            /**
             * The id for the template used in this campaign.
             */
            template_id: number;

            /**
             * Whether the campaign uses the drag-and-drop editor.
             */
            drag_and_drop: boolean;
        };

        /**
         * The settings specific to A/B test campaigns.
         */
        variate_settings: {
            /**
             * ID for the winning combination.
             */
            winning_combination_id: string;

            /**
             * ID of the campaign that was sent to the remaining recipients based on the winning combination.
             */
            winning_campaign_id: string;

            /**
             * The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue -- or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_criteria is ignored. For Multivariate Campaigns with 'manual' as the winner_criteria, the winner must be chosen in the Mailchimp web application. Possible values: "opens", "clicks", "manual", or "total_revenue".
             */
            winner_criteria: string;

            /**
             * The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes.
             */
            wait_time: number;

            /**
             * The percentage of recipients to send the test combinations to, must be a value between 10 and 100.
             */
            test_size: number;

            /**
             * The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used.
             */
            subject_lines: string[];

            /**
             * The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored.
             */
            send_times: TimeString[];

            /**
             * The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used.
             */
            from_names: string[];

            /**
             * The possible reply-to addresses. The number of reply_to_addresses provided must match the number of from_names. If no reply_to_addresses are provided, settings.reply_to will be used.
             */
            reply_to_addresses: string[];

            /**
             * Descriptions of possible email contents. To set campaign contents, make a PUT request to /campaigns/{campaign_id}/content with the field 'variate_contents'.
             */
            contents: string[];

            /**
             * Combinations of possible variables used to build emails.
             */
            combinations: Array<{
                /**
                 * Unique ID for the combination.
                 */
                id: string;

                /**
                 * The index of variate_settings.subject_lines used.
                 */
                subject_line: number;

                /**
                 * The index of variate_settings.send_times used.
                 */
                send_time: number;

                /**
                 * The index of variate_settings.from_names used.
                 */
                from_name: number;

                /**
                 * The index of variate_settings.reply_to_addresses used.
                 */
                reply_to: number;

                /**
                 * The index of variate_settings.contents used.
                 */
                content_description: number;

                /**
                 * The number of recipients for this combination.
                 */
                recipients: number;
            }>;
        };

        /**
         * The tracking options for a campaign.
         */
        tracking: {
            /**
             * Whether to [track opens](https://mailchimp.com/help/about-open-tracking/). Defaults to true. Cannot be set to false for variate campaigns.
             */
            opens: boolean;

            /**
             * Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the HTML version of the campaign. Defaults to true. Cannot be set to false for variate campaigns.
             */
            html_clicks: boolean;

            /**
             * Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the plain-text version of the campaign. Defaults to true. Cannot be set to false for variate campaigns.
             */
            text_clicks: boolean;

            /**
             * @deprecated No longer used, according to Mailchimp API documentation: https://mailchimp.com/developer/marketing/api/campaigns/list-campaigns/
             */
            goal_tracking: boolean;

            /**
             * Whether to enable e-commerce tracking.
             */
            ecomm360: boolean;

            /**
             * The custom slug for [Google Analytics](https://mailchimp.com/help/integrate-google-analytics-with-mailchimp/) tracking (max of 50 bytes).
             */
            google_analytics: string;

            /**
             * The custom slug for [ClickTale](https://mailchimp.com/help/additional-tracking-options-for-campaigns/) tracking (max of 50 bytes).
             */
            clicktale: string;

            /**
             * @deprecated No longer used, according to Mailchimp API documentation: https://mailchimp.com/developer/marketing/api/campaigns/list-campaigns/
             */
            salesforce: {
                /**
                 * Create a campaign in a connected Salesforce account.
                 */
                campaign: boolean;

                /**
                 * Update contact notes for a campaign based on subscriber email addresses.
                 */
                notes: boolean;
            };

            /**
             * @deprecated No longer used, according to Mailchimp API documentation: https://mailchimp.com/developer/marketing/api/campaigns/list-campaigns/
             */
            capsule: {
                /**
                 * Update contact notes for a campaign based on subscriber email addresses.
                 */
                notes: boolean;
            };
        };

        /**
         * [RSS](https://mailchimp.com/help/share-your-blog-posts-with-mailchimp/) options for a campaign.
         */
        rss_opts: {
            /**
             * The URL for the RSS feed.
             */
            feed_url: string;

            /**
             * The frequency of the RSS Campaign. Possible values: "daily", "weekly", or "monthly".
             */
            frequency: string;

            /**
             * The schedule for sending the RSS Campaign.
             */
            schedule: {
                /**
                 * The hour to send the campaign in local time. Acceptable hours are 0-23. For example, '4' would be 4am in your account's default time zone.
                 */
                hour: number;

                /**
                 * The days of the week to send a daily RSS Campaign.
                 */
                daily_send: {
                    /**
                     * Sends the daily RSS Campaign on Sundays.
                     */
                    sunday: boolean;

                    /**
                     * Sends the daily RSS Campaign on Mondays.
                     */
                    monday: boolean;

                    /**
                     * Sends the daily RSS Campaign on Tuesdays.
                     */
                    tuesday: boolean;

                    /**
                     * Sends the daily RSS Campaign on Wednesdays.
                     */
                    wednesday: boolean;

                    /**
                     * Sends the daily RSS Campaign on Thursdays.
                     */
                    thursday: boolean;

                    /**
                     * Sends the daily RSS Campaign on Fridays.
                     */
                    friday: boolean;

                    /**
                     * Sends the daily RSS Campaign on Saturdays.
                     */
                    saturday: boolean;
                };

                /**
                 * The day of the week to send a weekly RSS Campaign. Possible values: "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", or "saturday".
                 */
                weekly_send_day: string;

                /**
                 * The day of the month to send a monthly RSS Campaign. Acceptable days are 0-31, where '0' is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February.
                 */
                monthly_send_date: number;
            };
            /**
             * The date the campaign was last sent.
             */
            last_sent: string;

            /**
             * Whether to add CSS to images in the RSS feed to constrain their width in campaigns.
             */
            constrain_rss_img: boolean;
        };

        /**
         * [A/B Testing](https://mailchimp.com/help/about-ab-testing-campaigns/) options for a campaign.
         */
        ab_split_opts: {
            /**
             * The type of AB split to run. Possible values: "subject", "from_name", or "schedule".
             */
            split_test: string;

            /**
             * How we should evaluate a winner. Based on 'opens', 'clicks', or 'manual'. Possible values: "opens", "clicks", or "manual".
             */
            pick_winner: string;

            /**
             * How unit of time for measuring the winner ('hours' or 'days'). This cannot be changed after a campaign is sent. Possible values: "hours" or "days".
             */
            wait_units: string;

            /**
             * The amount of time to wait before picking a winner. This cannot be changed after a campaign is sent.
             */
            wait_time: number;

            /**
             * The size of the split groups. Campaigns split based on 'schedule' are forced to have a 50/50 split. Valid split integers are between 1-50.
             */
            split_size: number;

            /**
             * For campaigns split on 'From Name', the name for Group A.
             */
            from_name_a: string;

            /**
             * For campaigns split on 'From Name', the name for Group B.
             */
            from_name_b: string;

            /**
             * For campaigns split on 'From Name', the reply-to address for Group A.
             */
            reply_email_a: string;

            /**
             * For campaigns split on 'From Name', the reply-to address for Group B.
             */
            reply_email_b: string;

            /**
             * For campaigns split on 'Subject Line', the subject line for Group A.
             */
            subject_a: string;

            /**
             * For campaigns split on 'Subject Line', the subject line for Group B.
             */
            subject_b: string;

            /**
             * The send time for Group A.
             */
            send_time_a: string;

            /**
             * The send time for Group B.
             */
            send_time_b: string;

            /**
             * The send time for the winning version.
             */
            send_time_winner: string;
        };
        /**
         * The preview for the campaign, rendered by social networks like Facebook and Twitter. [Learn more](https://mailchimp.com/help/enable-and-customize-social-cards/).
         */
        social_card: {
            /**
             * The url for the header image for the card.
             */
            image_url: string;

            /**
             * A short summary of the campaign to display.
             */
            description: string;

            /**
             * The title for the card. Typically the subject line of the campaign.
             */
            title: string;
        };

        /**
         * For sent campaigns, a summary of opens, clicks, and e-commerce data.
         */
        report_summary: {
            /**
             * The total number of opens for a campaign.
             */
            opens: number;

            /**
             * The number of unique opens.
             */
            unique_opens: number;

            /**
             * The number of unique opens divided by the total number of successful deliveries.
             */
            open_rate: number;

            /**
             * The total number of clicks for an campaign.
             */
            clicks: number;

            /**
             * The number of unique clicks.
             */
            subscriber_clicks: number;

            /**
             * The number of unique clicks divided by the total number of successful deliveries.
             */
            click_rate: number;

            /**
             * E-Commerce stats for a campaign.
             */
            ecommerce: {
                /**
                 * The total orders for a campaign.
                 */
                total_orders: number;

                /**
                 * The total spent for a campaign. Calculated as the sum of all order totals with no deductions.
                 */
                total_spent: number;

                /**
                 * The total revenue for a campaign. Calculated as the sum of all order totals minus shipping and tax totals.
                 */
                total_revenue: number;
            };
        };

        /**
         * Updates on campaigns in the process of sending.
         */
        delivery_status: {
            /**
             * Whether Campaign Delivery Status is enabled for this account and campaign.
             */
            enabled: boolean;

            /**
             * Whether a campaign send can be canceled.
             */
            can_cancel: boolean;

            /**
             * The current state of a campaign delivery. Possible values: "delivering", "delivered", "canceling", or "canceled".
             */
            status: string;

            /**
             * The total number of emails confirmed sent for this campaign so far.
             */
            emails_sent: number;

            /**
             * The total number of emails canceled for this campaign.
             */
            emails_canceled: number;
        };
        _links: Link[];
    }

    interface CampaignsOptions {
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: string[];

        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: string[];

        /**
         * The number of records to return. Default value is 10. Maximum value is 1000
         */
        count?: number;

        /**
         * Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
         */
        offset?: number;

        /**
         * The campaign type. Possible values: "regular", "plaintext", "absplit", "rss", or "variate".
         */
        type?: string;

        /**
         * The status of the campaign. Possible values: "save", "paused", "schedule", "sending", or "sent".
         */
        status?: string;

        /**
         * Restrict the response to campaigns sent before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        beforeSendTime?: TimeString;

        /**
         * Restrict the response to campaigns sent after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        sinceSendTime?: TimeString;

        /**
         * Restrict the response to campaigns created before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        beforeCreateTime?: TimeString;

        /**
         * Restrict the response to campaigns created after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        sinceCreateTime?: TimeString;

        /**
         * The unique id for the list.
         */
        listId?: string;

        /**
         * The unique folder id.
         */
        folderId?: string;

        /**
         * Retrieve campaigns sent to a particular list member. Member ID is The MD5 hash of the lowercase version of the list member’s email address.
         */
        memberId?: string;

        /**
         * Returns files sorted by the specified field. Possible values: "create_time" or "send_time".
         */
        sortField?: string;

        /**
         * Determines the order direction for sorted results. Possible values: "ASC" or "DESC".
         */
        sortDir?: string;
    }

    interface GetCampaignContentOptions {
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: string[];

        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: string[];
    }

    interface CampaignsSuccessResponse {
        /**
         * An array of campaigns.
         */
        campaigns: Campaigns[];

        /**
         * The total number of items matching the query regardless of pagination.
         */
        total_items: number;

        /**
         * A list of link types and descriptions for the API schema documents.
         */
        _links: Link[];
    }

    interface CampaignContentSuccessResponse {
        variate_contents: Array<{
            content_label: string;
            plain_text: string;
            html: string;
        }>;
        plain_text: string;
        html: string;
        archive_html: string;
        _links: Link[];
    }

    /**
     * Get all campaigns in an account
     * @param opts Optional parameters, see {@link CampaignsOptions}
     * @return A {@link https://www.promisejs.org/|Promise}, with data of type {@link CampaignsSuccessResponse}
     */
    function list(opts?: CampaignsOptions): Promise<CampaignsSuccessResponse | ErrorResponse>;

    /**
     * Get the the HTML and plain-text content for a campaign.
     * @param campaign_id The unique id for the campaign.
     * @param opts Optional parameters, see {@link GetCampaignContentOptions}
     */
    function getContent(
        campaign_id: string,
        opts?: GetCampaignContentOptions,
    ): Promise<CampaignContentSuccessResponse | ErrorResponse>;
}

/**
 * Customer Journeys API
 */
export namespace customerJourneys {
    interface TriggerCustomerJourneyBody {
        email_address: string;
    }

    /**
     * Customer Journeys API trigger for a contact
     * @param journey_id The unique ID for the journey.
     * @param step_id The unique ID for the step.
     * @param body
     * @param body.email_address The list member's email address.
     * @return A {@link https://www.promisejs.org/|Promise}
     */
    function trigger(
        journey_id: number,
        step_id: number,
        body: TriggerCustomerJourneyBody,
    ): Promise<null | ErrorResponse>;
}
