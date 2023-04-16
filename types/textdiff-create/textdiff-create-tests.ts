import textDiffCreate = require('textdiff-create');
import type { Change } from 'textdiff-create';

// $ExpectType Change[]
const result = textDiffCreate('one', 'two');

// $ExpectType Change
const firstChange = result[0];

switch (firstChange[0]) {
    case textDiffCreate.ChangeType.DELETE: {
        // $ExpectType number
        firstChange[1];
        break;
    }
    case textDiffCreate.ChangeType.EQUAL: {
        // $ExpectType number
        firstChange[1];
        break;
    }
    case textDiffCreate.ChangeType.INSERT: {
        // $ExpectType string
        firstChange[1];
        break;
    }
}
