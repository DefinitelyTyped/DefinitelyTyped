/// <reference path="./common.d.ts" />

declare namespace M {
    class Range extends Component<undefined> {
    }
}

interface JQuery {
    range(): JQuery;
    range(method: keyof Pick<M.Range, "destroy">): JQuery;
}
