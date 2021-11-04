// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace AdminReports {
    namespace Collection {
      interface ActivitiesCollection {
        // Retrieves a list of activities for a specific customer and application.
        list(userKey: string, applicationName: string): AdminReports.Schema.Activities;
        // Retrieves a list of activities for a specific customer and application.
        list(userKey: string, applicationName: string, optionalArgs: object): AdminReports.Schema.Activities;
        // Push changes to activities
        watch(resource: Schema.Channel, userKey: string, applicationName: string): AdminReports.Schema.Channel;
        // Push changes to activities
        watch(resource: Schema.Channel, userKey: string, applicationName: string, optionalArgs: object): AdminReports.Schema.Channel;
      }
      interface ChannelsCollection {
        // Stop watching resources through this channel
        stop(resource: Schema.Channel): void;
      }
      interface CustomerUsageReportsCollection {
        // Retrieves a report which is a collection of properties / statistics for a specific customer.
        get(date: string): AdminReports.Schema.UsageReports;
        // Retrieves a report which is a collection of properties / statistics for a specific customer.
        get(date: string, optionalArgs: object): AdminReports.Schema.UsageReports;
      }
      interface EntityUsageReportsCollection {
        // Retrieves a report which is a collection of properties / statistics for a set of objects.
        get(entityType: string, entityKey: string, date: string): AdminReports.Schema.UsageReports;
        // Retrieves a report which is a collection of properties / statistics for a set of objects.
        get(entityType: string, entityKey: string, date: string, optionalArgs: object): AdminReports.Schema.UsageReports;
      }
      interface UserUsageReportCollection {
        // Retrieves a report which is a collection of properties / statistics for a set of users.
        get(userKey: string, date: string): AdminReports.Schema.UsageReports;
        // Retrieves a report which is a collection of properties / statistics for a set of users.
        get(userKey: string, date: string, optionalArgs: object): AdminReports.Schema.UsageReports;
      }
    }
    namespace Schema {
      interface Activities {
        etag?: string | undefined;
        items?: AdminReports.Schema.Activity[] | undefined;
        kind?: string | undefined;
        nextPageToken?: string | undefined;
      }
      interface Activity {
        actor?: AdminReports.Schema.ActivityActor | undefined;
        etag?: string | undefined;
        events?: AdminReports.Schema.ActivityEvents[] | undefined;
        id?: AdminReports.Schema.ActivityId | undefined;
        ipAddress?: string | undefined;
        kind?: string | undefined;
        ownerDomain?: string | undefined;
      }
      interface ActivityActor {
        callerType?: string | undefined;
        email?: string | undefined;
        key?: string | undefined;
        profileId?: string | undefined;
      }
      interface ActivityEvents {
        name?: string | undefined;
        parameters?: AdminReports.Schema.ActivityEventsParameters[] | undefined;
        type?: string | undefined;
      }
      interface ActivityEventsParameters {
        boolValue?: boolean | undefined;
        intValue?: string | undefined;
        multiIntValue?: string[] | undefined;
        multiValue?: string[] | undefined;
        name?: string | undefined;
        value?: string | undefined;
      }
      interface ActivityId {
        applicationName?: string | undefined;
        customerId?: string | undefined;
        time?: string | undefined;
        uniqueQualifier?: string | undefined;
      }
      interface Channel {
        address?: string | undefined;
        expiration?: string | undefined;
        id?: string | undefined;
        kind?: string | undefined;
        params?: object | undefined;
        payload?: boolean | undefined;
        resourceId?: string | undefined;
        resourceUri?: string | undefined;
        token?: string | undefined;
        type?: string | undefined;
      }
      interface UsageReport {
        date?: string | undefined;
        entity?: AdminReports.Schema.UsageReportEntity | undefined;
        etag?: string | undefined;
        kind?: string | undefined;
        parameters?: AdminReports.Schema.UsageReportParameters[] | undefined;
      }
      interface UsageReportEntity {
        customerId?: string | undefined;
        entityId?: string | undefined;
        profileId?: string | undefined;
        type?: string | undefined;
        userEmail?: string | undefined;
      }
      interface UsageReportParameters {
        boolValue?: boolean | undefined;
        datetimeValue?: string | undefined;
        intValue?: string | undefined;
        msgValue?: object[] | undefined;
        name?: string | undefined;
        stringValue?: string | undefined;
      }
      interface UsageReports {
        etag?: string | undefined;
        kind?: string | undefined;
        nextPageToken?: string | undefined;
        usageReports?: AdminReports.Schema.UsageReport[] | undefined;
        warnings?: AdminReports.Schema.UsageReportsWarnings[] | undefined;
      }
      interface UsageReportsWarnings {
        code?: string | undefined;
        data?: AdminReports.Schema.UsageReportsWarningsData[] | undefined;
        message?: string | undefined;
      }
      interface UsageReportsWarningsData {
        key?: string | undefined;
        value?: string | undefined;
      }
    }
  }
  interface AdminReports {
    Activities?: AdminReports.Collection.ActivitiesCollection | undefined;
    Channels?: AdminReports.Collection.ChannelsCollection | undefined;
    CustomerUsageReports?: AdminReports.Collection.CustomerUsageReportsCollection | undefined;
    EntityUsageReports?: AdminReports.Collection.EntityUsageReportsCollection | undefined;
    UserUsageReport?: AdminReports.Collection.UserUsageReportCollection | undefined;
    // Create a new instance of Channel
    newChannel(): AdminReports.Schema.Channel;
  }
}

declare var AdminReports: GoogleAppsScript.AdminReports;
