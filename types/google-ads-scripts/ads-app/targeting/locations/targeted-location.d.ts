declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /**
         * Represents a Google Ads targeted location.
         *
         * Targeted locations are used to only show your ads in specific geographic areas.
         * For instance, a broadly-targeted campaign might have location targets for an entire country,
         * whereas a more specifically-targeted campaign might break down its location targets at the city level.
         */
        interface TargetedLocation extends Base.StatsFor {
            /** Returns the bid modifier for this targeted location. */
            getBidModifier(): number;
            /** Returns the campaign to which this targeted location belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign;
            /** Returns the campaign type. */
            getCampaignType(): string;
            /** Returns the country code of this location. */
            getCountryCode(): string;
            /** Returns the type of this entity as a String, in this case, "TargetedLocation". */
            getEntityType(): string;
            /** Returns the ID of the targeted location. */
            getId(): number;
            /** Returns the name of this location. */
            getName(): string;
            /** Returns the shopping campaign to which this targeted location belongs or null if it does not belong to a shopping campaign. */
            getShoppingCampaign(): ShoppingCampaign;
            /** Returns the target type of this location. */
            getTargetType(): string;
            /** Returns the targeting status of this location. */
            getTargetingStatus(): string;
            /** Returns the video campaign to which this targeted location belongs or null if it does not belong to a video campaign. */
            getVideoCampaign(): VideoCampaign;
            /** Removes the targeted location. */
            remove(): void;
            /** Sets the bid modifier for this targeted location. */
            setBidModifier(modifier: number): void;
        }

        /**
         * An iterator of targeted locations.
         *
         * Typical usage:
         *
         *      while (targetedLocationIterator.hasNext()) {
         *        var targetedLocation = targetedLocationIterator.next();
         *      }
         */
        interface TargetedLocationIterator extends Base.Iterator<TargetedLocation> {}

        /** A plain JavaScript object describing a location. */
        interface TargetedLocationObject {
            id: number;
            bidModifier?: number;
        }

        /** An operation representing creation of a new targeted location. */
        interface TargetedLocationOperation extends Base.Operation<TargetedLocation> {}

        /**
         * Fetches targeted locations. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var targetedLocationSelector = AdsApp.targeting()
         *          .targetedLocations()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var targetedLocationIterator = targetedLocationSelector.get();
         *      while (targetedLocationIterator.hasNext()) {
         *        var targetedLocation = targetedLocationIterator.next();
         *      }
         */
        interface TargetedLocationSelector
            extends Base.Selector<TargetedLocationIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
