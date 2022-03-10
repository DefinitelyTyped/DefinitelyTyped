import endsWith = require('voca/ends_with');
import includes = require('voca/includes');
import isAlpha = require('voca/is_alpha');
import isAlphaDigit = require('voca/is_alpha_digit');
import isBlank = require('voca/is_blank');
import isDigit = require('voca/is_digit');
import isEmpty = require('voca/is_empty');
import isLowerCase = require('voca/is_lower_case');
import isNumeric = require('voca/is_numeric');
import isString = require('voca/is_string');
import isUpperCase = require('voca/is_upper_case');
import matches = require('voca/matches');
import startsWith = require('voca/starts_with');

endsWith();
endsWith('red alert');
endsWith('red alert', 'alert');
endsWith('Murphy', 'ph', 5);

includes();
includes('starship');
includes('starship', 'star');
includes('galaxy', 'g', 1);

isAlpha();
isAlpha('bart');

isAlphaDigit();
isAlphaDigit('year2020');

isBlank();
isBlank('');

isDigit();
isDigit('35');

isEmpty();
isEmpty('');

isLowerCase();
isLowerCase('motorcycle');

isNumeric();
isNumeric('350');

isString();
isString('vacation');
isString(560);

isUpperCase();
isUpperCase('ACDC');

matches();
matches('pluto');
matches('pluto', /plu.{2}/);
matches('sun', 'S', 'i');
matches('apollo 11', '\\d{3}');

startsWith();
startsWith('say hello to my little friend');
startsWith('say hello to my little friend', 'say hello');
startsWith('tony', 'on', 1);
startsWith('the world is yours', 'world');
