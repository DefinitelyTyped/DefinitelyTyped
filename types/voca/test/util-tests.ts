import noConflict = require('voca/no_conflict');
import version = require('voca/version');

noConflict();
version; // $ExpectType string
