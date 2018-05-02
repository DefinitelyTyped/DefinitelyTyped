/// <reference path="./common.d.ts" />

declare namespace M {
    class CharacterCounter extends Component<undefined> {
        /**
         * Get Instance
         */
        static getInstance(elem: Element): CharacterCounter;
    }
}

interface JQuery {
    characterCounter(method: keyof Pick<M.CharacterCounter, "destroy">): JQuery;
    characterCounter(): JQuery;
}
