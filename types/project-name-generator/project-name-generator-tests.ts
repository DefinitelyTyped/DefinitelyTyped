import generate = require('project-name-generator');
// $ExpectType string
generate().dashed; // 'uptight-guitar'
// $ExpectType string
generate().spaced; // 'grandiose clam'
// $ExpectType (string | number)[]
generate().raw; // ['deluxe', 'grandmother']
// $ExpectType string
generate({ number: true }).dashed; // 'disgraceful-temper-7794'
// $ExpectType (string | number)[]
generate({ words: 4 }).raw; // ['tiny', 'crabby', 'wired', 'quicksand']
// $ExpectType string
generate({ words: 4, number: true }).dashed; // 'breakable-judicious-luxuriant-tax-3931'
// $ExpectType string
generate({ words: 2, alliterative: true }).spaced; // 'elegant experience'
