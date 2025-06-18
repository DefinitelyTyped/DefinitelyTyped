declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents an expanded text ad. */
        interface ExpandedTextAd extends Base.StatsFor {
            /** Applies a label to the ad. */
            applyLabel(name: string): void;
            /** Returns an AdViewSpace, which provides access to type-specific fields of the ad. */
            asType(): AdViewSpace;
            /** Enables the ad. */
            enable(): void;
            /** Returns the ad group to which this ad belongs. */
            getAdGroup(): AdGroup;
            /** Returns the campaign to which this ad belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign;
            /** Returns the description of the ad. */
            getDescription(): string;
            /** Returns the first description of the ad. */
            getDescription1(): string;
            /** Returns the second description of the ad, if it has one. */
            getDescription2(): string;
            /** Returns the type of this entity as a String, in this case, "Ad". */
            getEntityType(): string;
            /** Returns the first part of the ad's headline. */
            getHeadlinePart1(): string;
            /** Returns the second part of the ad's headline. */
            getHeadlinePart2(): string;
            /** Returns the third part of the ad's headline, if it has one. */
            getHeadlinePart3(): string;
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
            /** Returns true if the ad specifies mobile device preference or false otherwise. */
            isMobilePreferred(): boolean;
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
         * Builder for an expanded text ad under construction.
         *
         * Typical usage:
         *
         *      var adOperation = adGroup.newAd().expandedTextAdBuilder()
         *        .withHeadlinePart1("First headline of ad")
         *        .withHeadlinePart2("Second headline of ad")
         *        .withDescription("Ad description")
         *        .withPath1("path1")
         *        .withPath2("path2")
         *        .withFinalUrl("http://www.example.com")
         *        .build();
         *      var ad = adOperation.getResult();
         */
        interface ExpandedTextAdBuilder extends Base.Builder<AdOperation> {
            /** Sets the custom parameters of the new ad to the specified value. */
            withCustomParameters(customParameters: Record<string, string>): this;
            /** Sets the new ad's description to the specified value. */
            withDescription(description: string): this;
            /** Sets the new ad's first description to the specified value. */
            withDescription1(description1: string): this;
            /** Sets the new ad's second description to the specified value. */
            withDescription2(description2: string): this;
            /** Sets the final URL of the new ad to the specified value. */
            withFinalUrl(finalUrl: string): this;
            /** Sets the final URL suffix of the new ad to the specified value. */
            withFinalUrlSuffix(suffix: string): this;
            /** Sets the first part of the new ad's headline to the specified value. */
            withHeadlinePart1(headlinePart1: string): this;
            /** Sets the second part of the new ad's headline to the specified value. */
            withHeadlinePart2(headlinePart2: string): this;
            /** Sets the third part of the new ad's headline to the specified value. */
            withHeadlinePart3(headlinePart3: string): this;
            /** Sets the mobile final URL of the new ad to the specified value. */
            withMobileFinalUrl(mobileFinalUrl: string): this;
            /** Sets the first path that appears with the new ad's displayed URL. */
            withPath1(urlPath1: string): this;
            /** Sets the second path that appears with the new ad's displayed URL. */
            withPath2(urlPath2: string): this;
            /** Sets the tracking template of the new ad to the specified value. */
            withTrackingTemplate(trackingTemplate: string): this;
        }
    }
}
