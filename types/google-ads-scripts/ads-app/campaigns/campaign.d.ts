// tslint:disable: unified-signatures
declare namespace GoogleAdsScripts {
    namespace AdsApp {
        interface Campaign extends Base.StatsFor {
            /** Returns the selector of all ad groups in the campaign. */
            adGroups(): AdGroupSelector;
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
            /** Adds a callout extension to this campaign. */
            addCallout(calloutExtension: Callout): CalloutOperation;
            /** Adds a excluded placement list to this campaign. */
            addExcludedPlacementList(excludedPlacementList: ExcludedPlacementList): void;
            /** Creates a location target in this campaign from a location ID. */
            addLocation(locationId: number): TargetedLocationOperation;
            /** Creates a location target in this campaign from a location. */
            addLocation(location: TargetedLocation): TargetedLocationOperation;
            /** Creates a location target in this campaign from a location JSON. */
            addLocation(location: { id: number; bidModifier?: number }): TargetedLocationOperation;
            /** Creates a location target in this campaign from a location ID and bid modifier. */
            addLocation(locationId: number, bidModifier: number): TargetedLocationOperation;
            /** Adds a message extension to this campaign. */
            addMessage(messageExtension: Message): MessageOperation;
            /** Adds a mobile app extension to this campaign. */
            addMobileApp(mobileAppExtension: MobileApp): MobileAppOperation;
            /** Adds a negative keyword list to this campaign. */
            addNegativeKeywordList(negativeKeywordList: NegativeKeywordList): void;
            /** Adds a phone number extension to this campaign. */
            addPhoneNumber(phoneNumberExtension: PhoneNumber): PhoneNumberOperation;
            /** Adds a price extension to this campaign. */
            addPrice(priceExtension: Price): PriceOperation;
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
            /** Adds a sitelink extension to this campaign. */
            addSitelink(sitelinkExtension: Sitelink): SitelinkOperation;
            /** Adds a snippet extension to this campaign. */
            addSnippet(snippetExtension: Snippet): SnippetOperation;
            /** Returns the selector of all ads in the campaign. */
            ads(): AdSelector;
            /** Applies a label to the campaign. */
            applyLabel(name: string): void;
            /** Provides access to this campaign's bidding fields. */
            bidding(): CampaignBidding;
            /** Creates a new campaign-level negative keyword with the specified text. */
            createNegativeKeyword(keywordText: string): void;
            /** Provides access to this campaign's display criteria: Audience, ExcludedAudience, DisplayKeyword, ExcludedDisplayKeyword, Placement, ExcludedPlacement, Topic, and ExcludedTopic. */
            display(): CampaignDisplay;
            /** Returns a selector of draft campaigns that have this campaign as their base campaign. */
            draftCampaigns(): CampaignSelector;
            /** Returns a selector of drafts that have this campaign as their base campaign. */
            drafts(): DraftSelector;
            /** Enables the campaign. */
            enable(): void;
            /** Creates a location exclusion in this campaign. */
            excludeLocation(location: ExcludedLocation): ExcludedLocationOperation;
            /** Creates a location exclusion in this campaign. */
            excludeLocation(locationId: number): ExcludedLocationOperation;
            /** Creates a location exclusion in this campaign for the specified JSON. */
            excludeLocation(location: TargetedLocationObject): ExcludedLocationOperation;
            /** Returns a selector of excluded placement lists associated with this campaign. */
            excludedPlacementLists(): ExcludedPlacementListSelector;
            /** Returns a selector of experiment campaigns that have this campaign as their base campaign. */
            experimentCampaigns(): CampaignSelector;
            /** Returns a selector of experiments that have this campaign as their base campaign. */
            experiments(): ExperimentSelector;
            /** Provides access to this campaign's extensions: CampaignCallout, CampaignMessage, CampaignMobileApp, CampaignPhoneNumber, CampaignSitelink and CampaignSnippet. */
            extensions(): CampaignExtensions;
            /** Returns the ad rotation type of the campaign. */
            getAdRotationType(): string;
            /** Returns the base campaign to which this campaign belongs. */
            getBaseCampaign(): Campaign;
            /** Returns the bidding strategy type of the campaign. */
            getBiddingStrategyType(): string;
            /** Returns the budget of the campaign. */
            getBudget(): Budget;
            /** Returns the campaign's end date, or null if there is no end date. */
            getEndDate(): GoogleAdsDate;
            /** Returns the type of this entity as a String, in this case, "Campaign". */
            getEntityType(): string;
            /** Returns the ID of the campaign. */
            getId(): number;
            /** Returns the name of the campaign. */
            getName(): string;
            /** Returns the campaign's start date. */
            getStartDate(): GoogleAdsDate;
            /** Returns `true` if the campaign is a base (i.e. regular) campaign. */
            isBaseCampaign(): boolean;
            /** Returns true if the campaign is a draft campaign. */
            isDraftCampaign(): boolean;
            /** Returns true if the campaign is enabled. */
            isEnabled(): boolean;
            /** Returns true if the campaign is an experiment campaign. */
            isExperimentCampaign(): boolean;
            /** Returns true if the campaign is paused. */
            isPaused(): boolean;
            /** Returns true if the campaign is removed. */
            isRemoved(): boolean;
            /** Returns the selector of all keywords in the campaign. */
            keywords(): KeywordSelector;
            /** Creates a selector of all labels applied to the campaign. */
            labels(): LabelSelector;
            /** Returns a selector of negative keyword lists associated with this campaign. */
            negativeKeywordLists(): NegativeKeywordListSelector;
            /** Returns a selector of the campaign-level negative keywords belonging to this campaign. */
            negativeKeywords(): NegativeKeywordSelector;
            /** Returns a new ad group builder for this campaign. */
            newAdGroupBuilder(): AdGroupBuilder;
            /** Returns a new draft builder with this campaign as the base campaign. */
            newDraftBuilder(): DraftBuilder;
            /** Pauses the campaign. */
            pause(): void;
            /** Removes a callout extension from this campaign. */
            removeCallout(calloutExtension: Callout): void;
            /** Removes a excluded placement list from this campaign. */
            removeExcludedPlacementList(excludedPlacementList: ExcludedPlacementList): void;
            /** Removes a label from the campaign. */
            removeLabel(name: string): void;
            /** Removes a message extension from this campaign. */
            removeMessage(messageExtension: Message): void;
            /** Removes a mobile app extension from this campaign. */
            removeMobileApp(mobileAppExtension: MobileApp): void;
            /** Removes a negative keyword list from this campaign. */
            removeNegativeKeywordList(negativeKeywordList: NegativeKeywordList): void;
            /** Removes a phone number extension from this campaign. */
            removePhoneNumber(phoneNumberExtension: PhoneNumber): void;
            /** Removes a price extension from this campaign. */
            removePrice(priceExtension: Price): void;
            /** Removes a sitelink extension from this campaign. */
            removeSitelink(sitelinkExtension: Sitelink): void;
            /** Removes a snippet extension from this campaign. */
            removeSnippet(snippetExtension: Snippet): void;
            /** Sets the ad rotation type of the campaign. */
            setAdRotationType(adRotationType: string): void;
            /** Sets the campaign's end date from either an object containing year, month, and day fields, or an 8-digit string in YYYYMMDD format. */
            setEndDate(date: string | GoogleAdsDate): void;
            /** Sets the name of the campaign. */
            setName(name: string): void;
            /** Sets the campaign's start date from either an object containing year, month, and day fields, or an 8-digit string in YYYYMMDD format. */
            setStartDate(date: string | GoogleAdsDate): void;
            /** Provides access to campaign-level targeting criteria: device targeting, ad scheduling, location targeting, and audiences. */
            targeting(): CampaignTargeting;
            /** Provides access to this campaign's URL fields. */
            urls(): CampaignUrls;
        }

