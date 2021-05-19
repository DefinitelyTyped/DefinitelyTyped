import Shippo = require('shippo');

// $ExpectType Shippo
export const shippo = Shippo('SHIPPO_API_KEY');

// $ExpectType Promise<Address>
const address1 = shippo.address.create({
    city: 'Auburndale',
    country: 'US',
    name: 'Brandon R Moore',
    state: 'FL',
    street1: '693 Oakdale Avenue',
    zip: '33823',
});

// $ExpectType Promise<Address>
const address2 = shippo.address.retrieve('a4391cd4ab974f478f55dc08b5c8e3b3');

// $ExpectType Promise<Address>
const address3 = shippo.address.validate('a4391cd4ab974f478f55dc08b5c8e3b3');

// $ExpectType Promise<PaginatedResult<Address>>
const addresses = shippo.address.list();

// $ExpectType Promise<Batch>
const batch1 = shippo.batch.create({
    default_carrier_account: '078870331023437cb917f5187429b093',
    default_servicelevel_token: 'usps_priority',
    label_filetype: 'PDF_4x6',
    metadata: 'BATCH #170',
    batch_shipments: [
        {
            shipment: {
                address_from: {
                    name: 'Mr Hippo',
                    street1: '965 Mission St',
                    street2: 'Ste 201',
                    city: 'San Francisco',
                    state: 'CA',
                    zip: '94103',
                    country: 'US',
                    phone: '4151234567',
                    email: 'mrhippo@goshippo.com'
                },
                address_to: {
                    name: 'Mrs Hippo',
                    company: '',
                    street1: 'Broadway 1',
                    street2: '',
                    city: 'New York',
                    state: 'NY',
                    zip: '10007',
                    country: 'US',
                    phone: '4151234567',
                    email: 'mrshippo@goshippo.com'
                },
                parcels: [{
                    length: '5',
                    width: '5',
                    height: '5',
                    distance_unit: 'in',
                    weight: '2',
                    mass_unit: 'oz'
                }]
            }
        },
        {
            shipment: {
                address_from: {
                    name: 'Mr Hippo',
                    street1: '1092 Indian Summer Ct',
                    city: 'San Jose',
                    state: 'CA',
                    zip: '95122',
                    country: 'US',
                    phone: '4151234567',
                    email: 'mrhippo@goshippo.com'
                },
                address_to: {
                    name: 'Mrs Hippo',
                    company: '',
                    street1: 'Broadway 1',
                    street2: '',
                    city: 'New York',
                    state: 'NY',
                    zip: '10007',
                    country: 'US',
                    phone: '4151234567',
                    email: 'mrshippo@goshippo.com'
                },
                parcels: [{
                    length: '5',
                    width: '5',
                    height: '5',
                    distance_unit: 'in',
                    weight: '20',
                    mass_unit: 'lb'
                }]
            },
            carrier_account: 'a4391cd4ab974f478f55dc08b5c8e3b3',
            servicelevel_token: 'fedex_2_day'
        }
    ]
});

// $ExpectType Promise<Batch>
const batch2 = shippo.batch.retrieve('1d622ccbaecd4f789abbfb0321bd4d91');

