import $ = require('jquery');

var $input = $(".test-input").selectize();
var testApi = $input[0].selectize;

function changeListener(selection: string) {
    console.log(selection);
}

testApi.on("change", changeListener);
testApi.off("change", changeListener);
testApi.off("change");

// All code examples below taken from https://github.com/brianreavis/selectize.js/blob/master/examples

// API example
// --------------------------------------------------------------------------------------------------------------------

var $select = $('#select-tools').selectize({
    maxItems: null,
    valueField: 'id',
    labelField: 'title',
    searchField: 'title',
    options: [
        {id: 1, title: 'Spectrometer', url: 'http://en.wikipedia.org/wiki/Spectrometers'},
        {id: 2, title: 'Star Chart', url: 'http://en.wikipedia.org/wiki/Star_chart'},
        {id: 3, title: 'Electrical Tape', url: 'http://en.wikipedia.org/wiki/Electrical_tape'}
    ],
    create: false
});

var control = $select[0].selectize;

$('#button-clear').on('click', function() {
    control.clear();
});
$('#button-clearoptions').on('click', function() {
    control.clearOptions();
});
$('#button-addoption').on('click', function() {
    control.addOption({
        id: 4,
        title: 'Something New',
        url: 'http://google.com'
    });
});
$('#button-additem').on('click', function() {
    control.addItem(2);
});
$('#button-setvalue').on('click', function() {
    control.setValue([2, 3]);
});


// Cities example
// --------------------------------------------------------------------------------------------------------------------

var xhr: XMLHttpRequest;
var select_state: Selectize.IApi<string, any>;
var select_city: Selectize.IApi<string, any>;
var $select_state: JQuery;
var $select_city: JQuery;

$select_state = $('#select-state').selectize({
    onChange: function(value) {
        if (!value.length) return;
        select_city.disable();
        select_city.clearOptions();
        select_city.load(function(callback) {
            xhr && xhr.abort();
            xhr = $.ajax({
                url: 'http://www.corsproxy.com/api.sba.gov/geodata/primary_city_links_for_state_of/' + value + '.json',
                success: function(results) {
                    select_city.enable();
                    callback(results);
                },
                error: function() {
                    callback();
                }
            })
        });
    }
});

$select_city = $('#select-city').selectize({
    valueField: 'name',
    labelField: 'name',
    searchField: ['name']
});

select_city  = $select_city[0].selectize;
select_state = $select_state[0].selectize;
select_city.disable();


// Confirm example
// --------------------------------------------------------------------------------------------------------------------

$('#input-tags').selectize({
    delimiter: ',',
    persist: false,
    onDelete: function(values) {
        return confirm(values.length > 1 ? 'Are you sure you want to remove these ' + values.length + ' items?' : 'Are you sure you want to remove "' + values[0] + '"?');
    }
});


// Contacts example
// --------------------------------------------------------------------------------------------------------------------

interface Person {
    first_name: string;
    last_name: string;
    email: string;
}

var REGEX_EMAIL = '([a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@' +
                    '(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)';
var formatPerson = (name: Person) => {
    return $.trim((name.first_name || '') + ' ' + (name.last_name || ''));
};

