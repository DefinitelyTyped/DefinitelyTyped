/// <reference types="jquery" />

declare namespace JQueryFarbtastic {
    type Placeholder = string | Element | JQuery;
    type CallbackFunction = (color: string) => any;
    type Callback = CallbackFunction | Placeholder;

    interface Options {
        callback?: Callback | undefined;
        width?: number | undefined;
        wheelWidth?: number | undefined;
    }

    interface Farbtastic {
        linked: CallbackFunction | JQuery;
        color: string;
        hsl: number[];

        linkTo(callback: Callback): Farbtastic;
        setColor(color: string | number[]): Farbtastic;
        setHSL(hsl: number[]): Farbtastic;
    }
}

interface JQueryStatic {
    farbtastic(
        placeholder: JQueryFarbtastic.Placeholder,
        callback: JQueryFarbtastic.Callback,
    ): JQueryFarbtastic.Farbtastic;
    farbtastic(
        placeholder: JQueryFarbtastic.Placeholder,
        options: JQueryFarbtastic.Options,
    ): JQueryFarbtastic.Farbtastic;
    farbtastic(placeholder: JQueryFarbtastic.Placeholder): JQueryFarbtastic.Farbtastic;
}

interface JQuery {
    farbtastic(callback: JQueryFarbtastic.Callback): JQuery;
    farbtastic(options: JQueryFarbtastic.Options): JQuery;
    farbtastic(): JQuery;
}
