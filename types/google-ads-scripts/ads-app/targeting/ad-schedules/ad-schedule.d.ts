declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents one period of a Google Ads ad schedule. */
        interface AdSchedule extends Base.StatsFor {
            /** Returns the base campaign to which this ad schedule belongs. */
            getBaseCampaign(): Campaign;
            /** Returns the bid modifier for this ad schedule. */
            getBidModifier(): number;
            /** Returns the campaign to which this ad schedule belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign;
            /** Returns the campaign type. */
            getCampaignType(): string;
            /** Returns the day of week this ad schedule applies to. */
            getDayOfWeek(): AdScheduleDayOfWeekType;
            /** Returns the ending hour of this ad schedule. */
            getEndHour(): number;
            /** Returns the ending minute of this ad schedule. */
            getEndMinute(): number;
            /** Returns the type of this entity as a String, in this case, "AdSchedule". */
            getEntityType(): string;
            /** Returns the ID of the ad schedule. */
            getId(): number;
            /** Returns the shopping campaign to which this ad schedule belongs or null if it does not belong to a shopping campaign. */
            getShoppingCampaign(): ShoppingCampaign;
            /** Returns the starting hour of this ad schedule. */
            getStartHour(): number;
            /** Returns the starting minute of this ad schedule. */
            getStartMinute(): number;
            /** Returns the video campaign to which this ad schedule belongs or null if it does not belong to a video campaign. */
            getVideoCampaign(): VideoCampaign;
            /** Removes the ad schedule. */
            remove(): void;
            /** Sets the bid modifier for this ad schedule. */
            setBidModifier(modifier: number): void;
        }

        const AdScheduleDayOfWeek: {
            Monday: "MONDAY";
            Tuesday: "TUESDAY";
            Wednesday: "WEDNESDAY";
            Thursday: "THURSDAY";
            Friday: "FRIDAY";
            Saturday: "SATURDAY";
            Sunday: "SUNDAY";
        };

        type AdScheduleDayOfWeekType = typeof AdScheduleDayOfWeek[keyof typeof AdScheduleDayOfWeek];

        /**
         * An iterator of ad schedules.
         *
         * Typical usage:
         *
         *      while (adScheduleIterator.hasNext()) {
         *        var adSchedule = adScheduleIterator.next();
         *      }
         */
        interface AdScheduleIterator extends Base.Iterator<AdSchedule> {}

        /** A plain JavaScript object describing an ad schedule. */
        interface AdScheduleObject {
            dayOfWeek: AdScheduleDayOfWeekType;
            startHour: number;
            startMinute: number;
            endHour: number;
            endMinute: number;
            bidModifier?: number;
        }

        /** An operation representing creation of a new ad schedule. */
        interface AdScheduleOperation extends Base.Operation<AdSchedule> {}

        /**
         * Fetches ad schedules. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var adScheduleSelector = AdsApp.targeting()
         *          .adSchedules()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var adScheduleIterator = adScheduleSelector.get();
         *      while (adScheduleIterator.hasNext()) {
         *        var adSchedule = adScheduleIterator.next();
         *      }
         */
        interface AdScheduleSelector
            extends Base.Selector<AdScheduleIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
