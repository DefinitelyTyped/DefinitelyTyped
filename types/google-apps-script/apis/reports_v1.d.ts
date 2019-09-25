// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace AdminReports {
    namespace Collection {
      export interface ActivitiesCollection {
        // Retrieves a list of activities for a specific customer and application.
        list(userKey: string, applicationName: string): AdminReports.Schema.Activities;
        // Retrieves a list of activities for a specific customer and application.
        list(userKey: string, applicationName: string, optionalArgs: object): AdminReports.Schema.Activities;
        // Push changes to activities
        watch(resource: Schema.Channel, userKey: string, applicationName: string): AdminReports.Schema.Channel;
        // Push changes to activities
        watch(resource: Schema.Channel, userKey: string, applicationName: string, optionalArgs: object): AdminReports.Schema.Channel;
      }
      export interface ChannelsCollection {
        // Stop watching resources through this channel
        stop(resource: Schema.Channel): void;
      }
      export interface CustomerUsageReportsCollection {
        // Retrieves a report which is a collection of properties / statistics for a specific customer.
        get(date: string): AdminReports.Schema.UsageReports;
        // Retrieves a report which is a collection of properties / statistics for a specific customer.
        get(date: string, optionalArgs: object): AdminReports.Schema.UsageReports;
      }
      export interface EntityUsageReportsCollection {
        // Retrieves a report which is a collection of properties / statistics for a set of objects.
        get(entityType: string, entityKey: string, date: string): AdminReports.Schema.UsageReports;
        // Retrieves a report which is a collection of properties / statistics for a set of objects.
        get(entityType: string, entityKey: string, date: string, optionalArgs: object): AdminReports.Schema.UsageReports;
      }
      export interface UserUsageReportCollection {
        // Retrieves a report which is a collection of properties / statistics for a set of users.
        get(userKey: string, date: string): AdminReports.Schema.UsageReports;
        // Retrieves a report which is a collection of properties / statistics for a set of users.
        get(userKey: string, date: string, optionalArgs: object): AdminReports.Schema.UsageReports;
      }
    }
    namespace Schema {
      export interface Activities {
        etag?: string;
        items?: AdminReports.Schema.Activity[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface Activity {
        actor?: AdminReports.Schema.ActivityActor;
        etag?: string;
        events?: AdminReports.Schema.ActivityEvents[];
        id?: AdminReports.Schema.ActivityId;
        ipAddress?: string;
        kind?: string;
        ownerDomain?: string;
      }
      export interface ActivityActor {
        callerType?: string;
        email?: string;
        key?: string;
        profileId?: string;
      }
      export interface ActivityEvents {
        name?: string;
        parameters?: AdminReports.Schema.ActivityEventsParameters[];
        type?: string;
      }
      export interface ActivityEventsParameters {
        boolValue?: boolean;
        intValue?: string;
        multiIntValue?: string[];
        multiValue?: string[];
        name?: string;
        value?: string;
      }
      export interface ActivityId {
        applicationName?: string;
        customerId?: string;
        time?: string;
        uniqueQualifier?: string;
      }
      export interface Channel {
        address?: string;
        expiration?: string;
        id?: string;
        kind?: string;
        params?: object;
        payload?: boolean;
        resourceId?: string;
        resourceUri?: string;
        token?: string;
        type?: string;
      }
      export interface UsageReport {
        date?: string;
        entity?: AdminReports.Schema.UsageReportEntity;
        etag?: string;
        kind?: string;
        parameters?: AdminReports.Schema.UsageReportParameters[];
      }
      export interface UsageReportEntity {
        customerId?: string;
        entityId?: string;
        profileId?: string;
        type?: string;
        userEmail?: string;
      }
      export interface UsageReportParameters {
        boolValue?: boolean;
        datetimeValue?: string;
        intValue?: string;
        msgValue?: object[];
        name?: string;
        stringValue?: string;
      }
      export interface UsageReports {
        etag?: string;
        kind?: string;
        nextPageToken?: string;
        usageReports?: AdminReports.Schema.UsageReport[];
        warnings?: AdminReports.Schema.UsageReportsWarnings[];
      }
      export interface UsageReportsWarnings {
        code?: string;
        data?: AdminReports.Schema.UsageReportsWarningsData[];
        message?: string;
      }
      export interface UsageReportsWarningsData {
        key?: string;
        value?: string;
      }
    }
  }
  export interface AdminReports {
    Activities?: AdminReports.Collection.ActivitiesCollection;
    Channels?: AdminReports.Collection.ChannelsCollection;
    CustomerUsageReports?: AdminReports.Collection.CustomerUsageReportsCollection;
    EntityUsageReports?: AdminReports.Collection.EntityUsageReportsCollection;
    UserUsageReport?: AdminReports.Collection.UserUsageReportCollection;
    // Create a new instance of Channel
    newChannel(): AdminReports.Schema.Channel;
  }
}

declare var AdminReports: GoogleAppsScript.AdminReports;
