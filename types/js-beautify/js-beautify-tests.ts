import js_beautify = require("js-beautify");

let bCSS = js_beautify.css("body{display:none;}");
bCSS = js_beautify.css_beautify("body{display:none;}");

let bHTML = js_beautify.html("<div/>");
bHTML = js_beautify.html_beautify("<div/>");

const emptyHTMLOptions: js_beautify.HTMLBeautifyOptions = {};
const emptyCSSOptions: js_beautify.CSSBeautifyOptions = {};
const emptyJSOptions: js_beautify.JSBeautifyOptions = {};

const simple: string = js_beautify("console.log('Hello world!');");

const JSoptions: js_beautify.JSBeautifyOptions = {
    indent_size: 4,
    indent_char: " ",
    eol: "\n",
    indent_level: 0,
    indent_with_tabs: false,
    preserve_newlines: true,
    max_preserve_newlines: 10,
    jslint_happy: false,
    space_after_anon_function: false,
    brace_style: "collapse",
    keep_array_indentation: false,
    space_before_conditional: true,
    space_in_empty_paren: true,
    break_chained_methods: false,
    unescape_strings: false,
    wrap_line_length: 0,
    end_with_newline: false,
    e4x: false,
    unindent_chained_methods: true,
    space_in_paren: true,
    space_after_named_function: true,
    comma_first: true,
    operator_position: "before-newline",
    test_output_raw: true,
};

const HTMLoptions: js_beautify.HTMLBeautifyOptions = {
    indent_size: 4,
    indent_char: " ",
    eol: "\n",
    indent_level: 0,
    indent_with_tabs: false,
    preserve_newlines: true,
    max_preserve_newlines: 10,
    wrap_line_length: 0,
    wrap_attributes: "auto",
    wrap_attributes_indent_size: 4,
    end_with_newline: false,
    inline_custom_elements: true,
};

const CSSoptions: js_beautify.CSSBeautifyOptions = {
    indent_size: 4,
    indent_char: " ",
    eol: "\n",
    indent_level: 0,
    indent_with_tabs: false,
    preserve_newlines: true,
    max_preserve_newlines: 10,
    wrap_line_length: 0,
    end_with_newline: false,
};

const full: string = js_beautify("console.log('Hello world!');", JSoptions);

const markup: string = js_beautify("function render(){return <div> <img src='.' /></div>}", {
    ...JSoptions,
    e4x: true,
});
