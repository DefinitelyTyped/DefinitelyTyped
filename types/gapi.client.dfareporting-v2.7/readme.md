# Typescript typings for DCM/DFA Reporting And Trafficking API
Manages your DoubleClick Campaign Manager ad campaigns and reports.
For detailed description please check [documentation](https://developers.google.com/doubleclick-advertisers/).

## Installing

Install typings for DCM/DFA Reporting And Trafficking API:
```
npm install @types/gapi.client.dfareporting-v2.7 --save-dev
```

## Usage

You need to initialize Google API client in your code:
```typescript
gapi.load("client", () => { 
    // now we can use gapi.client
    // ... 
});
```

Then load api client wrapper:
```typescript
gapi.client.load('dfareporting', 'v2.7', () => {
    // now we can use gapi.client.dfareporting
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage DoubleClick Digital Marketing conversions
        'https://www.googleapis.com/auth/ddmconversions',
    
        // View and manage DoubleClick for Advertisers reports
        'https://www.googleapis.com/auth/dfareporting',
    
        // View and manage your DoubleClick Campaign Manager's (DCM) display ad campaigns
        'https://www.googleapis.com/auth/dfatrafficking',
    ],
    immediate = true;
// ...

gapi.auth.authorize({ client_id: client_id, scope: scope, immediate: immediate }, authResult => {
    if (authResult && !authResult.error) {
        /* handle succesfull authorization */
    } else {
        /* handle authorization error */
    }
});            
```

After that you can use DCM/DFA Reporting And Trafficking API resources:

```typescript 
    
/* 
Gets the account's active ad summary by account ID.  
*/
await gapi.client.accountActiveAdSummaries.get({ profileId: "profileId", summaryAccountId: "summaryAccountId",  }); 
    
/* 
Gets one account permission group by ID.  
*/
await gapi.client.accountPermissionGroups.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Retrieves the list of account permission groups.  
*/
await gapi.client.accountPermissionGroups.list({ profileId: "profileId",  }); 
    
/* 
Gets one account permission by ID.  
*/
await gapi.client.accountPermissions.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Retrieves the list of account permissions.  
*/
await gapi.client.accountPermissions.list({ profileId: "profileId",  }); 
    
/* 
Gets one account user profile by ID.  
*/
await gapi.client.accountUserProfiles.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Inserts a new account user profile.  
*/
await gapi.client.accountUserProfiles.insert({ profileId: "profileId",  }); 
    
/* 
Retrieves a list of account user profiles, possibly filtered. This method supports paging.  
*/
await gapi.client.accountUserProfiles.list({ profileId: "profileId",  }); 
    
/* 
Updates an existing account user profile. This method supports patch semantics.  
*/
await gapi.client.accountUserProfiles.patch({ id: "id", profileId: "profileId",  }); 
    
/* 
Updates an existing account user profile.  
*/
await gapi.client.accountUserProfiles.update({ profileId: "profileId",  }); 
    
/* 
Gets one account by ID.  
*/
await gapi.client.accounts.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Retrieves the list of accounts, possibly filtered. This method supports paging.  
*/
await gapi.client.accounts.list({ profileId: "profileId",  }); 
    
/* 
Updates an existing account. This method supports patch semantics.  
*/
await gapi.client.accounts.patch({ id: "id", profileId: "profileId",  }); 
    
/* 
Updates an existing account.  
*/
await gapi.client.accounts.update({ profileId: "profileId",  }); 
    
/* 
Gets one ad by ID.  
*/
await gapi.client.ads.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Inserts a new ad.  
*/
await gapi.client.ads.insert({ profileId: "profileId",  }); 
    
/* 
Retrieves a list of ads, possibly filtered. This method supports paging.  
*/
await gapi.client.ads.list({ profileId: "profileId",  }); 
    
/* 
Updates an existing ad. This method supports patch semantics.  
*/
await gapi.client.ads.patch({ id: "id", profileId: "profileId",  }); 
    
/* 
Updates an existing ad.  
*/
await gapi.client.ads.update({ profileId: "profileId",  }); 
    
/* 
Deletes an existing advertiser group.  
*/
await gapi.client.advertiserGroups.delete({ id: "id", profileId: "profileId",  }); 
    
/* 
Gets one advertiser group by ID.  
*/
await gapi.client.advertiserGroups.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Inserts a new advertiser group.  
*/
await gapi.client.advertiserGroups.insert({ profileId: "profileId",  }); 
    
/* 
Retrieves a list of advertiser groups, possibly filtered. This method supports paging.  
*/
await gapi.client.advertiserGroups.list({ profileId: "profileId",  }); 
    
/* 
Updates an existing advertiser group. This method supports patch semantics.  
*/
await gapi.client.advertiserGroups.patch({ id: "id", profileId: "profileId",  }); 
    
/* 
Updates an existing advertiser group.  
*/
await gapi.client.advertiserGroups.update({ profileId: "profileId",  }); 
    
/* 
Gets one advertiser by ID.  
*/
await gapi.client.advertisers.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Inserts a new advertiser.  
*/
await gapi.client.advertisers.insert({ profileId: "profileId",  }); 
    
/* 
Retrieves a list of advertisers, possibly filtered. This method supports paging.  
*/
await gapi.client.advertisers.list({ profileId: "profileId",  }); 
    
/* 
Updates an existing advertiser. This method supports patch semantics.  
*/
await gapi.client.advertisers.patch({ id: "id", profileId: "profileId",  }); 
    
/* 
Updates an existing advertiser.  
*/
await gapi.client.advertisers.update({ profileId: "profileId",  }); 
    
/* 
Retrieves a list of browsers.  
*/
await gapi.client.browsers.list({ profileId: "profileId",  }); 
    
/* 
Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.  
*/
await gapi.client.campaignCreativeAssociations.insert({ campaignId: "campaignId", profileId: "profileId",  }); 
    
/* 
Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.  
*/
await gapi.client.campaignCreativeAssociations.list({ campaignId: "campaignId", profileId: "profileId",  }); 
    
/* 
Gets one campaign by ID.  
*/
await gapi.client.campaigns.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Inserts a new campaign.  
*/
await gapi.client.campaigns.insert({ defaultLandingPageName: "defaultLandingPageName", defaultLandingPageUrl: "defaultLandingPageUrl", profileId: "profileId",  }); 
    
/* 
Retrieves a list of campaigns, possibly filtered. This method supports paging.  
*/
await gapi.client.campaigns.list({ profileId: "profileId",  }); 
    
/* 
Updates an existing campaign. This method supports patch semantics.  
*/
await gapi.client.campaigns.patch({ id: "id", profileId: "profileId",  }); 
    
/* 
Updates an existing campaign.  
*/
await gapi.client.campaigns.update({ profileId: "profileId",  }); 
    
/* 
Gets one change log by ID.  
*/
await gapi.client.changeLogs.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Retrieves a list of change logs. This method supports paging.  
*/
await gapi.client.changeLogs.list({ profileId: "profileId",  }); 
    
/* 
Retrieves a list of cities, possibly filtered.  
*/
await gapi.client.cities.list({ profileId: "profileId",  }); 
    
/* 
Gets one connection type by ID.  
*/
await gapi.client.connectionTypes.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Retrieves a list of connection types.  
*/
await gapi.client.connectionTypes.list({ profileId: "profileId",  }); 
    
/* 
Deletes an existing content category.  
*/
await gapi.client.contentCategories.delete({ id: "id", profileId: "profileId",  }); 
    
/* 
Gets one content category by ID.  
*/
await gapi.client.contentCategories.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Inserts a new content category.  
*/
await gapi.client.contentCategories.insert({ profileId: "profileId",  }); 
    
/* 
Retrieves a list of content categories, possibly filtered. This method supports paging.  
*/
await gapi.client.contentCategories.list({ profileId: "profileId",  }); 
    
/* 
Updates an existing content category. This method supports patch semantics.  
*/
await gapi.client.contentCategories.patch({ id: "id", profileId: "profileId",  }); 
    
/* 
Updates an existing content category.  
*/
await gapi.client.contentCategories.update({ profileId: "profileId",  }); 
    
/* 
Inserts conversions.  
*/
await gapi.client.conversions.batchinsert({ profileId: "profileId",  }); 
    
/* 
Gets one country by ID.  
*/
await gapi.client.countries.get({ dartId: "dartId", profileId: "profileId",  }); 
    
/* 
Retrieves a list of countries.  
*/
await gapi.client.countries.list({ profileId: "profileId",  }); 
    
/* 
Inserts a new creative asset.  
*/
await gapi.client.creativeAssets.insert({ advertiserId: "advertiserId", profileId: "profileId",  }); 
    
/* 
Deletes an existing creative field value.  
*/
await gapi.client.creativeFieldValues.delete({ creativeFieldId: "creativeFieldId", id: "id", profileId: "profileId",  }); 
    
/* 
Gets one creative field value by ID.  
*/
await gapi.client.creativeFieldValues.get({ creativeFieldId: "creativeFieldId", id: "id", profileId: "profileId",  }); 
    
/* 
Inserts a new creative field value.  
*/
await gapi.client.creativeFieldValues.insert({ creativeFieldId: "creativeFieldId", profileId: "profileId",  }); 
    
/* 
Retrieves a list of creative field values, possibly filtered. This method supports paging.  
*/
await gapi.client.creativeFieldValues.list({ creativeFieldId: "creativeFieldId", profileId: "profileId",  }); 
    
/* 
Updates an existing creative field value. This method supports patch semantics.  
*/
await gapi.client.creativeFieldValues.patch({ creativeFieldId: "creativeFieldId", id: "id", profileId: "profileId",  }); 
    
/* 
Updates an existing creative field value.  
*/
await gapi.client.creativeFieldValues.update({ creativeFieldId: "creativeFieldId", profileId: "profileId",  }); 
    
/* 
Deletes an existing creative field.  
*/
await gapi.client.creativeFields.delete({ id: "id", profileId: "profileId",  }); 
    
/* 
Gets one creative field by ID.  
*/
await gapi.client.creativeFields.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Inserts a new creative field.  
*/
await gapi.client.creativeFields.insert({ profileId: "profileId",  }); 
    
/* 
Retrieves a list of creative fields, possibly filtered. This method supports paging.  
*/
await gapi.client.creativeFields.list({ profileId: "profileId",  }); 
    
/* 
Updates an existing creative field. This method supports patch semantics.  
*/
await gapi.client.creativeFields.patch({ id: "id", profileId: "profileId",  }); 
    
/* 
Updates an existing creative field.  
*/
await gapi.client.creativeFields.update({ profileId: "profileId",  }); 
    
/* 
Gets one creative group by ID.  
*/
await gapi.client.creativeGroups.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Inserts a new creative group.  
*/
await gapi.client.creativeGroups.insert({ profileId: "profileId",  }); 
    
/* 
Retrieves a list of creative groups, possibly filtered. This method supports paging.  
*/
await gapi.client.creativeGroups.list({ profileId: "profileId",  }); 
    
/* 
Updates an existing creative group. This method supports patch semantics.  
*/
await gapi.client.creativeGroups.patch({ id: "id", profileId: "profileId",  }); 
    
/* 
Updates an existing creative group.  
*/
await gapi.client.creativeGroups.update({ profileId: "profileId",  }); 
    
/* 
Gets one creative by ID.  
*/
await gapi.client.creatives.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Inserts a new creative.  
*/
await gapi.client.creatives.insert({ profileId: "profileId",  }); 
    
/* 
Retrieves a list of creatives, possibly filtered. This method supports paging.  
*/
await gapi.client.creatives.list({ profileId: "profileId",  }); 
    
/* 
Updates an existing creative. This method supports patch semantics.  
*/
await gapi.client.creatives.patch({ id: "id", profileId: "profileId",  }); 
    
/* 
Updates an existing creative.  
*/
await gapi.client.creatives.update({ profileId: "profileId",  }); 
    
/* 
Retrieves list of report dimension values for a list of filters.  
*/
await gapi.client.dimensionValues.query({ profileId: "profileId",  }); 
    
/* 
Gets one directory site contact by ID.  
*/
await gapi.client.directorySiteContacts.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Retrieves a list of directory site contacts, possibly filtered. This method supports paging.  
*/
await gapi.client.directorySiteContacts.list({ profileId: "profileId",  }); 
    
/* 
Gets one directory site by ID.  
*/
await gapi.client.directorySites.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Inserts a new directory site.  
*/
await gapi.client.directorySites.insert({ profileId: "profileId",  }); 
    
/* 
Retrieves a list of directory sites, possibly filtered. This method supports paging.  
*/
await gapi.client.directorySites.list({ profileId: "profileId",  }); 
    
/* 
Deletes an existing dynamic targeting key.  
*/
await gapi.client.dynamicTargetingKeys.delete({ name: "name", objectId: "objectId", objectType: "objectType", profileId: "profileId",  }); 
    
/* 
Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.  
*/
await gapi.client.dynamicTargetingKeys.insert({ profileId: "profileId",  }); 
    
/* 
Retrieves a list of dynamic targeting keys.  
*/
await gapi.client.dynamicTargetingKeys.list({ profileId: "profileId",  }); 
    
/* 
Deletes an existing event tag.  
*/
await gapi.client.eventTags.delete({ id: "id", profileId: "profileId",  }); 
    
/* 
Gets one event tag by ID.  
*/
await gapi.client.eventTags.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Inserts a new event tag.  
*/
await gapi.client.eventTags.insert({ profileId: "profileId",  }); 
    
/* 
Retrieves a list of event tags, possibly filtered.  
*/
await gapi.client.eventTags.list({ profileId: "profileId",  }); 
    
/* 
Updates an existing event tag. This method supports patch semantics.  
*/
await gapi.client.eventTags.patch({ id: "id", profileId: "profileId",  }); 
    
/* 
Updates an existing event tag.  
*/
await gapi.client.eventTags.update({ profileId: "profileId",  }); 
    
/* 
Retrieves a report file by its report ID and file ID. This method supports media download.  
*/
await gapi.client.files.get({ fileId: "fileId", reportId: "reportId",  }); 
    
/* 
Lists files for a user profile.  
*/
await gapi.client.files.list({ profileId: "profileId",  }); 
    
/* 
Deletes an existing floodlight activity.  
*/
await gapi.client.floodlightActivities.delete({ id: "id", profileId: "profileId",  }); 
    
/* 
Generates a tag for a floodlight activity.  
*/
await gapi.client.floodlightActivities.generatetag({ profileId: "profileId",  }); 
    
/* 
Gets one floodlight activity by ID.  
*/
await gapi.client.floodlightActivities.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Inserts a new floodlight activity.  
*/
await gapi.client.floodlightActivities.insert({ profileId: "profileId",  }); 
    
/* 
Retrieves a list of floodlight activities, possibly filtered. This method supports paging.  
*/
await gapi.client.floodlightActivities.list({ profileId: "profileId",  }); 
    
/* 
Updates an existing floodlight activity. This method supports patch semantics.  
*/
await gapi.client.floodlightActivities.patch({ id: "id", profileId: "profileId",  }); 
    
/* 
Updates an existing floodlight activity.  
*/
await gapi.client.floodlightActivities.update({ profileId: "profileId",  }); 
    
/* 
Gets one floodlight activity group by ID.  
*/
await gapi.client.floodlightActivityGroups.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Inserts a new floodlight activity group.  
*/
await gapi.client.floodlightActivityGroups.insert({ profileId: "profileId",  }); 
    
/* 
Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.  
*/
await gapi.client.floodlightActivityGroups.list({ profileId: "profileId",  }); 
    
/* 
Updates an existing floodlight activity group. This method supports patch semantics.  
*/
await gapi.client.floodlightActivityGroups.patch({ id: "id", profileId: "profileId",  }); 
    
/* 
Updates an existing floodlight activity group.  
*/
await gapi.client.floodlightActivityGroups.update({ profileId: "profileId",  }); 
    
/* 
Gets one floodlight configuration by ID.  
*/
await gapi.client.floodlightConfigurations.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Retrieves a list of floodlight configurations, possibly filtered.  
*/
await gapi.client.floodlightConfigurations.list({ profileId: "profileId",  }); 
    
/* 
Updates an existing floodlight configuration. This method supports patch semantics.  
*/
await gapi.client.floodlightConfigurations.patch({ id: "id", profileId: "profileId",  }); 
    
/* 
Updates an existing floodlight configuration.  
*/
await gapi.client.floodlightConfigurations.update({ profileId: "profileId",  }); 
    
/* 
Gets one inventory item by ID.  
*/
await gapi.client.inventoryItems.get({ id: "id", profileId: "profileId", projectId: "projectId",  }); 
    
/* 
Retrieves a list of inventory items, possibly filtered. This method supports paging.  
*/
await gapi.client.inventoryItems.list({ profileId: "profileId", projectId: "projectId",  }); 
    
/* 
Deletes an existing campaign landing page.  
*/
await gapi.client.landingPages.delete({ campaignId: "campaignId", id: "id", profileId: "profileId",  }); 
    
/* 
Gets one campaign landing page by ID.  
*/
await gapi.client.landingPages.get({ campaignId: "campaignId", id: "id", profileId: "profileId",  }); 
    
/* 
Inserts a new landing page for the specified campaign.  
*/
await gapi.client.landingPages.insert({ campaignId: "campaignId", profileId: "profileId",  }); 
    
/* 
Retrieves the list of landing pages for the specified campaign.  
*/
await gapi.client.landingPages.list({ campaignId: "campaignId", profileId: "profileId",  }); 
    
/* 
Updates an existing campaign landing page. This method supports patch semantics.  
*/
await gapi.client.landingPages.patch({ campaignId: "campaignId", id: "id", profileId: "profileId",  }); 
    
/* 
Updates an existing campaign landing page.  
*/
await gapi.client.landingPages.update({ campaignId: "campaignId", profileId: "profileId",  }); 
    
/* 
Retrieves a list of languages.  
*/
await gapi.client.languages.list({ profileId: "profileId",  }); 
    
/* 
Retrieves a list of metros.  
*/
await gapi.client.metros.list({ profileId: "profileId",  }); 
    
/* 
Gets one mobile carrier by ID.  
*/
await gapi.client.mobileCarriers.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Retrieves a list of mobile carriers.  
*/
await gapi.client.mobileCarriers.list({ profileId: "profileId",  }); 
    
/* 
Gets one operating system version by ID.  
*/
await gapi.client.operatingSystemVersions.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Retrieves a list of operating system versions.  
*/
await gapi.client.operatingSystemVersions.list({ profileId: "profileId",  }); 
    
/* 
Gets one operating system by DART ID.  
*/
await gapi.client.operatingSystems.get({ dartId: "dartId", profileId: "profileId",  }); 
    
/* 
Retrieves a list of operating systems.  
*/
await gapi.client.operatingSystems.list({ profileId: "profileId",  }); 
    
/* 
Gets one order document by ID.  
*/
await gapi.client.orderDocuments.get({ id: "id", profileId: "profileId", projectId: "projectId",  }); 
    
/* 
Retrieves a list of order documents, possibly filtered. This method supports paging.  
*/
await gapi.client.orderDocuments.list({ profileId: "profileId", projectId: "projectId",  }); 
    
/* 
Gets one order by ID.  
*/
await gapi.client.orders.get({ id: "id", profileId: "profileId", projectId: "projectId",  }); 
    
/* 
Retrieves a list of orders, possibly filtered. This method supports paging.  
*/
await gapi.client.orders.list({ profileId: "profileId", projectId: "projectId",  }); 
    
/* 
Gets one placement group by ID.  
*/
await gapi.client.placementGroups.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Inserts a new placement group.  
*/
await gapi.client.placementGroups.insert({ profileId: "profileId",  }); 
    
/* 
Retrieves a list of placement groups, possibly filtered. This method supports paging.  
*/
await gapi.client.placementGroups.list({ profileId: "profileId",  }); 
    
/* 
Updates an existing placement group. This method supports patch semantics.  
*/
await gapi.client.placementGroups.patch({ id: "id", profileId: "profileId",  }); 
    
/* 
Updates an existing placement group.  
*/
await gapi.client.placementGroups.update({ profileId: "profileId",  }); 
    
/* 
Deletes an existing placement strategy.  
*/
await gapi.client.placementStrategies.delete({ id: "id", profileId: "profileId",  }); 
    
/* 
Gets one placement strategy by ID.  
*/
await gapi.client.placementStrategies.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Inserts a new placement strategy.  
*/
await gapi.client.placementStrategies.insert({ profileId: "profileId",  }); 
    
/* 
Retrieves a list of placement strategies, possibly filtered. This method supports paging.  
*/
await gapi.client.placementStrategies.list({ profileId: "profileId",  }); 
    
/* 
Updates an existing placement strategy. This method supports patch semantics.  
*/
await gapi.client.placementStrategies.patch({ id: "id", profileId: "profileId",  }); 
    
/* 
Updates an existing placement strategy.  
*/
await gapi.client.placementStrategies.update({ profileId: "profileId",  }); 
    
/* 
Generates tags for a placement.  
*/
await gapi.client.placements.generatetags({ profileId: "profileId",  }); 
    
/* 
Gets one placement by ID.  
*/
await gapi.client.placements.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Inserts a new placement.  
*/
await gapi.client.placements.insert({ profileId: "profileId",  }); 
    
/* 
Retrieves a list of placements, possibly filtered. This method supports paging.  
*/
await gapi.client.placements.list({ profileId: "profileId",  }); 
    
/* 
Updates an existing placement. This method supports patch semantics.  
*/
await gapi.client.placements.patch({ id: "id", profileId: "profileId",  }); 
    
/* 
Updates an existing placement.  
*/
await gapi.client.placements.update({ profileId: "profileId",  }); 
    
/* 
Gets one platform type by ID.  
*/
await gapi.client.platformTypes.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Retrieves a list of platform types.  
*/
await gapi.client.platformTypes.list({ profileId: "profileId",  }); 
    
/* 
Gets one postal code by ID.  
*/
await gapi.client.postalCodes.get({ code: "code", profileId: "profileId",  }); 
    
/* 
Retrieves a list of postal codes.  
*/
await gapi.client.postalCodes.list({ profileId: "profileId",  }); 
    
/* 
Gets one project by ID.  
*/
await gapi.client.projects.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Retrieves a list of projects, possibly filtered. This method supports paging.  
*/
await gapi.client.projects.list({ profileId: "profileId",  }); 
    
/* 
Retrieves a list of regions.  
*/
await gapi.client.regions.list({ profileId: "profileId",  }); 
    
/* 
Gets one remarketing list share by remarketing list ID.  
*/
await gapi.client.remarketingListShares.get({ profileId: "profileId", remarketingListId: "remarketingListId",  }); 
    
/* 
Updates an existing remarketing list share. This method supports patch semantics.  
*/
await gapi.client.remarketingListShares.patch({ profileId: "profileId", remarketingListId: "remarketingListId",  }); 
    
/* 
Updates an existing remarketing list share.  
*/
await gapi.client.remarketingListShares.update({ profileId: "profileId",  }); 
    
/* 
Gets one remarketing list by ID.  
*/
await gapi.client.remarketingLists.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Inserts a new remarketing list.  
*/
await gapi.client.remarketingLists.insert({ profileId: "profileId",  }); 
    
/* 
Retrieves a list of remarketing lists, possibly filtered. This method supports paging.  
*/
await gapi.client.remarketingLists.list({ advertiserId: "advertiserId", profileId: "profileId",  }); 
    
/* 
Updates an existing remarketing list. This method supports patch semantics.  
*/
await gapi.client.remarketingLists.patch({ id: "id", profileId: "profileId",  }); 
    
/* 
Updates an existing remarketing list.  
*/
await gapi.client.remarketingLists.update({ profileId: "profileId",  }); 
    
/* 
Deletes a report by its ID.  
*/
await gapi.client.reports.delete({ profileId: "profileId", reportId: "reportId",  }); 
    
/* 
Retrieves a report by its ID.  
*/
await gapi.client.reports.get({ profileId: "profileId", reportId: "reportId",  }); 
    
/* 
Creates a report.  
*/
await gapi.client.reports.insert({ profileId: "profileId",  }); 
    
/* 
Retrieves list of reports.  
*/
await gapi.client.reports.list({ profileId: "profileId",  }); 
    
/* 
Updates a report. This method supports patch semantics.  
*/
await gapi.client.reports.patch({ profileId: "profileId", reportId: "reportId",  }); 
    
/* 
Runs a report.  
*/
await gapi.client.reports.run({ profileId: "profileId", reportId: "reportId",  }); 
    
/* 
Updates a report.  
*/
await gapi.client.reports.update({ profileId: "profileId", reportId: "reportId",  }); 
    
/* 
Gets one site by ID.  
*/
await gapi.client.sites.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Inserts a new site.  
*/
await gapi.client.sites.insert({ profileId: "profileId",  }); 
    
/* 
Retrieves a list of sites, possibly filtered. This method supports paging.  
*/
await gapi.client.sites.list({ profileId: "profileId",  }); 
    
/* 
Updates an existing site. This method supports patch semantics.  
*/
await gapi.client.sites.patch({ id: "id", profileId: "profileId",  }); 
    
/* 
Updates an existing site.  
*/
await gapi.client.sites.update({ profileId: "profileId",  }); 
    
/* 
Gets one size by ID.  
*/
await gapi.client.sizes.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Inserts a new size.  
*/
await gapi.client.sizes.insert({ profileId: "profileId",  }); 
    
/* 
Retrieves a list of sizes, possibly filtered.  
*/
await gapi.client.sizes.list({ profileId: "profileId",  }); 
    
/* 
Gets one subaccount by ID.  
*/
await gapi.client.subaccounts.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Inserts a new subaccount.  
*/
await gapi.client.subaccounts.insert({ profileId: "profileId",  }); 
    
/* 
Gets a list of subaccounts, possibly filtered. This method supports paging.  
*/
await gapi.client.subaccounts.list({ profileId: "profileId",  }); 
    
/* 
Updates an existing subaccount. This method supports patch semantics.  
*/
await gapi.client.subaccounts.patch({ id: "id", profileId: "profileId",  }); 
    
/* 
Updates an existing subaccount.  
*/
await gapi.client.subaccounts.update({ profileId: "profileId",  }); 
    
/* 
Gets one remarketing list by ID.  
*/
await gapi.client.targetableRemarketingLists.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.  
*/
await gapi.client.targetableRemarketingLists.list({ advertiserId: "advertiserId", profileId: "profileId",  }); 
    
/* 
Gets one targeting template by ID.  
*/
await gapi.client.targetingTemplates.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Inserts a new targeting template.  
*/
await gapi.client.targetingTemplates.insert({ profileId: "profileId",  }); 
    
/* 
Retrieves a list of targeting templates, optionally filtered. This method supports paging.  
*/
await gapi.client.targetingTemplates.list({ profileId: "profileId",  }); 
    
/* 
Updates an existing targeting template. This method supports patch semantics.  
*/
await gapi.client.targetingTemplates.patch({ id: "id", profileId: "profileId",  }); 
    
/* 
Updates an existing targeting template.  
*/
await gapi.client.targetingTemplates.update({ profileId: "profileId",  }); 
    
/* 
Gets one user profile by ID.  
*/
await gapi.client.userProfiles.get({ profileId: "profileId",  }); 
    
/* 
Retrieves list of user profiles for a user.  
*/
await gapi.client.userProfiles.list({  }); 
    
/* 
Gets one user role permission group by ID.  
*/
await gapi.client.userRolePermissionGroups.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Gets a list of all supported user role permission groups.  
*/
await gapi.client.userRolePermissionGroups.list({ profileId: "profileId",  }); 
    
/* 
Gets one user role permission by ID.  
*/
await gapi.client.userRolePermissions.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Gets a list of user role permissions, possibly filtered.  
*/
await gapi.client.userRolePermissions.list({ profileId: "profileId",  }); 
    
/* 
Deletes an existing user role.  
*/
await gapi.client.userRoles.delete({ id: "id", profileId: "profileId",  }); 
    
/* 
Gets one user role by ID.  
*/
await gapi.client.userRoles.get({ id: "id", profileId: "profileId",  }); 
    
/* 
Inserts a new user role.  
*/
await gapi.client.userRoles.insert({ profileId: "profileId",  }); 
    
/* 
Retrieves a list of user roles, possibly filtered. This method supports paging.  
*/
await gapi.client.userRoles.list({ profileId: "profileId",  }); 
    
/* 
Updates an existing user role. This method supports patch semantics.  
*/
await gapi.client.userRoles.patch({ id: "id", profileId: "profileId",  }); 
    
/* 
Updates an existing user role.  
*/
await gapi.client.userRoles.update({ profileId: "profileId",  }); 
    
/* 
Gets one video format by ID.  
*/
await gapi.client.videoFormats.get({ id: 1, profileId: "profileId",  }); 
    
/* 
Lists available video formats.  
*/
await gapi.client.videoFormats.list({ profileId: "profileId",  });
```