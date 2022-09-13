declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads asset. An asset can be an image, text, or video. Assets are deduplicated within a given customer account, so assets may be shared between different ads. */
        interface Asset {
            /** Returns image dimension info if this asset is an image, or null otherwise. */
            getDimensions(): Dimensions | null;
            /** Returns the type of this entity as a String, in this case, "Asset". */
            getEntityType(): string;
            /** Returns the ID of the asset. */
            getId(): number;
            /** Returns the image URL if this asset is an image, or null otherwise. */
            getImageUrl(): string | null;
            /** Returns the name of the asset object, or null if the asset was created without a name. */
            getName(): string | null;
            /** Returns asset text if this is a text asset, or null otherwise. */
            getText(): string | null;
            /** Returns the asset object's type. */
            getType(): string;
            /** Returns the YouTube video ID if this asset is a YouTube video, or null otherwise. */
            getYouTubeVideoId(): string | null;
        }

        /**
         * An iterator of assets.
         *
         * Typical usage:
         *
         *      while (assetIterator.hasNext()) {
         *        var asset = assetIterator.next();
         *      }
         */
        interface AssetIterator extends Base.Iterator<Asset> {}

        /**
         * An operation representing creation of a new asset.
         * Calling any method (getErrors, getResult, or isSuccessful) will cause the operation to execute and create the asset.
         * To make the script more efficient, it's recommended that you store the operations in an array and only call these methods once you've constructed all the operations you want.
         */
        interface AssetOperation extends Base.Operation<Asset> {}

        /**
         * Fetches assets in an account.
         *
         * Typical usage:
         *
         *      var assetIterator = AdsApp.adAsset().assets()
         *        .withCondition("Type = IMAGE")
         *        .get();
         */
        interface AssetSelector
            extends Base.Selector<AssetIterator>,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}

        /**
         * Builds new image assets.
         *
         * Typical usage:
         *
         *      var imageUrl = "http://www.example.com/example.png";
         *      var imageBlob = UrlFetchApp.fetch(imageUrl).getBlob();
         *      var assetOperation = AdsApp.adAsset().newImageAssetBuilder()
         *         .withName("name")
         *         .withData(imageBlob)
         *         .build();
         *      var imageAsset = assetOperation.getResult();
         *
         * Note that it is only necessary to call `AssetOperation.getResult()` if you need to access the new asset item for further processing.
         * Otherwise calling `ImageAssetBuilder.build()` is sufficient to ensure that the asset is created.
         */
        interface ImageAssetBuilder extends Base.Builder<AssetOperation> {
            /** Sets new image asset's data to the specified value. */
            withData(data: GoogleAppsScript.Base.Blob): this;
            /** Sets new image asset's name to the specified value. */
            withName(name: string): this;
        }

        /**
         * Builds new media bundle assets.
         *
         * Typical usage:
         *
         *      var assetBundleUrl = "http://www.example.com/example.zip";
         *      var assetBundleBlob = UrlFetchApp.fetch(assetBundleUrl).getBlob();
         *      var assetOperation = AdsApp.adAsset().newMediaBundleAssetBuilder()
         *         .withName("name")
         *         .withData(assetBundleBlob)
         *         .build();
         *      var bundleAsset = assetOperation.getResult();
         */
        interface MediaBundleAssetBuilder extends Base.Builder<AssetOperation> {
            /** Sets new image asset's data to the specified value. */
            withData(data: GoogleAppsScript.Base.Blob): this;
            /** Sets new image asset's name to the specified value. */
            withName(name: string): this;
        }

        /**
         * Builds new YouTube video assets.
         *
         * Typical usage:
         *
         *      var youTubeVideoId = "123ABCabc-_";
         *      var assetOperation = AdsApp.adAsset().newYouTubeVideoAssetBuilder()
         *         .withName("name")
         *         .withYouTubeVideoId(youTubeVideoId)
         *         .build();
         *      var videoAsset = assetOperation.getResult();
         */
        interface YouTubeVideoAssetBuilder extends Base.Builder<AssetOperation> {
            /** Sets new image asset's name to the specified value. */
            withName(name: string): this;
            /** Sets YouTube video ID. */
            withYouTubeVideoId(youTubeVideoId: string): this;
        }
    }
}
