// Type definitions for js_beautify
// Project: https://github.com/beautify-web/js-beautify/
// Definitions by: Josh Goldberg <https://github.com/JoshuaKGoldberg/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare var js_beautify: {
    (js_source_text: string, options?: {
        indent_size?: number;
        indent_char?: string;
        eol?: string;
        indent_level?: number;
        indent_with_tabs?: boolean;
        preserve_newlines?: boolean;
        max_preserve_newlines?: number;
        jslint_happy: boolean;
        space_after_anon_function: boolean;
        brace_style: string;
        keep_array_indentation: boolean;
        keep_function_indentation: boolean;
        space_before_conditional: boolean;
        break_chained_methods: boolean;
        eval_code: boolean;
        unescape_strings: boolean;
        wrap_line_length: number;
        wrap_attributes: string;
        wrap_attributes_indent_size: number;
        end_with_newline: boolean;
    }): string;
};
