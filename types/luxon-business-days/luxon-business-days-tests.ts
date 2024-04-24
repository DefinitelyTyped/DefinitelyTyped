import { DateTime } from 'luxon-business-days'

// ERROR: 'DateTime' only refers to a type, but is being used as a value here.ts(2693)
const now = DateTime.now() // $ExpectType DateTime<true>

now.isBusinessDay() // $ExpectType boolean
now.isHoliday() // $ExpectType boolean
