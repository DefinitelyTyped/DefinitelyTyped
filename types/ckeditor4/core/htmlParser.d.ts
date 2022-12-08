declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly htmlParser: typeof htmlParser;
    }
    /** https://CKEDITOR.com/docs/CKEDITOR4/latest/api/CKEDITOR_htmlParser.html */
    class htmlParser {
        basicWriter: typeof htmlParser.basicWriter;
        cdata: typeof htmlParser.cdata;
        comment: typeof htmlParser.comment;
        cssStyle: typeof htmlParser.cssStyle;
        element: typeof htmlParser.element;
        filter: typeof htmlParser.filter;
        filterRulesGroup: typeof htmlParser.filterRulesGroup;
        fragment: typeof htmlParser.fragment;
        node: typeof htmlParser.node;
        text: typeof htmlParser.text;

        constructor();

        onCDATA?(cdata?: string): void;

        onComment?(comment?: string): void;

        onTagOpen?(tagName?: string, attributes?: { [attr: string]: string }, selfClosing?: boolean): void;

        onTagClose?(tagName?: string): void;

        onText?(text?: string): void;

        parse(html: string): void;
    }

    namespace htmlParser {
        class basicWriter {
            constructor();

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

        class cdata extends node {
            constructor(value: string);

            type: number;

            writeHtml(writer: basicWriter): void;
        }

        class comment extends node {
            type: number;
            value: string;

            constructor(value: string);

            filter(filter: filter): boolean;

            writeHtml(writer: basicWriter, filter?: filter): void;
        }

        class cssStyle {
            constructor(elementOrStyleText: element | string);

            populate(obj: element | dom.element | { [key: string]: unknown }): void;
        }

        class element extends node {
            attributes: { [name: string]: string };
            children: node[];
            name: string;
            type: number;

            constructor(name: string, attributes?: { [name: string]: string } | null);

            add(node: node, index?: number): void;

            addClass(className: string): void;

            clone(): element;

            filter(filter: filter): boolean;

            filterChildren(filter: filter): void;

            find(criteria: string | ((el: node) => boolean), recursive?: boolean): node[];

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

        class filter {
            attributeNameRules: filterRulesGroup;
            attributesRules: { [name: string]: filterRulesGroup };
            commentRules: filterRulesGroup;
            elementNameRules: filterRulesGroup;
            elementsRules: { [name: string]: filterRulesGroup };
            id: number;
            rootRules: filterRulesGroup;
            textRules: filterRulesGroup;

            constructor(rules?: filterRulesDefinition);

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

        class filterRulesGroup {
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

        class fragment {
            children: node[];
            parent: fragment;
            readonly type: number;

            constructor();

            add(node: node, index?: number): void;

            filter(filter: filter): void;

            filterChildren(filter: filter, filterRoot?: boolean): void;

            forEach(callback: (node: node) => void | false, type?: number, skipRoot?: boolean): void;

            writeChildrenHtml(writer: basicWriter, filter?: filter, filterRoot?: boolean): void;

            writeHtml(writer: basicWriter, filter?: filter): void;

            static fromBBCode(source: string): fragment;

            static fromHtml(
                fragmentHtml: string,
                parent?: element | string,
                fixingBlock?: string | boolean,
            ): fragment | element;
        }

        class node {
            constructor();

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

        class text extends node {
            constructor(value: string);

            type: number;

            filter(filter: filter): boolean;

            writeHtml(writer: basicWriter, filter?: filter): void;
        }
    }
}
