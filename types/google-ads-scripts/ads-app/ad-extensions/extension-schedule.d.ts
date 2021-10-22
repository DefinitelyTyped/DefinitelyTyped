declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /**
         * Represents one period of a Google Ads ad extension schedule. For instance, if an ad extension were set up to only show on ads on weekdays
         * from 09:00 to 18:00, it would have five ExtensionSchedules: one for Monday 09:00 - 18:00, one for Tuesday 09:00 - 18:00, and so on.
         */
        interface ExtensionSchedule {
            /** Returns the day of week this schedule applies to. */
            getDayOfWeek(): ExtensionScheduleDayOfWeekType;
            /** Returns the ending hour of this schedule. */
            getEndHour(): number;
            /** Returns the ending minute of this schedule. */
            getEndMinute(): number;
            /** Returns the type of this entity as a String, in this case, "ExtensionSchedule". */
            getEntityType(): string;
            /** Returns the starting hour of this schedule. */
            getStartHour(): number;
            /** Returns the starting minute of this schedule. */
            getStartMinute(): number;
        }

        /**
         * Represents one period of a Google Ads ad extension schedule. For instance, if an ad extension were set up to only show on ads on weekdays
         * from 09:00 to 18:00, it would have five ExtensionSchedules: one for Monday 09:00 - 18:00, one for Tuesday 09:00 - 18:00, and so on.
         *
         *      var monday = {
         *        dayOfWeek: "MONDAY",
         *        startHour: 9,
         *        startMinute: 0,
         *        endHour: 18,
         *        endMinute: 0
         *      };
         *      var tuesday = {
         *        dayOfWeek: "TUESDAY",
         *        startHour: 9,
         *        startMinute: 0,
         *        endHour: 18,
         *        endMinute: 0
         *      };
         *
         *      sitelink.setSchedules([monday, tuesday]);
         */
        interface ExtensionScheduleLiteral {
            dayOfWeek: ExtensionScheduleDayOfWeekType;
            startHour: number;
            startMinute: number;
            endHour: number;
            endMinute: number;
        }

        /** Enum of supported extension sechedule days of the week */
        const ExtensionScheduleDayOfWeek: {
            Monday: "MONDAY";
            Tuesday: "TUESDAY";
            Wednesday: "WEDNESDAY";
            Thursday: "THURSDAY";
            Friday: "FRIDAY";
            Saturday: "SATURDAY";
            Sunday: "SUNDAY";
        };

        type ExtensionScheduleDayOfWeekType = typeof ExtensionScheduleDayOfWeek[keyof typeof ExtensionScheduleDayOfWeek];
    }
}
