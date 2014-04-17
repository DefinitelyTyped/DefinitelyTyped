/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="typeahead.d.ts"/>

//
// Examples from http://twitter.github.com/typeahead.js/examples
//
declare var Hogan: string;

// Countries
// Prefetches data, stores it in localStorage, and searches it on the client
$('.example-countries .typeahead').typeahead({
    name: 'countries',
    prefetch: '../data/countries.json',
    limit: 10
});

// Open Source Projects by Twitter
// Defines a custom template and template engine for rendering suggestions
$('.example-twitter-oss .typeahead').typeahead({
    name: 'twitter-oss',
    prefetch: '../data/repos.json',
    template: [
        '<p class="repo-language">{{language}}</p>',
        '<p class="repo-name">{{name}}</p>',
        '<p class="repo-description">{{description}}</p>'
    ].join(''),
    engine: Hogan
});

// Arabic Phrases
// Hardcoded list showing Right - To - Left(RTL) support
$('.example-arabic .typeahead').typeahead({
    name: 'arabic',
    local: [
        "الإنجليزية",
        "نعم",
        "لا",
        "مرحبا",
        "کيف الحال؟",
        "أهلا",
        "مع السلامة",
        "لا أتكلم العربية",
        "لا أفهم",
        "أنا جائع"
    ]
});

// NBA and NHL Teams
// Two datasets that are prefetched, stored, and searched on the client
$('.example-sports .typeahead').typeahead([
    {
        name: 'nba-teams',
        prefetch: '../data/nba.json',
        header: '<h3 class="league-name">NBA Teams</h3>'
    },
    {
        name: 'nhl-teams',
        prefetch: '../data/nhl.json',
        header: '<h3 class="league-name">NHL Teams</h3>'
    }
]);

// Best Picture Winners
// Prefetches some data then relies on remote requests for suggestions when prefetched data is insufficient
$('.example-films .typeahead').typeahead([
    {
        name: 'best-picture-winners',
        remote: '../data/films/queries/%QUERY.json',
        prefetch: '../data/films/post_1960.json',
        template: '<p><strong>{{value}}</strong> – {{year}}</p>',
        engine: Hogan
    }
]);

// Countries - Modified the first test here to add options
// Specifies options to display hint with a highlight and adds a minimum length restriction for search
// Prefetches data, stores it in localStorage, and searches it on the client
$('.example-countries .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 2
},
{
  name: 'countries',
  prefetch: '../data/countries.json',
  limit: 10
});
