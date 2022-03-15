declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Builder for a bumper video ad under construction. */
        interface BumperAdBuilder extends Base.Builder<VideoAdOperation> {
            /** Sets the video ad name. */
            withAdName(adName: string): this;
            /** Sets the image that will be used as customized companion banner. */
            withCompanionBanner(imageMedia: Media): this;
            /** Sets the custom parameters of the new video ad to the specified value. */
            withCustomParameters(customParameters: Record<string, string>): this;
            /** Sets the website address that appears on the ad. */
            withDisplayUrl(displayUrl: string): this;
            /** Sets the final URL of the new video ad to the specified value. */
            withFinalUrl(finalUrl: string): this;
            /** Sets the tracking template of the new video ad to the specified value. */
            withTrackingTemplate(trackingTemplate: string): this;
            /** Sets the YouTube video that this ad will be built on. */
            withVideo(videoMedia: Media): this;
        }

        /** Builder for an in-stream video ad under construction. */
        interface InStreamAdBuilder extends Base.Builder<VideoAdOperation> {
            /** Sets the headline of the action ad. */
            withActionHeadline(headline: string): this;
            /** Sets the video ad name. */
            withAdName(adName: string): this;
            /** Sets the call-to-action of the action ad. */
            withCallToAction(callToAction: string): this;
            /** Sets the image that will be used as customized companion banner. */
            withCompanionBanner(imageMedia: Media): this;
            /** Sets the custom parameters of the new video ad to the specified value. */
            withCustomParameters(customParameters: Record<string, string>): this;
            /** Sets the website address that appears on the ad. */
            withDisplayUrl(displayUrl: string): this;
            /** Sets the final URL of the new video ad to the specified value. */
            withFinalUrl(finalUrl: string): this;
            /** Sets the tracking template of the new video ad to the specified value. */
            withTrackingTemplate(trackingTemplate: string): this;
            /** Sets the YouTube video that this ad will be built on. */
            withVideo(videoMedia: Media): this;
        }

        /** Builder for a non-skippable video ad under construction. */
        interface NonSkippableAdBuilder extends Base.Builder<VideoAdOperation> {
            /** Sets the video ad name. */
            withAdName(adName: string): this;
            /** Sets the image that will be used as customized companion banner. */
            withCompanionBanner(imageMedia: Media): this;
            /** Sets the custom parameters of the new video ad to the specified value. */
            withCustomParameters(customParameters: Record<string, string>): this;
            /** Sets the website address that appears on the ad. */
            withDisplayUrl(displayUrl: string): this;
            /** Sets the final URL of the new video ad to the specified value. */
            withFinalUrl(finalUrl: string): this;
            /** Sets the tracking template of the new video ad to the specified value. */
            withTrackingTemplate(trackingTemplate: string): this;
            /** Sets the YouTube video that this ad will be built on. */
            withVideo(videoMedia: Media): this;
        }

        /** Represents a Google Ads video ad. */
        interface VideoAd extends Base.StatsFor {
            /** Applies a label to the video ad. */
            applyLabel(name: string): void;
            /** Enables the video ad. */
            enable(): void;
            /** Returns the channel ID of the ad's video. */
            getChannelName(): string;
            /** Returns the first line of the ad description. */
            getDescription1(): string;
            /** Returns the second line of the ad description. */
            getDescription2(): string;
            /** Returns the type of destination page of the ad. */
            getDestinationPage(): string;
            /** Returns the display URL of the ad. */
            getDisplayUrl(): string;
            /** Returns the type of this entity as a String, in this case, "VideoAd". */
            getEntityType(): string;
            /** Returns the headline of the ad. */
            getHeadline(): string;
            /** Returns the ID of the ad. */
            getId(): number;
            /** Returns the ad name. */
            getName(): string;
            /** Returns the policy approval status of the ad. */
            getPolicyApprovalStatus(): string;
            /** Returns the list of policy topics associated with the ad. */
            getPolicyTopics(): PolicyTopic[];
            /** Returns the type of the ad. */
            getType(): string;
            /** Returns the video ad group to which this video ad belongs. */
            getVideoAdGroup(): VideoAdGroup;
            /** Returns the video campaign to which this video ad belongs. */
            getVideoCampaign(): VideoCampaign;
            /** Returns the video ID of the ad. */
            getVideoId(): string;
            /** Returns true if the video ad is enabled. */
            isEnabled(): boolean;
            /** Returns true if the video ad is paused. */
            isPaused(): boolean;
            /** Creates a selector of all labels applied to the video ad. */
            labels(): LabelSelector;
            /** Pauses the video ad. */
            pause(): void;
            /** Removes the video ad. */
            remove(): void;
            /** Removes a label from the video ad. */
            removeLabel(name: string): void;
            /** Provides access to this ad's URL fields. */
            urls(): VideoAdUrls;
        }

        /**
         * Starting point for creating a video ad in a video ad group.
         *
         * Typical usage:
         *
         *      var videoAdOperation = videoAdGroup.newVideoAd().inStreamAdBuilder()
         *         .withVideo(videoMedia)
         *         .withAdName("Ad name")
         *         .withDisplayUrl("example.com")
         *         .withFinalUrl("http://www.example.com")
         *         .build();
         *      var videoAd = videoAdOperation.getResult();
         */
        interface VideoAdBuilderSpace {
            /** Returns a new bumper ad builder associated with the ad group. */
            bumperAdBuilder(): BumperAdBuilder;
            /** Returns a new In-stream video ad builder associated with the ad group. */
            inStreamAdBuilder(): InStreamAdBuilder;
            /** Returns a new non-skippable ad builder associated with the ad group. */
            nonSkippableAdBuilder(): NonSkippableAdBuilder;
            /** Returns a new video discovery ad builder associated with the ad group. */
            videoDiscoveryAdBuilder(): VideoDiscoveryAdBuilder;
        }

        /**
         * An iterator of video ads.
         *
         * Typical usage:
         *
         *  while (videoAdIterator.hasNext()) {
         *    var videoAd = videoAdIterator.next();
         *  }
         */
        interface VideoAdIterator extends Base.Iterator<VideoAd> {}

        /** An operation representing creation of a new video ad. */
        interface VideoAdOperation extends Base.Operation<VideoAd> {}

        /**
         * Fetches video ads. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var videoAdSelector = AdsApp
         *          .videoAds()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var videoAdIterator = videoAdSelector.get();
         *      while (videoAdIterator.hasNext()) {
         *        var videoAd = videoAdIterator.next();
         *      }
         */
        interface VideoAdSelector
            extends Base.Selector<VideoAdIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}

        /**
         * Provides access to ad URLs.
         */
        interface VideoAdUrls {
            /** Returns the custom parameters of the video ad. */
            getCustomParameters(): Record<string, string>;
            /** Returns the final URL of the video ad. */
            getFinalUrl(): string;
            /** Returns the tracking template of the video ad. */
            getTrackingTemplate(): string;
        }

        /** Builder for a video discovery ad under construction. */
        interface VideoDiscoveryAdBuilder extends Base.Builder<VideoAdOperation> {
            /** Sets the video ad name. */
            withAdName(adName: string): this;
            /** Sets the first line of the new ad's description to the specified value. */
            withDescription1(description1: string): this;
            /** Sets the second line of the new ad's description to the specified value. */
            withDescription2(description2: string): this;
            /** Sets the destination page. */
            withDestinationPage(destinationPage: string): this;
            /** Sets the headline of the new ad to the specified value. */
            withHeadline(headline: string): this;
            /** Sets the thumbnail that you want to appear with the ad. */
            withThumbnail(thumbnail: string): this;
            /** Sets the YouTube video that this ad will be built on. */
            withVideo(videoMedia: Media): this;
        }
    }
}
