import fuzzyFinder = require('fuzzy-finder');
import fuzzyFinderExplicit = require('fuzzy-finder/dist/fuzzy-finder');
import fuzzyFinderUmd = require('fuzzy-finder/dist/fuzzy-finder.umd');
import fuzzyFinderModule from 'fuzzy-finder/dist/fuzzy-finder.m';

fuzzyFinder(); // $ExpectType string[]
fuzzyFinder('foo'); // $ExpectType string[]
fuzzyFinder('foo', ['foo'] as const); // $ExpectType string[]

fuzzyFinderExplicit(); // $ExpectType string[]
fuzzyFinderExplicit('foo'); // $ExpectType string[]
fuzzyFinderExplicit('foo', ['foo'] as const); // $ExpectType string[]

fuzzyFinderUmd(); // $ExpectType string[]
fuzzyFinderUmd('foo'); // $ExpectType string[]
fuzzyFinderUmd('foo', ['foo'] as const); // $ExpectType string[]

fuzzyFinderModule(); // $ExpectType string[]
fuzzyFinderModule('foo'); // $ExpectType string[]
fuzzyFinderModule('foo', ['foo'] as const); // $ExpectType string[]
