// tslint:disable: unified-signatures
declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /**
         * Provides access to shopping campaign-level targeting criteria (currently just audiences).
         *
         * For instance, to select all audiences targeted by shopping campaigns you might use:
         *
         *      var shoppingAudienceSelector = AdsApp.shoppingCampaignTargeting()
         *       .audiences()
         *       .withCondition("Impressions > 100")
         *       .forDateRange("LAST_MONTH")
         *       .orderBy("Clicks DESC");
         *
         *      var shoppingAudienceIterator = shoppingAudienceSelector.get();
         *      while (shoppingAudienceIterator.hasNext()) {
         *        var shoppingAudience = shoppingAudienceIterator.next();
         *      }
         */
        interface AccountShoppingCampaignTargeting {
            /** Specializes this selector to return ShoppingCampaignAudience criteria. */
            audiences(): ShoppingCampaignAudienceSelector;
        }

        /** Represents a shopping campaign. */
        interface ShoppingCampaign extends Base.StatsFor {
            /** Returns the selector of all shopping ad groups in the shopping campaign. */
            adGroups(): ShoppingAdGroupSelector;
            /**
             * Creates an ad schedule criterion from an ad schedule object. Once created, the campaign will start showing ads during the specified time.
             *
             * When called with one argument, addAdSchedule supports two kinds of input:
             *
             * Existing AdSchedule objects, perhaps from another campaign:
             *
             *      var campaigns = AdsApp.campaigns().get();
             *      var campaign1 = campaigns.next();
             *      var campaign2 = campaigns.next();
             *      var schedule = campaign1.targeting().adSchedules().get().next();
             *      campaign2.addAdSchedule(schedule);
             *
             * Plain JavaScript objects describing an ad schedule. For instance, this will create an ad schedule covering Saturday mornings:
             *
             *      var campaign = AdsApp.campaigns().get().next();
             *      campaign.addAdSchedule({
             *        dayOfWeek: "SATURDAY",
             *        startHour: 7,
             *        startMinute: 0,
             *        endHour: 11,
             *        endMinute: 0,
             *        bidModifier: 1.1
             *      });
             *
             * This will look at the following properties of the given object:
             *
             * - `dayOfWeek`: **Required**. Must be one of `"MONDAY"`, `"TUESDAY"`, `"WEDNESDAY"`, `"THURSDAY"`, `"FRIDAY"`, `"SATURDAY"`, or `"SUNDAY"`.
             * - `startHour` and `startMinute`: **Required**. The starting time of this segment of the ad schedule. `startHour` must be an integer between 0 and 23,
             * and `startMinute` must be either 0, 15, 30, or 45. For instance, a `startHour` of 18 and a `startMinute` of 30 would result in an ad schedule starting at 6:30PM.
             * Acceptable starting times range from 00:00 to 23:45.
             * - `endHour` and `endMinute`: **Required**. The ending time of this segment of the ad schedule. `endHour` must be an integer between 0 and 24, and `endMinute` must
             * be either 0, 15, 30, or 45. For instance, a `endHour` of 18 and a `endMinute` of 30 would result in an ad schedule ending at 6:30PM. Acceptable ending times rang
             * from 00:15 to 24:00.
             * - `bidModifier`: **Optional**. The bid modifier for this segment of the ad schedule.
             *
             * One thing to keep in mind is that, by default, campaigns have no ad schedule criteria and hence serve ads at all times.
             * Adding the first ad schedule to a campaign will cause ads to be shown during that time only.
             *
             * There is a limit of 6 ad schedules for each day of the week — for instance, splitting up each day into 6 4-hour-long periods is supported,
             * but splitting up each day into 24 1-hour-long periods is not.
             */
             addAdSchedule(adSchedule: AdScheduleObject): AdScheduleOperation;
             /**
              * Creates an ad schedule criterion. Once created, the campaign will start showing ads during the specified time.
              *
              * For instance, this will create an ad schedule covering Saturday mornings:
              *
              *      var campaign = AdsApp.campaigns().get().next();
              *      campaign.addAdSchedule("SATURDAY", 7, 0, 11, 0);
              *
              * This will create the same schedule, but with a bid modifier of 1.1:
              *
              *      var campaign = AdsApp.campaigns().get().next();
              *      campaign.addAdSchedule("SATURDAY", 7, 0, 11, 0, 1.1);
              *
              * One thing to keep in mind is that, by default, campaigns have no ad schedule criteria and hence serve ads at all times.
              * Adding the first ad schedule to a campaign will cause ads to be shown during that time only.
              *
              * There is a limit of 6 ad schedules for each day of the week — for instance, splitting up each day into 6 4-hour-long periods is supported,
              * but splitting up each day into 24 1-hour-long periods is not.
              *
              * @param dayOfWeek The day of week. Must be one of `"MONDAY"`, `"TUESDAY"`, `"WEDNESDAY"`, `"THURSDAY"`, `"FRIDAY"`, `"SATURDAY"`, or `"SUNDAY"`.
              * @param startHour The start hour. Must be an integer between `0` and `23`. Acceptable starting times range from `00:00` to `23:45`.
              * @param startMinute The start minute. Must be either `0`, `15`, `30`, or `45`. Acceptable starting times range from `00:00` to `23:45`.
              * @param endHour The end hour. Must be an integer between `0` and `24`. Acceptable ending times range from `00:15` to `24:00`.
              * @param endMinute The end minute. Must be either `0`, `15`, `30`, or `45`. Acceptable ending times range from `00:15` to `24:00`.
              * @param bidModifier **Optional**. The bid modifier to use for the newly created ad schedule.
              */
             addAdSchedule(
                 dayOfWeek: string,
                 startHour: number,
                 startMinute: number,
                 endHour: number,
                 endMinute: number,
                 bidModifier?: number,
             ): AdScheduleOperation;
            /** Creates a location target in this campaign from a location ID. */
            addLocation(locationId: number): TargetedLocationOperation;
            /** Creates a location target in this campaign from a location. */
            addLocation(location: TargetedLocation): TargetedLocationOperation;
            /** Creates a location target in this campaign from a location JSON. */
            addLocation(location: { id: number; bidModifier?: number }): TargetedLocationOperation;
            /** Creates a location target in this campaign from a location ID and bid modifier. */
            addLocation(locationId: number, bidModifier: number): TargetedLocationOperation;
            /** Adds a negative keyword list to this campaign. */
            addNegativeKeywordList(negativeKeywordList: NegativeKeywordList): void;
            /** Creates a proximity target in this campaign from a proximity object. */
            addProximity(proximity: TargetedProximityObject): TargetedProximityOperation;
            /** Creates a proximity target in this campaign. */
            addProximity(
                latitude: number,
                longitude: number,
                radius: number,
                radiusUnits: string,
                optArgs?: { bidModifier?: number; address?: AddressObject },
            ): TargetedProximityOperation;
            /** Returns the selector of all product ads in the shopping campaign. */
            ads(): ProductAdSelector;
            /** Applies a label to the shopping campaign. */
            applyLabel(name: string): void;
            /** Provides access to this shopping campaign's bidding fields. */
            bidding(): ShoppingCampaignBidding;
            /** Creates a new campaign-level negative keyword with the specified text. */
            createNegativeKeyword(keywordText: string): void;
            /** Enables the shopping campaign. */
            enable(): void;
            /** Creates a location exclusion in this campaign. */
            excludeLocation(location: ExcludedLocation): ExcludedLocationOperation;
            /** Creates a location exclusion in this campaign. */
            excludeLocation(locationId: number): ExcludedLocationOperation;
            /** Creates a location exclusion in this campaign for the specified JSON. */
            excludeLocation(location: TargetedLocationObject): ExcludedLocationOperation;
            /** Returns the ad rotation type of the shopping campaign. */
            getAdRotationType(): string;
            /** Returns the bidding strategy type of the shopping campaign. */
            getBiddingStrategyType(): string;
            /** Returns the budget of the shopping campaign. */
            getBudget(): Budget;
            /** Returns the shopping campaign's end date, or null if there is no end date. */
            getEndDate(): GoogleAdsDate;
            /** Returns the type of this entity as a String, in this case, "ShoppingCampaign". */
            getEntityType(): string;
            /** Returns the ID of the shopping campaign. */
            getId(): number;
            /** Returns the name of the shopping campaign. */
            getName(): string;
            /** Returns the shopping campaign's start date. */
            getStartDate(): GoogleAdsDate;
            /** Returns true if the shopping campaign is deleted. */
            isDeleted(): boolean;
            /** Returns true if the shopping campaign is enabled. */
            isEnabled(): boolean;
            /** Returns true if the shopping campaign is paused. */
            isPaused(): boolean;
            /** Creates a selector of all labels applied to the shopping campaign. */
            labels(): LabelSelector;
            /** Returns a selector of negative keyword lists associated with this campaign. */
            negativeKeywordLists(): NegativeKeywordListSelector;
            /** Returns a selector of the campaign-level negative keywords belonging to this campaign. */
            negativeKeywords(): NegativeKeywordSelector;
            /** Returns a new shopping ad group builder for this shopping campaign. */
            newAdGroupBuilder(): ShoppingAdGroupBuilder;
            /** Pauses the shopping campaign. */
            pause(): void;
            /** Returns the selector of all product groups in the campaign. */
            productGroups(): ProductGroupSelector;
            /** Removes a label from the shopping campaign. */
            removeLabel(name: string): void;
            /** Removes a negative keyword list from this campaign. */
            removeNegativeKeywordList(negativeKeywordList: NegativeKeywordList): void;
            /** Sets the ad rotation type of the shopping campaign. */
            setAdRotationType(adRotationType: string): void;
            /** Sets the shopping campaign's end date from either an object containing year, month, and day fields, or an 8-digit string in YYYYMMDD format. */
            setEndDate(date: string | GoogleAdsDate): void;
            /** Sets the name of the shopping campaign. */
            setName(name: string): void;
            /** Sets the shopping campaign's start date from either an object containing year, month, and day fields, or an 8-digit string in YYYYMMDD format. */
            setStartDate(date: string | GoogleAdsDate): void;
            /** Provides access to campaign-level targeting criteria: device targeting, ad scheduling, location targeting, and audiences. */
            targeting(): ShoppingCampaignTargeting;
            /** Provides access to this shopping campaign's URL fields. */
            urls(): CampaignUrls;
        }

        /** Provides access to a shopping campaign's bidding fields. */
        interface ShoppingCampaignBidding {
            /** Returns the flexible bidding strategy of the shopping campaign. */
            getStrategy(): BiddingStrategy;
            /** Returns the bidding strategy source of this shopping campaign. */
            getStrategySource(): string;
            /** Returns the bidding strategy type of this shopping campaign. */
            getStrategyType(): string;
            /** Sets the bidding strategy of this shopping campaign to the specified standard bidding strategy. */
            setStrategy(biddingStrategy: string): void;
            /** Sets the bidding strategy of this shopping campaign to the provided portfolio bidding strategy. */
            setStrategy(biddingStrategy: string): void;
        }

        /**
         * An iterator of shopping campaigns.
         *
         * Typical usage:
         *
         *      while (shoppingCampaignIterator.hasNext()) {
         *        var shoppingCampaign = shoppingCampaignIterator.next();
         *      }
         */
        interface ShoppingCampaignIterator extends Base.Iterator<ShoppingCampaign> {}

        /**
         * Fetches shopping campaigns. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var shoppingCampaignSelector = AdsApp
         *          .shoppingCampaigns()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var shoppingCampaignIterator = shoppingCampaignSelector.get();
         *      while (shoppingCampaignIterator.hasNext()) {
         *        var shoppingCampaign = shoppingCampaignIterator.next();
         *      }
         */
        interface ShoppingCampaignSelector
            extends Base.Selector<ShoppingCampaignIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}

        /**
         * Access to campaign-level targeting criteria.
         *
         * For instance, to select all locations targeted by a campaign you might use:
         *
         *  var campaign = AdsApp.shoppingCampaigns().get().next();
         *  var locations = campaign.targeting().targetedLocations().get();
         *  while (locations.hasNext()) {
         *    var location = locations.next();
         *  }
         */
        interface ShoppingCampaignTargeting {
            /** Specializes this selector to return AdSchedule criteria. */
            adSchedules(): AdScheduleSelector;
            /** Specializes this selector to return ShoppingCampaignAudience criteria. */
            audiences(): ShoppingCampaignAudienceSelector;
            /** Specializes this selector to return ExcludedLocation criteria. */
            excludedLocations(): ExcludedLocationSelector;
            /** Returns the current targeting setting of the specified criterion type group for this campaign. */
            getTargetingSetting(criterionTypeGroup: string): string;
            /** Returns a new user list audience builder for this campaign. */
            newUserListBuilder(): ShoppingCampaignAudienceBuilder;
            /** Specializes this selector to return Platform criteria. */
            platforms(): PlatformSelector;
            /** Sets the targeting setting for this campaign. */
            setTargetingSetting(criterionTypeGroup: string, targetingSetting: string): void;
            /** Specializes this selector to return TargetedLocation criteria. */
            targetedLocations(): TargetedLocationSelector;
            /** Specializes this selector to return TargetedProximity criteria. */
            targetedProximities(): TargetedProximitySelector;
        }
    }
}
