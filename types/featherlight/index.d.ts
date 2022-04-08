// Type definitions for Featherlight v1.3.4
// Project: https://noelboss.github.io/featherlight/
// Definitions by: Kaur Kuut <https://github.com/xStrom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

///<reference types="jquery" />

declare namespace Featherlight {
    interface Config {
        namespace?: string;
        targetAttr?: string;
        variant?: string;
        resetCss?: boolean;
        background?: string;
        openTrigger?: string;
        closeTrigger?: string;
        filter?: string;
        root?: string;
        openSpeed?: number | string;
        closeSpeed?: number | string;
        closeOnClick?: boolean | string;
        closeOnEsc?: boolean;
        closeIcon?: string;
        loading?: string;
        persist?: boolean | string;
        otherClose?: string;
        beforeOpen?: (event: JQueryEventObject) => any;
        beforeContent?: (event: JQueryEventObject) => any;
        beforeClose?: (event: JQueryEventObject) => any;
        afterOpen?: (event: JQueryEventObject) => any;
        afterContent?: (event: JQueryEventObject) => any;
        afterClose?: (event: JQueryEventObject) => any;
        onKeyUp?: (event: JQueryEventObject) => any;
        onResize?: (event: JQueryEventObject) => any;
        type?: string;
        contentFilters?: any;
        jquery?: JQuery;
        image?: string;
        html?: string;
        ajax?: string;
        text?: string;
    }

    interface ContentFilter {
        regex?: RegExp;
        test?(data: JQuery | string): boolean;
        process?(data: JQuery | string): JQuery | JQueryPromise<JQuery>;
    }

    interface ContentFilters {
        [name: string]: ContentFilter;
    }

    interface Featherlight extends Config {
        target: JQuery | string;
        $instance: JQuery;
        $content: JQuery;

        setup(target: JQuery, config?: Config): Featherlight;
        setup(target: string, config?: Config): Featherlight;
        setup(config: Config): Featherlight;
        setup(): Featherlight;

        getContent(): JQuery | JQueryPromise<JQuery>;
        setContent($content: JQuery): Featherlight;
        setContent($content: JQueryPromise<JQuery>): Featherlight;
        open(event?: JQueryEventObject): JQueryPromise<JQuery>;
        close(event?: JQueryEventObject): JQueryPromise<JQuery>;
    }

    interface FeatherlightStatic {
        ($content: JQuery, config?: Config): Featherlight;
        ($content: string, config?: Config): Featherlight;
        (config: Config): Featherlight;
        (): Featherlight;

        new($content: JQuery, config?: Config): Featherlight;
        new($content: string, config?: Config): Featherlight;
        new(config: Config): Featherlight;
        new(): Featherlight;

        attach($source: JQuery, $content: JQuery, config?: Config): JQuery;
        attach($source: JQuery, $content: string, config?: Config): JQuery;
        attach($source: JQuery, config: Config): JQuery;
        attach($source: JQuery): JQuery;

        id: number;
        autoBind: boolean | string;
        defaults: Config;
        contentFilters: ContentFilters;
        functionAttributes: string[];

        readElementConfig(element: HTMLElement, namespace: string): any;
        extend(child: any, defaults: any): any;
        current(): Featherlight;
        opened(): Featherlight[];
        close(): JQueryPromise<JQuery>;
    }

    interface JQueryExtension {
        ($content: JQuery, config?: Config): JQuery;
        ($content: string, config?: Config): JQuery;
        (config: Config): JQuery;
        (): JQuery;
    }
}

interface JQueryStatic {
    featherlight: Featherlight.FeatherlightStatic;
}

interface JQuery {
    featherlight: Featherlight.JQueryExtension;
}
