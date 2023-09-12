declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly filter: {
            instances: { [id: string]: filter };
            new(editorOrRules: editor | filter.allowedContentRules): filter;
        };
    }

    /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_filter.html */
    interface filter {
        readonly allowedContent: filter.allowedContentRules[];
        readonly customConfig: boolean;
        readonly disabled: boolean;
        readonly disallowedContent: filter.disallowedContentRule[];
        readonly editor: editor;
        readonly elementCallbacks: Array<(element: htmlParser.element) => number>;
        readonly id: number;

        addContentForms(forms: unknown[]): void;

        addElementCallback(callback: (element: htmlParser.element) => number): void;

        addFeature(feature: feature): boolean;

        addTransformations(transformations: Array<Array<string | filter.transformation>>): void;

        allow(newRules: filter.allowedContentRules, featureName?: string, overrideCustom?: boolean): boolean;

        applyTo(
            fragment: htmlParser.fragment | htmlParser.element,
            toHtml?: boolean,
            transformOnly?: boolean,
            enterMode?: number,
        ): boolean;

        check(test: filter.contentRule, applyTransformations?: boolean, strictCheck?: boolean): boolean;

        checkFeature(feature: feature): boolean;

        clone(): filter;

        destroy(): void;

        disable(): void;

        disallow(newRules: filter.disallowedContentRules): void;

        getAllowedEnterMode(defaultMode: number, reverse?: boolean): number;
    }

    namespace filter {
        /** https://ckeditor.com/docs/ckeditor4/latest/guide/dev_allowed_content_rules.html#object-format */
        interface allowedContentObject {
            [name: string]: { [style: string]: string } | string;
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_filter_allowedContentRules.html */
        type allowedContentRule = string | style | allowedContentObject | allowedContentRule[];
        type allowedContentRules = allowedContentRule | allowedContentRule[];

        type contentRule = string | style;

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_filter_disallowedContentRules.html */
        type disallowedContentRule = string | { [key: string]: unknown };
        type disallowedContentRules = disallowedContentRule | disallowedContentRule[];

        interface transformation {
            check?: string | undefined;
            element?: string | style | undefined;
            left?: ((element: htmlParser.element | style) => boolean) | undefined;
            right: (element: htmlParser.element, tools: string | transformationTools) => boolean;
        }

        const transformationTools: transformationTools;

        interface transformationTools {
            alignmentToAttribute(element: htmlParser.element): void;

            alignmentToStyle(element: htmlParser.element): void;

            lengthToAttribute(element: htmlParser.element, styleName: string, attrName?: string): void;

            lengthToStyle(element: htmlParser.element, styleName: string, attrName?: string): void;

            matchesTyle(element: htmlParser.element, style: style): void;

            sizeToAttribute(element: htmlParser.element): void;

            sizeToStyle(element: htmlParser.element): void;

            splitBorderShorthand(element: htmlParser.element): void;

            splitMarginShorthand(element: htmlParser.element): void;

            transform(element: htmlParser.element, form: style | string): void;
        }
    }
}
