// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Dfareporting_v3_3 {
    namespace Collection {
      namespace Reports {
        export interface CompatibleFieldsCollection {
          // Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.
          query(resource: Schema.Report, profileId: string): Dfareporting_v3_3.Schema.CompatibleFields;
        }
        export interface FilesCollection {
          // Retrieves a report file. This method supports media download.
          get(profileId: string, reportId: string, fileId: string): Dfareporting_v3_3.Schema.File;
          // Lists files for a report.
          list(profileId: string, reportId: string): Dfareporting_v3_3.Schema.FileList;
          // Lists files for a report.
          list(profileId: string, reportId: string, optionalArgs: object): Dfareporting_v3_3.Schema.FileList;
        }
      }
      export interface AccountActiveAdSummariesCollection {
        // Gets the account's active ad summary by account ID.
        get(profileId: string, summaryAccountId: string): Dfareporting_v3_3.Schema.AccountActiveAdSummary;
      }
      export interface AccountPermissionGroupsCollection {
        // Gets one account permission group by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.AccountPermissionGroup;
        // Retrieves the list of account permission groups.
        list(profileId: string): Dfareporting_v3_3.Schema.AccountPermissionGroupsListResponse;
      }
      export interface AccountPermissionsCollection {
        // Gets one account permission by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.AccountPermission;
        // Retrieves the list of account permissions.
        list(profileId: string): Dfareporting_v3_3.Schema.AccountPermissionsListResponse;
      }
      export interface AccountUserProfilesCollection {
        // Gets one account user profile by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.AccountUserProfile;
        // Inserts a new account user profile.
        insert(resource: Schema.AccountUserProfile, profileId: string): Dfareporting_v3_3.Schema.AccountUserProfile;
        // Retrieves a list of account user profiles, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting_v3_3.Schema.AccountUserProfilesListResponse;
        // Retrieves a list of account user profiles, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.AccountUserProfilesListResponse;
        // Updates an existing account user profile. This method supports patch semantics.
        patch(resource: Schema.AccountUserProfile, profileId: string, id: string): Dfareporting_v3_3.Schema.AccountUserProfile;
        // Updates an existing account user profile.
        update(resource: Schema.AccountUserProfile, profileId: string): Dfareporting_v3_3.Schema.AccountUserProfile;
      }
      export interface AccountsCollection {
        // Gets one account by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.Account;
        // Retrieves the list of accounts, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting_v3_3.Schema.AccountsListResponse;
        // Retrieves the list of accounts, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.AccountsListResponse;
        // Updates an existing account. This method supports patch semantics.
        patch(resource: Schema.Account, profileId: string, id: string): Dfareporting_v3_3.Schema.Account;
        // Updates an existing account.
        update(resource: Schema.Account, profileId: string): Dfareporting_v3_3.Schema.Account;
      }
      export interface AdsCollection {
        // Gets one ad by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.Ad;
        // Inserts a new ad.
        insert(resource: Schema.Ad, profileId: string): Dfareporting_v3_3.Schema.Ad;
        // Retrieves a list of ads, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting_v3_3.Schema.AdsListResponse;
        // Retrieves a list of ads, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.AdsListResponse;
        // Updates an existing ad. This method supports patch semantics.
        patch(resource: Schema.Ad, profileId: string, id: string): Dfareporting_v3_3.Schema.Ad;
        // Updates an existing ad.
        update(resource: Schema.Ad, profileId: string): Dfareporting_v3_3.Schema.Ad;
      }
      export interface AdvertiserGroupsCollection {
        // Gets one advertiser group by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.AdvertiserGroup;
        // Inserts a new advertiser group.
        insert(resource: Schema.AdvertiserGroup, profileId: string): Dfareporting_v3_3.Schema.AdvertiserGroup;
        // Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting_v3_3.Schema.AdvertiserGroupsListResponse;
        // Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.AdvertiserGroupsListResponse;
        // Updates an existing advertiser group. This method supports patch semantics.
        patch(resource: Schema.AdvertiserGroup, profileId: string, id: string): Dfareporting_v3_3.Schema.AdvertiserGroup;
        // Deletes an existing advertiser group.
        remove(profileId: string, id: string): void;
        // Updates an existing advertiser group.
        update(resource: Schema.AdvertiserGroup, profileId: string): Dfareporting_v3_3.Schema.AdvertiserGroup;
      }
      export interface AdvertiserLandingPagesCollection {
        // Gets one landing page by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.LandingPage;
        // Inserts a new landing page.
        insert(resource: Schema.LandingPage, profileId: string): Dfareporting_v3_3.Schema.LandingPage;
        // Retrieves a list of landing pages.
        list(profileId: string): Dfareporting_v3_3.Schema.AdvertiserLandingPagesListResponse;
        // Retrieves a list of landing pages.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.AdvertiserLandingPagesListResponse;
        // Updates an existing landing page. This method supports patch semantics.
        patch(resource: Schema.LandingPage, profileId: string, id: string): Dfareporting_v3_3.Schema.LandingPage;
        // Updates an existing landing page.
        update(resource: Schema.LandingPage, profileId: string): Dfareporting_v3_3.Schema.LandingPage;
      }
      export interface AdvertisersCollection {
        // Gets one advertiser by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.Advertiser;
        // Inserts a new advertiser.
        insert(resource: Schema.Advertiser, profileId: string): Dfareporting_v3_3.Schema.Advertiser;
        // Retrieves a list of advertisers, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting_v3_3.Schema.AdvertisersListResponse;
        // Retrieves a list of advertisers, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.AdvertisersListResponse;
        // Updates an existing advertiser. This method supports patch semantics.
        patch(resource: Schema.Advertiser, profileId: string, id: string): Dfareporting_v3_3.Schema.Advertiser;
        // Updates an existing advertiser.
        update(resource: Schema.Advertiser, profileId: string): Dfareporting_v3_3.Schema.Advertiser;
      }
      export interface BrowsersCollection {
        // Retrieves a list of browsers.
        list(profileId: string): Dfareporting_v3_3.Schema.BrowsersListResponse;
      }
      export interface CampaignCreativeAssociationsCollection {
        // Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.
        insert(resource: Schema.CampaignCreativeAssociation, profileId: string, campaignId: string): Dfareporting_v3_3.Schema.CampaignCreativeAssociation;
        // Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.
        list(profileId: string, campaignId: string): Dfareporting_v3_3.Schema.CampaignCreativeAssociationsListResponse;
        // Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.
        list(profileId: string, campaignId: string, optionalArgs: object): Dfareporting_v3_3.Schema.CampaignCreativeAssociationsListResponse;
      }
      export interface CampaignsCollection {
        // Gets one campaign by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.Campaign;
        // Inserts a new campaign.
        insert(resource: Schema.Campaign, profileId: string): Dfareporting_v3_3.Schema.Campaign;
        // Retrieves a list of campaigns, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting_v3_3.Schema.CampaignsListResponse;
        // Retrieves a list of campaigns, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.CampaignsListResponse;
        // Updates an existing campaign. This method supports patch semantics.
        patch(resource: Schema.Campaign, profileId: string, id: string): Dfareporting_v3_3.Schema.Campaign;
        // Updates an existing campaign.
        update(resource: Schema.Campaign, profileId: string): Dfareporting_v3_3.Schema.Campaign;
      }
      export interface ChangeLogsCollection {
        // Gets one change log by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.ChangeLog;
        // Retrieves a list of change logs. This method supports paging.
        list(profileId: string): Dfareporting_v3_3.Schema.ChangeLogsListResponse;
        // Retrieves a list of change logs. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.ChangeLogsListResponse;
      }
      export interface CitiesCollection {
        // Retrieves a list of cities, possibly filtered.
        list(profileId: string): Dfareporting_v3_3.Schema.CitiesListResponse;
        // Retrieves a list of cities, possibly filtered.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.CitiesListResponse;
      }
      export interface ConnectionTypesCollection {
        // Gets one connection type by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.ConnectionType;
        // Retrieves a list of connection types.
        list(profileId: string): Dfareporting_v3_3.Schema.ConnectionTypesListResponse;
      }
      export interface ContentCategoriesCollection {
        // Gets one content category by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.ContentCategory;
        // Inserts a new content category.
        insert(resource: Schema.ContentCategory, profileId: string): Dfareporting_v3_3.Schema.ContentCategory;
        // Retrieves a list of content categories, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting_v3_3.Schema.ContentCategoriesListResponse;
        // Retrieves a list of content categories, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.ContentCategoriesListResponse;
        // Updates an existing content category. This method supports patch semantics.
        patch(resource: Schema.ContentCategory, profileId: string, id: string): Dfareporting_v3_3.Schema.ContentCategory;
        // Deletes an existing content category.
        remove(profileId: string, id: string): void;
        // Updates an existing content category.
        update(resource: Schema.ContentCategory, profileId: string): Dfareporting_v3_3.Schema.ContentCategory;
      }
      export interface ConversionsCollection {
        // Inserts conversions.
        batchinsert(resource: Schema.ConversionsBatchInsertRequest, profileId: string): Dfareporting_v3_3.Schema.ConversionsBatchInsertResponse;
        // Updates existing conversions.
        batchupdate(resource: Schema.ConversionsBatchUpdateRequest, profileId: string): Dfareporting_v3_3.Schema.ConversionsBatchUpdateResponse;
      }
      export interface CountriesCollection {
        // Gets one country by ID.
        get(profileId: string, dartId: string): Dfareporting_v3_3.Schema.Country;
        // Retrieves a list of countries.
        list(profileId: string): Dfareporting_v3_3.Schema.CountriesListResponse;
      }
      export interface CreativeAssetsCollection {
        // Inserts a new creative asset.
        insert(resource: Schema.CreativeAssetMetadata, profileId: string, advertiserId: string): Dfareporting_v3_3.Schema.CreativeAssetMetadata;
        // Inserts a new creative asset.
        insert(resource: Schema.CreativeAssetMetadata, profileId: string, advertiserId: string, mediaData: any): Dfareporting_v3_3.Schema.CreativeAssetMetadata;
      }
      export interface CreativeFieldValuesCollection {
        // Gets one creative field value by ID.
        get(profileId: string, creativeFieldId: string, id: string): Dfareporting_v3_3.Schema.CreativeFieldValue;
        // Inserts a new creative field value.
        insert(resource: Schema.CreativeFieldValue, profileId: string, creativeFieldId: string): Dfareporting_v3_3.Schema.CreativeFieldValue;
        // Retrieves a list of creative field values, possibly filtered. This method supports paging.
        list(profileId: string, creativeFieldId: string): Dfareporting_v3_3.Schema.CreativeFieldValuesListResponse;
        // Retrieves a list of creative field values, possibly filtered. This method supports paging.
        list(profileId: string, creativeFieldId: string, optionalArgs: object): Dfareporting_v3_3.Schema.CreativeFieldValuesListResponse;
        // Updates an existing creative field value. This method supports patch semantics.
        patch(resource: Schema.CreativeFieldValue, profileId: string, creativeFieldId: string, id: string): Dfareporting_v3_3.Schema.CreativeFieldValue;
        // Deletes an existing creative field value.
        remove(profileId: string, creativeFieldId: string, id: string): void;
        // Updates an existing creative field value.
        update(resource: Schema.CreativeFieldValue, profileId: string, creativeFieldId: string): Dfareporting_v3_3.Schema.CreativeFieldValue;
      }
      export interface CreativeFieldsCollection {
        // Gets one creative field by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.CreativeField;
        // Inserts a new creative field.
        insert(resource: Schema.CreativeField, profileId: string): Dfareporting_v3_3.Schema.CreativeField;
        // Retrieves a list of creative fields, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting_v3_3.Schema.CreativeFieldsListResponse;
        // Retrieves a list of creative fields, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.CreativeFieldsListResponse;
        // Updates an existing creative field. This method supports patch semantics.
        patch(resource: Schema.CreativeField, profileId: string, id: string): Dfareporting_v3_3.Schema.CreativeField;
        // Deletes an existing creative field.
        remove(profileId: string, id: string): void;
        // Updates an existing creative field.
        update(resource: Schema.CreativeField, profileId: string): Dfareporting_v3_3.Schema.CreativeField;
      }
      export interface CreativeGroupsCollection {
        // Gets one creative group by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.CreativeGroup;
        // Inserts a new creative group.
        insert(resource: Schema.CreativeGroup, profileId: string): Dfareporting_v3_3.Schema.CreativeGroup;
        // Retrieves a list of creative groups, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting_v3_3.Schema.CreativeGroupsListResponse;
        // Retrieves a list of creative groups, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.CreativeGroupsListResponse;
        // Updates an existing creative group. This method supports patch semantics.
        patch(resource: Schema.CreativeGroup, profileId: string, id: string): Dfareporting_v3_3.Schema.CreativeGroup;
        // Updates an existing creative group.
        update(resource: Schema.CreativeGroup, profileId: string): Dfareporting_v3_3.Schema.CreativeGroup;
      }
      export interface CreativesCollection {
        // Gets one creative by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.Creative;
        // Inserts a new creative.
        insert(resource: Schema.Creative, profileId: string): Dfareporting_v3_3.Schema.Creative;
        // Retrieves a list of creatives, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting_v3_3.Schema.CreativesListResponse;
        // Retrieves a list of creatives, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.CreativesListResponse;
        // Updates an existing creative. This method supports patch semantics.
        patch(resource: Schema.Creative, profileId: string, id: string): Dfareporting_v3_3.Schema.Creative;
        // Updates an existing creative.
        update(resource: Schema.Creative, profileId: string): Dfareporting_v3_3.Schema.Creative;
      }
      export interface DimensionValuesCollection {
        // Retrieves list of report dimension values for a list of filters.
        query(resource: Schema.DimensionValueRequest, profileId: string): Dfareporting_v3_3.Schema.DimensionValueList;
        // Retrieves list of report dimension values for a list of filters.
        query(resource: Schema.DimensionValueRequest, profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.DimensionValueList;
      }
      export interface DirectorySitesCollection {
        // Gets one directory site by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.DirectorySite;
        // Inserts a new directory site.
        insert(resource: Schema.DirectorySite, profileId: string): Dfareporting_v3_3.Schema.DirectorySite;
        // Retrieves a list of directory sites, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting_v3_3.Schema.DirectorySitesListResponse;
        // Retrieves a list of directory sites, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.DirectorySitesListResponse;
      }
      export interface DynamicTargetingKeysCollection {
        // Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.
        insert(resource: Schema.DynamicTargetingKey, profileId: string): Dfareporting_v3_3.Schema.DynamicTargetingKey;
        // Retrieves a list of dynamic targeting keys.
        list(profileId: string): Dfareporting_v3_3.Schema.DynamicTargetingKeysListResponse;
        // Retrieves a list of dynamic targeting keys.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.DynamicTargetingKeysListResponse;
        // Deletes an existing dynamic targeting key.
        remove(profileId: string, objectId: string, name: string, objectType: string): void;
      }
      export interface EventTagsCollection {
        // Gets one event tag by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.EventTag;
        // Inserts a new event tag.
        insert(resource: Schema.EventTag, profileId: string): Dfareporting_v3_3.Schema.EventTag;
        // Retrieves a list of event tags, possibly filtered.
        list(profileId: string): Dfareporting_v3_3.Schema.EventTagsListResponse;
        // Retrieves a list of event tags, possibly filtered.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.EventTagsListResponse;
        // Updates an existing event tag. This method supports patch semantics.
        patch(resource: Schema.EventTag, profileId: string, id: string): Dfareporting_v3_3.Schema.EventTag;
        // Deletes an existing event tag.
        remove(profileId: string, id: string): void;
        // Updates an existing event tag.
        update(resource: Schema.EventTag, profileId: string): Dfareporting_v3_3.Schema.EventTag;
      }
      export interface FilesCollection {
        // Retrieves a report file by its report ID and file ID. This method supports media download.
        get(reportId: string, fileId: string): Dfareporting_v3_3.Schema.File;
        // Lists files for a user profile.
        list(profileId: string): Dfareporting_v3_3.Schema.FileList;
        // Lists files for a user profile.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.FileList;
      }
      export interface FloodlightActivitiesCollection {
        // Generates a tag for a floodlight activity.
        generatetag(profileId: string): Dfareporting_v3_3.Schema.FloodlightActivitiesGenerateTagResponse;
        // Generates a tag for a floodlight activity.
        generatetag(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.FloodlightActivitiesGenerateTagResponse;
        // Gets one floodlight activity by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.FloodlightActivity;
        // Inserts a new floodlight activity.
        insert(resource: Schema.FloodlightActivity, profileId: string): Dfareporting_v3_3.Schema.FloodlightActivity;
        // Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting_v3_3.Schema.FloodlightActivitiesListResponse;
        // Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.FloodlightActivitiesListResponse;
        // Updates an existing floodlight activity. This method supports patch semantics.
        patch(resource: Schema.FloodlightActivity, profileId: string, id: string): Dfareporting_v3_3.Schema.FloodlightActivity;
        // Deletes an existing floodlight activity.
        remove(profileId: string, id: string): void;
        // Updates an existing floodlight activity.
        update(resource: Schema.FloodlightActivity, profileId: string): Dfareporting_v3_3.Schema.FloodlightActivity;
      }
      export interface FloodlightActivityGroupsCollection {
        // Gets one floodlight activity group by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.FloodlightActivityGroup;
        // Inserts a new floodlight activity group.
        insert(resource: Schema.FloodlightActivityGroup, profileId: string): Dfareporting_v3_3.Schema.FloodlightActivityGroup;
        // Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting_v3_3.Schema.FloodlightActivityGroupsListResponse;
        // Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.FloodlightActivityGroupsListResponse;
        // Updates an existing floodlight activity group. This method supports patch semantics.
        patch(resource: Schema.FloodlightActivityGroup, profileId: string, id: string): Dfareporting_v3_3.Schema.FloodlightActivityGroup;
        // Updates an existing floodlight activity group.
        update(resource: Schema.FloodlightActivityGroup, profileId: string): Dfareporting_v3_3.Schema.FloodlightActivityGroup;
      }
      export interface FloodlightConfigurationsCollection {
        // Gets one floodlight configuration by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.FloodlightConfiguration;
        // Retrieves a list of floodlight configurations, possibly filtered.
        list(profileId: string): Dfareporting_v3_3.Schema.FloodlightConfigurationsListResponse;
        // Retrieves a list of floodlight configurations, possibly filtered.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.FloodlightConfigurationsListResponse;
        // Updates an existing floodlight configuration. This method supports patch semantics.
        patch(resource: Schema.FloodlightConfiguration, profileId: string, id: string): Dfareporting_v3_3.Schema.FloodlightConfiguration;
        // Updates an existing floodlight configuration.
        update(resource: Schema.FloodlightConfiguration, profileId: string): Dfareporting_v3_3.Schema.FloodlightConfiguration;
      }
      export interface InventoryItemsCollection {
        // Gets one inventory item by ID.
        get(profileId: string, projectId: string, id: string): Dfareporting_v3_3.Schema.InventoryItem;
        // Retrieves a list of inventory items, possibly filtered. This method supports paging.
        list(profileId: string, projectId: string): Dfareporting_v3_3.Schema.InventoryItemsListResponse;
        // Retrieves a list of inventory items, possibly filtered. This method supports paging.
        list(profileId: string, projectId: string, optionalArgs: object): Dfareporting_v3_3.Schema.InventoryItemsListResponse;
      }
      export interface LanguagesCollection {
        // Retrieves a list of languages.
        list(profileId: string): Dfareporting_v3_3.Schema.LanguagesListResponse;
      }
      export interface MetrosCollection {
        // Retrieves a list of metros.
        list(profileId: string): Dfareporting_v3_3.Schema.MetrosListResponse;
      }
      export interface MobileAppsCollection {
        // Gets one mobile app by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.MobileApp;
        // Retrieves list of available mobile apps.
        list(profileId: string): Dfareporting_v3_3.Schema.MobileAppsListResponse;
        // Retrieves list of available mobile apps.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.MobileAppsListResponse;
      }
      export interface MobileCarriersCollection {
        // Gets one mobile carrier by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.MobileCarrier;
        // Retrieves a list of mobile carriers.
        list(profileId: string): Dfareporting_v3_3.Schema.MobileCarriersListResponse;
      }
      export interface OperatingSystemVersionsCollection {
        // Gets one operating system version by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.OperatingSystemVersion;
        // Retrieves a list of operating system versions.
        list(profileId: string): Dfareporting_v3_3.Schema.OperatingSystemVersionsListResponse;
      }
      export interface OperatingSystemsCollection {
        // Gets one operating system by DART ID.
        get(profileId: string, dartId: string): Dfareporting_v3_3.Schema.OperatingSystem;
        // Retrieves a list of operating systems.
        list(profileId: string): Dfareporting_v3_3.Schema.OperatingSystemsListResponse;
      }
      export interface OrderDocumentsCollection {
        // Gets one order document by ID.
        get(profileId: string, projectId: string, id: string): Dfareporting_v3_3.Schema.OrderDocument;
        // Retrieves a list of order documents, possibly filtered. This method supports paging.
        list(profileId: string, projectId: string): Dfareporting_v3_3.Schema.OrderDocumentsListResponse;
        // Retrieves a list of order documents, possibly filtered. This method supports paging.
        list(profileId: string, projectId: string, optionalArgs: object): Dfareporting_v3_3.Schema.OrderDocumentsListResponse;
      }
      export interface OrdersCollection {
        // Gets one order by ID.
        get(profileId: string, projectId: string, id: string): Dfareporting_v3_3.Schema.Order;
        // Retrieves a list of orders, possibly filtered. This method supports paging.
        list(profileId: string, projectId: string): Dfareporting_v3_3.Schema.OrdersListResponse;
        // Retrieves a list of orders, possibly filtered. This method supports paging.
        list(profileId: string, projectId: string, optionalArgs: object): Dfareporting_v3_3.Schema.OrdersListResponse;
      }
      export interface PlacementGroupsCollection {
        // Gets one placement group by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.PlacementGroup;
        // Inserts a new placement group.
        insert(resource: Schema.PlacementGroup, profileId: string): Dfareporting_v3_3.Schema.PlacementGroup;
        // Retrieves a list of placement groups, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting_v3_3.Schema.PlacementGroupsListResponse;
        // Retrieves a list of placement groups, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.PlacementGroupsListResponse;
        // Updates an existing placement group. This method supports patch semantics.
        patch(resource: Schema.PlacementGroup, profileId: string, id: string): Dfareporting_v3_3.Schema.PlacementGroup;
        // Updates an existing placement group.
        update(resource: Schema.PlacementGroup, profileId: string): Dfareporting_v3_3.Schema.PlacementGroup;
      }
      export interface PlacementStrategiesCollection {
        // Gets one placement strategy by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.PlacementStrategy;
        // Inserts a new placement strategy.
        insert(resource: Schema.PlacementStrategy, profileId: string): Dfareporting_v3_3.Schema.PlacementStrategy;
        // Retrieves a list of placement strategies, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting_v3_3.Schema.PlacementStrategiesListResponse;
        // Retrieves a list of placement strategies, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.PlacementStrategiesListResponse;
        // Updates an existing placement strategy. This method supports patch semantics.
        patch(resource: Schema.PlacementStrategy, profileId: string, id: string): Dfareporting_v3_3.Schema.PlacementStrategy;
        // Deletes an existing placement strategy.
        remove(profileId: string, id: string): void;
        // Updates an existing placement strategy.
        update(resource: Schema.PlacementStrategy, profileId: string): Dfareporting_v3_3.Schema.PlacementStrategy;
      }
      export interface PlacementsCollection {
        // Generates tags for a placement.
        generatetags(profileId: string): Dfareporting_v3_3.Schema.PlacementsGenerateTagsResponse;
        // Generates tags for a placement.
        generatetags(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.PlacementsGenerateTagsResponse;
        // Gets one placement by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.Placement;
        // Inserts a new placement.
        insert(resource: Schema.Placement, profileId: string): Dfareporting_v3_3.Schema.Placement;
        // Retrieves a list of placements, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting_v3_3.Schema.PlacementsListResponse;
        // Retrieves a list of placements, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.PlacementsListResponse;
        // Updates an existing placement. This method supports patch semantics.
        patch(resource: Schema.Placement, profileId: string, id: string): Dfareporting_v3_3.Schema.Placement;
        // Updates an existing placement.
        update(resource: Schema.Placement, profileId: string): Dfareporting_v3_3.Schema.Placement;
      }
      export interface PlatformTypesCollection {
        // Gets one platform type by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.PlatformType;
        // Retrieves a list of platform types.
        list(profileId: string): Dfareporting_v3_3.Schema.PlatformTypesListResponse;
      }
      export interface PostalCodesCollection {
        // Gets one postal code by ID.
        get(profileId: string, code: string): Dfareporting_v3_3.Schema.PostalCode;
        // Retrieves a list of postal codes.
        list(profileId: string): Dfareporting_v3_3.Schema.PostalCodesListResponse;
      }
      export interface ProjectsCollection {
        // Gets one project by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.Project;
        // Retrieves a list of projects, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting_v3_3.Schema.ProjectsListResponse;
        // Retrieves a list of projects, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.ProjectsListResponse;
      }
      export interface RegionsCollection {
        // Retrieves a list of regions.
        list(profileId: string): Dfareporting_v3_3.Schema.RegionsListResponse;
      }
      export interface RemarketingListSharesCollection {
        // Gets one remarketing list share by remarketing list ID.
        get(profileId: string, remarketingListId: string): Dfareporting_v3_3.Schema.RemarketingListShare;
        // Updates an existing remarketing list share. This method supports patch semantics.
        patch(resource: Schema.RemarketingListShare, profileId: string, remarketingListId: string): Dfareporting_v3_3.Schema.RemarketingListShare;
        // Updates an existing remarketing list share.
        update(resource: Schema.RemarketingListShare, profileId: string): Dfareporting_v3_3.Schema.RemarketingListShare;
      }
      export interface RemarketingListsCollection {
        // Gets one remarketing list by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.RemarketingList;
        // Inserts a new remarketing list.
        insert(resource: Schema.RemarketingList, profileId: string): Dfareporting_v3_3.Schema.RemarketingList;
        // Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
        list(profileId: string, advertiserId: string): Dfareporting_v3_3.Schema.RemarketingListsListResponse;
        // Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
        list(profileId: string, advertiserId: string, optionalArgs: object): Dfareporting_v3_3.Schema.RemarketingListsListResponse;
        // Updates an existing remarketing list. This method supports patch semantics.
        patch(resource: Schema.RemarketingList, profileId: string, id: string): Dfareporting_v3_3.Schema.RemarketingList;
        // Updates an existing remarketing list.
        update(resource: Schema.RemarketingList, profileId: string): Dfareporting_v3_3.Schema.RemarketingList;
      }
      export interface ReportsCollection {
        CompatibleFields?: Dfareporting_v3_3.Collection.Reports.CompatibleFieldsCollection;
        Files?: Dfareporting_v3_3.Collection.Reports.FilesCollection;
        // Retrieves a report by its ID.
        get(profileId: string, reportId: string): Dfareporting_v3_3.Schema.Report;
        // Creates a report.
        insert(resource: Schema.Report, profileId: string): Dfareporting_v3_3.Schema.Report;
        // Retrieves list of reports.
        list(profileId: string): Dfareporting_v3_3.Schema.ReportList;
        // Retrieves list of reports.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.ReportList;
        // Updates a report. This method supports patch semantics.
        patch(resource: Schema.Report, profileId: string, reportId: string): Dfareporting_v3_3.Schema.Report;
        // Deletes a report by its ID.
        remove(profileId: string, reportId: string): void;
        // Runs a report.
        run(profileId: string, reportId: string): Dfareporting_v3_3.Schema.File;
        // Runs a report.
        run(profileId: string, reportId: string, optionalArgs: object): Dfareporting_v3_3.Schema.File;
        // Updates a report.
        update(resource: Schema.Report, profileId: string, reportId: string): Dfareporting_v3_3.Schema.Report;
      }
      export interface SitesCollection {
        // Gets one site by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.Site;
        // Inserts a new site.
        insert(resource: Schema.Site, profileId: string): Dfareporting_v3_3.Schema.Site;
        // Retrieves a list of sites, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting_v3_3.Schema.SitesListResponse;
        // Retrieves a list of sites, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.SitesListResponse;
        // Updates an existing site. This method supports patch semantics.
        patch(resource: Schema.Site, profileId: string, id: string): Dfareporting_v3_3.Schema.Site;
        // Updates an existing site.
        update(resource: Schema.Site, profileId: string): Dfareporting_v3_3.Schema.Site;
      }
      export interface SizesCollection {
        // Gets one size by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.Size;
        // Inserts a new size.
        insert(resource: Schema.Size, profileId: string): Dfareporting_v3_3.Schema.Size;
        // Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.
        list(profileId: string): Dfareporting_v3_3.Schema.SizesListResponse;
        // Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.SizesListResponse;
      }
      export interface SubaccountsCollection {
        // Gets one subaccount by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.Subaccount;
        // Inserts a new subaccount.
        insert(resource: Schema.Subaccount, profileId: string): Dfareporting_v3_3.Schema.Subaccount;
        // Gets a list of subaccounts, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting_v3_3.Schema.SubaccountsListResponse;
        // Gets a list of subaccounts, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.SubaccountsListResponse;
        // Updates an existing subaccount. This method supports patch semantics.
        patch(resource: Schema.Subaccount, profileId: string, id: string): Dfareporting_v3_3.Schema.Subaccount;
        // Updates an existing subaccount.
        update(resource: Schema.Subaccount, profileId: string): Dfareporting_v3_3.Schema.Subaccount;
      }
      export interface TargetableRemarketingListsCollection {
        // Gets one remarketing list by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.TargetableRemarketingList;
        // Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.
        list(profileId: string, advertiserId: string): Dfareporting_v3_3.Schema.TargetableRemarketingListsListResponse;
        // Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.
        list(profileId: string, advertiserId: string, optionalArgs: object): Dfareporting_v3_3.Schema.TargetableRemarketingListsListResponse;
      }
      export interface TargetingTemplatesCollection {
        // Gets one targeting template by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.TargetingTemplate;
        // Inserts a new targeting template.
        insert(resource: Schema.TargetingTemplate, profileId: string): Dfareporting_v3_3.Schema.TargetingTemplate;
        // Retrieves a list of targeting templates, optionally filtered. This method supports paging.
        list(profileId: string): Dfareporting_v3_3.Schema.TargetingTemplatesListResponse;
        // Retrieves a list of targeting templates, optionally filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.TargetingTemplatesListResponse;
        // Updates an existing targeting template. This method supports patch semantics.
        patch(resource: Schema.TargetingTemplate, profileId: string, id: string): Dfareporting_v3_3.Schema.TargetingTemplate;
        // Updates an existing targeting template.
        update(resource: Schema.TargetingTemplate, profileId: string): Dfareporting_v3_3.Schema.TargetingTemplate;
      }
      export interface UserProfilesCollection {
        // Gets one user profile by ID.
        get(profileId: string): Dfareporting_v3_3.Schema.UserProfile;
        // Retrieves list of user profiles for a user.
        list(): Dfareporting_v3_3.Schema.UserProfileList;
      }
      export interface UserRolePermissionGroupsCollection {
        // Gets one user role permission group by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.UserRolePermissionGroup;
        // Gets a list of all supported user role permission groups.
        list(profileId: string): Dfareporting_v3_3.Schema.UserRolePermissionGroupsListResponse;
      }
      export interface UserRolePermissionsCollection {
        // Gets one user role permission by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.UserRolePermission;
        // Gets a list of user role permissions, possibly filtered.
        list(profileId: string): Dfareporting_v3_3.Schema.UserRolePermissionsListResponse;
        // Gets a list of user role permissions, possibly filtered.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.UserRolePermissionsListResponse;
      }
      export interface UserRolesCollection {
        // Gets one user role by ID.
        get(profileId: string, id: string): Dfareporting_v3_3.Schema.UserRole;
        // Inserts a new user role.
        insert(resource: Schema.UserRole, profileId: string): Dfareporting_v3_3.Schema.UserRole;
        // Retrieves a list of user roles, possibly filtered. This method supports paging.
        list(profileId: string): Dfareporting_v3_3.Schema.UserRolesListResponse;
        // Retrieves a list of user roles, possibly filtered. This method supports paging.
        list(profileId: string, optionalArgs: object): Dfareporting_v3_3.Schema.UserRolesListResponse;
        // Updates an existing user role. This method supports patch semantics.
        patch(resource: Schema.UserRole, profileId: string, id: string): Dfareporting_v3_3.Schema.UserRole;
        // Deletes an existing user role.
        remove(profileId: string, id: string): void;
        // Updates an existing user role.
        update(resource: Schema.UserRole, profileId: string): Dfareporting_v3_3.Schema.UserRole;
      }
      export interface VideoFormatsCollection {
        // Gets one video format by ID.
        get(profileId: string, id: number): Dfareporting_v3_3.Schema.VideoFormat;
        // Lists available video formats.
        list(profileId: string): Dfareporting_v3_3.Schema.VideoFormatsListResponse;
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
        reportsConfiguration?: Dfareporting_v3_3.Schema.ReportsConfiguration;
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
        accountPermissionGroups?: Dfareporting_v3_3.Schema.AccountPermissionGroup[];
        kind?: string;
      }
      export interface AccountPermissionsListResponse {
        accountPermissions?: Dfareporting_v3_3.Schema.AccountPermission[];
        kind?: string;
      }
      export interface AccountUserProfile {
        accountId?: string;
        active?: boolean;
        advertiserFilter?: Dfareporting_v3_3.Schema.ObjectFilter;
        campaignFilter?: Dfareporting_v3_3.Schema.ObjectFilter;
        comments?: string;
        email?: string;
        id?: string;
        kind?: string;
        locale?: string;
        name?: string;
        siteFilter?: Dfareporting_v3_3.Schema.ObjectFilter;
        subaccountId?: string;
        traffickerType?: string;
        userAccessType?: string;
        userRoleFilter?: Dfareporting_v3_3.Schema.ObjectFilter;
        userRoleId?: string;
      }
      export interface AccountUserProfilesListResponse {
        accountUserProfiles?: Dfareporting_v3_3.Schema.AccountUserProfile[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface AccountsListResponse {
        accounts?: Dfareporting_v3_3.Schema.Account[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface Activities {
        filters?: Dfareporting_v3_3.Schema.DimensionValue[];
        kind?: string;
        metricNames?: string[];
      }
      export interface Ad {
        accountId?: string;
        active?: boolean;
        advertiserId?: string;
        advertiserIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        archived?: boolean;
        audienceSegmentId?: string;
        campaignId?: string;
        campaignIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        clickThroughUrl?: Dfareporting_v3_3.Schema.ClickThroughUrl;
        clickThroughUrlSuffixProperties?: Dfareporting_v3_3.Schema.ClickThroughUrlSuffixProperties;
        comments?: string;
        compatibility?: string;
        createInfo?: Dfareporting_v3_3.Schema.LastModifiedInfo;
        creativeGroupAssignments?: Dfareporting_v3_3.Schema.CreativeGroupAssignment[];
        creativeRotation?: Dfareporting_v3_3.Schema.CreativeRotation;
        dayPartTargeting?: Dfareporting_v3_3.Schema.DayPartTargeting;
        defaultClickThroughEventTagProperties?: Dfareporting_v3_3.Schema.DefaultClickThroughEventTagProperties;
        deliverySchedule?: Dfareporting_v3_3.Schema.DeliverySchedule;
        dynamicClickTracker?: boolean;
        endTime?: string;
        eventTagOverrides?: Dfareporting_v3_3.Schema.EventTagOverride[];
        geoTargeting?: Dfareporting_v3_3.Schema.GeoTargeting;
        id?: string;
        idDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        keyValueTargetingExpression?: Dfareporting_v3_3.Schema.KeyValueTargetingExpression;
        kind?: string;
        languageTargeting?: Dfareporting_v3_3.Schema.LanguageTargeting;
        lastModifiedInfo?: Dfareporting_v3_3.Schema.LastModifiedInfo;
        name?: string;
        placementAssignments?: Dfareporting_v3_3.Schema.PlacementAssignment[];
        remarketingListExpression?: Dfareporting_v3_3.Schema.ListTargetingExpression;
        size?: Dfareporting_v3_3.Schema.Size;
        sslCompliant?: boolean;
        sslRequired?: boolean;
        startTime?: string;
        subaccountId?: string;
        targetingTemplateId?: string;
        technologyTargeting?: Dfareporting_v3_3.Schema.TechnologyTargeting;
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
        ads?: Dfareporting_v3_3.Schema.Ad[];
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
        floodlightConfigurationIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        id?: string;
        idDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
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
        advertiserGroups?: Dfareporting_v3_3.Schema.AdvertiserGroup[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface AdvertiserLandingPagesListResponse {
        kind?: string;
        landingPages?: Dfareporting_v3_3.Schema.LandingPage[];
        nextPageToken?: string;
      }
      export interface AdvertisersListResponse {
        advertisers?: Dfareporting_v3_3.Schema.Advertiser[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface AudienceSegment {
        allocation?: number;
        id?: string;
        name?: string;
      }
      export interface AudienceSegmentGroup {
        audienceSegments?: Dfareporting_v3_3.Schema.AudienceSegment[];
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
        browsers?: Dfareporting_v3_3.Schema.Browser[];
        kind?: string;
      }
      export interface Campaign {
        accountId?: string;
        adBlockingConfiguration?: Dfareporting_v3_3.Schema.AdBlockingConfiguration;
        additionalCreativeOptimizationConfigurations?: Dfareporting_v3_3.Schema.CreativeOptimizationConfiguration[];
        advertiserGroupId?: string;
        advertiserId?: string;
        advertiserIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        archived?: boolean;
        audienceSegmentGroups?: Dfareporting_v3_3.Schema.AudienceSegmentGroup[];
        billingInvoiceCode?: string;
        clickThroughUrlSuffixProperties?: Dfareporting_v3_3.Schema.ClickThroughUrlSuffixProperties;
        comment?: string;
        createInfo?: Dfareporting_v3_3.Schema.LastModifiedInfo;
        creativeGroupIds?: string[];
        creativeOptimizationConfiguration?: Dfareporting_v3_3.Schema.CreativeOptimizationConfiguration;
        defaultClickThroughEventTagProperties?: Dfareporting_v3_3.Schema.DefaultClickThroughEventTagProperties;
        defaultLandingPageId?: string;
        endDate?: string;
        eventTagOverrides?: Dfareporting_v3_3.Schema.EventTagOverride[];
        externalId?: string;
        id?: string;
        idDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        kind?: string;
        lastModifiedInfo?: Dfareporting_v3_3.Schema.LastModifiedInfo;
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
        campaignCreativeAssociations?: Dfareporting_v3_3.Schema.CampaignCreativeAssociation[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface CampaignsListResponse {
        campaigns?: Dfareporting_v3_3.Schema.Campaign[];
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
        changeLogs?: Dfareporting_v3_3.Schema.ChangeLog[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface CitiesListResponse {
        cities?: Dfareporting_v3_3.Schema.City[];
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
        clickThroughUrl?: Dfareporting_v3_3.Schema.CreativeClickThroughUrl;
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
        clickThroughUrl?: Dfareporting_v3_3.Schema.ClickThroughUrl;
        creativeId?: string;
      }
      export interface CompanionSetting {
        companionsDisabled?: boolean;
        enabledSizes?: Dfareporting_v3_3.Schema.Size[];
        imageOnly?: boolean;
        kind?: string;
      }
      export interface CompatibleFields {
        crossDimensionReachReportCompatibleFields?: Dfareporting_v3_3.Schema.CrossDimensionReachReportCompatibleFields;
        floodlightReportCompatibleFields?: Dfareporting_v3_3.Schema.FloodlightReportCompatibleFields;
        kind?: string;
        pathToConversionReportCompatibleFields?: Dfareporting_v3_3.Schema.PathToConversionReportCompatibleFields;
        reachReportCompatibleFields?: Dfareporting_v3_3.Schema.ReachReportCompatibleFields;
        reportCompatibleFields?: Dfareporting_v3_3.Schema.ReportCompatibleFields;
      }
      export interface ConnectionType {
        id?: string;
        kind?: string;
        name?: string;
      }
      export interface ConnectionTypesListResponse {
        connectionTypes?: Dfareporting_v3_3.Schema.ConnectionType[];
        kind?: string;
      }
      export interface ContentCategoriesListResponse {
        contentCategories?: Dfareporting_v3_3.Schema.ContentCategory[];
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
        customVariables?: Dfareporting_v3_3.Schema.CustomFloodlightVariable[];
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
        value?: Number;
      }
      export interface ConversionError {
        code?: string;
        kind?: string;
        message?: string;
      }
      export interface ConversionStatus {
        conversion?: Dfareporting_v3_3.Schema.Conversion;
        errors?: Dfareporting_v3_3.Schema.ConversionError[];
        kind?: string;
      }
      export interface ConversionsBatchInsertRequest {
        conversions?: Dfareporting_v3_3.Schema.Conversion[];
        encryptionInfo?: Dfareporting_v3_3.Schema.EncryptionInfo;
        kind?: string;
      }
      export interface ConversionsBatchInsertResponse {
        hasFailures?: boolean;
        kind?: string;
        status?: Dfareporting_v3_3.Schema.ConversionStatus[];
      }
      export interface ConversionsBatchUpdateRequest {
        conversions?: Dfareporting_v3_3.Schema.Conversion[];
        encryptionInfo?: Dfareporting_v3_3.Schema.EncryptionInfo;
        kind?: string;
      }
      export interface ConversionsBatchUpdateResponse {
        hasFailures?: boolean;
        kind?: string;
        status?: Dfareporting_v3_3.Schema.ConversionStatus[];
      }
      export interface CountriesListResponse {
        countries?: Dfareporting_v3_3.Schema.Country[];
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
        additionalSizes?: Dfareporting_v3_3.Schema.Size[];
        advertiserId?: string;
        allowScriptAccess?: boolean;
        archived?: boolean;
        artworkType?: string;
        authoringSource?: string;
        authoringTool?: string;
        autoAdvanceImages?: boolean;
        backgroundColor?: string;
        backupImageClickThroughUrl?: Dfareporting_v3_3.Schema.CreativeClickThroughUrl;
        backupImageFeatures?: string[];
        backupImageReportingLabel?: string;
        backupImageTargetWindow?: Dfareporting_v3_3.Schema.TargetWindow;
        clickTags?: Dfareporting_v3_3.Schema.ClickTag[];
        commercialId?: string;
        companionCreatives?: string[];
        compatibility?: string[];
        convertFlashToHtml5?: boolean;
        counterCustomEvents?: Dfareporting_v3_3.Schema.CreativeCustomEvent[];
        creativeAssetSelection?: Dfareporting_v3_3.Schema.CreativeAssetSelection;
        creativeAssets?: Dfareporting_v3_3.Schema.CreativeAsset[];
        creativeFieldAssignments?: Dfareporting_v3_3.Schema.CreativeFieldAssignment[];
        customKeyValues?: string[];
        dynamicAssetSelection?: boolean;
        exitCustomEvents?: Dfareporting_v3_3.Schema.CreativeCustomEvent[];
        fsCommand?: Dfareporting_v3_3.Schema.FsCommand;
        htmlCode?: string;
        htmlCodeLocked?: boolean;
        id?: string;
        idDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        kind?: string;
        lastModifiedInfo?: Dfareporting_v3_3.Schema.LastModifiedInfo;
        latestTraffickedCreativeId?: string;
        mediaDescription?: string;
        mediaDuration?: Number;
        name?: string;
        overrideCss?: string;
        progressOffset?: Dfareporting_v3_3.Schema.VideoOffset;
        redirectUrl?: string;
        renderingId?: string;
        renderingIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        requiredFlashPluginVersion?: string;
        requiredFlashVersion?: number;
        size?: Dfareporting_v3_3.Schema.Size;
        skipOffset?: Dfareporting_v3_3.Schema.VideoOffset;
        skippable?: boolean;
        sslCompliant?: boolean;
        sslOverride?: boolean;
        studioAdvertiserId?: string;
        studioCreativeId?: string;
        studioTraffickedCreativeId?: string;
        subaccountId?: string;
        thirdPartyBackupImageImpressionsUrl?: string;
        thirdPartyRichMediaImpressionsUrl?: string;
        thirdPartyUrls?: Dfareporting_v3_3.Schema.ThirdPartyTrackingUrl[];
        timerCustomEvents?: Dfareporting_v3_3.Schema.CreativeCustomEvent[];
        totalFileSize?: string;
        type?: string;
        universalAdId?: Dfareporting_v3_3.Schema.UniversalAdId;
        version?: number;
      }
      export interface CreativeAsset {
        actionScript3?: boolean;
        active?: boolean;
        additionalSizes?: Dfareporting_v3_3.Schema.Size[];
        alignment?: string;
        artworkType?: string;
        assetIdentifier?: Dfareporting_v3_3.Schema.CreativeAssetId;
        audioBitRate?: number;
        audioSampleRate?: number;
        backupImageExit?: Dfareporting_v3_3.Schema.CreativeCustomEvent;
        bitRate?: number;
        childAssetType?: string;
        collapsedSize?: Dfareporting_v3_3.Schema.Size;
        companionCreativeIds?: string[];
        customStartTimeValue?: number;
        detectedFeatures?: string[];
        displayType?: string;
        duration?: number;
        durationType?: string;
        expandedDimension?: Dfareporting_v3_3.Schema.Size;
        fileSize?: string;
        flashVersion?: number;
        frameRate?: Number;
        hideFlashObjects?: boolean;
        hideSelectionBoxes?: boolean;
        horizontallyLocked?: boolean;
        id?: string;
        idDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        mediaDuration?: Number;
        mimeType?: string;
        offset?: Dfareporting_v3_3.Schema.OffsetPosition;
        orientation?: string;
        originalBackup?: boolean;
        politeLoad?: boolean;
        position?: Dfareporting_v3_3.Schema.OffsetPosition;
        positionLeftUnit?: string;
        positionTopUnit?: string;
        progressiveServingUrl?: string;
        pushdown?: boolean;
        pushdownDuration?: Number;
        role?: string;
        size?: Dfareporting_v3_3.Schema.Size;
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
        assetIdentifier?: Dfareporting_v3_3.Schema.CreativeAssetId;
        clickTags?: Dfareporting_v3_3.Schema.ClickTag[];
        detectedFeatures?: string[];
        id?: string;
        idDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        kind?: string;
        warnedValidationRules?: string[];
      }
      export interface CreativeAssetSelection {
        defaultAssetId?: string;
        rules?: Dfareporting_v3_3.Schema.Rule[];
      }
      export interface CreativeAssignment {
        active?: boolean;
        applyEventTags?: boolean;
        clickThroughUrl?: Dfareporting_v3_3.Schema.ClickThroughUrl;
        companionCreativeOverrides?: Dfareporting_v3_3.Schema.CompanionClickThroughOverride[];
        creativeGroupAssignments?: Dfareporting_v3_3.Schema.CreativeGroupAssignment[];
        creativeId?: string;
        creativeIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        endTime?: string;
        richMediaExitOverrides?: Dfareporting_v3_3.Schema.RichMediaExitOverride[];
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
        exitClickThroughUrl?: Dfareporting_v3_3.Schema.CreativeClickThroughUrl;
        id?: string;
        popupWindowProperties?: Dfareporting_v3_3.Schema.PopupWindowProperties;
        targetType?: string;
        videoReportingId?: string;
      }
      export interface CreativeField {
        accountId?: string;
        advertiserId?: string;
        advertiserIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
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
        creativeFieldValues?: Dfareporting_v3_3.Schema.CreativeFieldValue[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface CreativeFieldsListResponse {
        creativeFields?: Dfareporting_v3_3.Schema.CreativeField[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface CreativeGroup {
        accountId?: string;
        advertiserId?: string;
        advertiserIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
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
        creativeGroups?: Dfareporting_v3_3.Schema.CreativeGroup[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface CreativeOptimizationConfiguration {
        id?: string;
        name?: string;
        optimizationActivitys?: Dfareporting_v3_3.Schema.OptimizationActivity[];
        optimizationModel?: string;
      }
      export interface CreativeRotation {
        creativeAssignments?: Dfareporting_v3_3.Schema.CreativeAssignment[];
        creativeOptimizationConfigurationId?: string;
        type?: string;
        weightCalculationStrategy?: string;
      }
      export interface CreativesListResponse {
        creatives?: Dfareporting_v3_3.Schema.Creative[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface CrossDimensionReachReportCompatibleFields {
        breakdown?: Dfareporting_v3_3.Schema.Dimension[];
        dimensionFilters?: Dfareporting_v3_3.Schema.Dimension[];
        kind?: string;
        metrics?: Dfareporting_v3_3.Schema.Metric[];
        overlapMetrics?: Dfareporting_v3_3.Schema.Metric[];
      }
      export interface CustomFloodlightVariable {
        kind?: string;
        type?: string;
        value?: string;
      }
      export interface CustomRichMediaEvents {
        filteredEventIds?: Dfareporting_v3_3.Schema.DimensionValue[];
        kind?: string;
      }
      export interface CustomViewabilityMetric {
        configuration?: Dfareporting_v3_3.Schema.CustomViewabilityMetricConfiguration;
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
        mobileApp?: Dfareporting_v3_3.Schema.MobileApp;
        remarketingListIds?: string[];
      }
      export interface DefaultClickThroughEventTagProperties {
        defaultClickThroughEventTagId?: string;
        overrideInheritedEventTag?: boolean;
      }
      export interface DeliverySchedule {
        frequencyCap?: Dfareporting_v3_3.Schema.FrequencyCap;
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
        items?: Dfareporting_v3_3.Schema.DimensionValue[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface DimensionValueRequest {
        dimensionName?: string;
        endDate?: string;
        filters?: Dfareporting_v3_3.Schema.DimensionFilter[];
        kind?: string;
        startDate?: string;
      }
      export interface DirectorySite {
        active?: boolean;
        id?: string;
        idDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        inpageTagFormats?: string[];
        interstitialTagFormats?: string[];
        kind?: string;
        name?: string;
        settings?: Dfareporting_v3_3.Schema.DirectorySiteSettings;
        url?: string;
      }
      export interface DirectorySiteSettings {
        activeViewOptOut?: boolean;
        dfpSettings?: Dfareporting_v3_3.Schema.DfpSettings;
        instreamVideoPlacementAccepted?: boolean;
        interstitialPlacementAccepted?: boolean;
      }
      export interface DirectorySitesListResponse {
        directorySites?: Dfareporting_v3_3.Schema.DirectorySite[];
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
        dynamicTargetingKeys?: Dfareporting_v3_3.Schema.DynamicTargetingKey[];
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
        advertiserIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        campaignId?: string;
        campaignIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
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
        eventTags?: Dfareporting_v3_3.Schema.EventTag[];
        kind?: string;
      }
      export interface File {
        dateRange?: Dfareporting_v3_3.Schema.DateRange;
        etag?: string;
        fileName?: string;
        format?: string;
        id?: string;
        kind?: string;
        lastModifiedTime?: string;
        reportId?: string;
        status?: string;
        urls?: Dfareporting_v3_3.Schema.FileUrls;
      }
      export interface FileList {
        etag?: string;
        items?: Dfareporting_v3_3.Schema.File[];
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
        floodlightActivities?: Dfareporting_v3_3.Schema.FloodlightActivity[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface FloodlightActivity {
        accountId?: string;
        advertiserId?: string;
        advertiserIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        cacheBustingType?: string;
        countingMethod?: string;
        defaultTags?: Dfareporting_v3_3.Schema.FloodlightActivityDynamicTag[];
        expectedUrl?: string;
        floodlightActivityGroupId?: string;
        floodlightActivityGroupName?: string;
        floodlightActivityGroupTagString?: string;
        floodlightActivityGroupType?: string;
        floodlightConfigurationId?: string;
        floodlightConfigurationIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        floodlightTagType?: string;
        hidden?: boolean;
        id?: string;
        idDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        kind?: string;
        name?: string;
        notes?: string;
        publisherTags?: Dfareporting_v3_3.Schema.FloodlightActivityPublisherDynamicTag[];
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
        advertiserIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        floodlightConfigurationId?: string;
        floodlightConfigurationIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        id?: string;
        idDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        kind?: string;
        name?: string;
        subaccountId?: string;
        tagString?: string;
        type?: string;
      }
      export interface FloodlightActivityGroupsListResponse {
        floodlightActivityGroups?: Dfareporting_v3_3.Schema.FloodlightActivityGroup[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface FloodlightActivityPublisherDynamicTag {
        clickThrough?: boolean;
        directorySiteId?: string;
        dynamicTag?: Dfareporting_v3_3.Schema.FloodlightActivityDynamicTag;
        siteId?: string;
        siteIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        viewThrough?: boolean;
      }
      export interface FloodlightConfiguration {
        accountId?: string;
        advertiserId?: string;
        advertiserIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        analyticsDataSharingEnabled?: boolean;
        customViewabilityMetric?: Dfareporting_v3_3.Schema.CustomViewabilityMetric;
        exposureToConversionEnabled?: boolean;
        firstDayOfWeek?: string;
        id?: string;
        idDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        inAppAttributionTrackingEnabled?: boolean;
        kind?: string;
        lookbackConfiguration?: Dfareporting_v3_3.Schema.LookbackConfiguration;
        naturalSearchConversionAttributionOption?: string;
        omnitureSettings?: Dfareporting_v3_3.Schema.OmnitureSettings;
        subaccountId?: string;
        tagSettings?: Dfareporting_v3_3.Schema.TagSettings;
        thirdPartyAuthenticationTokens?: Dfareporting_v3_3.Schema.ThirdPartyAuthenticationToken[];
        userDefinedVariableConfigurations?: Dfareporting_v3_3.Schema.UserDefinedVariableConfiguration[];
      }
      export interface FloodlightConfigurationsListResponse {
        floodlightConfigurations?: Dfareporting_v3_3.Schema.FloodlightConfiguration[];
        kind?: string;
      }
      export interface FloodlightReportCompatibleFields {
        dimensionFilters?: Dfareporting_v3_3.Schema.Dimension[];
        dimensions?: Dfareporting_v3_3.Schema.Dimension[];
        kind?: string;
        metrics?: Dfareporting_v3_3.Schema.Metric[];
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
        cities?: Dfareporting_v3_3.Schema.City[];
        countries?: Dfareporting_v3_3.Schema.Country[];
        excludeCountries?: boolean;
        metros?: Dfareporting_v3_3.Schema.Metro[];
        postalCodes?: Dfareporting_v3_3.Schema.PostalCode[];
        regions?: Dfareporting_v3_3.Schema.Region[];
      }
      export interface InventoryItem {
        accountId?: string;
        adSlots?: Dfareporting_v3_3.Schema.AdSlot[];
        advertiserId?: string;
        contentCategoryId?: string;
        estimatedClickThroughRate?: string;
        estimatedConversionRate?: string;
        id?: string;
        inPlan?: boolean;
        kind?: string;
        lastModifiedInfo?: Dfareporting_v3_3.Schema.LastModifiedInfo;
        name?: string;
        negotiationChannelId?: string;
        orderId?: string;
        placementStrategyId?: string;
        pricing?: Dfareporting_v3_3.Schema.Pricing;
        projectId?: string;
        rfpId?: string;
        siteId?: string;
        subaccountId?: string;
        type?: string;
      }
      export interface InventoryItemsListResponse {
        inventoryItems?: Dfareporting_v3_3.Schema.InventoryItem[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface KeyValueTargetingExpression {
        expression?: string;
      }
      export interface LandingPage {
        advertiserId?: string;
        archived?: boolean;
        deepLinks?: Dfareporting_v3_3.Schema.DeepLink[];
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
        languages?: Dfareporting_v3_3.Schema.Language[];
      }
      export interface LanguagesListResponse {
        kind?: string;
        languages?: Dfareporting_v3_3.Schema.Language[];
      }
      export interface LastModifiedInfo {
        time?: string;
      }
      export interface ListPopulationClause {
        terms?: Dfareporting_v3_3.Schema.ListPopulationTerm[];
      }
      export interface ListPopulationRule {
        floodlightActivityId?: string;
        floodlightActivityName?: string;
        listPopulationClauses?: Dfareporting_v3_3.Schema.ListPopulationClause[];
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
        metros?: Dfareporting_v3_3.Schema.Metro[];
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
        mobileApps?: Dfareporting_v3_3.Schema.MobileApp[];
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
        mobileCarriers?: Dfareporting_v3_3.Schema.MobileCarrier[];
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
        operatingSystem?: Dfareporting_v3_3.Schema.OperatingSystem;
      }
      export interface OperatingSystemVersionsListResponse {
        kind?: string;
        operatingSystemVersions?: Dfareporting_v3_3.Schema.OperatingSystemVersion[];
      }
      export interface OperatingSystemsListResponse {
        kind?: string;
        operatingSystems?: Dfareporting_v3_3.Schema.OperatingSystem[];
      }
      export interface OptimizationActivity {
        floodlightActivityId?: string;
        floodlightActivityIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        weight?: number;
      }
      export interface Order {
        accountId?: string;
        advertiserId?: string;
        approverUserProfileIds?: string[];
        buyerInvoiceId?: string;
        buyerOrganizationName?: string;
        comments?: string;
        contacts?: Dfareporting_v3_3.Schema.OrderContact[];
        id?: string;
        kind?: string;
        lastModifiedInfo?: Dfareporting_v3_3.Schema.LastModifiedInfo;
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
        createdInfo?: Dfareporting_v3_3.Schema.LastModifiedInfo;
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
        orderDocuments?: Dfareporting_v3_3.Schema.OrderDocument[];
      }
      export interface OrdersListResponse {
        kind?: string;
        nextPageToken?: string;
        orders?: Dfareporting_v3_3.Schema.Order[];
      }
      export interface PathToConversionReportCompatibleFields {
        conversionDimensions?: Dfareporting_v3_3.Schema.Dimension[];
        customFloodlightVariables?: Dfareporting_v3_3.Schema.Dimension[];
        kind?: string;
        metrics?: Dfareporting_v3_3.Schema.Metric[];
        perInteractionDimensions?: Dfareporting_v3_3.Schema.Dimension[];
      }
      export interface Placement {
        accountId?: string;
        adBlockingOptOut?: boolean;
        additionalSizes?: Dfareporting_v3_3.Schema.Size[];
        advertiserId?: string;
        advertiserIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        archived?: boolean;
        campaignId?: string;
        campaignIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        comment?: string;
        compatibility?: string;
        contentCategoryId?: string;
        createInfo?: Dfareporting_v3_3.Schema.LastModifiedInfo;
        directorySiteId?: string;
        directorySiteIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        externalId?: string;
        id?: string;
        idDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        keyName?: string;
        kind?: string;
        lastModifiedInfo?: Dfareporting_v3_3.Schema.LastModifiedInfo;
        lookbackConfiguration?: Dfareporting_v3_3.Schema.LookbackConfiguration;
        name?: string;
        paymentApproved?: boolean;
        paymentSource?: string;
        placementGroupId?: string;
        placementGroupIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        placementStrategyId?: string;
        pricingSchedule?: Dfareporting_v3_3.Schema.PricingSchedule;
        primary?: boolean;
        publisherUpdateInfo?: Dfareporting_v3_3.Schema.LastModifiedInfo;
        siteId?: string;
        siteIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        size?: Dfareporting_v3_3.Schema.Size;
        sslRequired?: boolean;
        status?: string;
        subaccountId?: string;
        tagFormats?: string[];
        tagSetting?: Dfareporting_v3_3.Schema.TagSetting;
        videoActiveViewOptOut?: boolean;
        videoSettings?: Dfareporting_v3_3.Schema.VideoSettings;
        vpaidAdapterChoice?: string;
      }
      export interface PlacementAssignment {
        active?: boolean;
        placementId?: string;
        placementIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        sslRequired?: boolean;
      }
      export interface PlacementGroup {
        accountId?: string;
        advertiserId?: string;
        advertiserIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        archived?: boolean;
        campaignId?: string;
        campaignIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        childPlacementIds?: string[];
        comment?: string;
        contentCategoryId?: string;
        createInfo?: Dfareporting_v3_3.Schema.LastModifiedInfo;
        directorySiteId?: string;
        directorySiteIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        externalId?: string;
        id?: string;
        idDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        kind?: string;
        lastModifiedInfo?: Dfareporting_v3_3.Schema.LastModifiedInfo;
        name?: string;
        placementGroupType?: string;
        placementStrategyId?: string;
        pricingSchedule?: Dfareporting_v3_3.Schema.PricingSchedule;
        primaryPlacementId?: string;
        primaryPlacementIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        siteId?: string;
        siteIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        subaccountId?: string;
      }
      export interface PlacementGroupsListResponse {
        kind?: string;
        nextPageToken?: string;
        placementGroups?: Dfareporting_v3_3.Schema.PlacementGroup[];
      }
      export interface PlacementStrategiesListResponse {
        kind?: string;
        nextPageToken?: string;
        placementStrategies?: Dfareporting_v3_3.Schema.PlacementStrategy[];
      }
      export interface PlacementStrategy {
        accountId?: string;
        id?: string;
        kind?: string;
        name?: string;
      }
      export interface PlacementTag {
        placementId?: string;
        tagDatas?: Dfareporting_v3_3.Schema.TagData[];
      }
      export interface PlacementsGenerateTagsResponse {
        kind?: string;
        placementTags?: Dfareporting_v3_3.Schema.PlacementTag[];
      }
      export interface PlacementsListResponse {
        kind?: string;
        nextPageToken?: string;
        placements?: Dfareporting_v3_3.Schema.Placement[];
      }
      export interface PlatformType {
        id?: string;
        kind?: string;
        name?: string;
      }
      export interface PlatformTypesListResponse {
        kind?: string;
        platformTypes?: Dfareporting_v3_3.Schema.PlatformType[];
      }
      export interface PopupWindowProperties {
        dimension?: Dfareporting_v3_3.Schema.Size;
        offset?: Dfareporting_v3_3.Schema.OffsetPosition;
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
        postalCodes?: Dfareporting_v3_3.Schema.PostalCode[];
      }
      export interface Pricing {
        capCostType?: string;
        endDate?: string;
        flights?: Dfareporting_v3_3.Schema.Flight[];
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
        pricingPeriods?: Dfareporting_v3_3.Schema.PricingSchedulePricingPeriod[];
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
        lastModifiedInfo?: Dfareporting_v3_3.Schema.LastModifiedInfo;
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
        projects?: Dfareporting_v3_3.Schema.Project[];
      }
      export interface ReachReportCompatibleFields {
        dimensionFilters?: Dfareporting_v3_3.Schema.Dimension[];
        dimensions?: Dfareporting_v3_3.Schema.Dimension[];
        kind?: string;
        metrics?: Dfareporting_v3_3.Schema.Metric[];
        pivotedActivityMetrics?: Dfareporting_v3_3.Schema.Metric[];
        reachByFrequencyMetrics?: Dfareporting_v3_3.Schema.Metric[];
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
        regions?: Dfareporting_v3_3.Schema.Region[];
      }
      export interface RemarketingList {
        accountId?: string;
        active?: boolean;
        advertiserId?: string;
        advertiserIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        description?: string;
        id?: string;
        kind?: string;
        lifeSpan?: string;
        listPopulationRule?: Dfareporting_v3_3.Schema.ListPopulationRule;
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
        remarketingLists?: Dfareporting_v3_3.Schema.RemarketingList[];
      }
      export interface Report {
        accountId?: string;
        criteria?: Dfareporting_v3_3.Schema.ReportCriteria;
        crossDimensionReachCriteria?: Dfareporting_v3_3.Schema.ReportCrossDimensionReachCriteria;
        delivery?: Dfareporting_v3_3.Schema.ReportDelivery;
        etag?: string;
        fileName?: string;
        floodlightCriteria?: Dfareporting_v3_3.Schema.ReportFloodlightCriteria;
        format?: string;
        id?: string;
        kind?: string;
        lastModifiedTime?: string;
        name?: string;
        ownerProfileId?: string;
        pathToConversionCriteria?: Dfareporting_v3_3.Schema.ReportPathToConversionCriteria;
        reachCriteria?: Dfareporting_v3_3.Schema.ReportReachCriteria;
        schedule?: Dfareporting_v3_3.Schema.ReportSchedule;
        subAccountId?: string;
        type?: string;
      }
      export interface ReportCompatibleFields {
        dimensionFilters?: Dfareporting_v3_3.Schema.Dimension[];
        dimensions?: Dfareporting_v3_3.Schema.Dimension[];
        kind?: string;
        metrics?: Dfareporting_v3_3.Schema.Metric[];
        pivotedActivityMetrics?: Dfareporting_v3_3.Schema.Metric[];
      }
      export interface ReportCriteria {
        activities?: Dfareporting_v3_3.Schema.Activities;
        customRichMediaEvents?: Dfareporting_v3_3.Schema.CustomRichMediaEvents;
        dateRange?: Dfareporting_v3_3.Schema.DateRange;
        dimensionFilters?: Dfareporting_v3_3.Schema.DimensionValue[];
        dimensions?: Dfareporting_v3_3.Schema.SortedDimension[];
        metricNames?: string[];
      }
      export interface ReportCrossDimensionReachCriteria {
        breakdown?: Dfareporting_v3_3.Schema.SortedDimension[];
        dateRange?: Dfareporting_v3_3.Schema.DateRange;
        dimension?: string;
        dimensionFilters?: Dfareporting_v3_3.Schema.DimensionValue[];
        metricNames?: string[];
        overlapMetricNames?: string[];
        pivoted?: boolean;
      }
      export interface ReportDelivery {
        emailOwner?: boolean;
        emailOwnerDeliveryType?: string;
        message?: string;
        recipients?: Dfareporting_v3_3.Schema.Recipient[];
      }
      export interface ReportFloodlightCriteria {
        customRichMediaEvents?: Dfareporting_v3_3.Schema.DimensionValue[];
        dateRange?: Dfareporting_v3_3.Schema.DateRange;
        dimensionFilters?: Dfareporting_v3_3.Schema.DimensionValue[];
        dimensions?: Dfareporting_v3_3.Schema.SortedDimension[];
        floodlightConfigId?: Dfareporting_v3_3.Schema.DimensionValue;
        metricNames?: string[];
        reportProperties?: Dfareporting_v3_3.Schema.ReportFloodlightCriteriaReportProperties;
      }
      export interface ReportFloodlightCriteriaReportProperties {
        includeAttributedIPConversions?: boolean;
        includeUnattributedCookieConversions?: boolean;
        includeUnattributedIPConversions?: boolean;
      }
      export interface ReportList {
        etag?: string;
        items?: Dfareporting_v3_3.Schema.Report[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface ReportPathToConversionCriteria {
        activityFilters?: Dfareporting_v3_3.Schema.DimensionValue[];
        conversionDimensions?: Dfareporting_v3_3.Schema.SortedDimension[];
        customFloodlightVariables?: Dfareporting_v3_3.Schema.SortedDimension[];
        customRichMediaEvents?: Dfareporting_v3_3.Schema.DimensionValue[];
        dateRange?: Dfareporting_v3_3.Schema.DateRange;
        floodlightConfigId?: Dfareporting_v3_3.Schema.DimensionValue;
        metricNames?: string[];
        perInteractionDimensions?: Dfareporting_v3_3.Schema.SortedDimension[];
        reportProperties?: Dfareporting_v3_3.Schema.ReportPathToConversionCriteriaReportProperties;
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
        activities?: Dfareporting_v3_3.Schema.Activities;
        customRichMediaEvents?: Dfareporting_v3_3.Schema.CustomRichMediaEvents;
        dateRange?: Dfareporting_v3_3.Schema.DateRange;
        dimensionFilters?: Dfareporting_v3_3.Schema.DimensionValue[];
        dimensions?: Dfareporting_v3_3.Schema.SortedDimension[];
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
        lookbackConfiguration?: Dfareporting_v3_3.Schema.LookbackConfiguration;
        reportGenerationTimeZoneId?: string;
      }
      export interface RichMediaExitOverride {
        clickThroughUrl?: Dfareporting_v3_3.Schema.ClickThroughUrl;
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
        directorySiteIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        id?: string;
        idDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        keyName?: string;
        kind?: string;
        name?: string;
        siteContacts?: Dfareporting_v3_3.Schema.SiteContact[];
        siteSettings?: Dfareporting_v3_3.Schema.SiteSettings;
        subaccountId?: string;
        videoSettings?: Dfareporting_v3_3.Schema.SiteVideoSettings;
      }
      export interface SiteCompanionSetting {
        companionsDisabled?: boolean;
        enabledSizes?: Dfareporting_v3_3.Schema.Size[];
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
        tagSetting?: Dfareporting_v3_3.Schema.TagSetting;
        videoActiveViewOptOutTemplate?: boolean;
        vpaidAdapterChoiceTemplate?: string;
      }
      export interface SiteSkippableSetting {
        kind?: string;
        progressOffset?: Dfareporting_v3_3.Schema.VideoOffset;
        skipOffset?: Dfareporting_v3_3.Schema.VideoOffset;
        skippable?: boolean;
      }
      export interface SiteTranscodeSetting {
        enabledVideoFormats?: number[];
        kind?: string;
      }
      export interface SiteVideoSettings {
        companionSettings?: Dfareporting_v3_3.Schema.SiteCompanionSetting;
        kind?: string;
        orientation?: string;
        skippableSettings?: Dfareporting_v3_3.Schema.SiteSkippableSetting;
        transcodeSettings?: Dfareporting_v3_3.Schema.SiteTranscodeSetting;
      }
      export interface SitesListResponse {
        kind?: string;
        nextPageToken?: string;
        sites?: Dfareporting_v3_3.Schema.Site[];
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
        sizes?: Dfareporting_v3_3.Schema.Size[];
      }
      export interface SkippableSetting {
        kind?: string;
        progressOffset?: Dfareporting_v3_3.Schema.VideoOffset;
        skipOffset?: Dfareporting_v3_3.Schema.VideoOffset;
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
        subaccounts?: Dfareporting_v3_3.Schema.Subaccount[];
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
        advertiserIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
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
        targetableRemarketingLists?: Dfareporting_v3_3.Schema.TargetableRemarketingList[];
      }
      export interface TargetingTemplate {
        accountId?: string;
        advertiserId?: string;
        advertiserIdDimensionValue?: Dfareporting_v3_3.Schema.DimensionValue;
        dayPartTargeting?: Dfareporting_v3_3.Schema.DayPartTargeting;
        geoTargeting?: Dfareporting_v3_3.Schema.GeoTargeting;
        id?: string;
        keyValueTargetingExpression?: Dfareporting_v3_3.Schema.KeyValueTargetingExpression;
        kind?: string;
        languageTargeting?: Dfareporting_v3_3.Schema.LanguageTargeting;
        listTargetingExpression?: Dfareporting_v3_3.Schema.ListTargetingExpression;
        name?: string;
        subaccountId?: string;
        technologyTargeting?: Dfareporting_v3_3.Schema.TechnologyTargeting;
      }
      export interface TargetingTemplatesListResponse {
        kind?: string;
        nextPageToken?: string;
        targetingTemplates?: Dfareporting_v3_3.Schema.TargetingTemplate[];
      }
      export interface TechnologyTargeting {
        browsers?: Dfareporting_v3_3.Schema.Browser[];
        connectionTypes?: Dfareporting_v3_3.Schema.ConnectionType[];
        mobileCarriers?: Dfareporting_v3_3.Schema.MobileCarrier[];
        operatingSystemVersions?: Dfareporting_v3_3.Schema.OperatingSystemVersion[];
        operatingSystems?: Dfareporting_v3_3.Schema.OperatingSystem[];
        platformTypes?: Dfareporting_v3_3.Schema.PlatformType[];
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
        items?: Dfareporting_v3_3.Schema.UserProfile[];
        kind?: string;
      }
      export interface UserRole {
        accountId?: string;
        defaultUserRole?: boolean;
        id?: string;
        kind?: string;
        name?: string;
        parentUserRoleId?: string;
        permissions?: Dfareporting_v3_3.Schema.UserRolePermission[];
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
        userRolePermissionGroups?: Dfareporting_v3_3.Schema.UserRolePermissionGroup[];
      }
      export interface UserRolePermissionsListResponse {
        kind?: string;
        userRolePermissions?: Dfareporting_v3_3.Schema.UserRolePermission[];
      }
      export interface UserRolesListResponse {
        kind?: string;
        nextPageToken?: string;
        userRoles?: Dfareporting_v3_3.Schema.UserRole[];
      }
      export interface VideoFormat {
        fileType?: string;
        id?: number;
        kind?: string;
        resolution?: Dfareporting_v3_3.Schema.Size;
        targetBitRate?: number;
      }
      export interface VideoFormatsListResponse {
        kind?: string;
        videoFormats?: Dfareporting_v3_3.Schema.VideoFormat[];
      }
      export interface VideoOffset {
        offsetPercentage?: number;
        offsetSeconds?: number;
      }
      export interface VideoSettings {
        companionSettings?: Dfareporting_v3_3.Schema.CompanionSetting;
        kind?: string;
        orientation?: string;
        skippableSettings?: Dfareporting_v3_3.Schema.SkippableSetting;
        transcodeSettings?: Dfareporting_v3_3.Schema.TranscodeSetting;
      }
    }
  }
  export interface Dfareporting_v3_3 {
    AccountActiveAdSummaries?: Dfareporting_v3_3.Collection.AccountActiveAdSummariesCollection;
    AccountPermissionGroups?: Dfareporting_v3_3.Collection.AccountPermissionGroupsCollection;
    AccountPermissions?: Dfareporting_v3_3.Collection.AccountPermissionsCollection;
    AccountUserProfiles?: Dfareporting_v3_3.Collection.AccountUserProfilesCollection;
    Accounts?: Dfareporting_v3_3.Collection.AccountsCollection;
    Ads?: Dfareporting_v3_3.Collection.AdsCollection;
    AdvertiserGroups?: Dfareporting_v3_3.Collection.AdvertiserGroupsCollection;
    AdvertiserLandingPages?: Dfareporting_v3_3.Collection.AdvertiserLandingPagesCollection;
    Advertisers?: Dfareporting_v3_3.Collection.AdvertisersCollection;
    Browsers?: Dfareporting_v3_3.Collection.BrowsersCollection;
    CampaignCreativeAssociations?: Dfareporting_v3_3.Collection.CampaignCreativeAssociationsCollection;
    Campaigns?: Dfareporting_v3_3.Collection.CampaignsCollection;
    ChangeLogs?: Dfareporting_v3_3.Collection.ChangeLogsCollection;
    Cities?: Dfareporting_v3_3.Collection.CitiesCollection;
    ConnectionTypes?: Dfareporting_v3_3.Collection.ConnectionTypesCollection;
    ContentCategories?: Dfareporting_v3_3.Collection.ContentCategoriesCollection;
    Conversions?: Dfareporting_v3_3.Collection.ConversionsCollection;
    Countries?: Dfareporting_v3_3.Collection.CountriesCollection;
    CreativeAssets?: Dfareporting_v3_3.Collection.CreativeAssetsCollection;
    CreativeFieldValues?: Dfareporting_v3_3.Collection.CreativeFieldValuesCollection;
    CreativeFields?: Dfareporting_v3_3.Collection.CreativeFieldsCollection;
    CreativeGroups?: Dfareporting_v3_3.Collection.CreativeGroupsCollection;
    Creatives?: Dfareporting_v3_3.Collection.CreativesCollection;
    DimensionValues?: Dfareporting_v3_3.Collection.DimensionValuesCollection;
    DirectorySites?: Dfareporting_v3_3.Collection.DirectorySitesCollection;
    DynamicTargetingKeys?: Dfareporting_v3_3.Collection.DynamicTargetingKeysCollection;
    EventTags?: Dfareporting_v3_3.Collection.EventTagsCollection;
    Files?: Dfareporting_v3_3.Collection.FilesCollection;
    FloodlightActivities?: Dfareporting_v3_3.Collection.FloodlightActivitiesCollection;
    FloodlightActivityGroups?: Dfareporting_v3_3.Collection.FloodlightActivityGroupsCollection;
    FloodlightConfigurations?: Dfareporting_v3_3.Collection.FloodlightConfigurationsCollection;
    InventoryItems?: Dfareporting_v3_3.Collection.InventoryItemsCollection;
    Languages?: Dfareporting_v3_3.Collection.LanguagesCollection;
    Metros?: Dfareporting_v3_3.Collection.MetrosCollection;
    MobileApps?: Dfareporting_v3_3.Collection.MobileAppsCollection;
    MobileCarriers?: Dfareporting_v3_3.Collection.MobileCarriersCollection;
    OperatingSystemVersions?: Dfareporting_v3_3.Collection.OperatingSystemVersionsCollection;
    OperatingSystems?: Dfareporting_v3_3.Collection.OperatingSystemsCollection;
    OrderDocuments?: Dfareporting_v3_3.Collection.OrderDocumentsCollection;
    Orders?: Dfareporting_v3_3.Collection.OrdersCollection;
    PlacementGroups?: Dfareporting_v3_3.Collection.PlacementGroupsCollection;
    PlacementStrategies?: Dfareporting_v3_3.Collection.PlacementStrategiesCollection;
    Placements?: Dfareporting_v3_3.Collection.PlacementsCollection;
    PlatformTypes?: Dfareporting_v3_3.Collection.PlatformTypesCollection;
    PostalCodes?: Dfareporting_v3_3.Collection.PostalCodesCollection;
    Projects?: Dfareporting_v3_3.Collection.ProjectsCollection;
    Regions?: Dfareporting_v3_3.Collection.RegionsCollection;
    RemarketingListShares?: Dfareporting_v3_3.Collection.RemarketingListSharesCollection;
    RemarketingLists?: Dfareporting_v3_3.Collection.RemarketingListsCollection;
    Reports?: Dfareporting_v3_3.Collection.ReportsCollection;
    Sites?: Dfareporting_v3_3.Collection.SitesCollection;
    Sizes?: Dfareporting_v3_3.Collection.SizesCollection;
    Subaccounts?: Dfareporting_v3_3.Collection.SubaccountsCollection;
    TargetableRemarketingLists?: Dfareporting_v3_3.Collection.TargetableRemarketingListsCollection;
    TargetingTemplates?: Dfareporting_v3_3.Collection.TargetingTemplatesCollection;
    UserProfiles?: Dfareporting_v3_3.Collection.UserProfilesCollection;
    UserRolePermissionGroups?: Dfareporting_v3_3.Collection.UserRolePermissionGroupsCollection;
    UserRolePermissions?: Dfareporting_v3_3.Collection.UserRolePermissionsCollection;
    UserRoles?: Dfareporting_v3_3.Collection.UserRolesCollection;
    VideoFormats?: Dfareporting_v3_3.Collection.VideoFormatsCollection;
    // Create a new instance of Account
    newAccount(): Dfareporting_v3_3.Schema.Account;
    // Create a new instance of AccountUserProfile
    newAccountUserProfile(): Dfareporting_v3_3.Schema.AccountUserProfile;
    // Create a new instance of Activities
    newActivities(): Dfareporting_v3_3.Schema.Activities;
    // Create a new instance of Ad
    newAd(): Dfareporting_v3_3.Schema.Ad;
    // Create a new instance of AdBlockingConfiguration
    newAdBlockingConfiguration(): Dfareporting_v3_3.Schema.AdBlockingConfiguration;
    // Create a new instance of Advertiser
    newAdvertiser(): Dfareporting_v3_3.Schema.Advertiser;
    // Create a new instance of AdvertiserGroup
    newAdvertiserGroup(): Dfareporting_v3_3.Schema.AdvertiserGroup;
    // Create a new instance of AudienceSegment
    newAudienceSegment(): Dfareporting_v3_3.Schema.AudienceSegment;
    // Create a new instance of AudienceSegmentGroup
    newAudienceSegmentGroup(): Dfareporting_v3_3.Schema.AudienceSegmentGroup;
    // Create a new instance of Browser
    newBrowser(): Dfareporting_v3_3.Schema.Browser;
    // Create a new instance of Campaign
    newCampaign(): Dfareporting_v3_3.Schema.Campaign;
    // Create a new instance of CampaignCreativeAssociation
    newCampaignCreativeAssociation(): Dfareporting_v3_3.Schema.CampaignCreativeAssociation;
    // Create a new instance of City
    newCity(): Dfareporting_v3_3.Schema.City;
    // Create a new instance of ClickTag
    newClickTag(): Dfareporting_v3_3.Schema.ClickTag;
    // Create a new instance of ClickThroughUrl
    newClickThroughUrl(): Dfareporting_v3_3.Schema.ClickThroughUrl;
    // Create a new instance of ClickThroughUrlSuffixProperties
    newClickThroughUrlSuffixProperties(): Dfareporting_v3_3.Schema.ClickThroughUrlSuffixProperties;
    // Create a new instance of CompanionClickThroughOverride
    newCompanionClickThroughOverride(): Dfareporting_v3_3.Schema.CompanionClickThroughOverride;
    // Create a new instance of CompanionSetting
    newCompanionSetting(): Dfareporting_v3_3.Schema.CompanionSetting;
    // Create a new instance of ConnectionType
    newConnectionType(): Dfareporting_v3_3.Schema.ConnectionType;
    // Create a new instance of ContentCategory
    newContentCategory(): Dfareporting_v3_3.Schema.ContentCategory;
    // Create a new instance of Conversion
    newConversion(): Dfareporting_v3_3.Schema.Conversion;
    // Create a new instance of ConversionsBatchInsertRequest
    newConversionsBatchInsertRequest(): Dfareporting_v3_3.Schema.ConversionsBatchInsertRequest;
    // Create a new instance of ConversionsBatchUpdateRequest
    newConversionsBatchUpdateRequest(): Dfareporting_v3_3.Schema.ConversionsBatchUpdateRequest;
    // Create a new instance of Country
    newCountry(): Dfareporting_v3_3.Schema.Country;
    // Create a new instance of Creative
    newCreative(): Dfareporting_v3_3.Schema.Creative;
    // Create a new instance of CreativeAsset
    newCreativeAsset(): Dfareporting_v3_3.Schema.CreativeAsset;
    // Create a new instance of CreativeAssetId
    newCreativeAssetId(): Dfareporting_v3_3.Schema.CreativeAssetId;
    // Create a new instance of CreativeAssetMetadata
    newCreativeAssetMetadata(): Dfareporting_v3_3.Schema.CreativeAssetMetadata;
    // Create a new instance of CreativeAssetSelection
    newCreativeAssetSelection(): Dfareporting_v3_3.Schema.CreativeAssetSelection;
    // Create a new instance of CreativeAssignment
    newCreativeAssignment(): Dfareporting_v3_3.Schema.CreativeAssignment;
    // Create a new instance of CreativeClickThroughUrl
    newCreativeClickThroughUrl(): Dfareporting_v3_3.Schema.CreativeClickThroughUrl;
    // Create a new instance of CreativeCustomEvent
    newCreativeCustomEvent(): Dfareporting_v3_3.Schema.CreativeCustomEvent;
    // Create a new instance of CreativeField
    newCreativeField(): Dfareporting_v3_3.Schema.CreativeField;
    // Create a new instance of CreativeFieldAssignment
    newCreativeFieldAssignment(): Dfareporting_v3_3.Schema.CreativeFieldAssignment;
    // Create a new instance of CreativeFieldValue
    newCreativeFieldValue(): Dfareporting_v3_3.Schema.CreativeFieldValue;
    // Create a new instance of CreativeGroup
    newCreativeGroup(): Dfareporting_v3_3.Schema.CreativeGroup;
    // Create a new instance of CreativeGroupAssignment
    newCreativeGroupAssignment(): Dfareporting_v3_3.Schema.CreativeGroupAssignment;
    // Create a new instance of CreativeOptimizationConfiguration
    newCreativeOptimizationConfiguration(): Dfareporting_v3_3.Schema.CreativeOptimizationConfiguration;
    // Create a new instance of CreativeRotation
    newCreativeRotation(): Dfareporting_v3_3.Schema.CreativeRotation;
    // Create a new instance of CustomFloodlightVariable
    newCustomFloodlightVariable(): Dfareporting_v3_3.Schema.CustomFloodlightVariable;
    // Create a new instance of CustomRichMediaEvents
    newCustomRichMediaEvents(): Dfareporting_v3_3.Schema.CustomRichMediaEvents;
    // Create a new instance of CustomViewabilityMetric
    newCustomViewabilityMetric(): Dfareporting_v3_3.Schema.CustomViewabilityMetric;
    // Create a new instance of CustomViewabilityMetricConfiguration
    newCustomViewabilityMetricConfiguration(): Dfareporting_v3_3.Schema.CustomViewabilityMetricConfiguration;
    // Create a new instance of DateRange
    newDateRange(): Dfareporting_v3_3.Schema.DateRange;
    // Create a new instance of DayPartTargeting
    newDayPartTargeting(): Dfareporting_v3_3.Schema.DayPartTargeting;
    // Create a new instance of DeepLink
    newDeepLink(): Dfareporting_v3_3.Schema.DeepLink;
    // Create a new instance of DefaultClickThroughEventTagProperties
    newDefaultClickThroughEventTagProperties(): Dfareporting_v3_3.Schema.DefaultClickThroughEventTagProperties;
    // Create a new instance of DeliverySchedule
    newDeliverySchedule(): Dfareporting_v3_3.Schema.DeliverySchedule;
    // Create a new instance of DfpSettings
    newDfpSettings(): Dfareporting_v3_3.Schema.DfpSettings;
    // Create a new instance of DimensionFilter
    newDimensionFilter(): Dfareporting_v3_3.Schema.DimensionFilter;
    // Create a new instance of DimensionValue
    newDimensionValue(): Dfareporting_v3_3.Schema.DimensionValue;
    // Create a new instance of DimensionValueRequest
    newDimensionValueRequest(): Dfareporting_v3_3.Schema.DimensionValueRequest;
    // Create a new instance of DirectorySite
    newDirectorySite(): Dfareporting_v3_3.Schema.DirectorySite;
    // Create a new instance of DirectorySiteSettings
    newDirectorySiteSettings(): Dfareporting_v3_3.Schema.DirectorySiteSettings;
    // Create a new instance of DynamicTargetingKey
    newDynamicTargetingKey(): Dfareporting_v3_3.Schema.DynamicTargetingKey;
    // Create a new instance of EncryptionInfo
    newEncryptionInfo(): Dfareporting_v3_3.Schema.EncryptionInfo;
    // Create a new instance of EventTag
    newEventTag(): Dfareporting_v3_3.Schema.EventTag;
    // Create a new instance of EventTagOverride
    newEventTagOverride(): Dfareporting_v3_3.Schema.EventTagOverride;
    // Create a new instance of FloodlightActivity
    newFloodlightActivity(): Dfareporting_v3_3.Schema.FloodlightActivity;
    // Create a new instance of FloodlightActivityDynamicTag
    newFloodlightActivityDynamicTag(): Dfareporting_v3_3.Schema.FloodlightActivityDynamicTag;
    // Create a new instance of FloodlightActivityGroup
    newFloodlightActivityGroup(): Dfareporting_v3_3.Schema.FloodlightActivityGroup;
    // Create a new instance of FloodlightActivityPublisherDynamicTag
    newFloodlightActivityPublisherDynamicTag(): Dfareporting_v3_3.Schema.FloodlightActivityPublisherDynamicTag;
    // Create a new instance of FloodlightConfiguration
    newFloodlightConfiguration(): Dfareporting_v3_3.Schema.FloodlightConfiguration;
    // Create a new instance of FrequencyCap
    newFrequencyCap(): Dfareporting_v3_3.Schema.FrequencyCap;
    // Create a new instance of FsCommand
    newFsCommand(): Dfareporting_v3_3.Schema.FsCommand;
    // Create a new instance of GeoTargeting
    newGeoTargeting(): Dfareporting_v3_3.Schema.GeoTargeting;
    // Create a new instance of KeyValueTargetingExpression
    newKeyValueTargetingExpression(): Dfareporting_v3_3.Schema.KeyValueTargetingExpression;
    // Create a new instance of LandingPage
    newLandingPage(): Dfareporting_v3_3.Schema.LandingPage;
    // Create a new instance of Language
    newLanguage(): Dfareporting_v3_3.Schema.Language;
    // Create a new instance of LanguageTargeting
    newLanguageTargeting(): Dfareporting_v3_3.Schema.LanguageTargeting;
    // Create a new instance of LastModifiedInfo
    newLastModifiedInfo(): Dfareporting_v3_3.Schema.LastModifiedInfo;
    // Create a new instance of ListPopulationClause
    newListPopulationClause(): Dfareporting_v3_3.Schema.ListPopulationClause;
    // Create a new instance of ListPopulationRule
    newListPopulationRule(): Dfareporting_v3_3.Schema.ListPopulationRule;
    // Create a new instance of ListPopulationTerm
    newListPopulationTerm(): Dfareporting_v3_3.Schema.ListPopulationTerm;
    // Create a new instance of ListTargetingExpression
    newListTargetingExpression(): Dfareporting_v3_3.Schema.ListTargetingExpression;
    // Create a new instance of LookbackConfiguration
    newLookbackConfiguration(): Dfareporting_v3_3.Schema.LookbackConfiguration;
    // Create a new instance of Metro
    newMetro(): Dfareporting_v3_3.Schema.Metro;
    // Create a new instance of MobileApp
    newMobileApp(): Dfareporting_v3_3.Schema.MobileApp;
    // Create a new instance of MobileCarrier
    newMobileCarrier(): Dfareporting_v3_3.Schema.MobileCarrier;
    // Create a new instance of ObjectFilter
    newObjectFilter(): Dfareporting_v3_3.Schema.ObjectFilter;
    // Create a new instance of OffsetPosition
    newOffsetPosition(): Dfareporting_v3_3.Schema.OffsetPosition;
    // Create a new instance of OmnitureSettings
    newOmnitureSettings(): Dfareporting_v3_3.Schema.OmnitureSettings;
    // Create a new instance of OperatingSystem
    newOperatingSystem(): Dfareporting_v3_3.Schema.OperatingSystem;
    // Create a new instance of OperatingSystemVersion
    newOperatingSystemVersion(): Dfareporting_v3_3.Schema.OperatingSystemVersion;
    // Create a new instance of OptimizationActivity
    newOptimizationActivity(): Dfareporting_v3_3.Schema.OptimizationActivity;
    // Create a new instance of Placement
    newPlacement(): Dfareporting_v3_3.Schema.Placement;
    // Create a new instance of PlacementAssignment
    newPlacementAssignment(): Dfareporting_v3_3.Schema.PlacementAssignment;
    // Create a new instance of PlacementGroup
    newPlacementGroup(): Dfareporting_v3_3.Schema.PlacementGroup;
    // Create a new instance of PlacementStrategy
    newPlacementStrategy(): Dfareporting_v3_3.Schema.PlacementStrategy;
    // Create a new instance of PlatformType
    newPlatformType(): Dfareporting_v3_3.Schema.PlatformType;
    // Create a new instance of PopupWindowProperties
    newPopupWindowProperties(): Dfareporting_v3_3.Schema.PopupWindowProperties;
    // Create a new instance of PostalCode
    newPostalCode(): Dfareporting_v3_3.Schema.PostalCode;
    // Create a new instance of PricingSchedule
    newPricingSchedule(): Dfareporting_v3_3.Schema.PricingSchedule;
    // Create a new instance of PricingSchedulePricingPeriod
    newPricingSchedulePricingPeriod(): Dfareporting_v3_3.Schema.PricingSchedulePricingPeriod;
    // Create a new instance of Recipient
    newRecipient(): Dfareporting_v3_3.Schema.Recipient;
    // Create a new instance of Region
    newRegion(): Dfareporting_v3_3.Schema.Region;
    // Create a new instance of RemarketingList
    newRemarketingList(): Dfareporting_v3_3.Schema.RemarketingList;
    // Create a new instance of RemarketingListShare
    newRemarketingListShare(): Dfareporting_v3_3.Schema.RemarketingListShare;
    // Create a new instance of Report
    newReport(): Dfareporting_v3_3.Schema.Report;
    // Create a new instance of ReportCriteria
    newReportCriteria(): Dfareporting_v3_3.Schema.ReportCriteria;
    // Create a new instance of ReportCrossDimensionReachCriteria
    newReportCrossDimensionReachCriteria(): Dfareporting_v3_3.Schema.ReportCrossDimensionReachCriteria;
    // Create a new instance of ReportDelivery
    newReportDelivery(): Dfareporting_v3_3.Schema.ReportDelivery;
    // Create a new instance of ReportFloodlightCriteria
    newReportFloodlightCriteria(): Dfareporting_v3_3.Schema.ReportFloodlightCriteria;
    // Create a new instance of ReportFloodlightCriteriaReportProperties
    newReportFloodlightCriteriaReportProperties(): Dfareporting_v3_3.Schema.ReportFloodlightCriteriaReportProperties;
    // Create a new instance of ReportPathToConversionCriteria
    newReportPathToConversionCriteria(): Dfareporting_v3_3.Schema.ReportPathToConversionCriteria;
    // Create a new instance of ReportPathToConversionCriteriaReportProperties
    newReportPathToConversionCriteriaReportProperties(): Dfareporting_v3_3.Schema.ReportPathToConversionCriteriaReportProperties;
    // Create a new instance of ReportReachCriteria
    newReportReachCriteria(): Dfareporting_v3_3.Schema.ReportReachCriteria;
    // Create a new instance of ReportSchedule
    newReportSchedule(): Dfareporting_v3_3.Schema.ReportSchedule;
    // Create a new instance of ReportsConfiguration
    newReportsConfiguration(): Dfareporting_v3_3.Schema.ReportsConfiguration;
    // Create a new instance of RichMediaExitOverride
    newRichMediaExitOverride(): Dfareporting_v3_3.Schema.RichMediaExitOverride;
    // Create a new instance of Rule
    newRule(): Dfareporting_v3_3.Schema.Rule;
    // Create a new instance of Site
    newSite(): Dfareporting_v3_3.Schema.Site;
    // Create a new instance of SiteCompanionSetting
    newSiteCompanionSetting(): Dfareporting_v3_3.Schema.SiteCompanionSetting;
    // Create a new instance of SiteContact
    newSiteContact(): Dfareporting_v3_3.Schema.SiteContact;
    // Create a new instance of SiteSettings
    newSiteSettings(): Dfareporting_v3_3.Schema.SiteSettings;
    // Create a new instance of SiteSkippableSetting
    newSiteSkippableSetting(): Dfareporting_v3_3.Schema.SiteSkippableSetting;
    // Create a new instance of SiteTranscodeSetting
    newSiteTranscodeSetting(): Dfareporting_v3_3.Schema.SiteTranscodeSetting;
    // Create a new instance of SiteVideoSettings
    newSiteVideoSettings(): Dfareporting_v3_3.Schema.SiteVideoSettings;
    // Create a new instance of Size
    newSize(): Dfareporting_v3_3.Schema.Size;
    // Create a new instance of SkippableSetting
    newSkippableSetting(): Dfareporting_v3_3.Schema.SkippableSetting;
    // Create a new instance of SortedDimension
    newSortedDimension(): Dfareporting_v3_3.Schema.SortedDimension;
    // Create a new instance of Subaccount
    newSubaccount(): Dfareporting_v3_3.Schema.Subaccount;
    // Create a new instance of TagSetting
    newTagSetting(): Dfareporting_v3_3.Schema.TagSetting;
    // Create a new instance of TagSettings
    newTagSettings(): Dfareporting_v3_3.Schema.TagSettings;
    // Create a new instance of TargetWindow
    newTargetWindow(): Dfareporting_v3_3.Schema.TargetWindow;
    // Create a new instance of TargetingTemplate
    newTargetingTemplate(): Dfareporting_v3_3.Schema.TargetingTemplate;
    // Create a new instance of TechnologyTargeting
    newTechnologyTargeting(): Dfareporting_v3_3.Schema.TechnologyTargeting;
    // Create a new instance of ThirdPartyAuthenticationToken
    newThirdPartyAuthenticationToken(): Dfareporting_v3_3.Schema.ThirdPartyAuthenticationToken;
    // Create a new instance of ThirdPartyTrackingUrl
    newThirdPartyTrackingUrl(): Dfareporting_v3_3.Schema.ThirdPartyTrackingUrl;
    // Create a new instance of TranscodeSetting
    newTranscodeSetting(): Dfareporting_v3_3.Schema.TranscodeSetting;
    // Create a new instance of UniversalAdId
    newUniversalAdId(): Dfareporting_v3_3.Schema.UniversalAdId;
    // Create a new instance of UserDefinedVariableConfiguration
    newUserDefinedVariableConfiguration(): Dfareporting_v3_3.Schema.UserDefinedVariableConfiguration;
    // Create a new instance of UserRole
    newUserRole(): Dfareporting_v3_3.Schema.UserRole;
    // Create a new instance of UserRolePermission
    newUserRolePermission(): Dfareporting_v3_3.Schema.UserRolePermission;
    // Create a new instance of VideoOffset
    newVideoOffset(): Dfareporting_v3_3.Schema.VideoOffset;
    // Create a new instance of VideoSettings
    newVideoSettings(): Dfareporting_v3_3.Schema.VideoSettings;
  }
}

declare var Dfareporting_v3_3: GoogleAppsScript.Dfareporting_v3_3;
