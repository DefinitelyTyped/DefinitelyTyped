import mjml2html = require("mjml-browser");

async function tests() {
    const simple_test = await mjml2html("<mjml>");
    const html = simple_test.html;
    const errors = simple_test.errors;
    let formattedMessage = errors[0].formattedMessage;
    formattedMessage = "force string test";

    const minimalOptionsTest = await mjml2html("<mjml>", { beautify: true });
    const validationLevelTest = await mjml2html("<mjml>", { validationLevel: "strict" });
    const filePathTest = await mjml2html("<mjml>", { filePath: "." });

    const jsonObject = { tagName: "mjml", attributes: { width: "100px" }, content: "test content" };
    const jsonObjectTest = await mjml2html(jsonObject);

    const minifyTest = await mjml2html("<mjml", { minifyOptions: { minifyCSS: true } });
    const minifyAllTest = await mjml2html("<mjml", {
        minifyOptions: { minifyCSS: true, collapseWhitespace: true, removeEmptyAttributes: true },
    });
}
