// Type definitions for Google Ads Scripts
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../../../../base.d.ts" />
/// <reference path="../../ad-groups/video-ad-group.d.ts" />
/// <reference path="../../campaigns/video-campaign.d.ts" />

declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads excluded YouTube Channel in a Video Campaign. */
        interface ExcludedVideoYouTubeChannel {
            /** Returns the YouTube channel ID. */
            getChannelId(): string;
            /** Returns the type of this entity as a String, in this case, "ExcludedVideoYouTubeChannel". */
            getEntityType(): string;
            /** Returns the ID of the excluded video YouTube channel. */
            getId(): number;
            /** Returns the ad group to which this excluded video YouTube channel belongs. */
            getVideoAdGroup(): VideoAdGroup;
            /** Returns the campaign to which this excluded video YouTube channel belongs. */
            getVideoCampaign(): VideoCampaign;
            /** Removes the excluded video YouTube channel. */
            remove(): void;
        }

        /**
         * An iterator of excluded video YouTube channels.
         *
         * Typical usage:
         *
         *      while (excludedVideoYouTubeChannelIterator.hasNext()) {
         *        var excludedVideoYouTubeChannel = excludedVideoYouTubeChannelIterator.next();
         *      }
         */
        interface ExcludedVideoYouTubeChannelIterator extends Base.Iterator<ExcludedVideoYouTubeChannel> {}

        /** An operation representing creation of a new excluded video YouTube chanel. */
        interface ExcludedVideoYouTubeChannelOperation extends Base.Operation<ExcludedVideoYouTubeChannel> {}

        /**
         * Fetches excluded video YouTube channels. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var excludedVideoYouTubeChannelSelector = AdsApp.videoTargeting()
         *          .excludedVideoYouTubeChannels()
         *          .withCondition("AdGroupStatus = 'ENABLED'")
         *          .orderBy("AdGroupName DESC");
         *
         *      var excludedVideoYouTubeChannelIterator = excludedVideoYouTubeChannelSelector.get();
         *      while (excludedVideoYouTubeChannelIterator.hasNext()) {
         *        var excludedVideoYouTubeChannel = excludedVideoYouTubeChannelIterator.next();
         *      }
         */
        interface ExcludedVideoYouTubeChannelSelector
            extends Base.Selector<ExcludedVideoYouTubeChannel>,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