// $ExpectType Promise<Batch>
const batch3 = shippo.batch.add(
    '1d622ccbaecd4f789abbfb0321bd4d91',
    [
        {
            shipment: {
                address_from: {
                    name: 'Mr Hippo',
                    street1: '965 Mission St',
                    street2: 'Ste 201',
                    city: 'San Francisco',
                    state: 'CA',
                    zip: '94103',
                    country: 'US',
                    phone: '4151234567',
                },
                address_to: {
                    name: 'Hippo Jr',
                    street1: '915 Broadway',
                    street2: '19th Floor',
                    city: 'New York',
                    state: 'NY',
                    zip: '10010',
                    country: 'US',
                    phone: '2129947880',
                },
                parcels: [{
                    length: '12',
                    width: '12',
                    height: '12',
                    distance_unit: 'in',
                    weight: '12',
                    mass_unit: 'oz'
                }]
            }
        },
        {
            shipment: {
                address_from: {
                    name: 'Ms Hippo',
                    street1: '1092 Indian Summer Ct',
                    city: 'San Jose',
                    state: 'CA',
                    zip: '95122',
                    country: 'US',
                    phone: '4151234567',
                },
                address_to: {
                    name: 'Mr Hippo',
                    street1: '965 Mission St',
                    street2: 'Ste 201',
                    city: 'San Francisco',
                    state: 'CA',
                    zip: '94103',
                    country: 'US',
                    phone: '4151234567',
                },
                parcels: [{
                    length: '5',
                    width: '5',
                    height: '5',
                    distance_unit: 'in',
                    weight: '2',
                    mass_unit: 'lb'
                }]
            },
            carrier_account: 'a4391cd4ab974f478f55dc08b5c8e3b3',
            servicelevel_token: 'fedex_2_day'
        }
    ]);

// $ExpectType Promise<Batch>
const batch4 = shippo.batch.remove('1d622ccbaecd4f789abbfb0321bd4d91', ['eeb659a077054b6da4aa26ddc3e384c5']);

// $ExpectType Promise<Batch>
const batch5 = shippo.batch.purchase('1d622ccbaecd4f789abbfb0321bd4d91');

// $ExpectType Promise<CarrierAccount>
const carrierAccount1 = shippo.carrieraccount.create({
    carrier: 'fedex',
    account_id: '321123',
    parameters: {
        meter: '789987'
    },
    active: true
});

// $ExpectType Promise<CarrierAccount>
const carrierAccount2 = shippo.carrieraccount.retrieve('1d622ccbaecd4f789abbfb0321bd4d91');

// $ExpectType Promise<PaginatedResult<CarrierAccount>>
const carrierAccounts = shippo.carrieraccount.list();

// $ExpectType Promise<CarrierAccount>
const carrierAccount3 = shippo.carrieraccount.update(
    '1d622ccbaecd4f789abbfb0321bd4d91',
    {
        active: false
    });

// $ExpectType Promise<CustomsDeclaration>
const customsDeclaration1 = shippo.customsdeclaration.create({
    contents_type: 'MERCHANDISE',
    contents_explanation: 'T-Shirt purchase',
    non_delivery_option: 'RETURN',
    certify: true,
    certify_signer: 'Simon Kreuz',
    items: [{
        description: 'T-Shirt',
        quantity: 20,
        net_weight: '1',
        mass_unit: 'lb',
        value_amount: '200',
        value_currency: 'USD',
        origin_country: 'US',
    }],
});

// $ExpectType Promise<CustomsDeclaration>
const customsDeclaration2 = shippo.customsdeclaration.retrieve('1d622ccbaecd4f789abbfb0321bd4d91');

// $ExpectType Promise<PaginatedResult<CustomsDeclaration>>
const customsDeclarations = shippo.customsdeclaration.list();

// $ExpectType Promise<CustomsItem>
const customsItem1 = shippo.customsitem.create({
    description: 'T-Shirt',
    quantity: 2,
    net_weight: '400',
    mass_unit: 'g',
    value_amount: '20',
    value_currency: 'USD',
    tariff_number: '',
    origin_country: 'US',
    metadata: 'Order ID #123123'
});

// $ExpectType Promise<CustomsItem>
const customsItem2 = shippo.customsitem.retrieve('1d622ccbaecd4f789abbfb0321bd4d91');

// $ExpectType Promise<PaginatedResult<CustomsItem>>
const customsItems = shippo.customsitem.list();

// $ExpectType Promise<Manifest>
const manifest1 = shippo.manifest.create({
    carrier_account: 'b741b99f95e841639b54272834bc478c',
    shipment_date: '2014-05-16T23:59:59Z',
    transactions: [
        '64bba01845ef40d29374032599f22588',
        'c169aa586a844cc49da00d0272b590e1'
    ]
});

