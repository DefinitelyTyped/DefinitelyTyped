// Type definitions for Google Ads Scripts
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../../../base.d.ts" />

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
        interface FrequencyCapBuilder extends Base.Builder<FrequencyCap> {}

        /** FrequencyCaps provides access to each of the frequency cap. */
        interface FrequencyCaps {
            /** Returns the type of this entity as a String, in this case, "FrequencyCaps". */
            getEntityType(): string;
            /** Get frequency cap for the chosen event type. */
            getFrequencyCapFor(): FrequencyCap;
            /** Returns a new frequency cap builder for the campaign that the frequency caps belong to. */
            newFrequencyCapBuilder(): FrequencyCapBuilder;
            /** Remove frequency cap for the chosen event type. */
            removeFrequencyCapFor(): void;
        }
    }
}
