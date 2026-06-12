import plugin from "eslint-plugin-xss";

// Rules
const noMixed = plugin.rules["no-mixed-html"];
const noHref = plugin.rules["no-location-href-assign"];
noHref.create;
noHref.meta.docs?.description;

// Config
const rec = plugin.configs.recommended;
rec.rules["xss/no-mixed-html"];
rec.rules["xss/no-location-href-assign"];
