import deline = require("deline");

const moduleName = "deline";

deline(`deline`); // $ExpectType string
deline(`module name: ${moduleName}`); // $ExpectType string
deline`deline`; // $ExpectType string
deline`tagged template: ${moduleName}`; // $ExpectType string
deline`
tagged template:

${moduleName}
`;
