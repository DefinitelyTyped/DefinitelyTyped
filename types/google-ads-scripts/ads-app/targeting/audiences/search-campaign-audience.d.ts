declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads audience, either USER_INTEREST or USER_LIST, configured for search campaigns. */
        interface SearchCampaignAudience extends Base.StatsFor {
            /** Provides access to this audience's bidding fields. */
            bidding(): SearchAudienceBidding;
            /** Returns the audience ID of the audience. */
            getAudienceId(): number;
            /** Returns the type of the audience, either USER_INTEREST or USER_LIST. */
            getAudienceType(): string;
            /** Returns the base campaign to which this audience belongs. */
            getBaseCampaign(): Campaign;
            /** Returns the campaign to which this audience belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign;
            /** Returns the ID of the criterion. */
            getId(): number;
            /** Returns the name of the audience. */
            getName(): string;
            /** Returns true if the audience is enabled. */
            isEnabled(): boolean;
            /** Returns true if the audience is paused. */
            isPaused(): boolean;
            /** Removes the audience. */
            remove(): void;
        }

        /**
         * Builder for SearchCampaignAudience and SearchCampaignExcludedAudience objects.
         *
         * Example usage:
         *
         *      var audienceBuilder = campaign.targeting().newUserListBuilder();
         *      var audienceOperation = audienceBuilder
         *          .withAudienceId(3)       // required
         *          .build();                // add the audience, or .exclude() to exclude the audience.
         *      var audience = audienceOperation.getResult();
         */
        interface SearchCampaignAudienceBuilder extends Base.Builder<SearchCampaignAudienceOperation> {
            /** Builds the excluded audience. */
            exclude(): SearchCampaignExcludedAudienceOperation;
            /** Sets the user list of the audience. */
            withAudience(userList: UserList): this;
            /** Sets the audience ID of the audience. */
            withAudienceId(audienceId: number): this;
            /** Sets the bid modifier value for this audience to the specified value. */
            withBidModifier(modifier: number): this;
        }

        /**
         * An iterator of audiences.
         *
         * Typical usage:
         *
         *      while (audienceIterator.hasNext()) {
         *        var audience = audienceIterator.next();
         *      }
         */
        interface SearchCampaignAudienceIterator extends Base.Iterator<SearchCampaignAudience> {}

        /** An operation representing creation of a new audience. */
        interface SearchCampaignAudienceOperation extends Base.Operation<SearchCampaignAudience> {}

        /**
         * Fetches audiences. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var campaign = AdsApp.campaigns().get().next();
         *      var audienceSelector = campaign.targeting()
         *          .audiences()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var audienceIterator = audienceSelector.get();
         *      while (audienceIterator.hasNext()) {
         *        var audience = audienceIterator.next();
         *      }
         */
        interface SearchCampaignAudienceSelector
            extends Base.Selector<SearchCampaignAudienceIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
