// Type definitions for js_beautify 1.13
// Project: https://github.com/beautify-web/js-beautify/
// Definitions by: Josh Goldberg <https://github.com/JoshuaKGoldberg>
//                 Hans Windhoff <https://github.com/hansrwindhoff>
//                 Gavin Rehkemper <https://github.com/gavinr/>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace js_beautify {
    interface CoreBeautifyOptions {
        disabled?: boolean;
        eol?: string;
        end_with_newline?: boolean;
        indent_size?: number;
        indent_char?: string;
        indent_level?: number;
        preserve_newlines?: boolean;
        max_preserve_newlines?: number;
        indent_with_tabs?: boolean;
        wrap_line_length?: number;
        indent_empty_lines?: boolean;
        templating?: string[];
    }

    interface JSBeautifyOptions extends CoreBeautifyOptions {
        brace_style?: 'collapse' | 'expand' | 'end-expand' | 'none' | 'preserve-inline';
        unindent_chained_methods?: boolean;
        break_chained_methods?: boolean;
        space_in_paren?: boolean;
        space_in_empty_paren?: boolean;
        jslint_happy?: boolean;
        space_after_anon_function?: boolean;
        space_after_named_function?: boolean;
        keep_array_indentation?: boolean;
        space_before_conditional?: boolean;
        unescape_strings?: boolean;
        e4x?: boolean;
        comma_first?: boolean;
        operator_position?: 'before-newline' | 'after-newline' | 'preserve-newline';
        test_output_raw?: boolean;
    }

    interface HTMLBeautifyOptions extends CoreBeautifyOptions {
        templating?: string[];
        indent_inner_html?: boolean;
        indent_body_inner_html?: boolean;
        indent_head_inner_html?: boolean;
        indent_handlebars?: boolean;
        wrap_attributes?:
            | 'auto'
            | 'force'
            | 'force-aligned'
            | 'force-expand-multiline'
            | 'aligned-multiple'
            | 'preserve'
            | 'preserve-aligned';
        wrap_attributes_indent_size?: number;
        extra_liners?: string[];
        inline?: string[];
        void_elements?: string[];
        unformatted?: string[];
        content_unformatted?: string[];
        unformatted_content_delimiter?: string;
        indent_scripts?: 'normal' | 'keep' | 'separate';
    }

    interface CSSBeautifyOptions extends CoreBeautifyOptions {
        selector_separator_newline?: boolean;
        newline_between_rules?: boolean;
        space_around_selector_separator?: boolean;
        space_around_combinator?: boolean;
    }
}

declare var js_beautify: {
    (js_source_text: string, options?: js_beautify.JSBeautifyOptions): string;
    js: (js_source_text: string, options?: js_beautify.JSBeautifyOptions) => string;
    js_beautify: (js_source_text: string, options?: js_beautify.JSBeautifyOptions) => string;

    css: (js_source_text: string, options?: js_beautify.CSSBeautifyOptions) => string;
    css_beautify: (js_source_text: string, options?: js_beautify.CSSBeautifyOptions) => string;

    html: (js_source_text: string, options?: js_beautify.HTMLBeautifyOptions) => string;
    html_beautify: (js_source_text: string, options?: js_beautify.HTMLBeautifyOptions) => string;
};

export as namespace js_beautify;
export = js_beautify;
