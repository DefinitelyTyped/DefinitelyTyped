// Type definitions for @mailchimp/mailchimp_marketing 3.0
// Project: https://github.com/mailchimp/mailchimp-client-lib-codegen
// Definitions by: Jan Müller <https://github.com/rattkin>
//                 Jérémy Barbet <https://github.com/jeremybarbet>
//                 Daniel Castro <https://github.com/odanieldcs>
//                 Edwin Finch <https://github.com/edwinfinch>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// API Documentation: https://mailchimp.com/developer/marketing/api/

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

export type Status = 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';

export type MergeFieldType =  'text'| 'number'| 'address'| 'phone'| 'date'| 'url'| 'imageurl'| 'radio'| 'dropdown'| 'birthday' | 'zip';

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
            logitude: number;
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
    type ListVisibility = 'pub' | 'prv';

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

    type ListStatusTag = 'active' | 'inactive';

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

    type EmailType = "text"|"html";

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
      merge_fields?: {[k: string]: string}; // https://mailchimp.com/developer/marketing/docs/merge-fields/#structure
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

    /**
     * Batch subscribe or unsubscribe
     * https://mailchimp.com/developer/marketing/api/lists/batch-subscribe-or-unsubscribe//
     * @param listId The unique ID for the list.
     * @param body
     * @param opts Optional parameters
     */
    function batchListMembers(listId: string, body: BatchListMembersBody, opts?: BatchListMembersOpts): Promise<BatchListMembersResponse | ErrorResponse>;

    /**
     * Add or update a list member.
     * @param listId The unique ID for the list.
     * @param subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param body
     * @param opts Optional parameters
     * @param opts.skipMergeValidation If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.
     * @return A {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMembers2}
     */
    function setListMember(listId: string, subscriberHash: string, body: SetListMemberBody, opts?: ListOptions): Promise<MembersSuccessResponse | ErrorResponse>;

    /**
     * Get information about a specific list member, including a currently subscribed, unsubscribed, or bounced member.
     * @param listId The unique ID for the list.
     * @param subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param opts Optional parameters
     * @param opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
     * @param opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
     * @return A {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMembers2}
     */
    function getListMember(listId: string, subscriberHash: string, opts?: ListOptions): Promise<MembersSuccessResponse | ErrorResponse>;

    /**
     * Add a new member to the list.
     * @param listId The unique ID for the list.
     * @param body
     * @param opts Optional parameters
     * @param opts.skipMergeValidation If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.
     * @return A {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMembers2}
     */
    function addListMember(listId: string, body: AddListMemberBody, opts?: ListOptions): Promise<MembersSuccessResponse | ErrorResponse>;

    /**
     * Update information for a specific list member.
     * @param listId The unique ID for the list.
     * @param subscriberHash The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
     * @param body
     * @param opts Optional parameters
     * @param opts.skipMergeValidation If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.
     * @return A {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMembers2}
     */
    function updateListMember(listId: string, subscriberHash: string, body: UpdateListMemberBody, opts?: ListOptions): Promise<MembersSuccessResponse | ErrorResponse>;

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
    function createListMemberEvent(listId: string, subscriberHash: string, body: CreateListMemberEventBody): Promise<{} | ErrorResponse>;
}
