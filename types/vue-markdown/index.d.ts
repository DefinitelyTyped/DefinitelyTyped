// Type definitions for vue-markdown 2.2
// Project: https://github.com/miaolz123/vue-markdown#readme
// Definitions by: James Barton <https://github.com/neodon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export default vue_markdown;
export const vue_markdown: {
    beforeMount: any;
    computed: {
        tocLastLevelComputed: any;
    };
    data: any;
    md: {
        block: {
            State: any;
            parse: any;
            ruler: {
                after: any;
                at: any;
                before: any;
                disable: any;
                enable: any;
                enableOnly: any;
                getRules: any;
                push: any;
            };
            tokenize: any;
        };
        configure: any;
        core: {
            State: any;
            process: any;
            ruler: {
                after: any;
                at: any;
                before: any;
                disable: any;
                enable: any;
                enableOnly: any;
                getRules: any;
                push: any;
            };
        };
        disable: any;
        enable: any;
        helpers: {
            parseLinkDestination: any;
            parseLinkLabel: any;
            parseLinkTitle: any;
        };
        inline: {
            State: any;
            parse: any;
            ruler: {
                after: any;
                at: any;
                before: any;
                disable: any;
                enable: any;
                enableOnly: any;
                getRules: any;
                push: any;
            };
            ruler2: {
                after: any;
                at: any;
                before: any;
                disable: any;
                enable: any;
                enableOnly: any;
                getRules: any;
                push: any;
            };
            skipToken: any;
            tokenize: any;
        };
        linkify: {
            add: any;
            match: any;
            normalize: any;
            pretest: any;
            re: {
                email_fuzzy: RegExp;
                host_fuzzy_test: RegExp;
                link_fuzzy: RegExp;
                link_no_ip_fuzzy: RegExp;
                pretest: RegExp;
                schema_search: RegExp;
                schema_test: RegExp;
                src_Any: string;
                src_Cc: string;
                src_P: string;
                src_Z: string;
                src_ZCc: string;
                src_ZPCc: string;
                src_auth: string;
                src_domain: string;
                src_domain_root: string;
                src_email_name: string;
                src_host: string;
                src_host_port_strict: string;
                src_host_strict: string;
                src_host_terminator: string;
                src_ip4: string;
                src_path: string;
                src_port: string;
                src_tlds: string;
                src_xn: string;
                tpl_email_fuzzy: string;
                tpl_host_fuzzy: string;
                tpl_host_fuzzy_strict: string;
                tpl_host_fuzzy_test: string;
                tpl_host_no_ip_fuzzy: string;
                tpl_host_port_fuzzy_strict: string;
                tpl_host_port_no_ip_fuzzy_strict: string;
                tpl_link_fuzzy: string;
                tpl_link_no_ip_fuzzy: string;
            };
            set: any;
            test: any;
            testSchemaAt: any;
            tlds: any;
        };
        normalizeLink: any;
        normalizeLinkText: any;
        options: {
            breaks: boolean;
            highlight: any;
            html: boolean;
            langPrefix: string;
            linkify: boolean;
            maxNesting: number;
            quotes: string;
            typographer: boolean;
            xhtmlOut: boolean;
        };
        parse: any;
        parseInline: any;
        render: any;
        renderInline: any;
        renderer: {
            render: any;
            renderAttrs: any;
            renderInline: any;
            renderInlineAsText: any;
            renderToken: any;
            rules: {
                code_block: any;
                code_inline: any;
                fence: any;
                hardbreak: any;
                html_block: any;
                html_inline: any;
                image: any;
                softbreak: any;
                text: any;
            };
        };
        set: any;
        use: any;
        utils: {
            arrayReplaceAt: any;
            assign: any;
            escapeHtml: any;
            escapeRE: any;
            fromCodePoint: any;
            has: any;
            isMdAsciiPunct: any;
            isPunctChar: any;
            isSpace: any;
            isString: any;
            isValidEntityCode: any;
            isWhiteSpace: any;
            lib: {
                mdurl: {
                    decode: any;
                    encode: any;
                    format: any;
                    parse: any;
                };
                ucmicro: {
                    Any: RegExp;
                    Cc: RegExp;
                    Cf: RegExp;
                    P: RegExp;
                    Z: RegExp;
                };
            };
            normalizeReference: any;
            unescapeAll: any;
            unescapeMd: any;
        };
        validateLink: any;
    };
    props: {
        anchorAttributes: {
            default: any;
            type: any;
        };
        breaks: {
            default: boolean;
            type: any;
        };
        emoji: {
            default: boolean;
            type: any;
        };
        highlight: {
            default: boolean;
            type: any;
        };
        html: {
            default: boolean;
            type: any;
        };
        langPrefix: {
            default: string;
            type: any;
        };
        linkify: {
            default: boolean;
            type: any;
        };
        postrender: {
            default: any;
            type: any;
        };
        prerender: {
            default: any;
            type: any;
        };
        quotes: {
            default: string;
            type: any;
        };
        show: {
            default: boolean;
            type: any;
        };
        source: {
            default: string;
            type: any;
        };
        tableClass: {
            default: string;
            type: any;
        };
        taskLists: {
            default: boolean;
            type: any;
        };
        toc: {
            default: boolean;
            type: any;
        };
        tocAnchorClass: {
            default: string;
            type: any;
        };
        tocAnchorLink: {
            default: boolean;
            type: any;
        };
        tocAnchorLinkClass: {
            default: string;
            type: any;
        };
        tocAnchorLinkSpace: {
            default: boolean;
            type: any;
        };
        tocAnchorLinkSymbol: {
            default: string;
            type: any;
        };
        tocClass: {
            default: string;
            type: any;
        };
        tocFirstLevel: {
            default: number;
            type: any;
        };
        tocId: {
            type: any;
        };
        tocLastLevel: {
            type: any;
        };
        typographer: {
            default: boolean;
            type: any;
        };
        watches: {
            default: any;
            type: any;
        };
        xhtmlOut: {
            default: boolean;
            type: any;
        };
    };
    render: any;
    template: string;
};
