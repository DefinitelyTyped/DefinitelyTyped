import mParticle = require('@mparticle/web-sdk');

mParticle.CommerceEventType.ProductAddToCart;
mParticle.CommerceEventType.ProductAddToWishlist;
mParticle.CommerceEventType.ProductCheckout;
mParticle.CommerceEventType.ProductCheckoutOption;
mParticle.CommerceEventType.ProductClick;
mParticle.CommerceEventType.ProductImpression;
mParticle.CommerceEventType.ProductPurchase;
mParticle.CommerceEventType.ProductRefund;
mParticle.CommerceEventType.ProductRemoveFromCart;
mParticle.CommerceEventType.ProductRemoveFromWishlist;
mParticle.CommerceEventType.ProductViewDetail;
mParticle.CommerceEventType.PromotionClick;
mParticle.CommerceEventType.PromotionView;

const config: mParticle.config = {
    isDevelopmentMode: true,
    identifyRequest: {
        userIdentities: {
            customerid: 'test',
            email: 'test',
            other: 'test',
            other2: 'test',
            other3: 'test',
            other4: 'test',
            other5: 'test',
            other6: 'test',
            other7: 'test',
            other8: 'test',
            other9: 'test',
            other10: 'test',
            mobile_number: 'test',
            phone_number_2: 'test',
            phone_number_3: 'test',
            facebook: 'test',
            facebookcustomaudienceid: 'test',
            google: 'test',
            twitter: 'test',
            microsoft: 'test',
            yahoo: 'test',
        },
    },
    identityCallback(result) {
        console.log(result);
    },
    dataPlan: {
        planId: 'test',
        planVersion: 2
    },
    appVersion: '1.0.0',
    appName: 'testAppName',
    logLevel: 'warning',
    sessionTimeout: 500,
    useCookieStorage: true,
    maxCookieSize: 300,
    cookieDomain: 'mparticle.com',
    customFlags: {
        flag: 'foo',
        anotherFlag: 'bar'
    },
    workspaceToken: 'test',
    requiredWebviewBridgeName: 'another',
    minWebviewBridgeVersion: 2,
};

mParticle.getDeviceId();

mParticle.init('apiKey');
mParticle.init('apiKey', config);
mParticle.init('apiKey', config, 'instance');

mParticle.setLogLevel('warning');
mParticle.setLogLevel('verbose');
mParticle.setLogLevel('none');

// TODO: reset

mParticle.ready(() => {
    console.log('hi');
});

mParticle.getVersion();
mParticle.setAppVersion('1.0.0');

mParticle.getAppName();
mParticle.setAppName('appName');

mParticle.getAppVersion();

mParticle.stopTrackingLocation();
mParticle.startTrackingLocation();
mParticle.startTrackingLocation((location) => {
    console.log(location.coords.latitude);
    console.log(location.coords.longitude);
});

mParticle.setPosition(1, 2);

mParticle.startNewSession();
mParticle.endSession();

mParticle.logBaseEvent({
    data: {},
    name: 'baseEventName',
    messageType: 1,
    eventType: 1,
});

const customAttrs =  {
    attr1: 'hi',
    attr2: 2,
    attr3: null,
    attr4: undefined,
    attr5: true,
};

const customFlags =  {
    attr1: 'hi',
    attr2: 2,
    attr3: true,
    attr4: [{foo: '2'}],
    attr5: {foo: 'bar'}
};

mParticle.logEvent('eventName', mParticle.EventType.Location, customAttrs, customFlags);

mParticle.logError('Login Failed', customAttrs);
mParticle.logError({
    name: 'error',
    message: 'errorMessage',
    stack: 'errorStack'
}, customAttrs);

mParticle.logLink('click', 'eventName', mParticle.EventType.Location, customAttrs);
mParticle.logForm('click', 'eventName', mParticle.EventType.Location, customAttrs);

mParticle.logPageView('pageName');
mParticle.logPageView('pageName', customAttrs, customFlags);

mParticle.upload();

mParticle.setOptOut(true);

mParticle.setSessionAttribute('key1', 'value1');
mParticle.setSessionAttribute('key2', 2);
mParticle.setSessionAttribute('key3', false);
mParticle.setSessionAttribute('key4', null);

// CONSENT START
const user = mParticle.Identity.getCurrentUser();

const ccpaConsent = mParticle.Consent.createCCPAConsent(
    true,
    new Date().getTime(),
    'consentDocument',
    'location',
    'hardware',
);
const gdprConsent = mParticle.Consent.createGDPRConsent(
    true,
    new Date().getTime(),
    'consentDocument',
    'location',
    'hardware',
);

