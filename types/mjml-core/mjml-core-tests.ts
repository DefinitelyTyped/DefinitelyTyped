import mjml2html, { BodyComponent, Component, HeadComponent, registerComponent } from "mjml-core";

const simple_test = mjml2html("<mjml>");
const html = simple_test.html;
const errors = simple_test.errors;
let formattedMessage = errors[0].formattedMessage;
formattedMessage = "force string test";

const minimal_opts_test = mjml2html("<mjml>", { beautify: true });
const validation_level_test = mjml2html("<mjml>", { validationLevel: "strict" });
const filePath_test = mjml2html("<mjml>", { filePath: "." });

const jsonObject = { tagName: "mjml", attributes: { width: "100px" }, content: "test content" };
const jsonObject_test = mjml2html(jsonObject);

const minify_opts_test = mjml2html("<mjml", { minifyOptions: { minifyCSS: true } });
const minify_opts_all_test = mjml2html("<mjml", {
    minifyOptions: { minifyCSS: true, collapseWhitespace: true, removeEmptyAttributes: true },
});

class NewBodyComponent extends BodyComponent {
    render() {
        return this.renderMJML("<mj-text>hello world</mj-text");
    }
}

class MjBreakpoint extends HeadComponent {
    static endingTag = true;

    static allowedAttributes = {
        width: "unit(px)",
    };

    handler() {
        const { add } = this.context;

        add("breakpoint", this.getAttribute("width"));
    }
}

registerComponent(MjBreakpoint);
registerComponent(NewBodyComponent);
