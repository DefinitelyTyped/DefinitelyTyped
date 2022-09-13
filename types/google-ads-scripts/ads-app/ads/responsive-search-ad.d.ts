declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a responsive ad for Search. */
        interface ResponsiveSearchAd extends Base.StatsFor {
            /** Applies a label to the ad. */
            applyLabel(name: string): void;
            /** Returns an AdViewSpace, which provides access to type-specific fields of the ad. */
            asType(): AdViewSpace;
            /** Enables the ad. */
            enable(): void;
            /** Returns the ad group to which this ad belongs. */
            getAdGroup(): AdGroup;
            /** Returns the campaign to which this ad belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign | null;
            /** Returns the descriptions of the ad. */
            getDescriptions(): AdTextAsset[];
            /** Returns the type of this entity as a String, in this case, "Ad". */
            getEntityType(): string;
            /** Returns the headlines of the ad. */
            getHeadlines(): AdTextAsset[];
            /** Returns the ID of the ad. */
            getId(): number;
            /** Returns the first path that appears with the ad's displayed URL, if it has one. */
            getPath1(): string;
            /** Returns the second path that appears with the ad's displayed URL, if it has one. */
            getPath2(): string;
            /** Returns the policy approval status of the ad. */
            getPolicyApprovalStatus(): string;
            /** Returns the list of policy topics associated with the ad. */
            getPolicyTopics(): PolicyTopic[];
            /** Returns the type of the ad. */
            getType(): string;
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
         * Builder for a responsive ad for Search under construction.
         *
         * Typical usage:
         *
         *       var adOperation = adGroup.newAd().responsiveSearchAdBuilder()
         *        .withHeadlines([
         *          "Headline 1",
         *          { text: "Pinned Headline 2", pinning: "HEADLINE_2"}
         *        ])
         *        .addHeadline("Headline 3")
         *        .addHeadline("Pinned Headline 4", "HEADLINE_2")
         *        .withDescriptions([
         *          "Description 1",
         *          { text: "Pinned Description 2", pinning: "DESCRIPTION_1" }
         *        ])
         *        .addDescription("Description 3")
         *        .addDescription("Pinned Description 4", "DESCRIPTION_1")
         *        .withPath1("path1")
         *        .withPath2("path2")
         *        .withFinalUrl("http://www.example.com")
         *        .build();
         *      var ad = adOperation.getResult();
         *
         * Note that it is only necessary to call `AdOperation.getResult()` if you need to access the actual ad for further processing
         * (for instance, one can attach a label to the newly created ad). Otherwise, calling `build()` on the builder is sufficient to ensure that the ad is created.
         */
        interface ResponsiveSearchAdBuilder extends Base.Builder<AdOperation> {
            /** Adds the provided description to the current list of descriptions. */
            addDescription(description: string, pinning: string): this;
            /** Adds the provided headline to the current list of headlines. */
            addHeadline(headline: string, pinning: string): this;
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
            /** Sets the mobile final URL of the new ad to the specified value. */
            withMobileFinalUrl(mobileFinalUrl: string): this;
            /** Sets the first path that appears with the new ad's displayed URL. */
            withPath1(path1: string): this;
            /** Sets the second path that appears with the new ad's displayed URL. */
            withPath2(path2: string): this;
            /** Sets the tracking template of the new ad to the specified value. */
            withTrackingTemplate(trackingTemplate: string): this;
        }
    }
}