let consentState = mParticle.Consent.createConsentState();
consentState.addGDPRConsentState("generalConsent", gdprConsent);
consentState.setCCPAConsentState(ccpaConsent);
user.setConsentState(consentState);

const ccpaConsentState = consentState.getCCPAConsentState();
user.setConsentState(consentState);

// Remove consent state
consentState = user.getConsentState();
const gdprConsentState = consentState.getGDPRConsentState();

const user2 = mParticle.Identity.getCurrentUser();
user2.getConsentState().setGDPRConsentState(gdprConsentState);

consentState.removeGDPRConsentState('generalConsent');
consentState.removeCCPAConsentState();
user.setConsentState(consentState);

// CONSENT END

// ECOMMERCE START

const product1 = mParticle.eCommerce.createProduct('product1', 'sku1', 10, 1, 'variant1', 'category1', 'brand1', 1, 'coupon1', {foo: 'bar'});
const product2 = mParticle.eCommerce.createProduct('product2', 'sku2', 20);

const promotion1 = mParticle.eCommerce.createPromotion('id1', 'creative', 'name', 1);
const promotion2 = mParticle.eCommerce.createPromotion('id2');

const impression1 = mParticle.eCommerce.createImpression('name1', product1);
const impression2 = mParticle.eCommerce.createImpression('name2', product2);
const impression3 = mParticle.eCommerce.createImpression('name2', [product1, product2]);

const transactionAttributes = mParticle.eCommerce.createTransactionAttributes('TAid1', 'aff1', 'coupon', 1798, 10, 5);

const clearCartBoolean = true;
const eCommerceCustomAttributes = { value: 10 };
const eCommerceCustomFlags = { CF1: 'key' };

// Cart has been deprecated, but API still works as of 2.11.X
mParticle.eCommerce.Cart.add(product1, true);
mParticle.eCommerce.Cart.remove(product1, true);
mParticle.eCommerce.Cart.clear();

mParticle.eCommerce.logCheckout(1);
mParticle.eCommerce.logCheckout(1, 'ok', eCommerceCustomAttributes, eCommerceCustomFlags);

mParticle.eCommerce.logProductAction(mParticle.ProductActionType.AddToCart, [product1, product2], eCommerceCustomAttributes, eCommerceCustomFlags);
mParticle.eCommerce.logProductAction(mParticle.ProductActionType.AddToWishlist, [product1, product2], eCommerceCustomAttributes, eCommerceCustomFlags);
mParticle.eCommerce.logProductAction(mParticle.ProductActionType.Checkout, [product1, product2], eCommerceCustomAttributes, eCommerceCustomFlags);
mParticle.eCommerce.logProductAction(mParticle.ProductActionType.CheckoutOption, [product1, product2], eCommerceCustomAttributes, eCommerceCustomFlags);
mParticle.eCommerce.logProductAction(mParticle.ProductActionType.Click, [product1, product2], eCommerceCustomAttributes, eCommerceCustomFlags);
mParticle.eCommerce.logProductAction(mParticle.ProductActionType.Purchase, [product1, product2], eCommerceCustomAttributes, eCommerceCustomFlags);
mParticle.eCommerce.logProductAction(mParticle.ProductActionType.Refund, [product1, product2], eCommerceCustomAttributes, eCommerceCustomFlags);
mParticle.eCommerce.logProductAction(mParticle.ProductActionType.RemoveFromCart, [product1, product2], eCommerceCustomAttributes, eCommerceCustomFlags);
mParticle.eCommerce.logProductAction(mParticle.ProductActionType.RemoveFromWishlist, [product1, product2], eCommerceCustomAttributes, eCommerceCustomFlags);
mParticle.eCommerce.logProductAction(mParticle.ProductActionType.Unknown, [product1, product2], eCommerceCustomAttributes, eCommerceCustomFlags);
mParticle.eCommerce.logProductAction(mParticle.ProductActionType.ViewDetail, [product1, product2], eCommerceCustomAttributes, eCommerceCustomFlags);

mParticle.eCommerce.logProductAction(300, [product1, product2], eCommerceCustomAttributes, eCommerceCustomFlags);

mParticle.eCommerce.logPurchase(
    transactionAttributes,
    [product1, product2],
    clearCartBoolean,
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);

mParticle.eCommerce.logPromotion(mParticle.PromotionType.PromotionClick, promotion1);
mParticle.eCommerce.logPromotion(mParticle.PromotionType.PromotionView, promotion1, eCommerceCustomAttributes, eCommerceCustomFlags);
mParticle.eCommerce.logPromotion(mParticle.PromotionType.Unknown, promotion1, eCommerceCustomAttributes, eCommerceCustomFlags);

