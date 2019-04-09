// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Admin_reports_v1 {
    namespace Collection {
      export interface ActivitiesCollection {
        // Retrieves a list of activities for a specific customer and application.
        list(userKey: string, applicationName: string): Admin_reports_v1.Schema.Activities;
        // Retrieves a list of activities for a specific customer and application.
        list(userKey: string, applicationName: string, optionalArgs: object): Admin_reports_v1.Schema.Activities;
        // Push changes to activities
        watch(resource: Schema.Channel, userKey: string, applicationName: string): Admin_reports_v1.Schema.Channel;
        // Push changes to activities
        watch(resource: Schema.Channel, userKey: string, applicationName: string, optionalArgs: object): Admin_reports_v1.Schema.Channel;
      }
      export interface ChannelsCollection {
        // Stop watching resources through this channel
        stop(resource: Schema.Channel): void;
      }
      export interface CustomerUsageReportsCollection {
        // Retrieves a report which is a collection of properties / statistics for a specific customer.
        get(date: string): Admin_reports_v1.Schema.UsageReports;
        // Retrieves a report which is a collection of properties / statistics for a specific customer.
        get(date: string, optionalArgs: object): Admin_reports_v1.Schema.UsageReports;
      }
      export interface EntityUsageReportsCollection {
        // Retrieves a report which is a collection of properties / statistics for a set of objects.
        get(entityType: string, entityKey: string, date: string): Admin_reports_v1.Schema.UsageReports;
        // Retrieves a report which is a collection of properties / statistics for a set of objects.
        get(entityType: string, entityKey: string, date: string, optionalArgs: object): Admin_reports_v1.Schema.UsageReports;
      }
      export interface UserUsageReportCollection {
        // Retrieves a report which is a collection of properties / statistics for a set of users.
        get(userKey: string, date: string): Admin_reports_v1.Schema.UsageReports;
        // Retrieves a report which is a collection of properties / statistics for a set of users.
        get(userKey: string, date: string, optionalArgs: object): Admin_reports_v1.Schema.UsageReports;
      }
    }
    namespace Schema {
      export interface Activities {
        etag?: string;
        items?: Admin_reports_v1.Schema.Activity[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface Activity {
        actor?: Admin_reports_v1.Schema.ActivityActor;
        etag?: string;
        events?: Admin_reports_v1.Schema.ActivityEvents[];
        id?: Admin_reports_v1.Schema.ActivityId;
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
        parameters?: Admin_reports_v1.Schema.ActivityEventsParameters[];
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
        entity?: Admin_reports_v1.Schema.UsageReportEntity;
        etag?: string;
        kind?: string;
        parameters?: Admin_reports_v1.Schema.UsageReportParameters[];
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
        msgValue?: Object[];
        name?: string;
        stringValue?: string;
      }
      export interface UsageReports {
        etag?: string;
        kind?: string;
        nextPageToken?: string;
        usageReports?: Admin_reports_v1.Schema.UsageReport[];
        warnings?: Admin_reports_v1.Schema.UsageReportsWarnings[];
      }
      export interface UsageReportsWarnings {
        code?: string;
        data?: Admin_reports_v1.Schema.UsageReportsWarningsData[];
        message?: string;
      }
      export interface UsageReportsWarningsData {
        key?: string;
        value?: string;
      }
    }
  }
  export interface Admin_reports_v1 {
    Activities?: Admin_reports_v1.Collection.ActivitiesCollection;
    Channels?: Admin_reports_v1.Collection.ChannelsCollection;
    CustomerUsageReports?: Admin_reports_v1.Collection.CustomerUsageReportsCollection;
    EntityUsageReports?: Admin_reports_v1.Collection.EntityUsageReportsCollection;
    UserUsageReport?: Admin_reports_v1.Collection.UserUsageReportCollection;
    // Create a new instance of Channel
    newChannel(): Admin_reports_v1.Schema.Channel;
  }
}

declare var Admin_reports_v1: GoogleAppsScript.Admin_reports_v1;