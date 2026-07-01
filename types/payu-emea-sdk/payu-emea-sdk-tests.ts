const options = {
    style: {
        basic: {
            fontColor: "#aaccdd",
            fontSize: "12pt",
            fontFamily: "Arial",
            letterSpacing: "2px",
            fontWeight: "bold" as const,
        },
        invalid: {
            fontColor: "#aaccdd",
            fontWeight: "bold" as const,
        },
        focus: {
            fontColor: "#aaccdd",
            fontWeight: "bold" as const,
        },
        placeholder: {
            fontColor: "#aaccdd",
            fontWeight: "bold" as const,
        },
        disabled: {
            fontColor: "#aaccdd",
            fontWeight: "bold" as const,
        },
    },
    label: {
        number: "LABEL CARD NUMBER",
        date: "LABEL EXP DATE",
        cvv: "LABEL CVV",
    },
    placeholder: {
        number: "CARD NUMBER",
        date: "EXP DATE",
        cvv: "CVV",
    },
    lang: "en" as const,
    frameTitle: "TITLE",
    disabled: false,
    cardIcon: false,
    enableInstallments: true,
};

const optionsWithError = {
    lang: "xx",
};

const secureFormsOptions = {
    fonts: [
        {
            family: "Family 1",
            src: "url(http://family1) type(\"woff2\")",
        },
        {
            family: "Family 2",
            src: "url(http://family2) type(\"woff2\")",
        },
    ],
    lang: "pl" as const,
};

const secureFormsFontOptionsError = {
    fonts: [
        {
            family: "Family 1",
        },
    ],
};

const secureFormsLangOptionsError = {
    lang: "XX" as const,
};

// Init SDK
// $ExpectType PayU
const payu = PayU("POS_ID");
PayU("POS_ID", { dev: true });
// @ts-expect-error
PayU();
// @ts-expect-error
PayU(123);
// @ts-expect-error
PayU("POS_ID", { dev: "on" });

// SDK functions
// $ExpectType string
payu.extractRefReqId("URL_WITH_REF_REQ_ID");
// @ts-expect-error
payu.extractRefReqId();

// $ExpectType Promise<SendCvvResultSuccess | SendCvvResultError>
payu.sendCvv("REF_REQ_ID");
// @ts-expect-error
payu.sendCvv();

// $ExpectType Promise<TokenizeResultSuccess | TokenizeResultError>
payu.tokenize();
// $ExpectType Promise<TokenizeResultSuccess | TokenizeResultError>
payu.tokenize("SINGLE");
// @ts-expect-error
payu.tokenize("UNKNOWN");

// Init Secure Forms
// $ExpectType SecureForms
const secureForms = payu.secureForms();
payu.secureForms(secureFormsOptions);
// @ts-expect-error
payu.secureForms("options");
// @ts-expect-error
payu.secureForms(secureFormsFontOptionsError);
// @ts-expect-error
payu.secureForms(secureFormsLangOptionsError);

// Add Secure Forms
// $ExpectType SecureForm
const secureForm = secureForms.add();
// $ExpectType SecureForm
secureForms.add("number");
// @ts-expect-error
secureForms.add("UNKNOWN");
secureForms.add("cvv", options);
// @ts-expect-error
secureForms.add("cvv", optionsWithError);

// Secure Form Functions
secureForm
    .render("#id")
    .focus()
    .clear()
    .remove()
    .update(options)
    .on("ready", () => {});

// @ts-expect-error
secureForm.render();
// @ts-expect-error
secureForm.update(optionsWithError);
// @ts-expect-error
secureForm.on();
// @ts-expect-error
secureForm.on("xxxx");
// @ts-expect-error
secureForm.on("ready");

// SecureElements
const secureElementsConfig: payu.Configuration = {
    elements: ["cards"],
    posId: "POS_ID",
    buyer: { email: "buyer@example.com" },
    clickToPay: {
        dpaName: "My Shop",
        mastercard: { dpaId: "MC_DPA_ID" },
        visa: { dpaId: "VISA_DPA_ID", acquirerBIN: "12345", acquirerMerchantId: "MERCHANT_ID" },
    },
};

const secureElementsCustomization: payu.Customization = {
    lang: "en",
    options: {
        enableCardFormFieldsAutoJump: true,
        showCardNumberBrandIcon: true,
        skipStyleDefaults: false,
        forceStyleUpdate: false,
        darkMode: false,
    },
    styles: {
        base: { fontSize: "14px", fontFamily: "Arial", lineHeight: "1.5" },
        fonts: [{ family: "Arial", src: [{ url: "http://font", format: "woff2" }] }],
        button: {
            primary: {
                default: { backgroundColor: "#fff", padding: "8px" },
                hover: { backgroundColor: "#eee" },
            },
        },
        input: { default: { border: { color: "#ccc", style: "solid", width: "1px" } } },
    },
};

const secureElementsInitOptions: payu.SecureElementsInitializationOptions = {
    configuration: secureElementsConfig,
    customization: secureElementsCustomization,
};

// Init SecureElements
// $ExpectType SecureElements
const secureElements = SecureElements({ dev: false });
SecureElements({ dev: true });
// @ts-expect-error
SecureElements();
// @ts-expect-error
SecureElements({ dev: "yes" });

// SecureElements instance methods
// $ExpectType SecureElements
secureElements.render("#container", secureElementsInitOptions);
// $ExpectType SecureElements
secureElements.update(secureElementsCustomization);
// $ExpectType SecureElements
secureElements.on("change", (msg: string) => {});
secureElements.render("#container", secureElementsInitOptions).update(secureElementsCustomization).on(
    "change",
    (msg: string) => {},
);

// @ts-expect-error
secureElements.render();
// @ts-expect-error
secureElements.render("#container");
// @ts-expect-error
secureElements.on("change");
// @ts-expect-error invalid ElementId
secureElements.render("#container", { configuration: { elements: ["unknown"], posId: "POS_ID" }, customization: {} });
// @ts-expect-error missing required posId in Configuration
secureElements.render("#container", { configuration: { elements: ["cards"] }, customization: {} });
