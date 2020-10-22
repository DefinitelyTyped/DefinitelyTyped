// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Analytics {
    namespace Collection {
      namespace Data {
        interface GaCollection {
          // Returns Analytics data for a view (profile).
          get(ids: string, start_date: string, end_date: string, metrics: string): Analytics.Schema.GaData;
          // Returns Analytics data for a view (profile).
          get(ids: string, start_date: string, end_date: string, metrics: string, optionalArgs: object): Analytics.Schema.GaData;
        }
        interface McfCollection {
          // Returns Analytics Multi-Channel Funnels data for a view (profile).
          get(ids: string, start_date: string, end_date: string, metrics: string): Analytics.Schema.McfData;
          // Returns Analytics Multi-Channel Funnels data for a view (profile).
          get(ids: string, start_date: string, end_date: string, metrics: string, optionalArgs: object): Analytics.Schema.McfData;
        }
        interface RealtimeCollection {
          // Returns real time data for a view (profile).
          get(ids: string, metrics: string): Analytics.Schema.RealtimeData;
          // Returns real time data for a view (profile).
          get(ids: string, metrics: string, optionalArgs: object): Analytics.Schema.RealtimeData;
        }
      }
      namespace Management {
        interface AccountSummariesCollection {
          // Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.
          list(): Analytics.Schema.AccountSummaries;
          // Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.
          list(optionalArgs: object): Analytics.Schema.AccountSummaries;
        }
        interface AccountUserLinksCollection {
          // Adds a new user to the given account.
          insert(resource: Schema.EntityUserLink, accountId: string): Analytics.Schema.EntityUserLink;
          // Lists account-user links for a given account.
          list(accountId: string): Analytics.Schema.EntityUserLinks;
          // Lists account-user links for a given account.
          list(accountId: string, optionalArgs: object): Analytics.Schema.EntityUserLinks;
          // Removes a user from the given account.
          remove(accountId: string, linkId: string): void;
          // Updates permissions for an existing user on the given account.
          update(resource: Schema.EntityUserLink, accountId: string, linkId: string): Analytics.Schema.EntityUserLink;
        }
        interface AccountsCollection {
          // Lists all accounts to which the user has access.
          list(): Analytics.Schema.Accounts;
          // Lists all accounts to which the user has access.
          list(optionalArgs: object): Analytics.Schema.Accounts;
        }
        interface ClientIdCollection {
          // Hashes the given Client ID.
          hashClientId(resource: Analytics.Schema.HashClientIdRequest): Analytics.Schema.HashClientIdResponse;
        }
        interface CustomDataSourcesCollection {
          // List custom data sources to which the user has access.
          list(accountId: string, webPropertyId: string): Analytics.Schema.CustomDataSources;
          // List custom data sources to which the user has access.
          list(accountId: string, webPropertyId: string, optionalArgs: object): Analytics.Schema.CustomDataSources;
        }
        interface CustomDimensionsCollection {
          // Get a custom dimension to which the user has access.
          get(accountId: string, webPropertyId: string, customDimensionId: string): Analytics.Schema.CustomDimension;
          // Create a new custom dimension.
          insert(resource: Schema.CustomDimension, accountId: string, webPropertyId: string): Analytics.Schema.CustomDimension;
          // Lists custom dimensions to which the user has access.
          list(accountId: string, webPropertyId: string): Analytics.Schema.CustomDimensions;
          // Lists custom dimensions to which the user has access.
          list(accountId: string, webPropertyId: string, optionalArgs: object): Analytics.Schema.CustomDimensions;
          // Updates an existing custom dimension. This method supports patch semantics.
          patch(resource: Schema.CustomDimension, accountId: string, webPropertyId: string, customDimensionId: string): Analytics.Schema.CustomDimension;
          // Updates an existing custom dimension. This method supports patch semantics.
          patch(resource: Schema.CustomDimension, accountId: string, webPropertyId: string, customDimensionId: string, optionalArgs: object): Analytics.Schema.CustomDimension;
          // Updates an existing custom dimension.
          update(resource: Schema.CustomDimension, accountId: string, webPropertyId: string, customDimensionId: string): Analytics.Schema.CustomDimension;
          // Updates an existing custom dimension.
          update(resource: Schema.CustomDimension, accountId: string, webPropertyId: string, customDimensionId: string, optionalArgs: object): Analytics.Schema.CustomDimension;
        }
        interface CustomMetricsCollection {
          // Get a custom metric to which the user has access.
          get(accountId: string, webPropertyId: string, customMetricId: string): Analytics.Schema.CustomMetric;
          // Create a new custom metric.
          insert(resource: Schema.CustomMetric, accountId: string, webPropertyId: string): Analytics.Schema.CustomMetric;
          // Lists custom metrics to which the user has access.
          list(accountId: string, webPropertyId: string): Analytics.Schema.CustomMetrics;
          // Lists custom metrics to which the user has access.
          list(accountId: string, webPropertyId: string, optionalArgs: object): Analytics.Schema.CustomMetrics;
          // Updates an existing custom metric. This method supports patch semantics.
          patch(resource: Schema.CustomMetric, accountId: string, webPropertyId: string, customMetricId: string): Analytics.Schema.CustomMetric;
          // Updates an existing custom metric. This method supports patch semantics.
          patch(resource: Schema.CustomMetric, accountId: string, webPropertyId: string, customMetricId: string, optionalArgs: object): Analytics.Schema.CustomMetric;
          // Updates an existing custom metric.
          update(resource: Schema.CustomMetric, accountId: string, webPropertyId: string, customMetricId: string): Analytics.Schema.CustomMetric;
          // Updates an existing custom metric.
          update(resource: Schema.CustomMetric, accountId: string, webPropertyId: string, customMetricId: string, optionalArgs: object): Analytics.Schema.CustomMetric;
        }
        interface ExperimentsCollection {
          // Returns an experiment to which the user has access.
          get(accountId: string, webPropertyId: string, profileId: string, experimentId: string): Analytics.Schema.Experiment;
          // Create a new experiment.
          insert(resource: Schema.Experiment, accountId: string, webPropertyId: string, profileId: string): Analytics.Schema.Experiment;
          // Lists experiments to which the user has access.
          list(accountId: string, webPropertyId: string, profileId: string): Analytics.Schema.Experiments;
          // Lists experiments to which the user has access.
          list(accountId: string, webPropertyId: string, profileId: string, optionalArgs: object): Analytics.Schema.Experiments;
          // Update an existing experiment. This method supports patch semantics.
          patch(resource: Schema.Experiment, accountId: string, webPropertyId: string, profileId: string, experimentId: string): Analytics.Schema.Experiment;
          // Delete an experiment.
          remove(accountId: string, webPropertyId: string, profileId: string, experimentId: string): void;
          // Update an existing experiment.
          update(resource: Schema.Experiment, accountId: string, webPropertyId: string, profileId: string, experimentId: string): Analytics.Schema.Experiment;
        }
        interface FiltersCollection {
          // Returns a filters to which the user has access.
          get(accountId: string, filterId: string): Analytics.Schema.Filter;
          // Create a new filter.
          insert(resource: Schema.Filter, accountId: string): Analytics.Schema.Filter;
          // Lists all filters for an account
          list(accountId: string): Analytics.Schema.Filters;
          // Lists all filters for an account
          list(accountId: string, optionalArgs: object): Analytics.Schema.Filters;
          // Updates an existing filter. This method supports patch semantics.
          patch(resource: Schema.Filter, accountId: string, filterId: string): Analytics.Schema.Filter;
          // Delete a filter.
          remove(accountId: string, filterId: string): Analytics.Schema.Filter;
          // Updates an existing filter.
          update(resource: Schema.Filter, accountId: string, filterId: string): Analytics.Schema.Filter;
        }
        interface GoalsCollection {
          // Gets a goal to which the user has access.
          get(accountId: string, webPropertyId: string, profileId: string, goalId: string): Analytics.Schema.Goal;
          // Create a new goal.
          insert(resource: Analytics.Schema.Goal, accountId: string, webPropertyId: string, profileId: string): Analytics.Schema.Goal;
          // Lists goals to which the user has access.
          list(accountId: string, webPropertyId: string, profileId: string): Analytics.Schema.Goals;
          // Lists goals to which the user has access.
          list(accountId: string, webPropertyId: string, profileId: string, optionalArgs: object): Analytics.Schema.Goals;
          // Updates an existing goal. This method supports patch semantics.
          patch(resource: Schema.Goal, accountId: string, webPropertyId: string, profileId: string, goalId: string): Analytics.Schema.Goal;
          // Updates an existing goal.
          update(resource: Schema.Goal, accountId: string, webPropertyId: string, profileId: string, goalId: string): Analytics.Schema.Goal;
        }
        interface ProfileFilterLinksCollection {
          // Returns a single profile filter link.
          get(accountId: string, webPropertyId: string, profileId: string, linkId: string): Analytics.Schema.ProfileFilterLink;
          // Create a new profile filter link.
          insert(resource: Schema.ProfileFilterLink, accountId: string, webPropertyId: string, profileId: string): Analytics.Schema.ProfileFilterLink;
          // Lists all profile filter links for a profile.
          list(accountId: string, webPropertyId: string, profileId: string): Analytics.Schema.ProfileFilterLinks;
          // Lists all profile filter links for a profile.
          list(accountId: string, webPropertyId: string, profileId: string, optionalArgs: object): Analytics.Schema.ProfileFilterLinks;
          // Update an existing profile filter link. This method supports patch semantics.
          patch(resource: Schema.ProfileFilterLink, accountId: string, webPropertyId: string, profileId: string, linkId: string): Analytics.Schema.ProfileFilterLink;
          // Delete a profile filter link.
          remove(accountId: string, webPropertyId: string, profileId: string, linkId: string): void;
          // Update an existing profile filter link.
          update(resource: Schema.ProfileFilterLink, accountId: string, webPropertyId: string, profileId: string, linkId: string): Analytics.Schema.ProfileFilterLink;
        }
        interface ProfileUserLinksCollection {
          // Adds a new user to the given view (profile).
          insert(resource: Schema.EntityUserLink, accountId: string, webPropertyId: string, profileId: string): Analytics.Schema.EntityUserLink;
          // Lists profile-user links for a given view (profile).
          list(accountId: string, webPropertyId: string, profileId: string): Analytics.Schema.EntityUserLinks;
          // Lists profile-user links for a given view (profile).
          list(accountId: string, webPropertyId: string, profileId: string, optionalArgs: object): Analytics.Schema.EntityUserLinks;
          // Removes a user from the given view (profile).
          remove(accountId: string, webPropertyId: string, profileId: string, linkId: string): void;
          // Updates permissions for an existing user on the given view (profile).
          update(resource: Schema.EntityUserLink, accountId: string, webPropertyId: string, profileId: string, linkId: string): Analytics.Schema.EntityUserLink;
        }
        interface ProfilesCollection {
          // Gets a view (profile) to which the user has access.
          get(accountId: string, webPropertyId: string, profileId: string): Analytics.Schema.Profile;
          // Create a new view (profile).
          insert(resource: Schema.Profile, accountId: string, webPropertyId: string): Analytics.Schema.Profile;
          // Lists views (profiles) to which the user has access.
          list(accountId: string, webPropertyId: string): Analytics.Schema.Profiles;
          // Lists views (profiles) to which the user has access.
          list(accountId: string, webPropertyId: string, optionalArgs: object): Analytics.Schema.Profiles;
          // Updates an existing view (profile). This method supports patch semantics.
          patch(resource: Schema.Profile, accountId: string, webPropertyId: string, profileId: string): Analytics.Schema.Profile;
          // Deletes a view (profile).
          remove(accountId: string, webPropertyId: string, profileId: string): void;
          // Updates an existing view (profile).
          update(resource: Schema.Profile, accountId: string, webPropertyId: string, profileId: string): Analytics.Schema.Profile;
        }
        interface RemarketingAudienceCollection {
          // Gets a remarketing audience to which the user has access.
          get(accountId: string, webPropertyId: string, remarketingAudienceId: string): Analytics.Schema.RemarketingAudience;
          // Creates a new remarketing audience.
          insert(resource: Schema.RemarketingAudience, accountId: string, webPropertyId: string): Analytics.Schema.RemarketingAudience;
          // Lists remarketing audiences to which the user has access.
          list(accountId: string, webPropertyId: string): Analytics.Schema.RemarketingAudiences;
          // Lists remarketing audiences to which the user has access.
          list(accountId: string, webPropertyId: string, optionalArgs: object): Analytics.Schema.RemarketingAudiences;
          // Updates an existing remarketing audience. This method supports patch semantics.
          patch(resource: Schema.RemarketingAudience, accountId: string, webPropertyId: string, remarketingAudienceId: string): Analytics.Schema.RemarketingAudience;
          // Delete a remarketing audience.
          remove(accountId: string, webPropertyId: string, remarketingAudienceId: string): void;
          // Updates an existing remarketing audience.
          update(resource: Schema.RemarketingAudience, accountId: string, webPropertyId: string, remarketingAudienceId: string): Analytics.Schema.RemarketingAudience;
        }
        interface SegmentsCollection {
          // Lists segments to which the user has access.
          list(): Analytics.Schema.Segments;
          // Lists segments to which the user has access.
          list(optionalArgs: object): Analytics.Schema.Segments;
        }
        interface UnsampledReportsCollection {
          // Returns a single unsampled report.
          get(accountId: string, webPropertyId: string, profileId: string, unsampledReportId: string): Analytics.Schema.UnsampledReport;
          // Create a new unsampled report.
          insert(resource: Schema.UnsampledReport, accountId: string, webPropertyId: string, profileId: string): Analytics.Schema.UnsampledReport;
          // Lists unsampled reports to which the user has access.
          list(accountId: string, webPropertyId: string, profileId: string): Analytics.Schema.UnsampledReports;
          // Lists unsampled reports to which the user has access.
          list(accountId: string, webPropertyId: string, profileId: string, optionalArgs: object): Analytics.Schema.UnsampledReports;
          // Deletes an unsampled report.
          remove(accountId: string, webPropertyId: string, profileId: string, unsampledReportId: string): void;
        }
        interface UploadsCollection {
          // Delete data associated with a previous upload.
          deleteUploadData(resource: Schema.AnalyticsDataimportDeleteUploadDataRequest, accountId: string, webPropertyId: string, customDataSourceId: string): void;
          // List uploads to which the user has access.
          get(accountId: string, webPropertyId: string, customDataSourceId: string, uploadId: string): Analytics.Schema.Upload;
          // List uploads to which the user has access.
          list(accountId: string, webPropertyId: string, customDataSourceId: string): Analytics.Schema.Uploads;
          // List uploads to which the user has access.
          list(accountId: string, webPropertyId: string, customDataSourceId: string, optionalArgs: object): Analytics.Schema.Uploads;
          // Upload data for a custom data source.
          uploadData(accountId: string, webPropertyId: string, customDataSourceId: string): Analytics.Schema.Upload;
          // Upload data for a custom data source.
          uploadData(accountId: string, webPropertyId: string, customDataSourceId: string, mediaData: any): Analytics.Schema.Upload;
        }
        interface WebPropertyAdWordsLinksCollection {
          // Returns a web property-Google Ads link to which the user has access.
          get(accountId: string, webPropertyId: string, webPropertyAdWordsLinkId: string): Analytics.Schema.EntityAdWordsLink;
          // Creates a webProperty-Google Ads link.
          insert(resource: Schema.EntityAdWordsLink, accountId: string, webPropertyId: string): Analytics.Schema.EntityAdWordsLink;
          // Lists webProperty-Google Ads links for a given web property.
          list(accountId: string, webPropertyId: string): Analytics.Schema.EntityAdWordsLinks;
          // Lists webProperty-Google Ads links for a given web property.
          list(accountId: string, webPropertyId: string, optionalArgs: object): Analytics.Schema.EntityAdWordsLinks;
          // Updates an existing webProperty-Google Ads link. This method supports patch semantics.
          patch(resource: Schema.EntityAdWordsLink, accountId: string, webPropertyId: string, webPropertyAdWordsLinkId: string): Analytics.Schema.EntityAdWordsLink;
          // Deletes a web property-Google Ads link.
          remove(accountId: string, webPropertyId: string, webPropertyAdWordsLinkId: string): void;
          // Updates an existing webProperty-Google Ads link.
          update(resource: Schema.EntityAdWordsLink, accountId: string, webPropertyId: string, webPropertyAdWordsLinkId: string): Analytics.Schema.EntityAdWordsLink;
        }
        interface WebpropertiesCollection {
          // Gets a web property to which the user has access.
          get(accountId: string, webPropertyId: string): Analytics.Schema.Webproperty;
          // Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.
          insert(resource: Schema.Webproperty, accountId: string): Analytics.Schema.Webproperty;
          // Lists web properties to which the user has access.
          list(accountId: string): Analytics.Schema.Webproperties;
          // Lists web properties to which the user has access.
          list(accountId: string, optionalArgs: object): Analytics.Schema.Webproperties;
          // Updates an existing web property. This method supports patch semantics.
          patch(resource: Schema.Webproperty, accountId: string, webPropertyId: string): Analytics.Schema.Webproperty;
          // Updates an existing web property.
          update(resource: Schema.Webproperty, accountId: string, webPropertyId: string): Analytics.Schema.Webproperty;
        }
        interface WebpropertyUserLinksCollection {
          // Adds a new user to the given web property.
          insert(resource: Schema.EntityUserLink, accountId: string, webPropertyId: string): Analytics.Schema.EntityUserLink;
          // Lists webProperty-user links for a given web property.
          list(accountId: string, webPropertyId: string): Analytics.Schema.EntityUserLinks;
          // Lists webProperty-user links for a given web property.
          list(accountId: string, webPropertyId: string, optionalArgs: object): Analytics.Schema.EntityUserLinks;
          // Removes a user from the given web property.
          remove(accountId: string, webPropertyId: string, linkId: string): void;
          // Updates permissions for an existing user on the given web property.
          update(resource: Schema.EntityUserLink, accountId: string, webPropertyId: string, linkId: string): Analytics.Schema.EntityUserLink;
        }
      }
      namespace Metadata {
        interface ColumnsCollection {
          // Lists all columns for a report type
          list(reportType: string): Analytics.Schema.Columns;
        }
      }
      namespace UserDeletion {
        interface UserDeletionRequestCollection {
          // Insert or update a user deletion requests.
          upsert(resource: Schema.UserDeletionRequest): Analytics.Schema.UserDeletionRequest;
        }
      }
      interface DataCollection {
        Ga?: Analytics.Collection.Data.GaCollection;
        Mcf?: Analytics.Collection.Data.McfCollection;
        Realtime?: Analytics.Collection.Data.RealtimeCollection;
      }
      interface ManagementCollection {
        AccountSummaries?: Analytics.Collection.Management.AccountSummariesCollection;
        AccountUserLinks?: Analytics.Collection.Management.AccountUserLinksCollection;
        Accounts?: Analytics.Collection.Management.AccountsCollection;
        ClientId?: Analytics.Collection.Management.ClientIdCollection;
        CustomDataSources?: Analytics.Collection.Management.CustomDataSourcesCollection;
        CustomDimensions?: Analytics.Collection.Management.CustomDimensionsCollection;
        CustomMetrics?: Analytics.Collection.Management.CustomMetricsCollection;
        Experiments?: Analytics.Collection.Management.ExperimentsCollection;
        Filters?: Analytics.Collection.Management.FiltersCollection;
        Goals?: Analytics.Collection.Management.GoalsCollection;
        ProfileFilterLinks?: Analytics.Collection.Management.ProfileFilterLinksCollection;
        ProfileUserLinks?: Analytics.Collection.Management.ProfileUserLinksCollection;
        Profiles?: Analytics.Collection.Management.ProfilesCollection;
        RemarketingAudience?: Analytics.Collection.Management.RemarketingAudienceCollection;
        Segments?: Analytics.Collection.Management.SegmentsCollection;
        UnsampledReports?: Analytics.Collection.Management.UnsampledReportsCollection;
        Uploads?: Analytics.Collection.Management.UploadsCollection;
        WebPropertyAdWordsLinks?: Analytics.Collection.Management.WebPropertyAdWordsLinksCollection;
        Webproperties?: Analytics.Collection.Management.WebpropertiesCollection;
        WebpropertyUserLinks?: Analytics.Collection.Management.WebpropertyUserLinksCollection;
      }
      interface MetadataCollection {
        Columns?: Analytics.Collection.Metadata.ColumnsCollection;
      }
      interface ProvisioningCollection {
        // Creates an account ticket.
        createAccountTicket(resource: Schema.AccountTicket): Analytics.Schema.AccountTicket;
        // Provision account.
        createAccountTree(resource: Schema.AccountTreeRequest): Analytics.Schema.AccountTreeResponse;
      }
      interface UserDeletionCollection {
        UserDeletionRequest?: Analytics.Collection.UserDeletion.UserDeletionRequestCollection;
      }
    }
    namespace Schema {
      interface Account {
        childLink?: Analytics.Schema.AccountChildLink;
        created?: string;
        id?: string;
        kind?: string;
        name?: string;
        permissions?: Analytics.Schema.AccountPermissions;
        selfLink?: string;
        starred?: boolean;
        updated?: string;
      }
      interface AccountChildLink {
        href?: string;
        type?: string;
      }
      interface AccountPermissions {
        effective?: string[];
      }
      interface AccountRef {
        href?: string;
        id?: string;
        kind?: string;
        name?: string;
      }
      interface AccountSummaries {
        items?: Analytics.Schema.AccountSummary[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      interface AccountSummary {
        id?: string;
        kind?: string;
        name?: string;
        starred?: boolean;
        webProperties?: Analytics.Schema.WebPropertySummary[];
      }
      interface AccountTicket {
        account?: Analytics.Schema.Account;
        id?: string;
        kind?: string;
        profile?: Analytics.Schema.Profile;
        redirectUri?: string;
        webproperty?: Analytics.Schema.Webproperty;
      }
      interface AccountTreeRequest {
        accountName?: string;
        kind?: string;
        profileName?: string;
        timezone?: string;
        webpropertyName?: string;
        websiteUrl?: string;
      }
      interface AccountTreeResponse {
        account?: Analytics.Schema.Account;
        kind?: string;
        profile?: Analytics.Schema.Profile;
        webproperty?: Analytics.Schema.Webproperty;
      }
      interface Accounts {
        items?: Analytics.Schema.Account[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      interface AdWordsAccount {
        autoTaggingEnabled?: boolean;
        customerId?: string;
        kind?: string;
      }
      interface AnalyticsDataimportDeleteUploadDataRequest {
        customDataImportUids?: string[];
      }
      interface Column {
        attributes?: object;
        id?: string;
        kind?: string;
      }
      interface Columns {
        attributeNames?: string[];
        etag?: string;
        items?: Analytics.Schema.Column[];
        kind?: string;
        totalResults?: number;
      }
      interface CustomDataSource {
        accountId?: string;
        childLink?: Analytics.Schema.CustomDataSourceChildLink;
        created?: string;
        description?: string;
        id?: string;
        importBehavior?: string;
        kind?: string;
        name?: string;
        parentLink?: Analytics.Schema.CustomDataSourceParentLink;
        profilesLinked?: string[];
        schema?: string[];
        selfLink?: string;
        type?: string;
        updated?: string;
        uploadType?: string;
        webPropertyId?: string;
      }
      interface CustomDataSourceChildLink {
        href?: string;
        type?: string;
      }
      interface CustomDataSourceParentLink {
        href?: string;
        type?: string;
      }
      interface CustomDataSources {
        items?: Analytics.Schema.CustomDataSource[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      interface CustomDimension {
        accountId?: string;
        active?: boolean;
        created?: string;
        id?: string;
        index?: number;
        kind?: string;
        name?: string;
        parentLink?: Analytics.Schema.CustomDimensionParentLink;
        scope?: string;
        selfLink?: string;
        updated?: string;
        webPropertyId?: string;
      }
      interface CustomDimensionParentLink {
        href?: string;
        type?: string;
      }
      interface CustomDimensions {
        items?: Analytics.Schema.CustomDimension[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      interface CustomMetric {
        accountId?: string;
        active?: boolean;
        created?: string;
        id?: string;
        index?: number;
        kind?: string;
        max_value?: string;
        min_value?: string;
        name?: string;
        parentLink?: Analytics.Schema.CustomMetricParentLink;
        scope?: string;
        selfLink?: string;
        type?: string;
        updated?: string;
        webPropertyId?: string;
      }
      interface CustomMetricParentLink {
        href?: string;
        type?: string;
      }
      interface CustomMetrics {
        items?: Analytics.Schema.CustomMetric[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      interface EntityAdWordsLink {
        adWordsAccounts?: Analytics.Schema.AdWordsAccount[];
        entity?: Analytics.Schema.EntityAdWordsLinkEntity;
        id?: string;
        kind?: string;
        name?: string;
        profileIds?: string[];
        selfLink?: string;
      }
      interface EntityAdWordsLinkEntity {
        webPropertyRef?: Analytics.Schema.WebPropertyRef;
      }
      interface EntityAdWordsLinks {
        items?: Analytics.Schema.EntityAdWordsLink[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
      }
      interface EntityUserLink {
        entity?: Analytics.Schema.EntityUserLinkEntity;
        id?: string;
        kind?: string;
        permissions?: Analytics.Schema.EntityUserLinkPermissions;
        selfLink?: string;
        userRef?: Analytics.Schema.UserRef;
      }
      interface EntityUserLinkEntity {
        accountRef?: Analytics.Schema.AccountRef;
        profileRef?: Analytics.Schema.ProfileRef;
        webPropertyRef?: Analytics.Schema.WebPropertyRef;
      }
      interface EntityUserLinkPermissions {
        effective?: string[];
        local?: string[];
      }
      interface EntityUserLinks {
        items?: Analytics.Schema.EntityUserLink[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
      }
      interface Experiment {
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
        parentLink?: Analytics.Schema.ExperimentParentLink;
        profileId?: string;
        reasonExperimentEnded?: string;
        rewriteVariationUrlsAsOriginal?: boolean;
        selfLink?: string;
        servingFramework?: string;
        snippet?: string;
        startTime?: string;
        status?: string;
        trafficCoverage?: number;
        updated?: string;
        variations?: Analytics.Schema.ExperimentVariations[];
        webPropertyId?: string;
        winnerConfidenceLevel?: number;
        winnerFound?: boolean;
      }
      interface ExperimentParentLink {
        href?: string;
        type?: string;
      }
      interface ExperimentVariations {
        name?: string;
        status?: string;
        url?: string;
        weight?: number;
        won?: boolean;
      }
      interface Experiments {
        items?: Analytics.Schema.Experiment[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      interface Filter {
        accountId?: string;
        advancedDetails?: Analytics.Schema.FilterAdvancedDetails;
        created?: string;
        excludeDetails?: Analytics.Schema.FilterExpression;
        id?: string;
        includeDetails?: Analytics.Schema.FilterExpression;
        kind?: string;
        lowercaseDetails?: Analytics.Schema.FilterLowercaseDetails;
        name?: string;
        parentLink?: Analytics.Schema.FilterParentLink;
        searchAndReplaceDetails?: Analytics.Schema.FilterSearchAndReplaceDetails;
        selfLink?: string;
        type?: string;
        updated?: string;
        uppercaseDetails?: Analytics.Schema.FilterUppercaseDetails;
      }
      interface FilterAdvancedDetails {
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
      interface FilterExpression {
        caseSensitive?: boolean;
        expressionValue?: string;
        field?: string;
        fieldIndex?: number;
        kind?: string;
        matchType?: string;
      }
      interface FilterLowercaseDetails {
        field?: string;
        fieldIndex?: number;
      }
      interface FilterParentLink {
        href?: string;
        type?: string;
      }
      interface FilterRef {
        accountId?: string;
        href?: string;
        id?: string;
        kind?: string;
        name?: string;
      }
      interface FilterSearchAndReplaceDetails {
        caseSensitive?: boolean;
        field?: string;
        fieldIndex?: number;
        replaceString?: string;
        searchString?: string;
      }
      interface FilterUppercaseDetails {
        field?: string;
        fieldIndex?: number;
      }
      interface Filters {
        items?: Analytics.Schema.Filter[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      interface GaData {
        columnHeaders?: Analytics.Schema.GaDataColumnHeaders[];
        containsSampledData?: boolean;
        dataLastRefreshed?: string;
        dataTable?: Analytics.Schema.GaDataDataTable;
        id?: string;
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        profileInfo?: Analytics.Schema.GaDataProfileInfo;
        query?: Analytics.Schema.GaDataQuery;
        rows?: string[][];
        sampleSize?: string;
        sampleSpace?: string;
        selfLink?: string;
        totalResults?: number;
        totalsForAllResults?: object;
      }
      interface GaDataColumnHeaders {
        columnType?: string;
        dataType?: string;
        name?: string;
      }
      interface GaDataDataTable {
        cols?: Analytics.Schema.GaDataDataTableCols[];
        rows?: Analytics.Schema.GaDataDataTableRows[];
      }
      interface GaDataDataTableCols {
        id?: string;
        label?: string;
        type?: string;
      }
      interface GaDataDataTableRows {
        c?: Analytics.Schema.GaDataDataTableRowsC[];
      }
      interface GaDataDataTableRowsC {
        v?: string;
      }
      interface GaDataProfileInfo {
        accountId?: string;
        internalWebPropertyId?: string;
        profileId?: string;
        profileName?: string;
        tableId?: string;
        webPropertyId?: string;
      }
      interface GaDataQuery {
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
      interface Goal {
        accountId?: string;
        active?: boolean;
        created?: string;
        eventDetails?: Analytics.Schema.GoalEventDetails;
        id?: string;
        internalWebPropertyId?: string;
        kind?: string;
        name?: string;
        parentLink?: Analytics.Schema.GoalParentLink;
        profileId?: string;
        selfLink?: string;
        type?: string;
        updated?: string;
        urlDestinationDetails?: Analytics.Schema.GoalUrlDestinationDetails;
        value?: number;
        visitNumPagesDetails?: Analytics.Schema.GoalVisitNumPagesDetails;
        visitTimeOnSiteDetails?: Analytics.Schema.GoalVisitTimeOnSiteDetails;
        webPropertyId?: string;
      }
      interface GoalEventDetails {
        eventConditions?: GoalEventDetailsEventConditions[];
        useEventValue?: boolean;
      }
      interface GoalEventDetailsEventConditions {
        comparisonType?: string;
        comparisonValue?: string;
        expression?: string;
        matchType?: string;
        type?: string;
      }
      interface GoalParentLink {
        href?: string;
        type?: string;
      }
      interface GoalUrlDestinationDetails {
        caseSensitive?: boolean;
        firstStepRequired?: boolean;
        matchType?: string;
        steps?: GoalUrlDestinationDetailsSteps[];
        url?: string;
      }
      interface GoalUrlDestinationDetailsSteps {
        name?: string;
        number?: number;
        url?: string;
      }
      interface GoalVisitNumPagesDetails {
        comparisonType?: string;
        comparisonValue?: string;
      }
      interface GoalVisitTimeOnSiteDetails {
        comparisonType?: string;
        comparisonValue?: string;
      }
      interface Goals {
        items?: Goal[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      interface HashClientIdRequest {
        clientId?: string;
        kind?: string;
        webPropertyId?: string;
      }
      interface HashClientIdResponse {
        clientId?: string;
        hashedClientId?: string;
        kind?: string;
        webPropertyId?: string;
      }
      interface IncludeConditions {
        daysToLookBack?: number;
        isSmartList?: boolean;
        kind?: string;
        membershipDurationDays?: number;
        segment?: string;
      }
      interface LinkedForeignAccount {
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
      interface McfData {
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
      interface McfDataColumnHeaders {
        columnType?: string;
        dataType?: string;
        name?: string;
      }
      interface McfDataProfileInfo {
        accountId?: string;
        internalWebPropertyId?: string;
        profileId?: string;
        profileName?: string;
        tableId?: string;
        webPropertyId?: string;
      }
      interface McfDataQuery {
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
      interface McfDataRows {
        conversionPathValue?: McfDataRowsConversionPathValue[];
        primitiveValue?: string;
      }
      interface McfDataRowsConversionPathValue {
        interactionType?: string;
        nodeValue?: string;
      }
      interface Profile {
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
      interface ProfileChildLink {
        href?: string;
        type?: string;
      }
      interface ProfileFilterLink {
        filterRef?: Analytics.Schema.FilterRef;
        id?: string;
        kind?: string;
        profileRef?: ProfileRef;
        rank?: number;
        selfLink?: string;
      }
      interface ProfileFilterLinks {
        items?: ProfileFilterLink[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      interface ProfileParentLink {
        href?: string;
        type?: string;
      }
      interface ProfilePermissions {
        effective?: string[];
      }
      interface ProfileRef {
        accountId?: string;
        href?: string;
        id?: string;
        internalWebPropertyId?: string;
        kind?: string;
        name?: string;
        webPropertyId?: string;
      }
      interface ProfileSummary {
        id?: string;
        kind?: string;
        name?: string;
        starred?: boolean;
        type?: string;
      }
      interface Profiles {
        items?: Profile[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      interface RealtimeData {
        columnHeaders?: RealtimeDataColumnHeaders[];
        id?: string;
        kind?: string;
        profileInfo?: RealtimeDataProfileInfo;
        query?: RealtimeDataQuery;
        rows?: string[][];
        selfLink?: string;
        totalResults?: number;
        totalsForAllResults?: object;
      }
      interface RealtimeDataColumnHeaders {
        columnType?: string;
        dataType?: string;
        name?: string;
      }
      interface RealtimeDataProfileInfo {
        accountId?: string;
        internalWebPropertyId?: string;
        profileId?: string;
        profileName?: string;
        tableId?: string;
        webPropertyId?: string;
      }
      interface RealtimeDataQuery {
        dimensions?: string;
        filters?: string;
        ids?: string;
        max_results?: number;
        metrics?: string[];
        sort?: string[];
      }
      interface RemarketingAudience {
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
      interface RemarketingAudienceAudienceDefinition {
        includeConditions?: IncludeConditions;
      }
      interface RemarketingAudienceStateBasedAudienceDefinition {
        excludeConditions?: RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions;
        includeConditions?: IncludeConditions;
      }
      interface RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions {
        exclusionDuration?: string;
        segment?: string;
      }
      interface RemarketingAudiences {
        items?: RemarketingAudience[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      interface Segment {
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
      interface Segments {
        items?: Segment[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      interface UnsampledReport {
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
      interface UnsampledReportCloudStorageDownloadDetails {
        bucketId?: string;
        objectId?: string;
      }
      interface UnsampledReportDriveDownloadDetails {
        documentId?: string;
      }
      interface UnsampledReports {
        items?: UnsampledReport[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      interface Upload {
        accountId?: string;
        customDataSourceId?: string;
        errors?: string[];
        id?: string;
        kind?: string;
        status?: string;
        uploadTime?: string;
      }
      interface Uploads {
        items?: Upload[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
      }
      interface UserDeletionRequest {
        deletionRequestTime?: string;
        firebaseProjectId?: string;
        id?: UserDeletionRequestId;
        kind?: string;
        webPropertyId?: string;
      }
      interface UserDeletionRequestId {
        type?: string;
        userId?: string;
      }
      interface UserRef {
        email?: string;
        id?: string;
        kind?: string;
      }
      interface WebPropertyRef {
        accountId?: string;
        href?: string;
        id?: string;
        internalWebPropertyId?: string;
        kind?: string;
        name?: string;
      }
      interface WebPropertySummary {
        id?: string;
        internalWebPropertyId?: string;
        kind?: string;
        level?: string;
        name?: string;
        profiles?: ProfileSummary[];
        starred?: boolean;
        websiteUrl?: string;
      }
      interface Webproperties {
        items?: Webproperty[];
        itemsPerPage?: number;
        kind?: string;
        nextLink?: string;
        previousLink?: string;
        startIndex?: number;
        totalResults?: number;
        username?: string;
      }
      interface Webproperty {
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
      interface WebpropertyChildLink {
        href?: string;
        type?: string;
      }
      interface WebpropertyParentLink {
        href?: string;
        type?: string;
      }
      interface WebpropertyPermissions {
        effective?: string[];
      }
    }
  }
  interface Analytics {
    Data?: Analytics.Collection.DataCollection;
    Management?: Analytics.Collection.ManagementCollection;
    Metadata?: Analytics.Collection.MetadataCollection;
    Provisioning?: Analytics.Collection.ProvisioningCollection;
    UserDeletion?: Analytics.Collection.UserDeletionCollection;
    // Create a new instance of Account
    newAccount(): Analytics.Schema.Account;
    // Create a new instance of AccountChildLink
    newAccountChildLink(): Analytics.Schema.AccountChildLink;
    // Create a new instance of AccountPermissions
    newAccountPermissions(): Analytics.Schema.AccountPermissions;
    // Create a new instance of AccountRef
    newAccountRef(): Analytics.Schema.AccountRef;
    // Create a new instance of AccountTicket
    newAccountTicket(): Analytics.Schema.AccountTicket;
    // Create a new instance of AccountTreeRequest
    newAccountTreeRequest(): Analytics.Schema.AccountTreeRequest;
    // Create a new instance of AdWordsAccount
    newAdWordsAccount(): Analytics.Schema.AdWordsAccount;
    // Create a new instance of AnalyticsDataimportDeleteUploadDataRequest
    newAnalyticsDataimportDeleteUploadDataRequest(): Analytics.Schema.AnalyticsDataimportDeleteUploadDataRequest;
    // Create a new instance of CustomDimension
    newCustomDimension(): Analytics.Schema.CustomDimension;
    // Create a new instance of CustomDimensionParentLink
    newCustomDimensionParentLink(): Analytics.Schema.CustomDimensionParentLink;
    // Create a new instance of CustomMetric
    newCustomMetric(): Analytics.Schema.CustomMetric;
    // Create a new instance of CustomMetricParentLink
    newCustomMetricParentLink(): Analytics.Schema.CustomMetricParentLink;
    // Create a new instance of EntityAdWordsLink
    newEntityAdWordsLink(): Analytics.Schema.EntityAdWordsLink;
    // Create a new instance of EntityAdWordsLinkEntity
    newEntityAdWordsLinkEntity(): Analytics.Schema.EntityAdWordsLinkEntity;
    // Create a new instance of EntityUserLink
    newEntityUserLink(): Analytics.Schema.EntityUserLink;
    // Create a new instance of EntityUserLinkEntity
    newEntityUserLinkEntity(): Analytics.Schema.EntityUserLinkEntity;
    // Create a new instance of EntityUserLinkPermissions
    newEntityUserLinkPermissions(): Analytics.Schema.EntityUserLinkPermissions;
    // Create a new instance of Experiment
    newExperiment(): Analytics.Schema.Experiment;
    // Create a new instance of ExperimentParentLink
    newExperimentParentLink(): Analytics.Schema.ExperimentParentLink;
    // Create a new instance of ExperimentVariations
    newExperimentVariations(): Analytics.Schema.ExperimentVariations;
    // Create a new instance of Filter
    newFilter(): Analytics.Schema.Filter;
    // Create a new instance of FilterAdvancedDetails
    newFilterAdvancedDetails(): Analytics.Schema.FilterAdvancedDetails;
    // Create a new instance of FilterExpression
    newFilterExpression(): Analytics.Schema.FilterExpression;
    // Create a new instance of FilterLowercaseDetails
    newFilterLowercaseDetails(): Analytics.Schema.FilterLowercaseDetails;
    // Create a new instance of FilterParentLink
    newFilterParentLink(): Analytics.Schema.FilterParentLink;
    // Create a new instance of FilterRef
    newFilterRef(): Analytics.Schema.FilterRef;
    // Create a new instance of FilterSearchAndReplaceDetails
    newFilterSearchAndReplaceDetails(): Analytics.Schema.FilterSearchAndReplaceDetails;
    // Create a new instance of FilterUppercaseDetails
    newFilterUppercaseDetails(): Analytics.Schema.FilterUppercaseDetails;
    // Create a new instance of Goal
    newGoal(): Analytics.Schema.Goal;
    // Create a new instance of GoalEventDetails
    newGoalEventDetails(): Analytics.Schema.GoalEventDetails;
    // Create a new instance of GoalEventDetailsEventConditions
    newGoalEventDetailsEventConditions(): Analytics.Schema.GoalEventDetailsEventConditions;
    // Create a new instance of GoalParentLink
    newGoalParentLink(): Analytics.Schema.GoalParentLink;
    // Create a new instance of GoalUrlDestinationDetails
    newGoalUrlDestinationDetails(): Analytics.Schema.GoalUrlDestinationDetails;
    // Create a new instance of GoalUrlDestinationDetailsSteps
    newGoalUrlDestinationDetailsSteps(): Analytics.Schema.GoalUrlDestinationDetailsSteps;
    // Create a new instance of GoalVisitNumPagesDetails
    newGoalVisitNumPagesDetails(): Analytics.Schema.GoalVisitNumPagesDetails;
    // Create a new instance of GoalVisitTimeOnSiteDetails
    newGoalVisitTimeOnSiteDetails(): Analytics.Schema.GoalVisitTimeOnSiteDetails;
    // Create a new instance of HashClientIdRequest
    newHashClientIdRequest(): Analytics.Schema.HashClientIdRequest;
    // Create a new instance of IncludeConditions
    newIncludeConditions(): Analytics.Schema.IncludeConditions;
    // Create a new instance of LinkedForeignAccount
    newLinkedForeignAccount(): Analytics.Schema.LinkedForeignAccount;
    // Create a new instance of Profile
    newProfile(): Analytics.Schema.Profile;
    // Create a new instance of ProfileChildLink
    newProfileChildLink(): Analytics.Schema.ProfileChildLink;
    // Create a new instance of ProfileFilterLink
    newProfileFilterLink(): Analytics.Schema.ProfileFilterLink;
    // Create a new instance of ProfileParentLink
    newProfileParentLink(): Analytics.Schema.ProfileParentLink;
    // Create a new instance of ProfilePermissions
    newProfilePermissions(): Analytics.Schema.ProfilePermissions;
    // Create a new instance of ProfileRef
    newProfileRef(): Analytics.Schema.ProfileRef;
    // Create a new instance of RemarketingAudience
    newRemarketingAudience(): Analytics.Schema.RemarketingAudience;
    // Create a new instance of RemarketingAudienceAudienceDefinition
    newRemarketingAudienceAudienceDefinition(): Analytics.Schema.RemarketingAudienceAudienceDefinition;
    // Create a new instance of RemarketingAudienceStateBasedAudienceDefinition
    newRemarketingAudienceStateBasedAudienceDefinition(): Analytics.Schema.RemarketingAudienceStateBasedAudienceDefinition;
    // Create a new instance of RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions
    newRemarketingAudienceStateBasedAudienceDefinitionExcludeConditions(): Analytics.Schema.RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions;
    // Create a new instance of UnsampledReport
    newUnsampledReport(): Analytics.Schema.UnsampledReport;
    // Create a new instance of UnsampledReportCloudStorageDownloadDetails
    newUnsampledReportCloudStorageDownloadDetails(): Analytics.Schema.UnsampledReportCloudStorageDownloadDetails;
    // Create a new instance of UnsampledReportDriveDownloadDetails
    newUnsampledReportDriveDownloadDetails(): Analytics.Schema.UnsampledReportDriveDownloadDetails;
    // Create a new instance of UserDeletionRequest
    newUserDeletionRequest(): Analytics.Schema.UserDeletionRequest;
    // Create a new instance of UserDeletionRequestId
    newUserDeletionRequestId(): Analytics.Schema.UserDeletionRequestId;
    // Create a new instance of UserRef
    newUserRef(): Analytics.Schema.UserRef;
    // Create a new instance of WebPropertyRef
    newWebPropertyRef(): Analytics.Schema.WebPropertyRef;
    // Create a new instance of Webproperty
    newWebproperty(): Analytics.Schema.Webproperty;
    // Create a new instance of WebpropertyChildLink
    newWebpropertyChildLink(): Analytics.Schema.WebpropertyChildLink;
    // Create a new instance of WebpropertyParentLink
    newWebpropertyParentLink(): Analytics.Schema.WebpropertyParentLink;
    // Create a new instance of WebpropertyPermissions
    newWebpropertyPermissions(): Analytics.Schema.WebpropertyPermissions;
  }
}

declare var Analytics: GoogleAppsScript.Analytics;
