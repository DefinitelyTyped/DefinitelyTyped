import Shippo = require("shippo");

// $ExpectType Shippo
new Shippo("SHIPPO_API_KEY");

// $ExpectType Shippo
new Shippo();

// $ExpectType Shippo
new Shippo({ shippoToken: "SHIPPO_API_KEY" });

// @ts-expect-error
new Shippo(1234);

// $ExpectType Shippo
export const shippo = Shippo("SHIPPO_API_KEY");

// $ExpectType Promise<Address>
shippo.address.create({
    name: "Shawn Ippotle",
    company: "Shippo",
    street1: "215 Clayton St.",
    street2: "",
    city: "San Francisco",
    state: "CA",
    zip: "94117",
    country: "US",
    phone: "+1 555 341 9393",
    email: "shippotle@goshippo.com",
    is_residential: true,
    metadata: "Customer ID 123456",
});

// $ExpectType Promise<Address>
shippo.address.retrieve("id123");

// $ExpectType Promise<Address>
shippo.address.validate("id123");

// $ExpectType Promise<PaginatedList<Address>>
shippo.address.list({ page: 1, results: 10 });

// $ExpectType Promise<Parcel>
shippo.parcel.create({
    length: "5",
    width: "5",
    height: "5",
    distance_unit: "cm",
    weight: "2",
    mass_unit: "lb",
    template: "",
    metadata: "Customer ID 123456",
});

// $ExpectType Promise<Parcel>
shippo.parcel.retrieve("id123");

// $ExpectType Promise<PaginatedList<Parcel>>
shippo.parcel.list({ page: 1, results: 10 });

// $ExpectType Promise<Shipment>
shippo.shipment.create({
    address_to: {
        name: "Mr Hippo",
        street1: "965 Mission St #572",
        city: "San Francisco",
        state: "CA",
        zip: "94103",
        country: "US",
        phone: "4151234567",
        email: "mrhippo@goshippo.com",
    },
    address_from: {
        name: "Mrs Hippo",
        street1: "1092 Indian Summer Ct",
        city: "San Jose",
        state: "CA",
        zip: "95122",
        country: "US",
        phone: "4159876543",
        email: "mrshippo@goshippo.com",
    },
    parcels: [
        {
            distance_unit: "yd",
            height: "1",
            length: "1",
            mass_unit: "kg",
            weight: "1",
            width: "1",
        },
    ],
});

// $ExpectType Promise<Shipment>
shippo.shipment.retrieve("id123");

// $ExpectType Promise<PaginatedList<Shipment>>
shippo.shipment.list({ page: 1, results: 10 });

// $ExpectType Promise<Transaction>
shippo.transaction.create({
    rate: "rate_id",
    label_file_type: "PDF",
    async: false,
});

// $ExpectType Promise<Transaction>
shippo.transaction.retrieve("transaction_id");

// $ExpectType Promise<PaginatedList<Transaction>>
shippo.transaction.list({ page: 1, results: 10 });

// $ExpectType Promise<CustomsItem>
shippo.customsitem.create({
    description: "T-Shirt",
    mass_unit: "kg",
    net_weight: "0.2",
    origin_country: "US",
    quantity: 2,
    sku_code: "sku_123",
    value_amount: "20",
    value_currency: "USD",
});

// $ExpectType Promise<CustomsItem>
shippo.customsitem.retrieve("customsitem_id");

// $ExpectType Promise<PaginatedList<CustomsItem>>
shippo.customsitem.list({ page: 1, results: 10 });

// $ExpectType Promise<CustomsDeclaration>
shippo.customsdeclaration.create({
    certify: true,
    certify_signer: "signer",
    contents_type: "MERCHANDISE",
    items: [
        {
            description: "T-Shirt",
            mass_unit: "kg",
            net_weight: "0.2",
            origin_country: "US",
            quantity: 2,
            sku_code: "sku_123",
            value_amount: "20",
            value_currency: "USD",
        },
    ],
    non_delivery_option: "RETURN",
});

// $ExpectType Promise<CustomsDeclaration>
shippo.customsdeclaration.retrieve("customsdeclaration_id");

// $ExpectType Promise<PaginatedList<CustomsDeclaration>>
shippo.customsdeclaration.list({ page: 1, results: 10 });

// $ExpectType Promise<Carrier>
shippo.carrieraccount.retrieve("carrieraccount_id");

// $ExpectType Promise<PaginatedList<Carrier>>
shippo.carrieraccount.list({ page: 1, results: 10 });

// $ExpectType Promise<Manifest>
shippo.manifest.create({
    carrier_account: "carrieraccount_id",
    shipment_date: "2023-03-01T00:35:03.463Z",
    address_from: {
        name: "Mrs Hippo",
        street1: "1092 Indian Summer Ct",
        city: "San Jose",
        state: "CA",
        zip: "95122",
        country: "US",
        phone: "4159876543",
    },
});

// $ExpectType Promise<Manifest>
shippo.manifest.retrieve("manifest_id");

// $ExpectType Promise<PaginatedList<Manifest>>
shippo.manifest.list({ page: 1, results: 10 });

// $ExpectType Promise<Refund>
shippo.refund.create({
    transaction: "transaction_id",
});

// $ExpectType Promise<Refund>
shippo.refund.retrieve("refund_id");

// $ExpectType Promise<PaginatedList<Refund>>
shippo.refund.list({ page: 1, results: 10 });

// $ExpectType Promise<Rate>
shippo.rate.retrieve("rate_id");

// $ExpectType Promise<Batch>
shippo.batch.create({
    default_carrier_account: "carrieraccount_id",
    default_servicelevel_token: "servicelevel_token",
    label_filetype: "PDF",
    batch_shipments: [{
        shipment: "shipment_id",
    }],
});

// $ExpectType Promise<Batch>
shippo.batch.retrieve("batch_id");

// $ExpectType Promise<Batch>
shippo.batch.add("batch_id", [{
    shipment: "shipment_id",
}]);

// $ExpectType Promise<Batch>
shippo.batch.remove("batch_id", ["shipment_id"]);

// $ExpectType Promise<Batch>
shippo.batch.purchase("batch_id");

// $ExpectType Promise<Track>
shippo.track.create({
    carrier: "usps",
    tracking_number: "9400110200888800000000",
});

// $ExpectType Promise<Track>
shippo.track.get_status("usps", "9400110200888800000000");

// $ExpectType void
shippo.setAuthScheme(Shippo.AUTH_SCHEME_OAUTH);

// $ExpectType void
shippo.setToken("SHIPPO_API_KEY");

// $ExpectType void
shippo.setToken({ oauthToken: "OAUTH_TOKEN" });

// $ExpectType void
shippo.setHost("host", "port", "protocol");

// $ExpectType void
shippo.setProtocol("protocol");

// $ExpectType void
shippo.setPort("port");

// $ExpectType void
shippo.setTimeout(1000);

// $ExpectType void
shippo.setTimeout(null);

// $ExpectType void
shippo.set("key", "value");

// $ExpectType string | number | boolean | undefined
shippo.get("key");
