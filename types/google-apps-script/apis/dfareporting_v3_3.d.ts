// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
        patch(resource: Schema.AccountUserProfile, profileId: string, id: string): Dfareporting.Schema.AccountUserProfile;
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
        patch(resource: Schema.AdvertiserGroup, profileId: string, id: string): Dfareporting.Schema.AdvertiserGroup;
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
        insert(resource: Schema.CampaignCreativeAssociation, profileId: string, campaignId: string): Dfareporting.Schema.CampaignCreativeAssociation;
        // Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.
        list(profileId: string, campaignId: string): Dfareporting.Schema.CampaignCreativeAssociationsListResponse;
        // Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.
        list(profileId: string, campaignId: string, optionalArgs: object): Dfareporting.Schema.CampaignCreativeAssociationsListResponse;
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
        patch(resource: Schema.ContentCategory, profileId: string, id: string): Dfareporting.Schema.ContentCategory;
        // Deletes an existing content category.
        remove(profileId: string, id: string): void;
        // Updates an existing content category.
        update(resource: Schema.ContentCategory, profileId: string): Dfareporting.Schema.ContentCategory;
      }
      interface ConversionsCollection {
        // Inserts conversions.
        batchinsert(resource: Schema.ConversionsBatchInsertRequest, profileId: string): Dfareporting.Schema.ConversionsBatchInsertResponse;
        // Updates existing conversions.
        batchupdate(resource: Schema.ConversionsBatchUpdateRequest, profileId: string): Dfareporting.Schema.ConversionsBatchUpdateResponse;
      }
      interface CountriesCollection {
        // Gets one country by ID.
        get(profileId: string, dartId: string): Dfareporting.Schema.Country;
        // Retrieves a list of countries.
        list(profileId: string): Dfareporting.Schema.CountriesListResponse;
      }
      interface CreativeAssetsCollection {
        // Inserts a new creative asset.
        insert(resource: Schema.CreativeAssetMetadata, profileId: string, advertiserId: string): Dfareporting.Schema.CreativeAssetMetadata;
        // Inserts a new creative asset.
        insert(resource: Schema.CreativeAssetMetadata, profileId: string, advertiserId: string, mediaData: any): Dfareporting.Schema.CreativeAssetMetadata;
      }
      interface CreativeFieldValuesCollection {
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
        query(resource: Schema.DimensionValueRequest, profileId: string): Dfareporting.Schema.DimensionValueList;
        // Retrieves list of report dimension values for a list of filters.
        query(resource: Schema.DimensionValueRequest, profileId: string, optionalArgs: object): Dfareporting.Schema.DimensionValueList;
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
        insert(resource: Schema.DynamicTargetingKey, profileId: string): Dfareporting.Schema.DynamicTargetingKey;
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
      interface FloodlightActivityGroupsCollection {
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
      interface FloodlightConfigurationsCollection {
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
      interface InventoryItemsCollection {
        // Gets one inventory item by ID.
        get(profileId: string, projectId: string, id: string): Dfareporting.Schema.InventoryItem;
        // Retrieves a list of inventory items, possibly filtered. This method supports paging.
        list(profileId: string, projectId: string): Dfareporting.Schema.InventoryItemsListResponse;
        // Retrieves a list of inventory items, possibly filtered. This method supports paging.
        list(profileId: string, projectId: string, optionalArgs: object): Dfareporting.Schema.InventoryItemsListResponse;
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
        list(profileId: string, projectId: string, optionalArgs: object): Dfareporting.Schema.OrderDocumentsListResponse;
      }
      interface OrdersCollection {
        // Gets one order by ID.
        get(profileId: string, projectId: string, id: string): Dfareporting.Schema.Order;
        // Retrieves a list of orders, possibly filtered. This method supports paging.
        list(profileId: string, projectId: string): Dfareporting.Schema.OrdersListResponse;
        // Retrieves a list of orders, possibly filtered. This method supports paging.
        list(profileId: string, projectId: string, optionalArgs: object): Dfareporting.Schema.OrdersListResponse;
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
        patch(resource: Schema.PlacementGroup, profileId: string, id: string): Dfareporting.Schema.PlacementGroup;
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
        patch(resource: Schema.PlacementStrategy, profileId: string, id: string): Dfareporting.Schema.PlacementStrategy;
        // Deletes an existing placement strategy.
        remove(profileId: string, id: string): void;
        // Updates an existing placement strategy.
        update(resource: Schema.PlacementStrategy, profileId: string): Dfareporting.Schema.PlacementStrategy;
      }
      interface PlacementsCollection {
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
        patch(resource: Schema.RemarketingListShare, profileId: string, remarketingListId: string): Dfareporting.Schema.RemarketingListShare;
        // Updates an existing remarketing list share.
        update(resource: Schema.RemarketingListShare, profileId: string): Dfareporting.Schema.RemarketingListShare;
      }
      interface RemarketingListsCollection {
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
      interface ReportsCollection {
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
        list(profileId: string, advertiserId: string): Dfareporting.Schema.TargetableRemarketingListsListResponse;
        // Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.
        list(profileId: string, advertiserId: string, optionalArgs: object): Dfareporting.Schema.TargetableRemarketingListsListResponse;
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
        patch(resource: Schema.TargetingTemplate, profileId: string, id: string): Dfareporting.Schema.TargetingTemplate;
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
      interface AccountActiveAdSummary {
        accountId?: string;
        activeAds?: string;
        activeAdsLimitTier?: string;
        availableAds?: string;
        kind?: string;
      }
      interface AccountPermission {
        accountProfiles?: string[];
        id?: string;
        kind?: string;
        level?: string;
        name?: string;
        permissionGroupId?: string;
      }
      interface AccountPermissionGroup {
        id?: string;
        kind?: string;
        name?: string;
      }
      interface AccountPermissionGroupsListResponse {
        accountPermissionGroups?: Dfareporting.Schema.AccountPermissionGroup[];
        kind?: string;
      }
      interface AccountPermissionsListResponse {
        accountPermissions?: Dfareporting.Schema.AccountPermission[];
        kind?: string;
      }
      interface AccountUserProfile {
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
      interface AccountUserProfilesListResponse {
        accountUserProfiles?: Dfareporting.Schema.AccountUserProfile[];
        kind?: string;
        nextPageToken?: string;
      }
      interface AccountsListResponse {
        accounts?: Dfareporting.Schema.Account[];
        kind?: string;
        nextPageToken?: string;
      }
      interface Activities {
        filters?: Dfareporting.Schema.DimensionValue[];
        kind?: string;
        metricNames?: string[];
      }
      interface Ad {
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
      interface AdBlockingConfiguration {
        clickThroughUrl?: string;
        creativeBundleId?: string;
        enabled?: boolean;
        overrideClickThroughUrl?: boolean;
      }
      interface AdSlot {
        comment?: string;
        compatibility?: string;
        height?: string;
        linkedPlacementId?: string;
        name?: string;
        paymentSourceType?: string;
        primary?: boolean;
        width?: string;
      }
      interface AdsListResponse {
        ads?: Dfareporting.Schema.Ad[];
        kind?: string;
        nextPageToken?: string;
      }
      interface Advertiser {
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
      interface AdvertiserGroup {
        accountId?: string;
        id?: string;
        kind?: string;
        name?: string;
      }
      interface AdvertiserGroupsListResponse {
        advertiserGroups?: Dfareporting.Schema.AdvertiserGroup[];
        kind?: string;
        nextPageToken?: string;
      }
      interface AdvertiserLandingPagesListResponse {
        kind?: string;
        landingPages?: Dfareporting.Schema.LandingPage[];
        nextPageToken?: string;
      }
      interface AdvertisersListResponse {
        advertisers?: Dfareporting.Schema.Advertiser[];
        kind?: string;
        nextPageToken?: string;
      }
      interface AudienceSegment {
        allocation?: number;
        id?: string;
        name?: string;
      }
      interface AudienceSegmentGroup {
        audienceSegments?: Dfareporting.Schema.AudienceSegment[];
        id?: string;
        name?: string;
      }
      interface Browser {
        browserVersionId?: string;
        dartId?: string;
        kind?: string;
        majorVersion?: string;
        minorVersion?: string;
        name?: string;
      }
      interface BrowsersListResponse {
        browsers?: Dfareporting.Schema.Browser[];
        kind?: string;
      }
      interface Campaign {
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
      interface CampaignCreativeAssociation {
        creativeId?: string;
        kind?: string;
      }
      interface CampaignCreativeAssociationsListResponse {
        campaignCreativeAssociations?: Dfareporting.Schema.CampaignCreativeAssociation[];
        kind?: string;
        nextPageToken?: string;
      }
      interface CampaignsListResponse {
        campaigns?: Dfareporting.Schema.Campaign[];
        kind?: string;
        nextPageToken?: string;
      }
      interface ChangeLog {
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
      interface ChangeLogsListResponse {
        changeLogs?: Dfareporting.Schema.ChangeLog[];
        kind?: string;
        nextPageToken?: string;
      }
      interface CitiesListResponse {
        cities?: Dfareporting.Schema.City[];
        kind?: string;
      }
      interface City {
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
      interface ClickTag {
        clickThroughUrl?: Dfareporting.Schema.CreativeClickThroughUrl;
        eventName?: string;
        name?: string;
      }
      interface ClickThroughUrl {
        computedClickThroughUrl?: string;
        customClickThroughUrl?: string;
        defaultLandingPage?: boolean;
        landingPageId?: string;
      }
      interface ClickThroughUrlSuffixProperties {
        clickThroughUrlSuffix?: string;
        overrideInheritedSuffix?: boolean;
      }
      interface CompanionClickThroughOverride {
        clickThroughUrl?: Dfareporting.Schema.ClickThroughUrl;
        creativeId?: string;
      }
      interface CompanionSetting {
        companionsDisabled?: boolean;
        enabledSizes?: Dfareporting.Schema.Size[];
        imageOnly?: boolean;
        kind?: string;
      }
      interface CompatibleFields {
        crossDimensionReachReportCompatibleFields?: Dfareporting.Schema.CrossDimensionReachReportCompatibleFields;
        floodlightReportCompatibleFields?: Dfareporting.Schema.FloodlightReportCompatibleFields;
        kind?: string;
        pathToConversionReportCompatibleFields?: Dfareporting.Schema.PathToConversionReportCompatibleFields;
        reachReportCompatibleFields?: Dfareporting.Schema.ReachReportCompatibleFields;
        reportCompatibleFields?: Dfareporting.Schema.ReportCompatibleFields;
      }
      interface ConnectionType {
        id?: string;
        kind?: string;
        name?: string;
      }
      interface ConnectionTypesListResponse {
        connectionTypes?: Dfareporting.Schema.ConnectionType[];
        kind?: string;
      }
      interface ContentCategoriesListResponse {
        contentCategories?: Dfareporting.Schema.ContentCategory[];
        kind?: string;
        nextPageToken?: string;
      }
      interface ContentCategory {
        accountId?: string;
        id?: string;
        kind?: string;
        name?: string;
      }
      interface Conversion {
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
      interface ConversionError {
        code?: string;
        kind?: string;
        message?: string;
      }
      interface ConversionStatus {
        conversion?: Dfareporting.Schema.Conversion;
        errors?: Dfareporting.Schema.ConversionError[];
        kind?: string;
      }
      interface ConversionsBatchInsertRequest {
        conversions?: Dfareporting.Schema.Conversion[];
        encryptionInfo?: Dfareporting.Schema.EncryptionInfo;
        kind?: string;
      }
      interface ConversionsBatchInsertResponse {
        hasFailures?: boolean;
        kind?: string;
        status?: Dfareporting.Schema.ConversionStatus[];
      }
      interface ConversionsBatchUpdateRequest {
        conversions?: Dfareporting.Schema.Conversion[];
        encryptionInfo?: Dfareporting.Schema.EncryptionInfo;
        kind?: string;
      }
      interface ConversionsBatchUpdateResponse {
        hasFailures?: boolean;
        kind?: string;
        status?: Dfareporting.Schema.ConversionStatus[];
      }
      interface CountriesListResponse {
        countries?: Dfareporting.Schema.Country[];
        kind?: string;
      }
      interface Country {
        countryCode?: string;
        dartId?: string;
        kind?: string;
        name?: string;
        sslEnabled?: boolean;
      }
      interface Creative {
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
      interface CreativeAsset {
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
      interface CreativeAssetId {
        name?: string;
        type?: string;
      }
      interface CreativeAssetMetadata {
        assetIdentifier?: Dfareporting.Schema.CreativeAssetId;
        clickTags?: Dfareporting.Schema.ClickTag[];
        detectedFeatures?: string[];
        id?: string;
        idDimensionValue?: Dfareporting.Schema.DimensionValue;
        kind?: string;
        warnedValidationRules?: string[];
      }
      interface CreativeAssetSelection {
        defaultAssetId?: string;
        rules?: Dfareporting.Schema.Rule[];
      }
      interface CreativeAssignment {
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
      interface CreativeClickThroughUrl {
        computedClickThroughUrl?: string;
        customClickThroughUrl?: string;
        landingPageId?: string;
      }
      interface CreativeCustomEvent {
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
      interface CreativeField {
        accountId?: string;
        advertiserId?: string;
        advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        id?: string;
        kind?: string;
        name?: string;
        subaccountId?: string;
      }
      interface CreativeFieldAssignment {
        creativeFieldId?: string;
        creativeFieldValueId?: string;
      }
      interface CreativeFieldValue {
        id?: string;
        kind?: string;
        value?: string;
      }
      interface CreativeFieldValuesListResponse {
        creativeFieldValues?: Dfareporting.Schema.CreativeFieldValue[];
        kind?: string;
        nextPageToken?: string;
      }
      interface CreativeFieldsListResponse {
        creativeFields?: Dfareporting.Schema.CreativeField[];
        kind?: string;
        nextPageToken?: string;
      }
      interface CreativeGroup {
        accountId?: string;
        advertiserId?: string;
        advertiserIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        groupNumber?: number;
        id?: string;
        kind?: string;
        name?: string;
        subaccountId?: string;
      }
      interface CreativeGroupAssignment {
        creativeGroupId?: string;
        creativeGroupNumber?: string;
      }
      interface CreativeGroupsListResponse {
        creativeGroups?: Dfareporting.Schema.CreativeGroup[];
        kind?: string;
        nextPageToken?: string;
      }
      interface CreativeOptimizationConfiguration {
        id?: string;
        name?: string;
        optimizationActivitys?: Dfareporting.Schema.OptimizationActivity[];
        optimizationModel?: string;
      }
      interface CreativeRotation {
        creativeAssignments?: Dfareporting.Schema.CreativeAssignment[];
        creativeOptimizationConfigurationId?: string;
        type?: string;
        weightCalculationStrategy?: string;
      }
      interface CreativesListResponse {
        creatives?: Dfareporting.Schema.Creative[];
        kind?: string;
        nextPageToken?: string;
      }
      interface CrossDimensionReachReportCompatibleFields {
        breakdown?: Dfareporting.Schema.Dimension[];
        dimensionFilters?: Dfareporting.Schema.Dimension[];
        kind?: string;
        metrics?: Dfareporting.Schema.Metric[];
        overlapMetrics?: Dfareporting.Schema.Metric[];
      }
      interface CustomFloodlightVariable {
        kind?: string;
        type?: string;
        value?: string;
      }
      interface CustomRichMediaEvents {
        filteredEventIds?: Dfareporting.Schema.DimensionValue[];
        kind?: string;
      }
      interface CustomViewabilityMetric {
        configuration?: Dfareporting.Schema.CustomViewabilityMetricConfiguration;
        id?: string;
        name?: string;
      }
      interface CustomViewabilityMetricConfiguration {
        audible?: boolean;
        timeMillis?: number;
        timePercent?: number;
        viewabilityPercent?: number;
      }
      interface DateRange {
        endDate?: string;
        kind?: string;
        relativeDateRange?: string;
        startDate?: string;
      }
      interface DayPartTargeting {
        daysOfWeek?: string[];
        hoursOfDay?: number[];
        userLocalTime?: boolean;
      }
      interface DeepLink {
        appUrl?: string;
        fallbackUrl?: string;
        kind?: string;
        mobileApp?: Dfareporting.Schema.MobileApp;
        remarketingListIds?: string[];
      }
      interface DefaultClickThroughEventTagProperties {
        defaultClickThroughEventTagId?: string;
        overrideInheritedEventTag?: boolean;
      }
      interface DeliverySchedule {
        frequencyCap?: Dfareporting.Schema.FrequencyCap;
        hardCutoff?: boolean;
        impressionRatio?: string;
        priority?: string;
      }
      interface DfpSettings {
        dfpNetworkCode?: string;
        dfpNetworkName?: string;
        programmaticPlacementAccepted?: boolean;
        pubPaidPlacementAccepted?: boolean;
        publisherPortalOnly?: boolean;
      }
      interface Dimension {
        kind?: string;
        name?: string;
      }
      interface DimensionFilter {
        dimensionName?: string;
        kind?: string;
        value?: string;
      }
      interface DimensionValue {
        dimensionName?: string;
        etag?: string;
        id?: string;
        kind?: string;
        matchType?: string;
        value?: string;
      }
      interface DimensionValueList {
        etag?: string;
        items?: Dfareporting.Schema.DimensionValue[];
        kind?: string;
        nextPageToken?: string;
      }
      interface DimensionValueRequest {
        dimensionName?: string;
        endDate?: string;
        filters?: Dfareporting.Schema.DimensionFilter[];
        kind?: string;
        startDate?: string;
      }
      interface DirectorySite {
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
      interface DirectorySiteSettings {
        activeViewOptOut?: boolean;
        dfpSettings?: Dfareporting.Schema.DfpSettings;
        instreamVideoPlacementAccepted?: boolean;
        interstitialPlacementAccepted?: boolean;
      }
      interface DirectorySitesListResponse {
        directorySites?: Dfareporting.Schema.DirectorySite[];
        kind?: string;
        nextPageToken?: string;
      }
      interface DynamicTargetingKey {
        kind?: string;
        name?: string;
        objectId?: string;
        objectType?: string;
      }
      interface DynamicTargetingKeysListResponse {
        dynamicTargetingKeys?: Dfareporting.Schema.DynamicTargetingKey[];
        kind?: string;
      }
      interface EncryptionInfo {
        encryptionEntityId?: string;
        encryptionEntityType?: string;
        encryptionSource?: string;
        kind?: string;
      }
      interface EventTag {
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
      interface EventTagOverride {
        enabled?: boolean;
        id?: string;
      }
      interface EventTagsListResponse {
        eventTags?: Dfareporting.Schema.EventTag[];
        kind?: string;
      }
      interface File {
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
      interface FileList {
        etag?: string;
        items?: Dfareporting.Schema.File[];
        kind?: string;
        nextPageToken?: string;
      }
      interface FileUrls {
        apiUrl?: string;
        browserUrl?: string;
      }
      interface Flight {
        endDate?: string;
        rateOrCost?: string;
        startDate?: string;
        units?: string;
      }
      interface FloodlightActivitiesGenerateTagResponse {
        floodlightActivityTag?: string;
        globalSiteTagGlobalSnippet?: string;
        kind?: string;
      }
      interface FloodlightActivitiesListResponse {
        floodlightActivities?: Dfareporting.Schema.FloodlightActivity[];
        kind?: string;
        nextPageToken?: string;
      }
      interface FloodlightActivity {
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
      interface FloodlightActivityDynamicTag {
        id?: string;
        name?: string;
        tag?: string;
      }
      interface FloodlightActivityGroup {
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
      interface FloodlightActivityGroupsListResponse {
        floodlightActivityGroups?: Dfareporting.Schema.FloodlightActivityGroup[];
        kind?: string;
        nextPageToken?: string;
      }
      interface FloodlightActivityPublisherDynamicTag {
        clickThrough?: boolean;
        directorySiteId?: string;
        dynamicTag?: Dfareporting.Schema.FloodlightActivityDynamicTag;
        siteId?: string;
        siteIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        viewThrough?: boolean;
      }
      interface FloodlightConfiguration {
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
      interface FloodlightConfigurationsListResponse {
        floodlightConfigurations?: Dfareporting.Schema.FloodlightConfiguration[];
        kind?: string;
      }
      interface FloodlightReportCompatibleFields {
        dimensionFilters?: Dfareporting.Schema.Dimension[];
        dimensions?: Dfareporting.Schema.Dimension[];
        kind?: string;
        metrics?: Dfareporting.Schema.Metric[];
      }
      interface FrequencyCap {
        duration?: string;
        impressions?: string;
      }
      interface FsCommand {
        left?: number;
        positionOption?: string;
        top?: number;
        windowHeight?: number;
        windowWidth?: number;
      }
      interface GeoTargeting {
        cities?: Dfareporting.Schema.City[];
        countries?: Dfareporting.Schema.Country[];
        excludeCountries?: boolean;
        metros?: Dfareporting.Schema.Metro[];
        postalCodes?: Dfareporting.Schema.PostalCode[];
        regions?: Dfareporting.Schema.Region[];
      }
      interface InventoryItem {
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
      interface InventoryItemsListResponse {
        inventoryItems?: Dfareporting.Schema.InventoryItem[];
        kind?: string;
        nextPageToken?: string;
      }
      interface KeyValueTargetingExpression {
        expression?: string;
      }
      interface LandingPage {
        advertiserId?: string;
        archived?: boolean;
        deepLinks?: Dfareporting.Schema.DeepLink[];
        id?: string;
        kind?: string;
        name?: string;
        url?: string;
      }
      interface Language {
        id?: string;
        kind?: string;
        languageCode?: string;
        name?: string;
      }
      interface LanguageTargeting {
        languages?: Dfareporting.Schema.Language[];
      }
      interface LanguagesListResponse {
        kind?: string;
        languages?: Dfareporting.Schema.Language[];
      }
      interface LastModifiedInfo {
        time?: string;
      }
      interface ListPopulationClause {
        terms?: Dfareporting.Schema.ListPopulationTerm[];
      }
      interface ListPopulationRule {
        floodlightActivityId?: string;
        floodlightActivityName?: string;
        listPopulationClauses?: Dfareporting.Schema.ListPopulationClause[];
      }
      interface ListPopulationTerm {
        contains?: boolean;
        negation?: boolean;
        operator?: string;
        remarketingListId?: string;
        type?: string;
        value?: string;
        variableFriendlyName?: string;
        variableName?: string;
      }
      interface ListTargetingExpression {
        expression?: string;
      }
      interface LookbackConfiguration {
        clickDuration?: number;
        postImpressionActivitiesDuration?: number;
      }
      interface Metric {
        kind?: string;
        name?: string;
      }
      interface Metro {
        countryCode?: string;
        countryDartId?: string;
        dartId?: string;
        dmaId?: string;
        kind?: string;
        metroCode?: string;
        name?: string;
      }
      interface MetrosListResponse {
        kind?: string;
        metros?: Dfareporting.Schema.Metro[];
      }
      interface MobileApp {
        directory?: string;
        id?: string;
        kind?: string;
        publisherName?: string;
        title?: string;
      }
      interface MobileAppsListResponse {
        kind?: string;
        mobileApps?: Dfareporting.Schema.MobileApp[];
        nextPageToken?: string;
      }
      interface MobileCarrier {
        countryCode?: string;
        countryDartId?: string;
        id?: string;
        kind?: string;
        name?: string;
      }
      interface MobileCarriersListResponse {
        kind?: string;
        mobileCarriers?: Dfareporting.Schema.MobileCarrier[];
      }
      interface ObjectFilter {
        kind?: string;
        objectIds?: string[];
        status?: string;
      }
      interface OffsetPosition {
        left?: number;
        top?: number;
      }
      interface OmnitureSettings {
        omnitureCostDataEnabled?: boolean;
        omnitureIntegrationEnabled?: boolean;
      }
      interface OperatingSystem {
        dartId?: string;
        desktop?: boolean;
        kind?: string;
        mobile?: boolean;
        name?: string;
      }
      interface OperatingSystemVersion {
        id?: string;
        kind?: string;
        majorVersion?: string;
        minorVersion?: string;
        name?: string;
        operatingSystem?: Dfareporting.Schema.OperatingSystem;
      }
      interface OperatingSystemVersionsListResponse {
        kind?: string;
        operatingSystemVersions?: Dfareporting.Schema.OperatingSystemVersion[];
      }
      interface OperatingSystemsListResponse {
        kind?: string;
        operatingSystems?: Dfareporting.Schema.OperatingSystem[];
      }
      interface OptimizationActivity {
        floodlightActivityId?: string;
        floodlightActivityIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        weight?: number;
      }
      interface Order {
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
      interface OrderContact {
        contactInfo?: string;
        contactName?: string;
        contactTitle?: string;
        contactType?: string;
        signatureUserProfileId?: string;
      }
      interface OrderDocument {
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
      interface OrderDocumentsListResponse {
        kind?: string;
        nextPageToken?: string;
        orderDocuments?: Dfareporting.Schema.OrderDocument[];
      }
      interface OrdersListResponse {
        kind?: string;
        nextPageToken?: string;
        orders?: Dfareporting.Schema.Order[];
      }
      interface PathToConversionReportCompatibleFields {
        conversionDimensions?: Dfareporting.Schema.Dimension[];
        customFloodlightVariables?: Dfareporting.Schema.Dimension[];
        kind?: string;
        metrics?: Dfareporting.Schema.Metric[];
        perInteractionDimensions?: Dfareporting.Schema.Dimension[];
      }
      interface Placement {
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
      interface PlacementAssignment {
        active?: boolean;
        placementId?: string;
        placementIdDimensionValue?: Dfareporting.Schema.DimensionValue;
        sslRequired?: boolean;
      }
      interface PlacementGroup {
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
      interface PlacementGroupsListResponse {
        kind?: string;
        nextPageToken?: string;
        placementGroups?: Dfareporting.Schema.PlacementGroup[];
      }
      interface PlacementStrategiesListResponse {
        kind?: string;
        nextPageToken?: string;
        placementStrategies?: Dfareporting.Schema.PlacementStrategy[];
      }
      interface PlacementStrategy {
        accountId?: string;
        id?: string;
        kind?: string;
        name?: string;
      }
      interface PlacementTag {
        placementId?: string;
        tagDatas?: Dfareporting.Schema.TagData[];
      }
      interface PlacementsGenerateTagsResponse {
        kind?: string;
        placementTags?: Dfareporting.Schema.PlacementTag[];
      }
      interface PlacementsListResponse {
        kind?: string;
        nextPageToken?: string;
        placements?: Dfareporting.Schema.Placement[];
      }
      interface PlatformType {
        id?: string;
        kind?: string;
        name?: string;
      }
      interface PlatformTypesListResponse {
        kind?: string;
        platformTypes?: Dfareporting.Schema.PlatformType[];
      }
      interface PopupWindowProperties {
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
      interface PostalCode {
        code?: string;
        countryCode?: string;
        countryDartId?: string;
        id?: string;
        kind?: string;
      }
      interface PostalCodesListResponse {
        kind?: string;
        postalCodes?: Dfareporting.Schema.PostalCode[];
      }
      interface Pricing {
        capCostType?: string;
        endDate?: string;
        flights?: Dfareporting.Schema.Flight[];
        groupType?: string;
        pricingType?: string;
        startDate?: string;
      }
      interface PricingSchedule {
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
      interface PricingSchedulePricingPeriod {
        endDate?: string;
        pricingComment?: string;
        rateOrCostNanos?: string;
        startDate?: string;
        units?: string;
      }
      interface Project {
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
      interface ProjectsListResponse {
        kind?: string;
        nextPageToken?: string;
        projects?: Dfareporting.Schema.Project[];
      }
      interface ReachReportCompatibleFields {
        dimensionFilters?: Dfareporting.Schema.Dimension[];
        dimensions?: Dfareporting.Schema.Dimension[];
        kind?: string;
        metrics?: Dfareporting.Schema.Metric[];
        pivotedActivityMetrics?: Dfareporting.Schema.Metric[];
        reachByFrequencyMetrics?: Dfareporting.Schema.Metric[];
      }
      interface Recipient {
        deliveryType?: string;
        email?: string;
        kind?: string;
      }
      interface Region {
        countryCode?: string;
        countryDartId?: string;
        dartId?: string;
        kind?: string;
        name?: string;
        regionCode?: string;
      }
      interface RegionsListResponse {
        kind?: string;
        regions?: Dfareporting.Schema.Region[];
      }
      interface RemarketingList {
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
      interface RemarketingListShare {
        kind?: string;
        remarketingListId?: string;
        sharedAccountIds?: string[];
        sharedAdvertiserIds?: string[];
      }
      interface RemarketingListsListResponse {
        kind?: string;
        nextPageToken?: string;
        remarketingLists?: Dfareporting.Schema.RemarketingList[];
      }
      interface Report {
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
      interface ReportCompatibleFields {
        dimensionFilters?: Dfareporting.Schema.Dimension[];
        dimensions?: Dfareporting.Schema.Dimension[];
        kind?: string;
        metrics?: Dfareporting.Schema.Metric[];
        pivotedActivityMetrics?: Dfareporting.Schema.Metric[];
      }
      interface ReportCriteria {
        activities?: Dfareporting.Schema.Activities;
        customRichMediaEvents?: Dfareporting.Schema.CustomRichMediaEvents;
        dateRange?: Dfareporting.Schema.DateRange;
        dimensionFilters?: Dfareporting.Schema.DimensionValue[];
        dimensions?: Dfareporting.Schema.SortedDimension[];
        metricNames?: string[];
      }
      interface ReportCrossDimensionReachCriteria {
        breakdown?: Dfareporting.Schema.SortedDimension[];
        dateRange?: Dfareporting.Schema.DateRange;
        dimension?: string;
        dimensionFilters?: Dfareporting.Schema.DimensionValue[];
        metricNames?: string[];
        overlapMetricNames?: string[];
        pivoted?: boolean;
      }
      interface ReportDelivery {
        emailOwner?: boolean;
        emailOwnerDeliveryType?: string;
        message?: string;
        recipients?: Dfareporting.Schema.Recipient[];
      }
      interface ReportFloodlightCriteria {
        customRichMediaEvents?: Dfareporting.Schema.DimensionValue[];
        dateRange?: Dfareporting.Schema.DateRange;
        dimensionFilters?: Dfareporting.Schema.DimensionValue[];
        dimensions?: Dfareporting.Schema.SortedDimension[];
        floodlightConfigId?: Dfareporting.Schema.DimensionValue;
        metricNames?: string[];
        reportProperties?: Dfareporting.Schema.ReportFloodlightCriteriaReportProperties;
      }
      interface ReportFloodlightCriteriaReportProperties {
        includeAttributedIPConversions?: boolean;
        includeUnattributedCookieConversions?: boolean;
        includeUnattributedIPConversions?: boolean;
      }
      interface ReportList {
        etag?: string;
        items?: Dfareporting.Schema.Report[];
        kind?: string;
        nextPageToken?: string;
      }
      interface ReportPathToConversionCriteria {
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
      interface ReportPathToConversionCriteriaReportProperties {
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
      interface ReportReachCriteria {
        activities?: Dfareporting.Schema.Activities;
        customRichMediaEvents?: Dfareporting.Schema.CustomRichMediaEvents;
        dateRange?: Dfareporting.Schema.DateRange;
        dimensionFilters?: Dfareporting.Schema.DimensionValue[];
        dimensions?: Dfareporting.Schema.SortedDimension[];
        enableAllDimensionCombinations?: boolean;
        metricNames?: string[];
        reachByFrequencyMetricNames?: string[];
      }
      interface ReportSchedule {
        active?: boolean;
        every?: number;
        expirationDate?: string;
        repeats?: string;
        repeatsOnWeekDays?: string[];
        runsOnDayOfMonth?: string;
        startDate?: string;
      }
      interface ReportsConfiguration {
        exposureToConversionEnabled?: boolean;
        lookbackConfiguration?: Dfareporting.Schema.LookbackConfiguration;
        reportGenerationTimeZoneId?: string;
      }
      interface RichMediaExitOverride {
        clickThroughUrl?: Dfareporting.Schema.ClickThroughUrl;
        enabled?: boolean;
        exitId?: string;
      }
      interface Rule {
        assetId?: string;
        name?: string;
        targetingTemplateId?: string;
      }
      interface Site {
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
      interface SiteCompanionSetting {
        companionsDisabled?: boolean;
        enabledSizes?: Dfareporting.Schema.Size[];
        imageOnly?: boolean;
        kind?: string;
      }
      interface SiteContact {
        address?: string;
        contactType?: string;
        email?: string;
        firstName?: string;
        id?: string;
        lastName?: string;
        phone?: string;
        title?: string;
      }
      interface SiteSettings {
        activeViewOptOut?: boolean;
        adBlockingOptOut?: boolean;
        disableNewCookie?: boolean;
        tagSetting?: Dfareporting.Schema.TagSetting;
        videoActiveViewOptOutTemplate?: boolean;
        vpaidAdapterChoiceTemplate?: string;
      }
      interface SiteSkippableSetting {
        kind?: string;
        progressOffset?: Dfareporting.Schema.VideoOffset;
        skipOffset?: Dfareporting.Schema.VideoOffset;
        skippable?: boolean;
      }
      interface SiteTranscodeSetting {
        enabledVideoFormats?: number[];
        kind?: string;
      }
      interface SiteVideoSettings {
        companionSettings?: Dfareporting.Schema.SiteCompanionSetting;
        kind?: string;
        orientation?: string;
        skippableSettings?: Dfareporting.Schema.SiteSkippableSetting;
        transcodeSettings?: Dfareporting.Schema.SiteTranscodeSetting;
      }
      interface SitesListResponse {
        kind?: string;
        nextPageToken?: string;
        sites?: Dfareporting.Schema.Site[];
      }
      interface Size {
        height?: number;
        iab?: boolean;
        id?: string;
        kind?: string;
        width?: number;
      }
      interface SizesListResponse {
        kind?: string;
        sizes?: Dfareporting.Schema.Size[];
      }
      interface SkippableSetting {
        kind?: string;
        progressOffset?: Dfareporting.Schema.VideoOffset;
        skipOffset?: Dfareporting.Schema.VideoOffset;
        skippable?: boolean;
      }
      interface SortedDimension {
        kind?: string;
        name?: string;
        sortOrder?: string;
      }
      interface Subaccount {
        accountId?: string;
        availablePermissionIds?: string[];
        id?: string;
        kind?: string;
        name?: string;
      }
      interface SubaccountsListResponse {
        kind?: string;
        nextPageToken?: string;
        subaccounts?: Dfareporting.Schema.Subaccount[];
      }
      interface TagData {
        adId?: string;
        clickTag?: string;
        creativeId?: string;
        format?: string;
        impressionTag?: string;
      }
      interface TagSetting {
        additionalKeyValues?: string;
        includeClickThroughUrls?: boolean;
        includeClickTracking?: boolean;
        keywordOption?: string;
      }
      interface TagSettings {
        dynamicTagEnabled?: boolean;
        imageTagEnabled?: boolean;
      }
      interface TargetWindow {
        customHtml?: string;
        targetWindowOption?: string;
      }
      interface TargetableRemarketingList {
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
      interface TargetableRemarketingListsListResponse {
        kind?: string;
        nextPageToken?: string;
        targetableRemarketingLists?: Dfareporting.Schema.TargetableRemarketingList[];
      }
      interface TargetingTemplate {
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
      interface TargetingTemplatesListResponse {
        kind?: string;
        nextPageToken?: string;
        targetingTemplates?: Dfareporting.Schema.TargetingTemplate[];
      }
      interface TechnologyTargeting {
        browsers?: Dfareporting.Schema.Browser[];
        connectionTypes?: Dfareporting.Schema.ConnectionType[];
        mobileCarriers?: Dfareporting.Schema.MobileCarrier[];
        operatingSystemVersions?: Dfareporting.Schema.OperatingSystemVersion[];
        operatingSystems?: Dfareporting.Schema.OperatingSystem[];
        platformTypes?: Dfareporting.Schema.PlatformType[];
      }
      interface ThirdPartyAuthenticationToken {
        name?: string;
        value?: string;
      }
      interface ThirdPartyTrackingUrl {
        thirdPartyUrlType?: string;
        url?: string;
      }
      interface TranscodeSetting {
        enabledVideoFormats?: number[];
        kind?: string;
      }
      interface UniversalAdId {
        registry?: string;
        value?: string;
      }
      interface UserDefinedVariableConfiguration {
        dataType?: string;
        reportName?: string;
        variableType?: string;
      }
      interface UserProfile {
        accountId?: string;
        accountName?: string;
        etag?: string;
        kind?: string;
        profileId?: string;
        subAccountId?: string;
        subAccountName?: string;
        userName?: string;
      }
      interface UserProfileList {
        etag?: string;
        items?: Dfareporting.Schema.UserProfile[];
        kind?: string;
      }
      interface UserRole {
        accountId?: string;
        defaultUserRole?: boolean;
        id?: string;
        kind?: string;
        name?: string;
        parentUserRoleId?: string;
        permissions?: Dfareporting.Schema.UserRolePermission[];
        subaccountId?: string;
      }
      interface UserRolePermission {
        availability?: string;
        id?: string;
        kind?: string;
        name?: string;
        permissionGroupId?: string;
      }
      interface UserRolePermissionGroup {
        id?: string;
        kind?: string;
        name?: string;
      }
      interface UserRolePermissionGroupsListResponse {
        kind?: string;
        userRolePermissionGroups?: Dfareporting.Schema.UserRolePermissionGroup[];
      }
      interface UserRolePermissionsListResponse {
        kind?: string;
        userRolePermissions?: Dfareporting.Schema.UserRolePermission[];
      }
      interface UserRolesListResponse {
        kind?: string;
        nextPageToken?: string;
        userRoles?: Dfareporting.Schema.UserRole[];
      }
      interface VideoFormat {
        fileType?: string;
        id?: number;
        kind?: string;
        resolution?: Dfareporting.Schema.Size;
        targetBitRate?: number;
      }
      interface VideoFormatsListResponse {
        kind?: string;
        videoFormats?: Dfareporting.Schema.VideoFormat[];
      }
      interface VideoOffset {
        offsetPercentage?: number;
        offsetSeconds?: number;
      }
      interface VideoSettings {
        companionSettings?: Dfareporting.Schema.CompanionSetting;
        kind?: string;
        orientation?: string;
        skippableSettings?: Dfareporting.Schema.SkippableSetting;
        transcodeSettings?: Dfareporting.Schema.TranscodeSetting;
      }
    }
  }
  interface Dfareporting {
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
