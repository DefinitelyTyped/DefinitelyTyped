// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace YoutubePartner {
    namespace Collection {
      interface AssetLabelsCollection {
        // Insert an asset label for an owner.
        insert(resource: Schema.AssetLabel): YoutubePartner.Schema.AssetLabel;
        // Insert an asset label for an owner.
        insert(resource: Schema.AssetLabel, optionalArgs: object): YoutubePartner.Schema.AssetLabel;
        // Retrieves a list of all asset labels for an owner.
        list(): YoutubePartner.Schema.AssetLabelListResponse;
        // Retrieves a list of all asset labels for an owner.
        list(optionalArgs: object): YoutubePartner.Schema.AssetLabelListResponse;
      }
      interface AssetMatchPolicyCollection {
        // Retrieves the match policy assigned to the specified asset by the content owner associated with the authenticated user. This information is only accessible to an owner of the asset.
        get(assetId: string): YoutubePartner.Schema.AssetMatchPolicy;
        // Retrieves the match policy assigned to the specified asset by the content owner associated with the authenticated user. This information is only accessible to an owner of the asset.
        get(assetId: string, optionalArgs: object): YoutubePartner.Schema.AssetMatchPolicy;
        // Updates the asset's match policy. If an asset has multiple owners, each owner may set its own match policy for the asset. YouTube then computes the match policy that is actually applied for the asset based on the territories where each owner owns the asset. This method supports patch semantics.
        patch(resource: Schema.AssetMatchPolicy, assetId: string): YoutubePartner.Schema.AssetMatchPolicy;
        // Updates the asset's match policy. If an asset has multiple owners, each owner may set its own match policy for the asset. YouTube then computes the match policy that is actually applied for the asset based on the territories where each owner owns the asset. This method supports patch semantics.
        patch(resource: Schema.AssetMatchPolicy, assetId: string, optionalArgs: object): YoutubePartner.Schema.AssetMatchPolicy;
        // Updates the asset's match policy. If an asset has multiple owners, each owner may set its own match policy for the asset. YouTube then computes the match policy that is actually applied for the asset based on the territories where each owner owns the asset.
        update(resource: Schema.AssetMatchPolicy, assetId: string): YoutubePartner.Schema.AssetMatchPolicy;
        // Updates the asset's match policy. If an asset has multiple owners, each owner may set its own match policy for the asset. YouTube then computes the match policy that is actually applied for the asset based on the territories where each owner owns the asset.
        update(resource: Schema.AssetMatchPolicy, assetId: string, optionalArgs: object): YoutubePartner.Schema.AssetMatchPolicy;
      }
      interface AssetRelationshipsCollection {
        // Creates a relationship that links two assets.
        insert(resource: Schema.AssetRelationship): YoutubePartner.Schema.AssetRelationship;
        // Creates a relationship that links two assets.
        insert(resource: Schema.AssetRelationship, optionalArgs: object): YoutubePartner.Schema.AssetRelationship;
        // Retrieves a list of relationships for a given asset. The list contains relationships where the specified asset is either the parent (embedding) or child (embedded) asset in the relationship.
        list(assetId: string): YoutubePartner.Schema.AssetRelationshipListResponse;
        // Retrieves a list of relationships for a given asset. The list contains relationships where the specified asset is either the parent (embedding) or child (embedded) asset in the relationship.
        list(assetId: string, optionalArgs: object): YoutubePartner.Schema.AssetRelationshipListResponse;
        // Deletes a relationship between two assets.
        remove(assetRelationshipId: string): void;
        // Deletes a relationship between two assets.
        remove(assetRelationshipId: string, optionalArgs: object): void;
      }
      interface AssetSearchCollection {
        // Searches for assets based on asset metadata. The method can retrieve all assets or only assets owned by the content owner. This method mimics the functionality of the advanced search feature on the Assets page in CMS.
        list(): YoutubePartner.Schema.AssetSearchResponse;
        // Searches for assets based on asset metadata. The method can retrieve all assets or only assets owned by the content owner. This method mimics the functionality of the advanced search feature on the Assets page in CMS.
        list(optionalArgs: object): YoutubePartner.Schema.AssetSearchResponse;
      }
      interface AssetSharesCollection {
        // This method either retrieves a list of asset shares the partner owns and that map to a specified asset view ID or it retrieves a list of asset views associated with a specified asset share ID owned by the partner.
        list(assetId: string): YoutubePartner.Schema.AssetShareListResponse;
        // This method either retrieves a list of asset shares the partner owns and that map to a specified asset view ID or it retrieves a list of asset views associated with a specified asset share ID owned by the partner.
        list(assetId: string, optionalArgs: object): YoutubePartner.Schema.AssetShareListResponse;
      }
      interface AssetsCollection {
        // Retrieves the metadata for the specified asset. Note that if the request identifies an asset that has been merged with another asset, meaning that YouTube identified the requested asset as a duplicate, then the request retrieves the merged, or synthesized, asset.
        get(assetId: string): YoutubePartner.Schema.Asset;
        // Retrieves the metadata for the specified asset. Note that if the request identifies an asset that has been merged with another asset, meaning that YouTube identified the requested asset as a duplicate, then the request retrieves the merged, or synthesized, asset.
        get(assetId: string, optionalArgs: object): YoutubePartner.Schema.Asset;
        // Inserts an asset with the specified metadata. After inserting an asset, you can set its ownership data and match policy.
        insert(resource: Schema.Asset): YoutubePartner.Schema.Asset;
        // Inserts an asset with the specified metadata. After inserting an asset, you can set its ownership data and match policy.
        insert(resource: Schema.Asset, optionalArgs: object): YoutubePartner.Schema.Asset;
        // Retrieves a list of assets based on asset metadata. The method can retrieve all assets or only assets owned by the content owner.
        // Note that in cases where duplicate assets have been merged, the API response only contains the synthesized asset. (It does not contain the constituent assets that were merged into the synthesized asset.)
        list(id: string): YoutubePartner.Schema.AssetListResponse;
        // Retrieves a list of assets based on asset metadata. The method can retrieve all assets or only assets owned by the content owner.
        // Note that in cases where duplicate assets have been merged, the API response only contains the synthesized asset. (It does not contain the constituent assets that were merged into the synthesized asset.)
        list(id: string, optionalArgs: object): YoutubePartner.Schema.AssetListResponse;
        // Updates the metadata for the specified asset. This method supports patch semantics.
        patch(resource: Schema.Asset, assetId: string): YoutubePartner.Schema.Asset;
        // Updates the metadata for the specified asset. This method supports patch semantics.
        patch(resource: Schema.Asset, assetId: string, optionalArgs: object): YoutubePartner.Schema.Asset;
        // Updates the metadata for the specified asset.
        update(resource: Schema.Asset, assetId: string): YoutubePartner.Schema.Asset;
        // Updates the metadata for the specified asset.
        update(resource: Schema.Asset, assetId: string, optionalArgs: object): YoutubePartner.Schema.Asset;
      }
      interface CampaignsCollection {
        // Retrieves a particular campaign for an owner.
        get(campaignId: string): YoutubePartner.Schema.Campaign;
        // Retrieves a particular campaign for an owner.
        get(campaignId: string, optionalArgs: object): YoutubePartner.Schema.Campaign;
        // Insert a new campaign for an owner using the specified campaign data.
        insert(resource: Schema.Campaign): YoutubePartner.Schema.Campaign;
        // Insert a new campaign for an owner using the specified campaign data.
        insert(resource: Schema.Campaign, optionalArgs: object): YoutubePartner.Schema.Campaign;
        // Retrieves a list of campaigns for an owner.
        list(): YoutubePartner.Schema.CampaignList;
        // Retrieves a list of campaigns for an owner.
        list(optionalArgs: object): YoutubePartner.Schema.CampaignList;
        // Update the data for a specific campaign. This method supports patch semantics.
        patch(resource: Schema.Campaign, campaignId: string): YoutubePartner.Schema.Campaign;
        // Update the data for a specific campaign. This method supports patch semantics.
        patch(resource: Schema.Campaign, campaignId: string, optionalArgs: object): YoutubePartner.Schema.Campaign;
        // Deletes a specified campaign for an owner.
        remove(campaignId: string): void;
        // Deletes a specified campaign for an owner.
        remove(campaignId: string, optionalArgs: object): void;
        // Update the data for a specific campaign.
        update(resource: Schema.Campaign, campaignId: string): YoutubePartner.Schema.Campaign;
        // Update the data for a specific campaign.
        update(resource: Schema.Campaign, campaignId: string, optionalArgs: object): YoutubePartner.Schema.Campaign;
      }
      interface ClaimHistoryCollection {
        // Retrieves the claim history for a specified claim.
        get(claimId: string): YoutubePartner.Schema.ClaimHistory;
        // Retrieves the claim history for a specified claim.
        get(claimId: string, optionalArgs: object): YoutubePartner.Schema.ClaimHistory;
      }
      interface ClaimSearchCollection {
        // Retrieves a list of claims that match the search criteria. You can search for claims that are associated with a specific asset or video or that match a specified query string.
        list(): YoutubePartner.Schema.ClaimSearchResponse;
        // Retrieves a list of claims that match the search criteria. You can search for claims that are associated with a specific asset or video or that match a specified query string.
        list(optionalArgs: object): YoutubePartner.Schema.ClaimSearchResponse;
      }
      interface ClaimsCollection {
        // Retrieves a specific claim by ID.
        get(claimId: string): YoutubePartner.Schema.Claim;
        // Retrieves a specific claim by ID.
        get(claimId: string, optionalArgs: object): YoutubePartner.Schema.Claim;
        // Creates a claim. The video being claimed must have been uploaded to a channel associated with the same content owner as the API user sending the request. You can set the claim's policy in any of the following ways:
        // - Use the claim resource's policy property to identify a saved policy by its unique ID.
        // - Use the claim resource's policy property to specify a custom set of rules.
        insert(resource: Schema.Claim): YoutubePartner.Schema.Claim;
        // Creates a claim. The video being claimed must have been uploaded to a channel associated with the same content owner as the API user sending the request. You can set the claim's policy in any of the following ways:
        // - Use the claim resource's policy property to identify a saved policy by its unique ID.
        // - Use the claim resource's policy property to specify a custom set of rules.
        insert(resource: Schema.Claim, optionalArgs: object): YoutubePartner.Schema.Claim;
        // Retrieves a list of claims administered by the content owner associated with the currently authenticated user. Results are sorted in descending order of creation time.
        list(): YoutubePartner.Schema.ClaimListResponse;
        // Retrieves a list of claims administered by the content owner associated with the currently authenticated user. Results are sorted in descending order of creation time.
        list(optionalArgs: object): YoutubePartner.Schema.ClaimListResponse;
        // Updates an existing claim by either changing its policy or its status. You can update a claim's status from active to inactive to effectively release the claim. This method supports patch semantics.
        patch(resource: Schema.Claim, claimId: string): YoutubePartner.Schema.Claim;
        // Updates an existing claim by either changing its policy or its status. You can update a claim's status from active to inactive to effectively release the claim. This method supports patch semantics.
        patch(resource: Schema.Claim, claimId: string, optionalArgs: object): YoutubePartner.Schema.Claim;
        // Updates an existing claim by either changing its policy or its status. You can update a claim's status from active to inactive to effectively release the claim.
        update(resource: Schema.Claim, claimId: string): YoutubePartner.Schema.Claim;
        // Updates an existing claim by either changing its policy or its status. You can update a claim's status from active to inactive to effectively release the claim.
        update(resource: Schema.Claim, claimId: string, optionalArgs: object): YoutubePartner.Schema.Claim;
      }
      interface ContentOwnerAdvertisingOptionsCollection {
        // Retrieves advertising options for the content owner associated with the authenticated user.
        get(): YoutubePartner.Schema.ContentOwnerAdvertisingOption;
        // Retrieves advertising options for the content owner associated with the authenticated user.
        get(optionalArgs: object): YoutubePartner.Schema.ContentOwnerAdvertisingOption;
        // Updates advertising options for the content owner associated with the authenticated API user. This method supports patch semantics.
        patch(resource: Schema.ContentOwnerAdvertisingOption): YoutubePartner.Schema.ContentOwnerAdvertisingOption;
        // Updates advertising options for the content owner associated with the authenticated API user. This method supports patch semantics.
        patch(resource: Schema.ContentOwnerAdvertisingOption, optionalArgs: object): YoutubePartner.Schema.ContentOwnerAdvertisingOption;
        // Updates advertising options for the content owner associated with the authenticated API user.
        update(resource: Schema.ContentOwnerAdvertisingOption): YoutubePartner.Schema.ContentOwnerAdvertisingOption;
        // Updates advertising options for the content owner associated with the authenticated API user.
        update(resource: Schema.ContentOwnerAdvertisingOption, optionalArgs: object): YoutubePartner.Schema.ContentOwnerAdvertisingOption;
      }
      interface ContentOwnersCollection {
        // Retrieves information about the specified content owner.
        get(contentOwnerId: string): YoutubePartner.Schema.ContentOwner;
        // Retrieves information about the specified content owner.
        get(contentOwnerId: string, optionalArgs: object): YoutubePartner.Schema.ContentOwner;
        // Retrieves a list of content owners that match the request criteria.
        list(): YoutubePartner.Schema.ContentOwnerListResponse;
        // Retrieves a list of content owners that match the request criteria.
        list(optionalArgs: object): YoutubePartner.Schema.ContentOwnerListResponse;
      }
      interface LiveCuepointsCollection {
        // Inserts a cuepoint into a live broadcast.
        insert(resource: Schema.LiveCuepoint, channelId: string): YoutubePartner.Schema.LiveCuepoint;
        // Inserts a cuepoint into a live broadcast.
        insert(resource: Schema.LiveCuepoint, channelId: string, optionalArgs: object): YoutubePartner.Schema.LiveCuepoint;
      }
      interface MetadataHistoryCollection {
        // Retrieves a list of all metadata provided for an asset, regardless of which content owner provided the data.
        list(assetId: string): YoutubePartner.Schema.MetadataHistoryListResponse;
        // Retrieves a list of all metadata provided for an asset, regardless of which content owner provided the data.
        list(assetId: string, optionalArgs: object): YoutubePartner.Schema.MetadataHistoryListResponse;
      }
      interface OrdersCollection {
        // Retrieve the details of an existing order.
        get(orderId: string): YoutubePartner.Schema.Order;
        // Retrieve the details of an existing order.
        get(orderId: string, optionalArgs: object): YoutubePartner.Schema.Order;
        // Creates a new basic order entry in the YouTube premium asset order management system. You must supply at least a country and channel in the new order.
        insert(resource: Schema.Order): YoutubePartner.Schema.Order;
        // Creates a new basic order entry in the YouTube premium asset order management system. You must supply at least a country and channel in the new order.
        insert(resource: Schema.Order, optionalArgs: object): YoutubePartner.Schema.Order;
        // Return a list of orders, filtered by the parameters below, may return more than a single page of results.
        list(): YoutubePartner.Schema.OrderListResponse;
        // Return a list of orders, filtered by the parameters below, may return more than a single page of results.
        list(optionalArgs: object): YoutubePartner.Schema.OrderListResponse;
        // Update the values in an existing order. This method supports patch semantics.
        patch(resource: Schema.Order, orderId: string): YoutubePartner.Schema.Order;
        // Update the values in an existing order. This method supports patch semantics.
        patch(resource: Schema.Order, orderId: string, optionalArgs: object): YoutubePartner.Schema.Order;
        // Delete an order, which moves orders to inactive state and removes any associated video.
        remove(orderId: string): void;
        // Delete an order, which moves orders to inactive state and removes any associated video.
        remove(orderId: string, optionalArgs: object): void;
        // Update the values in an existing order.
        update(resource: Schema.Order, orderId: string): YoutubePartner.Schema.Order;
        // Update the values in an existing order.
        update(resource: Schema.Order, orderId: string, optionalArgs: object): YoutubePartner.Schema.Order;
      }
      interface OwnershipCollection {
        // Retrieves the ownership data provided for the specified asset by the content owner associated with the authenticated user.
        get(assetId: string): YoutubePartner.Schema.RightsOwnership;
        // Retrieves the ownership data provided for the specified asset by the content owner associated with the authenticated user.
        get(assetId: string, optionalArgs: object): YoutubePartner.Schema.RightsOwnership;
        // Provides new ownership information for the specified asset. Note that YouTube may receive ownership information from multiple sources. For example, if an asset has multiple owners, each owner might send ownership data for the asset. YouTube algorithmically combines the ownership data received from all of those sources to generate the asset's canonical ownership data, which should provide the most comprehensive and accurate representation of the asset's ownership. This method supports patch semantics.
        patch(resource: Schema.RightsOwnership, assetId: string): YoutubePartner.Schema.RightsOwnership;
        // Provides new ownership information for the specified asset. Note that YouTube may receive ownership information from multiple sources. For example, if an asset has multiple owners, each owner might send ownership data for the asset. YouTube algorithmically combines the ownership data received from all of those sources to generate the asset's canonical ownership data, which should provide the most comprehensive and accurate representation of the asset's ownership. This method supports patch semantics.
        patch(resource: Schema.RightsOwnership, assetId: string, optionalArgs: object): YoutubePartner.Schema.RightsOwnership;
        // Provides new ownership information for the specified asset. Note that YouTube may receive ownership information from multiple sources. For example, if an asset has multiple owners, each owner might send ownership data for the asset. YouTube algorithmically combines the ownership data received from all of those sources to generate the asset's canonical ownership data, which should provide the most comprehensive and accurate representation of the asset's ownership.
        update(resource: Schema.RightsOwnership, assetId: string): YoutubePartner.Schema.RightsOwnership;
        // Provides new ownership information for the specified asset. Note that YouTube may receive ownership information from multiple sources. For example, if an asset has multiple owners, each owner might send ownership data for the asset. YouTube algorithmically combines the ownership data received from all of those sources to generate the asset's canonical ownership data, which should provide the most comprehensive and accurate representation of the asset's ownership.
        update(resource: Schema.RightsOwnership, assetId: string, optionalArgs: object): YoutubePartner.Schema.RightsOwnership;
      }
      interface OwnershipHistoryCollection {
        // Retrieves a list of the ownership data for an asset, regardless of which content owner provided the data. The list only includes the most recent ownership data for each content owner. However, if the content owner has submitted ownership data through multiple data sources (API, content feeds, etc.), the list will contain the most recent data for each content owner and data source.
        list(assetId: string): YoutubePartner.Schema.OwnershipHistoryListResponse;
        // Retrieves a list of the ownership data for an asset, regardless of which content owner provided the data. The list only includes the most recent ownership data for each content owner. However, if the content owner has submitted ownership data through multiple data sources (API, content feeds, etc.), the list will contain the most recent data for each content owner and data source.
        list(assetId: string, optionalArgs: object): YoutubePartner.Schema.OwnershipHistoryListResponse;
      }
      interface PackageCollection {
        // Retrieves information for the specified package.
        get(packageId: string): YoutubePartner.Schema.Package;
        // Retrieves information for the specified package.
        get(packageId: string, optionalArgs: object): YoutubePartner.Schema.Package;
        // Inserts a metadata-only package.
        insert(resource: Schema.Package): YoutubePartner.Schema.PackageInsertResponse;
        // Inserts a metadata-only package.
        insert(resource: Schema.Package, optionalArgs: object): YoutubePartner.Schema.PackageInsertResponse;
      }
      interface PoliciesCollection {
        // Retrieves the specified saved policy.
        get(policyId: string): YoutubePartner.Schema.Policy;
        // Retrieves the specified saved policy.
        get(policyId: string, optionalArgs: object): YoutubePartner.Schema.Policy;
        // Creates a saved policy.
        insert(resource: Schema.Policy): YoutubePartner.Schema.Policy;
        // Creates a saved policy.
        insert(resource: Schema.Policy, optionalArgs: object): YoutubePartner.Schema.Policy;
        // Retrieves a list of the content owner's saved policies.
        list(): YoutubePartner.Schema.PolicyList;
        // Retrieves a list of the content owner's saved policies.
        list(optionalArgs: object): YoutubePartner.Schema.PolicyList;
        // Updates the specified saved policy. This method supports patch semantics.
        patch(resource: Schema.Policy, policyId: string): YoutubePartner.Schema.Policy;
        // Updates the specified saved policy. This method supports patch semantics.
        patch(resource: Schema.Policy, policyId: string, optionalArgs: object): YoutubePartner.Schema.Policy;
        // Updates the specified saved policy.
        update(resource: Schema.Policy, policyId: string): YoutubePartner.Schema.Policy;
        // Updates the specified saved policy.
        update(resource: Schema.Policy, policyId: string, optionalArgs: object): YoutubePartner.Schema.Policy;
      }
      interface PublishersCollection {
        // Retrieves information about the specified publisher.
        get(publisherId: string): YoutubePartner.Schema.Publisher;
        // Retrieves information about the specified publisher.
        get(publisherId: string, optionalArgs: object): YoutubePartner.Schema.Publisher;
        // Retrieves a list of publishers that match the request criteria. This method is analogous to a publisher search function.
        list(): YoutubePartner.Schema.PublisherList;
        // Retrieves a list of publishers that match the request criteria. This method is analogous to a publisher search function.
        list(optionalArgs: object): YoutubePartner.Schema.PublisherList;
      }
      interface ReferenceConflictsCollection {
        // Retrieves information about the specified reference conflict.
        get(referenceConflictId: string): YoutubePartner.Schema.ReferenceConflict;
        // Retrieves information about the specified reference conflict.
        get(referenceConflictId: string, optionalArgs: object): YoutubePartner.Schema.ReferenceConflict;
        // Retrieves a list of unresolved reference conflicts.
        list(): YoutubePartner.Schema.ReferenceConflictListResponse;
        // Retrieves a list of unresolved reference conflicts.
        list(optionalArgs: object): YoutubePartner.Schema.ReferenceConflictListResponse;
      }
      interface ReferencesCollection {
        // Retrieves information about the specified reference.
        get(referenceId: string): YoutubePartner.Schema.Reference;
        // Retrieves information about the specified reference.
        get(referenceId: string, optionalArgs: object): YoutubePartner.Schema.Reference;
        // Creates a reference in one of the following ways:
        // - If your request is uploading a reference file, YouTube creates the reference from the provided content. You can provide either a video/audio file or a pre-generated fingerprint. If you are providing a pre-generated fingerprint, set the reference resource's fpDirect property to true in the request body. In this flow, you can use either the multipart or resumable upload flows to provide the reference content.
        // - If you want to create a reference using a claimed video as the reference content, use the claimId parameter to identify the claim.
        insert(resource: Schema.Reference): YoutubePartner.Schema.Reference;
        // Creates a reference in one of the following ways:
        // - If your request is uploading a reference file, YouTube creates the reference from the provided content. You can provide either a video/audio file or a pre-generated fingerprint. If you are providing a pre-generated fingerprint, set the reference resource's fpDirect property to true in the request body. In this flow, you can use either the multipart or resumable upload flows to provide the reference content.
        // - If you want to create a reference using a claimed video as the reference content, use the claimId parameter to identify the claim.
        insert(resource: Schema.Reference, mediaData: any): YoutubePartner.Schema.Reference;
        // Creates a reference in one of the following ways:
        // - If your request is uploading a reference file, YouTube creates the reference from the provided content. You can provide either a video/audio file or a pre-generated fingerprint. If you are providing a pre-generated fingerprint, set the reference resource's fpDirect property to true in the request body. In this flow, you can use either the multipart or resumable upload flows to provide the reference content.
        // - If you want to create a reference using a claimed video as the reference content, use the claimId parameter to identify the claim.
        insert(resource: Schema.Reference, mediaData: any, optionalArgs: object): YoutubePartner.Schema.Reference;
        // Retrieves a list of references by ID or the list of references for the specified asset.
        list(): YoutubePartner.Schema.ReferenceListResponse;
        // Retrieves a list of references by ID or the list of references for the specified asset.
        list(optionalArgs: object): YoutubePartner.Schema.ReferenceListResponse;
        // Updates a reference. This method supports patch semantics.
        patch(resource: Schema.Reference, referenceId: string): YoutubePartner.Schema.Reference;
        // Updates a reference. This method supports patch semantics.
        patch(resource: Schema.Reference, referenceId: string, optionalArgs: object): YoutubePartner.Schema.Reference;
        // Updates a reference.
        update(resource: Schema.Reference, referenceId: string): YoutubePartner.Schema.Reference;
        // Updates a reference.
        update(resource: Schema.Reference, referenceId: string, optionalArgs: object): YoutubePartner.Schema.Reference;
      }
      interface SpreadsheetTemplateCollection {
        // Retrieves a list of spreadsheet templates for a content owner.
        list(): YoutubePartner.Schema.SpreadsheetTemplateListResponse;
        // Retrieves a list of spreadsheet templates for a content owner.
        list(optionalArgs: object): YoutubePartner.Schema.SpreadsheetTemplateListResponse;
      }
      interface UploaderCollection {
        // Retrieves a list of uploaders for a content owner.
        list(): YoutubePartner.Schema.UploaderListResponse;
        // Retrieves a list of uploaders for a content owner.
        list(optionalArgs: object): YoutubePartner.Schema.UploaderListResponse;
      }
      interface ValidatorCollection {
        // Validate a metadata file.
        validate(resource: Schema.ValidateRequest): YoutubePartner.Schema.ValidateResponse;
        // Validate a metadata file.
        validate(resource: Schema.ValidateRequest, optionalArgs: object): YoutubePartner.Schema.ValidateResponse;
        // Validate a metadata file asynchronously.
        validateAsync(resource: Schema.ValidateAsyncRequest): YoutubePartner.Schema.ValidateAsyncResponse;
        // Validate a metadata file asynchronously.
        validateAsync(resource: Schema.ValidateAsyncRequest, optionalArgs: object): YoutubePartner.Schema.ValidateAsyncResponse;
        // Get the asynchronous validation status.
        validateAsyncStatus(resource: Schema.ValidateStatusRequest): YoutubePartner.Schema.ValidateStatusResponse;
        // Get the asynchronous validation status.
        validateAsyncStatus(resource: Schema.ValidateStatusRequest, optionalArgs: object): YoutubePartner.Schema.ValidateStatusResponse;
      }
      interface VideoAdvertisingOptionsCollection {
        // Retrieves advertising settings for the specified video.
        get(videoId: string): YoutubePartner.Schema.VideoAdvertisingOption;
        // Retrieves advertising settings for the specified video.
        get(videoId: string, optionalArgs: object): YoutubePartner.Schema.VideoAdvertisingOption;
        // Retrieves details about the types of allowed ads for a specified partner- or user-uploaded video.
        getEnabledAds(videoId: string): YoutubePartner.Schema.VideoAdvertisingOptionGetEnabledAdsResponse;
        // Retrieves details about the types of allowed ads for a specified partner- or user-uploaded video.
        getEnabledAds(videoId: string, optionalArgs: object): YoutubePartner.Schema.VideoAdvertisingOptionGetEnabledAdsResponse;
        // Updates the advertising settings for the specified video. This method supports patch semantics.
        patch(resource: Schema.VideoAdvertisingOption, videoId: string): YoutubePartner.Schema.VideoAdvertisingOption;
        // Updates the advertising settings for the specified video. This method supports patch semantics.
        patch(resource: Schema.VideoAdvertisingOption, videoId: string, optionalArgs: object): YoutubePartner.Schema.VideoAdvertisingOption;
        // Updates the advertising settings for the specified video.
        update(resource: Schema.VideoAdvertisingOption, videoId: string): YoutubePartner.Schema.VideoAdvertisingOption;
        // Updates the advertising settings for the specified video.
        update(resource: Schema.VideoAdvertisingOption, videoId: string, optionalArgs: object): YoutubePartner.Schema.VideoAdvertisingOption;
      }
      interface WhitelistsCollection {
        // Retrieves a specific whitelisted channel by ID.
        get(id: string): YoutubePartner.Schema.Whitelist;
        // Retrieves a specific whitelisted channel by ID.
        get(id: string, optionalArgs: object): YoutubePartner.Schema.Whitelist;
        // Whitelist a YouTube channel for your content owner. Whitelisted channels are channels that are not owned or managed by you, but you would like to whitelist so that no claims from your assets are placed on videos uploaded to these channels.
        insert(resource: Schema.Whitelist): YoutubePartner.Schema.Whitelist;
        // Whitelist a YouTube channel for your content owner. Whitelisted channels are channels that are not owned or managed by you, but you would like to whitelist so that no claims from your assets are placed on videos uploaded to these channels.
        insert(resource: Schema.Whitelist, optionalArgs: object): YoutubePartner.Schema.Whitelist;
        // Retrieves a list of whitelisted channels for a content owner.
        list(): YoutubePartner.Schema.WhitelistListResponse;
        // Retrieves a list of whitelisted channels for a content owner.
        list(optionalArgs: object): YoutubePartner.Schema.WhitelistListResponse;
        // Removes a whitelisted channel for a content owner.
        remove(id: string): void;
        // Removes a whitelisted channel for a content owner.
        remove(id: string, optionalArgs: object): void;
      }
    }
    namespace Schema {
      interface AdBreak {
        midrollSeconds?: number;
        position?: string;
        slot?: YoutubePartner.Schema.AdSlot[];
      }
      interface AdSlot {
        id?: string;
        type?: string;
      }
      interface AllowedAdvertisingOptions {
        adsOnEmbeds?: boolean;
        kind?: string;
        licAdFormats?: string[];
        ugcAdFormats?: string[];
      }
      interface Asset {
        aliasId?: string[];
        id?: string;
        kind?: string;
        label?: string[];
        matchPolicy?: YoutubePartner.Schema.AssetMatchPolicy;
        matchPolicyEffective?: YoutubePartner.Schema.AssetMatchPolicy;
        matchPolicyMine?: YoutubePartner.Schema.AssetMatchPolicy;
        metadata?: YoutubePartner.Schema.Metadata;
        metadataEffective?: YoutubePartner.Schema.Metadata;
        metadataMine?: YoutubePartner.Schema.Metadata;
        ownership?: YoutubePartner.Schema.RightsOwnership;
        ownershipConflicts?: YoutubePartner.Schema.OwnershipConflicts;
        ownershipEffective?: YoutubePartner.Schema.RightsOwnership;
        ownershipMine?: YoutubePartner.Schema.RightsOwnership;
        status?: string;
        timeCreated?: string;
        type?: string;
      }
      interface AssetLabel {
        kind?: string;
        labelName?: string;
      }
      interface AssetLabelListResponse {
        items?: YoutubePartner.Schema.AssetLabel[];
        kind?: string;
      }
      interface AssetListResponse {
        items?: YoutubePartner.Schema.Asset[];
        kind?: string;
      }
      interface AssetMatchPolicy {
        kind?: string;
        policyId?: string;
        rules?: YoutubePartner.Schema.PolicyRule[];
      }
      interface AssetRelationship {
        childAssetId?: string;
        id?: string;
        kind?: string;
        parentAssetId?: string;
      }
      interface AssetRelationshipListResponse {
        items?: YoutubePartner.Schema.AssetRelationship[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YoutubePartner.Schema.PageInfo;
      }
      interface AssetSearchResponse {
        items?: YoutubePartner.Schema.AssetSnippet[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YoutubePartner.Schema.PageInfo;
      }
      interface AssetShare {
        kind?: string;
        shareId?: string;
        viewId?: string;
      }
      interface AssetShareListResponse {
        items?: YoutubePartner.Schema.AssetShare[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YoutubePartner.Schema.PageInfo;
      }
      interface AssetSnippet {
        customId?: string;
        id?: string;
        isrc?: string;
        iswc?: string;
        kind?: string;
        timeCreated?: string;
        title?: string;
        type?: string;
      }
      interface Campaign {
        campaignData?: YoutubePartner.Schema.CampaignData;
        id?: string;
        kind?: string;
        status?: string;
        timeCreated?: string;
        timeLastModified?: string;
      }
      interface CampaignData {
        campaignSource?: YoutubePartner.Schema.CampaignSource;
        expireTime?: string;
        name?: string;
        promotedContent?: YoutubePartner.Schema.PromotedContent[];
        startTime?: string;
      }
      interface CampaignList {
        items?: YoutubePartner.Schema.Campaign[];
        kind?: string;
      }
      interface CampaignSource {
        sourceType?: string;
        sourceValue?: string[];
      }
      interface CampaignTargetLink {
        targetId?: string;
        targetType?: string;
      }
      interface Claim {
        appliedPolicy?: YoutubePartner.Schema.Policy;
        assetId?: string;
        blockOutsideOwnership?: boolean;
        contentType?: string;
        id?: string;
        isPartnerUploaded?: boolean;
        kind?: string;
        matchInfo?: YoutubePartner.Schema.ClaimMatchInfo;
        origin?: YoutubePartner.Schema.ClaimOrigin;
        policy?: YoutubePartner.Schema.Policy;
        status?: string;
        timeCreated?: string;
        videoId?: string;
      }
      interface ClaimEvent {
        kind?: string;
        reason?: string;
        source?: YoutubePartner.Schema.ClaimEventSource;
        time?: string;
        type?: string;
        typeDetails?: YoutubePartner.Schema.ClaimEventTypeDetails;
      }
      interface ClaimEventSource {
        contentOwnerId?: string;
        type?: string;
        userEmail?: string;
      }
      interface ClaimEventTypeDetails {
        appealExplanation?: string;
        disputeNotes?: string;
        disputeReason?: string;
        updateStatus?: string;
      }
      interface ClaimHistory {
        event?: YoutubePartner.Schema.ClaimEvent[];
        id?: string;
        kind?: string;
        uploaderChannelId?: string;
      }
      interface ClaimListResponse {
        items?: YoutubePartner.Schema.Claim[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YoutubePartner.Schema.PageInfo;
        previousPageToken?: string;
      }
      interface ClaimMatchInfo {
        longestMatch?: YoutubePartner.Schema.ClaimMatchInfoLongestMatch;
        matchSegments?: YoutubePartner.Schema.MatchSegment[];
        referenceId?: string;
        totalMatch?: YoutubePartner.Schema.ClaimMatchInfoTotalMatch;
      }
      interface ClaimMatchInfoLongestMatch {
        durationSecs?: string;
        referenceOffset?: string;
        userVideoOffset?: string;
      }
      interface ClaimMatchInfoTotalMatch {
        referenceDurationSecs?: string;
        userVideoDurationSecs?: string;
      }
      interface ClaimOrigin {
        source?: string;
      }
      interface ClaimSearchResponse {
        items?: YoutubePartner.Schema.ClaimSnippet[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YoutubePartner.Schema.PageInfo;
        previousPageToken?: string;
      }
      interface ClaimSnippet {
        assetId?: string;
        contentType?: string;
        id?: string;
        isPartnerUploaded?: boolean;
        kind?: string;
        origin?: YoutubePartner.Schema.ClaimSnippetOrigin;
        status?: string;
        thirdPartyClaim?: boolean;
        timeCreated?: string;
        timeStatusLastModified?: string;
        videoId?: string;
        videoTitle?: string;
        videoViews?: string;
      }
      interface ClaimSnippetOrigin {
        source?: string;
      }
      interface ClaimedVideoDefaults {
        autoGeneratedBreaks?: boolean;
        channelOverride?: boolean;
        kind?: string;
        newVideoDefaults?: string[];
      }
      interface Conditions {
        contentMatchType?: string[];
        matchDuration?: YoutubePartner.Schema.IntervalCondition[];
        matchPercent?: YoutubePartner.Schema.IntervalCondition[];
        referenceDuration?: YoutubePartner.Schema.IntervalCondition[];
        referencePercent?: YoutubePartner.Schema.IntervalCondition[];
        requiredTerritories?: YoutubePartner.Schema.TerritoryCondition;
      }
      interface ConflictingOwnership {
        owner?: string;
        ratio?: number;
      }
      interface ContentOwner {
        conflictNotificationEmail?: string;
        displayName?: string;
        disputeNotificationEmails?: string[];
        fingerprintReportNotificationEmails?: string[];
        id?: string;
        kind?: string;
        primaryNotificationEmails?: string[];
      }
      interface ContentOwnerAdvertisingOption {
        allowedOptions?: YoutubePartner.Schema.AllowedAdvertisingOptions;
        claimedVideoOptions?: YoutubePartner.Schema.ClaimedVideoDefaults;
        id?: string;
        kind?: string;
      }
      interface ContentOwnerListResponse {
        items?: YoutubePartner.Schema.ContentOwner[];
        kind?: string;
      }
      interface CountriesRestriction {
        adFormats?: string[];
        territories?: string[];
      }
      interface CuepointSettings {
        cueType?: string;
        durationSecs?: number;
        offsetTimeMs?: string;
        walltime?: string;
      }
      interface Date {
        day?: number;
        month?: number;
        year?: number;
      }
      interface DateRange {
        end?: YoutubePartner.Schema.Date;
        kind?: string;
        start?: YoutubePartner.Schema.Date;
      }
      interface ExcludedInterval {
        high?: number;
        low?: number;
        origin?: string;
        timeCreated?: string;
      }
      interface IntervalCondition {
        high?: number;
        low?: number;
      }
      interface LiveCuepoint {
        broadcastId?: string;
        id?: string;
        kind?: string;
        settings?: YoutubePartner.Schema.CuepointSettings;
      }
      interface MatchSegment {
        channel?: string;
        reference_segment?: YoutubePartner.Schema.Segment;
        video_segment?: YoutubePartner.Schema.Segment;
      }
      interface Metadata {
        actor?: string[];
        album?: string;
        artist?: string[];
        broadcaster?: string[];
        category?: string;
        contentType?: string;
        copyrightDate?: YoutubePartner.Schema.Date;
        customId?: string;
        description?: string;
        director?: string[];
        eidr?: string;
        endYear?: number;
        episodeNumber?: string;
        episodesAreUntitled?: boolean;
        genre?: string[];
        grid?: string;
        hfa?: string;
        infoUrl?: string;
        isan?: string;
        isrc?: string;
        iswc?: string;
        keyword?: string[];
        label?: string;
        notes?: string;
        originalReleaseMedium?: string;
        producer?: string[];
        ratings?: YoutubePartner.Schema.Rating[];
        releaseDate?: YoutubePartner.Schema.Date;
        seasonNumber?: string;
        showCustomId?: string;
        showTitle?: string;
        spokenLanguage?: string;
        startYear?: number;
        subtitledLanguage?: string[];
        title?: string;
        tmsId?: string;
        totalEpisodesExpected?: number;
        upc?: string;
        writer?: string[];
      }
      interface MetadataHistory {
        kind?: string;
        metadata?: YoutubePartner.Schema.Metadata;
        origination?: YoutubePartner.Schema.Origination;
        timeProvided?: string;
      }
      interface MetadataHistoryListResponse {
        items?: YoutubePartner.Schema.MetadataHistory[];
        kind?: string;
      }
      interface Order {
        availGroupId?: string;
        channelId?: string;
        contentType?: string;
        country?: string;
        customId?: string;
        dvdReleaseDate?: YoutubePartner.Schema.Date;
        estDates?: YoutubePartner.Schema.DateRange;
        events?: YoutubePartner.Schema.StateCompleted[];
        id?: string;
        kind?: string;
        movie?: string;
        originalReleaseDate?: YoutubePartner.Schema.Date;
        priority?: string;
        productionHouse?: string;
        purchaseOrder?: string;
        requirements?: YoutubePartner.Schema.Requirements;
        show?: YoutubePartner.Schema.ShowDetails;
        status?: string;
        videoId?: string;
        vodDates?: YoutubePartner.Schema.DateRange;
      }
      interface OrderListResponse {
        items?: YoutubePartner.Schema.Order[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YoutubePartner.Schema.PageInfo;
        previousPageToken?: string;
      }
      interface Origination {
        owner?: string;
        source?: string;
      }
      interface OwnershipConflicts {
        general?: YoutubePartner.Schema.TerritoryConflicts[];
        kind?: string;
        mechanical?: YoutubePartner.Schema.TerritoryConflicts[];
        performance?: YoutubePartner.Schema.TerritoryConflicts[];
        synchronization?: YoutubePartner.Schema.TerritoryConflicts[];
      }
      interface OwnershipHistoryListResponse {
        items?: YoutubePartner.Schema.RightsOwnershipHistory[];
        kind?: string;
      }
      interface Package {
        content?: string;
        customIds?: string[];
        id?: string;
        kind?: string;
        locale?: string;
        name?: string;
        status?: string;
        statusReports?: YoutubePartner.Schema.StatusReport[];
        timeCreated?: string;
        type?: string;
        uploaderName?: string;
      }
      interface PackageInsertResponse {
        errors?: YoutubePartner.Schema.ValidateError[];
        kind?: string;
        resource?: YoutubePartner.Schema.Package;
        status?: string;
      }
      interface PageInfo {
        resultsPerPage?: number;
        startIndex?: number;
        totalResults?: number;
      }
      interface Policy {
        description?: string;
        id?: string;
        kind?: string;
        name?: string;
        rules?: YoutubePartner.Schema.PolicyRule[];
        timeUpdated?: string;
      }
      interface PolicyList {
        items?: YoutubePartner.Schema.Policy[];
        kind?: string;
      }
      interface PolicyRule {
        action?: string;
        conditions?: YoutubePartner.Schema.Conditions;
        subaction?: string[];
      }
      interface PromotedContent {
        link?: YoutubePartner.Schema.CampaignTargetLink[];
      }
      interface Publisher {
        caeNumber?: string;
        id?: string;
        ipiNumber?: string;
        kind?: string;
        name?: string;
      }
      interface PublisherList {
        items?: YoutubePartner.Schema.Publisher[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YoutubePartner.Schema.PageInfo;
      }
      interface Rating {
        rating?: string;
        ratingSystem?: string;
      }
      interface Reference {
        assetId?: string;
        audioswapEnabled?: boolean;
        claimId?: string;
        contentType?: string;
        duplicateLeader?: string;
        excludedIntervals?: YoutubePartner.Schema.ExcludedInterval[];
        fpDirect?: boolean;
        hashCode?: string;
        id?: string;
        ignoreFpMatch?: boolean;
        kind?: string;
        length?: number;
        origination?: YoutubePartner.Schema.Origination;
        status?: string;
        statusReason?: string;
        urgent?: boolean;
        videoId?: string;
      }
      interface ReferenceConflict {
        conflictingReferenceId?: string;
        expiryTime?: string;
        id?: string;
        kind?: string;
        matches?: YoutubePartner.Schema.ReferenceConflictMatch[];
        originalReferenceId?: string;
        status?: string;
      }
      interface ReferenceConflictListResponse {
        items?: YoutubePartner.Schema.ReferenceConflict[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YoutubePartner.Schema.PageInfo;
      }
      interface ReferenceConflictMatch {
        conflicting_reference_offset_ms?: string;
        length_ms?: string;
        original_reference_offset_ms?: string;
        type?: string;
      }
      interface ReferenceListResponse {
        items?: YoutubePartner.Schema.Reference[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YoutubePartner.Schema.PageInfo;
      }
      interface Requirements {
        caption?: boolean;
        hdTranscode?: boolean;
        posterArt?: boolean;
        spotlightArt?: boolean;
        spotlightReview?: boolean;
        trailer?: boolean;
      }
      interface RightsOwnership {
        general?: YoutubePartner.Schema.TerritoryOwners[];
        kind?: string;
        mechanical?: YoutubePartner.Schema.TerritoryOwners[];
        performance?: YoutubePartner.Schema.TerritoryOwners[];
        synchronization?: YoutubePartner.Schema.TerritoryOwners[];
      }
      interface RightsOwnershipHistory {
        kind?: string;
        origination?: YoutubePartner.Schema.Origination;
        ownership?: YoutubePartner.Schema.RightsOwnership;
        timeProvided?: string;
      }
      interface Segment {
        duration?: string;
        kind?: string;
        start?: string;
      }
      interface ShowDetails {
        episodeNumber?: string;
        episodeTitle?: string;
        seasonNumber?: string;
        title?: string;
      }
      interface SpreadsheetTemplate {
        kind?: string;
        status?: string;
        templateContent?: string;
        templateName?: string;
        templateType?: string;
      }
      interface SpreadsheetTemplateListResponse {
        items?: YoutubePartner.Schema.SpreadsheetTemplate[];
        kind?: string;
        status?: string;
      }
      interface StateCompleted {
        state?: string;
        timeCompleted?: string;
      }
      interface StatusReport {
        statusContent?: string;
        statusFileName?: string;
      }
      interface TerritoryCondition {
        territories?: string[];
        type?: string;
      }
      interface TerritoryConflicts {
        conflictingOwnership?: YoutubePartner.Schema.ConflictingOwnership[];
        territory?: string;
      }
      interface TerritoryOwners {
        owner?: string;
        publisher?: string;
        ratio?: number;
        territories?: string[];
        type?: string;
      }
      interface Uploader {
        kind?: string;
        uploaderName?: string;
      }
      interface UploaderListResponse {
        items?: YoutubePartner.Schema.Uploader[];
        kind?: string;
      }
      interface ValidateAsyncRequest {
        content?: string;
        kind?: string;
        uploaderName?: string;
      }
      interface ValidateAsyncResponse {
        kind?: string;
        status?: string;
        validationId?: string;
      }
      interface ValidateError {
        columnName?: string;
        columnNumber?: number;
        lineNumber?: number;
        message?: string;
        messageCode?: number;
        severity?: string;
      }
      interface ValidateRequest {
        content?: string;
        kind?: string;
        locale?: string;
        uploaderName?: string;
      }
      interface ValidateResponse {
        errors?: YoutubePartner.Schema.ValidateError[];
        kind?: string;
        status?: string;
      }
      interface ValidateStatusRequest {
        kind?: string;
        locale?: string;
        validationId?: string;
      }
      interface ValidateStatusResponse {
        errors?: YoutubePartner.Schema.ValidateError[];
        isMetadataOnly?: boolean;
        kind?: string;
        status?: string;
      }
      interface VideoAdvertisingOption {
        adBreaks?: YoutubePartner.Schema.AdBreak[];
        adFormats?: string[];
        autoGeneratedBreaks?: boolean;
        breakPosition?: string[];
        id?: string;
        kind?: string;
        tpAdServerVideoId?: string;
        tpTargetingUrl?: string;
        tpUrlParameters?: string;
      }
      interface VideoAdvertisingOptionGetEnabledAdsResponse {
        adBreaks?: YoutubePartner.Schema.AdBreak[];
        adsOnEmbeds?: boolean;
        countriesRestriction?: YoutubePartner.Schema.CountriesRestriction[];
        id?: string;
        kind?: string;
      }
      interface Whitelist {
        id?: string;
        kind?: string;
        title?: string;
      }
      interface WhitelistListResponse {
        items?: YoutubePartner.Schema.Whitelist[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YoutubePartner.Schema.PageInfo;
      }
    }
  }
  interface YoutubePartner {
    AssetLabels?: YoutubePartner.Collection.AssetLabelsCollection;
    AssetMatchPolicy?: YoutubePartner.Collection.AssetMatchPolicyCollection;
    AssetRelationships?: YoutubePartner.Collection.AssetRelationshipsCollection;
    AssetSearch?: YoutubePartner.Collection.AssetSearchCollection;
    AssetShares?: YoutubePartner.Collection.AssetSharesCollection;
    Assets?: YoutubePartner.Collection.AssetsCollection;
    Campaigns?: YoutubePartner.Collection.CampaignsCollection;
    ClaimHistory?: YoutubePartner.Collection.ClaimHistoryCollection;
    ClaimSearch?: YoutubePartner.Collection.ClaimSearchCollection;
    Claims?: YoutubePartner.Collection.ClaimsCollection;
    ContentOwnerAdvertisingOptions?: YoutubePartner.Collection.ContentOwnerAdvertisingOptionsCollection;
    ContentOwners?: YoutubePartner.Collection.ContentOwnersCollection;
    LiveCuepoints?: YoutubePartner.Collection.LiveCuepointsCollection;
    MetadataHistory?: YoutubePartner.Collection.MetadataHistoryCollection;
    Orders?: YoutubePartner.Collection.OrdersCollection;
    Ownership?: YoutubePartner.Collection.OwnershipCollection;
    OwnershipHistory?: YoutubePartner.Collection.OwnershipHistoryCollection;
    Package?: YoutubePartner.Collection.PackageCollection;
    Policies?: YoutubePartner.Collection.PoliciesCollection;
    Publishers?: YoutubePartner.Collection.PublishersCollection;
    ReferenceConflicts?: YoutubePartner.Collection.ReferenceConflictsCollection;
    References?: YoutubePartner.Collection.ReferencesCollection;
    SpreadsheetTemplate?: YoutubePartner.Collection.SpreadsheetTemplateCollection;
    Uploader?: YoutubePartner.Collection.UploaderCollection;
    Validator?: YoutubePartner.Collection.ValidatorCollection;
    VideoAdvertisingOptions?: YoutubePartner.Collection.VideoAdvertisingOptionsCollection;
    Whitelists?: YoutubePartner.Collection.WhitelistsCollection;
    // Create a new instance of AdBreak
    newAdBreak(): YoutubePartner.Schema.AdBreak;
    // Create a new instance of AdSlot
    newAdSlot(): YoutubePartner.Schema.AdSlot;
    // Create a new instance of AllowedAdvertisingOptions
    newAllowedAdvertisingOptions(): YoutubePartner.Schema.AllowedAdvertisingOptions;
    // Create a new instance of Asset
    newAsset(): YoutubePartner.Schema.Asset;
    // Create a new instance of AssetLabel
    newAssetLabel(): YoutubePartner.Schema.AssetLabel;
    // Create a new instance of AssetMatchPolicy
    newAssetMatchPolicy(): YoutubePartner.Schema.AssetMatchPolicy;
    // Create a new instance of AssetRelationship
    newAssetRelationship(): YoutubePartner.Schema.AssetRelationship;
    // Create a new instance of Campaign
    newCampaign(): YoutubePartner.Schema.Campaign;
    // Create a new instance of CampaignData
    newCampaignData(): YoutubePartner.Schema.CampaignData;
    // Create a new instance of CampaignSource
    newCampaignSource(): YoutubePartner.Schema.CampaignSource;
    // Create a new instance of CampaignTargetLink
    newCampaignTargetLink(): YoutubePartner.Schema.CampaignTargetLink;
    // Create a new instance of Claim
    newClaim(): YoutubePartner.Schema.Claim;
    // Create a new instance of ClaimMatchInfo
    newClaimMatchInfo(): YoutubePartner.Schema.ClaimMatchInfo;
    // Create a new instance of ClaimMatchInfoLongestMatch
    newClaimMatchInfoLongestMatch(): YoutubePartner.Schema.ClaimMatchInfoLongestMatch;
    // Create a new instance of ClaimMatchInfoTotalMatch
    newClaimMatchInfoTotalMatch(): YoutubePartner.Schema.ClaimMatchInfoTotalMatch;
    // Create a new instance of ClaimOrigin
    newClaimOrigin(): YoutubePartner.Schema.ClaimOrigin;
    // Create a new instance of ClaimedVideoDefaults
    newClaimedVideoDefaults(): YoutubePartner.Schema.ClaimedVideoDefaults;
    // Create a new instance of Conditions
    newConditions(): YoutubePartner.Schema.Conditions;
    // Create a new instance of ConflictingOwnership
    newConflictingOwnership(): YoutubePartner.Schema.ConflictingOwnership;
    // Create a new instance of ContentOwnerAdvertisingOption
    newContentOwnerAdvertisingOption(): YoutubePartner.Schema.ContentOwnerAdvertisingOption;
    // Create a new instance of CuepointSettings
    newCuepointSettings(): YoutubePartner.Schema.CuepointSettings;
    // Create a new instance of Date
    newDate(): YoutubePartner.Schema.Date;
    // Create a new instance of DateRange
    newDateRange(): YoutubePartner.Schema.DateRange;
    // Create a new instance of ExcludedInterval
    newExcludedInterval(): YoutubePartner.Schema.ExcludedInterval;
    // Create a new instance of IntervalCondition
    newIntervalCondition(): YoutubePartner.Schema.IntervalCondition;
    // Create a new instance of LiveCuepoint
    newLiveCuepoint(): YoutubePartner.Schema.LiveCuepoint;
    // Create a new instance of MatchSegment
    newMatchSegment(): YoutubePartner.Schema.MatchSegment;
    // Create a new instance of Metadata
    newMetadata(): YoutubePartner.Schema.Metadata;
    // Create a new instance of Order
    newOrder(): YoutubePartner.Schema.Order;
    // Create a new instance of Origination
    newOrigination(): YoutubePartner.Schema.Origination;
    // Create a new instance of OwnershipConflicts
    newOwnershipConflicts(): YoutubePartner.Schema.OwnershipConflicts;
    // Create a new instance of Package
    newPackage(): YoutubePartner.Schema.Package;
    // Create a new instance of Policy
    newPolicy(): YoutubePartner.Schema.Policy;
    // Create a new instance of PolicyRule
    newPolicyRule(): YoutubePartner.Schema.PolicyRule;
    // Create a new instance of PromotedContent
    newPromotedContent(): YoutubePartner.Schema.PromotedContent;
    // Create a new instance of Rating
    newRating(): YoutubePartner.Schema.Rating;
    // Create a new instance of Reference
    newReference(): YoutubePartner.Schema.Reference;
    // Create a new instance of Requirements
    newRequirements(): YoutubePartner.Schema.Requirements;
    // Create a new instance of RightsOwnership
    newRightsOwnership(): YoutubePartner.Schema.RightsOwnership;
    // Create a new instance of Segment
    newSegment(): YoutubePartner.Schema.Segment;
    // Create a new instance of ShowDetails
    newShowDetails(): YoutubePartner.Schema.ShowDetails;
    // Create a new instance of StateCompleted
    newStateCompleted(): YoutubePartner.Schema.StateCompleted;
    // Create a new instance of StatusReport
    newStatusReport(): YoutubePartner.Schema.StatusReport;
    // Create a new instance of TerritoryCondition
    newTerritoryCondition(): YoutubePartner.Schema.TerritoryCondition;
    // Create a new instance of TerritoryConflicts
    newTerritoryConflicts(): YoutubePartner.Schema.TerritoryConflicts;
    // Create a new instance of TerritoryOwners
    newTerritoryOwners(): YoutubePartner.Schema.TerritoryOwners;
    // Create a new instance of ValidateAsyncRequest
    newValidateAsyncRequest(): YoutubePartner.Schema.ValidateAsyncRequest;
    // Create a new instance of ValidateRequest
    newValidateRequest(): YoutubePartner.Schema.ValidateRequest;
    // Create a new instance of ValidateStatusRequest
    newValidateStatusRequest(): YoutubePartner.Schema.ValidateStatusRequest;
    // Create a new instance of VideoAdvertisingOption
    newVideoAdvertisingOption(): YoutubePartner.Schema.VideoAdvertisingOption;
    // Create a new instance of Whitelist
    newWhitelist(): YoutubePartner.Schema.Whitelist;
  }
}

declare var YoutubePartner: GoogleAppsScript.YoutubePartner;
