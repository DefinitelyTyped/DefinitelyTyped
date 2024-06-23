declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads frequency cap. */
        interface FrequencyCap {
            /** Returns the type of this entity as a String, in this case, "FrequencyCap". */
            getEntityType(): string;
            /** Returns type of event that the cap applies to. */
            getEventType(): string;
            /** Returns the level on which the cap is to be applied. */
            getLevel(): string;
            /** Returns the cap number for the frequency cap. */
            getLimit(): number;
            /** Returns the unit of time the cap is defined at. */
            getTimeUnit(): string;
        }

        /** Builder for FrequencyCap objects. */
        interface FrequencyCapBuilder {
            /** Builds the frequency cap. */
            build(): void;
            /** Set the event type to the new frequency cap. */
            withEventType(eventType: string): this;
            /** Set the cap number to the new frequency cap. */
            withLimit(limit: number): this;
            /** Set the time unit to the new frequency cap. */
            withTimeUnit(timeUnit: string): this;
        }

        /** FrequencyCaps provides access to each of the frequency cap. */
        interface FrequencyCaps {
            /** Returns the type of this entity as a String, in this case, "FrequencyCaps". */
            getEntityType(): string;
            /** Get frequency cap for the chosen event type. */
            getFrequencyCapFor(): FrequencyCap;
            /** Returns a new frequency cap builder for the campaign that the frequency caps belong to. */
            newFrequencyCapBuilder(): FrequencyCapBuilder;
            /** Remove frequency cap for the chosen event type. */
            removeFrequencyCapFor(eventType: string): void;
        }
    }
}
