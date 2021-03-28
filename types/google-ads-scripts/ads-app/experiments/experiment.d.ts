declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /**
         * Represents a Google Ads experiment.
         * Experiments are used to run the changes made in a draft campaign side by side with the base campaign.
         * For more information, refer to our guide to Drafts and Experiments.
         */
        interface Experiment {
            /** Finishes the experiment. */
            finish(): void;
            /** Returns the base campaign to which this experiment belongs. */
            getBaseCampaign(): Campaign;
            /** Returns the draft from which this experiment is running. */
            getDraft(): Draft;
            /** Returns the experiment's end date, or null if there is no end date. */
            getEndDate(): GoogleAdsDate;
            /** Returns the type of this entity as a String, in this case, "Experiment". */
            getEntityType(): string;
            /** Returns the experiment campaign associated with this experiment. */
            getExperimentCampaign(): Campaign;
            /** Returns the ID of the experiment. */
            getId(): number;
            /** Returns the name of the experiment. */
            getName(): string;
            /** Returns the experiment's start date. */
            getStartDate(): GoogleAdsDate;
            /** Returns the status of the experiment. */
            getStatus(): string;
            /** Returns the traffic split percent (percent of traffic directed to ads from the experiment campaign) of this experiment. */
            getTrafficSplitPercent(): number;
            /** Graduates the experiment, establishing the experiment campaign as an active, full-fledged campaign immediately. */
            graduate(): void;
            /** Removes the experiment, thereby removing its associated experiment campaign, but not removing the associated base campaign. */
            remove(): void;
            /** Sets the experiment's end date from either an object containing year, month, and day fields, or an 8-digit string in YYYYMMDD format. */
            setEndDate(date: string | GoogleAdsDate): void;
            /** Sets the name of the experiment. */
            setName(name: string): void;
            /** Sets the experiment's start date from either an object containing year, month, and day fields, or an 8-digit string in YYYYMMDD format. */
            setStartDate(date: string | GoogleAdsDate): void;
            /** Starts applying the experiment's changes back to the base campaign. */
            startApplying(): void;
        }

        /**
         * Builder for Experiment objects.
         *
         * Example usage:
         *
         *      // Create an experiment builder.
         *      var experimentBuilder = AdsApp.drafts().get().next().newExperimentBuilder();
         *
         *      // Create the experiment. Note that startBuilding() returns nothing.
         *      experimentBuilder
         *        .withName("Sample Experiment")                // required
         *        .withTrafficSplitPercent(50)                  // required
         *        .startBuilding();
         *
         *      //Head to the "All experiments" tab of the UI to track the new experiment's creation.
         */
        interface ExperimentBuilder {
            /** Starts creating an Experiment. */
            startBuilding(): void;
            /** Sets the experiment's end date from either an object containing year, month, and day fields, or an 8-digit string in YYYYMMDD format. */
            withEndDate(date: string | GoogleAdsDate): void;
            /** Sets the name of the new experiment to the specified value. */
            withName(name: string): this;
            /** Sets the experiment's start date from either an object containing year, month, and day fields, or an 8-digit string in YYYYMMDD format. */
            withStartDate(date: string | GoogleAdsDate): this;
            /** Sets the traffic split percent (percent of traffic directed to ads from the experiment campaign) of the new experiment to the specified value. */
            withTrafficSplitPercent(trafficSplitPercent: number): this;
        }

        /**
         * An iterator of experiments.
         *
         * Typical usage:
         *
         *      while (experimentIterator.hasNext()) {
         *        var experiment = experimentIterator.next();
         *      }
         */
        interface ExperimentIterator extends Base.Iterator<Experiment> {}

        /**
         * Fetches experiments. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *  var experimentSelector = AdsApp.experiments()
         *      .withCondition("BaseCampaignId = 123456789")
         *      .orderBy("Name ASC");
         *
         *  var experimentIterator = experimentSelector.get();
         *  while (experimentIterator.hasNext()) {
         *    var experiment = experimentIterator.next();
         *  }
         */
        interface ExperimentSelector
            extends Base.Selector<ExperimentIterator>,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
