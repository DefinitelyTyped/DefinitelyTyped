import * as places from "places";
import { EventEmitter } from "events";

const options: places.PlacesOptions = {
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

const placesObject: places.Places = {
    rawAnswer: 'raw',
    query: 'query',
    suggestion: 'suggestion',
    suggestionIndex: 'suggestionIndex'
};

const error: places.Error = {
    message: 'message'
};

const algoliaplaces: EventEmitter = places(options);
