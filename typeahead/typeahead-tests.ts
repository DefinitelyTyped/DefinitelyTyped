/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="typeahead.d.ts"/>

//
// Examples from http://twitter.github.com/typeahead.js/examples
//
declare var Hogan: string;

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


// custom templates
$('#custom-templates .typeahead').typeahead(null, {
    name: 'best-pictures',
    displayKey: 'value',
    source: bestPictures.ttAdapter(),
    templates: {
        empty: [
            '<div class="empty-message">',
            'unable to find any Best Picture winners that match the current query',
            '</div>'
        ].join('\n'),
        suggestion: Handlebars.compile('<p><strong>{{value}}</strong> – {{year}}</p>')
    }
});