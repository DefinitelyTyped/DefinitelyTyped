/// <reference path="./common.d.ts" />

declare namespace M {
    class Range extends Component<undefined> {
        /**
         * Get Instance
         */
        static getInstance(elem: Element): Range;

        /**
         * Init Range
         */
        static init(els: Element, options?: Partial<undefined>): Range;

        /**
         * Init Ranges
         */
        static init(els: MElements, options?: Partial<undefined>): Range[];
    }
}

interface JQuery {
    range(method?: keyof Pick<M.Range, "destroy">): JQuery;
}