        /** Provides access to a campaign's bidding fields. */
        interface CampaignBidding {
            /** Returns the flexible bidding strategy of the campaign. */
            getStrategy(): BiddingStrategy;
            /**
             * Returns the bidding strategy source of this campaign.
             * @deprecated **Deprecated**. Google Ads does not support setting bidding strategies at different levels. As a result, 'CAMPAIGN' is the only possible source for bidding strategies.
             */
            getStrategySource(): string;
            /** Returns the bidding strategy type of this campaign. */
            getStrategyType(): string;
            /** Sets the bidding strategy of this campaign to the specified standard bidding strategy. */
            setStrategy(biddingStrategy: string): void;
            /** Sets the bidding strategy of this campaign to the provided portfolio bidding strategy. */
            setStrategy(biddingStrategy: BiddingStrategy): void;
        }

        /**
         * An iterator of campaigns.
         *
         * Typical usage:
         *
         *      while (campaignIterator.hasNext()) {
         *        var campaign = campaignIterator.next();
         *      }
         */
        interface CampaignIterator extends Base.Iterator<Campaign> {}

        /**
         * Fetches campaigns. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var campaignSelector = AdsApp
         *          .campaigns()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var campaignIterator = campaignSelector.get();
         *      while (campaignIterator.hasNext()) {
         *        var campaign = campaignIterator.next();
         *      }
         */
        interface CampaignSelector
            extends Base.Selector<CampaignIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}

