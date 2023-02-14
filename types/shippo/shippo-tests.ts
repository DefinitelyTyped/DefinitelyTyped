import Shippo = require('shippo');

// $ExpectType Shippo
new Shippo('SHIPPO_API_KEY');

// $ExpectType Shippo
export const shippo = Shippo('SHIPPO_API_KEY');

// $ExpectType Promise<Address>
shippo.address.create({
    name: 'Shawn Ippotle',
    company: 'Shippo',
    street1: '215 Clayton St.',
    street2: '',
    city: 'San Francisco',
    state: 'CA',
    zip: '94117',
    country: 'US',
    phone: '+1 555 341 9393',
    email: 'shippotle@goshippo.com',
    is_residential: true,
    metadata: 'Customer ID 123456',
});

// $ExpectType Promise<Address>
shippo.address.retrieve('id123');

// $ExpectType Promise<Address>
shippo.address.validate('id123');

// $ExpectType Promise<PaginatedList<Address>>
shippo.address.list({ page: 1, results: 10 });

// $ExpectType Promise<Parcel>
shippo.parcel.create({
    length: '5',
    width: '5',
    height: '5',
    distance_unit: 'cm',
    weight: '2',
    mass_unit: 'lb',
    template: '',
    metadata: 'Customer ID 123456',
});

// $ExpectType Promise<Parcel>
shippo.parcel.retrieve('id123');

// $ExpectType Promise<PaginatedList<Parcel>>
shippo.parcel.list({ page: 1, results: 10 });

// $ExpectType Promise<Shipment>
shippo.shipment.create({
    address_to: {
        name: 'Mr Hippo',
        street1: '965 Mission St #572',
        city: 'San Francisco',
        state: 'CA',
        zip: '94103',
        country: 'US',
        phone: '4151234567',
        email: 'mrhippo@goshippo.com',
    },
    address_from: {
        name: 'Mrs Hippo',
        street1: '1092 Indian Summer Ct',
        city: 'San Jose',
        state: 'CA',
        zip: '95122',
        country: 'US',
        phone: '4159876543',
        email: 'mrshippo@goshippo.com',
    },
    parcels: [
        {
            distance_unit: 'yd',
            height: '1',
            length: '1',
            mass_unit: 'kg',
            weight: '1',
            width: '1',
        },
    ],
});

// $ExpectType Promise<Shipment>
shippo.shipment.retrieve('id123');

// $ExpectType Promise<PaginatedList<Shipment>>
shippo.shipment.list({ page: 1, results: 10 });
