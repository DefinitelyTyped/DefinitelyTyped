import { DateTime } from "luxon-business-days";

const now = DateTime.now(); // $ExpectType DateTime<true>

now.isBusinessDay(); // $ExpectType boolean
now.isHoliday(); // $ExpectType boolean
now.isHoliday("args"); // $ExpectType boolean

// @ts-expect-error
now.plusBusiness(5);
now.plusBusiness(); // $ExpectType DateTime<true>
now.plusBusiness({ days: 1 }); // $ExpectType DateTime<true>

// @ts-expect-error
now.minusBusiness(1);
now.minusBusiness(); // $ExpectType DateTime<true>
now.minusBusiness({ days: 1 }); // $ExpectType DateTime<true>

now.setupBusiness(); // $ExpectType void
now.setupBusiness({ businessDays: [1, 2, 3] }); // $ExpectType void
now.setupBusiness({ holidayMatchers: [(d: DateTime) => false] }); // $ExpectType void
now.setupBusiness({ businessDays: [1, 2, 3], holidayMatchers: [(d: DateTime) => false] }); // $ExpectType void
now.clearBusinessSetup(); // $ExpectType void

now.businessDays; // $ExpectType BusinessDays | undefined
now.holidayMatchers; // $ExpectType HolidayMatcher[] | undefined
now.availableHolidayHelpers; // $ExpectType HolidayHelpersDict
now.availableHolidayMatchers; // $ExpectType HolidayMatchersDict
