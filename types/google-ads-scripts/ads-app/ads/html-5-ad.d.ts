// Type definitions for Google Ads Scripts 2021-02-26
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../../base.d.ts" />
/// <reference path="./ad.d.ts" />
/// <reference path="../ad-groups/ad-group.d.ts" />

declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents an HTML5 ad. */
        interface Html5Ad {
            /** Applies a label to the ad. */
            applyLabel(name: string): void;
            /** Returns an AdViewSpace, which provides access to type-specific fields of the ad. */
            asType(): AdViewSpace;
            /** Enables the ad. */
            enable(): void;
            /** Returns the ad group to which this ad belongs. */
            getAdGroup(): AdGroup;
            /** Returns the campaign to which this ad belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign;
            /** Returns the type of this entity as a String, in this case, "Ad". */
            getEntityType(): string;
            /** Returns the entry point of the ad's media bundle. */
            getEntryPoint(): string;
            /** Returns the ID of the ad. */
            getId(): number;
            /** Returns the media bundle for the ad. */
            getMediaBundle(): Media;
            /** Returns the name of the ad. */
            getName(): string;
            /** Returns the policy approval status of the ad. */
            getPolicyApprovalStatus(): string;
            /** Returns the list of policy topics associated with the ad. */
            getPolicyTopics(): PolicyTopic[];
            /** Returns stats for the specified date range. */
            getStatsFor(): Stats;
            /** Returns stats for the specified custom date range. */
            getStatsFor(): Stats;
            /** Returns the type of the ad. */
            getType(): string;
            /** Returns true if the ad is enabled. */
            isEnabled(): boolean;
            /** Returns true if the ad is paused. */
            isPaused(): boolean;
            /** Returns an AdTypeSpace, which determines the type of the ad. */
            isType(): AdTypeSpace;
            /** Creates a selector of all labels applied to the ad. */
            labels(): LabelSelector;
            /** Pauses the ad. */
            pause(): void;
            /** Removes the ad. */
            remove(): void;
            /** Removes a label from the ad. */
            removeLabel(name: string): void;
            /**Provides access to this ad's URL fields. */
            urls(): AdUrls;
        }
    }
}
