declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads user list. */
        interface UserList {
            /** Close user list so it will no longer accumulate new members. */
            close(): void;
            /** Returns a selector of all the search ad groups negatively targeting this user list. */
            excludedAdGroups(): AdGroupSelector;
            /** Returns a selector of all the search campaigns negatively targeting this user list. */
            excludedCampaigns(): CampaignSelector;
            /** Returns the description of the user list. */
            getDescription(): string;
            /** Returns the type of this entity as a String, in this case, "UserList". */
            getEntityType(): string;
            /** Returns the ID of the user list. */
            getId(): number;
            /** Returns the number of days a user's cookie stays on your list since its most recent addition to the list. */
            getMembershipLifeSpan(): number;
            /** Returns the name of the user list. */
            getName(): string;
            /** Estimated number of users in this user list, on the Google Display Network. */
            getSizeForDisplay(): number;
            /** Estimated number of users in this user list in the google.com domain. */
            getSizeForSearch(): number;
            /** Size range in terms of number of users of the UserList for ads on Google Display Network. */
            getSizeRangeForDisplay(): string;
            /** Size range in terms of number of users of the UserList, for Search ads. */
            getSizeRangeForSearch(): string;
            /** Type of this list: remarketing/logical/external remarketing. */
            getType(): string;
            /** Is the user list closed to new members being added. */
            isClosed(): boolean;
            /** Is the user list eligible for display campaigns/ad groups. */
            isEligibleForDisplay(): boolean;
            /** Is the user list eligible for search campaigns/ad groups. */
            isEligibleForSearch(): boolean;
            /** Is the user list accruing new members. */
            isOpen(): boolean;
            /** Is the user list read only. */
            isReadOnly(): boolean;
            /** Open user list to accrue new members. */
            open(): void;
            /** Sets the description of the user list. */
            setDescription(description: string): void;
            /** Sets the number of days a user's cookie stays on your list since its most recent addition to the list. */
            setMembershipLifeSpan(membershipLifeSpan: number): void;
            /** Sets the name of the user list. */
            setName(name: string): void;
            /** Returns a selector of all the search ad groups targeting this user list. */
            targetedAdGroups(): AdGroupSelector;
            /** Returns a selector of all the search campaigns targeting this user list. */
            targetedCampaigns(): CampaignSelector;
        }

        /**
         * An iterator of user lists.
         *
         * Typical usage:
         *
         *  while (userListIterator.hasNext()) {
         *    var userList = userListIterator.next();
         *  }
         */
        interface UserListIterator extends Base.Iterator<UserList> {}

        /**
         * Fetches user lists. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var userListSelector = campaign.targeting()
         *          .userLists()
         *          .withCondition("Impressions > 100")
         *          .orderBy("Clicks DESC");
         *
         *      var userListIterator = userListSelector.get();
         *      while (userListIterator.hasNext()) {
         *        var userList = userListIterator.next();
         *      }
         */
        interface UserListSelector
            extends Base.Selector<UserListIterator>,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
