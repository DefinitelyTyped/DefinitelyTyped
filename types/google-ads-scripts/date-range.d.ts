declare namespace GoogleAdsScripts {
    const DateRange: {
        Today: "TODAY";
        Yesterday: "YESTERDAY";
        Last7Days: "LAST_7_DAYS";
        ThisWeekSunToday: "THIS_WEEK_SUN_TODAY";
        LastWeek: "LAST_WEEK";
        Last14Days: "LAST_14_DAYS";
        Last30Days: "LAST_30_DAYS";
        LastBusinessWeek: "LAST_BUSINESS_WEEK";
        LastWeekSunSat: "LAST_WEEK_SUN_SAT";
        ThisMonth: "THIS_MONTH";
        LastMonth: "LAST_MONTH";
        AllTime: "ALL_TIME";
    };

    type DateRangeType = typeof DateRange[keyof typeof DateRange];
}
