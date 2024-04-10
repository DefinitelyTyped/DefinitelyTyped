import mjml2html = require("mjml-browser");

const simple_test = mjml2html("<mjml>");
const html = simple_test.html;
const errors = simple_test.errors;
let formattedMessage = errors[0].formattedMessage;
formattedMessage = "force string test";

const minimalOptionsTest = mjml2html("<mjml>", { beautify: true });
const validationLevelTest = mjml2html("<mjml>", { validationLevel: "strict" });
const filePathTest = mjml2html("<mjml>", { filePath: "." });

const jsonObject = { tagName: "mjml", attributes: { width: "100px" }, content: "test content" };
const jsonObjectTest = mjml2html(jsonObject);

const minifyTest = mjml2html("<mjml", { minifyOptions: { minifyCSS: true } });
const minifyAllTest = mjml2html("<mjml", {
    minifyOptions: { minifyCSS: true, collapseWhitespace: true, removeEmptyAttributes: true },
});
