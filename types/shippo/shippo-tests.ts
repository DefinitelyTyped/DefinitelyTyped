import Shippo = require("shippo");

// $ExpectType Shippo
export const shippo = Shippo('SHIPPO_API_KEY');

// $ExpectType Promise<Address>
const address = shippo.address.create({
    city: 'Auburndale',
    country: 'US',
    name: 'Brandon R Moore',
    state: 'FL',
    street1: '693 Oakdale Avenue',
    zip: '33823',
});

// $ExpectType Promise<Shipment>
const shipment = shippo.shipment.create({
    address_from: {
        city: 'Auburndale',
        country: 'US',
        name: 'Brandon R Moore',
        state: 'FL',
        street1: '693 Oakdale Avenue',
        zip: '33823',
    },
    address_to: {
        city: 'Auburndale',
        country: 'US',
        name: 'Brandon R Moore',
        state: 'FL',
        street1: '693 Oakdale Avenue',
        zip: '33823',
    },
    parcels: [
        {
            distance_unit: 'yd',
            height: 1,
            length: 1,
            mass_unit: 'kg',
            weight: 1,
            width: 1,
        },
    ],
});
