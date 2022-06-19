import spdxCorrect = require('spdx-correct');

spdxCorrect('BSD');                            // $ExpectType string | null
spdxCorrect('GPL-3.0', { upgrade: false });    // $ExpectType string | null
spdxCorrect('GPL-3.0', { upgrade: 1 });        // $ExpectError
