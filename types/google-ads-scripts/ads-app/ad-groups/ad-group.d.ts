// Type definitions for Google Ads Scripts 2021-02-26
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../../base.d.ts" />
/// <reference path="../common/stats.d.ts" />
/// <reference path="../ad-extensions/extensions.d.ts" />

declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads ad group. */
        interface AdGroup {
            /** Creates a selector of all ad params in the ad group. */
            adParams(): AdParamSelector;
            /** Adds a callout to this ad group. */
            addCallout(): CalloutOperation;
            /** Adds a message to this ad group. */
            addMessage(): MessageOperation;
            /** Adds a mobile app to this ad group. */
            addMobileApp(): MobileAppOperation;
            /** Adds a phone number to this ad group. */
            addPhoneNumber(): PhoneNumberOperation;
            /** Adds a price extension to this ad group. */
            addPrice(): PriceOperation;
            /** Adds a sitelink to this ad group. */
            addSitelink(): SitelinkOperation;
            /** Adds a snippet to this ad group. */
            addSnippet(): SnippetOperation;
            /** Returns the selector of all ads in the ad group. */
            ads(): AdSelector;
            /** Applies a label to the ad group. */
            applyLabel(): void;
            /** Provides access to this ad group's bidding fields. */
            bidding(): AdGroupBidding;
            /** Clears the mobile bid modifier for this ad group. */
            clearMobileBidModifier(): void;
            /** Creates a new negative keyword with the specified text. */
            createNegativeKeyword(): void;
            /** Returns an AdGroupDevices instance associated with the ad group. */
            devices(): AdGroupDevices;
            /** Provides access to this ad group's display criteria: Audience, ExcludedAudience, DisplayKeyword, ExcludedDisplayKeyword, Placement, ExcludedPlacement, Topic, and ExcludedTopic. */
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
            /** Returns the mobile bid modifier for this ad group. */
            getMobileBidModifier(): number;
            /** Returns the name of the ad group. */
            getName(): string;
            /** Returns stats for the specified date range. */
            getStatsFor(): Stats;
            /** Returns stats for the specified custom date range. */
            getStatsFor(): Stats;
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
            removeCallout(): void;
            /** Removes a label from the ad group. */
            removeLabel(): void;
            /** Removes a message extension from this ad group. */
            removeMessage(): void;
            /** Removes a mobile app extension from this ad group. */
            removeMobileApp(): void;
            /** Removes a phone number extension from this ad group. */
            removePhoneNumber(): void;
            /** Removes a price extension from this ad group. */
            removePrice(): void;
            /** Removes a sitelink extension from this ad group. */
            removeSitelink(): void;
            /** Removes a snippet extension from this ad group. */
            removeSnippet(): void;
            /** Sets the mobile bid modifier for this ad group to the specified value. */
            setMobileBidModifier(): void;
            /** Sets the name of the ad group. */
            setName(): void;
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
            getStrategySource(): String;
            /** Returns the bidding strategy type of this ad group. */
            getStrategyType(): String;
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
            withCpa(): this;
            /** Sets the max CPC bid of the new ad group to the specified value. */
            withCpc(): this;
            /** Sets the CPM bid of the new ad group to the specified value. */
            withCpm(): this;
            /** Sets the custom parameters of the new ad group to the specified value. */
            withCustomParameters(): this;
            /** Sets the final URL suffix of the new ad group to the specified value. */
            withFinalUrlSuffix(): this;
            /** Sets the name of the new ad group to the specified value. */
            withName(): this;
            /** Sets the status of the new ad group to the specified value. */
            withStatus(): this;
            /** Sets the tracking template of the new ad group to the specified value. */
            withTrackingTemplate(): this;
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
            setDesktopBidModifier(): void;
            /** Sets the mobile bid modifier for this ad group to the specified value. */
            setMobileBidModifier(): void;
            /** Sets the tablet bid modifier for this ad group to the specified value. */
            setTabletBidModifier(): void;
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
            getTargetingSetting(): String;
            /** Returns a new user list builder for this ad group. */
            newUserListBuilder(): SearchAdGroupAudienceBuilder;
            /** Sets the targeting setting for this ad group. */
            setTargetingSetting(): void;
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
