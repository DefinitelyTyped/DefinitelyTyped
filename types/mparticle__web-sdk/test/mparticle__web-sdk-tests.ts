import { Batch } from '@mparticle/event-models';
import mParticle = require('@mparticle/web-sdk');

const dataPlan: mParticle.DataPlanConfig = {
    planId: 'test',
    planVersion: 2,
};

const customAttrs: mParticle.SDKEventAttrs = {
    attr1: 'hi',
    attr2: 2,
    attr3: null,
    attr4: undefined,
    attr5: true,
};

const customFlags: mParticle.SDKEventCustomFlags = {
    attr1: 'hi',
    attr2: 2,
    attr3: true,
    attr4: [{ foo: '2' }],
    attr5: { foo: 'bar' },
};

const eventOptions: mParticle.SDKEventOptions = {
    shouldUploadEvent: false,
};

const identifyRequest: mParticle.IdentifyRequest = {
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
};

const identityCallback: mParticle.IdentityCallback = result => {
    if (result.getUser()) {
        // IDSync request succeeded, mutate attributes or query for the MPID as needed
        const user = result.getUser();
        return;
    }
    if (result.getPreviousUser()) {
        // IDSync request succeeded, mutate attributes or query for the MPID as needed
        const user = result.getPreviousUser();
        return;
    }

    const codes = window.mParticle.Identity.HTTPCodes;
    switch (result.httpCode) {
        case codes.noHttpCoverage:
            break;
        case codes.activeIdentityRequest:
        case 429:
            break;
        case codes.validationIssue:
        case codes.activeSession:
        case codes.nativeIdentityRequest:
        case codes.loggingDisabledOrMissingAPIKey:
        case 400:
        case 200:
            console.log(result.body);
            break;
        default:
            console.log(result.body);
    }
};

const logger: mParticle.Logger = {
    error: error => {
        console.log(error);
    },
    warning: error => {
        console.log(error);
    },
    verbose: error => {
        console.log(error);
    },
};

const onCreateBatch: mParticle.onCreateBatch = (batch: Batch) => {
    return batch;
};

const config: mParticle.MPConfiguration = {
    isDevelopmentMode: true,
    identifyRequest,
    identityCallback,
    dataPlan,
    onCreateBatch,
    appVersion: '1.0.0',
    appName: 'testAppName',
    package: 'com.mparticle.example',
    logLevel: 'warning',
    logger,
    sessionTimeout: 500,
    useCookieStorage: true,
    maxCookieSize: 300,
    cookieDomain: 'mparticle.com',
    customFlags: {
        flag: 'foo',
        anotherFlag: 'bar',
    },
};

mParticle.endSession();

mParticle.getAppName();

mParticle.getAppVersion();

mParticle.getDeviceId();

const instance = mParticle.getInstance();

mParticle.getVersion();

mParticle.init('apiKey', config);
mParticle.init('apiKey', config, 'instance');

mParticle.isInitialized();

mParticle.logBaseEvent({
    data: {},
    name: 'baseEventName',
    messageType: 1,
    eventType: 1,
});
mParticle.logBaseEvent(
    {
        data: {},
        name: 'baseEventName',
        messageType: 1,
        eventType: 1,
    },
    eventOptions,
);

mParticle.logError('Login Failed', customAttrs);
mParticle.logError(
    {
        name: 'error',
        message: 'errorMessage',
        stack: 'errorStack',
    },
    customAttrs,
);

mParticle.logEvent('eventName');
mParticle.logEvent('eventName', mParticle.EventType.Location);
mParticle.logEvent('eventName', mParticle.EventType.Location, customAttrs);
mParticle.logEvent('eventName', mParticle.EventType.Location, customAttrs, customFlags);
mParticle.logEvent('eventName', mParticle.EventType.Location, customAttrs, customFlags, eventOptions);

