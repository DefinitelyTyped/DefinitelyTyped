// Type definitions for Google Apps Script 2021-02-11
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/mtgto/dts-google-apps-script-advanced
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
    namespace Analytics {
        namespace Collection {
            namespace Data {
                interface GaCollection {
                    // Returns Analytics data for a view (profile).
                    get(ids: string, startDate: string, endDate: string, metrics: string): Schema.GaData;
                    // Returns Analytics data for a view (profile).
                    get(ids: string, startDate: string, endDate: string, metrics: string, optionalArgs: object): Schema.GaData;
                }
                interface McfCollection {
                    // Returns Analytics Multi-Channel Funnels data for a view (profile).
                    get(ids: string, startDate: string, endDate: string, metrics: string): Schema.McfData;
                    // Returns Analytics Multi-Channel Funnels data for a view (profile).
                    get(ids: string, startDate: string, endDate: string, metrics: string, optionalArgs: object): Schema.McfData;
                }
                interface RealtimeCollection {
                    // Returns real time data for a view (profile).
                    get(ids: string, metrics: string): Schema.RealtimeData;
                    // Returns real time data for a view (profile).
                    get(ids: string, metrics: string, optionalArgs: object): Schema.RealtimeData;
                }
            }
            namespace Management {
                interface AccountSummariesCollection {
                    // Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.
                    list(): Schema.AccountSummaries;
                    // Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.
                    list(optionalArgs: object): Schema.AccountSummaries;
                }
                interface AccountUserLinksCollection {
                    // Adds a new user to the given account.
                    insert(resource: Schema.EntityUserLink, accountId: string): Schema.EntityUserLink;
                    // Lists account-user links for a given account.
                    list(accountId: string): Schema.EntityUserLinks;
                    // Lists account-user links for a given account.
                    list(accountId: string, optionalArgs: object): Schema.EntityUserLinks;
                    // Removes a user from the given account.
                    remove(accountId: string, linkId: string): void;
                    // Updates permissions for an existing user on the given account.
                    update(resource: Schema.EntityUserLink, accountId: string, linkId: string): Schema.EntityUserLink;
                }
                interface AccountsCollection {
                    // Lists all accounts to which the user has access.
                    list(): Schema.Accounts;
                    // Lists all accounts to which the user has access.
                    list(optionalArgs: object): Schema.Accounts;
                }
                interface ClientIdCollection {
                    // Hashes the given Client ID.
                    hashClientId(resource: Schema.HashClientIdRequest): Schema.HashClientIdResponse;
                }
                interface CustomDataSourcesCollection {
                    // List custom data sources to which the user has access.
                    list(accountId: string, webPropertyId: string): Schema.CustomDataSources;
                    // List custom data sources to which the user has access.
                    list(accountId: string, webPropertyId: string, optionalArgs: object): Schema.CustomDataSources;
                }
                interface CustomDimensionsCollection {
                    // Get a custom dimension to which the user has access.
                    get(accountId: string, webPropertyId: string, customDimensionId: string): Schema.CustomDimension;
                    // Create a new custom dimension.
                    insert(resource: Schema.CustomDimension, accountId: string, webPropertyId: string): Schema.CustomDimension;
                    // Lists custom dimensions to which the user has access.
                    list(accountId: string, webPropertyId: string): Schema.CustomDimensions;
                    // Lists custom dimensions to which the user has access.
                    list(accountId: string, webPropertyId: string, optionalArgs: object): Schema.CustomDimensions;
                    // Updates an existing custom dimension. This method supports patch semantics.
                    patch(resource: Schema.CustomDimension, accountId: string, webPropertyId: string, customDimensionId: string): Schema.CustomDimension;
                    // Updates an existing custom dimension. This method supports patch semantics.
                    patch(resource: Schema.CustomDimension, accountId: string, webPropertyId: string, customDimensionId: string, optionalArgs: object): Schema.CustomDimension;
                    // Updates an existing custom dimension.
                    update(resource: Schema.CustomDimension, accountId: string, webPropertyId: string, customDimensionId: string): Schema.CustomDimension;
                    // Updates an existing custom dimension.
                    update(resource: Schema.CustomDimension, accountId: string, webPropertyId: string, customDimensionId: string, optionalArgs: object): Schema.CustomDimension;
                }
                interface CustomMetricsCollection {
                    // Get a custom metric to which the user has access.
                    get(accountId: string, webPropertyId: string, customMetricId: string): Schema.CustomMetric;
                    // Create a new custom metric.
                    insert(resource: Schema.CustomMetric, accountId: string, webPropertyId: string): Schema.CustomMetric;
                    // Lists custom metrics to which the user has access.
                    list(accountId: string, webPropertyId: string): Schema.CustomMetrics;
                    // Lists custom metrics to which the user has access.
                    list(accountId: string, webPropertyId: string, optionalArgs: object): Schema.CustomMetrics;
                    // Updates an existing custom metric. This method supports patch semantics.
                    patch(resource: Schema.CustomMetric, accountId: string, webPropertyId: string, customMetricId: string): Schema.CustomMetric;
                    // Updates an existing custom metric. This method supports patch semantics.
                    patch(resource: Schema.CustomMetric, accountId: string, webPropertyId: string, customMetricId: string, optionalArgs: object): Schema.CustomMetric;
                    // Updates an existing custom metric.
                    update(resource: Schema.CustomMetric, accountId: string, webPropertyId: string, customMetricId: string): Schema.CustomMetric;
                    // Updates an existing custom metric.
                    update(resource: Schema.CustomMetric, accountId: string, webPropertyId: string, customMetricId: string, optionalArgs: object): Schema.CustomMetric;
                }
                interface ExperimentsCollection {
                    // Returns an experiment to which the user has access.
                    get(accountId: string, webPropertyId: string, profileId: string, experimentId: string): Schema.Experiment;
                    // Create a new experiment.
                    insert(resource: Schema.Experiment, accountId: string, webPropertyId: string, profileId: string): Schema.Experiment;
                    // Lists experiments to which the user has access.
                    list(accountId: string, webPropertyId: string, profileId: string): Schema.Experiments;
                    // Lists experiments to which the user has access.
                    list(accountId: string, webPropertyId: string, profileId: string, optionalArgs: object): Schema.Experiments;
                    // Update an existing experiment. This method supports patch semantics.
                    patch(resource: Schema.Experiment, accountId: string, webPropertyId: string, profileId: string, experimentId: string): Schema.Experiment;
                    // Delete an experiment.
                    remove(accountId: string, webPropertyId: string, profileId: string, experimentId: string): void;
                    // Update an existing experiment.
                    update(resource: Schema.Experiment, accountId: string, webPropertyId: string, profileId: string, experimentId: string): Schema.Experiment;
                }
                interface FiltersCollection {
                    // Returns filters to which the user has access.
                    get(accountId: string, filterId: string): Schema.Filter;
                    // Create a new filter.
                    insert(resource: Schema.Filter, accountId: string): Schema.Filter;
                    // Lists all filters for an account
                    list(accountId: string): Schema.Filters;
                    // Lists all filters for an account
                    list(accountId: string, optionalArgs: object): Schema.Filters;
                    // Updates an existing filter. This method supports patch semantics.
                    patch(resource: Schema.Filter, accountId: string, filterId: string): Schema.Filter;
                    // Delete a filter.
                    remove(accountId: string, filterId: string): Schema.Filter;
                    // Updates an existing filter.
                    update(resource: Schema.Filter, accountId: string, filterId: string): Schema.Filter;
                }
                interface GoalsCollection {
                    // Gets a goal to which the user has access.
                    get(accountId: string, webPropertyId: string, profileId: string, goalId: string): Schema.Goal;
                    // Create a new goal.
                    insert(resource: Schema.Goal, accountId: string, webPropertyId: string, profileId: string): Schema.Goal;
                    // Lists goals to which the user has access.
                    list(accountId: string, webPropertyId: string, profileId: string): Schema.Goals;
                    // Lists goals to which the user has access.
                    list(accountId: string, webPropertyId: string, profileId: string, optionalArgs: object): Schema.Goals;
                    // Updates an existing goal. This method supports patch semantics.
                    patch(resource: Schema.Goal, accountId: string, webPropertyId: string, profileId: string, goalId: string): Schema.Goal;
                    // Updates an existing goal.
                    update(resource: Schema.Goal, accountId: string, webPropertyId: string, profileId: string, goalId: string): Schema.Goal;
                }
                interface ProfileFilterLinksCollection {
                    // Returns a single profile filter link.
                    get(accountId: string, webPropertyId: string, profileId: string, linkId: string): Schema.ProfileFilterLink;
                    // Create a new profile filter link.
                    insert(resource: Schema.ProfileFilterLink, accountId: string, webPropertyId: string, profileId: string): Schema.ProfileFilterLink;
                    // Lists all profile filter links for a profile.
                    list(accountId: string, webPropertyId: string, profileId: string): Schema.ProfileFilterLinks;
                    // Lists all profile filter links for a profile.
                    list(accountId: string, webPropertyId: string, profileId: string, optionalArgs: object): Schema.ProfileFilterLinks;
                    // Update an existing profile filter link. This method supports patch semantics.
                    patch(resource: Schema.ProfileFilterLink, accountId: string, webPropertyId: string, profileId: string, linkId: string): Schema.ProfileFilterLink;
                    // Delete a profile filter link.
                    remove(accountId: string, webPropertyId: string, profileId: string, linkId: string): void;
                    // Update an existing profile filter link.
                    update(resource: Schema.ProfileFilterLink, accountId: string, webPropertyId: string, profileId: string, linkId: string): Schema.ProfileFilterLink;
                }
                interface ProfileUserLinksCollection {
                    // Adds a new user to the given view (profile).
                    insert(resource: Schema.EntityUserLink, accountId: string, webPropertyId: string, profileId: string): Schema.EntityUserLink;
                    // Lists profile-user links for a given view (profile).
                    list(accountId: string, webPropertyId: string, profileId: string): Schema.EntityUserLinks;
                    // Lists profile-user links for a given view (profile).
                    list(accountId: string, webPropertyId: string, profileId: string, optionalArgs: object): Schema.EntityUserLinks;
                    // Removes a user from the given view (profile).
                    remove(accountId: string, webPropertyId: string, profileId: string, linkId: string): void;
                    // Updates permissions for an existing user on the given view (profile).
                    update(resource: Schema.EntityUserLink, accountId: string, webPropertyId: string, profileId: string, linkId: string): Schema.EntityUserLink;
                }
                interface ProfilesCollection {
                    // Gets a view (profile) to which the user has access.
                    get(accountId: string, webPropertyId: string, profileId: string): Schema.Profile;
                    // Create a new view (profile).
                    insert(resource: Schema.Profile, accountId: string, webPropertyId: string): Schema.Profile;
                    // Lists views (profiles) to which the user has access.
                    list(accountId: string, webPropertyId: string): Schema.Profiles;
                    // Lists views (profiles) to which the user has access.
                    list(accountId: string, webPropertyId: string, optionalArgs: object): Schema.Profiles;
                    // Updates an existing view (profile). This method supports patch semantics.
                    patch(resource: Schema.Profile, accountId: string, webPropertyId: string, profileId: string): Schema.Profile;
                    // Deletes a view (profile).
                    remove(accountId: string, webPropertyId: string, profileId: string): void;
                    // Updates an existing view (profile).
                    update(resource: Schema.Profile, accountId: string, webPropertyId: string, profileId: string): Schema.Profile;
                }
                interface RemarketingAudienceCollection {
                    // Gets a remarketing audience to which the user has access.
                    get(accountId: string, webPropertyId: string, remarketingAudienceId: string): Schema.RemarketingAudience;
                    // Creates a new remarketing audience.
                    insert(resource: Schema.RemarketingAudience, accountId: string, webPropertyId: string): Schema.RemarketingAudience;
                    // Lists remarketing audiences to which the user has access.
                    list(accountId: string, webPropertyId: string): Schema.RemarketingAudiences;
                    // Lists remarketing audiences to which the user has access.
                    list(accountId: string, webPropertyId: string, optionalArgs: object): Schema.RemarketingAudiences;
                    // Updates an existing remarketing audience. This method supports patch semantics.
                    patch(resource: Schema.RemarketingAudience, accountId: string, webPropertyId: string, remarketingAudienceId: string): Schema.RemarketingAudience;
                    // Delete a remarketing audience.
                    remove(accountId: string, webPropertyId: string, remarketingAudienceId: string): void;
                    // Updates an existing remarketing audience.
                    update(resource: Schema.RemarketingAudience, accountId: string, webPropertyId: string, remarketingAudienceId: string): Schema.RemarketingAudience;
                }
                interface SegmentsCollection {
                    // Lists segments to which the user has access.
                    list(): Schema.Segments;
                    // Lists segments to which the user has access.
                    list(optionalArgs: object): Schema.Segments;
                }
                interface UnsampledReportsCollection {
                    // Returns a single unsampled report.
                    get(accountId: string, webPropertyId: string, profileId: string, unsampledReportId: string): Schema.UnsampledReport;
                    // Create a new unsampled report.
                    insert(resource: Schema.UnsampledReport, accountId: string, webPropertyId: string, profileId: string): Schema.UnsampledReport;
                    // Lists unsampled reports to which the user has access.
                    list(accountId: string, webPropertyId: string, profileId: string): Schema.UnsampledReports;
                    // Lists unsampled reports to which the user has access.
                    list(accountId: string, webPropertyId: string, profileId: string, optionalArgs: object): Schema.UnsampledReports;
                    // Deletes an unsampled report.
                    remove(accountId: string, webPropertyId: string, profileId: string, unsampledReportId: string): void;
                }
                interface UploadsCollection {
                    // Delete data associated with a previous upload.
                    deleteUploadData(resource: Schema.AnalyticsDataimportDeleteUploadDataRequest, accountId: string, webPropertyId: string, customDataSourceId: string): void;
                    // List uploads to which the user has access.
                    get(accountId: string, webPropertyId: string, customDataSourceId: string, uploadId: string): Schema.Upload;
                    // List uploads to which the user has access.
                    list(accountId: string, webPropertyId: string, customDataSourceId: string): Schema.Uploads;
                    // List uploads to which the user has access.
                    list(accountId: string, webPropertyId: string, customDataSourceId: string, optionalArgs: object): Schema.Uploads;
                    // Upload data for a custom data source.
                    uploadData(accountId: string, webPropertyId: string, customDataSourceId: string): Schema.Upload;
                    // Upload data for a custom data source.
                    uploadData(accountId: string, webPropertyId: string, customDataSourceId: string, mediaData: Base.Blob): Schema.Upload;
                }
                interface WebPropertyAdWordsLinksCollection {
                    // Returns a web property-Google Ads link to which the user has access.
                    get(accountId: string, webPropertyId: string, webPropertyAdWordsLinkId: string): Schema.EntityAdWordsLink;
                    // Creates a webProperty-Google Ads link.
                    insert(resource: Schema.EntityAdWordsLink, accountId: string, webPropertyId: string): Schema.EntityAdWordsLink;
                    // Lists webProperty-Google Ads links for a given web property.
                    list(accountId: string, webPropertyId: string): Schema.EntityAdWordsLinks;
                    // Lists webProperty-Google Ads links for a given web property.
                    list(accountId: string, webPropertyId: string, optionalArgs: object): Schema.EntityAdWordsLinks;
                    // Updates an existing webProperty-Google Ads link. This method supports patch semantics.
                    patch(resource: Schema.EntityAdWordsLink, accountId: string, webPropertyId: string, webPropertyAdWordsLinkId: string): Schema.EntityAdWordsLink;
                    // Deletes a web property-Google Ads link.
                    remove(accountId: string, webPropertyId: string, webPropertyAdWordsLinkId: string): void;
                    // Updates an existing webProperty-Google Ads link.
                    update(resource: Schema.EntityAdWordsLink, accountId: string, webPropertyId: string, webPropertyAdWordsLinkId: string): Schema.EntityAdWordsLink;
                }
                interface WebpropertiesCollection {
                    // Gets a web property to which the user has access.
                    get(accountId: string, webPropertyId: string): Schema.Webproperty;
                    // Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics
                    // interface only if they have at least one profile.
                    insert(resource: Schema.Webproperty, accountId: string): Schema.Webproperty;
                    // Lists web properties to which the user has access.
                    list(accountId: string): Schema.Webproperties;
                    // Lists web properties to which the user has access.
                    list(accountId: string, optionalArgs: object): Schema.Webproperties;
                    // Updates an existing web property. This method supports patch semantics.
                    patch(resource: Schema.Webproperty, accountId: string, webPropertyId: string): Schema.Webproperty;
                    // Updates an existing web property.
                    update(resource: Schema.Webproperty, accountId: string, webPropertyId: string): Schema.Webproperty;
                }
                interface WebpropertyUserLinksCollection {
                    // Adds a new user to the given web property.
                    insert(resource: Schema.EntityUserLink, accountId: string, webPropertyId: string): Schema.EntityUserLink;
                    // Lists webProperty-user links for a given web property.
                    list(accountId: string, webPropertyId: string): Schema.EntityUserLinks;
                    // Lists webProperty-user links for a given web property.
                    list(accountId: string, webPropertyId: string, optionalArgs: object): Schema.EntityUserLinks;
                    // Removes a user from the given web property.
                    remove(accountId: string, webPropertyId: string, linkId: string): void;
                    // Updates permissions for an existing user on the given web property.
                    update(resource: Schema.EntityUserLink, accountId: string, webPropertyId: string, linkId: string): Schema.EntityUserLink;
                }
            }
            namespace Metadata {
                interface ColumnsCollection {
                    // Lists all columns for a report type
                    list(reportType: string): Schema.Columns;
                }
            }
            namespace UserDeletion {
                interface UserDeletionRequestCollection {
                    // Insert or update a user deletion requests.
                    upsert(resource: Schema.UserDeletionRequest): Schema.UserDeletionRequest;
                }
            }
            interface DataCollection {
                Ga?: Collection.Data.GaCollection;
                Mcf?: Collection.Data.McfCollection;
                Realtime?: Collection.Data.RealtimeCollection;
            }
            interface ManagementCollection {
                AccountSummaries?: Collection.Management.AccountSummariesCollection;
                AccountUserLinks?: Collection.Management.AccountUserLinksCollection;
                Accounts?: Collection.Management.AccountsCollection;
                ClientId?: Collection.Management.ClientIdCollection;
                CustomDataSources?: Collection.Management.CustomDataSourcesCollection;
                CustomDimensions?: Collection.Management.CustomDimensionsCollection;
                CustomMetrics?: Collection.Management.CustomMetricsCollection;
                Experiments?: Collection.Management.ExperimentsCollection;
                Filters?: Collection.Management.FiltersCollection;
                Goals?: Collection.Management.GoalsCollection;
                ProfileFilterLinks?: Collection.Management.ProfileFilterLinksCollection;
                ProfileUserLinks?: Collection.Management.ProfileUserLinksCollection;
                Profiles?: Collection.Management.ProfilesCollection;
                RemarketingAudience?: Collection.Management.RemarketingAudienceCollection;
                Segments?: Collection.Management.SegmentsCollection;
                UnsampledReports?: Collection.Management.UnsampledReportsCollection;
                Uploads?: Collection.Management.UploadsCollection;
                WebPropertyAdWordsLinks?: Collection.Management.WebPropertyAdWordsLinksCollection;
                Webproperties?: Collection.Management.WebpropertiesCollection;
                WebpropertyUserLinks?: Collection.Management.WebpropertyUserLinksCollection;
            }
            interface MetadataCollection {
                Columns?: Collection.Metadata.ColumnsCollection;
            }
            interface ProvisioningCollection {
                // Creates an account ticket.
                createAccountTicket(resource: Schema.AccountTicket): Schema.AccountTicket;
                // Provision account.
                createAccountTree(resource: Schema.AccountTreeRequest): Schema.AccountTreeResponse;
            }
            interface UserDeletionCollection {
                UserDeletionRequest?: Collection.UserDeletion.UserDeletionRequestCollection;
            }
        }
        namespace Schema {
            // JSON template for Analytics account entry.
            interface Account {
                // Child link for an account entry. Points to the list of web properties for this account.
                childLink?: Schema.AccountChildLink;
                // Time the account was created.
                created?: string;
                // Account ID.
                id?: string;
                // Resource type for Analytics account.
                kind?: string;
                // Account name.
                name?: string;
                // Permissions the user has for this account.
                permissions?: Schema.AccountPermissions;
                // Link for this account.
                selfLink?: string;
                // Indicates whether this account is starred or not.
                starred?: boolean;
                // Time the account was last modified.
                updated?: string;
            }
            // Child link for an account entry. Points to the list of web properties for this account.
            interface AccountChildLink {
                // Link to the list of web properties for this account.
                href?: string;
                // Type of the child link. Its value is "analytics#webproperties".
                type?: string;
            }
            // Permissions the user has for this account.
            interface AccountPermissions {
                // All the permissions that the user has for this account. These include any implied permissions (e.g., EDIT implies VIEW).
                effective?: string[];
            }
            // JSON template for a linked account.
            interface AccountRef {
                // Link for this account.
                href?: string;
                // Account ID.
                id?: string;
                // Analytics account reference.
                kind?: string;
                // Account name.
                name?: string;
            }
            // An AccountSummary collection lists a summary of accounts, properties and views (profiles) to which the user has access.
            // Each resource in the collection corresponds to a single AccountSummary.
            interface AccountSummaries {
                // A list of AccountSummaries.
                items?: Schema.AccountSummary[];
                // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its
                // value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
                itemsPerPage?: Integer;
                // Collection type.
                kind?: string;
                // Link to next page for this AccountSummary collection.
                nextLink?: string;
                // Link to previous page for this AccountSummary collection.
                previousLink?: string;
                // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
                startIndex?: Integer;
                // The total number of results for the query, regardless of the number of results in the response.
                totalResults?: Integer;
                // Email ID of the authenticated user
                username?: string;
            }
            // JSON template for an Analytics AccountSummary. An AccountSummary is a lightweight tree comprised of properties/profiles.
            interface AccountSummary {
                // Account ID.
                id?: string;
                // Resource type for Analytics AccountSummary.
                kind?: string;
                // Account name.
                name?: string;
                // Indicates whether this account is starred or not.
                starred?: boolean;
                // List of web properties under this account.
                webProperties?: Schema.WebPropertySummary[];
            }
            // JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information
            // for the account, property and profile.
            interface AccountTicket {
                // Account for this ticket.
                account?: Schema.Account;
                // Account ticket ID used to access the account ticket.
                id?: string;
                // Resource type for account ticket.
                kind?: string;
                // View (Profile) for the account.
                profile?: Schema.Profile;
                // Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in APIs console as a
                // callback URL.
                redirectUri?: string;
                // Web property for the account.
                webproperty?: Schema.Webproperty;
            }
            // JSON template for an Analytics account tree requests. The account tree request is used in the provisioning api to create
            // an account, property, and view (profile). It contains the basic information required to make these fields.
            interface AccountTreeRequest {
                accountName?: string;
                // Resource type for account ticket.
                kind?: string;
                profileName?: string;
                timezone?: string;
                webpropertyName?: string;
                websiteUrl?: string;
            }
            // JSON template for an Analytics account tree response. The account tree response is used in the provisioning api to
            // return the result of creating an account, property, and view (profile).
            interface AccountTreeResponse {
                // The account created.
                account?: Schema.Account;
                // Resource type for account ticket.
                kind?: string;
                // View (Profile) for the account.
                profile?: Schema.Profile;
                // Web property for the account.
                webproperty?: Schema.Webproperty;
            }
            // An account collection provides a list of Analytics accounts to which a user has access. The account collection is the
            // entry point to all management information. Each resource in the collection corresponds to a single Analytics account.
            interface Accounts {
                // A list of accounts.
                items?: Schema.Account[];
                // The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value
                // ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
                itemsPerPage?: Integer;
                // Collection type.
                kind?: string;
                // Next link for this account collection.
                nextLink?: string;
                // Previous link for this account collection.
                previousLink?: string;
                // The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.
                startIndex?: Integer;
                // The total number of results for the query, regardless of the number of results in the response.
                totalResults?: Integer;
                // Email ID of the authenticated user
                username?: string;
            }
            // JSON template for an Google Ads account.
            interface AdWordsAccount {
                // True if auto-tagging is enabled on the Google Ads account. Read-only after the insert operation.
                autoTaggingEnabled?: boolean;
                // Customer ID. This field is required when creating a Google Ads link.
                customerId?: string;
                // Resource type for Google Ads account.
                kind?: string;
            }
            // Request template for the delete upload data request.
            interface AnalyticsDataimportDeleteUploadDataRequest {
                // A list of upload UIDs.
                customDataImportUids?: string[];
            }
            // JSON template for a metadata column.
            interface Column {
                // Map of attribute name and value for this column.
                attributes?: object;
                // Column id.
                id?: string;
                // Resource type for Analytics column.
                kind?: string;
            }
            // Lists columns (dimensions and metrics) for a particular report type.
            interface Columns {
                // List of attributes names returned by columns.
                attributeNames?: string[];
                // Etag of collection. This etag can be compared with the last response etag to check if response has changed.
                etag?: string;
                // List of columns for a report type.
                items?: Schema.Column[];
                // Collection type.
                kind?: string;
                // Total number of columns returned in the response.
                totalResults?: Integer;
            }
            // JSON template for an Analytics custom data source.
            interface CustomDataSource {
                // Account ID to which this custom data source belongs.
                accountId?: string;
                childLink?: Schema.CustomDataSourceChildLink;
                // Time this custom data source was created.
                created?: string;
                // Description of custom data source.
                description?: string;
                // Custom data source ID.
                id?: string;
                importBehavior?: string;
                // Resource type for Analytics custom data source.
                kind?: string;
                // Name of this custom data source.
                name?: string;
                // Parent link for this custom data source. Points to the web property to which this custom data source belongs.
                parentLink?: Schema.CustomDataSourceParentLink;
                // IDs of views (profiles) linked to the custom data source.
                profilesLinked?: string[];
                // Collection of schema headers of the custom data source.
                schema?: string[];
                // Link for this Analytics custom data source.
                selfLink?: string;
                // Type of the custom data source.
                type?: string;
                // Time this custom data source was last modified.
                updated?: string;
                // Upload type of the custom data source.
                uploadType?: string;
                // Web property ID of the form UA-XXXXX-YY to which this custom data source belongs.
                webPropertyId?: string;
            }
            interface CustomDataSourceChildLink {
                // Link to the list of daily uploads for this custom data source. Link to the list of uploads for this custom data source.
                href?: string;
                // Value is "analytics#dailyUploads". Value is "analytics#uploads".
                type?: string;
            }
            // Parent link for this custom data source. Points to the web property to which this custom data source belongs.
            interface CustomDataSourceParentLink {
                // Link to the web property to which this custom data source belongs.
                href?: string;
                // Value is "analytics#webproperty".
                type?: string;
            }
            // Lists Analytics custom data sources to which the user has access. Each resource in the collection corresponds to a
            // single Analytics custom data source.
            interface CustomDataSources {
                // Collection of custom data sources.
                items?: Schema.CustomDataSource[];
                // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its
                // value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
                itemsPerPage?: Integer;
                // Collection type.
                kind?: string;
                // Link to next page for this custom data source collection.
                nextLink?: string;
                // Link to previous page for this custom data source collection.
                previousLink?: string;
                // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
                startIndex?: Integer;
                // The total number of results for the query, regardless of the number of results in the response.
                totalResults?: Integer;
                // Email ID of the authenticated user
                username?: string;
            }
            // JSON template for Analytics Custom Dimension.
            interface CustomDimension {
                // Account ID.
                accountId?: string;
                // Boolean indicating whether the custom dimension is active.
                active?: boolean;
                // Time the custom dimension was created.
                created?: string;
                // Custom dimension ID.
                id?: string;
                // Index of the custom dimension.
                index?: Integer;
                // Kind value for a custom dimension. Set to "analytics#customDimension". It is a read-only field.
                kind?: string;
                // Name of the custom dimension.
                name?: string;
                // Parent link for the custom dimension. Points to the property to which the custom dimension belongs.
                parentLink?: Schema.CustomDimensionParentLink;
                // Scope of the custom dimension: HIT, SESSION, USER or PRODUCT.
                scope?: string;
                // Link for the custom dimension
                selfLink?: string;
                // Time the custom dimension was last modified.
                updated?: string;
                // Property ID.
                webPropertyId?: string;
            }
            // Parent link for the custom dimension. Points to the property to which the custom dimension belongs.
            interface CustomDimensionParentLink {
                // Link to the property to which the custom dimension belongs.
                href?: string;
                // Type of the parent link. Set to "analytics#webproperty".
                type?: string;
            }
            // A custom dimension collection lists Analytics custom dimensions to which the user has access. Each resource in the
            // collection corresponds to a single Analytics custom dimension.
            interface CustomDimensions {
                // Collection of custom dimensions.
                items?: Schema.CustomDimension[];
                // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its
                // value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
                itemsPerPage?: Integer;
                // Collection type.
                kind?: string;
                // Link to next page for this custom dimension collection.
                nextLink?: string;
                // Link to previous page for this custom dimension collection.
                previousLink?: string;
                // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
                startIndex?: Integer;
                // The total number of results for the query, regardless of the number of results in the response.
                totalResults?: Integer;
                // Email ID of the authenticated user
                username?: string;
            }
            // JSON template for Analytics Custom Metric.
            interface CustomMetric {
                // Account ID.
                accountId?: string;
                // Boolean indicating whether the custom metric is active.
                active?: boolean;
                // Time the custom metric was created.
                created?: string;
                // Custom metric ID.
                id?: string;
                // Index of the custom metric.
                index?: Integer;
                // Kind value for a custom metric. Set to "analytics#customMetric". It is a read-only field.
                kind?: string;
                // Max value of custom metric.
                max_value?: string;
                // Min value of custom metric.
                min_value?: string;
                // Name of the custom metric.
                name?: string;
                // Parent link for the custom metric. Points to the property to which the custom metric belongs.
                parentLink?: Schema.CustomMetricParentLink;
                // Scope of the custom metric: HIT or PRODUCT.
                scope?: string;
                // Link for the custom metric
                selfLink?: string;
                // Data type of custom metric.
                type?: string;
                // Time the custom metric was last modified.
                updated?: string;
                // Property ID.
                webPropertyId?: string;
            }
            // Parent link for the custom metric. Points to the property to which the custom metric belongs.
            interface CustomMetricParentLink {
                // Link to the property to which the custom metric belongs.
                href?: string;
                // Type of the parent link. Set to "analytics#webproperty".
                type?: string;
            }
            // A custom metric collection lists Analytics custom metrics to which the user has access. Each resource in the collection
            // corresponds to a single Analytics custom metric.
            interface CustomMetrics {
                // Collection of custom metrics.
                items?: Schema.CustomMetric[];
                // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its
                // value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
                itemsPerPage?: Integer;
                // Collection type.
                kind?: string;
                // Link to next page for this custom metric collection.
                nextLink?: string;
                // Link to previous page for this custom metric collection.
                previousLink?: string;
                // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
                startIndex?: Integer;
                // The total number of results for the query, regardless of the number of results in the response.
                totalResults?: Integer;
                // Email ID of the authenticated user
                username?: string;
            }
            // JSON template for Analytics Entity Google Ads Link.
            interface EntityAdWordsLink {
                // A list of Google Ads client accounts. These cannot be MCC accounts. This field is required when creating a Google Ads
                // link. It cannot be empty.
                adWordsAccounts?: Schema.AdWordsAccount[];
                // Web property being linked.
                entity?: Schema.EntityAdWordsLinkEntity;
                // Entity Google Ads link ID
                id?: string;
                // Resource type for entity Google Ads link.
                kind?: string;
                // Name of the link. This field is required when creating a Google Ads link.
                name?: string;
                // IDs of linked Views (Profiles) represented as strings.
                profileIds?: string[];
                // URL link for this Google Analytics - Google Ads link.
                selfLink?: string;
            }
            // Web property being linked.
            interface EntityAdWordsLinkEntity {
                webPropertyRef?: Schema.WebPropertyRef;
            }
            // An entity Google Ads link collection provides a list of GA-Google Ads links Each resource in this collection corresponds
            // to a single link.
            interface EntityAdWordsLinks {
                // A list of entity Google Ads links.
                items?: Schema.EntityAdWordsLink[];
                // The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value
                // ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
                itemsPerPage?: Integer;
                // Collection type.
                kind?: string;
                // Next link for this Google Ads link collection.
                nextLink?: string;
                // Previous link for this Google Ads link collection.
                previousLink?: string;
                // The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.
                startIndex?: Integer;
                // The total number of results for the query, regardless of the number of results in the response.
                totalResults?: Integer;
            }
            // JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
            interface EntityUserLink {
                // Entity for this link. It can be an account, a web property, or a view (profile).
                entity?: Schema.EntityUserLinkEntity;
                // Entity user link ID
                id?: string;
                // Resource type for entity user link.
                kind?: string;
                // Permissions the user has for this entity.
                permissions?: Schema.EntityUserLinkPermissions;
                // Self link for this resource.
                selfLink?: string;
                // User reference.
                userRef?: Schema.UserRef;
            }
            // Entity for this link. It can be an account, a web property, or a view (profile).
            interface EntityUserLinkEntity {
                // Account for this link.
                accountRef?: Schema.AccountRef;
                // View (Profile) for this link.
                profileRef?: Schema.ProfileRef;
                // Web property for this link.
                webPropertyRef?: Schema.WebPropertyRef;
            }
            // Permissions the user has for this entity.
            interface EntityUserLinkPermissions {
                // Effective permissions represent all the permissions that a user has for this entity. These include any implied
                // permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent entity. Effective permissions are
                // read-only.
                effective?: string[];
                // Permissions that a user has been assigned at this very level. Does not include any implied or inherited permissions.
                // Local permissions are modifiable.
                local?: string[];
            }
            // An entity user link collection provides a list of Analytics ACL links Each resource in this collection corresponds to a
            // single link.
            interface EntityUserLinks {
                // A list of entity user links.
                items?: Schema.EntityUserLink[];
                // The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value
                // ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
                itemsPerPage?: Integer;
                // Collection type.
                kind?: string;
                // Next link for this account collection.
                nextLink?: string;
                // Previous link for this account collection.
                previousLink?: string;
                // The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.
                startIndex?: Integer;
                // The total number of results for the query, regardless of the number of results in the response.
                totalResults?: Integer;
            }
            // JSON template for Analytics experiment resource.
            interface Experiment {
                // Account ID to which this experiment belongs. This field is read-only.
                accountId?: string;
                // Time the experiment was created. This field is read-only.
                created?: string;
                // Notes about this experiment.
                description?: string;
                // If true, the end user will be able to edit the experiment via the Google Analytics user interface.
                editableInGaUi?: boolean;
                // The ending time of the experiment (the time the status changed from RUNNING to ENDED). This field is present only if the
                // experiment has ended. This field is read-only.
                endTime?: string;
                // Boolean specifying whether to distribute traffic evenly across all variations. If the value is False, content
                // experiments follows the default behavior of adjusting traffic dynamically based on variation performance. Optional --
                // defaults to False. This field may not be changed for an experiment whose status is ENDED.
                equalWeighting?: boolean;
                // Experiment ID. Required for patch and update. Disallowed for create.
                id?: string;
                // Internal ID for the web property to which this experiment belongs. This field is read-only.
                internalWebPropertyId?: string;
                // Resource type for an Analytics experiment. This field is read-only.
                kind?: string;
                // An integer number in [3, 90]. Specifies the minimum length of the experiment. Can be changed for a running experiment.
                // This field may not be changed for an experiments whose status is ENDED.
                minimumExperimentLengthInDays?: Integer;
                // Experiment name. This field may not be changed for an experiment whose status is ENDED. This field is required when
                // creating an experiment.
                name?: string;
                // The metric that the experiment is optimizing. Valid values: "ga:goal(n)Completions", "ga:adsenseAdsClicks",
                // "ga:adsenseAdsViewed", "ga:adsenseRevenue", "ga:bounces", "ga:pageviews", "ga:sessionDuration", "ga:transactions",
                // "ga:transactionRevenue". This field is required if status is "RUNNING" and servingFramework is one of "REDIRECT" or
                // "API".
                objectiveMetric?: string;
                // Whether the objectiveMetric should be minimized or maximized. Possible values: "MAXIMUM", "MINIMUM". Optional--defaults
                // to "MAXIMUM". Cannot be specified without objectiveMetric. Cannot be modified when status is "RUNNING" or "ENDED".
                optimizationType?: string;
                // Parent link for an experiment. Points to the view (profile) to which this experiment belongs.
                parentLink?: Schema.ExperimentParentLink;
                // View (Profile) ID to which this experiment belongs. This field is read-only.
                profileId?: string;
                // Why the experiment ended. Possible values: "STOPPED_BY_USER", "WINNER_FOUND", "EXPERIMENT_EXPIRED",
                // "ENDED_WITH_NO_WINNER", "GOAL_OBJECTIVE_CHANGED". "ENDED_WITH_NO_WINNER" means that the experiment didn't expire but no
                // winner was projected to be found. If the experiment status is changed via the API to ENDED this field is set to
                // STOPPED_BY_USER. This field is read-only.
                reasonExperimentEnded?: string;
                // Boolean specifying whether variations URLS are rewritten to match those of the original. This field may not be changed
                // for an experiments whose status is ENDED.
                rewriteVariationUrlsAsOriginal?: boolean;
                // Link for this experiment. This field is read-only.
                selfLink?: string;
                // The framework used to serve the experiment variations and evaluate the results. One of:
                // - REDIRECT: Google Analytics redirects traffic to different variation pages, reports the chosen variation and evaluates
                // the results.
                // - API: Google Analytics chooses and reports the variation to serve and evaluates the results; the caller is responsible
                // for serving the selected variation.
                // - EXTERNAL: The variations will be served externally and the chosen variation reported to Google Analytics. The caller
                // is responsible for serving the selected variation and evaluating the results.
                servingFramework?: string;
                // The snippet of code to include on the control page(s). This field is read-only.
                snippet?: string;
                // The starting time of the experiment (the time the status changed from READY_TO_RUN to RUNNING). This field is present
                // only if the experiment has started. This field is read-only.
                startTime?: string;
                // Experiment status. Possible values: "DRAFT", "READY_TO_RUN", "RUNNING", "ENDED". Experiments can be created in the
                // "DRAFT", "READY_TO_RUN" or "RUNNING" state. This field is required when creating an experiment.
                status?: string;
                // A floating-point number in (0, 1]. Specifies the fraction of the traffic that participates in the experiment. Can be
                // changed for a running experiment. This field may not be changed for an experiments whose status is ENDED.
                trafficCoverage?: number;
                // Time the experiment was last modified. This field is read-only.
                updated?: string;
                // Array of variations. The first variation in the array is the original. The number of variations may not change once an
                // experiment is in the RUNNING state. At least two variations are required before status can be set to RUNNING.
                variations?: Schema.ExperimentVariations[];
                // Web property ID to which this experiment belongs. The web property ID is of the form UA-XXXXX-YY. This field is
                // read-only.
                webPropertyId?: string;
                // A floating-point number in (0, 1). Specifies the necessary confidence level to choose a winner. This field may not be
                // changed for an experiments whose status is ENDED.
                winnerConfidenceLevel?: number;
                // Boolean specifying whether a winner has been found for this experiment. This field is read-only.
                winnerFound?: boolean;
            }
            // Parent link for an experiment. Points to the view (profile) to which this experiment belongs.
            interface ExperimentParentLink {
                // Link to the view (profile) to which this experiment belongs. This field is read-only.
                href?: string;
                // Value is "analytics#profile". This field is read-only.
                type?: string;
            }
            interface ExperimentVariations {
                // The name of the variation. This field is required when creating an experiment. This field may not be changed for an
                // experiment whose status is ENDED.
                name?: string;
                // Status of the variation. Possible values: "ACTIVE", "INACTIVE". INACTIVE variations are not served. This field may not
                // be changed for an experiment whose status is ENDED.
                status?: string;
                // The URL of the variation. This field may not be changed for an experiment whose status is RUNNING or ENDED.
                url?: string;
                // Weight that this variation should receive. Only present if the experiment is running. This field is read-only.
                weight?: number;
                // True if the experiment has ended and this variation performed (statistically) significantly better than the original.
                // This field is read-only.
                won?: boolean;
            }
            // An experiment collection lists Analytics experiments to which the user has access. Each view (profile) can have a set of
            // experiments. Each resource in the Experiment collection corresponds to a single Analytics experiment.
            interface Experiments {
                // A list of experiments.
                items?: Schema.Experiment[];
                // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its
                // value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
                itemsPerPage?: Integer;
                // Collection type.
                kind?: string;
                // Link to next page for this experiment collection.
                nextLink?: string;
                // Link to previous page for this experiment collection.
                previousLink?: string;
                // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
                startIndex?: Integer;
                // The total number of results for the query, regardless of the number of resources in the result.
                totalResults?: Integer;
                // Email ID of the authenticated user
                username?: string;
            }
            // JSON template for an Analytics account filter.
            interface Filter {
                // Account ID to which this filter belongs.
                accountId?: string;
                // Details for the filter of the type ADVANCED.
                advancedDetails?: Schema.FilterAdvancedDetails;
                // Time this filter was created.
                created?: string;
                // Details for the filter of the type EXCLUDE.
                excludeDetails?: Schema.FilterExpression;
                // Filter ID.
                id?: string;
                // Details for the filter of the type INCLUDE.
                includeDetails?: Schema.FilterExpression;
                // Resource type for Analytics filter.
                kind?: string;
                // Details for the filter of the type LOWER.
                lowercaseDetails?: Schema.FilterLowercaseDetails;
                // Name of this filter.
                name?: string;
                // Parent link for this filter. Points to the account to which this filter belongs.
                parentLink?: Schema.FilterParentLink;
                // Details for the filter of the type SEARCH_AND_REPLACE.
                searchAndReplaceDetails?: Schema.FilterSearchAndReplaceDetails;
                // Link for this filter.
                selfLink?: string;
                // Type of this filter. Possible values are INCLUDE, EXCLUDE, LOWERCASE, UPPERCASE, SEARCH_AND_REPLACE and ADVANCED.
                type?: string;
                // Time this filter was last modified.
                updated?: string;
                // Details for the filter of the type UPPER.
                uppercaseDetails?: Schema.FilterUppercaseDetails;
            }
            // Details for the filter of the type ADVANCED.
            interface FilterAdvancedDetails {
                // Indicates if the filter expressions are case sensitive.
                caseSensitive?: boolean;
                // Expression to extract from field A.
                extractA?: string;
                // Expression to extract from field B.
                extractB?: string;
                // Field A.
                fieldA?: string;
                // The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
                fieldAIndex?: Integer;
                // Indicates if field A is required to match.
                fieldARequired?: boolean;
                // Field B.
                fieldB?: string;
                // The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
                fieldBIndex?: Integer;
                // Indicates if field B is required to match.
                fieldBRequired?: boolean;
                // Expression used to construct the output value.
                outputConstructor?: string;
                // Output field.
                outputToField?: string;
                // The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
                outputToFieldIndex?: Integer;
                // Indicates if the existing value of the output field, if any, should be overridden by the output expression.
                overrideOutputField?: boolean;
            }
            // JSON template for an Analytics filter expression.
            interface FilterExpression {
                // Determines if the filter is case sensitive.
                caseSensitive?: boolean;
                // Filter expression value
                expressionValue?: string;
                // Field to filter. Possible values:
                // - Content and Traffic
                // - PAGE_REQUEST_URI,
                // - PAGE_HOSTNAME,
                // - PAGE_TITLE,
                // - REFERRAL,
                // - COST_DATA_URI (Campaign target URL),
                // - HIT_TYPE,
                // - INTERNAL_SEARCH_TERM,
                // - INTERNAL_SEARCH_TYPE,
                // - SOURCE_PROPERTY_TRACKING_ID,
                // - Campaign or AdGroup
                // - CAMPAIGN_SOURCE,
                // - CAMPAIGN_MEDIUM,
                // - CAMPAIGN_NAME,
                // - CAMPAIGN_AD_GROUP,
                // - CAMPAIGN_TERM,
                // - CAMPAIGN_CONTENT,
                // - CAMPAIGN_CODE,
                // - CAMPAIGN_REFERRAL_PATH,
                // - E-Commerce
                // - TRANSACTION_COUNTRY,
                // - TRANSACTION_REGION,
                // - TRANSACTION_CITY,
                // - TRANSACTION_AFFILIATION (Store or order location),
                // - ITEM_NAME,
                // - ITEM_CODE,
                // - ITEM_VARIATION,
                // - TRANSACTION_ID,
                // - TRANSACTION_CURRENCY_CODE,
                // - PRODUCT_ACTION_TYPE,
                // - Audience/Users
                // - BROWSER,
                // - BROWSER_VERSION,
                // - BROWSER_SIZE,
                // - PLATFORM,
                // - PLATFORM_VERSION,
                // - LANGUAGE,
                // - SCREEN_RESOLUTION,
                // - SCREEN_COLORS,
                // - JAVA_ENABLED (Boolean Field),
                // - FLASH_VERSION,
                // - GEO_SPEED (Connection speed),
                // - VISITOR_TYPE,
                // - GEO_ORGANIZATION (ISP organization),
                // - GEO_DOMAIN,
                // - GEO_IP_ADDRESS,
                // - GEO_IP_VERSION,
                // - Location
                // - GEO_COUNTRY,
                // - GEO_REGION,
                // - GEO_CITY,
                // - Event
                // - EVENT_CATEGORY,
                // - EVENT_ACTION,
                // - EVENT_LABEL,
                // - Other
                // - CUSTOM_FIELD_1,
                // - CUSTOM_FIELD_2,
                // - USER_DEFINED_VALUE,
                // - Application
                // - APP_ID,
                // - APP_INSTALLER_ID,
                // - APP_NAME,
                // - APP_VERSION,
                // - SCREEN,
                // - IS_APP (Boolean Field),
                // - IS_FATAL_EXCEPTION (Boolean Field),
                // - EXCEPTION_DESCRIPTION,
                // - Mobile device
                // - IS_MOBILE (Boolean Field, Deprecated. Use DEVICE_CATEGORY=mobile),
                // - IS_TABLET (Boolean Field, Deprecated. Use DEVICE_CATEGORY=tablet),
                // - DEVICE_CATEGORY,
                // - MOBILE_HAS_QWERTY_KEYBOARD (Boolean Field),
                // - MOBILE_HAS_NFC_SUPPORT (Boolean Field),
                // - MOBILE_HAS_CELLULAR_RADIO (Boolean Field),
                // - MOBILE_HAS_WIFI_SUPPORT (Boolean Field),
                // - MOBILE_BRAND_NAME,
                // - MOBILE_MODEL_NAME,
                // - MOBILE_MARKETING_NAME,
                // - MOBILE_POINTING_METHOD,
                // - Social
                // - SOCIAL_NETWORK,
                // - SOCIAL_ACTION,
                // - SOCIAL_ACTION_TARGET,
                // - Custom dimension
                // - CUSTOM_DIMENSION (See accompanying field index),
                field?: string;
                // The Index of the custom dimension. Set only if the field is a is CUSTOM_DIMENSION.
                fieldIndex?: Integer;
                // Kind value for filter expression
                kind?: string;
                // Match type for this filter. Possible values are BEGINS_WITH, EQUAL, ENDS_WITH, CONTAINS, or MATCHES. GEO_DOMAIN,
                // GEO_IP_ADDRESS, PAGE_REQUEST_URI, or PAGE_HOSTNAME filters can use any match type; all other filters must use MATCHES.
                matchType?: string;
            }
            // Details for the filter of the type LOWER.
            interface FilterLowercaseDetails {
                // Field to use in the filter.
                field?: string;
                // The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
                fieldIndex?: Integer;
            }
            // Parent link for this filter. Points to the account to which this filter belongs.
            interface FilterParentLink {
                // Link to the account to which this filter belongs.
                href?: string;
                // Value is "analytics#account".
                type?: string;
            }
            // JSON template for a profile filter link.
            interface FilterRef {
                // Account ID to which this filter belongs.
                accountId?: string;
                // Link for this filter.
                href?: string;
                // Filter ID.
                id?: string;
                // Kind value for filter reference.
                kind?: string;
                // Name of this filter.
                name?: string;
            }
            // Details for the filter of the type SEARCH_AND_REPLACE.
            interface FilterSearchAndReplaceDetails {
                // Determines if the filter is case sensitive.
                caseSensitive?: boolean;
                // Field to use in the filter.
                field?: string;
                // The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
                fieldIndex?: Integer;
                // Term to replace the search term with.
                replaceString?: string;
                // Term to search.
                searchString?: string;
            }
            // Details for the filter of the type UPPER.
            interface FilterUppercaseDetails {
                // Field to use in the filter.
                field?: string;
                // The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
                fieldIndex?: Integer;
            }
            // A filter collection lists filters created by users in an Analytics account. Each resource in the collection corresponds
            // to a filter.
            interface Filters {
                // A list of filters.
                items?: Schema.Filter[];
                // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its
                // value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
                itemsPerPage?: Integer;
                // Collection type.
                kind?: string;
                // Link to next page for this filter collection.
                nextLink?: string;
                // Link to previous page for this filter collection.
                previousLink?: string;
                // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
                startIndex?: Integer;
                // The total number of results for the query, regardless of the number of results in the response.
                totalResults?: Integer;
                // Email ID of the authenticated user
                username?: string;
            }
            // Analytics data for a given view (profile).
            interface GaData {
                // Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as
                // specified in the request.
                columnHeaders?: Schema.GaDataColumnHeaders[];
                // Determines if Analytics data contains samples.
                containsSampledData?: boolean;
                // The last refreshed time in seconds for Analytics data.
                dataLastRefreshed?: string;
                dataTable?: Schema.GaDataDataTable;
                // Unique ID for this data response.
                id?: string;
                // The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges
                // from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
                itemsPerPage?: Integer;
                // Resource type.
                kind?: string;
                // Link to next page for this Analytics data query.
                nextLink?: string;
                // Link to previous page for this Analytics data query.
                previousLink?: string;
                // Information for the view (profile), for which the Analytics data was requested.
                profileInfo?: Schema.GaDataProfileInfo;
                // Analytics data request query parameters.
                query?: Schema.GaDataQuery;
                // Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of
                // dimensions and metrics is same as specified in the request.
                rows?: string[][];
                // The number of samples used to calculate the result.
                sampleSize?: string;
                // Total size of the sample space from which the samples were selected.
                sampleSpace?: string;
                // Link to this page.
                selfLink?: string;
                // The total number of rows for the query, regardless of the number of rows in the response.
                totalResults?: Integer;
                // Total values for the requested metrics over all the results, not just the results returned in this response. The order
                // of the metric totals is same as the metric order specified in the request.
                totalsForAllResults?: object;
            }
            interface GaDataColumnHeaders {
                // Column Type. Either DIMENSION or METRIC.
                columnType?: string;
                // Data type. Dimension column headers have only STRING as the data type. Metric column headers have data types for metric
                // values such as INTEGER, DOUBLE, CURRENCY etc.
                dataType?: string;
                // Column name.
                name?: string;
            }
            interface GaDataDataTable {
                cols?: Schema.GaDataDataTableCols[];
                rows?: Schema.GaDataDataTableRows[];
            }
            interface GaDataDataTableCols {
                id?: string;
                label?: string;
                type?: string;
            }
            interface GaDataDataTableRows {
                c?: Schema.GaDataDataTableRowsC[];
            }
            interface GaDataDataTableRowsC {
                v?: string;
            }
            // Information for the view (profile), for which the Analytics data was requested.
            interface GaDataProfileInfo {
                // Account ID to which this view (profile) belongs.
                accountId?: string;
                // Internal ID for the web property to which this view (profile) belongs.
                internalWebPropertyId?: string;
                // View (Profile) ID.
                profileId?: string;
                // View (Profile) name.
                profileName?: string;
                // Table ID for view (profile).
                tableId?: string;
                // Web Property ID to which this view (profile) belongs.
                webPropertyId?: string;
            }
            // Analytics data request query parameters.
            interface GaDataQuery {
                // List of analytics dimensions.
                dimensions?: string;
                // End date.
                "end-date"?: string;
                // Comma-separated list of dimension or metric filters.
                filters?: string;
                // Unique table ID.
                ids?: string;
                // Maximum results per page.
                "max-results"?: Integer;
                // List of analytics metrics.
                metrics?: string[];
                // Desired sampling level
                samplingLevel?: string;
                // Analytics advanced segment.
                segment?: string;
                // List of dimensions or metrics based on which Analytics data is sorted.
                sort?: string[];
                // Start date.
                "start-date"?: string;
                // Start index.
                "start-index"?: Integer;
            }
            // JSON template for Analytics goal resource.
            interface Goal {
                // Account ID to which this goal belongs.
                accountId?: string;
                // Determines whether this goal is active.
                active?: boolean;
                // Time this goal was created.
                created?: string;
                // Details for the goal of the type EVENT.
                eventDetails?: Schema.GoalEventDetails;
                // Goal ID.
                id?: string;
                // Internal ID for the web property to which this goal belongs.
                internalWebPropertyId?: string;
                // Resource type for an Analytics goal.
                kind?: string;
                // Goal name.
                name?: string;
                // Parent link for a goal. Points to the view (profile) to which this goal belongs.
                parentLink?: Schema.GoalParentLink;
                // View (Profile) ID to which this goal belongs.
                profileId?: string;
                // Link for this goal.
                selfLink?: string;
                // Goal type. Possible values are URL_DESTINATION, VISIT_TIME_ON_SITE, VISIT_NUM_PAGES, AND EVENT.
                type?: string;
                // Time this goal was last modified.
                updated?: string;
                // Details for the goal of the type URL_DESTINATION.
                urlDestinationDetails?: Schema.GoalUrlDestinationDetails;
                // Goal value.
                value?: number;
                // Details for the goal of the type VISIT_NUM_PAGES.
                visitNumPagesDetails?: Schema.GoalVisitNumPagesDetails;
                // Details for the goal of the type VISIT_TIME_ON_SITE.
                visitTimeOnSiteDetails?: Schema.GoalVisitTimeOnSiteDetails;
                // Web property ID to which this goal belongs. The web property ID is of the form UA-XXXXX-YY.
                webPropertyId?: string;
            }
            // Details for the goal of the type EVENT.
            interface GoalEventDetails {
                // List of event conditions.
                eventConditions?: Schema.GoalEventDetailsEventConditions[];
                // Determines if the event value should be used as the value for this goal.
                useEventValue?: boolean;
            }
            interface GoalEventDetailsEventConditions {
                // Type of comparison. Possible values are LESS_THAN, GREATER_THAN or EQUAL.
                comparisonType?: string;
                // Value used for this comparison.
                comparisonValue?: string;
                // Expression used for this match.
                expression?: string;
                // Type of the match to be performed. Possible values are REGEXP, BEGINS_WITH, or EXACT.
                matchType?: string;
                // Type of this event condition. Possible values are CATEGORY, ACTION, LABEL, or VALUE.
                type?: string;
            }
            // Parent link for a goal. Points to the view (profile) to which this goal belongs.
            interface GoalParentLink {
                // Link to the view (profile) to which this goal belongs.
                href?: string;
                // Value is "analytics#profile".
                type?: string;
            }
            // Details for the goal of the type URL_DESTINATION.
            interface GoalUrlDestinationDetails {
                // Determines if the goal URL must exactly match the capitalization of visited URLs.
                caseSensitive?: boolean;
                // Determines if the first step in this goal is required.
                firstStepRequired?: boolean;
                // Match type for the goal URL. Possible values are HEAD, EXACT, or REGEX.
                matchType?: string;
                // List of steps configured for this goal funnel.
                steps?: Schema.GoalUrlDestinationDetailsSteps[];
                // URL for this goal.
                url?: string;
            }
            interface GoalUrlDestinationDetailsSteps {
                // Step name.
                name?: string;
                // Step number.
                number?: Integer;
                // URL for this step.
                url?: string;
            }
            // Details for the goal of the type VISIT_NUM_PAGES.
            interface GoalVisitNumPagesDetails {
                // Type of comparison. Possible values are LESS_THAN, GREATER_THAN, or EQUAL.
                comparisonType?: string;
                // Value used for this comparison.
                comparisonValue?: string;
            }
            // Details for the goal of the type VISIT_TIME_ON_SITE.
            interface GoalVisitTimeOnSiteDetails {
                // Type of comparison. Possible values are LESS_THAN or GREATER_THAN.
                comparisonType?: string;
                // Value used for this comparison.
                comparisonValue?: string;
            }
            // A goal collection lists Analytics goals to which the user has access. Each view (profile) can have a set of goals. Each
            // resource in the Goal collection corresponds to a single Analytics goal.
            interface Goals {
                // A list of goals.
                items?: Schema.Goal[];
                // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its
                // value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
                itemsPerPage?: Integer;
                // Collection type.
                kind?: string;
                // Link to next page for this goal collection.
                nextLink?: string;
                // Link to previous page for this goal collection.
                previousLink?: string;
                // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
                startIndex?: Integer;
                // The total number of results for the query, regardless of the number of resources in the result.
                totalResults?: Integer;
                // Email ID of the authenticated user
                username?: string;
            }
            // JSON template for a hash Client Id request resource.
            interface HashClientIdRequest {
                clientId?: string;
                kind?: string;
                webPropertyId?: string;
            }
            // JSON template for a hash Client Id response resource.
            interface HashClientIdResponse {
                clientId?: string;
                hashedClientId?: string;
                kind?: string;
                webPropertyId?: string;
            }
            // JSON template for an Analytics Remarketing Include Conditions.
            interface IncludeConditions {
                // The look-back window lets you specify a time frame for evaluating the behavior that qualifies users for your audience.
                // For example, if your filters include users from Central Asia, and Transactions Greater than 2, and you set the look-back
                // window to 14 days, then any user from Central Asia whose cumulative transactions exceed 2 during the last 14 days is
                // added to the audience.
                daysToLookBack?: Integer;
                // Boolean indicating whether this segment is a smart list. https://support.google.com/analytics/answer/4628577
                isSmartList?: boolean;
                // Resource type for include conditions.
                kind?: string;
                // Number of days (in the range 1 to 540) a user remains in the audience.
                membershipDurationDays?: Integer;
                // The segment condition that will cause a user to be added to an audience.
                segment?: string;
            }
            // JSON template for an Analytics Remarketing Audience Foreign Link.
            interface LinkedForeignAccount {
                // Account ID to which this linked foreign account belongs.
                accountId?: string;
                // Boolean indicating whether this is eligible for search.
                eligibleForSearch?: boolean;
                // Entity ad account link ID.
                id?: string;
                // Internal ID for the web property to which this linked foreign account belongs.
                internalWebPropertyId?: string;
                // Resource type for linked foreign account.
                kind?: string;
                // The foreign account ID. For example the an Google Ads `linkedAccountId` has the following format XXX-XXX-XXXX.
                linkedAccountId?: string;
                // Remarketing audience ID to which this linked foreign account belongs.
                remarketingAudienceId?: string;
                // The status of this foreign account link.
                status?: string;
                // The type of the foreign account. For example, `ADWORDS_LINKS`, `DBM_LINKS`, `MCC_LINKS` or `OPTIMIZE`.
                type?: string;
                // Web property ID of the form UA-XXXXX-YY to which this linked foreign account belongs.
                webPropertyId?: string;
            }
            // Multi-Channel Funnels data for a given view (profile).
            interface McfData {
                // Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as
                // specified in the request.
                columnHeaders?: Schema.McfDataColumnHeaders[];
                // Determines if the Analytics data contains sampled data.
                containsSampledData?: boolean;
                // Unique ID for this data response.
                id?: string;
                // The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges
                // from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
                itemsPerPage?: Integer;
                // Resource type.
                kind?: string;
                // Link to next page for this Analytics data query.
                nextLink?: string;
                // Link to previous page for this Analytics data query.
                previousLink?: string;
                // Information for the view (profile), for which the Analytics data was requested.
                profileInfo?: Schema.McfDataProfileInfo;
                // Analytics data request query parameters.
                query?: Schema.McfDataQuery;
                // Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of
                // dimensions and metrics is same as specified in the request.
                rows?: Schema.McfDataRows[][];
                // The number of samples used to calculate the result.
                sampleSize?: string;
                // Total size of the sample space from which the samples were selected.
                sampleSpace?: string;
                // Link to this page.
                selfLink?: string;
                // The total number of rows for the query, regardless of the number of rows in the response.
                totalResults?: Integer;
                // Total values for the requested metrics over all the results, not just the results returned in this response. The order
                // of the metric totals is same as the metric order specified in the request.
                totalsForAllResults?: object;
            }
            interface McfDataColumnHeaders {
                // Column Type. Either DIMENSION or METRIC.
                columnType?: string;
                // Data type. Dimension and metric values data types such as INTEGER, DOUBLE, CURRENCY, MCF_SEQUENCE etc.
                dataType?: string;
                // Column name.
                name?: string;
            }
            // Information for the view (profile), for which the Analytics data was requested.
            interface McfDataProfileInfo {
                // Account ID to which this view (profile) belongs.
                accountId?: string;
                // Internal ID for the web property to which this view (profile) belongs.
                internalWebPropertyId?: string;
                // View (Profile) ID.
                profileId?: string;
                // View (Profile) name.
                profileName?: string;
                // Table ID for view (profile).
                tableId?: string;
                // Web Property ID to which this view (profile) belongs.
                webPropertyId?: string;
            }
            // Analytics data request query parameters.
            interface McfDataQuery {
                // List of analytics dimensions.
                dimensions?: string;
                // End date.
                "end-date"?: string;
                // Comma-separated list of dimension or metric filters.
                filters?: string;
                // Unique table ID.
                ids?: string;
                // Maximum results per page.
                "max-results"?: Integer;
                // List of analytics metrics.
                metrics?: string[];
                // Desired sampling level
                samplingLevel?: string;
                // Analytics advanced segment.
                segment?: string;
                // List of dimensions or metrics based on which Analytics data is sorted.
                sort?: string[];
                // Start date.
                "start-date"?: string;
                // Start index.
                "start-index"?: Integer;
            }
            // A union object representing a dimension or metric value. Only one of "primitiveValue" or "conversionPathValue" attribute
            // will be populated.
            interface McfDataRows {
                // A conversion path dimension value, containing a list of interactions with their attributes.
                conversionPathValue?: Schema.McfDataRowsConversionPathValue[];
                // A primitive dimension value. A primitive metric value.
                primitiveValue?: string;
            }
            interface McfDataRowsConversionPathValue {
                // Type of an interaction on conversion path. Such as CLICK, IMPRESSION etc.
                interactionType?: string;
                // Node value of an interaction on conversion path. Such as source, medium etc.
                nodeValue?: string;
            }
            // JSON template for an Analytics view (profile).
            interface Profile {
                // Account ID to which this view (profile) belongs.
                accountId?: string;
                // Indicates whether bot filtering is enabled for this view (profile).
                botFilteringEnabled?: boolean;
                // Child link for this view (profile). Points to the list of goals for this view (profile).
                childLink?: Schema.ProfileChildLink;
                // Time this view (profile) was created.
                created?: string;
                // The currency type associated with this view (profile), defaults to USD. The supported values are:
                // USD, JPY, EUR, GBP, AUD, KRW, BRL, CNY, DKK, RUB, SEK, NOK, PLN, TRY, TWD, HKD, THB, IDR, ARS, MXN, VND, PHP, INR, CHF,
                // CAD, CZK, NZD, HUF, BGN, LTL, ZAR, UAH, AED, BOB, CLP, COP, EGP, HRK, ILS, MAD, MYR, PEN, PKR, RON, RSD, SAR, SGD, VEF,
                // LVL
                currency?: string;
                // Default page for this view (profile).
                defaultPage?: string;
                // Indicates whether ecommerce tracking is enabled for this view (profile).
                eCommerceTracking?: boolean;
                // Indicates whether enhanced ecommerce tracking is enabled for this view (profile). This property can only be enabled if
                // ecommerce tracking is enabled.
                enhancedECommerceTracking?: boolean;
                // The query parameters that are excluded from this view (profile).
                excludeQueryParameters?: string;
                // View (Profile) ID.
                id?: string;
                // Internal ID for the web property to which this view (profile) belongs.
                internalWebPropertyId?: string;
                // Resource type for Analytics view (profile).
                kind?: string;
                // Name of this view (profile).
                name?: string;
                // Parent link for this view (profile). Points to the web property to which this view (profile) belongs.
                parentLink?: Schema.ProfileParentLink;
                // Permissions the user has for this view (profile).
                permissions?: Schema.ProfilePermissions;
                // Link for this view (profile).
                selfLink?: string;
                // Site search category parameters for this view (profile).
                siteSearchCategoryParameters?: string;
                // The site search query parameters for this view (profile).
                siteSearchQueryParameters?: string;
                // Indicates whether this view (profile) is starred or not.
                starred?: boolean;
                // Whether or not Analytics will strip search category parameters from the URLs in your reports.
                stripSiteSearchCategoryParameters?: boolean;
                // Whether or not Analytics will strip search query parameters from the URLs in your reports.
                stripSiteSearchQueryParameters?: boolean;
                // Time zone for which this view (profile) has been configured. Time zones are identified by strings from the TZ database.
                timezone?: string;
                // View (Profile) type. Supported types: WEB or APP.
                type?: string;
                // Time this view (profile) was last modified.
                updated?: string;
                // Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs.
                webPropertyId?: string;
                // Website URL for this view (profile).
                websiteUrl?: string;
            }
            // Child link for this view (profile). Points to the list of goals for this view (profile).
            interface ProfileChildLink {
                // Link to the list of goals for this view (profile).
                href?: string;
                // Value is "analytics#goals".
                type?: string;
            }
            // JSON template for an Analytics profile filter link.
            interface ProfileFilterLink {
                // Filter for this link.
                filterRef?: Schema.FilterRef;
                // Profile filter link ID.
                id?: string;
                // Resource type for Analytics filter.
                kind?: string;
                // View (Profile) for this link.
                profileRef?: Schema.ProfileRef;
                // The rank of this profile filter link relative to the other filters linked to the same profile.
                // For readonly (i.e., list and get) operations, the rank always starts at 1.
                // For write (i.e., create, update, or delete) operations, you may specify a value between 0 and 255 inclusively, [0, 255].
                // In order to insert a link at the end of the list, either don't specify a rank or set a rank to a number greater than the
                // largest rank in the list. In order to insert a link to the beginning of the list specify a rank that is less than or
                // equal to 1. The new link will move all existing filters with the same or lower rank down the list. After the link is
                // inserted/updated/deleted all profile filter links will be renumbered starting at 1.
                rank?: Integer;
                // Link for this profile filter link.
                selfLink?: string;
            }
            // A profile filter link collection lists profile filter links between profiles and filters. Each resource in the
            // collection corresponds to a profile filter link.
            interface ProfileFilterLinks {
                // A list of profile filter links.
                items?: Schema.ProfileFilterLink[];
                // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its
                // value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
                itemsPerPage?: Integer;
                // Collection type.
                kind?: string;
                // Link to next page for this profile filter link collection.
                nextLink?: string;
                // Link to previous page for this profile filter link collection.
                previousLink?: string;
                // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
                startIndex?: Integer;
                // The total number of results for the query, regardless of the number of results in the response.
                totalResults?: Integer;
                // Email ID of the authenticated user
                username?: string;
            }
            // Parent link for this view (profile). Points to the web property to which this view (profile) belongs.
            interface ProfileParentLink {
                // Link to the web property to which this view (profile) belongs.
                href?: string;
                // Value is "analytics#webproperty".
                type?: string;
            }
            // Permissions the user has for this view (profile).
            interface ProfilePermissions {
                // All the permissions that the user has for this view (profile). These include any implied permissions (e.g., EDIT implies
                // VIEW) or inherited permissions from the parent web property.
                effective?: string[];
            }
            // JSON template for a linked view (profile).
            interface ProfileRef {
                // Account ID to which this view (profile) belongs.
                accountId?: string;
                // Link for this view (profile).
                href?: string;
                // View (Profile) ID.
                id?: string;
                // Internal ID for the web property to which this view (profile) belongs.
                internalWebPropertyId?: string;
                // Analytics view (profile) reference.
                kind?: string;
                // Name of this view (profile).
                name?: string;
                // Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs.
                webPropertyId?: string;
            }
            // JSON template for an Analytics ProfileSummary. ProfileSummary returns basic information (i.e., summary) for a profile.
            interface ProfileSummary {
                // View (profile) ID.
                id?: string;
                // Resource type for Analytics ProfileSummary.
                kind?: string;
                // View (profile) name.
                name?: string;
                // Indicates whether this view (profile) is starred or not.
                starred?: boolean;
                // View (Profile) type. Supported types: WEB or APP.
                type?: string;
            }
            // A view (profile) collection lists Analytics views (profiles) to which the user has access. Each resource in the
            // collection corresponds to a single Analytics view (profile).
            interface Profiles {
                // A list of views (profiles).
                items?: Schema.Profile[];
                // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its
                // value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
                itemsPerPage?: Integer;
                // Collection type.
                kind?: string;
                // Link to next page for this view (profile) collection.
                nextLink?: string;
                // Link to previous page for this view (profile) collection.
                previousLink?: string;
                // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
                startIndex?: Integer;
                // The total number of results for the query, regardless of the number of results in the response.
                totalResults?: Integer;
                // Email ID of the authenticated user
                username?: string;
            }
            // Real time data for a given view (profile).
            interface RealtimeData {
                // Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as
                // specified in the request.
                columnHeaders?: Schema.RealtimeDataColumnHeaders[];
                // Unique ID for this data response.
                id?: string;
                // Resource type.
                kind?: string;
                // Information for the view (profile), for which the real time data was requested.
                profileInfo?: Schema.RealtimeDataProfileInfo;
                // Real time data request query parameters.
                query?: Schema.RealtimeDataQuery;
                // Real time data rows, where each row contains a list of dimension values followed by the metric values. The order of
                // dimensions and metrics is same as specified in the request.
                rows?: string[][];
                // Link to this page.
                selfLink?: string;
                // The total number of rows for the query, regardless of the number of rows in the response.
                totalResults?: Integer;
                // Total values for the requested metrics over all the results, not just the results returned in this response. The order
                // of the metric totals is same as the metric order specified in the request.
                totalsForAllResults?: object;
            }
            interface RealtimeDataColumnHeaders {
                // Column Type. Either DIMENSION or METRIC.
                columnType?: string;
                // Data type. Dimension column headers have only STRING as the data type. Metric column headers have data types for metric
                // values such as INTEGER, DOUBLE, CURRENCY etc.
                dataType?: string;
                // Column name.
                name?: string;
            }
            // Information for the view (profile), for which the real time data was requested.
            interface RealtimeDataProfileInfo {
                // Account ID to which this view (profile) belongs.
                accountId?: string;
                // Internal ID for the web property to which this view (profile) belongs.
                internalWebPropertyId?: string;
                // View (Profile) ID.
                profileId?: string;
                // View (Profile) name.
                profileName?: string;
                // Table ID for view (profile).
                tableId?: string;
                // Web Property ID to which this view (profile) belongs.
                webPropertyId?: string;
            }
            // Real time data request query parameters.
            interface RealtimeDataQuery {
                // List of real time dimensions.
                dimensions?: string;
                // Comma-separated list of dimension or metric filters.
                filters?: string;
                // Unique table ID.
                ids?: string;
                // Maximum results per page.
                "max-results"?: Integer;
                // List of real time metrics.
                metrics?: string[];
                // List of dimensions or metrics based on which real time data is sorted.
                sort?: string[];
            }
            // JSON template for an Analytics remarketing audience.
            interface RemarketingAudience {
                // Account ID to which this remarketing audience belongs.
                accountId?: string;
                // The simple audience definition that will cause a user to be added to an audience.
                audienceDefinition?: Schema.RemarketingAudienceAudienceDefinition;
                // The type of audience, either SIMPLE or STATE_BASED.
                audienceType?: string;
                // Time this remarketing audience was created.
                created?: string;
                // The description of this remarketing audience.
                description?: string;
                // Remarketing Audience ID.
                id?: string;
                // Internal ID for the web property to which this remarketing audience belongs.
                internalWebPropertyId?: string;
                // Collection type.
                kind?: string;
                // The linked ad accounts associated with this remarketing audience. A remarketing audience can have only one
                // linkedAdAccount currently.
                linkedAdAccounts?: Schema.LinkedForeignAccount[];
                // The views (profiles) that this remarketing audience is linked to.
                linkedViews?: string[];
                // The name of this remarketing audience.
                name?: string;
                // A state based audience definition that will cause a user to be added or removed from an audience.
                stateBasedAudienceDefinition?: Schema.RemarketingAudienceStateBasedAudienceDefinition;
                // Time this remarketing audience was last modified.
                updated?: string;
                // Web property ID of the form UA-XXXXX-YY to which this remarketing audience belongs.
                webPropertyId?: string;
            }
            // The simple audience definition that will cause a user to be added to an audience.
            interface RemarketingAudienceAudienceDefinition {
                // Defines the conditions to include users to the audience.
                includeConditions?: Schema.IncludeConditions;
            }
            // A state based audience definition that will cause a user to be added or removed from an audience.
            interface RemarketingAudienceStateBasedAudienceDefinition {
                // Defines the conditions to exclude users from the audience.
                excludeConditions?: Schema.RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions;
                // Defines the conditions to include users to the audience.
                includeConditions?: Schema.IncludeConditions;
            }
            // Defines the conditions to exclude users from the audience.
            interface RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions {
                // Whether to make the exclusion TEMPORARY or PERMANENT.
                exclusionDuration?: string;
                // The segment condition that will cause a user to be removed from an audience.
                segment?: string;
            }
            // A remarketing audience collection lists Analytics remarketing audiences to which the user has access. Each resource in
            // the collection corresponds to a single Analytics remarketing audience.
            interface RemarketingAudiences {
                // A list of remarketing audiences.
                items?: Schema.RemarketingAudience[];
                // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its
                // value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
                itemsPerPage?: Integer;
                // Collection type.
                kind?: string;
                // Link to next page for this remarketing audience collection.
                nextLink?: string;
                // Link to previous page for this view (profile) collection.
                previousLink?: string;
                // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
                startIndex?: Integer;
                // The total number of results for the query, regardless of the number of results in the response.
                totalResults?: Integer;
                // Email ID of the authenticated user
                username?: string;
            }
            // JSON template for an Analytics segment.
            interface Segment {
                // Time the segment was created.
                created?: string;
                // Segment definition.
                definition?: string;
                // Segment ID.
                id?: string;
                // Resource type for Analytics segment.
                kind?: string;
                // Segment name.
                name?: string;
                // Segment ID. Can be used with the 'segment' parameter in Core Reporting API.
                segmentId?: string;
                // Link for this segment.
                selfLink?: string;
                // Type for a segment. Possible values are "BUILT_IN" or "CUSTOM".
                type?: string;
                // Time the segment was last modified.
                updated?: string;
            }
            // An segment collection lists Analytics segments that the user has access to. Each resource in the collection corresponds
            // to a single Analytics segment.
            interface Segments {
                // A list of segments.
                items?: Schema.Segment[];
                // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its
                // value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
                itemsPerPage?: Integer;
                // Collection type for segments.
                kind?: string;
                // Link to next page for this segment collection.
                nextLink?: string;
                // Link to previous page for this segment collection.
                previousLink?: string;
                // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
                startIndex?: Integer;
                // The total number of results for the query, regardless of the number of results in the response.
                totalResults?: Integer;
                // Email ID of the authenticated user
                username?: string;
            }
            // JSON template for Analytics unsampled report resource.
            interface UnsampledReport {
                // Account ID to which this unsampled report belongs.
                accountId?: string;
                // Download details for a file stored in Google Cloud Storage.
                cloudStorageDownloadDetails?: Schema.UnsampledReportCloudStorageDownloadDetails;
                // Time this unsampled report was created.
                created?: string;
                // The dimensions for the unsampled report.
                dimensions?: string;
                // The type of download you need to use for the report data file. Possible values include `GOOGLE_DRIVE` and
                // `GOOGLE_CLOUD_STORAGE`. If the value is `GOOGLE_DRIVE`, see the `driveDownloadDetails` field. If the value is
                // `GOOGLE_CLOUD_STORAGE`, see the `cloudStorageDownloadDetails` field.
                downloadType?: string;
                // Download details for a file stored in Google Drive.
                driveDownloadDetails?: Schema.UnsampledReportDriveDownloadDetails;
                // The end date for the unsampled report.
                "end-date"?: string;
                // The filters for the unsampled report.
                filters?: string;
                // Unsampled report ID.
                id?: string;
                // Resource type for an Analytics unsampled report.
                kind?: string;
                // The metrics for the unsampled report.
                metrics?: string;
                // View (Profile) ID to which this unsampled report belongs.
                profileId?: string;
                // The segment for the unsampled report.
                segment?: string;
                // Link for this unsampled report.
                selfLink?: string;
                // The start date for the unsampled report.
                "start-date"?: string;
                // Status of this unsampled report. Possible values are PENDING, COMPLETED, or FAILED.
                status?: string;
                // Title of the unsampled report.
                title?: string;
                // Time this unsampled report was last modified.
                updated?: string;
                // Web property ID to which this unsampled report belongs. The web property ID is of the form UA-XXXXX-YY.
                webPropertyId?: string;
            }
            // Download details for a file stored in Google Cloud Storage.
            interface UnsampledReportCloudStorageDownloadDetails {
                // Id of the bucket the file object is stored in.
                bucketId?: string;
                // Id of the file object containing the report data.
                objectId?: string;
            }
            // Download details for a file stored in Google Drive.
            interface UnsampledReportDriveDownloadDetails {
                // Id of the document/file containing the report data.
                documentId?: string;
            }
            // An unsampled report collection lists Analytics unsampled reports to which the user has access. Each view (profile) can
            // have a set of unsampled reports. Each resource in the unsampled report collection corresponds to a single Analytics
            // unsampled report.
            interface UnsampledReports {
                // A list of unsampled reports.
                items?: Schema.UnsampledReport[];
                // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its
                // value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
                itemsPerPage?: Integer;
                // Collection type.
                kind?: string;
                // Link to next page for this unsampled report collection.
                nextLink?: string;
                // Link to previous page for this unsampled report collection.
                previousLink?: string;
                // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
                startIndex?: Integer;
                // The total number of results for the query, regardless of the number of resources in the result.
                totalResults?: Integer;
                // Email ID of the authenticated user
                username?: string;
            }
            // Metadata returned for an upload operation.
            interface Upload {
                // Account Id to which this upload belongs.
                accountId?: string;
                // Custom data source Id to which this data import belongs.
                customDataSourceId?: string;
                // Data import errors collection.
                errors?: string[];
                // A unique ID for this upload.
                id?: string;
                // Resource type for Analytics upload.
                kind?: string;
                // Upload status. Possible values: PENDING, COMPLETED, FAILED, DELETING, DELETED.
                status?: string;
                // Time this file is uploaded.
                uploadTime?: string;
            }
            // Upload collection lists Analytics uploads to which the user has access. Each custom data source can have a set of
            // uploads. Each resource in the upload collection corresponds to a single Analytics data upload.
            interface Uploads {
                // A list of uploads.
                items?: Schema.Upload[];
                // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its
                // value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
                itemsPerPage?: Integer;
                // Collection type.
                kind?: string;
                // Link to next page for this upload collection.
                nextLink?: string;
                // Link to previous page for this upload collection.
                previousLink?: string;
                // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
                startIndex?: Integer;
                // The total number of results for the query, regardless of the number of resources in the result.
                totalResults?: Integer;
            }
            // JSON template for a user deletion request resource.
            interface UserDeletionRequest {
                // This marks the point in time for which all user data before should be deleted
                deletionRequestTime?: string;
                // Firebase Project Id
                firebaseProjectId?: string;
                // User ID.
                id?: Schema.UserDeletionRequestId;
                // Value is "analytics#userDeletionRequest".
                kind?: string;
                // Property ID
                propertyId?: string;
                // Web property ID of the form UA-XXXXX-YY.
                webPropertyId?: string;
            }
            // User ID.
            interface UserDeletionRequestId {
                // Type of user
                type?: string;
                // The User's id
                userId?: string;
            }
            // JSON template for a user reference.
            interface UserRef {
                // Email ID of this user.
                email?: string;
                // User ID.
                id?: string;
                kind?: string;
            }
            // JSON template for a web property reference.
            interface WebPropertyRef {
                // Account ID to which this web property belongs.
                accountId?: string;
                // Link for this web property.
                href?: string;
                // Web property ID of the form UA-XXXXX-YY.
                id?: string;
                // Internal ID for this web property.
                internalWebPropertyId?: string;
                // Analytics web property reference.
                kind?: string;
                // Name of this web property.
                name?: string;
            }
            // JSON template for an Analytics WebPropertySummary. WebPropertySummary returns basic information (i.e., summary) for a
            // web property.
            interface WebPropertySummary {
                // Web property ID of the form UA-XXXXX-YY.
                id?: string;
                // Internal ID for this web property.
                internalWebPropertyId?: string;
                // Resource type for Analytics WebPropertySummary.
                kind?: string;
                // Level for this web property. Possible values are STANDARD or PREMIUM.
                level?: string;
                // Web property name.
                name?: string;
                // List of profiles under this web property.
                profiles?: Schema.ProfileSummary[];
                // Indicates whether this web property is starred or not.
                starred?: boolean;
                // Website url for this web property.
                websiteUrl?: string;
            }
            // A web property collection lists Analytics web properties to which the user has access. Each resource in the collection
            // corresponds to a single Analytics web property.
            interface Webproperties {
                // A list of web properties.
                items?: Schema.Webproperty[];
                // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its
                // value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
                itemsPerPage?: Integer;
                // Collection type.
                kind?: string;
                // Link to next page for this web property collection.
                nextLink?: string;
                // Link to previous page for this web property collection.
                previousLink?: string;
                // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
                startIndex?: Integer;
                // The total number of results for the query, regardless of the number of results in the response.
                totalResults?: Integer;
                // Email ID of the authenticated user
                username?: string;
            }
            // JSON template for an Analytics web property.
            interface Webproperty {
                // Account ID to which this web property belongs.
                accountId?: string;
                // Child link for this web property. Points to the list of views (profiles) for this web property.
                childLink?: Schema.WebpropertyChildLink;
                // Time this web property was created.
                created?: string;
                // Set to true to reset the retention period of the user identifier with each new event from that user (thus setting the
                // expiration date to current time plus retention period).
                // Set to false to delete data associated with the user identifier automatically after the rentention period.
                // This property cannot be set on insert.
                dataRetentionResetOnNewActivity?: boolean;
                // The length of time for which user and event data is retained.
                // This property cannot be set on insert.
                dataRetentionTtl?: string;
                // Default view (profile) ID.
                defaultProfileId?: string;
                // Web property ID of the form UA-XXXXX-YY.
                id?: string;
                // The industry vertical/category selected for this web property.
                industryVertical?: string;
                // Internal ID for this web property.
                internalWebPropertyId?: string;
                // Resource type for Analytics WebProperty.
                kind?: string;
                // Level for this web property. Possible values are STANDARD or PREMIUM.
                level?: string;
                // Name of this web property.
                name?: string;
                // Parent link for this web property. Points to the account to which this web property belongs.
                parentLink?: Schema.WebpropertyParentLink;
                // Permissions the user has for this web property.
                permissions?: Schema.WebpropertyPermissions;
                // View (Profile) count for this web property.
                profileCount?: Integer;
                // Link for this web property.
                selfLink?: string;
                // Indicates whether this web property is starred or not.
                starred?: boolean;
                // Time this web property was last modified.
                updated?: string;
                // Website url for this web property.
                websiteUrl?: string;
            }
            // Child link for this web property. Points to the list of views (profiles) for this web property.
            interface WebpropertyChildLink {
                // Link to the list of views (profiles) for this web property.
                href?: string;
                // Type of the parent link. Its value is "analytics#profiles".
                type?: string;
            }
            // Parent link for this web property. Points to the account to which this web property belongs.
            interface WebpropertyParentLink {
                // Link to the account for this web property.
                href?: string;
                // Type of the parent link. Its value is "analytics#account".
                type?: string;
            }
            // Permissions the user has for this web property.
            interface WebpropertyPermissions {
                // All the permissions that the user has for this web property. These include any implied permissions (e.g., EDIT implies
                // VIEW) or inherited permissions from the parent account.
                effective?: string[];
            }
        }
    }
    // Views and manages your Google Analytics data.
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
declare const Analytics: GoogleAppsScript.Analytics;
