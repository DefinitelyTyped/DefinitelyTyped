// tslint:disable: unified-signatures
declare namespace GoogleAdsScripts {
    namespace AdsApp {
        interface VideoCampaign extends Base.StatsFor {
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
            /** Adds a excluded placement list to this campaign. */
            addExcludedPlacementList(excludedPlacementList: ExcludedPlacementList): void;
            /** Creates a language target in this campaign from a plain JavaScript object. */
            addLanguage(languageObject: LanguageObject): LanguageOperation;
            /** Creates a language target in this campaign from language ID. */
            addLanguage(languageId: number): LanguageOperation;
            /** Creates a language target in this campaign from an existing language object. */
            addLanguage(language: Language): LanguageOperation;
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
            /** Applies a label to the video campaign. */
            applyLabel(name: string): void;
            /** Provides access to this campaign's bidding fields. */
            bidding(): VideoCampaignBidding;
            /** Enables the video campaign. */
            enable(): void;
            /** Creates a content label exclusion in this campaign from content label type. */
            excludeContentLabel(contentLabelType: string): ExcludedContentLabelOperation;
            /** Creates a content label exclusion in this campaign. */
            excludeContentLabel(contentLabelType: ExcludedContentLabelObject): ExcludedContentLabelOperation;
            /** Creates a content label exclusion in this campaign from an existing content label object. */
            excludeContentLabel(contentLabel: ExcludedContentLabel): ExcludedContentLabelOperation;
            /** Creates a location exclusion in this campaign. */
            excludeLocation(location: ExcludedLocation): ExcludedLocationOperation;
            /** Creates a location exclusion in this campaign. */
            excludeLocation(locationId: number): ExcludedLocationOperation;
            /** Creates a location exclusion in this campaign for the specified JSON. */
            excludeLocation(location: TargetedLocationObject): ExcludedLocationOperation;
            /** Returns a selector of excluded placement lists associated with this campaign. */
            excludedPlacementLists(): ExcludedPlacementListSelector;
            /** Returns the ad rotation type of the campaign. */
            getAdRotationType(): string;
            /** Returns the bidding strategy type of the campaign. */
            getBiddingStrategyType(): string;
            /** Returns the budget of the campaign. */
            getBudget(): Budget;
            /** Returns the campaign's end date, or null if there is no end date. */
            getEndDate(): GoogleAdsDate;
            /** Returns the type of this entity as a String, in this case, "VideoCampaign". */
            getEntityType(): string;
            /** Returns frequency caps set for this campaign. */
            getFrequencyCaps(): FrequencyCaps;
            /** Returns the ID of the video campaign. */
            getId(): number;
            /** Returns the inventory type of the campaign. */
            getInventoryType(): string;
            /** Returns the name of the campaign. */
            getName(): string;
            /** Returns the advertising network setting of the campaign. */
            getNetworks(): string[];
            /** Returns the campaign's start date. */
            getStartDate(): GoogleAdsDate;
            /** Returns true if the video campaign is enabled. */
            isEnabled(): boolean;
            /** Returns true if the video campaign is paused. */
            isPaused(): boolean;
            /** Returns true if the campaign is removed. */
            isRemoved(): boolean;
            /** Creates a selector of all labels applied to the video campaign. */
            labels(): LabelSelector;
            /** Returns a selector of negative keyword lists associated with this campaign. */
            negativeKeywordLists(): NegativeKeywordListSelector;
            /** Returns a new video ad group builder for this campaign. */
            newVideoAdGroupBuilder(): VideoAdGroupBuilder;
            /** Pauses the video campaign. */
            pause(): void;
            /** Removes a excluded placement list from this campaign. */
            removeExcludedPlacementList(excludedPlacementList: ExcludedPlacementList): void;
            /** Removes a label from the video campaign. */
            removeLabel(name: string): void;
            /** Removes a negative keyword list from this campaign. */
            removeNegativeKeywordList(negativeKeywordList: NegativeKeywordList): void;
            /** Sets the ad rotation type of the campaign. */
            setAdRotationType(adRotationType: string): void;
            /** Sets the campaign's end date from either an object containing year, month, and day fields, or an 8-digit string in YYYYMMDD format. */
            setEndDate(date: string | GoogleAdsDate): void;
            /** Sets the inventory type of the campaign. */
            setInventoryType(inventoryType: string): void;
            /** Sets the name of the campaign. */
            setName(name: string): void;
            /** Sets the network setting of the campaign. */
            setNetworks(networks: string[]): void;
            /** Sets the campaign's start date from either an object containing year, month, and day fields, or an 8-digit string in YYYYMMDD format. */
            setStartDate(date: string | GoogleAdsDate): void;
            /** Provides access to campaign-level targeting criteria: device, ad scheduling, location, language, and content label. */
            targeting(): VideoCampaignTargeting;
            /** Returns the selector of all ad groups in the video campaign. */
            videoAdGroups(): VideoAdGroupSelector;
            /** Returns the selector of all ads in the video campaign. */
            videoAds(): VideoAdSelector;
            /** Provides access to this campaign's video targeting criteria. */
            videoTargeting(): CampaignVideoTargeting;
        }

        /** Provides access to a video campaign's bidding fields. */
        interface VideoCampaignBidding {
            /** Returns the bidding strategy type of this video campaign. */
            getStrategyType(): string;
        }

        /**
         * An iterator of video campaigns.
         *
         * Typical usage:
         *
         *      while (videoCampaignIterator.hasNext()) {
         *        var videoCampaign = videoCampaignIterator.next();
         *      }
         */
        interface VideoCampaignIterator extends Base.Iterator<VideoCampaign> {}

        /**
         * Fetches video campaigns. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var videoCampaignSelector = AdsApp
         *          .videoCampaigns()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var videoCampaignIterator = videoCampaignSelector.get();
         *      while (videoCampaignIterator.hasNext()) {
         *        var videoCampaign = videoCampaignIterator.next();
         *      }
         */
        interface VideoCampaignSelector
            extends Base.Selector<VideoCampaignIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