mParticle.logForm('click', 'eventName');
mParticle.logForm('click', 'eventName', mParticle.EventType.Location);
mParticle.logForm('click', 'eventName', mParticle.EventType.Location, customAttrs);

mParticle.logLink('click', 'eventName');
mParticle.logLink('click', 'eventName', mParticle.EventType.Location);
mParticle.logLink('click', 'eventName', mParticle.EventType.Location, customAttrs);

mParticle.logPageView();
mParticle.logPageView('pageName');
mParticle.logPageView('pageName', customAttrs);
mParticle.logPageView('pageName', customAttrs, customFlags);
mParticle.logPageView('pageName', customAttrs, customFlags, eventOptions);

mParticle.ready(() => {
    console.log('hi');
});

mParticle.reset();

mParticle.setAppName('appName');

mParticle.setAppVersion('1.0.0');

mParticle.setDeviceId('foo-uuid-v4');

mParticle.setIntegrationAttribute(123, { key: 'value' });

mParticle.getIntegrationAttributes(123);

mParticle.setLogLevel('verbose');
mParticle.setLogLevel('none');
mParticle.setLogLevel('warning');

mParticle.setOptOut(true);

mParticle.setPosition(1, 2);

mParticle.setSessionAttribute('key1', 'value1');
mParticle.setSessionAttribute('key2', 2);
mParticle.setSessionAttribute('key3', false);
mParticle.setSessionAttribute('key4', null);

mParticle.startNewSession();

mParticle.startTrackingLocation();
mParticle.startTrackingLocation(location => {
    console.log(location.coords.latitude);
    console.log(location.coords.longitude);
});

mParticle.stopTrackingLocation();

mParticle.upload();

mParticle.sessionManager.getSession();

// CONSENT START
const user: mParticle.User = mParticle.Identity.getCurrentUser();

