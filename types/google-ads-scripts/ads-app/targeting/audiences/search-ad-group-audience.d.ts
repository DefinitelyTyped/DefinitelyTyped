declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads audience, either USER_INTEREST or USER_LIST, configured for search ad groups. */
        interface SearchAdGroupAudience extends Base.StatsFor {
            /** Provides access to this audience's bidding fields. */
            bidding(): SearchAudienceBidding;
            /** Returns the ad group to which this audience belongs. */
            getAdGroup(): AdGroup;
            /** Returns the audience ID of the audience. */
            getAudienceId(): number;
            /** Returns the type of the audience, either USER_INTEREST or USER_LIST. */
            getAudienceType(): string;
            /** Returns the base ad group to which this audience belongs. */
            getBaseAdGroup(): AdGroup;
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
         * Builder for SearchAdGroupAudience objects.
         *
         * Example usage:
         *
         *      var audienceBuilder = adGroup.targeting().newUserListBuilder();
         *      var audienceOperation = audienceBuilder
         *        .withAudienceId(3)              // required
         *        .withBidModifier(1)             // optional
         *        .build();                       // add the audience
         *      var audience = audienceOperation.getResult();
         */
        interface SearchAdGroupAudienceBuilder extends Base.Builder<SearchAdGroupAudienceOperation> {
            /** Builds the excluded audience. */
            exclude(): SearchAdGroupExcludedAudienceOperation;
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
        interface SearchAdGroupAudienceIterator extends Base.Iterator<SearchAdGroupAudience> {}

        /** An operation representing creation of a new audience. */
        interface SearchAdGroupAudienceOperation extends Base.Operation<SearchAdGroupAudience> {}

        /**
         * Fetches audiences. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var adGroup = AdsApp.adGroups().get().next();
         *      var audienceSelector = adGroup.targeting()
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
        interface SearchAdGroupAudienceSelector
            extends Base.Selector<SearchAdGroupAudienceIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
