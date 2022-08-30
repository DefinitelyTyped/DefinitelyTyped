import fakeDiff = require("fake-diff");

fakeDiff('a', 'b'); // $ExpectType string
fakeDiff('a', 'b', {hideLines: true}); // $ExpectType string
fakeDiff('a', 'b', {maxAdjacentStaticLines: 2}); // $ExpectType string