const ccpaConsent: mParticle.CCPAConsentState = mParticle.Consent.createCCPAConsent(
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

let consentState: mParticle.ConsentState = mParticle.Consent.createConsentState();

consentState.addGDPRConsentState('generalConsent', gdprConsent);
consentState.setCCPAConsentState(ccpaConsent);
user.setConsentState(consentState);

const ccpaConsentState: mParticle.CCPAConsentState = consentState.getCCPAConsentState();
user.setConsentState(consentState);

// Remove consent state
consentState = user.getConsentState();
const gdprConsentState: mParticle.GDPRConsentState = consentState.getGDPRConsentState();

const user2 = mParticle.Identity.getCurrentUser();
user2.getConsentState().setGDPRConsentState(gdprConsentState);

consentState.removeGDPRConsentState('generalConsent');
consentState.removeCCPAConsentState();
user.setConsentState(consentState);

// CONSENT END

// ECOMMERCE START

const product1: mParticle.Product = mParticle.eCommerce.createProduct(
    'product1',
    'sku1',
    10,
    1,
    'variant1',
    'category1',
    'brand1',
    1,
    'coupon1',
    { foo: 'bar' },
);
const product2: mParticle.Product = mParticle.eCommerce.createProduct('product2', 'sku2', 20);
console.log('Product 1 Name', product1.Name);
console.log('Product 1 Sku', product1.Sku);
console.log('Product 1 Price', product1.Price);
console.log('Product 1 Quantity', product1.Quantity);
console.log('Product 1 Variant', product1.Variant);
console.log('Product 1 Category', product1.Category);
console.log('Product 1 Brand', product1.Brand);
console.log('Product 1 Position', product1.Position);
console.log('Product 1 Coupon', product1.Coupon);
console.log('Product 1 Attributes', product1.Attributes);

const impression1: mParticle.Impression = mParticle.eCommerce.createImpression('name1', product1);
const impression2: mParticle.Impression = mParticle.eCommerce.createImpression('name2', product2);
const impression3: mParticle.Impression = mParticle.eCommerce.createImpression('name2', [product1, product2]);
console.log('Impression 1 Name', impression1.Name);
console.log('Impression 1 Product', impression1.Product);

const promotion1 = mParticle.eCommerce.createPromotion('id2');
const promotion2: mParticle.Promotion = mParticle.eCommerce.createPromotion('id1', 'creative', 'name', 1);
console.log('Promotion 1 ID', promotion1.Id);
console.log('Promotion 1 Creative', promotion1.Creative);
console.log('Promotion 1 Name', promotion1.Name);
console.log('Promotion 1 Position', promotion1.Position);

const transactionAttributes1: mParticle.TransactionAttributes =
    mParticle.eCommerce.createTransactionAttributes('TAid1');
const transactionAttributes2: mParticle.TransactionAttributes = mParticle.eCommerce.createTransactionAttributes(
    'TAid1',
    'aff1',
    'coupon',
    1798,
    10,
    5,
);

const clearCartBoolean = true;
const eCommerceCustomAttributes = { value: 10 };
const eCommerceCustomFlags = { CF1: 'key' };

mParticle.eCommerce.logCheckout(1);
mParticle.eCommerce.logCheckout(1, 'ok', eCommerceCustomAttributes, eCommerceCustomFlags);

mParticle.eCommerce.logProductAction(
    mParticle.ProductActionType.AddToCart,
    [product1, product2],
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);
mParticle.eCommerce.logProductAction(
    mParticle.ProductActionType.AddToWishlist,
    [product1, product2],
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);
mParticle.eCommerce.logProductAction(
    mParticle.ProductActionType.Checkout,
    [product1, product2],
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);
mParticle.eCommerce.logProductAction(
    mParticle.ProductActionType.CheckoutOption,
    [product1, product2],
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);
mParticle.eCommerce.logProductAction(
    mParticle.ProductActionType.Click,
    [product1, product2],
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);
mParticle.eCommerce.logProductAction(
    mParticle.ProductActionType.Purchase,
    [product1, product2],
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
    transactionAttributes1,
);
mParticle.eCommerce.logProductAction(
    mParticle.ProductActionType.Refund,
    [product1, product2],
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);
mParticle.eCommerce.logProductAction(
    mParticle.ProductActionType.RemoveFromCart,
    [product1, product2],
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);
mParticle.eCommerce.logProductAction(
    mParticle.ProductActionType.RemoveFromWishlist,
    [product1, product2],
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);
mParticle.eCommerce.logProductAction(
    mParticle.ProductActionType.Unknown,
    [product1, product2],
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);
mParticle.eCommerce.logProductAction(
    mParticle.ProductActionType.ViewDetail,
    [product1, product2],
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);

mParticle.eCommerce.logProductAction(300, [product1, product2], eCommerceCustomAttributes, eCommerceCustomFlags);

mParticle.eCommerce.logProductAction(
    300,
    [product1, product2],
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
    transactionAttributes1,
    eventOptions,
);

mParticle.eCommerce.logPurchase(
    transactionAttributes1,
    [product1, product2],
    clearCartBoolean,
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);

mParticle.eCommerce.logPromotion(mParticle.PromotionType.PromotionClick, promotion1);

mParticle.eCommerce.logPromotion(mParticle.PromotionType.PromotionClick, [promotion1, promotion2]);

mParticle.eCommerce.logPromotion(
    mParticle.PromotionType.PromotionView,
    promotion1,
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);
mParticle.eCommerce.logPromotion(
    mParticle.PromotionType.Unknown,
    promotion1,
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);
mParticle.eCommerce.logPromotion(
    mParticle.PromotionType.Unknown,
    promotion1,
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
    eventOptions,
);

mParticle.eCommerce.logImpression(impression1);
mParticle.eCommerce.logImpression([impression1, impression2]);
mParticle.eCommerce.logImpression(impression1, eCommerceCustomAttributes, eCommerceCustomFlags, eventOptions);

mParticle.eCommerce.logRefund(
    transactionAttributes1,
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

mParticle.Identity.login(identifyIdentities, result => {
    console.log(result.body.is_ephemeral);
    console.log(result.body.is_logged_in);
    console.log(result.body.matched_identities);
    const code = result.httpCode;
    const codes = window.mParticle.Identity.HTTPCodes;

    switch (code) {
        case codes.noHttpCoverage:
            break;
        case codes.activeIdentityRequest:
        case 429:
            break;
        case codes.validationIssue:
        case codes.activeSession:
        case codes.nativeIdentityRequest:
        case codes.loggingDisabledOrMissingAPIKey:
        case 400:
        case 200:
            console.log(result.body);
            break;
        default:
            console.log(result.body);
    }
    result.getUser().getConsentState();

    // alias users
    const userAliasObject: mParticle.UserAliasRequest = {
        destinationMpid: result.getPreviousUser().getMPID(),
        sourceMpid: result.getUser().getMPID(),
        startTime: new Date().getTime(),
        endTime: new Date().getTime(),
    };

    mParticle.Identity.aliasUsers(userAliasObject, result => {
        const httpCode: number = result.httpCode;
        const message: string = result.message;
    });

    const aliasRequest: mParticle.UserAliasRequest = mParticle.Identity.createAliasRequest(
        result.getPreviousUser(),
        result.getUser(),
    );

    result.getPreviousUser().getAllUserAttributes();
    const consentState: mParticle.ConsentState = result.getUser().getConsentState();
});

mParticle.Identity.logout(identifyIdentities, result => {
    console.log(result.body.is_ephemeral);
    console.log(result.body.is_logged_in);
    console.log(result.body.matched_identities);
    const code = result.httpCode;
    const codes = window.mParticle.Identity.HTTPCodes;

    switch (code) {
        case codes.noHttpCoverage:
            break;
        case codes.activeIdentityRequest:
        case 429:
            break;
        case codes.validationIssue:
        case codes.activeSession:
        case codes.nativeIdentityRequest:
        case codes.loggingDisabledOrMissingAPIKey:
        case 400:
        case 200:
            console.log(result.body);
            break;
        default:
            console.log(result.body);
    }
    result.getUser().getConsentState();

    // alias users
    const userAliasObject: mParticle.UserAliasRequest = {
        destinationMpid: result.getPreviousUser().getMPID(),
        sourceMpid: result.getUser().getMPID(),
        startTime: new Date().getTime(),
        endTime: new Date().getTime(),
    };

    mParticle.Identity.aliasUsers(userAliasObject, result => {
        const httpCode: number = result.httpCode;
        const message: string = result.message;
    });

    const aliasRequest: mParticle.UserAliasRequest = mParticle.Identity.createAliasRequest(
        result.getPreviousUser(),
        result.getUser(),
    );

    result.getPreviousUser().getAllUserAttributes();
    const consentState: mParticle.ConsentState = result.getUser().getConsentState();
});

// Logout Identity API Data can be an empty object with no callback
mParticle.Identity.logout({});
mParticle.Identity.logout(null);
mParticle.Identity.logout(undefined);
mParticle.Identity.logout();

mParticle.Identity.identify(identifyIdentities, result => {
    console.log(result.body.is_ephemeral);
    console.log(result.body.is_logged_in);
    console.log(result.body.matched_identities);
    const code = result.httpCode;
    const codes = window.mParticle.Identity.HTTPCodes;

    switch (code) {
        case codes.noHttpCoverage:
            break;
        case codes.activeIdentityRequest:
        case 429:
            break;
        case codes.validationIssue:
        case codes.activeSession:
        case codes.nativeIdentityRequest:
        case codes.loggingDisabledOrMissingAPIKey:
        case 400:
        case 200:
            console.log(result.body);
            break;
        default:
            console.log(result.body);
    }
    result.getUser().getConsentState();

    // alias users
    const userAliasObject: mParticle.UserAliasRequest = {
        destinationMpid: result.getPreviousUser().getMPID(),
        sourceMpid: result.getUser().getMPID(),
        startTime: new Date().getTime(),
        endTime: new Date().getTime(),
        scope: 'mpid',
    };

    mParticle.Identity.aliasUsers(userAliasObject, result => {
        const httpCode: number = result.httpCode;
        const message: string = result.message;
    });

    const aliasRequest: mParticle.UserAliasRequest = mParticle.Identity.createAliasRequest(
        result.getPreviousUser(),
        result.getUser(),
    );

    result.getPreviousUser().getAllUserAttributes();
    const consentState: mParticle.ConsentState = result.getUser().getConsentState();
});

mParticle.Identity.modify(identifyIdentities, result => {
    console.log(result.body.context);
    console.log(result.body.is_ephemeral);
    console.log(result.body.is_logged_in);
    console.log(result.body.matched_identities);
    const code = result.httpCode;
    const codes = window.mParticle.Identity.HTTPCodes;

    switch (code) {
        case codes.noHttpCoverage:
            break;
        case codes.activeIdentityRequest:
        case 429:
            break;
        case codes.validationIssue:
        case codes.activeSession:
        case codes.nativeIdentityRequest:
        case codes.loggingDisabledOrMissingAPIKey:
        case 400:
        case 200:
            console.log(result.body);
            break;
        default:
            console.log(result.body);
    }
    result.getUser().getConsentState();

    // alias users
    const userAliasObject: mParticle.UserAliasRequest = {
        destinationMpid: result.getPreviousUser().getMPID(),
        sourceMpid: result.getUser().getMPID(),
        startTime: new Date().getTime(),
        endTime: new Date().getTime(),
    };

    mParticle.Identity.aliasUsers(userAliasObject, result => {
        const httpCode: number = result.httpCode;
        const message: string = result.message;
    });

    const aliasRequest: mParticle.UserAliasRequest = mParticle.Identity.createAliasRequest(
        result.getPreviousUser(),
        result.getUser(),
    );

    result.getPreviousUser().getAllUserAttributes();
    const consentState: mParticle.ConsentState = result.getUser().getConsentState();
});

const user3: mParticle.User = mParticle.Identity.getCurrentUser();
const user4: mParticle.User = mParticle.Identity.getUser('mpid' as mParticle.MPID);

const identities: mParticle.IdentityApiData = mParticle.Identity.getCurrentUser().getUserIdentities();
const { email, customerid, facebook, other } = identities.userIdentities;
const mpid: mParticle.MPID = mParticle.Identity.getCurrentUser().getMPID();
const user5: mParticle.User = mParticle.Identity.getCurrentUser();
user5.setUserTag('tag');
user5.removeUserTag('tag');
user5.setUserAttribute('attr', 'value');
user5.setUserAttributes({
    attr: 'value',
    foo: 'bar',
});
user5.removeUserAttribute('attr');
user5.setUserAttributeList('hi', ['hello']);
user5.removeAllUserAttributes();
const userAttributesList: mParticle.AllUserAttributes = user5.getUserAttributesLists();
const userAttributes = user5.getAllUserAttributes();
const abc = 'abc';

if (Array.isArray(userAttributes['hi'])) {
    userAttributes['hi'].push('ok');
} else if (typeof userAttributes['hi'] === 'number') {
    userAttributes['hi'] += 1;
} else if (typeof userAttributes['hi'] === 'string') {
    userAttributes['hi'].slice();
}

const consent: mParticle.ConsentState = user5.getConsentState();
user5.setConsentState(consent);
const isLoggedIn: boolean = user5.isLoggedIn();
const lastSeenTime: number = user5.getLastSeenTime();
const firstSeenTime: number = user5.getFirstSeenTime();

user5.getCart().add(product1, true);
user5.getCart().remove(product1, true);
user5.getCart().clear();
