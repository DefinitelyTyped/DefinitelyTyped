declare namespace GoogleAppsScript {
    namespace Dfareporting {
        namespace Collection {
            namespace Reports {
                interface CompatibleFieldsCollection {
                    // Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.
                    query(resource: Schema.Report, profileId: string): Dfareporting.Schema.CompatibleFields;
                }
                interface FilesCollection {
                    // Retrieves a report file. This method supports media download.
                    get(profileId: string, reportId: string, fileId: string): Dfareporting.Schema.File;
                    // Lists files for a report.
                    list(profileId: string, reportId: string): Dfareporting.Schema.FileList;
                    // Lists files for a report.
                    list(profileId: string, reportId: string, optionalArgs: object): Dfareporting.Schema.FileList;
                }
            }
            interface AccountActiveAdSummariesCollection {
                // Gets the account's active ad summary by account ID.
                get(profileId: string, summaryAccountId: string): Dfareporting.Schema.AccountActiveAdSummary;
            }
            interface AccountPermissionGroupsCollection {
                // Gets one account permission group by ID.
                get(profileId: string, id: string): Dfareporting.Schema.AccountPermissionGroup;
                // Retrieves the list of account permission groups.
                list(profileId: string): Dfareporting.Schema.AccountPermissionGroupsListResponse;
            }
            interface AccountPermissionsCollection {
                // Gets one account permission by ID.
                get(profileId: string, id: string): Dfareporting.Schema.AccountPermission;
                // Retrieves the list of account permissions.
                list(profileId: string): Dfareporting.Schema.AccountPermissionsListResponse;
            }
            interface AccountUserProfilesCollection {
                // Gets one account user profile by ID.
                get(profileId: string, id: string): Dfareporting.Schema.AccountUserProfile;
                // Inserts a new account user profile.
                insert(resource: Schema.AccountUserProfile, profileId: string): Dfareporting.Schema.AccountUserProfile;
                // Retrieves a list of account user profiles, possibly filtered. This method supports paging.
                list(profileId: string): Dfareporting.Schema.AccountUserProfilesListResponse;
                // Retrieves a list of account user profiles, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.AccountUserProfilesListResponse;
                // Updates an existing account user profile. This method supports patch semantics.
                patch(
                    resource: Schema.AccountUserProfile,
                    profileId: string,
                    id: string,
                ): Dfareporting.Schema.AccountUserProfile;
                // Updates an existing account user profile.
                update(resource: Schema.AccountUserProfile, profileId: string): Dfareporting.Schema.AccountUserProfile;
            }
            interface AccountsCollection {
                // Gets one account by ID.
                get(profileId: string, id: string): Dfareporting.Schema.Account;
                // Retrieves the list of accounts, possibly filtered. This method supports paging.
                list(profileId: string): Dfareporting.Schema.AccountsListResponse;
                // Retrieves the list of accounts, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.AccountsListResponse;
                // Updates an existing account. This method supports patch semantics.
                patch(resource: Schema.Account, profileId: string, id: string): Dfareporting.Schema.Account;
                // Updates an existing account.
                update(resource: Schema.Account, profileId: string): Dfareporting.Schema.Account;
            }
            interface AdsCollection {
                // Gets one ad by ID.
                get(profileId: string, id: string): Dfareporting.Schema.Ad;
                // Inserts a new ad.
                insert(resource: Schema.Ad, profileId: string): Dfareporting.Schema.Ad;
                // Retrieves a list of ads, possibly filtered. This method supports paging.
                list(profileId: string): Dfareporting.Schema.AdsListResponse;
                // Retrieves a list of ads, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.AdsListResponse;
                // Updates an existing ad. This method supports patch semantics.
                patch(resource: Schema.Ad, profileId: string, id: string): Dfareporting.Schema.Ad;
                // Updates an existing ad.
                update(resource: Schema.Ad, profileId: string): Dfareporting.Schema.Ad;
            }
            interface AdvertiserGroupsCollection {
                // Gets one advertiser group by ID.
                get(profileId: string, id: string): Dfareporting.Schema.AdvertiserGroup;
                // Inserts a new advertiser group.
                insert(resource: Schema.AdvertiserGroup, profileId: string): Dfareporting.Schema.AdvertiserGroup;
                // Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
                list(profileId: string): Dfareporting.Schema.AdvertiserGroupsListResponse;
                // Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.AdvertiserGroupsListResponse;
                // Updates an existing advertiser group. This method supports patch semantics.
                patch(
                    resource: Schema.AdvertiserGroup,
                    profileId: string,
                    id: string,
                ): Dfareporting.Schema.AdvertiserGroup;
                // Deletes an existing advertiser group.
                remove(profileId: string, id: string): void;
                // Updates an existing advertiser group.
                update(resource: Schema.AdvertiserGroup, profileId: string): Dfareporting.Schema.AdvertiserGroup;
            }
            interface AdvertiserLandingPagesCollection {
                // Gets one landing page by ID.
                get(profileId: string, id: string): Dfareporting.Schema.LandingPage;
                // Inserts a new landing page.
                insert(resource: Schema.LandingPage, profileId: string): Dfareporting.Schema.LandingPage;
                // Retrieves a list of landing pages.
                list(profileId: string): Dfareporting.Schema.AdvertiserLandingPagesListResponse;
                // Retrieves a list of landing pages.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.AdvertiserLandingPagesListResponse;
                // Updates an existing landing page. This method supports patch semantics.
                patch(resource: Schema.LandingPage, profileId: string, id: string): Dfareporting.Schema.LandingPage;
                // Updates an existing landing page.
                update(resource: Schema.LandingPage, profileId: string): Dfareporting.Schema.LandingPage;
            }
            interface AdvertisersCollection {
                // Gets one advertiser by ID.
                get(profileId: string, id: string): Dfareporting.Schema.Advertiser;
                // Inserts a new advertiser.
                insert(resource: Schema.Advertiser, profileId: string): Dfareporting.Schema.Advertiser;
                // Retrieves a list of advertisers, possibly filtered. This method supports paging.
                list(profileId: string): Dfareporting.Schema.AdvertisersListResponse;
                // Retrieves a list of advertisers, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.AdvertisersListResponse;
                // Updates an existing advertiser. This method supports patch semantics.
                patch(resource: Schema.Advertiser, profileId: string, id: string): Dfareporting.Schema.Advertiser;
                // Updates an existing advertiser.
                update(resource: Schema.Advertiser, profileId: string): Dfareporting.Schema.Advertiser;
            }
            interface BrowsersCollection {
                // Retrieves a list of browsers.
                list(profileId: string): Dfareporting.Schema.BrowsersListResponse;
            }
            interface CampaignCreativeAssociationsCollection {
                // Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.
                insert(
                    resource: Schema.CampaignCreativeAssociation,
                    profileId: string,
                    campaignId: string,
                ): Dfareporting.Schema.CampaignCreativeAssociation;
                // Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.
                list(
                    profileId: string,
                    campaignId: string,
                ): Dfareporting.Schema.CampaignCreativeAssociationsListResponse;
                // Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.
                list(
                    profileId: string,
                    campaignId: string,
                    optionalArgs: object,
                ): Dfareporting.Schema.CampaignCreativeAssociationsListResponse;
            }
            interface CampaignsCollection {
                // Gets one campaign by ID.
                get(profileId: string, id: string): Dfareporting.Schema.Campaign;
                // Inserts a new campaign.
                insert(resource: Schema.Campaign, profileId: string): Dfareporting.Schema.Campaign;
                // Retrieves a list of campaigns, possibly filtered. This method supports paging.
                list(profileId: string): Dfareporting.Schema.CampaignsListResponse;
                // Retrieves a list of campaigns, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.CampaignsListResponse;
                // Updates an existing campaign. This method supports patch semantics.
                patch(resource: Schema.Campaign, profileId: string, id: string): Dfareporting.Schema.Campaign;
                // Updates an existing campaign.
                update(resource: Schema.Campaign, profileId: string): Dfareporting.Schema.Campaign;
            }
            interface ChangeLogsCollection {
                // Gets one change log by ID.
                get(profileId: string, id: string): Dfareporting.Schema.ChangeLog;
                // Retrieves a list of change logs. This method supports paging.
                list(profileId: string): Dfareporting.Schema.ChangeLogsListResponse;
                // Retrieves a list of change logs. This method supports paging.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.ChangeLogsListResponse;
            }
            interface CitiesCollection {
                // Retrieves a list of cities, possibly filtered.
                list(profileId: string): Dfareporting.Schema.CitiesListResponse;
                // Retrieves a list of cities, possibly filtered.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.CitiesListResponse;
            }
            interface ConnectionTypesCollection {
                // Gets one connection type by ID.
                get(profileId: string, id: string): Dfareporting.Schema.ConnectionType;
                // Retrieves a list of connection types.
                list(profileId: string): Dfareporting.Schema.ConnectionTypesListResponse;
            }
            interface ContentCategoriesCollection {
                // Gets one content category by ID.
                get(profileId: string, id: string): Dfareporting.Schema.ContentCategory;
                // Inserts a new content category.
                insert(resource: Schema.ContentCategory, profileId: string): Dfareporting.Schema.ContentCategory;
                // Retrieves a list of content categories, possibly filtered. This method supports paging.
                list(profileId: string): Dfareporting.Schema.ContentCategoriesListResponse;
                // Retrieves a list of content categories, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.ContentCategoriesListResponse;
                // Updates an existing content category. This method supports patch semantics.
                patch(
                    resource: Schema.ContentCategory,
                    profileId: string,
                    id: string,
                ): Dfareporting.Schema.ContentCategory;
                // Deletes an existing content category.
                remove(profileId: string, id: string): void;
                // Updates an existing content category.
                update(resource: Schema.ContentCategory, profileId: string): Dfareporting.Schema.ContentCategory;
            }
            interface ConversionsCollection {
                // Inserts conversions.
                batchinsert(
                    resource: Schema.ConversionsBatchInsertRequest,
                    profileId: string,
                ): Dfareporting.Schema.ConversionsBatchInsertResponse;
                // Updates existing conversions.
                batchupdate(
                    resource: Schema.ConversionsBatchUpdateRequest,
                    profileId: string,
                ): Dfareporting.Schema.ConversionsBatchUpdateResponse;
            }
            interface CountriesCollection {
                // Gets one country by ID.
                get(profileId: string, dartId: string): Dfareporting.Schema.Country;
                // Retrieves a list of countries.
                list(profileId: string): Dfareporting.Schema.CountriesListResponse;
            }
            interface CreativeAssetsCollection {
                // Inserts a new creative asset.
                insert(
                    resource: Schema.CreativeAssetMetadata,
                    profileId: string,
                    advertiserId: string,
                ): Dfareporting.Schema.CreativeAssetMetadata;
                // Inserts a new creative asset.
                insert(
                    resource: Schema.CreativeAssetMetadata,
                    profileId: string,
                    advertiserId: string,
                    mediaData: any,
                ): Dfareporting.Schema.CreativeAssetMetadata;
            }
            interface CreativeFieldValuesCollection {
                // Gets one creative field value by ID.
                get(profileId: string, creativeFieldId: string, id: string): Dfareporting.Schema.CreativeFieldValue;
                // Inserts a new creative field value.
                insert(
                    resource: Schema.CreativeFieldValue,
                    profileId: string,
                    creativeFieldId: string,
                ): Dfareporting.Schema.CreativeFieldValue;
                // Retrieves a list of creative field values, possibly filtered. This method supports paging.
                list(profileId: string, creativeFieldId: string): Dfareporting.Schema.CreativeFieldValuesListResponse;
                // Retrieves a list of creative field values, possibly filtered. This method supports paging.
                list(
                    profileId: string,
                    creativeFieldId: string,
                    optionalArgs: object,
                ): Dfareporting.Schema.CreativeFieldValuesListResponse;
                // Updates an existing creative field value. This method supports patch semantics.
                patch(
                    resource: Schema.CreativeFieldValue,
                    profileId: string,
                    creativeFieldId: string,
                    id: string,
                ): Dfareporting.Schema.CreativeFieldValue;
                // Deletes an existing creative field value.
                remove(profileId: string, creativeFieldId: string, id: string): void;
                // Updates an existing creative field value.
                update(
                    resource: Schema.CreativeFieldValue,
                    profileId: string,
                    creativeFieldId: string,
                ): Dfareporting.Schema.CreativeFieldValue;
            }
            interface CreativeFieldsCollection {
                // Gets one creative field by ID.
                get(profileId: string, id: string): Dfareporting.Schema.CreativeField;
                // Inserts a new creative field.
                insert(resource: Schema.CreativeField, profileId: string): Dfareporting.Schema.CreativeField;
                // Retrieves a list of creative fields, possibly filtered. This method supports paging.
                list(profileId: string): Dfareporting.Schema.CreativeFieldsListResponse;
                // Retrieves a list of creative fields, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.CreativeFieldsListResponse;
                // Updates an existing creative field. This method supports patch semantics.
                patch(resource: Schema.CreativeField, profileId: string, id: string): Dfareporting.Schema.CreativeField;
                // Deletes an existing creative field.
                remove(profileId: string, id: string): void;
                // Updates an existing creative field.
                update(resource: Schema.CreativeField, profileId: string): Dfareporting.Schema.CreativeField;
            }
            interface CreativeGroupsCollection {
                // Gets one creative group by ID.
                get(profileId: string, id: string): Dfareporting.Schema.CreativeGroup;
                // Inserts a new creative group.
                insert(resource: Schema.CreativeGroup, profileId: string): Dfareporting.Schema.CreativeGroup;
                // Retrieves a list of creative groups, possibly filtered. This method supports paging.
                list(profileId: string): Dfareporting.Schema.CreativeGroupsListResponse;
                // Retrieves a list of creative groups, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.CreativeGroupsListResponse;
                // Updates an existing creative group. This method supports patch semantics.
                patch(resource: Schema.CreativeGroup, profileId: string, id: string): Dfareporting.Schema.CreativeGroup;
                // Updates an existing creative group.
                update(resource: Schema.CreativeGroup, profileId: string): Dfareporting.Schema.CreativeGroup;
            }
            interface CreativesCollection {
                // Gets one creative by ID.
                get(profileId: string, id: string): Dfareporting.Schema.Creative;
                // Inserts a new creative.
                insert(resource: Schema.Creative, profileId: string): Dfareporting.Schema.Creative;
                // Retrieves a list of creatives, possibly filtered. This method supports paging.
                list(profileId: string): Dfareporting.Schema.CreativesListResponse;
                // Retrieves a list of creatives, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.CreativesListResponse;
                // Updates an existing creative. This method supports patch semantics.
                patch(resource: Schema.Creative, profileId: string, id: string): Dfareporting.Schema.Creative;
                // Updates an existing creative.
                update(resource: Schema.Creative, profileId: string): Dfareporting.Schema.Creative;
            }
            interface DimensionValuesCollection {
                // Retrieves list of report dimension values for a list of filters.
                query(
                    resource: Schema.DimensionValueRequest,
                    profileId: string,
                ): Dfareporting.Schema.DimensionValueList;
                // Retrieves list of report dimension values for a list of filters.
                query(
                    resource: Schema.DimensionValueRequest,
                    profileId: string,
                    optionalArgs: object,
                ): Dfareporting.Schema.DimensionValueList;
            }
            interface DirectorySitesCollection {
                // Gets one directory site by ID.
                get(profileId: string, id: string): Dfareporting.Schema.DirectorySite;
                // Inserts a new directory site.
                insert(resource: Schema.DirectorySite, profileId: string): Dfareporting.Schema.DirectorySite;
                // Retrieves a list of directory sites, possibly filtered. This method supports paging.
                list(profileId: string): Dfareporting.Schema.DirectorySitesListResponse;
                // Retrieves a list of directory sites, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.DirectorySitesListResponse;
            }
            interface DynamicTargetingKeysCollection {
                // Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.
                insert(
                    resource: Schema.DynamicTargetingKey,
                    profileId: string,
                ): Dfareporting.Schema.DynamicTargetingKey;
                // Retrieves a list of dynamic targeting keys.
                list(profileId: string): Dfareporting.Schema.DynamicTargetingKeysListResponse;
                // Retrieves a list of dynamic targeting keys.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.DynamicTargetingKeysListResponse;
                // Deletes an existing dynamic targeting key.
                remove(profileId: string, objectId: string, name: string, objectType: string): void;
            }
            interface EventTagsCollection {
                // Gets one event tag by ID.
                get(profileId: string, id: string): Dfareporting.Schema.EventTag;
                // Inserts a new event tag.
                insert(resource: Schema.EventTag, profileId: string): Dfareporting.Schema.EventTag;
                // Retrieves a list of event tags, possibly filtered.
                list(profileId: string): Dfareporting.Schema.EventTagsListResponse;
                // Retrieves a list of event tags, possibly filtered.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.EventTagsListResponse;
                // Updates an existing event tag. This method supports patch semantics.
                patch(resource: Schema.EventTag, profileId: string, id: string): Dfareporting.Schema.EventTag;
                // Deletes an existing event tag.
                remove(profileId: string, id: string): void;
                // Updates an existing event tag.
                update(resource: Schema.EventTag, profileId: string): Dfareporting.Schema.EventTag;
            }
            interface FilesCollection {
                // Retrieves a report file by its report ID and file ID. This method supports media download.
                get(reportId: string, fileId: string): Dfareporting.Schema.File;
                // Lists files for a user profile.
                list(profileId: string): Dfareporting.Schema.FileList;
                // Lists files for a user profile.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.FileList;
            }
            interface FloodlightActivitiesCollection {
                // Generates a tag for a floodlight activity.
                generatetag(profileId: string): Dfareporting.Schema.FloodlightActivitiesGenerateTagResponse;
                // Generates a tag for a floodlight activity.
                generatetag(
                    profileId: string,
                    optionalArgs: object,
                ): Dfareporting.Schema.FloodlightActivitiesGenerateTagResponse;
                // Gets one floodlight activity by ID.
                get(profileId: string, id: string): Dfareporting.Schema.FloodlightActivity;
                // Inserts a new floodlight activity.
                insert(resource: Schema.FloodlightActivity, profileId: string): Dfareporting.Schema.FloodlightActivity;
                // Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
                list(profileId: string): Dfareporting.Schema.FloodlightActivitiesListResponse;
                // Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.FloodlightActivitiesListResponse;
                // Updates an existing floodlight activity. This method supports patch semantics.
                patch(
                    resource: Schema.FloodlightActivity,
                    profileId: string,
                    id: string,
                ): Dfareporting.Schema.FloodlightActivity;
                // Deletes an existing floodlight activity.
                remove(profileId: string, id: string): void;
                // Updates an existing floodlight activity.
                update(resource: Schema.FloodlightActivity, profileId: string): Dfareporting.Schema.FloodlightActivity;
            }
            interface FloodlightActivityGroupsCollection {
                // Gets one floodlight activity group by ID.
                get(profileId: string, id: string): Dfareporting.Schema.FloodlightActivityGroup;
                // Inserts a new floodlight activity group.
                insert(
                    resource: Schema.FloodlightActivityGroup,
                    profileId: string,
                ): Dfareporting.Schema.FloodlightActivityGroup;
                // Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
                list(profileId: string): Dfareporting.Schema.FloodlightActivityGroupsListResponse;
                // Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.FloodlightActivityGroupsListResponse;
                // Updates an existing floodlight activity group. This method supports patch semantics.
                patch(
                    resource: Schema.FloodlightActivityGroup,
                    profileId: string,
                    id: string,
                ): Dfareporting.Schema.FloodlightActivityGroup;
                // Updates an existing floodlight activity group.
                update(
                    resource: Schema.FloodlightActivityGroup,
                    profileId: string,
                ): Dfareporting.Schema.FloodlightActivityGroup;
            }
            interface FloodlightConfigurationsCollection {
                // Gets one floodlight configuration by ID.
                get(profileId: string, id: string): Dfareporting.Schema.FloodlightConfiguration;
                // Retrieves a list of floodlight configurations, possibly filtered.
                list(profileId: string): Dfareporting.Schema.FloodlightConfigurationsListResponse;
                // Retrieves a list of floodlight configurations, possibly filtered.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.FloodlightConfigurationsListResponse;
                // Updates an existing floodlight configuration. This method supports patch semantics.
                patch(
                    resource: Schema.FloodlightConfiguration,
                    profileId: string,
                    id: string,
                ): Dfareporting.Schema.FloodlightConfiguration;
                // Updates an existing floodlight configuration.
                update(
                    resource: Schema.FloodlightConfiguration,
                    profileId: string,
                ): Dfareporting.Schema.FloodlightConfiguration;
            }
            interface InventoryItemsCollection {
                // Gets one inventory item by ID.
                get(profileId: string, projectId: string, id: string): Dfareporting.Schema.InventoryItem;
                // Retrieves a list of inventory items, possibly filtered. This method supports paging.
                list(profileId: string, projectId: string): Dfareporting.Schema.InventoryItemsListResponse;
                // Retrieves a list of inventory items, possibly filtered. This method supports paging.
                list(
                    profileId: string,
                    projectId: string,
                    optionalArgs: object,
                ): Dfareporting.Schema.InventoryItemsListResponse;
            }
            interface LanguagesCollection {
                // Retrieves a list of languages.
                list(profileId: string): Dfareporting.Schema.LanguagesListResponse;
            }
            interface MetrosCollection {
                // Retrieves a list of metros.
                list(profileId: string): Dfareporting.Schema.MetrosListResponse;
            }
            interface MobileAppsCollection {
                // Gets one mobile app by ID.
                get(profileId: string, id: string): Dfareporting.Schema.MobileApp;
                // Retrieves list of available mobile apps.
                list(profileId: string): Dfareporting.Schema.MobileAppsListResponse;
                // Retrieves list of available mobile apps.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.MobileAppsListResponse;
            }
            interface MobileCarriersCollection {
                // Gets one mobile carrier by ID.
                get(profileId: string, id: string): Dfareporting.Schema.MobileCarrier;
                // Retrieves a list of mobile carriers.
                list(profileId: string): Dfareporting.Schema.MobileCarriersListResponse;
            }
            interface OperatingSystemVersionsCollection {
                // Gets one operating system version by ID.
                get(profileId: string, id: string): Dfareporting.Schema.OperatingSystemVersion;
                // Retrieves a list of operating system versions.
                list(profileId: string): Dfareporting.Schema.OperatingSystemVersionsListResponse;
            }
            interface OperatingSystemsCollection {
                // Gets one operating system by DART ID.
                get(profileId: string, dartId: string): Dfareporting.Schema.OperatingSystem;
                // Retrieves a list of operating systems.
                list(profileId: string): Dfareporting.Schema.OperatingSystemsListResponse;
            }
            interface OrderDocumentsCollection {
                // Gets one order document by ID.
                get(profileId: string, projectId: string, id: string): Dfareporting.Schema.OrderDocument;
                // Retrieves a list of order documents, possibly filtered. This method supports paging.
                list(profileId: string, projectId: string): Dfareporting.Schema.OrderDocumentsListResponse;
                // Retrieves a list of order documents, possibly filtered. This method supports paging.
                list(
                    profileId: string,
                    projectId: string,
                    optionalArgs: object,
                ): Dfareporting.Schema.OrderDocumentsListResponse;
            }
            interface OrdersCollection {
                // Gets one order by ID.
                get(profileId: string, projectId: string, id: string): Dfareporting.Schema.Order;
                // Retrieves a list of orders, possibly filtered. This method supports paging.
                list(profileId: string, projectId: string): Dfareporting.Schema.OrdersListResponse;
                // Retrieves a list of orders, possibly filtered. This method supports paging.
                list(
                    profileId: string,
                    projectId: string,
                    optionalArgs: object,
                ): Dfareporting.Schema.OrdersListResponse;
            }
            interface PlacementGroupsCollection {
                // Gets one placement group by ID.
                get(profileId: string, id: string): Dfareporting.Schema.PlacementGroup;
                // Inserts a new placement group.
                insert(resource: Schema.PlacementGroup, profileId: string): Dfareporting.Schema.PlacementGroup;
                // Retrieves a list of placement groups, possibly filtered. This method supports paging.
                list(profileId: string): Dfareporting.Schema.PlacementGroupsListResponse;
                // Retrieves a list of placement groups, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.PlacementGroupsListResponse;
                // Updates an existing placement group. This method supports patch semantics.
                patch(
                    resource: Schema.PlacementGroup,
                    profileId: string,
                    id: string,
                ): Dfareporting.Schema.PlacementGroup;
                // Updates an existing placement group.
                update(resource: Schema.PlacementGroup, profileId: string): Dfareporting.Schema.PlacementGroup;
            }
            interface PlacementStrategiesCollection {
                // Gets one placement strategy by ID.
                get(profileId: string, id: string): Dfareporting.Schema.PlacementStrategy;
                // Inserts a new placement strategy.
                insert(resource: Schema.PlacementStrategy, profileId: string): Dfareporting.Schema.PlacementStrategy;
                // Retrieves a list of placement strategies, possibly filtered. This method supports paging.
                list(profileId: string): Dfareporting.Schema.PlacementStrategiesListResponse;
                // Retrieves a list of placement strategies, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.PlacementStrategiesListResponse;
                // Updates an existing placement strategy. This method supports patch semantics.
                patch(
                    resource: Schema.PlacementStrategy,
                    profileId: string,
                    id: string,
                ): Dfareporting.Schema.PlacementStrategy;
                // Deletes an existing placement strategy.
                remove(profileId: string, id: string): void;
                // Updates an existing placement strategy.
                update(resource: Schema.PlacementStrategy, profileId: string): Dfareporting.Schema.PlacementStrategy;
            }
            interface PlacementsCollection {
                // Generates tags for a placement.
                generatetags(profileId: string): Dfareporting.Schema.PlacementsGenerateTagsResponse;
                // Generates tags for a placement.
                generatetags(
                    profileId: string,
                    optionalArgs: object,
                ): Dfareporting.Schema.PlacementsGenerateTagsResponse;
                // Gets one placement by ID.
                get(profileId: string, id: string): Dfareporting.Schema.Placement;
                // Inserts a new placement.
                insert(resource: Schema.Placement, profileId: string): Dfareporting.Schema.Placement;
                // Retrieves a list of placements, possibly filtered. This method supports paging.
                list(profileId: string): Dfareporting.Schema.PlacementsListResponse;
                // Retrieves a list of placements, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.PlacementsListResponse;
                // Updates an existing placement. This method supports patch semantics.
                patch(resource: Schema.Placement, profileId: string, id: string): Dfareporting.Schema.Placement;
                // Updates an existing placement.
                update(resource: Schema.Placement, profileId: string): Dfareporting.Schema.Placement;
            }
            interface PlatformTypesCollection {
                // Gets one platform type by ID.
                get(profileId: string, id: string): Dfareporting.Schema.PlatformType;
                // Retrieves a list of platform types.
                list(profileId: string): Dfareporting.Schema.PlatformTypesListResponse;
            }
            interface PostalCodesCollection {
                // Gets one postal code by ID.
                get(profileId: string, code: string): Dfareporting.Schema.PostalCode;
                // Retrieves a list of postal codes.
                list(profileId: string): Dfareporting.Schema.PostalCodesListResponse;
            }
            interface ProjectsCollection {
                // Gets one project by ID.
                get(profileId: string, id: string): Dfareporting.Schema.Project;
                // Retrieves a list of projects, possibly filtered. This method supports paging.
                list(profileId: string): Dfareporting.Schema.ProjectsListResponse;
                // Retrieves a list of projects, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.ProjectsListResponse;
            }
            interface RegionsCollection {
                // Retrieves a list of regions.
                list(profileId: string): Dfareporting.Schema.RegionsListResponse;
            }
            interface RemarketingListSharesCollection {
                // Gets one remarketing list share by remarketing list ID.
                get(profileId: string, remarketingListId: string): Dfareporting.Schema.RemarketingListShare;
                // Updates an existing remarketing list share. This method supports patch semantics.
                patch(
                    resource: Schema.RemarketingListShare,
                    profileId: string,
                    remarketingListId: string,
                ): Dfareporting.Schema.RemarketingListShare;
                // Updates an existing remarketing list share.
                update(
                    resource: Schema.RemarketingListShare,
                    profileId: string,
                ): Dfareporting.Schema.RemarketingListShare;
            }
            interface RemarketingListsCollection {
                // Gets one remarketing list by ID.
                get(profileId: string, id: string): Dfareporting.Schema.RemarketingList;
                // Inserts a new remarketing list.
                insert(resource: Schema.RemarketingList, profileId: string): Dfareporting.Schema.RemarketingList;
                // Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
                list(profileId: string, advertiserId: string): Dfareporting.Schema.RemarketingListsListResponse;
                // Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
                list(
                    profileId: string,
                    advertiserId: string,
                    optionalArgs: object,
                ): Dfareporting.Schema.RemarketingListsListResponse;
                // Updates an existing remarketing list. This method supports patch semantics.
                patch(
                    resource: Schema.RemarketingList,
                    profileId: string,
                    id: string,
                ): Dfareporting.Schema.RemarketingList;
                // Updates an existing remarketing list.
                update(resource: Schema.RemarketingList, profileId: string): Dfareporting.Schema.RemarketingList;
            }
            interface ReportsCollection {
                CompatibleFields?: Dfareporting.Collection.Reports.CompatibleFieldsCollection | undefined;
                Files?: Dfareporting.Collection.Reports.FilesCollection | undefined;
                // Retrieves a report by its ID.
                get(profileId: string, reportId: string): Dfareporting.Schema.Report;
                // Creates a report.
                insert(resource: Schema.Report, profileId: string): Dfareporting.Schema.Report;
                // Retrieves list of reports.
                list(profileId: string): Dfareporting.Schema.ReportList;
                // Retrieves list of reports.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.ReportList;
                // Updates a report. This method supports patch semantics.
                patch(resource: Schema.Report, profileId: string, reportId: string): Dfareporting.Schema.Report;
                // Deletes a report by its ID.
                remove(profileId: string, reportId: string): void;
                // Runs a report.
                run(profileId: string, reportId: string): Dfareporting.Schema.File;
                // Runs a report.
                run(profileId: string, reportId: string, optionalArgs: object): Dfareporting.Schema.File;
                // Updates a report.
                update(resource: Schema.Report, profileId: string, reportId: string): Dfareporting.Schema.Report;
            }
            interface SitesCollection {
                // Gets one site by ID.
                get(profileId: string, id: string): Dfareporting.Schema.Site;
                // Inserts a new site.
                insert(resource: Schema.Site, profileId: string): Dfareporting.Schema.Site;
                // Retrieves a list of sites, possibly filtered. This method supports paging.
                list(profileId: string): Dfareporting.Schema.SitesListResponse;
                // Retrieves a list of sites, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.SitesListResponse;
                // Updates an existing site. This method supports patch semantics.
                patch(resource: Schema.Site, profileId: string, id: string): Dfareporting.Schema.Site;
                // Updates an existing site.
                update(resource: Schema.Site, profileId: string): Dfareporting.Schema.Site;
            }
            interface SizesCollection {
                // Gets one size by ID.
                get(profileId: string, id: string): Dfareporting.Schema.Size;
                // Inserts a new size.
                insert(resource: Schema.Size, profileId: string): Dfareporting.Schema.Size;
                // Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.
                list(profileId: string): Dfareporting.Schema.SizesListResponse;
                // Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.SizesListResponse;
            }
            interface SubaccountsCollection {
                // Gets one subaccount by ID.
                get(profileId: string, id: string): Dfareporting.Schema.Subaccount;
                // Inserts a new subaccount.
                insert(resource: Schema.Subaccount, profileId: string): Dfareporting.Schema.Subaccount;
                // Gets a list of subaccounts, possibly filtered. This method supports paging.
                list(profileId: string): Dfareporting.Schema.SubaccountsListResponse;
                // Gets a list of subaccounts, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.SubaccountsListResponse;
                // Updates an existing subaccount. This method supports patch semantics.
                patch(resource: Schema.Subaccount, profileId: string, id: string): Dfareporting.Schema.Subaccount;
                // Updates an existing subaccount.
                update(resource: Schema.Subaccount, profileId: string): Dfareporting.Schema.Subaccount;
            }
            interface TargetableRemarketingListsCollection {
                // Gets one remarketing list by ID.
                get(profileId: string, id: string): Dfareporting.Schema.TargetableRemarketingList;
                // Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.
                list(
                    profileId: string,
                    advertiserId: string,
                ): Dfareporting.Schema.TargetableRemarketingListsListResponse;
                // Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.
                list(
                    profileId: string,
                    advertiserId: string,
                    optionalArgs: object,
                ): Dfareporting.Schema.TargetableRemarketingListsListResponse;
            }
            interface TargetingTemplatesCollection {
                // Gets one targeting template by ID.
                get(profileId: string, id: string): Dfareporting.Schema.TargetingTemplate;
                // Inserts a new targeting template.
                insert(resource: Schema.TargetingTemplate, profileId: string): Dfareporting.Schema.TargetingTemplate;
                // Retrieves a list of targeting templates, optionally filtered. This method supports paging.
                list(profileId: string): Dfareporting.Schema.TargetingTemplatesListResponse;
                // Retrieves a list of targeting templates, optionally filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.TargetingTemplatesListResponse;
                // Updates an existing targeting template. This method supports patch semantics.
                patch(
                    resource: Schema.TargetingTemplate,
                    profileId: string,
                    id: string,
                ): Dfareporting.Schema.TargetingTemplate;
                // Updates an existing targeting template.
                update(resource: Schema.TargetingTemplate, profileId: string): Dfareporting.Schema.TargetingTemplate;
            }
            interface UserProfilesCollection {
                // Gets one user profile by ID.
                get(profileId: string): Dfareporting.Schema.UserProfile;
                // Retrieves list of user profiles for a user.
                list(): Dfareporting.Schema.UserProfileList;
            }
            interface UserRolePermissionGroupsCollection {
                // Gets one user role permission group by ID.
                get(profileId: string, id: string): Dfareporting.Schema.UserRolePermissionGroup;
                // Gets a list of all supported user role permission groups.
                list(profileId: string): Dfareporting.Schema.UserRolePermissionGroupsListResponse;
            }
            interface UserRolePermissionsCollection {
                // Gets one user role permission by ID.
                get(profileId: string, id: string): Dfareporting.Schema.UserRolePermission;
                // Gets a list of user role permissions, possibly filtered.
                list(profileId: string): Dfareporting.Schema.UserRolePermissionsListResponse;
                // Gets a list of user role permissions, possibly filtered.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.UserRolePermissionsListResponse;
            }
            interface UserRolesCollection {
                // Gets one user role by ID.
                get(profileId: string, id: string): Dfareporting.Schema.UserRole;
                // Inserts a new user role.
                insert(resource: Schema.UserRole, profileId: string): Dfareporting.Schema.UserRole;
                // Retrieves a list of user roles, possibly filtered. This method supports paging.
                list(profileId: string): Dfareporting.Schema.UserRolesListResponse;
                // Retrieves a list of user roles, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Dfareporting.Schema.UserRolesListResponse;
                // Updates an existing user role. This method supports patch semantics.
                patch(resource: Schema.UserRole, profileId: string, id: string): Dfareporting.Schema.UserRole;
                // Deletes an existing user role.
                remove(profileId: string, id: string): void;
                // Updates an existing user role.
                update(resource: Schema.UserRole, profileId: string): Dfareporting.Schema.UserRole;
            }
            interface VideoFormatsCollection {
                // Gets one video format by ID.
                get(profileId: string, id: number): Dfareporting.Schema.VideoFormat;
                // Lists available video formats.
                list(profileId: string): Dfareporting.Schema.VideoFormatsListResponse;
            }
        }
        namespace Schema {
            interface Account {
                accountPermissionIds?: string[] | undefined;
                accountProfile?: string | undefined;
                active?: boolean | undefined;
                activeAdsLimitTier?: string | undefined;
                activeViewOptOut?: boolean | undefined;
                availablePermissionIds?: string[] | undefined;
                countryId?: string | undefined;
                currencyId?: string | undefined;
                defaultCreativeSizeId?: string | undefined;
                description?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                locale?: string | undefined;
                maximumImageSize?: string | undefined;
                name?: string | undefined;
                nielsenOcrEnabled?: boolean | undefined;
                reportsConfiguration?: Dfareporting.Schema.ReportsConfiguration | undefined;
                shareReportsWithTwitter?: boolean | undefined;
                teaserSizeLimit?: string | undefined;
            }
            interface AccountActiveAdSummary {
                accountId?: string | undefined;
                activeAds?: string | undefined;
                activeAdsLimitTier?: string | undefined;
                availableAds?: string | undefined;
                kind?: string | undefined;
            }
            interface AccountPermission {
                accountProfiles?: string[] | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                level?: string | undefined;
                name?: string | undefined;
                permissionGroupId?: string | undefined;
            }
            interface AccountPermissionGroup {
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
            }
            interface AccountPermissionGroupsListResponse {
                accountPermissionGroups?: Dfareporting.Schema.AccountPermissionGroup[] | undefined;
                kind?: string | undefined;
            }
            interface AccountPermissionsListResponse {
                accountPermissions?: Dfareporting.Schema.AccountPermission[] | undefined;
                kind?: string | undefined;
            }
            interface AccountUserProfile {
                accountId?: string | undefined;
                active?: boolean | undefined;
                advertiserFilter?: Dfareporting.Schema.ObjectFilter | undefined;
                campaignFilter?: Dfareporting.Schema.ObjectFilter | undefined;
                comments?: string | undefined;
                email?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                locale?: string | undefined;
                name?: string | undefined;
                siteFilter?: Dfareporting.Schema.ObjectFilter | undefined;
                subaccountId?: string | undefined;
                traffickerType?: string | undefined;
                userAccessType?: string | undefined;
                userRoleFilter?: Dfareporting.Schema.ObjectFilter | undefined;
                userRoleId?: string | undefined;
            }
            interface AccountUserProfilesListResponse {
                accountUserProfiles?: Dfareporting.Schema.AccountUserProfile[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface AccountsListResponse {
                accounts?: Dfareporting.Schema.Account[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface Activities {
                filters?: Dfareporting.Schema.DimensionValue[] | undefined;
                kind?: string | undefined;
                metricNames?: string[] | undefined;
            }
            interface Ad {
                accountId?: string | undefined;
                active?: boolean | undefined;
                advertiserId?: string | undefined;
                advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                archived?: boolean | undefined;
                audienceSegmentId?: string | undefined;
                campaignId?: string | undefined;
                campaignIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                clickThroughUrl?: Dfareporting.Schema.ClickThroughUrl | undefined;
                clickThroughUrlSuffixProperties?: Dfareporting.Schema.ClickThroughUrlSuffixProperties | undefined;
                comments?: string | undefined;
                compatibility?: string | undefined;
                createInfo?: Dfareporting.Schema.LastModifiedInfo | undefined;
                creativeGroupAssignments?: Dfareporting.Schema.CreativeGroupAssignment[] | undefined;
                creativeRotation?: Dfareporting.Schema.CreativeRotation | undefined;
                dayPartTargeting?: Dfareporting.Schema.DayPartTargeting | undefined;
                defaultClickThroughEventTagProperties?:
                    | Dfareporting.Schema.DefaultClickThroughEventTagProperties
                    | undefined;
                deliverySchedule?: Dfareporting.Schema.DeliverySchedule | undefined;
                dynamicClickTracker?: boolean | undefined;
                endTime?: string | undefined;
                eventTagOverrides?: Dfareporting.Schema.EventTagOverride[] | undefined;
                geoTargeting?: Dfareporting.Schema.GeoTargeting | undefined;
                id?: string | undefined;
                idDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                keyValueTargetingExpression?: Dfareporting.Schema.KeyValueTargetingExpression | undefined;
                kind?: string | undefined;
                languageTargeting?: Dfareporting.Schema.LanguageTargeting | undefined;
                lastModifiedInfo?: Dfareporting.Schema.LastModifiedInfo | undefined;
                name?: string | undefined;
                placementAssignments?: Dfareporting.Schema.PlacementAssignment[] | undefined;
                remarketingListExpression?: Dfareporting.Schema.ListTargetingExpression | undefined;
                size?: Dfareporting.Schema.Size | undefined;
                sslCompliant?: boolean | undefined;
                sslRequired?: boolean | undefined;
                startTime?: string | undefined;
                subaccountId?: string | undefined;
                targetingTemplateId?: string | undefined;
                technologyTargeting?: Dfareporting.Schema.TechnologyTargeting | undefined;
                type?: string | undefined;
            }
            interface AdBlockingConfiguration {
                clickThroughUrl?: string | undefined;
                creativeBundleId?: string | undefined;
                enabled?: boolean | undefined;
                overrideClickThroughUrl?: boolean | undefined;
            }
            interface AdSlot {
                comment?: string | undefined;
                compatibility?: string | undefined;
                height?: string | undefined;
                linkedPlacementId?: string | undefined;
                name?: string | undefined;
                paymentSourceType?: string | undefined;
                primary?: boolean | undefined;
                width?: string | undefined;
            }
            interface AdsListResponse {
                ads?: Dfareporting.Schema.Ad[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface Advertiser {
                accountId?: string | undefined;
                advertiserGroupId?: string | undefined;
                clickThroughUrlSuffix?: string | undefined;
                defaultClickThroughEventTagId?: string | undefined;
                defaultEmail?: string | undefined;
                floodlightConfigurationId?: string | undefined;
                floodlightConfigurationIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                id?: string | undefined;
                idDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                originalFloodlightConfigurationId?: string | undefined;
                status?: string | undefined;
                subaccountId?: string | undefined;
                suspended?: boolean | undefined;
            }
            interface AdvertiserGroup {
                accountId?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
            }
            interface AdvertiserGroupsListResponse {
                advertiserGroups?: Dfareporting.Schema.AdvertiserGroup[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface AdvertiserLandingPagesListResponse {
                kind?: string | undefined;
                landingPages?: Dfareporting.Schema.LandingPage[] | undefined;
                nextPageToken?: string | undefined;
            }
            interface AdvertisersListResponse {
                advertisers?: Dfareporting.Schema.Advertiser[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface AudienceSegment {
                allocation?: number | undefined;
                id?: string | undefined;
                name?: string | undefined;
            }
            interface AudienceSegmentGroup {
                audienceSegments?: Dfareporting.Schema.AudienceSegment[] | undefined;
                id?: string | undefined;
                name?: string | undefined;
            }
            interface Browser {
                browserVersionId?: string | undefined;
                dartId?: string | undefined;
                kind?: string | undefined;
                majorVersion?: string | undefined;
                minorVersion?: string | undefined;
                name?: string | undefined;
            }
            interface BrowsersListResponse {
                browsers?: Dfareporting.Schema.Browser[] | undefined;
                kind?: string | undefined;
            }
            interface Campaign {
                accountId?: string | undefined;
                adBlockingConfiguration?: Dfareporting.Schema.AdBlockingConfiguration | undefined;
                additionalCreativeOptimizationConfigurations?:
                    | Dfareporting.Schema.CreativeOptimizationConfiguration[]
                    | undefined;
                advertiserGroupId?: string | undefined;
                advertiserId?: string | undefined;
                advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                archived?: boolean | undefined;
                audienceSegmentGroups?: Dfareporting.Schema.AudienceSegmentGroup[] | undefined;
                billingInvoiceCode?: string | undefined;
                clickThroughUrlSuffixProperties?: Dfareporting.Schema.ClickThroughUrlSuffixProperties | undefined;
                comment?: string | undefined;
                createInfo?: Dfareporting.Schema.LastModifiedInfo | undefined;
                creativeGroupIds?: string[] | undefined;
                creativeOptimizationConfiguration?: Dfareporting.Schema.CreativeOptimizationConfiguration | undefined;
                defaultClickThroughEventTagProperties?:
                    | Dfareporting.Schema.DefaultClickThroughEventTagProperties
                    | undefined;
                defaultLandingPageId?: string | undefined;
                endDate?: string | undefined;
                eventTagOverrides?: Dfareporting.Schema.EventTagOverride[] | undefined;
                externalId?: string | undefined;
                id?: string | undefined;
                idDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                kind?: string | undefined;
                lastModifiedInfo?: Dfareporting.Schema.LastModifiedInfo | undefined;
                name?: string | undefined;
                nielsenOcrEnabled?: boolean | undefined;
                startDate?: string | undefined;
                subaccountId?: string | undefined;
                traffickerEmails?: string[] | undefined;
            }
            interface CampaignCreativeAssociation {
                creativeId?: string | undefined;
                kind?: string | undefined;
            }
            interface CampaignCreativeAssociationsListResponse {
                campaignCreativeAssociations?: Dfareporting.Schema.CampaignCreativeAssociation[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface CampaignsListResponse {
                campaigns?: Dfareporting.Schema.Campaign[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface ChangeLog {
                accountId?: string | undefined;
                action?: string | undefined;
                changeTime?: string | undefined;
                fieldName?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                newValue?: string | undefined;
                objectId?: string | undefined;
                objectType?: string | undefined;
                oldValue?: string | undefined;
                subaccountId?: string | undefined;
                transactionId?: string | undefined;
                userProfileId?: string | undefined;
                userProfileName?: string | undefined;
            }
            interface ChangeLogsListResponse {
                changeLogs?: Dfareporting.Schema.ChangeLog[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface CitiesListResponse {
                cities?: Dfareporting.Schema.City[] | undefined;
                kind?: string | undefined;
            }
            interface City {
                countryCode?: string | undefined;
                countryDartId?: string | undefined;
                dartId?: string | undefined;
                kind?: string | undefined;
                metroCode?: string | undefined;
                metroDmaId?: string | undefined;
                name?: string | undefined;
                regionCode?: string | undefined;
                regionDartId?: string | undefined;
            }
            interface ClickTag {
                clickThroughUrl?: Dfareporting.Schema.CreativeClickThroughUrl | undefined;
                eventName?: string | undefined;
                name?: string | undefined;
            }
            interface ClickThroughUrl {
                computedClickThroughUrl?: string | undefined;
                customClickThroughUrl?: string | undefined;
                defaultLandingPage?: boolean | undefined;
                landingPageId?: string | undefined;
            }
            interface ClickThroughUrlSuffixProperties {
                clickThroughUrlSuffix?: string | undefined;
                overrideInheritedSuffix?: boolean | undefined;
            }
            interface CompanionClickThroughOverride {
                clickThroughUrl?: Dfareporting.Schema.ClickThroughUrl | undefined;
                creativeId?: string | undefined;
            }
            interface CompanionSetting {
                companionsDisabled?: boolean | undefined;
                enabledSizes?: Dfareporting.Schema.Size[] | undefined;
                imageOnly?: boolean | undefined;
                kind?: string | undefined;
            }
            interface CompatibleFields {
                crossDimensionReachReportCompatibleFields?:
                    | Dfareporting.Schema.CrossDimensionReachReportCompatibleFields
                    | undefined;
                floodlightReportCompatibleFields?: Dfareporting.Schema.FloodlightReportCompatibleFields | undefined;
                kind?: string | undefined;
                pathToConversionReportCompatibleFields?:
                    | Dfareporting.Schema.PathToConversionReportCompatibleFields
                    | undefined;
                reachReportCompatibleFields?: Dfareporting.Schema.ReachReportCompatibleFields | undefined;
                reportCompatibleFields?: Dfareporting.Schema.ReportCompatibleFields | undefined;
            }
            interface ConnectionType {
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
            }
            interface ConnectionTypesListResponse {
                connectionTypes?: Dfareporting.Schema.ConnectionType[] | undefined;
                kind?: string | undefined;
            }
            interface ContentCategoriesListResponse {
                contentCategories?: Dfareporting.Schema.ContentCategory[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface ContentCategory {
                accountId?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
            }
            interface Conversion {
                childDirectedTreatment?: boolean | undefined;
                customVariables?: Dfareporting.Schema.CustomFloodlightVariable[] | undefined;
                encryptedUserId?: string | undefined;
                encryptedUserIdCandidates?: string[] | undefined;
                floodlightActivityId?: string | undefined;
                floodlightConfigurationId?: string | undefined;
                gclid?: string | undefined;
                kind?: string | undefined;
                limitAdTracking?: boolean | undefined;
                mobileDeviceId?: string | undefined;
                nonPersonalizedAd?: boolean | undefined;
                ordinal?: string | undefined;
                quantity?: string | undefined;
                timestampMicros?: string | undefined;
                treatmentForUnderage?: boolean | undefined;
                value?: number | undefined;
            }
            interface ConversionError {
                code?: string | undefined;
                kind?: string | undefined;
                message?: string | undefined;
            }
            interface ConversionStatus {
                conversion?: Dfareporting.Schema.Conversion | undefined;
                errors?: Dfareporting.Schema.ConversionError[] | undefined;
                kind?: string | undefined;
            }
            interface ConversionsBatchInsertRequest {
                conversions?: Dfareporting.Schema.Conversion[] | undefined;
                encryptionInfo?: Dfareporting.Schema.EncryptionInfo | undefined;
                kind?: string | undefined;
            }
            interface ConversionsBatchInsertResponse {
                hasFailures?: boolean | undefined;
                kind?: string | undefined;
                status?: Dfareporting.Schema.ConversionStatus[] | undefined;
            }
            interface ConversionsBatchUpdateRequest {
                conversions?: Dfareporting.Schema.Conversion[] | undefined;
                encryptionInfo?: Dfareporting.Schema.EncryptionInfo | undefined;
                kind?: string | undefined;
            }
            interface ConversionsBatchUpdateResponse {
                hasFailures?: boolean | undefined;
                kind?: string | undefined;
                status?: Dfareporting.Schema.ConversionStatus[] | undefined;
            }
            interface CountriesListResponse {
                countries?: Dfareporting.Schema.Country[] | undefined;
                kind?: string | undefined;
            }
            interface Country {
                countryCode?: string | undefined;
                dartId?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                sslEnabled?: boolean | undefined;
            }
            interface Creative {
                accountId?: string | undefined;
                active?: boolean | undefined;
                adParameters?: string | undefined;
                adTagKeys?: string[] | undefined;
                additionalSizes?: Dfareporting.Schema.Size[] | undefined;
                advertiserId?: string | undefined;
                allowScriptAccess?: boolean | undefined;
                archived?: boolean | undefined;
                artworkType?: string | undefined;
                authoringSource?: string | undefined;
                authoringTool?: string | undefined;
                autoAdvanceImages?: boolean | undefined;
                backgroundColor?: string | undefined;
                backupImageClickThroughUrl?: Dfareporting.Schema.CreativeClickThroughUrl | undefined;
                backupImageFeatures?: string[] | undefined;
                backupImageReportingLabel?: string | undefined;
                backupImageTargetWindow?: Dfareporting.Schema.TargetWindow | undefined;
                clickTags?: Dfareporting.Schema.ClickTag[] | undefined;
                commercialId?: string | undefined;
                companionCreatives?: string[] | undefined;
                compatibility?: string[] | undefined;
                convertFlashToHtml5?: boolean | undefined;
                counterCustomEvents?: Dfareporting.Schema.CreativeCustomEvent[] | undefined;
                creativeAssetSelection?: Dfareporting.Schema.CreativeAssetSelection | undefined;
                creativeAssets?: Dfareporting.Schema.CreativeAsset[] | undefined;
                creativeFieldAssignments?: Dfareporting.Schema.CreativeFieldAssignment[] | undefined;
                customKeyValues?: string[] | undefined;
                dynamicAssetSelection?: boolean | undefined;
                exitCustomEvents?: Dfareporting.Schema.CreativeCustomEvent[] | undefined;
                fsCommand?: Dfareporting.Schema.FsCommand | undefined;
                htmlCode?: string | undefined;
                htmlCodeLocked?: boolean | undefined;
                id?: string | undefined;
                idDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                kind?: string | undefined;
                lastModifiedInfo?: Dfareporting.Schema.LastModifiedInfo | undefined;
                latestTraffickedCreativeId?: string | undefined;
                mediaDescription?: string | undefined;
                mediaDuration?: number | undefined;
                name?: string | undefined;
                overrideCss?: string | undefined;
                progressOffset?: Dfareporting.Schema.VideoOffset | undefined;
                redirectUrl?: string | undefined;
                renderingId?: string | undefined;
                renderingIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                requiredFlashPluginVersion?: string | undefined;
                requiredFlashVersion?: number | undefined;
                size?: Dfareporting.Schema.Size | undefined;
                skipOffset?: Dfareporting.Schema.VideoOffset | undefined;
                skippable?: boolean | undefined;
                sslCompliant?: boolean | undefined;
                sslOverride?: boolean | undefined;
                studioAdvertiserId?: string | undefined;
                studioCreativeId?: string | undefined;
                studioTraffickedCreativeId?: string | undefined;
                subaccountId?: string | undefined;
                thirdPartyBackupImageImpressionsUrl?: string | undefined;
                thirdPartyRichMediaImpressionsUrl?: string | undefined;
                thirdPartyUrls?: Dfareporting.Schema.ThirdPartyTrackingUrl[] | undefined;
                timerCustomEvents?: Dfareporting.Schema.CreativeCustomEvent[] | undefined;
                totalFileSize?: string | undefined;
                type?: string | undefined;
                universalAdId?: Dfareporting.Schema.UniversalAdId | undefined;
                version?: number | undefined;
            }
            interface CreativeAsset {
                actionScript3?: boolean | undefined;
                active?: boolean | undefined;
                additionalSizes?: Dfareporting.Schema.Size[] | undefined;
                alignment?: string | undefined;
                artworkType?: string | undefined;
                assetIdentifier?: Dfareporting.Schema.CreativeAssetId | undefined;
                audioBitRate?: number | undefined;
                audioSampleRate?: number | undefined;
                backupImageExit?: Dfareporting.Schema.CreativeCustomEvent | undefined;
                bitRate?: number | undefined;
                childAssetType?: string | undefined;
                collapsedSize?: Dfareporting.Schema.Size | undefined;
                companionCreativeIds?: string[] | undefined;
                customStartTimeValue?: number | undefined;
                detectedFeatures?: string[] | undefined;
                displayType?: string | undefined;
                duration?: number | undefined;
                durationType?: string | undefined;
                expandedDimension?: Dfareporting.Schema.Size | undefined;
                fileSize?: string | undefined;
                flashVersion?: number | undefined;
                frameRate?: number | undefined;
                hideFlashObjects?: boolean | undefined;
                hideSelectionBoxes?: boolean | undefined;
                horizontallyLocked?: boolean | undefined;
                id?: string | undefined;
                idDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                mediaDuration?: number | undefined;
                mimeType?: string | undefined;
                offset?: Dfareporting.Schema.OffsetPosition | undefined;
                orientation?: string | undefined;
                originalBackup?: boolean | undefined;
                politeLoad?: boolean | undefined;
                position?: Dfareporting.Schema.OffsetPosition | undefined;
                positionLeftUnit?: string | undefined;
                positionTopUnit?: string | undefined;
                progressiveServingUrl?: string | undefined;
                pushdown?: boolean | undefined;
                pushdownDuration?: number | undefined;
                role?: string | undefined;
                size?: Dfareporting.Schema.Size | undefined;
                sslCompliant?: boolean | undefined;
                startTimeType?: string | undefined;
                streamingServingUrl?: string | undefined;
                transparency?: boolean | undefined;
                verticallyLocked?: boolean | undefined;
                windowMode?: string | undefined;
                zIndex?: number | undefined;
                zipFilename?: string | undefined;
                zipFilesize?: string | undefined;
            }
            interface CreativeAssetId {
                name?: string | undefined;
                type?: string | undefined;
            }
            interface CreativeAssetMetadata {
                assetIdentifier?: Dfareporting.Schema.CreativeAssetId | undefined;
                clickTags?: Dfareporting.Schema.ClickTag[] | undefined;
                detectedFeatures?: string[] | undefined;
                id?: string | undefined;
                idDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                kind?: string | undefined;
                warnedValidationRules?: string[] | undefined;
            }
            interface CreativeAssetSelection {
                defaultAssetId?: string | undefined;
                rules?: Dfareporting.Schema.Rule[] | undefined;
            }
            interface CreativeAssignment {
                active?: boolean | undefined;
                applyEventTags?: boolean | undefined;
                clickThroughUrl?: Dfareporting.Schema.ClickThroughUrl | undefined;
                companionCreativeOverrides?: Dfareporting.Schema.CompanionClickThroughOverride[] | undefined;
                creativeGroupAssignments?: Dfareporting.Schema.CreativeGroupAssignment[] | undefined;
                creativeId?: string | undefined;
                creativeIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                endTime?: string | undefined;
                richMediaExitOverrides?: Dfareporting.Schema.RichMediaExitOverride[] | undefined;
                sequence?: number | undefined;
                sslCompliant?: boolean | undefined;
                startTime?: string | undefined;
                weight?: number | undefined;
            }
            interface CreativeClickThroughUrl {
                computedClickThroughUrl?: string | undefined;
                customClickThroughUrl?: string | undefined;
                landingPageId?: string | undefined;
            }
            interface CreativeCustomEvent {
                advertiserCustomEventId?: string | undefined;
                advertiserCustomEventName?: string | undefined;
                advertiserCustomEventType?: string | undefined;
                artworkLabel?: string | undefined;
                artworkType?: string | undefined;
                exitClickThroughUrl?: Dfareporting.Schema.CreativeClickThroughUrl | undefined;
                id?: string | undefined;
                popupWindowProperties?: Dfareporting.Schema.PopupWindowProperties | undefined;
                targetType?: string | undefined;
                videoReportingId?: string | undefined;
            }
            interface CreativeField {
                accountId?: string | undefined;
                advertiserId?: string | undefined;
                advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                subaccountId?: string | undefined;
            }
            interface CreativeFieldAssignment {
                creativeFieldId?: string | undefined;
                creativeFieldValueId?: string | undefined;
            }
            interface CreativeFieldValue {
                id?: string | undefined;
                kind?: string | undefined;
                value?: string | undefined;
            }
            interface CreativeFieldValuesListResponse {
                creativeFieldValues?: Dfareporting.Schema.CreativeFieldValue[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface CreativeFieldsListResponse {
                creativeFields?: Dfareporting.Schema.CreativeField[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface CreativeGroup {
                accountId?: string | undefined;
                advertiserId?: string | undefined;
                advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                groupNumber?: number | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                subaccountId?: string | undefined;
            }
            interface CreativeGroupAssignment {
                creativeGroupId?: string | undefined;
                creativeGroupNumber?: string | undefined;
            }
            interface CreativeGroupsListResponse {
                creativeGroups?: Dfareporting.Schema.CreativeGroup[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface CreativeOptimizationConfiguration {
                id?: string | undefined;
                name?: string | undefined;
                optimizationActivitys?: Dfareporting.Schema.OptimizationActivity[] | undefined;
                optimizationModel?: string | undefined;
            }
            interface CreativeRotation {
                creativeAssignments?: Dfareporting.Schema.CreativeAssignment[] | undefined;
                creativeOptimizationConfigurationId?: string | undefined;
                type?: string | undefined;
                weightCalculationStrategy?: string | undefined;
            }
            interface CreativesListResponse {
                creatives?: Dfareporting.Schema.Creative[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface CrossDimensionReachReportCompatibleFields {
                breakdown?: Dfareporting.Schema.Dimension[] | undefined;
                dimensionFilters?: Dfareporting.Schema.Dimension[] | undefined;
                kind?: string | undefined;
                metrics?: Dfareporting.Schema.Metric[] | undefined;
                overlapMetrics?: Dfareporting.Schema.Metric[] | undefined;
            }
            interface CustomFloodlightVariable {
                kind?: string | undefined;
                type?: string | undefined;
                value?: string | undefined;
            }
            interface CustomRichMediaEvents {
                filteredEventIds?: Dfareporting.Schema.DimensionValue[] | undefined;
                kind?: string | undefined;
            }
            interface CustomViewabilityMetric {
                configuration?: Dfareporting.Schema.CustomViewabilityMetricConfiguration | undefined;
                id?: string | undefined;
                name?: string | undefined;
            }
            interface CustomViewabilityMetricConfiguration {
                audible?: boolean | undefined;
                timeMillis?: number | undefined;
                timePercent?: number | undefined;
                viewabilityPercent?: number | undefined;
            }
            interface DateRange {
                endDate?: string | undefined;
                kind?: string | undefined;
                relativeDateRange?: string | undefined;
                startDate?: string | undefined;
            }
            interface DayPartTargeting {
                daysOfWeek?: string[] | undefined;
                hoursOfDay?: number[] | undefined;
                userLocalTime?: boolean | undefined;
            }
            interface DeepLink {
                appUrl?: string | undefined;
                fallbackUrl?: string | undefined;
                kind?: string | undefined;
                mobileApp?: Dfareporting.Schema.MobileApp | undefined;
                remarketingListIds?: string[] | undefined;
            }
            interface DefaultClickThroughEventTagProperties {
                defaultClickThroughEventTagId?: string | undefined;
                overrideInheritedEventTag?: boolean | undefined;
            }
            interface DeliverySchedule {
                frequencyCap?: Dfareporting.Schema.FrequencyCap | undefined;
                hardCutoff?: boolean | undefined;
                impressionRatio?: string | undefined;
                priority?: string | undefined;
            }
            interface DfpSettings {
                dfpNetworkCode?: string | undefined;
                dfpNetworkName?: string | undefined;
                programmaticPlacementAccepted?: boolean | undefined;
                pubPaidPlacementAccepted?: boolean | undefined;
                publisherPortalOnly?: boolean | undefined;
            }
            interface Dimension {
                kind?: string | undefined;
                name?: string | undefined;
            }
            interface DimensionFilter {
                dimensionName?: string | undefined;
                kind?: string | undefined;
                value?: string | undefined;
            }
            interface DimensionValue {
                dimensionName?: string | undefined;
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                matchType?: string | undefined;
                value?: string | undefined;
            }
            interface DimensionValueList {
                etag?: string | undefined;
                items?: Dfareporting.Schema.DimensionValue[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface DimensionValueRequest {
                dimensionName?: string | undefined;
                endDate?: string | undefined;
                filters?: Dfareporting.Schema.DimensionFilter[] | undefined;
                kind?: string | undefined;
                startDate?: string | undefined;
            }
            interface DirectorySite {
                active?: boolean | undefined;
                id?: string | undefined;
                idDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                inpageTagFormats?: string[] | undefined;
                interstitialTagFormats?: string[] | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                settings?: Dfareporting.Schema.DirectorySiteSettings | undefined;
                url?: string | undefined;
            }
            interface DirectorySiteSettings {
                activeViewOptOut?: boolean | undefined;
                dfpSettings?: Dfareporting.Schema.DfpSettings | undefined;
                instreamVideoPlacementAccepted?: boolean | undefined;
                interstitialPlacementAccepted?: boolean | undefined;
            }
            interface DirectorySitesListResponse {
                directorySites?: Dfareporting.Schema.DirectorySite[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface DynamicTargetingKey {
                kind?: string | undefined;
                name?: string | undefined;
                objectId?: string | undefined;
                objectType?: string | undefined;
            }
            interface DynamicTargetingKeysListResponse {
                dynamicTargetingKeys?: Dfareporting.Schema.DynamicTargetingKey[] | undefined;
                kind?: string | undefined;
            }
            interface EncryptionInfo {
                encryptionEntityId?: string | undefined;
                encryptionEntityType?: string | undefined;
                encryptionSource?: string | undefined;
                kind?: string | undefined;
            }
            interface EventTag {
                accountId?: string | undefined;
                advertiserId?: string | undefined;
                advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                campaignId?: string | undefined;
                campaignIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                enabledByDefault?: boolean | undefined;
                excludeFromAdxRequests?: boolean | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                siteFilterType?: string | undefined;
                siteIds?: string[] | undefined;
                sslCompliant?: boolean | undefined;
                status?: string | undefined;
                subaccountId?: string | undefined;
                type?: string | undefined;
                url?: string | undefined;
                urlEscapeLevels?: number | undefined;
            }
            interface EventTagOverride {
                enabled?: boolean | undefined;
                id?: string | undefined;
            }
            interface EventTagsListResponse {
                eventTags?: Dfareporting.Schema.EventTag[] | undefined;
                kind?: string | undefined;
            }
            interface File {
                dateRange?: Dfareporting.Schema.DateRange | undefined;
                etag?: string | undefined;
                fileName?: string | undefined;
                format?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                lastModifiedTime?: string | undefined;
                reportId?: string | undefined;
                status?: string | undefined;
                urls?: Dfareporting.Schema.FileUrls | undefined;
            }
            interface FileList {
                etag?: string | undefined;
                items?: Dfareporting.Schema.File[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface FileUrls {
                apiUrl?: string | undefined;
                browserUrl?: string | undefined;
            }
            interface Flight {
                endDate?: string | undefined;
                rateOrCost?: string | undefined;
                startDate?: string | undefined;
                units?: string | undefined;
            }
            interface FloodlightActivitiesGenerateTagResponse {
                floodlightActivityTag?: string | undefined;
                globalSiteTagGlobalSnippet?: string | undefined;
                kind?: string | undefined;
            }
            interface FloodlightActivitiesListResponse {
                floodlightActivities?: Dfareporting.Schema.FloodlightActivity[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface FloodlightActivity {
                accountId?: string | undefined;
                advertiserId?: string | undefined;
                advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                cacheBustingType?: string | undefined;
                countingMethod?: string | undefined;
                defaultTags?: Dfareporting.Schema.FloodlightActivityDynamicTag[] | undefined;
                expectedUrl?: string | undefined;
                floodlightActivityGroupId?: string | undefined;
                floodlightActivityGroupName?: string | undefined;
                floodlightActivityGroupTagString?: string | undefined;
                floodlightActivityGroupType?: string | undefined;
                floodlightConfigurationId?: string | undefined;
                floodlightConfigurationIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                floodlightTagType?: string | undefined;
                hidden?: boolean | undefined;
                id?: string | undefined;
                idDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                notes?: string | undefined;
                publisherTags?: Dfareporting.Schema.FloodlightActivityPublisherDynamicTag[] | undefined;
                secure?: boolean | undefined;
                sslCompliant?: boolean | undefined;
                sslRequired?: boolean | undefined;
                subaccountId?: string | undefined;
                tagFormat?: string | undefined;
                tagString?: string | undefined;
                userDefinedVariableTypes?: string[] | undefined;
            }
            interface FloodlightActivityDynamicTag {
                id?: string | undefined;
                name?: string | undefined;
                tag?: string | undefined;
            }
            interface FloodlightActivityGroup {
                accountId?: string | undefined;
                advertiserId?: string | undefined;
                advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                floodlightConfigurationId?: string | undefined;
                floodlightConfigurationIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                id?: string | undefined;
                idDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                subaccountId?: string | undefined;
                tagString?: string | undefined;
                type?: string | undefined;
            }
            interface FloodlightActivityGroupsListResponse {
                floodlightActivityGroups?: Dfareporting.Schema.FloodlightActivityGroup[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface FloodlightActivityPublisherDynamicTag {
                clickThrough?: boolean | undefined;
                directorySiteId?: string | undefined;
                dynamicTag?: Dfareporting.Schema.FloodlightActivityDynamicTag | undefined;
                siteId?: string | undefined;
                siteIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                viewThrough?: boolean | undefined;
            }
            interface FloodlightConfiguration {
                accountId?: string | undefined;
                advertiserId?: string | undefined;
                advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                analyticsDataSharingEnabled?: boolean | undefined;
                customViewabilityMetric?: Dfareporting.Schema.CustomViewabilityMetric | undefined;
                exposureToConversionEnabled?: boolean | undefined;
                firstDayOfWeek?: string | undefined;
                id?: string | undefined;
                idDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                inAppAttributionTrackingEnabled?: boolean | undefined;
                kind?: string | undefined;
                lookbackConfiguration?: Dfareporting.Schema.LookbackConfiguration | undefined;
                naturalSearchConversionAttributionOption?: string | undefined;
                omnitureSettings?: Dfareporting.Schema.OmnitureSettings | undefined;
                subaccountId?: string | undefined;
                tagSettings?: Dfareporting.Schema.TagSettings | undefined;
                thirdPartyAuthenticationTokens?: Dfareporting.Schema.ThirdPartyAuthenticationToken[] | undefined;
                userDefinedVariableConfigurations?: Dfareporting.Schema.UserDefinedVariableConfiguration[] | undefined;
            }
            interface FloodlightConfigurationsListResponse {
                floodlightConfigurations?: Dfareporting.Schema.FloodlightConfiguration[] | undefined;
                kind?: string | undefined;
            }
            interface FloodlightReportCompatibleFields {
                dimensionFilters?: Dfareporting.Schema.Dimension[] | undefined;
                dimensions?: Dfareporting.Schema.Dimension[] | undefined;
                kind?: string | undefined;
                metrics?: Dfareporting.Schema.Metric[] | undefined;
            }
            interface FrequencyCap {
                duration?: string | undefined;
                impressions?: string | undefined;
            }
            interface FsCommand {
                left?: number | undefined;
                positionOption?: string | undefined;
                top?: number | undefined;
                windowHeight?: number | undefined;
                windowWidth?: number | undefined;
            }
            interface GeoTargeting {
                cities?: Dfareporting.Schema.City[] | undefined;
                countries?: Dfareporting.Schema.Country[] | undefined;
                excludeCountries?: boolean | undefined;
                metros?: Dfareporting.Schema.Metro[] | undefined;
                postalCodes?: Dfareporting.Schema.PostalCode[] | undefined;
                regions?: Dfareporting.Schema.Region[] | undefined;
            }
            interface InventoryItem {
                accountId?: string | undefined;
                adSlots?: Dfareporting.Schema.AdSlot[] | undefined;
                advertiserId?: string | undefined;
                contentCategoryId?: string | undefined;
                estimatedClickThroughRate?: string | undefined;
                estimatedConversionRate?: string | undefined;
                id?: string | undefined;
                inPlan?: boolean | undefined;
                kind?: string | undefined;
                lastModifiedInfo?: Dfareporting.Schema.LastModifiedInfo | undefined;
                name?: string | undefined;
                negotiationChannelId?: string | undefined;
                orderId?: string | undefined;
                placementStrategyId?: string | undefined;
                pricing?: Dfareporting.Schema.Pricing | undefined;
                projectId?: string | undefined;
                rfpId?: string | undefined;
                siteId?: string | undefined;
                subaccountId?: string | undefined;
                type?: string | undefined;
            }
            interface InventoryItemsListResponse {
                inventoryItems?: Dfareporting.Schema.InventoryItem[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface KeyValueTargetingExpression {
                expression?: string | undefined;
            }
            interface LandingPage {
                advertiserId?: string | undefined;
                archived?: boolean | undefined;
                deepLinks?: Dfareporting.Schema.DeepLink[] | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                url?: string | undefined;
            }
            interface Language {
                id?: string | undefined;
                kind?: string | undefined;
                languageCode?: string | undefined;
                name?: string | undefined;
            }
            interface LanguageTargeting {
                languages?: Dfareporting.Schema.Language[] | undefined;
            }
            interface LanguagesListResponse {
                kind?: string | undefined;
                languages?: Dfareporting.Schema.Language[] | undefined;
            }
            interface LastModifiedInfo {
                time?: string | undefined;
            }
            interface ListPopulationClause {
                terms?: Dfareporting.Schema.ListPopulationTerm[] | undefined;
            }
            interface ListPopulationRule {
                floodlightActivityId?: string | undefined;
                floodlightActivityName?: string | undefined;
                listPopulationClauses?: Dfareporting.Schema.ListPopulationClause[] | undefined;
            }
            interface ListPopulationTerm {
                contains?: boolean | undefined;
                negation?: boolean | undefined;
                operator?: string | undefined;
                remarketingListId?: string | undefined;
                type?: string | undefined;
                value?: string | undefined;
                variableFriendlyName?: string | undefined;
                variableName?: string | undefined;
            }
            interface ListTargetingExpression {
                expression?: string | undefined;
            }
            interface LookbackConfiguration {
                clickDuration?: number | undefined;
                postImpressionActivitiesDuration?: number | undefined;
            }
            interface Metric {
                kind?: string | undefined;
                name?: string | undefined;
            }
            interface Metro {
                countryCode?: string | undefined;
                countryDartId?: string | undefined;
                dartId?: string | undefined;
                dmaId?: string | undefined;
                kind?: string | undefined;
                metroCode?: string | undefined;
                name?: string | undefined;
            }
            interface MetrosListResponse {
                kind?: string | undefined;
                metros?: Dfareporting.Schema.Metro[] | undefined;
            }
            interface MobileApp {
                directory?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                publisherName?: string | undefined;
                title?: string | undefined;
            }
            interface MobileAppsListResponse {
                kind?: string | undefined;
                mobileApps?: Dfareporting.Schema.MobileApp[] | undefined;
                nextPageToken?: string | undefined;
            }
            interface MobileCarrier {
                countryCode?: string | undefined;
                countryDartId?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
            }
            interface MobileCarriersListResponse {
                kind?: string | undefined;
                mobileCarriers?: Dfareporting.Schema.MobileCarrier[] | undefined;
            }
            interface ObjectFilter {
                kind?: string | undefined;
                objectIds?: string[] | undefined;
                status?: string | undefined;
            }
            interface OffsetPosition {
                left?: number | undefined;
                top?: number | undefined;
            }
            interface OmnitureSettings {
                omnitureCostDataEnabled?: boolean | undefined;
                omnitureIntegrationEnabled?: boolean | undefined;
            }
            interface OperatingSystem {
                dartId?: string | undefined;
                desktop?: boolean | undefined;
                kind?: string | undefined;
                mobile?: boolean | undefined;
                name?: string | undefined;
            }
            interface OperatingSystemVersion {
                id?: string | undefined;
                kind?: string | undefined;
                majorVersion?: string | undefined;
                minorVersion?: string | undefined;
                name?: string | undefined;
                operatingSystem?: Dfareporting.Schema.OperatingSystem | undefined;
            }
            interface OperatingSystemVersionsListResponse {
                kind?: string | undefined;
                operatingSystemVersions?: Dfareporting.Schema.OperatingSystemVersion[] | undefined;
            }
            interface OperatingSystemsListResponse {
                kind?: string | undefined;
                operatingSystems?: Dfareporting.Schema.OperatingSystem[] | undefined;
            }
            interface OptimizationActivity {
                floodlightActivityId?: string | undefined;
                floodlightActivityIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                weight?: number | undefined;
            }
            interface Order {
                accountId?: string | undefined;
                advertiserId?: string | undefined;
                approverUserProfileIds?: string[] | undefined;
                buyerInvoiceId?: string | undefined;
                buyerOrganizationName?: string | undefined;
                comments?: string | undefined;
                contacts?: Dfareporting.Schema.OrderContact[] | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                lastModifiedInfo?: Dfareporting.Schema.LastModifiedInfo | undefined;
                name?: string | undefined;
                notes?: string | undefined;
                planningTermId?: string | undefined;
                projectId?: string | undefined;
                sellerOrderId?: string | undefined;
                sellerOrganizationName?: string | undefined;
                siteId?: string[] | undefined;
                siteNames?: string[] | undefined;
                subaccountId?: string | undefined;
                termsAndConditions?: string | undefined;
            }
            interface OrderContact {
                contactInfo?: string | undefined;
                contactName?: string | undefined;
                contactTitle?: string | undefined;
                contactType?: string | undefined;
                signatureUserProfileId?: string | undefined;
            }
            interface OrderDocument {
                accountId?: string | undefined;
                advertiserId?: string | undefined;
                amendedOrderDocumentId?: string | undefined;
                approvedByUserProfileIds?: string[] | undefined;
                cancelled?: boolean | undefined;
                createdInfo?: Dfareporting.Schema.LastModifiedInfo | undefined;
                effectiveDate?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                lastSentRecipients?: string[] | undefined;
                lastSentTime?: string | undefined;
                orderId?: string | undefined;
                projectId?: string | undefined;
                signed?: boolean | undefined;
                subaccountId?: string | undefined;
                title?: string | undefined;
                type?: string | undefined;
            }
            interface OrderDocumentsListResponse {
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                orderDocuments?: Dfareporting.Schema.OrderDocument[] | undefined;
            }
            interface OrdersListResponse {
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                orders?: Dfareporting.Schema.Order[] | undefined;
            }
            interface PathToConversionReportCompatibleFields {
                conversionDimensions?: Dfareporting.Schema.Dimension[] | undefined;
                customFloodlightVariables?: Dfareporting.Schema.Dimension[] | undefined;
                kind?: string | undefined;
                metrics?: Dfareporting.Schema.Metric[] | undefined;
                perInteractionDimensions?: Dfareporting.Schema.Dimension[] | undefined;
            }
            interface Placement {
                accountId?: string | undefined;
                adBlockingOptOut?: boolean | undefined;
                additionalSizes?: Dfareporting.Schema.Size[] | undefined;
                advertiserId?: string | undefined;
                advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                archived?: boolean | undefined;
                campaignId?: string | undefined;
                campaignIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                comment?: string | undefined;
                compatibility?: string | undefined;
                contentCategoryId?: string | undefined;
                createInfo?: Dfareporting.Schema.LastModifiedInfo | undefined;
                directorySiteId?: string | undefined;
                directorySiteIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                externalId?: string | undefined;
                id?: string | undefined;
                idDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                keyName?: string | undefined;
                kind?: string | undefined;
                lastModifiedInfo?: Dfareporting.Schema.LastModifiedInfo | undefined;
                lookbackConfiguration?: Dfareporting.Schema.LookbackConfiguration | undefined;
                name?: string | undefined;
                paymentApproved?: boolean | undefined;
                paymentSource?: string | undefined;
                placementGroupId?: string | undefined;
                placementGroupIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                placementStrategyId?: string | undefined;
                pricingSchedule?: Dfareporting.Schema.PricingSchedule | undefined;
                primary?: boolean | undefined;
                publisherUpdateInfo?: Dfareporting.Schema.LastModifiedInfo | undefined;
                siteId?: string | undefined;
                siteIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                size?: Dfareporting.Schema.Size | undefined;
                sslRequired?: boolean | undefined;
                status?: string | undefined;
                subaccountId?: string | undefined;
                tagFormats?: string[] | undefined;
                tagSetting?: Dfareporting.Schema.TagSetting | undefined;
                videoActiveViewOptOut?: boolean | undefined;
                videoSettings?: Dfareporting.Schema.VideoSettings | undefined;
                vpaidAdapterChoice?: string | undefined;
            }
            interface PlacementAssignment {
                active?: boolean | undefined;
                placementId?: string | undefined;
                placementIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                sslRequired?: boolean | undefined;
            }
            interface PlacementGroup {
                accountId?: string | undefined;
                advertiserId?: string | undefined;
                advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                archived?: boolean | undefined;
                campaignId?: string | undefined;
                campaignIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                childPlacementIds?: string[] | undefined;
                comment?: string | undefined;
                contentCategoryId?: string | undefined;
                createInfo?: Dfareporting.Schema.LastModifiedInfo | undefined;
                directorySiteId?: string | undefined;
                directorySiteIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                externalId?: string | undefined;
                id?: string | undefined;
                idDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                kind?: string | undefined;
                lastModifiedInfo?: Dfareporting.Schema.LastModifiedInfo | undefined;
                name?: string | undefined;
                placementGroupType?: string | undefined;
                placementStrategyId?: string | undefined;
                pricingSchedule?: Dfareporting.Schema.PricingSchedule | undefined;
                primaryPlacementId?: string | undefined;
                primaryPlacementIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                siteId?: string | undefined;
                siteIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                subaccountId?: string | undefined;
            }
            interface PlacementGroupsListResponse {
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                placementGroups?: Dfareporting.Schema.PlacementGroup[] | undefined;
            }
            interface PlacementStrategiesListResponse {
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                placementStrategies?: Dfareporting.Schema.PlacementStrategy[] | undefined;
            }
            interface PlacementStrategy {
                accountId?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
            }
            interface PlacementTag {
                placementId?: string | undefined;
                tagDatas?: Dfareporting.Schema.TagData[] | undefined;
            }
            interface PlacementsGenerateTagsResponse {
                kind?: string | undefined;
                placementTags?: Dfareporting.Schema.PlacementTag[] | undefined;
            }
            interface PlacementsListResponse {
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                placements?: Dfareporting.Schema.Placement[] | undefined;
            }
            interface PlatformType {
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
            }
            interface PlatformTypesListResponse {
                kind?: string | undefined;
                platformTypes?: Dfareporting.Schema.PlatformType[] | undefined;
            }
            interface PopupWindowProperties {
                dimension?: Dfareporting.Schema.Size | undefined;
                offset?: Dfareporting.Schema.OffsetPosition | undefined;
                positionType?: string | undefined;
                showAddressBar?: boolean | undefined;
                showMenuBar?: boolean | undefined;
                showScrollBar?: boolean | undefined;
                showStatusBar?: boolean | undefined;
                showToolBar?: boolean | undefined;
                title?: string | undefined;
            }
            interface PostalCode {
                code?: string | undefined;
                countryCode?: string | undefined;
                countryDartId?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
            }
            interface PostalCodesListResponse {
                kind?: string | undefined;
                postalCodes?: Dfareporting.Schema.PostalCode[] | undefined;
            }
            interface Pricing {
                capCostType?: string | undefined;
                endDate?: string | undefined;
                flights?: Dfareporting.Schema.Flight[] | undefined;
                groupType?: string | undefined;
                pricingType?: string | undefined;
                startDate?: string | undefined;
            }
            interface PricingSchedule {
                capCostOption?: string | undefined;
                disregardOverdelivery?: boolean | undefined;
                endDate?: string | undefined;
                flighted?: boolean | undefined;
                floodlightActivityId?: string | undefined;
                pricingPeriods?: Dfareporting.Schema.PricingSchedulePricingPeriod[] | undefined;
                pricingType?: string | undefined;
                startDate?: string | undefined;
                testingStartDate?: string | undefined;
            }
            interface PricingSchedulePricingPeriod {
                endDate?: string | undefined;
                pricingComment?: string | undefined;
                rateOrCostNanos?: string | undefined;
                startDate?: string | undefined;
                units?: string | undefined;
            }
            interface Project {
                accountId?: string | undefined;
                advertiserId?: string | undefined;
                audienceAgeGroup?: string | undefined;
                audienceGender?: string | undefined;
                budget?: string | undefined;
                clientBillingCode?: string | undefined;
                clientName?: string | undefined;
                endDate?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                lastModifiedInfo?: Dfareporting.Schema.LastModifiedInfo | undefined;
                name?: string | undefined;
                overview?: string | undefined;
                startDate?: string | undefined;
                subaccountId?: string | undefined;
                targetClicks?: string | undefined;
                targetConversions?: string | undefined;
                targetCpaNanos?: string | undefined;
                targetCpcNanos?: string | undefined;
                targetCpmActiveViewNanos?: string | undefined;
                targetCpmNanos?: string | undefined;
                targetImpressions?: string | undefined;
            }
            interface ProjectsListResponse {
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                projects?: Dfareporting.Schema.Project[] | undefined;
            }
            interface ReachReportCompatibleFields {
                dimensionFilters?: Dfareporting.Schema.Dimension[] | undefined;
                dimensions?: Dfareporting.Schema.Dimension[] | undefined;
                kind?: string | undefined;
                metrics?: Dfareporting.Schema.Metric[] | undefined;
                pivotedActivityMetrics?: Dfareporting.Schema.Metric[] | undefined;
                reachByFrequencyMetrics?: Dfareporting.Schema.Metric[] | undefined;
            }
            interface Recipient {
                deliveryType?: string | undefined;
                email?: string | undefined;
                kind?: string | undefined;
            }
            interface Region {
                countryCode?: string | undefined;
                countryDartId?: string | undefined;
                dartId?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                regionCode?: string | undefined;
            }
            interface RegionsListResponse {
                kind?: string | undefined;
                regions?: Dfareporting.Schema.Region[] | undefined;
            }
            interface RemarketingList {
                accountId?: string | undefined;
                active?: boolean | undefined;
                advertiserId?: string | undefined;
                advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                description?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                lifeSpan?: string | undefined;
                listPopulationRule?: Dfareporting.Schema.ListPopulationRule | undefined;
                listSize?: string | undefined;
                listSource?: string | undefined;
                name?: string | undefined;
                subaccountId?: string | undefined;
            }
            interface RemarketingListShare {
                kind?: string | undefined;
                remarketingListId?: string | undefined;
                sharedAccountIds?: string[] | undefined;
                sharedAdvertiserIds?: string[] | undefined;
            }
            interface RemarketingListsListResponse {
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                remarketingLists?: Dfareporting.Schema.RemarketingList[] | undefined;
            }
            interface Report {
                accountId?: string | undefined;
                criteria?: Dfareporting.Schema.ReportCriteria | undefined;
                crossDimensionReachCriteria?: Dfareporting.Schema.ReportCrossDimensionReachCriteria | undefined;
                delivery?: Dfareporting.Schema.ReportDelivery | undefined;
                etag?: string | undefined;
                fileName?: string | undefined;
                floodlightCriteria?: Dfareporting.Schema.ReportFloodlightCriteria | undefined;
                format?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                lastModifiedTime?: string | undefined;
                name?: string | undefined;
                ownerProfileId?: string | undefined;
                pathToConversionCriteria?: Dfareporting.Schema.ReportPathToConversionCriteria | undefined;
                reachCriteria?: Dfareporting.Schema.ReportReachCriteria | undefined;
                schedule?: Dfareporting.Schema.ReportSchedule | undefined;
                subAccountId?: string | undefined;
                type?: string | undefined;
            }
            interface ReportCompatibleFields {
                dimensionFilters?: Dfareporting.Schema.Dimension[] | undefined;
                dimensions?: Dfareporting.Schema.Dimension[] | undefined;
                kind?: string | undefined;
                metrics?: Dfareporting.Schema.Metric[] | undefined;
                pivotedActivityMetrics?: Dfareporting.Schema.Metric[] | undefined;
            }
            interface ReportCriteria {
                activities?: Dfareporting.Schema.Activities | undefined;
                customRichMediaEvents?: Dfareporting.Schema.CustomRichMediaEvents | undefined;
                dateRange?: Dfareporting.Schema.DateRange | undefined;
                dimensionFilters?: Dfareporting.Schema.DimensionValue[] | undefined;
                dimensions?: Dfareporting.Schema.SortedDimension[] | undefined;
                metricNames?: string[] | undefined;
            }
            interface ReportCrossDimensionReachCriteria {
                breakdown?: Dfareporting.Schema.SortedDimension[] | undefined;
                dateRange?: Dfareporting.Schema.DateRange | undefined;
                dimension?: string | undefined;
                dimensionFilters?: Dfareporting.Schema.DimensionValue[] | undefined;
                metricNames?: string[] | undefined;
                overlapMetricNames?: string[] | undefined;
                pivoted?: boolean | undefined;
            }
            interface ReportDelivery {
                emailOwner?: boolean | undefined;
                emailOwnerDeliveryType?: string | undefined;
                message?: string | undefined;
                recipients?: Dfareporting.Schema.Recipient[] | undefined;
            }
            interface ReportFloodlightCriteria {
                customRichMediaEvents?: Dfareporting.Schema.DimensionValue[] | undefined;
                dateRange?: Dfareporting.Schema.DateRange | undefined;
                dimensionFilters?: Dfareporting.Schema.DimensionValue[] | undefined;
                dimensions?: Dfareporting.Schema.SortedDimension[] | undefined;
                floodlightConfigId?: Dfareporting.Schema.DimensionValue | undefined;
                metricNames?: string[] | undefined;
                reportProperties?: Dfareporting.Schema.ReportFloodlightCriteriaReportProperties | undefined;
            }
            interface ReportFloodlightCriteriaReportProperties {
                includeAttributedIPConversions?: boolean | undefined;
                includeUnattributedCookieConversions?: boolean | undefined;
                includeUnattributedIPConversions?: boolean | undefined;
            }
            interface ReportList {
                etag?: string | undefined;
                items?: Dfareporting.Schema.Report[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface ReportPathToConversionCriteria {
                activityFilters?: Dfareporting.Schema.DimensionValue[] | undefined;
                conversionDimensions?: Dfareporting.Schema.SortedDimension[] | undefined;
                customFloodlightVariables?: Dfareporting.Schema.SortedDimension[] | undefined;
                customRichMediaEvents?: Dfareporting.Schema.DimensionValue[] | undefined;
                dateRange?: Dfareporting.Schema.DateRange | undefined;
                floodlightConfigId?: Dfareporting.Schema.DimensionValue | undefined;
                metricNames?: string[] | undefined;
                perInteractionDimensions?: Dfareporting.Schema.SortedDimension[] | undefined;
                reportProperties?: Dfareporting.Schema.ReportPathToConversionCriteriaReportProperties | undefined;
            }
            interface ReportPathToConversionCriteriaReportProperties {
                clicksLookbackWindow?: number | undefined;
                impressionsLookbackWindow?: number | undefined;
                includeAttributedIPConversions?: boolean | undefined;
                includeUnattributedCookieConversions?: boolean | undefined;
                includeUnattributedIPConversions?: boolean | undefined;
                maximumClickInteractions?: number | undefined;
                maximumImpressionInteractions?: number | undefined;
                maximumInteractionGap?: number | undefined;
                pivotOnInteractionPath?: boolean | undefined;
            }
            interface ReportReachCriteria {
                activities?: Dfareporting.Schema.Activities | undefined;
                customRichMediaEvents?: Dfareporting.Schema.CustomRichMediaEvents | undefined;
                dateRange?: Dfareporting.Schema.DateRange | undefined;
                dimensionFilters?: Dfareporting.Schema.DimensionValue[] | undefined;
                dimensions?: Dfareporting.Schema.SortedDimension[] | undefined;
                enableAllDimensionCombinations?: boolean | undefined;
                metricNames?: string[] | undefined;
                reachByFrequencyMetricNames?: string[] | undefined;
            }
            interface ReportSchedule {
                active?: boolean | undefined;
                every?: number | undefined;
                expirationDate?: string | undefined;
                repeats?: string | undefined;
                repeatsOnWeekDays?: string[] | undefined;
                runsOnDayOfMonth?: string | undefined;
                startDate?: string | undefined;
            }
            interface ReportsConfiguration {
                exposureToConversionEnabled?: boolean | undefined;
                lookbackConfiguration?: Dfareporting.Schema.LookbackConfiguration | undefined;
                reportGenerationTimeZoneId?: string | undefined;
            }
            interface RichMediaExitOverride {
                clickThroughUrl?: Dfareporting.Schema.ClickThroughUrl | undefined;
                enabled?: boolean | undefined;
                exitId?: string | undefined;
            }
            interface Rule {
                assetId?: string | undefined;
                name?: string | undefined;
                targetingTemplateId?: string | undefined;
            }
            interface Site {
                accountId?: string | undefined;
                approved?: boolean | undefined;
                directorySiteId?: string | undefined;
                directorySiteIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                id?: string | undefined;
                idDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                keyName?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                siteContacts?: Dfareporting.Schema.SiteContact[] | undefined;
                siteSettings?: Dfareporting.Schema.SiteSettings | undefined;
                subaccountId?: string | undefined;
                videoSettings?: Dfareporting.Schema.SiteVideoSettings | undefined;
            }
            interface SiteCompanionSetting {
                companionsDisabled?: boolean | undefined;
                enabledSizes?: Dfareporting.Schema.Size[] | undefined;
                imageOnly?: boolean | undefined;
                kind?: string | undefined;
            }
            interface SiteContact {
                address?: string | undefined;
                contactType?: string | undefined;
                email?: string | undefined;
                firstName?: string | undefined;
                id?: string | undefined;
                lastName?: string | undefined;
                phone?: string | undefined;
                title?: string | undefined;
            }
            interface SiteSettings {
                activeViewOptOut?: boolean | undefined;
                adBlockingOptOut?: boolean | undefined;
                disableNewCookie?: boolean | undefined;
                tagSetting?: Dfareporting.Schema.TagSetting | undefined;
                videoActiveViewOptOutTemplate?: boolean | undefined;
                vpaidAdapterChoiceTemplate?: string | undefined;
            }
            interface SiteSkippableSetting {
                kind?: string | undefined;
                progressOffset?: Dfareporting.Schema.VideoOffset | undefined;
                skipOffset?: Dfareporting.Schema.VideoOffset | undefined;
                skippable?: boolean | undefined;
            }
            interface SiteTranscodeSetting {
                enabledVideoFormats?: number[] | undefined;
                kind?: string | undefined;
            }
            interface SiteVideoSettings {
                companionSettings?: Dfareporting.Schema.SiteCompanionSetting | undefined;
                kind?: string | undefined;
                orientation?: string | undefined;
                skippableSettings?: Dfareporting.Schema.SiteSkippableSetting | undefined;
                transcodeSettings?: Dfareporting.Schema.SiteTranscodeSetting | undefined;
            }
            interface SitesListResponse {
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                sites?: Dfareporting.Schema.Site[] | undefined;
            }
            interface Size {
                height?: number | undefined;
                iab?: boolean | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                width?: number | undefined;
            }
            interface SizesListResponse {
                kind?: string | undefined;
                sizes?: Dfareporting.Schema.Size[] | undefined;
            }
            interface SkippableSetting {
                kind?: string | undefined;
                progressOffset?: Dfareporting.Schema.VideoOffset | undefined;
                skipOffset?: Dfareporting.Schema.VideoOffset | undefined;
                skippable?: boolean | undefined;
            }
            interface SortedDimension {
                kind?: string | undefined;
                name?: string | undefined;
                sortOrder?: string | undefined;
            }
            interface Subaccount {
                accountId?: string | undefined;
                availablePermissionIds?: string[] | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
            }
            interface SubaccountsListResponse {
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                subaccounts?: Dfareporting.Schema.Subaccount[] | undefined;
            }
            interface TagData {
                adId?: string | undefined;
                clickTag?: string | undefined;
                creativeId?: string | undefined;
                format?: string | undefined;
                impressionTag?: string | undefined;
            }
            interface TagSetting {
                additionalKeyValues?: string | undefined;
                includeClickThroughUrls?: boolean | undefined;
                includeClickTracking?: boolean | undefined;
                keywordOption?: string | undefined;
            }
            interface TagSettings {
                dynamicTagEnabled?: boolean | undefined;
                imageTagEnabled?: boolean | undefined;
            }
            interface TargetWindow {
                customHtml?: string | undefined;
                targetWindowOption?: string | undefined;
            }
            interface TargetableRemarketingList {
                accountId?: string | undefined;
                active?: boolean | undefined;
                advertiserId?: string | undefined;
                advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                description?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                lifeSpan?: string | undefined;
                listSize?: string | undefined;
                listSource?: string | undefined;
                name?: string | undefined;
                subaccountId?: string | undefined;
            }
            interface TargetableRemarketingListsListResponse {
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                targetableRemarketingLists?: Dfareporting.Schema.TargetableRemarketingList[] | undefined;
            }
            interface TargetingTemplate {
                accountId?: string | undefined;
                advertiserId?: string | undefined;
                advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue | undefined;
                dayPartTargeting?: Dfareporting.Schema.DayPartTargeting | undefined;
                geoTargeting?: Dfareporting.Schema.GeoTargeting | undefined;
                id?: string | undefined;
                keyValueTargetingExpression?: Dfareporting.Schema.KeyValueTargetingExpression | undefined;
                kind?: string | undefined;
                languageTargeting?: Dfareporting.Schema.LanguageTargeting | undefined;
                listTargetingExpression?: Dfareporting.Schema.ListTargetingExpression | undefined;
                name?: string | undefined;
                subaccountId?: string | undefined;
                technologyTargeting?: Dfareporting.Schema.TechnologyTargeting | undefined;
            }
            interface TargetingTemplatesListResponse {
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                targetingTemplates?: Dfareporting.Schema.TargetingTemplate[] | undefined;
            }
            interface TechnologyTargeting {
                browsers?: Dfareporting.Schema.Browser[] | undefined;
                connectionTypes?: Dfareporting.Schema.ConnectionType[] | undefined;
                mobileCarriers?: Dfareporting.Schema.MobileCarrier[] | undefined;
                operatingSystemVersions?: Dfareporting.Schema.OperatingSystemVersion[] | undefined;
                operatingSystems?: Dfareporting.Schema.OperatingSystem[] | undefined;
                platformTypes?: Dfareporting.Schema.PlatformType[] | undefined;
            }
            interface ThirdPartyAuthenticationToken {
                name?: string | undefined;
                value?: string | undefined;
            }
            interface ThirdPartyTrackingUrl {
                thirdPartyUrlType?: string | undefined;
                url?: string | undefined;
            }
            interface TranscodeSetting {
                enabledVideoFormats?: number[] | undefined;
                kind?: string | undefined;
            }
            interface UniversalAdId {
                registry?: string | undefined;
                value?: string | undefined;
            }
            interface UserDefinedVariableConfiguration {
                dataType?: string | undefined;
                reportName?: string | undefined;
                variableType?: string | undefined;
            }
            interface UserProfile {
                accountId?: string | undefined;
                accountName?: string | undefined;
                etag?: string | undefined;
                kind?: string | undefined;
                profileId?: string | undefined;
                subAccountId?: string | undefined;
                subAccountName?: string | undefined;
                userName?: string | undefined;
            }
            interface UserProfileList {
                etag?: string | undefined;
                items?: Dfareporting.Schema.UserProfile[] | undefined;
                kind?: string | undefined;
            }
            interface UserRole {
                accountId?: string | undefined;
                defaultUserRole?: boolean | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                parentUserRoleId?: string | undefined;
                permissions?: Dfareporting.Schema.UserRolePermission[] | undefined;
                subaccountId?: string | undefined;
            }
            interface UserRolePermission {
                availability?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                permissionGroupId?: string | undefined;
            }
            interface UserRolePermissionGroup {
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
            }
            interface UserRolePermissionGroupsListResponse {
                kind?: string | undefined;
                userRolePermissionGroups?: Dfareporting.Schema.UserRolePermissionGroup[] | undefined;
            }
            interface UserRolePermissionsListResponse {
                kind?: string | undefined;
                userRolePermissions?: Dfareporting.Schema.UserRolePermission[] | undefined;
            }
            interface UserRolesListResponse {
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                userRoles?: Dfareporting.Schema.UserRole[] | undefined;
            }
            interface VideoFormat {
                fileType?: string | undefined;
                id?: number | undefined;
                kind?: string | undefined;
                resolution?: Dfareporting.Schema.Size | undefined;
                targetBitRate?: number | undefined;
            }
            interface VideoFormatsListResponse {
                kind?: string | undefined;
                videoFormats?: Dfareporting.Schema.VideoFormat[] | undefined;
            }
            interface VideoOffset {
                offsetPercentage?: number | undefined;
                offsetSeconds?: number | undefined;
            }
            interface VideoSettings {
                companionSettings?: Dfareporting.Schema.CompanionSetting | undefined;
                kind?: string | undefined;
                orientation?: string | undefined;
                skippableSettings?: Dfareporting.Schema.SkippableSetting | undefined;
                transcodeSettings?: Dfareporting.Schema.TranscodeSetting | undefined;
            }
        }
    }
    interface Dfareporting {
        AccountActiveAdSummaries?: Dfareporting.Collection.AccountActiveAdSummariesCollection | undefined;
        AccountPermissionGroups?: Dfareporting.Collection.AccountPermissionGroupsCollection | undefined;
        AccountPermissions?: Dfareporting.Collection.AccountPermissionsCollection | undefined;
        AccountUserProfiles?: Dfareporting.Collection.AccountUserProfilesCollection | undefined;
        Accounts?: Dfareporting.Collection.AccountsCollection | undefined;
        Ads?: Dfareporting.Collection.AdsCollection | undefined;
        AdvertiserGroups?: Dfareporting.Collection.AdvertiserGroupsCollection | undefined;
        AdvertiserLandingPages?: Dfareporting.Collection.AdvertiserLandingPagesCollection | undefined;
        Advertisers?: Dfareporting.Collection.AdvertisersCollection | undefined;
        Browsers?: Dfareporting.Collection.BrowsersCollection | undefined;
        CampaignCreativeAssociations?: Dfareporting.Collection.CampaignCreativeAssociationsCollection | undefined;
        Campaigns?: Dfareporting.Collection.CampaignsCollection | undefined;
        ChangeLogs?: Dfareporting.Collection.ChangeLogsCollection | undefined;
        Cities?: Dfareporting.Collection.CitiesCollection | undefined;
        ConnectionTypes?: Dfareporting.Collection.ConnectionTypesCollection | undefined;
        ContentCategories?: Dfareporting.Collection.ContentCategoriesCollection | undefined;
        Conversions?: Dfareporting.Collection.ConversionsCollection | undefined;
        Countries?: Dfareporting.Collection.CountriesCollection | undefined;
        CreativeAssets?: Dfareporting.Collection.CreativeAssetsCollection | undefined;
        CreativeFieldValues?: Dfareporting.Collection.CreativeFieldValuesCollection | undefined;
        CreativeFields?: Dfareporting.Collection.CreativeFieldsCollection | undefined;
        CreativeGroups?: Dfareporting.Collection.CreativeGroupsCollection | undefined;
        Creatives?: Dfareporting.Collection.CreativesCollection | undefined;
        DimensionValues?: Dfareporting.Collection.DimensionValuesCollection | undefined;
        DirectorySites?: Dfareporting.Collection.DirectorySitesCollection | undefined;
        DynamicTargetingKeys?: Dfareporting.Collection.DynamicTargetingKeysCollection | undefined;
        EventTags?: Dfareporting.Collection.EventTagsCollection | undefined;
        Files?: Dfareporting.Collection.FilesCollection | undefined;
        FloodlightActivities?: Dfareporting.Collection.FloodlightActivitiesCollection | undefined;
        FloodlightActivityGroups?: Dfareporting.Collection.FloodlightActivityGroupsCollection | undefined;
        FloodlightConfigurations?: Dfareporting.Collection.FloodlightConfigurationsCollection | undefined;
        InventoryItems?: Dfareporting.Collection.InventoryItemsCollection | undefined;
        Languages?: Dfareporting.Collection.LanguagesCollection | undefined;
        Metros?: Dfareporting.Collection.MetrosCollection | undefined;
        MobileApps?: Dfareporting.Collection.MobileAppsCollection | undefined;
        MobileCarriers?: Dfareporting.Collection.MobileCarriersCollection | undefined;
        OperatingSystemVersions?: Dfareporting.Collection.OperatingSystemVersionsCollection | undefined;
        OperatingSystems?: Dfareporting.Collection.OperatingSystemsCollection | undefined;
        OrderDocuments?: Dfareporting.Collection.OrderDocumentsCollection | undefined;
        Orders?: Dfareporting.Collection.OrdersCollection | undefined;
        PlacementGroups?: Dfareporting.Collection.PlacementGroupsCollection | undefined;
        PlacementStrategies?: Dfareporting.Collection.PlacementStrategiesCollection | undefined;
        Placements?: Dfareporting.Collection.PlacementsCollection | undefined;
        PlatformTypes?: Dfareporting.Collection.PlatformTypesCollection | undefined;
        PostalCodes?: Dfareporting.Collection.PostalCodesCollection | undefined;
        Projects?: Dfareporting.Collection.ProjectsCollection | undefined;
        Regions?: Dfareporting.Collection.RegionsCollection | undefined;
        RemarketingListShares?: Dfareporting.Collection.RemarketingListSharesCollection | undefined;
        RemarketingLists?: Dfareporting.Collection.RemarketingListsCollection | undefined;
        Reports?: Dfareporting.Collection.ReportsCollection | undefined;
        Sites?: Dfareporting.Collection.SitesCollection | undefined;
        Sizes?: Dfareporting.Collection.SizesCollection | undefined;
        Subaccounts?: Dfareporting.Collection.SubaccountsCollection | undefined;
        TargetableRemarketingLists?: Dfareporting.Collection.TargetableRemarketingListsCollection | undefined;
        TargetingTemplates?: Dfareporting.Collection.TargetingTemplatesCollection | undefined;
        UserProfiles?: Dfareporting.Collection.UserProfilesCollection | undefined;
        UserRolePermissionGroups?: Dfareporting.Collection.UserRolePermissionGroupsCollection | undefined;
        UserRolePermissions?: Dfareporting.Collection.UserRolePermissionsCollection | undefined;
        UserRoles?: Dfareporting.Collection.UserRolesCollection | undefined;
        VideoFormats?: Dfareporting.Collection.VideoFormatsCollection | undefined;
        // Create a new instance of Account
        newAccount(): Dfareporting.Schema.Account;
        // Create a new instance of AccountUserProfile
        newAccountUserProfile(): Dfareporting.Schema.AccountUserProfile;
        // Create a new instance of Activities
        newActivities(): Dfareporting.Schema.Activities;
        // Create a new instance of Ad
        newAd(): Dfareporting.Schema.Ad;
        // Create a new instance of AdBlockingConfiguration
        newAdBlockingConfiguration(): Dfareporting.Schema.AdBlockingConfiguration;
        // Create a new instance of Advertiser
        newAdvertiser(): Dfareporting.Schema.Advertiser;
        // Create a new instance of AdvertiserGroup
        newAdvertiserGroup(): Dfareporting.Schema.AdvertiserGroup;
        // Create a new instance of AudienceSegment
        newAudienceSegment(): Dfareporting.Schema.AudienceSegment;
        // Create a new instance of AudienceSegmentGroup
        newAudienceSegmentGroup(): Dfareporting.Schema.AudienceSegmentGroup;
        // Create a new instance of Browser
        newBrowser(): Dfareporting.Schema.Browser;
        // Create a new instance of Campaign
        newCampaign(): Dfareporting.Schema.Campaign;
        // Create a new instance of CampaignCreativeAssociation
        newCampaignCreativeAssociation(): Dfareporting.Schema.CampaignCreativeAssociation;
        // Create a new instance of City
        newCity(): Dfareporting.Schema.City;
        // Create a new instance of ClickTag
        newClickTag(): Dfareporting.Schema.ClickTag;
        // Create a new instance of ClickThroughUrl
        newClickThroughUrl(): Dfareporting.Schema.ClickThroughUrl;
        // Create a new instance of ClickThroughUrlSuffixProperties
        newClickThroughUrlSuffixProperties(): Dfareporting.Schema.ClickThroughUrlSuffixProperties;
        // Create a new instance of CompanionClickThroughOverride
        newCompanionClickThroughOverride(): Dfareporting.Schema.CompanionClickThroughOverride;
        // Create a new instance of CompanionSetting
        newCompanionSetting(): Dfareporting.Schema.CompanionSetting;
        // Create a new instance of ConnectionType
        newConnectionType(): Dfareporting.Schema.ConnectionType;
        // Create a new instance of ContentCategory
        newContentCategory(): Dfareporting.Schema.ContentCategory;
        // Create a new instance of Conversion
        newConversion(): Dfareporting.Schema.Conversion;
        // Create a new instance of ConversionsBatchInsertRequest
        newConversionsBatchInsertRequest(): Dfareporting.Schema.ConversionsBatchInsertRequest;
        // Create a new instance of ConversionsBatchUpdateRequest
        newConversionsBatchUpdateRequest(): Dfareporting.Schema.ConversionsBatchUpdateRequest;
        // Create a new instance of Country
        newCountry(): Dfareporting.Schema.Country;
        // Create a new instance of Creative
        newCreative(): Dfareporting.Schema.Creative;
        // Create a new instance of CreativeAsset
        newCreativeAsset(): Dfareporting.Schema.CreativeAsset;
        // Create a new instance of CreativeAssetId
        newCreativeAssetId(): Dfareporting.Schema.CreativeAssetId;
        // Create a new instance of CreativeAssetMetadata
        newCreativeAssetMetadata(): Dfareporting.Schema.CreativeAssetMetadata;
        // Create a new instance of CreativeAssetSelection
        newCreativeAssetSelection(): Dfareporting.Schema.CreativeAssetSelection;
        // Create a new instance of CreativeAssignment
        newCreativeAssignment(): Dfareporting.Schema.CreativeAssignment;
        // Create a new instance of CreativeClickThroughUrl
        newCreativeClickThroughUrl(): Dfareporting.Schema.CreativeClickThroughUrl;
        // Create a new instance of CreativeCustomEvent
        newCreativeCustomEvent(): Dfareporting.Schema.CreativeCustomEvent;
        // Create a new instance of CreativeField
        newCreativeField(): Dfareporting.Schema.CreativeField;
        // Create a new instance of CreativeFieldAssignment
        newCreativeFieldAssignment(): Dfareporting.Schema.CreativeFieldAssignment;
        // Create a new instance of CreativeFieldValue
        newCreativeFieldValue(): Dfareporting.Schema.CreativeFieldValue;
        // Create a new instance of CreativeGroup
        newCreativeGroup(): Dfareporting.Schema.CreativeGroup;
        // Create a new instance of CreativeGroupAssignment
        newCreativeGroupAssignment(): Dfareporting.Schema.CreativeGroupAssignment;
        // Create a new instance of CreativeOptimizationConfiguration
        newCreativeOptimizationConfiguration(): Dfareporting.Schema.CreativeOptimizationConfiguration;
        // Create a new instance of CreativeRotation
        newCreativeRotation(): Dfareporting.Schema.CreativeRotation;
        // Create a new instance of CustomFloodlightVariable
        newCustomFloodlightVariable(): Dfareporting.Schema.CustomFloodlightVariable;
        // Create a new instance of CustomRichMediaEvents
        newCustomRichMediaEvents(): Dfareporting.Schema.CustomRichMediaEvents;
        // Create a new instance of CustomViewabilityMetric
        newCustomViewabilityMetric(): Dfareporting.Schema.CustomViewabilityMetric;
        // Create a new instance of CustomViewabilityMetricConfiguration
        newCustomViewabilityMetricConfiguration(): Dfareporting.Schema.CustomViewabilityMetricConfiguration;
        // Create a new instance of DateRange
        newDateRange(): Dfareporting.Schema.DateRange;
        // Create a new instance of DayPartTargeting
        newDayPartTargeting(): Dfareporting.Schema.DayPartTargeting;
        // Create a new instance of DeepLink
        newDeepLink(): Dfareporting.Schema.DeepLink;
        // Create a new instance of DefaultClickThroughEventTagProperties
        newDefaultClickThroughEventTagProperties(): Dfareporting.Schema.DefaultClickThroughEventTagProperties;
        // Create a new instance of DeliverySchedule
        newDeliverySchedule(): Dfareporting.Schema.DeliverySchedule;
        // Create a new instance of DfpSettings
        newDfpSettings(): Dfareporting.Schema.DfpSettings;
        // Create a new instance of DimensionFilter
        newDimensionFilter(): Dfareporting.Schema.DimensionFilter;
        // Create a new instance of DimensionValue
        newDimensionValue(): Dfareporting.Schema.DimensionValue;
        // Create a new instance of DimensionValueRequest
        newDimensionValueRequest(): Dfareporting.Schema.DimensionValueRequest;
        // Create a new instance of DirectorySite
        newDirectorySite(): Dfareporting.Schema.DirectorySite;
        // Create a new instance of DirectorySiteSettings
        newDirectorySiteSettings(): Dfareporting.Schema.DirectorySiteSettings;
        // Create a new instance of DynamicTargetingKey
        newDynamicTargetingKey(): Dfareporting.Schema.DynamicTargetingKey;
        // Create a new instance of EncryptionInfo
        newEncryptionInfo(): Dfareporting.Schema.EncryptionInfo;
        // Create a new instance of EventTag
        newEventTag(): Dfareporting.Schema.EventTag;
        // Create a new instance of EventTagOverride
        newEventTagOverride(): Dfareporting.Schema.EventTagOverride;
        // Create a new instance of FloodlightActivity
        newFloodlightActivity(): Dfareporting.Schema.FloodlightActivity;
        // Create a new instance of FloodlightActivityDynamicTag
        newFloodlightActivityDynamicTag(): Dfareporting.Schema.FloodlightActivityDynamicTag;
        // Create a new instance of FloodlightActivityGroup
        newFloodlightActivityGroup(): Dfareporting.Schema.FloodlightActivityGroup;
        // Create a new instance of FloodlightActivityPublisherDynamicTag
        newFloodlightActivityPublisherDynamicTag(): Dfareporting.Schema.FloodlightActivityPublisherDynamicTag;
        // Create a new instance of FloodlightConfiguration
        newFloodlightConfiguration(): Dfareporting.Schema.FloodlightConfiguration;
        // Create a new instance of FrequencyCap
        newFrequencyCap(): Dfareporting.Schema.FrequencyCap;
        // Create a new instance of FsCommand
        newFsCommand(): Dfareporting.Schema.FsCommand;
        // Create a new instance of GeoTargeting
        newGeoTargeting(): Dfareporting.Schema.GeoTargeting;
        // Create a new instance of KeyValueTargetingExpression
        newKeyValueTargetingExpression(): Dfareporting.Schema.KeyValueTargetingExpression;
        // Create a new instance of LandingPage
        newLandingPage(): Dfareporting.Schema.LandingPage;
        // Create a new instance of Language
        newLanguage(): Dfareporting.Schema.Language;
        // Create a new instance of LanguageTargeting
        newLanguageTargeting(): Dfareporting.Schema.LanguageTargeting;
        // Create a new instance of LastModifiedInfo
        newLastModifiedInfo(): Dfareporting.Schema.LastModifiedInfo;
        // Create a new instance of ListPopulationClause
        newListPopulationClause(): Dfareporting.Schema.ListPopulationClause;
        // Create a new instance of ListPopulationRule
        newListPopulationRule(): Dfareporting.Schema.ListPopulationRule;
        // Create a new instance of ListPopulationTerm
        newListPopulationTerm(): Dfareporting.Schema.ListPopulationTerm;
        // Create a new instance of ListTargetingExpression
        newListTargetingExpression(): Dfareporting.Schema.ListTargetingExpression;
        // Create a new instance of LookbackConfiguration
        newLookbackConfiguration(): Dfareporting.Schema.LookbackConfiguration;
        // Create a new instance of Metro
        newMetro(): Dfareporting.Schema.Metro;
        // Create a new instance of MobileApp
        newMobileApp(): Dfareporting.Schema.MobileApp;
        // Create a new instance of MobileCarrier
        newMobileCarrier(): Dfareporting.Schema.MobileCarrier;
        // Create a new instance of ObjectFilter
        newObjectFilter(): Dfareporting.Schema.ObjectFilter;
        // Create a new instance of OffsetPosition
        newOffsetPosition(): Dfareporting.Schema.OffsetPosition;
        // Create a new instance of OmnitureSettings
        newOmnitureSettings(): Dfareporting.Schema.OmnitureSettings;
        // Create a new instance of OperatingSystem
        newOperatingSystem(): Dfareporting.Schema.OperatingSystem;
        // Create a new instance of OperatingSystemVersion
        newOperatingSystemVersion(): Dfareporting.Schema.OperatingSystemVersion;
        // Create a new instance of OptimizationActivity
        newOptimizationActivity(): Dfareporting.Schema.OptimizationActivity;
        // Create a new instance of Placement
        newPlacement(): Dfareporting.Schema.Placement;
        // Create a new instance of PlacementAssignment
        newPlacementAssignment(): Dfareporting.Schema.PlacementAssignment;
        // Create a new instance of PlacementGroup
        newPlacementGroup(): Dfareporting.Schema.PlacementGroup;
        // Create a new instance of PlacementStrategy
        newPlacementStrategy(): Dfareporting.Schema.PlacementStrategy;
        // Create a new instance of PlatformType
        newPlatformType(): Dfareporting.Schema.PlatformType;
        // Create a new instance of PopupWindowProperties
        newPopupWindowProperties(): Dfareporting.Schema.PopupWindowProperties;
        // Create a new instance of PostalCode
        newPostalCode(): Dfareporting.Schema.PostalCode;
        // Create a new instance of PricingSchedule
        newPricingSchedule(): Dfareporting.Schema.PricingSchedule;
        // Create a new instance of PricingSchedulePricingPeriod
        newPricingSchedulePricingPeriod(): Dfareporting.Schema.PricingSchedulePricingPeriod;
        // Create a new instance of Recipient
        newRecipient(): Dfareporting.Schema.Recipient;
        // Create a new instance of Region
        newRegion(): Dfareporting.Schema.Region;
        // Create a new instance of RemarketingList
        newRemarketingList(): Dfareporting.Schema.RemarketingList;
        // Create a new instance of RemarketingListShare
        newRemarketingListShare(): Dfareporting.Schema.RemarketingListShare;
        // Create a new instance of Report
        newReport(): Dfareporting.Schema.Report;
        // Create a new instance of ReportCriteria
        newReportCriteria(): Dfareporting.Schema.ReportCriteria;
        // Create a new instance of ReportCrossDimensionReachCriteria
        newReportCrossDimensionReachCriteria(): Dfareporting.Schema.ReportCrossDimensionReachCriteria;
        // Create a new instance of ReportDelivery
        newReportDelivery(): Dfareporting.Schema.ReportDelivery;
        // Create a new instance of ReportFloodlightCriteria
        newReportFloodlightCriteria(): Dfareporting.Schema.ReportFloodlightCriteria;
        // Create a new instance of ReportFloodlightCriteriaReportProperties
        newReportFloodlightCriteriaReportProperties(): Dfareporting.Schema.ReportFloodlightCriteriaReportProperties;
        // Create a new instance of ReportPathToConversionCriteria
        newReportPathToConversionCriteria(): Dfareporting.Schema.ReportPathToConversionCriteria;
        // Create a new instance of ReportPathToConversionCriteriaReportProperties
        newReportPathToConversionCriteriaReportProperties(): Dfareporting.Schema.ReportPathToConversionCriteriaReportProperties;
        // Create a new instance of ReportReachCriteria
        newReportReachCriteria(): Dfareporting.Schema.ReportReachCriteria;
        // Create a new instance of ReportSchedule
        newReportSchedule(): Dfareporting.Schema.ReportSchedule;
        // Create a new instance of ReportsConfiguration
        newReportsConfiguration(): Dfareporting.Schema.ReportsConfiguration;
        // Create a new instance of RichMediaExitOverride
        newRichMediaExitOverride(): Dfareporting.Schema.RichMediaExitOverride;
        // Create a new instance of Rule
        newRule(): Dfareporting.Schema.Rule;
        // Create a new instance of Site
        newSite(): Dfareporting.Schema.Site;
        // Create a new instance of SiteCompanionSetting
        newSiteCompanionSetting(): Dfareporting.Schema.SiteCompanionSetting;
        // Create a new instance of SiteContact
        newSiteContact(): Dfareporting.Schema.SiteContact;
        // Create a new instance of SiteSettings
        newSiteSettings(): Dfareporting.Schema.SiteSettings;
        // Create a new instance of SiteSkippableSetting
        newSiteSkippableSetting(): Dfareporting.Schema.SiteSkippableSetting;
        // Create a new instance of SiteTranscodeSetting
        newSiteTranscodeSetting(): Dfareporting.Schema.SiteTranscodeSetting;
        // Create a new instance of SiteVideoSettings
        newSiteVideoSettings(): Dfareporting.Schema.SiteVideoSettings;
        // Create a new instance of Size
        newSize(): Dfareporting.Schema.Size;
        // Create a new instance of SkippableSetting
        newSkippableSetting(): Dfareporting.Schema.SkippableSetting;
        // Create a new instance of SortedDimension
        newSortedDimension(): Dfareporting.Schema.SortedDimension;
        // Create a new instance of Subaccount
        newSubaccount(): Dfareporting.Schema.Subaccount;
        // Create a new instance of TagSetting
        newTagSetting(): Dfareporting.Schema.TagSetting;
        // Create a new instance of TagSettings
        newTagSettings(): Dfareporting.Schema.TagSettings;
        // Create a new instance of TargetWindow
        newTargetWindow(): Dfareporting.Schema.TargetWindow;
        // Create a new instance of TargetingTemplate
        newTargetingTemplate(): Dfareporting.Schema.TargetingTemplate;
        // Create a new instance of TechnologyTargeting
        newTechnologyTargeting(): Dfareporting.Schema.TechnologyTargeting;
        // Create a new instance of ThirdPartyAuthenticationToken
        newThirdPartyAuthenticationToken(): Dfareporting.Schema.ThirdPartyAuthenticationToken;
        // Create a new instance of ThirdPartyTrackingUrl
        newThirdPartyTrackingUrl(): Dfareporting.Schema.ThirdPartyTrackingUrl;
        // Create a new instance of TranscodeSetting
        newTranscodeSetting(): Dfareporting.Schema.TranscodeSetting;
        // Create a new instance of UniversalAdId
        newUniversalAdId(): Dfareporting.Schema.UniversalAdId;
        // Create a new instance of UserDefinedVariableConfiguration
        newUserDefinedVariableConfiguration(): Dfareporting.Schema.UserDefinedVariableConfiguration;
        // Create a new instance of UserRole
        newUserRole(): Dfareporting.Schema.UserRole;
        // Create a new instance of UserRolePermission
        newUserRolePermission(): Dfareporting.Schema.UserRolePermission;
        // Create a new instance of VideoOffset
        newVideoOffset(): Dfareporting.Schema.VideoOffset;
        // Create a new instance of VideoSettings
        newVideoSettings(): Dfareporting.Schema.VideoSettings;
    }
}

declare var Dfareporting: GoogleAppsScript.Dfareporting;
