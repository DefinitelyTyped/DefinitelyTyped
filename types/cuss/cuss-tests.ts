import cuss = require('cuss');
import cussArgentinian = require('cuss/ar-latn');
import cussEspagniol = require('cuss/es');
import cussFrancais = require('cuss/fr');
import cussItalian = require('cuss/it');
import cussBrazilianPortuguese = require('cuss/pt-br');
import cussPortuguese = require('cuss/pt-pt');

Object.keys(cuss).length; // $ExpectType number
cuss.beaver; // $ExpectType SurenessRating
cuss.asshat; // $ExpectType SurenessRating
cuss.shiksa; // $ExpectType SurenessRating

cussArgentinian; // $ExpectType Cuss
cussEspagniol; // $ExpectType Cuss
cussFrancais; // $ExpectType Cuss
cussItalian; // $ExpectType Cuss
Object.keys(cussBrazilianPortuguese).length; // $ExpectType number
cussBrazilianPortuguese.burro; // $ExpectType SurenessRating
cussBrazilianPortuguese.bixa; // $ExpectType SurenessRating
cussPortuguese.burro; // $ExpectType SurenessRating
cussPortuguese.bixa; // $ExpectType SurenessRating
cussPortuguese['bixa']; // $ExpectType SurenessRating
