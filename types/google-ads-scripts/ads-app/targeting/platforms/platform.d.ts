declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads device target (either desktop, mobile, or tablet). */
        interface Platform extends Base.StatsFor {
            /** Returns the base campaign to which this platform belongs. */
            getBaseCampaign(): Campaign;
            /** Returns the bid modifier for this platform. */
            getBidModifier(): number;
            /** Returns the campaign to which this platform belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign;
            /** Returns the campaign type. */
            getCampaignType(): string;
            /** Returns the type of this entity as a String, in this case, "Platform". */
            getEntityType(): string;
            /** Returns the ID of the platform. */
            getId(): number;
            /** Returns the name of this platform. */
            getName(): string;
            /** Returns the shopping campaign to which this platform belongs or null if it does not belong to a shopping campaign. */
            getShoppingCampaign(): ShoppingCampaign;
            /** Returns the video campaign to which this platform belongs or null if it does not belong to a video campaign. */
            getVideoCampaign(): VideoCampaign;
            /** Sets the bid modifier for this platform. */
            setBidModifier(modifier: number): void;
        }

        /**
         * An iterator of platforms.
         *
         * Typical usage:
         *
         *      while (platformIterator.hasNext()) {
         *        var platform = platformIterator.next();
         *      }
         */
        interface PlatformIterator extends Base.Iterator<Platform> {}

        /**
         * Fetches platforms. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var platformSelector = AdsApp.targeting()
         *          .platforms()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var platformIterator = platformSelector.get();
         *      while (platformIterator.hasNext()) {
         *        var platform = platformIterator.next();
         *      }
         */
        interface PlatformSelector
            extends Base.Selector<PlatformIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {
            /** Restricts this selector to only select desktop targets. */
            desktop(): this;
            /** Restricts this selector to only select mobile targets. */
            mobile(): this;
            /** Restricts this selector to only select tablet targets. */
            tablet(): this;
        }
    }
}
