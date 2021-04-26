declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads audience. */
        interface Audience extends Base.StatsFor {
            /** Provides access to this audience's bidding fields. */
            bidding(): DisplayCriterionBidding;
            /** Returns the ad group to which this audience belongs. */
            getAdGroup(): AdGroup;
            /** Returns the audience ID of the audience. */
            getAudienceId(): number;
            /** Returns the type of the audience, either USER_INTEREST or USER_LIST. */
            getAudienceType(): AudienceTypeType;
            /** Returns the base ad group to which this audience belongs. */
            getBaseAdGroup(): AdGroup;
            /** Returns the base campaign to which this audience belongs. */
            getBaseCampaign(): Campaign;
            /** Returns the campaign to which this audience belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign;
            /** Returns the ID of the audience. */
            getId(): number;
            /** Returns true if the audience is enabled. */
            isEnabled(): boolean;
            /** Returns true if the audience is paused. */
            isPaused(): boolean;
            /** Removes the audience. */
            remove(): void;
        }

        /**
         * Builder for Audience objects.
         *
         * Example usage:
         *
         *  var audienceBuilder = adGroup.display().newAudienceBuilder();
         *  var audience = audienceBuilder
         *    .withAudienceType('USER_LIST')  // required
         *    .withAudienceId(3)              // required
         *    .withCpc(0.50)                  // optional
         *    .build()                        // create the audience
         */
        interface AudienceBuilder extends Base.Builder<AudienceOperation> {
            /** Builds the excluded audience. */
            exclude(): ExcludedAudienceOperation;
            /** Sets the user list of the audience. */
            withAudience(userList: UserList): this;
            /** Sets the audience ID of the audience. */
            withAudienceId(audienceId: number): this;
            /** Sets the type of the audience, either USER_INTEREST or USER_LIST. */
            withAudienceType(audienceType: AudienceTypeType): this;
            /** Sets the max CPC bid of the new audience to the specified value. */
            withCpc(cpc: number): this;
            /** Sets the CPM bid of the new audience to the specified value. */
            withCpm(cpm: number): this;
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
        interface AudienceIterator extends Base.Iterator<Audience> {}

        /**
         * An operation representing creation of a new audience.
         */
        interface AudienceOperation extends Base.Operation<Audience> {}

        /**
         * Fetches audiences. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *  var audienceSelector = AdsApp.display()
         *      .audiences()
         *      .withCondition("Impressions > 100")
         *      .forDateRange("LAST_MONTH")
         *      .orderBy("Clicks DESC");
         *
         *  var audienceIterator = audienceSelector.get();
         *  while (audienceIterator.hasNext()) {
         *    var audience = audienceIterator.next();
         *  }
         */
        interface AudienceSelector
            extends Base.Selector<AudienceIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}

        const AudienceType: {
            UserInterest: "USER_INTEREST";
            UserList: "USER_LIST";
        };

        type AudienceTypeType = typeof AudienceType[keyof typeof AudienceType];
    }
}
