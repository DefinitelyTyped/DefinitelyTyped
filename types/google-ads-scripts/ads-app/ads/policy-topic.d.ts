declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /**
         * Represents an ad's policy topic.
         * These are policy decisions that have been made about the ad.
         * For more information about policy topics, please see the Google Ads Help Center article.
         */
        interface PolicyTopic {
            /** Returns the ID of the policy topic. */
            getId(): string;
            /** Returns the name of the policy topic. */
            getName(): string;
            /** Returns the type of the policy topic. */
            getType(): string;
        }
    }
}
