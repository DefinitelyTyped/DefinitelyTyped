// Type definitions for Google Apps Script 2021-02-11
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/mtgto/dts-google-apps-script-advanced
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
    namespace YouTubeContentId {
        namespace Collection {
            interface AssetLabelsCollection {
                // Insert an asset label for an owner.
                insert(resource: Schema.AssetLabel): Schema.AssetLabel;
                // Insert an asset label for an owner.
                insert(resource: Schema.AssetLabel, optionalArgs: object): Schema.AssetLabel;
                // Retrieves a list of all asset labels for an owner.
                list(): Schema.AssetLabelListResponse;
                // Retrieves a list of all asset labels for an owner.
                list(optionalArgs: object): Schema.AssetLabelListResponse;
            }
            interface AssetMatchPolicyCollection {
                // Retrieves the match policy assigned to the specified asset by the content owner associated with the authenticated user.
                // This information is only accessible to an owner of the asset.
                get(assetId: string): Schema.AssetMatchPolicy;
                // Retrieves the match policy assigned to the specified asset by the content owner associated with the authenticated user.
                // This information is only accessible to an owner of the asset.
                get(assetId: string, optionalArgs: object): Schema.AssetMatchPolicy;
                // Patches the asset's match policy. If an asset has multiple owners, each owner may set its own match policy for the
                // asset. YouTube then computes the match policy that is actually applied for the asset based on the territories where each
                // owner owns the asset.
                patch(resource: Schema.AssetMatchPolicy, assetId: string): Schema.AssetMatchPolicy;
                // Patches the asset's match policy. If an asset has multiple owners, each owner may set its own match policy for the
                // asset. YouTube then computes the match policy that is actually applied for the asset based on the territories where each
                // owner owns the asset.
                patch(resource: Schema.AssetMatchPolicy, assetId: string, optionalArgs: object): Schema.AssetMatchPolicy;
                // Updates the asset's match policy. If an asset has multiple owners, each owner may set its own match policy for the
                // asset. YouTube then computes the match policy that is actually applied for the asset based on the territories where each
                // owner owns the asset.
                update(resource: Schema.AssetMatchPolicy, assetId: string): Schema.AssetMatchPolicy;
                // Updates the asset's match policy. If an asset has multiple owners, each owner may set its own match policy for the
                // asset. YouTube then computes the match policy that is actually applied for the asset based on the territories where each
                // owner owns the asset.
                update(resource: Schema.AssetMatchPolicy, assetId: string, optionalArgs: object): Schema.AssetMatchPolicy;
            }
            interface AssetRelationshipsCollection {
                // Creates a relationship that links two assets.
                insert(resource: Schema.AssetRelationship): Schema.AssetRelationship;
                // Creates a relationship that links two assets.
                insert(resource: Schema.AssetRelationship, optionalArgs: object): Schema.AssetRelationship;
                // Retrieves a list of relationships for a given asset. The list contains relationships where the specified asset is either
                // the parent (embedding) or child (embedded) asset in the relationship.
                list(assetId: string): Schema.AssetRelationshipListResponse;
                // Retrieves a list of relationships for a given asset. The list contains relationships where the specified asset is either
                // the parent (embedding) or child (embedded) asset in the relationship.
                list(assetId: string, optionalArgs: object): Schema.AssetRelationshipListResponse;
                // Deletes a relationship between two assets.
                remove(assetRelationshipId: string): void;
                // Deletes a relationship between two assets.
                remove(assetRelationshipId: string, optionalArgs: object): void;
            }
            interface AssetSearchCollection {
                // Searches for assets based on asset metadata. The method can retrieve all assets or only assets owned by the content
                // owner. This method mimics the functionality of the advanced search feature on the Assets page in CMS.
                list(): Schema.AssetSearchResponse;
                // Searches for assets based on asset metadata. The method can retrieve all assets or only assets owned by the content
                // owner. This method mimics the functionality of the advanced search feature on the Assets page in CMS.
                list(optionalArgs: object): Schema.AssetSearchResponse;
            }
            interface AssetSharesCollection {
                // This method either retrieves a list of asset shares the partner owns and that map to a specified asset view ID *or* it
                // retrieves a list of asset views associated with a specified asset share ID owned by the partner.
                list(assetId: string): Schema.AssetShareListResponse;
                // This method either retrieves a list of asset shares the partner owns and that map to a specified asset view ID *or* it
                // retrieves a list of asset views associated with a specified asset share ID owned by the partner.
                list(assetId: string, optionalArgs: object): Schema.AssetShareListResponse;
            }
            interface AssetsCollection {
                // Retrieves the metadata for the specified asset. Note that if the request identifies an asset that has been merged with
                // another asset, meaning that YouTube identified the requested asset as a duplicate, then the request retrieves the
                // merged, or synthesized, asset.
                get(assetId: string): Schema.Asset;
                // Retrieves the metadata for the specified asset. Note that if the request identifies an asset that has been merged with
                // another asset, meaning that YouTube identified the requested asset as a duplicate, then the request retrieves the
                // merged, or synthesized, asset.
                get(assetId: string, optionalArgs: object): Schema.Asset;
                // Inserts an asset with the specified metadata. After inserting an asset, you can set its ownership data and match policy.
                insert(resource: Schema.Asset): Schema.Asset;
                // Inserts an asset with the specified metadata. After inserting an asset, you can set its ownership data and match policy.
                insert(resource: Schema.Asset, optionalArgs: object): Schema.Asset;
                // Retrieves a list of assets based on asset metadata. The method can retrieve all assets or only assets owned by the
                // content owner. Note that in cases where duplicate assets have been merged, the API response only contains the
                // synthesized asset. (It does not contain the constituent assets that were merged into the synthesized asset.)
                list(id: string): Schema.AssetListResponse;
                // Retrieves a list of assets based on asset metadata. The method can retrieve all assets or only assets owned by the
                // content owner. Note that in cases where duplicate assets have been merged, the API response only contains the
                // synthesized asset. (It does not contain the constituent assets that were merged into the synthesized asset.)
                list(id: string, optionalArgs: object): Schema.AssetListResponse;
                // Patches the metadata for the specified asset.
                patch(resource: Schema.Asset, assetId: string): Schema.Asset;
                // Patches the metadata for the specified asset.
                patch(resource: Schema.Asset, assetId: string, optionalArgs: object): Schema.Asset;
                // Updates the metadata for the specified asset.
                update(resource: Schema.Asset, assetId: string): Schema.Asset;
                // Updates the metadata for the specified asset.
                update(resource: Schema.Asset, assetId: string, optionalArgs: object): Schema.Asset;
            }
            interface CampaignsCollection {
                // Retrieves a particular campaign for an owner.
                get(campaignId: string): Schema.Campaign;
                // Retrieves a particular campaign for an owner.
                get(campaignId: string, optionalArgs: object): Schema.Campaign;
                // Insert a new campaign for an owner using the specified campaign data.
                insert(resource: Schema.Campaign): Schema.Campaign;
                // Insert a new campaign for an owner using the specified campaign data.
                insert(resource: Schema.Campaign, optionalArgs: object): Schema.Campaign;
                // Retrieves a list of campaigns for an owner.
                list(): Schema.CampaignList;
                // Retrieves a list of campaigns for an owner.
                list(optionalArgs: object): Schema.CampaignList;
                // Patch the data for a specific campaign.
                patch(resource: Schema.Campaign, campaignId: string): Schema.Campaign;
                // Patch the data for a specific campaign.
                patch(resource: Schema.Campaign, campaignId: string, optionalArgs: object): Schema.Campaign;
                // Deletes a specified campaign for an owner.
                remove(campaignId: string): void;
                // Deletes a specified campaign for an owner.
                remove(campaignId: string, optionalArgs: object): void;
                // Update the data for a specific campaign.
                update(resource: Schema.Campaign, campaignId: string): Schema.Campaign;
                // Update the data for a specific campaign.
                update(resource: Schema.Campaign, campaignId: string, optionalArgs: object): Schema.Campaign;
            }
            interface ClaimHistoryCollection {
                // Retrieves the claim history for a specified claim.
                get(claimId: string): Schema.ClaimHistory;
                // Retrieves the claim history for a specified claim.
                get(claimId: string, optionalArgs: object): Schema.ClaimHistory;
            }
            interface ClaimSearchCollection {
                // Retrieves a list of claims that match the search criteria. You can search for claims that are associated with a specific
                // asset or video or that match a specified query string.
                list(): Schema.ClaimSearchResponse;
                // Retrieves a list of claims that match the search criteria. You can search for claims that are associated with a specific
                // asset or video or that match a specified query string.
                list(optionalArgs: object): Schema.ClaimSearchResponse;
            }
            interface ClaimsCollection {
                // Retrieves a specific claim by ID.
                get(claimId: string): Schema.Claim;
                // Retrieves a specific claim by ID.
                get(claimId: string, optionalArgs: object): Schema.Claim;
                // Creates a claim. The video being claimed must have been uploaded to a channel associated with the same content owner as
                // the API user sending the request. You can set the claim's policy in any of the following ways: - Use the claim
                // resource's policy property to identify a saved policy by its unique ID. - Use the claim resource's policy property to
                // specify a custom set of rules.
                insert(resource: Schema.Claim): Schema.Claim;
                // Creates a claim. The video being claimed must have been uploaded to a channel associated with the same content owner as
                // the API user sending the request. You can set the claim's policy in any of the following ways: - Use the claim
                // resource's policy property to identify a saved policy by its unique ID. - Use the claim resource's policy property to
                // specify a custom set of rules.
                insert(resource: Schema.Claim, optionalArgs: object): Schema.Claim;
                // Retrieves a list of claims administered by the content owner associated with the currently authenticated user. Results
                // are sorted in descending order of creation time.
                list(): Schema.ClaimListResponse;
                // Retrieves a list of claims administered by the content owner associated with the currently authenticated user. Results
                // are sorted in descending order of creation time.
                list(optionalArgs: object): Schema.ClaimListResponse;
                // Patches an existing claim by either changing its policy or its status. You can update a claim's status from active to
                // inactive to effectively release the claim.
                patch(resource: Schema.Claim, claimId: string): Schema.Claim;
                // Patches an existing claim by either changing its policy or its status. You can update a claim's status from active to
                // inactive to effectively release the claim.
                patch(resource: Schema.Claim, claimId: string, optionalArgs: object): Schema.Claim;
                // Updates an existing claim by either changing its policy or its status. You can update a claim's status from active to
                // inactive to effectively release the claim.
                update(resource: Schema.Claim, claimId: string): Schema.Claim;
                // Updates an existing claim by either changing its policy or its status. You can update a claim's status from active to
                // inactive to effectively release the claim.
                update(resource: Schema.Claim, claimId: string, optionalArgs: object): Schema.Claim;
            }
            interface ContentOwnersCollection {
                // Retrieves information about the specified content owner.
                get(contentOwnerId: string): Schema.ContentOwner;
                // Retrieves information about the specified content owner.
                get(contentOwnerId: string, optionalArgs: object): Schema.ContentOwner;
                // Retrieves a list of content owners that match the request criteria.
                list(): Schema.ContentOwnerListResponse;
                // Retrieves a list of content owners that match the request criteria.
                list(optionalArgs: object): Schema.ContentOwnerListResponse;
            }
            interface LiveCuepointsCollection {
                // Inserts a cuepoint into a live broadcast.
                insert(resource: Schema.LiveCuepoint, channelId: string): Schema.LiveCuepoint;
                // Inserts a cuepoint into a live broadcast.
                insert(resource: Schema.LiveCuepoint, channelId: string, optionalArgs: object): Schema.LiveCuepoint;
            }
            interface MetadataHistoryCollection {
                // Retrieves a list of all metadata provided for an asset, regardless of which content owner provided the data.
                list(assetId: string): Schema.MetadataHistoryListResponse;
                // Retrieves a list of all metadata provided for an asset, regardless of which content owner provided the data.
                list(assetId: string, optionalArgs: object): Schema.MetadataHistoryListResponse;
            }
            interface OwnershipCollection {
                // Retrieves the ownership data provided for the specified asset by the content owner associated with the authenticated
                // user.
                get(assetId: string): Schema.RightsOwnership;
                // Retrieves the ownership data provided for the specified asset by the content owner associated with the authenticated
                // user.
                get(assetId: string, optionalArgs: object): Schema.RightsOwnership;
                // Provides new ownership information for the specified asset. Note that YouTube may receive ownership information from
                // multiple sources. For example, if an asset has multiple owners, each owner might send ownership data for the asset.
                // YouTube algorithmically combines the ownership data received from all of those sources to generate the asset's canonical
                // ownership data, which should provide the most comprehensive and accurate representation of the asset's ownership.
                patch(resource: Schema.RightsOwnership, assetId: string): Schema.RightsOwnership;
                // Provides new ownership information for the specified asset. Note that YouTube may receive ownership information from
                // multiple sources. For example, if an asset has multiple owners, each owner might send ownership data for the asset.
                // YouTube algorithmically combines the ownership data received from all of those sources to generate the asset's canonical
                // ownership data, which should provide the most comprehensive and accurate representation of the asset's ownership.
                patch(resource: Schema.RightsOwnership, assetId: string, optionalArgs: object): Schema.RightsOwnership;
                // Provides new ownership information for the specified asset. Note that YouTube may receive ownership information from
                // multiple sources. For example, if an asset has multiple owners, each owner might send ownership data for the asset.
                // YouTube algorithmically combines the ownership data received from all of those sources to generate the asset's canonical
                // ownership data, which should provide the most comprehensive and accurate representation of the asset's ownership.
                update(resource: Schema.RightsOwnership, assetId: string): Schema.RightsOwnership;
                // Provides new ownership information for the specified asset. Note that YouTube may receive ownership information from
                // multiple sources. For example, if an asset has multiple owners, each owner might send ownership data for the asset.
                // YouTube algorithmically combines the ownership data received from all of those sources to generate the asset's canonical
                // ownership data, which should provide the most comprehensive and accurate representation of the asset's ownership.
                update(resource: Schema.RightsOwnership, assetId: string, optionalArgs: object): Schema.RightsOwnership;
            }
            interface OwnershipHistoryCollection {
                // Retrieves a list of the ownership data for an asset, regardless of which content owner provided the data. The list only
                // includes the most recent ownership data for each content owner. However, if the content owner has submitted ownership
                // data through multiple data sources (API, content feeds, etc.), the list will contain the most recent data for each
                // content owner and data source.
                list(assetId: string): Schema.OwnershipHistoryListResponse;
                // Retrieves a list of the ownership data for an asset, regardless of which content owner provided the data. The list only
                // includes the most recent ownership data for each content owner. However, if the content owner has submitted ownership
                // data through multiple data sources (API, content feeds, etc.), the list will contain the most recent data for each
                // content owner and data source.
                list(assetId: string, optionalArgs: object): Schema.OwnershipHistoryListResponse;
            }
            interface PackageCollection {
                // Retrieves information for the specified package.
                get(packageId: string): Schema.Package;
                // Retrieves information for the specified package.
                get(packageId: string, optionalArgs: object): Schema.Package;
                // Inserts a metadata-only package.
                insert(resource: Schema.Package): Schema.PackageInsertResponse;
                // Inserts a metadata-only package.
                insert(resource: Schema.Package, optionalArgs: object): Schema.PackageInsertResponse;
            }
            interface PoliciesCollection {
                // Retrieves the specified saved policy.
                get(policyId: string): Schema.Policy;
                // Retrieves the specified saved policy.
                get(policyId: string, optionalArgs: object): Schema.Policy;
                // Creates a saved policy.
                insert(resource: Schema.Policy): Schema.Policy;
                // Creates a saved policy.
                insert(resource: Schema.Policy, optionalArgs: object): Schema.Policy;
                // Retrieves a list of the content owner's saved policies.
                list(): Schema.PolicyList;
                // Retrieves a list of the content owner's saved policies.
                list(optionalArgs: object): Schema.PolicyList;
                // Patches the specified saved policy.
                patch(resource: Schema.Policy, policyId: string): Schema.Policy;
                // Patches the specified saved policy.
                patch(resource: Schema.Policy, policyId: string, optionalArgs: object): Schema.Policy;
                // Updates the specified saved policy.
                update(resource: Schema.Policy, policyId: string): Schema.Policy;
                // Updates the specified saved policy.
                update(resource: Schema.Policy, policyId: string, optionalArgs: object): Schema.Policy;
            }
            interface ReferenceConflictsCollection {
                // Retrieves information about the specified reference conflict.
                get(referenceConflictId: string): Schema.ReferenceConflict;
                // Retrieves information about the specified reference conflict.
                get(referenceConflictId: string, optionalArgs: object): Schema.ReferenceConflict;
                // Retrieves a list of unresolved reference conflicts.
                list(): Schema.ReferenceConflictListResponse;
                // Retrieves a list of unresolved reference conflicts.
                list(optionalArgs: object): Schema.ReferenceConflictListResponse;
            }
            interface ReferencesCollection {
                // Retrieves information about the specified reference.
                get(referenceId: string): Schema.Reference;
                // Retrieves information about the specified reference.
                get(referenceId: string, optionalArgs: object): Schema.Reference;
                // Creates a reference in one of the following ways: - If your request is uploading a reference file, YouTube creates the
                // reference from the provided content. You can provide either a video/audio file or a pre-generated fingerprint. If you
                // are providing a pre-generated fingerprint, set the reference resource's fpDirect property to true in the request body.
                // In this flow, you can use either the multipart or resumable upload flows to provide the reference content. - If you want
                // to create a reference using a claimed video as the reference content, use the claimId parameter to identify the claim.
                insert(resource: Schema.Reference): Schema.Reference;
                // Creates a reference in one of the following ways: - If your request is uploading a reference file, YouTube creates the
                // reference from the provided content. You can provide either a video/audio file or a pre-generated fingerprint. If you
                // are providing a pre-generated fingerprint, set the reference resource's fpDirect property to true in the request body.
                // In this flow, you can use either the multipart or resumable upload flows to provide the reference content. - If you want
                // to create a reference using a claimed video as the reference content, use the claimId parameter to identify the claim.
                insert(resource: Schema.Reference, mediaData: Base.Blob): Schema.Reference;
                // Creates a reference in one of the following ways: - If your request is uploading a reference file, YouTube creates the
                // reference from the provided content. You can provide either a video/audio file or a pre-generated fingerprint. If you
                // are providing a pre-generated fingerprint, set the reference resource's fpDirect property to true in the request body.
                // In this flow, you can use either the multipart or resumable upload flows to provide the reference content. - If you want
                // to create a reference using a claimed video as the reference content, use the claimId parameter to identify the claim.
                insert(resource: Schema.Reference, mediaData: Base.Blob, optionalArgs: object): Schema.Reference;
                // Retrieves a list of references by ID or the list of references for the specified asset.
                list(): Schema.ReferenceListResponse;
                // Retrieves a list of references by ID or the list of references for the specified asset.
                list(optionalArgs: object): Schema.ReferenceListResponse;
                // Patches a reference.
                patch(resource: Schema.Reference, referenceId: string): Schema.Reference;
                // Patches a reference.
                patch(resource: Schema.Reference, referenceId: string, optionalArgs: object): Schema.Reference;
                // Updates a reference.
                update(resource: Schema.Reference, referenceId: string): Schema.Reference;
                // Updates a reference.
                update(resource: Schema.Reference, referenceId: string, optionalArgs: object): Schema.Reference;
            }
            interface SpreadsheetTemplateCollection {
                // Retrieves a list of spreadsheet templates for a content owner.
                list(): Schema.SpreadsheetTemplateListResponse;
                // Retrieves a list of spreadsheet templates for a content owner.
                list(optionalArgs: object): Schema.SpreadsheetTemplateListResponse;
            }
            interface UploaderCollection {
                // Retrieves a list of uploaders for a content owner.
                list(): Schema.UploaderListResponse;
                // Retrieves a list of uploaders for a content owner.
                list(optionalArgs: object): Schema.UploaderListResponse;
            }
            interface ValidatorCollection {
                // Validate a metadata file.
                validate(resource: Schema.ValidateRequest): Schema.ValidateResponse;
                // Validate a metadata file.
                validate(resource: Schema.ValidateRequest, optionalArgs: object): Schema.ValidateResponse;
                // Validate a metadata file asynchronously.
                validateAsync(resource: Schema.ValidateAsyncRequest): Schema.ValidateAsyncResponse;
                // Validate a metadata file asynchronously.
                validateAsync(resource: Schema.ValidateAsyncRequest, optionalArgs: object): Schema.ValidateAsyncResponse;
                // Get the asynchronous validation status.
                validateAsyncStatus(resource: Schema.ValidateStatusRequest): Schema.ValidateStatusResponse;
                // Get the asynchronous validation status.
                validateAsyncStatus(resource: Schema.ValidateStatusRequest, optionalArgs: object): Schema.ValidateStatusResponse;
            }
            interface VideoAdvertisingOptionsCollection {
                // Retrieves advertising settings for the specified video.
                get(videoId: string): Schema.VideoAdvertisingOption;
                // Retrieves advertising settings for the specified video.
                get(videoId: string, optionalArgs: object): Schema.VideoAdvertisingOption;
                // Retrieves details about the types of allowed ads for a specified partner- or user-uploaded video.
                getEnabledAds(videoId: string): Schema.VideoAdvertisingOptionGetEnabledAdsResponse;
                // Retrieves details about the types of allowed ads for a specified partner- or user-uploaded video.
                getEnabledAds(videoId: string, optionalArgs: object): Schema.VideoAdvertisingOptionGetEnabledAdsResponse;
                // Patches the advertising settings for the specified video.
                patch(resource: Schema.VideoAdvertisingOption, videoId: string): Schema.VideoAdvertisingOption;
                // Patches the advertising settings for the specified video.
                patch(resource: Schema.VideoAdvertisingOption, videoId: string, optionalArgs: object): Schema.VideoAdvertisingOption;
                // Updates the advertising settings for the specified video.
                update(resource: Schema.VideoAdvertisingOption, videoId: string): Schema.VideoAdvertisingOption;
                // Updates the advertising settings for the specified video.
                update(resource: Schema.VideoAdvertisingOption, videoId: string, optionalArgs: object): Schema.VideoAdvertisingOption;
            }
            interface WhitelistsCollection {
                // Retrieves a specific whitelisted channel by ID.
                get(id: string): Schema.Whitelist;
                // Retrieves a specific whitelisted channel by ID.
                get(id: string, optionalArgs: object): Schema.Whitelist;
                // Whitelist a YouTube channel for your content owner. Whitelisted channels are channels that are not owned or managed by
                // you, but you would like to whitelist so that no claims from your assets are placed on videos uploaded to these channels.
                insert(resource: Schema.Whitelist): Schema.Whitelist;
                // Whitelist a YouTube channel for your content owner. Whitelisted channels are channels that are not owned or managed by
                // you, but you would like to whitelist so that no claims from your assets are placed on videos uploaded to these channels.
                insert(resource: Schema.Whitelist, optionalArgs: object): Schema.Whitelist;
                // Retrieves a list of whitelisted channels for a content owner.
                list(): Schema.WhitelistListResponse;
                // Retrieves a list of whitelisted channels for a content owner.
                list(optionalArgs: object): Schema.WhitelistListResponse;
                // Removes a whitelisted channel for a content owner.
                remove(id: string): void;
                // Removes a whitelisted channel for a content owner.
                remove(id: string, optionalArgs: object): void;
            }
        }
        namespace Schema {
            interface AdBreak {
                // The time of the ad break specified as the number of seconds after the start of the video when the break occurs.
                midrollSeconds?: Integer;
                // The point at which the break occurs during the video playback.
                position?: string;
            }
            interface Asset {
                // A list of asset IDs that can be used to refer to the asset. The list contains values if the asset represents multiple
                // constituent assets that have been merged. In that case, any of the asset IDs originally assigned to the constituent
                // assets could be used to update the master, or synthesized, asset.
                aliasId?: string[];
                // An ID that YouTube assigns and uses to uniquely identify the asset.
                id?: string;
                // The type of the API resource. For asset resources, the value is youtubePartner#asset.
                kind?: string;
                // A list of asset labels on the asset.
                label?: string[];
                // The matchPolicy object contains information about the asset's match policy, which YouTube applies to user-uploaded
                // videos that match the asset.
                matchPolicy?: Schema.AssetMatchPolicy;
                matchPolicyEffective?: Schema.AssetMatchPolicy;
                matchPolicyMine?: Schema.AssetMatchPolicy;
                // The metadata object contains information that identifies and describes the asset. This information could be used to
                // search for the asset or to eliminate duplication within YouTube's database.
                metadata?: Schema.Metadata;
                metadataEffective?: Schema.Metadata;
                metadataMine?: Schema.Metadata;
                // The ownership object identifies an asset's owners and provides additional details about their ownership, such as the
                // territories where they own the asset.
                ownership?: Schema.RightsOwnership;
                // The ownershipConflicts object contains information about the asset's ownership conflicts.
                ownershipConflicts?: Schema.OwnershipConflicts;
                ownershipEffective?: Schema.RightsOwnership;
                ownershipMine?: Schema.RightsOwnership;
                // The asset's status.
                status?: string;
                // The date and time the asset was created. The value is specified in RFC 3339 (YYYY-MM-DDThh:mm:ss.000Z) format.
                timeCreated?: string;
                // The asset's type. This value determines the metadata fields that you can set for the asset. In addition, certain API
                // functions may only be supported for specific types of assets. For example, composition assets may have more complex
                // ownership data than other types of assets.
                type?: string;
            }
            interface AssetLabel {
                // The type of the API resource. For assetLabel resources, this value is youtubePartner#assetLabel.
                kind?: string;
                // Name of the asset label.
                labelName?: string;
            }
            interface AssetLabelListResponse {
                // A list of assetLabel resources that match the request criteria.
                items?: Schema.AssetLabel[];
                // The type of the API response. For this operation, the value is youtubePartner#assetLabelList.
                kind?: string;
            }
            interface AssetListResponse {
                // A list of asset resources that match the request criteria.
                items?: Schema.Asset[];
                // The type of the API response. For this operation, the value is youtubePartner#assetList.
                kind?: string;
            }
            interface AssetMatchPolicy {
                // The type of the API resource. Value: youtubePartner#assetMatchPolicy.
                kind?: string;
                // A value that uniquely identifies the Policy resource that YouTube applies to user-uploaded videos that match the asset.
                policyId?: string;
                // A list of rules that collectively define the policy that the content owner wants to apply to user-uploaded videos that
                // match the asset. Each rule specifies the action that YouTube should take and may optionally specify the conditions under
                // which that action is enforced.
                rules?: Schema.PolicyRule[];
            }
            interface AssetRelationship {
                // The ID of the child (contained) asset.
                childAssetId?: string;
                // A value that YouTube assigns and uses to uniquely identify the asset relationship.
                id?: string;
                // The type of the API resource. For this resource, the value is youtubePartner#assetRelationship.
                kind?: string;
                // The ID of the parent (containing) asset.
                parentAssetId?: string;
            }
            interface AssetRelationshipListResponse {
                // A list of assetRelationship resources that match the request criteria.
                items?: Schema.AssetRelationship[];
                // The type of the API response. For this operation, the value is youtubePartner#assetRelationshipList.
                kind?: string;
                // The token that can be used as the value of the pageToken parameter to retrieve the next page of results.
                nextPageToken?: string;
                // The pageInfo object encapsulates paging information for the result set.
                pageInfo?: Schema.PageInfo;
            }
            interface AssetSearchResponse {
                // A list of asset resources that match the request criteria.
                items?: Schema.AssetSnippet[];
                // The type of the API response. For this operation, the value is youtubePartner#assetSnippetList.
                kind?: string;
                // The token that can be used as the value of the pageToken parameter to retrieve the next page of results.
                nextPageToken?: string;
                // The pageInfo object encapsulates paging information for the result set.
                pageInfo?: Schema.PageInfo;
            }
            interface AssetShare {
                // The type of the API resource. For this resource, the value is youtubePartner#assetShare.
                kind?: string;
                // A value that YouTube assigns and uses to uniquely identify the asset share.
                shareId?: string;
                // A value that YouTube assigns and uses to uniquely identify the asset view.
                viewId?: string;
            }
            interface AssetShareListResponse {
                // An assetShare resource that matches the request criteria.
                items?: Schema.AssetShare[];
                // The type of the API response. For this operation, the value is youtubePartner#assetShareList.
                kind?: string;
                // The token that can be used as the value of the pageToken parameter to retrieve the next page of results.
                nextPageToken?: string;
                // The pageInfo object encapsulates paging information for the result set.
                pageInfo?: Schema.PageInfo;
            }
            interface AssetSnippet {
                // Custom ID assigned by the content owner to this asset.
                customId?: string;
                // An ID that YouTube assigns and uses to uniquely identify the asset.
                id?: string;
                // The ISRC (International Standard Recording Code) for this asset.
                isrc?: string;
                // The ISWC (International Standard Musical Work Code) for this asset.
                iswc?: string;
                // The type of the API resource. For this operation, the value is youtubePartner#assetSnippet.
                kind?: string;
                // The date and time the asset was created. The value is specified in RFC 3339 (YYYY-MM-DDThh:mm:ss.000Z) format.
                timeCreated?: string;
                // Title of this asset.
                title?: string;
                // The asset's type. This value determines which metadata fields might be included in the metadata object.
                type?: string;
            }
            // Information to read/write to blobstore2.
            interface Blobstore2Info {
                // The blob generation id.
                blobGeneration?: string;
                // The blob id, e.g., /blobstore/prod/playground/scotty
                blobId?: string;
                // Read handle passed from Bigstore -> Scotty for a GCS download. This is a signed, serialized blobstore2.ReadHandle proto
                // which must never be set outside of Bigstore, and is not applicable to non-GCS media downloads.
                downloadReadHandle?: Byte[];
                // The blob read token. Needed to read blobs that have not been replicated. Might not be available until the final call.
                readToken?: string;
                // Metadata passed from Blobstore -> Scotty for a new GCS upload. This is a signed, serialized
                // blobstore2.BlobMetadataContainer proto which must never be consumed outside of Bigstore, and is not applicable to
                // non-GCS media uploads.
                uploadMetadataContainer?: Byte[];
            }
            interface Campaign {
                // The campaignData object contains details like the campaign's start and end dates, target and source.
                campaignData?: Schema.CampaignData;
                // The unique ID that YouTube uses to identify the campaign.
                id?: string;
                // The type of the API resource. For campaign resources, this value is youtubePartner#campaign.
                kind?: string;
                // The status of the campaign.
                status?: string;
                // The time the campaign was created.
                timeCreated?: string;
                // The time the campaign was last modified.
                timeLastModified?: string;
            }
            interface CampaignData {
                // The campaignSource object contains information about the assets for which the campaign will generate links.
                campaignSource?: Schema.CampaignSource;
                // The time at which the campaign should expire. Do not specify a value if the campaign has no expiration time.
                expireTime?: string;
                // The user-given name of the campaign.
                name?: string;
                // A list of videos or channels that will be linked to from claimed videos that are included in the campaign.
                promotedContent?: Schema.PromotedContent[];
                // The time at which the campaign should start. Do not specify a value if the campaign should start immediately.
                startTime?: string;
            }
            interface CampaignList {
                // A list of campaigns.
                items?: Schema.Campaign[];
                // The type of the API response. For this operation, the value is youtubePartner#campaignList.
                kind?: string;
            }
            interface CampaignSource {
                // The type of the campaign source.
                sourceType?: string;
                // A list of values of the campaign source.
                sourceValue?: string[];
            }
            interface CampaignTargetLink {
                // The channel ID or video ID of the link target.
                targetId?: string;
                // Indicates whether the link target is a channel or video.
                targetType?: string;
            }
            interface Claim {
                // The applied policy for the viewing owner on the claim. This might not be the same as the final claim policy on the video
                // as it does not consider other partners' policy of the same claim.
                appliedPolicy?: Schema.Policy;
                // The unique YouTube asset ID that identifies the asset associated with the claim.
                assetId?: string;
                // Indicates whether or not the claimed video should be blocked anywhere it is not explicitly owned.
                blockOutsideOwnership?: boolean;
                // This value indicates whether the claim covers the audio, video, or audiovisual portion of the claimed content.
                contentType?: string;
                // The ID that YouTube assigns and uses to uniquely identify the claim.
                id?: string;
                // Indicates whether or not the claim is a partner uploaded claim.
                isPartnerUploaded?: boolean;
                // The type of the API resource. For claim resources, this value is youtubePartner#claim.
                kind?: string;
                // If this claim was auto-generated based on a provided reference, this section will provide details of the match that
                // generated the claim.
                matchInfo?: Schema.MatchInfo;
                origin?: Schema.Origin;
                // The policy provided by the viewing owner on the claim.
                policy?: Schema.Policy;
                // The claim's status. When updating a claim, you can update its status from active to inactive to effectively release the
                // claim, but the API does not support other updates to a claim's status.
                status?: string;
                // The time the claim was created.
                timeCreated?: string;
                // UGC type of the claim (standard, premium, song).
                ugcType?: string;
                // The unique YouTube video ID that identifies the video associated with the claim.
                videoId?: string;
            }
            interface ClaimEvent {
                // The type of the API resource. For claimEvent resources, this value is youtubePartner#claimEvent.
                kind?: string;
                // Reason of the event.
                reason?: string;
                // Data related to source of the event.
                source?: Schema.Source;
                // The time when the event occurred.
                time?: string;
                // Type of the event.
                type?: string;
                // Details of event's type.
                typeDetails?: Schema.TypeDetails;
            }
            interface ClaimHistory {
                // A list of claim history events.
                event?: Schema.ClaimEvent[];
                // The ID that YouTube assigns and uses to uniquely identify the claim.
                id?: string;
                // The type of the API resource. For claimHistory resources, this value is youtubePartner#claimHistory.
                kind?: string;
                // The external channel id of claimed video's uploader.
                uploaderChannelId?: string;
            }
            interface ClaimListResponse {
                // A list of claims that match the request criteria.
                items?: Schema.Claim[];
                // The type of the API response. For this operation, the value is youtubePartner#claimList.
                kind?: string;
                // The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
                nextPageToken?: string;
                // The pageInfo object encapsulates paging information for the result set.
                pageInfo?: Schema.PageInfo;
                // The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
                previousPageToken?: string;
            }
            interface ClaimSearchResponse {
                // A list of claims that match the request criteria.
                items?: Schema.ClaimSnippet[];
                // The type of the API response. For this operation, the value is youtubePartner#claimSnippetList.
                kind?: string;
                // The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
                nextPageToken?: string;
                // The pageInfo object encapsulates paging information for the result set.
                pageInfo?: Schema.PageInfo;
                // The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
                previousPageToken?: string;
            }
            interface ClaimSnippet {
                // The unique YouTube asset ID that identifies the asset associated with the claim.
                assetId?: string;
                // This value indicates whether the claim covers the audio, video, or audiovisual portion of the claimed content.
                contentType?: string;
                // The ID that YouTube assigns and uses to uniquely identify the claim.
                id?: string;
                // Indicates whether or not the claim is a partner uploaded claim.
                isPartnerUploaded?: boolean;
                // The type of the API resource. For this operation, the value is youtubePartner#claimSnippet.
                kind?: string;
                origin?: Schema.YoutubePartnerApiProtoFrontendV1Origin;
                // The claim's status.
                status?: string;
                // Indicates that this is a third party claim.
                thirdPartyClaim?: boolean;
                // The time the claim was created.
                timeCreated?: string;
                // The time the claim status and/or status detail was last modified.
                timeStatusLastModified?: string;
                // The unique YouTube video ID that identifies the video associated with the claim.
                videoId?: string;
                // The title of the claimed video.
                videoTitle?: string;
                // Number of views for the claimed video.
                videoViews?: string;
            }
            // A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For
            // details, visit http://go/bigstore-composites.
            interface CompositeMedia {
                // Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a
                // blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be
                // represented in this field as v1 BlobRef.
                blobRef?: Byte[];
                // Blobstore v2 info, set if reference_type is BLOBSTORE_REF and it refers to a v2 blob.
                blobstore2Info?: Schema.Blobstore2Info;
                // A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google
                // infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get
                // around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from
                // including the actual type of this field.
                cosmoBinaryReference?: Byte[];
                // crc32.c hash for the payload.
                crc32cHash?: Integer;
                // Media data, set if reference_type is INLINE
                inline?: Byte[];
                // Size of the data, in bytes
                length?: string;
                // MD5 hash for the payload.
                md5Hash?: Byte[];
                // Reference to a TI Blob, set if reference_type is BIGSTORE_REF.
                objectId?: Schema.ObjectId;
                // Path to the data, set if reference_type is PATH
                path?: string;
                // Describes what the field reference contains.
                referenceType?: string;
                // SHA-1 hash for the payload.
                sha1Hash?: Byte[];
            }
            interface Conditions {
                // This match condition specifies whether the user- or partner-uploaded content needs to match the audio, video or
                // audiovisual content of a reference file for the rule to apply.
                contentMatchType?: string[];
                // This match condition specifies an amount of time that the user- or partner- uploaded content needs to match a reference
                // file for the rule to apply.
                matchDuration?: Schema.IntervalCondition[];
                // This match condition specifies a percentage of the user- or partner-uploaded content that needs to match a reference
                // file for the rule to apply.
                matchPercent?: Schema.IntervalCondition[];
                // This match condition indicates that the reference must be a certain duration for the rule to apply.
                referenceDuration?: Schema.IntervalCondition[];
                // This match condition indicates that the specified percentage of a reference file must match the user- or
                // partner-uploaded content for the rule to apply.
                referencePercent?: Schema.IntervalCondition[];
                // This watch condition specifies where users are (or or not) allowed to watch (or listen to) an asset. YouTube determines
                // whether the condition is satisfied based on the user's location.
                requiredTerritories?: Schema.TerritoryCondition;
            }
            interface ConflictingOwnership {
                // The ID of the conflicting asset's owner.
                owner?: string;
                // The percentage of the asset that the owner controls or administers.
                ratio?: number;
            }
            interface ContentOwner {
                // The email address visible to other partners for use in managing asset ownership conflicts.
                conflictNotificationEmail?: string;
                // The content owner's display name.
                displayName?: string;
                // The email address(es) to which YouTube sends claim dispute notifications and possible claim notifications.
                disputeNotificationEmails?: string[];
                // The email address(es) to which YouTube sends fingerprint reports.
                fingerprintReportNotificationEmails?: string[];
                // A unique ID that YouTube uses to identify the content owner.
                id?: string;
                // The type of the API resource. For content owner resources, the value is youtubePartner#contentOwner.
                kind?: string;
                // The email address(es) to which YouTube sends CMS account details and report notifications.
                primaryNotificationEmails?: string[];
            }
            interface ContentOwnerListResponse {
                // A list of content owners that match the request criteria.
                items?: Schema.ContentOwner[];
                // The type of the API response. For this operation, the value is youtubePartner#contentOwnerList.
                kind?: string;
            }
            // Detailed Content-Type information from Scotty. The Content-Type of the media will typically be filled in by the header
            // or Scotty's best_guess, but this extended information provides the backend with more information so that it can make a
            // better decision if needed. This is only used on media upload requests from Scotty.
            interface ContentTypeInfo {
                // Scotty's best guess of what the content type of the file is.
                bestGuess?: string;
                // The content type of the file derived by looking at specific bytes (i.e. "magic bytes") of the actual file.
                fromBytes?: string;
                // The content type of the file derived from the file extension of the original file name used by the client.
                fromFileName?: string;
                // The content type of the file as specified in the request headers, multipart headers, or RUPIO start request.
                fromHeader?: string;
                // The content type of the file derived from the file extension of the URL path. The URL path is assumed to represent a
                // file name (which is typically only true for agents that are providing a REST API).
                fromUrlPath?: string;
            }
            interface CountriesRestriction {
                // A list of ad formats that can be used in the specified countries.
                adFormats?: string[];
                // A list of ISO 3166-1 alpha-2 country codes that identify the countries where ads are enabled.
                territories?: string[];
            }
            interface CuepointSettings {
                // The cuepoint's type. See the Getting started guide for an explanation of the different types of cuepoints. Also see the
                // Life of a broadcast document for best practices about inserting cuepoints during your broadcast.
                cueType?: string;
                // The cuepoint's duration, in seconds. This value must be specified if the cueType is ad and is ignored otherwise.
                durationSecs?: Integer;
                // This value specifies a point in time in the video when viewers should see an ad or in-stream slate. The property value
                // identifies a time offset, in milliseconds, from the beginning of the monitor stream. Though measured in milliseconds,
                // the value is actually an approximation, and YouTube will insert the cuepoint as closely as possible to that time. You
                // should not specify a value for this parameter if your broadcast does not have a monitor stream. This property's default
                // value is 0, which indicates that the cuepoint should be inserted as soon as possible. If your broadcast stream is not
                // delayed, then 0 is also the only valid value. However, if your broadcast stream is delayed, then the property value can
                // specify the time when the cuepoint should be inserted. See the Getting started guide for more details. *Note:* If your
                // broadcast had a testing phase, the offset is measured from the time that the testing phase began.
                offsetTimeMs?: string;
                // This value specifies the wall clock time at which the cuepoint should be inserted. The value is specified in ISO 8601
                // (YYYY-MM-DDThh:mm:ss.sssZ) format.
                walltime?: string;
            }
            interface Date {
                // The date's day. The value should be an integer between 1 and 31. Note that some day-month combinations are not valid.
                day?: Integer;
                // The date's month. The value should be an integer between 1 and 12.
                month?: Integer;
                // The date's year in the Gregorian Calendar. Assumed to be A.D.
                year?: Integer;
            }
            // Backend response for a Diff get checksums response. For details on the Scotty Diff protocol, visit
            // http://go/scotty-diff-protocol.
            interface DiffChecksumsResponse {
                // Exactly one of these fields must be populated. If checksums_location is filled, the server will return the corresponding
                // contents to the user. If object_location is filled, the server will calculate the checksums based on the content there
                // and return that to the user. For details on the format of the checksums, see http://go/scotty-diff-protocol.
                checksumsLocation?: Schema.CompositeMedia;
                // The chunk size of checksums. Must be a multiple of 256KB.
                chunkSizeBytes?: string;
                // If set, calculate the checksums based on the contents and return them to the caller.
                objectLocation?: Schema.CompositeMedia;
                // The total size of the server object.
                objectSizeBytes?: string;
                // The object version of the object the checksums are being returned for.
                objectVersion?: string;
            }
            // Backend response for a Diff download response. For details on the Scotty Diff protocol, visit
            // http://go/scotty-diff-protocol.
            interface DiffDownloadResponse {
                // The original object location.
                objectLocation?: Schema.CompositeMedia;
            }
            // A Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
            interface DiffUploadRequest {
                // The location of the checksums for the new object. Agents must clone the object located here, as the upload server will
                // delete the contents once a response is received. For details on the format of the checksums, see
                // http://go/scotty-diff-protocol.
                checksumsInfo?: Schema.CompositeMedia;
                // The location of the new object. Agents must clone the object located here, as the upload server will delete the contents
                // once a response is received.
                objectInfo?: Schema.CompositeMedia;
                // The object version of the object that is the base version the incoming diff script will be applied to. This field will
                // always be filled in.
                objectVersion?: string;
            }
            // Backend response for a Diff upload request. For details on the Scotty Diff protocol, visit
            // http://go/scotty-diff-protocol.
            interface DiffUploadResponse {
                // The object version of the object at the server. Must be included in the end notification response. The version in the
                // end notification response must correspond to the new version of the object that is now stored at the server, after the
                // upload.
                objectVersion?: string;
                // The location of the original file for a diff upload request. Must be filled in if responding to an upload start
                // notification.
                originalObject?: Schema.CompositeMedia;
            }
            // Backend response for a Diff get version response. For details on the Scotty Diff protocol, visit
            // http://go/scotty-diff-protocol.
            interface DiffVersionResponse {
                // The total size of the server object.
                objectSizeBytes?: string;
                // The version of the object stored at the server.
                objectVersion?: string;
            }
            // Parameters specific to media downloads.
            interface DownloadParameters {
                // A boolean to be returned in the response to Scotty. Allows/disallows gzip encoding of the payload content when the
                // server thinks it's advantageous (hence, does not guarantee compression) which allows Scotty to GZip the response to the
                // client.
                allowGzipCompression?: boolean;
                // Determining whether or not Apiary should skip the inclusion of any Content-Range header on its response to Scotty.
                ignoreRange?: boolean;
            }
            interface ExcludedInterval {
                // The end (inclusive) time in seconds of the time window. The value can be any value greater than low. If high is greater
                // than the length of the reference, the interval between low and the end of the reference will be excluded. Every interval
                // must specify a value for this field.
                high?: number;
                // The start (inclusive) time in seconds of the time window. The value can be any value between 0 and high. Every interval
                // must specify a value for this field.
                low?: number;
                // The source of the request to exclude the interval from Content ID matching.
                origin?: string;
                // The date and time that the exclusion was created. The value is specified in RFC 3339 (YYYY-MM-DDThh:mm:ss.000Z) format.
                timeCreated?: string;
            }
            interface IntervalCondition {
                // The maximum (inclusive) allowed value for the condition to be satisfied. The default value is ∞.
                high?: number;
                // The minimum (inclusive) allowed value for the condition to be satisfied. The default value is -∞.
                low?: number;
            }
            interface LiveCuepoint {
                // The ID that YouTube assigns to uniquely identify the broadcast into which the cuepoint is being inserted.
                broadcastId?: string;
                // A value that YouTube assigns to uniquely identify the cuepoint.
                id?: string;
                // The type of the API resource. For liveCuepoint resources, the value is youtubePartner#liveCuepoint.
                kind?: string;
                // The *settings* object defines the cuepoint's settings.
                settings?: Schema.CuepointSettings;
            }
            interface LongestMatch {
                // The duration of the longest match between the reference and the user video.
                durationSecs?: string;
                // The offset in seconds into the reference at which the longest match began.
                referenceOffset?: string;
                // The offset in seconds into the user video at which the longest match began.
                userVideoOffset?: string;
            }
            interface MatchInfo {
                // Details of the longest match between the reference and the user video.
                longestMatch?: Schema.LongestMatch;
                // Details about each match segment. Each item in the list contains information about one match segment associated with the
                // claim. It is possible to have multiple match segments. For example, if the audio and video content of an uploaded video
                // match that of a reference video, there would be two match segments. One segment would describe the audio match and the
                // other would describe the video match.
                matchSegments?: Schema.MatchSegment[];
                // The reference ID that generated this match.
                referenceId?: string;
                // Details of the total amount of reference and user video content which matched each other. Note these two values may
                // differ if either the reference or the user video contains a loop.
                totalMatch?: Schema.TotalMatch;
            }
            interface MatchSegment {
                // Identifies the manner in which the claimed video matches the reference video.
                channel?: string;
                // On insert operation of manual claims, the manual_segment object contains information about the specific portion of the
                // video that is claimed to be matching.
                manual_segment?: Schema.Segment2;
                // The reference_segment object contains information about the matched portion of the reference content.
                reference_segment?: Schema.Segment;
                // The video_segment object contains information about the matched portion of the claimed video.
                video_segment?: Schema.Segment;
            }
            // A reference to data stored on the filesystem, on GFS or in blobstore.
            interface Media {
                // Deprecated, use one of explicit hash type fields instead. Algorithm used for calculating the hash. As of 2011/01/21,
                // "MD5" is the only possible value for this field. New values may be added at any time.
                algorithm?: string;
                // Use object_id instead.
                bigstoreObjectRef?: Byte[];
                // Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a
                // blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be
                // represented in this field as v1 BlobRef.
                blobRef?: Byte[];
                // Blobstore v2 info, set if reference_type is BLOBSTORE_REF and it refers to a v2 blob.
                blobstore2Info?: Schema.Blobstore2Info;
                // A composite media composed of one or more media objects, set if reference_type is COMPOSITE_MEDIA. The media length
                // field must be set to the sum of the lengths of all composite media objects. Note: All composite media must have length
                // specified.
                compositeMedia?: Schema.CompositeMedia[];
                // MIME type of the data
                contentType?: string;
                // Extended content type information provided for Scotty uploads.
                contentTypeInfo?: Schema.ContentTypeInfo;
                // A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google
                // infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get
                // around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from
                // including the actual type of this field.
                cosmoBinaryReference?: Byte[];
                // For Scotty Uploads: Scotty-provided hashes for uploads For Scotty Downloads: (WARNING: DO NOT USE WITHOUT PERMISSION
                // FROM THE SCOTTY TEAM.) A Hash provided by the agent to be used to verify the data being downloaded. Currently only
                // supported for inline payloads. Further, only crc32c_hash is currently supported.
                crc32cHash?: Integer;
                // Set if reference_type is DIFF_CHECKSUMS_RESPONSE.
                diffChecksumsResponse?: Schema.DiffChecksumsResponse;
                // Set if reference_type is DIFF_DOWNLOAD_RESPONSE.
                diffDownloadResponse?: Schema.DiffDownloadResponse;
                // Set if reference_type is DIFF_UPLOAD_REQUEST.
                diffUploadRequest?: Schema.DiffUploadRequest;
                // Set if reference_type is DIFF_UPLOAD_RESPONSE.
                diffUploadResponse?: Schema.DiffUploadResponse;
                // Set if reference_type is DIFF_VERSION_RESPONSE.
                diffVersionResponse?: Schema.DiffVersionResponse;
                // Parameters for a media download.
                downloadParameters?: Schema.DownloadParameters;
                // Original file name
                filename?: string;
                // Deprecated, use one of explicit hash type fields instead. These two hash related fields will only be populated on Scotty
                // based media uploads and will contain the content of the hash group in the NotificationRequest:
                // http://cs/#google3/uploader/service/proto/upload_listener.proto&q=class:Hash Hex encoded hash value of the uploaded
                // media.
                hash?: string;
                // For Scotty uploads only. If a user sends a hash code and the backend has requested that Scotty verify the upload against
                // the client hash, Scotty will perform the check on behalf of the backend and will reject it if the hashes don't match.
                // This is set to true if Scotty performed this verification.
                hashVerified?: boolean;
                // Media data, set if reference_type is INLINE
                inline?: Byte[];
                // |is_potential_retry| is set false only when Scotty is certain that it has not sent the request before. When a client
                // resumes an upload, this field must be set true in agent calls, because Scotty cannot be certain that it has never sent
                // the request before due to potential failure in the session state persistence.
                isPotentialRetry?: boolean;
                // Size of the data, in bytes
                length?: string;
                // Scotty-provided MD5 hash for an upload.
                md5Hash?: Byte[];
                // Media id to forward to the operation GetMedia. Can be set if reference_type is GET_MEDIA.
                mediaId?: Byte[];
                // Reference to a TI Blob, set if reference_type is BIGSTORE_REF.
                objectId?: Schema.ObjectId;
                // Path to the data, set if reference_type is PATH
                path?: string;
                // Describes what the field reference contains.
                referenceType?: string;
                // Scotty-provided SHA1 hash for an upload.
                sha1Hash?: Byte[];
                // Scotty-provided SHA256 hash for an upload.
                sha256Hash?: Byte[];
                // Time at which the media data was last updated, in milliseconds since UNIX epoch
                timestamp?: string;
                // A unique fingerprint/version id for the media data
                token?: string;
            }
            // Extra information added to operations that support Scotty media requests.
            interface MediaRequestInfo {
                // The number of current bytes uploaded or downloaded.
                currentBytes?: string;
                // Data to be copied to backend requests. Custom data is returned to Scotty in the agent_state field, which Scotty will
                // then provide in subsequent upload notifications.
                customData?: string;
                // Set if the http request info is diff encoded. The value of this field is the version number of the base revision. This
                // is corresponding to Apiary's mediaDiffObjectVersion
                // (//depot/google3/java/com/google/api/server/media/variable/DiffObjectVersionVariable.java). See
                // go/esf-scotty-diff-upload for more information.
                diffObjectVersion?: string;
                // The existence of the final_status field indicates that this is the last call to the agent for this request_id.
                // http://google3/uploader/agent/scotty_agent.proto?l=737&rcl=347601929
                finalStatus?: Integer;
                // The type of notification received from Scotty.
                notificationType?: string;
                // The Scotty request ID.
                requestId?: string;
                // The total size of the file.
                totalBytes?: string;
                // Whether the total bytes field contains an estimated data.
                totalBytesIsEstimated?: boolean;
            }
            // This message is for backends to pass their scotty media specific fields to ESF. Backend will include this in their
            // response message to ESF. Example: ExportFile is an rpc defined for upload using scotty from ESF. rpc
            // ExportFile(ExportFileRequest) returns (ExportFileResponse) Message ExportFileResponse will include
            // apiserving.MediaResponseInfo to tell ESF about data like dynamic_dropzone it needs to pass to Scotty. message
            // ExportFileResponse { optional gdata.Media blob = 1; optional apiserving.MediaResponseInfo media_response_info = 2 }
            interface MediaResponseInfo {
                // Data to copy from backend response to the next backend requests. Custom data is returned to Scotty in the agent_state
                // field, which Scotty will then provide in subsequent upload notifications.
                customData?: string;
                // Specifies any transformation to be applied to data before persisting it or retrieving from storage. E.g., encryption
                // options for blobstore2. This should be of the form uploader_service.DataStorageTransform.
                dataStorageTransform?: Byte[];
                // Specifies the Scotty Drop Target to use for uploads. If present in a media response, Scotty does not upload to a
                // standard drop zone. Instead, Scotty saves the upload directly to the location specified in this drop target. Unlike drop
                // zones, the drop target is the final storage location for an upload. So, the agent does not need to clone the blob at the
                // end of the upload. The agent is responsible for garbage collecting any orphaned blobs that may occur due to aborted
                // uploads. For more information, see the drop target design doc here: http://goto/ScottyDropTarget This field will be
                // preferred to dynamicDropzone. If provided, the identified field in the response must be of the type
                // uploader.agent.DropTarget.
                dynamicDropTarget?: Byte[];
                // Specifies the Scotty dropzone to use for uploads.
                dynamicDropzone?: string;
                // Diff Updates must respond to a START notification with this Media proto to tell Scotty to decode the diff encoded
                // payload and apply the diff against this field. If the request was diff encoded, but this field is not set, Scotty will
                // treat the encoding as identity. This is corresponding to Apiary's DiffUploadResponse.original_object
                // (//depot/google3/gdata/rosy/proto/data.proto?l=413). See go/esf-scotty-diff-upload for more information.
                mediaForDiff?: Schema.Media;
                // Request class to use for all Blobstore operations for this request.
                requestClass?: string;
                // Requester ID passed along to be recorded in the Scotty logs
                scottyAgentUserId?: string;
                // Customer-specific data to be recorded in the Scotty logs type is logs_proto_scotty.CustomerLog
                scottyCustomerLog?: Byte[];
                // Specifies the TrafficClass that Scotty should use for any RPCs to fetch the response bytes. Will override the traffic
                // class GTOS of the incoming http request. This is a temporary field to facilitate whitelisting and experimentation by the
                // bigstore agent only. For instance, this does not apply to RTMP reads. WARNING: DO NOT USE WITHOUT PERMISSION FROM THE
                // SCOTTY TEAM.
                trafficClassField?: string;
                // Tells Scotty to verify hashes on the agent's behalf by parsing out the X-Goog-Hash header.
                verifyHashFromHeader?: boolean;
            }
            interface Metadata {
                // A list that identifies actors associated with the asset. You can specify up to 50 actors for an asset.
                actor?: string[];
                // The album on which a sound recording asset is included. This field is only valid for sound recording assets and has a
                // maximum length of 255 bytes.
                album?: string;
                // The artist associated with a music video or sound recording asset. This field is only valid for music video and sound
                // recording assets. It is required for sound recordings included in the AudioSwap program.
                artist?: string[];
                // Identifies the network or channel that originally broadcast a show or a season of a show. This field should only be
                // included for an asset if the broadcaster associated with the asset is different from the partner uploading the asset to
                // YouTube. Note that a show may have multiple broadcasters; for example, a show may switch networks between seasons.
                broadcaster?: string[];
                // Category of this asset.
                category?: string;
                // The type of video content that the asset represents. This field is only valid for movie and episode assets, and is
                // required for the following types of those assets: - Episode assets that are linked to a show - Movie assets that appear
                // in YouTube's Movies category
                contentType?: string;
                // The date copyright for this asset was established. *
                copyrightDate?: Schema.Date;
                // A unique value that you, the metadata provider, use to identify an asset. The value could be a unique ID that you
                // created for the asset or a standard identifier, such as an ISRC. The value has a maximum length of 64 bytes and may
                // contain alphanumeric characters, hyphens (-), underscores (_), periods ( .), "at" symbols (@), or forward slashes (/).
                customId?: string;
                // A description of the asset. The description may be displayed on YouTube or in CMS. This field has a maximum length of
                // 5,000 bytes.
                description?: string;
                // A list that identifies directors associated with the asset. You can specify up to 50 directors for an asset.
                director?: string[];
                // The Entertainment Identifier Registry (EIDR) assigned to an asset. This value is only used for episode and movie assets
                // and is optional in both cases. The value contains a standard prefix for EIDR registry, followed by a forward slash, a
                // 20-character hexadecimal string, and an alphanumeric (0-9A-Z) check character.
                eidr?: string;
                // The last year that a television show aired. This value is only used for show assets, for which it is optional. Do not
                // specify a value if new show episodes are still being created.
                endYear?: Integer;
                // The episode number associated with an episode asset. This field is required for and only used for episode assets that
                // are linked to show assets. It has a maximum length of 5 bytes.
                episodeNumber?: string;
                // This value indicates that the episodes associated with a particular show asset or a particular season asset are
                // untitled. An untitled show (or season) has episodes which are identified by their episode number or date. If this field
                // is set to true, then YouTube will optimize the title displayed for associated episodes.
                episodesAreUntitled?: boolean;
                // This field specifies a genre that can be used to categorize an asset. Assets may be categorized in more than one genre,
                // and YouTube uses different sets of genres to categorize different types of assets. For example, Soaps might be a valid
                // genre for a show but not for a movie or sound recording. - Show assets - Movie assets that appear in YouTube's Movies
                // category - Sound recordings included in the AudioSwap program
                genre?: string[];
                // The GRID (Global Release Identifier) of a music video or sound recording. This field's value must contain exactly 18
                // alphanumeric characters.
                grid?: string;
                // The six-character Harry Fox Agency (HFA) song code issued to uniquely identify a composition. This value is only valid
                // for composition assets.
                hfa?: string;
                // An official URL associated with the asset. This field has a maximum length of 1536 bytes. Please do not submit a
                // 1537-byte URL. Your efforts would be futile.
                infoUrl?: string;
                // The ISAN (International Standard Audiovisual Number) for the asset. This value is only used for episode and movie assets
                // and is optional in both cases. The value contains 26 characters, which includes the 24 hexadecimal characters of the
                // ISAN as well as two check characters, in the following format: - The first 16 characters in the tag value contain
                // hexadecimal characters specifying the 'root' and 'episode' components of the ISAN. - The seventeenth character is a
                // check character (a letter from A-Z). - Characters 18 to 25 are the remaining eight characters of the ISAN, which specify
                // the 'version' component of the ISAN. - The twenty-sixth character is another check character (A-Z).
                isan?: string;
                // The ISRC (International Standard Recording Code) of a music video or sound recording asset. This field's value must
                // contain exactly 12 alphanumeric characters.
                isrc?: string;
                // The ISWC (International Standard Musical Work Code) for a composition asset. The field's value must contain exactly 11
                // characters in the format of a letter (T) followed by 10 digits.
                iswc?: string;
                // A list of up to 100 keywords associated with a show asset. This field is required for and also only used for show
                // assets.
                keyword?: string[];
                // The record label that released a sound recording asset. This field is only valid for sound recording assets and has a
                // maximum length of 255 bytes.
                label?: string;
                // Additional information that does not map directly to one of the other metadata fields. This field has a maximum length
                // of 255 bytes.
                notes?: string;
                // The method by which people first had the opportunity to see a video asset. This value is only used for episode and movie
                // assets. It is required for the assets listed below and otherwise optional: - Episode assets that are linked to a show -
                // Movie assets that appear in YouTube's Movies category
                originalReleaseMedium?: string;
                // A list that identifies producers of the asset. You can specify up to 50 producers for an asset.
                producer?: string[];
                // A list of ratings that an asset received. The rating must be valid under the specified rating system.
                ratings?: Schema.Rating[];
                // The date that an asset was publicly released. For season assets, this value specifies the first date that the season
                // aired. Dates prior to the year 1902 are not supported. This value is valid for episode, season, movie, music video, and
                // sound recording assets. It is required for the assets listed below and otherwise optional: - Episode assets that are
                // linked to a show - Movie assets that appear in YouTube's Movies category
                releaseDate?: Schema.Date;
                // The season number that identifies a season asset, or the season number that is associated with an episode asset. This
                // field has a maximum length of 5 bytes.
                seasonNumber?: string;
                // The customId of the show asset that a season or episode asset is associated with. It is required for season and episode
                // assets that appear in the Shows category on YouTube, and it is not valid for other types of assets. This field has a
                // maximum length of 64 bytes and may contain alphanumeric characters, hyphens (-), underscores (_), periods (.), "at"
                // symbols (@), or forward slashes (/).
                showCustomId?: string;
                // The name of the show that an episode asset is associated with. *Note:* This tag is only used for and valid for episodes
                // that are not associated with show assets and enables those assets to still display a show title in the asset metadata
                // section of CMS. This field has a maximum length of 120 bytes.
                showTitle?: string;
                // The video's primary spoken language. The value can be any ISO 639-1 two-letter language code. This value is only used
                // for episode and movie assets and is not valid for other types of assets.
                spokenLanguage?: string;
                // The first year that a television show aired. This value is required for and also only used for show assets.
                startYear?: Integer;
                // A list of languages for which the video has either a separate caption track or burnt-in captions that are part of the
                // video. Each value in the list should be an ISO 639-1 two-letter language code. This value is only used for episode and
                // movie assets and is not valid for other types of assets.
                subtitledLanguage?: string[];
                // The asset's title or name. The value has a maximum length of 255 bytes. This value is required for the assets listed
                // below and optional for all other assets: - Show assets - Episode assets that are linked to a show - Movie assets that
                // appear in YouTube's Movies category - Sound recordings included in the AudioSwap program
                title?: string;
                // TMS (Tribune Media Systems) ID for the asset.
                tmsId?: string;
                // Specifies the total number of full-length episodes in the season. This value is used only for season assets.
                totalEpisodesExpected?: Integer;
                // The UPC (Universal Product Code) associated with the asset.
                upc?: string;
                // A list that identifies writers associated with the asset. You can specify up to 50 writers for an asset.
                writer?: string[];
            }
            interface MetadataHistory {
                // The type of the API resource. For metadata history resources, the value is youtubePartner#metadataHistory.
                kind?: string;
                // The metadata object contains the metadata provided by the specified source ( origination) at the specified time
                // (timeProvided).
                metadata?: Schema.Metadata;
                // The origination object contains information that describes the metadata source.
                origination?: Schema.Origination;
                // The time the metadata was provided.
                timeProvided?: string;
            }
            interface MetadataHistoryListResponse {
                // A list of metadata history (youtubePartner#metadataHistory) resources that match the request criteria.
                items?: Schema.MetadataHistory[];
                // The type of the API response. For this operation, the value is youtubePartner#metadataHistoryList.
                kind?: string;
            }
            // This is a copy of the tech.blob.ObjectId proto, which could not be used directly here due to transitive closure issues
            // with JavaScript support; see http://b/8801763.
            interface ObjectId {
                // The name of the bucket to which this object belongs.
                bucketName?: string;
                // Generation of the object. Generations are monotonically increasing across writes, allowing them to be be compared to
                // determine which generation is newer. If this is omitted in a request, then you are requesting the live object. See
                // http://go/bigstore-versions
                generation?: string;
                // The name of the object.
                objectName?: string;
            }
            interface Origin {
                source?: string;
            }
            interface Origination {
                // The content owner who provided the metadata or ownership information.
                owner?: string;
                // The mechanism by which the piece of metadata, ownership or relationship information was provided.
                source?: string;
            }
            interface OwnershipConflicts {
                // A list that identifies ownership conflicts of an asset and the territories where conflicting ownership is inserted.
                general?: Schema.TerritoryConflicts[];
                // The type of the API resource. For ownershipConflicts resources, the value is youtubePartner#ownershipConflicts.
                kind?: string;
                // A list that identifies ownership conflicts of the mechanical rights for a composition asset and the territories where
                // conflicting ownership is inserted.
                mechanical?: Schema.TerritoryConflicts[];
                // A list that identifies ownership conflicts of the performance rights for a composition asset and the territories where
                // conflicting ownership is inserted.
                performance?: Schema.TerritoryConflicts[];
                // A list that identifies ownership conflicts of the synchronization rights for a composition asset and the territories
                // where conflicting ownership is inserted.
                synchronization?: Schema.TerritoryConflicts[];
            }
            interface OwnershipHistoryListResponse {
                // A list of ownership history (youtubePartner#ownershipHistory) resources that match the request criteria.
                items?: Schema.RightsOwnershipHistory[];
                // The type of the API response. For this operation, the value is youtubePartner#ownershipHistoryList.
                kind?: string;
            }
            interface Package {
                // The package's metadata file contents.
                content?: string;
                // The list of customer IDs.
                customIds?: string[];
                // An ID that YouTube assigns and uses to uniquely identify the package.
                id?: string;
                // The type of the API resource. For package resources, this value is youtubePartner#package.
                kind?: string;
                // The desired locale of the error messages as defined in BCP 47 (http: //tools.ietf.org/html/bcp47). For example, "en-US"
                // or "de". If not // specified we will return the error messages in English ("en").
                locale?: string;
                // The package name.
                name?: string;
                // The package status.
                status?: string;
                // The package status reports.
                statusReports?: Schema.StatusReport[];
                // The package creation time. The value is specified in RFC 3339 ( YYYY-MM-DDThh:mm:ss.000Z) format.
                timeCreated?: string;
                // The package type.
                type?: string;
                // The uploader name.
                uploaderName?: string;
            }
            interface PackageInsertResponse {
                // The list of errors and/or warnings.
                errors?: Schema.ValidateError[];
                // The type of the API response. For this operation, the value is youtubePartner#packageInsert.
                kind?: string;
                // The package resource.
                resource?: Schema.Package;
                // The package insert status. Indicates whether the insert operation completed successfully or identifies the general cause
                // of failure. For most cases where the insert operation failed, the errors are described in the API response's errors
                // object. However, if the operation failed because the package contained non-metadata files, the errors object is not
                // included in the response.
                status?: string;
            }
            interface PageInfo {
                // The number of results included in the API response.
                resultsPerPage?: Integer;
                // The index of the first item in the API response.
                startIndex?: Integer;
                // The total number of results in the result set.
                totalResults?: Integer;
            }
            interface Policy {
                // The policy's description.
                description?: string;
                // A value that YouTube assigns and uses to uniquely identify the policy.
                id?: string;
                // Identifies this as a policy. Value: "youtubePartner#policy"
                kind?: string;
                // The policy's name.
                name?: string;
                // A list of rules that specify the action that YouTube should take and may optionally specify the conditions under which
                // that action is enforced.
                rules?: Schema.PolicyRule[];
                // The time the policy was updated.
                timeUpdated?: string;
            }
            interface PolicyList {
                // A list of saved policies.
                items?: Schema.Policy[];
                // The type of the API response. For this operation, the value is youtubePartner#policyList.
                kind?: string;
            }
            interface PolicyRule {
                // The policy that YouTube should enforce if the rule's conditions are all valid for an asset or for an attempt to view
                // that asset on YouTube.
                action?: string;
                // A set of conditions that must be met for the rule's action (and subactions) to be enforced. For a rule to be valid, all
                // of its conditions must be met.
                conditions?: Schema.Conditions;
                // A list of additional actions that YouTube should take if the conditions in the rule are met.
                subaction?: string[];
            }
            interface PromotedContent {
                // A list of link targets that will be used to generate the annotation link that appears on videos included in the
                // campaign. If more than one link is specified, the link that is displayed to viewers will be randomly selected from the
                // list.
                link?: Schema.CampaignTargetLink[];
            }
            interface Rating {
                // The rating that the asset received.
                rating?: string;
                // The rating system associated with the rating.
                ratingSystem?: string;
            }
            interface Reference {
                // The ID that uniquely identifies the asset that the reference is associated with.
                assetId?: string;
                // Set this field's value to true to indicate that the reference content should be included in YouTube's AudioSwap program.
                audioswapEnabled?: boolean;
                // This field is present if the reference was created by associating an asset with an existing YouTube video that was
                // uploaded to a YouTube channel linked to your CMS account. In that case, this field contains the ID of the claim
                // representing the resulting association between the asset and the video.
                claimId?: string;
                // The type of content that the reference represents.
                contentType?: string;
                // The ID that uniquely identifies the reference that this reference duplicates. This field is only present if the
                // reference's status is inactive with reason REASON_DUPLICATE_FOR_OWNERS.
                duplicateLeader?: string;
                // The list of time intervals from this reference that will be ignored during the match process.
                excludedIntervals?: Schema.ExcludedInterval[];
                // When uploading a reference, set this value to true to indicate that the reference is a pre-generated fingerprint.
                fpDirect?: boolean;
                gdataMedia?: Schema.Media;
                // The MD5 hashcode of the reference content. Deprecated! This is no longer populated.
                hashCode?: string;
                // A value that YouTube assigns and uses to uniquely identify a reference.
                id?: string;
                // Set this value to true to indicate that the reference should not be used to generate claims. This field is only used on
                // AudioSwap references.
                ignoreFpMatch?: boolean;
                // The type of the API resource. For reference resources, the value is youtubePartner#reference.
                kind?: string;
                // The length of the reference in seconds.
                length?: number;
                // Manually added fields for Scotty media upload support on OnePlatform.
                mediaRequestInfo?: Schema.MediaRequestInfo;
                mediaResponseInfo?: Schema.MediaResponseInfo;
                // The origination object contains information that describes the reference source.
                origination?: Schema.Origination;
                // The reference's status.
                status?: string;
                // An explanation of how a reference entered its current state. This value is only present if the reference's status is
                // either inactive or deleted.
                statusReason?: string;
                // Set this value to true to indicate that YouTube should prioritize Content ID processing for a video file. YouTube
                // processes urgent video files before other files that are not marked as urgent. This setting is primarily used for videos
                // of live events or other videos that require time-sensitive processing. The sooner YouTube completes Content ID
                // processing for a video, the sooner YouTube can match user-uploaded videos to that video. Note that marking all of your
                // files as urgent could delay processing for those files.
                urgent?: boolean;
                // This field is present if the reference was created by associating an asset with an existing YouTube video that was
                // uploaded to a YouTube channel linked to your CMS account. In that case, this field contains the ID of the source video.
                videoId?: string;
            }
            interface ReferenceConflict {
                // An id of a conflicting reference.
                conflictingReferenceId?: string;
                // Conflict review expiry time.
                expiryTime?: string;
                // A value that YouTube assigns and uses to uniquely identify a reference conflict.
                id?: string;
                // The type of the API resource. For referenceConflict resources, the value is youtubePartner#referenceConflict.
                kind?: string;
                // The list of matches between conflicting and original references at the time of conflict creation.
                matches?: Schema.ReferenceConflictMatch[];
                // An id of an original reference.
                originalReferenceId?: string;
                // The referenceConflict's status.
                status?: string;
            }
            interface ReferenceConflictListResponse {
                // A list of reference conflicts that match the request criteria.
                items?: Schema.ReferenceConflict[];
                // The type of the API response. For this operation, the value is youtubePartner#referenceConflictList.
                kind?: string;
                // The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
                nextPageToken?: string;
                // The pageInfo object encapsulates paging information for the result set.
                pageInfo?: Schema.PageInfo;
            }
            interface ReferenceConflictMatch {
                // Conflicting reference offset in milliseconds.
                conflicting_reference_offset_ms?: string;
                // Match length in milliseconds.
                length_ms?: string;
                // Original reference offset in milliseconds.
                original_reference_offset_ms?: string;
                // The referenceConflictMatch's type.
                type?: string;
            }
            interface ReferenceListResponse {
                // A list of references that match the request criteria.
                items?: Schema.Reference[];
                // The type of the API response. For this operation, the value is youtubePartner#referenceList.
                kind?: string;
                // The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
                nextPageToken?: string;
                // The pageInfo object encapsulates paging information for the result set.
                pageInfo?: Schema.PageInfo;
            }
            interface RightsOwnership {
                // A list that identifies the owners of an asset and the territories where each owner has ownership. General asset
                // ownership is used for all types of assets and is the only type of ownership data that can be provided for assets that
                // are not compositions. *Note:* You cannot specify general ownership rights and also specify either mechanical,
                // performance, or synchronization rights.
                general?: Schema.TerritoryOwners[];
                // The type of the API resource. For rightsOwnership resources, the value is youtubePartner#rightsOwnership.
                kind?: string;
                // A list that identifies owners of the mechanical rights for a composition asset.
                mechanical?: Schema.TerritoryOwners[];
                // A list that identifies owners of the performance rights for a composition asset.
                performance?: Schema.TerritoryOwners[];
                // A list that identifies owners of the synchronization rights for a composition asset.
                synchronization?: Schema.TerritoryOwners[];
            }
            interface RightsOwnershipHistory {
                // The type of the API resource. For ownership history resources, the value is youtubePartner#rightsOwnershipHistory.
                kind?: string;
                // The origination object contains information that describes the metadata source.
                origination?: Schema.Origination;
                // The ownership object contains the ownership data provided by the specified source (origination) at the specified time
                // (timeProvided).
                ownership?: Schema.RightsOwnership;
                // The time that the ownership data was provided.
                timeProvided?: string;
            }
            interface Segment {
                // The duration of the segment in milliseconds.
                duration?: string;
                // The type of the API resource. For segment resources, the value is youtubePartner#segment.
                kind?: string;
                // The start time of the segment, measured in milliseconds from the beginning.
                start?: string;
            }
            interface Segment2 {
                // The finish time of the segment, measured in milliseconds from the beginning.
                finish?: string;
                // The type of the API resource. For segment resources, the value is youtubePartner#segment.
                kind?: string;
                // The start time of the segment, measured in milliseconds from the beginning.
                start?: string;
            }
            interface Source {
                // Id of content owner that initiated the event.
                contentOwnerId?: string;
                // Type of the event source.
                type?: string;
                // Email of user who initiated the event.
                userEmail?: string;
            }
            interface SpreadsheetTemplate {
                // The type of the API resource. For spreadsheet template resources, the value is youtubePartner#spreadsheetTemplate.
                kind?: string;
                // The template status.
                status?: string;
                // The template content.
                templateContent?: string;
                // The template name.
                templateName?: string;
                // The template type.
                templateType?: string;
            }
            interface SpreadsheetTemplateListResponse {
                // A list of spreadsheet templates (youtubePartner#spreadsheetTemplate) resources that match the request criteria.
                items?: Schema.SpreadsheetTemplate[];
                // The type of the API response. For this operation, the value is youtubePartner#spreadsheetTemplateList.
                kind?: string;
                // The status of the API response.
                status?: string;
            }
            interface StatusReport {
                // The content of the report message. Used only in Hybrid.
                statusContent?: string;
                // Status file name. Used only in Hybrid.
                statusFileName?: string;
            }
            interface TerritoryCondition {
                // A list of territories. Each territory is an ISO 3166 two-letter country code..
                territories?: string[];
                // This field indicates whether the associated policy rule is or is not valid in the specified territories.
                type?: string;
            }
            interface TerritoryConflicts {
                // A list of conflicting ownerships.
                conflictingOwnership?: Schema.ConflictingOwnership[];
                // A territories where the ownership conflict is present. Territory is an ISO 3166 two-letter country code..
                territory?: string;
            }
            interface TerritoryOwners {
                // The name of the asset's owner or rights administrator.
                owner?: string;
                // The name of the asset's publisher. This field is only used for composition assets, and it is used when the asset owner
                // is not known to have a formal relationship established with YouTube.
                publisher?: string;
                // The percentage of the asset that the owner controls or administers. For composition assets, the value can be any value
                // between 0 and 100 inclusive. For all other assets, the only valid values are 100, which indicates that the owner
                // completely owns the asset in the specified territories, and 0, which indicates that you are removing ownership of the
                // asset in the specified territories.
                ratio?: number;
                // A list of territories where the owner owns (or does not own) the asset. Each territory is an ISO 3166 two-letter country
                // code..
                territories?: string[];
                // This field indicates whether the ownership data applies or does not apply in the specified territories.
                type?: string;
            }
            interface TotalMatch {
                // The total amount of content in the reference which matched the user video in seconds.
                referenceDurationSecs?: string;
                // The total amount of content in the user video which matched the reference in seconds.
                userVideoDurationSecs?: string;
            }
            interface TypeDetails {
                // Appeal explanations for dispute_appeal event.
                appealExplanation?: string;
                // Dispute notes for dispute_create events.
                disputeNotes?: string;
                // Dispute reason for dispute_create and dispute_appeal events.
                disputeReason?: string;
                // Status that was a result of update for claim_update event.
                updateStatus?: string;
            }
            interface Uploader {
                // The type of the API resource. For uploader resources, the value is youtubePartner#uploader.
                kind?: string;
                // The uploader name.
                uploaderName?: string;
            }
            interface UploaderListResponse {
                // A list of uploader (youtubePartner#uploader) resources that match the request criteria.
                items?: Schema.Uploader[];
                // The type of the API response. For this operation, the value is youtubePartner#uploaderList.
                kind?: string;
            }
            interface ValidateAsyncRequest {
                // The metadata file contents.
                content?: string;
                // The type of the API resource. For this operation, the value is youtubePartner#validateAsyncRequest.
                kind?: string;
                // The uploader name.
                uploaderName?: string;
            }
            interface ValidateAsyncResponse {
                // The type of the API resource. For this operation, the value is youtubePartner#validateAsyncResponse.
                kind?: string;
                // The validation status.
                status?: string;
                // The validation ID.
                validationId?: string;
            }
            interface ValidateError {
                // The column name where the error occurred.
                columnName?: string;
                // The column number where the error occurred (1-based).
                columnNumber?: Integer;
                // The line number where the error occurred (1-based).
                lineNumber?: Integer;
                // The error message.
                message?: string;
                // The code for the error message (if one exists).
                messageCode?: Integer;
                // The error severity.
                severity?: string;
            }
            interface ValidateRequest {
                // The metadata file contents.
                content?: string;
                // The type of the API resource. For this operation, the value is youtubePartner#validateRequest.
                kind?: string;
                // The desired locale of the error messages as defined in BCP 47 (http: //tools.ietf.org/html/bcp47). For example, "en-US"
                // or "de". If not // specified we will return the error messages in English ("en").
                locale?: string;
                // The uploader name.
                uploaderName?: string;
            }
            interface ValidateResponse {
                // The list of errors and/or warnings.
                errors?: Schema.ValidateError[];
                // The type of the API resource. For this operation, the value is youtubePartner#validateResponse.
                kind?: string;
                // The validation status.
                status?: string;
            }
            interface ValidateStatusRequest {
                // The type of the API resource. For this operation, the value is youtubePartner#validateStatusRequest.
                kind?: string;
                // The desired locale of the error messages as defined in BCP 47 (http: //tools.ietf.org/html/bcp47). For example, "en-US"
                // or "de". If not // specified we will return the error messages in English ("en").
                locale?: string;
                // The validation ID.
                validationId?: string;
            }
            interface ValidateStatusResponse {
                // The list of errors and/or warnings.
                errors?: Schema.ValidateError[];
                // If this is a metadata-only package.
                isMetadataOnly?: boolean;
                // The type of the API resource. For this operation, the value is youtubePartner#validateStatusResponse.
                kind?: string;
                // The validation status.
                status?: string;
            }
            interface VideoAdvertisingOption {
                // A list of times when YouTube can show an in-stream advertisement during playback of the video.
                adBreaks?: Schema.AdBreak[];
                // A list of ad formats that the video is allowed to show.
                adFormats?: string[];
                // Enables this video for automatically generated midroll breaks.
                autoGeneratedBreaks?: boolean;
                // The point at which the break occurs during the video playback.
                breakPosition?: string[];
                // The ID that YouTube uses to uniquely identify the video associated with the advertising settings.
                id?: string;
                // The type of the API resource. For this resource, the value is youtubePartner#videoAdvertisingOption.
                kind?: string;
                // A value that uniquely identifies the video to the third-party ad server.
                tpAdServerVideoId?: string;
                // The base URL for a third-party ad server from which YouTube can retrieve in-stream ads for the video.
                tpTargetingUrl?: string;
                // A parameter string to append to the end of the request to the third-party ad server.
                tpUrlParameters?: string;
            }
            interface VideoAdvertisingOptionGetEnabledAdsResponse {
                // A list of ad breaks that occur in a claimed YouTube video.
                adBreaks?: Schema.AdBreak[];
                // This field indicates whether YouTube can show ads when the video is played in an embedded player.
                adsOnEmbeds?: boolean;
                // A list that identifies the countries where ads can run and the types of ads allowed in those countries.
                countriesRestriction?: Schema.CountriesRestriction[];
                // The ID that YouTube uses to uniquely identify the claimed video.
                id?: string;
                // The type of the API resource. For this resource, the value is youtubePartner#videoAdvertisingOptionGetEnabledAds.
                kind?: string;
            }
            interface Whitelist {
                // The YouTube channel ID that uniquely identifies the whitelisted channel.
                id?: string;
                // The type of the API resource. For whitelist resources, this value is youtubePartner#whitelist.
                kind?: string;
                // Title of the whitelisted YouTube channel.
                title?: string;
            }
            interface WhitelistListResponse {
                // A list of whitelist resources that match the request criteria.
                items?: Schema.Whitelist[];
                // The type of the API response. For this operation, the value is youtubePartner#whitelistList.
                kind?: string;
                // The token that can be used as the value of the pageToken parameter to retrieve the next page of results.
                nextPageToken?: string;
                // The pageInfo object encapsulates paging information for the result set.
                pageInfo?: Schema.PageInfo;
            }
            interface YoutubePartnerApiProtoFrontendV1Origin {
                source?: string;
            }
        }
    }
    // The YouTube Content ID API allows the management of YouTube assets along with their associated content, references,
    // ownership, rights and policies.
    interface YouTubeContentId {
        AssetLabels?: YouTubeContentId.Collection.AssetLabelsCollection;
        AssetMatchPolicy?: YouTubeContentId.Collection.AssetMatchPolicyCollection;
        AssetRelationships?: YouTubeContentId.Collection.AssetRelationshipsCollection;
        AssetSearch?: YouTubeContentId.Collection.AssetSearchCollection;
        AssetShares?: YouTubeContentId.Collection.AssetSharesCollection;
        Assets?: YouTubeContentId.Collection.AssetsCollection;
        Campaigns?: YouTubeContentId.Collection.CampaignsCollection;
        ClaimHistory?: YouTubeContentId.Collection.ClaimHistoryCollection;
        ClaimSearch?: YouTubeContentId.Collection.ClaimSearchCollection;
        Claims?: YouTubeContentId.Collection.ClaimsCollection;
        ContentOwners?: YouTubeContentId.Collection.ContentOwnersCollection;
        LiveCuepoints?: YouTubeContentId.Collection.LiveCuepointsCollection;
        MetadataHistory?: YouTubeContentId.Collection.MetadataHistoryCollection;
        Ownership?: YouTubeContentId.Collection.OwnershipCollection;
        OwnershipHistory?: YouTubeContentId.Collection.OwnershipHistoryCollection;
        Package?: YouTubeContentId.Collection.PackageCollection;
        Policies?: YouTubeContentId.Collection.PoliciesCollection;
        ReferenceConflicts?: YouTubeContentId.Collection.ReferenceConflictsCollection;
        References?: YouTubeContentId.Collection.ReferencesCollection;
        SpreadsheetTemplate?: YouTubeContentId.Collection.SpreadsheetTemplateCollection;
        Uploader?: YouTubeContentId.Collection.UploaderCollection;
        Validator?: YouTubeContentId.Collection.ValidatorCollection;
        VideoAdvertisingOptions?: YouTubeContentId.Collection.VideoAdvertisingOptionsCollection;
        Whitelists?: YouTubeContentId.Collection.WhitelistsCollection;
        // Create a new instance of AdBreak
        newAdBreak(): YouTubeContentId.Schema.AdBreak;
        // Create a new instance of Asset
        newAsset(): YouTubeContentId.Schema.Asset;
        // Create a new instance of AssetLabel
        newAssetLabel(): YouTubeContentId.Schema.AssetLabel;
        // Create a new instance of AssetMatchPolicy
        newAssetMatchPolicy(): YouTubeContentId.Schema.AssetMatchPolicy;
        // Create a new instance of AssetRelationship
        newAssetRelationship(): YouTubeContentId.Schema.AssetRelationship;
        // Create a new instance of Blobstore2Info
        newBlobstore2Info(): YouTubeContentId.Schema.Blobstore2Info;
        // Create a new instance of Campaign
        newCampaign(): YouTubeContentId.Schema.Campaign;
        // Create a new instance of CampaignData
        newCampaignData(): YouTubeContentId.Schema.CampaignData;
        // Create a new instance of CampaignSource
        newCampaignSource(): YouTubeContentId.Schema.CampaignSource;
        // Create a new instance of CampaignTargetLink
        newCampaignTargetLink(): YouTubeContentId.Schema.CampaignTargetLink;
        // Create a new instance of Claim
        newClaim(): YouTubeContentId.Schema.Claim;
        // Create a new instance of CompositeMedia
        newCompositeMedia(): YouTubeContentId.Schema.CompositeMedia;
        // Create a new instance of Conditions
        newConditions(): YouTubeContentId.Schema.Conditions;
        // Create a new instance of ConflictingOwnership
        newConflictingOwnership(): YouTubeContentId.Schema.ConflictingOwnership;
        // Create a new instance of ContentTypeInfo
        newContentTypeInfo(): YouTubeContentId.Schema.ContentTypeInfo;
        // Create a new instance of CuepointSettings
        newCuepointSettings(): YouTubeContentId.Schema.CuepointSettings;
        // Create a new instance of Date
        newDate(): YouTubeContentId.Schema.Date;
        // Create a new instance of DiffChecksumsResponse
        newDiffChecksumsResponse(): YouTubeContentId.Schema.DiffChecksumsResponse;
        // Create a new instance of DiffDownloadResponse
        newDiffDownloadResponse(): YouTubeContentId.Schema.DiffDownloadResponse;
        // Create a new instance of DiffUploadRequest
        newDiffUploadRequest(): YouTubeContentId.Schema.DiffUploadRequest;
        // Create a new instance of DiffUploadResponse
        newDiffUploadResponse(): YouTubeContentId.Schema.DiffUploadResponse;
        // Create a new instance of DiffVersionResponse
        newDiffVersionResponse(): YouTubeContentId.Schema.DiffVersionResponse;
        // Create a new instance of DownloadParameters
        newDownloadParameters(): YouTubeContentId.Schema.DownloadParameters;
        // Create a new instance of ExcludedInterval
        newExcludedInterval(): YouTubeContentId.Schema.ExcludedInterval;
        // Create a new instance of IntervalCondition
        newIntervalCondition(): YouTubeContentId.Schema.IntervalCondition;
        // Create a new instance of LiveCuepoint
        newLiveCuepoint(): YouTubeContentId.Schema.LiveCuepoint;
        // Create a new instance of LongestMatch
        newLongestMatch(): YouTubeContentId.Schema.LongestMatch;
        // Create a new instance of MatchInfo
        newMatchInfo(): YouTubeContentId.Schema.MatchInfo;
        // Create a new instance of MatchSegment
        newMatchSegment(): YouTubeContentId.Schema.MatchSegment;
        // Create a new instance of Media
        newMedia(): YouTubeContentId.Schema.Media;
        // Create a new instance of MediaRequestInfo
        newMediaRequestInfo(): YouTubeContentId.Schema.MediaRequestInfo;
        // Create a new instance of MediaResponseInfo
        newMediaResponseInfo(): YouTubeContentId.Schema.MediaResponseInfo;
        // Create a new instance of Metadata
        newMetadata(): YouTubeContentId.Schema.Metadata;
        // Create a new instance of ObjectId
        newObjectId(): YouTubeContentId.Schema.ObjectId;
        // Create a new instance of Origin
        newOrigin(): YouTubeContentId.Schema.Origin;
        // Create a new instance of Origination
        newOrigination(): YouTubeContentId.Schema.Origination;
        // Create a new instance of OwnershipConflicts
        newOwnershipConflicts(): YouTubeContentId.Schema.OwnershipConflicts;
        // Create a new instance of Package
        newPackage(): YouTubeContentId.Schema.Package;
        // Create a new instance of Policy
        newPolicy(): YouTubeContentId.Schema.Policy;
        // Create a new instance of PolicyRule
        newPolicyRule(): YouTubeContentId.Schema.PolicyRule;
        // Create a new instance of PromotedContent
        newPromotedContent(): YouTubeContentId.Schema.PromotedContent;
        // Create a new instance of Rating
        newRating(): YouTubeContentId.Schema.Rating;
        // Create a new instance of Reference
        newReference(): YouTubeContentId.Schema.Reference;
        // Create a new instance of RightsOwnership
        newRightsOwnership(): YouTubeContentId.Schema.RightsOwnership;
        // Create a new instance of Segment
        newSegment(): YouTubeContentId.Schema.Segment;
        // Create a new instance of Segment2
        newSegment2(): YouTubeContentId.Schema.Segment2;
        // Create a new instance of StatusReport
        newStatusReport(): YouTubeContentId.Schema.StatusReport;
        // Create a new instance of TerritoryCondition
        newTerritoryCondition(): YouTubeContentId.Schema.TerritoryCondition;
        // Create a new instance of TerritoryConflicts
        newTerritoryConflicts(): YouTubeContentId.Schema.TerritoryConflicts;
        // Create a new instance of TerritoryOwners
        newTerritoryOwners(): YouTubeContentId.Schema.TerritoryOwners;
        // Create a new instance of TotalMatch
        newTotalMatch(): YouTubeContentId.Schema.TotalMatch;
        // Create a new instance of ValidateAsyncRequest
        newValidateAsyncRequest(): YouTubeContentId.Schema.ValidateAsyncRequest;
        // Create a new instance of ValidateRequest
        newValidateRequest(): YouTubeContentId.Schema.ValidateRequest;
        // Create a new instance of ValidateStatusRequest
        newValidateStatusRequest(): YouTubeContentId.Schema.ValidateStatusRequest;
        // Create a new instance of VideoAdvertisingOption
        newVideoAdvertisingOption(): YouTubeContentId.Schema.VideoAdvertisingOption;
        // Create a new instance of Whitelist
        newWhitelist(): YouTubeContentId.Schema.Whitelist;
    }
}
declare const YouTubeContentId: GoogleAppsScript.YouTubeContentId;
