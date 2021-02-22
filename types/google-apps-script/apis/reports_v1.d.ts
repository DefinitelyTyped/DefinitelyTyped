// Type definitions for Google Apps Script 2021-02-11
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/mtgto/dts-google-apps-script-advanced
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
    namespace AdminReports {
        namespace Collection {
            interface ActivitiesCollection {
                // Retrieves a list of activities for a specific customer's account and application such as the Admin console application
                // or the Google Drive application. For more information, see the guides for administrator and Google Drive activity
                // reports. For more information about the activity report's parameters, see the activity parameters reference guides.
                list(userKey: string, applicationName: string): Schema.Activities;
                // Retrieves a list of activities for a specific customer's account and application such as the Admin console application
                // or the Google Drive application. For more information, see the guides for administrator and Google Drive activity
                // reports. For more information about the activity report's parameters, see the activity parameters reference guides.
                list(userKey: string, applicationName: string, optionalArgs: object): Schema.Activities;
                // Start receiving notifications for account activities. For more information, see Receiving Push Notifications.
                watch(resource: Schema.Channel, userKey: string, applicationName: string): Schema.Channel;
                // Start receiving notifications for account activities. For more information, see Receiving Push Notifications.
                watch(resource: Schema.Channel, userKey: string, applicationName: string, optionalArgs: object): Schema.Channel;
            }
            interface ChannelsCollection {
                // Stop watching resources through this channel.
                stop(resource: Schema.Channel): void;
            }
            interface CustomerUsageReportsCollection {
                // Retrieves a report which is a collection of properties and statistics for a specific customer's account. For more
                // information, see the Customers Usage Report guide. For more information about the customer report's parameters, see the
                // Customers Usage parameters reference guides.
                get(date: string): Schema.UsageReports;
                // Retrieves a report which is a collection of properties and statistics for a specific customer's account. For more
                // information, see the Customers Usage Report guide. For more information about the customer report's parameters, see the
                // Customers Usage parameters reference guides.
                get(date: string, optionalArgs: object): Schema.UsageReports;
            }
            interface EntityUsageReportsCollection {
                // Retrieves a report which is a collection of properties and statistics for entities used by users within the account. For
                // more information, see the Entities Usage Report guide. For more information about the entities report's parameters, see
                // the Entities Usage parameters reference guides.
                get(entityType: string, entityKey: string, date: string): Schema.UsageReports;
                // Retrieves a report which is a collection of properties and statistics for entities used by users within the account. For
                // more information, see the Entities Usage Report guide. For more information about the entities report's parameters, see
                // the Entities Usage parameters reference guides.
                get(entityType: string, entityKey: string, date: string, optionalArgs: object): Schema.UsageReports;
            }
            interface UserUsageReportCollection {
                // Retrieves a report which is a collection of properties and statistics for a set of users with the account. For more
                // information, see the User Usage Report guide. For more information about the user report's parameters, see the Users
                // Usage parameters reference guides.
                get(userKey: string, date: string): Schema.UsageReports;
                // Retrieves a report which is a collection of properties and statistics for a set of users with the account. For more
                // information, see the User Usage Report guide. For more information about the user report's parameters, see the Users
                // Usage parameters reference guides.
                get(userKey: string, date: string, optionalArgs: object): Schema.UsageReports;
            }
        }
        namespace Schema {
            // JSON template for a collection of activities.
            interface Activities {
                // ETag of the resource.
                etag?: string;
                // Each activity record in the response.
                items?: Schema.Activity[];
                // The type of API resource. For an activity report, the value is `reports#activities`.
                kind?: string;
                // Token for retrieving the follow-on next page of the report. The `nextPageToken` value is used in the request's
                // `pageToken` query string.
                nextPageToken?: string;
            }
            // JSON template for the activity resource.
            interface Activity {
                // User doing the action.
                actor?: Schema.ActivityActor;
                // ETag of the entry.
                etag?: string;
                // Activity events in the report.
                events?: Schema.ActivityEvents[];
                // Unique identifier for each activity record.
                id?: Schema.ActivityId;
                // IP address of the user doing the action. This is the Internet Protocol (IP) address of the user when logging into G
                // Suite which may or may not reflect the user's physical location. For example, the IP address can be the user's proxy
                // server's address or a virtual private network (VPN) address. The API supports IPv4 and IPv6.
                ipAddress?: string;
                // The type of API resource. For an activity report, the value is `audit#activity`.
                kind?: string;
                // This is the domain that is affected by the report's event. For example domain of Admin console or the Drive
                // application's document owner.
                ownerDomain?: string;
            }
            // User doing the action.
            interface ActivityActor {
                // The type of actor.
                callerType?: string;
                // The primary email address of the actor. May be absent if there is no email address associated with the actor.
                email?: string;
                // Only present when `callerType` is `KEY`. Can be the `consumer_key` of the requestor for OAuth 2LO API requests or an
                // identifier for robot accounts.
                key?: string;
                // The unique G Suite profile ID of the actor. May be absent if the actor is not a G Suite user.
                profileId?: string;
            }
            interface ActivityEvents {
                // Name of the event. This is the specific name of the activity reported by the API. And each `eventName` is related to a
                // specific G Suite service or feature which the API organizes into types of events. For `eventName` request parameters in
                // general: - If no `eventName` is given, the report returns all possible instances of an `eventName`. - When you request
                // an `eventName`, the API's response returns all activities which contain that `eventName`. It is possible that the
                // returned activities will have other `eventName` properties in addition to the one requested. For more information about
                // `eventName` properties, see the list of event names for various applications above in `applicationName`.
                name?: string;
                // Parameter value pairs for various applications. For more information about `eventName` parameters, see the list of event
                // names for various applications above in `applicationName`.
                parameters?: Schema.ActivityEventsParameters[];
                // Type of event. The G Suite service or feature that an administrator changes is identified in the `type` property which
                // identifies an event using the `eventName` property. For a full list of the API's `type` categories, see the list of
                // event names for various applications above in `applicationName`.
                type?: string;
            }
            interface ActivityEventsParameters {
                // Boolean value of the parameter.
                boolValue?: boolean;
                // Integer value of the parameter.
                intValue?: string;
                // Nested parameter value pairs associated with this parameter. Complex value type for a parameter are returned as a list
                // of parameter values. For example, the address parameter may have a value as `[{parameter: [{name: city, value: abc}]}]`
                messageValue?: Schema.ActivityEventsParametersMessageValue;
                // Integer values of the parameter.
                multiIntValue?: string[];
                // List of `messageValue` objects.
                multiMessageValue?: Schema.ActivityEventsParametersMultiMessageValue[];
                // String values of the parameter.
                multiValue?: string[];
                // The name of the parameter.
                name?: string;
                // String value of the parameter.
                value?: string;
            }
            // Nested parameter value pairs associated with this parameter. Complex value type for a parameter are returned as a list
            // of parameter values. For example, the address parameter may have a value as `[{parameter: [{name: city, value: abc}]}]`
            interface ActivityEventsParametersMessageValue {
                // Parameter values
                parameter?: Schema.NestedParameter[];
            }
            interface ActivityEventsParametersMultiMessageValue {
                // Parameter values
                parameter?: Schema.NestedParameter[];
            }
            // Unique identifier for each activity record.
            interface ActivityId {
                // Application name to which the event belongs. For possible values see the list of applications above in
                // `applicationName`.
                applicationName?: string;
                // The unique identifier for a G suite account.
                customerId?: string;
                // Time of occurrence of the activity. This is in UNIX epoch time in seconds.
                time?: string;
                // Unique qualifier if multiple events have the same time.
                uniqueQualifier?: string;
            }
            // A notification channel used to watch for resource changes.
            interface Channel {
                // The address where notifications are delivered for this channel.
                address?: string;
                // Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
                expiration?: string;
                // A UUID or similar unique string that identifies this channel.
                id?: string;
                // Identifies this as a notification channel used to watch for changes to a resource, which is "`api#channel`".
                kind?: string;
                // Additional parameters controlling delivery channel behavior. Optional.
                params?: object;
                // A Boolean value to indicate whether payload is wanted. Optional.
                payload?: boolean;
                // An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
                resourceId?: string;
                // A version-specific identifier for the watched resource.
                resourceUri?: string;
                // An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
                token?: string;
                // The type of delivery mechanism used for this channel. The value should be set to `"web_hook"`.
                type?: string;
            }
            // JSON template for a parameter used in various reports.
            interface NestedParameter {
                // Boolean value of the parameter.
                boolValue?: boolean;
                // Integer value of the parameter.
                intValue?: string;
                // Multiple boolean values of the parameter.
                multiBoolValue?: boolean[];
                // Multiple integer values of the parameter.
                multiIntValue?: string[];
                // Multiple string values of the parameter.
                multiValue?: string[];
                // The name of the parameter.
                name?: string;
                // String value of the parameter.
                value?: string;
            }
            // JSON template for a usage report.
            interface UsageReport {
                // Output only. The date of the report request.
                date?: string;
                // Output only. Information about the type of the item.
                entity?: Schema.UsageReportEntity;
                // ETag of the resource.
                etag?: string;
                // The type of API resource. For a usage report, the value is `admin#reports#usageReport`.
                kind?: string;
                // Output only. Parameter value pairs for various applications. For the Entity Usage Report parameters and values, see [the
                // Entity Usage parameters reference](/admin-sdk/reports/v1/reference/usage-ref-appendix-a/entities).
                parameters?: Schema.UsageReportParameters[];
            }
            // Output only. Information about the type of the item.
            interface UsageReportEntity {
                // Output only. The unique identifier of the customer's account.
                customerId?: string;
                // Output only. Object key. Only relevant if entity.type = "OBJECT" Note: external-facing name of report is "Entities"
                // rather than "Objects".
                entityId?: string;
                // Output only. The user's immutable G Suite profile identifier.
                profileId?: string;
                // Output only. The type of item. The value is `user`.
                type?: string;
                // Output only. The user's email address. Only relevant if entity.type = "USER"
                userEmail?: string;
            }
            interface UsageReportParameters {
                // Output only. Boolean value of the parameter.
                boolValue?: boolean;
                // The RFC 3339 formatted value of the parameter, for example 2010-10-28T10:26:35.000Z.
                datetimeValue?: string;
                // Output only. Integer value of the parameter.
                intValue?: string;
                // Output only. Nested message value of the parameter.
                msgValue?: object[];
                // The name of the parameter. For the User Usage Report parameter names, see the User Usage parameters reference.
                name?: string;
                // Output only. String value of the parameter.
                stringValue?: string;
            }
            interface UsageReports {
                // ETag of the resource.
                etag?: string;
                // The type of API resource. For a usage report, the value is `admin#reports#usageReports`.
                kind?: string;
                // Token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. For your
                // follow-on requests getting all of the report's pages, enter the `nextPageToken` value in the `pageToken` query string.
                nextPageToken?: string;
                // Various application parameter records.
                usageReports?: Schema.UsageReport[];
                // Warnings, if any.
                warnings?: Schema.UsageReportsWarnings[];
            }
            interface UsageReportsWarnings {
                // Machine readable code or warning type. The warning code value is `200`.
                code?: string;
                // Key-value pairs to give detailed information on the warning.
                data?: Schema.UsageReportsWarningsData[];
                // The human readable messages for a warning are: - Data is not available warning - Sorry, data for date yyyy-mm-dd for
                // application "`application name`" is not available. - Partial data is available warning - Data for date yyyy-mm-dd for
                // application "`application name`" is not available right now, please try again after a few hours.
                message?: string;
            }
            interface UsageReportsWarningsData {
                // Key associated with a key-value pair to give detailed information on the warning.
                key?: string;
                // Value associated with a key-value pair to give detailed information on the warning.
                value?: string;
            }
        }
    }
    // Admin SDK lets administrators of enterprise domains to view and manage resources like user, groups etc. It also provides
    // audit and usage reports of domain.
    interface AdminReports {
        Activities?: AdminReports.Collection.ActivitiesCollection;
        Channels?: AdminReports.Collection.ChannelsCollection;
        CustomerUsageReports?: AdminReports.Collection.CustomerUsageReportsCollection;
        EntityUsageReports?: AdminReports.Collection.EntityUsageReportsCollection;
        UserUsageReport?: AdminReports.Collection.UserUsageReportCollection;
        // Create a new instance of Channel
        newChannel(): AdminReports.Schema.Channel;
    }
}
declare const AdminReports: GoogleAppsScript.AdminReports;