mParticle.eCommerce.logImpression(impression1);
mParticle.eCommerce.logImpression([impression1, impression2]);
mParticle.eCommerce.logImpression(impression1, eCommerceCustomAttributes, eCommerceCustomFlags);

mParticle.eCommerce.logRefund(
    transactionAttributes,
    [product1, product2],
    clearCartBoolean,
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);

mParticle.eCommerce.setCurrencyCode('usd');
// ECOMMERCE END

// Identity Start
const identifyIdentities: mParticle.IdentifyRequest = {
    userIdentities: {
        customerid: 'customerid',
        email: 'email',
        other: 'email',
        other2: 'email',
        other3: 'email',
        other4: 'email',
        other5: 'email',
        other6: 'email',
        other7: 'email',
        other8: 'email',
        other9: 'email',
        other10: 'email',
        mobile_number: 'email',
        phone_number_2: 'email',
        phone_number_3: 'email',
        facebook: 'email',
        facebookcustomaudienceid: 'email',
        google: 'email',
        twitter: 'email',
        microsoft: 'email',
        yahoo: 'email',
    },
};

mParticle.Identity.login(identifyIdentities, (result) => {
    console.log(result.body.context);
    console.log(result.body.is_ephemeral);
    console.log(result.body.is_logged_in);
    console.log(result.body.matched_identities);

    result.getUser().getConsentState();

    // alias users
    const userAliasObject: mParticle.UserAliasObject = {
        destinationMpid: result.getPreviousUser().getMPID(),
        sourceMpid: result.getUser().getMPID(),
        startTime: new Date().getTime(),
        endTime: new Date().getTime()
    };

    mParticle.Identity.aliasUsers(userAliasObject, (result) => {
        const httpCode: number = result.httpCode;
        const message: string = result.message;
    });

    mParticle.Identity.createAliasRequest(result.getPreviousUser(), result.getUser());
});

mParticle.Identity.logout(identifyIdentities, (result) => {
    console.log(result.body.context);
    console.log(result.body.is_ephemeral);
    console.log(result.body.is_logged_in);
    console.log(result.body.matched_identities);
    result.getPreviousUser().getAllUserAttributes();
    result.getUser().getConsentState();
});

mParticle.Identity.identify(identifyIdentities, (result) => {
    console.log(result.body.context);
    console.log(result.body.is_ephemeral);
    console.log(result.body.is_logged_in);
    console.log(result.body.matched_identities);
    result.getPreviousUser().getAllUserAttributes();
    result.getUser().getConsentState();
});

mParticle.Identity.modify(identifyIdentities, (result) => {
    console.log(result.body.context);
    console.log(result.body.is_ephemeral);
    console.log(result.body.is_logged_in);
    console.log(result.body.matched_identities);
    result.getPreviousUser().getAllUserAttributes();
    result.getUser().getConsentState();
    // if (result.httpCode === mParticle.Identity.HTTPCODES.noHttpCoverage) {

    // }
});

mParticle.Identity.getCurrentUser();
mParticle.Identity.getUser('mpid');

const userIdentities: mParticle.UserIdentities = mParticle.Identity.getCurrentUser().getUserIdentities();
const mpid: string = mParticle.Identity.getCurrentUser().getMPID();
mParticle.Identity.getCurrentUser().setUserTag('tag');
mParticle.Identity.getCurrentUser().removeUserTag('tag');
mParticle.Identity.getCurrentUser().setUserAttribute('attr', 'value');
mParticle.Identity.getCurrentUser().removeUserAttribute('attr');
mParticle.Identity.getCurrentUser().setUserAttributes({attr: 'value', foo: 'bar'});
mParticle.Identity.getCurrentUser().setUserAttributeList('hi', ['hello']);
mParticle.Identity.getCurrentUser().removeAllUserAttributes();
const userAttributes: object = mParticle.Identity.getCurrentUser().getUserAttributesLists();
const consent: mParticle.ConsentState = mParticle.Identity.getCurrentUser().getConsentState();
mParticle.Identity.getCurrentUser().setConsentState(consent);
const isLoggedIn: boolean = mParticle.Identity.getCurrentUser().isLoggedIn();
const lastSeenTime: number = mParticle.Identity.getCurrentUser().getLastSeenTime();
const firstSeenTime: number = mParticle.Identity.getCurrentUser().getFirstSeenTime();

mParticle.Identity.getCurrentUser().getCart().add(product1, true);
mParticle.Identity.getCurrentUser().getCart().remove(product1, true);
mParticle.Identity.getCurrentUser().getCart().clear();
mParticle.Identity.getCurrentUser().getCart().getCartProducts();
