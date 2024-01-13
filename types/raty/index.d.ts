/// <reference types="jquery"/>

interface JQuery {
    raty(): JQuery;
    raty(options: JQueryRatyOptions): JQuery;
    raty(method: string, parameter: any): any;
    raty(method: "score"): number;
    raty(method: "score", score: number): void;
    raty(method: "click", star: number): void;
    raty(method: "readonly", on: boolean): void;
    raty(method: "cancel", on: boolean): void;
    raty(method: "reload"): void;
    raty(method: "set", options: JQueryRatyOptions): void;
    raty(method: "destroy"): JQuery;
    raty(method: "move", number: number): void;
}

interface JQueryRatyOptions {
    cancel?: boolean | undefined;
    cancelClass?: string | undefined;
    cancelHint?: string | undefined;
    cancelOff?: string | undefined;
    cancelOn?: string | undefined;
    cancelPlace?: string | undefined;
    click?: ((score: number, event: JQueryEventObject) => void) | undefined;
    half?: boolean | undefined;
    halfShow?: boolean | undefined;
    hints?: string[] | undefined;
    iconRange?: any[][] | undefined;
    mouseout?: ((score: number, event: JQueryEventObject) => void) | undefined;
    mouseover?: ((score: number, event: JQueryEventObject) => void) | undefined;
    noRatedMsg?: string | undefined;
    number?: number | undefined;
    numberMax?: number | undefined;
    path?: string | undefined;
    precision?: boolean | undefined;
    readOnly?: boolean | undefined;
    round?: JQueryRatyRoundingOptions | undefined;
    score?: number | undefined;
    scoreName?: string | undefined;
    single?: boolean | undefined;
    space?: boolean | undefined;
    starHalf?: string | undefined;
    starOff?: string | undefined;
    starOn?: string | undefined;
    target?: string | undefined;
    targetFormat?: string | undefined;
    targetKeep?: boolean | undefined;
    targetScore?: string | undefined;
    targetText?: string | undefined;
    targetType?: string | undefined;
    starType?: string | undefined;
}

interface JQueryRatyRoundingOptions {
    down: number;
    full: number;
    up: number;
}
