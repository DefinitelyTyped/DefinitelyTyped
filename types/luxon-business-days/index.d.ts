// luxon-business-days extends the prototype of the luxon DateTime class
// https://github.com/amaidah/luxon-business-days/blob/master/src/index.js#L86
//
// There already exists a @types/luxon package which I added as a dependency
// https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/luxon
//
// The error I am getting in my test is:
// 'DateTime' only refers to a type, but is being used as a value here.ts(2693)

import { DateTime } from 'luxon'

declare module 'luxon' {
    type BusinessDayNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7
    type BusinessDays = BusinessDayNumbers[]

    type HolidayMatcherFn = (inst: DateTime<boolean>) => boolean
    type HolidayMatchers = HolidayMatcherFn[]
    interface HolidayMatchersDict {
        [key: string]: HolidayMatcherFn
    }

    type HolidayHelperFn = (...args: any[]) => any
    type HolidayHelpers = HolidayHelperFn[]
    interface HolidayHelpersDict {
        [key: string]: HolidayHelperFn
    }

    interface DateTime<IsValid extends boolean> {
        holidayHelpers: HolidayHelpers | undefined
        holidayMatchers: HolidayMatchers | undefined
        availableHolidayHelpers: HolidayHelpersDict
        availableHolidayMatchers: HolidayMatchersDict

        setupBusiness(opts?: {
            businessDays?: BusinessDays,
            holidayMatchers?: HolidayMatchers
        }): void

        clearBusinessSetup(): void

        isHoliday(...args: any[]): boolean

        isBusinessDay(): boolean

        plusBusiness(opts?: { days?: number }): this

        minusBusiness(opts?: { days?: number }): this
    }
}

// ERROR: Circular definition of import alias 'DateTime'.ts(2303)
// export { DateTime }
// export = DateTime
