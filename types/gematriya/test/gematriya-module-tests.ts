import gematriya = require("gematriya");

gematriya(5774); // $ExpectType string
gematriya(5774, {limit: 3}); // $ExpectType string
gematriya(5774, {limit: 7}); // $ExpectType string
gematriya(5774, {punctuate: false}); // $ExpectType string
gematriya(5774, {punctuate: true}); // $ExpectType string
gematriya(5774, {geresh: false}); // $ExpectType string
gematriya(5774, {punctuate: false, limit: 3}); // $ExpectType string
gematriya(3); // $ExpectType string
gematriya(3, {geresh: false}); // $ExpectType string
gematriya('התשעד', {order: true}); // $ExpectType number
gematriya('התשעד', {order: false}); // $ExpectType number
