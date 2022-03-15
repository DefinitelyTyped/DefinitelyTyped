// Type definitions for js_beautify 1.13
// Project: https://github.com/beautify-web/js-beautify/
// Definitions by: Hans Windhoff <https://github.com/hansrwindhoff>
//                 Gavin Rehkemper <https://github.com/gavinr/>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace js_beautify {
    interface CoreBeautifyOptions {
        disabled?: boolean | undefined;
        eol?: string | undefined;
        end_with_newline?: boolean | undefined;
        indent_size?: number | undefined;
        indent_char?: string | undefined;
        indent_level?: number | undefined;
        preserve_newlines?: boolean | undefined;
        max_preserve_newlines?: number | undefined;
        indent_with_tabs?: boolean | undefined;
        wrap_line_length?: number | undefined;
        indent_empty_lines?: boolean | undefined;
        templating?: string[] | undefined;
    }

    interface JSBeautifyOptions extends CoreBeautifyOptions {
        brace_style?: 'collapse' | 'expand' | 'end-expand' | 'none' | 'preserve-inline' | undefined;
        unindent_chained_methods?: boolean | undefined;
        break_chained_methods?: boolean | undefined;
        space_in_paren?: boolean | undefined;
        space_in_empty_paren?: boolean | undefined;
        jslint_happy?: boolean | undefined;
        space_after_anon_function?: boolean | undefined;
        space_after_named_function?: boolean | undefined;
        keep_array_indentation?: boolean | undefined;
        space_before_conditional?: boolean | undefined;
        unescape_strings?: boolean | undefined;
        e4x?: boolean | undefined;
        comma_first?: boolean | undefined;
        operator_position?: 'before-newline' | 'after-newline' | 'preserve-newline' | undefined;
        test_output_raw?: boolean | undefined;
    }

    interface HTMLBeautifyOptions extends CoreBeautifyOptions {
        templating?: string[] | undefined;
        indent_inner_html?: boolean | undefined;
        indent_body_inner_html?: boolean | undefined;
        indent_head_inner_html?: boolean | undefined;
        indent_handlebars?: boolean | undefined;
        wrap_attributes?:
            | 'auto'
            | 'force'
            | 'force-aligned'
            | 'force-expand-multiline'
            | 'aligned-multiple'
            | 'preserve'
            | 'preserve-aligned' | undefined;
        wrap_attributes_indent_size?: number | undefined;
        extra_liners?: string[] | undefined;
        inline?: string[] | undefined;
        void_elements?: string[] | undefined;
        unformatted?: string[] | undefined;
        content_unformatted?: string[] | undefined;
        unformatted_content_delimiter?: string | undefined;
        indent_scripts?: 'normal' | 'keep' | 'separate' | undefined;
    }

    interface CSSBeautifyOptions extends CoreBeautifyOptions {
        selector_separator_newline?: boolean | undefined;
        newline_between_rules?: boolean | undefined;
        space_around_selector_separator?: boolean | undefined;
        space_around_combinator?: boolean | undefined;
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
