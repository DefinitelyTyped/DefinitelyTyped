declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /**
         * Represents an ad customizer data item.
         * Each ad customizer item can be seen as one row in an ad customizer source in the Business Data section of the Shared Library.
         * Ad customizer items have attribute values, which are values that correspond to the attributes of the item's source (see `AdCustomizerSource`).
         * These values can be substituted into an ad with placeholders of the form `{=SourceName.AttributeName}`.
         * Refer to the feature guide for more information.
         */
        interface AdCustomizerItem {
            /** Clears the ad customizer item's end date. */
            clearEndDate(): void;
            /** Clears the ad customizer item's start date. */
            clearStartDate(): void;
            /** Clears the set target ad group and campaign. */
            clearTargetAdGroup(): void;
            /** Clears the set target campaign. */
            clearTargetCampaign(): void;
            /** Clears the set target keyword. */
            clearTargetKeyword(): void;
            /** Returns the value of the named attribute. */
            getAttributeValue(name: string): any;
            /** Returns a map from attribute name to attribute value. */
            getAttributeValues(): Record<string, string | number>;
            /** Returns the end date of the ad customizer item, or null if no end date is set. */
            getEndDate(): GoogleAdsDate;
            /** Clears the ad customizer item's end date. */
            getEntityType(): string;
            /** Clears the ad customizer item's end date. */
            getId(): number;
            /** Clears the ad customizer item's end date. */
            getSchedules(): ExtensionSchedule[];
            /** Clears the ad customizer item's end date. */
            getStartDate(): GoogleAdsDate;
            /** Clears the ad customizer item's end date. */
            getTargetAdGroupName(): string;
            /** Clears the ad customizer item's end date. */
            getTargetCampaignName(): string;
            /** Clears the ad customizer item's end date. */
            getTargetKeywordText(): string;
            /** Clears the ad customizer item's end date. */
            isMobilePreferred(): boolean;
            /** Clears the ad customizer item's end date. */
            remove(): void;
            /** Clears the ad customizer item's end date. */
            setAttributeValue(name: string, value: any): void;
            /** Clears the ad customizer item's end date. */
            setAttributeValues(attributes: any): void;
            /** Clears the ad customizer item's end date. */
            setEndDate(date: string | GoogleAdsDate): void;
            /** Clears the ad customizer item's end date. */
            setMobilePreferred(isMobilePreferred: boolean): void;
            /** Clears the ad customizer item's end date. */
            setSchedules(schedules: any[]): void;
            /** Clears the ad customizer item's end date. */
            setStartDate(date: string | GoogleAdsDate): void;
            /** Clears the ad customizer item's end date. */
            setTargetAdGroup(campaignName: string, adGroupName: string): void;
            /** Clears the ad customizer item's end date. */
            setTargetCampaign(campaignName: string): void;
            /** Clears the ad customizer item's end date. */
            setTargetKeyword(keywordText: string): void;
        }

        /**
         * Builder for AdCustomizerItem objects. Example usage:
         *
         *      adCustomizerSource.adCustomizerItemBuilder()
         *        .withAttributeValues({numLeft: 5, lowCost: "$0.99"}) // at least one value is required
         *        .withTargetCampaign("Campaign name")                 //
         *        .withTargetKeyword("[keyword]")                      // optional
         *        .withMobilePreferred(true)                           // optional
         *        .build();                                            // create the ad customizer item
         */
        interface AdCustomizerItemBuilder extends Base.Builder<AdCustomizerItemOperation> {
            /** Sets the value of the named attribute of the ad customizer item. */
            withAttributeValue(name: string, value: string | number | null): this;
            /**
             * Sets the values of the ad customizer item's attributes.
             * Expects an object containing the name-value pairs of the attribute values to set. For instance,
             * `adCustomizerItemBuilder.withAttributeValues({numLeft: 5, lowCost: "$0.99"})` sets the attribute `numLeft` to have the value `5`,
             * and `lowCost` to have value `"$0.99"`.
             */
            withAttributeValues(attributeValues: Record<string, string | number | null>): this;
            /**
             * Sets the ad customizer item's end date from either an object containing year, month, and day fields, or an 8-digit string in YYYYMMDD format.
             * This field is optional.
             */
            withEndDate(date: string | GoogleAdsDate): this;
            /**
             * Sets the ad customizer item's end date from either an object containing year, month, and day fields, or an 8-digit string in YYYYMMDD format.
             * This field is optional.
             * @param isMobilePreferred Whether or not this ad customizer item should be mobile preferred. If true is passed in, device preference will be set to mobile.
             * If false is passed in, device preference will be set to none.
             */
            withMobilePreferred(isMobilePreferred: boolean): this;
            /**
             * Sets the ad customizer item scheduling. Scheduling of a ad customizer item allows you to control the days of week and times of day during which
             * the ad customizer item will show alongside your ads.
             * Passing in an empty array clears the scheduling field, causing the ad customizer item to run at all times.
             *
             * The following example sets the ad customizer item to run on Mondays and Tuesday from 8:00 to 11:00.
             *
             *
             *      var mondayMorning = {
             *        dayOfWeek: "MONDAY",
             *        startHour: 8,
             *        startMinute: 0,
             *        endHour: 11,
             *        endMinute: 0
             *      };
             *      var tuesdayMorning = {
             *        dayOfWeek: "TUESDAY",
             *        startHour: 8,
             *        startMinute: 0,
             *        endHour: 11,
             *        endMinute: 0
             *      };
             *
             *      adCustomizerItemBuilder.withSchedules([mondayMorning, tuesdayMorning]);
             */
            withSchedules(schedules: ExtensionSchedule[]): this;
            /** Sets the ad customizer item's start date from either an object containing year, month, and day fields, or an 8-digit string in YYYYMMDD format. This field is optional. */
            withStartDate(date: string | GoogleAdsDate): this;
            /** Sets the target ad group and campaign of the new ad customizer item. This will fail if there were any previous calls to `withTargetCampaign("previous campaign")`. */
            withTargetAdGroup(campaignName: string, adGroupName: string): this;
            /** Sets the target campaign of the new ad customizer item. This will fail if there were any previous calls to `withTargetAdGroup("previous ad group", "campaign")`. */
            withTargetCampaign(campaignName: string): this;
            /**
             * Sets the target keyword of the new ad customizer item.
             * The keyword includes its match type.
             * For instance, `adCustomizerItemBuilder.withTargetKeyword("[shoes]");` will target exact matches to "shoes".
             * Setting the target keyword to one that does not yet exist in your account will not cause an error, but will prevent the ad customizer item from being used to populate ads
             * (until you create the keyword in your account).
             */
            withTargetKeyword(keyword: string): this;
        }

        /**
         * An iterator of ad customizer items.
         * Typical usage:
         *
         *      while (adCustomizerItemIterator.hasNext()) {
         *        var adCustomizerItem = adCustomizerItemIterator.next();
         *      }
         */
        interface AdCustomizerItemIterator extends Base.Iterator<AdCustomizerItem> {}

        /**
         * An operation representing creation of a new ad customizer item.
         * Calling any method (getErrors, getResult, or isSuccessful) will cause the operation to execute and create the ad customizer item.
         * To make the script more efficient, it's recommended that you store the operations in an array and only call these methods once you've constructed all the operations you want.
         */
        interface AdCustomizerItemOperation extends Base.Operation<AdCustomizerItem> {}

        /**
         * Fetches ad customizer items. Supports filtering and sorting.
         * Typical usage:
         *
         *       var adCustomizerItemSelector = adCustomizerSource
         *         .items()
         *         .withCondition("Impressions > 100")
         *         .forDateRange("LAST_MONTH")
         *         .orderBy("Clicks DESC");
         *
         *       var adCustomizerItemIterator = adCustomizerItemSelector.get();
         *       while (adCustomizerItemIterator.hasNext()) {
         *         var adCustomizerItem = adCustomizerItemIterator.next();
         *       }
         */
        interface AdCustomizerItemSelector
            extends Base.Selector<AdCustomizerItemIterator>,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit,
                Base.SelectorOrderBy,
                Base.SelectorForDateRange {}
    }
}
