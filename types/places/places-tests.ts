import * as places from "places";
import {
    PlacesOptions,
    AutompleteOptions,
    Places,
    Error
} from 'places';
import { EventEmitter } from "../events";

const options: PlacesOptions = {
    appId: 'your app Id',
    apiKey: 'your api key',
    container: '<input type=\"search\" id=\"address\">'
};

const autompleteOptions: AutompleteOptions = {
    autoselect: true,
    hint: true,
    cssClasses: {
        root: 'root',
        prefix: 'prefix',
    },
    debug: true,
};

const placesObject: Places = {
    rawAnswer: 'raw',
    query: 'query',
    suggestion: 'suggestion',
    suggestionIndex: 'suggestionIndex'
};

const error: Error = {
    message: 'message'
};

// const event : EventEmitter = places(options);