        /**
         * Provides access to campaign-level targeting criteria: device targeting, ad scheduling, location targeting, and audiences.
         *
         * For instance, to select all locations targeted by a campaign you might use:
         *
         *      var campaign = AdsApp.campaigns().get().next();
         *      var locations = campaign.targeting().targetedLocations().get();
         *      while (locations.hasNext()) {
         *        var location = locations.next();
         *      }
         */
        interface CampaignTargeting {
            /** Specializes this selector to return AdSchedule criteria. */
            adSchedules(): AdScheduleSelector;
            /** Specializes this selector to return SearchCampaignAudience criteria. */
            audiences(): SearchCampaignAudienceSelector;
            /** Specializes this selector to return SearchCampaignExcludedAudience criteria. */
            excludedAudiences(): SearchCampaignExcludedAudienceSelector;
            /** Specializes this selector to return ExcludedContentLabel criteria. */
            excludedContentLabels(): ExcludedContentLabelSelector;
            /** Specializes this selector to return ExcludedLocation criteria. */
            excludedLocations(): ExcludedLocationSelector;
            /** Returns the current targeting setting of the specified criterion type group for this campaign. */
            getTargetingSetting(): string;
            /** Specializes this selector to return Language criteria. */
            languages(): LanguageSelector;
            /** Returns a new user list audience builder for this campaign. */
            newUserListBuilder(): SearchCampaignAudienceBuilder;
            /** Specializes this selector to return Platform criteria. */
            platforms(): PlatformSelector;
            /** Sets the targeting setting for this campaign. */
            setTargetingSetting(criterionTypeGroup: string, targetingSetting: string): void;
            /** Specializes this selector to return TargetedLocation criteria. */
            targetedLocations(): TargetedLocationSelector;
            /** Specializes this selector to return TargetedProximity criteria. */
            targetedProximities(): TargetedProximitySelector;
        }

        /** Provides access to campaign URLs. */
        interface CampaignUrls {
            clearFinalUrlSuffix(): void;
            clearTrackingTemplate(): void;
            getCustomParameters(): Record<string, string>;
            getFinalUrlSuffix(): string;
            getTrackingTemplate(): string;
            setCustomParameters(customParameters: Record<string, string>): void;
            setFinalUrlSuffix(suffix: string): void;
            setTrackingTemplate(trackingTemplate: string): void;
        }
    }
}
