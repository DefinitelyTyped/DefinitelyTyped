declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents an Image ad. */
        interface ImageAd extends Base.StatsFor {
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
            /** Returns the type of this entity as a String, in this case, "Ad". */
            getEntityType(): string;
            /** Returns the ID of the ad. */
            getId(): number;
            /** Returns the ad's image. */
            getImage(): Media;
            /** Returns the name of the ad. */
            getName(): string;
            /** Returns the policy approval status of the ad. */
            getPolicyApprovalStatus(): string;
            /** Returns the list of policy topics associated with the ad. */
            getPolicyTopics(): PolicyTopic[];
            /** Returns the type of the ad. */
            getType(): string;
            /** Returns true if the ad is enabled. */
            isEnabled(): boolean;
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
         * Builder for an image ad under construction.
         *
         * Typical usage:
         *
         *      var adOperation = adGroup.newAd().imageAdBuilder()
         *        .withName("Ad name")
         *        .withImage(image)
         *        .withDisplayUrl("http://www.example.com")
         *        .withFinalUrl("http://www.example.com")
         *        .build();
         *      var ad = adOperation.getResult();
         */
        interface ImageAdBuilder extends Base.Builder<AdOperation> {
            /** Sets the custom parameters of the new ad to the specified value. */
            withCustomParameters(customParameters: Record<string, string>): this;
            /** Sets the display URL of the new ad to the specified value. */
            withDisplayUrl(displayUrl: string): this;
            /** Sets the final URL of the new ad to the specified value. */
            withFinalUrl(finalUrl: string): this;
            /** Sets the final URL suffix of the new ad to the specified value. */
            withFinalUrlSuffix(suffix: string): this;
            /** Sets new ad's image. */
            withImage(image: Media): this;
            /** Sets the mobile final URL of the new ad to the specified value. */
            withMobileFinalUrl(mobileFinalUrl: string): this;
            /** Sets new ad's name to the specified value. */
            withName(name: string): this;
            /** Sets the tracking template of the new ad to the specified value. */
            withTrackingTemplate(trackingTemplate: string): this;
        }
    }
}
