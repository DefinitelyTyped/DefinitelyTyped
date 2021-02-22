// Type definitions for Google Apps Script 2021-02-11
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/mtgto/dts-google-apps-script-advanced
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
    namespace DoubleClickCampaigns {
        namespace Collection {
            namespace Reports {
                interface CompatibleFieldsCollection {
                    // Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields
                    // already selected in the input report and user permissions.
                    query(resource: Schema.Report, profileId: string): Schema.CompatibleFields;
                }
                interface FilesCollection {
                    // Retrieves a report file by its report ID and file ID. This method supports media download.
                    get(profileId: string, reportId: string, fileId: string): Schema.File;
                    // Lists files for a report.
                    list(profileId: string, reportId: string): Schema.FileList;
                    // Lists files for a report.
                    list(profileId: string, reportId: string, optionalArgs: object): Schema.FileList;
                }
            }
            interface AccountActiveAdSummariesCollection {
                // Gets the account's active ad summary by account ID.
                get(profileId: string, summaryAccountId: string): Schema.AccountActiveAdSummary;
            }
            interface AccountPermissionGroupsCollection {
                // Gets one account permission group by ID.
                get(profileId: string, id: string): Schema.AccountPermissionGroup;
                // Retrieves the list of account permission groups.
                list(profileId: string): Schema.AccountPermissionGroupsListResponse;
            }
            interface AccountPermissionsCollection {
                // Gets one account permission by ID.
                get(profileId: string, id: string): Schema.AccountPermission;
                // Retrieves the list of account permissions.
                list(profileId: string): Schema.AccountPermissionsListResponse;
            }
            interface AccountUserProfilesCollection {
                // Gets one account user profile by ID.
                get(profileId: string, id: string): Schema.AccountUserProfile;
                // Inserts a new account user profile.
                insert(resource: Schema.AccountUserProfile, profileId: string): Schema.AccountUserProfile;
                // Retrieves a list of account user profiles, possibly filtered. This method supports paging.
                list(profileId: string): Schema.AccountUserProfilesListResponse;
                // Retrieves a list of account user profiles, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Schema.AccountUserProfilesListResponse;
                // Updates an existing account user profile. This method supports patch semantics.
                patch(resource: Schema.AccountUserProfile, profileId: string, id: string): Schema.AccountUserProfile;
                // Updates an existing account user profile.
                update(resource: Schema.AccountUserProfile, profileId: string): Schema.AccountUserProfile;
            }
            interface AccountsCollection {
                // Gets one account by ID.
                get(profileId: string, id: string): Schema.Account;
                // Retrieves the list of accounts, possibly filtered. This method supports paging.
                list(profileId: string): Schema.AccountsListResponse;
                // Retrieves the list of accounts, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Schema.AccountsListResponse;
                // Updates an existing account. This method supports patch semantics.
                patch(resource: Schema.Account, profileId: string, id: string): Schema.Account;
                // Updates an existing account.
                update(resource: Schema.Account, profileId: string): Schema.Account;
            }
            interface AdsCollection {
                // Gets one ad by ID.
                get(profileId: string, id: string): Schema.Ad;
                // Inserts a new ad.
                insert(resource: Schema.Ad, profileId: string): Schema.Ad;
                // Retrieves a list of ads, possibly filtered. This method supports paging.
                list(profileId: string): Schema.AdsListResponse;
                // Retrieves a list of ads, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Schema.AdsListResponse;
                // Updates an existing ad. This method supports patch semantics.
                patch(resource: Schema.Ad, profileId: string, id: string): Schema.Ad;
                // Updates an existing ad.
                update(resource: Schema.Ad, profileId: string): Schema.Ad;
            }
            interface AdvertiserGroupsCollection {
                // Gets one advertiser group by ID.
                get(profileId: string, id: string): Schema.AdvertiserGroup;
                // Inserts a new advertiser group.
                insert(resource: Schema.AdvertiserGroup, profileId: string): Schema.AdvertiserGroup;
                // Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
                list(profileId: string): Schema.AdvertiserGroupsListResponse;
                // Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Schema.AdvertiserGroupsListResponse;
                // Updates an existing advertiser group. This method supports patch semantics.
                patch(resource: Schema.AdvertiserGroup, profileId: string, id: string): Schema.AdvertiserGroup;
                // Deletes an existing advertiser group.
                remove(profileId: string, id: string): void;
                // Updates an existing advertiser group.
                update(resource: Schema.AdvertiserGroup, profileId: string): Schema.AdvertiserGroup;
            }
            interface AdvertiserLandingPagesCollection {
                // Gets one landing page by ID.
                get(profileId: string, id: string): Schema.LandingPage;
                // Inserts a new landing page.
                insert(resource: Schema.LandingPage, profileId: string): Schema.LandingPage;
                // Retrieves a list of landing pages.
                list(profileId: string): Schema.AdvertiserLandingPagesListResponse;
                // Retrieves a list of landing pages.
                list(profileId: string, optionalArgs: object): Schema.AdvertiserLandingPagesListResponse;
                // Updates an existing advertiser landing page. This method supports patch semantics.
                patch(resource: Schema.LandingPage, profileId: string, id: string): Schema.LandingPage;
                // Updates an existing landing page.
                update(resource: Schema.LandingPage, profileId: string): Schema.LandingPage;
            }
            interface AdvertisersCollection {
                // Gets one advertiser by ID.
                get(profileId: string, id: string): Schema.Advertiser;
                // Inserts a new advertiser.
                insert(resource: Schema.Advertiser, profileId: string): Schema.Advertiser;
                // Retrieves a list of advertisers, possibly filtered. This method supports paging.
                list(profileId: string): Schema.AdvertisersListResponse;
                // Retrieves a list of advertisers, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Schema.AdvertisersListResponse;
                // Updates an existing advertiser. This method supports patch semantics.
                patch(resource: Schema.Advertiser, profileId: string, id: string): Schema.Advertiser;
                // Updates an existing advertiser.
                update(resource: Schema.Advertiser, profileId: string): Schema.Advertiser;
            }
            interface BrowsersCollection {
                // Retrieves a list of browsers.
                list(profileId: string): Schema.BrowsersListResponse;
            }
            interface CampaignCreativeAssociationsCollection {
                // Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the
                // creative in the campaign if such a default ad does not exist already.
                insert(resource: Schema.CampaignCreativeAssociation, profileId: string, campaignId: string): Schema.CampaignCreativeAssociation;
                // Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.
                list(profileId: string, campaignId: string): Schema.CampaignCreativeAssociationsListResponse;
                // Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.
                list(profileId: string, campaignId: string, optionalArgs: object): Schema.CampaignCreativeAssociationsListResponse;
            }
            interface CampaignsCollection {
                // Gets one campaign by ID.
                get(profileId: string, id: string): Schema.Campaign;
                // Inserts a new campaign.
                insert(resource: Schema.Campaign, profileId: string): Schema.Campaign;
                // Retrieves a list of campaigns, possibly filtered. This method supports paging.
                list(profileId: string): Schema.CampaignsListResponse;
                // Retrieves a list of campaigns, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Schema.CampaignsListResponse;
                // Updates an existing campaign. This method supports patch semantics.
                patch(resource: Schema.Campaign, profileId: string, id: string): Schema.Campaign;
                // Updates an existing campaign.
                update(resource: Schema.Campaign, profileId: string): Schema.Campaign;
            }
            interface ChangeLogsCollection {
                // Gets one change log by ID.
                get(profileId: string, id: string): Schema.ChangeLog;
                // Retrieves a list of change logs. This method supports paging.
                list(profileId: string): Schema.ChangeLogsListResponse;
                // Retrieves a list of change logs. This method supports paging.
                list(profileId: string, optionalArgs: object): Schema.ChangeLogsListResponse;
            }
            interface CitiesCollection {
                // Retrieves a list of cities, possibly filtered.
                list(profileId: string): Schema.CitiesListResponse;
                // Retrieves a list of cities, possibly filtered.
                list(profileId: string, optionalArgs: object): Schema.CitiesListResponse;
            }
            interface ConnectionTypesCollection {
                // Gets one connection type by ID.
                get(profileId: string, id: string): Schema.ConnectionType;
                // Retrieves a list of connection types.
                list(profileId: string): Schema.ConnectionTypesListResponse;
            }
            interface ContentCategoriesCollection {
                // Gets one content category by ID.
                get(profileId: string, id: string): Schema.ContentCategory;
                // Inserts a new content category.
                insert(resource: Schema.ContentCategory, profileId: string): Schema.ContentCategory;
                // Retrieves a list of content categories, possibly filtered. This method supports paging.
                list(profileId: string): Schema.ContentCategoriesListResponse;
                // Retrieves a list of content categories, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Schema.ContentCategoriesListResponse;
                // Updates an existing content category. This method supports patch semantics.
                patch(resource: Schema.ContentCategory, profileId: string, id: string): Schema.ContentCategory;
                // Deletes an existing content category.
                remove(profileId: string, id: string): void;
                // Updates an existing content category.
                update(resource: Schema.ContentCategory, profileId: string): Schema.ContentCategory;
            }
            interface ConversionsCollection {
                // Inserts conversions.
                batchinsert(resource: Schema.ConversionsBatchInsertRequest, profileId: string): Schema.ConversionsBatchInsertResponse;
                // Updates existing conversions.
                batchupdate(resource: Schema.ConversionsBatchUpdateRequest, profileId: string): Schema.ConversionsBatchUpdateResponse;
            }
            interface CountriesCollection {
                // Gets one country by ID.
                get(profileId: string, dartId: string): Schema.Country;
                // Retrieves a list of countries.
                list(profileId: string): Schema.CountriesListResponse;
            }
            interface CreativeAssetsCollection {
                // Inserts a new creative asset.
                insert(resource: Schema.CreativeAssetMetadata, profileId: string, advertiserId: string): Schema.CreativeAssetMetadata;
                // Inserts a new creative asset.
                insert(resource: Schema.CreativeAssetMetadata, profileId: string, advertiserId: string, mediaData: Base.Blob): Schema.CreativeAssetMetadata;
            }
            interface CreativeFieldValuesCollection {
                // Gets one creative field value by ID.
                get(profileId: string, creativeFieldId: string, id: string): Schema.CreativeFieldValue;
                // Inserts a new creative field value.
                insert(resource: Schema.CreativeFieldValue, profileId: string, creativeFieldId: string): Schema.CreativeFieldValue;
                // Retrieves a list of creative field values, possibly filtered. This method supports paging.
                list(profileId: string, creativeFieldId: string): Schema.CreativeFieldValuesListResponse;
                // Retrieves a list of creative field values, possibly filtered. This method supports paging.
                list(profileId: string, creativeFieldId: string, optionalArgs: object): Schema.CreativeFieldValuesListResponse;
                // Updates an existing creative field value. This method supports patch semantics.
                patch(resource: Schema.CreativeFieldValue, profileId: string, creativeFieldId: string, id: string): Schema.CreativeFieldValue;
                // Deletes an existing creative field value.
                remove(profileId: string, creativeFieldId: string, id: string): void;
                // Updates an existing creative field value.
                update(resource: Schema.CreativeFieldValue, profileId: string, creativeFieldId: string): Schema.CreativeFieldValue;
            }
            interface CreativeFieldsCollection {
                // Gets one creative field by ID.
                get(profileId: string, id: string): Schema.CreativeField;
                // Inserts a new creative field.
                insert(resource: Schema.CreativeField, profileId: string): Schema.CreativeField;
                // Retrieves a list of creative fields, possibly filtered. This method supports paging.
                list(profileId: string): Schema.CreativeFieldsListResponse;
                // Retrieves a list of creative fields, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Schema.CreativeFieldsListResponse;
                // Updates an existing creative field. This method supports patch semantics.
                patch(resource: Schema.CreativeField, profileId: string, id: string): Schema.CreativeField;
                // Deletes an existing creative field.
                remove(profileId: string, id: string): void;
                // Updates an existing creative field.
                update(resource: Schema.CreativeField, profileId: string): Schema.CreativeField;
            }
            interface CreativeGroupsCollection {
                // Gets one creative group by ID.
                get(profileId: string, id: string): Schema.CreativeGroup;
                // Inserts a new creative group.
                insert(resource: Schema.CreativeGroup, profileId: string): Schema.CreativeGroup;
                // Retrieves a list of creative groups, possibly filtered. This method supports paging.
                list(profileId: string): Schema.CreativeGroupsListResponse;
                // Retrieves a list of creative groups, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Schema.CreativeGroupsListResponse;
                // Updates an existing creative group. This method supports patch semantics.
                patch(resource: Schema.CreativeGroup, profileId: string, id: string): Schema.CreativeGroup;
                // Updates an existing creative group.
                update(resource: Schema.CreativeGroup, profileId: string): Schema.CreativeGroup;
            }
            interface CreativesCollection {
                // Gets one creative by ID.
                get(profileId: string, id: string): Schema.Creative;
                // Inserts a new creative.
                insert(resource: Schema.Creative, profileId: string): Schema.Creative;
                // Retrieves a list of creatives, possibly filtered. This method supports paging.
                list(profileId: string): Schema.CreativesListResponse;
                // Retrieves a list of creatives, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Schema.CreativesListResponse;
                // Updates an existing creative. This method supports patch semantics.
                patch(resource: Schema.Creative, profileId: string, id: string): Schema.Creative;
                // Updates an existing creative.
                update(resource: Schema.Creative, profileId: string): Schema.Creative;
            }
            interface CustomEventsCollection {
                // Inserts custom events.
                batchinsert(resource: Schema.CustomEventsBatchInsertRequest, profileId: string): Schema.CustomEventsBatchInsertResponse;
            }
            interface DimensionValuesCollection {
                // Retrieves list of report dimension values for a list of filters.
                query(resource: Schema.DimensionValueRequest, profileId: string): Schema.DimensionValueList;
                // Retrieves list of report dimension values for a list of filters.
                query(resource: Schema.DimensionValueRequest, profileId: string, optionalArgs: object): Schema.DimensionValueList;
            }
            interface DirectorySitesCollection {
                // Gets one directory site by ID.
                get(profileId: string, id: string): Schema.DirectorySite;
                // Inserts a new directory site.
                insert(resource: Schema.DirectorySite, profileId: string): Schema.DirectorySite;
                // Retrieves a list of directory sites, possibly filtered. This method supports paging.
                list(profileId: string): Schema.DirectorySitesListResponse;
                // Retrieves a list of directory sites, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Schema.DirectorySitesListResponse;
            }
            interface DynamicTargetingKeysCollection {
                // Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the
                // advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20
                // keys can be assigned per ad, creative, or placement.
                insert(resource: Schema.DynamicTargetingKey, profileId: string): Schema.DynamicTargetingKey;
                // Retrieves a list of dynamic targeting keys.
                list(profileId: string): Schema.DynamicTargetingKeysListResponse;
                // Retrieves a list of dynamic targeting keys.
                list(profileId: string, optionalArgs: object): Schema.DynamicTargetingKeysListResponse;
                // Deletes an existing dynamic targeting key.
                remove(profileId: string, objectId: string, name: string, objectType: string): void;
            }
            interface EventTagsCollection {
                // Gets one event tag by ID.
                get(profileId: string, id: string): Schema.EventTag;
                // Inserts a new event tag.
                insert(resource: Schema.EventTag, profileId: string): Schema.EventTag;
                // Retrieves a list of event tags, possibly filtered.
                list(profileId: string): Schema.EventTagsListResponse;
                // Retrieves a list of event tags, possibly filtered.
                list(profileId: string, optionalArgs: object): Schema.EventTagsListResponse;
                // Updates an existing event tag. This method supports patch semantics.
                patch(resource: Schema.EventTag, profileId: string, id: string): Schema.EventTag;
                // Deletes an existing event tag.
                remove(profileId: string, id: string): void;
                // Updates an existing event tag.
                update(resource: Schema.EventTag, profileId: string): Schema.EventTag;
            }
            interface FilesCollection {
                // Retrieves a report file by its report ID and file ID. This method supports media download.
                get(reportId: string, fileId: string): Schema.File;
                // Lists files for a user profile.
                list(profileId: string): Schema.FileList;
                // Lists files for a user profile.
                list(profileId: string, optionalArgs: object): Schema.FileList;
            }
            interface FloodlightActivitiesCollection {
                // Generates a tag for a floodlight activity.
                generatetag(profileId: string): Schema.FloodlightActivitiesGenerateTagResponse;
                // Generates a tag for a floodlight activity.
                generatetag(profileId: string, optionalArgs: object): Schema.FloodlightActivitiesGenerateTagResponse;
                // Gets one floodlight activity by ID.
                get(profileId: string, id: string): Schema.FloodlightActivity;
                // Inserts a new floodlight activity.
                insert(resource: Schema.FloodlightActivity, profileId: string): Schema.FloodlightActivity;
                // Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
                list(profileId: string): Schema.FloodlightActivitiesListResponse;
                // Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Schema.FloodlightActivitiesListResponse;
                // Updates an existing floodlight activity. This method supports patch semantics.
                patch(resource: Schema.FloodlightActivity, profileId: string, id: string): Schema.FloodlightActivity;
                // Deletes an existing floodlight activity.
                remove(profileId: string, id: string): void;
                // Updates an existing floodlight activity.
                update(resource: Schema.FloodlightActivity, profileId: string): Schema.FloodlightActivity;
            }
            interface FloodlightActivityGroupsCollection {
                // Gets one floodlight activity group by ID.
                get(profileId: string, id: string): Schema.FloodlightActivityGroup;
                // Inserts a new floodlight activity group.
                insert(resource: Schema.FloodlightActivityGroup, profileId: string): Schema.FloodlightActivityGroup;
                // Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
                list(profileId: string): Schema.FloodlightActivityGroupsListResponse;
                // Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Schema.FloodlightActivityGroupsListResponse;
                // Updates an existing floodlight activity group. This method supports patch semantics.
                patch(resource: Schema.FloodlightActivityGroup, profileId: string, id: string): Schema.FloodlightActivityGroup;
                // Updates an existing floodlight activity group.
                update(resource: Schema.FloodlightActivityGroup, profileId: string): Schema.FloodlightActivityGroup;
            }
            interface FloodlightConfigurationsCollection {
                // Gets one floodlight configuration by ID.
                get(profileId: string, id: string): Schema.FloodlightConfiguration;
                // Retrieves a list of floodlight configurations, possibly filtered.
                list(profileId: string): Schema.FloodlightConfigurationsListResponse;
                // Retrieves a list of floodlight configurations, possibly filtered.
                list(profileId: string, optionalArgs: object): Schema.FloodlightConfigurationsListResponse;
                // Updates an existing floodlight configuration. This method supports patch semantics.
                patch(resource: Schema.FloodlightConfiguration, profileId: string, id: string): Schema.FloodlightConfiguration;
                // Updates an existing floodlight configuration.
                update(resource: Schema.FloodlightConfiguration, profileId: string): Schema.FloodlightConfiguration;
            }
            interface InventoryItemsCollection {
                // Gets one inventory item by ID.
                get(profileId: string, projectId: string, id: string): Schema.InventoryItem;
                // Retrieves a list of inventory items, possibly filtered. This method supports paging.
                list(profileId: string, projectId: string): Schema.InventoryItemsListResponse;
                // Retrieves a list of inventory items, possibly filtered. This method supports paging.
                list(profileId: string, projectId: string, optionalArgs: object): Schema.InventoryItemsListResponse;
            }
            interface LanguagesCollection {
                // Retrieves a list of languages.
                list(profileId: string): Schema.LanguagesListResponse;
            }
            interface MetrosCollection {
                // Retrieves a list of metros.
                list(profileId: string): Schema.MetrosListResponse;
            }
            interface MobileAppsCollection {
                // Gets one mobile app by ID.
                get(profileId: string, id: string): Schema.MobileApp;
                // Retrieves list of available mobile apps.
                list(profileId: string): Schema.MobileAppsListResponse;
                // Retrieves list of available mobile apps.
                list(profileId: string, optionalArgs: object): Schema.MobileAppsListResponse;
            }
            interface MobileCarriersCollection {
                // Gets one mobile carrier by ID.
                get(profileId: string, id: string): Schema.MobileCarrier;
                // Retrieves a list of mobile carriers.
                list(profileId: string): Schema.MobileCarriersListResponse;
            }
            interface OperatingSystemVersionsCollection {
                // Gets one operating system version by ID.
                get(profileId: string, id: string): Schema.OperatingSystemVersion;
                // Retrieves a list of operating system versions.
                list(profileId: string): Schema.OperatingSystemVersionsListResponse;
            }
            interface OperatingSystemsCollection {
                // Gets one operating system by DART ID.
                get(profileId: string, dartId: string): Schema.OperatingSystem;
                // Retrieves a list of operating systems.
                list(profileId: string): Schema.OperatingSystemsListResponse;
            }
            interface OrderDocumentsCollection {
                // Gets one order document by ID.
                get(profileId: string, projectId: string, id: string): Schema.OrderDocument;
                // Retrieves a list of order documents, possibly filtered. This method supports paging.
                list(profileId: string, projectId: string): Schema.OrderDocumentsListResponse;
                // Retrieves a list of order documents, possibly filtered. This method supports paging.
                list(profileId: string, projectId: string, optionalArgs: object): Schema.OrderDocumentsListResponse;
            }
            interface OrdersCollection {
                // Gets one order by ID.
                get(profileId: string, projectId: string, id: string): Schema.Order;
                // Retrieves a list of orders, possibly filtered. This method supports paging.
                list(profileId: string, projectId: string): Schema.OrdersListResponse;
                // Retrieves a list of orders, possibly filtered. This method supports paging.
                list(profileId: string, projectId: string, optionalArgs: object): Schema.OrdersListResponse;
            }
            interface PlacementGroupsCollection {
                // Gets one placement group by ID.
                get(profileId: string, id: string): Schema.PlacementGroup;
                // Inserts a new placement group.
                insert(resource: Schema.PlacementGroup, profileId: string): Schema.PlacementGroup;
                // Retrieves a list of placement groups, possibly filtered. This method supports paging.
                list(profileId: string): Schema.PlacementGroupsListResponse;
                // Retrieves a list of placement groups, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Schema.PlacementGroupsListResponse;
                // Updates an existing placement group. This method supports patch semantics.
                patch(resource: Schema.PlacementGroup, profileId: string, id: string): Schema.PlacementGroup;
                // Updates an existing placement group.
                update(resource: Schema.PlacementGroup, profileId: string): Schema.PlacementGroup;
            }
            interface PlacementStrategiesCollection {
                // Gets one placement strategy by ID.
                get(profileId: string, id: string): Schema.PlacementStrategy;
                // Inserts a new placement strategy.
                insert(resource: Schema.PlacementStrategy, profileId: string): Schema.PlacementStrategy;
                // Retrieves a list of placement strategies, possibly filtered. This method supports paging.
                list(profileId: string): Schema.PlacementStrategiesListResponse;
                // Retrieves a list of placement strategies, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Schema.PlacementStrategiesListResponse;
                // Updates an existing placement strategy. This method supports patch semantics.
                patch(resource: Schema.PlacementStrategy, profileId: string, id: string): Schema.PlacementStrategy;
                // Deletes an existing placement strategy.
                remove(profileId: string, id: string): void;
                // Updates an existing placement strategy.
                update(resource: Schema.PlacementStrategy, profileId: string): Schema.PlacementStrategy;
            }
            interface PlacementsCollection {
                // Generates tags for a placement.
                generatetags(profileId: string): Schema.PlacementsGenerateTagsResponse;
                // Generates tags for a placement.
                generatetags(profileId: string, optionalArgs: object): Schema.PlacementsGenerateTagsResponse;
                // Gets one placement by ID.
                get(profileId: string, id: string): Schema.Placement;
                // Inserts a new placement.
                insert(resource: Schema.Placement, profileId: string): Schema.Placement;
                // Retrieves a list of placements, possibly filtered. This method supports paging.
                list(profileId: string): Schema.PlacementsListResponse;
                // Retrieves a list of placements, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Schema.PlacementsListResponse;
                // Updates an existing placement. This method supports patch semantics.
                patch(resource: Schema.Placement, profileId: string, id: string): Schema.Placement;
                // Updates an existing placement.
                update(resource: Schema.Placement, profileId: string): Schema.Placement;
            }
            interface PlatformTypesCollection {
                // Gets one platform type by ID.
                get(profileId: string, id: string): Schema.PlatformType;
                // Retrieves a list of platform types.
                list(profileId: string): Schema.PlatformTypesListResponse;
            }
            interface PostalCodesCollection {
                // Gets one postal code by ID.
                get(profileId: string, code: string): Schema.PostalCode;
                // Retrieves a list of postal codes.
                list(profileId: string): Schema.PostalCodesListResponse;
            }
            interface ProjectsCollection {
                // Gets one project by ID.
                get(profileId: string, id: string): Schema.Project;
                // Retrieves a list of projects, possibly filtered. This method supports paging .
                list(profileId: string): Schema.ProjectsListResponse;
                // Retrieves a list of projects, possibly filtered. This method supports paging .
                list(profileId: string, optionalArgs: object): Schema.ProjectsListResponse;
            }
            interface RegionsCollection {
                // Retrieves a list of regions.
                list(profileId: string): Schema.RegionsListResponse;
            }
            interface RemarketingListSharesCollection {
                // Gets one remarketing list share by remarketing list ID.
                get(profileId: string, remarketingListId: string): Schema.RemarketingListShare;
                // Updates an existing remarketing list share. This method supports patch semantics.
                patch(resource: Schema.RemarketingListShare, profileId: string, id: string): Schema.RemarketingListShare;
                // Updates an existing remarketing list share.
                update(resource: Schema.RemarketingListShare, profileId: string): Schema.RemarketingListShare;
            }
            interface RemarketingListsCollection {
                // Gets one remarketing list by ID.
                get(profileId: string, id: string): Schema.RemarketingList;
                // Inserts a new remarketing list.
                insert(resource: Schema.RemarketingList, profileId: string): Schema.RemarketingList;
                // Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
                list(profileId: string, advertiserId: string): Schema.RemarketingListsListResponse;
                // Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
                list(profileId: string, advertiserId: string, optionalArgs: object): Schema.RemarketingListsListResponse;
                // Updates an existing remarketing list. This method supports patch semantics.
                patch(resource: Schema.RemarketingList, profileId: string, id: string): Schema.RemarketingList;
                // Updates an existing remarketing list.
                update(resource: Schema.RemarketingList, profileId: string): Schema.RemarketingList;
            }
            interface ReportsCollection {
                CompatibleFields?: Collection.Reports.CompatibleFieldsCollection;
                Files?: Collection.Reports.FilesCollection;
                // Retrieves a report by its ID.
                get(profileId: string, reportId: string): Schema.Report;
                // Creates a report.
                insert(resource: Schema.Report, profileId: string): Schema.Report;
                // Retrieves list of reports.
                list(profileId: string): Schema.ReportList;
                // Retrieves list of reports.
                list(profileId: string, optionalArgs: object): Schema.ReportList;
                // Updates an existing report. This method supports patch semantics.
                patch(resource: Schema.Report, profileId: string, reportId: string): Schema.Report;
                // Deletes a report by its ID.
                remove(profileId: string, reportId: string): void;
                // Runs a report.
                run(profileId: string, reportId: string): Schema.File;
                // Runs a report.
                run(profileId: string, reportId: string, optionalArgs: object): Schema.File;
                // Updates a report.
                update(resource: Schema.Report, profileId: string, reportId: string): Schema.Report;
            }
            interface SitesCollection {
                // Gets one site by ID.
                get(profileId: string, id: string): Schema.Site;
                // Inserts a new site.
                insert(resource: Schema.Site, profileId: string): Schema.Site;
                // Retrieves a list of sites, possibly filtered. This method supports paging.
                list(profileId: string): Schema.SitesListResponse;
                // Retrieves a list of sites, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Schema.SitesListResponse;
                // Updates an existing site. This method supports patch semantics.
                patch(resource: Schema.Site, profileId: string, id: string): Schema.Site;
                // Updates an existing site.
                update(resource: Schema.Site, profileId: string): Schema.Site;
            }
            interface SizesCollection {
                // Gets one size by ID.
                get(profileId: string, id: string): Schema.Size;
                // Inserts a new size.
                insert(resource: Schema.Size, profileId: string): Schema.Size;
                // Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently
                // in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the
                // Trafficking UI.
                list(profileId: string): Schema.SizesListResponse;
                // Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently
                // in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the
                // Trafficking UI.
                list(profileId: string, optionalArgs: object): Schema.SizesListResponse;
            }
            interface SubaccountsCollection {
                // Gets one subaccount by ID.
                get(profileId: string, id: string): Schema.Subaccount;
                // Inserts a new subaccount.
                insert(resource: Schema.Subaccount, profileId: string): Schema.Subaccount;
                // Gets a list of subaccounts, possibly filtered. This method supports paging.
                list(profileId: string): Schema.SubaccountsListResponse;
                // Gets a list of subaccounts, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Schema.SubaccountsListResponse;
                // Updates an existing subaccount. This method supports patch semantics.
                patch(resource: Schema.Subaccount, profileId: string, id: string): Schema.Subaccount;
                // Updates an existing subaccount.
                update(resource: Schema.Subaccount, profileId: string): Schema.Subaccount;
            }
            interface TargetableRemarketingListsCollection {
                // Gets one remarketing list by ID.
                get(profileId: string, id: string): Schema.TargetableRemarketingList;
                // Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.
                list(profileId: string, advertiserId: string): Schema.TargetableRemarketingListsListResponse;
                // Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.
                list(profileId: string, advertiserId: string, optionalArgs: object): Schema.TargetableRemarketingListsListResponse;
            }
            interface TargetingTemplatesCollection {
                // Gets one targeting template by ID.
                get(profileId: string, id: string): Schema.TargetingTemplate;
                // Inserts a new targeting template.
                insert(resource: Schema.TargetingTemplate, profileId: string): Schema.TargetingTemplate;
                // Retrieves a list of targeting templates, optionally filtered. This method supports paging.
                list(profileId: string): Schema.TargetingTemplatesListResponse;
                // Retrieves a list of targeting templates, optionally filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Schema.TargetingTemplatesListResponse;
                // Updates an existing targeting template. This method supports patch semantics.
                patch(resource: Schema.TargetingTemplate, profileId: string, id: string): Schema.TargetingTemplate;
                // Updates an existing targeting template.
                update(resource: Schema.TargetingTemplate, profileId: string): Schema.TargetingTemplate;
            }
            interface UserProfilesCollection {
                // Gets one user profile by ID.
                get(profileId: string): Schema.UserProfile;
                // Retrieves list of user profiles for a user.
                list(): Schema.UserProfileList;
            }
            interface UserRolePermissionGroupsCollection {
                // Gets one user role permission group by ID.
                get(profileId: string, id: string): Schema.UserRolePermissionGroup;
                // Gets a list of all supported user role permission groups.
                list(profileId: string): Schema.UserRolePermissionGroupsListResponse;
            }
            interface UserRolePermissionsCollection {
                // Gets one user role permission by ID.
                get(profileId: string, id: string): Schema.UserRolePermission;
                // Gets a list of user role permissions, possibly filtered.
                list(profileId: string): Schema.UserRolePermissionsListResponse;
                // Gets a list of user role permissions, possibly filtered.
                list(profileId: string, optionalArgs: object): Schema.UserRolePermissionsListResponse;
            }
            interface UserRolesCollection {
                // Gets one user role by ID.
                get(profileId: string, id: string): Schema.UserRole;
                // Inserts a new user role.
                insert(resource: Schema.UserRole, profileId: string): Schema.UserRole;
                // Retrieves a list of user roles, possibly filtered. This method supports paging.
                list(profileId: string): Schema.UserRolesListResponse;
                // Retrieves a list of user roles, possibly filtered. This method supports paging.
                list(profileId: string, optionalArgs: object): Schema.UserRolesListResponse;
                // Updates an existing user role. This method supports patch semantics.
                patch(resource: Schema.UserRole, profileId: string, id: string): Schema.UserRole;
                // Deletes an existing user role.
                remove(profileId: string, id: string): void;
                // Updates an existing user role.
                update(resource: Schema.UserRole, profileId: string): Schema.UserRole;
            }
            interface VideoFormatsCollection {
                // Gets one video format by ID.
                get(profileId: string, id: Integer): Schema.VideoFormat;
                // Lists available video formats.
                list(profileId: string): Schema.VideoFormatsListResponse;
            }
        }
        namespace Schema {
            // Contains properties of a Campaign Manager account.
            interface Account {
                // Account permissions assigned to this account.
                accountPermissionIds?: string[];
                // Profile for this account. This is a read-only field that can be left blank.
                accountProfile?: string;
                // Whether this account is active.
                active?: boolean;
                // Maximum number of active ads allowed for this account.
                activeAdsLimitTier?: string;
                // Whether to serve creatives with Active View tags. If disabled, viewability data will not be available for any
                // impressions.
                activeViewOptOut?: boolean;
                // User role permissions available to the user roles of this account.
                availablePermissionIds?: string[];
                // ID of the country associated with this account.
                countryId?: string;
                // ID of currency associated with this account. This is a required field. Acceptable values are: - "1" for USD - "2" for
                // GBP - "3" for ESP - "4" for SEK - "5" for CAD - "6" for JPY - "7" for DEM - "8" for AUD - "9" for FRF - "10" for ITL -
                // "11" for DKK - "12" for NOK - "13" for FIM - "14" for ZAR - "15" for IEP - "16" for NLG - "17" for EUR - "18" for KRW -
                // "19" for TWD - "20" for SGD - "21" for CNY - "22" for HKD - "23" for NZD - "24" for MYR - "25" for BRL - "26" for PTE -
                // "28" for CLP - "29" for TRY - "30" for ARS - "31" for PEN - "32" for ILS - "33" for CHF - "34" for VEF - "35" for COP -
                // "36" for GTQ - "37" for PLN - "39" for INR - "40" for THB - "41" for IDR - "42" for CZK - "43" for RON - "44" for HUF -
                // "45" for RUB - "46" for AED - "47" for BGN - "48" for HRK - "49" for MXN - "50" for NGN - "51" for EGP
                currencyId?: string;
                // Default placement dimensions for this account.
                defaultCreativeSizeId?: string;
                // Description of this account.
                description?: string;
                // ID of this account. This is a read-only, auto-generated field.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#account".
                kind?: string;
                // Locale of this account. Acceptable values are: - "cs" (Czech) - "de" (German) - "en" (English) - "en-GB" (English United
                // Kingdom) - "es" (Spanish) - "fr" (French) - "it" (Italian) - "ja" (Japanese) - "ko" (Korean) - "pl" (Polish) - "pt-BR"
                // (Portuguese Brazil) - "ru" (Russian) - "sv" (Swedish) - "tr" (Turkish) - "zh-CN" (Chinese Simplified) - "zh-TW" (Chinese
                // Traditional)
                locale?: string;
                // Maximum image size allowed for this account, in kilobytes. Value must be greater than or equal to 1.
                maximumImageSize?: string;
                // Name of this account. This is a required field, and must be less than 128 characters long and be globally unique.
                name?: string;
                // Whether campaigns created in this account will be enabled for Nielsen OCR reach ratings by default.
                nielsenOcrEnabled?: boolean;
                // Reporting configuration of this account.
                reportsConfiguration?: Schema.ReportsConfiguration;
                // Share Path to Conversion reports with Twitter.
                shareReportsWithTwitter?: boolean;
                // File size limit in kilobytes of Rich Media teaser creatives. Acceptable values are 1 to 10240, inclusive.
                teaserSizeLimit?: string;
            }
            // Gets a summary of active ads in an account.
            interface AccountActiveAdSummary {
                // ID of the account.
                accountId?: string;
                // Ads that have been activated for the account
                activeAds?: string;
                // Maximum number of active ads allowed for the account.
                activeAdsLimitTier?: string;
                // Ads that can be activated for the account.
                availableAds?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountActiveAdSummary".
                kind?: string;
            }
            // AccountPermissions contains information about a particular account permission. Some features of Campaign Manager require
            // an account permission to be present in the account.
            interface AccountPermission {
                // Account profiles associated with this account permission. Possible values are: - "ACCOUNT_PROFILE_BASIC" -
                // "ACCOUNT_PROFILE_STANDARD"
                accountProfiles?: string[];
                // ID of this account permission.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermission".
                kind?: string;
                // Administrative level required to enable this account permission.
                level?: string;
                // Name of this account permission.
                name?: string;
                // Permission group of this account permission.
                permissionGroupId?: string;
            }
            // AccountPermissionGroups contains a mapping of permission group IDs to names. A permission group is a grouping of account
            // permissions.
            interface AccountPermissionGroup {
                // ID of this account permission group.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionGroup".
                kind?: string;
                // Name of this account permission group.
                name?: string;
            }
            // Account Permission Group List Response
            interface AccountPermissionGroupsListResponse {
                // Account permission group collection.
                accountPermissionGroups?: Schema.AccountPermissionGroup[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionGroupsListResponse".
                kind?: string;
            }
            // Account Permission List Response
            interface AccountPermissionsListResponse {
                // Account permission collection.
                accountPermissions?: Schema.AccountPermission[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionsListResponse".
                kind?: string;
            }
            // AccountUserProfiles contains properties of a Campaign Manager user profile. This resource is specifically for managing
            // user profiles, whereas UserProfiles is for accessing the API.
            interface AccountUserProfile {
                // Account ID of the user profile. This is a read-only field that can be left blank.
                accountId?: string;
                // Whether this user profile is active. This defaults to false, and must be set true on insert for the user profile to be
                // usable.
                active?: boolean;
                // Filter that describes which advertisers are visible to the user profile.
                advertiserFilter?: Schema.ObjectFilter;
                // Filter that describes which campaigns are visible to the user profile.
                campaignFilter?: Schema.ObjectFilter;
                // Comments for this user profile.
                comments?: string;
                // Email of the user profile. The email addresss must be linked to a Google Account. This field is required on insertion
                // and is read-only after insertion.
                email?: string;
                // ID of the user profile. This is a read-only, auto-generated field.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountUserProfile".
                kind?: string;
                // Locale of the user profile. This is a required field. Acceptable values are: - "cs" (Czech) - "de" (German) - "en"
                // (English) - "en-GB" (English United Kingdom) - "es" (Spanish) - "fr" (French) - "it" (Italian) - "ja" (Japanese) - "ko"
                // (Korean) - "pl" (Polish) - "pt-BR" (Portuguese Brazil) - "ru" (Russian) - "sv" (Swedish) - "tr" (Turkish) - "zh-CN"
                // (Chinese Simplified) - "zh-TW" (Chinese Traditional)
                locale?: string;
                // Name of the user profile. This is a required field. Must be less than 64 characters long, must be globally unique, and
                // cannot contain whitespace or any of the following characters: "&;<>"#%,".
                name?: string;
                // Filter that describes which sites are visible to the user profile.
                siteFilter?: Schema.ObjectFilter;
                // Subaccount ID of the user profile. This is a read-only field that can be left blank.
                subaccountId?: string;
                // Trafficker type of this user profile. This is a read-only field.
                traffickerType?: string;
                // User type of the user profile. This is a read-only field that can be left blank.
                userAccessType?: string;
                // Filter that describes which user roles are visible to the user profile.
                userRoleFilter?: Schema.ObjectFilter;
                // User role ID of the user profile. This is a required field.
                userRoleId?: string;
            }
            // Account User Profile List Response
            interface AccountUserProfilesListResponse {
                // Account user profile collection.
                accountUserProfiles?: Schema.AccountUserProfile[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountUserProfilesListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
            }
            // Account List Response
            interface AccountsListResponse {
                // Account collection.
                accounts?: Schema.Account[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountsListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
            }
            // Represents an activity group.
            interface Activities {
                // List of activity filters. The dimension values need to be all either of type "dfa:activity" or "dfa:activityGroup".
                filters?: Schema.DimensionValue[];
                // The kind of resource this is, in this case dfareporting#activities.
                kind?: string;
                // List of names of floodlight activity metrics.
                metricNames?: string[];
            }
            // Contains properties of a Campaign Manager ad.
            interface Ad {
                // Account ID of this ad. This is a read-only field that can be left blank.
                accountId?: string;
                // Whether this ad is active. When true, archived must be false.
                active?: boolean;
                // Advertiser ID of this ad. This is a required field on insertion.
                advertiserId?: string;
                // Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
                advertiserIdDimensionValue?: Schema.DimensionValue;
                // Whether this ad is archived. When true, active must be false.
                archived?: boolean;
                // Audience segment ID that is being targeted for this ad. Applicable when type is AD_SERVING_STANDARD_AD.
                audienceSegmentId?: string;
                // Campaign ID of this ad. This is a required field on insertion.
                campaignId?: string;
                // Dimension value for the ID of the campaign. This is a read-only, auto-generated field.
                campaignIdDimensionValue?: Schema.DimensionValue;
                // Click-through URL for this ad. This is a required field on insertion. Applicable when type is AD_SERVING_CLICK_TRACKER.
                clickThroughUrl?: Schema.ClickThroughUrl;
                // Click-through URL suffix properties for this ad. Applies to the URL in the ad or (if overriding ad properties) the URL
                // in the creative.
                clickThroughUrlSuffixProperties?: Schema.ClickThroughUrlSuffixProperties;
                // Comments for this ad.
                comments?: string;
                // Compatibility of this ad. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to
                // either rendering on desktop or on mobile devices or in mobile apps for regular or interstitial ads, respectively. APP
                // and APP_INTERSTITIAL are only used for existing default ads. New mobile placements must be assigned DISPLAY or
                // DISPLAY_INTERSTITIAL and default ads created for those placements will be limited to those compatibility types.
                // IN_STREAM_VIDEO refers to rendering in-stream video ads developed with the VAST standard.
                compatibility?: string;
                // Information about the creation of this ad. This is a read-only field.
                createInfo?: Schema.LastModifiedInfo;
                // Creative group assignments for this ad. Applicable when type is AD_SERVING_CLICK_TRACKER. Only one assignment per
                // creative group number is allowed for a maximum of two assignments.
                creativeGroupAssignments?: Schema.CreativeGroupAssignment[];
                // Creative rotation for this ad. Applicable when type is AD_SERVING_DEFAULT_AD, AD_SERVING_STANDARD_AD, or
                // AD_SERVING_TRACKING. When type is AD_SERVING_DEFAULT_AD, this field should have exactly one creativeAssignment .
                creativeRotation?: Schema.CreativeRotation;
                // Time and day targeting information for this ad. This field must be left blank if the ad is using a targeting template.
                // Applicable when type is AD_SERVING_STANDARD_AD.
                dayPartTargeting?: Schema.DayPartTargeting;
                // Default click-through event tag properties for this ad.
                defaultClickThroughEventTagProperties?: Schema.DefaultClickThroughEventTagProperties;
                // Delivery schedule information for this ad. Applicable when type is AD_SERVING_STANDARD_AD or AD_SERVING_TRACKING. This
                // field along with subfields priority and impressionRatio are required on insertion when type is AD_SERVING_STANDARD_AD.
                deliverySchedule?: Schema.DeliverySchedule;
                // Whether this ad is a dynamic click tracker. Applicable when type is AD_SERVING_CLICK_TRACKER. This is a required field
                // on insert, and is read-only after insert.
                dynamicClickTracker?: boolean;
                endTime?: string;
                // Event tag overrides for this ad.
                eventTagOverrides?: Schema.EventTagOverride[];
                // Geographical targeting information for this ad. This field must be left blank if the ad is using a targeting template.
                // Applicable when type is AD_SERVING_STANDARD_AD.
                geoTargeting?: Schema.GeoTargeting;
                // ID of this ad. This is a read-only, auto-generated field.
                id?: string;
                // Dimension value for the ID of this ad. This is a read-only, auto-generated field.
                idDimensionValue?: Schema.DimensionValue;
                // Key-value targeting information for this ad. This field must be left blank if the ad is using a targeting template.
                // Applicable when type is AD_SERVING_STANDARD_AD.
                keyValueTargetingExpression?: Schema.KeyValueTargetingExpression;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#ad".
                kind?: string;
                // Language targeting information for this ad. This field must be left blank if the ad is using a targeting template.
                // Applicable when type is AD_SERVING_STANDARD_AD.
                languageTargeting?: Schema.LanguageTargeting;
                // Information about the most recent modification of this ad. This is a read-only field.
                lastModifiedInfo?: Schema.LastModifiedInfo;
                // Name of this ad. This is a required field and must be less than 256 characters long.
                name?: string;
                // Placement assignments for this ad.
                placementAssignments?: Schema.PlacementAssignment[];
                // Remarketing list targeting expression for this ad. This field must be left blank if the ad is using a targeting
                // template. Applicable when type is AD_SERVING_STANDARD_AD.
                remarketingListExpression?: Schema.ListTargetingExpression;
                // Size of this ad. Applicable when type is AD_SERVING_DEFAULT_AD.
                size?: Schema.Size;
                // Whether this ad is ssl compliant. This is a read-only field that is auto-generated when the ad is inserted or updated.
                sslCompliant?: boolean;
                // Whether this ad requires ssl. This is a read-only field that is auto-generated when the ad is inserted or updated.
                sslRequired?: boolean;
                startTime?: string;
                // Subaccount ID of this ad. This is a read-only field that can be left blank.
                subaccountId?: string;
                // Targeting template ID, used to apply preconfigured targeting information to this ad. This cannot be set while any of
                // dayPartTargeting, geoTargeting, keyValueTargetingExpression, languageTargeting, remarketingListExpression, or
                // technologyTargeting are set. Applicable when type is AD_SERVING_STANDARD_AD.
                targetingTemplateId?: string;
                // Technology platform targeting information for this ad. This field must be left blank if the ad is using a targeting
                // template. Applicable when type is AD_SERVING_STANDARD_AD.
                technologyTargeting?: Schema.TechnologyTargeting;
                // Type of ad. This is a required field on insertion. Note that default ads ( AD_SERVING_DEFAULT_AD) cannot be created
                // directly (see Creative resource).
                type?: string;
            }
            // Campaign ad blocking settings.
            interface AdBlockingConfiguration {
                // Click-through URL used by brand-neutral ads. This is a required field when overrideClickThroughUrl is set to true.
                clickThroughUrl?: string;
                // ID of a creative bundle to use for this campaign. If set, brand-neutral ads will select creatives from this bundle.
                // Otherwise, a default transparent pixel will be used.
                creativeBundleId?: string;
                // Whether this campaign has enabled ad blocking. When true, ad blocking is enabled for placements in the campaign, but
                // this may be overridden by site and placement settings. When false, ad blocking is disabled for all placements under the
                // campaign, regardless of site and placement settings.
                enabled?: boolean;
                // Whether the brand-neutral ad's click-through URL comes from the campaign's creative bundle or the override URL. Must be
                // set to true if ad blocking is enabled and no creative bundle is configured.
                overrideClickThroughUrl?: boolean;
            }
            // Ad Slot
            interface AdSlot {
                // Comment for this ad slot.
                comment?: string;
                // Ad slot compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop, mobile devices or in
                // mobile apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps.
                // IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard.
                compatibility?: string;
                // Height of this ad slot.
                height?: string;
                // ID of the placement from an external platform that is linked to this ad slot.
                linkedPlacementId?: string;
                // Name of this ad slot.
                name?: string;
                // Payment source type of this ad slot.
                paymentSourceType?: string;
                // Primary ad slot of a roadblock inventory item.
                primary?: boolean;
                // Width of this ad slot.
                width?: string;
            }
            // Ad List Response
            interface AdsListResponse {
                // Ad collection.
                ads?: Schema.Ad[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#adsListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
            }
            // Contains properties of a Campaign Manager advertiser.
            interface Advertiser {
                // Account ID of this advertiser.This is a read-only field that can be left blank.
                accountId?: string;
                // ID of the advertiser group this advertiser belongs to. You can group advertisers for reporting purposes, allowing you to
                // see aggregated information for all advertisers in each group.
                advertiserGroupId?: string;
                // Suffix added to click-through URL of ad creative associations under this advertiser. Must be less than 129 characters
                // long.
                clickThroughUrlSuffix?: string;
                // ID of the click-through event tag to apply by default to the landing pages of this advertiser's campaigns.
                defaultClickThroughEventTagId?: string;
                // Default email address used in sender field for tag emails.
                defaultEmail?: string;
                // Floodlight configuration ID of this advertiser. The floodlight configuration ID will be created automatically, so on
                // insert this field should be left blank. This field can be set to another advertiser's floodlight configuration ID in
                // order to share that advertiser's floodlight configuration with this advertiser, so long as: - This advertiser's original
                // floodlight configuration is not already associated with floodlight activities or floodlight activity groups. - This
                // advertiser's original floodlight configuration is not already shared with another advertiser.
                floodlightConfigurationId?: string;
                // Dimension value for the ID of the floodlight configuration. This is a read-only, auto-generated field.
                floodlightConfigurationIdDimensionValue?: Schema.DimensionValue;
                // ID of this advertiser. This is a read-only, auto-generated field.
                id?: string;
                // Dimension value for the ID of this advertiser. This is a read-only, auto-generated field.
                idDimensionValue?: Schema.DimensionValue;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiser".
                kind?: string;
                // Name of this advertiser. This is a required field and must be less than 256 characters long and unique among advertisers
                // of the same account.
                name?: string;
                // Original floodlight configuration before any sharing occurred. Set the floodlightConfigurationId of this advertiser to
                // originalFloodlightConfigurationId to unshare the advertiser's current floodlight configuration. You cannot unshare an
                // advertiser's floodlight configuration if the shared configuration has activities associated with any campaign or
                // placement.
                originalFloodlightConfigurationId?: string;
                // Status of this advertiser.
                status?: string;
                // Subaccount ID of this advertiser.This is a read-only field that can be left blank.
                subaccountId?: string;
                // Suspension status of this advertiser.
                suspended?: boolean;
            }
            // Groups advertisers together so that reports can be generated for the entire group at once.
            interface AdvertiserGroup {
                // Account ID of this advertiser group. This is a read-only field that can be left blank.
                accountId?: string;
                // ID of this advertiser group. This is a read-only, auto-generated field.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserGroup".
                kind?: string;
                // Name of this advertiser group. This is a required field and must be less than 256 characters long and unique among
                // advertiser groups of the same account.
                name?: string;
            }
            // Advertiser Group List Response
            interface AdvertiserGroupsListResponse {
                // Advertiser group collection.
                advertiserGroups?: Schema.AdvertiserGroup[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserGroupsListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
            }
            // Landing Page List Response
            interface AdvertiserLandingPagesListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserLandingPagesListResponse".
                kind?: string;
                // Landing page collection
                landingPages?: Schema.LandingPage[];
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
            }
            // Advertiser List Response
            interface AdvertisersListResponse {
                // Advertiser collection.
                advertisers?: Schema.Advertiser[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertisersListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
            }
            // Audience Segment.
            interface AudienceSegment {
                // Weight allocated to this segment. The weight assigned will be understood in proportion to the weights assigned to other
                // segments in the same segment group. Acceptable values are 1 to 1000, inclusive.
                allocation?: Integer;
                // ID of this audience segment. This is a read-only, auto-generated field.
                id?: string;
                // Name of this audience segment. This is a required field and must be less than 65 characters long.
                name?: string;
            }
            // Audience Segment Group.
            interface AudienceSegmentGroup {
                // Audience segments assigned to this group. The number of segments must be between 2 and 100.
                audienceSegments?: Schema.AudienceSegment[];
                // ID of this audience segment group. This is a read-only, auto-generated field.
                id?: string;
                // Name of this audience segment group. This is a required field and must be less than 65 characters long.
                name?: string;
            }
            // Contains information about a browser that can be targeted by ads.
            interface Browser {
                // ID referring to this grouping of browser and version numbers. This is the ID used for targeting.
                browserVersionId?: string;
                // DART ID of this browser. This is the ID used when generating reports.
                dartId?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#browser".
                kind?: string;
                // Major version number (leftmost number) of this browser. For example, for Chrome 5.0.376.86 beta, this field should be
                // set to 5. An asterisk (*) may be used to target any version number, and a question mark (?) may be used to target cases
                // where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome: 1.2, 2.5, 3.5, and
                // so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server knows the browser
                // is Firefox but can't tell which version it is.
                majorVersion?: string;
                // Minor version number (number after first dot on left) of this browser. For example, for Chrome 5.0.375.86 beta, this
                // field should be set to 0. An asterisk (*) may be used to target any version number, and a question mark (?) may be used
                // to target cases where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome:
                // 1.2, 2.5, 3.5, and so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server
                // knows the browser is Firefox but can't tell which version it is.
                minorVersion?: string;
                // Name of this browser.
                name?: string;
            }
            // Browser List Response
            interface BrowsersListResponse {
                // Browser collection.
                browsers?: Schema.Browser[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#browsersListResponse".
                kind?: string;
            }
            // Contains properties of a Campaign Manager campaign.
            interface Campaign {
                // Account ID of this campaign. This is a read-only field that can be left blank.
                accountId?: string;
                // Ad blocking settings for this campaign.
                adBlockingConfiguration?: Schema.AdBlockingConfiguration;
                // Additional creative optimization configurations for the campaign.
                additionalCreativeOptimizationConfigurations?: Schema.CreativeOptimizationConfiguration[];
                // Advertiser group ID of the associated advertiser.
                advertiserGroupId?: string;
                // Advertiser ID of this campaign. This is a required field.
                advertiserId?: string;
                // Dimension value for the advertiser ID of this campaign. This is a read-only, auto-generated field.
                advertiserIdDimensionValue?: Schema.DimensionValue;
                // Whether this campaign has been archived.
                archived?: boolean;
                // Audience segment groups assigned to this campaign. Cannot have more than 300 segment groups.
                audienceSegmentGroups?: Schema.AudienceSegmentGroup[];
                // Billing invoice code included in the Campaign Manager client billing invoices associated with the campaign.
                billingInvoiceCode?: string;
                // Click-through URL suffix override properties for this campaign.
                clickThroughUrlSuffixProperties?: Schema.ClickThroughUrlSuffixProperties;
                // Arbitrary comments about this campaign. Must be less than 256 characters long.
                comment?: string;
                // Information about the creation of this campaign. This is a read-only field.
                createInfo?: Schema.LastModifiedInfo;
                // List of creative group IDs that are assigned to the campaign.
                creativeGroupIds?: string[];
                // Creative optimization configuration for the campaign.
                creativeOptimizationConfiguration?: Schema.CreativeOptimizationConfiguration;
                // Click-through event tag ID override properties for this campaign.
                defaultClickThroughEventTagProperties?: Schema.DefaultClickThroughEventTagProperties;
                // The default landing page ID for this campaign.
                defaultLandingPageId?: string;
                endDate?: string;
                // Overrides that can be used to activate or deactivate advertiser event tags.
                eventTagOverrides?: Schema.EventTagOverride[];
                // External ID for this campaign.
                externalId?: string;
                // ID of this campaign. This is a read-only auto-generated field.
                id?: string;
                // Dimension value for the ID of this campaign. This is a read-only, auto-generated field.
                idDimensionValue?: Schema.DimensionValue;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaign".
                kind?: string;
                // Information about the most recent modification of this campaign. This is a read-only field.
                lastModifiedInfo?: Schema.LastModifiedInfo;
                // Name of this campaign. This is a required field and must be less than 256 characters long and unique among campaigns of
                // the same advertiser.
                name?: string;
                // Whether Nielsen reports are enabled for this campaign.
                nielsenOcrEnabled?: boolean;
                startDate?: string;
                // Subaccount ID of this campaign. This is a read-only field that can be left blank.
                subaccountId?: string;
                // Campaign trafficker contact emails.
                traffickerEmails?: string[];
            }
            // Identifies a creative which has been associated with a given campaign.
            interface CampaignCreativeAssociation {
                // ID of the creative associated with the campaign. This is a required field.
                creativeId?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignCreativeAssociation".
                kind?: string;
            }
            // Campaign Creative Association List Response
            interface CampaignCreativeAssociationsListResponse {
                // Campaign creative association collection
                campaignCreativeAssociations?: Schema.CampaignCreativeAssociation[];
                // Identifies what kind of resource this is. Value: the fixed string
                // "dfareporting#campaignCreativeAssociationsListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
            }
            // Campaign Manager IDs related to the custom event.
            interface CampaignManagerIds {
                // Ad ID for Campaign Manager.
                adId?: string;
                // Campaign ID for Campaign Manager.
                campaignId?: string;
                // Creative ID for Campaign Manager.
                creativeId?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignManagerIds".
                kind?: string;
                // Placement ID for Campaign Manager.
                placementId?: string;
                // Site ID for Campaign Manager.
                siteId?: string;
            }
            // Campaign List Response
            interface CampaignsListResponse {
                // Campaign collection.
                campaigns?: Schema.Campaign[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignsListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
            }
            // Describes a change that a user has made to a resource.
            interface ChangeLog {
                // Account ID of the modified object.
                accountId?: string;
                // Action which caused the change.
                action?: string;
                changeTime?: string;
                // Field name of the object which changed.
                fieldName?: string;
                // ID of this change log.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#changeLog".
                kind?: string;
                // New value of the object field.
                newValue?: string;
                // ID of the object of this change log. The object could be a campaign, placement, ad, or other type.
                objectId?: string;
                // Object type of the change log.
                objectType?: string;
                // Old value of the object field.
                oldValue?: string;
                // Subaccount ID of the modified object.
                subaccountId?: string;
                // Transaction ID of this change log. When a single API call results in many changes, each change will have a separate ID
                // in the change log but will share the same transactionId.
                transactionId?: string;
                // ID of the user who modified the object.
                userProfileId?: string;
                // User profile name of the user who modified the object.
                userProfileName?: string;
            }
            // Change Log List Response
            interface ChangeLogsListResponse {
                // Change log collection.
                changeLogs?: Schema.ChangeLog[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#changeLogsListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
            }
            // Represents a DfaReporting channel grouping.
            interface ChannelGrouping {
                // ChannelGrouping fallback name.
                fallbackName?: string;
                // The kind of resource this is, in this case dfareporting#channelGrouping.
                kind?: string;
                // ChannelGrouping name.
                name?: string;
                // The rules contained within this channel grouping.
                rules?: Schema.ChannelGroupingRule[];
            }
            // Represents a DfaReporting channel grouping rule.
            interface ChannelGroupingRule {
                // The disjunctive match statements contained within this rule.
                disjunctiveMatchStatements?: Schema.DisjunctiveMatchStatement[];
                // The kind of resource this is, in this case dfareporting#channelGroupingRule.
                kind?: string;
                // Rule name.
                name?: string;
            }
            // City List Response
            interface CitiesListResponse {
                // City collection.
                cities?: Schema.City[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#citiesListResponse".
                kind?: string;
            }
            // Contains information about a city that can be targeted by ads.
            interface City {
                // Country code of the country to which this city belongs.
                countryCode?: string;
                // DART ID of the country to which this city belongs.
                countryDartId?: string;
                // DART ID of this city. This is the ID used for targeting and generating reports.
                dartId?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#city".
                kind?: string;
                // Metro region code of the metro region (DMA) to which this city belongs.
                metroCode?: string;
                // ID of the metro region (DMA) to which this city belongs.
                metroDmaId?: string;
                // Name of this city.
                name?: string;
                // Region code of the region to which this city belongs.
                regionCode?: string;
                // DART ID of the region to which this city belongs.
                regionDartId?: string;
            }
            // Creative Click Tag.
            interface ClickTag {
                // Parameter value for the specified click tag. This field contains a click-through url.
                clickThroughUrl?: Schema.CreativeClickThroughUrl;
                // Advertiser event name associated with the click tag. This field is used by DISPLAY_IMAGE_GALLERY and HTML5_BANNER
                // creatives. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
                eventName?: string;
                // Parameter name for the specified click tag. For DISPLAY_IMAGE_GALLERY creative assets, this field must match the value
                // of the creative asset's creativeAssetId.name field.
                name?: string;
            }
            // Click-through URL
            interface ClickThroughUrl {
                // Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as
                // follows: - If defaultLandingPage is enabled then the campaign's default landing page URL is assigned to this field. - If
                // defaultLandingPage is not enabled and a landingPageId is specified then that landing page's URL is assigned to this
                // field. - If neither of the above cases apply, then the customClickThroughUrl is assigned to this field.
                computedClickThroughUrl?: string;
                // Custom click-through URL. Applicable if the defaultLandingPage field is set to false and the landingPageId field is left
                // unset.
                customClickThroughUrl?: string;
                // Whether the campaign default landing page is used.
                defaultLandingPage?: boolean;
                // ID of the landing page for the click-through URL. Applicable if the defaultLandingPage field is set to false.
                landingPageId?: string;
            }
            // Click Through URL Suffix settings.
            interface ClickThroughUrlSuffixProperties {
                // Click-through URL suffix to apply to all ads in this entity's scope. Must be less than 128 characters long.
                clickThroughUrlSuffix?: string;
                // Whether this entity should override the inherited click-through URL suffix with its own defined value.
                overrideInheritedSuffix?: boolean;
            }
            // Companion Click-through override.
            interface CompanionClickThroughOverride {
                // Click-through URL of this companion click-through override.
                clickThroughUrl?: Schema.ClickThroughUrl;
                // ID of the creative for this companion click-through override.
                creativeId?: string;
            }
            // Companion Settings
            interface CompanionSetting {
                // Whether companions are disabled for this placement.
                companionsDisabled?: boolean;
                // Allowlist of companion sizes to be served to this placement. Set this list to null or empty to serve all companion
                // sizes.
                enabledSizes?: Schema.Size[];
                // Whether to serve only static images as companions.
                imageOnly?: boolean;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#companionSetting".
                kind?: string;
            }
            // Represents a response to the queryCompatibleFields method.
            interface CompatibleFields {
                // Contains items that are compatible to be selected for a report of type "CROSS_DIMENSION_REACH".
                crossDimensionReachReportCompatibleFields?: Schema.CrossDimensionReachReportCompatibleFields;
                // Contains items that are compatible to be selected for a report of type "FLOODLIGHT".
                floodlightReportCompatibleFields?: Schema.FloodlightReportCompatibleFields;
                // The kind of resource this is, in this case dfareporting#compatibleFields.
                kind?: string;
                // Contains items that are compatible to be selected for a report of type "PATH_ATTRIBUTION".
                pathAttributionReportCompatibleFields?: Schema.PathReportCompatibleFields;
                // Contains items that are compatible to be selected for a report of type "PATH".
                pathReportCompatibleFields?: Schema.PathReportCompatibleFields;
                // Contains items that are compatible to be selected for a report of type "PATH_TO_CONVERSION".
                pathToConversionReportCompatibleFields?: Schema.PathToConversionReportCompatibleFields;
                // Contains items that are compatible to be selected for a report of type "REACH".
                reachReportCompatibleFields?: Schema.ReachReportCompatibleFields;
                // Contains items that are compatible to be selected for a report of type "STANDARD".
                reportCompatibleFields?: Schema.ReportCompatibleFields;
            }
            // Contains information about an internet connection type that can be targeted by ads. Clients can use the connection type
            // to target mobile vs. broadband users.
            interface ConnectionType {
                // ID of this connection type.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#connectionType".
                kind?: string;
                // Name of this connection type.
                name?: string;
            }
            // Connection Type List Response
            interface ConnectionTypesListResponse {
                // Collection of connection types such as broadband and mobile.
                connectionTypes?: Schema.ConnectionType[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#connectionTypesListResponse".
                kind?: string;
            }
            // Content Category List Response
            interface ContentCategoriesListResponse {
                // Content category collection.
                contentCategories?: Schema.ContentCategory[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#contentCategoriesListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
            }
            // Organizes placements according to the contents of their associated webpages.
            interface ContentCategory {
                // Account ID of this content category. This is a read-only field that can be left blank.
                accountId?: string;
                // ID of this content category. This is a read-only, auto-generated field.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#contentCategory".
                kind?: string;
                // Name of this content category. This is a required field and must be less than 256 characters long and unique among
                // content categories of the same account.
                name?: string;
            }
            // A Conversion represents when a user successfully performs a desired action after seeing an ad.
            interface Conversion {
                // Whether this particular request may come from a user under the age of 13, under COPPA compliance.
                childDirectedTreatment?: boolean;
                // Custom floodlight variables.
                customVariables?: Schema.CustomFloodlightVariable[];
                // The display click ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId,
                // mobileDeviceId and gclid. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or mobileDeviceId or gclid
                // is a required field.
                dclid?: string;
                // The alphanumeric encrypted user ID. When set, encryptionInfo should also be specified. This field is mutually exclusive
                // with encryptedUserIdCandidates[], matchId, mobileDeviceId, gclid and dclid. This or encryptedUserIdCandidates[] or
                // matchId or mobileDeviceId or gclid or dclid is a required field.
                encryptedUserId?: string;
                // A list of the alphanumeric encrypted user IDs. Any user ID with exposure prior to the conversion timestamp will be used
                // in the inserted conversion. If no such user ID is found then the conversion will be rejected with INVALID_ARGUMENT
                // error. When set, encryptionInfo should also be specified. This field may only be used when calling batchinsert; it is
                // not supported by batchupdate. This field is mutually exclusive with encryptedUserId, matchId, mobileDeviceId, gclid and
                // dclid. This or encryptedUserId or matchId or mobileDeviceId or gclid or dclid is a required field.
                encryptedUserIdCandidates?: string[];
                // Floodlight Activity ID of this conversion. This is a required field.
                floodlightActivityId?: string;
                // Floodlight Configuration ID of this conversion. This is a required field.
                floodlightConfigurationId?: string;
                // The Google click ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId,
                // mobileDeviceId and dclid. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or mobileDeviceId or dclid
                // is a required field.
                gclid?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversion".
                kind?: string;
                // Whether Limit Ad Tracking is enabled. When set to true, the conversion will be used for reporting but not targeting.
                // This will prevent remarketing.
                limitAdTracking?: boolean;
                // The match ID field. A match ID is your own first-party identifier that has been synced with Google using the match ID
                // feature in Floodlight. This field is mutually exclusive with encryptedUserId,
                // encryptedUserIdCandidates[],mobileDeviceId, gclid and dclid. This or encryptedUserId or encryptedUserIdCandidates[] or
                // mobileDeviceId or gclid or dclid is a required field.
                matchId?: string;
                // The mobile device ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, gclid
                // and dclid. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or gclid or dclid is a required field.
                mobileDeviceId?: string;
                // Whether the conversion was for a non personalized ad.
                nonPersonalizedAd?: boolean;
                // The ordinal of the conversion. Use this field to control how conversions of the same user and day are de-duplicated.
                // This is a required field.
                ordinal?: string;
                // The quantity of the conversion.
                quantity?: string;
                // The timestamp of conversion, in Unix epoch micros. This is a required field.
                timestampMicros?: string;
                // Whether this particular request may come from a user under the age of 16 (may differ by country), under compliance with
                // the European Union's General Data Protection Regulation (GDPR).
                treatmentForUnderage?: boolean;
                // The value of the conversion.
                value?: number;
            }
            // The error code and description for a conversion that failed to insert or update.
            interface ConversionError {
                // The error code.
                code?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionError".
                kind?: string;
                // A description of the error.
                message?: string;
            }
            // The original conversion that was inserted or updated and whether there were any errors.
            interface ConversionStatus {
                // The original conversion that was inserted or updated.
                conversion?: Schema.Conversion;
                // A list of errors related to this conversion.
                errors?: Schema.ConversionError[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionStatus".
                kind?: string;
            }
            // Insert Conversions Request.
            interface ConversionsBatchInsertRequest {
                // The set of conversions to insert.
                conversions?: Schema.Conversion[];
                // Describes how encryptedUserId or encryptedUserIdCandidates[] is encrypted. This is a required field if encryptedUserId
                // or encryptedUserIdCandidates[] is used.
                encryptionInfo?: Schema.EncryptionInfo;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchInsertRequest".
                kind?: string;
            }
            // Insert Conversions Response.
            interface ConversionsBatchInsertResponse {
                // Indicates that some or all conversions failed to insert.
                hasFailures?: boolean;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchInsertResponse".
                kind?: string;
                // The insert status of each conversion. Statuses are returned in the same order that conversions are inserted.
                status?: Schema.ConversionStatus[];
            }
            // Update Conversions Request.
            interface ConversionsBatchUpdateRequest {
                // The set of conversions to update.
                conversions?: Schema.Conversion[];
                // Describes how encryptedUserId is encrypted. This is a required field if encryptedUserId is used.
                encryptionInfo?: Schema.EncryptionInfo;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchUpdateRequest".
                kind?: string;
            }
            // Update Conversions Response.
            interface ConversionsBatchUpdateResponse {
                // Indicates that some or all conversions failed to update.
                hasFailures?: boolean;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchUpdateResponse".
                kind?: string;
                // The update status of each conversion. Statuses are returned in the same order that conversions are updated.
                status?: Schema.ConversionStatus[];
            }
            // Country List Response
            interface CountriesListResponse {
                // Country collection.
                countries?: Schema.Country[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#countriesListResponse".
                kind?: string;
            }
            // Contains information about a country that can be targeted by ads.
            interface Country {
                // Country code.
                countryCode?: string;
                // DART ID of this country. This is the ID used for targeting and generating reports.
                dartId?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#country".
                kind?: string;
                // Name of this country.
                name?: string;
                // Whether ad serving supports secure servers in this country.
                sslEnabled?: boolean;
            }
            // Contains properties of a Creative.
            interface Creative {
                // Account ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations.
                // Applicable to all creative types.
                accountId?: string;
                // Whether the creative is active. Applicable to all creative types.
                active?: boolean;
                // Ad parameters user for VPAID creative. This is a read-only field. Applicable to the following creative types: all VPAID.
                adParameters?: string;
                // Keywords for a Rich Media creative. Keywords let you customize the creative settings of a Rich Media ad running on your
                // site without having to contact the advertiser. You can use keywords to dynamically change the look or functionality of a
                // creative. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
                adTagKeys?: string[];
                // Additional sizes associated with a responsive creative. When inserting or updating a creative either the size ID field
                // or size width and height fields can be used. Applicable to DISPLAY creatives when the primary asset type is HTML_IMAGE.
                additionalSizes?: Schema.Size[];
                // Advertiser ID of this creative. This is a required field. Applicable to all creative types.
                advertiserId?: string;
                // Whether script access is allowed for this creative. This is a read-only and deprecated field which will automatically be
                // set to true on update. Applicable to the following creative types: FLASH_INPAGE.
                allowScriptAccess?: boolean;
                // Whether the creative is archived. Applicable to all creative types.
                archived?: boolean;
                // Type of artwork used for the creative. This is a read-only field. Applicable to the following creative types: all
                // RICH_MEDIA, and all VPAID.
                artworkType?: string;
                // Source application where creative was authored. Presently, only DBM authored creatives will have this field set.
                // Applicable to all creative types.
                authoringSource?: string;
                // Authoring tool for HTML5 banner creatives. This is a read-only field. Applicable to the following creative types:
                // HTML5_BANNER.
                authoringTool?: string;
                // Whether images are automatically advanced for image gallery creatives. Applicable to the following creative types:
                // DISPLAY_IMAGE_GALLERY.
                autoAdvanceImages?: boolean;
                // The 6-character HTML color code, beginning with #, for the background of the window area where the Flash file is
                // displayed. Default is white. Applicable to the following creative types: FLASH_INPAGE.
                backgroundColor?: string;
                // Click-through URL for backup image. Applicable to ENHANCED_BANNER when the primary asset type is not HTML_IMAGE.
                backupImageClickThroughUrl?: Schema.CreativeClickThroughUrl;
                // List of feature dependencies that will cause a backup image to be served if the browser that serves the ad does not
                // support them. Feature dependencies are features that a browser must be able to support in order to render your HTML5
                // creative asset correctly. This field is initially auto-generated to contain all features detected by Campaign Manager
                // for all the assets of this creative and can then be modified by the client. To reset this field, copy over all the
                // creativeAssets' detected features. Applicable to the following creative types: HTML5_BANNER. Applicable to DISPLAY when
                // the primary asset type is not HTML_IMAGE.
                backupImageFeatures?: string[];
                // Reporting label used for HTML5 banner backup image. Applicable to the following creative types: DISPLAY when the primary
                // asset type is not HTML_IMAGE.
                backupImageReportingLabel?: string;
                // Target window for backup image. Applicable to the following creative types: FLASH_INPAGE and HTML5_BANNER. Applicable to
                // DISPLAY when the primary asset type is not HTML_IMAGE.
                backupImageTargetWindow?: Schema.TargetWindow;
                // Click tags of the creative. For DISPLAY, FLASH_INPAGE, and HTML5_BANNER creatives, this is a subset of detected click
                // tags for the assets associated with this creative. After creating a flash asset, detected click tags will be returned in
                // the creativeAssetMetadata. When inserting the creative, populate the creative clickTags field using the
                // creativeAssetMetadata.clickTags field. For DISPLAY_IMAGE_GALLERY creatives, there should be exactly one entry in this
                // list for each image creative asset. A click tag is matched with a corresponding creative asset by matching the
                // clickTag.name field with the creativeAsset.assetIdentifier.name field. Applicable to the following creative types:
                // DISPLAY_IMAGE_GALLERY, FLASH_INPAGE, HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
                clickTags?: Schema.ClickTag[];
                // Industry standard ID assigned to creative for reach and frequency. Applicable to INSTREAM_VIDEO_REDIRECT creatives.
                commercialId?: string;
                // List of companion creatives assigned to an in-Stream video creative. Acceptable values include IDs of existing flash and
                // image creatives. Applicable to the following creative types: all VPAID, all INSTREAM_AUDIO and all INSTREAM_VIDEO with
                // dynamicAssetSelection set to false.
                companionCreatives?: string[];
                // Compatibilities associated with this creative. This is a read-only field. DISPLAY and DISPLAY_INTERSTITIAL refer to
                // rendering either on desktop or on mobile devices or in mobile apps for regular or interstitial ads, respectively. APP
                // and APP_INTERSTITIAL are for rendering in mobile apps. Only pre-existing creatives may have these compatibilities since
                // new creatives will either be assigned DISPLAY or DISPLAY_INTERSTITIAL instead. IN_STREAM_VIDEO refers to rendering in
                // in-stream video ads developed with the VAST standard. IN_STREAM_AUDIO refers to rendering in in-stream audio ads
                // developed with the VAST standard. Applicable to all creative types. Acceptable values are: - "APP" - "APP_INTERSTITIAL"
                // - "IN_STREAM_VIDEO" - "IN_STREAM_AUDIO" - "DISPLAY" - "DISPLAY_INTERSTITIAL"
                compatibility?: string[];
                // Whether Flash assets associated with the creative need to be automatically converted to HTML5. This flag is enabled by
                // default and users can choose to disable it if they don't want the system to generate and use HTML5 asset for this
                // creative. Applicable to the following creative type: FLASH_INPAGE. Applicable to DISPLAY when the primary asset type is
                // not HTML_IMAGE.
                convertFlashToHtml5?: boolean;
                // List of counter events configured for the creative. For DISPLAY_IMAGE_GALLERY creatives, these are read-only and
                // auto-generated from clickTags. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and
                // all VPAID.
                counterCustomEvents?: Schema.CreativeCustomEvent[];
                // Required if dynamicAssetSelection is true.
                creativeAssetSelection?: Schema.CreativeAssetSelection;
                // Assets associated with a creative. Applicable to all but the following creative types: INTERNAL_REDIRECT,
                // INTERSTITIAL_INTERNAL_REDIRECT, and REDIRECT
                creativeAssets?: Schema.CreativeAsset[];
                // Creative field assignments for this creative. Applicable to all creative types.
                creativeFieldAssignments?: Schema.CreativeFieldAssignment[];
                // Custom key-values for a Rich Media creative. Key-values let you customize the creative settings of a Rich Media ad
                // running on your site without having to contact the advertiser. You can use key-values to dynamically change the look or
                // functionality of a creative. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
                customKeyValues?: string[];
                // Set this to true to enable the use of rules to target individual assets in this creative. When set to true
                // creativeAssetSelection must be set. This also controls asset-level companions. When this is true, companion creatives
                // should be assigned to creative assets. Learn more. Applicable to INSTREAM_VIDEO creatives.
                dynamicAssetSelection?: boolean;
                // List of exit events configured for the creative. For DISPLAY and DISPLAY_IMAGE_GALLERY creatives, these are read-only
                // and auto-generated from clickTags, For DISPLAY, an event is also created from the backupImageReportingLabel. Applicable
                // to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the
                // primary asset type is not HTML_IMAGE.
                exitCustomEvents?: Schema.CreativeCustomEvent[];
                // OpenWindow FSCommand of this creative. This lets the SWF file communicate with either Flash Player or the program
                // hosting Flash Player, such as a web browser. This is only triggered if allowScriptAccess field is true. Applicable to
                // the following creative types: FLASH_INPAGE.
                fsCommand?: Schema.FsCommand;
                // HTML code for the creative. This is a required field when applicable. This field is ignored if htmlCodeLocked is true.
                // Applicable to the following creative types: all CUSTOM, FLASH_INPAGE, and HTML5_BANNER, and all RICH_MEDIA.
                htmlCode?: string;
                // Whether HTML code is generated by Campaign Manager or manually entered. Set to true to ignore changes to htmlCode.
                // Applicable to the following creative types: FLASH_INPAGE and HTML5_BANNER.
                htmlCodeLocked?: boolean;
                // ID of this creative. This is a read-only, auto-generated field. Applicable to all creative types.
                id?: string;
                // Dimension value for the ID of this creative. This is a read-only field. Applicable to all creative types.
                idDimensionValue?: Schema.DimensionValue;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#creative".
                kind?: string;
                // Creative last modification information. This is a read-only field. Applicable to all creative types.
                lastModifiedInfo?: Schema.LastModifiedInfo;
                // Latest Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field.
                // Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
                latestTraffickedCreativeId?: string;
                // Description of the audio or video ad. Applicable to the following creative types: all INSTREAM_VIDEO, INSTREAM_AUDIO,
                // and all VPAID.
                mediaDescription?: string;
                // Creative audio or video duration in seconds. This is a read-only field. Applicable to the following creative types:
                // INSTREAM_VIDEO, INSTREAM_AUDIO, all RICH_MEDIA, and all VPAID.
                mediaDuration?: number;
                // Name of the creative. This is a required field and must be less than 256 characters long. Applicable to all creative
                // types.
                name?: string;
                // Online behavioral advertising icon to be added to the creative. Applicable to the following creative types: all
                // INSTREAM_VIDEO.
                obaIcon?: Schema.ObaIcon;
                // Override CSS value for rich media creatives. Applicable to the following creative types: all RICH_MEDIA.
                overrideCss?: string;
                // Amount of time to play the video before counting a view. Applicable to the following creative types: all INSTREAM_VIDEO.
                progressOffset?: Schema.VideoOffset;
                // URL of hosted image or hosted video or another ad tag. For INSTREAM_VIDEO_REDIRECT creatives this is the in-stream video
                // redirect URL. The standard for a VAST (Video Ad Serving Template) ad response allows for a redirect link to another VAST
                // 2.0 or 3.0 call. This is a required field when applicable. Applicable to the following creative types: DISPLAY_REDIRECT,
                // INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO_REDIRECT
                redirectUrl?: string;
                // ID of current rendering version. This is a read-only field. Applicable to all creative types.
                renderingId?: string;
                // Dimension value for the rendering ID of this creative. This is a read-only field. Applicable to all creative types.
                renderingIdDimensionValue?: Schema.DimensionValue;
                // The minimum required Flash plugin version for this creative. For example, 11.2.202.235. This is a read-only field.
                // Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
                requiredFlashPluginVersion?: string;
                // The internal Flash version for this creative as calculated by Studio. This is a read-only field. Applicable to the
                // following creative types: FLASH_INPAGE all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type
                // is not HTML_IMAGE.
                requiredFlashVersion?: Integer;
                // Size associated with this creative. When inserting or updating a creative either the size ID field or size width and
                // height fields can be used. This is a required field when applicable; however for IMAGE, FLASH_INPAGE creatives, and for
                // DISPLAY creatives with a primary asset of type HTML_IMAGE, if left blank, this field will be automatically set using the
                // actual size of the associated image assets. Applicable to the following creative types: DISPLAY, DISPLAY_IMAGE_GALLERY,
                // FLASH_INPAGE, HTML5_BANNER, IMAGE, and all RICH_MEDIA.
                size?: Schema.Size;
                // Amount of time to play the video before the skip button appears. Applicable to the following creative types: all
                // INSTREAM_VIDEO.
                skipOffset?: Schema.VideoOffset;
                // Whether the user can choose to skip the creative. Applicable to the following creative types: all INSTREAM_VIDEO and all
                // VPAID.
                skippable?: boolean;
                // Whether the creative is SSL-compliant. This is a read-only field. Applicable to all creative types.
                sslCompliant?: boolean;
                // Whether creative should be treated as SSL compliant even if the system scan shows it's not. Applicable to all creative
                // types.
                sslOverride?: boolean;
                // Studio advertiser ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the
                // following creative types: all RICH_MEDIA, and all VPAID.
                studioAdvertiserId?: string;
                // Studio creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the
                // following creative types: all RICH_MEDIA, and all VPAID.
                studioCreativeId?: string;
                // Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to
                // the following creative types: all RICH_MEDIA, and all VPAID.
                studioTraffickedCreativeId?: string;
                // Subaccount ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations.
                // Applicable to all creative types.
                subaccountId?: string;
                // Third-party URL used to record backup image impressions. Applicable to the following creative types: all RICH_MEDIA.
                thirdPartyBackupImageImpressionsUrl?: string;
                // Third-party URL used to record rich media impressions. Applicable to the following creative types: all RICH_MEDIA.
                thirdPartyRichMediaImpressionsUrl?: string;
                // Third-party URLs for tracking in-stream creative events. Applicable to the following creative types: all INSTREAM_VIDEO,
                // all INSTREAM_AUDIO, and all VPAID.
                thirdPartyUrls?: Schema.ThirdPartyTrackingUrl[];
                // List of timer events configured for the creative. For DISPLAY_IMAGE_GALLERY creatives, these are read-only and
                // auto-generated from clickTags. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and
                // all VPAID. Applicable to DISPLAY when the primary asset is not HTML_IMAGE.
                timerCustomEvents?: Schema.CreativeCustomEvent[];
                // Combined size of all creative assets. This is a read-only field. Applicable to the following creative types: all
                // RICH_MEDIA, and all VPAID.
                totalFileSize?: string;
                // Type of this creative. This is a required field. Applicable to all creative types. *Note:* FLASH_INPAGE, HTML5_BANNER,
                // and IMAGE are only used for existing creatives. New creatives should use DISPLAY as a replacement for these types.
                type?: string;
                // A Universal Ad ID as per the VAST 4.0 spec. Applicable to the following creative types: INSTREAM_AUDIO and
                // INSTREAM_VIDEO and VPAID.
                universalAdId?: Schema.UniversalAdId;
                // The version number helps you keep track of multiple versions of your creative in your reports. The version number will
                // always be auto-generated during insert operations to start at 1. For tracking creatives the version cannot be
                // incremented and will always remain at 1. For all other creative types the version can be incremented only by 1 during
                // update operations. In addition, the version will be automatically incremented by 1 when undergoing Rich Media creative
                // merging. Applicable to all creative types.
                version?: Integer;
            }
            // Creative Asset.
            interface CreativeAsset {
                // Whether ActionScript3 is enabled for the flash asset. This is a read-only field. Applicable to the following creative
                // type: FLASH_INPAGE. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
                actionScript3?: boolean;
                // Whether the video or audio asset is active. This is a read-only field for VPAID_NON_LINEAR_VIDEO assets. Applicable to
                // the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
                active?: boolean;
                // Additional sizes associated with this creative asset. HTML5 asset generated by compatible software such as GWD will be
                // able to support more sizes this creative asset can render.
                additionalSizes?: Schema.Size[];
                // Possible alignments for an asset. This is a read-only field. Applicable to the following creative types:
                // RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL .
                alignment?: string;
                // Artwork type of rich media creative. This is a read-only field. Applicable to the following creative types: all
                // RICH_MEDIA.
                artworkType?: string;
                // Identifier of this asset. This is the same identifier returned during creative asset insert operation. This is a
                // required field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT.
                assetIdentifier?: Schema.CreativeAssetId;
                // Audio stream bit rate in kbps. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO,
                // INSTREAM_VIDEO and all VPAID.
                audioBitRate?: Integer;
                // Audio sample bit rate in hertz. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO,
                // INSTREAM_VIDEO and all VPAID.
                audioSampleRate?: Integer;
                // Exit event configured for the backup image. Applicable to the following creative types: all RICH_MEDIA.
                backupImageExit?: Schema.CreativeCustomEvent;
                // Detected bit-rate for audio or video asset. This is a read-only field. Applicable to the following creative types:
                // INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
                bitRate?: Integer;
                // Rich media child asset type. This is a read-only field. Applicable to the following creative types: all VPAID.
                childAssetType?: string;
                // Size of an asset when collapsed. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA
                // and all VPAID. Additionally, applicable to assets whose displayType is ASSET_DISPLAY_TYPE_EXPANDING or
                // ASSET_DISPLAY_TYPE_PEEL_DOWN.
                collapsedSize?: Schema.Size;
                // List of companion creatives assigned to an in-stream video creative asset. Acceptable values include IDs of existing
                // flash and image creatives. Applicable to INSTREAM_VIDEO creative type with dynamicAssetSelection set to true.
                companionCreativeIds?: string[];
                // Custom start time in seconds for making the asset visible. Applicable to the following creative types: all RICH_MEDIA.
                // Value must be greater than or equal to 0.
                customStartTimeValue?: Integer;
                // List of feature dependencies for the creative asset that are detected by Campaign Manager. Feature dependencies are
                // features that a browser must be able to support in order to render your HTML5 creative correctly. This is a read-only,
                // auto-generated field. Applicable to the following creative types: HTML5_BANNER. Applicable to DISPLAY when the primary
                // asset type is not HTML_IMAGE.
                detectedFeatures?: string[];
                // Type of rich media asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
                displayType?: string;
                // Duration in seconds for which an asset will be displayed. Applicable to the following creative types: INSTREAM_AUDIO,
                // INSTREAM_VIDEO and VPAID_LINEAR_VIDEO. Value must be greater than or equal to 1.
                duration?: Integer;
                // Duration type for which an asset will be displayed. Applicable to the following creative types: all RICH_MEDIA.
                durationType?: string;
                // Detected expanded dimension for video asset. This is a read-only field. Applicable to the following creative types:
                // INSTREAM_VIDEO and all VPAID.
                expandedDimension?: Schema.Size;
                // File size associated with this creative asset. This is a read-only field. Applicable to all but the following creative
                // types: all REDIRECT and TRACKING_TEXT.
                fileSize?: string;
                // Flash version of the asset. This is a read-only field. Applicable to the following creative types: FLASH_INPAGE, all
                // RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
                flashVersion?: Integer;
                // Video frame rate for video asset in frames per second. This is a read-only field. Applicable to the following creative
                // types: INSTREAM_VIDEO and all VPAID.
                frameRate?: number;
                // Whether to hide Flash objects flag for an asset. Applicable to the following creative types: all RICH_MEDIA.
                hideFlashObjects?: boolean;
                // Whether to hide selection boxes flag for an asset. Applicable to the following creative types: all RICH_MEDIA.
                hideSelectionBoxes?: boolean;
                // Whether the asset is horizontally locked. This is a read-only field. Applicable to the following creative types: all
                // RICH_MEDIA.
                horizontallyLocked?: boolean;
                // Numeric ID of this creative asset. This is a required field and should not be modified. Applicable to all but the
                // following creative types: all REDIRECT and TRACKING_TEXT.
                id?: string;
                // Dimension value for the ID of the asset. This is a read-only, auto-generated field.
                idDimensionValue?: Schema.DimensionValue;
                // Detected duration for audio or video asset. This is a read-only field. Applicable to the following creative types:
                // INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
                mediaDuration?: number;
                // Detected MIME type for audio or video asset. This is a read-only field. Applicable to the following creative types:
                // INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
                mimeType?: string;
                // Offset position for an asset in collapsed mode. This is a read-only field. Applicable to the following creative types:
                // all RICH_MEDIA and all VPAID. Additionally, only applicable to assets whose displayType is ASSET_DISPLAY_TYPE_EXPANDING
                // or ASSET_DISPLAY_TYPE_PEEL_DOWN.
                offset?: Schema.OffsetPosition;
                // Orientation of video asset. This is a read-only, auto-generated field.
                orientation?: string;
                // Whether the backup asset is original or changed by the user in Campaign Manager. Applicable to the following creative
                // types: all RICH_MEDIA.
                originalBackup?: boolean;
                // Whether this asset is used as a polite load asset.
                politeLoad?: boolean;
                // Offset position for an asset. Applicable to the following creative types: all RICH_MEDIA.
                position?: Schema.OffsetPosition;
                // Offset left unit for an asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
                positionLeftUnit?: string;
                // Offset top unit for an asset. This is a read-only field if the asset displayType is ASSET_DISPLAY_TYPE_OVERLAY.
                // Applicable to the following creative types: all RICH_MEDIA.
                positionTopUnit?: string;
                // Progressive URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO
                // and all VPAID.
                progressiveServingUrl?: string;
                // Whether the asset pushes down other content. Applicable to the following creative types: all RICH_MEDIA. Additionally,
                // only applicable when the asset offsets are 0, the collapsedSize.width matches size.width, and the collapsedSize.height
                // is less than size.height.
                pushdown?: boolean;
                // Pushdown duration in seconds for an asset. Applicable to the following creative types: all RICH_MEDIA.Additionally, only
                // applicable when the asset pushdown field is true, the offsets are 0, the collapsedSize.width matches size.width, and the
                // collapsedSize.height is less than size.height. Acceptable values are 0 to 9.99, inclusive.
                pushdownDuration?: number;
                // Role of the asset in relation to creative. Applicable to all but the following creative types: all REDIRECT and
                // TRACKING_TEXT. This is a required field. PRIMARY applies to DISPLAY, FLASH_INPAGE, HTML5_BANNER, IMAGE,
                // DISPLAY_IMAGE_GALLERY, all RICH_MEDIA (which may contain multiple primary assets), and all VPAID creatives. BACKUP_IMAGE
                // applies to FLASH_INPAGE, HTML5_BANNER, all RICH_MEDIA, and all VPAID creatives. Applicable to DISPLAY when the primary
                // asset type is not HTML_IMAGE. ADDITIONAL_IMAGE and ADDITIONAL_FLASH apply to FLASH_INPAGE creatives. OTHER refers to
                // assets from sources other than Campaign Manager, such as Studio uploaded assets, applicable to all RICH_MEDIA and all
                // VPAID creatives. PARENT_VIDEO refers to videos uploaded by the user in Campaign Manager and is applicable to
                // INSTREAM_VIDEO and VPAID_LINEAR_VIDEO creatives. TRANSCODED_VIDEO refers to videos transcoded by Campaign Manager from
                // PARENT_VIDEO assets and is applicable to INSTREAM_VIDEO and VPAID_LINEAR_VIDEO creatives. ALTERNATE_VIDEO refers to the
                // Campaign Manager representation of child asset videos from Studio, and is applicable to VPAID_LINEAR_VIDEO creatives.
                // These cannot be added or removed within Campaign Manager. For VPAID_LINEAR_VIDEO creatives, PARENT_VIDEO,
                // TRANSCODED_VIDEO and ALTERNATE_VIDEO assets that are marked active serve as backup in case the VPAID creative cannot be
                // served. Only PARENT_VIDEO assets can be added or removed for an INSTREAM_VIDEO or VPAID_LINEAR_VIDEO creative.
                // PARENT_AUDIO refers to audios uploaded by the user in Campaign Manager and is applicable to INSTREAM_AUDIO creatives.
                // TRANSCODED_AUDIO refers to audios transcoded by Campaign Manager from PARENT_AUDIO assets and is applicable to
                // INSTREAM_AUDIO creatives.
                role?: string;
                // Size associated with this creative asset. This is a required field when applicable; however for IMAGE and FLASH_INPAGE,
                // creatives if left blank, this field will be automatically set using the actual size of the associated image asset.
                // Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, FLASH_INPAGE, HTML5_BANNER, IMAGE, and all
                // RICH_MEDIA. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
                size?: Schema.Size;
                // Whether the asset is SSL-compliant. This is a read-only field. Applicable to all but the following creative types: all
                // REDIRECT and TRACKING_TEXT.
                sslCompliant?: boolean;
                // Initial wait time type before making the asset visible. Applicable to the following creative types: all RICH_MEDIA.
                startTimeType?: string;
                // Streaming URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and
                // all VPAID.
                streamingServingUrl?: string;
                // Whether the asset is transparent. Applicable to the following creative types: all RICH_MEDIA. Additionally, only
                // applicable to HTML5 assets.
                transparency?: boolean;
                // Whether the asset is vertically locked. This is a read-only field. Applicable to the following creative types: all
                // RICH_MEDIA.
                verticallyLocked?: boolean;
                // Window mode options for flash assets. Applicable to the following creative types: FLASH_INPAGE,
                // RICH_MEDIA_DISPLAY_EXPANDING, RICH_MEDIA_IM_EXPAND, RICH_MEDIA_DISPLAY_BANNER, and RICH_MEDIA_INPAGE_FLOATING.
                windowMode?: string;
                // zIndex value of an asset. Applicable to the following creative types: all RICH_MEDIA.Additionally, only applicable to
                // assets whose displayType is NOT one of the following types: ASSET_DISPLAY_TYPE_INPAGE or ASSET_DISPLAY_TYPE_OVERLAY.
                // Acceptable values are -999999999 to 999999999, inclusive.
                zIndex?: Integer;
                // File name of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER.
                zipFilename?: string;
                // Size of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER.
                zipFilesize?: string;
            }
            // Creative Asset ID.
            interface CreativeAssetId {
                // Name of the creative asset. This is a required field while inserting an asset. After insertion, this assetIdentifier is
                // used to identify the uploaded asset. Characters in the name must be alphanumeric or one of the following: ".-_ ". Spaces
                // are allowed.
                name?: string;
                // Type of asset to upload. This is a required field. FLASH and IMAGE are no longer supported for new uploads. All image
                // assets should use HTML_IMAGE.
                type?: string;
            }
            // CreativeAssets contains properties of a creative asset file which will be uploaded or has already been uploaded. Refer
            // to the creative sample code for how to upload assets and insert a creative.
            interface CreativeAssetMetadata {
                // ID of the creative asset. This is a required field.
                assetIdentifier?: Schema.CreativeAssetId;
                // List of detected click tags for assets. This is a read-only, auto-generated field. This field is empty for a rich media
                // asset.
                clickTags?: Schema.ClickTag[];
                // List of counter events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich
                // media asset.
                counterCustomEvents?: Schema.CreativeCustomEvent[];
                // List of feature dependencies for the creative asset that are detected by Campaign Manager. Feature dependencies are
                // features that a browser must be able to support in order to render your HTML5 creative correctly. This is a read-only,
                // auto-generated field.
                detectedFeatures?: string[];
                // List of exit events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich
                // media asset.
                exitCustomEvents?: Schema.CreativeCustomEvent[];
                // Numeric ID of the asset. This is a read-only, auto-generated field.
                id?: string;
                // Dimension value for the numeric ID of the asset. This is a read-only, auto-generated field.
                idDimensionValue?: Schema.DimensionValue;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeAssetMetadata".
                kind?: string;
                // True if the uploaded asset is a rich media asset. This is a read-only, auto-generated field.
                richMedia?: boolean;
                // List of timer events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich
                // media asset.
                timerCustomEvents?: Schema.CreativeCustomEvent[];
                // Rules validated during code generation that generated a warning. This is a read-only, auto-generated field. Possible
                // values are: - "ADMOB_REFERENCED" - "ASSET_FORMAT_UNSUPPORTED_DCM" - "ASSET_INVALID" - "CLICK_TAG_HARD_CODED" -
                // "CLICK_TAG_INVALID" - "CLICK_TAG_IN_GWD" - "CLICK_TAG_MISSING" - "CLICK_TAG_MORE_THAN_ONE" - "CLICK_TAG_NON_TOP_LEVEL" -
                // "COMPONENT_UNSUPPORTED_DCM" - "ENABLER_UNSUPPORTED_METHOD_DCM" - "EXTERNAL_FILE_REFERENCED" - "FILE_DETAIL_EMPTY" -
                // "FILE_TYPE_INVALID" - "GWD_PROPERTIES_INVALID" - "HTML5_FEATURE_UNSUPPORTED" - "LINKED_FILE_NOT_FOUND" -
                // "MAX_FLASH_VERSION_11" - "MRAID_REFERENCED" - "NOT_SSL_COMPLIANT" - "ORPHANED_ASSET" - "PRIMARY_HTML_MISSING" -
                // "SVG_INVALID" - "ZIP_INVALID"
                warnedValidationRules?: string[];
            }
            // Encapsulates the list of rules for asset selection and a default asset in case none of the rules match. Applicable to
            // INSTREAM_VIDEO creatives.
            interface CreativeAssetSelection {
                // A creativeAssets[].id. This should refer to one of the parent assets in this creative, and will be served if none of the
                // rules match. This is a required field.
                defaultAssetId?: string;
                // Rules determine which asset will be served to a viewer. Rules will be evaluated in the order in which they are stored in
                // this list. This list must contain at least one rule. Applicable to INSTREAM_VIDEO creatives.
                rules?: Schema.Rule[];
            }
            // Creative Assignment.
            interface CreativeAssignment {
                // Whether this creative assignment is active. When true, the creative will be included in the ad's rotation.
                active?: boolean;
                // Whether applicable event tags should fire when this creative assignment is rendered. If this value is unset when the ad
                // is inserted or updated, it will default to true for all creative types EXCEPT for INTERNAL_REDIRECT,
                // INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO.
                applyEventTags?: boolean;
                // Click-through URL of the creative assignment.
                clickThroughUrl?: Schema.ClickThroughUrl;
                // Companion creative overrides for this creative assignment. Applicable to video ads.
                companionCreativeOverrides?: Schema.CompanionClickThroughOverride[];
                // Creative group assignments for this creative assignment. Only one assignment per creative group number is allowed for a
                // maximum of two assignments.
                creativeGroupAssignments?: Schema.CreativeGroupAssignment[];
                // ID of the creative to be assigned. This is a required field.
                creativeId?: string;
                // Dimension value for the ID of the creative. This is a read-only, auto-generated field.
                creativeIdDimensionValue?: Schema.DimensionValue;
                endTime?: string;
                // Rich media exit overrides for this creative assignment. Applicable when the creative type is any of the following: -
                // DISPLAY - RICH_MEDIA_INPAGE - RICH_MEDIA_INPAGE_FLOATING - RICH_MEDIA_IM_EXPAND - RICH_MEDIA_EXPANDING -
                // RICH_MEDIA_INTERSTITIAL_FLOAT - RICH_MEDIA_MOBILE_IN_APP - RICH_MEDIA_MULTI_FLOATING - RICH_MEDIA_PEEL_DOWN -
                // VPAID_LINEAR - VPAID_NON_LINEAR
                richMediaExitOverrides?: Schema.RichMediaExitOverride[];
                // Sequence number of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_SEQUENTIAL.
                // Acceptable values are 1 to 65535, inclusive.
                sequence?: Integer;
                // Whether the creative to be assigned is SSL-compliant. This is a read-only field that is auto-generated when the ad is
                // inserted or updated.
                sslCompliant?: boolean;
                startTime?: string;
                // Weight of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_RANDOM. Value must be
                // greater than or equal to 1.
                weight?: Integer;
            }
            // Click-through URL
            interface CreativeClickThroughUrl {
                // Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as
                // follows: - If landingPageId is specified then that landing page's URL is assigned to this field. - Otherwise, the
                // customClickThroughUrl is assigned to this field.
                computedClickThroughUrl?: string;
                // Custom click-through URL. Applicable if the landingPageId field is left unset.
                customClickThroughUrl?: string;
                // ID of the landing page for the click-through URL.
                landingPageId?: string;
            }
            // Creative Custom Event.
            interface CreativeCustomEvent {
                // Unique ID of this event used by Reporting and Data Transfer. This is a read-only field.
                advertiserCustomEventId?: string;
                // User-entered name for the event.
                advertiserCustomEventName?: string;
                // Type of the event. This is a read-only field.
                advertiserCustomEventType?: string;
                // Artwork label column, used to link events in Campaign Manager back to events in Studio. This is a required field and
                // should not be modified after insertion.
                artworkLabel?: string;
                // Artwork type used by the creative.This is a read-only field.
                artworkType?: string;
                // Exit click-through URL for the event. This field is used only for exit events.
                exitClickThroughUrl?: Schema.CreativeClickThroughUrl;
                // ID of this event. This is a required field and should not be modified after insertion.
                id?: string;
                // Properties for rich media popup windows. This field is used only for exit events.
                popupWindowProperties?: Schema.PopupWindowProperties;
                // Target type used by the event.
                targetType?: string;
                // Video reporting ID, used to differentiate multiple videos in a single creative. This is a read-only field.
                videoReportingId?: string;
            }
            // Contains properties of a creative field.
            interface CreativeField {
                // Account ID of this creative field. This is a read-only field that can be left blank.
                accountId?: string;
                // Advertiser ID of this creative field. This is a required field on insertion.
                advertiserId?: string;
                // Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
                advertiserIdDimensionValue?: Schema.DimensionValue;
                // ID of this creative field. This is a read-only, auto-generated field.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeField".
                kind?: string;
                // Name of this creative field. This is a required field and must be less than 256 characters long and unique among
                // creative fields of the same advertiser.
                name?: string;
                // Subaccount ID of this creative field. This is a read-only field that can be left blank.
                subaccountId?: string;
            }
            // Creative Field Assignment.
            interface CreativeFieldAssignment {
                // ID of the creative field.
                creativeFieldId?: string;
                // ID of the creative field value.
                creativeFieldValueId?: string;
            }
            // Contains properties of a creative field value.
            interface CreativeFieldValue {
                // ID of this creative field value. This is a read-only, auto-generated field.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldValue".
                kind?: string;
                // Value of this creative field value. It needs to be less than 256 characters in length and unique per creative field.
                value?: string;
            }
            // Creative Field Value List Response
            interface CreativeFieldValuesListResponse {
                // Creative field value collection.
                creativeFieldValues?: Schema.CreativeFieldValue[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldValuesListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
            }
            // Creative Field List Response
            interface CreativeFieldsListResponse {
                // Creative field collection.
                creativeFields?: Schema.CreativeField[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldsListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
            }
            // Contains properties of a creative group.
            interface CreativeGroup {
                // Account ID of this creative group. This is a read-only field that can be left blank.
                accountId?: string;
                // Advertiser ID of this creative group. This is a required field on insertion.
                advertiserId?: string;
                // Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
                advertiserIdDimensionValue?: Schema.DimensionValue;
                // Subgroup of the creative group. Assign your creative groups to a subgroup in order to filter or manage them more easily.
                // This field is required on insertion and is read-only after insertion. Acceptable values are 1 to 2, inclusive.
                groupNumber?: Integer;
                // ID of this creative group. This is a read-only, auto-generated field.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeGroup".
                kind?: string;
                // Name of this creative group. This is a required field and must be less than 256 characters long and unique among
                // creative groups of the same advertiser.
                name?: string;
                // Subaccount ID of this creative group. This is a read-only field that can be left blank.
                subaccountId?: string;
            }
            // Creative Group Assignment.
            interface CreativeGroupAssignment {
                // ID of the creative group to be assigned.
                creativeGroupId?: string;
                // Creative group number of the creative group assignment.
                creativeGroupNumber?: string;
            }
            // Creative Group List Response
            interface CreativeGroupsListResponse {
                // Creative group collection.
                creativeGroups?: Schema.CreativeGroup[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeGroupsListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
            }
            // Creative optimization settings.
            interface CreativeOptimizationConfiguration {
                // ID of this creative optimization config. This field is auto-generated when the campaign is inserted or updated. It can
                // be null for existing campaigns.
                id?: string;
                // Name of this creative optimization config. This is a required field and must be less than 129 characters long.
                name?: string;
                // List of optimization activities associated with this configuration.
                optimizationActivitys?: Schema.OptimizationActivity[];
                // Optimization model for this configuration.
                optimizationModel?: string;
            }
            // Creative Rotation.
            interface CreativeRotation {
                // Creative assignments in this creative rotation.
                creativeAssignments?: Schema.CreativeAssignment[];
                // Creative optimization configuration that is used by this ad. It should refer to one of the existing optimization
                // configurations in the ad's campaign. If it is unset or set to 0, then the campaign's default optimization configuration
                // will be used for this ad.
                creativeOptimizationConfigurationId?: string;
                // Type of creative rotation. Can be used to specify whether to use sequential or random rotation.
                type?: string;
                // Strategy for calculating weights. Used with CREATIVE_ROTATION_TYPE_RANDOM.
                weightCalculationStrategy?: string;
            }
            // Creative List Response
            interface CreativesListResponse {
                // Creative collection.
                creatives?: Schema.Creative[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativesListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
            }
            // Represents fields that are compatible to be selected for a report of type "CROSS_DIMENSION_REACH".
            interface CrossDimensionReachReportCompatibleFields {
                // Dimensions which are compatible to be selected in the "breakdown" section of the report.
                breakdown?: Schema.Dimension[];
                // Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.
                dimensionFilters?: Schema.Dimension[];
                // The kind of resource this is, in this case dfareporting#crossDimensionReachReportCompatibleFields.
                kind?: string;
                // Metrics which are compatible to be selected in the "metricNames" section of the report.
                metrics?: Schema.Metric[];
                // Metrics which are compatible to be selected in the "overlapMetricNames" section of the report.
                overlapMetrics?: Schema.Metric[];
            }
            // Experimental feature (no support provided) A custom event represents a third party impression, a third party click, an
            // annotation on a first party impression, or an annotation on a first party click.
            interface CustomEvent {
                // Annotate a click event. This field is mutually exclusive with insertEvent and annotateImpressionEvent. This or
                // insertEvent and annotateImpressionEvent is a required field.
                annotateClickEvent?: Schema.CustomEventClickAnnotation;
                // Annotate an impression. This field is mutually exclusive with insertEvent and annotateClickEvent. This or insertEvent
                // and annotateClickEvent is a required field.
                annotateImpressionEvent?: Schema.CustomEventImpressionAnnotation;
                // Custom variables associated with the event.
                customVariables?: Schema.CustomVariable[];
                // The type of event. If INSERT, the fields in insertEvent need to be populated. If ANNOTATE, the fields in either
                // annotateClickEvent or annotateImpressionEvent need to be populated.
                eventType?: string;
                // Floodlight configuration ID of the advertiser the event is linked to. This is a required field.
                floodlightConfigurationId?: string;
                // Insert custom event. This field is mutually exclusive with annotateClickEvent and annotateImpressionEvent. This or
                // annotateClickEvent and annotateImpressionEvent is a required field.
                insertEvent?: Schema.CustomEventInsert;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEvent".
                kind?: string;
                // The ordinal of this custom event. This is a required field.
                ordinal?: string;
                // The timestamp of this custom event, in Unix epoch micros. This is a required field.
                timestampMicros?: string;
            }
            // Annotate a click event.
            interface CustomEventClickAnnotation {
                // The Google click ID. Use this field to annotate the click associated with the gclid.
                gclid?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventClickAnnotation".
                kind?: string;
            }
            // The error code and description for a custom event that failed to insert.
            interface CustomEventError {
                // The error code.
                code?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventError".
                kind?: string;
                // A description of the error.
                message?: string;
            }
            // Annotate an impression.
            interface CustomEventImpressionAnnotation {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventImpressionAnnotation".
                kind?: string;
                // The path impression ID. Use this field to annotate the impression associated with the pathImpressionId.
                pathImpressionId?: string;
            }
            // Custom event to be inserted.
            interface CustomEventInsert {
                // Campaign Manager dimensions associated with the event.
                cmDimensions?: Schema.CampaignManagerIds;
                // DV360 dimensions associated with the event.
                dv3Dimensions?: Schema.DV3Ids;
                // The type of event to insert.
                insertEventType?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventInsert".
                kind?: string;
                // The match ID field. A match ID is your own first-party identifier that has been synced with Google using the match ID
                // feature in Floodlight. This field is mutually exclusive with mobileDeviceId, and at least one of the two fields is
                // required.
                matchId?: string;
                // The mobile device ID. This field is mutually exclusive with matchId, and at least one of the two fields is required.
                mobileDeviceId?: string;
            }
            // The original custom event that was inserted and whether there were any errors.
            interface CustomEventStatus {
                // The original custom event that was inserted.
                customEvent?: Schema.CustomEvent;
                // A list of errors related to this custom event.
                errors?: Schema.CustomEventError[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventStatus".
                kind?: string;
            }
            // Insert Custom Events Request.
            interface CustomEventsBatchInsertRequest {
                // The set of custom events to insert.
                customEvents?: Schema.CustomEvent[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventsBatchInsertRequest".
                kind?: string;
            }
            // Insert Custom Events Response.
            interface CustomEventsBatchInsertResponse {
                // Indicates that some or all custom events failed to insert.
                hasFailures?: boolean;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventsBatchInsertResponse".
                kind?: string;
                // The insert status of each custom event. Statuses are returned in the same order that conversions are inserted.
                status?: Schema.CustomEventStatus[];
            }
            // A custom floodlight variable.
            interface CustomFloodlightVariable {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#customFloodlightVariable".
                kind?: string;
                // The type of custom floodlight variable to supply a value for. These map to the "u[1-20]=" in the tags.
                type?: string;
                // The value of the custom floodlight variable. The length of string must not exceed 50 characters.
                value?: string;
            }
            // Represents a Custom Rich Media Events group.
            interface CustomRichMediaEvents {
                // List of custom rich media event IDs. Dimension values must be all of type dfa:richMediaEventTypeIdAndName.
                filteredEventIds?: Schema.DimensionValue[];
                // The kind of resource this is, in this case dfareporting#customRichMediaEvents.
                kind?: string;
            }
            // Custom variable.
            interface CustomVariable {
                // The index of the custom variable.
                index?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#customVariable".
                kind?: string;
                // The value of the custom variable. The length of string must not exceed 50 characters.
                value?: string;
            }
            // Custom Viewability Metric
            interface CustomViewabilityMetric {
                // Configuration of the custom viewability metric.
                configuration?: Schema.CustomViewabilityMetricConfiguration;
                // ID of the custom viewability metric.
                id?: string;
                // Name of the custom viewability metric.
                name?: string;
            }
            // The attributes, like playtime and percent onscreen, that define the Custom Viewability Metric.
            interface CustomViewabilityMetricConfiguration {
                // Whether the video must be audible to count an impression.
                audible?: boolean;
                // The time in milliseconds the video must play for the Custom Viewability Metric to count an impression. If both this and
                // timePercent are specified, the earlier of the two will be used.
                timeMillis?: Integer;
                // The percentage of video that must play for the Custom Viewability Metric to count an impression. If both this and
                // timeMillis are specified, the earlier of the two will be used.
                timePercent?: Integer;
                // The percentage of video that must be on screen for the Custom Viewability Metric to count an impression.
                viewabilityPercent?: Integer;
            }
            // DV360 IDs related to the custom event.
            interface DV3Ids {
                // Campaign ID for DV360.
                dvCampaignId?: string;
                // Creative ID for DV360.
                dvCreativeId?: string;
                // Insertion Order ID for DV360.
                dvInsertionOrderId?: string;
                // Line Item ID for DV360.
                dvLineItemId?: string;
                // Site ID for DV360.
                dvSiteId?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#dV3Ids".
                kind?: string;
            }
            // Represents a date range.
            interface DateRange {
                endDate?: string;
                // The kind of resource this is, in this case dfareporting#dateRange.
                kind?: string;
                // The date range relative to the date of when the report is run.
                relativeDateRange?: string;
                startDate?: string;
            }
            // Day Part Targeting.
            interface DayPartTargeting {
                // Days of the week when the ad will serve. Acceptable values are: - "SUNDAY" - "MONDAY" - "TUESDAY" - "WEDNESDAY" -
                // "THURSDAY" - "FRIDAY" - "SATURDAY"
                daysOfWeek?: string[];
                // Hours of the day when the ad will serve, where 0 is midnight to 1 AM and 23 is 11 PM to midnight. Can be specified with
                // days of week, in which case the ad would serve during these hours on the specified days. For example if Monday,
                // Wednesday, Friday are the days of week specified and 9-10am, 3-5pm (hours 9, 15, and 16) is specified, the ad would
                // serve Monday, Wednesdays, and Fridays at 9-10am and 3-5pm. Acceptable values are 0 to 23, inclusive.
                hoursOfDay?: Integer[];
                // Whether or not to use the user's local time. If false, the America/New York time zone applies.
                userLocalTime?: boolean;
            }
            // Contains information about a landing page deep link.
            interface DeepLink {
                // The URL of the mobile app being linked to.
                appUrl?: string;
                // The fallback URL. This URL will be served to users who do not have the mobile app installed.
                fallbackUrl?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#deepLink".
                kind?: string;
                // The mobile app targeted by this deep link.
                mobileApp?: Schema.MobileApp;
                // Ads served to users on these remarketing lists will use this deep link. Applicable when mobileApp.directory is
                // APPLE_APP_STORE.
                remarketingListIds?: string[];
            }
            // Properties of inheriting and overriding the default click-through event tag. A campaign may override the event tag
            // defined at the advertiser level, and an ad may also override the campaign's setting further.
            interface DefaultClickThroughEventTagProperties {
                // ID of the click-through event tag to apply to all ads in this entity's scope.
                defaultClickThroughEventTagId?: string;
                // Whether this entity should override the inherited default click-through event tag with its own defined value.
                overrideInheritedEventTag?: boolean;
            }
            // Delivery Schedule.
            interface DeliverySchedule {
                // Limit on the number of times an individual user can be served the ad within a specified period of time.
                frequencyCap?: Schema.FrequencyCap;
                // Whether or not hard cutoff is enabled. If true, the ad will not serve after the end date and time. Otherwise the ad will
                // continue to be served until it has reached its delivery goals.
                hardCutoff?: boolean;
                // Impression ratio for this ad. This ratio determines how often each ad is served relative to the others. For example, if
                // ad A has an impression ratio of 1 and ad B has an impression ratio of 3, then Campaign Manager will serve ad B three
                // times as often as ad A. Acceptable values are 1 to 10, inclusive.
                impressionRatio?: string;
                // Serving priority of an ad, with respect to other ads. The lower the priority number, the greater the priority with which
                // it is served.
                priority?: string;
            }
            // Google Ad Manager Settings
            interface DfpSettings {
                // Ad Manager network code for this directory site.
                dfpNetworkCode?: string;
                // Ad Manager network name for this directory site.
                dfpNetworkName?: string;
                // Whether this directory site accepts programmatic placements.
                programmaticPlacementAccepted?: boolean;
                // Whether this directory site accepts publisher-paid tags.
                pubPaidPlacementAccepted?: boolean;
                // Whether this directory site is available only via Publisher Portal.
                publisherPortalOnly?: boolean;
            }
            // Represents a dimension.
            interface Dimension {
                // The kind of resource this is, in this case dfareporting#dimension.
                kind?: string;
                // The dimension name, e.g. dfa:advertiser
                name?: string;
            }
            // Represents a dimension filter.
            interface DimensionFilter {
                // The name of the dimension to filter.
                dimensionName?: string;
                // The kind of resource this is, in this case dfareporting#dimensionFilter.
                kind?: string;
                // The value of the dimension to filter.
                value?: string;
            }
            // Represents a DimensionValue resource.
            interface DimensionValue {
                // The name of the dimension.
                dimensionName?: string;
                // The eTag of this response for caching purposes.
                etag?: string;
                // The ID associated with the value if available.
                id?: string;
                // The kind of resource this is, in this case dfareporting#dimensionValue.
                kind?: string;
                // Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to
                // WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with
                // a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT.
                matchType?: string;
                // The value of the dimension.
                value?: string;
            }
            // Represents the list of DimensionValue resources.
            interface DimensionValueList {
                // The eTag of this response for caching purposes.
                etag?: string;
                // The dimension values returned in this response.
                items?: Schema.DimensionValue[];
                // The kind of list this is, in this case dfareporting#dimensionValueList.
                kind?: string;
                // Continuation token used to page through dimension values. To retrieve the next page of results, set the next request's
                // "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be
                // persisted.
                nextPageToken?: string;
            }
            // Represents a DimensionValuesRequest.
            interface DimensionValueRequest {
                // The name of the dimension for which values should be requested.
                dimensionName?: string;
                endDate?: string;
                // The list of filters by which to filter values. The filters are ANDed.
                filters?: Schema.DimensionFilter[];
                // The kind of request this is, in this case dfareporting#dimensionValueRequest .
                kind?: string;
                startDate?: string;
            }
            // DirectorySites contains properties of a website from the Site Directory. Sites need to be added to an account via the
            // Sites resource before they can be assigned to a placement.
            interface DirectorySite {
                // ID of this directory site. This is a read-only, auto-generated field.
                id?: string;
                // Dimension value for the ID of this directory site. This is a read-only, auto-generated field.
                idDimensionValue?: Schema.DimensionValue;
                // Tag types for regular placements. Acceptable values are: - "STANDARD" - "IFRAME_JAVASCRIPT_INPAGE" -
                // "INTERNAL_REDIRECT_INPAGE" - "JAVASCRIPT_INPAGE"
                inpageTagFormats?: string[];
                // Tag types for interstitial placements. Acceptable values are: - "IFRAME_JAVASCRIPT_INTERSTITIAL" -
                // "INTERNAL_REDIRECT_INTERSTITIAL" - "JAVASCRIPT_INTERSTITIAL"
                interstitialTagFormats?: string[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySite".
                kind?: string;
                // Name of this directory site.
                name?: string;
                // Directory site settings.
                settings?: Schema.DirectorySiteSettings;
                // URL of this directory site.
                url?: string;
            }
            // Directory Site Settings
            interface DirectorySiteSettings {
                // Whether this directory site has disabled active view creatives.
                activeViewOptOut?: boolean;
                // Directory site Ad Manager settings.
                dfpSettings?: Schema.DfpSettings;
                // Whether this site accepts in-stream video ads.
                instreamVideoPlacementAccepted?: boolean;
                // Whether this site accepts interstitial ads.
                interstitialPlacementAccepted?: boolean;
            }
            // Directory Site List Response
            interface DirectorySitesListResponse {
                // Directory site collection.
                directorySites?: Schema.DirectorySite[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySitesListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
            }
            // Represents a Disjunctive Match Statement resource, which is a conjunction (and) of disjunctive (or) boolean statements.
            interface DisjunctiveMatchStatement {
                // The event filters contained within this disjunctive match statement.
                eventFilters?: Schema.EventFilter[];
                // The kind of resource this is, in this case dfareporting#disjunctiveMatchStatement.
                kind?: string;
            }
            // Contains properties of a dynamic targeting key. Dynamic targeting keys are unique, user-friendly labels, created at the
            // advertiser level in DCM, that can be assigned to ads, creatives, and placements and used for targeting with Studio
            // dynamic creatives. Use these labels instead of numeric Campaign Manager IDs (such as placement IDs) to save time and
            // avoid errors in your dynamic feeds.
            interface DynamicTargetingKey {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#dynamicTargetingKey".
                kind?: string;
                // Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain
                // commas. All characters are converted to lowercase.
                name?: string;
                // ID of the object of this dynamic targeting key. This is a required field.
                objectId?: string;
                // Type of the object of this dynamic targeting key. This is a required field.
                objectType?: string;
            }
            // Dynamic Targeting Key List Response
            interface DynamicTargetingKeysListResponse {
                // Dynamic targeting key collection.
                dynamicTargetingKeys?: Schema.DynamicTargetingKey[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#dynamicTargetingKeysListResponse".
                kind?: string;
            }
            // A description of how user IDs are encrypted.
            interface EncryptionInfo {
                // The encryption entity ID. This should match the encryption configuration for ad serving or Data Transfer.
                encryptionEntityId?: string;
                // The encryption entity type. This should match the encryption configuration for ad serving or Data Transfer.
                encryptionEntityType?: string;
                // Describes whether the encrypted cookie was received from ad serving (the %m macro) or from Data Transfer.
                encryptionSource?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#encryptionInfo".
                kind?: string;
            }
            // Represents a DfaReporting event filter.
            interface EventFilter {
                // The dimension filter contained within this EventFilter.
                dimensionFilter?: Schema.PathReportDimensionValue;
                // The kind of resource this is, in this case dfareporting#eventFilter.
                kind?: string;
            }
            // Contains properties of an event tag.
            interface EventTag {
                // Account ID of this event tag. This is a read-only field that can be left blank.
                accountId?: string;
                // Advertiser ID of this event tag. This field or the campaignId field is required on insertion.
                advertiserId?: string;
                // Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
                advertiserIdDimensionValue?: Schema.DimensionValue;
                // Campaign ID of this event tag. This field or the advertiserId field is required on insertion.
                campaignId?: string;
                // Dimension value for the ID of the campaign. This is a read-only, auto-generated field.
                campaignIdDimensionValue?: Schema.DimensionValue;
                // Whether this event tag should be automatically enabled for all of the advertiser's campaigns and ads.
                enabledByDefault?: boolean;
                // Whether to remove this event tag from ads that are trafficked through Display & Video 360 to Ad Exchange. This may be
                // useful if the event tag uses a pixel that is unapproved for Ad Exchange bids on one or more networks, such as the Google
                // Display Network.
                excludeFromAdxRequests?: boolean;
                // ID of this event tag. This is a read-only, auto-generated field.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#eventTag".
                kind?: string;
                // Name of this event tag. This is a required field and must be less than 256 characters long.
                name?: string;
                // Site filter type for this event tag. If no type is specified then the event tag will be applied to all sites.
                siteFilterType?: string;
                // Filter list of site IDs associated with this event tag. The siteFilterType determines whether this is a allowlist or
                // blocklist filter.
                siteIds?: string[];
                // Whether this tag is SSL-compliant or not. This is a read-only field.
                sslCompliant?: boolean;
                // Status of this event tag. Must be ENABLED for this event tag to fire. This is a required field.
                status?: string;
                // Subaccount ID of this event tag. This is a read-only field that can be left blank.
                subaccountId?: string;
                // Event tag type. Can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a
                // third-party click-through URL for either impression or click tracking. This is a required field.
                type?: string;
                // Payload URL for this event tag. The URL on a click-through event tag should have a landing page URL appended to the end
                // of it. This field is required on insertion.
                url?: string;
                // Number of times the landing page URL should be URL-escaped before being appended to the click-through event tag URL.
                // Only applies to click-through event tags as specified by the event tag type.
                urlEscapeLevels?: Integer;
            }
            // Event tag override information.
            interface EventTagOverride {
                // Whether this override is enabled.
                enabled?: boolean;
                // ID of this event tag override. This is a read-only, auto-generated field.
                id?: string;
            }
            // Event Tag List Response
            interface EventTagsListResponse {
                // Event tag collection.
                eventTags?: Schema.EventTag[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#eventTagsListResponse".
                kind?: string;
            }
            // Represents a File resource. A file contains the metadata for a report run. It shows the status of the run and holds the
            // URLs to the generated report data if the run is finished and the status is "REPORT_AVAILABLE".
            interface File {
                // The date range for which the file has report data. The date range will always be the absolute date range for which the
                // report is run.
                dateRange?: Schema.DateRange;
                // Etag of this resource.
                etag?: string;
                // The filename of the file.
                fileName?: string;
                // The output format of the report. Only available once the file is available.
                format?: string;
                // The unique ID of this report file.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#file".
                kind?: string;
                // The timestamp in milliseconds since epoch when this file was last modified.
                lastModifiedTime?: string;
                // The ID of the report this file was generated from.
                reportId?: string;
                // The status of the report file.
                status?: string;
                // The URLs where the completed report file can be downloaded.
                urls?: Schema.FileUrls;
            }
            // List of files for a report.
            interface FileList {
                // Etag of this resource.
                etag?: string;
                // The files returned in this response.
                items?: Schema.File[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#fileList".
                kind?: string;
                // Continuation token used to page through files. To retrieve the next page of results, set the next request's "pageToken"
                // to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.
                nextPageToken?: string;
            }
            // The URLs where the completed report file can be downloaded.
            interface FileUrls {
                // The URL for downloading the report data through the API.
                apiUrl?: string;
                // The URL for downloading the report data through a browser.
                browserUrl?: string;
            }
            // Flight
            interface Flight {
                endDate?: string;
                // Rate or cost of this flight.
                rateOrCost?: string;
                startDate?: string;
                // Units of this flight.
                units?: string;
            }
            // Floodlight Activity GenerateTag Response
            interface FloodlightActivitiesGenerateTagResponse {
                // Generated tag for this Floodlight activity. For global site tags, this is the event snippet.
                floodlightActivityTag?: string;
                // The global snippet section of a global site tag. The global site tag sets new cookies on your domain, which will store a
                // unique identifier for a user or the ad click that brought the user to your site. Learn more.
                globalSiteTagGlobalSnippet?: string;
                // Identifies what kind of resource this is. Value: the fixed string
                // "dfareporting#floodlightActivitiesGenerateTagResponse".
                kind?: string;
            }
            // Floodlight Activity List Response
            interface FloodlightActivitiesListResponse {
                // Floodlight activity collection.
                floodlightActivities?: Schema.FloodlightActivity[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivitiesListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
            }
            // Contains properties of a Floodlight activity.
            interface FloodlightActivity {
                // Account ID of this floodlight activity. This is a read-only field that can be left blank.
                accountId?: string;
                // Advertiser ID of this floodlight activity. If this field is left blank, the value will be copied over either from the
                // activity group's advertiser or the existing activity's advertiser.
                advertiserId?: string;
                // Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
                advertiserIdDimensionValue?: Schema.DimensionValue;
                // Whether the activity is enabled for attribution.
                attributionEnabled?: boolean;
                // Code type used for cache busting in the generated tag. Applicable only when floodlightActivityGroupType is COUNTER and
                // countingMethod is STANDARD_COUNTING or UNIQUE_COUNTING.
                cacheBustingType?: string;
                // Counting method for conversions for this floodlight activity. This is a required field.
                countingMethod?: string;
                // Dynamic floodlight tags.
                defaultTags?: Schema.FloodlightActivityDynamicTag[];
                // URL where this tag will be deployed. If specified, must be less than 256 characters long.
                expectedUrl?: string;
                // Floodlight activity group ID of this floodlight activity. This is a required field.
                floodlightActivityGroupId?: string;
                // Name of the associated floodlight activity group. This is a read-only field.
                floodlightActivityGroupName?: string;
                // Tag string of the associated floodlight activity group. This is a read-only field.
                floodlightActivityGroupTagString?: string;
                // Type of the associated floodlight activity group. This is a read-only field.
                floodlightActivityGroupType?: string;
                // Floodlight configuration ID of this floodlight activity. If this field is left blank, the value will be copied over
                // either from the activity group's floodlight configuration or from the existing activity's floodlight configuration.
                floodlightConfigurationId?: string;
                // Dimension value for the ID of the floodlight configuration. This is a read-only, auto-generated field.
                floodlightConfigurationIdDimensionValue?: Schema.DimensionValue;
                // The type of Floodlight tag this activity will generate. This is a required field.
                floodlightTagType?: string;
                // ID of this floodlight activity. This is a read-only, auto-generated field.
                id?: string;
                // Dimension value for the ID of this floodlight activity. This is a read-only, auto-generated field.
                idDimensionValue?: Schema.DimensionValue;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivity".
                kind?: string;
                // Name of this floodlight activity. This is a required field. Must be less than 129 characters long and cannot contain
                // quotes.
                name?: string;
                // General notes or implementation instructions for the tag.
                notes?: string;
                // Publisher dynamic floodlight tags.
                publisherTags?: Schema.FloodlightActivityPublisherDynamicTag[];
                // Whether this tag should use SSL.
                secure?: boolean;
                // Whether the floodlight activity is SSL-compliant. This is a read-only field, its value detected by the system from the
                // floodlight tags.
                sslCompliant?: boolean;
                // Whether this floodlight activity must be SSL-compliant.
                sslRequired?: boolean;
                // The status of the activity. This can only be set to ACTIVE or ARCHIVED_AND_DISABLED. The ARCHIVED status is no longer
                // supported and cannot be set for Floodlight activities. The DISABLED_POLICY status indicates that a Floodlight activity
                // is violating Google policy. Contact your account manager for more information.
                status?: string;
                // Subaccount ID of this floodlight activity. This is a read-only field that can be left blank.
                subaccountId?: string;
                // Tag format type for the floodlight activity. If left blank, the tag format will default to HTML.
                tagFormat?: string;
                // Value of the cat= parameter in the floodlight tag, which the ad servers use to identify the activity. This is optional:
                // if empty, a new tag string will be generated for you. This string must be 1 to 8 characters long, with valid characters
                // being a-z0-9[ _ ]. This tag string must also be unique among activities of the same activity group. This field is
                // read-only after insertion.
                tagString?: string;
                // List of the user-defined variables used by this conversion tag. These map to the "u[1-100]=" in the tags. Each of these
                // can have a user defined type. Acceptable values are U1 to U100, inclusive.
                userDefinedVariableTypes?: string[];
            }
            // Dynamic Tag
            interface FloodlightActivityDynamicTag {
                // ID of this dynamic tag. This is a read-only, auto-generated field.
                id?: string;
                // Name of this tag.
                name?: string;
                // Tag code.
                tag?: string;
            }
            // Contains properties of a Floodlight activity group.
            interface FloodlightActivityGroup {
                // Account ID of this floodlight activity group. This is a read-only field that can be left blank.
                accountId?: string;
                // Advertiser ID of this floodlight activity group. If this field is left blank, the value will be copied over either from
                // the floodlight configuration's advertiser or from the existing activity group's advertiser.
                advertiserId?: string;
                // Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
                advertiserIdDimensionValue?: Schema.DimensionValue;
                // Floodlight configuration ID of this floodlight activity group. This is a required field.
                floodlightConfigurationId?: string;
                // Dimension value for the ID of the floodlight configuration. This is a read-only, auto-generated field.
                floodlightConfigurationIdDimensionValue?: Schema.DimensionValue;
                // ID of this floodlight activity group. This is a read-only, auto-generated field.
                id?: string;
                // Dimension value for the ID of this floodlight activity group. This is a read-only, auto-generated field.
                idDimensionValue?: Schema.DimensionValue;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivityGroup".
                kind?: string;
                // Name of this floodlight activity group. This is a required field. Must be less than 65 characters long and cannot
                // contain quotes.
                name?: string;
                // Subaccount ID of this floodlight activity group. This is a read-only field that can be left blank.
                subaccountId?: string;
                // Value of the type= parameter in the floodlight tag, which the ad servers use to identify the activity group that the
                // activity belongs to. This is optional: if empty, a new tag string will be generated for you. This string must be 1 to 8
                // characters long, with valid characters being a-z0-9[ _ ]. This tag string must also be unique among activity groups of
                // the same floodlight configuration. This field is read-only after insertion.
                tagString?: string;
                // Type of the floodlight activity group. This is a required field that is read-only after insertion.
                type?: string;
            }
            // Floodlight Activity Group List Response
            interface FloodlightActivityGroupsListResponse {
                // Floodlight activity group collection.
                floodlightActivityGroups?: Schema.FloodlightActivityGroup[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivityGroupsListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
            }
            // Publisher Dynamic Tag
            interface FloodlightActivityPublisherDynamicTag {
                // Whether this tag is applicable only for click-throughs.
                clickThrough?: boolean;
                // Directory site ID of this dynamic tag. This is a write-only field that can be used as an alternative to the siteId
                // field. When this resource is retrieved, only the siteId field will be populated.
                directorySiteId?: string;
                // Dynamic floodlight tag.
                dynamicTag?: Schema.FloodlightActivityDynamicTag;
                // Site ID of this dynamic tag.
                siteId?: string;
                // Dimension value for the ID of the site. This is a read-only, auto-generated field.
                siteIdDimensionValue?: Schema.DimensionValue;
                // Whether this tag is applicable only for view-throughs.
                viewThrough?: boolean;
            }
            // Contains properties of a Floodlight configuration.
            interface FloodlightConfiguration {
                // Account ID of this floodlight configuration. This is a read-only field that can be left blank.
                accountId?: string;
                // Advertiser ID of the parent advertiser of this floodlight configuration.
                advertiserId?: string;
                // Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
                advertiserIdDimensionValue?: Schema.DimensionValue;
                // Whether advertiser data is shared with Google Analytics.
                analyticsDataSharingEnabled?: boolean;
                // Custom Viewability metric for the floodlight configuration.
                customViewabilityMetric?: Schema.CustomViewabilityMetric;
                // Whether the exposure-to-conversion report is enabled. This report shows detailed pathway information on up to 10 of the
                // most recent ad exposures seen by a user before converting.
                exposureToConversionEnabled?: boolean;
                // Day that will be counted as the first day of the week in reports. This is a required field.
                firstDayOfWeek?: string;
                // ID of this floodlight configuration. This is a read-only, auto-generated field.
                id?: string;
                // Dimension value for the ID of this floodlight configuration. This is a read-only, auto-generated field.
                idDimensionValue?: Schema.DimensionValue;
                // Whether in-app attribution tracking is enabled.
                inAppAttributionTrackingEnabled?: boolean;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightConfiguration".
                kind?: string;
                // Lookback window settings for this floodlight configuration.
                lookbackConfiguration?: Schema.LookbackConfiguration;
                // Types of attribution options for natural search conversions.
                naturalSearchConversionAttributionOption?: string;
                // Settings for Campaign Manager Omniture integration.
                omnitureSettings?: Schema.OmnitureSettings;
                // Subaccount ID of this floodlight configuration. This is a read-only field that can be left blank.
                subaccountId?: string;
                // Configuration settings for dynamic and image floodlight tags.
                tagSettings?: Schema.TagSettings;
                // List of third-party authentication tokens enabled for this configuration.
                thirdPartyAuthenticationTokens?: Schema.ThirdPartyAuthenticationToken[];
                // List of user defined variables enabled for this configuration.
                userDefinedVariableConfigurations?: Schema.UserDefinedVariableConfiguration[];
            }
            // Floodlight Configuration List Response
            interface FloodlightConfigurationsListResponse {
                // Floodlight configuration collection.
                floodlightConfigurations?: Schema.FloodlightConfiguration[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightConfigurationsListResponse".
                kind?: string;
            }
            // Represents fields that are compatible to be selected for a report of type "FlOODLIGHT".
            interface FloodlightReportCompatibleFields {
                // Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.
                dimensionFilters?: Schema.Dimension[];
                // Dimensions which are compatible to be selected in the "dimensions" section of the report.
                dimensions?: Schema.Dimension[];
                // The kind of resource this is, in this case dfareporting#floodlightReportCompatibleFields.
                kind?: string;
                // Metrics which are compatible to be selected in the "metricNames" section of the report.
                metrics?: Schema.Metric[];
            }
            // Frequency Cap.
            interface FrequencyCap {
                // Duration of time, in seconds, for this frequency cap. The maximum duration is 90 days. Acceptable values are 1 to
                // 7776000, inclusive.
                duration?: string;
                // Number of times an individual user can be served the ad within the specified duration. Acceptable values are 1 to 15,
                // inclusive.
                impressions?: string;
            }
            // FsCommand.
            interface FsCommand {
                // Distance from the left of the browser.Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER.
                left?: Integer;
                // Position in the browser where the window will open.
                positionOption?: string;
                // Distance from the top of the browser. Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER.
                top?: Integer;
                // Height of the window.
                windowHeight?: Integer;
                // Width of the window.
                windowWidth?: Integer;
            }
            // Geographical Targeting.
            interface GeoTargeting {
                // Cities to be targeted. For each city only dartId is required. The other fields are populated automatically when the ad
                // is inserted or updated. If targeting a city, do not target or exclude the country of the city, and do not target the
                // metro or region of the city.
                cities?: Schema.City[];
                // Countries to be targeted or excluded from targeting, depending on the setting of the excludeCountries field. For each
                // country only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If
                // targeting or excluding a country, do not target regions, cities, metros, or postal codes in the same country.
                countries?: Schema.Country[];
                // Whether or not to exclude the countries in the countries field from targeting. If false, the countries field refers to
                // countries which will be targeted by the ad.
                excludeCountries?: boolean;
                // Metros to be targeted. For each metro only dmaId is required. The other fields are populated automatically when the ad
                // is inserted or updated. If targeting a metro, do not target or exclude the country of the metro.
                metros?: Schema.Metro[];
                // Postal codes to be targeted. For each postal code only id is required. The other fields are populated automatically when
                // the ad is inserted or updated. If targeting a postal code, do not target or exclude the country of the postal code.
                postalCodes?: Schema.PostalCode[];
                // Regions to be targeted. For each region only dartId is required. The other fields are populated automatically when the
                // ad is inserted or updated. If targeting a region, do not target or exclude the country of the region.
                regions?: Schema.Region[];
            }
            // Represents a buy from the Planning inventory store.
            interface InventoryItem {
                // Account ID of this inventory item.
                accountId?: string;
                // Ad slots of this inventory item. If this inventory item represents a standalone placement, there will be exactly one ad
                // slot. If this inventory item represents a placement group, there will be more than one ad slot, each representing one
                // child placement in that placement group.
                adSlots?: Schema.AdSlot[];
                // Advertiser ID of this inventory item.
                advertiserId?: string;
                // Content category ID of this inventory item.
                contentCategoryId?: string;
                // Estimated click-through rate of this inventory item.
                estimatedClickThroughRate?: string;
                // Estimated conversion rate of this inventory item.
                estimatedConversionRate?: string;
                // ID of this inventory item.
                id?: string;
                // Whether this inventory item is in plan.
                inPlan?: boolean;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#inventoryItem".
                kind?: string;
                // Information about the most recent modification of this inventory item.
                lastModifiedInfo?: Schema.LastModifiedInfo;
                // Name of this inventory item. For standalone inventory items, this is the same name as that of its only ad slot. For
                // group inventory items, this can differ from the name of any of its ad slots.
                name?: string;
                // Negotiation channel ID of this inventory item.
                negotiationChannelId?: string;
                // Order ID of this inventory item.
                orderId?: string;
                // Placement strategy ID of this inventory item.
                placementStrategyId?: string;
                // Pricing of this inventory item.
                pricing?: Schema.Pricing;
                // Project ID of this inventory item.
                projectId?: string;
                // RFP ID of this inventory item.
                rfpId?: string;
                // ID of the site this inventory item is associated with.
                siteId?: string;
                // Subaccount ID of this inventory item.
                subaccountId?: string;
                // Type of inventory item.
                type?: string;
            }
            // Inventory item List Response
            interface InventoryItemsListResponse {
                // Inventory item collection
                inventoryItems?: Schema.InventoryItem[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#inventoryItemsListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
            }
            // Key Value Targeting Expression.
            interface KeyValueTargetingExpression {
                // Keyword expression being targeted by the ad.
                expression?: string;
            }
            // Contains information about where a user's browser is taken after the user clicks an ad.
            interface LandingPage {
                // Advertiser ID of this landing page. This is a required field.
                advertiserId?: string;
                // Whether this landing page has been archived.
                archived?: boolean;
                // Links that will direct the user to a mobile app, if installed.
                deepLinks?: Schema.DeepLink[];
                // ID of this landing page. This is a read-only, auto-generated field.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#landingPage".
                kind?: string;
                // Name of this landing page. This is a required field. It must be less than 256 characters long.
                name?: string;
                // URL of this landing page. This is a required field.
                url?: string;
            }
            // Contains information about a language that can be targeted by ads.
            interface Language {
                // Language ID of this language. This is the ID used for targeting and generating reports.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#language".
                kind?: string;
                // Format of language code is an ISO 639 two-letter language code optionally followed by an underscore followed by an ISO
                // 3166 code. Examples are "en" for English or "zh_CN" for Simplified Chinese.
                languageCode?: string;
                // Name of this language.
                name?: string;
            }
            // Language Targeting.
            interface LanguageTargeting {
                // Languages that this ad targets. For each language only languageId is required. The other fields are populated
                // automatically when the ad is inserted or updated.
                languages?: Schema.Language[];
            }
            // Language List Response
            interface LanguagesListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#languagesListResponse".
                kind?: string;
                // Language collection.
                languages?: Schema.Language[];
            }
            // Modification timestamp.
            interface LastModifiedInfo {
                // Timestamp of the last change in milliseconds since epoch.
                time?: string;
            }
            // A group clause made up of list population terms representing constraints joined by ORs.
            interface ListPopulationClause {
                // Terms of this list population clause. Each clause is made up of list population terms representing constraints and are
                // joined by ORs.
                terms?: Schema.ListPopulationTerm[];
            }
            // Remarketing List Population Rule.
            interface ListPopulationRule {
                // Floodlight activity ID associated with this rule. This field can be left blank.
                floodlightActivityId?: string;
                // Name of floodlight activity associated with this rule. This is a read-only, auto-generated field.
                floodlightActivityName?: string;
                // Clauses that make up this list population rule. Clauses are joined by ANDs, and the clauses themselves are made up of
                // list population terms which are joined by ORs.
                listPopulationClauses?: Schema.ListPopulationClause[];
            }
            // Remarketing List Population Rule Term.
            interface ListPopulationTerm {
                // Will be true if the term should check if the user is in the list and false if the term should check if the user is not
                // in the list. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM. False by default.
                contains?: boolean;
                // Whether to negate the comparison result of this term during rule evaluation. This field is only relevant when type is
                // left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM.
                negation?: boolean;
                // Comparison operator of this term. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or
                // REFERRER_TERM.
                operator?: string;
                // ID of the list in question. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM.
                remarketingListId?: string;
                // List population term type determines the applicable fields in this object. If left unset or set to CUSTOM_VARIABLE_TERM,
                // then variableName, variableFriendlyName, operator, value, and negation are applicable. If set to LIST_MEMBERSHIP_TERM
                // then remarketingListId and contains are applicable. If set to REFERRER_TERM then operator, value, and negation are
                // applicable.
                type?: string;
                // Literal to compare the variable to. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM
                // or REFERRER_TERM.
                value?: string;
                // Friendly name of this term's variable. This is a read-only, auto-generated field. This field is only relevant when type
                // is left unset or set to CUSTOM_VARIABLE_TERM.
                variableFriendlyName?: string;
                // Name of the variable (U1, U2, etc.) being compared in this term. This field is only relevant when type is set to null,
                // CUSTOM_VARIABLE_TERM or REFERRER_TERM.
                variableName?: string;
            }
            // Remarketing List Targeting Expression.
            interface ListTargetingExpression {
                // Expression describing which lists are being targeted by the ad.
                expression?: string;
            }
            // Lookback configuration settings.
            interface LookbackConfiguration {
                // Lookback window, in days, from the last time a given user clicked on one of your ads. If you enter 0, clicks will not be
                // considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your
                // account will be used. Acceptable values are 0 to 90, inclusive.
                clickDuration?: Integer;
                // Lookback window, in days, from the last time a given user viewed one of your ads. If you enter 0, impressions will not
                // be considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your
                // account will be used. Acceptable values are 0 to 90, inclusive.
                postImpressionActivitiesDuration?: Integer;
            }
            // Represents a metric.
            interface Metric {
                // The kind of resource this is, in this case dfareporting#metric.
                kind?: string;
                // The metric name, e.g. dfa:impressions
                name?: string;
            }
            // Contains information about a metro region that can be targeted by ads.
            interface Metro {
                // Country code of the country to which this metro region belongs.
                countryCode?: string;
                // DART ID of the country to which this metro region belongs.
                countryDartId?: string;
                // DART ID of this metro region.
                dartId?: string;
                // DMA ID of this metro region. This is the ID used for targeting and generating reports, and is equivalent to metro_code.
                dmaId?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#metro".
                kind?: string;
                // Metro code of this metro region. This is equivalent to dma_id.
                metroCode?: string;
                // Name of this metro region.
                name?: string;
            }
            // Metro List Response
            interface MetrosListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#metrosListResponse".
                kind?: string;
                // Metro collection.
                metros?: Schema.Metro[];
            }
            // Contains information about a mobile app. Used as a landing page deep link.
            interface MobileApp {
                // Mobile app directory.
                directory?: string;
                // ID of this mobile app.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileApp".
                kind?: string;
                // Publisher name.
                publisherName?: string;
                // Title of this mobile app.
                title?: string;
            }
            // Mobile app List Response
            interface MobileAppsListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileAppsListResponse".
                kind?: string;
                // Mobile apps collection.
                mobileApps?: Schema.MobileApp[];
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
            }
            // Contains information about a mobile carrier that can be targeted by ads.
            interface MobileCarrier {
                // Country code of the country to which this mobile carrier belongs.
                countryCode?: string;
                // DART ID of the country to which this mobile carrier belongs.
                countryDartId?: string;
                // ID of this mobile carrier.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileCarrier".
                kind?: string;
                // Name of this mobile carrier.
                name?: string;
            }
            // Mobile Carrier List Response
            interface MobileCarriersListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileCarriersListResponse".
                kind?: string;
                // Mobile carrier collection.
                mobileCarriers?: Schema.MobileCarrier[];
            }
            // Online Behavioral Advertiser icon.
            interface ObaIcon {
                // URL to redirect to when an OBA icon is clicked.
                iconClickThroughUrl?: string;
                // URL to track click when an OBA icon is clicked.
                iconClickTrackingUrl?: string;
                // URL to track view when an OBA icon is clicked.
                iconViewTrackingUrl?: string;
                // Identifies the industry initiative that the icon supports. For example, AdChoices.
                program?: string;
                // OBA icon resource URL. Campaign Manager only supports image and JavaScript icons. Learn more
                resourceUrl?: string;
                // OBA icon size.
                size?: Schema.Size;
                // OBA icon x coordinate position. Accepted values are left or right.
                xPosition?: string;
                // OBA icon y coordinate position. Accepted values are top or bottom.
                yPosition?: string;
            }
            // Object Filter.
            interface ObjectFilter {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#objectFilter".
                kind?: string;
                // Applicable when status is ASSIGNED. The user has access to objects with these object IDs.
                objectIds?: string[];
                // Status of the filter. NONE means the user has access to none of the objects. ALL means the user has access to all
                // objects. ASSIGNED means the user has access to the objects with IDs in the objectIds list.
                status?: string;
            }
            // Offset Position.
            interface OffsetPosition {
                // Offset distance from left side of an asset or a window.
                left?: Integer;
                // Offset distance from top side of an asset or a window.
                top?: Integer;
            }
            // Omniture Integration Settings.
            interface OmnitureSettings {
                // Whether placement cost data will be sent to Omniture. This property can be enabled only if omnitureIntegrationEnabled is
                // true.
                omnitureCostDataEnabled?: boolean;
                // Whether Omniture integration is enabled. This property can be enabled only when the "Advanced Ad Serving" account
                // setting is enabled.
                omnitureIntegrationEnabled?: boolean;
            }
            // Contains information about an operating system that can be targeted by ads.
            interface OperatingSystem {
                // DART ID of this operating system. This is the ID used for targeting.
                dartId?: string;
                // Whether this operating system is for desktop.
                desktop?: boolean;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystem".
                kind?: string;
                // Whether this operating system is for mobile.
                mobile?: boolean;
                // Name of this operating system.
                name?: string;
            }
            // Contains information about a particular version of an operating system that can be targeted by ads.
            interface OperatingSystemVersion {
                // ID of this operating system version.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemVersion".
                kind?: string;
                // Major version (leftmost number) of this operating system version.
                majorVersion?: string;
                // Minor version (number after the first dot) of this operating system version.
                minorVersion?: string;
                // Name of this operating system version.
                name?: string;
                // Operating system of this operating system version.
                operatingSystem?: Schema.OperatingSystem;
            }
            // Operating System Version List Response
            interface OperatingSystemVersionsListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemVersionsListResponse".
                kind?: string;
                // Operating system version collection.
                operatingSystemVersions?: Schema.OperatingSystemVersion[];
            }
            // Operating System List Response
            interface OperatingSystemsListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemsListResponse".
                kind?: string;
                // Operating system collection.
                operatingSystems?: Schema.OperatingSystem[];
            }
            // Creative optimization activity.
            interface OptimizationActivity {
                // Floodlight activity ID of this optimization activity. This is a required field.
                floodlightActivityId?: string;
                // Dimension value for the ID of the floodlight activity. This is a read-only, auto-generated field.
                floodlightActivityIdDimensionValue?: Schema.DimensionValue;
                // Weight associated with this optimization. The weight assigned will be understood in proportion to the weights assigned
                // to the other optimization activities. Value must be greater than or equal to 1.
                weight?: Integer;
            }
            // Describes properties of a Planning order.
            interface Order {
                // Account ID of this order.
                accountId?: string;
                // Advertiser ID of this order.
                advertiserId?: string;
                // IDs for users that have to approve documents created for this order.
                approverUserProfileIds?: string[];
                // Buyer invoice ID associated with this order.
                buyerInvoiceId?: string;
                // Name of the buyer organization.
                buyerOrganizationName?: string;
                // Comments in this order.
                comments?: string;
                // Contacts for this order.
                contacts?: Schema.OrderContact[];
                // ID of this order. This is a read-only, auto-generated field.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#order".
                kind?: string;
                // Information about the most recent modification of this order.
                lastModifiedInfo?: Schema.LastModifiedInfo;
                // Name of this order.
                name?: string;
                // Notes of this order.
                notes?: string;
                // ID of the terms and conditions template used in this order.
                planningTermId?: string;
                // Project ID of this order.
                projectId?: string;
                // Seller order ID associated with this order.
                sellerOrderId?: string;
                // Name of the seller organization.
                sellerOrganizationName?: string;
                // Site IDs this order is associated with.
                siteId?: string[];
                // Free-form site names this order is associated with.
                siteNames?: string[];
                // Subaccount ID of this order.
                subaccountId?: string;
                // Terms and conditions of this order.
                termsAndConditions?: string;
            }
            // Contact of an order.
            interface OrderContact {
                // Free-form information about this contact. It could be any information related to this contact in addition to type,
                // title, name, and signature user profile ID.
                contactInfo?: string;
                // Name of this contact.
                contactName?: string;
                // Title of this contact.
                contactTitle?: string;
                // Type of this contact.
                contactType?: string;
                // ID of the user profile containing the signature that will be embedded into order documents.
                signatureUserProfileId?: string;
            }
            // Contains properties of a Planning order document.
            interface OrderDocument {
                // Account ID of this order document.
                accountId?: string;
                // Advertiser ID of this order document.
                advertiserId?: string;
                // The amended order document ID of this order document. An order document can be created by optionally amending another
                // order document so that the change history can be preserved.
                amendedOrderDocumentId?: string;
                // IDs of users who have approved this order document.
                approvedByUserProfileIds?: string[];
                // Whether this order document is cancelled.
                cancelled?: boolean;
                // Information about the creation of this order document.
                createdInfo?: Schema.LastModifiedInfo;
                effectiveDate?: string;
                // ID of this order document.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#orderDocument".
                kind?: string;
                // List of email addresses that received the last sent document.
                lastSentRecipients?: string[];
                lastSentTime?: string;
                // ID of the order from which this order document is created.
                orderId?: string;
                // Project ID of this order document.
                projectId?: string;
                // Whether this order document has been signed.
                signed?: boolean;
                // Subaccount ID of this order document.
                subaccountId?: string;
                // Title of this order document.
                title?: string;
                // Type of this order document
                type?: string;
            }
            // Order document List Response
            interface OrderDocumentsListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#orderDocumentsListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
                // Order document collection
                orderDocuments?: Schema.OrderDocument[];
            }
            // Order List Response
            interface OrdersListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#ordersListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
                // Order collection.
                orders?: Schema.Order[];
            }
            // Represents a DfaReporting path filter.
            interface PathFilter {
                // Event filters in path report.
                eventFilters?: Schema.EventFilter[];
                // The kind of resource this is, in this case dfareporting#pathFilter.
                kind?: string;
                // Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to
                // WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with
                // a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT.
                pathMatchPosition?: string;
            }
            // Represents fields that are compatible to be selected for a report of type "PATH".
            interface PathReportCompatibleFields {
                // Dimensions which are compatible to be selected in the "channelGroupings" section of the report.
                channelGroupings?: Schema.Dimension[];
                // Dimensions which are compatible to be selected in the "dimensions" section of the report.
                dimensions?: Schema.Dimension[];
                // The kind of resource this is, in this case dfareporting#pathReportCompatibleFields.
                kind?: string;
                // Metrics which are compatible to be selected in the "metricNames" section of the report.
                metrics?: Schema.Metric[];
                // Dimensions which are compatible to be selected in the "pathFilters" section of the report.
                pathFilters?: Schema.Dimension[];
            }
            // Represents a PathReportDimensionValue resource.
            interface PathReportDimensionValue {
                // The name of the dimension.
                dimensionName?: string;
                // The possible ID's associated with the value if available.
                ids?: string[];
                // The kind of resource this is, in this case dfareporting#pathReportDimensionValue.
                kind?: string;
                // Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to
                // WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with
                // a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT.
                matchType?: string;
                // The possible values of the dimension.
                values?: string[];
            }
            // Represents fields that are compatible to be selected for a report of type "PATH_TO_CONVERSION".
            interface PathToConversionReportCompatibleFields {
                // Conversion dimensions which are compatible to be selected in the "conversionDimensions" section of the report.
                conversionDimensions?: Schema.Dimension[];
                // Custom floodlight variables which are compatible to be selected in the "customFloodlightVariables" section of the
                // report.
                customFloodlightVariables?: Schema.Dimension[];
                // The kind of resource this is, in this case dfareporting#pathToConversionReportCompatibleFields.
                kind?: string;
                // Metrics which are compatible to be selected in the "metricNames" section of the report.
                metrics?: Schema.Metric[];
                // Per-interaction dimensions which are compatible to be selected in the "perInteractionDimensions" section of the report.
                perInteractionDimensions?: Schema.Dimension[];
            }
            // Contains properties of a placement.
            interface Placement {
                // Account ID of this placement. This field can be left blank.
                accountId?: string;
                // Whether this placement opts out of ad blocking. When true, ad blocking is disabled for this placement. When false, the
                // campaign and site settings take effect.
                adBlockingOptOut?: boolean;
                // Additional sizes associated with this placement. When inserting or updating a placement, only the size ID field is used.
                additionalSizes?: Schema.Size[];
                // Advertiser ID of this placement. This field can be left blank.
                advertiserId?: string;
                // Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
                advertiserIdDimensionValue?: Schema.DimensionValue;
                // Whether this placement is archived.
                archived?: boolean;
                // Campaign ID of this placement. This field is a required field on insertion.
                campaignId?: string;
                // Dimension value for the ID of the campaign. This is a read-only, auto-generated field.
                campaignIdDimensionValue?: Schema.DimensionValue;
                // Comments for this placement.
                comment?: string;
                // Placement compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering on desktop, on mobile devices or in mobile
                // apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are no longer allowed for new placement
                // insertions. Instead, use DISPLAY or DISPLAY_INTERSTITIAL. IN_STREAM_VIDEO refers to rendering in in-stream video ads
                // developed with the VAST standard. This field is required on insertion.
                compatibility?: string;
                // ID of the content category assigned to this placement.
                contentCategoryId?: string;
                // Information about the creation of this placement. This is a read-only field.
                createInfo?: Schema.LastModifiedInfo;
                // Directory site ID of this placement. On insert, you must set either this field or the siteId field to specify the site
                // associated with this placement. This is a required field that is read-only after insertion.
                directorySiteId?: string;
                // Dimension value for the ID of the directory site. This is a read-only, auto-generated field.
                directorySiteIdDimensionValue?: Schema.DimensionValue;
                // External ID for this placement.
                externalId?: string;
                // ID of this placement. This is a read-only, auto-generated field.
                id?: string;
                // Dimension value for the ID of this placement. This is a read-only, auto-generated field.
                idDimensionValue?: Schema.DimensionValue;
                // Key name of this placement. This is a read-only, auto-generated field.
                keyName?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#placement".
                kind?: string;
                // Information about the most recent modification of this placement. This is a read-only field.
                lastModifiedInfo?: Schema.LastModifiedInfo;
                // Lookback window settings for this placement.
                lookbackConfiguration?: Schema.LookbackConfiguration;
                // Name of this placement.This is a required field and must be less than or equal to 256 characters long.
                name?: string;
                // Whether payment was approved for this placement. This is a read-only field relevant only to publisher-paid placements.
                paymentApproved?: boolean;
                // Payment source for this placement. This is a required field that is read-only after insertion.
                paymentSource?: string;
                // ID of this placement's group, if applicable.
                placementGroupId?: string;
                // Dimension value for the ID of the placement group. This is a read-only, auto-generated field.
                placementGroupIdDimensionValue?: Schema.DimensionValue;
                // ID of the placement strategy assigned to this placement.
                placementStrategyId?: string;
                // Pricing schedule of this placement. This field is required on insertion, specifically subfields startDate, endDate and
                // pricingType.
                pricingSchedule?: Schema.PricingSchedule;
                // Whether this placement is the primary placement of a roadblock (placement group). You cannot change this field from true
                // to false. Setting this field to true will automatically set the primary field on the original primary placement of the
                // roadblock to false, and it will automatically set the roadblock's primaryPlacementId field to the ID of this placement.
                primary?: boolean;
                // Information about the last publisher update. This is a read-only field.
                publisherUpdateInfo?: Schema.LastModifiedInfo;
                // Site ID associated with this placement. On insert, you must set either this field or the directorySiteId field to
                // specify the site associated with this placement. This is a required field that is read-only after insertion.
                siteId?: string;
                // Dimension value for the ID of the site. This is a read-only, auto-generated field.
                siteIdDimensionValue?: Schema.DimensionValue;
                // Size associated with this placement. When inserting or updating a placement, only the size ID field is used. This field
                // is required on insertion.
                size?: Schema.Size;
                // Whether creatives assigned to this placement must be SSL-compliant.
                sslRequired?: boolean;
                // Third-party placement status.
                status?: string;
                // Subaccount ID of this placement. This field can be left blank.
                subaccountId?: string;
                // Tag formats to generate for this placement. This field is required on insertion. Acceptable values are: -
                // "PLACEMENT_TAG_STANDARD" - "PLACEMENT_TAG_IFRAME_JAVASCRIPT" - "PLACEMENT_TAG_IFRAME_ILAYER" -
                // "PLACEMENT_TAG_INTERNAL_REDIRECT" - "PLACEMENT_TAG_JAVASCRIPT" - "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT" -
                // "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT" - "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT" -
                // "PLACEMENT_TAG_CLICK_COMMANDS" - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH" -
                // "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3" - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4" -
                // "PLACEMENT_TAG_TRACKING" - "PLACEMENT_TAG_TRACKING_IFRAME" - "PLACEMENT_TAG_TRACKING_JAVASCRIPT"
                tagFormats?: string[];
                // Tag settings for this placement.
                tagSetting?: Schema.TagSetting;
                // Whether Verification and ActiveView are disabled for in-stream video creatives for this placement. The same setting
                // videoActiveViewOptOut exists on the site level -- the opt out occurs if either of these settings are true. These
                // settings are distinct from DirectorySites.settings.activeViewOptOut or Sites.siteSettings.activeViewOptOut which only
                // apply to display ads. However, Accounts.activeViewOptOut opts out both video traffic, as well as display ads, from
                // Verification and ActiveView.
                videoActiveViewOptOut?: boolean;
                // A collection of settings which affect video creatives served through this placement. Applicable to placements with
                // IN_STREAM_VIDEO compatibility.
                videoSettings?: Schema.VideoSettings;
                // VPAID adapter setting for this placement. Controls which VPAID format the measurement adapter will use for in-stream
                // video creatives assigned to this placement. *Note:* Flash is no longer supported. This field now defaults to HTML5 when
                // the following values are provided: FLASH, BOTH.
                vpaidAdapterChoice?: string;
            }
            // Placement Assignment.
            interface PlacementAssignment {
                // Whether this placement assignment is active. When true, the placement will be included in the ad's rotation.
                active?: boolean;
                // ID of the placement to be assigned. This is a required field.
                placementId?: string;
                // Dimension value for the ID of the placement. This is a read-only, auto-generated field.
                placementIdDimensionValue?: Schema.DimensionValue;
                // Whether the placement to be assigned requires SSL. This is a read-only field that is auto-generated when the ad is
                // inserted or updated.
                sslRequired?: boolean;
            }
            // Contains properties of a package or roadblock.
            interface PlacementGroup {
                // Account ID of this placement group. This is a read-only field that can be left blank.
                accountId?: string;
                // Advertiser ID of this placement group. This is a required field on insertion.
                advertiserId?: string;
                // Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
                advertiserIdDimensionValue?: Schema.DimensionValue;
                // Whether this placement group is archived.
                archived?: boolean;
                // Campaign ID of this placement group. This field is required on insertion.
                campaignId?: string;
                // Dimension value for the ID of the campaign. This is a read-only, auto-generated field.
                campaignIdDimensionValue?: Schema.DimensionValue;
                // IDs of placements which are assigned to this placement group. This is a read-only, auto-generated field.
                childPlacementIds?: string[];
                // Comments for this placement group.
                comment?: string;
                // ID of the content category assigned to this placement group.
                contentCategoryId?: string;
                // Information about the creation of this placement group. This is a read-only field.
                createInfo?: Schema.LastModifiedInfo;
                // Directory site ID associated with this placement group. On insert, you must set either this field or the site_id field
                // to specify the site associated with this placement group. This is a required field that is read-only after insertion.
                directorySiteId?: string;
                // Dimension value for the ID of the directory site. This is a read-only, auto-generated field.
                directorySiteIdDimensionValue?: Schema.DimensionValue;
                // External ID for this placement.
                externalId?: string;
                // ID of this placement group. This is a read-only, auto-generated field.
                id?: string;
                // Dimension value for the ID of this placement group. This is a read-only, auto-generated field.
                idDimensionValue?: Schema.DimensionValue;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroup".
                kind?: string;
                // Information about the most recent modification of this placement group. This is a read-only field.
                lastModifiedInfo?: Schema.LastModifiedInfo;
                // Name of this placement group. This is a required field and must be less than 256 characters long.
                name?: string;
                // Type of this placement group. A package is a simple group of placements that acts as a single pricing point for a group
                // of tags. A roadblock is a group of placements that not only acts as a single pricing point, but also assumes that all
                // the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as
                // primary for reporting. This field is required on insertion.
                placementGroupType?: string;
                // ID of the placement strategy assigned to this placement group.
                placementStrategyId?: string;
                // Pricing schedule of this placement group. This field is required on insertion.
                pricingSchedule?: Schema.PricingSchedule;
                // ID of the primary placement, used to calculate the media cost of a roadblock (placement group). Modifying this field
                // will automatically modify the primary field on all affected roadblock child placements.
                primaryPlacementId?: string;
                // Dimension value for the ID of the primary placement. This is a read-only, auto-generated field.
                primaryPlacementIdDimensionValue?: Schema.DimensionValue;
                // Site ID associated with this placement group. On insert, you must set either this field or the directorySiteId field to
                // specify the site associated with this placement group. This is a required field that is read-only after insertion.
                siteId?: string;
                // Dimension value for the ID of the site. This is a read-only, auto-generated field.
                siteIdDimensionValue?: Schema.DimensionValue;
                // Subaccount ID of this placement group. This is a read-only field that can be left blank.
                subaccountId?: string;
            }
            // Placement Group List Response
            interface PlacementGroupsListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroupsListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
                // Placement group collection.
                placementGroups?: Schema.PlacementGroup[];
            }
            // Placement Strategy List Response
            interface PlacementStrategiesListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementStrategiesListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
                // Placement strategy collection.
                placementStrategies?: Schema.PlacementStrategy[];
            }
            // Contains properties of a placement strategy.
            interface PlacementStrategy {
                // Account ID of this placement strategy.This is a read-only field that can be left blank.
                accountId?: string;
                // ID of this placement strategy. This is a read-only, auto-generated field.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementStrategy".
                kind?: string;
                // Name of this placement strategy. This is a required field. It must be less than 256 characters long and unique among
                // placement strategies of the same account.
                name?: string;
            }
            // Placement Tag
            interface PlacementTag {
                // Placement ID
                placementId?: string;
                // Tags generated for this placement.
                tagDatas?: Schema.TagData[];
            }
            // Placement GenerateTags Response
            interface PlacementsGenerateTagsResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementsGenerateTagsResponse".
                kind?: string;
                // Set of generated tags for the specified placements.
                placementTags?: Schema.PlacementTag[];
            }
            // Placement List Response
            interface PlacementsListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementsListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
                // Placement collection.
                placements?: Schema.Placement[];
            }
            // Contains information about a platform type that can be targeted by ads.
            interface PlatformType {
                // ID of this platform type.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#platformType".
                kind?: string;
                // Name of this platform type.
                name?: string;
            }
            // Platform Type List Response
            interface PlatformTypesListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#platformTypesListResponse".
                kind?: string;
                // Platform type collection.
                platformTypes?: Schema.PlatformType[];
            }
            // Popup Window Properties.
            interface PopupWindowProperties {
                // Popup dimension for a creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA
                // and all VPAID
                dimension?: Schema.Size;
                // Upper-left corner coordinates of the popup window. Applicable if positionType is COORDINATES.
                offset?: Schema.OffsetPosition;
                // Popup window position either centered or at specific coordinate.
                positionType?: string;
                // Whether to display the browser address bar.
                showAddressBar?: boolean;
                // Whether to display the browser menu bar.
                showMenuBar?: boolean;
                // Whether to display the browser scroll bar.
                showScrollBar?: boolean;
                // Whether to display the browser status bar.
                showStatusBar?: boolean;
                // Whether to display the browser tool bar.
                showToolBar?: boolean;
                // Title of popup window.
                title?: string;
            }
            // Contains information about a postal code that can be targeted by ads.
            interface PostalCode {
                // Postal code. This is equivalent to the id field.
                code?: string;
                // Country code of the country to which this postal code belongs.
                countryCode?: string;
                // DART ID of the country to which this postal code belongs.
                countryDartId?: string;
                // ID of this postal code.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#postalCode".
                kind?: string;
            }
            // Postal Code List Response
            interface PostalCodesListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#postalCodesListResponse".
                kind?: string;
                // Postal code collection.
                postalCodes?: Schema.PostalCode[];
            }
            // Pricing Information
            interface Pricing {
                // Cap cost type of this inventory item.
                capCostType?: string;
                endDate?: string;
                // Flights of this inventory item. A flight (a.k.a. pricing period) represents the inventory item pricing information for a
                // specific period of time.
                flights?: Schema.Flight[];
                // Group type of this inventory item if it represents a placement group. Is null otherwise. There are two type of placement
                // groups: PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE is a simple group of inventory items that acts as a single pricing point
                // for a group of tags. PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK is a group of inventory items that not only acts as a
                // single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one
                // of its assigned inventory items to be marked as primary.
                groupType?: string;
                // Pricing type of this inventory item.
                pricingType?: string;
                startDate?: string;
            }
            // Pricing Schedule
            interface PricingSchedule {
                // Placement cap cost option.
                capCostOption?: string;
                endDate?: string;
                // Whether this placement is flighted. If true, pricing periods will be computed automatically.
                flighted?: boolean;
                // Floodlight activity ID associated with this placement. This field should be set when placement pricing type is set to
                // PRICING_TYPE_CPA.
                floodlightActivityId?: string;
                // Pricing periods for this placement.
                pricingPeriods?: Schema.PricingSchedulePricingPeriod[];
                // Placement pricing type. This field is required on insertion.
                pricingType?: string;
                startDate?: string;
                testingStartDate?: string;
            }
            // Pricing Period
            interface PricingSchedulePricingPeriod {
                endDate?: string;
                // Comments for this pricing period.
                pricingComment?: string;
                // Rate or cost of this pricing period in nanos (i.e., multipled by 1000000000). Acceptable values are 0 to
                // 1000000000000000000, inclusive.
                rateOrCostNanos?: string;
                startDate?: string;
                // Units of this pricing period. Acceptable values are 0 to 10000000000, inclusive.
                units?: string;
            }
            // Contains properties of a Planning project.
            interface Project {
                // Account ID of this project.
                accountId?: string;
                // Advertiser ID of this project.
                advertiserId?: string;
                // Audience age group of this project.
                audienceAgeGroup?: string;
                // Audience gender of this project.
                audienceGender?: string;
                // Budget of this project in the currency specified by the current account. The value stored in this field represents only
                // the non-fractional amount. For example, for USD, the smallest value that can be represented by this field is 1 US
                // dollar.
                budget?: string;
                // Client billing code of this project.
                clientBillingCode?: string;
                // Name of the project client.
                clientName?: string;
                endDate?: string;
                // ID of this project. This is a read-only, auto-generated field.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#project".
                kind?: string;
                // Information about the most recent modification of this project.
                lastModifiedInfo?: Schema.LastModifiedInfo;
                // Name of this project.
                name?: string;
                // Overview of this project.
                overview?: string;
                startDate?: string;
                // Subaccount ID of this project.
                subaccountId?: string;
                // Number of clicks that the advertiser is targeting.
                targetClicks?: string;
                // Number of conversions that the advertiser is targeting.
                targetConversions?: string;
                // CPA that the advertiser is targeting.
                targetCpaNanos?: string;
                // CPC that the advertiser is targeting.
                targetCpcNanos?: string;
                // vCPM from Active View that the advertiser is targeting.
                targetCpmActiveViewNanos?: string;
                // CPM that the advertiser is targeting.
                targetCpmNanos?: string;
                // Number of impressions that the advertiser is targeting.
                targetImpressions?: string;
            }
            // Project List Response
            interface ProjectsListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#projectsListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
                // Project collection.
                projects?: Schema.Project[];
            }
            // Represents fields that are compatible to be selected for a report of type "REACH".
            interface ReachReportCompatibleFields {
                // Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.
                dimensionFilters?: Schema.Dimension[];
                // Dimensions which are compatible to be selected in the "dimensions" section of the report.
                dimensions?: Schema.Dimension[];
                // The kind of resource this is, in this case dfareporting#reachReportCompatibleFields.
                kind?: string;
                // Metrics which are compatible to be selected in the "metricNames" section of the report.
                metrics?: Schema.Metric[];
                // Metrics which are compatible to be selected as activity metrics to pivot on in the "activities" section of the report.
                pivotedActivityMetrics?: Schema.Metric[];
                // Metrics which are compatible to be selected in the "reachByFrequencyMetricNames" section of the report.
                reachByFrequencyMetrics?: Schema.Metric[];
            }
            // Represents a recipient.
            interface Recipient {
                // The delivery type for the recipient.
                deliveryType?: string;
                // The email address of the recipient.
                email?: string;
                // The kind of resource this is, in this case dfareporting#recipient.
                kind?: string;
            }
            // Contains information about a region that can be targeted by ads.
            interface Region {
                // Country code of the country to which this region belongs.
                countryCode?: string;
                // DART ID of the country to which this region belongs.
                countryDartId?: string;
                // DART ID of this region.
                dartId?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#region".
                kind?: string;
                // Name of this region.
                name?: string;
                // Region code.
                regionCode?: string;
            }
            // Region List Response
            interface RegionsListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#regionsListResponse".
                kind?: string;
                // Region collection.
                regions?: Schema.Region[];
            }
            // Contains properties of a remarketing list. Remarketing enables you to create lists of users who have performed specific
            // actions on a site, then target ads to members of those lists. This resource can be used to manage remarketing lists that
            // are owned by your advertisers. To see all remarketing lists that are visible to your advertisers, including those that
            // are shared to your advertiser or account, use the TargetableRemarketingLists resource.
            interface RemarketingList {
                // Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
                accountId?: string;
                // Whether this remarketing list is active.
                active?: boolean;
                // Dimension value for the advertiser ID that owns this remarketing list. This is a required field.
                advertiserId?: string;
                // Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
                advertiserIdDimensionValue?: Schema.DimensionValue;
                // Remarketing list description.
                description?: string;
                // Remarketing list ID. This is a read-only, auto-generated field.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingList".
                kind?: string;
                // Number of days that a user should remain in the remarketing list without an impression. Acceptable values are 1 to 540,
                // inclusive.
                lifeSpan?: string;
                // Rule used to populate the remarketing list with users.
                listPopulationRule?: Schema.ListPopulationRule;
                // Number of users currently in the list. This is a read-only field.
                listSize?: string;
                // Product from which this remarketing list was originated.
                listSource?: string;
                // Name of the remarketing list. This is a required field. Must be no greater than 128 characters long.
                name?: string;
                // Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
                subaccountId?: string;
            }
            // Contains properties of a remarketing list's sharing information. Sharing allows other accounts or advertisers to target
            // to your remarketing lists. This resource can be used to manage remarketing list sharing to other accounts and
            // advertisers.
            interface RemarketingListShare {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingListShare".
                kind?: string;
                // Remarketing list ID. This is a read-only, auto-generated field.
                remarketingListId?: string;
                // Accounts that the remarketing list is shared with.
                sharedAccountIds?: string[];
                // Advertisers that the remarketing list is shared with.
                sharedAdvertiserIds?: string[];
            }
            // Remarketing list response
            interface RemarketingListsListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingListsListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
                // Remarketing list collection.
                remarketingLists?: Schema.RemarketingList[];
            }
            // Represents a Report resource.
            interface Report {
                // The account ID to which this report belongs.
                accountId?: string;
                // The report criteria for a report of type "STANDARD".
                criteria?: Schema.ReportCriteria;
                // The report criteria for a report of type "CROSS_DIMENSION_REACH".
                crossDimensionReachCriteria?: Schema.ReportCrossDimensionReachCriteria;
                // The report's email delivery settings.
                delivery?: Schema.ReportDelivery;
                // The eTag of this response for caching purposes.
                etag?: string;
                // The filename used when generating report files for this report.
                fileName?: string;
                // The report criteria for a report of type "FLOODLIGHT".
                floodlightCriteria?: Schema.ReportFloodlightCriteria;
                // The output format of the report. If not specified, default format is "CSV". Note that the actual format in the completed
                // report file might differ if for instance the report's size exceeds the format's capabilities. "CSV" will then be the
                // fallback format.
                format?: string;
                // The unique ID identifying this report resource.
                id?: string;
                // The kind of resource this is, in this case dfareporting#report.
                kind?: string;
                // The timestamp (in milliseconds since epoch) of when this report was last modified.
                lastModifiedTime?: string;
                // The name of the report.
                name?: string;
                // The user profile id of the owner of this report.
                ownerProfileId?: string;
                // The report criteria for a report of type "PATH_ATTRIBUTION".
                pathAttributionCriteria?: Schema.ReportPathAttributionCriteria;
                // The report criteria for a report of type "PATH".
                pathCriteria?: Schema.ReportPathCriteria;
                // The report criteria for a report of type "PATH_TO_CONVERSION".
                pathToConversionCriteria?: Schema.ReportPathToConversionCriteria;
                // The report criteria for a report of type "REACH".
                reachCriteria?: Schema.ReportReachCriteria;
                // The report's schedule. Can only be set if the report's 'dateRange' is a relative date range and the relative date range
                // is not "TODAY".
                schedule?: Schema.ReportSchedule;
                // The subaccount ID to which this report belongs if applicable.
                subAccountId?: string;
                // The type of the report.
                type?: string;
            }
            // Represents fields that are compatible to be selected for a report of type "STANDARD".
            interface ReportCompatibleFields {
                // Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.
                dimensionFilters?: Schema.Dimension[];
                // Dimensions which are compatible to be selected in the "dimensions" section of the report.
                dimensions?: Schema.Dimension[];
                // The kind of resource this is, in this case dfareporting#reportCompatibleFields.
                kind?: string;
                // Metrics which are compatible to be selected in the "metricNames" section of the report.
                metrics?: Schema.Metric[];
                // Metrics which are compatible to be selected as activity metrics to pivot on in the "activities" section of the report.
                pivotedActivityMetrics?: Schema.Metric[];
            }
            // The report criteria for a report of type "STANDARD".
            interface ReportCriteria {
                // Activity group.
                activities?: Schema.Activities;
                // Custom Rich Media Events group.
                customRichMediaEvents?: Schema.CustomRichMediaEvents;
                // The date range for which this report should be run.
                dateRange?: Schema.DateRange;
                // The list of filters on which dimensions are filtered. Filters for different dimensions are ANDed, filters for the same
                // dimension are grouped together and ORed.
                dimensionFilters?: Schema.DimensionValue[];
                // The list of standard dimensions the report should include.
                dimensions?: Schema.SortedDimension[];
                // The list of names of metrics the report should include.
                metricNames?: string[];
            }
            // The report criteria for a report of type "CROSS_DIMENSION_REACH".
            interface ReportCrossDimensionReachCriteria {
                // The list of dimensions the report should include.
                breakdown?: Schema.SortedDimension[];
                // The date range this report should be run for.
                dateRange?: Schema.DateRange;
                // The dimension option.
                dimension?: string;
                // The list of filters on which dimensions are filtered.
                dimensionFilters?: Schema.DimensionValue[];
                // The list of names of metrics the report should include.
                metricNames?: string[];
                // The list of names of overlap metrics the report should include.
                overlapMetricNames?: string[];
                // Whether the report is pivoted or not. Defaults to true.
                pivoted?: boolean;
            }
            // The report's email delivery settings.
            interface ReportDelivery {
                // Whether the report should be emailed to the report owner.
                emailOwner?: boolean;
                // The type of delivery for the owner to receive, if enabled.
                emailOwnerDeliveryType?: string;
                // The message to be sent with each email.
                message?: string;
                // The list of recipients to which to email the report.
                recipients?: Schema.Recipient[];
            }
            // The report criteria for a report of type "FLOODLIGHT".
            interface ReportFloodlightCriteria {
                // The list of custom rich media events to include.
                customRichMediaEvents?: Schema.DimensionValue[];
                // The date range this report should be run for.
                dateRange?: Schema.DateRange;
                // The list of filters on which dimensions are filtered. Filters for different dimensions are ANDed, filters for the same
                // dimension are grouped together and ORed.
                dimensionFilters?: Schema.DimensionValue[];
                // The list of dimensions the report should include.
                dimensions?: Schema.SortedDimension[];
                // The floodlight ID for which to show data in this report. All advertisers associated with that ID will automatically be
                // added. The dimension of the value needs to be 'dfa:floodlightConfigId'.
                floodlightConfigId?: Schema.DimensionValue;
                // The list of names of metrics the report should include.
                metricNames?: string[];
                // The properties of the report.
                reportProperties?: Schema.ReportFloodlightCriteriaReportProperties;
            }
            // The properties of the report.
            interface ReportFloodlightCriteriaReportProperties {
                // Include conversions that have no cookie, but do have an exposure path.
                includeAttributedIPConversions?: boolean;
                // Include conversions of users with a DoubleClick cookie but without an exposure. That means the user did not click or see
                // an ad from the advertiser within the Floodlight group, or that the interaction happened outside the lookback window.
                includeUnattributedCookieConversions?: boolean;
                // Include conversions that have no associated cookies and no exposures. It’s therefore impossible to know how the user was
                // exposed to your ads during the lookback window prior to a conversion.
                includeUnattributedIPConversions?: boolean;
            }
            // Represents the list of reports.
            interface ReportList {
                // The eTag of this response for caching purposes.
                etag?: string;
                // The reports returned in this response.
                items?: Schema.Report[];
                // The kind of list this is, in this case dfareporting#reportList.
                kind?: string;
                // Continuation token used to page through reports. To retrieve the next page of results, set the next request's
                // "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be
                // persisted.
                nextPageToken?: string;
            }
            // The report criteria for a report of type "PATH_ATTRIBUTION".
            interface ReportPathAttributionCriteria {
                // The list of 'dfa:activity' values to filter on.
                activityFilters?: Schema.DimensionValue[];
                // Channel Grouping.
                customChannelGrouping?: Schema.ChannelGrouping;
                // The date range this report should be run for.
                dateRange?: Schema.DateRange;
                // The list of dimensions the report should include.
                dimensions?: Schema.SortedDimension[];
                // The floodlight ID for which to show data in this report. All advertisers associated with that ID will automatically be
                // added. The dimension of the value needs to be 'dfa:floodlightConfigId'.
                floodlightConfigId?: Schema.DimensionValue;
                // The list of names of metrics the report should include.
                metricNames?: string[];
                // Path Filters.
                pathFilters?: Schema.PathFilter[];
            }
            // The report criteria for a report of type "PATH".
            interface ReportPathCriteria {
                // The list of 'dfa:activity' values to filter on.
                activityFilters?: Schema.DimensionValue[];
                // Channel Grouping.
                customChannelGrouping?: Schema.ChannelGrouping;
                // The date range this report should be run for.
                dateRange?: Schema.DateRange;
                // The list of dimensions the report should include.
                dimensions?: Schema.SortedDimension[];
                // The floodlight ID for which to show data in this report. All advertisers associated with that ID will automatically be
                // added. The dimension of the value needs to be 'dfa:floodlightConfigId'.
                floodlightConfigId?: Schema.DimensionValue;
                // The list of names of metrics the report should include.
                metricNames?: string[];
                // Path Filters.
                pathFilters?: Schema.PathFilter[];
            }
            // The report criteria for a report of type "PATH_TO_CONVERSION".
            interface ReportPathToConversionCriteria {
                // The list of 'dfa:activity' values to filter on.
                activityFilters?: Schema.DimensionValue[];
                // The list of conversion dimensions the report should include.
                conversionDimensions?: Schema.SortedDimension[];
                // The list of custom floodlight variables the report should include.
                customFloodlightVariables?: Schema.SortedDimension[];
                // The list of custom rich media events to include.
                customRichMediaEvents?: Schema.DimensionValue[];
                // The date range this report should be run for.
                dateRange?: Schema.DateRange;
                // The floodlight ID for which to show data in this report. All advertisers associated with that ID will automatically be
                // added. The dimension of the value needs to be 'dfa:floodlightConfigId'.
                floodlightConfigId?: Schema.DimensionValue;
                // The list of names of metrics the report should include.
                metricNames?: string[];
                // The list of per interaction dimensions the report should include.
                perInteractionDimensions?: Schema.SortedDimension[];
                // The properties of the report.
                reportProperties?: Schema.ReportPathToConversionCriteriaReportProperties;
            }
            // The properties of the report.
            interface ReportPathToConversionCriteriaReportProperties {
                // DFA checks to see if a click interaction occurred within the specified period of time before a conversion. By default
                // the value is pulled from Floodlight or you can manually enter a custom value. Valid values: 1-90.
                clicksLookbackWindow?: Integer;
                // DFA checks to see if an impression interaction occurred within the specified period of time before a conversion. By
                // default the value is pulled from Floodlight or you can manually enter a custom value. Valid values: 1-90.
                impressionsLookbackWindow?: Integer;
                // Deprecated: has no effect.
                includeAttributedIPConversions?: boolean;
                // Include conversions of users with a DoubleClick cookie but without an exposure. That means the user did not click or see
                // an ad from the advertiser within the Floodlight group, or that the interaction happened outside the lookback window.
                includeUnattributedCookieConversions?: boolean;
                // Include conversions that have no associated cookies and no exposures. It’s therefore impossible to know how the user was
                // exposed to your ads during the lookback window prior to a conversion.
                includeUnattributedIPConversions?: boolean;
                // The maximum number of click interactions to include in the report. Advertisers currently paying for E2C reports get up
                // to 200 (100 clicks, 100 impressions). If another advertiser in your network is paying for E2C, you can have up to 5
                // total exposures per report.
                maximumClickInteractions?: Integer;
                // The maximum number of click interactions to include in the report. Advertisers currently paying for E2C reports get up
                // to 200 (100 clicks, 100 impressions). If another advertiser in your network is paying for E2C, you can have up to 5
                // total exposures per report.
                maximumImpressionInteractions?: Integer;
                // The maximum amount of time that can take place between interactions (clicks or impressions) by the same user. Valid
                // values: 1-90.
                maximumInteractionGap?: Integer;
                // Enable pivoting on interaction path.
                pivotOnInteractionPath?: boolean;
            }
            // The report criteria for a report of type "REACH".
            interface ReportReachCriteria {
                // Activity group.
                activities?: Schema.Activities;
                // Custom Rich Media Events group.
                customRichMediaEvents?: Schema.CustomRichMediaEvents;
                // The date range this report should be run for.
                dateRange?: Schema.DateRange;
                // The list of filters on which dimensions are filtered. Filters for different dimensions are ANDed, filters for the same
                // dimension are grouped together and ORed.
                dimensionFilters?: Schema.DimensionValue[];
                // The list of dimensions the report should include.
                dimensions?: Schema.SortedDimension[];
                // Whether to enable all reach dimension combinations in the report. Defaults to false. If enabled, the date range of the
                // report should be within the last 42 days.
                enableAllDimensionCombinations?: boolean;
                // The list of names of metrics the report should include.
                metricNames?: string[];
                // The list of names of Reach By Frequency metrics the report should include.
                reachByFrequencyMetricNames?: string[];
            }
            // The report's schedule. Can only be set if the report's 'dateRange' is a relative date range and the relative date range
            // is not "TODAY".
            interface ReportSchedule {
                // Whether the schedule is active or not. Must be set to either true or false.
                active?: boolean;
                // Defines every how many days, weeks or months the report should be run. Needs to be set when "repeats" is either "DAILY",
                // "WEEKLY" or "MONTHLY".
                every?: Integer;
                expirationDate?: string;
                // The interval for which the report is repeated. Note: - "DAILY" also requires field "every" to be set. - "WEEKLY" also
                // requires fields "every" and "repeatsOnWeekDays" to be set. - "MONTHLY" also requires fields "every" and
                // "runsOnDayOfMonth" to be set.
                repeats?: string;
                // List of week days "WEEKLY" on which scheduled reports should run.
                repeatsOnWeekDays?: string[];
                // Enum to define for "MONTHLY" scheduled reports whether reports should be repeated on the same day of the month as
                // "startDate" or the same day of the week of the month. Example: If 'startDate' is Monday, April 2nd 2012 (2012-04-02),
                // "DAY_OF_MONTH" would run subsequent reports on the 2nd of every Month, and "WEEK_OF_MONTH" would run subsequent reports
                // on the first Monday of the month.
                runsOnDayOfMonth?: string;
                startDate?: string;
            }
            // Reporting Configuration
            interface ReportsConfiguration {
                // Whether the exposure to conversion report is enabled. This report shows detailed pathway information on up to 10 of the
                // most recent ad exposures seen by a user before converting.
                exposureToConversionEnabled?: boolean;
                // Default lookback windows for new advertisers in this account.
                lookbackConfiguration?: Schema.LookbackConfiguration;
                // Report generation time zone ID of this account. This is a required field that can only be changed by a superuser.
                // Acceptable values are: - "1" for "America/New_York" - "2" for "Europe/London" - "3" for "Europe/Paris" - "4" for
                // "Africa/Johannesburg" - "5" for "Asia/Jerusalem" - "6" for "Asia/Shanghai" - "7" for "Asia/Hong_Kong" - "8" for
                // "Asia/Tokyo" - "9" for "Australia/Sydney" - "10" for "Asia/Dubai" - "11" for "America/Los_Angeles" - "12" for
                // "Pacific/Auckland" - "13" for "America/Sao_Paulo" - "16" for "America/Asuncion" - "17" for "America/Chicago" - "18" for
                // "America/Denver" - "19" for "America/St_Johns" - "20" for "Asia/Dhaka" - "21" for "Asia/Jakarta" - "22" for "Asia/Kabul"
                // - "23" for "Asia/Karachi" - "24" for "Asia/Calcutta" - "25" for "Asia/Pyongyang" - "26" for "Asia/Rangoon" - "27" for
                // "Atlantic/Cape_Verde" - "28" for "Atlantic/South_Georgia" - "29" for "Australia/Adelaide" - "30" for
                // "Australia/Lord_Howe" - "31" for "Europe/Moscow" - "32" for "Pacific/Kiritimati" - "35" for "Pacific/Norfolk" - "36" for
                // "Pacific/Tongatapu"
                reportGenerationTimeZoneId?: string;
            }
            // Rich Media Exit Override.
            interface RichMediaExitOverride {
                // Click-through URL of this rich media exit override. Applicable if the enabled field is set to true.
                clickThroughUrl?: Schema.ClickThroughUrl;
                // Whether to use the clickThroughUrl. If false, the creative-level exit will be used.
                enabled?: boolean;
                // ID for the override to refer to a specific exit in the creative.
                exitId?: string;
            }
            // A rule associates an asset with a targeting template for asset-level targeting. Applicable to INSTREAM_VIDEO creatives.
            interface Rule {
                // A creativeAssets[].id. This should refer to one of the parent assets in this creative. This is a required field.
                assetId?: string;
                // A user-friendly name for this rule. This is a required field.
                name?: string;
                // A targeting template ID. The targeting from the targeting template will be used to determine whether this asset should
                // be served. This is a required field.
                targetingTemplateId?: string;
            }
            // Contains properties of a site.
            interface Site {
                // Account ID of this site. This is a read-only field that can be left blank.
                accountId?: string;
                // Whether this site is approved.
                approved?: boolean;
                // Directory site associated with this site. This is a required field that is read-only after insertion.
                directorySiteId?: string;
                // Dimension value for the ID of the directory site. This is a read-only, auto-generated field.
                directorySiteIdDimensionValue?: Schema.DimensionValue;
                // ID of this site. This is a read-only, auto-generated field.
                id?: string;
                // Dimension value for the ID of this site. This is a read-only, auto-generated field.
                idDimensionValue?: Schema.DimensionValue;
                // Key name of this site. This is a read-only, auto-generated field.
                keyName?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#site".
                kind?: string;
                // Name of this site.This is a required field. Must be less than 128 characters long. If this site is under a subaccount,
                // the name must be unique among sites of the same subaccount. Otherwise, this site is a top-level site, and the name must
                // be unique among top-level sites of the same account.
                name?: string;
                // Site contacts.
                siteContacts?: Schema.SiteContact[];
                // Site-wide settings.
                siteSettings?: Schema.SiteSettings;
                // Subaccount ID of this site. This is a read-only field that can be left blank.
                subaccountId?: string;
                // Default video settings for new placements created under this site. This value will be used to populate the
                // placements.videoSettings field, when no value is specified for the new placement.
                videoSettings?: Schema.SiteVideoSettings;
            }
            // Companion Settings
            interface SiteCompanionSetting {
                // Whether companions are disabled for this site template.
                companionsDisabled?: boolean;
                // Allowlist of companion sizes to be served via this site template. Set this list to null or empty to serve all companion
                // sizes.
                enabledSizes?: Schema.Size[];
                // Whether to serve only static images as companions.
                imageOnly?: boolean;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteCompanionSetting".
                kind?: string;
            }
            // Site Contact
            interface SiteContact {
                // Address of this site contact.
                address?: string;
                // Site contact type.
                contactType?: string;
                // Email address of this site contact. This is a required field.
                email?: string;
                // First name of this site contact.
                firstName?: string;
                // ID of this site contact. This is a read-only, auto-generated field.
                id?: string;
                // Last name of this site contact.
                lastName?: string;
                // Primary phone number of this site contact.
                phone?: string;
                // Title or designation of this site contact.
                title?: string;
            }
            // Site Settings
            interface SiteSettings {
                // Whether active view creatives are disabled for this site.
                activeViewOptOut?: boolean;
                // Whether this site opts out of ad blocking. When true, ad blocking is disabled for all placements under the site,
                // regardless of the individual placement settings. When false, the campaign and placement settings take effect.
                adBlockingOptOut?: boolean;
                // Whether new cookies are disabled for this site.
                disableNewCookie?: boolean;
                // Configuration settings for dynamic and image floodlight tags.
                tagSetting?: Schema.TagSetting;
                // Whether Verification and ActiveView for in-stream video creatives are disabled by default for new placements created
                // under this site. This value will be used to populate the placement.videoActiveViewOptOut field, when no value is
                // specified for the new placement.
                videoActiveViewOptOutTemplate?: boolean;
                // Default VPAID adapter setting for new placements created under this site. This value will be used to populate the
                // placements.vpaidAdapterChoice field, when no value is specified for the new placement. Controls which VPAID format the
                // measurement adapter will use for in-stream video creatives assigned to the placement. The publisher's specifications
                // will typically determine this setting. For VPAID creatives, the adapter format will match the VPAID format (HTML5 VPAID
                // creatives use the HTML5 adapter). *Note:* Flash is no longer supported. This field now defaults to HTML5 when the
                // following values are provided: FLASH, BOTH.
                vpaidAdapterChoiceTemplate?: string;
            }
            // Skippable Settings
            interface SiteSkippableSetting {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteSkippableSetting".
                kind?: string;
                // Amount of time to play videos served to this site template before counting a view. Applicable when skippable is true.
                progressOffset?: Schema.VideoOffset;
                // Amount of time to play videos served to this site before the skip button should appear. Applicable when skippable is
                // true.
                skipOffset?: Schema.VideoOffset;
                // Whether the user can skip creatives served to this site. This will act as default for new placements created under this
                // site.
                skippable?: boolean;
            }
            // Transcode Settings
            interface SiteTranscodeSetting {
                // Allowlist of video formats to be served to this site template. Set this list to null or empty to serve all video
                // formats.
                enabledVideoFormats?: Integer[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteTranscodeSetting".
                kind?: string;
            }
            // Video Settings
            interface SiteVideoSettings {
                // Settings for the companion creatives of video creatives served to this site.
                companionSettings?: Schema.SiteCompanionSetting;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteVideoSettings".
                kind?: string;
                // Whether OBA icons are enabled for this placement.
                obaEnabled?: boolean;
                // Settings for the OBA icon of video creatives served to this site. This will act as default for new placements created
                // under this site.
                obaSettings?: Schema.ObaIcon;
                // Orientation of a site template used for video. This will act as default for new placements created under this site.
                orientation?: string;
                // Settings for the skippability of video creatives served to this site. This will act as default for new placements
                // created under this site.
                skippableSettings?: Schema.SiteSkippableSetting;
                // Settings for the transcodes of video creatives served to this site. This will act as default for new placements created
                // under this site.
                transcodeSettings?: Schema.SiteTranscodeSetting;
            }
            // Site List Response
            interface SitesListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#sitesListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
                // Site collection.
                sites?: Schema.Site[];
            }
            // Represents the dimensions of ads, placements, creatives, or creative assets.
            interface Size {
                // Height of this size. Acceptable values are 0 to 32767, inclusive.
                height?: Integer;
                // IAB standard size. This is a read-only, auto-generated field.
                iab?: boolean;
                // ID of this size. This is a read-only, auto-generated field.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#size".
                kind?: string;
                // Width of this size. Acceptable values are 0 to 32767, inclusive.
                width?: Integer;
            }
            // Size List Response
            interface SizesListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#sizesListResponse".
                kind?: string;
                // Size collection.
                sizes?: Schema.Size[];
            }
            // Skippable Settings
            interface SkippableSetting {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#skippableSetting".
                kind?: string;
                // Amount of time to play videos served to this placement before counting a view. Applicable when skippable is true.
                progressOffset?: Schema.VideoOffset;
                // Amount of time to play videos served to this placement before the skip button should appear. Applicable when skippable
                // is true.
                skipOffset?: Schema.VideoOffset;
                // Whether the user can skip creatives served to this placement.
                skippable?: boolean;
            }
            // Represents a sorted dimension.
            interface SortedDimension {
                // The kind of resource this is, in this case dfareporting#sortedDimension.
                kind?: string;
                // The name of the dimension.
                name?: string;
                // An optional sort order for the dimension column.
                sortOrder?: string;
            }
            // Contains properties of a Campaign Manager subaccount.
            interface Subaccount {
                // ID of the account that contains this subaccount. This is a read-only field that can be left blank.
                accountId?: string;
                // IDs of the available user role permissions for this subaccount.
                availablePermissionIds?: string[];
                // ID of this subaccount. This is a read-only, auto-generated field.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#subaccount".
                kind?: string;
                // Name of this subaccount. This is a required field. Must be less than 128 characters long and be unique among subaccounts
                // of the same account.
                name?: string;
            }
            // Subaccount List Response
            interface SubaccountsListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#subaccountsListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
                // Subaccount collection.
                subaccounts?: Schema.Subaccount[];
            }
            // Placement Tag Data
            interface TagData {
                // Ad associated with this placement tag. Applicable only when format is PLACEMENT_TAG_TRACKING.
                adId?: string;
                // Tag string to record a click.
                clickTag?: string;
                // Creative associated with this placement tag. Applicable only when format is PLACEMENT_TAG_TRACKING.
                creativeId?: string;
                // TagData tag format of this tag.
                format?: string;
                // Tag string for serving an ad.
                impressionTag?: string;
            }
            // Tag Settings
            interface TagSetting {
                // Additional key-values to be included in tags. Each key-value pair must be of the form key=value, and pairs must be
                // separated by a semicolon (;). Keys and values must not contain commas. For example, id=2;color=red is a valid value for
                // this field.
                additionalKeyValues?: string;
                // Whether static landing page URLs should be included in the tags. This setting applies only to placements.
                includeClickThroughUrls?: boolean;
                // Whether click-tracking string should be included in the tags.
                includeClickTracking?: boolean;
                // Option specifying how keywords are embedded in ad tags. This setting can be used to specify whether keyword placeholders
                // are inserted in placement tags for this site. Publishers can then add keywords to those placeholders.
                keywordOption?: string;
            }
            // Dynamic and Image Tag Settings.
            interface TagSettings {
                // Whether dynamic floodlight tags are enabled.
                dynamicTagEnabled?: boolean;
                // Whether image tags are enabled.
                imageTagEnabled?: boolean;
            }
            // Target Window.
            interface TargetWindow {
                // User-entered value.
                customHtml?: string;
                // Type of browser window for which the backup image of the flash creative can be displayed.
                targetWindowOption?: string;
            }
            // Contains properties of a targetable remarketing list. Remarketing enables you to create lists of users who have
            // performed specific actions on a site, then target ads to members of those lists. This resource is a read-only view of a
            // remarketing list to be used to faciliate targeting ads to specific lists. Remarketing lists that are owned by your
            // advertisers and those that are shared to your advertisers or account are accessible via this resource. To manage
            // remarketing lists that are owned by your advertisers, use the RemarketingLists resource.
            interface TargetableRemarketingList {
                // Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
                accountId?: string;
                // Whether this targetable remarketing list is active.
                active?: boolean;
                // Dimension value for the advertiser ID that owns this targetable remarketing list.
                advertiserId?: string;
                // Dimension value for the ID of the advertiser.
                advertiserIdDimensionValue?: Schema.DimensionValue;
                // Targetable remarketing list description.
                description?: string;
                // Targetable remarketing list ID.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetableRemarketingList".
                kind?: string;
                // Number of days that a user should remain in the targetable remarketing list without an impression.
                lifeSpan?: string;
                // Number of users currently in the list. This is a read-only field.
                listSize?: string;
                // Product from which this targetable remarketing list was originated.
                listSource?: string;
                // Name of the targetable remarketing list. Is no greater than 128 characters long.
                name?: string;
                // Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
                subaccountId?: string;
            }
            // Targetable remarketing list response
            interface TargetableRemarketingListsListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetableRemarketingListsListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
                // Targetable remarketing list collection.
                targetableRemarketingLists?: Schema.TargetableRemarketingList[];
            }
            // Contains properties of a targeting template. A targeting template encapsulates targeting information which can be reused
            // across multiple ads.
            interface TargetingTemplate {
                // Account ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only
                // after insert.
                accountId?: string;
                // Advertiser ID of this targeting template. This is a required field on insert and is read-only after insert.
                advertiserId?: string;
                // Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
                advertiserIdDimensionValue?: Schema.DimensionValue;
                // Time and day targeting criteria.
                dayPartTargeting?: Schema.DayPartTargeting;
                // Geographical targeting criteria.
                geoTargeting?: Schema.GeoTargeting;
                // ID of this targeting template. This is a read-only, auto-generated field.
                id?: string;
                // Key-value targeting criteria.
                keyValueTargetingExpression?: Schema.KeyValueTargetingExpression;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetingTemplate".
                kind?: string;
                // Language targeting criteria.
                languageTargeting?: Schema.LanguageTargeting;
                // Remarketing list targeting criteria.
                listTargetingExpression?: Schema.ListTargetingExpression;
                // Name of this targeting template. This field is required. It must be less than 256 characters long and unique within an
                // advertiser.
                name?: string;
                // Subaccount ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only
                // after insert.
                subaccountId?: string;
                // Technology platform targeting criteria.
                technologyTargeting?: Schema.TechnologyTargeting;
            }
            // Targeting Template List Response
            interface TargetingTemplatesListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetingTemplatesListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
                // Targeting template collection.
                targetingTemplates?: Schema.TargetingTemplate[];
            }
            // Technology Targeting.
            interface TechnologyTargeting {
                // Browsers that this ad targets. For each browser either set browserVersionId or dartId along with the version numbers. If
                // both are specified, only browserVersionId will be used. The other fields are populated automatically when the ad is
                // inserted or updated.
                browsers?: Schema.Browser[];
                // Connection types that this ad targets. For each connection type only id is required. The other fields are populated
                // automatically when the ad is inserted or updated.
                connectionTypes?: Schema.ConnectionType[];
                // Mobile carriers that this ad targets. For each mobile carrier only id is required, and the other fields are populated
                // automatically when the ad is inserted or updated. If targeting a mobile carrier, do not set targeting for any zip codes.
                mobileCarriers?: Schema.MobileCarrier[];
                // Operating system versions that this ad targets. To target all versions, use operatingSystems. For each operating system
                // version, only id is required. The other fields are populated automatically when the ad is inserted or updated. If
                // targeting an operating system version, do not set targeting for the corresponding operating system in operatingSystems.
                operatingSystemVersions?: Schema.OperatingSystemVersion[];
                // Operating systems that this ad targets. To target specific versions, use operatingSystemVersions. For each operating
                // system only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If
                // targeting an operating system, do not set targeting for operating system versions for the same operating system.
                operatingSystems?: Schema.OperatingSystem[];
                // Platform types that this ad targets. For example, desktop, mobile, or tablet. For each platform type, only id is
                // required, and the other fields are populated automatically when the ad is inserted or updated.
                platformTypes?: Schema.PlatformType[];
            }
            // Third Party Authentication Token
            interface ThirdPartyAuthenticationToken {
                // Name of the third-party authentication token.
                name?: string;
                // Value of the third-party authentication token. This is a read-only, auto-generated field.
                value?: string;
            }
            // Third-party Tracking URL.
            interface ThirdPartyTrackingUrl {
                // Third-party URL type for in-stream video and in-stream audio creatives.
                thirdPartyUrlType?: string;
                // URL for the specified third-party URL type.
                url?: string;
            }
            // Transcode Settings
            interface TranscodeSetting {
                // Allowlist of video formats to be served to this placement. Set this list to null or empty to serve all video formats.
                enabledVideoFormats?: Integer[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#transcodeSetting".
                kind?: string;
            }
            // A Universal Ad ID as per the VAST 4.0 spec. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO
            // and VPAID.
            interface UniversalAdId {
                // Registry used for the Ad ID value.
                registry?: string;
                // ID value for this creative. Only alphanumeric characters and the following symbols are valid: "_/\-". Maximum length is
                // 64 characters. Read only when registry is DCM.
                value?: string;
            }
            // User Defined Variable configuration.
            interface UserDefinedVariableConfiguration {
                // Data type for the variable. This is a required field.
                dataType?: string;
                // User-friendly name for the variable which will appear in reports. This is a required field, must be less than 64
                // characters long, and cannot contain the following characters: ""<>".
                reportName?: string;
                // Variable name in the tag. This is a required field.
                variableType?: string;
            }
            // A UserProfile resource lets you list all DFA user profiles that are associated with a Google user account. The
            // profile_id needs to be specified in other API requests.
            interface UserProfile {
                // The account ID to which this profile belongs.
                accountId?: string;
                // The account name this profile belongs to.
                accountName?: string;
                // Etag of this resource.
                etag?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#userProfile".
                kind?: string;
                // The unique ID of the user profile.
                profileId?: string;
                // The sub account ID this profile belongs to if applicable.
                subAccountId?: string;
                // The sub account name this profile belongs to if applicable.
                subAccountName?: string;
                // The user name.
                userName?: string;
            }
            // Represents the list of user profiles.
            interface UserProfileList {
                // Etag of this resource.
                etag?: string;
                // The user profiles returned in this response.
                items?: Schema.UserProfile[];
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#userProfileList".
                kind?: string;
            }
            // Contains properties of auser role, which is used to manage user access.
            interface UserRole {
                // Account ID of this user role. This is a read-only field that can be left blank.
                accountId?: string;
                // Whether this is a default user role. Default user roles are created by the system for the account/subaccount and cannot
                // be modified or deleted. Each default user role comes with a basic set of preassigned permissions.
                defaultUserRole?: boolean;
                // ID of this user role. This is a read-only, auto-generated field.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRole".
                kind?: string;
                // Name of this user role. This is a required field. Must be less than 256 characters long. If this user role is under a
                // subaccount, the name must be unique among sites of the same subaccount. Otherwise, this user role is a top-level user
                // role, and the name must be unique among top-level user roles of the same account.
                name?: string;
                // ID of the user role that this user role is based on or copied from. This is a required field.
                parentUserRoleId?: string;
                // List of permissions associated with this user role.
                permissions?: Schema.UserRolePermission[];
                // Subaccount ID of this user role. This is a read-only field that can be left blank.
                subaccountId?: string;
            }
            // Contains properties of a user role permission.
            interface UserRolePermission {
                // Levels of availability for a user role permission.
                availability?: string;
                // ID of this user role permission.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermission".
                kind?: string;
                // Name of this user role permission.
                name?: string;
                // ID of the permission group that this user role permission belongs to.
                permissionGroupId?: string;
            }
            // Represents a grouping of related user role permissions.
            interface UserRolePermissionGroup {
                // ID of this user role permission.
                id?: string;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionGroup".
                kind?: string;
                // Name of this user role permission group.
                name?: string;
            }
            // User Role Permission Group List Response
            interface UserRolePermissionGroupsListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionGroupsListResponse".
                kind?: string;
                // User role permission group collection.
                userRolePermissionGroups?: Schema.UserRolePermissionGroup[];
            }
            // User Role Permission List Response
            interface UserRolePermissionsListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionsListResponse".
                kind?: string;
                // User role permission collection.
                userRolePermissions?: Schema.UserRolePermission[];
            }
            // User Role List Response
            interface UserRolesListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolesListResponse".
                kind?: string;
                // Pagination token to be used for the next list operation.
                nextPageToken?: string;
                // User role collection.
                userRoles?: Schema.UserRole[];
            }
            // Contains information about supported video formats.
            interface VideoFormat {
                // File type of the video format.
                fileType?: string;
                // ID of the video format.
                id?: Integer;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoFormat".
                kind?: string;
                // The resolution of this video format.
                resolution?: Schema.Size;
                // The target bit rate of this video format.
                targetBitRate?: Integer;
            }
            // Video Format List Response
            interface VideoFormatsListResponse {
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoFormatsListResponse".
                kind?: string;
                // Video format collection.
                videoFormats?: Schema.VideoFormat[];
            }
            // Video Offset
            interface VideoOffset {
                // Duration, as a percentage of video duration. Do not set when offsetSeconds is set. Acceptable values are 0 to 100,
                // inclusive.
                offsetPercentage?: Integer;
                // Duration, in seconds. Do not set when offsetPercentage is set. Acceptable values are 0 to 86399, inclusive.
                offsetSeconds?: Integer;
            }
            // Video Settings
            interface VideoSettings {
                // Settings for the companion creatives of video creatives served to this placement.
                companionSettings?: Schema.CompanionSetting;
                // Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoSettings".
                kind?: string;
                // Whether OBA icons are enabled for this placement.
                obaEnabled?: boolean;
                // Settings for the OBA icon of video creatives served to this placement. If this object is provided, the creative-level
                // OBA settings will be overridden.
                obaSettings?: Schema.ObaIcon;
                // Orientation of a video placement. If this value is set, placement will return assets matching the specified orientation.
                orientation?: string;
                // Settings for the skippability of video creatives served to this placement. If this object is provided, the
                // creative-level skippable settings will be overridden.
                skippableSettings?: Schema.SkippableSetting;
                // Settings for the transcodes of video creatives served to this placement. If this object is provided, the creative-level
                // transcode settings will be overridden.
                transcodeSettings?: Schema.TranscodeSetting;
            }
        }
    }
    // Manage your DoubleClick Campaign Manager ad campaigns and reports.
    interface DoubleClickCampaigns {
        AccountActiveAdSummaries?: DoubleClickCampaigns.Collection.AccountActiveAdSummariesCollection;
        AccountPermissionGroups?: DoubleClickCampaigns.Collection.AccountPermissionGroupsCollection;
        AccountPermissions?: DoubleClickCampaigns.Collection.AccountPermissionsCollection;
        AccountUserProfiles?: DoubleClickCampaigns.Collection.AccountUserProfilesCollection;
        Accounts?: DoubleClickCampaigns.Collection.AccountsCollection;
        Ads?: DoubleClickCampaigns.Collection.AdsCollection;
        AdvertiserGroups?: DoubleClickCampaigns.Collection.AdvertiserGroupsCollection;
        AdvertiserLandingPages?: DoubleClickCampaigns.Collection.AdvertiserLandingPagesCollection;
        Advertisers?: DoubleClickCampaigns.Collection.AdvertisersCollection;
        Browsers?: DoubleClickCampaigns.Collection.BrowsersCollection;
        CampaignCreativeAssociations?: DoubleClickCampaigns.Collection.CampaignCreativeAssociationsCollection;
        Campaigns?: DoubleClickCampaigns.Collection.CampaignsCollection;
        ChangeLogs?: DoubleClickCampaigns.Collection.ChangeLogsCollection;
        Cities?: DoubleClickCampaigns.Collection.CitiesCollection;
        ConnectionTypes?: DoubleClickCampaigns.Collection.ConnectionTypesCollection;
        ContentCategories?: DoubleClickCampaigns.Collection.ContentCategoriesCollection;
        Conversions?: DoubleClickCampaigns.Collection.ConversionsCollection;
        Countries?: DoubleClickCampaigns.Collection.CountriesCollection;
        CreativeAssets?: DoubleClickCampaigns.Collection.CreativeAssetsCollection;
        CreativeFieldValues?: DoubleClickCampaigns.Collection.CreativeFieldValuesCollection;
        CreativeFields?: DoubleClickCampaigns.Collection.CreativeFieldsCollection;
        CreativeGroups?: DoubleClickCampaigns.Collection.CreativeGroupsCollection;
        Creatives?: DoubleClickCampaigns.Collection.CreativesCollection;
        CustomEvents?: DoubleClickCampaigns.Collection.CustomEventsCollection;
        DimensionValues?: DoubleClickCampaigns.Collection.DimensionValuesCollection;
        DirectorySites?: DoubleClickCampaigns.Collection.DirectorySitesCollection;
        DynamicTargetingKeys?: DoubleClickCampaigns.Collection.DynamicTargetingKeysCollection;
        EventTags?: DoubleClickCampaigns.Collection.EventTagsCollection;
        Files?: DoubleClickCampaigns.Collection.FilesCollection;
        FloodlightActivities?: DoubleClickCampaigns.Collection.FloodlightActivitiesCollection;
        FloodlightActivityGroups?: DoubleClickCampaigns.Collection.FloodlightActivityGroupsCollection;
        FloodlightConfigurations?: DoubleClickCampaigns.Collection.FloodlightConfigurationsCollection;
        InventoryItems?: DoubleClickCampaigns.Collection.InventoryItemsCollection;
        Languages?: DoubleClickCampaigns.Collection.LanguagesCollection;
        Metros?: DoubleClickCampaigns.Collection.MetrosCollection;
        MobileApps?: DoubleClickCampaigns.Collection.MobileAppsCollection;
        MobileCarriers?: DoubleClickCampaigns.Collection.MobileCarriersCollection;
        OperatingSystemVersions?: DoubleClickCampaigns.Collection.OperatingSystemVersionsCollection;
        OperatingSystems?: DoubleClickCampaigns.Collection.OperatingSystemsCollection;
        OrderDocuments?: DoubleClickCampaigns.Collection.OrderDocumentsCollection;
        Orders?: DoubleClickCampaigns.Collection.OrdersCollection;
        PlacementGroups?: DoubleClickCampaigns.Collection.PlacementGroupsCollection;
        PlacementStrategies?: DoubleClickCampaigns.Collection.PlacementStrategiesCollection;
        Placements?: DoubleClickCampaigns.Collection.PlacementsCollection;
        PlatformTypes?: DoubleClickCampaigns.Collection.PlatformTypesCollection;
        PostalCodes?: DoubleClickCampaigns.Collection.PostalCodesCollection;
        Projects?: DoubleClickCampaigns.Collection.ProjectsCollection;
        Regions?: DoubleClickCampaigns.Collection.RegionsCollection;
        RemarketingListShares?: DoubleClickCampaigns.Collection.RemarketingListSharesCollection;
        RemarketingLists?: DoubleClickCampaigns.Collection.RemarketingListsCollection;
        Reports?: DoubleClickCampaigns.Collection.ReportsCollection;
        Sites?: DoubleClickCampaigns.Collection.SitesCollection;
        Sizes?: DoubleClickCampaigns.Collection.SizesCollection;
        Subaccounts?: DoubleClickCampaigns.Collection.SubaccountsCollection;
        TargetableRemarketingLists?: DoubleClickCampaigns.Collection.TargetableRemarketingListsCollection;
        TargetingTemplates?: DoubleClickCampaigns.Collection.TargetingTemplatesCollection;
        UserProfiles?: DoubleClickCampaigns.Collection.UserProfilesCollection;
        UserRolePermissionGroups?: DoubleClickCampaigns.Collection.UserRolePermissionGroupsCollection;
        UserRolePermissions?: DoubleClickCampaigns.Collection.UserRolePermissionsCollection;
        UserRoles?: DoubleClickCampaigns.Collection.UserRolesCollection;
        VideoFormats?: DoubleClickCampaigns.Collection.VideoFormatsCollection;
        // Create a new instance of Account
        newAccount(): DoubleClickCampaigns.Schema.Account;
        // Create a new instance of AccountUserProfile
        newAccountUserProfile(): DoubleClickCampaigns.Schema.AccountUserProfile;
        // Create a new instance of Activities
        newActivities(): DoubleClickCampaigns.Schema.Activities;
        // Create a new instance of Ad
        newAd(): DoubleClickCampaigns.Schema.Ad;
        // Create a new instance of AdBlockingConfiguration
        newAdBlockingConfiguration(): DoubleClickCampaigns.Schema.AdBlockingConfiguration;
        // Create a new instance of Advertiser
        newAdvertiser(): DoubleClickCampaigns.Schema.Advertiser;
        // Create a new instance of AdvertiserGroup
        newAdvertiserGroup(): DoubleClickCampaigns.Schema.AdvertiserGroup;
        // Create a new instance of AudienceSegment
        newAudienceSegment(): DoubleClickCampaigns.Schema.AudienceSegment;
        // Create a new instance of AudienceSegmentGroup
        newAudienceSegmentGroup(): DoubleClickCampaigns.Schema.AudienceSegmentGroup;
        // Create a new instance of Browser
        newBrowser(): DoubleClickCampaigns.Schema.Browser;
        // Create a new instance of Campaign
        newCampaign(): DoubleClickCampaigns.Schema.Campaign;
        // Create a new instance of CampaignCreativeAssociation
        newCampaignCreativeAssociation(): DoubleClickCampaigns.Schema.CampaignCreativeAssociation;
        // Create a new instance of CampaignManagerIds
        newCampaignManagerIds(): DoubleClickCampaigns.Schema.CampaignManagerIds;
        // Create a new instance of ChannelGrouping
        newChannelGrouping(): DoubleClickCampaigns.Schema.ChannelGrouping;
        // Create a new instance of ChannelGroupingRule
        newChannelGroupingRule(): DoubleClickCampaigns.Schema.ChannelGroupingRule;
        // Create a new instance of City
        newCity(): DoubleClickCampaigns.Schema.City;
        // Create a new instance of ClickTag
        newClickTag(): DoubleClickCampaigns.Schema.ClickTag;
        // Create a new instance of ClickThroughUrl
        newClickThroughUrl(): DoubleClickCampaigns.Schema.ClickThroughUrl;
        // Create a new instance of ClickThroughUrlSuffixProperties
        newClickThroughUrlSuffixProperties(): DoubleClickCampaigns.Schema.ClickThroughUrlSuffixProperties;
        // Create a new instance of CompanionClickThroughOverride
        newCompanionClickThroughOverride(): DoubleClickCampaigns.Schema.CompanionClickThroughOverride;
        // Create a new instance of CompanionSetting
        newCompanionSetting(): DoubleClickCampaigns.Schema.CompanionSetting;
        // Create a new instance of ConnectionType
        newConnectionType(): DoubleClickCampaigns.Schema.ConnectionType;
        // Create a new instance of ContentCategory
        newContentCategory(): DoubleClickCampaigns.Schema.ContentCategory;
        // Create a new instance of Conversion
        newConversion(): DoubleClickCampaigns.Schema.Conversion;
        // Create a new instance of ConversionsBatchInsertRequest
        newConversionsBatchInsertRequest(): DoubleClickCampaigns.Schema.ConversionsBatchInsertRequest;
        // Create a new instance of ConversionsBatchUpdateRequest
        newConversionsBatchUpdateRequest(): DoubleClickCampaigns.Schema.ConversionsBatchUpdateRequest;
        // Create a new instance of Country
        newCountry(): DoubleClickCampaigns.Schema.Country;
        // Create a new instance of Creative
        newCreative(): DoubleClickCampaigns.Schema.Creative;
        // Create a new instance of CreativeAsset
        newCreativeAsset(): DoubleClickCampaigns.Schema.CreativeAsset;
        // Create a new instance of CreativeAssetId
        newCreativeAssetId(): DoubleClickCampaigns.Schema.CreativeAssetId;
        // Create a new instance of CreativeAssetMetadata
        newCreativeAssetMetadata(): DoubleClickCampaigns.Schema.CreativeAssetMetadata;
        // Create a new instance of CreativeAssetSelection
        newCreativeAssetSelection(): DoubleClickCampaigns.Schema.CreativeAssetSelection;
        // Create a new instance of CreativeAssignment
        newCreativeAssignment(): DoubleClickCampaigns.Schema.CreativeAssignment;
        // Create a new instance of CreativeClickThroughUrl
        newCreativeClickThroughUrl(): DoubleClickCampaigns.Schema.CreativeClickThroughUrl;
        // Create a new instance of CreativeCustomEvent
        newCreativeCustomEvent(): DoubleClickCampaigns.Schema.CreativeCustomEvent;
        // Create a new instance of CreativeField
        newCreativeField(): DoubleClickCampaigns.Schema.CreativeField;
        // Create a new instance of CreativeFieldAssignment
        newCreativeFieldAssignment(): DoubleClickCampaigns.Schema.CreativeFieldAssignment;
        // Create a new instance of CreativeFieldValue
        newCreativeFieldValue(): DoubleClickCampaigns.Schema.CreativeFieldValue;
        // Create a new instance of CreativeGroup
        newCreativeGroup(): DoubleClickCampaigns.Schema.CreativeGroup;
        // Create a new instance of CreativeGroupAssignment
        newCreativeGroupAssignment(): DoubleClickCampaigns.Schema.CreativeGroupAssignment;
        // Create a new instance of CreativeOptimizationConfiguration
        newCreativeOptimizationConfiguration(): DoubleClickCampaigns.Schema.CreativeOptimizationConfiguration;
        // Create a new instance of CreativeRotation
        newCreativeRotation(): DoubleClickCampaigns.Schema.CreativeRotation;
        // Create a new instance of CustomEvent
        newCustomEvent(): DoubleClickCampaigns.Schema.CustomEvent;
        // Create a new instance of CustomEventClickAnnotation
        newCustomEventClickAnnotation(): DoubleClickCampaigns.Schema.CustomEventClickAnnotation;
        // Create a new instance of CustomEventImpressionAnnotation
        newCustomEventImpressionAnnotation(): DoubleClickCampaigns.Schema.CustomEventImpressionAnnotation;
        // Create a new instance of CustomEventInsert
        newCustomEventInsert(): DoubleClickCampaigns.Schema.CustomEventInsert;
        // Create a new instance of CustomEventsBatchInsertRequest
        newCustomEventsBatchInsertRequest(): DoubleClickCampaigns.Schema.CustomEventsBatchInsertRequest;
        // Create a new instance of CustomFloodlightVariable
        newCustomFloodlightVariable(): DoubleClickCampaigns.Schema.CustomFloodlightVariable;
        // Create a new instance of CustomRichMediaEvents
        newCustomRichMediaEvents(): DoubleClickCampaigns.Schema.CustomRichMediaEvents;
        // Create a new instance of CustomVariable
        newCustomVariable(): DoubleClickCampaigns.Schema.CustomVariable;
        // Create a new instance of CustomViewabilityMetric
        newCustomViewabilityMetric(): DoubleClickCampaigns.Schema.CustomViewabilityMetric;
        // Create a new instance of CustomViewabilityMetricConfiguration
        newCustomViewabilityMetricConfiguration(): DoubleClickCampaigns.Schema.CustomViewabilityMetricConfiguration;
        // Create a new instance of DV3Ids
        newDV3Ids(): DoubleClickCampaigns.Schema.DV3Ids;
        // Create a new instance of DateRange
        newDateRange(): DoubleClickCampaigns.Schema.DateRange;
        // Create a new instance of DayPartTargeting
        newDayPartTargeting(): DoubleClickCampaigns.Schema.DayPartTargeting;
        // Create a new instance of DeepLink
        newDeepLink(): DoubleClickCampaigns.Schema.DeepLink;
        // Create a new instance of DefaultClickThroughEventTagProperties
        newDefaultClickThroughEventTagProperties(): DoubleClickCampaigns.Schema.DefaultClickThroughEventTagProperties;
        // Create a new instance of DeliverySchedule
        newDeliverySchedule(): DoubleClickCampaigns.Schema.DeliverySchedule;
        // Create a new instance of DfpSettings
        newDfpSettings(): DoubleClickCampaigns.Schema.DfpSettings;
        // Create a new instance of DimensionFilter
        newDimensionFilter(): DoubleClickCampaigns.Schema.DimensionFilter;
        // Create a new instance of DimensionValue
        newDimensionValue(): DoubleClickCampaigns.Schema.DimensionValue;
        // Create a new instance of DimensionValueRequest
        newDimensionValueRequest(): DoubleClickCampaigns.Schema.DimensionValueRequest;
        // Create a new instance of DirectorySite
        newDirectorySite(): DoubleClickCampaigns.Schema.DirectorySite;
        // Create a new instance of DirectorySiteSettings
        newDirectorySiteSettings(): DoubleClickCampaigns.Schema.DirectorySiteSettings;
        // Create a new instance of DisjunctiveMatchStatement
        newDisjunctiveMatchStatement(): DoubleClickCampaigns.Schema.DisjunctiveMatchStatement;
        // Create a new instance of DynamicTargetingKey
        newDynamicTargetingKey(): DoubleClickCampaigns.Schema.DynamicTargetingKey;
        // Create a new instance of EncryptionInfo
        newEncryptionInfo(): DoubleClickCampaigns.Schema.EncryptionInfo;
        // Create a new instance of EventFilter
        newEventFilter(): DoubleClickCampaigns.Schema.EventFilter;
        // Create a new instance of EventTag
        newEventTag(): DoubleClickCampaigns.Schema.EventTag;
        // Create a new instance of EventTagOverride
        newEventTagOverride(): DoubleClickCampaigns.Schema.EventTagOverride;
        // Create a new instance of FloodlightActivity
        newFloodlightActivity(): DoubleClickCampaigns.Schema.FloodlightActivity;
        // Create a new instance of FloodlightActivityDynamicTag
        newFloodlightActivityDynamicTag(): DoubleClickCampaigns.Schema.FloodlightActivityDynamicTag;
        // Create a new instance of FloodlightActivityGroup
        newFloodlightActivityGroup(): DoubleClickCampaigns.Schema.FloodlightActivityGroup;
        // Create a new instance of FloodlightActivityPublisherDynamicTag
        newFloodlightActivityPublisherDynamicTag(): DoubleClickCampaigns.Schema.FloodlightActivityPublisherDynamicTag;
        // Create a new instance of FloodlightConfiguration
        newFloodlightConfiguration(): DoubleClickCampaigns.Schema.FloodlightConfiguration;
        // Create a new instance of FrequencyCap
        newFrequencyCap(): DoubleClickCampaigns.Schema.FrequencyCap;
        // Create a new instance of FsCommand
        newFsCommand(): DoubleClickCampaigns.Schema.FsCommand;
        // Create a new instance of GeoTargeting
        newGeoTargeting(): DoubleClickCampaigns.Schema.GeoTargeting;
        // Create a new instance of KeyValueTargetingExpression
        newKeyValueTargetingExpression(): DoubleClickCampaigns.Schema.KeyValueTargetingExpression;
        // Create a new instance of LandingPage
        newLandingPage(): DoubleClickCampaigns.Schema.LandingPage;
        // Create a new instance of Language
        newLanguage(): DoubleClickCampaigns.Schema.Language;
        // Create a new instance of LanguageTargeting
        newLanguageTargeting(): DoubleClickCampaigns.Schema.LanguageTargeting;
        // Create a new instance of LastModifiedInfo
        newLastModifiedInfo(): DoubleClickCampaigns.Schema.LastModifiedInfo;
        // Create a new instance of ListPopulationClause
        newListPopulationClause(): DoubleClickCampaigns.Schema.ListPopulationClause;
        // Create a new instance of ListPopulationRule
        newListPopulationRule(): DoubleClickCampaigns.Schema.ListPopulationRule;
        // Create a new instance of ListPopulationTerm
        newListPopulationTerm(): DoubleClickCampaigns.Schema.ListPopulationTerm;
        // Create a new instance of ListTargetingExpression
        newListTargetingExpression(): DoubleClickCampaigns.Schema.ListTargetingExpression;
        // Create a new instance of LookbackConfiguration
        newLookbackConfiguration(): DoubleClickCampaigns.Schema.LookbackConfiguration;
        // Create a new instance of Metro
        newMetro(): DoubleClickCampaigns.Schema.Metro;
        // Create a new instance of MobileApp
        newMobileApp(): DoubleClickCampaigns.Schema.MobileApp;
        // Create a new instance of MobileCarrier
        newMobileCarrier(): DoubleClickCampaigns.Schema.MobileCarrier;
        // Create a new instance of ObaIcon
        newObaIcon(): DoubleClickCampaigns.Schema.ObaIcon;
        // Create a new instance of ObjectFilter
        newObjectFilter(): DoubleClickCampaigns.Schema.ObjectFilter;
        // Create a new instance of OffsetPosition
        newOffsetPosition(): DoubleClickCampaigns.Schema.OffsetPosition;
        // Create a new instance of OmnitureSettings
        newOmnitureSettings(): DoubleClickCampaigns.Schema.OmnitureSettings;
        // Create a new instance of OperatingSystem
        newOperatingSystem(): DoubleClickCampaigns.Schema.OperatingSystem;
        // Create a new instance of OperatingSystemVersion
        newOperatingSystemVersion(): DoubleClickCampaigns.Schema.OperatingSystemVersion;
        // Create a new instance of OptimizationActivity
        newOptimizationActivity(): DoubleClickCampaigns.Schema.OptimizationActivity;
        // Create a new instance of PathFilter
        newPathFilter(): DoubleClickCampaigns.Schema.PathFilter;
        // Create a new instance of PathReportDimensionValue
        newPathReportDimensionValue(): DoubleClickCampaigns.Schema.PathReportDimensionValue;
        // Create a new instance of Placement
        newPlacement(): DoubleClickCampaigns.Schema.Placement;
        // Create a new instance of PlacementAssignment
        newPlacementAssignment(): DoubleClickCampaigns.Schema.PlacementAssignment;
        // Create a new instance of PlacementGroup
        newPlacementGroup(): DoubleClickCampaigns.Schema.PlacementGroup;
        // Create a new instance of PlacementStrategy
        newPlacementStrategy(): DoubleClickCampaigns.Schema.PlacementStrategy;
        // Create a new instance of PlatformType
        newPlatformType(): DoubleClickCampaigns.Schema.PlatformType;
        // Create a new instance of PopupWindowProperties
        newPopupWindowProperties(): DoubleClickCampaigns.Schema.PopupWindowProperties;
        // Create a new instance of PostalCode
        newPostalCode(): DoubleClickCampaigns.Schema.PostalCode;
        // Create a new instance of PricingSchedule
        newPricingSchedule(): DoubleClickCampaigns.Schema.PricingSchedule;
        // Create a new instance of PricingSchedulePricingPeriod
        newPricingSchedulePricingPeriod(): DoubleClickCampaigns.Schema.PricingSchedulePricingPeriod;
        // Create a new instance of Recipient
        newRecipient(): DoubleClickCampaigns.Schema.Recipient;
        // Create a new instance of Region
        newRegion(): DoubleClickCampaigns.Schema.Region;
        // Create a new instance of RemarketingList
        newRemarketingList(): DoubleClickCampaigns.Schema.RemarketingList;
        // Create a new instance of RemarketingListShare
        newRemarketingListShare(): DoubleClickCampaigns.Schema.RemarketingListShare;
        // Create a new instance of Report
        newReport(): DoubleClickCampaigns.Schema.Report;
        // Create a new instance of ReportCriteria
        newReportCriteria(): DoubleClickCampaigns.Schema.ReportCriteria;
        // Create a new instance of ReportCrossDimensionReachCriteria
        newReportCrossDimensionReachCriteria(): DoubleClickCampaigns.Schema.ReportCrossDimensionReachCriteria;
        // Create a new instance of ReportDelivery
        newReportDelivery(): DoubleClickCampaigns.Schema.ReportDelivery;
        // Create a new instance of ReportFloodlightCriteria
        newReportFloodlightCriteria(): DoubleClickCampaigns.Schema.ReportFloodlightCriteria;
        // Create a new instance of ReportFloodlightCriteriaReportProperties
        newReportFloodlightCriteriaReportProperties(): DoubleClickCampaigns.Schema.ReportFloodlightCriteriaReportProperties;
        // Create a new instance of ReportPathAttributionCriteria
        newReportPathAttributionCriteria(): DoubleClickCampaigns.Schema.ReportPathAttributionCriteria;
        // Create a new instance of ReportPathCriteria
        newReportPathCriteria(): DoubleClickCampaigns.Schema.ReportPathCriteria;
        // Create a new instance of ReportPathToConversionCriteria
        newReportPathToConversionCriteria(): DoubleClickCampaigns.Schema.ReportPathToConversionCriteria;
        // Create a new instance of ReportPathToConversionCriteriaReportProperties
        newReportPathToConversionCriteriaReportProperties(): DoubleClickCampaigns.Schema.ReportPathToConversionCriteriaReportProperties;
        // Create a new instance of ReportReachCriteria
        newReportReachCriteria(): DoubleClickCampaigns.Schema.ReportReachCriteria;
        // Create a new instance of ReportSchedule
        newReportSchedule(): DoubleClickCampaigns.Schema.ReportSchedule;
        // Create a new instance of ReportsConfiguration
        newReportsConfiguration(): DoubleClickCampaigns.Schema.ReportsConfiguration;
        // Create a new instance of RichMediaExitOverride
        newRichMediaExitOverride(): DoubleClickCampaigns.Schema.RichMediaExitOverride;
        // Create a new instance of Rule
        newRule(): DoubleClickCampaigns.Schema.Rule;
        // Create a new instance of Site
        newSite(): DoubleClickCampaigns.Schema.Site;
        // Create a new instance of SiteCompanionSetting
        newSiteCompanionSetting(): DoubleClickCampaigns.Schema.SiteCompanionSetting;
        // Create a new instance of SiteContact
        newSiteContact(): DoubleClickCampaigns.Schema.SiteContact;
        // Create a new instance of SiteSettings
        newSiteSettings(): DoubleClickCampaigns.Schema.SiteSettings;
        // Create a new instance of SiteSkippableSetting
        newSiteSkippableSetting(): DoubleClickCampaigns.Schema.SiteSkippableSetting;
        // Create a new instance of SiteTranscodeSetting
        newSiteTranscodeSetting(): DoubleClickCampaigns.Schema.SiteTranscodeSetting;
        // Create a new instance of SiteVideoSettings
        newSiteVideoSettings(): DoubleClickCampaigns.Schema.SiteVideoSettings;
        // Create a new instance of Size
        newSize(): DoubleClickCampaigns.Schema.Size;
        // Create a new instance of SkippableSetting
        newSkippableSetting(): DoubleClickCampaigns.Schema.SkippableSetting;
        // Create a new instance of SortedDimension
        newSortedDimension(): DoubleClickCampaigns.Schema.SortedDimension;
        // Create a new instance of Subaccount
        newSubaccount(): DoubleClickCampaigns.Schema.Subaccount;
        // Create a new instance of TagSetting
        newTagSetting(): DoubleClickCampaigns.Schema.TagSetting;
        // Create a new instance of TagSettings
        newTagSettings(): DoubleClickCampaigns.Schema.TagSettings;
        // Create a new instance of TargetWindow
        newTargetWindow(): DoubleClickCampaigns.Schema.TargetWindow;
        // Create a new instance of TargetingTemplate
        newTargetingTemplate(): DoubleClickCampaigns.Schema.TargetingTemplate;
        // Create a new instance of TechnologyTargeting
        newTechnologyTargeting(): DoubleClickCampaigns.Schema.TechnologyTargeting;
        // Create a new instance of ThirdPartyAuthenticationToken
        newThirdPartyAuthenticationToken(): DoubleClickCampaigns.Schema.ThirdPartyAuthenticationToken;
        // Create a new instance of ThirdPartyTrackingUrl
        newThirdPartyTrackingUrl(): DoubleClickCampaigns.Schema.ThirdPartyTrackingUrl;
        // Create a new instance of TranscodeSetting
        newTranscodeSetting(): DoubleClickCampaigns.Schema.TranscodeSetting;
        // Create a new instance of UniversalAdId
        newUniversalAdId(): DoubleClickCampaigns.Schema.UniversalAdId;
        // Create a new instance of UserDefinedVariableConfiguration
        newUserDefinedVariableConfiguration(): DoubleClickCampaigns.Schema.UserDefinedVariableConfiguration;
        // Create a new instance of UserRole
        newUserRole(): DoubleClickCampaigns.Schema.UserRole;
        // Create a new instance of UserRolePermission
        newUserRolePermission(): DoubleClickCampaigns.Schema.UserRolePermission;
        // Create a new instance of VideoOffset
        newVideoOffset(): DoubleClickCampaigns.Schema.VideoOffset;
        // Create a new instance of VideoSettings
        newVideoSettings(): DoubleClickCampaigns.Schema.VideoSettings;
    }
}
declare const DoubleClickCampaigns: GoogleAppsScript.DoubleClickCampaigns;
