import mParticle = require('@mparticle/web-sdk');
import { Batch } from '@mparticle/event-models';

const instance = mParticle.getInstance('default');

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
    onCreateBatch,
    dataPlan,
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

instance.endSession();

instance.getAppName();

instance.getAppVersion();

instance.getDeviceId();

instance.getVersion();

instance.init('apiKey', config);
instance.init('apiKey', config, 'instance');

instance.isInitialized();

instance.logBaseEvent({
    data: {},
    name: 'baseEventName',
    messageType: 1,
    eventType: 1,
});
instance.logBaseEvent(
    {
        data: {},
        name: 'baseEventName',
        messageType: 1,
        eventType: 1,
    },
    eventOptions,
);

instance.logError('Login Failed', customAttrs);
instance.logError(
    {
        name: 'error',
        message: 'errorMessage',
        stack: 'errorStack',
    },
    customAttrs,
);

instance.logEvent('eventName');
instance.logEvent('eventName', instance.EventType.Location);
instance.logEvent('eventName', instance.EventType.Location, customAttrs);
instance.logEvent('eventName', instance.EventType.Location, customAttrs, customFlags);
instance.logEvent('eventName', mParticle.EventType.Location, customAttrs, customFlags, eventOptions);

instance.logForm('click', 'eventName');
instance.logForm('click', 'eventName', instance.EventType.Location);
instance.logForm('click', 'eventName', instance.EventType.Location, customAttrs);

instance.logLink('click', 'eventName');
instance.logLink('click', 'eventName', instance.EventType.Location);
instance.logLink('click', 'eventName', instance.EventType.Location, customAttrs);

instance.logPageView();
instance.logPageView('pageName');
instance.logPageView('pageName', customAttrs);
instance.logPageView('pageName', customAttrs, customFlags);
instance.logPageView('pageName', customAttrs, customFlags, eventOptions);

instance.ready(() => {
    console.log('hi');
});

instance.reset();

instance.setAppName('appName');

instance.setAppVersion('1.0.0');

instance.setDeviceId('foo-uuid-v4');

instance.setIntegrationAttribute(123, { key: 'value' });

instance.getIntegrationAttributes(123);

instance.setLogLevel('verbose');
instance.setLogLevel('none');
instance.setLogLevel('warning');

instance.setOptOut(true);

instance.setPosition(1, 2);

instance.setSessionAttribute('key1', 'value1');
instance.setSessionAttribute('key2', 2);
instance.setSessionAttribute('key3', false);
instance.setSessionAttribute('key4', null);

instance.startNewSession();

instance.startTrackingLocation();
instance.startTrackingLocation(location => {
    console.log(location.coords.latitude);
    console.log(location.coords.longitude);
});

instance.stopTrackingLocation();

instance.upload();

instance.sessionManager.getSession();

// CONSENT START
const user: mParticle.User = instance.Identity.getCurrentUser();

const ccpaConsent: mParticle.CCPAConsentState = instance.Consent.createCCPAConsent(
    true,
    new Date().getTime(),
    'consentDocument',
    'location',
    'hardware',
);
const gdprConsent = instance.Consent.createGDPRConsent(
    true,
    new Date().getTime(),
    'consentDocument',
    'location',
    'hardware',
);

let consentState: mParticle.ConsentState = instance.Consent.createConsentState();

consentState.addGDPRConsentState('generalConsent', gdprConsent);
consentState.setCCPAConsentState(ccpaConsent);
user.setConsentState(consentState);

const ccpaConsentState: mParticle.CCPAConsentState = consentState.getCCPAConsentState();
user.setConsentState(consentState);

// Remove consent state
consentState = user.getConsentState();
const gdprConsentState: mParticle.GDPRConsentState = consentState.getGDPRConsentState();

const user2 = instance.Identity.getCurrentUser();
user2.getConsentState().setGDPRConsentState(gdprConsentState);

consentState.removeGDPRConsentState('generalConsent');
consentState.removeCCPAConsentState();
user.setConsentState(consentState);

// CONSENT END

// ECOMMERCE START

