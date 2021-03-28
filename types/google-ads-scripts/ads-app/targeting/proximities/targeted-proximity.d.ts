declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads targeted proximity — some radius around a geographical point. */
        interface TargetedProximity extends Base.StatsFor {
            /** Returns the address of the central point, or null if unknown. */
            getAddress(): Address;
            /** Returns the base campaign to which this targeted proximity belongs. */
            getBaseCampaign(): Campaign;
            /** Returns the bid modifier for this targeted proximity. */
            getBidModifier(): number;
            /** Returns the campaign to which this targeted proximity belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign;
            /** Returns the campaign type. */
            getCampaignType(): string;
            /** Returns the type of this entity as a String, in this case, "TargetedProximity". */
            getEntityType(): string;
            /** Returns the ID of the targeted proximity. */
            getId(): number;
            /** Returns the latitude in degrees of the central point of this proximity. */
            getLatitude(): number;
            /** Returns the longitude in degrees of the central point of this proximity. */
            getLongitude(): number;
            /** Returns the radius around the central point to target. */
            getRadius(): number;
            /** Returns the units of `TargetedProximity.getRadius()`. */
            getRadiusUnits(): string;
            /** Returns the shopping campaign to which this targeted proximity belongs or null if it does not belong to a shopping campaign. */
            getShoppingCampaign(): ShoppingCampaign;
            /** Returns the video campaign to which this targeted proximity belongs or null if it does not belong to a video campaign. */
            getVideoCampaign(): VideoCampaign;
            /** Removes the targeted proximity. */
            remove(): void;
            /** Sets the bid modifier for this targeted proximity. */
            setBidModifier(modifier: number): void;
        }

        /**
         * An iterator of targeted proximities.
         *
         * Typical usage:
         *
         *      while (targetedProximityIterator.hasNext()) {
         *        var targetedProximity = targetedProximityIterator.next();
         *      }
         */
        interface TargetedProximityIterator extends Base.Iterator<TargetedProximity> {}

        /** Plain JavaScript objects describing a proximity. */
        interface TargetedProximityObject {
            latitude: number;
            longitude: number;
            radius: number;
            radiusUnits: string;
            bidModifier?: number;
            address?: AddressObject;
        }

        /** An operation representing creation of a new targeted proximity. */
        interface TargetedProximityOperation extends Base.Operation<TargetedProximity> {}

        /**
         * Fetches targeted proximities. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var targetedProximitySelector = AdsApp.targeting()
         *          .targetedProximities()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var targetedProximityIterator = targetedProximitySelector.get();
         *      while (targetedProximityIterator.hasNext()) {
         *        var targetedProximity = targetedProximityIterator.next();
         *      }
         */
        interface TargetedProximitySelector
            extends Base.Selector<TargetedProximityIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
