declare namespace GoogleAppsScript {
    namespace Analytics {
        namespace Collection {
            namespace Data {
                interface GaCollection {
                    // Returns Analytics data for a view (profile).
                    get(
                        ids: string,
                        start_date: string,
                        end_date: string,
                        metrics: string,
                        optionalArgs?: Analytics.Schema.GaDataQuery,
                    ): Analytics.Schema.GaData;
                }
                interface McfCollection {
                    // Returns Analytics Multi-Channel Funnels data for a view (profile).
                    get(
                        ids: string,
                        start_date: string,
                        end_date: string,
                        metrics: string,
                        optionalArgs?: Analytics.Schema.GaDataQuery,
                    ): Analytics.Schema.McfData;
                }
                interface RealtimeCollection {
                    // Returns real time data for a view (profile).
                    get(ids: string, metrics: string, optionalArgs?: any): Analytics.Schema.RealtimeData;
                }
            }
            namespace Management {
                interface AccountSummariesCollection {
                    // Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.
                    list(): Analytics.Schema.AccountSummaries;
                    // Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.
                    list(optionalArgs: any): Analytics.Schema.AccountSummaries;
                }
                interface AccountUserLinksCollection {
                    // Adds a new user to the given account.
                    insert(resource: Schema.EntityUserLink, accountId: string): Analytics.Schema.EntityUserLink;
                    // Lists account-user links for a given account.
                    list(accountId: string): Analytics.Schema.EntityUserLinks;
                    // Lists account-user links for a given account.
                    list(accountId: string, optionalArgs: any): Analytics.Schema.EntityUserLinks;
                    // Removes a user from the given account.
                    remove(accountId: string, linkId: string): void;
                    // Updates permissions for an existing user on the given account.
                    update(
                        resource: Schema.EntityUserLink,
                        accountId: string,
                        linkId: string,
                    ): Analytics.Schema.EntityUserLink;
                }
                interface AccountsCollection {
                    // Lists all accounts to which the user has access.
                    list(): Analytics.Schema.Accounts;
                    // Lists all accounts to which the user has access.
                    list(optionalArgs: any): Analytics.Schema.Accounts;
                }
                interface ClientIdCollection {
                    // Hashes the given Client ID.
                    hashClientId(resource: Analytics.Schema.HashClientIdRequest): Analytics.Schema.HashClientIdResponse;
                }
                interface CustomDataSourcesCollection {
                    // List custom data sources to which the user has access.
                    list(accountId: string, webPropertyId: string): Analytics.Schema.CustomDataSources;
                    // List custom data sources to which the user has access.
                    list(
                        accountId: string,
                        webPropertyId: string,
                        optionalArgs: any,
                    ): Analytics.Schema.CustomDataSources;
                }
                interface CustomDimensionsCollection {
                    // Get a custom dimension to which the user has access.
                    get(
                        accountId: string,
                        webPropertyId: string,
                        customDimensionId: string,
                    ): Analytics.Schema.CustomDimension;
                    // Create a new custom dimension.
                    insert(
                        resource: Schema.CustomDimension,
                        accountId: string,
                        webPropertyId: string,
                    ): Analytics.Schema.CustomDimension;
                    // Lists custom dimensions to which the user has access.
                    list(accountId: string, webPropertyId: string): Analytics.Schema.CustomDimensions;
                    // Lists custom dimensions to which the user has access.
                    list(
                        accountId: string,
                        webPropertyId: string,
                        optionalArgs: any,
                    ): Analytics.Schema.CustomDimensions;
                    // Updates an existing custom dimension. This method supports patch semantics.
                    patch(
                        resource: Schema.CustomDimension,
                        accountId: string,
                        webPropertyId: string,
                        customDimensionId: string,
                    ): Analytics.Schema.CustomDimension;
                    // Updates an existing custom dimension. This method supports patch semantics.
                    patch(
                        resource: Schema.CustomDimension,
                        accountId: string,
                        webPropertyId: string,
                        customDimensionId: string,
                        optionalArgs: any,
                    ): Analytics.Schema.CustomDimension;
                    // Updates an existing custom dimension.
                    update(
                        resource: Schema.CustomDimension,
                        accountId: string,
                        webPropertyId: string,
                        customDimensionId: string,
                    ): Analytics.Schema.CustomDimension;
                    // Updates an existing custom dimension.
                    update(
                        resource: Schema.CustomDimension,
                        accountId: string,
                        webPropertyId: string,
                        customDimensionId: string,
                        optionalArgs: any,
                    ): Analytics.Schema.CustomDimension;
                }
                interface CustomMetricsCollection {
                    // Get a custom metric to which the user has access.
                    get(
                        accountId: string,
                        webPropertyId: string,
                        customMetricId: string,
                    ): Analytics.Schema.CustomMetric;
                    // Create a new custom metric.
                    insert(
                        resource: Schema.CustomMetric,
                        accountId: string,
                        webPropertyId: string,
                    ): Analytics.Schema.CustomMetric;
                    // Lists custom metrics to which the user has access.
                    list(accountId: string, webPropertyId: string): Analytics.Schema.CustomMetrics;
                    // Lists custom metrics to which the user has access.
                    list(accountId: string, webPropertyId: string, optionalArgs: any): Analytics.Schema.CustomMetrics;
                    // Updates an existing custom metric. This method supports patch semantics.
                    patch(
                        resource: Schema.CustomMetric,
                        accountId: string,
                        webPropertyId: string,
                        customMetricId: string,
                    ): Analytics.Schema.CustomMetric;
                    // Updates an existing custom metric. This method supports patch semantics.
                    patch(
                        resource: Schema.CustomMetric,
                        accountId: string,
                        webPropertyId: string,
                        customMetricId: string,
                        optionalArgs: any,
                    ): Analytics.Schema.CustomMetric;
                    // Updates an existing custom metric.
                    update(
                        resource: Schema.CustomMetric,
                        accountId: string,
                        webPropertyId: string,
                        customMetricId: string,
                    ): Analytics.Schema.CustomMetric;
                    // Updates an existing custom metric.
                    update(
                        resource: Schema.CustomMetric,
                        accountId: string,
                        webPropertyId: string,
                        customMetricId: string,
                        optionalArgs: any,
                    ): Analytics.Schema.CustomMetric;
                }
                interface ExperimentsCollection {
                    // Returns an experiment to which the user has access.
                    get(
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                        experimentId: string,
                    ): Analytics.Schema.Experiment;
                    // Create a new experiment.
                    insert(
                        resource: Schema.Experiment,
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                    ): Analytics.Schema.Experiment;
                    // Lists experiments to which the user has access.
                    list(accountId: string, webPropertyId: string, profileId: string): Analytics.Schema.Experiments;
                    // Lists experiments to which the user has access.
                    list(
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                        optionalArgs: any,
                    ): Analytics.Schema.Experiments;
                    // Update an existing experiment. This method supports patch semantics.
                    patch(
                        resource: Schema.Experiment,
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                        experimentId: string,
                    ): Analytics.Schema.Experiment;
                    // Delete an experiment.
                    remove(accountId: string, webPropertyId: string, profileId: string, experimentId: string): void;
                    // Update an existing experiment.
                    update(
                        resource: Schema.Experiment,
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                        experimentId: string,
                    ): Analytics.Schema.Experiment;
                }
                interface FiltersCollection {
                    // Returns a filters to which the user has access.
                    get(accountId: string, filterId: string): Analytics.Schema.Filter;
                    // Create a new filter.
                    insert(resource: Schema.Filter, accountId: string): Analytics.Schema.Filter;
                    // Lists all filters for an account
                    list(accountId: string): Analytics.Schema.Filters;
                    // Lists all filters for an account
                    list(accountId: string, optionalArgs: any): Analytics.Schema.Filters;
                    // Updates an existing filter. This method supports patch semantics.
                    patch(resource: Schema.Filter, accountId: string, filterId: string): Analytics.Schema.Filter;
                    // Delete a filter.
                    remove(accountId: string, filterId: string): Analytics.Schema.Filter;
                    // Updates an existing filter.
                    update(resource: Schema.Filter, accountId: string, filterId: string): Analytics.Schema.Filter;
                }
                interface GoalsCollection {
                    // Gets a goal to which the user has access.
                    get(
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                        goalId: string,
                    ): Analytics.Schema.Goal;
                    // Create a new goal.
                    insert(
                        resource: Analytics.Schema.Goal,
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                    ): Analytics.Schema.Goal;
                    // Lists goals to which the user has access.
                    list(accountId: string, webPropertyId: string, profileId: string): Analytics.Schema.Goals;
                    // Lists goals to which the user has access.
                    list(
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                        optionalArgs: any,
                    ): Analytics.Schema.Goals;
                    // Updates an existing goal. This method supports patch semantics.
                    patch(
                        resource: Schema.Goal,
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                        goalId: string,
                    ): Analytics.Schema.Goal;
                    // Updates an existing goal.
                    update(
                        resource: Schema.Goal,
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                        goalId: string,
                    ): Analytics.Schema.Goal;
                }
                interface ProfileFilterLinksCollection {
                    // Returns a single profile filter link.
                    get(
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                        linkId: string,
                    ): Analytics.Schema.ProfileFilterLink;
                    // Create a new profile filter link.
                    insert(
                        resource: Schema.ProfileFilterLink,
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                    ): Analytics.Schema.ProfileFilterLink;
                    // Lists all profile filter links for a profile.
                    list(
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                    ): Analytics.Schema.ProfileFilterLinks;
                    // Lists all profile filter links for a profile.
                    list(
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                        optionalArgs: any,
                    ): Analytics.Schema.ProfileFilterLinks;
                    // Update an existing profile filter link. This method supports patch semantics.
                    patch(
                        resource: Schema.ProfileFilterLink,
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                        linkId: string,
                    ): Analytics.Schema.ProfileFilterLink;
                    // Delete a profile filter link.
                    remove(accountId: string, webPropertyId: string, profileId: string, linkId: string): void;
                    // Update an existing profile filter link.
                    update(
                        resource: Schema.ProfileFilterLink,
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                        linkId: string,
                    ): Analytics.Schema.ProfileFilterLink;
                }
                interface ProfileUserLinksCollection {
                    // Adds a new user to the given view (profile).
                    insert(
                        resource: Schema.EntityUserLink,
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                    ): Analytics.Schema.EntityUserLink;
                    // Lists profile-user links for a given view (profile).
                    list(accountId: string, webPropertyId: string, profileId: string): Analytics.Schema.EntityUserLinks;
                    // Lists profile-user links for a given view (profile).
                    list(
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                        optionalArgs: any,
                    ): Analytics.Schema.EntityUserLinks;
                    // Removes a user from the given view (profile).
                    remove(accountId: string, webPropertyId: string, profileId: string, linkId: string): void;
                    // Updates permissions for an existing user on the given view (profile).
                    update(
                        resource: Schema.EntityUserLink,
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                        linkId: string,
                    ): Analytics.Schema.EntityUserLink;
                }
                interface ProfilesCollection {
                    // Gets a view (profile) to which the user has access.
                    get(accountId: string, webPropertyId: string, profileId: string): Analytics.Schema.Profile;
                    // Create a new view (profile).
                    insert(
                        resource: Schema.Profile,
                        accountId: string,
                        webPropertyId: string,
                    ): Analytics.Schema.Profile;
                    // Lists views (profiles) to which the user has access.
                    list(accountId: string, webPropertyId: string): Analytics.Schema.Profiles;
                    // Lists views (profiles) to which the user has access.
                    list(accountId: string, webPropertyId: string, optionalArgs: any): Analytics.Schema.Profiles;
                    // Updates an existing view (profile). This method supports patch semantics.
                    patch(
                        resource: Schema.Profile,
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                    ): Analytics.Schema.Profile;
                    // Deletes a view (profile).
                    remove(accountId: string, webPropertyId: string, profileId: string): void;
                    // Updates an existing view (profile).
                    update(
                        resource: Schema.Profile,
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                    ): Analytics.Schema.Profile;
                }
                interface RemarketingAudienceCollection {
                    // Gets a remarketing audience to which the user has access.
                    get(
                        accountId: string,
                        webPropertyId: string,
                        remarketingAudienceId: string,
                    ): Analytics.Schema.RemarketingAudience;
                    // Creates a new remarketing audience.
                    insert(
                        resource: Schema.RemarketingAudience,
                        accountId: string,
                        webPropertyId: string,
                    ): Analytics.Schema.RemarketingAudience;
                    // Lists remarketing audiences to which the user has access.
                    list(accountId: string, webPropertyId: string): Analytics.Schema.RemarketingAudiences;
                    // Lists remarketing audiences to which the user has access.
                    list(
                        accountId: string,
                        webPropertyId: string,
                        optionalArgs: any,
                    ): Analytics.Schema.RemarketingAudiences;
                    // Updates an existing remarketing audience. This method supports patch semantics.
                    patch(
                        resource: Schema.RemarketingAudience,
                        accountId: string,
                        webPropertyId: string,
                        remarketingAudienceId: string,
                    ): Analytics.Schema.RemarketingAudience;
                    // Delete a remarketing audience.
                    remove(accountId: string, webPropertyId: string, remarketingAudienceId: string): void;
                    // Updates an existing remarketing audience.
                    update(
                        resource: Schema.RemarketingAudience,
                        accountId: string,
                        webPropertyId: string,
                        remarketingAudienceId: string,
                    ): Analytics.Schema.RemarketingAudience;
                }
                interface SegmentsCollection {
                    // Lists segments to which the user has access.
                    list(): Analytics.Schema.Segments;
                    // Lists segments to which the user has access.
                    list(optionalArgs: any): Analytics.Schema.Segments;
                }
                interface UnsampledReportsCollection {
                    // Returns a single unsampled report.
                    get(
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                        unsampledReportId: string,
                    ): Analytics.Schema.UnsampledReport;
                    // Create a new unsampled report.
                    insert(
                        resource: Schema.UnsampledReport,
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                    ): Analytics.Schema.UnsampledReport;
                    // Lists unsampled reports to which the user has access.
                    list(
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                    ): Analytics.Schema.UnsampledReports;
                    // Lists unsampled reports to which the user has access.
                    list(
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                        optionalArgs: any,
                    ): Analytics.Schema.UnsampledReports;
                    // Deletes an unsampled report.
                    remove(
                        accountId: string,
                        webPropertyId: string,
                        profileId: string,
                        unsampledReportId: string,
                    ): void;
                }
                interface UploadsCollection {
                    // Delete data associated with a previous upload.
                    deleteUploadData(
                        resource: Schema.AnalyticsDataimportDeleteUploadDataRequest,
                        accountId: string,
                        webPropertyId: string,
                        customDataSourceId: string,
                    ): void;
                    // List uploads to which the user has access.
                    get(
                        accountId: string,
                        webPropertyId: string,
                        customDataSourceId: string,
                        uploadId: string,
                    ): Analytics.Schema.Upload;
                    // List uploads to which the user has access.
                    list(
                        accountId: string,
                        webPropertyId: string,
                        customDataSourceId: string,
                    ): Analytics.Schema.Uploads;
                    // List uploads to which the user has access.
                    list(
                        accountId: string,
                        webPropertyId: string,
                        customDataSourceId: string,
                        optionalArgs: any,
                    ): Analytics.Schema.Uploads;
                    // Upload data for a custom data source.
                    uploadData(
                        accountId: string,
                        webPropertyId: string,
                        customDataSourceId: string,
                    ): Analytics.Schema.Upload;
                    // Upload data for a custom data source.
                    uploadData(
                        accountId: string,
                        webPropertyId: string,
                        customDataSourceId: string,
                        mediaData: any,
                    ): Analytics.Schema.Upload;
                }
                interface WebPropertyAdWordsLinksCollection {
                    // Returns a web property-Google Ads link to which the user has access.
                    get(
                        accountId: string,
                        webPropertyId: string,
                        webPropertyAdWordsLinkId: string,
                    ): Analytics.Schema.EntityAdWordsLink;
                    // Creates a webProperty-Google Ads link.
                    insert(
                        resource: Schema.EntityAdWordsLink,
                        accountId: string,
                        webPropertyId: string,
                    ): Analytics.Schema.EntityAdWordsLink;
                    // Lists webProperty-Google Ads links for a given web property.
                    list(accountId: string, webPropertyId: string): Analytics.Schema.EntityAdWordsLinks;
                    // Lists webProperty-Google Ads links for a given web property.
                    list(
                        accountId: string,
                        webPropertyId: string,
                        optionalArgs: any,
                    ): Analytics.Schema.EntityAdWordsLinks;
                    // Updates an existing webProperty-Google Ads link. This method supports patch semantics.
                    patch(
                        resource: Schema.EntityAdWordsLink,
                        accountId: string,
                        webPropertyId: string,
                        webPropertyAdWordsLinkId: string,
                    ): Analytics.Schema.EntityAdWordsLink;
                    // Deletes a web property-Google Ads link.
                    remove(accountId: string, webPropertyId: string, webPropertyAdWordsLinkId: string): void;
                    // Updates an existing webProperty-Google Ads link.
                    update(
                        resource: Schema.EntityAdWordsLink,
                        accountId: string,
                        webPropertyId: string,
                        webPropertyAdWordsLinkId: string,
                    ): Analytics.Schema.EntityAdWordsLink;
                }
                interface WebpropertiesCollection {
                    // Gets a web property to which the user has access.
                    get(accountId: string, webPropertyId: string): Analytics.Schema.Webproperty;
                    // Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.
                    insert(resource: Schema.Webproperty, accountId: string): Analytics.Schema.Webproperty;
                    // Lists web properties to which the user has access.
                    list(accountId: string): Analytics.Schema.Webproperties;
                    // Lists web properties to which the user has access.
                    list(accountId: string, optionalArgs: any): Analytics.Schema.Webproperties;
                    // Updates an existing web property. This method supports patch semantics.
                    patch(
                        resource: Schema.Webproperty,
                        accountId: string,
                        webPropertyId: string,
                    ): Analytics.Schema.Webproperty;
                    // Updates an existing web property.
                    update(
                        resource: Schema.Webproperty,
                        accountId: string,
                        webPropertyId: string,
                    ): Analytics.Schema.Webproperty;
                }
                interface WebpropertyUserLinksCollection {
                    // Adds a new user to the given web property.
                    insert(
                        resource: Schema.EntityUserLink,
                        accountId: string,
                        webPropertyId: string,
                    ): Analytics.Schema.EntityUserLink;
                    // Lists webProperty-user links for a given web property.
                    list(accountId: string, webPropertyId: string): Analytics.Schema.EntityUserLinks;
                    // Lists webProperty-user links for a given web property.
                    list(accountId: string, webPropertyId: string, optionalArgs: any): Analytics.Schema.EntityUserLinks;
                    // Removes a user from the given web property.
                    remove(accountId: string, webPropertyId: string, linkId: string): void;
                    // Updates permissions for an existing user on the given web property.
                    update(
                        resource: Schema.EntityUserLink,
                        accountId: string,
                        webPropertyId: string,
                        linkId: string,
                    ): Analytics.Schema.EntityUserLink;
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
                Ga?: Analytics.Collection.Data.GaCollection | undefined;
                Mcf?: Analytics.Collection.Data.McfCollection | undefined;
                Realtime?: Analytics.Collection.Data.RealtimeCollection | undefined;
            }
            interface ManagementCollection {
                AccountSummaries?: Analytics.Collection.Management.AccountSummariesCollection | undefined;
                AccountUserLinks?: Analytics.Collection.Management.AccountUserLinksCollection | undefined;
                Accounts?: Analytics.Collection.Management.AccountsCollection | undefined;
                ClientId?: Analytics.Collection.Management.ClientIdCollection | undefined;
                CustomDataSources?: Analytics.Collection.Management.CustomDataSourcesCollection | undefined;
                CustomDimensions?: Analytics.Collection.Management.CustomDimensionsCollection | undefined;
                CustomMetrics?: Analytics.Collection.Management.CustomMetricsCollection | undefined;
                Experiments?: Analytics.Collection.Management.ExperimentsCollection | undefined;
                Filters?: Analytics.Collection.Management.FiltersCollection | undefined;
                Goals?: Analytics.Collection.Management.GoalsCollection | undefined;
                ProfileFilterLinks?: Analytics.Collection.Management.ProfileFilterLinksCollection | undefined;
                ProfileUserLinks?: Analytics.Collection.Management.ProfileUserLinksCollection | undefined;
                Profiles?: Analytics.Collection.Management.ProfilesCollection | undefined;
                RemarketingAudience?: Analytics.Collection.Management.RemarketingAudienceCollection | undefined;
                Segments?: Analytics.Collection.Management.SegmentsCollection | undefined;
                UnsampledReports?: Analytics.Collection.Management.UnsampledReportsCollection | undefined;
                Uploads?: Analytics.Collection.Management.UploadsCollection | undefined;
                WebPropertyAdWordsLinks?: Analytics.Collection.Management.WebPropertyAdWordsLinksCollection | undefined;
                Webproperties?: Analytics.Collection.Management.WebpropertiesCollection | undefined;
                WebpropertyUserLinks?: Analytics.Collection.Management.WebpropertyUserLinksCollection | undefined;
            }
            interface MetadataCollection {
                Columns?: Analytics.Collection.Metadata.ColumnsCollection | undefined;
            }
            interface ProvisioningCollection {
                // Creates an account ticket.
                createAccountTicket(resource: Schema.AccountTicket): Analytics.Schema.AccountTicket;
                // Provision account.
                createAccountTree(resource: Schema.AccountTreeRequest): Analytics.Schema.AccountTreeResponse;
            }
            interface UserDeletionCollection {
                UserDeletionRequest?: Analytics.Collection.UserDeletion.UserDeletionRequestCollection | undefined;
            }
        }
        namespace Schema {
            interface Account {
                childLink?: Analytics.Schema.AccountChildLink | undefined;
                created?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                permissions?: Analytics.Schema.AccountPermissions | undefined;
                selfLink?: string | undefined;
                starred?: boolean | undefined;
                updated?: string | undefined;
            }
            interface AccountChildLink {
                href?: string | undefined;
                type?: string | undefined;
            }
            interface AccountPermissions {
                effective?: string[] | undefined;
            }
            interface AccountRef {
                href?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
            }
            interface AccountSummaries {
                items?: Analytics.Schema.AccountSummary[] | undefined;
                itemsPerPage?: number | undefined;
                kind?: string | undefined;
                nextLink?: string | undefined;
                previousLink?: string | undefined;
                startIndex?: number | undefined;
                totalResults?: number | undefined;
                username?: string | undefined;
            }
            interface AccountSummary {
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                starred?: boolean | undefined;
                webProperties?: Analytics.Schema.WebPropertySummary[] | undefined;
            }
            interface AccountTicket {
                account?: Analytics.Schema.Account | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                profile?: Analytics.Schema.Profile | undefined;
                redirectUri?: string | undefined;
                webproperty?: Analytics.Schema.Webproperty | undefined;
            }
            interface AccountTreeRequest {
                accountName?: string | undefined;
                kind?: string | undefined;
                profileName?: string | undefined;
                timezone?: string | undefined;
                webpropertyName?: string | undefined;
                websiteUrl?: string | undefined;
            }
            interface AccountTreeResponse {
                account?: Analytics.Schema.Account | undefined;
                kind?: string | undefined;
                profile?: Analytics.Schema.Profile | undefined;
                webproperty?: Analytics.Schema.Webproperty | undefined;
            }
            interface Accounts {
                items?: Analytics.Schema.Account[] | undefined;
                itemsPerPage?: number | undefined;
                kind?: string | undefined;
                nextLink?: string | undefined;
                previousLink?: string | undefined;
                startIndex?: number | undefined;
                totalResults?: number | undefined;
                username?: string | undefined;
            }
            interface AdWordsAccount {
                autoTaggingEnabled?: boolean | undefined;
                customerId?: string | undefined;
                kind?: string | undefined;
            }
            interface AnalyticsDataimportDeleteUploadDataRequest {
                customDataImportUids?: string[] | undefined;
            }
            interface Column {
                attributes?: any;
                id?: string | undefined;
                kind?: string | undefined;
            }
            interface Columns {
                attributeNames?: string[] | undefined;
                etag?: string | undefined;
                items?: Analytics.Schema.Column[] | undefined;
                kind?: string | undefined;
                totalResults?: number | undefined;
            }
            interface CustomDataSource {
                accountId?: string | undefined;
                childLink?: Analytics.Schema.CustomDataSourceChildLink | undefined;
                created?: string | undefined;
                description?: string | undefined;
                id?: string | undefined;
                importBehavior?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                parentLink?: Analytics.Schema.CustomDataSourceParentLink | undefined;
                profilesLinked?: string[] | undefined;
                schema?: string[] | undefined;
                selfLink?: string | undefined;
                type?: string | undefined;
                updated?: string | undefined;
                uploadType?: string | undefined;
                webPropertyId?: string | undefined;
            }
            interface CustomDataSourceChildLink {
                href?: string | undefined;
                type?: string | undefined;
            }
            interface CustomDataSourceParentLink {
                href?: string | undefined;
                type?: string | undefined;
            }
            interface CustomDataSources {
                items?: Analytics.Schema.CustomDataSource[] | undefined;
                itemsPerPage?: number | undefined;
                kind?: string | undefined;
                nextLink?: string | undefined;
                previousLink?: string | undefined;
                startIndex?: number | undefined;
                totalResults?: number | undefined;
                username?: string | undefined;
            }
            interface CustomDimension {
                accountId?: string | undefined;
                active?: boolean | undefined;
                created?: string | undefined;
                id?: string | undefined;
                index?: number | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                parentLink?: Analytics.Schema.CustomDimensionParentLink | undefined;
                scope?: string | undefined;
                selfLink?: string | undefined;
                updated?: string | undefined;
                webPropertyId?: string | undefined;
            }
            interface CustomDimensionParentLink {
                href?: string | undefined;
                type?: string | undefined;
            }
            interface CustomDimensions {
                items?: Analytics.Schema.CustomDimension[] | undefined;
                itemsPerPage?: number | undefined;
                kind?: string | undefined;
                nextLink?: string | undefined;
                previousLink?: string | undefined;
                startIndex?: number | undefined;
                totalResults?: number | undefined;
                username?: string | undefined;
            }
            interface CustomMetric {
                accountId?: string | undefined;
                active?: boolean | undefined;
                created?: string | undefined;
                id?: string | undefined;
                index?: number | undefined;
                kind?: string | undefined;
                max_value?: string | undefined;
                min_value?: string | undefined;
                name?: string | undefined;
                parentLink?: Analytics.Schema.CustomMetricParentLink | undefined;
                scope?: string | undefined;
                selfLink?: string | undefined;
                type?: string | undefined;
                updated?: string | undefined;
                webPropertyId?: string | undefined;
            }
            interface CustomMetricParentLink {
                href?: string | undefined;
                type?: string | undefined;
            }
            interface CustomMetrics {
                items?: Analytics.Schema.CustomMetric[] | undefined;
                itemsPerPage?: number | undefined;
                kind?: string | undefined;
                nextLink?: string | undefined;
                previousLink?: string | undefined;
                startIndex?: number | undefined;
                totalResults?: number | undefined;
                username?: string | undefined;
            }
            interface EntityAdWordsLink {
                adWordsAccounts?: Analytics.Schema.AdWordsAccount[] | undefined;
                entity?: Analytics.Schema.EntityAdWordsLinkEntity | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                profileIds?: string[] | undefined;
                selfLink?: string | undefined;
            }
            interface EntityAdWordsLinkEntity {
                webPropertyRef?: Analytics.Schema.WebPropertyRef | undefined;
            }
            interface EntityAdWordsLinks {
                items?: Analytics.Schema.EntityAdWordsLink[] | undefined;
                itemsPerPage?: number | undefined;
                kind?: string | undefined;
                nextLink?: string | undefined;
                previousLink?: string | undefined;
                startIndex?: number | undefined;
                totalResults?: number | undefined;
            }
            interface EntityUserLink {
                entity?: Analytics.Schema.EntityUserLinkEntity | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                permissions?: Analytics.Schema.EntityUserLinkPermissions | undefined;
                selfLink?: string | undefined;
                userRef?: Analytics.Schema.UserRef | undefined;
            }
            interface EntityUserLinkEntity {
                accountRef?: Analytics.Schema.AccountRef | undefined;
                profileRef?: Analytics.Schema.ProfileRef | undefined;
                webPropertyRef?: Analytics.Schema.WebPropertyRef | undefined;
            }
            interface EntityUserLinkPermissions {
                effective?: string[] | undefined;
                local?: string[] | undefined;
            }
            interface EntityUserLinks {
                items?: Analytics.Schema.EntityUserLink[] | undefined;
                itemsPerPage?: number | undefined;
                kind?: string | undefined;
                nextLink?: string | undefined;
                previousLink?: string | undefined;
                startIndex?: number | undefined;
                totalResults?: number | undefined;
            }
            interface Experiment {
                accountId?: string | undefined;
                created?: string | undefined;
                description?: string | undefined;
                editableInGaUi?: boolean | undefined;
                endTime?: string | undefined;
                equalWeighting?: boolean | undefined;
                id?: string | undefined;
                internalWebPropertyId?: string | undefined;
                kind?: string | undefined;
                minimumExperimentLengthInDays?: number | undefined;
                name?: string | undefined;
                objectiveMetric?: string | undefined;
                optimizationType?: string | undefined;
                parentLink?: Analytics.Schema.ExperimentParentLink | undefined;
                profileId?: string | undefined;
                reasonExperimentEnded?: string | undefined;
                rewriteVariationUrlsAsOriginal?: boolean | undefined;
                selfLink?: string | undefined;
                servingFramework?: string | undefined;
                snippet?: string | undefined;
                startTime?: string | undefined;
                status?: string | undefined;
                trafficCoverage?: number | undefined;
                updated?: string | undefined;
                variations?: Analytics.Schema.ExperimentVariations[] | undefined;
                webPropertyId?: string | undefined;
                winnerConfidenceLevel?: number | undefined;
                winnerFound?: boolean | undefined;
            }
            interface ExperimentParentLink {
                href?: string | undefined;
                type?: string | undefined;
            }
            interface ExperimentVariations {
                name?: string | undefined;
                status?: string | undefined;
                url?: string | undefined;
                weight?: number | undefined;
                won?: boolean | undefined;
            }
            interface Experiments {
                items?: Analytics.Schema.Experiment[] | undefined;
                itemsPerPage?: number | undefined;
                kind?: string | undefined;
                nextLink?: string | undefined;
                previousLink?: string | undefined;
                startIndex?: number | undefined;
                totalResults?: number | undefined;
                username?: string | undefined;
            }
            interface Filter {
                accountId?: string | undefined;
                advancedDetails?: Analytics.Schema.FilterAdvancedDetails | undefined;
                created?: string | undefined;
                excludeDetails?: Analytics.Schema.FilterExpression | undefined;
                id?: string | undefined;
                includeDetails?: Analytics.Schema.FilterExpression | undefined;
                kind?: string | undefined;
                lowercaseDetails?: Analytics.Schema.FilterLowercaseDetails | undefined;
                name?: string | undefined;
                parentLink?: Analytics.Schema.FilterParentLink | undefined;
                searchAndReplaceDetails?: Analytics.Schema.FilterSearchAndReplaceDetails | undefined;
                selfLink?: string | undefined;
                type?: string | undefined;
                updated?: string | undefined;
                uppercaseDetails?: Analytics.Schema.FilterUppercaseDetails | undefined;
            }
            interface FilterAdvancedDetails {
                caseSensitive?: boolean | undefined;
                extractA?: string | undefined;
                extractB?: string | undefined;
                fieldA?: string | undefined;
                fieldAIndex?: number | undefined;
                fieldARequired?: boolean | undefined;
                fieldB?: string | undefined;
                fieldBIndex?: number | undefined;
                fieldBRequired?: boolean | undefined;
                outputConstructor?: string | undefined;
                outputToField?: string | undefined;
                outputToFieldIndex?: number | undefined;
                overrideOutputField?: boolean | undefined;
            }
            interface FilterExpression {
                caseSensitive?: boolean | undefined;
                expressionValue?: string | undefined;
                field?: string | undefined;
                fieldIndex?: number | undefined;
                kind?: string | undefined;
                matchType?: string | undefined;
            }
            interface FilterLowercaseDetails {
                field?: string | undefined;
                fieldIndex?: number | undefined;
            }
            interface FilterParentLink {
                href?: string | undefined;
                type?: string | undefined;
            }
            interface FilterRef {
                accountId?: string | undefined;
                href?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
            }
            interface FilterSearchAndReplaceDetails {
                caseSensitive?: boolean | undefined;
                field?: string | undefined;
                fieldIndex?: number | undefined;
                replaceString?: string | undefined;
                searchString?: string | undefined;
            }
            interface FilterUppercaseDetails {
                field?: string | undefined;
                fieldIndex?: number | undefined;
            }
            interface Filters {
                items?: Analytics.Schema.Filter[] | undefined;
                itemsPerPage?: number | undefined;
                kind?: string | undefined;
                nextLink?: string | undefined;
                previousLink?: string | undefined;
                startIndex?: number | undefined;
                totalResults?: number | undefined;
                username?: string | undefined;
            }
            interface GaData {
                columnHeaders?: Analytics.Schema.GaDataColumnHeaders[] | undefined;
                containsSampledData?: boolean | undefined;
                dataLastRefreshed?: string | undefined;
                dataTable?: Analytics.Schema.GaDataDataTable | undefined;
                id?: string | undefined;
                itemsPerPage?: number | undefined;
                kind?: string | undefined;
                nextLink?: string | undefined;
                previousLink?: string | undefined;
                profileInfo?: Analytics.Schema.GaDataProfileInfo | undefined;
                query?: Analytics.Schema.GaDataQuery | undefined;
                rows?: string[][] | undefined;
                sampleSize?: string | undefined;
                sampleSpace?: string | undefined;
                selfLink?: string | undefined;
                totalResults?: number | undefined;
                totalsForAllResults?: Record<string, string> | undefined;
            }
            interface GaDataColumnHeaders {
                columnType?: string | undefined;
                dataType?: string | undefined;
                name?: string | undefined;
            }
            interface GaDataDataTable {
                cols?: Analytics.Schema.GaDataDataTableCols[] | undefined;
                rows?: Analytics.Schema.GaDataDataTableRows[] | undefined;
            }
            interface GaDataDataTableCols {
                id?: string | undefined;
                label?: string | undefined;
                type?: string | undefined;
            }
            interface GaDataDataTableRows {
                c?: Analytics.Schema.GaDataDataTableRowsC[] | undefined;
            }
            interface GaDataDataTableRowsC {
                v?: string | undefined;
            }
            interface GaDataProfileInfo {
                accountId?: string | undefined;
                internalWebPropertyId?: string | undefined;
                profileId?: string | undefined;
                profileName?: string | undefined;
                tableId?: string | undefined;
                webPropertyId?: string | undefined;
            }
            interface GaDataQuery {
                /** The unique table ID of the form ga:XXXX, where XXXX is the Analytics view (profile) ID for which the query will retrieve the data. */
                ids?: string;
                /** Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or NdaysAgo where N is a positive integer). */
                "start-date"?: string;
                /** End date for fetching Analytics data. Request can specify an end date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or NdaysAgo where N is a positive integer). */
                "end-date"?: string;
                /** A list of comma-separated metrics, such as ga:sessions,ga:bounces. */
                metrics?: string;
                /** A list of comma-separated dimensions for your Analytics data, such as ga:browser,ga:city. */
                dimensions?: string;
                /** A list of comma-separated dimensions and metrics indicating the sorting order and sorting direction for the returned data. */
                sort?: string;
                /** Dimension or metric filters that restrict the data returned for your request. */
                filters?: string;
                /** Segments the data returned for your request. */
                segment?: string;
                /**
                 * The desired sampling level. Allowed Values:
                 * DEFAULT — Returns response with a sample size that balances speed and accuracy.
                 * FASTER — Returns a fast response with a smaller sample size.
                 * HIGHER_PRECISION — Returns a more accurate response using a large sample size, but this may result in the response being slower.
                 */
                samplingLevel?: "DEFAULT" | "FASTER" | "HIGHER_PRECISION";
                /** The first row of data to retrieve, starting at 1. Use this parameter as a pagination mechanism along with the max-results parameter. */
                "start-index"?: number;
                /** The maximum number of rows to include in the response. */
                "max-results"?: number;
            }
            interface Goal {
                accountId?: string | undefined;
                active?: boolean | undefined;
                created?: string | undefined;
                eventDetails?: Analytics.Schema.GoalEventDetails | undefined;
                id?: string | undefined;
                internalWebPropertyId?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                parentLink?: Analytics.Schema.GoalParentLink | undefined;
                profileId?: string | undefined;
                selfLink?: string | undefined;
                type?: string | undefined;
                updated?: string | undefined;
                urlDestinationDetails?: Analytics.Schema.GoalUrlDestinationDetails | undefined;
                value?: number | undefined;
                visitNumPagesDetails?: Analytics.Schema.GoalVisitNumPagesDetails | undefined;
                visitTimeOnSiteDetails?: Analytics.Schema.GoalVisitTimeOnSiteDetails | undefined;
                webPropertyId?: string | undefined;
            }
            interface GoalEventDetails {
                eventConditions?: GoalEventDetailsEventConditions[] | undefined;
                useEventValue?: boolean | undefined;
            }
            interface GoalEventDetailsEventConditions {
                comparisonType?: string | undefined;
                comparisonValue?: string | undefined;
                expression?: string | undefined;
                matchType?: string | undefined;
                type?: string | undefined;
            }
            interface GoalParentLink {
                href?: string | undefined;
                type?: string | undefined;
            }
            interface GoalUrlDestinationDetails {
                caseSensitive?: boolean | undefined;
                firstStepRequired?: boolean | undefined;
                matchType?: string | undefined;
                steps?: GoalUrlDestinationDetailsSteps[] | undefined;
                url?: string | undefined;
            }
            interface GoalUrlDestinationDetailsSteps {
                name?: string | undefined;
                number?: number | undefined;
                url?: string | undefined;
            }
            interface GoalVisitNumPagesDetails {
                comparisonType?: string | undefined;
                comparisonValue?: string | undefined;
            }
            interface GoalVisitTimeOnSiteDetails {
                comparisonType?: string | undefined;
                comparisonValue?: string | undefined;
            }
            interface Goals {
                items?: Goal[] | undefined;
                itemsPerPage?: number | undefined;
                kind?: string | undefined;
                nextLink?: string | undefined;
                previousLink?: string | undefined;
                startIndex?: number | undefined;
                totalResults?: number | undefined;
                username?: string | undefined;
            }
            interface HashClientIdRequest {
                clientId?: string | undefined;
                kind?: string | undefined;
                webPropertyId?: string | undefined;
            }
            interface HashClientIdResponse {
                clientId?: string | undefined;
                hashedClientId?: string | undefined;
                kind?: string | undefined;
                webPropertyId?: string | undefined;
            }
            interface IncludeConditions {
                daysToLookBack?: number | undefined;
                isSmartList?: boolean | undefined;
                kind?: string | undefined;
                membershipDurationDays?: number | undefined;
                segment?: string | undefined;
            }
            interface LinkedForeignAccount {
                accountId?: string | undefined;
                eligibleForSearch?: boolean | undefined;
                id?: string | undefined;
                internalWebPropertyId?: string | undefined;
                kind?: string | undefined;
                linkedAccountId?: string | undefined;
                remarketingAudienceId?: string | undefined;
                status?: string | undefined;
                type?: string | undefined;
                webPropertyId?: string | undefined;
            }
            interface McfData {
                columnHeaders?: McfDataColumnHeaders[] | undefined;
                containsSampledData?: boolean | undefined;
                id?: string | undefined;
                itemsPerPage?: number | undefined;
                kind?: string | undefined;
                nextLink?: string | undefined;
                previousLink?: string | undefined;
                profileInfo?: McfDataProfileInfo | undefined;
                query?: McfDataQuery | undefined;
                rows?: McfDataRows[][] | undefined;
                sampleSize?: string | undefined;
                sampleSpace?: string | undefined;
                selfLink?: string | undefined;
                totalResults?: number | undefined;
                totalsForAllResults?: Record<string, string> | undefined;
            }
            interface McfDataColumnHeaders {
                columnType?: string | undefined;
                dataType?: string | undefined;
                name?: string | undefined;
            }
            interface McfDataProfileInfo {
                accountId?: string | undefined;
                internalWebPropertyId?: string | undefined;
                profileId?: string | undefined;
                profileName?: string | undefined;
                tableId?: string | undefined;
                webPropertyId?: string | undefined;
            }
            interface McfDataQuery {
                dimensions?: string | undefined;
                end_date?: string | undefined;
                filters?: string | undefined;
                ids?: string | undefined;
                max_results?: number | undefined;
                metrics?: string[] | undefined;
                samplingLevel?: string | undefined;
                segment?: string | undefined;
                sort?: string[] | undefined;
                start_date?: string | undefined;
                start_index?: number | undefined;
            }
            interface McfDataRows {
                conversionPathValue?: McfDataRowsConversionPathValue[] | undefined;
                primitiveValue?: string | undefined;
            }
            interface McfDataRowsConversionPathValue {
                interactionType?: string | undefined;
                nodeValue?: string | undefined;
            }
            interface Profile {
                accountId?: string | undefined;
                botFilteringEnabled?: boolean | undefined;
                childLink?: ProfileChildLink | undefined;
                created?: string | undefined;
                currency?: string | undefined;
                defaultPage?: string | undefined;
                eCommerceTracking?: boolean | undefined;
                enhancedECommerceTracking?: boolean | undefined;
                excludeQueryParameters?: string | undefined;
                id?: string | undefined;
                internalWebPropertyId?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                parentLink?: ProfileParentLink | undefined;
                permissions?: ProfilePermissions | undefined;
                selfLink?: string | undefined;
                siteSearchCategoryParameters?: string | undefined;
                siteSearchQueryParameters?: string | undefined;
                starred?: boolean | undefined;
                stripSiteSearchCategoryParameters?: boolean | undefined;
                stripSiteSearchQueryParameters?: boolean | undefined;
                timezone?: string | undefined;
                type?: string | undefined;
                updated?: string | undefined;
                webPropertyId?: string | undefined;
                websiteUrl?: string | undefined;
            }
            interface ProfileChildLink {
                href?: string | undefined;
                type?: string | undefined;
            }
            interface ProfileFilterLink {
                filterRef?: Analytics.Schema.FilterRef | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                profileRef?: ProfileRef | undefined;
                rank?: number | undefined;
                selfLink?: string | undefined;
            }
            interface ProfileFilterLinks {
                items?: ProfileFilterLink[] | undefined;
                itemsPerPage?: number | undefined;
                kind?: string | undefined;
                nextLink?: string | undefined;
                previousLink?: string | undefined;
                startIndex?: number | undefined;
                totalResults?: number | undefined;
                username?: string | undefined;
            }
            interface ProfileParentLink {
                href?: string | undefined;
                type?: string | undefined;
            }
            interface ProfilePermissions {
                effective?: string[] | undefined;
            }
            interface ProfileRef {
                accountId?: string | undefined;
                href?: string | undefined;
                id?: string | undefined;
                internalWebPropertyId?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                webPropertyId?: string | undefined;
            }
            interface ProfileSummary {
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                starred?: boolean | undefined;
                type?: string | undefined;
            }
            interface Profiles {
                items?: Profile[] | undefined;
                itemsPerPage?: number | undefined;
                kind?: string | undefined;
                nextLink?: string | undefined;
                previousLink?: string | undefined;
                startIndex?: number | undefined;
                totalResults?: number | undefined;
                username?: string | undefined;
            }
            interface RealtimeData {
                columnHeaders?: RealtimeDataColumnHeaders[] | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                profileInfo?: RealtimeDataProfileInfo | undefined;
                query?: RealtimeDataQuery | undefined;
                rows?: string[][] | undefined;
                selfLink?: string | undefined;
                totalResults?: number | undefined;
                totalsForAllResults?: Record<string, string> | undefined;
            }
            interface RealtimeDataColumnHeaders {
                columnType?: string | undefined;
                dataType?: string | undefined;
                name?: string | undefined;
            }
            interface RealtimeDataProfileInfo {
                accountId?: string | undefined;
                internalWebPropertyId?: string | undefined;
                profileId?: string | undefined;
                profileName?: string | undefined;
                tableId?: string | undefined;
                webPropertyId?: string | undefined;
            }
            interface RealtimeDataQuery {
                dimensions?: string | undefined;
                filters?: string | undefined;
                ids?: string | undefined;
                max_results?: number | undefined;
                metrics?: string[] | undefined;
                sort?: string[] | undefined;
            }
            interface RemarketingAudience {
                accountId?: string | undefined;
                audienceDefinition?: RemarketingAudienceAudienceDefinition | undefined;
                audienceType?: string | undefined;
                created?: string | undefined;
                description?: string | undefined;
                id?: string | undefined;
                internalWebPropertyId?: string | undefined;
                kind?: string | undefined;
                linkedAdAccounts?: LinkedForeignAccount[] | undefined;
                linkedViews?: string[] | undefined;
                name?: string | undefined;
                stateBasedAudienceDefinition?: RemarketingAudienceStateBasedAudienceDefinition | undefined;
                updated?: string | undefined;
                webPropertyId?: string | undefined;
            }
            interface RemarketingAudienceAudienceDefinition {
                includeConditions?: IncludeConditions | undefined;
            }
            interface RemarketingAudienceStateBasedAudienceDefinition {
                excludeConditions?: RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions | undefined;
                includeConditions?: IncludeConditions | undefined;
            }
            interface RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions {
                exclusionDuration?: string | undefined;
                segment?: string | undefined;
            }
            interface RemarketingAudiences {
                items?: RemarketingAudience[] | undefined;
                itemsPerPage?: number | undefined;
                kind?: string | undefined;
                nextLink?: string | undefined;
                previousLink?: string | undefined;
                startIndex?: number | undefined;
                totalResults?: number | undefined;
                username?: string | undefined;
            }
            interface Segment {
                created?: string | undefined;
                definition?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                segmentId?: string | undefined;
                selfLink?: string | undefined;
                type?: string | undefined;
                updated?: string | undefined;
            }
            interface Segments {
                items?: Segment[] | undefined;
                itemsPerPage?: number | undefined;
                kind?: string | undefined;
                nextLink?: string | undefined;
                previousLink?: string | undefined;
                startIndex?: number | undefined;
                totalResults?: number | undefined;
                username?: string | undefined;
            }
            interface UnsampledReport {
                accountId?: string | undefined;
                cloudStorageDownloadDetails?: UnsampledReportCloudStorageDownloadDetails | undefined;
                created?: string | undefined;
                dimensions?: string | undefined;
                downloadType?: string | undefined;
                driveDownloadDetails?: UnsampledReportDriveDownloadDetails | undefined;
                end_date?: string | undefined;
                filters?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                metrics?: string | undefined;
                profileId?: string | undefined;
                segment?: string | undefined;
                selfLink?: string | undefined;
                start_date?: string | undefined;
                status?: string | undefined;
                title?: string | undefined;
                updated?: string | undefined;
                webPropertyId?: string | undefined;
            }
            interface UnsampledReportCloudStorageDownloadDetails {
                bucketId?: string | undefined;
                objectId?: string | undefined;
            }
            interface UnsampledReportDriveDownloadDetails {
                documentId?: string | undefined;
            }
            interface UnsampledReports {
                items?: UnsampledReport[] | undefined;
                itemsPerPage?: number | undefined;
                kind?: string | undefined;
                nextLink?: string | undefined;
                previousLink?: string | undefined;
                startIndex?: number | undefined;
                totalResults?: number | undefined;
                username?: string | undefined;
            }
            interface Upload {
                accountId?: string | undefined;
                customDataSourceId?: string | undefined;
                errors?: string[] | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                status?: string | undefined;
                uploadTime?: string | undefined;
            }
            interface Uploads {
                items?: Upload[] | undefined;
                itemsPerPage?: number | undefined;
                kind?: string | undefined;
                nextLink?: string | undefined;
                previousLink?: string | undefined;
                startIndex?: number | undefined;
                totalResults?: number | undefined;
            }
            interface UserDeletionRequest {
                deletionRequestTime?: string | undefined;
                firebaseProjectId?: string | undefined;
                id?: UserDeletionRequestId | undefined;
                kind?: string | undefined;
                webPropertyId?: string | undefined;
            }
            interface UserDeletionRequestId {
                type?: string | undefined;
                userId?: string | undefined;
            }
            interface UserRef {
                email?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
            }
            interface WebPropertyRef {
                accountId?: string | undefined;
                href?: string | undefined;
                id?: string | undefined;
                internalWebPropertyId?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
            }
            interface WebPropertySummary {
                id?: string | undefined;
                internalWebPropertyId?: string | undefined;
                kind?: string | undefined;
                level?: string | undefined;
                name?: string | undefined;
                profiles?: ProfileSummary[] | undefined;
                starred?: boolean | undefined;
                websiteUrl?: string | undefined;
            }
            interface Webproperties {
                items?: Webproperty[] | undefined;
                itemsPerPage?: number | undefined;
                kind?: string | undefined;
                nextLink?: string | undefined;
                previousLink?: string | undefined;
                startIndex?: number | undefined;
                totalResults?: number | undefined;
                username?: string | undefined;
            }
            interface Webproperty {
                accountId?: string | undefined;
                childLink?: WebpropertyChildLink | undefined;
                created?: string | undefined;
                dataRetentionResetOnNewActivity?: boolean | undefined;
                dataRetentionTtl?: string | undefined;
                defaultProfileId?: string | undefined;
                id?: string | undefined;
                industryVertical?: string | undefined;
                internalWebPropertyId?: string | undefined;
                kind?: string | undefined;
                level?: string | undefined;
                name?: string | undefined;
                parentLink?: WebpropertyParentLink | undefined;
                permissions?: WebpropertyPermissions | undefined;
                profileCount?: number | undefined;
                selfLink?: string | undefined;
                starred?: boolean | undefined;
                updated?: string | undefined;
                websiteUrl?: string | undefined;
            }
            interface WebpropertyChildLink {
                href?: string | undefined;
                type?: string | undefined;
            }
            interface WebpropertyParentLink {
                href?: string | undefined;
                type?: string | undefined;
            }
            interface WebpropertyPermissions {
                effective?: string[] | undefined;
            }
        }
    }
    interface Analytics {
        Data?: Analytics.Collection.DataCollection | undefined;
        Management?: Analytics.Collection.ManagementCollection | undefined;
        Metadata?: Analytics.Collection.MetadataCollection | undefined;
        Provisioning?: Analytics.Collection.ProvisioningCollection | undefined;
        UserDeletion?: Analytics.Collection.UserDeletionCollection | undefined;
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
