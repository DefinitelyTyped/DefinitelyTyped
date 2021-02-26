// Type definitions for Google Ads Scripts 2021-02-25
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAdsScripts {
    namespace Base {
        interface Selector<Iterator> {
            /** Fetches the requested entity and returns an iterator. */
            get(): Iterator;
        }

        interface SelectorWithCondition {
            /** Adds the specified condition to the selector in order to narrow down the results. */
            withCondition(condition: string): this;
        }

        interface SelectorWithIds {
            /** Restricts this selector to return only the entities with the given IDs. */
            withIds(ids: string[]): this;
        }

        interface SelectorWithLimit {
            /** Specifies limit for the selector to use. For instance, `withLimit(50)` returns only the first 50 entities.. */
            withLimit(limit: number): this;
        }

        interface SelectorWithOrderBy {
            /** Specifies the ordering of the resulting entities. */
            orderBy(orderBy: string): this;
        }

        interface Iterator<Entity> {
            /** Returns true if the iterator has more elements. */
            hasNext(): boolean;
            /** Returns the next entity in the iterator. */
            next(): Entity;
            /** Returns the total number of entities matched by the selector which generated this iterator. */
            totalNumEntities(): number;
        }

        interface Builder<Operation> {
            /** Builds the entity Returns an Operation that corresponds to the creation of the Entity. */
            build(): Operation;
        }

        interface Operation<Entity> {
            getErrors(): string[];
            getResult(): Entity | null;
            isSuccessful(): boolean;
        }

        type DateRangeType = `${DateRange}`;

        enum DateRange {
            Today = 'TODAY',
            Yesterday = 'YESTERDAY',
            Last7Days = 'LAST_7_DAYS',
            ThisWeekSunToday = 'THIS_WEEK_SUN_TODAY',
            LastWeek = 'LAST_WEEK',
            Last14Days = 'LAST_14_DAYS',
            Last30Days = 'LAST_30_DAYS',
            LastBusinessWeek = 'LAST_BUSINESS_WEEK',
            LastWeekSunSat = 'LAST_WEEK_SUN_SAT',
            ThisMonth = 'THIS_MONTH',
            LastMonth = 'LAST_MONTH',
            AllTime = 'ALL_TIME',
        }
    }
}
