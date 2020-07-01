
import diff = require('object-diff');

// from the package README.md, typescriptified:

var a = {
    speed: 4,
    power: 54,
    level: 1,
};
 
var b = {
    speed: 4,            // unchanged 
    power: 22,            // changed 
    weight: 10,            // added 
};
 
var d: any = diff(a, b);
