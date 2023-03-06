import camelCase = require('voca/camel_case');
import capitalize = require('voca/capitalize');
import decapitalize = require('voca/decapitalize');
import kebabCase = require('voca/kebab_case');
import lowerCase = require('voca/lower_case');
import snakeCase = require('voca/snake_case');
import swapCase = require('voca/swap_case');
import titleCase = require('voca/title_case');
import upperCase = require('voca/upper_case');

camelCase();
camelCase('bird flight');

capitalize();
capitalize('apple');
capitalize('aPPle', true);

decapitalize('Sun');

kebabCase('goodbye blue sky');

lowerCase('Green');

snakeCase('learning to fly');

swapCase('learning to fly');

titleCase('learning to fly');
titleCase('another brick in the wall', ['in', 'the']);

upperCase('school');
