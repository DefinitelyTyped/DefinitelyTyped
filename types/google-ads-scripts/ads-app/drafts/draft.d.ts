declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /**
         * Represents a Google Ads draft.
         * Drafts can be used to prepare changes to campaigns, either by applying them directly or running an experiment.
         * For more information, refer to our guide to Drafts and Experiments.
         */
        interface Draft {
            /** Returns the base campaign to which this draft belongs. */
            getBaseCampaign(): Campaign;
            /** Returns the draft campaign associated with this draft. */
            getDraftCampaign(): Campaign;
            /** Returns the type of this entity as a String, in this case, "Draft". */
            getEntityType(): string;
            /** Returns the ID of the draft. */
            getId(): number;
            /** Returns the name of the draft. */
            getName(): string;
            /** Returns the status of the draft. */
            getStatus(): string;
            /** Returns true if the draft has a currently-running experiment. */
            hasRunningExperiment(): boolean;
            /** Returns a new experiment builder for this draft. */
            newExperimentBuilder(): ExperimentBuilder;
            /** Removes the draft, thereby removing its associated draft campaign, but not removing the associated base campaign. */
            remove(): void;
            /** Sets the name of the draft. */
            setName(name: string): void;
            /** Starts applying the draft's changes back to the base campaign. */
            startApplying(): void;
        }

        /**
         * Builder for Draft objects.
         *
         * Example usage:
         *
         *      // Create a draft builder.
         *      var draftBuilder = AdsApp.campaigns().get().next().newDraftBuilder();
         *
         *      // Create a draft operation.
         *      var draftOperation = draftBuilder
         *       .withName("Sample Draft")                // required
         *        .build();
         *
         *      // Optional: examine the outcome. The call to isSuccessful()
         *      // will block until the operation completes.
         *      if (draftOperation.isSuccessful()) {
         *        // Get the result.
         *        var draft = draftOperation.getResult();
         *      } else {
         *        // Handle the errors.
         *        var errors = draftOperation.getErrors();
         *      }
         */
        interface DraftBuilder extends Base.Builder<DraftOperation> {
            /** Sets the name of the new draft to the specified value. */
            withName(name: string): this;
        }

        /**
         * An iterator of drafts.
         *
         * Typical usage:
         *
         *      while (draftIterator.hasNext()) {
         *        var draft = draftIterator.next();
         *      }
         */
        interface DraftIterator extends Base.Iterator<Draft> {}

        /** An operation representing creation of a new draft. */
        interface DraftOperation extends Base.Operation<Draft> {}

        /**
         * Fetches drafts. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var draftSelector = AdsApp.drafts()
         *          .withCondition("BaseCampaignId = 123456789")
         *          .orderBy("DraftName ASC");
         *
         *      var draftIterator = draftSelector.get();
         *      while (draftIterator.hasNext()) {
         *        var draft = draftIterator.next();
         *      }
         */
        interface DraftSelector
            extends Base.Selector<DraftIterator>,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
