// Type definitions for Google Ads Scripts
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../../base.d.ts" />
/// <reference path="./ad-schedules/ad-schedule.d.ts" />
/// <reference path="./audiences/search-campaign-audience.d.ts" />
/// <reference path="./audiences/search-campaign-excluded-audience.d.ts" />
/// <reference path="./content-labels/excluded-content-label.d.ts" />
/// <reference path="./excluded-locations/excluded-location.d.ts" />
/// <reference path="./languages/language.d.ts" />
/// <reference path="./platforms/platform.d.ts" />
/// <reference path="./locations/targeted-location.d.ts" />
/// <reference path="./proximities/targeted-proximity.d.ts" />

declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /**
         * Access to the targeting criteria for campaigns.
         *
         * For example, to select the ad schedules for all campaigns:
         *
         *      var adSchedules = AdsApp.targeting().adSchedules().get();
         *      while (adSchedules.hasNext()) {
         *        var adSchedule = adSchedules.next();
         *      }
         */
        interface Targeting {
            /** Specializes this selector to return AdSchedule criteria. */
            adSchedules(): AdScheduleSelector;
            /** Specializes this selector to return SearchCampaignAudience criteria. */
            audiences(): SearchCampaignAudienceSelector;
            /** Specializes this selector to return SearchCampaignExcludedAudience criteria. */
            excludedAudiences(): SearchCampaignExcludedAudienceSelector;
            /** Specializes this selector to return ExcludedContentLabel criteria. */
            excludedContentLabels(): ExcludedContentLabelSelector;
            /** Specializes this selector to return ExcludedLocation criteria. */
            excludedLocations(): ExcludedLocationSelector;
            /** Specializes this selector to return Language criteria. */
            languages(): LanguageSelector;
            /** Specializes this selector to return Platform criteria. */
            platforms(): PlatformSelector;
            /** Specializes this selector to return TargetedLocation criteria. */
            targetedLocations(): TargetedLocationSelector;
            /** Specializes this selector to return TargetedProximity criteria. */
            targetedProximities(): TargetedProximitySelector;
        }

        /**
         * Access to the targeting criteria for video campaigns.
         *
         * For example, to select the ad schedules for all video campaigns:
         *
         *  var adSchedules = AdsApp.videoCampaignTargeting().adSchedules().get();
         *  while (adSchedules.hasNext()) {
         *    var adSchedule = adSchedules.next();
         *  }
         */
        interface VideoCampaignTargeting {
            /** Specializes this selector to return AdSchedule criteria. */
            adSchedules(): AdScheduleSelector;
            /** Specializes this selector to return ExcludedContentLabel criteria. */
            excludedContentLabels(): ExcludedContentLabelSelector;
            /** Specializes this selector to return ExcludedLocation criteria. */
            excludedLocations(): ExcludedLocationSelector;
            /** Specializes this selector to return Language criteria. */
            languages(): LanguageSelector;
            /** Specializes this selector to return Platform criteria. */
            platforms(): PlatformSelector;
            /** Specializes this selector to return TargetedLocation criteria. */
            targetedLocations(): TargetedLocationSelector;
            /** Specializes this selector to return TargetedProximity criteria. */
            targetedProximities(): TargetedProximitySelector;
        }
    }
}
