import cliBoxes = require('cli-boxes');

cliBoxes.single; // $ExpectType BoxDefinition
cliBoxes.double; // $ExpectType BoxDefinition
cliBoxes.round; // $ExpectType BoxDefinition
cliBoxes['single-double']; // $ExpectType BoxDefinition
cliBoxes['double-single']; // $ExpectType BoxDefinition
cliBoxes.classic; // $ExpectType BoxDefinition

const single = cliBoxes.single;

single.bottomLeft; // $ExpectType string
single.bottomRight; // $ExpectType string
single.horizontal; // $ExpectType string
single.topLeft; // $ExpectType string
single.topRight; // $ExpectType string
single.vertical; // $ExpectType string