// $ExpectType Promise<Manifest>
const manifest2 = shippo.manifest.retrieve('1d622ccbaecd4f789abbfb0321bd4d91');

// $ExpectType Promise<PaginatedResult<Manifest>>
const manifests = shippo.manifest.list();

// $ExpectType Promise<Order>
const order1 = shippo.order.create({
    placed_at: new Date(),
    to_address: '35ed59f23a514ecfa2faeaed93a00086',
    line_items: [
      {
        quantity: 2,
        sku: 'SKU-123',
        title: 'Spooky Unicorn'
      }
    ],
    total_price: 135,
    currency: 'USD',
    total_tax: 12,
    shipping_cost: 23,
    shipping_cost_currency: 'USD',
    order_status: 'PAID',
    weight: '42',
    weight_unit: 'g'
});

// $ExpectType Promise<Order>
const order2 = shippo.order.retrieve('1d622ccbaecd4f789abbfb0321bd4d91');

// $ExpectType Promise<PaginatedResult<Order>>
const orders = shippo.order.list();

// $ExpectType Promise<Parcel>
const parcel1 = shippo.parcel.create({
    length: '5',
    width: '5',
    height: '5',
    distance_unit: 'in',
    weight: '2',
    mass_unit: 'lb',
});

// $ExpectType Promise<Parcel>
const parcel2 = shippo.parcel.retrieve('1d622ccbaecd4f789abbfb0321bd4d91');

// $ExpectType Promise<PaginatedResult<Parcel>>
const parcels = shippo.parcel.list();

// $ExpectType Promise<Refund>
const refund1 = shippo.refund.create({
    transaction: '35ed59f23a514ecfa2faeaed93a00086',
    async: false
});

// $ExpectType Promise<Refund>
const refund2 = shippo.refund.retrieve('1d622ccbaecd4f789abbfb0321bd4d91');

// $ExpectType Promise<PaginatedResult<Refund>>
const refunds = shippo.refund.list();

// $ExpectType Promise<Shipment>
const shipment1 = shippo.shipment.create({
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

// $ExpectType Promise<Shipment>
const shipment2 = shippo.shipment.retrieve('1d622ccbaecd4f789abbfb0321bd4d91');

// $ExpectType Promise<PaginatedResult<Shipment>>
const shipments = shippo.shipment.list();

// $ExpectType Promise<PaginatedResult<Rate> & { count: number; }>
const rates = shippo.shipment.rates('1d622ccbaecd4f789abbfb0321bd4d91');

// $ExpectType Promise<Transaction>
const transactionFromRate = shippo.transaction.create({
    rate: '35ed59f23a514ecfa2faeaed93a00086',
    label_file_type: 'PDF',
    async: false
});

// $ExpectType Promise<Transaction>
const transactionFromShipment = shippo.transaction.create({
    shipment: {
      address_to: {
          name: 'Mr Hippo',
          street1: '965 Mission St #572',
          city: 'San Francisco',
          state: 'CA',
          zip: '94103',
          country: 'US',
          phone: '4151234567',
          email: 'mrhippo@goshippo.com'
      },
      address_from: {
          name: 'Mrs Hippo',
          street1: '1092 Indian Summer Ct',
          city: 'San Jose',
          state: 'CA',
          zip: '95122',
          country: 'US',
          phone: '4159876543',
          email: 'mrshippo@goshippo.com'
      },
      parcels: [{
          length: '10',
          width: '15',
          height: '10',
          distance_unit: 'in',
          weight: '1',
          mass_unit: 'lb'
      }]
    },
    carrier_account: 'b741b99f95e841639b54272834bc478c',
    servicelevel_token: 'usps_priority'
});

// $ExpectType Promise<Transaction>
const transaction = shippo.transaction.retrieve('1d622ccbaecd4f789abbfb0321bd4d91');

// $ExpectType Promise<PaginatedResult<Transaction>>
const transactions = shippo.transaction.list();
