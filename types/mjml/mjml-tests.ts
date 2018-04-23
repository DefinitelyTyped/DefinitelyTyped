import mjml2html = require('mjml');

const simple_test = mjml2html("<mjml>");
const minimal_opts_test = mjml2html("<mjml>", {beautify: true});
const validation_level_test = mjml2html("<mjml>", {validationLevel: "strict"})
