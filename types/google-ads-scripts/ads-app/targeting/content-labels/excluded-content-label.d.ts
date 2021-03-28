declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads excluded content label target. */
        interface ExcludedContentLabel {
            /** Returns the base campaign to which this excluded content label belongs. */
            getBaseCampaign(): Campaign;
            /** Returns the campaign to which this excluded content label belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign;
            /** Returns the campaign type. */
            getCampaignType(): string;
            /** Returns the content label type. */
            getContentLabelType(): string;
            /** Returns the type of this entity as a String, in this case, "ExcludedContentLabel". */
            getEntityType(): string;
            /** Returns the ID of the excluded content label. */
            getId(): number;
            /** Returns the video campaign to which this excluded content label belongs or null if it does not belong to a video campaign. */
            getVideoCampaign(): VideoCampaign;
            /** Removes the excluded content label. */
            remove(): void;
        }

        /**
         * An iterator of excluded content labels.
         *
         * Typical usage:
         *
         *      while (excludedContentLabelIterator.hasNext()) {
         *        var excludedContentLabel = excludedContentLabelIterator.next();
         *      }
         */
        interface ExcludedContentLabelIterator extends Base.Iterator<ExcludedContentLabel> {}

        /** A plain JavaScript objects to describe a content label. */
        interface ExcludedContentLabelObject {
            contentLabelType: string;
        }

        /** An operation representing creation of a new excluded content label. */
        interface ExcludedContentLabelOperation extends Base.Operation<ExcludedContentLabel> {}

        /**
         * Fetches excluded content labels. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var excludedContentLabelSelector = campaign.targeting()
         *          .excludedContentLabels()
         *          .withCondition("Impressions > 100")
         *          .orderBy("Clicks DESC");
         *
         *      var excludedContentLabelIterator = excludedContentLabelSelector.get();
         *      while (excludedContentLabelIterator.hasNext()) {
         *        var excludedContentLabel = excludedContentLabelIterator.next();
         *      }
         */
        interface ExcludedContentLabelSelector
            extends Base.Selector<ExcludedContentLabelIterator>,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
