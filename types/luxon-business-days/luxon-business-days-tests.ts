import { DateTime } from 'luxon-business-days'

const now = DateTime.now() // $ExpectType DateTime<true>
now.isBusinessDay() // $ExpectType boolean
now.isHoliday() // $ExpectType boolean

now.plusBusiness({ days: 1 }) // $ExpectType DateTime<true>
now.minusBusiness({ days: 1 }) // $ExpectType DateTime<true>

now.setupBusiness({ businessDays: [ 1, 2, 3 ] }) // $ExpectType void
now.clearBusinessSetup() // $ExpectType void

now.holidayHelpers // $ExpectType HolidayHelper[] | undefined
now.holidayMatchers // $ExpectType HolidayMatcher[] | undefined
now.availableHolidayHelpers // $ExpectType HolidayHelpersDict
now.availableHolidayMatchers // $ExpectType HolidayMatchersDict
