import { DateTime } from 'luxon-business-days'

const now = DateTime.now() // $ExpectType DateTime<true>

now.isBusinessDay() // $ExpectType boolean
now.isHoliday() // $ExpectType boolean
