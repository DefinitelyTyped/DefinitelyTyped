// import * as luxon from 'luxon'
// import { DateTime as BaseDateTime } from 'luxon'
// export * from 'luxon'

import { DateTime } from 'luxon'

// declare module 'luxon' {
    export type BusinessDayNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7
    export type BusinessDays = BusinessDayNumbers[]

    export type HolidayMatcherFn = (inst: DateTime) => boolean
    export type HolidayMatchers = HolidayMatcherFn[]
    export interface HolidayMatchersDict {
        [key: string]: HolidayMatcherFn
    }

    export type HolidayHelperFn = (...args: any[]) => any
    export type HolidayHelpers = HolidayHelperFn[]
    export interface HolidayHelpersDict {
        [key: string]: HolidayHelperFn
    }

    export interface DateTime {
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

        plusBusiness(opts?: { days?: number }): DateTime

        minusBusiness(opts?: { days?: number }): DateTime
    }
// }

// export { DateTime }

// export = luxon
// export * from 'luxon'
// export { DateTime } from 'luxon'
