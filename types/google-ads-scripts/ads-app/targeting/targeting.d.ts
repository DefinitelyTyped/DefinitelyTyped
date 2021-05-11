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
