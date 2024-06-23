declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /**
         * Access to ad group-level video criteria. For example, to access all video keywords in an ad group:
         *
         *      var videoKeywordIterator = videoAdGroup.videoTargeting().keywords().get();
         *      while (videoKeywordIterator.hasNext()) {
         *        var videoKeyword = videoKeywordIterator.next();
         *      }
         */
        interface AdGroupVideoTargeting {
            /** Returns the selector of all ages in the ad group. */
            ages(): VideoAgeSelector;
            /** Returns the selector of all audiences in the ad group. */
            audiences(): VideoAudienceSelector;
            /** Returns the selector of all excluded ages in the ad group. */
            excludedAges(): ExcludedVideoAgeSelector;
            /** Returns the selector of all excluded audiences in the ad group. */
            excludedAudiences(): ExcludedVideoAudienceSelector;
            /** Returns the selector of all excluded genders in the ad group. */
            excludedGenders(): ExcludedVideoGenderSelector;
            /** Returns the selector of all excluded keywords in the ad group. */
            excludedKeywords(): ExcludedVideoKeywordSelector;
            /** Returns the selector of all excluded mobile application categories in the ad group. */
            excludedMobileAppCategories(): ExcludedVideoMobileAppCategorySelector;
            /** Returns the selector of all excluded mobile applications in the ad group. */
            excludedMobileApplications(): ExcludedVideoMobileApplicationSelector;
            /** Returns the selector of all excluded parental statuses in the ad group. */
            excludedParentalStatuses(): ExcludedVideoParentalStatusSelector;
            /** Returns the selector of all excluded placements in the ad group. */
            excludedPlacements(): ExcludedVideoPlacementSelector;
            /** Returns the selector of all excluded topics in the ad group. */
            excludedTopics(): ExcludedVideoTopicSelector;
            /** Returns the selector of all excluded YouTube channels in the ad group. */
            excludedYouTubeChannels(): ExcludedVideoYouTubeChannelSelector;
            /** Returns the selector of all excluded YouTube videos in the ad group. */
            excludedYouTubeVideos(): ExcludedVideoYouTubeVideoSelector;
            /** Returns the selector of all genders in the ad group. */
            genders(): VideoGenderSelector;
            /** Returns the selector of all keywords in the ad group. */
            keywords(): VideoKeywordSelector;
            /** Returns the selector of all mobile application categories in the ad group. */
            mobileAppCategories(): VideoMobileAppCategorySelector;
            /** Returns the selector of all mobile applications in the ad group. */
            mobileApplications(): VideoMobileApplicationSelector;
            /** Returns a new age builder for this ad group. */
            newAgeBuilder(): VideoAgeBuilder;
            /** Returns a new audience builder for this ad group. */
            newAudienceBuilder(): VideoAudienceBuilder;
            /** Returns a new age gender for this ad group. */
            newGenderBuilder(): VideoGenderBuilder;
            /** Returns a new keyword builder for this ad group. */
            newKeywordBuilder(): VideoKeywordBuilder;
            /** Returns a new mobile application category builder for this ad group. */
            newMobileAppCategoryBuilder(): VideoMobileAppCategoryBuilder;
            /** Returns a new mobile application builder for this ad group. */
            newMobileApplicationBuilder(): VideoMobileApplicationBuilder;
            /** Returns a new parental status builder for this ad group. */
            newParentalStatusBuilder(): VideoParentalStatusBuilder;
            /** Returns a new placement builder for this ad group. */
            newPlacementBuilder(): VideoPlacementBuilder;
            /** Returns a new video topic builder for this ad group. */
            newTopicBuilder(): VideoTopicBuilder;
            /** Returns a new YouTube channel builder for this ad group. */
            newYouTubeChannelBuilder(): VideoYouTubeChannelBuilder;
            /** Returns a new YouTube video builder for this ad group. */
            newYouTubeVideoBuilder(): VideoYouTubeVideoBuilder;
            /** Returns the selector of all parental statuses in the ad group. */
            parentalStatuses(): VideoParentalStatusSelector;
            /** Returns the selector of all placements in the ad group. */
            placements(): VideoPlacementSelector;
            /** Returns the selector of all topics in the ad group. */
            topics(): VideoTopicSelector;
            /** Returns the selector of all YouTube channels in the ad group. */
            youTubeChannels(): VideoYouTubeChannelSelector;
            /** Returns the selector of all YouTube videos in the ad group. */
            youTubeVideos(): VideoYouTubeVideoSelector;
        }

        /**
         * Access to aggregated ad group-level video criteria for a campaign and campaign-level excluded video criteria for a campaign.
         * For example, to access all video keywords in all ad groups in this campaign:
         *
         *  var videoKeywordIterator = videoCampaign.videoTargeting().keywords().get();
         *  while (videoKeywordIterator.hasNext()) {
         *    var videoKeyword = videoKeywordIterator.next();
         *  }
         */
        interface CampaignVideoTargeting {
            /** Returns the selector of all ages in the campaign. */
            ages(): VideoAgeSelector;
            /** Returns the selector of all audiences in the campaign. */
            audiences(): VideoAudienceSelector;
            /** Returns the selector of all excluded ages in the campaign. */
            excludedAges(): ExcludedVideoAgeSelector;
            /** Returns the selector of all excluded audiences in the campaign. */
            excludedAudiences(): ExcludedVideoAudienceSelector;
            /** Returns the selector of all excluded genders in the campaign. */
            excludedGenders(): ExcludedVideoGenderSelector;
            /** Returns the selector of all excluded keywords in the campaign. */
            excludedKeywords(): ExcludedVideoKeywordSelector;
            /** Returns the selector of all excluded mobile application categories in the campaign. */
            excludedMobileAppCategories(): ExcludedVideoMobileAppCategorySelector;
            /** Returns the selector of all excluded mobile applications in the campaign. */
            excludedMobileApplications(): ExcludedVideoMobileApplicationSelector;
            /** Returns the selector of all excluded parental statuses in the campaign. */
            excludedParentalStatuses(): ExcludedVideoParentalStatusSelector;
            /** Returns the selector of all excluded placements in the campaign. */
            excludedPlacements(): ExcludedVideoPlacementSelector;
            /** Returns the selector of all excluded topics in the campaign. */
            excludedTopics(): ExcludedVideoTopicSelector;
            /** Returns the selector of all excluded YouTube channels in the campaign. */
            excludedYouTubeChannels(): ExcludedVideoYouTubeChannelSelector;
            /** Returns the selector of all excluded YouTube videos in the campaign. */
            excludedYouTubeVideos(): ExcludedVideoYouTubeVideoSelector;
            /** Returns the selector of all genders in the campaign. */
            genders(): VideoGenderSelector;
            /** Returns the selector of all keywords in the campaign. */
            keywords(): VideoKeywordSelector;
            /** Returns the selector of all mobile application categories in the campaign. */
            mobileAppCategories(): VideoMobileAppCategorySelector;
            /** Returns the selector of all mobile applications in the campaign. */
            mobileApplications(): VideoMobileApplicationSelector;
            /** Returns a new age builder for this campaign. */
            newAgeBuilder(): VideoAgeBuilder;
            /** Returns a new audience builder for this campaign. */
            newAudienceBuilder(): VideoAudienceBuilder;
            /** Returns a new age gender for this campaign. */
            newGenderBuilder(): VideoGenderBuilder;
            /** Returns a new keyword builder for this campaign. */
            newKeywordBuilder(): VideoKeywordBuilder;
            /** Returns a new mobile application category builder for this campaign. */
            newMobileAppCategoryBuilder(): VideoMobileAppCategoryBuilder;
            /** Returns a new mobile application builder for this campaign. */
            newMobileApplicationBuilder(): VideoMobileApplicationBuilder;
            /** Returns a new parental status builder for this campaign. */
            newParentalStatusBuilder(): VideoParentalStatusBuilder;
            /** Returns a new placement builder for this campaign. */
            newPlacementBuilder(): VideoPlacementBuilder;
            /** Returns a new video topic builder for this campaign. */
            newTopicBuilder(): VideoTopicBuilder;
            /** Returns a new YouTube channel builder for this campaign. */
            newYouTubeChannelBuilder(): VideoYouTubeChannelBuilder;
            /** Returns a new YouTube video builder for this campaign. */
            newYouTubeVideoBuilder(): VideoYouTubeVideoBuilder;
            /** Returns the selector of all parental statuses in the campaign. */
            parentalStatuses(): VideoParentalStatusSelector;
            /** Returns the selector of all placements in the campaign. */
            placements(): VideoPlacementSelector;
            /** Returns the selector of all topics in the campaign. */
            topics(): VideoTopicSelector;
            /** Returns the selector of all YouTube channels in the campaign. */
            youTubeChannels(): VideoYouTubeChannelSelector;
            /** Returns the selector of all YouTube videos in the campaign. */
            youTubeVideos(): VideoYouTubeVideoSelector;
        }

        /** Access to video criteria that have been added to ad groups in this account. */
        interface VideoTargeting {
            /** Returns the selector of all ages in the account. */
            ages(): VideoAgeSelector;
            /** Returns the selector of all audiences in the account. */
            audiences(): VideoAudienceSelector;
            /** Returns the selector of all genders in the account. */
            genders(): VideoGenderSelector;
            /** Returns the selector of all keywords in the account. */
            keywords(): VideoKeywordSelector;
            /** Returns the selector of all mobile application categories in the account. */
            mobileAppCategories(): VideoMobileAppCategorySelector;
            /** Returns the selector of all mobile applications in the account. */
            mobileApplications(): VideoMobileApplicationSelector;
            /** Returns the selector of all parental statuses in the account. */
            parentalStatuses(): VideoParentalStatusSelector;
            /** Returns the selector of all placements in the account. */
            placements(): VideoPlacementSelector;
            /** Returns the selector of all topics in the account. */
            topics(): VideoTopicSelector;
            /** Returns the selector of all YouTube channels in the account. */
            youTubeChannels(): VideoYouTubeChannelSelector;
            /** Returns the selector of all YouTube videos in the account. */
            youTubeVideos(): VideoYouTubeVideoSelector;
        }
    }
}
