declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /**
         * Root object for fetching and creating asset objects. An asset can be an image, text, or video.
         * Assets are deduplicated within a given customer account, so assets may be shared between different ads.
         */
        interface AdAssets {
            /** Returns a selector for all assets in the account. */
            assets(): AssetSelector;
            /** Returns a builder to upload an image asset. */
            newImageAssetBuilder(): ImageAssetBuilder;
            /** Returns a builder to upload a media bundle asset. */
            newMediaBundleAssetBuilder(): MediaBundleAssetBuilder;
            /** Returns a builder to upload a YouTube video asset. */
            newYouTubeVideoAssetBuilder(): YouTubeVideoAssetBuilder;
        }
    }
}
