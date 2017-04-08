let options = {}

$('#autocomplete').autocomplete('disable');
$('#autocomplete').autocomplete('setOptions', options);

$('#autocomplete').autocomplete().disable();
$('#autocomplete').autocomplete().setOptions(options);

$('#autocomplete').autocomplete({
    serviceUrl: '/autocomplete/countries',
    onSelect: function (suggestion) {
        alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
    }
});

var countries = [
    { value: 'Andorra', data: 'AD' },
    // ...
    { value: 'Zimbabwe', data: 'ZZ' }
];

$('#autocomplete').autocomplete({
    lookup: countries,
    onSelect: function (suggestion) {
        alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
    }
});

$('#autocomplete').autocomplete({
    paramName: 'searchString',
    transformResult: function (response) {
        return {
            suggestions: $.map(response, function (dataItem) {
                return { value: dataItem.valueField, data: dataItem.dataField };
            })
        };
    }
})

let groups = [
    { value: 'Chicago Blackhawks', data: { category: 'NHL' } },
    { value: 'Chicago Bulls', data: { category: 'NBA' } }
]

$('#autocomplete').autocomplete({
    lookup: groups,
    onSelect: function (suggestion) {
    }
});
$('.autocomplete').devbridgeAutocomplete(options);