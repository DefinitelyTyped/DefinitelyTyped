// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Dfareporting {
    namespace Collection {
      namespace Reports {
        export interface CompatibleFieldsCollection {
          // Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.
          query(resource: Schema.Report, profileId: string): Dfareporting.Schema.CompatibleFields;
        }
        export interface FilesCollection {
          // Retrieves a report file. This method supports media download.
          get(profileId: string, reportId: string, fileId: string): Dfareporting.Schema.File;
          // Lists files for a report.
          list(profileId: string, reportId: string): Dfareporting.Schema.FileList;
          // Lists files for a report.
          list(profileId: string, reportId: string, optionalArgs: object): Dfareporting.Schema.FileList;
        }
      }
      export interface AccountActiveAdSummariesCollection {
        // Gets the account's active ad summary by account ID.
        get(profileId: string, summaryAccountId: string): Dfareporting.Schema.AccountActiveAdSummary;
      }
      export interface AccountPermissionGroupsCollection {
        // Gets one account permission group by ID.
        get(profileId: string, id: string): Dfareporting.Schema.AccountPermissionGroup;
        // Retrieves the list of account permission groups.
        list(profileId: string): Dfareporting.Schema.AccountPermissionGroupsListResponse;
      }
      export interface AccountPermissionsCollection {
        // Gets one account permission by ID.
        get(profileId: string, id: string): Dfareporting.Schema.AccountPermission;
        // Retrieves the list of account permissions.
        list(profileId: string): Dfareporting.Schema.AccountPermissionsListResponse;
      }
      export interface AccountUserProfilesCollection {
        // Gets one account user profile by ID.
        get(profileId: string, id: string): Dfareporting.Schema.AccountUserProfile;
        // Inserts a new account user profile.
        insert(resource: Schema.AccountUserProfile, profileId: string): Dfareporting.Schema.AccountUserProfile;
        // Retrieves a list of account user profiles, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting.Schema.AccountUserProfilesListResponse;
        // Retrieves a list of account user profiles, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting.Schema.AccountUserProfilesListResponse;
        // Updates an existing account user profile. This method supports patch semantics.
        patch(resource: Schema.AccountUserProfile, profileId: string, id: string): Dfareporting.Schema.AccountUserProfile;
        // Updates an existing account user profile.
        update(resource: Schema.AccountUserProfile, profileId: string): Dfareporting.Schema.AccountUserProfile;
      }
      export interface AccountsCollection {
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
      export interface AdsCollection {
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
      export interface AdvertiserGroupsCollection {
        // Gets one advertiser group by ID.
        get(profileId: string, id: string): Dfareporting.Schema.AdvertiserGroup;
        // Inserts a new advertiser group.
        insert(resource: Schema.AdvertiserGroup, profileId: string): Dfareporting.Schema.AdvertiserGroup;
        // Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting.Schema.AdvertiserGroupsListResponse;
        // Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting.Schema.AdvertiserGroupsListResponse;
        // Updates an existing advertiser group. This method supports patch semantics.
        patch(resource: Schema.AdvertiserGroup, profileId: string, id: string): Dfareporting.Schema.AdvertiserGroup;
        // Deletes an existing advertiser group.
        remove(profileId: string, id: string): void;
        // Updates an existing advertiser group.
        update(resource: Schema.AdvertiserGroup, profileId: string): Dfareporting.Schema.AdvertiserGroup;
      }
      export interface AdvertiserLandingPagesCollection {
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
      export interface AdvertisersCollection {
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
      export interface BrowsersCollection {
        // Retrieves a list of browsers.
        list(profileId: string): Dfareporting.Schema.BrowsersListResponse;
      }
      export interface CampaignCreativeAssociationsCollection {
        // Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.
        insert(resource: Schema.CampaignCreativeAssociation, profileId: string, campaignId: string): Dfareporting.Schema.CampaignCreativeAssociation;
        // Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.
        list(profileId: string, campaignId: string): Dfareporting.Schema.CampaignCreativeAssociationsListResponse;
        // Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.
        list(profileId: string, campaignId: string, optionalArgs: object): Dfareporting.Schema.CampaignCreativeAssociationsListResponse;
      }
      export interface CampaignsCollection {
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
      export interface ChangeLogsCollection {
        // Gets one change log by ID.
        get(profileId: string, id: string): Dfareporting.Schema.ChangeLog;
        // Retrieves a list of change logs. This method supports paging.
        list(profileId: string): Dfareporting.Schema.ChangeLogsListResponse;
        // Retrieves a list of change logs. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting.Schema.ChangeLogsListResponse;
      }
      export interface CitiesCollection {
        // Retrieves a list of cities, possibly filtered.
        list(profileId: string): Dfareporting.Schema.CitiesListResponse;
        // Retrieves a list of cities, possibly filtered.
        list(profileId: string, optionalArgs: object): Dfareporting.Schema.CitiesListResponse;
      }
      export interface ConnectionTypesCollection {
        // Gets one connection type by ID.
        get(profileId: string, id: string): Dfareporting.Schema.ConnectionType;
        // Retrieves a list of connection types.
        list(profileId: string): Dfareporting.Schema.ConnectionTypesListResponse;
      }
      export interface ContentCategoriesCollection {
        // Gets one content category by ID.
        get(profileId: string, id: string): Dfareporting.Schema.ContentCategory;
        // Inserts a new content category.
        insert(resource: Schema.ContentCategory, profileId: string): Dfareporting.Schema.ContentCategory;
        // Retrieves a list of content categories, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting.Schema.ContentCategoriesListResponse;
        // Retrieves a list of content categories, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting.Schema.ContentCategoriesListResponse;
        // Updates an existing content category. This method supports patch semantics.
        patch(resource: Schema.ContentCategory, profileId: string, id: string): Dfareporting.Schema.ContentCategory;
        // Deletes an existing content category.
        remove(profileId: string, id: string): void;
        // Updates an existing content category.
        update(resource: Schema.ContentCategory, profileId: string): Dfareporting.Schema.ContentCategory;
      }
      export interface ConversionsCollection {
        // Inserts conversions.
        batchinsert(resource: Schema.ConversionsBatchInsertRequest, profileId: string): Dfareporting.Schema.ConversionsBatchInsertResponse;
        // Updates existing conversions.
        batchupdate(resource: Schema.ConversionsBatchUpdateRequest, profileId: string): Dfareporting.Schema.ConversionsBatchUpdateResponse;
      }
      export interface CountriesCollection {
        // Gets one country by ID.
        get(profileId: string, dartId: string): Dfareporting.Schema.Country;
        // Retrieves a list of countries.
        list(profileId: string): Dfareporting.Schema.CountriesListResponse;
      }
      export interface CreativeAssetsCollection {
        // Inserts a new creative asset.
        insert(resource: Schema.CreativeAssetMetadata, profileId: string, advertiserId: string): Dfareporting.Schema.CreativeAssetMetadata;
        // Inserts a new creative asset.
        insert(resource: Schema.CreativeAssetMetadata, profileId: string, advertiserId: string, mediaData: any): Dfareporting.Schema.CreativeAssetMetadata;
      }
      export interface CreativeFieldValuesCollection {
        // Gets one creative field value by ID.
        get(profileId: string, creativeFieldId: string, id: string): Dfareporting.Schema.CreativeFieldValue;
        // Inserts a new creative field value.
        insert(resource: Schema.CreativeFieldValue, profileId: string, creativeFieldId: string): Dfareporting.Schema.CreativeFieldValue;
        // Retrieves a list of creative field values, possibly filtered. This method supports paging.
        list(profileId: string, creativeFieldId: string): Dfareporting.Schema.CreativeFieldValuesListResponse;
        // Retrieves a list of creative field values, possibly filtered. This method supports paging.
        list(profileId: string, creativeFieldId: string, optionalArgs: object): Dfareporting.Schema.CreativeFieldValuesListResponse;
        // Updates an existing creative field value. This method supports patch semantics.
        patch(resource: Schema.CreativeFieldValue, profileId: string, creativeFieldId: string, id: string): Dfareporting.Schema.CreativeFieldValue;
        // Deletes an existing creative field value.
        remove(profileId: string, creativeFieldId: string, id: string): void;
        // Updates an existing creative field value.
        update(resource: Schema.CreativeFieldValue, profileId: string, creativeFieldId: string): Dfareporting.Schema.CreativeFieldValue;
      }
      export interface CreativeFieldsCollection {
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
      export interface CreativeGroupsCollection {
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
      export interface CreativesCollection {
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
      export interface DimensionValuesCollection {
        // Retrieves list of report dimension values for a list of filters.
        query(resource: Schema.DimensionValueRequest, profileId: string): Dfareporting.Schema.DimensionValueList;
        // Retrieves list of report dimension values for a list of filters.
        query(resource: Schema.DimensionValueRequest, profileId: string, optionalArgs: object): Dfareporting.Schema.DimensionValueList;
      }
      export interface DirectorySitesCollection {
        // Gets one directory site by ID.
        get(profileId: string, id: string): Dfareporting.Schema.DirectorySite;
        // Inserts a new directory site.
        insert(resource: Schema.DirectorySite, profileId: string): Dfareporting.Schema.DirectorySite;
        // Retrieves a list of directory sites, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting.Schema.DirectorySitesListResponse;
        // Retrieves a list of directory sites, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting.Schema.DirectorySitesListResponse;
      }
      export interface DynamicTargetingKeysCollection {
        // Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.
        insert(resource: Schema.DynamicTargetingKey, profileId: string): Dfareporting.Schema.DynamicTargetingKey;
        // Retrieves a list of dynamic targeting keys.
        list(profileId: string): Dfareporting.Schema.DynamicTargetingKeysListResponse;
        // Retrieves a list of dynamic targeting keys.
        list(profileId: string, optionalArgs: object): Dfareporting.Schema.DynamicTargetingKeysListResponse;
        // Deletes an existing dynamic targeting key.
        remove(profileId: string, objectId: string, name: string, objectType: string): void;
      }
      export interface EventTagsCollection {
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
      export interface FilesCollection {
        // Retrieves a report file by its report ID and file ID. This method supports media download.
        get(reportId: string, fileId: string): Dfareporting.Schema.File;
        // Lists files for a user profile.
        list(profileId: string): Dfareporting.Schema.FileList;
        // Lists files for a user profile.
        list(profileId: string, optionalArgs: object): Dfareporting.Schema.FileList;
      }
      export interface FloodlightActivitiesCollection {
        // Generates a tag for a floodlight activity.
        generatetag(profileId: string): Dfareporting.Schema.FloodlightActivitiesGenerateTagResponse;
        // Generates a tag for a floodlight activity.
        generatetag(profileId: string, optionalArgs: object): Dfareporting.Schema.FloodlightActivitiesGenerateTagResponse;
        // Gets one floodlight activity by ID.
        get(profileId: string, id: string): Dfareporting.Schema.FloodlightActivity;
        // Inserts a new floodlight activity.
        insert(resource: Schema.FloodlightActivity, profileId: string): Dfareporting.Schema.FloodlightActivity;
        // Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting.Schema.FloodlightActivitiesListResponse;
        // Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting.Schema.FloodlightActivitiesListResponse;
        // Updates an existing floodlight activity. This method supports patch semantics.
        patch(resource: Schema.FloodlightActivity, profileId: string, id: string): Dfareporting.Schema.FloodlightActivity;
        // Deletes an existing floodlight activity.
        remove(profileId: string, id: string): void;
        // Updates an existing floodlight activity.
        update(resource: Schema.FloodlightActivity, profileId: string): Dfareporting.Schema.FloodlightActivity;
      }
      export interface FloodlightActivityGroupsCollection {
        // Gets one floodlight activity group by ID.
        get(profileId: string, id: string): Dfareporting.Schema.FloodlightActivityGroup;
        // Inserts a new floodlight activity group.
        insert(resource: Schema.FloodlightActivityGroup, profileId: string): Dfareporting.Schema.FloodlightActivityGroup;
        // Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting.Schema.FloodlightActivityGroupsListResponse;
        // Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting.Schema.FloodlightActivityGroupsListResponse;
        // Updates an existing floodlight activity group. This method supports patch semantics.
        patch(resource: Schema.FloodlightActivityGroup, profileId: string, id: string): Dfareporting.Schema.FloodlightActivityGroup;
        // Updates an existing floodlight activity group.
        update(resource: Schema.FloodlightActivityGroup, profileId: string): Dfareporting.Schema.FloodlightActivityGroup;
      }
      export interface FloodlightConfigurationsCollection {
        // Gets one floodlight configuration by ID.
        get(profileId: string, id: string): Dfareporting.Schema.FloodlightConfiguration;
        // Retrieves a list of floodlight configurations, possibly filtered.
        list(profileId: string): Dfareporting.Schema.FloodlightConfigurationsListResponse;
        // Retrieves a list of floodlight configurations, possibly filtered.
        list(profileId: string, optionalArgs: object): Dfareporting.Schema.FloodlightConfigurationsListResponse;
        // Updates an existing floodlight configuration. This method supports patch semantics.
        patch(resource: Schema.FloodlightConfiguration, profileId: string, id: string): Dfareporting.Schema.FloodlightConfiguration;
        // Updates an existing floodlight configuration.
        update(resource: Schema.FloodlightConfiguration, profileId: string): Dfareporting.Schema.FloodlightConfiguration;
      }
      export interface InventoryItemsCollection {
        // Gets one inventory item by ID.
        get(profileId: string, projectId: string, id: string): Dfareporting.Schema.InventoryItem;
        // Retrieves a list of inventory items, possibly filtered. This method supports paging.
        list(profileId: string, projectId: string): Dfareporting.Schema.InventoryItemsListResponse;
        // Retrieves a list of inventory items, possibly filtered. This method supports paging.
        list(profileId: string, projectId: string, optionalArgs: object): Dfareporting.Schema.InventoryItemsListResponse;
      }
      export interface LanguagesCollection {
        // Retrieves a list of languages.
        list(profileId: string): Dfareporting.Schema.LanguagesListResponse;
      }
      export interface MetrosCollection {
        // Retrieves a list of metros.
        list(profileId: string): Dfareporting.Schema.MetrosListResponse;
      }
      export interface MobileAppsCollection {
        // Gets one mobile app by ID.
        get(profileId: string, id: string): Dfareporting.Schema.MobileApp;
        // Retrieves list of available mobile apps.
        list(profileId: string): Dfareporting.Schema.MobileAppsListResponse;
        // Retrieves list of available mobile apps.
        list(profileId: string, optionalArgs: object): Dfareporting.Schema.MobileAppsListResponse;
      }
      export interface MobileCarriersCollection {
        // Gets one mobile carrier by ID.
        get(profileId: string, id: string): Dfareporting.Schema.MobileCarrier;
        // Retrieves a list of mobile carriers.
        list(profileId: string): Dfareporting.Schema.MobileCarriersListResponse;
      }
      export interface OperatingSystemVersionsCollection {
        // Gets one operating system version by ID.
        get(profileId: string, id: string): Dfareporting.Schema.OperatingSystemVersion;
        // Retrieves a list of operating system versions.
        list(profileId: string): Dfareporting.Schema.OperatingSystemVersionsListResponse;
      }
      export interface OperatingSystemsCollection {
        // Gets one operating system by DART ID.
        get(profileId: string, dartId: string): Dfareporting.Schema.OperatingSystem;
        // Retrieves a list of operating systems.
        list(profileId: string): Dfareporting.Schema.OperatingSystemsListResponse;
      }
      export interface OrderDocumentsCollection {
        // Gets one order document by ID.
        get(profileId: string, projectId: string, id: string): Dfareporting.Schema.OrderDocument;
        // Retrieves a list of order documents, possibly filtered. This method supports paging.
        list(profileId: string, projectId: string): Dfareporting.Schema.OrderDocumentsListResponse;
        // Retrieves a list of order documents, possibly filtered. This method supports paging.
        list(profileId: string, projectId: string, optionalArgs: object): Dfareporting.Schema.OrderDocumentsListResponse;
      }
      export interface OrdersCollection {
        // Gets one order by ID.
        get(profileId: string, projectId: string, id: string): Dfareporting.Schema.Order;
        // Retrieves a list of orders, possibly filtered. This method supports paging.
        list(profileId: string, projectId: string): Dfareporting.Schema.OrdersListResponse;
        // Retrieves a list of orders, possibly filtered. This method supports paging.
        list(profileId: string, projectId: string, optionalArgs: object): Dfareporting.Schema.OrdersListResponse;
      }
      export interface PlacementGroupsCollection {
        // Gets one placement group by ID.
        get(profileId: string, id: string): Dfareporting.Schema.PlacementGroup;
        // Inserts a new placement group.
        insert(resource: Schema.PlacementGroup, profileId: string): Dfareporting.Schema.PlacementGroup;
        // Retrieves a list of placement groups, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting.Schema.PlacementGroupsListResponse;
        // Retrieves a list of placement groups, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting.Schema.PlacementGroupsListResponse;
        // Updates an existing placement group. This method supports patch semantics.
        patch(resource: Schema.PlacementGroup, profileId: string, id: string): Dfareporting.Schema.PlacementGroup;
        // Updates an existing placement group.
        update(resource: Schema.PlacementGroup, profileId: string): Dfareporting.Schema.PlacementGroup;
      }
      export interface PlacementStrategiesCollection {
        // Gets one placement strategy by ID.
        get(profileId: string, id: string): Dfareporting.Schema.PlacementStrategy;
        // Inserts a new placement strategy.
        insert(resource: Schema.PlacementStrategy, profileId: string): Dfareporting.Schema.PlacementStrategy;
        // Retrieves a list of placement strategies, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting.Schema.PlacementStrategiesListResponse;
        // Retrieves a list of placement strategies, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting.Schema.PlacementStrategiesListResponse;
        // Updates an existing placement strategy. This method supports patch semantics.
        patch(resource: Schema.PlacementStrategy, profileId: string, id: string): Dfareporting.Schema.PlacementStrategy;
        // Deletes an existing placement strategy.
        remove(profileId: string, id: string): void;
        // Updates an existing placement strategy.
        update(resource: Schema.PlacementStrategy, profileId: string): Dfareporting.Schema.PlacementStrategy;
      }
      export interface PlacementsCollection {
        // Generates tags for a placement.
        generatetags(profileId: string): Dfareporting.Schema.PlacementsGenerateTagsResponse;
        // Generates tags for a placement.
        generatetags(profileId: string, optionalArgs: object): Dfareporting.Schema.PlacementsGenerateTagsResponse;
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
      export interface PlatformTypesCollection {
        // Gets one platform type by ID.
        get(profileId: string, id: string): Dfareporting.Schema.PlatformType;
        // Retrieves a list of platform types.
        list(profileId: string): Dfareporting.Schema.PlatformTypesListResponse;
      }
      export interface PostalCodesCollection {
        // Gets one postal code by ID.
        get(profileId: string, code: string): Dfareporting.Schema.PostalCode;
        // Retrieves a list of postal codes.
        list(profileId: string): Dfareporting.Schema.PostalCodesListResponse;
      }
      export interface ProjectsCollection {
        // Gets one project by ID.
        get(profileId: string, id: string): Dfareporting.Schema.Project;
        // Retrieves a list of projects, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting.Schema.ProjectsListResponse;
        // Retrieves a list of projects, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting.Schema.ProjectsListResponse;
      }
      export interface RegionsCollection {
        // Retrieves a list of regions.
        list(profileId: string): Dfareporting.Schema.RegionsListResponse;
      }
      export interface RemarketingListSharesCollection {
        // Gets one remarketing list share by remarketing list ID.
        get(profileId: string, remarketingListId: string): Dfareporting.Schema.RemarketingListShare;
        // Updates an existing remarketing list share. This method supports patch semantics.
        patch(resource: Schema.RemarketingListShare, profileId: string, remarketingListId: string): Dfareporting.Schema.RemarketingListShare;
        // Updates an existing remarketing list share.
        update(resource: Schema.RemarketingListShare, profileId: string): Dfareporting.Schema.RemarketingListShare;
      }
      export interface RemarketingListsCollection {
        // Gets one remarketing list by ID.
        get(profileId: string, id: string): Dfareporting.Schema.RemarketingList;
        // Inserts a new remarketing list.
        insert(resource: Schema.RemarketingList, profileId: string): Dfareporting.Schema.RemarketingList;
        // Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
        list(profileId: string, advertiserId: string): Dfareporting.Schema.RemarketingListsListResponse;
        // Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
        list(profileId: string, advertiserId: string, optionalArgs: object): Dfareporting.Schema.RemarketingListsListResponse;
        // Updates an existing remarketing list. This method supports patch semantics.
        patch(resource: Schema.RemarketingList, profileId: string, id: string): Dfareporting.Schema.RemarketingList;
        // Updates an existing remarketing list.
        update(resource: Schema.RemarketingList, profileId: string): Dfareporting.Schema.RemarketingList;
      }
      export interface ReportsCollection {
        CompatibleFields?: Dfareporting.Collection.Reports.CompatibleFieldsCollection;
        Files?: Dfareporting.Collection.Reports.FilesCollection;
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
      export interface SitesCollection {
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
      export interface SizesCollection {
        // Gets one size by ID.
        get(profileId: string, id: string): Dfareporting.Schema.Size;
        // Inserts a new size.
        insert(resource: Schema.Size, profileId: string): Dfareporting.Schema.Size;
        // Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.
        list(profileId: string): Dfareporting.Schema.SizesListResponse;
        // Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.
        list(profileId: string, optionalArgs: object): Dfareporting.Schema.SizesListResponse;
      }
      export interface SubaccountsCollection {
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
      export interface TargetableRemarketingListsCollection {
        // Gets one remarketing list by ID.
        get(profileId: string, id: string): Dfareporting.Schema.TargetableRemarketingList;
        // Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.
        list(profileId: string, advertiserId: string): Dfareporting.Schema.TargetableRemarketingListsListResponse;
        // Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.
        list(profileId: string, advertiserId: string, optionalArgs: object): Dfareporting.Schema.TargetableRemarketingListsListResponse;
      }
      export interface TargetingTemplatesCollection {
        // Gets one targeting template by ID.
        get(profileId: string, id: string): Dfareporting.Schema.TargetingTemplate;
        // Inserts a new targeting template.
        insert(resource: Schema.TargetingTemplate, profileId: string): Dfareporting.Schema.TargetingTemplate;
        // Retrieves a list of targeting templates, optionally filtered. This method supports paging.
        list(profileId: string): Dfareporting.Schema.TargetingTemplatesListResponse;
        // Retrieves a list of targeting templates, optionally filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting.Schema.TargetingTemplatesListResponse;
        // Updates an existing targeting template. This method supports patch semantics.
        patch(resource: Schema.TargetingTemplate, profileId: string, id: string): Dfareporting.Schema.TargetingTemplate;
        // Updates an existing targeting template.
        update(resource: Schema.TargetingTemplate, profileId: string): Dfareporting.Schema.TargetingTemplate;
      }
      export interface UserProfilesCollection {
        // Gets one user profile by ID.
        get(profileId: string): Dfareporting.Schema.UserProfile;
        // Retrieves list of user profiles for a user.
        list(): Dfareporting.Schema.UserProfileList;
      }
      export interface UserRolePermissionGroupsCollection {
        // Gets one user role permission group by ID.
        get(profileId: string, id: string): Dfareporting.Schema.UserRolePermissionGroup;
        // Gets a list of all supported user role permission groups.
        list(profileId: string): Dfareporting.Schema.UserRolePermissionGroupsListResponse;
      }
      export interface UserRolePermissionsCollection {
        // Gets one user role permission by ID.
        get(profileId: string, id: string): Dfareporting.Schema.UserRolePermission;
        // Gets a list of user role permissions, possibly filtered.
        list(profileId: string): Dfareporting.Schema.UserRolePermissionsListResponse;
        // Gets a list of user role permissions, possibly filtered.
        list(profileId: string, optionalArgs: object): Dfareporting.Schema.UserRolePermissionsListResponse;
      }
      export interface UserRolesCollection {
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
      export interface VideoFormatsCollection {
        // Gets one video format by ID.
        get(profileId: string, id: number): Dfareporting.Schema.VideoFormat;
        // Lists available video formats.
        list(profileId: string): Dfareporting.Schema.VideoFormatsListResponse;
      }
    }
    namespace Schema {
      export interface Account {
        accountPermissionIds?: string[];
        accountProfile?: string;
        active?: boolean;
        activeAdsLimitTier?: string;
        activeViewOptOut?: boolean;
        availablePermissionIds?: string[];
        countryId?: string;
        currencyId?: string;
        defaultCreativeSizeId?: string;
        description?: string;
        id?: string;
        kind?: string;
        locale?: string;
        maximumImageSize?: string;
        name?: string;
        nielsenOcrEnabled?: boolean;
        reportsConfiguration?: Dfareporting.Schema.ReportsConfiguration;
        shareReportsWithTwitter?: boolean;
        teaserSizeLimit?: string;
      }
      export interface AccountActiveAdSummary {
        accountId?: string;
        activeAds?: string;
        activeAdsLimitTier?: string;
        availableAds?: string;
        kind?: string;
      }
      export interface AccountPermission {
        accountProfiles?: string[];
        id?: string;
        kind?: string;
        level?: string;
        name?: string;
        permissionGroupId?: string;
      }
      export interface AccountPermissionGroup {
        id?: string;
        kind?: string;
        name?: string;
      }
      export interface AccountPermissionGroupsListResponse {
        accountPermissionGroups?: Dfareporting.Schema.AccountPermissionGroup[];
        kind?: string;
      }
      export interface AccountPermissionsListResponse {
        accountPermissions?: Dfareporting.Schema.AccountPermission[];
        kind?: string;
      }
      export interface AccountUserProfile {
        accountId?: string;
        active?: boolean;
        advertiserFilter?: Dfareporting.Schema.ObjectFilter;
        campaignFilter?: Dfareporting.Schema.ObjectFilter;
        comments?: string;
        email?: string;
        id?: string;
        kind?: string;
        locale?: string;
        name?: string;
        siteFilter?: Dfareporting.Schema.ObjectFilter;
        subaccountId?: string;
        traffickerType?: string;
        userAccessType?: string;
        userRoleFilter?: Dfareporting.Schema.ObjectFilter;
        userRoleId?: string;
      }
      export interface AccountUserProfilesListResponse {
        accountUserProfiles?: Dfareporting.Schema.AccountUserProfile[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface AccountsListResponse {
        accounts?: Dfareporting.Schema.Account[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface Activities {
        filters?: Dfareporting.Schema.DimensionValue[];
        kind?: string;
        metricNames?: string[];
      }
      export interface Ad {
        accountId?: string;
        active?: boolean;
        advertiserId?: string;
        advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        archived?: boolean;
        audienceSegmentId?: string;
        campaignId?: string;
        campaignIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        clickThroughUrl?: Dfareporting.Schema.ClickThroughUrl;
        clickThroughUrlSuffixProperties?: Dfareporting.Schema.ClickThroughUrlSuffixProperties;
        comments?: string;
        compatibility?: string;
        createInfo?: Dfareporting.Schema.LastModifiedInfo;
        creativeGroupAssignments?: Dfareporting.Schema.CreativeGroupAssignment[];
        creativeRotation?: Dfareporting.Schema.CreativeRotation;
        dayPartTargeting?: Dfareporting.Schema.DayPartTargeting;
        defaultClickThroughEventTagProperties?: Dfareporting.Schema.DefaultClickThroughEventTagProperties;
        deliverySchedule?: Dfareporting.Schema.DeliverySchedule;
        dynamicClickTracker?: boolean;
        endTime?: string;
        eventTagOverrides?: Dfareporting.Schema.EventTagOverride[];
        geoTargeting?: Dfareporting.Schema.GeoTargeting;
        id?: string;
        idDimensionValue?: Dfareporting.Schema.DimensionValue;
        keyValueTargetingExpression?: Dfareporting.Schema.KeyValueTargetingExpression;
        kind?: string;
        languageTargeting?: Dfareporting.Schema.LanguageTargeting;
        lastModifiedInfo?: Dfareporting.Schema.LastModifiedInfo;
        name?: string;
        placementAssignments?: Dfareporting.Schema.PlacementAssignment[];
        remarketingListExpression?: Dfareporting.Schema.ListTargetingExpression;
        size?: Dfareporting.Schema.Size;
        sslCompliant?: boolean;
        sslRequired?: boolean;
        startTime?: string;
        subaccountId?: string;
        targetingTemplateId?: string;
        technologyTargeting?: Dfareporting.Schema.TechnologyTargeting;
        type?: string;
      }
      export interface AdBlockingConfiguration {
        clickThroughUrl?: string;
        creativeBundleId?: string;
        enabled?: boolean;
        overrideClickThroughUrl?: boolean;
      }
      export interface AdSlot {
        comment?: string;
        compatibility?: string;
        height?: string;
        linkedPlacementId?: string;
        name?: string;
        paymentSourceType?: string;
        primary?: boolean;
        width?: string;
      }
      export interface AdsListResponse {
        ads?: Dfareporting.Schema.Ad[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface Advertiser {
        accountId?: string;
        advertiserGroupId?: string;
        clickThroughUrlSuffix?: string;
        defaultClickThroughEventTagId?: string;
        defaultEmail?: string;
        floodlightConfigurationId?: string;
        floodlightConfigurationIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        id?: string;
        idDimensionValue?: Dfareporting.Schema.DimensionValue;
        kind?: string;
        name?: string;
        originalFloodlightConfigurationId?: string;
        status?: string;
        subaccountId?: string;
        suspended?: boolean;
      }
      export interface AdvertiserGroup {
        accountId?: string;
        id?: string;
        kind?: string;
        name?: string;
      }
      export interface AdvertiserGroupsListResponse {
        advertiserGroups?: Dfareporting.Schema.AdvertiserGroup[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface AdvertiserLandingPagesListResponse {
        kind?: string;
        landingPages?: Dfareporting.Schema.LandingPage[];
        nextPageToken?: string;
      }
      export interface AdvertisersListResponse {
        advertisers?: Dfareporting.Schema.Advertiser[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface AudienceSegment {
        allocation?: number;
        id?: string;
        name?: string;
      }
      export interface AudienceSegmentGroup {
        audienceSegments?: Dfareporting.Schema.AudienceSegment[];
        id?: string;
        name?: string;
      }
      export interface Browser {
        browserVersionId?: string;
        dartId?: string;
        kind?: string;
        majorVersion?: string;
        minorVersion?: string;
        name?: string;
      }
      export interface BrowsersListResponse {
        browsers?: Dfareporting.Schema.Browser[];
        kind?: string;
      }
      export interface Campaign {
        accountId?: string;
        adBlockingConfiguration?: Dfareporting.Schema.AdBlockingConfiguration;
        additionalCreativeOptimizationConfigurations?: Dfareporting.Schema.CreativeOptimizationConfiguration[];
        advertiserGroupId?: string;
        advertiserId?: string;
        advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        archived?: boolean;
        audienceSegmentGroups?: Dfareporting.Schema.AudienceSegmentGroup[];
        billingInvoiceCode?: string;
        clickThroughUrlSuffixProperties?: Dfareporting.Schema.ClickThroughUrlSuffixProperties;
        comment?: string;
        createInfo?: Dfareporting.Schema.LastModifiedInfo;
        creativeGroupIds?: string[];
        creativeOptimizationConfiguration?: Dfareporting.Schema.CreativeOptimizationConfiguration;
        defaultClickThroughEventTagProperties?: Dfareporting.Schema.DefaultClickThroughEventTagProperties;
        defaultLandingPageId?: string;
        endDate?: string;
        eventTagOverrides?: Dfareporting.Schema.EventTagOverride[];
        externalId?: string;
        id?: string;
        idDimensionValue?: Dfareporting.Schema.DimensionValue;
        kind?: string;
        lastModifiedInfo?: Dfareporting.Schema.LastModifiedInfo;
        name?: string;
        nielsenOcrEnabled?: boolean;
        startDate?: string;
        subaccountId?: string;
        traffickerEmails?: string[];
      }
      export interface CampaignCreativeAssociation {
        creativeId?: string;
        kind?: string;
      }
      export interface CampaignCreativeAssociationsListResponse {
        campaignCreativeAssociations?: Dfareporting.Schema.CampaignCreativeAssociation[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface CampaignsListResponse {
        campaigns?: Dfareporting.Schema.Campaign[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface ChangeLog {
        accountId?: string;
        action?: string;
        changeTime?: string;
        fieldName?: string;
        id?: string;
        kind?: string;
        newValue?: string;
        objectId?: string;
        objectType?: string;
        oldValue?: string;
        subaccountId?: string;
        transactionId?: string;
        userProfileId?: string;
        userProfileName?: string;
      }
      export interface ChangeLogsListResponse {
        changeLogs?: Dfareporting.Schema.ChangeLog[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface CitiesListResponse {
        cities?: Dfareporting.Schema.City[];
        kind?: string;
      }
      export interface City {
        countryCode?: string;
        countryDartId?: string;
        dartId?: string;
        kind?: string;
        metroCode?: string;
        metroDmaId?: string;
        name?: string;
        regionCode?: string;
        regionDartId?: string;
      }
      export interface ClickTag {
        clickThroughUrl?: Dfareporting.Schema.CreativeClickThroughUrl;
        eventName?: string;
        name?: string;
      }
      export interface ClickThroughUrl {
        computedClickThroughUrl?: string;
        customClickThroughUrl?: string;
        defaultLandingPage?: boolean;
        landingPageId?: string;
      }
      export interface ClickThroughUrlSuffixProperties {
        clickThroughUrlSuffix?: string;
        overrideInheritedSuffix?: boolean;
      }
      export interface CompanionClickThroughOverride {
        clickThroughUrl?: Dfareporting.Schema.ClickThroughUrl;
        creativeId?: string;
      }
      export interface CompanionSetting {
        companionsDisabled?: boolean;
        enabledSizes?: Dfareporting.Schema.Size[];
        imageOnly?: boolean;
        kind?: string;
      }
      export interface CompatibleFields {
        crossDimensionReachReportCompatibleFields?: Dfareporting.Schema.CrossDimensionReachReportCompatibleFields;
        floodlightReportCompatibleFields?: Dfareporting.Schema.FloodlightReportCompatibleFields;
        kind?: string;
        pathToConversionReportCompatibleFields?: Dfareporting.Schema.PathToConversionReportCompatibleFields;
        reachReportCompatibleFields?: Dfareporting.Schema.ReachReportCompatibleFields;
        reportCompatibleFields?: Dfareporting.Schema.ReportCompatibleFields;
      }
      export interface ConnectionType {
        id?: string;
        kind?: string;
        name?: string;
      }
      export interface ConnectionTypesListResponse {
        connectionTypes?: Dfareporting.Schema.ConnectionType[];
        kind?: string;
      }
      export interface ContentCategoriesListResponse {
        contentCategories?: Dfareporting.Schema.ContentCategory[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface ContentCategory {
        accountId?: string;
        id?: string;
        kind?: string;
        name?: string;
      }
      export interface Conversion {
        childDirectedTreatment?: boolean;
        customVariables?: Dfareporting.Schema.CustomFloodlightVariable[];
        encryptedUserId?: string;
        encryptedUserIdCandidates?: string[];
        floodlightActivityId?: string;
        floodlightConfigurationId?: string;
        gclid?: string;
        kind?: string;
        limitAdTracking?: boolean;
        mobileDeviceId?: string;
        nonPersonalizedAd?: boolean;
        ordinal?: string;
        quantity?: string;
        timestampMicros?: string;
        treatmentForUnderage?: boolean;
        value?: number;
      }
      export interface ConversionError {
        code?: string;
        kind?: string;
        message?: string;
      }
      export interface ConversionStatus {
        conversion?: Dfareporting.Schema.Conversion;
        errors?: Dfareporting.Schema.ConversionError[];
        kind?: string;
      }
      export interface ConversionsBatchInsertRequest {
        conversions?: Dfareporting.Schema.Conversion[];
        encryptionInfo?: Dfareporting.Schema.EncryptionInfo;
        kind?: string;
      }
      export interface ConversionsBatchInsertResponse {
        hasFailures?: boolean;
        kind?: string;
        status?: Dfareporting.Schema.ConversionStatus[];
      }
      export interface ConversionsBatchUpdateRequest {
        conversions?: Dfareporting.Schema.Conversion[];
        encryptionInfo?: Dfareporting.Schema.EncryptionInfo;
        kind?: string;
      }
      export interface ConversionsBatchUpdateResponse {
        hasFailures?: boolean;
        kind?: string;
        status?: Dfareporting.Schema.ConversionStatus[];
      }
      export interface CountriesListResponse {
        countries?: Dfareporting.Schema.Country[];
        kind?: string;
      }
      export interface Country {
        countryCode?: string;
        dartId?: string;
        kind?: string;
        name?: string;
        sslEnabled?: boolean;
      }
      export interface Creative {
        accountId?: string;
        active?: boolean;
        adParameters?: string;
        adTagKeys?: string[];
        additionalSizes?: Dfareporting.Schema.Size[];
        advertiserId?: string;
        allowScriptAccess?: boolean;
        archived?: boolean;
        artworkType?: string;
        authoringSource?: string;
        authoringTool?: string;
        autoAdvanceImages?: boolean;
        backgroundColor?: string;
        backupImageClickThroughUrl?: Dfareporting.Schema.CreativeClickThroughUrl;
        backupImageFeatures?: string[];
        backupImageReportingLabel?: string;
        backupImageTargetWindow?: Dfareporting.Schema.TargetWindow;
        clickTags?: Dfareporting.Schema.ClickTag[];
        commercialId?: string;
        companionCreatives?: string[];
        compatibility?: string[];
        convertFlashToHtml5?: boolean;
        counterCustomEvents?: Dfareporting.Schema.CreativeCustomEvent[];
        creativeAssetSelection?: Dfareporting.Schema.CreativeAssetSelection;
        creativeAssets?: Dfareporting.Schema.CreativeAsset[];
        creativeFieldAssignments?: Dfareporting.Schema.CreativeFieldAssignment[];
        customKeyValues?: string[];
        dynamicAssetSelection?: boolean;
        exitCustomEvents?: Dfareporting.Schema.CreativeCustomEvent[];
        fsCommand?: Dfareporting.Schema.FsCommand;
        htmlCode?: string;
        htmlCodeLocked?: boolean;
        id?: string;
        idDimensionValue?: Dfareporting.Schema.DimensionValue;
        kind?: string;
        lastModifiedInfo?: Dfareporting.Schema.LastModifiedInfo;
        latestTraffickedCreativeId?: string;
        mediaDescription?: string;
        mediaDuration?: number;
        name?: string;
        overrideCss?: string;
        progressOffset?: Dfareporting.Schema.VideoOffset;
        redirectUrl?: string;
        renderingId?: string;
        renderingIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        requiredFlashPluginVersion?: string;
        requiredFlashVersion?: number;
        size?: Dfareporting.Schema.Size;
        skipOffset?: Dfareporting.Schema.VideoOffset;
        skippable?: boolean;
        sslCompliant?: boolean;
        sslOverride?: boolean;
        studioAdvertiserId?: string;
        studioCreativeId?: string;
        studioTraffickedCreativeId?: string;
        subaccountId?: string;
        thirdPartyBackupImageImpressionsUrl?: string;
        thirdPartyRichMediaImpressionsUrl?: string;
        thirdPartyUrls?: Dfareporting.Schema.ThirdPartyTrackingUrl[];
        timerCustomEvents?: Dfareporting.Schema.CreativeCustomEvent[];
        totalFileSize?: string;
        type?: string;
        universalAdId?: Dfareporting.Schema.UniversalAdId;
        version?: number;
      }
      export interface CreativeAsset {
        actionScript3?: boolean;
        active?: boolean;
        additionalSizes?: Dfareporting.Schema.Size[];
        alignment?: string;
        artworkType?: string;
        assetIdentifier?: Dfareporting.Schema.CreativeAssetId;
        audioBitRate?: number;
        audioSampleRate?: number;
        backupImageExit?: Dfareporting.Schema.CreativeCustomEvent;
        bitRate?: number;
        childAssetType?: string;
        collapsedSize?: Dfareporting.Schema.Size;
        companionCreativeIds?: string[];
        customStartTimeValue?: number;
        detectedFeatures?: string[];
        displayType?: string;
        duration?: number;
        durationType?: string;
        expandedDimension?: Dfareporting.Schema.Size;
        fileSize?: string;
        flashVersion?: number;
        frameRate?: number;
        hideFlashObjects?: boolean;
        hideSelectionBoxes?: boolean;
        horizontallyLocked?: boolean;
        id?: string;
        idDimensionValue?: Dfareporting.Schema.DimensionValue;
        mediaDuration?: number;
        mimeType?: string;
        offset?: Dfareporting.Schema.OffsetPosition;
        orientation?: string;
        originalBackup?: boolean;
        politeLoad?: boolean;
        position?: Dfareporting.Schema.OffsetPosition;
        positionLeftUnit?: string;
        positionTopUnit?: string;
        progressiveServingUrl?: string;
        pushdown?: boolean;
        pushdownDuration?: number;
        role?: string;
        size?: Dfareporting.Schema.Size;
        sslCompliant?: boolean;
        startTimeType?: string;
        streamingServingUrl?: string;
        transparency?: boolean;
        verticallyLocked?: boolean;
        windowMode?: string;
        zIndex?: number;
        zipFilename?: string;
        zipFilesize?: string;
      }
      export interface CreativeAssetId {
        name?: string;
        type?: string;
      }
      export interface CreativeAssetMetadata {
        assetIdentifier?: Dfareporting.Schema.CreativeAssetId;
        clickTags?: Dfareporting.Schema.ClickTag[];
        detectedFeatures?: string[];
        id?: string;
        idDimensionValue?: Dfareporting.Schema.DimensionValue;
        kind?: string;
        warnedValidationRules?: string[];
      }
      export interface CreativeAssetSelection {
        defaultAssetId?: string;
        rules?: Dfareporting.Schema.Rule[];
      }
      export interface CreativeAssignment {
        active?: boolean;
        applyEventTags?: boolean;
        clickThroughUrl?: Dfareporting.Schema.ClickThroughUrl;
        companionCreativeOverrides?: Dfareporting.Schema.CompanionClickThroughOverride[];
        creativeGroupAssignments?: Dfareporting.Schema.CreativeGroupAssignment[];
        creativeId?: string;
        creativeIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        endTime?: string;
        richMediaExitOverrides?: Dfareporting.Schema.RichMediaExitOverride[];
        sequence?: number;
        sslCompliant?: boolean;
        startTime?: string;
        weight?: number;
      }
      export interface CreativeClickThroughUrl {
        computedClickThroughUrl?: string;
        customClickThroughUrl?: string;
        landingPageId?: string;
      }
      export interface CreativeCustomEvent {
        advertiserCustomEventId?: string;
        advertiserCustomEventName?: string;
        advertiserCustomEventType?: string;
        artworkLabel?: string;
        artworkType?: string;
        exitClickThroughUrl?: Dfareporting.Schema.CreativeClickThroughUrl;
        id?: string;
        popupWindowProperties?: Dfareporting.Schema.PopupWindowProperties;
        targetType?: string;
        videoReportingId?: string;
      }
      export interface CreativeField {
        accountId?: string;
        advertiserId?: string;
        advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        id?: string;
        kind?: string;
        name?: string;
        subaccountId?: string;
      }
      export interface CreativeFieldAssignment {
        creativeFieldId?: string;
        creativeFieldValueId?: string;
      }
      export interface CreativeFieldValue {
        id?: string;
        kind?: string;
        value?: string;
      }
      export interface CreativeFieldValuesListResponse {
        creativeFieldValues?: Dfareporting.Schema.CreativeFieldValue[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface CreativeFieldsListResponse {
        creativeFields?: Dfareporting.Schema.CreativeField[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface CreativeGroup {
        accountId?: string;
        advertiserId?: string;
        advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        groupNumber?: number;
        id?: string;
        kind?: string;
        name?: string;
        subaccountId?: string;
      }
      export interface CreativeGroupAssignment {
        creativeGroupId?: string;
        creativeGroupNumber?: string;
      }
      export interface CreativeGroupsListResponse {
        creativeGroups?: Dfareporting.Schema.CreativeGroup[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface CreativeOptimizationConfiguration {
        id?: string;
        name?: string;
        optimizationActivitys?: Dfareporting.Schema.OptimizationActivity[];
        optimizationModel?: string;
      }
      export interface CreativeRotation {
        creativeAssignments?: Dfareporting.Schema.CreativeAssignment[];
        creativeOptimizationConfigurationId?: string;
        type?: string;
        weightCalculationStrategy?: string;
      }
      export interface CreativesListResponse {
        creatives?: Dfareporting.Schema.Creative[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface CrossDimensionReachReportCompatibleFields {
        breakdown?: Dfareporting.Schema.Dimension[];
        dimensionFilters?: Dfareporting.Schema.Dimension[];
        kind?: string;
        metrics?: Dfareporting.Schema.Metric[];
        overlapMetrics?: Dfareporting.Schema.Metric[];
      }
      export interface CustomFloodlightVariable {
        kind?: string;
        type?: string;
        value?: string;
      }
      export interface CustomRichMediaEvents {
        filteredEventIds?: Dfareporting.Schema.DimensionValue[];
        kind?: string;
      }
      export interface CustomViewabilityMetric {
        configuration?: Dfareporting.Schema.CustomViewabilityMetricConfiguration;
        id?: string;
        name?: string;
      }
      export interface CustomViewabilityMetricConfiguration {
        audible?: boolean;
        timeMillis?: number;
        timePercent?: number;
        viewabilityPercent?: number;
      }
      export interface DateRange {
        endDate?: string;
        kind?: string;
        relativeDateRange?: string;
        startDate?: string;
      }
      export interface DayPartTargeting {
        daysOfWeek?: string[];
        hoursOfDay?: number[];
        userLocalTime?: boolean;
      }
      export interface DeepLink {
        appUrl?: string;
        fallbackUrl?: string;
        kind?: string;
        mobileApp?: Dfareporting.Schema.MobileApp;
        remarketingListIds?: string[];
      }
      export interface DefaultClickThroughEventTagProperties {
        defaultClickThroughEventTagId?: string;
        overrideInheritedEventTag?: boolean;
      }
      export interface DeliverySchedule {
        frequencyCap?: Dfareporting.Schema.FrequencyCap;
        hardCutoff?: boolean;
        impressionRatio?: string;
        priority?: string;
      }
      export interface DfpSettings {
        dfpNetworkCode?: string;
        dfpNetworkName?: string;
        programmaticPlacementAccepted?: boolean;
        pubPaidPlacementAccepted?: boolean;
        publisherPortalOnly?: boolean;
      }
      export interface Dimension {
        kind?: string;
        name?: string;
      }
      export interface DimensionFilter {
        dimensionName?: string;
        kind?: string;
        value?: string;
      }
      export interface DimensionValue {
        dimensionName?: string;
        etag?: string;
        id?: string;
        kind?: string;
        matchType?: string;
        value?: string;
      }
      export interface DimensionValueList {
        etag?: string;
        items?: Dfareporting.Schema.DimensionValue[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface DimensionValueRequest {
        dimensionName?: string;
        endDate?: string;
        filters?: Dfareporting.Schema.DimensionFilter[];
        kind?: string;
        startDate?: string;
      }
      export interface DirectorySite {
        active?: boolean;
        id?: string;
        idDimensionValue?: Dfareporting.Schema.DimensionValue;
        inpageTagFormats?: string[];
        interstitialTagFormats?: string[];
        kind?: string;
        name?: string;
        settings?: Dfareporting.Schema.DirectorySiteSettings;
        url?: string;
      }
      export interface DirectorySiteSettings {
        activeViewOptOut?: boolean;
        dfpSettings?: Dfareporting.Schema.DfpSettings;
        instreamVideoPlacementAccepted?: boolean;
        interstitialPlacementAccepted?: boolean;
      }
      export interface DirectorySitesListResponse {
        directorySites?: Dfareporting.Schema.DirectorySite[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface DynamicTargetingKey {
        kind?: string;
        name?: string;
        objectId?: string;
        objectType?: string;
      }
      export interface DynamicTargetingKeysListResponse {
        dynamicTargetingKeys?: Dfareporting.Schema.DynamicTargetingKey[];
        kind?: string;
      }
      export interface EncryptionInfo {
        encryptionEntityId?: string;
        encryptionEntityType?: string;
        encryptionSource?: string;
        kind?: string;
      }
      export interface EventTag {
        accountId?: string;
        advertiserId?: string;
        advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        campaignId?: string;
        campaignIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        enabledByDefault?: boolean;
        excludeFromAdxRequests?: boolean;
        id?: string;
        kind?: string;
        name?: string;
        siteFilterType?: string;
        siteIds?: string[];
        sslCompliant?: boolean;
        status?: string;
        subaccountId?: string;
        type?: string;
        url?: string;
        urlEscapeLevels?: number;
      }
      export interface EventTagOverride {
        enabled?: boolean;
        id?: string;
      }
      export interface EventTagsListResponse {
        eventTags?: Dfareporting.Schema.EventTag[];
        kind?: string;
      }
      export interface File {
        dateRange?: Dfareporting.Schema.DateRange;
        etag?: string;
        fileName?: string;
        format?: string;
        id?: string;
        kind?: string;
        lastModifiedTime?: string;
        reportId?: string;
        status?: string;
        urls?: Dfareporting.Schema.FileUrls;
      }
      export interface FileList {
        etag?: string;
        items?: Dfareporting.Schema.File[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface FileUrls {
        apiUrl?: string;
        browserUrl?: string;
      }
      export interface Flight {
        endDate?: string;
        rateOrCost?: string;
        startDate?: string;
        units?: string;
      }
      export interface FloodlightActivitiesGenerateTagResponse {
        floodlightActivityTag?: string;
        globalSiteTagGlobalSnippet?: string;
        kind?: string;
      }
      export interface FloodlightActivitiesListResponse {
        floodlightActivities?: Dfareporting.Schema.FloodlightActivity[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface FloodlightActivity {
        accountId?: string;
        advertiserId?: string;
        advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        cacheBustingType?: string;
        countingMethod?: string;
        defaultTags?: Dfareporting.Schema.FloodlightActivityDynamicTag[];
        expectedUrl?: string;
        floodlightActivityGroupId?: string;
        floodlightActivityGroupName?: string;
        floodlightActivityGroupTagString?: string;
        floodlightActivityGroupType?: string;
        floodlightConfigurationId?: string;
        floodlightConfigurationIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        floodlightTagType?: string;
        hidden?: boolean;
        id?: string;
        idDimensionValue?: Dfareporting.Schema.DimensionValue;
        kind?: string;
        name?: string;
        notes?: string;
        publisherTags?: Dfareporting.Schema.FloodlightActivityPublisherDynamicTag[];
        secure?: boolean;
        sslCompliant?: boolean;
        sslRequired?: boolean;
        subaccountId?: string;
        tagFormat?: string;
        tagString?: string;
        userDefinedVariableTypes?: string[];
      }
      export interface FloodlightActivityDynamicTag {
        id?: string;
        name?: string;
        tag?: string;
      }
      export interface FloodlightActivityGroup {
        accountId?: string;
        advertiserId?: string;
        advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        floodlightConfigurationId?: string;
        floodlightConfigurationIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        id?: string;
        idDimensionValue?: Dfareporting.Schema.DimensionValue;
        kind?: string;
        name?: string;
        subaccountId?: string;
        tagString?: string;
        type?: string;
      }
      export interface FloodlightActivityGroupsListResponse {
        floodlightActivityGroups?: Dfareporting.Schema.FloodlightActivityGroup[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface FloodlightActivityPublisherDynamicTag {
        clickThrough?: boolean;
        directorySiteId?: string;
        dynamicTag?: Dfareporting.Schema.FloodlightActivityDynamicTag;
        siteId?: string;
        siteIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        viewThrough?: boolean;
      }
      export interface FloodlightConfiguration {
        accountId?: string;
        advertiserId?: string;
        advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        analyticsDataSharingEnabled?: boolean;
        customViewabilityMetric?: Dfareporting.Schema.CustomViewabilityMetric;
        exposureToConversionEnabled?: boolean;
        firstDayOfWeek?: string;
        id?: string;
        idDimensionValue?: Dfareporting.Schema.DimensionValue;
        inAppAttributionTrackingEnabled?: boolean;
        kind?: string;
        lookbackConfiguration?: Dfareporting.Schema.LookbackConfiguration;
        naturalSearchConversionAttributionOption?: string;
        omnitureSettings?: Dfareporting.Schema.OmnitureSettings;
        subaccountId?: string;
        tagSettings?: Dfareporting.Schema.TagSettings;
        thirdPartyAuthenticationTokens?: Dfareporting.Schema.ThirdPartyAuthenticationToken[];
        userDefinedVariableConfigurations?: Dfareporting.Schema.UserDefinedVariableConfiguration[];
      }
      export interface FloodlightConfigurationsListResponse {
        floodlightConfigurations?: Dfareporting.Schema.FloodlightConfiguration[];
        kind?: string;
      }
      export interface FloodlightReportCompatibleFields {
        dimensionFilters?: Dfareporting.Schema.Dimension[];
        dimensions?: Dfareporting.Schema.Dimension[];
        kind?: string;
        metrics?: Dfareporting.Schema.Metric[];
      }
      export interface FrequencyCap {
        duration?: string;
        impressions?: string;
      }
      export interface FsCommand {
        left?: number;
        positionOption?: string;
        top?: number;
        windowHeight?: number;
        windowWidth?: number;
      }
      export interface GeoTargeting {
        cities?: Dfareporting.Schema.City[];
        countries?: Dfareporting.Schema.Country[];
        excludeCountries?: boolean;
        metros?: Dfareporting.Schema.Metro[];
        postalCodes?: Dfareporting.Schema.PostalCode[];
        regions?: Dfareporting.Schema.Region[];
      }
      export interface InventoryItem {
        accountId?: string;
        adSlots?: Dfareporting.Schema.AdSlot[];
        advertiserId?: string;
        contentCategoryId?: string;
        estimatedClickThroughRate?: string;
        estimatedConversionRate?: string;
        id?: string;
        inPlan?: boolean;
        kind?: string;
        lastModifiedInfo?: Dfareporting.Schema.LastModifiedInfo;
        name?: string;
        negotiationChannelId?: string;
        orderId?: string;
        placementStrategyId?: string;
        pricing?: Dfareporting.Schema.Pricing;
        projectId?: string;
        rfpId?: string;
        siteId?: string;
        subaccountId?: string;
        type?: string;
      }
      export interface InventoryItemsListResponse {
        inventoryItems?: Dfareporting.Schema.InventoryItem[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface KeyValueTargetingExpression {
        expression?: string;
      }
      export interface LandingPage {
        advertiserId?: string;
        archived?: boolean;
        deepLinks?: Dfareporting.Schema.DeepLink[];
        id?: string;
        kind?: string;
        name?: string;
        url?: string;
      }
      export interface Language {
        id?: string;
        kind?: string;
        languageCode?: string;
        name?: string;
      }
      export interface LanguageTargeting {
        languages?: Dfareporting.Schema.Language[];
      }
      export interface LanguagesListResponse {
        kind?: string;
        languages?: Dfareporting.Schema.Language[];
      }
      export interface LastModifiedInfo {
        time?: string;
      }
      export interface ListPopulationClause {
        terms?: Dfareporting.Schema.ListPopulationTerm[];
      }
      export interface ListPopulationRule {
        floodlightActivityId?: string;
        floodlightActivityName?: string;
        listPopulationClauses?: Dfareporting.Schema.ListPopulationClause[];
      }
      export interface ListPopulationTerm {
        contains?: boolean;
        negation?: boolean;
        operator?: string;
        remarketingListId?: string;
        type?: string;
        value?: string;
        variableFriendlyName?: string;
        variableName?: string;
      }
      export interface ListTargetingExpression {
        expression?: string;
      }
      export interface LookbackConfiguration {
        clickDuration?: number;
        postImpressionActivitiesDuration?: number;
      }
      export interface Metric {
        kind?: string;
        name?: string;
      }
      export interface Metro {
        countryCode?: string;
        countryDartId?: string;
        dartId?: string;
        dmaId?: string;
        kind?: string;
        metroCode?: string;
        name?: string;
      }
      export interface MetrosListResponse {
        kind?: string;
        metros?: Dfareporting.Schema.Metro[];
      }
      export interface MobileApp {
        directory?: string;
        id?: string;
        kind?: string;
        publisherName?: string;
        title?: string;
      }
      export interface MobileAppsListResponse {
        kind?: string;
        mobileApps?: Dfareporting.Schema.MobileApp[];
        nextPageToken?: string;
      }
      export interface MobileCarrier {
        countryCode?: string;
        countryDartId?: string;
        id?: string;
        kind?: string;
        name?: string;
      }
      export interface MobileCarriersListResponse {
        kind?: string;
        mobileCarriers?: Dfareporting.Schema.MobileCarrier[];
      }
      export interface ObjectFilter {
        kind?: string;
        objectIds?: string[];
        status?: string;
      }
      export interface OffsetPosition {
        left?: number;
        top?: number;
      }
      export interface OmnitureSettings {
        omnitureCostDataEnabled?: boolean;
        omnitureIntegrationEnabled?: boolean;
      }
      export interface OperatingSystem {
        dartId?: string;
        desktop?: boolean;
        kind?: string;
        mobile?: boolean;
        name?: string;
      }
      export interface OperatingSystemVersion {
        id?: string;
        kind?: string;
        majorVersion?: string;
        minorVersion?: string;
        name?: string;
        operatingSystem?: Dfareporting.Schema.OperatingSystem;
      }
      export interface OperatingSystemVersionsListResponse {
        kind?: string;
        operatingSystemVersions?: Dfareporting.Schema.OperatingSystemVersion[];
      }
      export interface OperatingSystemsListResponse {
        kind?: string;
        operatingSystems?: Dfareporting.Schema.OperatingSystem[];
      }
      export interface OptimizationActivity {
        floodlightActivityId?: string;
        floodlightActivityIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        weight?: number;
      }
      export interface Order {
        accountId?: string;
        advertiserId?: string;
        approverUserProfileIds?: string[];
        buyerInvoiceId?: string;
        buyerOrganizationName?: string;
        comments?: string;
        contacts?: Dfareporting.Schema.OrderContact[];
        id?: string;
        kind?: string;
        lastModifiedInfo?: Dfareporting.Schema.LastModifiedInfo;
        name?: string;
        notes?: string;
        planningTermId?: string;
        projectId?: string;
        sellerOrderId?: string;
        sellerOrganizationName?: string;
        siteId?: string[];
        siteNames?: string[];
        subaccountId?: string;
        termsAndConditions?: string;
      }
      export interface OrderContact {
        contactInfo?: string;
        contactName?: string;
        contactTitle?: string;
        contactType?: string;
        signatureUserProfileId?: string;
      }
      export interface OrderDocument {
        accountId?: string;
        advertiserId?: string;
        amendedOrderDocumentId?: string;
        approvedByUserProfileIds?: string[];
        cancelled?: boolean;
        createdInfo?: Dfareporting.Schema.LastModifiedInfo;
        effectiveDate?: string;
        id?: string;
        kind?: string;
        lastSentRecipients?: string[];
        lastSentTime?: string;
        orderId?: string;
        projectId?: string;
        signed?: boolean;
        subaccountId?: string;
        title?: string;
        type?: string;
      }
      export interface OrderDocumentsListResponse {
        kind?: string;
        nextPageToken?: string;
        orderDocuments?: Dfareporting.Schema.OrderDocument[];
      }
      export interface OrdersListResponse {
        kind?: string;
        nextPageToken?: string;
        orders?: Dfareporting.Schema.Order[];
      }
      export interface PathToConversionReportCompatibleFields {
        conversionDimensions?: Dfareporting.Schema.Dimension[];
        customFloodlightVariables?: Dfareporting.Schema.Dimension[];
        kind?: string;
        metrics?: Dfareporting.Schema.Metric[];
        perInteractionDimensions?: Dfareporting.Schema.Dimension[];
      }
      export interface Placement {
        accountId?: string;
        adBlockingOptOut?: boolean;
        additionalSizes?: Dfareporting.Schema.Size[];
        advertiserId?: string;
        advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        archived?: boolean;
        campaignId?: string;
        campaignIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        comment?: string;
        compatibility?: string;
        contentCategoryId?: string;
        createInfo?: Dfareporting.Schema.LastModifiedInfo;
        directorySiteId?: string;
        directorySiteIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        externalId?: string;
        id?: string;
        idDimensionValue?: Dfareporting.Schema.DimensionValue;
        keyName?: string;
        kind?: string;
        lastModifiedInfo?: Dfareporting.Schema.LastModifiedInfo;
        lookbackConfiguration?: Dfareporting.Schema.LookbackConfiguration;
        name?: string;
        paymentApproved?: boolean;
        paymentSource?: string;
        placementGroupId?: string;
        placementGroupIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        placementStrategyId?: string;
        pricingSchedule?: Dfareporting.Schema.PricingSchedule;
        primary?: boolean;
        publisherUpdateInfo?: Dfareporting.Schema.LastModifiedInfo;
        siteId?: string;
        siteIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        size?: Dfareporting.Schema.Size;
        sslRequired?: boolean;
        status?: string;
        subaccountId?: string;
        tagFormats?: string[];
        tagSetting?: Dfareporting.Schema.TagSetting;
        videoActiveViewOptOut?: boolean;
        videoSettings?: Dfareporting.Schema.VideoSettings;
        vpaidAdapterChoice?: string;
      }
      export interface PlacementAssignment {
        active?: boolean;
        placementId?: string;
        placementIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        sslRequired?: boolean;
      }
      export interface PlacementGroup {
        accountId?: string;
        advertiserId?: string;
        advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        archived?: boolean;
        campaignId?: string;
        campaignIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        childPlacementIds?: string[];
        comment?: string;
        contentCategoryId?: string;
        createInfo?: Dfareporting.Schema.LastModifiedInfo;
        directorySiteId?: string;
        directorySiteIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        externalId?: string;
        id?: string;
        idDimensionValue?: Dfareporting.Schema.DimensionValue;
        kind?: string;
        lastModifiedInfo?: Dfareporting.Schema.LastModifiedInfo;
        name?: string;
        placementGroupType?: string;
        placementStrategyId?: string;
        pricingSchedule?: Dfareporting.Schema.PricingSchedule;
        primaryPlacementId?: string;
        primaryPlacementIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        siteId?: string;
        siteIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        subaccountId?: string;
      }
      export interface PlacementGroupsListResponse {
        kind?: string;
        nextPageToken?: string;
        placementGroups?: Dfareporting.Schema.PlacementGroup[];
      }
      export interface PlacementStrategiesListResponse {
        kind?: string;
        nextPageToken?: string;
        placementStrategies?: Dfareporting.Schema.PlacementStrategy[];
      }
      export interface PlacementStrategy {
        accountId?: string;
        id?: string;
        kind?: string;
        name?: string;
      }
      export interface PlacementTag {
        placementId?: string;
        tagDatas?: Dfareporting.Schema.TagData[];
      }
      export interface PlacementsGenerateTagsResponse {
        kind?: string;
        placementTags?: Dfareporting.Schema.PlacementTag[];
      }
      export interface PlacementsListResponse {
        kind?: string;
        nextPageToken?: string;
        placements?: Dfareporting.Schema.Placement[];
      }
      export interface PlatformType {
        id?: string;
        kind?: string;
        name?: string;
      }
      export interface PlatformTypesListResponse {
        kind?: string;
        platformTypes?: Dfareporting.Schema.PlatformType[];
      }
      export interface PopupWindowProperties {
        dimension?: Dfareporting.Schema.Size;
        offset?: Dfareporting.Schema.OffsetPosition;
        positionType?: string;
        showAddressBar?: boolean;
        showMenuBar?: boolean;
        showScrollBar?: boolean;
        showStatusBar?: boolean;
        showToolBar?: boolean;
        title?: string;
      }
      export interface PostalCode {
        code?: string;
        countryCode?: string;
        countryDartId?: string;
        id?: string;
        kind?: string;
      }
      export interface PostalCodesListResponse {
        kind?: string;
        postalCodes?: Dfareporting.Schema.PostalCode[];
      }
      export interface Pricing {
        capCostType?: string;
        endDate?: string;
        flights?: Dfareporting.Schema.Flight[];
        groupType?: string;
        pricingType?: string;
        startDate?: string;
      }
      export interface PricingSchedule {
        capCostOption?: string;
        disregardOverdelivery?: boolean;
        endDate?: string;
        flighted?: boolean;
        floodlightActivityId?: string;
        pricingPeriods?: Dfareporting.Schema.PricingSchedulePricingPeriod[];
        pricingType?: string;
        startDate?: string;
        testingStartDate?: string;
      }
      export interface PricingSchedulePricingPeriod {
        endDate?: string;
        pricingComment?: string;
        rateOrCostNanos?: string;
        startDate?: string;
        units?: string;
      }
      export interface Project {
        accountId?: string;
        advertiserId?: string;
        audienceAgeGroup?: string;
        audienceGender?: string;
        budget?: string;
        clientBillingCode?: string;
        clientName?: string;
        endDate?: string;
        id?: string;
        kind?: string;
        lastModifiedInfo?: Dfareporting.Schema.LastModifiedInfo;
        name?: string;
        overview?: string;
        startDate?: string;
        subaccountId?: string;
        targetClicks?: string;
        targetConversions?: string;
        targetCpaNanos?: string;
        targetCpcNanos?: string;
        targetCpmActiveViewNanos?: string;
        targetCpmNanos?: string;
        targetImpressions?: string;
      }
      export interface ProjectsListResponse {
        kind?: string;
        nextPageToken?: string;
        projects?: Dfareporting.Schema.Project[];
      }
      export interface ReachReportCompatibleFields {
        dimensionFilters?: Dfareporting.Schema.Dimension[];
        dimensions?: Dfareporting.Schema.Dimension[];
        kind?: string;
        metrics?: Dfareporting.Schema.Metric[];
        pivotedActivityMetrics?: Dfareporting.Schema.Metric[];
        reachByFrequencyMetrics?: Dfareporting.Schema.Metric[];
      }
      export interface Recipient {
        deliveryType?: string;
        email?: string;
        kind?: string;
      }
      export interface Region {
        countryCode?: string;
        countryDartId?: string;
        dartId?: string;
        kind?: string;
        name?: string;
        regionCode?: string;
      }
      export interface RegionsListResponse {
        kind?: string;
        regions?: Dfareporting.Schema.Region[];
      }
      export interface RemarketingList {
        accountId?: string;
        active?: boolean;
        advertiserId?: string;
        advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        description?: string;
        id?: string;
        kind?: string;
        lifeSpan?: string;
        listPopulationRule?: Dfareporting.Schema.ListPopulationRule;
        listSize?: string;
        listSource?: string;
        name?: string;
        subaccountId?: string;
      }
      export interface RemarketingListShare {
        kind?: string;
        remarketingListId?: string;
        sharedAccountIds?: string[];
        sharedAdvertiserIds?: string[];
      }
      export interface RemarketingListsListResponse {
        kind?: string;
        nextPageToken?: string;
        remarketingLists?: Dfareporting.Schema.RemarketingList[];
      }
      export interface Report {
        accountId?: string;
        criteria?: Dfareporting.Schema.ReportCriteria;
        crossDimensionReachCriteria?: Dfareporting.Schema.ReportCrossDimensionReachCriteria;
        delivery?: Dfareporting.Schema.ReportDelivery;
        etag?: string;
        fileName?: string;
        floodlightCriteria?: Dfareporting.Schema.ReportFloodlightCriteria;
        format?: string;
        id?: string;
        kind?: string;
        lastModifiedTime?: string;
        name?: string;
        ownerProfileId?: string;
        pathToConversionCriteria?: Dfareporting.Schema.ReportPathToConversionCriteria;
        reachCriteria?: Dfareporting.Schema.ReportReachCriteria;
        schedule?: Dfareporting.Schema.ReportSchedule;
        subAccountId?: string;
        type?: string;
      }
      export interface ReportCompatibleFields {
        dimensionFilters?: Dfareporting.Schema.Dimension[];
        dimensions?: Dfareporting.Schema.Dimension[];
        kind?: string;
        metrics?: Dfareporting.Schema.Metric[];
        pivotedActivityMetrics?: Dfareporting.Schema.Metric[];
      }
      export interface ReportCriteria {
        activities?: Dfareporting.Schema.Activities;
        customRichMediaEvents?: Dfareporting.Schema.CustomRichMediaEvents;
        dateRange?: Dfareporting.Schema.DateRange;
        dimensionFilters?: Dfareporting.Schema.DimensionValue[];
        dimensions?: Dfareporting.Schema.SortedDimension[];
        metricNames?: string[];
      }
      export interface ReportCrossDimensionReachCriteria {
        breakdown?: Dfareporting.Schema.SortedDimension[];
        dateRange?: Dfareporting.Schema.DateRange;
        dimension?: string;
        dimensionFilters?: Dfareporting.Schema.DimensionValue[];
        metricNames?: string[];
        overlapMetricNames?: string[];
        pivoted?: boolean;
      }
      export interface ReportDelivery {
        emailOwner?: boolean;
        emailOwnerDeliveryType?: string;
        message?: string;
        recipients?: Dfareporting.Schema.Recipient[];
      }
      export interface ReportFloodlightCriteria {
        customRichMediaEvents?: Dfareporting.Schema.DimensionValue[];
        dateRange?: Dfareporting.Schema.DateRange;
        dimensionFilters?: Dfareporting.Schema.DimensionValue[];
        dimensions?: Dfareporting.Schema.SortedDimension[];
        floodlightConfigId?: Dfareporting.Schema.DimensionValue;
        metricNames?: string[];
        reportProperties?: Dfareporting.Schema.ReportFloodlightCriteriaReportProperties;
      }
      export interface ReportFloodlightCriteriaReportProperties {
        includeAttributedIPConversions?: boolean;
        includeUnattributedCookieConversions?: boolean;
        includeUnattributedIPConversions?: boolean;
      }
      export interface ReportList {
        etag?: string;
        items?: Dfareporting.Schema.Report[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface ReportPathToConversionCriteria {
        activityFilters?: Dfareporting.Schema.DimensionValue[];
        conversionDimensions?: Dfareporting.Schema.SortedDimension[];
        customFloodlightVariables?: Dfareporting.Schema.SortedDimension[];
        customRichMediaEvents?: Dfareporting.Schema.DimensionValue[];
        dateRange?: Dfareporting.Schema.DateRange;
        floodlightConfigId?: Dfareporting.Schema.DimensionValue;
        metricNames?: string[];
        perInteractionDimensions?: Dfareporting.Schema.SortedDimension[];
        reportProperties?: Dfareporting.Schema.ReportPathToConversionCriteriaReportProperties;
      }
      export interface ReportPathToConversionCriteriaReportProperties {
        clicksLookbackWindow?: number;
        impressionsLookbackWindow?: number;
        includeAttributedIPConversions?: boolean;
        includeUnattributedCookieConversions?: boolean;
        includeUnattributedIPConversions?: boolean;
        maximumClickInteractions?: number;
        maximumImpressionInteractions?: number;
        maximumInteractionGap?: number;
        pivotOnInteractionPath?: boolean;
      }
      export interface ReportReachCriteria {
        activities?: Dfareporting.Schema.Activities;
        customRichMediaEvents?: Dfareporting.Schema.CustomRichMediaEvents;
        dateRange?: Dfareporting.Schema.DateRange;
        dimensionFilters?: Dfareporting.Schema.DimensionValue[];
        dimensions?: Dfareporting.Schema.SortedDimension[];
        enableAllDimensionCombinations?: boolean;
        metricNames?: string[];
        reachByFrequencyMetricNames?: string[];
      }
      export interface ReportSchedule {
        active?: boolean;
        every?: number;
        expirationDate?: string;
        repeats?: string;
        repeatsOnWeekDays?: string[];
        runsOnDayOfMonth?: string;
        startDate?: string;
      }
      export interface ReportsConfiguration {
        exposureToConversionEnabled?: boolean;
        lookbackConfiguration?: Dfareporting.Schema.LookbackConfiguration;
        reportGenerationTimeZoneId?: string;
      }
      export interface RichMediaExitOverride {
        clickThroughUrl?: Dfareporting.Schema.ClickThroughUrl;
        enabled?: boolean;
        exitId?: string;
      }
      export interface Rule {
        assetId?: string;
        name?: string;
        targetingTemplateId?: string;
      }
      export interface Site {
        accountId?: string;
        approved?: boolean;
        directorySiteId?: string;
        directorySiteIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        id?: string;
        idDimensionValue?: Dfareporting.Schema.DimensionValue;
        keyName?: string;
        kind?: string;
        name?: string;
        siteContacts?: Dfareporting.Schema.SiteContact[];
        siteSettings?: Dfareporting.Schema.SiteSettings;
        subaccountId?: string;
        videoSettings?: Dfareporting.Schema.SiteVideoSettings;
      }
      export interface SiteCompanionSetting {
        companionsDisabled?: boolean;
        enabledSizes?: Dfareporting.Schema.Size[];
        imageOnly?: boolean;
        kind?: string;
      }
      export interface SiteContact {
        address?: string;
        contactType?: string;
        email?: string;
        firstName?: string;
        id?: string;
        lastName?: string;
        phone?: string;
        title?: string;
      }
      export interface SiteSettings {
        activeViewOptOut?: boolean;
        adBlockingOptOut?: boolean;
        disableNewCookie?: boolean;
        tagSetting?: Dfareporting.Schema.TagSetting;
        videoActiveViewOptOutTemplate?: boolean;
        vpaidAdapterChoiceTemplate?: string;
      }
      export interface SiteSkippableSetting {
        kind?: string;
        progressOffset?: Dfareporting.Schema.VideoOffset;
        skipOffset?: Dfareporting.Schema.VideoOffset;
        skippable?: boolean;
      }
      export interface SiteTranscodeSetting {
        enabledVideoFormats?: number[];
        kind?: string;
      }
      export interface SiteVideoSettings {
        companionSettings?: Dfareporting.Schema.SiteCompanionSetting;
        kind?: string;
        orientation?: string;
        skippableSettings?: Dfareporting.Schema.SiteSkippableSetting;
        transcodeSettings?: Dfareporting.Schema.SiteTranscodeSetting;
      }
      export interface SitesListResponse {
        kind?: string;
        nextPageToken?: string;
        sites?: Dfareporting.Schema.Site[];
      }
      export interface Size {
        height?: number;
        iab?: boolean;
        id?: string;
        kind?: string;
        width?: number;
      }
      export interface SizesListResponse {
        kind?: string;
        sizes?: Dfareporting.Schema.Size[];
      }
      export interface SkippableSetting {
        kind?: string;
        progressOffset?: Dfareporting.Schema.VideoOffset;
        skipOffset?: Dfareporting.Schema.VideoOffset;
        skippable?: boolean;
      }
      export interface SortedDimension {
        kind?: string;
        name?: string;
        sortOrder?: string;
      }
      export interface Subaccount {
        accountId?: string;
        availablePermissionIds?: string[];
        id?: string;
        kind?: string;
        name?: string;
      }
      export interface SubaccountsListResponse {
        kind?: string;
        nextPageToken?: string;
        subaccounts?: Dfareporting.Schema.Subaccount[];
      }
      export interface TagData {
        adId?: string;
        clickTag?: string;
        creativeId?: string;
        format?: string;
        impressionTag?: string;
      }
      export interface TagSetting {
        additionalKeyValues?: string;
        includeClickThroughUrls?: boolean;
        includeClickTracking?: boolean;
        keywordOption?: string;
      }
      export interface TagSettings {
        dynamicTagEnabled?: boolean;
        imageTagEnabled?: boolean;
      }
      export interface TargetWindow {
        customHtml?: string;
        targetWindowOption?: string;
      }
      export interface TargetableRemarketingList {
        accountId?: string;
        active?: boolean;
        advertiserId?: string;
        advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        description?: string;
        id?: string;
        kind?: string;
        lifeSpan?: string;
        listSize?: string;
        listSource?: string;
        name?: string;
        subaccountId?: string;
      }
      export interface TargetableRemarketingListsListResponse {
        kind?: string;
        nextPageToken?: string;
        targetableRemarketingLists?: Dfareporting.Schema.TargetableRemarketingList[];
      }
      export interface TargetingTemplate {
        accountId?: string;
        advertiserId?: string;
        advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        dayPartTargeting?: Dfareporting.Schema.DayPartTargeting;
        geoTargeting?: Dfareporting.Schema.GeoTargeting;
        id?: string;
        keyValueTargetingExpression?: Dfareporting.Schema.KeyValueTargetingExpression;
        kind?: string;
        languageTargeting?: Dfareporting.Schema.LanguageTargeting;
        listTargetingExpression?: Dfareporting.Schema.ListTargetingExpression;
        name?: string;
        subaccountId?: string;
        technologyTargeting?: Dfareporting.Schema.TechnologyTargeting;
      }
      export interface TargetingTemplatesListResponse {
        kind?: string;
        nextPageToken?: string;
        targetingTemplates?: Dfareporting.Schema.TargetingTemplate[];
      }
      export interface TechnologyTargeting {
        browsers?: Dfareporting.Schema.Browser[];
        connectionTypes?: Dfareporting.Schema.ConnectionType[];
        mobileCarriers?: Dfareporting.Schema.MobileCarrier[];
        operatingSystemVersions?: Dfareporting.Schema.OperatingSystemVersion[];
        operatingSystems?: Dfareporting.Schema.OperatingSystem[];
        platformTypes?: Dfareporting.Schema.PlatformType[];
      }
      export interface ThirdPartyAuthenticationToken {
        name?: string;
        value?: string;
      }
      export interface ThirdPartyTrackingUrl {
        thirdPartyUrlType?: string;
        url?: string;
      }
      export interface TranscodeSetting {
        enabledVideoFormats?: number[];
        kind?: string;
      }
      export interface UniversalAdId {
        registry?: string;
        value?: string;
      }
      export interface UserDefinedVariableConfiguration {
        dataType?: string;
        reportName?: string;
        variableType?: string;
      }
      export interface UserProfile {
        accountId?: string;
        accountName?: string;
        etag?: string;
        kind?: string;
        profileId?: string;
        subAccountId?: string;
        subAccountName?: string;
        userName?: string;
      }
      export interface UserProfileList {
        etag?: string;
        items?: Dfareporting.Schema.UserProfile[];
        kind?: string;
      }
      export interface UserRole {
        accountId?: string;
        defaultUserRole?: boolean;
        id?: string;
        kind?: string;
        name?: string;
        parentUserRoleId?: string;
        permissions?: Dfareporting.Schema.UserRolePermission[];
        subaccountId?: string;
      }
      export interface UserRolePermission {
        availability?: string;
        id?: string;
        kind?: string;
        name?: string;
        permissionGroupId?: string;
      }
      export interface UserRolePermissionGroup {
        id?: string;
        kind?: string;
        name?: string;
      }
      export interface UserRolePermissionGroupsListResponse {
        kind?: string;
        userRolePermissionGroups?: Dfareporting.Schema.UserRolePermissionGroup[];
      }
      export interface UserRolePermissionsListResponse {
        kind?: string;
        userRolePermissions?: Dfareporting.Schema.UserRolePermission[];
      }
      export interface UserRolesListResponse {
        kind?: string;
        nextPageToken?: string;
        userRoles?: Dfareporting.Schema.UserRole[];
      }
      export interface VideoFormat {
        fileType?: string;
        id?: number;
        kind?: string;
        resolution?: Dfareporting.Schema.Size;
        targetBitRate?: number;
      }
      export interface VideoFormatsListResponse {
        kind?: string;
        videoFormats?: Dfareporting.Schema.VideoFormat[];
      }
      export interface VideoOffset {
        offsetPercentage?: number;
        offsetSeconds?: number;
      }
      export interface VideoSettings {
        companionSettings?: Dfareporting.Schema.CompanionSetting;
        kind?: string;
        orientation?: string;
        skippableSettings?: Dfareporting.Schema.SkippableSetting;
        transcodeSettings?: Dfareporting.Schema.TranscodeSetting;
      }
    }
  }
  export interface Dfareporting {
    AccountActiveAdSummaries?: Dfareporting.Collection.AccountActiveAdSummariesCollection;
    AccountPermissionGroups?: Dfareporting.Collection.AccountPermissionGroupsCollection;
    AccountPermissions?: Dfareporting.Collection.AccountPermissionsCollection;
    AccountUserProfiles?: Dfareporting.Collection.AccountUserProfilesCollection;
    Accounts?: Dfareporting.Collection.AccountsCollection;
    Ads?: Dfareporting.Collection.AdsCollection;
    AdvertiserGroups?: Dfareporting.Collection.AdvertiserGroupsCollection;
    AdvertiserLandingPages?: Dfareporting.Collection.AdvertiserLandingPagesCollection;
    Advertisers?: Dfareporting.Collection.AdvertisersCollection;
    Browsers?: Dfareporting.Collection.BrowsersCollection;
    CampaignCreativeAssociations?: Dfareporting.Collection.CampaignCreativeAssociationsCollection;
    Campaigns?: Dfareporting.Collection.CampaignsCollection;
    ChangeLogs?: Dfareporting.Collection.ChangeLogsCollection;
    Cities?: Dfareporting.Collection.CitiesCollection;
    ConnectionTypes?: Dfareporting.Collection.ConnectionTypesCollection;
    ContentCategories?: Dfareporting.Collection.ContentCategoriesCollection;
    Conversions?: Dfareporting.Collection.ConversionsCollection;
    Countries?: Dfareporting.Collection.CountriesCollection;
    CreativeAssets?: Dfareporting.Collection.CreativeAssetsCollection;
    CreativeFieldValues?: Dfareporting.Collection.CreativeFieldValuesCollection;
    CreativeFields?: Dfareporting.Collection.CreativeFieldsCollection;
    CreativeGroups?: Dfareporting.Collection.CreativeGroupsCollection;
    Creatives?: Dfareporting.Collection.CreativesCollection;
    DimensionValues?: Dfareporting.Collection.DimensionValuesCollection;
    DirectorySites?: Dfareporting.Collection.DirectorySitesCollection;
    DynamicTargetingKeys?: Dfareporting.Collection.DynamicTargetingKeysCollection;
    EventTags?: Dfareporting.Collection.EventTagsCollection;
    Files?: Dfareporting.Collection.FilesCollection;
    FloodlightActivities?: Dfareporting.Collection.FloodlightActivitiesCollection;
    FloodlightActivityGroups?: Dfareporting.Collection.FloodlightActivityGroupsCollection;
    FloodlightConfigurations?: Dfareporting.Collection.FloodlightConfigurationsCollection;
    InventoryItems?: Dfareporting.Collection.InventoryItemsCollection;
    Languages?: Dfareporting.Collection.LanguagesCollection;
    Metros?: Dfareporting.Collection.MetrosCollection;
    MobileApps?: Dfareporting.Collection.MobileAppsCollection;
    MobileCarriers?: Dfareporting.Collection.MobileCarriersCollection;
    OperatingSystemVersions?: Dfareporting.Collection.OperatingSystemVersionsCollection;
    OperatingSystems?: Dfareporting.Collection.OperatingSystemsCollection;
    OrderDocuments?: Dfareporting.Collection.OrderDocumentsCollection;
    Orders?: Dfareporting.Collection.OrdersCollection;
    PlacementGroups?: Dfareporting.Collection.PlacementGroupsCollection;
    PlacementStrategies?: Dfareporting.Collection.PlacementStrategiesCollection;
    Placements?: Dfareporting.Collection.PlacementsCollection;
    PlatformTypes?: Dfareporting.Collection.PlatformTypesCollection;
    PostalCodes?: Dfareporting.Collection.PostalCodesCollection;
    Projects?: Dfareporting.Collection.ProjectsCollection;
    Regions?: Dfareporting.Collection.RegionsCollection;
    RemarketingListShares?: Dfareporting.Collection.RemarketingListSharesCollection;
    RemarketingLists?: Dfareporting.Collection.RemarketingListsCollection;
    Reports?: Dfareporting.Collection.ReportsCollection;
    Sites?: Dfareporting.Collection.SitesCollection;
    Sizes?: Dfareporting.Collection.SizesCollection;
    Subaccounts?: Dfareporting.Collection.SubaccountsCollection;
    TargetableRemarketingLists?: Dfareporting.Collection.TargetableRemarketingListsCollection;
    TargetingTemplates?: Dfareporting.Collection.TargetingTemplatesCollection;
    UserProfiles?: Dfareporting.Collection.UserProfilesCollection;
    UserRolePermissionGroups?: Dfareporting.Collection.UserRolePermissionGroupsCollection;
    UserRolePermissions?: Dfareporting.Collection.UserRolePermissionsCollection;
    UserRoles?: Dfareporting.Collection.UserRolesCollection;
    VideoFormats?: Dfareporting.Collection.VideoFormatsCollection;
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
