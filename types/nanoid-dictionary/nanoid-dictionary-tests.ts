import dict = require('nanoid-dictionary');
import lowercase = require('nanoid-dictionary/lowercase');
import uppercase = require('nanoid-dictionary/uppercase');
import numbers = require('nanoid-dictionary/numbers');
import nolookalikes = require('nanoid-dictionary/nolookalikes');
import nolookalikesSafe = require('nanoid-dictionary/nolookalikes-safe');

dict.lowercase; // $ExpectType string
dict.uppercase; // $ExpectType string
dict.numbers; // $ExpectType string
dict.nolookalikes; // $ExpectType string
dict.nolookalikesSafe; // $ExpectType string

lowercase; // $ExpectType string
uppercase; // $ExpectType string
numbers; // $ExpectType string
nolookalikes; // $ExpectType string
nolookalikesSafe; // $ExpectType string
