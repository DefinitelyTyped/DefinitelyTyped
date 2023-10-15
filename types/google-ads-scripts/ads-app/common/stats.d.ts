declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /**
         * Statistics common to various entity types. Typical usage:
         *
         *      var stats = campaign.getStatsFor("LAST_MONTH");
         *      var impressions = stats.getImpressions();
         *      var clicks = stats.getClicks();
         *      // etc.
         *
         * Note that Analytics-related stats (`Stats.getAveragePageviews()`, `Stats.getAverageTimeOnSite()` and `Stats.getBounceRate()`)
         * are only available for Campaigns, Ad groups, Keywords, and Ads. The method calls will return null for other entity types.
         */
        interface Stats {
            /** Returns the average cost per click. */
            getAverageCpc(): number;
            /** Returns the average cost per thousand impressions. */
            getAverageCpm(): number;
            /** Returns the average cost per view. */
            getAverageCpv(): number;
            /**
             * Returns the average number of pages viewed per visit. Only available for Campaigns, Ad groups, Keywords, and Ads.
             * Returns `null` for other entity types. Returns `null` if the account is not linked to Analytics.
             */
            getAveragePageviews(): number;
            /**
             * ~~Returns the average position. Returns `null` if this is a Display entity that doesn't have an average position.~~
             *
             * @deprecated **Deprecated**. Starting the week of September 30, 2019 this method will return `null`.
             */
            getAveragePosition(): null;
            /**
             * Returns the average time a visitor spent on site, in seconds. Only available for Campaigns, Ad groups, Keywords, and Ads.
             * Returns `null` for other entity types. Returns `null` if the account is not linked to Analytics.
             */
            getAverageTimeOnSite(): number;
            /**
             * Returns the bounce rate of the entity, in `0..1` range. When a visitor to your site sees only one page or triggers only one event,
             * Analytics considers this visit a "bounce." Only available for Campaigns, Ad groups, Keywords, and Ads.
             * Returns `null` for other entity types. Returns `null` if the account is not linked to Analytics.
             */
            getBounceRate(): number;
            /** Returns the number of clicks. */
            getClicks(): number;
            /** Returns the rate of conversions. */
            getConversionRate(): number;
            /** Returns the number of conversions. */
            getConversions(): number;
            /** Returns the cost in the default currency of the account. */
            getCost(): number;
            /** Returns the click through rate of the entity, in `0..1` range. */
            getCtr(): number;
            /** Returns the number of impressions. */
            getImpressions(): number;
            /** Returns the view rate of the entity, in `0..1` range. */
            getViewRate(): number;
            /** Returns the number of video views. */
            getViews(): number;
        }
    }
}
