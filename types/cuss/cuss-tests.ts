import cuss = require('cuss');
import cussArgentinian = require('cuss/ar-latn');
import cussEspagniol = require('cuss/es');
import cussFrancais = require('cuss/fr');
import cussItalian = require('cuss/it');
import cussPortuguese = require('cuss/pt-br');

Object.keys(cuss).length; // $ExpectType number
cuss.beaver; // $ExpectType SurenessRating
cuss.asshat; // $ExpectType SurenessRating

cussArgentinian; // $ExpectType Cuss
cussEspagniol; // $ExpectType Cuss
cussFrancais; // $ExpectType Cuss
cussItalian; // $ExpectType Cuss
Object.keys(cussPortuguese).length; // $ExpectType number
cussPortuguese.burro; // $ExpectType SurenessRating
cussPortuguese.bixa; // $ExpectType SurenessRating
