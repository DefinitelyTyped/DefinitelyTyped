declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads label. */
        interface Label {
            /** Returns the selector of all ad groups to which the label is applied. */
            adGroups(): AdGroupSelector;
            /** Returns the selector of all ads to which the label is applied. */
            ads(): AdSelector;
            /** Returns the selector of all campaigns to which the label is applied. */
            campaigns(): CampaignSelector;
            /** Returns the color code of the label. */
            getColor(): string;
            /** Returns the description of the label. */
            getDescription(): string;
            /** Returns the type of this entity as a String, in this case, "Label". */
            getEntityType(): string;
            /** Returns the ID of the label. */
            getId(): string;
            /** Returns the name of the label. */
            getName(): string;
            /** Returns the selector of all keywords to which the label is applied. */
            keywords(): KeywordSelector;
            /** Removes the label. */
            remove(): void;
            /**
             * Sets the background color of the label.
             *
             * @param color	The new color. It must be specified in either RGB form (#RRGGBB or #RGB) or one of the 16 basic CSS color names.
             */
            setColor(color: string): void;
            /** Sets the description for this label. */
            setDescription(description: string): void;
            /** Changes the name of the Label. */
            setName(name: string): void;
        }

        /**
         * An iterator of labels.
         *
         * Typical usage:
         *
         *      while (labelIterator.hasNext()) {
         *        var label = labelIterator.next();
         *      }
         */
        interface LabelIterator extends Base.Iterator<Label> {}

        /**
         * Fetches labels. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var labelSelector = AdsApp.labels()
         *          .withCondition("CampaignsCount > 5")
         *          .orderBy("CampaignsCount DESC");
         *
         *      var labelIterator = labelSelector.get();
         *      while (labelIterator.hasNext()) {
         *        var label = labelIterator.next();
         *      }
         */
        interface LabelSelector
            extends Base.Selector<LabelIterator>,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
