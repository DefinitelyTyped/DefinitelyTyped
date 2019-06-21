import * as places from 'places';

const options: places.Options = {
    appId: 'your app Id',
    apiKey: 'your api key',
    container: '<input type=\"search\" id=\"address\">'
};

const autompleteOptions: places.AutompleteOptions = {
    autoselect: true,
    hint: true,
    cssClasses: {
        root: 'root',
        prefix: 'prefix',
    },
    debug: true,
};

const places: places.Places = {
    rawAnswer: 'raw',
    query: 'query',
    suggestion: 'suggestion',
    suggestionIndex: 'suggestionIndex'
};

const error: places.Error = {
    message: 'message'
};

let algoliaPlaces : places.Options = places(options);
