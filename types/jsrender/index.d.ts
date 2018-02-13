// Type definitions for JsRender
// Project: http://www.jsviews.com/#jsrender
// Definitions by: Kensuke Matsuzaki <https://github.com/zakki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

declare namespace JsRender {
    interface Converters {
        (name: string, converterFn: (value: any) => any): any;
        (namedConverters: any, parentTemplate?: any): any;

        html(valueToEncode: string): string;
        attr(valueToEncode: string): string;
        url(valueToEncode: string): string;
    }

    interface Views {
        converters: Converters;

        tags(name: string, tagFn: (value: any) => any): any;
        tags(name: string, tagOptions: any): any;
        tags(namedTags: any): any;

        helpers(name: string, helper: any): any;
        helpers(namedHelpers: any, parentTemplate?: any): any;
    }

    interface Template {
        render(data?: any): string;
    }

    interface NamedTemplate {
        (data?: any): string;
    }

    interface Render {
        (data?: any, helpersOrContext?: any): string;
    }

    interface RenderStatic {
        [index: string]: NamedTemplate;
    }
}

interface JQuery {
    render: JsRender.Render;
}

interface JQueryStatic {
    render: JsRender.RenderStatic;
    views: JsRender.Views;
    templates(markupOrSelector: string): JsRender.Template;
    templates(name: string, markupOrSelector: string): JsRender.Template;
    templates(namedTemplates: any): any;
}
