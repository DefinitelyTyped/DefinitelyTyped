/// <reference path="./common.d.ts" />

declare namespace M {
    class CharacterCounter extends Component<undefined> {
        /**
         * Get Instance
         */
        static getInstance(elem: Element): CharacterCounter;

        /**
         * Init CharacterCounter
         */
        static init(els: Element, options?: Partial<undefined>): CharacterCounter;

        /**
         * Init CharacterCounters
         */
        static init(els: MElements, options?: Partial<undefined>): CharacterCounter[];
    }
}

interface JQuery {
    characterCounter(method?: keyof Pick<M.CharacterCounter, "destroy">): JQuery;
}
