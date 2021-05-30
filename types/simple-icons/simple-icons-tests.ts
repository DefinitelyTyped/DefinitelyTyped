import simpleIcons = require('simple-icons');
import simpleicons = require('simple-icons/icons/simpleicons');

// fetch by slug
const icon = simpleIcons.get('simpleicons'); // $ExpectType SimpleIcon
icon.title; // $ExpectType string
icon.slug; // $ExpectType string
icon.hex; // $ExpectType string
icon.source; // $ExpectType string
icon.svg; // $ExpectType string
icon.path; // $ExpectType string
icon.guidelines; // $ExpectType string | undefined
icon.license; // $ExpectType { type: string; url: string; } | undefined

// fetch by slug
const icon = simpleIcons.Get('simpleicons'); // $ExpectType SimpleIcon
icon.title; // $ExpectType string
icon.slug; // $ExpectType string
icon.hex; // $ExpectType string
icon.source; // $ExpectType string
icon.svg; // $ExpectType string
icon.path; // $ExpectType string
icon.guidelines; // $ExpectType string | undefined
icon.license; // $ExpectType { type: string; url: string; } | undefined

// iterate
for (const title in simpleIcons) {
    const icon = simpleIcons.get(title); // $ExpectType SimpleIcon
}

// direct import
simpleicons; // $ExpectType SimpleIcon
