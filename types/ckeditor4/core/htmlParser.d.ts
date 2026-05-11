declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly htmlParser: {
            new(): htmlParser;
            basicWriter: { new(): htmlParser.basicWriter };
            cdata: { new(value: string): htmlParser.cdata };
            comment: { new(value: string): htmlParser.comment };
            cssStyle: { new(elementOrStyleText: htmlParser.element | string): htmlParser.cssStyle };
            element: { new(name: string, attributes?: { [name: string]: string } | null): htmlParser.element };
            filter: { new(rules?: htmlParser.filterRulesDefinition): htmlParser.filter };
            filterRulesGroup: { new(): htmlParser.filterRulesGroup };
            fragment: {
                new(): htmlParser.fragment;

                fromBBCode(source: string): htmlParser.fragment;

                fromHtml(
                    fragmentHtml: string,
                    parent?: htmlParser.element | string,
                    fixingBlock?: string | boolean,
                ): htmlParser.fragment | htmlParser.element;
            };
            node: { new(): htmlParser.node };
            text: { new(value: string): htmlParser.text };
        };
    }
    /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_htmlParser.html */
    interface htmlParser {
        onCDATA?(cdata?: string): void;

        onComment?(comment?: string): void;

        onTagOpen?(tagName?: string, attributes?: { [attr: string]: string }, selfClosing?: boolean): void;

        onTagClose?(tagName?: string): void;

        onText?(text?: string): void;

        parse(html: string): void;
    }

    namespace htmlParser {
        interface basicWriter {
            attribute(attName: string, attValue: string): void;

            closeTag(tagName: string): void;

            comment(comment: string): void;

            getHtml(reset: boolean): string;

            openTag(tagName: string, attributes: { [key: string]: string }): void;

            openTagClose(tagName: string, isSelfClose: boolean): void;

            reset(): void;

            text(text: string): void;

            write(data: string): void;
        }

        interface cdata extends node {
            type: number;

            writeHtml(writer: basicWriter): void;
        }

        interface comment extends node {
            type: number;
            value: string;

            filter(filter: filter): boolean;

            writeHtml(writer: basicWriter, filter?: filter): void;
        }

        interface cssStyle {
            populate(obj: element | dom.element | { [key: string]: unknown }): void;
        }

        interface element extends node {
            attributes: { [name: string]: string };
            children: node[];
            name: string;
            type: number;

            add(node: node, index?: number): void;

            addClass(className: string): void;

            clone(): element;

            filter(filter: filter): boolean;

            filterChildren(filter: filter): void;

            find(criteria: string | ((el: node) => boolean), recursive?: boolean): node[];

            // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
            forEach(callback: (node: node) => void | false, type?: number, skipRoot?: boolean): void;

            getFirst(condition: string | { [key: string]: string } | ((node: node) => boolean)): node;

            getHtml(): string;

            getOuterHtml(): string;

            hasClass(className: string): boolean;

            removeClass(className: string): void;

            replaceWithChildren(): void;

            setHtml(html: string): void;

            split(index: number): element;

            writeChildrenHtml(writer: basicWriter, filter?: filter): void;

            writeHtml(writer: basicWriter, filter?: filter): void;
        }

        interface filter {
            attributeNameRules: filterRulesGroup;
            attributesRules: { [name: string]: filterRulesGroup };
            commentRules: filterRulesGroup;
            elementNameRules: filterRulesGroup;
            elementsRules: { [name: string]: filterRulesGroup };
            id: number;
            rootRules: filterRulesGroup;
            textRules: filterRulesGroup;

            addRules(
                rules: filterRulesDefinition,
                options?:
                    | number
                    | {
                        priority?: number | undefined;
                        applyToAll?: boolean | undefined;
                    },
            ): void;

            applyTo(node: node): void;
        }

        interface filterRulesDefinition {
            elementNames?: unknown;
            attributeNames?: unknown;
            elements?: unknown;
            attributes?: unknown;
            text?: unknown;
            comment?: unknown;
            root?: unknown;
        }

        interface filterRulesGroup {
            rules: Array<{
                value: rule;
                priority: number;
                option: ruleOptions;
            }>;

            add(rule: rule, priority: number, options: ruleOptions): void;

            addMany(rules: rule[], priority: number, options: ruleOptions): void;

            exec(currentValue: node | fragment | string): node | fragment | string;

            execOnName(currentName: string): string;

            findIndex(priority: number): number;
        }

        interface fragment {
            children: node[];
            parent: fragment;
            readonly type: number;

            add(node: node, index?: number): void;

            filter(filter: filter): void;

            filterChildren(filter: filter, filterRoot?: boolean): void;

            // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
            forEach(callback: (node: node) => void | false, type?: number, skipRoot?: boolean): void;

            writeChildrenHtml(writer: basicWriter, filter?: filter, filterRoot?: boolean): void;

            writeHtml(writer: basicWriter, filter?: filter): void;
        }

        interface node {
            getAscendant(condition: string | { [name: string]: string } | ((node: element) => boolean)): element;

            getIndex(): number;

            insertAfter(node: node): void;

            insertBefore(node: node): void;

            remove(): node;

            replaceWith(node: node): void;

            wrapWith(wrapper: element): element;
        }

        type rule = ((value: node | fragment | string) => boolean) | [string, string];

        interface ruleOptions {
            applyToAll?: boolean | undefined;
            excludeNestedEditable?: boolean | undefined;
        }

        interface text extends node {
            type: number;

            filter(filter: filter): boolean;

            writeHtml(writer: basicWriter, filter?: filter): void;
        }
    }
}
