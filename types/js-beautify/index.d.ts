// Type definitions for js_beautify 1.8.2
// Project: https://github.com/beautify-web/js-beautify/
// Definitions by: Josh Goldberg <https://github.com/JoshuaKGoldberg>, Hans Windhoff <https://github.com/hansrwindhoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface JsBeautifyOptions {
  indent_size?: number;
  indent_char?: string;
  eol?: string;
  indent_level?: number;
  indent_with_tabs?: boolean;
  preserve_newlines?: boolean;
  max_preserve_newlines?: number;
  jslint_happy?: boolean;
  space_after_anon_function?: boolean;
  brace_style?: 'collapse-preserve-inline' | 'collapse' | 'expand' | 'end-expand' | 'none';
  keep_array_indentation?: boolean;
  keep_function_indentation?: boolean;
  space_before_conditional?: boolean;
  break_chained_methods?: boolean;
  eval_code?: boolean;
  unescape_strings?: boolean;
  wrap_line_length?: number;
  wrap_attributes?: 'auto' | 'force';
  wrap_attributes_indent_size?: number;
  end_with_newline?: boolean;
}

// See https://github.com/beautify-web/js-beautify/blob/v1.8.2/js/src/html/beautifier.js#L268-L330
interface HTMLBeautifyOptions {
  indent_inner_html?: boolean;
  indent_body_inner_html?: boolean;
  indent_head_inner_html?: boolean;
  indent_size?: number;
  indent_char?: string;
  wrap_line_length?: number;
  preserve_newlines?: boolean;
  max_preserve_newlines?: number;
  indent_handlebars?: boolean;
  wrap_attributes?: 'auto' | 'force' | 'force-expand-multiline' | 'force-aligned' | 'aligned-multiple';
  wrap_attributes_indent_size?: number;
  end_with_newline?: boolean;
  extra_liners?: string[];
  eol?: string;
  indent_with_tabs?: boolean;
  disabled?: boolean;
  inline?: string[];
  void_elements?: string[];
  unformatted?: string[];
  content_unformatted?: string[];
  indent_scripts?: 'keep' | 'separate';
}

interface CSSBeautifyOptions {
  indent_size?: number;
  indent_char?: string;
  indent_with_tabs?: boolean;
  eol?: string;
  end_with_newline?: boolean;
  selector_separator_newline?: boolean;
  newline_between_rules?: boolean;
}

interface jsb {
  (js_source_text: string, options?: JsBeautifyOptions): string;
  js: (js_source_text: string, options?: JsBeautifyOptions) => string;
  js_beautify: (js_source_text: string, options?: JsBeautifyOptions) => string;

  css: (js_source_text: string, options?: CSSBeautifyOptions) => string;
  css_beautify: (js_source_text: string, options?: CSSBeautifyOptions) => string;

  html: (js_source_text: string, options?: HTMLBeautifyOptions) => string;
  html_beautify: (js_source_text: string, options?: HTMLBeautifyOptions) => string;
}

declare var js_beautify: jsb;
declare module "js-beautify" {
    export = js_beautify;
}
