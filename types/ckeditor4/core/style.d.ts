declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly style: {
            customHandlers: CKEditorStyleHandlersStatic;
        } & styleStatic<style>;
    }

    interface style {
        alwaysRemoveElement: boolean;
        includeReadonly: boolean;

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

    interface styleStatic<T extends style> {
        new(styleDefinition: style.definition, variableValues?: Record<string, string>): T;
        addCustomHandler(defintion: style.customHandler): T;

        getStyleText(style: style.definition): string;
    }

    /**
     * Extend this interface when defining your own custom styles, follow the example below using the
     * {@link styleStatic} interface, typed by your custom handler which extends {@link style}.
     *
     * @example
     *  interface yourCustomHandler extends style {
     *      yourHandlerMethods: unknown
     *  }
     *
     *  interface CKEditorStyleHandlersStatic {
     *      yourCustomHandler: styleStatic<yourCustomHandler>
     *  }
     */
    interface CKEditorStyleHandlersStatic {
        widget: styleStatic<style.customHandlers.widget>;
    }

    namespace style {
        namespace customHandlers {
            interface widget extends style {
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
