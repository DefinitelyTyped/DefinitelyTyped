import zengin from 'zengin-code';

zengin['0001'].code; // $ExpectType string
zengin['0001'].name; // $ExpectType string
zengin['0001'].kana; // $ExpectType string
zengin['0001'].hira; // $ExpectType string
zengin['0001'].roma; // $ExpectType string

zengin['0001'].branches['001'].code; // $ExpectType string
zengin['0001'].branches['001'].name; // $ExpectType string
zengin['0001'].branches['001'].kana; // $ExpectType string
zengin['0001'].branches['001'].hira; // $ExpectType string
zengin['0001'].branches['001'].roma; // $ExpectType string
