import * as places from 'places.js';

// Response
const chosenPlace: places.PlaceSuggestion = {
    name: 'Adelaide',
    administrative: 'South Australia',
    county: 'City of Adelaide',
    country: 'Australia',
    countryCode: 'au',
    type: 'city',
    latlng: {
        lat: -34.9282,
        lng: 138.6,
    },
    postcode: '5000',
    postcodes: ['5000', '5001', '5800', '5810', '5839', '5920'],
    highlight: {
        name: '<em>Adelai</em>de',
        administrative: 'South Australia',
        country: 'Australia',
        county: 'City of <em>Adelai</em>de',
        postcode: '5000',
    },
    rawAnswer: {
        query: 'adelai',
        nbHits: 5,
    },
    value: 'Adelaide, South Australia, Australia',
};

// Minimal usage with string selector
const placesMinimal = places({
    appId: 'plXRMF37RRY2',
    apiKey: '05d4d28918b4d77a65c3d1deb0cd8dec',
    container: '#my-input-DOM-selector',
});

// Full usage with reconfiguration
const fixedOptions: places.PlacesStaticOptions = {
    appId: 'plXRMF37RRY2',
    apiKey: '05d4d28918b4d77a65c3d1deb0cd8dec',
    container: document.querySelector<HTMLInputElement>('#demo')!,
    templates: {
        value(suggestion) {
            return suggestion.name;
        },
        suggestion(suggestion) {
            return `<u>Click here to select ${suggestion.name} from ${suggestion.country}</u>`;
        },
    },
    style: true,
    type: 'address',
    language: 'en',
};

const reconfigurableOptions: places.PlacesOptions = {
    language: 'de',
    countries: ['us', 'ru'],
    type: 'city',
    aroundLatLngViaIP: false,
    aroundRadius: 500,
    useDeviceLocation: true,
};

const placesInstance = places(fixedOptions).configure(reconfigurableOptions);

// Events
let somePlaces: places.PlaceSuggestion[];

placesInstance.on('change', e => {
    // $ExpectType string
    e.suggestion.name;
    // $ExpectType PlaceLatLng
    e.suggestion.latlng;
    somePlaces.push(e.suggestion);
});

placesInstance.on('suggestions', e => {
    // $ExpectType string
    e.query;
    somePlaces = somePlaces.concat(e.suggestions);
});

placesInstance.on('cursorChanged', e => {
    // $ExpectType string
    e.suggestion.name;
    // $ExpectType number
    e.suggestionIndex;
});

placesInstance.on('clear', () => {});

placesInstance.on('limit', e => {
    // $ExpectType string
    e.message;
});

placesInstance.on('error', e => {
    // $ExpectType string
    e.message;
});

// Methods
placesInstance.open();
placesInstance.close();
const currentText: string = placesInstance.getVal();
placesInstance.setVal('Ecuador');
placesInstance.destroy();
