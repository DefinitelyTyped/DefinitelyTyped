import hasNativeSymbols = require('has-symbols');
import hasSymbolSham = require('has-symbols/shams');

hasNativeSymbols(); // $ExpectType boolean
hasSymbolSham(); // $ExpectType boolean
