var item: PayPalItem;
item = new PayPalItem("name", 10, "25.00", "USD");
item = new PayPalItem("name", 10, "25.00", "USD", null);
item = new PayPalItem("name", 10, "25.00", "USD", "SKU_ID");

var item_name: string = item.name;
var item_quantity: number = item.quantity;
var item_price: string = item.price;
var item_currency: string = item.currency;
var item_sku: string = item.sku;



var paymentDetails: PayPalPaymentDetails;
paymentDetails = new PayPalPaymentDetails("10.50", "2.50", "1.25");

var paymentDetails_subtotal: string = paymentDetails.subtotal;
var paymentDetails_shipping: string = paymentDetails.shipping;
var paymentDetails_tax: string = paymentDetails.tax;



var shippingAddress: PayPalShippingAddress;
shippingAddress = new PayPalShippingAddress("name", "line1", "line2", "city", "state", "postalCode", "countryCode");

var shippingAddress_recipientName: string = shippingAddress.recipientName;
var shippingAddress_line1: string = shippingAddress.line1;
var shippingAddress_line2: string = shippingAddress.line2;
var shippingAddress_city: string = shippingAddress.city;
var shippingAddress_state: string = shippingAddress.state;
var shippingAddress_postalCode: string = shippingAddress.postalCode;
var shippingAddress_countryCode: string = shippingAddress.countryCode;



var payment: PayPalPayment;
payment = new PayPalPayment("10.00", "USD", "description", "Auth");
payment = new PayPalPayment("10.00", "USD", "description", "Auth", paymentDetails);

var payment_amount: string = payment.amount;
var payment_currency: string = payment.currency;
var payment_shortDescription: string = payment.shortDescription;
var payment_intent: string = payment.intent;
var payment_details: PayPalPaymentDetails = payment.details;
var payment_invoiceNumber: string = payment.invoiceNumber;
var payment_custom: string = payment.custom;
var payment_softDescriptor: string = payment.softDescriptor;
var payment_bnCode: string = payment.bnCode;
var payment_items: PayPalItem[] = [item, item, item];
var payment_shippingAddress: PayPalShippingAddress = shippingAddress;



var configOptions: PayPalConfigurationOptions = {
    defaultUserEmail: "email",
    defaultUserPhoneCountryCode: "countryCode",
    defaultUserPhoneNumber: "phoneNumber",
    merchantName: "merchantName",
    merchantPrivacyPolicyURL: "merchantPrivacyPolicyURL",
    merchantUserAgreementURL: "merchantUserAgreementURL",
    acceptCreditCards: true,
    payPalShippingAddressOption: 10,
    rememberUser: true,
    languageOrLocale: "languageOrLocal",
    disableBlurWhenBackgrounding: true,
    presentingInPopover: true,
    forceDefaultsInSandbox: true,
    sandboxUserPassword: "sandboxUserPassword",
    sandboxUserPin: "sandboxUserPin"
};



var config: PayPalConfiguration;
config = new PayPalConfiguration();
config = new PayPalConfiguration(null);
config = new PayPalConfiguration(configOptions);

var config_defaultUserEmail: string = config.defaultUserEmail;
var config_defaultUserPhoneCountryCode: string = config.defaultUserPhoneCountryCode;
var config_defaultUserPhoneNumber: string = config.defaultUserPhoneNumber;
var config_merchantName: string = config.merchantName;
var config_merchantPrivacyPolicyURL: string = config.merchantPrivacyPolicyURL;
var config_merchantUserAgreementURL: string = config.merchantUserAgreementURL;
var config_acceptCreditCards: boolean = config.acceptCreditCards;
var config_payPalShippingAddressOption: number = config.payPalShippingAddressOption;
var config_rememberUser: boolean = config.rememberUser;
var config_languageOrLocale: string = config.languageOrLocale;
var config_disableBlurWhenBackgrounding: boolean = config.disableBlurWhenBackgrounding;
var config_presentingInPopover: boolean = config.presentingInPopover;
var config_forceDefaultsInSandbox: boolean = config.forceDefaultsInSandbox;
var config_sandboxUserPasword: string = config.sandboxUserPassword;
var config_sandboxUserPin: string = config.sandboxUserPin;



var clientIds: PayPalCordovaPlugin.PayPalClientIds = {
    PayPalEnvironmentProduction: "",
    PayPalEnvironmentSandbox: ""
};



var apiModule: PayPalCordovaPlugin.PayPalMobileStatic = PayPalMobile;
apiModule.version((result: string) => {});
apiModule.init(clientIds, () => {});
apiModule.prepareToRender("environment", config, () => {});
apiModule.renderSinglePaymentUI(payment, (result: any) => {}, (cancelReason: string) => {});
apiModule.applicationCorrelationIDForEnvironment("environment", (applicationCorrelationId: string) => {});
apiModule.clientMetadataID((clientMetadataId: string) => {});
apiModule.renderFuturePaymentUI((result: any) => {}, (cancelReason: string) => {});
apiModule.renderProfileSharingUI(["openid", "profile", "email"], (result: any) => {}, (cancelReason: string) => {});
