const options = {
    style: {
        basic:  {
            fontColor: '#aaccdd',
            fontSize: '12pt',
            fontFamily: 'Arial',
            letterSpacing: '2px',
            fontWeight: 'bold' as const
        },
        invalid:  {
            fontColor: '#aaccdd',
            fontWeight: 'bold' as const
        },
        focus:  {
            fontColor: '#aaccdd',
            fontWeight: 'bold' as const
        },
        placeholder:  {
            fontColor: '#aaccdd',
            fontWeight: 'bold' as const
        },
        disabled:  {
            fontColor: '#aaccdd',
            fontWeight: 'bold' as const
        }
    },
    placeholder: {
        number: 'CARD NUMBER',
        date: 'EXP DATE',
        cvv: 'CVV',
    },
    lang: 'en' as const,
    disabled: false,
    cardIcon: false
};

const optionsWithError = {
    lang: 'xx'
};

const secureFormsOptions = {
    fonts: [
        {
            family: 'Family 1',
            src: 'url(http://family1) type("woff2")'
        },
        {
            family: 'Family 2',
            src: 'url(http://family2) type("woff2")'
        }
    ]
};

const secureFormsOptionsError = {
    fonts: [
        {
            family: 'Family 1'
        }
    ]
};

// Init SDK
const payu = PayU('POS_ID');
PayU('POS_ID', {dev: true});
// @ts-expect-error
PayU();
// @ts-expect-error
PayU(123);
// @ts-expect-error
PayU('POS_ID', {dev: 'on'});

// SDK functions
payu.extractRefReqId('URL_WITH_REF_REQ_ID');
// @ts-expect-error
payu.extractRefReqId();

payu.sendCvv('REF_REQ_ID');
// @ts-expect-error
payu.sendCvv();

payu.tokenize();
payu.tokenize('SINGLE');
// @ts-expect-error
payu.tokenize('UNKNOWN');

// Init Secure Forms
const secureForms = payu.secureForms();
payu.secureForms(secureFormsOptions);
// @ts-expect-error
payu.secureForms('options');
// @ts-expect-error
payu.secureForms(secureFormsOptionsError);

// Add Secure Forms
const secureForm = secureForms.add();
secureForms.add('number');
// @ts-expect-error
secureForms.add('UNKNOWN');
secureForms.add('cvv', options);
// @ts-expect-error
secureForms.add('cvv', optionsWithError);

// Secure Form Functions
secureForm
    .render('#id')
    .focus()
    .clear()
    .remove()
    .update(options)
    .on('ready', () => {});

// @ts-expect-error
secureForm.render();
// @ts-expect-error
secureForm.update(optionsWithError);
// @ts-expect-error
secureForm.on();
// @ts-expect-error
secureForm.on('xxxx');
// @ts-expect-error
secureForm.on('ready');
