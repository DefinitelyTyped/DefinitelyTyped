declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly style: typeof style;
    }

    class style {
        alwaysRemoveElement: boolean;
        includeReadonly: boolean;

        constructor(styleDefinition: style.definition, variableValues?: Record<string, string>);

        static addCustomHandler(defintion: style.customHandler): style;

        static getStyleText(style: style.definition): string;

        apply(editor: editor): void;

        applyToObject(element: dom.element, editor: editor): void;

        applyToRange(range: dom.range, editor: editor): void;

        buildPreview(label?: string): string;

        checkActive(elementPath: dom.elementPath, editor: editor): boolean;

        checkApplicable(elementPath: dom.elementPath, editor: editor, filter?: filter): boolean;

        checkElementMatch(element: dom.element, fullMatch: boolean, editor: editor): boolean;

        checkElementRemovable(element: dom.element, fullMatch: boolean, editor: editor): boolean;

        getDefinition(): style.definition;

        remove(editor: editor): void;

        removeFromRange(range: dom.range, editor: editor): void;

        toAllowedContentRules(editor?: editor): filter.allowedContentRules;
    }

    namespace style {
        namespace customHandlers {
            class widget extends style {
                group: unknown[];
                widget: string;

                checkElement(element: dom.element): boolean;

                getClassesArray(): string[];

                getDefintion(): definition;

                removeStylesFromSameGroup(editor: editor): boolean;
            }
        }

        interface definition {
            attributes?: { [att: string]: string } | undefined;
            element?: string | undefined;
            name?: string | undefined;
            styles?: { [att: string]: string } | undefined;
            type?: string | number | undefined;
        }

        interface customHandler {
            type: string | number;
            setup?: ((style: definition) => void) | undefined;
            assignedTo?: number | undefined;
        }
    }
}
