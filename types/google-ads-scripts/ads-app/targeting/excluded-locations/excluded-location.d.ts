declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /**
         * Represents a Google Ads excluded location.
         *
         * Excluded locations are used to restrict your ads from showing in specific geographic areas.
         * For instance, a campaign could show ads in all parts of a country except for a specific city by having a TargetedLocation
         * for the entire country and an ExcludedLocation for that specific city.
         */
        interface ExcludedLocation {
            /** Returns the base campaign to which this excluded location belongs. */
            getBaseCampaign(): Campaign;
            /** Returns the campaign to which this excluded location belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign;
            /** Returns the campaign type. */
            getCampaignType(): string;
            /** Returns the country code of this location. */
            getCountryCode(): string;
            /** Returns the type of this entity as a String, in this case, "ExcludedLocation". */
            getEntityType(): string;
            /** Returns the ID of the excluded location. */
            getId(): number;
            /** Returns the name of this location. */
            getName(): string;
            /** Returns the shopping campaign to which this excluded location belongs or null if it does not belong to a shopping campaign. */
            getShoppingCampaign(): ShoppingCampaign;
            /** Returns the target type of this location. */
            getTargetType(): string;
            /** Returns the targeting status of this location. */
            getTargetingStatus(): string;
            /** Returns the video campaign to which this excluded location belongs or null if it does not belong to a video campaign. */
            getVideoCampaign(): VideoCampaign;
            /** Removes the excluded location. */
            remove(): void;
        }

        /**
         * An iterator of excluded locations.
         *
         * Typical usage:
         *
         *      while (excludedLocationIterator.hasNext()) {
         *        var excludedLocation = excludedLocationIterator.next();
         *      }
         */
        interface ExcludedLocationIterator extends Base.Iterator<ExcludedLocation> {}

        /** An operation representing creation of a new excluded location. */
        interface ExcludedLocationOperation extends Base.Operation<ExcludedLocation> {}

        /**
         * Fetches excluded locations. Unlike other selectors, does not support filtering or sorting.
         *
         * Typical usage:
         *
         *      var locationSelector = AdsApp.targeting().excludedLocations();
         *
         *      var locationIterator = locationSelector.get();
         *      while (locationIterator.hasNext()) {
         *        var location = locationIterator.next();
         *      }
         */
        interface ExcludedLocationSelector extends Base.Selector<ExcludedLocationIterator>, Base.SelectorWithLimit {}
    }
}
