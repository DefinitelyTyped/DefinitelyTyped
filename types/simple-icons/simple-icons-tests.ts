import simpleIcons = require('simple-icons');
import { SimpleIcon } from 'simple-icons';
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

const simpleIcon: SimpleIcon = {
    title: 'Simple Icon',
    slug: 'simpleicons',
    svg: '<svg></svg>',
    // tslint:disable:max-line-length
    path: 'M12 0C8.688 0 6 2.688 6 6s2.688 6 6 6c1.066 0 2.1171.2862 3.0371.8262 2.858 1.678 3.8167 5.3539 2.1387 8.2129h1.6797a7.4925 7.4925 0 0 0 .6425-3.0293c.003-4.144-3.356-7.5048-7.498-7.5098-2.484 0-4.5-2.016-4.5-4.5S9.516 1.5 12 1.5s4.5 2.016 4.5 4.5H18c0-3.312-2.688-6-6-6zm0 3c-1.597.04-2.8799 1.3259-2.9219 2.9219C9.0351 7.5799 10.343 8.957 12 9c1.597-.04 2.8799-1.3259 2.9219-2.9219C14.9649 4.4201 13.656 3.043 12 3zm0 1.5c.828 0 1.5.672 1.5 1.5v.002c0 .828-.672 1.5-1.5 1.5-.83 0-1.5-.673-1.5-1.502 0-.83.67-1.5 1.5-1.5zM7.5 15v1.5H9v6H4.5V24h15v-1.5H15v-6h1.5V15h-9zm3 1.5h3v6h-3v-6zm-6 1.4707V18a7.418 7.418 0 0 0 .6445 3.039h1.6836C6.3001 20.147 6 19.11 6 18v-.0293H4.5Z',
    source: 'https://simpleicons.org/',
    hex: '000000',
};
