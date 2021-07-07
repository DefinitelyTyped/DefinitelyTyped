declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /**
         * Access to ad group-level display criteria. For example, to access all display keywords in an ad group:
         *
         *      var displayKeywordIterator = adGroup.display().keywords().get();
         *      while (displayKeywordIterator.hasNext()) {
         *        var displayKeyword = displayKeywordIterator.next();
         *      }
         */
        interface AdGroupDisplay {
            /** Returns the selector of all audiences in the ad group. */
            audiences(): AudienceSelector;
            /** Returns the selector of all excluded audiences in the ad group. */
            excludedAudiences(): ExcludedAudienceSelector;
            /** Returns the selector of all excluded display keywords in the ad group. */
            excludedKeywords(): ExcludedDisplayKeywordSelector;
            /** Returns the selector of all excluded website placements in the ad group. */
            excludedPlacements(): ExcludedPlacementSelector;
            /** Returns the selector of all excluded topics in the ad group. */
            excludedTopics(): ExcludedTopicSelector;
            /** Returns the selector of all excluded YouTube channels in the ad group. */
            excludedYouTubeChannels(): ExcludedYouTubeChannelSelector;
            /** Returns the selector of all excluded YouTube videos in the ad group. */
            excludedYouTubeVideos(): ExcludedYouTubeVideoSelector;
            /** Returns the selector of all display keywords in the ad group. */
            keywords(): DisplayKeywordSelector;
            /** Returns a new audience builder for this ad group. */
            newAudienceBuilder(): AudienceBuilder;
            /** Returns a new display keyword builder for this ad group. */
            newKeywordBuilder(): DisplayKeywordBuilder;
            /** Returns a new placement builder for this ad group. */
            newPlacementBuilder(): PlacementBuilder;
            /** Returns a new topic builder for this ad group. */
            newTopicBuilder(): TopicBuilder;
            /** Returns a new YouTube channel builder for this ad group. */
            newYouTubeChannelBuilder(): YouTubeChannelBuilder;
            /** Returns a new YouTube video builder for this ad group. */
            newYouTubeVideoBuilder(): YouTubeVideoBuilder;
            /** Returns the selector of all website placements in the ad group. */
            placements(): PlacementSelector;
            /** Returns the selector of all topics in the ad group. */
            topics(): TopicSelector;
            /** Returns the selector of all YouTube channels in the ad group. */
            youTubeChannels(): YouTubeChannelSelector;
            /** Returns the selector of all YouTube videos in the ad group. */
            youTubeVideos(): YouTubeVideoSelector;
        }

        /**
         * Access to aggregated ad group-level display criteria for a campaign and campaign-level excluded display criteria for a campaign.
         * For example, to access all display keywords in all ad groups in this campaign:
         *
         *      var displayKeywordIterator = campaign.display().keywords().get();
         *      while (displayKeywordIterator.hasNext()) {
         *        var displayKeyword = displayKeywordIterator.next();
         *      }
         */
        interface CampaignDisplay {
            /** Returns the selector of all audiences in the campaign. */
            audiences(): AudienceSelector;
            /** Returns the selector of all excluded audiences in the campaign. */
            excludedAudiences(): ExcludedAudienceSelector;
            /** Returns the selector of all excluded display keywords in the campaign. */
            excludedKeywords(): ExcludedDisplayKeywordSelector;
            /** Returns the selector of all excluded website placements in the campaign. */
            excludedPlacements(): ExcludedPlacementSelector;
            /** Returns the selector of all excluded topics in the campaign. */
            excludedTopics(): ExcludedTopicSelector;
            /** Returns the selector of all excluded YouTube channels in the campaign. */
            excludedYouTubeChannels(): ExcludedYouTubeChannelSelector;
            /** Returns the selector of all excluded YouTube videos in the campaign. */
            excludedYouTubeVideos(): ExcludedYouTubeVideoSelector;
            /** Returns the selector of all display keywords in all ad groups in the campaign. */
            keywords(): DisplayKeywordSelector;
            /** Returns a new audience builder for this campaign. */
            newAudienceBuilder(): AudienceBuilder;
            /** Returns a new display keyword builder for this campaign. */
            newKeywordBuilder(): DisplayKeywordBuilder;
            /** Returns a new placement builder for this campaign. */
            newPlacementBuilder(): PlacementBuilder;
            /** Returns a new topic builder for this campaign. */
            newTopicBuilder(): TopicBuilder;
            /** Returns a new YouTube channel builder for this campaign. */
            newYouTubeChannelBuilder(): YouTubeChannelBuilder;
            /** Returns a new YouTube video builder for this campaign. */
            newYouTubeVideoBuilder(): YouTubeVideoBuilder;
            /** Returns the selector of all website placements in all ad groups in the campaign. */
            placements(): PlacementSelector;
            /** Returns the selector of all topics in all ad groups in the campaign. */
            topics(): TopicSelector;
            /** Returns the selector of all YouTube channels in the campaign. */
            youTubeChannels(): YouTubeChannelSelector;
            /** Returns the selector of all YouTube videos in the campaign. */
            youTubeVideos(): YouTubeVideoSelector;
        }

        /** Access to display criteria that have been added to ad groups in this account: Audience, DisplayKeyword, Placement, Topic. */
        interface Display {
            /** Returns the selector of all audiences in the account. */
            audiences(): AudienceSelector;
            /** Returns the selector of all display keywords in the account. */
            keywords(): DisplayKeywordSelector;
            /** Returns the selector of all website placements in the account. */
            placements(): PlacementSelector;
            /** Returns the selector of all topics in the account. */
            topics(): TopicSelector;
            /** Returns the selector of all YouTube channels in the account. */
            youTubeChannels(): YouTubeChannelSelector;
            /** Returns the selector of all YouTube videos in the account. */
            youTubeVideos(): YouTubeVideoSelector;
        }

        /** Provides access to a display criterion's bidding fields. */
        interface DisplayCriterionBidding {
            /** Clears the max CPC bid for this display criterion. */
            clearCpc(): void;
            /** Clears the CPM bid for this display criterion. */
            clearCpm(): void;
            /** Returns the max CPC bid for this display criterion. */
            getCpc(): number;
            /** Returns the CPM bid for this display criterion. */
            getCpm(): number;
            /** Returns the flexible bidding strategy of the display criterion. */
            getStrategy(): BiddingStrategy;
            /**
             * Returns the bidding strategy source of this display criterion.
             *
             * @deprecated **Deprecated**. Google Ads does not support setting bidding strategies at different levels. As a result, 'CAMPAIGN' is the only possible source for bidding strategies.
             */
            getStrategySource(): string;
            /** Returns the bidding strategy type of this display criterion. */
            getStrategyType(): string;
            /** Sets the max CPC bid for this display criterion. */
            setCpc(cpc: number): void;
            /** Sets the CPM bid for this display criterion. */
            setCpm(cpm: number): void;
        }
    }
}
