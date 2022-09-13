declare namespace GoogleAdsScripts {
    namespace Base {
        interface Selector<Iterator> {
            /** Fetches the requested entity and returns an iterator. */
            get(): Iterator;
        }

        interface SelectorForDateRange {
            /**
             * Sets a predefined date range onto the selector. Supported values:
             *
             * `TODAY`, `YESTERDAY`, `LAST_7_DAYS`, `THIS_WEEK_SUN_TODAY`, `LAST_WEEK`, `LAST_14_DAYS`, `LAST_30_DAYS`,
             * `LAST_BUSINESS_WEEK`, `LAST_WEEK_SUN_SAT`, `THIS_MONTH`, `LAST_MONTH`, `ALL_TIME`.
             *
             * Example:
             *
             *      selector.forDateRange("THIS_WEEK_SUN_TODAY");
             *
             * Date range must be specified if the selector has conditions or ordering for a stat field. Note that only
             * the last date range specified for the selector will take effect.
             */
            forDateRange(dateRange: DateRangeType): this;
            /**
             * Sets a custom date range onto the selector.
             * Both parameters can be either an object containing year, month, and day fields, or an 8-digit string in `YYYYMMDD` form.
             * For instance, `March 24th, 2013` is represented as either `{year: 2013, month: 3, day: 24}` or `"20130324"`.
             * The date range is inclusive on both ends, so `forDateRange("20130324", "20130324")` sets the range of one day.
             *
             * Date range must be specified if the selector has conditions or ordering for a stat field. Note that only the last date
             * range specified for the selector will take effect.
             */
            forDateRange(dateFrom: string | AdsApp.GoogleAdsDate, dateTo: string | AdsApp.GoogleAdsDate): this;
        }

        interface SelectorOrderBy {
            /** Specifies the ordering of the resulting entities. */
            orderBy(orderBy: string): this;
        }

        interface SelectorWithCondition {
            /** Adds the specified condition to the selector in order to narrow down the results. */
            withCondition(condition: string): this;
        }

        interface SelectorWithIds {
            /** Restricts this selector to return only the entities with the given IDs. */
            withIds(ids: number[]): this;
        }

        interface SelectorWithLimit {
            /** Specifies limit for the selector to use. For instance, `withLimit(50)` returns only the first 50 entities.. */
            withLimit(limit: number): this;
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

        interface StatsFor {
            /** Returns stats for the specified date range. */
            getStatsFor(dateRange: DateRangeType): AdsApp.Stats;
            /** Returns stats for the specified custom date range. */
            getStatsFor(dateFrom: string | AdsApp.GoogleAdsDate, dateTo: string | AdsApp.GoogleAdsDate): AdsApp.Stats;
        }
    }
}