$('#select-to').selectize({
    persist: false,
    maxItems: null,
    valueField: 'email',
    labelField: 'name',
    searchField: ['first_name', 'last_name', 'email'],
    sortField: [
        {field: 'first_name', direction: 'asc'},
        {field: 'last_name', direction: 'asc'}
    ],
    options: [
        {email: 'nikola@tesla.com', first_name: 'Nikola', last_name: 'Tesla'},
        {email: 'brian@thirdroute.com', first_name: 'Brian', last_name: 'Reavis'},
        {email: 'someone@gmail.com'}
    ],
    render: {
        item: function(item: Person, escape: (input: any) => string) {
            var name = formatPerson(item);
            return '<div>' +
                (name ? '<span class="name">' + escape(name) + '</span>' : '') +
                (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
            '</div>';
        },
        option: function(item: Person, escape: (input: any) => string) {
            var name = formatPerson(item);
            var label = name || item.email;
            var caption = name ? item.email : null;
            return '<div>' +
                '<span class="label">' + escape(label) + '</span>' +
                (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
            '</div>';
        }
    },
    createFilter: function(input: string) {
        var regexpA = new RegExp('^' + REGEX_EMAIL + '$', 'i');
        var regexpB = new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i');
        return regexpA.test(input) || regexpB.test(input);
    },
    create: function(input: string): any {
        if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
            return {email: input};
        }
        var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
        if (match) {
            var name       = $.trim(match[1]);
            var pos_space  = name.indexOf(' ');
            var first_name = name.substring(0, pos_space);
            var last_name  = name.substring(pos_space + 1);
            return {
                email: match[2],
                first_name: first_name,
                last_name: last_name
            };
        }
        alert('Invalid email address.');
        return false;
    }
});


// Create filter example
// --------------------------------------------------------------------------------------------------------------------

$('#select-words-regex').selectize({
    create: true,
    createFilter: $('#regex').val()
});
$('#select-words-length').selectize({
    create: true,
    createFilter: function(input: string) { return input.length >= parseInt($('#length').val(), 10); }
});
var unique: Selectize.IApi<string, string> = $('#select-words-unique').selectize({
    create: true,
    createFilter: function(input: string) {
        input = input.toLowerCase();
        return $.grep(<string[]> unique.getValue(), function(value) {
            return value.toLowerCase() === input;
        }).length == 0;
    }
})[0].selectize;


// Customization example
// --------------------------------------------------------------------------------------------------------------------

interface Link {
    title: string;
    url: string;
}

$('#select-links').selectize({
    // NOTE ( https://github.com/DefinitelyTyped/DefinitelyTyped/pull/5590 ) theme: 'links',
    maxItems: null,
    valueField: 'id',
    searchField: 'title',
    options: [
        {id: 1, title: 'DIY', url: 'https://diy.org'},
        {id: 2, title: 'Google', url: 'http://google.com'},
        {id: 3, title: 'Yahoo', url: 'http://yahoo.com'},
    ],
    render: {
        option: function(data: Link, escape: (input: any) => string) {
            return '<div class="option">' +
                    '<span class="title">' + escape(data.title) + '</span>' +
                    '<span class="url">' + escape(data.url) + '</span>' +
                '</div>';
        },
        item: function(data: Link, escape: (input: any) => string) {
            return '<div class="item"><a href="' + escape(data.url) + '">' + escape(data.title) + '</a></div>';
        }
    },
    create: function(input: string) {
        return {
            id: 0,
            title: input,
            url: '#'
        };
    }
});


// Events
// --------------------------------------------------------------------------------------------------------------------

var eventHandler = function(name: string) {
    return function() {
        console.log(name, arguments);
        $('#log').append('<div><span class="name">' + name + '</span></div>');
    };
};
var $select = $('#select-state').selectize({
    create          : true,
    onChange        : eventHandler('onChange'),
    onItemAdd       : eventHandler('onItemAdd'),
    onItemRemove    : eventHandler('onItemRemove'),
    onOptionAdd     : eventHandler('onOptionAdd'),
    onOptionRemove  : eventHandler('onOptionRemove'),
    onDropdownOpen  : eventHandler('onDropdownOpen'),
    onDropdownClose : eventHandler('onDropdownClose'),
    onInitialize    : eventHandler('onInitialize'),
});


// Github example
// --------------------------------------------------------------------------------------------------------------------

interface Repository {
    fork: string;
    name: string;
    description: string;
    language: string;
    watchers: number;
    forks: string;
    username: string;
}

$('#select-repo').selectize({
    valueField: 'url',
    labelField: 'name',
    searchField: 'name',
    options: [],
    create: false,
    render: {
        option: function(item: Repository, escape: (input: any) => string) {
            return '<div>' +
                '<span class="title">' +
                    '<span class="name"><i class="icon ' + (item.fork ? 'fork' : 'source') + '"></i>' + escape(item.name) + '</span>' +
                    '<span class="by">' + escape(item.username) + '</span>' +
                '</span>' +
                '<span class="description">' + escape(item.description) + '</span>' +
                '<ul class="meta">' +
                    (item.language ? '<li class="language">' + escape(item.language) + '</li>' : '') +
                    '<li class="watchers"><span>' + escape(item.watchers) + '</span> watchers</li>' +
                    '<li class="forks"><span>' + escape(item.forks) + '</span> forks</li>' +
                '</ul>' +
            '</div>';
        }
    },
    score: function(search) {
        var score = this.getScoreFunction(search);
        return function(item: Repository) {
            return score(item) * (1 + Math.min(item.watchers / 100, 1));
        };
    },
    load: function(query, callback) {
        if (!query.length) return callback();
        $.ajax({
            url: 'https://api.github.com/legacy/repos/search/' + encodeURIComponent(query),
            type: 'GET',
            error: function() {
                callback();
            },
            success: function(res) {
                callback(res.repositories.slice(0, 10));
            }
        });
    }
});


// Lock example
// --------------------------------------------------------------------------------------------------------------------

$('select').selectize({create: true});
$('#select-locked-empty')[0].selectize.lock();
$('#select-locked-single')[0].selectize.lock();
$('#select-locked')[0].selectize.lock();


// Movies example
// --------------------------------------------------------------------------------------------------------------------

$('#select-movie').selectize({
    valueField: 'title',
    labelField: 'title',
    searchField: 'title',
    options: [],
    create: false,
    render: {
        option: function(item, escape) {
            var actors: any[] = [];
            for (var i = 0, n = item.abridged_cast.length; i < n; i++) {
                actors.push('<span>' + escape(item.abridged_cast[i].name) + '</span>');
            }
            return '<div>' +
                '<img src="' + escape(item.posters.thumbnail) + '" alt="">' +
                '<span class="title">' +
                    '<span class="name">' + escape(item.title) + '</span>' +
                '</span>' +
                '<span class="description">' + escape(item.synopsis || 'No synopsis available at this time.') + '</span>' +
                '<span class="actors">' + (actors.length ? 'Starring ' + actors.join(', ') : 'Actors unavailable') + '</span>' +
            '</div>';
        }
    },
    load: function(query, callback) {
        if (!query.length) return callback();
        $.ajax({
            url: 'http://api.rottentomatoes.com/api/public/v1.0/movies.json',
            type: 'GET',
            dataType: 'jsonp',
            data: {
                q: query,
                page_limit: 10,
                apikey: '3qqmdwbuswut94jv4eua3j85'
            },
            error: function() {
                callback();
            },
            success: function(res) {
                console.log(res.movies);
                callback(res.movies);
            }
        });
    }
});

// Optgroups
// --------------------------------------------------------------------------------------------------------------------

$("#select-car").selectize({
    options: [
        {id: 'avenger', make: 'dodge', model: 'Avenger'},
        {id: 'caliber', make: 'dodge', model: 'Caliber'},
        {id: 'caravan-grand-passenger', make: 'dodge', model: 'Caravan Grand Passenger'},
        {id: 'challenger', make: 'dodge', model: 'Challenger'},
        {id: 'ram-1500', make: 'dodge', model: 'Ram 1500'},
        {id: 'viper', make: 'dodge', model: 'Viper'},
        {id: 'a3', make: 'audi', model: 'A3'},
        {id: 'a6', make: 'audi', model: 'A6'},
        {id: 'r8', make: 'audi', model: 'R8'},
        {id: 'rs-4', make: 'audi', model: 'RS 4'},
        {id: 's4', make: 'audi', model: 'S4'},
        {id: 's8', make: 'audi', model: 'S8'},
        {id: 'tt', make: 'audi', model: 'TT'},
        {id: 'avalanche', make: 'chevrolet', model: 'Avalanche'},
        {id: 'aveo', make: 'chevrolet', model: 'Aveo'},
        {id: 'cobalt', make: 'chevrolet', model: 'Cobalt'},
        {id: 'silverado', make: 'chevrolet', model: 'Silverado'},
        {id: 'suburban', make: 'chevrolet', model: 'Suburban'},
        {id: 'tahoe', make: 'chevrolet', model: 'Tahoe'},
        {id: 'trail-blazer', make: 'chevrolet', model: 'TrailBlazer'},
    ],
    optgroups: [
        {id: 'dodge', name: 'Dodge'},
        {id: 'audi', name: 'Audi'},
        {id: 'chevrolet', name: 'Chevrolet'}
    ],
    labelField: 'model',
    valueField: 'id',
    optgroupField: 'make',
    optgroupLabelField: 'name',
    optgroupValueField: 'id',
    optgroupOrder: ['chevrolet', 'dodge', 'audi'],
    searchField: ['model'],
    plugins: ['optgroup_columns'],
    openOnFocus: false
});
