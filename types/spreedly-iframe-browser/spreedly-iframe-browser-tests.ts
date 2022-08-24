Spreedly; // $ExpectType SpreedlyPaymentFrame
const spreedly_iframe = new SpreedlyPaymentFrame();
const spreedly_fields: spreedly.SpreedlyField[] = ['number', 'cvv'];
const spreedly_field_types: spreedly.SpreedlyFieldType[] = ['number', 'text', 'tel'];
const spreedly_card_types: spreedly.SpreedlyCardType[] = [
    'alelo', 'alia', 'american_express', 'cabal', 'carnet', 'dankort', 'diners_club', 'discover', 'elo', 'jcb', 'maestro', 'master', 'naranja', 'olimpica', 'sodexo', 'visa', 'vr'
];
const spreedly_number_formats: spreedly.SpreedlyNumberFormat[] = ['prettyFormat', 'maskedFormat', 'toggleMask'];
spreedly_iframe.init('key', { numberEl: 'number', cvvEl: 'cvv' }); // $ExpectType void
spreedly_iframe.reload(); // $ExpectType void
spreedly_iframe.tokenizeCreditCard({ // $ExpectType void
    first_name: 'First name',
    last_name: 'Last name',
    month: '06',
    year: '2020',
    email: 'test@example.com',
    address1: 'Address1',
    address2: 'Address2',
    city: 'New York',
    state: 'NY',
    zip: '55555',
    country: 'US',
    phone_number: '+15555555555',
    company: 'Test company',
    shipping_address1: 'Ship address 1',
    shipping_address2: 'Ship address 2',
    shipping_city: 'Ship city',
    shipping_state: 'Ship state',
    shipping_zip: '555555',
    shipping_country: 'US',
    shipping_phone_number: '+15555555555',
    metadata: { test: 'value' },
});
spreedly_iframe.tokenizeCreditCard({ // $ExpectType void
    full_name: 'Bob Clark',
    month: '06',
    year: '2020',
    email: 'test@example.com',
    address1: 'Address1',
    address2: 'Address2',
    city: 'New York',
    state: 'NY',
    zip: '55555',
    country: 'US',
    phone_number: '+15555555555',
    company: 'Test company',
    shipping_address1: 'Ship address 1',
    shipping_address2: 'Ship address 2',
    shipping_city: 'Ship city',
    shipping_state: 'Ship state',
    shipping_zip: '555555',
    shipping_country: 'US',
    shipping_phone_number: '+15555555555',
    metadata: { test: 'value' },
});
// @ts-expect-error
spreedly_iframe.tokenizeCreditCard({});
// @ts-expect-error
spreedly_iframe.tokenizeCreditCard({ first_name: 'First name' });
// @ts-expect-error
spreedly_iframe.tokenizeCreditCard({ last_name: 'Last name' });
spreedly_iframe.validate(); // $ExpectType void
spreedly_card_types.forEach((spreedly_card_type) => {
    spreedly_iframe.setRecache('token', { card_type: spreedly_card_type, last_four_digits: '1111' }); // $ExpectType void
});
spreedly_iframe.recache(); // $ExpectType void
spreedly_fields.forEach((spreedly_field) => {
    spreedly_iframe.setLabel(spreedly_field, 'label'); // $ExpectType void
    spreedly_iframe.setPlaceholder(spreedly_field, 'label'); // $ExpectType void
    spreedly_iframe.setStyle(spreedly_field, 'css'); // $ExpectType void
    spreedly_iframe.transferFocus(spreedly_field); // $ExpectType void

    spreedly_field_types.forEach((spreedly_field_type) => {
        spreedly_iframe.setFieldType(spreedly_field, spreedly_field_type); // $ExpectType void
    });
});
spreedly_number_formats.forEach((number_format) => {
    spreedly_iframe.setNumberFormat(number_format); // $ExpectType void
});
spreedly_iframe.on('consoleError', (error: spreedly.SpreedlyConsoleError) => {}); // $ExpectType void
spreedly_iframe.on('errors', (error: spreedly.SpreedlyError[]) => {}); // $ExpectType void
spreedly_iframe.on(// $ExpectType void
    'fieldEvent',
    (name: spreedly.SpreedlyField, type: spreedly.SpreedlyFieldEventType, activeEl: spreedly.SpreedlyField, inputProperties: spreedly.SpreedlyFieldEventInputProperties) => {}
);
spreedly_iframe.on('paymentMethod', (token: string, paymentMethod: spreedly.SpreedlyPaymentMethod) => {}); // $ExpectType void
spreedly_iframe.on('recache', (token: string, paymentMethod: spreedly.SpreedlyPaymentMethod) => {}); // $ExpectType void
spreedly_iframe.on('ready', () => {}); // $ExpectType void
spreedly_iframe.on('recacheReady', () => {}); // $ExpectType void
spreedly_iframe.on('validation', (inputProperties: spreedly.SpreedlyFieldEventInputProperties) => {}); // $ExpectType void
