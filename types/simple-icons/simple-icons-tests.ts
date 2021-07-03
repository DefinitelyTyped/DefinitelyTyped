import simpleIcons = require('simple-icons');
import simpleicons = require('simple-icons/icons/simpleicons');

// fetch by slug
const iconFromLowerCaseGet = simpleIcons.get('simpleicons'); // $ExpectType SimpleIcon
iconFromLowerCaseGet.title; // $ExpectType string
iconFromLowerCaseGet.slug; // $ExpectType string
iconFromLowerCaseGet.hex; // $ExpectType string
iconFromLowerCaseGet.source; // $ExpectType string
iconFromLowerCaseGet.svg; // $ExpectType string
iconFromLowerCaseGet.path; // $ExpectType string
iconFromLowerCaseGet.guidelines; // $ExpectType string | undefined
iconFromLowerCaseGet.license; // $ExpectType { type: string; url: string; } | undefined

// fetch by slug
const iconFromUppercaseGet = simpleIcons.Get('simpleicons'); // $ExpectType SimpleIcon
iconFromUppercaseGet.title; // $ExpectType string
iconFromUppercaseGet.slug; // $ExpectType string
iconFromUppercaseGet.hex; // $ExpectType string
iconFromUppercaseGet.source; // $ExpectType string
iconFromUppercaseGet.svg; // $ExpectType string
iconFromUppercaseGet.path; // $ExpectType string
iconFromUppercaseGet.guidelines; // $ExpectType string | undefined
iconFromUppercaseGet.license; // $ExpectType { type: string; url: string; } | undefined

// iterate
for (const slug in simpleIcons) {
    const icon = simpleIcons.get(slug); // $ExpectType SimpleIcon
}

// direct import
simpleicons; // $ExpectType SimpleIcon
