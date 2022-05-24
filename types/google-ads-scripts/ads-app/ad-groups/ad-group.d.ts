declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads ad group. */
        interface AdGroup extends Base.StatsFor {
            /** Creates a selector of all ad params in the ad group. */
            adParams(): AdParamSelector;
            /** Adds a callout to this ad group. */
            addCallout(calloutExtension: Callout): CalloutOperation;
            /** Adds a message to this ad group. */
            addMessage(messageExtension: Message): MessageOperation;
            /** Adds a mobile app to this ad group. */
            addMobileApp(mobileAppExtension: MobileApp): MobileAppOperation;
            /** Adds a phone number to this ad group. */
            addPhoneNumber(phoneNumberExtension: PhoneNumber): PhoneNumberOperation;
            /** Adds a price extension to this ad group. */
            addPrice(priceExtension: Price): PriceOperation;
            /** Adds a sitelink to this ad group. */
            addSitelink(sitelinkExtension: Sitelink): SitelinkOperation;
            /** Adds a snippet to this ad group. */
            addSnippet(snippetExtension: Snippet): SnippetOperation;
            /** Returns the selector of all ads in the ad group. */
            ads(): AdSelector;
            /** Applies a label to the ad group. */
            applyLabel(name: string): void;
            /** Provides access to this ad group's bidding fields. */
            bidding(): AdGroupBidding;
            /**
             * Clears the mobile bid modifier for this ad group.
             *
             * @deprecated **Deprecated**. Google Ads Scripts now supports desktop and tablet ad group bid modifiers in addition to mobile.
             * This functionality is available in the AdGroupDevices class, accessible via the AdGroup.devices method.
             */
            clearMobileBidModifier(): void;
            /** Creates a new negative keyword with the specified text. */
            createNegativeKeyword(keywordText: string): void;
            /** Returns an AdGroupDevices instance associated with the ad group. */
            devices(): AdGroupDevices;
            /**
             * Provides access to this ad group's display criteria: Audience, ExcludedAudience, DisplayKeyword, ExcludedDisplayKeyword, Placement, ExcludedPlacement,
             * Topic, and ExcludedTopic.
             */
            display(): AdGroupDisplay;
            /** Enables the ad group. */
            enable(): void;
            /** Provides access to this ad group's extensions: AdGroupCallout, AdGroupMessage, AdGroupMobileApp, AdGroupPhoneNumber, AdGroupSitelink, and AdGroupSnippet. */
            extensions(): AdGroupExtensions;
            /** Returns the base ad group to which this ad group belongs. */
            getBaseAdGroup(): AdGroup;
            /** Returns the base campaign to which this ad group belongs. */
            getBaseCampaign(): Campaign;
            /** Returns the campaign to which this ad group belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign;
            /** Returns the type of this entity as a String, in this case, "AdGroup". */
            getEntityType(): string;
            /** Returns the ID of the ad group. */
            getId(): number;
            /**
             * Returns the mobile bid modifier for this ad group.
             *
             * **Deprecated**. Google Ads Scripts now supports desktop and tablet ad group bid modifiers in addition to mobile.
             * This functionality is available in the AdGroupDevices class, accessible via the AdGroup.devices method.
             */
            getMobileBidModifier(): number;
            /** Returns the name of the ad group. */
            getName(): string;
            /** Returns true if the ad group is enabled. */
            isEnabled(): boolean;
            /** Returns true if the ad group is paused. */
            isPaused(): boolean;
            /** Returns true if the ad group is removed. */
            isRemoved(): boolean;
            /** Returns the selector of all keywords in the ad group. */
            keywords(): KeywordSelector;
            /** 	Creates a selector of all labels applied to the ad group. */
            labels(): LabelSelector;
            /** Returns a selector of all negative keywords in the ad group. */
            negativeKeywords(): NegativeKeywordSelector;
            /** Returns a new ad builder space associated with this ad group. */
            newAd(): AdBuilderSpace;
            /** Returns a new keyword builder associated with this ad group. */
            newKeywordBuilder(): KeywordBuilder;
            /** Pauses the ad group. */
            pause(): void;
            /** Removes a callout extension from this ad group. */
            removeCallout(calloutExtension: Callout): void;
            /** Removes a label from the ad group. */
            removeLabel(name: string): void;
            /** Removes a message extension from this ad group. */
            removeMessage(messageExtension: Message): void;
            /** Removes a mobile app extension from this ad group. */
            removeMobileApp(mobileAppExtension: MobileApp): void;
            /** Removes a phone number extension from this ad group. */
            removePhoneNumber(phoneNumberExtension: PhoneNumber): void;
            /** Removes a price extension from this ad group. */
            removePrice(priceExtension: Price): void;
            /** Removes a sitelink extension from this ad group. */
            removeSitelink(sitelinkExtension: Sitelink): void;
            /** Removes a snippet extension from this ad group. */
            removeSnippet(snippetExtension: Snippet): void;
            /**
             * Sets the mobile bid modifier for this ad group to the specified value.
             *
             * @deprecated **Deprecated**. Google Ads Scripts now supports desktop and tablet ad group bid modifiers in addition to mobile.
             * This functionality is available in the AdGroupDevices class, accessible via the AdGroup.devices method.
             */
            setMobileBidModifier(modifier: number): void;
            /** Sets the name of the ad group. */
            setName(name: string): void;
            /** Provides access to ad group-level targeting criteria: audiences. */
            targeting(): AdGroupTargeting;
            /** Provides access to this ad group's URL fields. */
            urls(): AdGroupUrls;
        }

        /** Provides access to an AdGroup's bidding fields. */
        interface AdGroupBidding {
            /** Returns the Target CPA bid for this ad group. */
            getCpa(): number;
            /** Returns the max CPC bid for this ad group. */
            getCpc(): number;
            /** Returns the CPM bid for this ad group. */
            getCpm(): number;
            /** Returns the flexible bidding strategy of the ad group. */
            getStrategy(): BiddingStrategy;
            /** Returns the bidding strategy source of this ad group. */
            getStrategySource(): string;
            /** Returns the bidding strategy type of this ad group. */
            getStrategyType(): string;
            /** Sets the Target CPA bid for this ad group. */
            setCpa(cpa: number): void;
            /** Sets the max CPC bid for this ad group. */
            setCpc(cpc: number): void;
            /** Sets the CPM bid for this ad group. */
            setCpm(cpm: number): void;
        }

        /**
         * Builder for an ad group under construction.
         *
         * Typical usage:
         *
         *      var adGroupBuilder = campaign.newAdGroupBuilder();
         *      var adGroupOperation = adGroupBuilder
         *         .withName("ad group name")
         *         .withStatus("PAUSED")
         *         .build();
         *      var adGroup = adGroupOperation.getResult();
         */
        interface AdGroupBuilder extends Base.Builder<AdGroupOperation> {
            /** Sets the Target CPA bid of the new ad group to the specified value. */
            withCpa(cpa: number): this;
            /** Sets the max CPC bid of the new ad group to the specified value. */
            withCpc(cpc: number): this;
            /** Sets the CPM bid of the new ad group to the specified value. */
            withCpm(cpm: number): this;
            /** Sets the custom parameters of the new ad group to the specified value. */
            withCustomParameters(customParameters: Record<string, string>): this;
            /** Sets the final URL suffix of the new ad group to the specified value. */
            withFinalUrlSuffix(suffix: string): this;
            /** Sets the name of the new ad group to the specified value. */
            withName(name: string): this;
            /** Sets the status of the new ad group to the specified value. */
            withStatus(status: string): this;
            /** Sets the tracking template of the new ad group to the specified value. */
            withTrackingTemplate(trackingTemplate: string): this;
        }

        /** Starting point for device-dependent ad group configurations. */
        interface AdGroupDevices {
            /** Clears the desktop bid modifier for this ad group. */
            clearDesktopBidModifier(): void;
            /** Clears the mobile bid modifier for this ad group. */
            clearMobileBidModifier(): void;
            /** Clears the tablet bid modifier for this ad group. */
            clearTabletBidModifier(): void;
            /** Returns the desktop bid modifier for this ad group. */
            getDesktopBidModifier(): number;
            /** Returns the mobile bid modifier for this ad group. */
            getMobileBidModifier(): number;
            /** Returns the tablet bid modifier for this ad group. */
            getTabletBidModifier(): number;
            /** Sets the desktop bid modifier for this ad group to the specified value. */
            setDesktopBidModifier(modifier: number): void;
            /** Sets the mobile bid modifier for this ad group to the specified value. */
            setMobileBidModifier(modifier: number): void;
            /** Sets the tablet bid modifier for this ad group to the specified value. */
            setTabletBidModifier(modifier: number): void;
        }

        /**
         * An iterator of ad groups.
         *
         * Typical usage:
         *
         *      while (adGroupIterator.hasNext()) {
         *        var adGroup = adGroupIterator.next();
         *      }
         */
        interface AdGroupIterator extends Base.Iterator<AdGroup> {}

        /**
         * An operation representing creation of a new ad group
         */
        interface AdGroupOperation extends Base.Operation<AdGroup> {}

        /**
         * Fetches ad groups. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var adGroupSelector = AdsApp
         *          .adGroups()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var adGroupIterator = adGroupSelector.get();
         *      while (adGroupIterator.hasNext()) {
         *        var adGroup = adGroupIterator.next();
         *      }
         */
        interface AdGroupSelector
            extends Base.Selector<AdGroupIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}

        /** Provides access to ad group-level targeting criteria: audiences. */
        interface AdGroupTargeting {
            /** Specializes this selector to return SearchAdGroupAudience criteria. */
            audiences(): SearchAdGroupAudienceSelector;
            /** Specializes this selector to return SearchAdGroupExcludedAudience criteria. */
            excludedAudiences(): SearchAdGroupExcludedAudienceSelector;
            /** Returns the current targeting setting of the specified criterion type group for this ad group. */
            getTargetingSetting(): string;
            /** Returns a new user list builder for this ad group. */
            newUserListBuilder(): SearchAdGroupAudienceBuilder;
            /** Sets the targeting setting for this ad group. */
            setTargetingSetting(criterionTypeGroup: string, targetingSetting: string): void;
        }

        /** Provides access to ad group URLs. */
        interface AdGroupUrls {
            clearFinalUrlSuffix(): void;
            clearTrackingTemplate(): void;
            getCustomParameters(): Record<string, string>;
            getFinalUrlSuffix(): string;
            getTrackingTemplate(): string;
            setCustomParameters(customParameters: Record<string, string>): void;
            setFinalUrlSuffix(suffix: string): void;
            setTrackingTemplate(trackingTemplate: string): void;
        }

        /** Provides access to ad group-level targeting criteria (currently just audiences). */
        interface AccountAdGroupTargeting {
            /** Specializes this selector to return SearchAdGroupAudience criteria. */
            audiences(): SearchAdGroupAudienceSelector;
            /** Specializes this selector to return SearchAdGroupExcludedAudience criteria. */
            excludedAudiences(): SearchAdGroupExcludedAudienceSelector;
        }
    }
}
