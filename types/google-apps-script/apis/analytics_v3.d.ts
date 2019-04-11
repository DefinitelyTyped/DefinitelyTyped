// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Analytics_v3 {
    namespace Collection {
      namespace Data {
        export interface GaCollection {
          // Returns Analytics data for a view (profile).
          get(ids: string, start_date: string, end_date: string, metrics: string): Analytics_v3.Schema.GaData;
          // Returns Analytics data for a view (profile).
          get(ids: string, start_date: string, end_date: string, metrics: string, optionalArgs: object): Analytics_v3.Schema.GaData;
        }
        export interface McfCollection {
          // Returns Analytics Multi-Channel Funnels data for a view (profile).
          get(ids: string, start_date: string, end_date: string, metrics: string): Analytics_v3.Schema.McfData;
          // Returns Analytics Multi-Channel Funnels data for a view (profile).
          get(ids: string, start_date: string, end_date: string, metrics: string, optionalArgs: object): Analytics_v3.Schema.McfData;
        }
        export interface RealtimeCollection {
          // Returns real time data for a view (profile).
          get(ids: string, metrics: string): Analytics_v3.Schema.RealtimeData;
          // Returns real time data for a view (profile).
          get(ids: string, metrics: string, optionalArgs: object): Analytics_v3.Schema.RealtimeData;
        }
      }
      namespace Management {
        export interface AccountSummariesCollection {
          // Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.
          list(): Analytics_v3.Schema.AccountSummaries;
          // Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.
          list(optionalArgs: object): Analytics_v3.Schema.AccountSummaries;
        }
        export interface AccountUserLinksCollection {
          // Adds a new user to the given account.
          insert(resource: Schema.EntityUserLink, accountId: string): Analytics_v3.Schema.EntityUserLink;
          // Lists account-user links for a given account.
          list(accountId: string): Analytics_v3.Schema.EntityUserLinks;
          // Lists account-user links for a given account.
          list(accountId: string, optionalArgs: object): Analytics_v3.Schema.EntityUserLinks;
          // Removes a user from the given account.
          remove(accountId: string, linkId: string): void;
          // Updates permissions for an existing user on the given account.
          update(resource: Schema.EntityUserLink, accountId: string, linkId: string): Analytics_v3.Schema.EntityUserLink;
        }
        export interface AccountsCollection {
          // Lists all accounts to which the user has access.
          list(): Analytics_v3.Schema.Accounts;
          // Lists all accounts to which the user has access.
          list(optionalArgs: object): Analytics_v3.Schema.Accounts;
        }
        export interface ClientIdCollection {
          // Hashes the given Client ID.
          hashClientId(resource: Analytics_v3.Schema.HashClientIdRequest): Analytics_v3.Schema.HashClientIdResponse;
        }
        export interface CustomDataSourcesCollection {
          // List custom data sources to which the user has access.
          list(accountId: string, webPropertyId: string): Analytics_v3.Schema.CustomDataSources;
          // List custom data sources to which the user has access.
          list(accountId: string, webPropertyId: string, optionalArgs: object): Analytics_v3.Schema.CustomDataSources;
        }
        export interface CustomDimensionsCollection {
          // Get a custom dimension to which the user has access.
          get(accountId: string, webPropertyId: string, customDimensionId: string): Analytics_v3.Schema.CustomDimension;
          // Create a new custom dimension.
          insert(resource: Schema.CustomDimension, accountId: string, webPropertyId: string): Analytics_v3.Schema.CustomDimension;
          // Lists custom dimensions to which the user has access.
          list(accountId: string, webPropertyId: string): Analytics_v3.Schema.CustomDimensions;
          // Lists custom dimensions to which the user has access.
          list(accountId: string, webPropertyId: string, optionalArgs: object): Analytics_v3.Schema.CustomDimensions;
          // Updates an existing custom dimension. This method supports patch semantics.
          patch(resource: Schema.CustomDimension, accountId: string, webPropertyId: string, customDimensionId: string): Analytics_v3.Schema.CustomDimension;
          // Updates an existing custom dimension. This method supports patch semantics.
          patch(resource: Schema.CustomDimension, accountId: string, webPropertyId: string, customDimensionId: string, optionalArgs: object): Analytics_v3.Schema.CustomDimension;
          // Updates an existing custom dimension.
          update(resource: Schema.CustomDimension, accountId: string, webPropertyId: string, customDimensionId: string): Analytics_v3.Schema.CustomDimension;
          // Updates an existing custom dimension.
          update(resource: Schema.CustomDimension, accountId: string, webPropertyId: string, customDimensionId: string, optionalArgs: object): Analytics_v3.Schema.CustomDimension;
        }
        export interface CustomMetricsCollection {
          // Get a custom metric to which the user has access.
          get(accountId: string, webPropertyId: string, customMetricId: string): Analytics_v3.Schema.CustomMetric;
          // Create a new custom metric.
          insert(resource: Schema.CustomMetric, accountId: string, webPropertyId: string): Analytics_v3.Schema.CustomMetric;
          // Lists custom metrics to which the user has access.
          list(accountId: string, webPropertyId: string): Analytics_v3.Schema.CustomMetrics;
          // Lists custom metrics to which the user has access.
          list(accountId: string, webPropertyId: string, optionalArgs: object): Analytics_v3.Schema.CustomMetrics;
          // Updates an existing custom metric. This method supports patch semantics.
          patch(resource: Schema.CustomMetric, accountId: string, webPropertyId: string, customMetricId: string): Analytics_v3.Schema.CustomMetric;
          // Updates an existing custom metric. This method supports patch semantics.
          patch(resource: Schema.CustomMetric, accountId: string, webPropertyId: string, customMetricId: string, optionalArgs: object): Analytics_v3.Schema.CustomMetric;
          // Updates an existing custom metric.
          update(resource: Schema.CustomMetric, accountId: string, webPropertyId: string, customMetricId: string): Analytics_v3.Schema.CustomMetric;
          // Updates an existing custom metric.
          update(resource: Schema.CustomMetric, accountId: string, webPropertyId: string, customMetricId: string, optionalArgs: object): Analytics_v3.Schema.CustomMetric;
        }
        export interface ExperimentsCollection {
          // Returns an experiment to which the user has access.
          get(accountId: string, webPropertyId: string, profileId: string, experimentId: string): Analytics_v3.Schema.Experiment;
          // Create a new experiment.
          insert(resource: Schema.Experiment, accountId: string, webPropertyId: string, profileId: string): Analytics_v3.Schema.Experiment;
          // Lists experiments to which the user has access.
          list(accountId: string, webPropertyId: string, profileId: string): Analytics_v3.Schema.Experiments;
          // Lists experiments to which the user has access.
          list(accountId: string, webPropertyId: string, profileId: string, optionalArgs: object): Analytics_v3.Schema.Experiments;
          // Update an existing experiment. This method supports patch semantics.
          patch(resource: Schema.Experiment, accountId: string, webPropertyId: string, profileId: string, experimentId: string): Analytics_v3.Schema.Experiment;
          // Delete an experiment.
          remove(accountId: string, webPropertyId: string, profileId: string, experimentId: string): void;
          // Update an existing experiment.
          update(resource: Schema.Experiment, accountId: string, webPropertyId: string, profileId: string, experimentId: string): Analytics_v3.Schema.Experiment;
        }
        export interface FiltersCollection {
          // Returns a filters to which the user has access.
          get(accountId: string, filterId: string): Analytics_v3.Schema.Filter;
          // Create a new filter.
          insert(resource: Schema.Filter, accountId: string): Analytics_v3.Schema.Filter;
          // Lists all filters for an account
          list(accountId: string): Analytics_v3.Schema.Filters;
          // Lists all filters for an account
          list(accountId: string, optionalArgs: object): Analytics_v3.Schema.Filters;
          // Updates an existing filter. This method supports patch semantics.
          patch(resource: Schema.Filter, accountId: string, filterId: string): Analytics_v3.Schema.Filter;
          // Delete a filter.
          remove(accountId: string, filterId: string): Analytics_v3.Schema.Filter;
          // Updates an existing filter.
          update(resource: Schema.Filter, accountId: string, filterId: string): Analytics_v3.Schema.Filter;
        }
        export interface GoalsCollection {
          // Gets a goal to which the user has access.
          get(accountId: string, webPropertyId: string, profileId: string, goalId: string): Analytics_v3.Schema.Goal;
          // Create a new goal.
          insert(resource: Analytics_v3.Schema.Goal, accountId: string, webPropertyId: string, profileId: string): Analytics_v3.Schema.Goal;
          // Lists goals to which the user has access.
          list(accountId: string, webPropertyId: string, profileId: string): Analytics_v3.Schema.Goals;
          // Lists goals to which the user has access.
          list(accountId: string, webPropertyId: string, profileId: string, optionalArgs: object): Analytics_v3.Schema.Goals;
          // Updates an existing goal. This method supports patch semantics.
          patch(resource: Schema.Goal, accountId: string, webPropertyId: string, profileId: string, goalId: string): Analytics_v3.Schema.Goal;
          // Updates an existing goal.
          update(resource: Schema.Goal, accountId: string, webPropertyId: string, profileId: string, goalId: string): Analytics_v3.Schema.Goal;
        }
        export interface ProfileFilterLinksCollection {
          // Returns a single profile filter link.
          get(accountId: string, webPropertyId: string, profileId: string, linkId: string): Analytics_v3.Schema.ProfileFilterLink;
          // Create a new profile filter link.
          insert(resource: Schema.ProfileFilterLink, accountId: string, webPropertyId: string, profileId: string): Analytics_v3.Schema.ProfileFilterLink;
          // Lists all profile filter links for a profile.
          list(accountId: string, webPropertyId: string, profileId: string): Analytics_v3.Schema.ProfileFilterLinks;
          // Lists all profile filter links for a profile.
          list(accountId: string, webPropertyId: string, profileId: string, optionalArgs: object): Analytics_v3.Schema.ProfileFilterLinks;
          // Update an existing profile filter link. This method supports patch semantics.
          patch(resource: Schema.ProfileFilterLink, accountId: string, webPropertyId: string, profileId: string, linkId: string): Analytics_v3.Schema.ProfileFilterLink;
          // Delete a profile filter link.
          remove(accountId: string, webPropertyId: string, profileId: string, linkId: string): void;
          // Update an existing profile filter link.
          update(resource: Schema.ProfileFilterLink, accountId: string, webPropertyId: string, profileId: string, linkId: string): Analytics_v3.Schema.ProfileFilterLink;
        }
        export interface ProfileUserLinksCollection {
          // Adds a new user to the given view (profile).
          insert(resource: Schema.EntityUserLink, accountId: string, webPropertyId: string, profileId: string): Analytics_v3.Schema.EntityUserLink;
          // Lists profile-user links for a given view (profile).
          list(accountId: string, webPropertyId: string, profileId: string): Analytics_v3.Schema.EntityUserLinks;
          // Lists profile-user links for a given view (profile).
          list(accountId: string, webPropertyId: string, profileId: string, optionalArgs: object): Analytics_v3.Schema.EntityUserLinks;
          // Removes a user from the given view (profile).
          remove(accountId: string, webPropertyId: string, profileId: string, linkId: string): void;
          // Updates permissions for an existing user on the given view (profile).
          update(resource: Schema.EntityUserLink, accountId: string, webPropertyId: string, profileId: string, linkId: string): Analytics_v3.Schema.EntityUserLink;
        }
        export interface ProfilesCollection {
          // Gets a view (profile) to which the user has access.
          get(accountId: string, webPropertyId: string, profileId: string): Analytics_v3.Schema.Profile;
          // Create a new view (profile).
          insert(resource: Schema.Profile, accountId: string, webPropertyId: string): Analytics_v3.Schema.Profile;
          // Lists views (profiles) to which the user has access.
          list(accountId: string, webPropertyId: string): Analytics_v3.Schema.Profiles;
          // Lists views (profiles) to which the user has access.
          list(accountId: string, webPropertyId: string, optionalArgs: object): Analytics_v3.Schema.Profiles;
          // Updates an existing view (profile). This method supports patch semantics.
          patch(resource: Schema.Profile, accountId: string, webPropertyId: string, profileId: string): Analytics_v3.Schema.Profile;
          // Deletes a view (profile).
          remove(accountId: string, webPropertyId: string, profileId: string): void;
          // Updates an existing view (profile).
          update(resource: Schema.Profile, accountId: string, webPropertyId: string, profileId: string): Analytics_v3.Schema.Profile;
        }
        export interface RemarketingAudienceCollection {
          // Gets a remarketing audience to which the user has access.
          get(accountId: string, webPropertyId: string, remarketingAudienceId: string): Analytics_v3.Schema.RemarketingAudience;
          // Creates a new remarketing audience.
          insert(resource: Schema.RemarketingAudience, accountId: string, webPropertyId: string): Analytics_v3.Schema.RemarketingAudience;
          // Lists remarketing audiences to which the user has access.
          list(accountId: string, webPropertyId: string): Analytics_v3.Schema.RemarketingAudiences;
          // Lists remarketing audiences to which the user has access.
          list(accountId: string, webPropertyId: string, optionalArgs: object): Analytics_v3.Schema.RemarketingAudiences;
          // Updates an existing remarketing audience. This method supports patch semantics.
          patch(resource: Schema.RemarketingAudience, accountId: string, webPropertyId: string, remarketingAudienceId: string): Analytics_v3.Schema.RemarketingAudience;
          // Delete a remarketing audience.
          remove(accountId: string, webPropertyId: string, remarketingAudienceId: string): void;
          // Updates an existing remarketing audience.
          update(resource: Schema.RemarketingAudience, accountId: string, webPropertyId: string, remarketingAudienceId: string): Analytics_v3.Schema.RemarketingAudience;
        }
        export interface SegmentsCollection {
          // Lists segments to which the user has access.
          list(): Analytics_v3.Schema.Segments;
          // Lists segments to which the user has access.
          list(optionalArgs: object): Analytics_v3.Schema.Segments;
        }
        export interface UnsampledReportsCollection {
          // Returns a single unsampled report.
          get(accountId: string, webPropertyId: string, profileId: string, unsampledReportId: string): Analytics_v3.Schema.UnsampledReport;
          // Create a new unsampled report.
          insert(resource: Schema.UnsampledReport, accountId: string, webPropertyId: string, profileId: string): Analytics_v3.Schema.UnsampledReport;
          // Lists unsampled reports to which the user has access.
          list(accountId: string, webPropertyId: string, profileId: string): Analytics_v3.Schema.UnsampledReports;
          // Lists unsampled reports to which the user has access.
          list(accountId: string, webPropertyId: string, profileId: string, optionalArgs: object): Analytics_v3.Schema.UnsampledReports;
          // Deletes an unsampled report.
          remove(accountId: string, webPropertyId: string, profileId: string, unsampledReportId: string): void;
        }
        export interface UploadsCollection {
          // Delete data associated with a previous upload.
          deleteUploadData(resource: Schema.AnalyticsDataimportDeleteUploadDataRequest, accountId: string, webPropertyId: string, customDataSourceId: string): void;
          // List uploads to which the user has access.
          get(accountId: string, webPropertyId: string, customDataSourceId: string, uploadId: string): Analytics_v3.Schema.Upload;
          // List uploads to which the user has access.
          list(accountId: string, webPropertyId: string, customDataSourceId: string): Analytics_v3.Schema.Uploads;
          // List uploads to which the user has access.
          list(accountId: string, webPropertyId: string, customDataSourceId: string, optionalArgs: object): Analytics_v3.Schema.Uploads;
          // Upload data for a custom data source.
          uploadData(accountId: string, webPropertyId: string, customDataSourceId: string): Analytics_v3.Schema.Upload;
          // Upload data for a custom data source.
          uploadData(accountId: string, webPropertyId: string, customDataSourceId: string, mediaData: any): Analytics_v3.Schema.Upload;
        }
        export interface WebPropertyAdWordsLinksCollection {
          // Returns a web property-Google Ads link to which the user has access.
          get(accountId: string, webPropertyId: string, webPropertyAdWordsLinkId: string): Analytics_v3.Schema.EntityAdWordsLink;
          // Creates a webProperty-Google Ads link.
          insert(resource: Schema.EntityAdWordsLink, accountId: string, webPropertyId: string): Analytics_v3.Schema.EntityAdWordsLink;
          // Lists webProperty-Google Ads links for a given web property.
          list(accountId: string, webPropertyId: string): Analytics_v3.Schema.EntityAdWordsLinks;
          // Lists webProperty-Google Ads links for a given web property.
          list(accountId: string, webPropertyId: string, optionalArgs: object): Analytics_v3.Schema.EntityAdWordsLinks;
          // Updates an existing webProperty-Google Ads link. This method supports patch semantics.
          patch(resource: Schema.EntityAdWordsLink, accountId: string, webPropertyId: string, webPropertyAdWordsLinkId: string): Analytics_v3.Schema.EntityAdWordsLink;
          // Deletes a web property-Google Ads link.
          remove(accountId: string, webPropertyId: string, webPropertyAdWordsLinkId: string): void;
          // Updates an existing webProperty-Google Ads link.
          update(resource: Schema.EntityAdWordsLink, accountId: string, webPropertyId: string, webPropertyAdWordsLinkId: string): Analytics_v3.Schema.EntityAdWordsLink;
        }
        export interface WebpropertiesCollection {
          // Gets a web property to which the user has access.
          get(accountId: string, webPropertyId: string): Analytics_v3.Schema.Webproperty;
          // Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.
          insert(resource: Schema.Webproperty, accountId: string): Analytics_v3.Schema.Webproperty;
          // Lists web properties to which the user has access.
          list(accountId: string): Analytics_v3.Schema.Webproperties;
          // Lists web properties to which the user has access.
          list(accountId: string, optionalArgs: object): Analytics_v3.Schema.Webproperties;
          // Updates an existing web property. This method supports patch semantics.
          patch(resource: Schema.Webproperty, accountId: string, webPropertyId: string): Analytics_v3.Schema.Webproperty;
          // Updates an existing web property.
          update(resource: Schema.Webproperty, accountId: string, webPropertyId: string): Analytics_v3.Schema.Webproperty;
        }
        export interface WebpropertyUserLinksCollection {
          // Adds a new user to the given web property.
          insert(resource: Schema.EntityUserLink, accountId: string, webPropertyId: string): Analytics_v3.Schema.EntityUserLink;
          // Lists webProperty-user links for a given web property.
          list(accountId: string, webPropertyId: string): Analytics_v3.Schema.EntityUserLinks;
          // Lists webProperty-user links for a given web property.
          list(accountId: string, webPropertyId: string, optionalArgs: object): Analytics_v3.Schema.EntityUserLinks;
          // Removes a user from the given web property.
          remove(accountId: string, webPropertyId: string, linkId: string): void;
          // Updates permissions for an existing user on the given web property.
          update(resource: Schema.EntityUserLink, accountId: string, webPropertyId: string, linkId: string): Analytics_v3.Schema.EntityUserLink;
        }
      }
      namespace Metadata {
        export interface ColumnsCollection {
          // Lists all columns for a report type
          list(reportType: string): Analytics_v3.Schema.Columns;
        }
      }
      namespace UserDeletion {
        export interface UserDeletionRequestCollection {
          // Insert or update a user deletion requests.
          upsert(resource: Schema.UserDeletionRequest): Analytics_v3.Schema.UserDeletionRequest;
        }
      }
      export interface DataCollection {
        Ga?: Analytics_v3.Collection.Data.GaCollection;
        Mcf?: Analytics_v3.Collection.Data.McfCollection;
        Realtime?: Analytics_v3.Collection.Data.RealtimeCollection;
      }
      export interface ManagementCollection {
        AccountSummaries?: Analytics_v3.Collection.Management.AccountSummariesCollection;
        AccountUserLinks?: Analytics_v3.Collection.Management.AccountUserLinksCollection;
        Accounts?: Analytics_v3.Collection.Management.AccountsCollection;
        ClientId?: Analytics_v3.Collection.Management.ClientIdCollection;
        CustomDataSources?: Analytics_v3.Collection.Management.CustomDataSourcesCollection;
        CustomDimensions?: Analytics_v3.Collection.Management.CustomDimensionsCollection;
        CustomMetrics?: Analytics_v3.Collection.Management.CustomMetricsCollection;
        Experiments?: Analytics_v3.Collection.Management.ExperimentsCollection;
        Filters?: Analytics_v3.Collection.Management.FiltersCollection;
        Goals?: Analytics_v3.Collection.Management.GoalsCollection;
        ProfileFilterLinks?: Analytics_v3.Collection.Management.ProfileFilterLinksCollection;
        ProfileUserLinks?: Analytics_v3.Collection.Management.ProfileUserLinksCollection;
        Profiles?: Analytics_v3.Collection.Management.ProfilesCollection;
        RemarketingAudience?: Analytics_v3.Collection.Management.RemarketingAudienceCollection;
        Segments?: Analytics_v3.Collection.Management.SegmentsCollection;
        UnsampledReports?: Analytics_v3.Collection.Management.UnsampledReportsCollection;
        Uploads?: Analytics_v3.Collection.Management.UploadsCollection;
        WebPropertyAdWordsLinks?: Analytics_v3.Collection.Management.WebPropertyAdWordsLinksCollection;
        Webproperties?: Analytics_v3.Collection.Management.WebpropertiesCollection;
        WebpropertyUserLinks?: Analytics_v3.Collection.Management.WebpropertyUserLinksCollection;
      }
      export interface MetadataCollection {
        Columns?: Analytics_v3.Collection.Metadata.ColumnsCollection;
      }
      export interface ProvisioningCollection {
        // Creates an account ticket.
        createAccountTicket(resource: Schema.AccountTicket): Analytics_v3.Schema.AccountTicket;
        // Provision account.
        createAccountTree(resource: Schema.AccountTreeRequest): Analytics_v3.Schema.AccountTreeResponse;
      }
      export interface UserDeletionCollection {
        UserDeletionRequest?: Analytics_v3.Collection.UserDeletion.UserDeletionRequestCollection;
      }
    }
    namespace Schema {
      export interface Account {
        childLink?: Analytics_v3.Schema.AccountChildLink;
        created?: string;
        id?: string;
        kind?: string;
        name?: string;
        permissions?: Analytics_v3.Schema.AccountPermissions;
        selfLink?: string;
        starred?: boolean;
        updated?: string;
      }
      export interface AccountChildLink {
        href?: string;
        type?: string;
      }
      export interface AccountPermissions {
        effective?: string[];
      }
      export interface AccountRef {
        href?: string;
        id?: string;
        kind?: string;
        name?: string;
      }
      export interface AccountSummaries {
        items?: Analytics_v3.Schema.AccountSummary[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      export interface AccountSummary {
        id?: string;
        kind?: string;
        name?: string;
        starred?: boolean;
        webProperties?: Analytics_v3.Schema.WebPropertySummary[];
      }
      export interface AccountTicket {
        account?: Analytics_v3.Schema.Account;
        id?: string;
        kind?: string;
        profile?: Analytics_v3.Schema.Profile;
        redirectUri?: string;
        webproperty?: Analytics_v3.Schema.Webproperty;
      }
      export interface AccountTreeRequest {
        accountName?: string;
        kind?: string;
        profileName?: string;
        timezone?: string;
        webpropertyName?: string;
        websiteUrl?: string;
      }
      export interface AccountTreeResponse {
        account?: Analytics_v3.Schema.Account;
        kind?: string;
        profile?: Analytics_v3.Schema.Profile;
        webproperty?: Analytics_v3.Schema.Webproperty;
      }
      export interface Accounts {
        items?: Analytics_v3.Schema.Account[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      export interface AdWordsAccount {
        autoTaggingEnabled?: boolean;
        customerId?: string;
        kind?: string;
      }
      export interface AnalyticsDataimportDeleteUploadDataRequest {
        customDataImportUids?: string[];
      }
      export interface Column {
        attributes?: object;
        id?: string;
        kind?: string;
      }
      export interface Columns {
        attributeNames?: string[];
        etag?: string;
        items?: Analytics_v3.Schema.Column[];
        kind?: string;
        totalResults?: number;
      }
      export interface CustomDataSource {
        accountId?: string;
        childLink?: Analytics_v3.Schema.CustomDataSourceChildLink;
        created?: string;
        description?: string;
        id?: string;
        importBehavior?: string;
        kind?: string;
        name?: string;
        parentLink?: Analytics_v3.Schema.CustomDataSourceParentLink;
        profilesLinked?: string[];
        schema?: string[];
        selfLink?: string;
        type?: string;
        updated?: string;
        uploadType?: string;
        webPropertyId?: string;
      }
      export interface CustomDataSourceChildLink {
        href?: string;
        type?: string;
      }
      export interface CustomDataSourceParentLink {
        href?: string;
        type?: string;
      }
      export interface CustomDataSources {
        items?: Analytics_v3.Schema.CustomDataSource[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      export interface CustomDimension {
        accountId?: string;
        active?: boolean;
        created?: string;
        id?: string;
        index?: number;
        kind?: string;
        name?: string;
        parentLink?: Analytics_v3.Schema.CustomDimensionParentLink;
        scope?: string;
        selfLink?: string;
        updated?: string;
        webPropertyId?: string;
      }
      export interface CustomDimensionParentLink {
        href?: string;
        type?: string;
      }
      export interface CustomDimensions {
        items?: Analytics_v3.Schema.CustomDimension[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      export interface CustomMetric {
        accountId?: string;
        active?: boolean;
        created?: string;
        id?: string;
        index?: number;
        kind?: string;
        max_value?: string;
        min_value?: string;
        name?: string;
        parentLink?: Analytics_v3.Schema.CustomMetricParentLink;
        scope?: string;
        selfLink?: string;
        type?: string;
        updated?: string;
        webPropertyId?: string;
      }
      export interface CustomMetricParentLink {
        href?: string;
        type?: string;
      }
      export interface CustomMetrics {
        items?: Analytics_v3.Schema.CustomMetric[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      export interface EntityAdWordsLink {
        adWordsAccounts?: Analytics_v3.Schema.AdWordsAccount[];
        entity?: Analytics_v3.Schema.EntityAdWordsLinkEntity;
        id?: string;
        kind?: string;
        name?: string;
        profileIds?: string[];
        selfLink?: string;
      }
      export interface EntityAdWordsLinkEntity {
        webPropertyRef?: Analytics_v3.Schema.WebPropertyRef;
      }
      export interface EntityAdWordsLinks {
        items?: Analytics_v3.Schema.EntityAdWordsLink[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
      }
      export interface EntityUserLink {
        entity?: Analytics_v3.Schema.EntityUserLinkEntity;
        id?: string;
        kind?: string;
        permissions?: Analytics_v3.Schema.EntityUserLinkPermissions;
        selfLink?: string;
        userRef?: Analytics_v3.Schema.UserRef;
      }
      export interface EntityUserLinkEntity {
        accountRef?: Analytics_v3.Schema.AccountRef;
        profileRef?: Analytics_v3.Schema.ProfileRef;
        webPropertyRef?: Analytics_v3.Schema.WebPropertyRef;
      }
      export interface EntityUserLinkPermissions {
        effective?: string[];
        local?: string[];
      }
      export interface EntityUserLinks {
        items?: Analytics_v3.Schema.EntityUserLink[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
      }
      export interface Experiment {
        accountId?: string;
        created?: string;
        description?: string;
        editableInGaUi?: boolean;
        endTime?: string;
        equalWeighting?: boolean;
        id?: string;
        internalWebPropertyId?: string;
        kind?: string;
        minimumExperimentLengthInDays?: number;
        name?: string;
        objectiveMetric?: string;
        optimizationType?: string;
        parentLink?: Analytics_v3.Schema.ExperimentParentLink;
        profileId?: string;
        reasonExperimentEnded?: string;
        rewriteVariationUrlsAsOriginal?: boolean;
        selfLink?: string;
        servingFramework?: string;
        snippet?: string;
        startTime?: string;
        status?: string;
        trafficCoverage?: Number;
        updated?: string;
        variations?: Analytics_v3.Schema.ExperimentVariations[];
        webPropertyId?: string;
        winnerConfidenceLevel?: Number;
        winnerFound?: boolean;
      }
      export interface ExperimentParentLink {
        href?: string;
        type?: string;
      }
      export interface ExperimentVariations {
        name?: string;
        status?: string;
        url?: string;
        weight?: Number;
        won?: boolean;
      }
      export interface Experiments {
        items?: Analytics_v3.Schema.Experiment[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      export interface Filter {
        accountId?: string;
        advancedDetails?: Analytics_v3.Schema.FilterAdvancedDetails;
        created?: string;
        excludeDetails?: Analytics_v3.Schema.FilterExpression;
        id?: string;
        includeDetails?: Analytics_v3.Schema.FilterExpression;
        kind?: string;
        lowercaseDetails?: Analytics_v3.Schema.FilterLowercaseDetails;
        name?: string;
        parentLink?: Analytics_v3.Schema.FilterParentLink;
        searchAndReplaceDetails?: Analytics_v3.Schema.FilterSearchAndReplaceDetails;
        selfLink?: string;
        type?: string;
        updated?: string;
        uppercaseDetails?: Analytics_v3.Schema.FilterUppercaseDetails;
      }
      export interface FilterAdvancedDetails {
        caseSensitive?: boolean;
        extractA?: string;
        extractB?: string;
        fieldA?: string;
        fieldAIndex?: number;
        fieldARequired?: boolean;
        fieldB?: string;
        fieldBIndex?: number;
        fieldBRequired?: boolean;
        outputConstructor?: string;
        outputToField?: string;
        outputToFieldIndex?: number;
        overrideOutputField?: boolean;
      }
      export interface FilterExpression {
        caseSensitive?: boolean;
        expressionValue?: string;
        field?: string;
        fieldIndex?: number;
        kind?: string;
        matchType?: string;
      }
      export interface FilterLowercaseDetails {
        field?: string;
        fieldIndex?: number;
      }
      export interface FilterParentLink {
        href?: string;
        type?: string;
      }
      export interface FilterRef {
        accountId?: string;
        href?: string;
        id?: string;
        kind?: string;
        name?: string;
      }
      export interface FilterSearchAndReplaceDetails {
        caseSensitive?: boolean;
        field?: string;
        fieldIndex?: number;
        replaceString?: string;
        searchString?: string;
      }
      export interface FilterUppercaseDetails {
        field?: string;
        fieldIndex?: number;
      }
      export interface Filters {
        items?: Analytics_v3.Schema.Filter[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      export interface GaData {
        columnHeaders?: Analytics_v3.Schema.GaDataColumnHeaders[];
        containsSampledData?: boolean;
        dataLastRefreshed?: string;
        dataTable?: Analytics_v3.Schema.GaDataDataTable;
        id?: string;
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        profileInfo?: Analytics_v3.Schema.GaDataProfileInfo;
        query?: Analytics_v3.Schema.GaDataQuery;
        rows?: String[][];
        sampleSize?: string;
        sampleSpace?: string;
        selfLink?: string;
        totalResults?: number;
        totalsForAllResults?: object;
      }
      export interface GaDataColumnHeaders {
        columnType?: string;
        dataType?: string;
        name?: string;
      }
      export interface GaDataDataTable {
        cols?: Analytics_v3.Schema.GaDataDataTableCols[];
        rows?: Analytics_v3.Schema.GaDataDataTableRows[];
      }
      export interface GaDataDataTableCols {
        id?: string;
        label?: string;
        type?: string;
      }
      export interface GaDataDataTableRows {
        c?: Analytics_v3.Schema.GaDataDataTableRowsC[];
      }
      export interface GaDataDataTableRowsC {
        v?: string;
      }
      export interface GaDataProfileInfo {
        accountId?: string;
        internalWebPropertyId?: string;
        profileId?: string;
        profileName?: string;
        tableId?: string;
        webPropertyId?: string;
      }
      export interface GaDataQuery {
        dimensions?: string;
        end_date?: string;
        filters?: string;
        ids?: string;
        max_results?: number;
        metrics?: string[];
        samplingLevel?: string;
        segment?: string;
        sort?: string[];
        start_date?: string;
        start_index?: number;
      }
      export interface Goal {
        accountId?: string;
        active?: boolean;
        created?: string;
        eventDetails?: Analytics_v3.Schema.GoalEventDetails;
        id?: string;
        internalWebPropertyId?: string;
        kind?: string;
        name?: string;
        parentLink?: Analytics_v3.Schema.GoalParentLink;
        profileId?: string;
        selfLink?: string;
        type?: string;
        updated?: string;
        urlDestinationDetails?: Analytics_v3.Schema.GoalUrlDestinationDetails;
        value?: Number;
        visitNumPagesDetails?: Analytics_v3.Schema.GoalVisitNumPagesDetails;
        visitTimeOnSiteDetails?: Analytics_v3.Schema.GoalVisitTimeOnSiteDetails;
        webPropertyId?: string;
      }
      export interface GoalEventDetails {
        eventConditions?: GoalEventDetailsEventConditions[];
        useEventValue?: boolean;
      }
      export interface GoalEventDetailsEventConditions {
        comparisonType?: string;
        comparisonValue?: string;
        expression?: string;
        matchType?: string;
        type?: string;
      }
      export interface GoalParentLink {
        href?: string;
        type?: string;
      }
      export interface GoalUrlDestinationDetails {
        caseSensitive?: boolean;
        firstStepRequired?: boolean;
        matchType?: string;
        steps?: GoalUrlDestinationDetailsSteps[];
        url?: string;
      }
      export interface GoalUrlDestinationDetailsSteps {
        name?: string;
        number?: number;
        url?: string;
      }
      export interface GoalVisitNumPagesDetails {
        comparisonType?: string;
        comparisonValue?: string;
      }
      export interface GoalVisitTimeOnSiteDetails {
        comparisonType?: string;
        comparisonValue?: string;
      }
      export interface Goals {
        items?: Goal[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      export interface HashClientIdRequest {
        clientId?: string;
        kind?: string;
        webPropertyId?: string;
      }
      export interface HashClientIdResponse {
        clientId?: string;
        hashedClientId?: string;
        kind?: string;
        webPropertyId?: string;
      }
      export interface IncludeConditions {
        daysToLookBack?: number;
        isSmartList?: boolean;
        kind?: string;
        membershipDurationDays?: number;
        segment?: string;
      }
      export interface LinkedForeignAccount {
        accountId?: string;
        eligibleForSearch?: boolean;
        id?: string;
        internalWebPropertyId?: string;
        kind?: string;
        linkedAccountId?: string;
        remarketingAudienceId?: string;
        status?: string;
        type?: string;
        webPropertyId?: string;
      }
      export interface McfData {
        columnHeaders?: McfDataColumnHeaders[];
        containsSampledData?: boolean;
        id?: string;
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        profileInfo?: McfDataProfileInfo;
        query?: McfDataQuery;
        rows?: McfDataRows[][];
        sampleSize?: string;
        sampleSpace?: string;
        selfLink?: string;
        totalResults?: number;
        totalsForAllResults?: object;
      }
      export interface McfDataColumnHeaders {
        columnType?: string;
        dataType?: string;
        name?: string;
      }
      export interface McfDataProfileInfo {
        accountId?: string;
        internalWebPropertyId?: string;
        profileId?: string;
        profileName?: string;
        tableId?: string;
        webPropertyId?: string;
      }
      export interface McfDataQuery {
        dimensions?: string;
        end_date?: string;
        filters?: string;
        ids?: string;
        max_results?: number;
        metrics?: string[];
        samplingLevel?: string;
        segment?: string;
        sort?: string[];
        start_date?: string;
        start_index?: number;
      }
      export interface McfDataRows {
        conversionPathValue?: McfDataRowsConversionPathValue[];
        primitiveValue?: string;
      }
      export interface McfDataRowsConversionPathValue {
        interactionType?: string;
        nodeValue?: string;
      }
      export interface Profile {
        accountId?: string;
        botFilteringEnabled?: boolean;
        childLink?: ProfileChildLink;
        created?: string;
        currency?: string;
        defaultPage?: string;
        eCommerceTracking?: boolean;
        enhancedECommerceTracking?: boolean;
        excludeQueryParameters?: string;
        id?: string;
        internalWebPropertyId?: string;
        kind?: string;
        name?: string;
        parentLink?: ProfileParentLink;
        permissions?: ProfilePermissions;
        selfLink?: string;
        siteSearchCategoryParameters?: string;
        siteSearchQueryParameters?: string;
        starred?: boolean;
        stripSiteSearchCategoryParameters?: boolean;
        stripSiteSearchQueryParameters?: boolean;
        timezone?: string;
        type?: string;
        updated?: string;
        webPropertyId?: string;
        websiteUrl?: string;
      }
      export interface ProfileChildLink {
        href?: string;
        type?: string;
      }
      export interface ProfileFilterLink {
        filterRef?: Analytics_v3.Schema.FilterRef;
        id?: string;
        kind?: string;
        profileRef?: ProfileRef;
        rank?: number;
        selfLink?: string;
      }
      export interface ProfileFilterLinks {
        items?: ProfileFilterLink[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      export interface ProfileParentLink {
        href?: string;
        type?: string;
      }
      export interface ProfilePermissions {
        effective?: string[];
      }
      export interface ProfileRef {
        accountId?: string;
        href?: string;
        id?: string;
        internalWebPropertyId?: string;
        kind?: string;
        name?: string;
        webPropertyId?: string;
      }
      export interface ProfileSummary {
        id?: string;
        kind?: string;
        name?: string;
        starred?: boolean;
        type?: string;
      }
      export interface Profiles {
        items?: Profile[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      export interface RealtimeData {
        columnHeaders?: RealtimeDataColumnHeaders[];
        id?: string;
        kind?: string;
        profileInfo?: RealtimeDataProfileInfo;
        query?: RealtimeDataQuery;
        rows?: String[][];
        selfLink?: string;
        totalResults?: number;
        totalsForAllResults?: object;
      }
      export interface RealtimeDataColumnHeaders {
        columnType?: string;
        dataType?: string;
        name?: string;
      }
      export interface RealtimeDataProfileInfo {
        accountId?: string;
        internalWebPropertyId?: string;
        profileId?: string;
        profileName?: string;
        tableId?: string;
        webPropertyId?: string;
      }
      export interface RealtimeDataQuery {
        dimensions?: string;
        filters?: string;
        ids?: string;
        max_results?: number;
        metrics?: string[];
        sort?: string[];
      }
      export interface RemarketingAudience {
        accountId?: string;
        audienceDefinition?: RemarketingAudienceAudienceDefinition;
        audienceType?: string;
        created?: string;
        description?: string;
        id?: string;
        internalWebPropertyId?: string;
        kind?: string;
        linkedAdAccounts?: LinkedForeignAccount[];
        linkedViews?: string[];
        name?: string;
        stateBasedAudienceDefinition?: RemarketingAudienceStateBasedAudienceDefinition;
        updated?: string;
        webPropertyId?: string;
      }
      export interface RemarketingAudienceAudienceDefinition {
        includeConditions?: IncludeConditions;
      }
      export interface RemarketingAudienceStateBasedAudienceDefinition {
        excludeConditions?: RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions;
        includeConditions?: IncludeConditions;
      }
      export interface RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions {
        exclusionDuration?: string;
        segment?: string;
      }
      export interface RemarketingAudiences {
        items?: RemarketingAudience[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      export interface Segment {
        created?: string;
        definition?: string;
        id?: string;
        kind?: string;
        name?: string;
        segmentId?: string;
        selfLink?: string;
        type?: string;
        updated?: string;
      }
      export interface Segments {
        items?: Segment[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      export interface UnsampledReport {
        accountId?: string;
        cloudStorageDownloadDetails?: UnsampledReportCloudStorageDownloadDetails;
        created?: string;
        dimensions?: string;
        downloadType?: string;
        driveDownloadDetails?: UnsampledReportDriveDownloadDetails;
        end_date?: string;
        filters?: string;
        id?: string;
        kind?: string;
        metrics?: string;
        profileId?: string;
        segment?: string;
        selfLink?: string;
        start_date?: string;
        status?: string;
        title?: string;
        updated?: string;
        webPropertyId?: string;
      }
      export interface UnsampledReportCloudStorageDownloadDetails {
        bucketId?: string;
        objectId?: string;
      }
      export interface UnsampledReportDriveDownloadDetails {
        documentId?: string;
      }
      export interface UnsampledReports {
        items?: UnsampledReport[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      export interface Upload {
        accountId?: string;
        customDataSourceId?: string;
        errors?: string[];
        id?: string;
        kind?: string;
        status?: string;
        uploadTime?: string;
      }
      export interface Uploads {
        items?: Upload[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
      }
      export interface UserDeletionRequest {
        deletionRequestTime?: string;
        firebaseProjectId?: string;
        id?: UserDeletionRequestId;
        kind?: string;
        webPropertyId?: string;
      }
      export interface UserDeletionRequestId {
        type?: string;
        userId?: string;
      }
      export interface UserRef {
        email?: string;
        id?: string;
        kind?: string;
      }
      export interface WebPropertyRef {
        accountId?: string;
        href?: string;
        id?: string;
        internalWebPropertyId?: string;
        kind?: string;
        name?: string;
      }
      export interface WebPropertySummary {
        id?: string;
        internalWebPropertyId?: string;
        kind?: string;
        level?: string;
        name?: string;
        profiles?: ProfileSummary[];
        starred?: boolean;
        websiteUrl?: string;
      }
      export interface Webproperties {
        items?: Webproperty[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      export interface Webproperty {
        accountId?: string;
        childLink?: WebpropertyChildLink;
        created?: string;
        dataRetentionResetOnNewActivity?: boolean;
        dataRetentionTtl?: string;
        defaultProfileId?: string;
        id?: string;
        industryVertical?: string;
        internalWebPropertyId?: string;
        kind?: string;
        level?: string;
        name?: string;
        parentLink?: WebpropertyParentLink;
        permissions?: WebpropertyPermissions;
        profileCount?: number;
        selfLink?: string;
        starred?: boolean;
        updated?: string;
        websiteUrl?: string;
      }
      export interface WebpropertyChildLink {
        href?: string;
        type?: string;
      }
      export interface WebpropertyParentLink {
        href?: string;
        type?: string;
      }
      export interface WebpropertyPermissions {
        effective?: string[];
      }
    }
  }
  export interface Analytics_v3 {
    Data?: Analytics_v3.Collection.DataCollection;
    Management?: Analytics_v3.Collection.ManagementCollection;
    Metadata?: Analytics_v3.Collection.MetadataCollection;
    Provisioning?: Analytics_v3.Collection.ProvisioningCollection;
    UserDeletion?: Analytics_v3.Collection.UserDeletionCollection;
    // Create a new instance of Account
    newAccount(): Analytics_v3.Schema.Account;
    // Create a new instance of AccountChildLink
    newAccountChildLink(): Analytics_v3.Schema.AccountChildLink;
    // Create a new instance of AccountPermissions
    newAccountPermissions(): Analytics_v3.Schema.AccountPermissions;
    // Create a new instance of AccountRef
    newAccountRef(): Analytics_v3.Schema.AccountRef;
    // Create a new instance of AccountTicket
    newAccountTicket(): Analytics_v3.Schema.AccountTicket;
    // Create a new instance of AccountTreeRequest
    newAccountTreeRequest(): Analytics_v3.Schema.AccountTreeRequest;
    // Create a new instance of AdWordsAccount
    newAdWordsAccount(): Analytics_v3.Schema.AdWordsAccount;
    // Create a new instance of AnalyticsDataimportDeleteUploadDataRequest
    newAnalyticsDataimportDeleteUploadDataRequest(): Analytics_v3.Schema.AnalyticsDataimportDeleteUploadDataRequest;
    // Create a new instance of CustomDimension
    newCustomDimension(): Analytics_v3.Schema.CustomDimension;
    // Create a new instance of CustomDimensionParentLink
    newCustomDimensionParentLink(): Analytics_v3.Schema.CustomDimensionParentLink;
    // Create a new instance of CustomMetric
    newCustomMetric(): Analytics_v3.Schema.CustomMetric;
    // Create a new instance of CustomMetricParentLink
    newCustomMetricParentLink(): Analytics_v3.Schema.CustomMetricParentLink;
    // Create a new instance of EntityAdWordsLink
    newEntityAdWordsLink(): Analytics_v3.Schema.EntityAdWordsLink;
    // Create a new instance of EntityAdWordsLinkEntity
    newEntityAdWordsLinkEntity(): Analytics_v3.Schema.EntityAdWordsLinkEntity;
    // Create a new instance of EntityUserLink
    newEntityUserLink(): Analytics_v3.Schema.EntityUserLink;
    // Create a new instance of EntityUserLinkEntity
    newEntityUserLinkEntity(): Analytics_v3.Schema.EntityUserLinkEntity;
    // Create a new instance of EntityUserLinkPermissions
    newEntityUserLinkPermissions(): Analytics_v3.Schema.EntityUserLinkPermissions;
    // Create a new instance of Experiment
    newExperiment(): Analytics_v3.Schema.Experiment;
    // Create a new instance of ExperimentParentLink
    newExperimentParentLink(): Analytics_v3.Schema.ExperimentParentLink;
    // Create a new instance of ExperimentVariations
    newExperimentVariations(): Analytics_v3.Schema.ExperimentVariations;
    // Create a new instance of Filter
    newFilter(): Analytics_v3.Schema.Filter;
    // Create a new instance of FilterAdvancedDetails
    newFilterAdvancedDetails(): Analytics_v3.Schema.FilterAdvancedDetails;
    // Create a new instance of FilterExpression
    newFilterExpression(): Analytics_v3.Schema.FilterExpression;
    // Create a new instance of FilterLowercaseDetails
    newFilterLowercaseDetails(): Analytics_v3.Schema.FilterLowercaseDetails;
    // Create a new instance of FilterParentLink
    newFilterParentLink(): Analytics_v3.Schema.FilterParentLink;
    // Create a new instance of FilterRef
    newFilterRef(): Analytics_v3.Schema.FilterRef;
    // Create a new instance of FilterSearchAndReplaceDetails
    newFilterSearchAndReplaceDetails(): Analytics_v3.Schema.FilterSearchAndReplaceDetails;
    // Create a new instance of FilterUppercaseDetails
    newFilterUppercaseDetails(): Analytics_v3.Schema.FilterUppercaseDetails;
    // Create a new instance of Goal
    newGoal(): Analytics_v3.Schema.Goal;
    // Create a new instance of GoalEventDetails
    newGoalEventDetails(): Analytics_v3.Schema.GoalEventDetails;
    // Create a new instance of GoalEventDetailsEventConditions
    newGoalEventDetailsEventConditions(): Analytics_v3.Schema.GoalEventDetailsEventConditions;
    // Create a new instance of GoalParentLink
    newGoalParentLink(): Analytics_v3.Schema.GoalParentLink;
    // Create a new instance of GoalUrlDestinationDetails
    newGoalUrlDestinationDetails(): Analytics_v3.Schema.GoalUrlDestinationDetails;
    // Create a new instance of GoalUrlDestinationDetailsSteps
    newGoalUrlDestinationDetailsSteps(): Analytics_v3.Schema.GoalUrlDestinationDetailsSteps;
    // Create a new instance of GoalVisitNumPagesDetails
    newGoalVisitNumPagesDetails(): Analytics_v3.Schema.GoalVisitNumPagesDetails;
    // Create a new instance of GoalVisitTimeOnSiteDetails
    newGoalVisitTimeOnSiteDetails(): Analytics_v3.Schema.GoalVisitTimeOnSiteDetails;
    // Create a new instance of HashClientIdRequest
    newHashClientIdRequest(): Analytics_v3.Schema.HashClientIdRequest;
    // Create a new instance of IncludeConditions
    newIncludeConditions(): Analytics_v3.Schema.IncludeConditions;
    // Create a new instance of LinkedForeignAccount
    newLinkedForeignAccount(): Analytics_v3.Schema.LinkedForeignAccount;
    // Create a new instance of Profile
    newProfile(): Analytics_v3.Schema.Profile;
    // Create a new instance of ProfileChildLink
    newProfileChildLink(): Analytics_v3.Schema.ProfileChildLink;
    // Create a new instance of ProfileFilterLink
    newProfileFilterLink(): Analytics_v3.Schema.ProfileFilterLink;
    // Create a new instance of ProfileParentLink
    newProfileParentLink(): Analytics_v3.Schema.ProfileParentLink;
    // Create a new instance of ProfilePermissions
    newProfilePermissions(): Analytics_v3.Schema.ProfilePermissions;
    // Create a new instance of ProfileRef
    newProfileRef(): Analytics_v3.Schema.ProfileRef;
    // Create a new instance of RemarketingAudience
    newRemarketingAudience(): Analytics_v3.Schema.RemarketingAudience;
    // Create a new instance of RemarketingAudienceAudienceDefinition
    newRemarketingAudienceAudienceDefinition(): Analytics_v3.Schema.RemarketingAudienceAudienceDefinition;
    // Create a new instance of RemarketingAudienceStateBasedAudienceDefinition
    newRemarketingAudienceStateBasedAudienceDefinition(): Analytics_v3.Schema.RemarketingAudienceStateBasedAudienceDefinition;
    // Create a new instance of RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions
    newRemarketingAudienceStateBasedAudienceDefinitionExcludeConditions(): Analytics_v3.Schema.RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions;
    // Create a new instance of UnsampledReport
    newUnsampledReport(): Analytics_v3.Schema.UnsampledReport;
    // Create a new instance of UnsampledReportCloudStorageDownloadDetails
    newUnsampledReportCloudStorageDownloadDetails(): Analytics_v3.Schema.UnsampledReportCloudStorageDownloadDetails;
    // Create a new instance of UnsampledReportDriveDownloadDetails
    newUnsampledReportDriveDownloadDetails(): Analytics_v3.Schema.UnsampledReportDriveDownloadDetails;
    // Create a new instance of UserDeletionRequest
    newUserDeletionRequest(): Analytics_v3.Schema.UserDeletionRequest;
    // Create a new instance of UserDeletionRequestId
    newUserDeletionRequestId(): Analytics_v3.Schema.UserDeletionRequestId;
    // Create a new instance of UserRef
    newUserRef(): Analytics_v3.Schema.UserRef;
    // Create a new instance of WebPropertyRef
    newWebPropertyRef(): Analytics_v3.Schema.WebPropertyRef;
    // Create a new instance of Webproperty
    newWebproperty(): Analytics_v3.Schema.Webproperty;
    // Create a new instance of WebpropertyChildLink
    newWebpropertyChildLink(): Analytics_v3.Schema.WebpropertyChildLink;
    // Create a new instance of WebpropertyParentLink
    newWebpropertyParentLink(): Analytics_v3.Schema.WebpropertyParentLink;
    // Create a new instance of WebpropertyPermissions
    newWebpropertyPermissions(): Analytics_v3.Schema.WebpropertyPermissions;
  }
}

declare var Analytics_v3: GoogleAppsScript.Analytics_v3;