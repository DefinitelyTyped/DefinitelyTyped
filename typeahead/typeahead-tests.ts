/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../handlebars/handlebars.d.ts"/>
/// <reference path="typeahead.d.ts"/>

//
// Examples from http://twitter.github.com/typeahead.js/examples
//

var substringMatcher = function (strs: any) {
	return function findMatches(q: any, cb: any) {
		var matches: any, substrRegex: any;

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


function testMethodNames() {
	$('#the-basics .typeahead').typeahead('destroy');
	$('#the-basics .typeahead').typeahead('open');
	$('#the-basics .typeahead').typeahead('close');
	$('#the-basics .typeahead').typeahead('val');
	$('#the-basics .typeahead').typeahead('val', 'test value');	
}


function testOptions() {
	var dataSets: Twitter.Typeahead.Dataset<string>[] = [];
	
	function withEmptyOptions() {
		$('#the-basics .typeahead').typeahead({}, dataSets);
	}

	function withHintOption() {
		$('#the-basics .typeahead').typeahead({ hint: true }, dataSets);
	}

	function withHighlightOption() {
		$('#the-basics .typeahead').typeahead({ highlight: true }, dataSets);
	}

	function withMinLengthOption() {
		$('#the-basics .typeahead').typeahead({ minLength: 1 }, dataSets);
	}

	function withAllOptions() {
		$('#the-basics .typeahead').typeahead({
				hint: true,
				highlight: true,
				minLength: 1
			},
			dataSets
		);
	}
}

function testDatasetsArray() {
	var options: Twitter.Typeahead.Options = {};

	function withOnlySource() {
		$('#the-basics .typeahead').typeahead(options, [{
			source: substringMatcher(states)
		}]);
	}

	function withNameOption() {
		$('#the-basics .typeahead').typeahead(options, [{
			name: 'states',
			source: substringMatcher(states),
		}]);
	}

	function withAsyncOption() {
		$('#the-basics .typeahead').typeahead(options, [{
			async: false,
			source: substringMatcher(states),
		}]);
	}

	function withLimitOption() {
		$('#the-basics .typeahead').typeahead(options, [{
			limit: 3,
			source: substringMatcher(states),
		}]);
	}

	function withDisplayOption() {
		$('#the-basics .typeahead').typeahead(options, [{
				display: 'value',
				source: substringMatcher(states)
			}]
		);

		$('#the-basics .typeahead').typeahead(options, [{
				display: (x: any) => x,
				source: substringMatcher(states)
			}]
		);
	}

	function withTemplatesOption() {
		$('#the-basics .typeahead').typeahead(options, [{
				templates: {},
				source: substringMatcher(states)
			}]
		);
	}

	function withAllOptions() {
		$('#the-basics .typeahead').typeahead(options, [{
				name: 'states',
				display: 'value',
				templates: {},
				source: substringMatcher(states)
			}]
		);
	}

	function withMultipleDatasets() {
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


function testDatasetsObjects() {

	var options: Twitter.Typeahead.Options = {};

	function withOnlySource() {
		$('#the-basics .typeahead').typeahead(options, {
			source: substringMatcher(states)
		});
	}

	function withNameOption() {

		$('#the-basics .typeahead').typeahead(options, {
			name: 'states',
			source: substringMatcher(states),
		});
	}

	function withDisplayKeyOption() {
		$('#the-basics .typeahead').typeahead(options,
			{
				display: 'value',
				source: substringMatcher(states)
			}
		);
	}

	function withTemplatesOption() {
		$('#the-basics .typeahead').typeahead(options,
			{
				templates: {},
				source: substringMatcher(states)
			}
		);
	}

	function withAllOptions() {
		$('#the-basics .typeahead').typeahead(options,
			{
				name: 'states',
				display: 'value',
				templates: {},
				source: substringMatcher(states)
			}
		);
	}

	function withMultipleObjects() {
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

function testDatasetTemplates() {
	var options: Twitter.Typeahead.Options = {};

	function withNoOptions() {
		$('#the-basics .typeahead').typeahead(options, {
			source: substringMatcher(states),
			templates: {}
		});
	}

	function withNotFoundOption() {
		$('#the-basics .typeahead').typeahead(options, {
			source: substringMatcher(states),
			templates: { notFound: 'no results' }
		});
	}

	function withNotFoundOptionAsAFunction() {
		$('#the-basics .typeahead').typeahead(options, {
			source: substringMatcher(states),
			templates: {
				notFound: function(context: any) {
					return context.name;
				}
			}
		});
	}

	function withFooterOption() {
		$('#the-basics .typeahead').typeahead(options, {
			source: substringMatcher(states),
			templates: { footer: 'custom footer' }
		});
	}

	function withFooterOptionAsAFunction() {
		$('#the-basics .typeahead').typeahead(options, {
			source: substringMatcher(states),
			templates: {
				footer: function(context: any) {
					return context.name;
				}
			}
		});
	}

	function withHeaderOption() {
		$('#the-basics .typeahead').typeahead(options, {
			source: substringMatcher(states),
			templates: { header: 'custom header' }
		});
	}

	function withHeaderOptionAsAFunction() {
		$('#the-basics .typeahead').typeahead(options, {
			source: substringMatcher(states),
			templates: {
				header: function(context: any) {
					return context.name;
				}
			}
		});
	}

	function withSuggestionOption() {
		$('#the-basics .typeahead').typeahead(options, {
			source: substringMatcher(states),
			templates: {			   
				suggestion: function(context) {
					return context.name;
				}
			}
		});
	}

	function withAllOptions() {
		$('#the-basics .typeahead').typeahead(options, {
			source: substringMatcher(states),
			templates: {
				empty: 'no results',		
				footer: 'custom footer',
				header: 'custom header',
				suggestion: function(context) {
					return context.name;
				}
			}
		});
	}
}

function testValue() {
	var value: string = $('foo').typeahead('val');
	$('foo').typeahead('val', value);
}


function bloodhoundTests() {

	// Test Bloodhound.BloodhoundOptions<T>
	function testOptions() {
		
		function withMinimalOptions() {
			new Bloodhound({
				datumTokenizer: Bloodhound.tokenizers.whitespace,
				queryTokenizer: Bloodhound.tokenizers.whitespace
			})
		}
		
		function testLocalProperty() {
			new Bloodhound({
				datumTokenizer: Bloodhound.tokenizers.whitespace,
				queryTokenizer: Bloodhound.tokenizers.whitespace,
				local: ['cat', 'dog', 'catdog']
			});

			new Bloodhound({
				datumTokenizer: Bloodhound.tokenizers.whitespace,
				queryTokenizer: Bloodhound.tokenizers.whitespace,
				local: () => ['cat', 'dog', 'catdog']
			});
		}

		function testNonMaximalPrefetchProperty() {
			new Bloodhound({
				datumTokenizer: Bloodhound.tokenizers.whitespace,
				queryTokenizer: Bloodhound.tokenizers.whitespace,
				prefetch: 'http://prefetch'
			});

			new Bloodhound({
				datumTokenizer: Bloodhound.tokenizers.whitespace,
				queryTokenizer: Bloodhound.tokenizers.whitespace,
				prefetch: {
					url: 'http://prefetch'
				}
			});
		}

		function testNonMaximalRemoteProperty() {
			new Bloodhound({
				datumTokenizer: Bloodhound.tokenizers.whitespace,
				queryTokenizer: Bloodhound.tokenizers.whitespace,
				remote: 'http://remote'
			});

			new Bloodhound({
				datumTokenizer: Bloodhound.tokenizers.whitespace,
				queryTokenizer: Bloodhound.tokenizers.whitespace,
				remote: {
					url: 'http://remote'
				}
			});
		}
		
		function testMaximalOptions() {
			// By casting to T wherever possible, we verify internal consistency
			new Bloodhound({
				datumTokenizer: Bloodhound.tokenizers.whitespace,
				queryTokenizer: Bloodhound.tokenizers.whitespace,
				initialize: false,
				identify: (datum: string) => 'some id',
				sufficient: 5,
				sorter: (a: string, b: string) => 2,
				local: ['cat', 'dog', 'catdog'],
				prefetch: {
					url: 'http://prefetchurl',
					cache: false,
					ttl: 123423,
					cacheKey: 'some key',
					thumbprint: 'thumbprint',
					prepare: settings => settings,
					transform: response => response
				},
				remote: {
					url: 'http://remote',
					prepare: (query, settings) => settings,
					wildcard: 'wildcard',
					rateLimitBy: 'debounce',
					rateLimitWait: 300,
					transform: response => response
				}
			})
		}

	}

}


/**
 * Taken from http://twitter.github.io/typeahead.js/examples/
 *
 * I believe some of them are obsolete or incorrect and have changed them accordingly. Best example is 
 * setting datumTokenizer as Bloodhound.tokenizers.obj.whitespace('team'), a string[].
 */
function examples() {

	function basics() {
		$('#the-basics .typeahead').typeahead({
			hint: true,
			highlight: true,
			minLength: 1
		}, {
			name: 'states',
			source: substringMatcher(states)
		});
	}


	function suggestionEngine() {
		// constructs the suggestion engine
		var statesEngine = new Bloodhound({
			datumTokenizer: Bloodhound.tokenizers.whitespace,
			queryTokenizer: Bloodhound.tokenizers.whitespace,
			// `states` is an array of state names defined in "The Basics"
			local: states
		});
		
		$('#bloodhound .typeahead').typeahead({
			hint: true,
			highlight: true,
			minLength: 1
		}, {
			name: 'states',
			source: statesEngine
		});
	}

	var countries = new Bloodhound({
		datumTokenizer: Bloodhound.tokenizers.whitespace,
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		// url points to a json file that contains an array of country names, see
		// https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json
		prefetch: '../data/countries.json'
	});

	var bestPictures = new Bloodhound({
			datumTokenizer: Bloodhound.tokenizers.obj.whitespace,
			queryTokenizer: Bloodhound.tokenizers.whitespace,
			prefetch: '../data/films/post_1960.json',
			remote: {
				url: '../data/films/queries/%QUERY.json',
				wildcard: '%QUERY'
			}
		});
	
	function prefetch() {
		// passing in `null` for the `options` arguments will result in the default
		// options being used
		$('#prefetch .typeahead').typeahead(null, {
			name: 'countries',
			source: countries
		});
	}

	function remote() {
		$('#remote .typeahead').typeahead(null, {
			name: 'best-pictures',
			display: 'value',
			source: bestPictures
		});
	}

	function customTemplates() {
		$('#custom-templates .typeahead').typeahead(null, {
			name: 'best-pictures',
			display: 'value',
			source: bestPictures,
			templates: {
				empty: [
					'<div class="empty-message">',
					'unable to find any Best Picture winners that match the current query',
					'</div>'
				].join('\n'),
				suggestion: Handlebars.compile('<div><strong>{{value}}</strong> – {{year}}</div>')
			}
		});
	}

	function defaultSuggestions() {
		var nflTeams = new Bloodhound({
			datumTokenizer: Bloodhound.tokenizers.obj.whitespace,
			queryTokenizer: Bloodhound.tokenizers.whitespace,
			identify: function(obj: any) { return obj.team; },
			prefetch: '../data/nfl.json'
		});
		
		function nflTeamsWithDefaults(q: string, sync: any) {
			if (q === '') {
				sync(nflTeams.get('Detroit Lions', 'Green Bay Packers', 'Chicago Bears'));
			} else {
				nflTeams.search(q, sync);
			}
		}
		
		$('#default-suggestions .typeahead').typeahead({
			minLength: 0,
			highlight: true
		}, {
			name: 'nfl-teams',
			display: 'team',
			source: nflTeamsWithDefaults
		});
	}

	function multipleDatasets() {
		var nbaTeams = new Bloodhound({
			datumTokenizer: Bloodhound.tokenizers.obj.whitespace,
			queryTokenizer: Bloodhound.tokenizers.whitespace,
			prefetch: '../data/nba.json'
		});
		
		var nhlTeams = new Bloodhound({
			datumTokenizer: Bloodhound.tokenizers.obj.whitespace,
			queryTokenizer: Bloodhound.tokenizers.whitespace,
			prefetch: '../data/nhl.json'
		});
		
		$('#multiple-datasets .typeahead').typeahead({
			highlight: true
		}, {
			name: 'nba-teams',
			display: 'team',
			source: nbaTeams,
			templates: {
				header: '<h3 class="league-name">NBA Teams</h3>'
			}
		}, {
			name: 'nhl-teams',
			display: 'team',
			source: nhlTeams,
			templates: {
				header: '<h3 class="league-name">NHL Teams</h3>'
			}
		});
	}

	function scrollableDropdownMenu() {
		$('#scrollable-dropdown-menu .typeahead').typeahead(null, {
			name: 'countries',
			limit: 10,
			source: countries
		});
	}

	function rtlSupport() {
		var arabicPhrases = new Bloodhound({
			datumTokenizer: Bloodhound.tokenizers.whitespace,
			queryTokenizer: Bloodhound.tokenizers.whitespace,
			local: [
				"الإنجليزية",
				"نعم",
				"لا",
				"مرحبا",
				"أهلا"
			]
		});
		
		$('#rtl-support .typeahead').typeahead({
			hint: false
		}, {
			name: 'arabic-phrases',
			source: arabicPhrases
		});
	}
}