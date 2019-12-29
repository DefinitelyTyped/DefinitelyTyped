$(document).ready(() => {
    // basic usage
    $('#typeahead').typeahead();
    $('#typeahead').typeahead('lookup');
    $('#typeahead').typeahead('lookup', 'Display name 1');
    $('#typeahead').typeahead('getActive');
    $('#typeahead').typeahead('destroy');

    // with options example
    const options: Bootstrap3Typeahead.Options = {
        source: [
            {id: 'someId1', name: 'Display name 1'},
            {id: 'someId2', name: 'Display name 2'}
        ],
        autoSelect: true
    };

    $('#typeahead').typeahead(options);
});
