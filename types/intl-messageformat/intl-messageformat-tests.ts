import IntlMessageFormat = require("intl-messageformat");

let msg = new IntlMessageFormat("message", "en-us");

let output = msg.format({name: "Eric"});
console.log(output); // => "My name is Eric."

const MESSAGES = {
    'en-US': {
        NUM_PHOTOS: 'You have {numPhotos, plural, ' +
            '=0 {no photos.}' +
            '=1 {one photo.}' +
            'other {# photos.}}'
    },

    'es-MX': {
        NUM_PHOTOS: 'Usted {numPhotos, plural, ' +
            '=0 {no tiene fotos.}' +
            '=1 {tiene una foto.}' +
            'other {tiene # fotos.}}'
    }
};

const enNumPhotos = new IntlMessageFormat(MESSAGES['en-US'].NUM_PHOTOS, 'en-US');
output = enNumPhotos.format({numPhotos: 1000});
console.log(output); // => "You have 1,000 photos."

const esNumPhotos = new IntlMessageFormat(MESSAGES['es-MX'].NUM_PHOTOS, 'es-MX');
output = esNumPhotos.format({numPhotos: 1000});
console.log(output); // => "Usted tiene 1,000 fotos."

msg = new IntlMessageFormat('The price is: {price, number, USD}', 'en-US', {
    number: {
        USD: {
            style   : 'currency',
            currency: 'USD'
        }
    }
});

output = msg.format({price: 100});
console.log(output); // => "The price is: $100.00"
