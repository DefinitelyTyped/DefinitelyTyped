import simpleicons = require('simple-icons');
import dotnet = require('simple-icons/icons/dotnet');

// fetch by name
const icon = simpleicons.Get('Simple Icons'); // $ExpectType SimpleIcon
icon.title; // $ExpectType string
icon.slug; // $ExpectType string
icon.hex; // $ExpectType string
icon.source; // $ExpectType string
icon.svg; // $ExpectType string
icon.path; // $ExpectType string
icon.guidelines; // $ExpectType string | undefined
icon.license; // $ExpectType { type: string; url: string; } | undefined

// iterate
for (const title in simpleicons) {
    const icon = simpleicons.Get(title); // $ExpectType SimpleIcon
}

// direct import
dotnet; // $ExpectType SimpleIcon
simpleicons['dotnet']; // $ExpectType SimpleIcon
