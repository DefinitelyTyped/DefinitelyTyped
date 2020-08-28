import simpleIcons from 'simple-icons';

const icon = simpleIcons.get('Simple Icons'); // $ExpectType SimpleIcon
icon.title; // $ExpectType string
icon.slug; // $ExpectType string
icon.hex; // $ExpectType string
icon.source; // $ExpectType string
icon.svg; // $ExpectType string
icon.path; // $ExpectType string
