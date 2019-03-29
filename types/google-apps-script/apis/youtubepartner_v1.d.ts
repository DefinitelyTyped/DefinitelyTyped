// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace YoutubePartner_v1 {
    namespace Collection {
      export interface AssetLabelsCollection {
        // Insert an asset label for an owner.
        insert(resource: Schema.AssetLabel): YoutubePartner_v1.Schema.AssetLabel;
        // Insert an asset label for an owner.
        insert(resource: Schema.AssetLabel, optionalArgs: object): YoutubePartner_v1.Schema.AssetLabel;
        // Retrieves a list of all asset labels for an owner.
        list(): YoutubePartner_v1.Schema.AssetLabelListResponse;
        // Retrieves a list of all asset labels for an owner.
        list(optionalArgs: object): YoutubePartner_v1.Schema.AssetLabelListResponse;
      }
      export interface AssetMatchPolicyCollection {
        // Retrieves the match policy assigned to the specified asset by the content owner associated with the authenticated user. This information is only accessible to an owner of the asset.
        get(assetId: string): YoutubePartner_v1.Schema.AssetMatchPolicy;
        // Retrieves the match policy assigned to the specified asset by the content owner associated with the authenticated user. This information is only accessible to an owner of the asset.
        get(assetId: string, optionalArgs: object): YoutubePartner_v1.Schema.AssetMatchPolicy;
        // Updates the asset's match policy. If an asset has multiple owners, each owner may set its own match policy for the asset. YouTube then computes the match policy that is actually applied for the asset based on the territories where each owner owns the asset. This method supports patch semantics.
        patch(resource: Schema.AssetMatchPolicy, assetId: string): YoutubePartner_v1.Schema.AssetMatchPolicy;
        // Updates the asset's match policy. If an asset has multiple owners, each owner may set its own match policy for the asset. YouTube then computes the match policy that is actually applied for the asset based on the territories where each owner owns the asset. This method supports patch semantics.
        patch(resource: Schema.AssetMatchPolicy, assetId: string, optionalArgs: object): YoutubePartner_v1.Schema.AssetMatchPolicy;
        // Updates the asset's match policy. If an asset has multiple owners, each owner may set its own match policy for the asset. YouTube then computes the match policy that is actually applied for the asset based on the territories where each owner owns the asset.
        update(resource: Schema.AssetMatchPolicy, assetId: string): YoutubePartner_v1.Schema.AssetMatchPolicy;
        // Updates the asset's match policy. If an asset has multiple owners, each owner may set its own match policy for the asset. YouTube then computes the match policy that is actually applied for the asset based on the territories where each owner owns the asset.
        update(resource: Schema.AssetMatchPolicy, assetId: string, optionalArgs: object): YoutubePartner_v1.Schema.AssetMatchPolicy;
      }
      export interface AssetRelationshipsCollection {
        // Creates a relationship that links two assets.
        insert(resource: Schema.AssetRelationship): YoutubePartner_v1.Schema.AssetRelationship;
        // Creates a relationship that links two assets.
        insert(resource: Schema.AssetRelationship, optionalArgs: object): YoutubePartner_v1.Schema.AssetRelationship;
        // Retrieves a list of relationships for a given asset. The list contains relationships where the specified asset is either the parent (embedding) or child (embedded) asset in the relationship.
        list(assetId: string): YoutubePartner_v1.Schema.AssetRelationshipListResponse;
        // Retrieves a list of relationships for a given asset. The list contains relationships where the specified asset is either the parent (embedding) or child (embedded) asset in the relationship.
        list(assetId: string, optionalArgs: object): YoutubePartner_v1.Schema.AssetRelationshipListResponse;
        // Deletes a relationship between two assets.
        remove(assetRelationshipId: string): void;
        // Deletes a relationship between two assets.
        remove(assetRelationshipId: string, optionalArgs: object): void;
      }
      export interface AssetSearchCollection {
        // Searches for assets based on asset metadata. The method can retrieve all assets or only assets owned by the content owner. This method mimics the functionality of the advanced search feature on the Assets page in CMS.
        list(): YoutubePartner_v1.Schema.AssetSearchResponse;
        // Searches for assets based on asset metadata. The method can retrieve all assets or only assets owned by the content owner. This method mimics the functionality of the advanced search feature on the Assets page in CMS.
        list(optionalArgs: object): YoutubePartner_v1.Schema.AssetSearchResponse;
      }
      export interface AssetSharesCollection {
        // This method either retrieves a list of asset shares the partner owns and that map to a specified asset view ID or it retrieves a list of asset views associated with a specified asset share ID owned by the partner.
        list(assetId: string): YoutubePartner_v1.Schema.AssetShareListResponse;
        // This method either retrieves a list of asset shares the partner owns and that map to a specified asset view ID or it retrieves a list of asset views associated with a specified asset share ID owned by the partner.
        list(assetId: string, optionalArgs: object): YoutubePartner_v1.Schema.AssetShareListResponse;
      }
      export interface AssetsCollection {
        // Retrieves the metadata for the specified asset. Note that if the request identifies an asset that has been merged with another asset, meaning that YouTube identified the requested asset as a duplicate, then the request retrieves the merged, or synthesized, asset.
        get(assetId: string): YoutubePartner_v1.Schema.Asset;
        // Retrieves the metadata for the specified asset. Note that if the request identifies an asset that has been merged with another asset, meaning that YouTube identified the requested asset as a duplicate, then the request retrieves the merged, or synthesized, asset.
        get(assetId: string, optionalArgs: object): YoutubePartner_v1.Schema.Asset;
        // Inserts an asset with the specified metadata. After inserting an asset, you can set its ownership data and match policy.
        insert(resource: Schema.Asset): YoutubePartner_v1.Schema.Asset;
        // Inserts an asset with the specified metadata. After inserting an asset, you can set its ownership data and match policy.
        insert(resource: Schema.Asset, optionalArgs: object): YoutubePartner_v1.Schema.Asset;
        // Retrieves a list of assets based on asset metadata. The method can retrieve all assets or only assets owned by the content owner.
        // Note that in cases where duplicate assets have been merged, the API response only contains the synthesized asset. (It does not contain the constituent assets that were merged into the synthesized asset.)
        list(id: string): YoutubePartner_v1.Schema.AssetListResponse;
        // Retrieves a list of assets based on asset metadata. The method can retrieve all assets or only assets owned by the content owner.
        // Note that in cases where duplicate assets have been merged, the API response only contains the synthesized asset. (It does not contain the constituent assets that were merged into the synthesized asset.)
        list(id: string, optionalArgs: object): YoutubePartner_v1.Schema.AssetListResponse;
        // Updates the metadata for the specified asset. This method supports patch semantics.
        patch(resource: Schema.Asset, assetId: string): YoutubePartner_v1.Schema.Asset;
        // Updates the metadata for the specified asset. This method supports patch semantics.
        patch(resource: Schema.Asset, assetId: string, optionalArgs: object): YoutubePartner_v1.Schema.Asset;
        // Updates the metadata for the specified asset.
        update(resource: Schema.Asset, assetId: string): YoutubePartner_v1.Schema.Asset;
        // Updates the metadata for the specified asset.
        update(resource: Schema.Asset, assetId: string, optionalArgs: object): YoutubePartner_v1.Schema.Asset;
      }
      export interface CampaignsCollection {
        // Retrieves a particular campaign for an owner.
        get(campaignId: string): YoutubePartner_v1.Schema.Campaign;
        // Retrieves a particular campaign for an owner.
        get(campaignId: string, optionalArgs: object): YoutubePartner_v1.Schema.Campaign;
        // Insert a new campaign for an owner using the specified campaign data.
        insert(resource: Schema.Campaign): YoutubePartner_v1.Schema.Campaign;
        // Insert a new campaign for an owner using the specified campaign data.
        insert(resource: Schema.Campaign, optionalArgs: object): YoutubePartner_v1.Schema.Campaign;
        // Retrieves a list of campaigns for an owner.
        list(): YoutubePartner_v1.Schema.CampaignList;
        // Retrieves a list of campaigns for an owner.
        list(optionalArgs: object): YoutubePartner_v1.Schema.CampaignList;
        // Update the data for a specific campaign. This method supports patch semantics.
        patch(resource: Schema.Campaign, campaignId: string): YoutubePartner_v1.Schema.Campaign;
        // Update the data for a specific campaign. This method supports patch semantics.
        patch(resource: Schema.Campaign, campaignId: string, optionalArgs: object): YoutubePartner_v1.Schema.Campaign;
        // Deletes a specified campaign for an owner.
        remove(campaignId: string): void;
        // Deletes a specified campaign for an owner.
        remove(campaignId: string, optionalArgs: object): void;
        // Update the data for a specific campaign.
        update(resource: Schema.Campaign, campaignId: string): YoutubePartner_v1.Schema.Campaign;
        // Update the data for a specific campaign.
        update(resource: Schema.Campaign, campaignId: string, optionalArgs: object): YoutubePartner_v1.Schema.Campaign;
      }
      export interface ClaimHistoryCollection {
        // Retrieves the claim history for a specified claim.
        get(claimId: string): YoutubePartner_v1.Schema.ClaimHistory;
        // Retrieves the claim history for a specified claim.
        get(claimId: string, optionalArgs: object): YoutubePartner_v1.Schema.ClaimHistory;
      }
      export interface ClaimSearchCollection {
        // Retrieves a list of claims that match the search criteria. You can search for claims that are associated with a specific asset or video or that match a specified query string.
        list(): YoutubePartner_v1.Schema.ClaimSearchResponse;
        // Retrieves a list of claims that match the search criteria. You can search for claims that are associated with a specific asset or video or that match a specified query string.
        list(optionalArgs: object): YoutubePartner_v1.Schema.ClaimSearchResponse;
      }
      export interface ClaimsCollection {
        // Retrieves a specific claim by ID.
        get(claimId: string): YoutubePartner_v1.Schema.Claim;
        // Retrieves a specific claim by ID.
        get(claimId: string, optionalArgs: object): YoutubePartner_v1.Schema.Claim;
        // Creates a claim. The video being claimed must have been uploaded to a channel associated with the same content owner as the API user sending the request. You can set the claim's policy in any of the following ways:
        // - Use the claim resource's policy property to identify a saved policy by its unique ID.
        // - Use the claim resource's policy property to specify a custom set of rules.
        insert(resource: Schema.Claim): YoutubePartner_v1.Schema.Claim;
        // Creates a claim. The video being claimed must have been uploaded to a channel associated with the same content owner as the API user sending the request. You can set the claim's policy in any of the following ways:
        // - Use the claim resource's policy property to identify a saved policy by its unique ID.
        // - Use the claim resource's policy property to specify a custom set of rules.
        insert(resource: Schema.Claim, optionalArgs: object): YoutubePartner_v1.Schema.Claim;
        // Retrieves a list of claims administered by the content owner associated with the currently authenticated user. Results are sorted in descending order of creation time.
        list(): YoutubePartner_v1.Schema.ClaimListResponse;
        // Retrieves a list of claims administered by the content owner associated with the currently authenticated user. Results are sorted in descending order of creation time.
        list(optionalArgs: object): YoutubePartner_v1.Schema.ClaimListResponse;
        // Updates an existing claim by either changing its policy or its status. You can update a claim's status from active to inactive to effectively release the claim. This method supports patch semantics.
        patch(resource: Schema.Claim, claimId: string): YoutubePartner_v1.Schema.Claim;
        // Updates an existing claim by either changing its policy or its status. You can update a claim's status from active to inactive to effectively release the claim. This method supports patch semantics.
        patch(resource: Schema.Claim, claimId: string, optionalArgs: object): YoutubePartner_v1.Schema.Claim;
        // Updates an existing claim by either changing its policy or its status. You can update a claim's status from active to inactive to effectively release the claim.
        update(resource: Schema.Claim, claimId: string): YoutubePartner_v1.Schema.Claim;
        // Updates an existing claim by either changing its policy or its status. You can update a claim's status from active to inactive to effectively release the claim.
        update(resource: Schema.Claim, claimId: string, optionalArgs: object): YoutubePartner_v1.Schema.Claim;
      }
      export interface ContentOwnerAdvertisingOptionsCollection {
        // Retrieves advertising options for the content owner associated with the authenticated user.
        get(): YoutubePartner_v1.Schema.ContentOwnerAdvertisingOption;
        // Retrieves advertising options for the content owner associated with the authenticated user.
        get(optionalArgs: object): YoutubePartner_v1.Schema.ContentOwnerAdvertisingOption;
        // Updates advertising options for the content owner associated with the authenticated API user. This method supports patch semantics.
        patch(resource: Schema.ContentOwnerAdvertisingOption): YoutubePartner_v1.Schema.ContentOwnerAdvertisingOption;
        // Updates advertising options for the content owner associated with the authenticated API user. This method supports patch semantics.
        patch(resource: Schema.ContentOwnerAdvertisingOption, optionalArgs: object): YoutubePartner_v1.Schema.ContentOwnerAdvertisingOption;
        // Updates advertising options for the content owner associated with the authenticated API user.
        update(resource: Schema.ContentOwnerAdvertisingOption): YoutubePartner_v1.Schema.ContentOwnerAdvertisingOption;
        // Updates advertising options for the content owner associated with the authenticated API user.
        update(resource: Schema.ContentOwnerAdvertisingOption, optionalArgs: object): YoutubePartner_v1.Schema.ContentOwnerAdvertisingOption;
      }
      export interface ContentOwnersCollection {
        // Retrieves information about the specified content owner.
        get(contentOwnerId: string): YoutubePartner_v1.Schema.ContentOwner;
        // Retrieves information about the specified content owner.
        get(contentOwnerId: string, optionalArgs: object): YoutubePartner_v1.Schema.ContentOwner;
        // Retrieves a list of content owners that match the request criteria.
        list(): YoutubePartner_v1.Schema.ContentOwnerListResponse;
        // Retrieves a list of content owners that match the request criteria.
        list(optionalArgs: object): YoutubePartner_v1.Schema.ContentOwnerListResponse;
      }
      export interface LiveCuepointsCollection {
        // Inserts a cuepoint into a live broadcast.
        insert(resource: Schema.LiveCuepoint, channelId: string): YoutubePartner_v1.Schema.LiveCuepoint;
        // Inserts a cuepoint into a live broadcast.
        insert(resource: Schema.LiveCuepoint, channelId: string, optionalArgs: object): YoutubePartner_v1.Schema.LiveCuepoint;
      }
      export interface MetadataHistoryCollection {
        // Retrieves a list of all metadata provided for an asset, regardless of which content owner provided the data.
        list(assetId: string): YoutubePartner_v1.Schema.MetadataHistoryListResponse;
        // Retrieves a list of all metadata provided for an asset, regardless of which content owner provided the data.
        list(assetId: string, optionalArgs: object): YoutubePartner_v1.Schema.MetadataHistoryListResponse;
      }
      export interface OrdersCollection {
        // Retrieve the details of an existing order.
        get(orderId: string): YoutubePartner_v1.Schema.Order;
        // Retrieve the details of an existing order.
        get(orderId: string, optionalArgs: object): YoutubePartner_v1.Schema.Order;
        // Creates a new basic order entry in the YouTube premium asset order management system. You must supply at least a country and channel in the new order.
        insert(resource: Schema.Order): YoutubePartner_v1.Schema.Order;
        // Creates a new basic order entry in the YouTube premium asset order management system. You must supply at least a country and channel in the new order.
        insert(resource: Schema.Order, optionalArgs: object): YoutubePartner_v1.Schema.Order;
        // Return a list of orders, filtered by the parameters below, may return more than a single page of results.
        list(): YoutubePartner_v1.Schema.OrderListResponse;
        // Return a list of orders, filtered by the parameters below, may return more than a single page of results.
        list(optionalArgs: object): YoutubePartner_v1.Schema.OrderListResponse;
        // Update the values in an existing order. This method supports patch semantics.
        patch(resource: Schema.Order, orderId: string): YoutubePartner_v1.Schema.Order;
        // Update the values in an existing order. This method supports patch semantics.
        patch(resource: Schema.Order, orderId: string, optionalArgs: object): YoutubePartner_v1.Schema.Order;
        // Delete an order, which moves orders to inactive state and removes any associated video.
        remove(orderId: string): void;
        // Delete an order, which moves orders to inactive state and removes any associated video.
        remove(orderId: string, optionalArgs: object): void;
        // Update the values in an existing order.
        update(resource: Schema.Order, orderId: string): YoutubePartner_v1.Schema.Order;
        // Update the values in an existing order.
        update(resource: Schema.Order, orderId: string, optionalArgs: object): YoutubePartner_v1.Schema.Order;
      }
      export interface OwnershipCollection {
        // Retrieves the ownership data provided for the specified asset by the content owner associated with the authenticated user.
        get(assetId: string): YoutubePartner_v1.Schema.RightsOwnership;
        // Retrieves the ownership data provided for the specified asset by the content owner associated with the authenticated user.
        get(assetId: string, optionalArgs: object): YoutubePartner_v1.Schema.RightsOwnership;
        // Provides new ownership information for the specified asset. Note that YouTube may receive ownership information from multiple sources. For example, if an asset has multiple owners, each owner might send ownership data for the asset. YouTube algorithmically combines the ownership data received from all of those sources to generate the asset's canonical ownership data, which should provide the most comprehensive and accurate representation of the asset's ownership. This method supports patch semantics.
        patch(resource: Schema.RightsOwnership, assetId: string): YoutubePartner_v1.Schema.RightsOwnership;
        // Provides new ownership information for the specified asset. Note that YouTube may receive ownership information from multiple sources. For example, if an asset has multiple owners, each owner might send ownership data for the asset. YouTube algorithmically combines the ownership data received from all of those sources to generate the asset's canonical ownership data, which should provide the most comprehensive and accurate representation of the asset's ownership. This method supports patch semantics.
        patch(resource: Schema.RightsOwnership, assetId: string, optionalArgs: object): YoutubePartner_v1.Schema.RightsOwnership;
        // Provides new ownership information for the specified asset. Note that YouTube may receive ownership information from multiple sources. For example, if an asset has multiple owners, each owner might send ownership data for the asset. YouTube algorithmically combines the ownership data received from all of those sources to generate the asset's canonical ownership data, which should provide the most comprehensive and accurate representation of the asset's ownership.
        update(resource: Schema.RightsOwnership, assetId: string): YoutubePartner_v1.Schema.RightsOwnership;
        // Provides new ownership information for the specified asset. Note that YouTube may receive ownership information from multiple sources. For example, if an asset has multiple owners, each owner might send ownership data for the asset. YouTube algorithmically combines the ownership data received from all of those sources to generate the asset's canonical ownership data, which should provide the most comprehensive and accurate representation of the asset's ownership.
        update(resource: Schema.RightsOwnership, assetId: string, optionalArgs: object): YoutubePartner_v1.Schema.RightsOwnership;
      }
      export interface OwnershipHistoryCollection {
        // Retrieves a list of the ownership data for an asset, regardless of which content owner provided the data. The list only includes the most recent ownership data for each content owner. However, if the content owner has submitted ownership data through multiple data sources (API, content feeds, etc.), the list will contain the most recent data for each content owner and data source.
        list(assetId: string): YoutubePartner_v1.Schema.OwnershipHistoryListResponse;
        // Retrieves a list of the ownership data for an asset, regardless of which content owner provided the data. The list only includes the most recent ownership data for each content owner. However, if the content owner has submitted ownership data through multiple data sources (API, content feeds, etc.), the list will contain the most recent data for each content owner and data source.
        list(assetId: string, optionalArgs: object): YoutubePartner_v1.Schema.OwnershipHistoryListResponse;
      }
      export interface PackageCollection {
        // Retrieves information for the specified package.
        get(packageId: string): YoutubePartner_v1.Schema.Package;
        // Retrieves information for the specified package.
        get(packageId: string, optionalArgs: object): YoutubePartner_v1.Schema.Package;
        // Inserts a metadata-only package.
        insert(resource: Schema.Package): YoutubePartner_v1.Schema.PackageInsertResponse;
        // Inserts a metadata-only package.
        insert(resource: Schema.Package, optionalArgs: object): YoutubePartner_v1.Schema.PackageInsertResponse;
      }
      export interface PoliciesCollection {
        // Retrieves the specified saved policy.
        get(policyId: string): YoutubePartner_v1.Schema.Policy;
        // Retrieves the specified saved policy.
        get(policyId: string, optionalArgs: object): YoutubePartner_v1.Schema.Policy;
        // Creates a saved policy.
        insert(resource: Schema.Policy): YoutubePartner_v1.Schema.Policy;
        // Creates a saved policy.
        insert(resource: Schema.Policy, optionalArgs: object): YoutubePartner_v1.Schema.Policy;
        // Retrieves a list of the content owner's saved policies.
        list(): YoutubePartner_v1.Schema.PolicyList;
        // Retrieves a list of the content owner's saved policies.
        list(optionalArgs: object): YoutubePartner_v1.Schema.PolicyList;
        // Updates the specified saved policy. This method supports patch semantics.
        patch(resource: Schema.Policy, policyId: string): YoutubePartner_v1.Schema.Policy;
        // Updates the specified saved policy. This method supports patch semantics.
        patch(resource: Schema.Policy, policyId: string, optionalArgs: object): YoutubePartner_v1.Schema.Policy;
        // Updates the specified saved policy.
        update(resource: Schema.Policy, policyId: string): YoutubePartner_v1.Schema.Policy;
        // Updates the specified saved policy.
        update(resource: Schema.Policy, policyId: string, optionalArgs: object): YoutubePartner_v1.Schema.Policy;
      }
      export interface PublishersCollection {
        // Retrieves information about the specified publisher.
        get(publisherId: string): YoutubePartner_v1.Schema.Publisher;
        // Retrieves information about the specified publisher.
        get(publisherId: string, optionalArgs: object): YoutubePartner_v1.Schema.Publisher;
        // Retrieves a list of publishers that match the request criteria. This method is analogous to a publisher search function.
        list(): YoutubePartner_v1.Schema.PublisherList;
        // Retrieves a list of publishers that match the request criteria. This method is analogous to a publisher search function.
        list(optionalArgs: object): YoutubePartner_v1.Schema.PublisherList;
      }
      export interface ReferenceConflictsCollection {
        // Retrieves information about the specified reference conflict.
        get(referenceConflictId: string): YoutubePartner_v1.Schema.ReferenceConflict;
        // Retrieves information about the specified reference conflict.
        get(referenceConflictId: string, optionalArgs: object): YoutubePartner_v1.Schema.ReferenceConflict;
        // Retrieves a list of unresolved reference conflicts.
        list(): YoutubePartner_v1.Schema.ReferenceConflictListResponse;
        // Retrieves a list of unresolved reference conflicts.
        list(optionalArgs: object): YoutubePartner_v1.Schema.ReferenceConflictListResponse;
      }
      export interface ReferencesCollection {
        // Retrieves information about the specified reference.
        get(referenceId: string): YoutubePartner_v1.Schema.Reference;
        // Retrieves information about the specified reference.
        get(referenceId: string, optionalArgs: object): YoutubePartner_v1.Schema.Reference;
        // Creates a reference in one of the following ways:
        // - If your request is uploading a reference file, YouTube creates the reference from the provided content. You can provide either a video/audio file or a pre-generated fingerprint. If you are providing a pre-generated fingerprint, set the reference resource's fpDirect property to true in the request body. In this flow, you can use either the multipart or resumable upload flows to provide the reference content.
        // - If you want to create a reference using a claimed video as the reference content, use the claimId parameter to identify the claim.
        insert(resource: Schema.Reference): YoutubePartner_v1.Schema.Reference;
        // Creates a reference in one of the following ways:
        // - If your request is uploading a reference file, YouTube creates the reference from the provided content. You can provide either a video/audio file or a pre-generated fingerprint. If you are providing a pre-generated fingerprint, set the reference resource's fpDirect property to true in the request body. In this flow, you can use either the multipart or resumable upload flows to provide the reference content.
        // - If you want to create a reference using a claimed video as the reference content, use the claimId parameter to identify the claim.
        insert(resource: Schema.Reference, mediaData: any): YoutubePartner_v1.Schema.Reference;
        // Creates a reference in one of the following ways:
        // - If your request is uploading a reference file, YouTube creates the reference from the provided content. You can provide either a video/audio file or a pre-generated fingerprint. If you are providing a pre-generated fingerprint, set the reference resource's fpDirect property to true in the request body. In this flow, you can use either the multipart or resumable upload flows to provide the reference content.
        // - If you want to create a reference using a claimed video as the reference content, use the claimId parameter to identify the claim.
        insert(resource: Schema.Reference, mediaData: any, optionalArgs: object): YoutubePartner_v1.Schema.Reference;
        // Retrieves a list of references by ID or the list of references for the specified asset.
        list(): YoutubePartner_v1.Schema.ReferenceListResponse;
        // Retrieves a list of references by ID or the list of references for the specified asset.
        list(optionalArgs: object): YoutubePartner_v1.Schema.ReferenceListResponse;
        // Updates a reference. This method supports patch semantics.
        patch(resource: Schema.Reference, referenceId: string): YoutubePartner_v1.Schema.Reference;
        // Updates a reference. This method supports patch semantics.
        patch(resource: Schema.Reference, referenceId: string, optionalArgs: object): YoutubePartner_v1.Schema.Reference;
        // Updates a reference.
        update(resource: Schema.Reference, referenceId: string): YoutubePartner_v1.Schema.Reference;
        // Updates a reference.
        update(resource: Schema.Reference, referenceId: string, optionalArgs: object): YoutubePartner_v1.Schema.Reference;
      }
      export interface SpreadsheetTemplateCollection {
        // Retrieves a list of spreadsheet templates for a content owner.
        list(): YoutubePartner_v1.Schema.SpreadsheetTemplateListResponse;
        // Retrieves a list of spreadsheet templates for a content owner.
        list(optionalArgs: object): YoutubePartner_v1.Schema.SpreadsheetTemplateListResponse;
      }
      export interface UploaderCollection {
        // Retrieves a list of uploaders for a content owner.
        list(): YoutubePartner_v1.Schema.UploaderListResponse;
        // Retrieves a list of uploaders for a content owner.
        list(optionalArgs: object): YoutubePartner_v1.Schema.UploaderListResponse;
      }
      export interface ValidatorCollection {
        // Validate a metadata file.
        validate(resource: Schema.ValidateRequest): YoutubePartner_v1.Schema.ValidateResponse;
        // Validate a metadata file.
        validate(resource: Schema.ValidateRequest, optionalArgs: object): YoutubePartner_v1.Schema.ValidateResponse;
        // Validate a metadata file asynchronously.
        validateAsync(resource: Schema.ValidateAsyncRequest): YoutubePartner_v1.Schema.ValidateAsyncResponse;
        // Validate a metadata file asynchronously.
        validateAsync(resource: Schema.ValidateAsyncRequest, optionalArgs: object): YoutubePartner_v1.Schema.ValidateAsyncResponse;
        // Get the asynchronous validation status.
        validateAsyncStatus(resource: Schema.ValidateStatusRequest): YoutubePartner_v1.Schema.ValidateStatusResponse;
        // Get the asynchronous validation status.
        validateAsyncStatus(resource: Schema.ValidateStatusRequest, optionalArgs: object): YoutubePartner_v1.Schema.ValidateStatusResponse;
      }
      export interface VideoAdvertisingOptionsCollection {
        // Retrieves advertising settings for the specified video.
        get(videoId: string): YoutubePartner_v1.Schema.VideoAdvertisingOption;
        // Retrieves advertising settings for the specified video.
        get(videoId: string, optionalArgs: object): YoutubePartner_v1.Schema.VideoAdvertisingOption;
        // Retrieves details about the types of allowed ads for a specified partner- or user-uploaded video.
        getEnabledAds(videoId: string): YoutubePartner_v1.Schema.VideoAdvertisingOptionGetEnabledAdsResponse;
        // Retrieves details about the types of allowed ads for a specified partner- or user-uploaded video.
        getEnabledAds(videoId: string, optionalArgs: object): YoutubePartner_v1.Schema.VideoAdvertisingOptionGetEnabledAdsResponse;
        // Updates the advertising settings for the specified video. This method supports patch semantics.
        patch(resource: Schema.VideoAdvertisingOption, videoId: string): YoutubePartner_v1.Schema.VideoAdvertisingOption;
        // Updates the advertising settings for the specified video. This method supports patch semantics.
        patch(resource: Schema.VideoAdvertisingOption, videoId: string, optionalArgs: object): YoutubePartner_v1.Schema.VideoAdvertisingOption;
        // Updates the advertising settings for the specified video.
        update(resource: Schema.VideoAdvertisingOption, videoId: string): YoutubePartner_v1.Schema.VideoAdvertisingOption;
        // Updates the advertising settings for the specified video.
        update(resource: Schema.VideoAdvertisingOption, videoId: string, optionalArgs: object): YoutubePartner_v1.Schema.VideoAdvertisingOption;
      }
      export interface WhitelistsCollection {
        // Retrieves a specific whitelisted channel by ID.
        get(id: string): YoutubePartner_v1.Schema.Whitelist;
        // Retrieves a specific whitelisted channel by ID.
        get(id: string, optionalArgs: object): YoutubePartner_v1.Schema.Whitelist;
        // Whitelist a YouTube channel for your content owner. Whitelisted channels are channels that are not owned or managed by you, but you would like to whitelist so that no claims from your assets are placed on videos uploaded to these channels.
        insert(resource: Schema.Whitelist): YoutubePartner_v1.Schema.Whitelist;
        // Whitelist a YouTube channel for your content owner. Whitelisted channels are channels that are not owned or managed by you, but you would like to whitelist so that no claims from your assets are placed on videos uploaded to these channels.
        insert(resource: Schema.Whitelist, optionalArgs: object): YoutubePartner_v1.Schema.Whitelist;
        // Retrieves a list of whitelisted channels for a content owner.
        list(): YoutubePartner_v1.Schema.WhitelistListResponse;
        // Retrieves a list of whitelisted channels for a content owner.
        list(optionalArgs: object): YoutubePartner_v1.Schema.WhitelistListResponse;
        // Removes a whitelisted channel for a content owner.
        remove(id: string): void;
        // Removes a whitelisted channel for a content owner.
        remove(id: string, optionalArgs: object): void;
      }
    }
    namespace Schema {
      export interface AdBreak {
        midrollSeconds?: number;
        position?: string;
        slot?: YoutubePartner_v1.Schema.AdSlot[];
      }
      export interface AdSlot {
        id?: string;
        type?: string;
      }
      export interface AllowedAdvertisingOptions {
        adsOnEmbeds?: boolean;
        kind?: string;
        licAdFormats?: string[];
        ugcAdFormats?: string[];
      }
      export interface Asset {
        aliasId?: string[];
        id?: string;
        kind?: string;
        label?: string[];
        matchPolicy?: YoutubePartner_v1.Schema.AssetMatchPolicy;
        matchPolicyEffective?: YoutubePartner_v1.Schema.AssetMatchPolicy;
        matchPolicyMine?: YoutubePartner_v1.Schema.AssetMatchPolicy;
        metadata?: YoutubePartner_v1.Schema.Metadata;
        metadataEffective?: YoutubePartner_v1.Schema.Metadata;
        metadataMine?: YoutubePartner_v1.Schema.Metadata;
        ownership?: YoutubePartner_v1.Schema.RightsOwnership;
        ownershipConflicts?: YoutubePartner_v1.Schema.OwnershipConflicts;
        ownershipEffective?: YoutubePartner_v1.Schema.RightsOwnership;
        ownershipMine?: YoutubePartner_v1.Schema.RightsOwnership;
        status?: string;
        timeCreated?: string;
        type?: string;
      }
      export interface AssetLabel {
        kind?: string;
        labelName?: string;
      }
      export interface AssetLabelListResponse {
        items?: YoutubePartner_v1.Schema.AssetLabel[];
        kind?: string;
      }
      export interface AssetListResponse {
        items?: YoutubePartner_v1.Schema.Asset[];
        kind?: string;
      }
      export interface AssetMatchPolicy {
        kind?: string;
        policyId?: string;
        rules?: YoutubePartner_v1.Schema.PolicyRule[];
      }
      export interface AssetRelationship {
        childAssetId?: string;
        id?: string;
        kind?: string;
        parentAssetId?: string;
      }
      export interface AssetRelationshipListResponse {
        items?: YoutubePartner_v1.Schema.AssetRelationship[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YoutubePartner_v1.Schema.PageInfo;
      }
      export interface AssetSearchResponse {
        items?: YoutubePartner_v1.Schema.AssetSnippet[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YoutubePartner_v1.Schema.PageInfo;
      }
      export interface AssetShare {
        kind?: string;
        shareId?: string;
        viewId?: string;
      }
      export interface AssetShareListResponse {
        items?: YoutubePartner_v1.Schema.AssetShare[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YoutubePartner_v1.Schema.PageInfo;
      }
      export interface AssetSnippet {
        customId?: string;
        id?: string;
        isrc?: string;
        iswc?: string;
        kind?: string;
        timeCreated?: string;
        title?: string;
        type?: string;
      }
      export interface Campaign {
        campaignData?: YoutubePartner_v1.Schema.CampaignData;
        id?: string;
        kind?: string;
        status?: string;
        timeCreated?: string;
        timeLastModified?: string;
      }
      export interface CampaignData {
        campaignSource?: YoutubePartner_v1.Schema.CampaignSource;
        expireTime?: string;
        name?: string;
        promotedContent?: YoutubePartner_v1.Schema.PromotedContent[];
        startTime?: string;
      }
      export interface CampaignList {
        items?: YoutubePartner_v1.Schema.Campaign[];
        kind?: string;
      }
      export interface CampaignSource {
        sourceType?: string;
        sourceValue?: string[];
      }
      export interface CampaignTargetLink {
        targetId?: string;
        targetType?: string;
      }
      export interface Claim {
        appliedPolicy?: YoutubePartner_v1.Schema.Policy;
        assetId?: string;
        blockOutsideOwnership?: boolean;
        contentType?: string;
        id?: string;
        isPartnerUploaded?: boolean;
        kind?: string;
        matchInfo?: YoutubePartner_v1.Schema.ClaimMatchInfo;
        origin?: YoutubePartner_v1.Schema.ClaimOrigin;
        policy?: YoutubePartner_v1.Schema.Policy;
        status?: string;
        timeCreated?: string;
        videoId?: string;
      }
      export interface ClaimEvent {
        kind?: string;
        reason?: string;
        source?: YoutubePartner_v1.Schema.ClaimEventSource;
        time?: string;
        type?: string;
        typeDetails?: YoutubePartner_v1.Schema.ClaimEventTypeDetails;
      }
      export interface ClaimEventSource {
        contentOwnerId?: string;
        type?: string;
        userEmail?: string;
      }
      export interface ClaimEventTypeDetails {
        appealExplanation?: string;
        disputeNotes?: string;
        disputeReason?: string;
        updateStatus?: string;
      }
      export interface ClaimHistory {
        event?: YoutubePartner_v1.Schema.ClaimEvent[];
        id?: string;
        kind?: string;
        uploaderChannelId?: string;
      }
      export interface ClaimListResponse {
        items?: YoutubePartner_v1.Schema.Claim[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YoutubePartner_v1.Schema.PageInfo;
        previousPageToken?: string;
      }
      export interface ClaimMatchInfo {
        longestMatch?: YoutubePartner_v1.Schema.ClaimMatchInfoLongestMatch;
        matchSegments?: YoutubePartner_v1.Schema.MatchSegment[];
        referenceId?: string;
        totalMatch?: YoutubePartner_v1.Schema.ClaimMatchInfoTotalMatch;
      }
      export interface ClaimMatchInfoLongestMatch {
        durationSecs?: string;
        referenceOffset?: string;
        userVideoOffset?: string;
      }
      export interface ClaimMatchInfoTotalMatch {
        referenceDurationSecs?: string;
        userVideoDurationSecs?: string;
      }
      export interface ClaimOrigin {
        source?: string;
      }
      export interface ClaimSearchResponse {
        items?: YoutubePartner_v1.Schema.ClaimSnippet[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YoutubePartner_v1.Schema.PageInfo;
        previousPageToken?: string;
      }
      export interface ClaimSnippet {
        assetId?: string;
        contentType?: string;
        id?: string;
        isPartnerUploaded?: boolean;
        kind?: string;
        origin?: YoutubePartner_v1.Schema.ClaimSnippetOrigin;
        status?: string;
        thirdPartyClaim?: boolean;
        timeCreated?: string;
        timeStatusLastModified?: string;
        videoId?: string;
        videoTitle?: string;
        videoViews?: string;
      }
      export interface ClaimSnippetOrigin {
        source?: string;
      }
      export interface ClaimedVideoDefaults {
        autoGeneratedBreaks?: boolean;
        channelOverride?: boolean;
        kind?: string;
        newVideoDefaults?: string[];
      }
      export interface Conditions {
        contentMatchType?: string[];
        matchDuration?: YoutubePartner_v1.Schema.IntervalCondition[];
        matchPercent?: YoutubePartner_v1.Schema.IntervalCondition[];
        referenceDuration?: YoutubePartner_v1.Schema.IntervalCondition[];
        referencePercent?: YoutubePartner_v1.Schema.IntervalCondition[];
        requiredTerritories?: YoutubePartner_v1.Schema.TerritoryCondition;
      }
      export interface ConflictingOwnership {
        owner?: string;
        ratio?: Number;
      }
      export interface ContentOwner {
        conflictNotificationEmail?: string;
        displayName?: string;
        disputeNotificationEmails?: string[];
        fingerprintReportNotificationEmails?: string[];
        id?: string;
        kind?: string;
        primaryNotificationEmails?: string[];
      }
      export interface ContentOwnerAdvertisingOption {
        allowedOptions?: YoutubePartner_v1.Schema.AllowedAdvertisingOptions;
        claimedVideoOptions?: YoutubePartner_v1.Schema.ClaimedVideoDefaults;
        id?: string;
        kind?: string;
      }
      export interface ContentOwnerListResponse {
        items?: YoutubePartner_v1.Schema.ContentOwner[];
        kind?: string;
      }
      export interface CountriesRestriction {
        adFormats?: string[];
        territories?: string[];
      }
      export interface CuepointSettings {
        cueType?: string;
        durationSecs?: number;
        offsetTimeMs?: string;
        walltime?: string;
      }
      export interface Date {
        day?: number;
        month?: number;
        year?: number;
      }
      export interface DateRange {
        end?: YoutubePartner_v1.Schema.Date;
        kind?: string;
        start?: YoutubePartner_v1.Schema.Date;
      }
      export interface ExcludedInterval {
        high?: Number;
        low?: Number;
        origin?: string;
        timeCreated?: string;
      }
      export interface IntervalCondition {
        high?: Number;
        low?: Number;
      }
      export interface LiveCuepoint {
        broadcastId?: string;
        id?: string;
        kind?: string;
        settings?: YoutubePartner_v1.Schema.CuepointSettings;
      }
      export interface MatchSegment {
        channel?: string;
        reference_segment?: YoutubePartner_v1.Schema.Segment;
        video_segment?: YoutubePartner_v1.Schema.Segment;
      }
      export interface Metadata {
        actor?: string[];
        album?: string;
        artist?: string[];
        broadcaster?: string[];
        category?: string;
        contentType?: string;
        copyrightDate?: YoutubePartner_v1.Schema.Date;
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
        ratings?: YoutubePartner_v1.Schema.Rating[];
        releaseDate?: YoutubePartner_v1.Schema.Date;
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
      export interface MetadataHistory {
        kind?: string;
        metadata?: YoutubePartner_v1.Schema.Metadata;
        origination?: YoutubePartner_v1.Schema.Origination;
        timeProvided?: string;
      }
      export interface MetadataHistoryListResponse {
        items?: YoutubePartner_v1.Schema.MetadataHistory[];
        kind?: string;
      }
      export interface Order {
        availGroupId?: string;
        channelId?: string;
        contentType?: string;
        country?: string;
        customId?: string;
        dvdReleaseDate?: YoutubePartner_v1.Schema.Date;
        estDates?: YoutubePartner_v1.Schema.DateRange;
        events?: YoutubePartner_v1.Schema.StateCompleted[];
        id?: string;
        kind?: string;
        movie?: string;
        originalReleaseDate?: YoutubePartner_v1.Schema.Date;
        priority?: string;
        productionHouse?: string;
        purchaseOrder?: string;
        requirements?: YoutubePartner_v1.Schema.Requirements;
        show?: YoutubePartner_v1.Schema.ShowDetails;
        status?: string;
        videoId?: string;
        vodDates?: YoutubePartner_v1.Schema.DateRange;
      }
      export interface OrderListResponse {
        items?: YoutubePartner_v1.Schema.Order[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YoutubePartner_v1.Schema.PageInfo;
        previousPageToken?: string;
      }
      export interface Origination {
        owner?: string;
        source?: string;
      }
      export interface OwnershipConflicts {
        general?: YoutubePartner_v1.Schema.TerritoryConflicts[];
        kind?: string;
        mechanical?: YoutubePartner_v1.Schema.TerritoryConflicts[];
        performance?: YoutubePartner_v1.Schema.TerritoryConflicts[];
        synchronization?: YoutubePartner_v1.Schema.TerritoryConflicts[];
      }
      export interface OwnershipHistoryListResponse {
        items?: YoutubePartner_v1.Schema.RightsOwnershipHistory[];
        kind?: string;
      }
      export interface Package {
        content?: string;
        customIds?: string[];
        id?: string;
        kind?: string;
        locale?: string;
        name?: string;
        status?: string;
        statusReports?: YoutubePartner_v1.Schema.StatusReport[];
        timeCreated?: string;
        type?: string;
        uploaderName?: string;
      }
      export interface PackageInsertResponse {
        errors?: YoutubePartner_v1.Schema.ValidateError[];
        kind?: string;
        resource?: YoutubePartner_v1.Schema.Package;
        status?: string;
      }
      export interface PageInfo {
        resultsPerPage?: number;
        startIndex?: number;
        totalResults?: number;
      }
      export interface Policy {
        description?: string;
        id?: string;
        kind?: string;
        name?: string;
        rules?: YoutubePartner_v1.Schema.PolicyRule[];
        timeUpdated?: string;
      }
      export interface PolicyList {
        items?: YoutubePartner_v1.Schema.Policy[];
        kind?: string;
      }
      export interface PolicyRule {
        action?: string;
        conditions?: YoutubePartner_v1.Schema.Conditions;
        subaction?: string[];
      }
      export interface PromotedContent {
        link?: YoutubePartner_v1.Schema.CampaignTargetLink[];
      }
      export interface Publisher {
        caeNumber?: string;
        id?: string;
        ipiNumber?: string;
        kind?: string;
        name?: string;
      }
      export interface PublisherList {
        items?: YoutubePartner_v1.Schema.Publisher[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YoutubePartner_v1.Schema.PageInfo;
      }
      export interface Rating {
        rating?: string;
        ratingSystem?: string;
      }
      export interface Reference {
        assetId?: string;
        audioswapEnabled?: boolean;
        claimId?: string;
        contentType?: string;
        duplicateLeader?: string;
        excludedIntervals?: YoutubePartner_v1.Schema.ExcludedInterval[];
        fpDirect?: boolean;
        hashCode?: string;
        id?: string;
        ignoreFpMatch?: boolean;
        kind?: string;
        length?: Number;
        origination?: YoutubePartner_v1.Schema.Origination;
        status?: string;
        statusReason?: string;
        urgent?: boolean;
        videoId?: string;
      }
      export interface ReferenceConflict {
        conflictingReferenceId?: string;
        expiryTime?: string;
        id?: string;
        kind?: string;
        matches?: YoutubePartner_v1.Schema.ReferenceConflictMatch[];
        originalReferenceId?: string;
        status?: string;
      }
      export interface ReferenceConflictListResponse {
        items?: YoutubePartner_v1.Schema.ReferenceConflict[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YoutubePartner_v1.Schema.PageInfo;
      }
      export interface ReferenceConflictMatch {
        conflicting_reference_offset_ms?: string;
        length_ms?: string;
        original_reference_offset_ms?: string;
        type?: string;
      }
      export interface ReferenceListResponse {
        items?: YoutubePartner_v1.Schema.Reference[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YoutubePartner_v1.Schema.PageInfo;
      }
      export interface Requirements {
        caption?: boolean;
        hdTranscode?: boolean;
        posterArt?: boolean;
        spotlightArt?: boolean;
        spotlightReview?: boolean;
        trailer?: boolean;
      }
      export interface RightsOwnership {
        general?: YoutubePartner_v1.Schema.TerritoryOwners[];
        kind?: string;
        mechanical?: YoutubePartner_v1.Schema.TerritoryOwners[];
        performance?: YoutubePartner_v1.Schema.TerritoryOwners[];
        synchronization?: YoutubePartner_v1.Schema.TerritoryOwners[];
      }
      export interface RightsOwnershipHistory {
        kind?: string;
        origination?: YoutubePartner_v1.Schema.Origination;
        ownership?: YoutubePartner_v1.Schema.RightsOwnership;
        timeProvided?: string;
      }
      export interface Segment {
        duration?: string;
        kind?: string;
        start?: string;
      }
      export interface ShowDetails {
        episodeNumber?: string;
        episodeTitle?: string;
        seasonNumber?: string;
        title?: string;
      }
      export interface SpreadsheetTemplate {
        kind?: string;
        status?: string;
        templateContent?: string;
        templateName?: string;
        templateType?: string;
      }
      export interface SpreadsheetTemplateListResponse {
        items?: YoutubePartner_v1.Schema.SpreadsheetTemplate[];
        kind?: string;
        status?: string;
      }
      export interface StateCompleted {
        state?: string;
        timeCompleted?: string;
      }
      export interface StatusReport {
        statusContent?: string;
        statusFileName?: string;
      }
      export interface TerritoryCondition {
        territories?: string[];
        type?: string;
      }
      export interface TerritoryConflicts {
        conflictingOwnership?: YoutubePartner_v1.Schema.ConflictingOwnership[];
        territory?: string;
      }
      export interface TerritoryOwners {
        owner?: string;
        publisher?: string;
        ratio?: Number;
        territories?: string[];
        type?: string;
      }
      export interface Uploader {
        kind?: string;
        uploaderName?: string;
      }
      export interface UploaderListResponse {
        items?: YoutubePartner_v1.Schema.Uploader[];
        kind?: string;
      }
      export interface ValidateAsyncRequest {
        content?: string;
        kind?: string;
        uploaderName?: string;
      }
      export interface ValidateAsyncResponse {
        kind?: string;
        status?: string;
        validationId?: string;
      }
      export interface ValidateError {
        columnName?: string;
        columnNumber?: number;
        lineNumber?: number;
        message?: string;
        messageCode?: number;
        severity?: string;
      }
      export interface ValidateRequest {
        content?: string;
        kind?: string;
        locale?: string;
        uploaderName?: string;
      }
      export interface ValidateResponse {
        errors?: YoutubePartner_v1.Schema.ValidateError[];
        kind?: string;
        status?: string;
      }
      export interface ValidateStatusRequest {
        kind?: string;
        locale?: string;
        validationId?: string;
      }
      export interface ValidateStatusResponse {
        errors?: YoutubePartner_v1.Schema.ValidateError[];
        isMetadataOnly?: boolean;
        kind?: string;
        status?: string;
      }
      export interface VideoAdvertisingOption {
        adBreaks?: YoutubePartner_v1.Schema.AdBreak[];
        adFormats?: string[];
        autoGeneratedBreaks?: boolean;
        breakPosition?: string[];
        id?: string;
        kind?: string;
        tpAdServerVideoId?: string;
        tpTargetingUrl?: string;
        tpUrlParameters?: string;
      }
      export interface VideoAdvertisingOptionGetEnabledAdsResponse {
        adBreaks?: YoutubePartner_v1.Schema.AdBreak[];
        adsOnEmbeds?: boolean;
        countriesRestriction?: YoutubePartner_v1.Schema.CountriesRestriction[];
        id?: string;
        kind?: string;
      }
      export interface Whitelist {
        id?: string;
        kind?: string;
        title?: string;
      }
      export interface WhitelistListResponse {
        items?: YoutubePartner_v1.Schema.Whitelist[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YoutubePartner_v1.Schema.PageInfo;
      }
    }
  }
  export interface YoutubePartner_v1 {
    AssetLabels?: YoutubePartner_v1.Collection.AssetLabelsCollection;
    AssetMatchPolicy?: YoutubePartner_v1.Collection.AssetMatchPolicyCollection;
    AssetRelationships?: YoutubePartner_v1.Collection.AssetRelationshipsCollection;
    AssetSearch?: YoutubePartner_v1.Collection.AssetSearchCollection;
    AssetShares?: YoutubePartner_v1.Collection.AssetSharesCollection;
    Assets?: YoutubePartner_v1.Collection.AssetsCollection;
    Campaigns?: YoutubePartner_v1.Collection.CampaignsCollection;
    ClaimHistory?: YoutubePartner_v1.Collection.ClaimHistoryCollection;
    ClaimSearch?: YoutubePartner_v1.Collection.ClaimSearchCollection;
    Claims?: YoutubePartner_v1.Collection.ClaimsCollection;
    ContentOwnerAdvertisingOptions?: YoutubePartner_v1.Collection.ContentOwnerAdvertisingOptionsCollection;
    ContentOwners?: YoutubePartner_v1.Collection.ContentOwnersCollection;
    LiveCuepoints?: YoutubePartner_v1.Collection.LiveCuepointsCollection;
    MetadataHistory?: YoutubePartner_v1.Collection.MetadataHistoryCollection;
    Orders?: YoutubePartner_v1.Collection.OrdersCollection;
    Ownership?: YoutubePartner_v1.Collection.OwnershipCollection;
    OwnershipHistory?: YoutubePartner_v1.Collection.OwnershipHistoryCollection;
    Package?: YoutubePartner_v1.Collection.PackageCollection;
    Policies?: YoutubePartner_v1.Collection.PoliciesCollection;
    Publishers?: YoutubePartner_v1.Collection.PublishersCollection;
    ReferenceConflicts?: YoutubePartner_v1.Collection.ReferenceConflictsCollection;
    References?: YoutubePartner_v1.Collection.ReferencesCollection;
    SpreadsheetTemplate?: YoutubePartner_v1.Collection.SpreadsheetTemplateCollection;
    Uploader?: YoutubePartner_v1.Collection.UploaderCollection;
    Validator?: YoutubePartner_v1.Collection.ValidatorCollection;
    VideoAdvertisingOptions?: YoutubePartner_v1.Collection.VideoAdvertisingOptionsCollection;
    Whitelists?: YoutubePartner_v1.Collection.WhitelistsCollection;
    // Create a new instance of AdBreak
    newAdBreak(): YoutubePartner_v1.Schema.AdBreak;
    // Create a new instance of AdSlot
    newAdSlot(): YoutubePartner_v1.Schema.AdSlot;
    // Create a new instance of AllowedAdvertisingOptions
    newAllowedAdvertisingOptions(): YoutubePartner_v1.Schema.AllowedAdvertisingOptions;
    // Create a new instance of Asset
    newAsset(): YoutubePartner_v1.Schema.Asset;
    // Create a new instance of AssetLabel
    newAssetLabel(): YoutubePartner_v1.Schema.AssetLabel;
    // Create a new instance of AssetMatchPolicy
    newAssetMatchPolicy(): YoutubePartner_v1.Schema.AssetMatchPolicy;
    // Create a new instance of AssetRelationship
    newAssetRelationship(): YoutubePartner_v1.Schema.AssetRelationship;
    // Create a new instance of Campaign
    newCampaign(): YoutubePartner_v1.Schema.Campaign;
    // Create a new instance of CampaignData
    newCampaignData(): YoutubePartner_v1.Schema.CampaignData;
    // Create a new instance of CampaignSource
    newCampaignSource(): YoutubePartner_v1.Schema.CampaignSource;
    // Create a new instance of CampaignTargetLink
    newCampaignTargetLink(): YoutubePartner_v1.Schema.CampaignTargetLink;
    // Create a new instance of Claim
    newClaim(): YoutubePartner_v1.Schema.Claim;
    // Create a new instance of ClaimMatchInfo
    newClaimMatchInfo(): YoutubePartner_v1.Schema.ClaimMatchInfo;
    // Create a new instance of ClaimMatchInfoLongestMatch
    newClaimMatchInfoLongestMatch(): YoutubePartner_v1.Schema.ClaimMatchInfoLongestMatch;
    // Create a new instance of ClaimMatchInfoTotalMatch
    newClaimMatchInfoTotalMatch(): YoutubePartner_v1.Schema.ClaimMatchInfoTotalMatch;
    // Create a new instance of ClaimOrigin
    newClaimOrigin(): YoutubePartner_v1.Schema.ClaimOrigin;
    // Create a new instance of ClaimedVideoDefaults
    newClaimedVideoDefaults(): YoutubePartner_v1.Schema.ClaimedVideoDefaults;
    // Create a new instance of Conditions
    newConditions(): YoutubePartner_v1.Schema.Conditions;
    // Create a new instance of ConflictingOwnership
    newConflictingOwnership(): YoutubePartner_v1.Schema.ConflictingOwnership;
    // Create a new instance of ContentOwnerAdvertisingOption
    newContentOwnerAdvertisingOption(): YoutubePartner_v1.Schema.ContentOwnerAdvertisingOption;
    // Create a new instance of CuepointSettings
    newCuepointSettings(): YoutubePartner_v1.Schema.CuepointSettings;
    // Create a new instance of Date
    newDate(): YoutubePartner_v1.Schema.Date;
    // Create a new instance of DateRange
    newDateRange(): YoutubePartner_v1.Schema.DateRange;
    // Create a new instance of ExcludedInterval
    newExcludedInterval(): YoutubePartner_v1.Schema.ExcludedInterval;
    // Create a new instance of IntervalCondition
    newIntervalCondition(): YoutubePartner_v1.Schema.IntervalCondition;
    // Create a new instance of LiveCuepoint
    newLiveCuepoint(): YoutubePartner_v1.Schema.LiveCuepoint;
    // Create a new instance of MatchSegment
    newMatchSegment(): YoutubePartner_v1.Schema.MatchSegment;
    // Create a new instance of Metadata
    newMetadata(): YoutubePartner_v1.Schema.Metadata;
    // Create a new instance of Order
    newOrder(): YoutubePartner_v1.Schema.Order;
    // Create a new instance of Origination
    newOrigination(): YoutubePartner_v1.Schema.Origination;
    // Create a new instance of OwnershipConflicts
    newOwnershipConflicts(): YoutubePartner_v1.Schema.OwnershipConflicts;
    // Create a new instance of Package
    newPackage(): YoutubePartner_v1.Schema.Package;
    // Create a new instance of Policy
    newPolicy(): YoutubePartner_v1.Schema.Policy;
    // Create a new instance of PolicyRule
    newPolicyRule(): YoutubePartner_v1.Schema.PolicyRule;
    // Create a new instance of PromotedContent
    newPromotedContent(): YoutubePartner_v1.Schema.PromotedContent;
    // Create a new instance of Rating
    newRating(): YoutubePartner_v1.Schema.Rating;
    // Create a new instance of Reference
    newReference(): YoutubePartner_v1.Schema.Reference;
    // Create a new instance of Requirements
    newRequirements(): YoutubePartner_v1.Schema.Requirements;
    // Create a new instance of RightsOwnership
    newRightsOwnership(): YoutubePartner_v1.Schema.RightsOwnership;
    // Create a new instance of Segment
    newSegment(): YoutubePartner_v1.Schema.Segment;
    // Create a new instance of ShowDetails
    newShowDetails(): YoutubePartner_v1.Schema.ShowDetails;
    // Create a new instance of StateCompleted
    newStateCompleted(): YoutubePartner_v1.Schema.StateCompleted;
    // Create a new instance of StatusReport
    newStatusReport(): YoutubePartner_v1.Schema.StatusReport;
    // Create a new instance of TerritoryCondition
    newTerritoryCondition(): YoutubePartner_v1.Schema.TerritoryCondition;
    // Create a new instance of TerritoryConflicts
    newTerritoryConflicts(): YoutubePartner_v1.Schema.TerritoryConflicts;
    // Create a new instance of TerritoryOwners
    newTerritoryOwners(): YoutubePartner_v1.Schema.TerritoryOwners;
    // Create a new instance of ValidateAsyncRequest
    newValidateAsyncRequest(): YoutubePartner_v1.Schema.ValidateAsyncRequest;
    // Create a new instance of ValidateRequest
    newValidateRequest(): YoutubePartner_v1.Schema.ValidateRequest;
    // Create a new instance of ValidateStatusRequest
    newValidateStatusRequest(): YoutubePartner_v1.Schema.ValidateStatusRequest;
    // Create a new instance of VideoAdvertisingOption
    newVideoAdvertisingOption(): YoutubePartner_v1.Schema.VideoAdvertisingOption;
    // Create a new instance of Whitelist
    newWhitelist(): YoutubePartner_v1.Schema.Whitelist;
  }
}

declare var YoutubePartner_v1: GoogleAppsScript.YoutubePartner_v1;