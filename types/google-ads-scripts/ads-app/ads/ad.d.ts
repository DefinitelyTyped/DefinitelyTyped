declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads ad. */
        interface Ad extends Base.StatsFor {
            /** Applies a label to the ad. */
            applyLabel(name: string): void;
            /** Returns an AdViewSpace, which provides access to type-specific fields of the ad. */
            asType(): AdViewSpace;
            /** Enables the ad. */
            enable(): void;
            /** Returns the ad group to which this ad belongs. */
            getAdGroup(): AdGroup;
            /** Returns the base ad group to which this ad belongs. */
            getBaseAdGroup(): AdGroup;
            /** Returns the base campaign to which this ad belongs. */
            getBaseCampaign(): Campaign;
            /** Returns the campaign to which this ad belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign;
            /** Returns the first line of the ad description or null if the ad is not a text ad. */
            getDescription1(): string;
            /** Returns the second line of the ad description or null if the ad is not a text ad. */
            getDescription2(): string;
            /** Returns the display URL of the ad. */
            getDisplayUrl(): string;
            /** Returns the type of this entity as a String, in this case, "Ad". */
            getEntityType(): string;
            /** Returns the headline of the ad or null if the ad is not a text ad. */
            getHeadline(): string;
            /** Returns the ID of the ad. */
            getId(): number;
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

        /** Starting point for creating an ad in an ad group. */
        interface AdBuilderSpace {
            /** Returns a new expanded text ad builder associated with the ad group. */
            expandedTextAdBuilder(): ExpandedTextAdBuilder;
            /** Returns a new image ad builder associated with the ad group. */
            imageAdBuilder(): ImageAdBuilder;
            /** Returns a new responsive Display ad builder associated with the ad group. */
            responsiveDisplayAdBuilder(): ResponsiveDisplayAdBuilder;
            /** Returns a new responsive Search ad builder associated with the ad group. */
            responsiveSearchAdBuilder(): ResponsiveSearchAdBuilder;
        }

        /**
         * An iterator of ads.
         *
         * Typical usage:
         *
         *      while (adIterator.hasNext()) {
         *        var ad = adIterator.next();
         *      }
         */
        interface AdIterator extends Base.Iterator<Ad> {}

        /** An operation representing creation of a new ad. */
        interface AdOperation extends Base.Operation<Ad> {}

        /** Fetches ads in an account, except from shared libraries. Supports filtering and sorting. */
        interface AdSelector
            extends Base.Selector<AdIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}

        /** A Text asset with an optional pinning. */
        interface AdTextAsset {
            /** The (possibly null) pinned location for this asset. */
            pinning?: string;
            /** The text of this asset (e.g. "headline"). */
            text: string;
        }

        /**
         * Starting point for determining the type of an ad.
         * For types that are not fully supported, use Ad.getType instead.
         *
         * Typical usage:
         *
         *      if (ad.isType().expandedTextAd()) {
         *        var expandedTextAd = ad.asType().expandedTextAd();
         *        var headlinePart1 = expandedTextAd.getHeadlinePart1();
         *      }
         */
        interface AdTypeSpace {
            /** Returns whether the ad is an ExpandedTextAd. */
            expandedTextAd(): boolean;
            /** Returns whether the ad is a GmailImageAd. */
            gmailImageAd(): boolean;
            /** Returns whether the ad is a GmailMultiProductAd. */
            gmailMultiProductAd(): boolean;
            /** Returns whether the ad is a GmailSinglePromotionAd. */
            gmailSinglePromotionAd(): boolean;
            /** Returns whether the ad is a Html5Ad. */
            html5Ad(): boolean;
            /** Returns whether the ad is an ImageAd. */
            imageAd(): boolean;
            /** Returns whether the ad is a ResponsiveDisplayAd. */
            responsiveDisplayAd(): boolean;
            /** Returns whether the ad is a ResponsiveSearchAd. */
            responsiveSearchAd(): boolean;
        }

        /**
         * Provides access to ad URLs. See Using [Upgraded URLs](https://support.google.com/google-ads/answer/6080568) for more information.
         */
        interface AdUrls {
            getCustomParameters(): Record<string, string>;
            getFinalUrl(): string;
            getFinalUrlSuffix(): string;
            getMobileFinalUrl(): string;
            getTrackingTemplate(): string;
        }

        /**
         * Starting point for viewing type-specific ad information.
         *
         * Typical usage:
         *
         *      if (ad.isType().expandedTextAd()) {
         *        var expandedTextAd = ad.asType().expandedTextAd();
         *        var headlinePart1 = expandedTextAd.getHeadlinePart1();
         *      }
         */
        interface AdViewSpace {
            /** Returns the ad as an ExpandedTextAd. */
            expandedTextAd(): ExpandedTextAd;
            /* Returns the ad as a GmailImageAd. */
            gmailImageAd(): GmailImageAd;
            /** Returns the ad as a GmailMultiProductAd. */
            gmailMultiProductAd(): GmailMultiProductAd;
            /** Returns the ad as a GmailSinglePromotionAd. */
            gmailSinglePromotionAd(): GmailSinglePromotionAd;
            /** Returns the ad as a Html5Ad. */
            html5Ad(): Html5Ad;
            /** Returns the ad as an ImageAd. */
            imageAd(): ImageAd;
            /** Returns the ad as a ResponsiveDisplayAd. */
            responsiveDisplayAd(): ResponsiveDisplayAd;
            /** Returns the ad as a ResponsiveSearchAd. */
            responsiveSearchAd(): ResponsiveSearchAd;
        }
    }
}
