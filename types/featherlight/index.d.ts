/// <reference types="jquery" />

declare namespace Featherlight {
    interface Config {
        namespace?: string | undefined;
        targetAttr?: string | undefined;
        variant?: string | undefined;
        resetCss?: boolean | undefined;
        background?: string | undefined;
        openTrigger?: string | undefined;
        closeTrigger?: string | undefined;
        filter?: string | undefined;
        root?: string | undefined;
        openSpeed?: number | string | undefined;
        closeSpeed?: number | string | undefined;
        closeOnClick?: boolean | string | undefined;
        closeOnEsc?: boolean | undefined;
        closeIcon?: string | undefined;
        loading?: string | undefined;
        persist?: boolean | string | undefined;
        otherClose?: string | undefined;
        beforeOpen?: ((event: JQueryEventObject) => any) | undefined;
        beforeContent?: ((event: JQueryEventObject) => any) | undefined;
        beforeClose?: ((event: JQueryEventObject) => any) | undefined;
        afterOpen?: ((event: JQueryEventObject) => any) | undefined;
        afterContent?: ((event: JQueryEventObject) => any) | undefined;
        afterClose?: ((event: JQueryEventObject) => any) | undefined;
        onKeyUp?: ((event: JQueryEventObject) => any) | undefined;
        onResize?: ((event: JQueryEventObject) => any) | undefined;
        type?: string | undefined;
        contentFilters?: any;
        jquery?: JQuery | undefined;
        image?: string | undefined;
        html?: string | undefined;
        ajax?: string | undefined;
        text?: string | undefined;
    }

    interface ContentFilter {
        regex?: RegExp | undefined;
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
