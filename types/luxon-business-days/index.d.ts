// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.9

// NOTE: The types appear to be working in my editor (vscode), but when I run tests
// they are failing for TypeScript 4.7 and 4.8. I tried adding the minimum
// TypeScript version comment above, but that doesn't seem to be working.

/*
$ pnpm test luxon-business-days

> definitely-typed@0.0.3 test /Users/bcbailey/Code/DefinitelyTyped
> node --enable-source-maps node_modules/@definitelytyped/dtslint/ types "luxon-business-days"

dtslint@0.2.20
Error:
/Users/bcbailey/Code/DefinitelyTyped/types/luxon-business-days/luxon-business-days-tests.ts
   9:1   error  TypeScript@4.7, 4.8 expected type to be:
  DateTime<true>
got:
  any                                     @definitelytyped/expect
   9:13  error  TypeScript@4.7, 4.8 compile error:
'DateTime' only refers to a type, but is being used as a value here  @definitelytyped/expect
  10:1   error  TypeScript@4.7, 4.8 expected type to be:
  boolean
got:
  any                                            @definitelytyped/expect
  11:1   error  TypeScript@4.7, 4.8 expected type to be:
  boolean
got:
  any                                            @definitelytyped/expect

✖ 4 problems (4 errors, 0 warnings)

    at combineErrorsAndWarnings (/Users/bcbailey/Code/DefinitelyTyped/node_modules/.pnpm/@definitelytyped+dtslint@0.2.20_typescript@5.5.0-dev.20240424/node_modules/@definitelytyped/dtslint/src/index.ts:259:26)
    at runTests (/Users/bcbailey/Code/DefinitelyTyped/node_modules/.pnpm/@definitelytyped+dtslint@0.2.20_typescript@5.5.0-dev.20240424/node_modules/@definitelytyped/dtslint/src/index.ts:250:18)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at main (/Users/bcbailey/Code/DefinitelyTyped/node_modules/.pnpm/@definitelytyped+dtslint@0.2.20_typescript@5.5.0-dev.20240424/node_modules/@definitelytyped/dtslint/src/index.ts:103:22)
 ELIFECYCLE  Test failed. See above for more details.
*/

import { DateTime } from 'luxon'

export type BusinessDayNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7
export type BusinessDays = BusinessDayNumbers[]

export type HolidayMatcher = (inst: DateTime<boolean>) => boolean
export interface HolidayMatchersDict { [key: string]: HolidayMatcher }

export type HolidayHelper = (...args: any[]) => any
export interface HolidayHelpersDict { [key: string]: HolidayHelper }

declare module 'luxon' {
    interface DateTime<IsValid extends boolean> {
        holidayHelpers: HolidayHelper[] | undefined
        holidayMatchers: HolidayMatcher[] | undefined
        availableHolidayHelpers: HolidayHelpersDict
        availableHolidayMatchers: HolidayMatchersDict

        setupBusiness(opts?: {
            businessDays?: BusinessDays,
            holidayMatchers?: HolidayMatcher[]
        }): void

        clearBusinessSetup(): void

        isHoliday(...args: any[]): boolean

        isBusinessDay(): boolean

        plusBusiness(opts?: { days?: number }): this

        minusBusiness(opts?: { days?: number }): this
    }
}

export { DateTime }
