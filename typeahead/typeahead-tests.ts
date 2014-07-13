/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="typeahead.d.ts"/>

//
// Examples from http://twitter.github.com/typeahead.js/examples
//
declare var Hogan: string;

// Countries
// Prefetches data, stores it in localStorage, and searches it on the client
$('.example-countries .typeahead').typeahead(null, {
    name: 'countries',
    prefetch: '../data/countries.json',
    limit: 10
});

// Open Source Projects by Twitter
// Defines a custom template and template engine for rendering suggestions
$('.example-twitter-oss .typeahead').typeahead(null, {
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
$('.example-arabic .typeahead').typeahead(null, {
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
$('.example-sports .typeahead').typeahead(null, [
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
$('.example-films .typeahead').typeahead(null, [
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


var substringMatcher = function (strs) {
    return function findMatches(q, cb) {
        var matches, substrRegex;

        // an array that will be populated with substring matches
        matches = [];

        // regex used to determine if a string contains the substring `q`
        substrRegex = new RegExp(q, 'i');

        // iterate through the pool of strings and for any string that
        // contains the substring `q`, add it to the `matches` array
        $.each(strs, function (i, str) {
            if (substrRegex.test(str)) {
                // the typeahead jQuery plugin expects suggestions to a
                // JavaScript object, refer to typeahead docs for more info
                matches.push({ value: str });
            }
        });

        cb(matches);
    };
};

var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
    'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
    'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

$('#the-basics .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
},
    {
        name: 'states',
        displayKey: 'value',
        source: substringMatcher(states)
    });