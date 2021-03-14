// Type definitions for Google Ads Scripts 2021-02-26
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../../base.d.ts" />
/// <reference path="./ad.d.ts" />
/// <reference path="../ad-groups/ad-group.d.ts" />

declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Gmail single promotion ad. */
        interface GmailSinglePromotionAd extends Base.StatsFor {
            /** Applies a label to the ad. */
            applyLabel(name: string): void;
            /** Returns an AdViewSpace, which provides access to type-specific fields of the ad. */
            asType(): AdViewSpace;
            /** Enables the ad. */
            enable(): void;
            /** Returns the ad group to which this ad belongs. */
            getAdGroup(): AdGroup;
            /** Returns the advertiser shown in the ad. */
            getAdvertiser(): string;
            /** Returns the call to action of the ad. */
            getCallToAction(): string;
            /** Returns the call to action button color hex code of the ad. */
            getCallToActionButtonColor(): string;
            /** Returns the call to action text color hex code of the ad. */
            getCallToActionTextColor(): string;
            /** Returns the campaign to which this ad belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign;
            /** Returns the content of the ad. */
            getContent(): string;
            /** Returns the description of the ad. */
            getDescription(): string;
            /** Returns the type of this entity as a String, in this case, "Ad". */
            getEntityType(): string;
            /** Returns the ad's header image. */
            getHeader(): Media;
            /** Returns the headline of the ad. */
            getHeadline(): string;
            /** Returns the headline color hex code of the ad. */
            getHeadlineColor(): string;
            /** Returns the ID of the ad. */
            getId(): number;
            /** Returns the ad's image. */
            getImage(): Media;
            /** Returns the ad's logo image. */
            getLogo(): Media;
            /** Returns the name of the ad. */
            getName(): string;
            /** Returns the policy approval status of the ad. */
            getPolicyApprovalStatus(): string;
            /** Returns the list of policy topics associated with the ad. */
            getPolicyTopics(): PolicyTopic[];
            /** Returns the subject of the ad. */
            getSubject(): string;
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
