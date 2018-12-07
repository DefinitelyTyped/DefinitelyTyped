import * as dl from "deline";

const moduleName = "deline";

dl.deline(`deline`); // $ExpectType string
dl.deline(`module name: ${moduleName}`); // $ExpectType string
dl.deline`deline`; // $ExpectType string
dl.deline`tagged template: ${moduleName}`; // $ExpectType string
dl.deline`
tagged template:

${moduleName}
`;