const product1: mParticle.Product = instance.eCommerce.createProduct(
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
const product2: mParticle.Product = instance.eCommerce.createProduct('product2', 'sku2', 20);
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

const impression1: mParticle.Impression = instance.eCommerce.createImpression('name1', product1);
const impression2: mParticle.Impression = instance.eCommerce.createImpression('name2', product2);
const impression3: mParticle.Impression = instance.eCommerce.createImpression('name2', [product1, product2]);
console.log('Impression 1 Name', impression1.Name);
console.log('Impression 1 Product', impression1.Product);

const promotion1 = instance.eCommerce.createPromotion('id2');
const promotion2: mParticle.Promotion = instance.eCommerce.createPromotion('id1', 'creative', 'name', 1);
console.log('Promotion 1 ID', promotion1.Id);
console.log('Promotion 1 Creative', promotion1.Creative);
console.log('Promotion 1 Name', promotion1.Name);
console.log('Promotion 1 Position', promotion1.Position);

const transactionAttributes1: mParticle.TransactionAttributes = instance.eCommerce.createTransactionAttributes('TAid1');
const transactionAttributes2: mParticle.TransactionAttributes = instance.eCommerce.createTransactionAttributes(
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

instance.eCommerce.logCheckout(1);
instance.eCommerce.logCheckout(1, 'ok', eCommerceCustomAttributes, eCommerceCustomFlags);

instance.eCommerce.logProductAction(
    instance.ProductActionType.AddToCart,
    [product1, product2],
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);
instance.eCommerce.logProductAction(
    instance.ProductActionType.AddToWishlist,
    [product1, product2],
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);
instance.eCommerce.logProductAction(
    instance.ProductActionType.Checkout,
    [product1, product2],
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);
instance.eCommerce.logProductAction(
    instance.ProductActionType.CheckoutOption,
    [product1, product2],
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);
instance.eCommerce.logProductAction(
    instance.ProductActionType.Click,
    [product1, product2],
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);
instance.eCommerce.logProductAction(
    instance.ProductActionType.Purchase,
    [product1, product2],
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
    transactionAttributes1,
);
instance.eCommerce.logProductAction(
    instance.ProductActionType.Refund,
    [product1, product2],
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);
instance.eCommerce.logProductAction(
    instance.ProductActionType.RemoveFromCart,
    [product1, product2],
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);
instance.eCommerce.logProductAction(
    instance.ProductActionType.RemoveFromWishlist,
    [product1, product2],
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);
instance.eCommerce.logProductAction(
    instance.ProductActionType.Unknown,
    [product1, product2],
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);
instance.eCommerce.logProductAction(
    instance.ProductActionType.ViewDetail,
    [product1, product2],
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);

instance.eCommerce.logProductAction(300, [product1, product2], eCommerceCustomAttributes, eCommerceCustomFlags);

instance.eCommerce.logProductAction(
    300,
    [product1, product2],
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
    transactionAttributes1,
    eventOptions,
);

instance.eCommerce.logPurchase(
    transactionAttributes1,
    [product1, product2],
    clearCartBoolean,
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);

instance.eCommerce.logPromotion(instance.PromotionType.PromotionClick, promotion1);

instance.eCommerce.logPromotion(instance.PromotionType.PromotionClick, [promotion1, promotion2]);

instance.eCommerce.logPromotion(
    instance.PromotionType.PromotionView,
    promotion1,
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);
instance.eCommerce.logPromotion(
    instance.PromotionType.Unknown,
    promotion1,
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);
instance.eCommerce.logPromotion(
    instance.PromotionType.Unknown,
    promotion1,
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
    eventOptions,
);

instance.eCommerce.logImpression(impression1);
instance.eCommerce.logImpression([impression1, impression2]);
instance.eCommerce.logImpression(impression1, eCommerceCustomAttributes, eCommerceCustomFlags, eventOptions);

instance.eCommerce.logRefund(
    transactionAttributes1,
    [product1, product2],
    clearCartBoolean,
    eCommerceCustomAttributes,
    eCommerceCustomFlags,
);

instance.eCommerce.setCurrencyCode('usd');
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

instance.Identity.login(identifyIdentities, result => {
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

    instance.Identity.aliasUsers(userAliasObject, result => {
        const httpCode: number = result.httpCode;
        const message: string = result.message;
    });

    const aliasRequest: mParticle.UserAliasRequest = instance.Identity.createAliasRequest(
        result.getPreviousUser(),
        result.getUser(),
    );

    result.getPreviousUser().getAllUserAttributes();
    const consentState: mParticle.ConsentState = result.getUser().getConsentState();
});

instance.Identity.logout(identifyIdentities, result => {
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

    instance.Identity.aliasUsers(userAliasObject, result => {
        const httpCode: number = result.httpCode;
        const message: string = result.message;
    });

    const aliasRequest: mParticle.UserAliasRequest = instance.Identity.createAliasRequest(
        result.getPreviousUser(),
        result.getUser(),
    );

    result.getPreviousUser().getAllUserAttributes();
    const consentState: mParticle.ConsentState = result.getUser().getConsentState();
});

// Logout Identity API Data can be an empty object with no callback
instance.Identity.logout({});
instance.Identity.logout(null);
instance.Identity.logout(undefined);
instance.Identity.logout();

instance.Identity.identify(identifyIdentities, result => {
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

    instance.Identity.aliasUsers(userAliasObject, result => {
        const httpCode: number = result.httpCode;
        const message: string = result.message;
    });

    const aliasRequest: mParticle.UserAliasRequest = instance.Identity.createAliasRequest(
        result.getPreviousUser(),
        result.getUser(),
    );

    result.getPreviousUser().getAllUserAttributes();
    const consentState: mParticle.ConsentState = result.getUser().getConsentState();
});

instance.Identity.modify(identifyIdentities, result => {
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

    instance.Identity.aliasUsers(userAliasObject, result => {
        const httpCode: number = result.httpCode;
        const message: string = result.message;
    });

    const aliasRequest: mParticle.UserAliasRequest = instance.Identity.createAliasRequest(
        result.getPreviousUser(),
        result.getUser(),
    );

    result.getPreviousUser().getAllUserAttributes();
    const consentState: mParticle.ConsentState = result.getUser().getConsentState();
});

const user3: mParticle.User = instance.Identity.getCurrentUser();
const user4: mParticle.User = instance.Identity.getUser('mpid' as mParticle.MPID);

const identities: mParticle.IdentityApiData = mParticle.Identity.getCurrentUser().getUserIdentities();
const { email, customerid, facebook, other } = identities.userIdentities;
const mpid: mParticle.MPID = instance.Identity.getCurrentUser().getMPID();
const user5: mParticle.User = instance.Identity.getCurrentUser();
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
