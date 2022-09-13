declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads language target. */
        interface Language {
            /** Returns the base campaign to which this language belongs. */
            getBaseCampaign(): Campaign;
            /** Returns the campaign to which this language belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign;
            /** Returns the campaign type. */
            getCampaignType(): string;
            /** Returns the type of this entity as a String, in this case, "Language". */
            getEntityType(): string;
            /** Returns the ID of the language. */
            getId(): number;
            /** Returns the language name, e.g., "English", "German". */
            getName(): string;
            /** Returns the video campaign to which this language belongs or null if it does not belong to a video campaign. */
            getVideoCampaign(): VideoCampaign;
            /** Removes the language. */
            remove(): void;
        }

        /**
         * An iterator of languages.
         *
         * Typical usage:
         *
         *      while (languageIterator.hasNext()) {
         *        var language = languageIterator.next();
         *      }
         */
        interface LanguageIterator extends Base.Iterator<Language> {}

        /** A plain JavaScript object to describe a language. */
        interface LanguageObject {
            id: number;
        }

        /** An operation representing creation of a new language. */
        interface LanguageOperation extends Base.Operation<Language> {}

        /**
         * Fetches languages. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var languageSelector = campaign.targeting()
         *          .languages()
         *          .withCondition("Impressions > 100")
         *          .orderBy("Clicks DESC");
         *
         *      var languageIterator = languageSelector.get();
         *      while (languageIterator.hasNext()) {
         *        var language = languageIterator.next();
         *      }
         */
        interface LanguageSelector
            extends Base.Selector<LanguageIterator>,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
