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
                patch(
                    resource: Schema.AssetMatchPolicy,
                    assetId: string,
                    optionalArgs: object,
                ): YoutubePartner.Schema.AssetMatchPolicy;
                // Updates the asset's match policy. If an asset has multiple owners, each owner may set its own match policy for the asset. YouTube then computes the match policy that is actually applied for the asset based on the territories where each owner owns the asset.
                update(resource: Schema.AssetMatchPolicy, assetId: string): YoutubePartner.Schema.AssetMatchPolicy;
                // Updates the asset's match policy. If an asset has multiple owners, each owner may set its own match policy for the asset. YouTube then computes the match policy that is actually applied for the asset based on the territories where each owner owns the asset.
                update(
                    resource: Schema.AssetMatchPolicy,
                    assetId: string,
                    optionalArgs: object,
                ): YoutubePartner.Schema.AssetMatchPolicy;
            }
            interface AssetRelationshipsCollection {
                // Creates a relationship that links two assets.
                insert(resource: Schema.AssetRelationship): YoutubePartner.Schema.AssetRelationship;
                // Creates a relationship that links two assets.
                insert(
                    resource: Schema.AssetRelationship,
                    optionalArgs: object,
                ): YoutubePartner.Schema.AssetRelationship;
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
                patch(
                    resource: Schema.Campaign,
                    campaignId: string,
                    optionalArgs: object,
                ): YoutubePartner.Schema.Campaign;
                // Deletes a specified campaign for an owner.
                remove(campaignId: string): void;
                // Deletes a specified campaign for an owner.
                remove(campaignId: string, optionalArgs: object): void;
                // Update the data for a specific campaign.
                update(resource: Schema.Campaign, campaignId: string): YoutubePartner.Schema.Campaign;
                // Update the data for a specific campaign.
                update(
                    resource: Schema.Campaign,
                    campaignId: string,
                    optionalArgs: object,
                ): YoutubePartner.Schema.Campaign;
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
                patch(
                    resource: Schema.ContentOwnerAdvertisingOption,
                ): YoutubePartner.Schema.ContentOwnerAdvertisingOption;
                // Updates advertising options for the content owner associated with the authenticated API user. This method supports patch semantics.
                patch(
                    resource: Schema.ContentOwnerAdvertisingOption,
                    optionalArgs: object,
                ): YoutubePartner.Schema.ContentOwnerAdvertisingOption;
                // Updates advertising options for the content owner associated with the authenticated API user.
                update(
                    resource: Schema.ContentOwnerAdvertisingOption,
                ): YoutubePartner.Schema.ContentOwnerAdvertisingOption;
                // Updates advertising options for the content owner associated with the authenticated API user.
                update(
                    resource: Schema.ContentOwnerAdvertisingOption,
                    optionalArgs: object,
                ): YoutubePartner.Schema.ContentOwnerAdvertisingOption;
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
                insert(
                    resource: Schema.LiveCuepoint,
                    channelId: string,
                    optionalArgs: object,
                ): YoutubePartner.Schema.LiveCuepoint;
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
                patch(
                    resource: Schema.RightsOwnership,
                    assetId: string,
                    optionalArgs: object,
                ): YoutubePartner.Schema.RightsOwnership;
                // Provides new ownership information for the specified asset. Note that YouTube may receive ownership information from multiple sources. For example, if an asset has multiple owners, each owner might send ownership data for the asset. YouTube algorithmically combines the ownership data received from all of those sources to generate the asset's canonical ownership data, which should provide the most comprehensive and accurate representation of the asset's ownership.
                update(resource: Schema.RightsOwnership, assetId: string): YoutubePartner.Schema.RightsOwnership;
                // Provides new ownership information for the specified asset. Note that YouTube may receive ownership information from multiple sources. For example, if an asset has multiple owners, each owner might send ownership data for the asset. YouTube algorithmically combines the ownership data received from all of those sources to generate the asset's canonical ownership data, which should provide the most comprehensive and accurate representation of the asset's ownership.
                update(
                    resource: Schema.RightsOwnership,
                    assetId: string,
                    optionalArgs: object,
                ): YoutubePartner.Schema.RightsOwnership;
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
                insert(
                    resource: Schema.Reference,
                    mediaData: any,
                    optionalArgs: object,
                ): YoutubePartner.Schema.Reference;
                // Retrieves a list of references by ID or the list of references for the specified asset.
                list(): YoutubePartner.Schema.ReferenceListResponse;
                // Retrieves a list of references by ID or the list of references for the specified asset.
                list(optionalArgs: object): YoutubePartner.Schema.ReferenceListResponse;
                // Updates a reference. This method supports patch semantics.
                patch(resource: Schema.Reference, referenceId: string): YoutubePartner.Schema.Reference;
                // Updates a reference. This method supports patch semantics.
                patch(
                    resource: Schema.Reference,
                    referenceId: string,
                    optionalArgs: object,
                ): YoutubePartner.Schema.Reference;
                // Updates a reference.
                update(resource: Schema.Reference, referenceId: string): YoutubePartner.Schema.Reference;
                // Updates a reference.
                update(
                    resource: Schema.Reference,
                    referenceId: string,
                    optionalArgs: object,
                ): YoutubePartner.Schema.Reference;
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
                validate(
                    resource: Schema.ValidateRequest,
                    optionalArgs: object,
                ): YoutubePartner.Schema.ValidateResponse;
                // Validate a metadata file asynchronously.
                validateAsync(resource: Schema.ValidateAsyncRequest): YoutubePartner.Schema.ValidateAsyncResponse;
                // Validate a metadata file asynchronously.
                validateAsync(
                    resource: Schema.ValidateAsyncRequest,
                    optionalArgs: object,
                ): YoutubePartner.Schema.ValidateAsyncResponse;
                // Get the asynchronous validation status.
                validateAsyncStatus(
                    resource: Schema.ValidateStatusRequest,
                ): YoutubePartner.Schema.ValidateStatusResponse;
                // Get the asynchronous validation status.
                validateAsyncStatus(
                    resource: Schema.ValidateStatusRequest,
                    optionalArgs: object,
                ): YoutubePartner.Schema.ValidateStatusResponse;
            }
            interface VideoAdvertisingOptionsCollection {
                // Retrieves advertising settings for the specified video.
                get(videoId: string): YoutubePartner.Schema.VideoAdvertisingOption;
                // Retrieves advertising settings for the specified video.
                get(videoId: string, optionalArgs: object): YoutubePartner.Schema.VideoAdvertisingOption;
                // Retrieves details about the types of allowed ads for a specified partner- or user-uploaded video.
                getEnabledAds(videoId: string): YoutubePartner.Schema.VideoAdvertisingOptionGetEnabledAdsResponse;
                // Retrieves details about the types of allowed ads for a specified partner- or user-uploaded video.
                getEnabledAds(
                    videoId: string,
                    optionalArgs: object,
                ): YoutubePartner.Schema.VideoAdvertisingOptionGetEnabledAdsResponse;
                // Updates the advertising settings for the specified video. This method supports patch semantics.
                patch(
                    resource: Schema.VideoAdvertisingOption,
                    videoId: string,
                ): YoutubePartner.Schema.VideoAdvertisingOption;
                // Updates the advertising settings for the specified video. This method supports patch semantics.
                patch(
                    resource: Schema.VideoAdvertisingOption,
                    videoId: string,
                    optionalArgs: object,
                ): YoutubePartner.Schema.VideoAdvertisingOption;
                // Updates the advertising settings for the specified video.
                update(
                    resource: Schema.VideoAdvertisingOption,
                    videoId: string,
                ): YoutubePartner.Schema.VideoAdvertisingOption;
                // Updates the advertising settings for the specified video.
                update(
                    resource: Schema.VideoAdvertisingOption,
                    videoId: string,
                    optionalArgs: object,
                ): YoutubePartner.Schema.VideoAdvertisingOption;
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
                midrollSeconds?: number | undefined;
                position?: string | undefined;
                slot?: YoutubePartner.Schema.AdSlot[] | undefined;
            }
            interface AdSlot {
                id?: string | undefined;
                type?: string | undefined;
            }
            interface AllowedAdvertisingOptions {
                adsOnEmbeds?: boolean | undefined;
                kind?: string | undefined;
                licAdFormats?: string[] | undefined;
                ugcAdFormats?: string[] | undefined;
            }
            interface Asset {
                aliasId?: string[] | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                label?: string[] | undefined;
                matchPolicy?: YoutubePartner.Schema.AssetMatchPolicy | undefined;
                matchPolicyEffective?: YoutubePartner.Schema.AssetMatchPolicy | undefined;
                matchPolicyMine?: YoutubePartner.Schema.AssetMatchPolicy | undefined;
                metadata?: YoutubePartner.Schema.Metadata | undefined;
                metadataEffective?: YoutubePartner.Schema.Metadata | undefined;
                metadataMine?: YoutubePartner.Schema.Metadata | undefined;
                ownership?: YoutubePartner.Schema.RightsOwnership | undefined;
                ownershipConflicts?: YoutubePartner.Schema.OwnershipConflicts | undefined;
                ownershipEffective?: YoutubePartner.Schema.RightsOwnership | undefined;
                ownershipMine?: YoutubePartner.Schema.RightsOwnership | undefined;
                status?: string | undefined;
                timeCreated?: string | undefined;
                type?: string | undefined;
            }
            interface AssetLabel {
                kind?: string | undefined;
                labelName?: string | undefined;
            }
            interface AssetLabelListResponse {
                items?: YoutubePartner.Schema.AssetLabel[] | undefined;
                kind?: string | undefined;
            }
            interface AssetListResponse {
                items?: YoutubePartner.Schema.Asset[] | undefined;
                kind?: string | undefined;
            }
            interface AssetMatchPolicy {
                kind?: string | undefined;
                policyId?: string | undefined;
                rules?: YoutubePartner.Schema.PolicyRule[] | undefined;
            }
            interface AssetRelationship {
                childAssetId?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                parentAssetId?: string | undefined;
            }
            interface AssetRelationshipListResponse {
                items?: YoutubePartner.Schema.AssetRelationship[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YoutubePartner.Schema.PageInfo | undefined;
            }
            interface AssetSearchResponse {
                items?: YoutubePartner.Schema.AssetSnippet[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YoutubePartner.Schema.PageInfo | undefined;
            }
            interface AssetShare {
                kind?: string | undefined;
                shareId?: string | undefined;
                viewId?: string | undefined;
            }
            interface AssetShareListResponse {
                items?: YoutubePartner.Schema.AssetShare[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YoutubePartner.Schema.PageInfo | undefined;
            }
            interface AssetSnippet {
                customId?: string | undefined;
                id?: string | undefined;
                isrc?: string | undefined;
                iswc?: string | undefined;
                kind?: string | undefined;
                timeCreated?: string | undefined;
                title?: string | undefined;
                type?: string | undefined;
            }
            interface Campaign {
                campaignData?: YoutubePartner.Schema.CampaignData | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                status?: string | undefined;
                timeCreated?: string | undefined;
                timeLastModified?: string | undefined;
            }
            interface CampaignData {
                campaignSource?: YoutubePartner.Schema.CampaignSource | undefined;
                expireTime?: string | undefined;
                name?: string | undefined;
                promotedContent?: YoutubePartner.Schema.PromotedContent[] | undefined;
                startTime?: string | undefined;
            }
            interface CampaignList {
                items?: YoutubePartner.Schema.Campaign[] | undefined;
                kind?: string | undefined;
            }
            interface CampaignSource {
                sourceType?: string | undefined;
                sourceValue?: string[] | undefined;
            }
            interface CampaignTargetLink {
                targetId?: string | undefined;
                targetType?: string | undefined;
            }
            interface Claim {
                appliedPolicy?: YoutubePartner.Schema.Policy | undefined;
                assetId?: string | undefined;
                blockOutsideOwnership?: boolean | undefined;
                contentType?: string | undefined;
                id?: string | undefined;
                isPartnerUploaded?: boolean | undefined;
                kind?: string | undefined;
                matchInfo?: YoutubePartner.Schema.ClaimMatchInfo | undefined;
                origin?: YoutubePartner.Schema.ClaimOrigin | undefined;
                policy?: YoutubePartner.Schema.Policy | undefined;
                status?: string | undefined;
                timeCreated?: string | undefined;
                videoId?: string | undefined;
            }
            interface ClaimEvent {
                kind?: string | undefined;
                reason?: string | undefined;
                source?: YoutubePartner.Schema.ClaimEventSource | undefined;
                time?: string | undefined;
                type?: string | undefined;
                typeDetails?: YoutubePartner.Schema.ClaimEventTypeDetails | undefined;
            }
            interface ClaimEventSource {
                contentOwnerId?: string | undefined;
                type?: string | undefined;
                userEmail?: string | undefined;
            }
            interface ClaimEventTypeDetails {
                appealExplanation?: string | undefined;
                disputeNotes?: string | undefined;
                disputeReason?: string | undefined;
                updateStatus?: string | undefined;
            }
            interface ClaimHistory {
                event?: YoutubePartner.Schema.ClaimEvent[] | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                uploaderChannelId?: string | undefined;
            }
            interface ClaimListResponse {
                items?: YoutubePartner.Schema.Claim[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YoutubePartner.Schema.PageInfo | undefined;
                previousPageToken?: string | undefined;
            }
            interface ClaimMatchInfo {
                longestMatch?: YoutubePartner.Schema.ClaimMatchInfoLongestMatch | undefined;
                matchSegments?: YoutubePartner.Schema.MatchSegment[] | undefined;
                referenceId?: string | undefined;
                totalMatch?: YoutubePartner.Schema.ClaimMatchInfoTotalMatch | undefined;
            }
            interface ClaimMatchInfoLongestMatch {
                durationSecs?: string | undefined;
                referenceOffset?: string | undefined;
                userVideoOffset?: string | undefined;
            }
            interface ClaimMatchInfoTotalMatch {
                referenceDurationSecs?: string | undefined;
                userVideoDurationSecs?: string | undefined;
            }
            interface ClaimOrigin {
                source?: string | undefined;
            }
            interface ClaimSearchResponse {
                items?: YoutubePartner.Schema.ClaimSnippet[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YoutubePartner.Schema.PageInfo | undefined;
                previousPageToken?: string | undefined;
            }
            interface ClaimSnippet {
                assetId?: string | undefined;
                contentType?: string | undefined;
                id?: string | undefined;
                isPartnerUploaded?: boolean | undefined;
                kind?: string | undefined;
                origin?: YoutubePartner.Schema.ClaimSnippetOrigin | undefined;
                status?: string | undefined;
                thirdPartyClaim?: boolean | undefined;
                timeCreated?: string | undefined;
                timeStatusLastModified?: string | undefined;
                videoId?: string | undefined;
                videoTitle?: string | undefined;
                videoViews?: string | undefined;
            }
            interface ClaimSnippetOrigin {
                source?: string | undefined;
            }
            interface ClaimedVideoDefaults {
                autoGeneratedBreaks?: boolean | undefined;
                channelOverride?: boolean | undefined;
                kind?: string | undefined;
                newVideoDefaults?: string[] | undefined;
            }
            interface Conditions {
                contentMatchType?: string[] | undefined;
                matchDuration?: YoutubePartner.Schema.IntervalCondition[] | undefined;
                matchPercent?: YoutubePartner.Schema.IntervalCondition[] | undefined;
                referenceDuration?: YoutubePartner.Schema.IntervalCondition[] | undefined;
                referencePercent?: YoutubePartner.Schema.IntervalCondition[] | undefined;
                requiredTerritories?: YoutubePartner.Schema.TerritoryCondition | undefined;
            }
            interface ConflictingOwnership {
                owner?: string | undefined;
                ratio?: number | undefined;
            }
            interface ContentOwner {
                conflictNotificationEmail?: string | undefined;
                displayName?: string | undefined;
                disputeNotificationEmails?: string[] | undefined;
                fingerprintReportNotificationEmails?: string[] | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                primaryNotificationEmails?: string[] | undefined;
            }
            interface ContentOwnerAdvertisingOption {
                allowedOptions?: YoutubePartner.Schema.AllowedAdvertisingOptions | undefined;
                claimedVideoOptions?: YoutubePartner.Schema.ClaimedVideoDefaults | undefined;
                id?: string | undefined;
                kind?: string | undefined;
            }
            interface ContentOwnerListResponse {
                items?: YoutubePartner.Schema.ContentOwner[] | undefined;
                kind?: string | undefined;
            }
            interface CountriesRestriction {
                adFormats?: string[] | undefined;
                territories?: string[] | undefined;
            }
            interface CuepointSettings {
                cueType?: string | undefined;
                durationSecs?: number | undefined;
                offsetTimeMs?: string | undefined;
                walltime?: string | undefined;
            }
            interface Date {
                day?: number | undefined;
                month?: number | undefined;
                year?: number | undefined;
            }
            interface DateRange {
                end?: YoutubePartner.Schema.Date | undefined;
                kind?: string | undefined;
                start?: YoutubePartner.Schema.Date | undefined;
            }
            interface ExcludedInterval {
                high?: number | undefined;
                low?: number | undefined;
                origin?: string | undefined;
                timeCreated?: string | undefined;
            }
            interface IntervalCondition {
                high?: number | undefined;
                low?: number | undefined;
            }
            interface LiveCuepoint {
                broadcastId?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                settings?: YoutubePartner.Schema.CuepointSettings | undefined;
            }
            interface MatchSegment {
                channel?: string | undefined;
                reference_segment?: YoutubePartner.Schema.Segment | undefined;
                video_segment?: YoutubePartner.Schema.Segment | undefined;
            }
            interface Metadata {
                actor?: string[] | undefined;
                album?: string | undefined;
                artist?: string[] | undefined;
                broadcaster?: string[] | undefined;
                category?: string | undefined;
                contentType?: string | undefined;
                copyrightDate?: YoutubePartner.Schema.Date | undefined;
                customId?: string | undefined;
                description?: string | undefined;
                director?: string[] | undefined;
                eidr?: string | undefined;
                endYear?: number | undefined;
                episodeNumber?: string | undefined;
                episodesAreUntitled?: boolean | undefined;
                genre?: string[] | undefined;
                grid?: string | undefined;
                hfa?: string | undefined;
                infoUrl?: string | undefined;
                isan?: string | undefined;
                isrc?: string | undefined;
                iswc?: string | undefined;
                keyword?: string[] | undefined;
                label?: string | undefined;
                notes?: string | undefined;
                originalReleaseMedium?: string | undefined;
                producer?: string[] | undefined;
                ratings?: YoutubePartner.Schema.Rating[] | undefined;
                releaseDate?: YoutubePartner.Schema.Date | undefined;
                seasonNumber?: string | undefined;
                showCustomId?: string | undefined;
                showTitle?: string | undefined;
                spokenLanguage?: string | undefined;
                startYear?: number | undefined;
                subtitledLanguage?: string[] | undefined;
                title?: string | undefined;
                tmsId?: string | undefined;
                totalEpisodesExpected?: number | undefined;
                upc?: string | undefined;
                writer?: string[] | undefined;
            }
            interface MetadataHistory {
                kind?: string | undefined;
                metadata?: YoutubePartner.Schema.Metadata | undefined;
                origination?: YoutubePartner.Schema.Origination | undefined;
                timeProvided?: string | undefined;
            }
            interface MetadataHistoryListResponse {
                items?: YoutubePartner.Schema.MetadataHistory[] | undefined;
                kind?: string | undefined;
            }
            interface Order {
                availGroupId?: string | undefined;
                channelId?: string | undefined;
                contentType?: string | undefined;
                country?: string | undefined;
                customId?: string | undefined;
                dvdReleaseDate?: YoutubePartner.Schema.Date | undefined;
                estDates?: YoutubePartner.Schema.DateRange | undefined;
                events?: YoutubePartner.Schema.StateCompleted[] | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                movie?: string | undefined;
                originalReleaseDate?: YoutubePartner.Schema.Date | undefined;
                priority?: string | undefined;
                productionHouse?: string | undefined;
                purchaseOrder?: string | undefined;
                requirements?: YoutubePartner.Schema.Requirements | undefined;
                show?: YoutubePartner.Schema.ShowDetails | undefined;
                status?: string | undefined;
                videoId?: string | undefined;
                vodDates?: YoutubePartner.Schema.DateRange | undefined;
            }
            interface OrderListResponse {
                items?: YoutubePartner.Schema.Order[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YoutubePartner.Schema.PageInfo | undefined;
                previousPageToken?: string | undefined;
            }
            interface Origination {
                owner?: string | undefined;
                source?: string | undefined;
            }
            interface OwnershipConflicts {
                general?: YoutubePartner.Schema.TerritoryConflicts[] | undefined;
                kind?: string | undefined;
                mechanical?: YoutubePartner.Schema.TerritoryConflicts[] | undefined;
                performance?: YoutubePartner.Schema.TerritoryConflicts[] | undefined;
                synchronization?: YoutubePartner.Schema.TerritoryConflicts[] | undefined;
            }
            interface OwnershipHistoryListResponse {
                items?: YoutubePartner.Schema.RightsOwnershipHistory[] | undefined;
                kind?: string | undefined;
            }
            interface Package {
                content?: string | undefined;
                customIds?: string[] | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                locale?: string | undefined;
                name?: string | undefined;
                status?: string | undefined;
                statusReports?: YoutubePartner.Schema.StatusReport[] | undefined;
                timeCreated?: string | undefined;
                type?: string | undefined;
                uploaderName?: string | undefined;
            }
            interface PackageInsertResponse {
                errors?: YoutubePartner.Schema.ValidateError[] | undefined;
                kind?: string | undefined;
                resource?: YoutubePartner.Schema.Package | undefined;
                status?: string | undefined;
            }
            interface PageInfo {
                resultsPerPage?: number | undefined;
                startIndex?: number | undefined;
                totalResults?: number | undefined;
            }
            interface Policy {
                description?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                rules?: YoutubePartner.Schema.PolicyRule[] | undefined;
                timeUpdated?: string | undefined;
            }
            interface PolicyList {
                items?: YoutubePartner.Schema.Policy[] | undefined;
                kind?: string | undefined;
            }
            interface PolicyRule {
                action?: string | undefined;
                conditions?: YoutubePartner.Schema.Conditions | undefined;
                subaction?: string[] | undefined;
            }
            interface PromotedContent {
                link?: YoutubePartner.Schema.CampaignTargetLink[] | undefined;
            }
            interface Publisher {
                caeNumber?: string | undefined;
                id?: string | undefined;
                ipiNumber?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
            }
            interface PublisherList {
                items?: YoutubePartner.Schema.Publisher[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YoutubePartner.Schema.PageInfo | undefined;
            }
            interface Rating {
                rating?: string | undefined;
                ratingSystem?: string | undefined;
            }
            interface Reference {
                assetId?: string | undefined;
                audioswapEnabled?: boolean | undefined;
                claimId?: string | undefined;
                contentType?: string | undefined;
                duplicateLeader?: string | undefined;
                excludedIntervals?: YoutubePartner.Schema.ExcludedInterval[] | undefined;
                fpDirect?: boolean | undefined;
                hashCode?: string | undefined;
                id?: string | undefined;
                ignoreFpMatch?: boolean | undefined;
                kind?: string | undefined;
                length?: number | undefined;
                origination?: YoutubePartner.Schema.Origination | undefined;
                status?: string | undefined;
                statusReason?: string | undefined;
                urgent?: boolean | undefined;
                videoId?: string | undefined;
            }
            interface ReferenceConflict {
                conflictingReferenceId?: string | undefined;
                expiryTime?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                matches?: YoutubePartner.Schema.ReferenceConflictMatch[] | undefined;
                originalReferenceId?: string | undefined;
                status?: string | undefined;
            }
            interface ReferenceConflictListResponse {
                items?: YoutubePartner.Schema.ReferenceConflict[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YoutubePartner.Schema.PageInfo | undefined;
            }
            interface ReferenceConflictMatch {
                conflicting_reference_offset_ms?: string | undefined;
                length_ms?: string | undefined;
                original_reference_offset_ms?: string | undefined;
                type?: string | undefined;
            }
            interface ReferenceListResponse {
                items?: YoutubePartner.Schema.Reference[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YoutubePartner.Schema.PageInfo | undefined;
            }
            interface Requirements {
                caption?: boolean | undefined;
                hdTranscode?: boolean | undefined;
                posterArt?: boolean | undefined;
                spotlightArt?: boolean | undefined;
                spotlightReview?: boolean | undefined;
                trailer?: boolean | undefined;
            }
            interface RightsOwnership {
                general?: YoutubePartner.Schema.TerritoryOwners[] | undefined;
                kind?: string | undefined;
                mechanical?: YoutubePartner.Schema.TerritoryOwners[] | undefined;
                performance?: YoutubePartner.Schema.TerritoryOwners[] | undefined;
                synchronization?: YoutubePartner.Schema.TerritoryOwners[] | undefined;
            }
            interface RightsOwnershipHistory {
                kind?: string | undefined;
                origination?: YoutubePartner.Schema.Origination | undefined;
                ownership?: YoutubePartner.Schema.RightsOwnership | undefined;
                timeProvided?: string | undefined;
            }
            interface Segment {
                duration?: string | undefined;
                kind?: string | undefined;
                start?: string | undefined;
            }
            interface ShowDetails {
                episodeNumber?: string | undefined;
                episodeTitle?: string | undefined;
                seasonNumber?: string | undefined;
                title?: string | undefined;
            }
            interface SpreadsheetTemplate {
                kind?: string | undefined;
                status?: string | undefined;
                templateContent?: string | undefined;
                templateName?: string | undefined;
                templateType?: string | undefined;
            }
            interface SpreadsheetTemplateListResponse {
                items?: YoutubePartner.Schema.SpreadsheetTemplate[] | undefined;
                kind?: string | undefined;
                status?: string | undefined;
            }
            interface StateCompleted {
                state?: string | undefined;
                timeCompleted?: string | undefined;
            }
            interface StatusReport {
                statusContent?: string | undefined;
                statusFileName?: string | undefined;
            }
            interface TerritoryCondition {
                territories?: string[] | undefined;
                type?: string | undefined;
            }
            interface TerritoryConflicts {
                conflictingOwnership?: YoutubePartner.Schema.ConflictingOwnership[] | undefined;
                territory?: string | undefined;
            }
            interface TerritoryOwners {
                owner?: string | undefined;
                publisher?: string | undefined;
                ratio?: number | undefined;
                territories?: string[] | undefined;
                type?: string | undefined;
            }
            interface Uploader {
                kind?: string | undefined;
                uploaderName?: string | undefined;
            }
            interface UploaderListResponse {
                items?: YoutubePartner.Schema.Uploader[] | undefined;
                kind?: string | undefined;
            }
            interface ValidateAsyncRequest {
                content?: string | undefined;
                kind?: string | undefined;
                uploaderName?: string | undefined;
            }
            interface ValidateAsyncResponse {
                kind?: string | undefined;
                status?: string | undefined;
                validationId?: string | undefined;
            }
            interface ValidateError {
                columnName?: string | undefined;
                columnNumber?: number | undefined;
                lineNumber?: number | undefined;
                message?: string | undefined;
                messageCode?: number | undefined;
                severity?: string | undefined;
            }
            interface ValidateRequest {
                content?: string | undefined;
                kind?: string | undefined;
                locale?: string | undefined;
                uploaderName?: string | undefined;
            }
            interface ValidateResponse {
                errors?: YoutubePartner.Schema.ValidateError[] | undefined;
                kind?: string | undefined;
                status?: string | undefined;
            }
            interface ValidateStatusRequest {
                kind?: string | undefined;
                locale?: string | undefined;
                validationId?: string | undefined;
            }
            interface ValidateStatusResponse {
                errors?: YoutubePartner.Schema.ValidateError[] | undefined;
                isMetadataOnly?: boolean | undefined;
                kind?: string | undefined;
                status?: string | undefined;
            }
            interface VideoAdvertisingOption {
                adBreaks?: YoutubePartner.Schema.AdBreak[] | undefined;
                adFormats?: string[] | undefined;
                autoGeneratedBreaks?: boolean | undefined;
                breakPosition?: string[] | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                tpAdServerVideoId?: string | undefined;
                tpTargetingUrl?: string | undefined;
                tpUrlParameters?: string | undefined;
            }
            interface VideoAdvertisingOptionGetEnabledAdsResponse {
                adBreaks?: YoutubePartner.Schema.AdBreak[] | undefined;
                adsOnEmbeds?: boolean | undefined;
                countriesRestriction?: YoutubePartner.Schema.CountriesRestriction[] | undefined;
                id?: string | undefined;
                kind?: string | undefined;
            }
            interface Whitelist {
                id?: string | undefined;
                kind?: string | undefined;
                title?: string | undefined;
            }
            interface WhitelistListResponse {
                items?: YoutubePartner.Schema.Whitelist[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YoutubePartner.Schema.PageInfo | undefined;
            }
        }
    }
    interface YoutubePartner {
        AssetLabels?: YoutubePartner.Collection.AssetLabelsCollection | undefined;
        AssetMatchPolicy?: YoutubePartner.Collection.AssetMatchPolicyCollection | undefined;
        AssetRelationships?: YoutubePartner.Collection.AssetRelationshipsCollection | undefined;
        AssetSearch?: YoutubePartner.Collection.AssetSearchCollection | undefined;
        AssetShares?: YoutubePartner.Collection.AssetSharesCollection | undefined;
        Assets?: YoutubePartner.Collection.AssetsCollection | undefined;
        Campaigns?: YoutubePartner.Collection.CampaignsCollection | undefined;
        ClaimHistory?: YoutubePartner.Collection.ClaimHistoryCollection | undefined;
        ClaimSearch?: YoutubePartner.Collection.ClaimSearchCollection | undefined;
        Claims?: YoutubePartner.Collection.ClaimsCollection | undefined;
        ContentOwnerAdvertisingOptions?: YoutubePartner.Collection.ContentOwnerAdvertisingOptionsCollection | undefined;
        ContentOwners?: YoutubePartner.Collection.ContentOwnersCollection | undefined;
        LiveCuepoints?: YoutubePartner.Collection.LiveCuepointsCollection | undefined;
        MetadataHistory?: YoutubePartner.Collection.MetadataHistoryCollection | undefined;
        Orders?: YoutubePartner.Collection.OrdersCollection | undefined;
        Ownership?: YoutubePartner.Collection.OwnershipCollection | undefined;
        OwnershipHistory?: YoutubePartner.Collection.OwnershipHistoryCollection | undefined;
        Package?: YoutubePartner.Collection.PackageCollection | undefined;
        Policies?: YoutubePartner.Collection.PoliciesCollection | undefined;
        Publishers?: YoutubePartner.Collection.PublishersCollection | undefined;
        ReferenceConflicts?: YoutubePartner.Collection.ReferenceConflictsCollection | undefined;
        References?: YoutubePartner.Collection.ReferencesCollection | undefined;
        SpreadsheetTemplate?: YoutubePartner.Collection.SpreadsheetTemplateCollection | undefined;
        Uploader?: YoutubePartner.Collection.UploaderCollection | undefined;
        Validator?: YoutubePartner.Collection.ValidatorCollection | undefined;
        VideoAdvertisingOptions?: YoutubePartner.Collection.VideoAdvertisingOptionsCollection | undefined;
        Whitelists?: YoutubePartner.Collection.WhitelistsCollection | undefined;
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
