import mjml2html = require("mjml");

const simple_test = mjml2html("<mjml>");
const html = simple_test.html;
const errors = simple_test.errors;
let formattedMessage = errors[0].formattedMessage;
formattedMessage = "force string test";

const minimal_opts_test = mjml2html("<mjml>", {beautify: true});
const validation_level_test = mjml2html("<mjml>", {validationLevel: "strict"});
const filePath_test = mjml2html("<mjml>", {filePath: "."});

const jsonObject = {tagName: "mjml", attributes: {width: "100px"}, content: "test content"};
const jsonObject_test = mjml2html(jsonObject);

const minify_opts_test = mjml2html("<mjml", {minifyOptions: {minifyCSS: true}});
const minify_opts_all_test = mjml2html("<mjml", {minifyOptions: {minifyCSS: true, collapseWhitespace: true, removeEmptyAttributes: true}});
