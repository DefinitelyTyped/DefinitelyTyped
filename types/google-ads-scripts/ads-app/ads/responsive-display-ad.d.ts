declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a responsive ad for Display. */
        interface ResponsiveDisplayAd extends Base.StatsFor {
            /** Applies a label to the ad. */
            applyLabel(name: string): void;
            /** Returns an AdViewSpace, which provides access to type-specific fields of the ad. */
            asType(): AdViewSpace;
            /** Enables the ad. */
            enable(): void;
            /** Returns the ad group to which this ad belongs. */
            getAdGroup(): AdGroup;
            /** Returns the ad's optional business name. */
            getBusinessName(): string;
            /** Returns the campaign to which this ad belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign | null;
            /** Returns the description of the ad if this is a legacy responsive display ad, or null if not. */
            getDescription(): string | null;
            /** Returns the descriptions of the ad, or null if this is a legacy responsive display ad. */
            getDescriptions(): AdTextAsset[] | null;
            /** Returns the type of this entity as a String, in this case, "Ad". */
            getEntityType(): string;
            /** Returns the short-format headlines of the ad, or null if this is a legacy responsive display ad. */
            getHeadlines(): AdTextAsset[] | null;
            /** Returns the ID of the ad. */
            getId(): number;
            /** Returns the ad's landscape logo image assets, or null if the ad has none or if the ad is a legacy responsive display ad. */
            getLandscapeLogoImages(): Asset[] | null;
            /** Returns the ad's logo image if this is a legacy responsive display ad that has a logo image, or null otherwise. */
            getLogoImage(): Media | null;
            /** Returns the ad's square logo image assets, or null if the ad has none or if the ad is a legacy responsive display ad. */
            getLogoImages(): Asset[] | null;
            /** Returns the long headline of the ad. */
            getLongHeadline(): string;
            /** Returns the ad's marketing image if this is a legacy responsive display ad, or null if not. */
            getMarketingImage(): Media | null;
            /** Returns the ad's rectangular marketing image assets, or null if this is a legacy responsive display ad. */
            getMarketingImages(): Asset[] | null;
            /** Returns the policy approval status of the ad. */
            getPolicyApprovalStatus(): string;
            /** Returns the list of policy topics associated with the ad. */
            getPolicyTopics(): PolicyTopic[];
            /** Returns the short headline of the ad if this is a legacy responsive display ad, or null if not. */
            getShortHeadline(): string | null;
            /** Returns the ad's square marketing image assets, or null if this is a legacy responsive display ad. */
            getSquareMarketingImages(): Asset[] | null;
            /** Returns the type of the ad. */
            getType(): string;
            /** Returns the ad's YouTube video assets, or null if the ad has none or if the ad is a legacy responsive display ad. */
            getYouTubeVideos(): Asset[] | null;
            /** Returns true if the ad is enabled. */
            isEnabled(): boolean;
            /** Returns true if this is a legacy responsive display ad, false otherwise. */
            isLegacy(): boolean;
            /** Returns true if the ad is paused. */
            isPaused(): boolean;
            /** Returns an AdTypeSpace, which determines the type of the ad. */
            isType(): AdTypeSpace;
            /** Creates a selector of all labels applied to the ad. */
            labels(): LabelSelector;
            /** Pauses the ad. */
            pause(): void;
            /** Removes the ad. */
            remove(): void;
            /** Removes a label from the ad. */
            removeLabel(name: string): void;
            /** Provides access to this ad's URL fields. */
            urls(): AdUrls;
        }

        /**
         * Builder for a responsive ad for Display
         *
         * Typical usage:
         *
         *      var image1 = ...
         *      var image2 = ...
         *      var image3 = ...
         *      var squareImage1 = ...
         *      var squareImage2 = ...
         *      var adOperation = adGroup.newAd().responsiveDisplayAdBuilder()
         *        .withHeadlines([
         *          "Headline 1", "Headline 2"
         *        ])
         *        .addHeadline("Headline 3")
         *        .withDescriptions([
         *          "Description 1", "Description 2"
         *        ])
         *        .addDescription("Description 3")
         *        .withMarketingImages([
         *          image1, image2
         *        ])
         *        .addMarketingImage(image3)
         *        .withSquareMarketingImages([
         *          squareImage1, squareImage2
         *        ])
         *        .withFinalUrl("http://www.example.com")
         *        .withBusinessName("Your Business")
         *        .build();
         *      var ad = adOperation.getResult();
         *
         * Note that it is only necessary to call AdOperation.getResult() if you need to access the actual ad for further processing
         * (for instance, one can attach a label to the newly created ad). Otherwise, calling build() on the builder is sufficient to ensure that the ad is created.
         */
        interface ResponsiveDisplayAdBuilder extends Base.Builder<AdOperation> {
            /** Adds the provided description to the current list of descriptions. */
            addDescription(description: string | AdTextAsset): this;
            /** Adds the provided headline to the current list of headlines. */
            addHeadline(headline: string | AdTextAsset): this;
            /** Adds the provided landscape logo image to the current list of landscape logo images. */
            addLandscapeLogoImage(image: Asset): this;
            /** Adds the provided logo image to the current list of logo images. */
            addLogoImage(image: Asset): this;
            /** Adds the provided marketing image to the current list of marketing images. */
            addMarketingImage(image: Asset): this;
            /** Adds the provided square marketing image to the current list of square marketing images. */
            addSquareMarketingImage(image: Asset): this;
            /** Adds the provided video to the current list of YouTube videos. */
            addYouTubeVideo(video: Asset): this;
            /** Sets the new ad's business name to the specified value. */
            withBusinessName(businessName: string): this;
            /** Sets the custom parameters of the new ad to the specified value. */
            withCustomParameters(customParameters: Record<string, string>): this;
            /** Sets the new ad's descriptions to the specified value. */
            withDescriptions(descriptions: Array<string | AdTextAsset>): this;
            /** Sets the final URL of the new ad to the specified value. */
            withFinalUrl(finalUrl: string): this;
            /** Sets the final URL suffix of the new ad to the specified value. */
            withFinalUrlSuffix(suffix: string): this;
            /** Sets the list of the new ad's headlines to the specified value. */
            withHeadlines(headlines: Array<string | AdTextAsset>): this;
            /** Sets the new ad's landscape logo images to the specified value. */
            withLandscapeLogoImages(images: Asset[]): this;
            /** Sets the new ad's logo images to the specified value. */
            withLogoImages(images: Asset[]): this;
            /** Sets the new ad's long headline to the specified value. */
            withLongHeadline(longHeadline: string): this;
            /** Sets the new ad's marketing images to the specified value. */
            withMarketingImages(images: Asset[]): this;
            /** Sets the mobile final URL of the new ad to the specified value. */
            withMobileFinalUrl(mobileFinalUrl: string): this;
            /** Sets the new ad's square marketing images to the specified value. */
            withSquareMarketingImages(images: Asset[]): this;
            /** Sets the tracking template of the new ad to the specified value. */
            withTrackingTemplate(trackingTemplate: string): this;
            /** Sets the new ad's YouTube videos to the specified value. */
            withYouTubeVideos(videos: Asset[]): this;
        }
    }
}
