﻿/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="typeahead.d.ts"/>

//
// Examples from http://twitter.github.com/typeahead.js/examples
//

var substringMatcher = function (strs: any) {
    return function findMatches(q: string, syncResults: (x: Array<any>) => void) {
        var matches: Array<{ value: string }> = [];
        // regex used to determine if a string contains the substring `q`
        var substrRegex = new RegExp(q, 'i');

        // iterate through the pool of strings and for any string that
        // contains the substring `q`, add it to the `matches` array
        $.each(strs, function (i, str) {
            if (substrRegex.test(str)) {
                // the typeahead jQuery plugin expects suggestions to a
                // JavaScript object, refer to typeahead docs for more info
                matches.push({ value: str });
            }
        });

        syncResults(matches);
    }
}

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


function test_method_names() {
    $('#the-basics .typeahead').typeahead('destroy');
    $('#the-basics .typeahead').typeahead('open');
    $('#the-basics .typeahead').typeahead('close');
    $('#the-basics .typeahead').typeahead('val');
    $('#the-basics .typeahead').typeahead('val', 'test value');
}


function test_options() {

    var dataSets: Twitter.Typeahead.Dataset[] = [];

    function with_empty_options() {
        $('#the-basics .typeahead').typeahead({}, dataSets);
    }

    function with_hint_option() {
        $('#the-basics .typeahead').typeahead({ hint: true }, dataSets);
    }

    function with_highlight_option() {
        $('#the-basics .typeahead').typeahead({ highlight: true }, dataSets);
    }

    function with_minLength_option() {
        $('#the-basics .typeahead').typeahead({ minLength: 1 }, dataSets);
    }

    function with_all_options() {
        $('#the-basics .typeahead').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        },
            dataSets
        );
    }
}

function test_datasets_array() {

    var options: Twitter.Typeahead.Options = {};

    function with_only_source() {
        $('#the-basics .typeahead').typeahead(options, [{
            source: substringMatcher(states)
        }]);
    }

    function with_name_option() {

        $('#the-basics .typeahead').typeahead(options, [{
            name: 'states',
            source: substringMatcher(states),
        }]);
    }

    function with_displayKey_option() {
        $('#the-basics .typeahead').typeahead(options, [{
            display: 'value',
            source: substringMatcher(states)
        }]
        );
    }

    function with_templates_option() {
        $('#the-basics .typeahead').typeahead(options, [{
            templates: {},
            source: substringMatcher(states)
        }]
        );
    }

    function with_all_options() {
        $('#the-basics .typeahead').typeahead(options, [{
            name: 'states',
            display: 'value',
            templates: {},
            source: substringMatcher(states)
        }]
        );
    }

    function with_multiple_datasets() {
        $('#the-basics .typeahead').typeahead(options, [
            {
                name: 'states',
                display: 'value',
                templates: {},
                source: substringMatcher(states)
            },
            {
                name: 'states alternative',
                display: 'value',
                templates: {},
                source: substringMatcher(states)
            }
        ]);
    }
}


function test_datasets_objects() {

    var options: Twitter.Typeahead.Options = {};

    function with_only_source() {
        $('#the-basics .typeahead').typeahead(options, {
            source: substringMatcher(states)
        });
    }

    function with_name_option() {

        $('#the-basics .typeahead').typeahead(options, {
            name: 'states',
            source: substringMatcher(states),
        });
    }

    function with_displayKey_option() {
        $('#the-basics .typeahead').typeahead(options,
            {
                display: 'value',
                source: substringMatcher(states)
            }
        );
    }

    function with_templates_option() {
        $('#the-basics .typeahead').typeahead(options,
            {
                templates: {},
                source: substringMatcher(states)
            }
        );
    }

    function with_all_options() {
        $('#the-basics .typeahead').typeahead(options,
            {
                name: 'states',
                display: x => x.value,
                templates: {},
                source: substringMatcher(states)
            }
        );
    }

    function with_multiple_objects() {
        $('#the-basics .typeahead').typeahead(options,
            {
                name: 'states',
                display: 'value',
                templates: {},
                source: substringMatcher(states)
            },
            {
                name: 'states alternative',
                display: 'value',
                templates: {},
                source: substringMatcher(states)
            }
        );
    }
}

function test_dataset_templates() {

    var options: Twitter.Typeahead.Options = {};

    function with_no_options() {
        $('#the-basics .typeahead').typeahead(options, {
            source: substringMatcher(states),
            templates: {}
        });
    }

    function with_empty_option() {
        $('#the-basics .typeahead').typeahead(options, {
            source: substringMatcher(states),
            templates: { empty: 'no results' }
        });
    }

    function with_empty_option_as_a_function() {
        $('#the-basics .typeahead').typeahead(options, {
            source: substringMatcher(states),
            templates: {
                empty: function (context: any) {
                    return context.name;
                }
            }
        });
    }

    function with_footer_option() {
        $('#the-basics .typeahead').typeahead(options, {
            source: substringMatcher(states),
            templates: { footer: 'custom footer' }
        });
    }

    function with_footer_option_as_a_function() {
        $('#the-basics .typeahead').typeahead(options, {
            source: substringMatcher(states),
            templates: {
                footer: function (context: any) {
                    return context.name;
                }
            }
        });
    }

    function with_header_option() {
        $('#the-basics .typeahead').typeahead(options, {
            source: substringMatcher(states),
            templates: { header: 'custom header' }
        });
    }

    function with_header_option_as_a_function() {
        $('#the-basics .typeahead').typeahead(options, {
            source: substringMatcher(states),
            templates: {
                header: function (context: any) {
                    return context.name;
                }
            }
        });
    }

    function with_suggestion_option() {
        $('#the-basics .typeahead').typeahead(options, {
            source: substringMatcher(states),
            templates: {
                suggestion: function (context) {
                    return context.name;
                }
            }
        });
    }

    function with_all_options() {
        $('#the-basics .typeahead').typeahead(options, {
            source: substringMatcher(states),
            templates: {
                empty: 'no results',
                footer: 'custom footer',
                header: 'custom header',
                suggestion: function (context) {
                    return context.name;
                }
            },
        });
    }
}

function test_value() {
    var value: string = $('foo').typeahead('val');
    $('foo').typeahead('val', value);
}