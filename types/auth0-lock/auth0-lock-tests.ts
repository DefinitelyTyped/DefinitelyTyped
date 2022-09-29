import * as auth0 from 'auth0-js';
import Auth0Lock, { Auth0LockPasswordless } from 'auth0-lock';

const CLIENT_ID = "YOUR_AUTH0_APP_CLIENTID";
const DOMAIN = "YOUR_DOMAIN_AT.auth0.com";

const lock: Auth0LockStatic = new Auth0Lock(CLIENT_ID, DOMAIN);

lock.show();
lock.hide();
lock.logout(() => {});

lock.checkSession({}, function(error: auth0.Auth0Error, authResult: AuthResult): void {
  if (error || !authResult) {
    lock.show();
  } else {
    // user has an active session, so we can use the accessToken directly.
    lock.getUserInfo(authResult.accessToken, function(error, profile) {
      console.log(error, profile);
    });
  }
});

lock.checkSession({
  access_token: undefined,
  connection_scope: undefined,
  device: undefined,
  nonce: undefined,
  protocol: undefined,
  request_id: undefined,
  scope: undefined,
  state: undefined,
  param: undefined
}, function(error: auth0.Auth0Error, authResult: AuthResult): void {
  if (error || !authResult) {
    lock.show();
  } else {
    // user has an active session, so we can use the accessToken directly.
    lock.getUserInfo(authResult.accessToken, function(error, profile) {
      console.log(error, profile);
    });
  }
});

// Show supports UI arguments

const showOptions : Auth0LockShowOptions = {
  allowedConnections: [ "twitter", "facebook" ],
  allowSignUp: true,
  allowForgotPassword: false,
  auth: {
    autoParseHash: true,
    params: { state: "foo" },
    redirect: true,
    redirectUrl: "some url",
    responseType: "token",
    sso: true
  },
  initialScreen: "login",
  flashMessage: {
    type: "error",
    text: "an error has occurred"
  },
  rememberLastLogin: false,
  languageDictionary: {
    title: "test"
  }
};

lock.show(showOptions);

// The examples below are lifted from auth0-lock documentation on Github

// "on" event-driven example

lock.on("authenticated", function(authResult: AuthResult) {
  lock.getProfile(authResult.idToken, function(error: auth0.Auth0Error, profile: auth0.Auth0UserProfile) {
    if (error) {
      // Handle error
      return;
    }

    localStorage.setItem("idToken", authResult.idToken);
    localStorage.setItem("profile", JSON.stringify(profile));
  });
});

lock.on("authenticated", function(authResult: AuthResult) {
  lock.getUserInfo(authResult.accessToken, function(error, profile) {
    if (error) {
      // Handle error
      return;
    }

    localStorage.setItem("idToken", authResult.idToken);
    localStorage.setItem("profile", JSON.stringify(profile));
  });
});

// "off" listener removal. Auth0 lock inherits this method from EventEmitter
// https://github.com/browserify/events/blob/48e3d18659caf72d94d319871106f089bb40002d/events.js#L321

lock.off('authenticated', (authResult) => {});

// test theme

const themeOptions : Auth0LockConstructorOptions = {
  theme: {
    authButtons: {
      fooProvider: {
        displayName: 'foo'
      },
      barProvider: {
        displayName: 'foo',
        primaryColor: '#FF0000',
        foregroundColor: '#00FF00',
        icon: 'http://baz.com/icon.png'
      }
    },
    hideMainScreenTitle: false,
    labeledSubmitButton: false,
    logo: "https://example.com/assets/logo.png",
    primaryColor: "green"
  }
};

new Auth0Lock(CLIENT_ID, DOMAIN, themeOptions);

// test empty theme

const themeOptionsEmpty : Auth0LockConstructorOptions = {
  theme: { }
};

new Auth0Lock(CLIENT_ID, DOMAIN, themeOptions);

// test authentication

const authOptions : Auth0LockConstructorOptions = {
  auth: {
   autoParseHash: true,
   params: { state: "foo" },
   redirect: true,
   redirectUrl: "some url",
   responseType: "token",
   sso: true
  }
};

new Auth0Lock(CLIENT_ID, DOMAIN, authOptions);

// test "other" properties

const otherOptions : Auth0LockConstructorOptions = {
  clientBaseUrl: "http://www.example.com",
  configurationBaseUrl: "https://cdn.auth0.com",
  languageBaseUrl: "http://www.example.com",
  hashCleanup: false,
  leeway: 30,
  _enableImpersonation: true,
  _enableIdPInitiatedLogin: false,
  defaultADUsernameFromEmailPrefix: false
};

new Auth0Lock(CLIENT_ID, DOMAIN, otherOptions);

// test multi-variant example

const multiVariantOptions : Auth0LockConstructorOptions = {
  container: "myContainer",
  closable: false,
  language: "en",
  languageDictionary: {
    signUpTerms: "I agree to the <a href='/terms' target='_new'>terms of service</a> ...",
    title: "My Company",
  },
  autoclose: true,
  autofocus: false,
  allowAutocomplete: false,
  scrollGlobalMessagesIntoView: false,
  allowShowPassword: true,
  allowPasswordAutocomplete: false,
};

new Auth0Lock(CLIENT_ID, DOMAIN, multiVariantOptions);

// test text-field additional sign up field

const textFieldOptions : Auth0LockConstructorOptions = {
  additionalSignUpFields: [{
    name: "address",
    placeholder: "enter your address",
    // The following properties are optional
    icon: "https://example.com/assests/address_icon.png",
    prefill: "street 123",
    validator: function(input : string) {
      return {
         valid: input.length >= 10,
         hint: "Must have 10 or more chars" // optional
      };
    }
  }]
};

new Auth0Lock(CLIENT_ID, DOMAIN, textFieldOptions);

// test select-field additional sign up field

const selectFieldOptions : Auth0LockConstructorOptions = {
  additionalSignUpFields: [{
    type: "select",
    name: "location",
    placeholder: "choose your location",
    options: [
      {value: "us", label: "United States"},
      {value: "fr", label: "France"},
      {value: "ar", label: "Argentina"}
    ],
    // The following properties are optional
    icon: "https://example.com/assests/location_icon.png",
    prefill: "us"
  }]
};

new Auth0Lock(CLIENT_ID, DOMAIN, selectFieldOptions);

// test select-field additional sign up field with callbacks for

const selectFieldOptionsWithCallbacks : Auth0LockConstructorOptions = {
  additionalSignUpFields: [{
    type: "select",
    name: "location",
    placeholder: "choose your location",
    options: function(cb) {
      // obtain options, in case of error you call cb with the error in the
      // first arg instead of null

      const options = [
        {value: "us", label: "United States"},
        {value: "fr", label: "France"},
        {value: "ar", label: "Argentina"}
      ];

      cb(null, options);
    },
    icon: "https://example.com/assests/location_icon.png",
    prefill: function(cb) {
      // obtain prefill, in case of error you call cb with the error in the
      // first arg instead of null

      const prefill = "us";

      cb(null, prefill);
    }
  }]
};

new Auth0Lock(CLIENT_ID, DOMAIN, selectFieldOptionsWithCallbacks);

// test checkbox-field additional sign up field

const checkboxFieldOptions : Auth0LockConstructorOptions = {
    additionalSignUpFields: [{
      type: "checkbox",
      name: "remember",
      placeholder: "Remember Me",
      prefill: "false"
    }]
  };

  new Auth0Lock(CLIENT_ID, DOMAIN, checkboxFieldOptions);

// test Avatar options

const avatarOptions : Auth0LockConstructorOptions = {
  avatar: {
    url: (email : string, cb : Auth0LockAvatarUrlCallback) => {
      // obtain url for email, in case of error you call cb with the error in
      // the first arg instead of null

      const url = "url";

      cb(null, url);
    },
    displayName: (email : string, cb : Auth0LockAvatarDisplayNameCallback) => {
      // obtain displayName for email, in case of error you call cb with the
      // error in the first arg instead of null

      const displayName = "displayName";

      cb(null, displayName);
    }
  }
};

new Auth0Lock(CLIENT_ID, DOMAIN, avatarOptions);

const authResultWithUndefined : AuthResult = {
    accessToken: 'fake_access_token',
    expiresIn: 7200,
    idToken: 'fake_id_token',
    idTokenPayload: {
      name: undefined,
      nickname: undefined,
      picture: undefined,
      email: undefined,
      email_verified: undefined,
      aud: "EaQzyHt1Dy57l-r5iHcMeT-lh1fFZntg",
      exp: 1494393724,
      iat: 1494357724,
      iss: "https://www.foo.com",
      sub: "auth0|aksjfkladsf",
      acr: undefined,
      amr: undefined
    },
    refreshToken: undefined,
    state: "923jf092j3.FFSDJFDSKLDF",
    tokenType: 'Bearer'
};

const authResultFilled : AuthResult = {
    accessToken: 'fake_access_token',
    expiresIn: 7200,
    idToken: 'fake_id_token',
    idTokenPayload: {
      name: "fake name",
      nickname: "fake nickname",
      picture: "https://www.fakeavatar.com/fake.png",
      email: "fake@fake.com",
      email_verified: true,
      aud: "EaQzyHt1Dy57l-r5iHcMeT-lh1fFZntg",
      exp: 1494393724,
      iat: 1494357724,
      iss: "https://www.foo.com",
      sub: "auth0|aksjfkladsf",
      acr: "http://schemas.openid.net/pape/policies/2007/06/multi-factor",
      amr: ["mfa"]
    },
    refreshToken: "refresh_token",
    state: "923jf092j3.FFSDJFDSKLDF",
    tokenType: 'Bearer'
};

new Auth0LockPasswordless(CLIENT_ID, DOMAIN); // $ExpectType Auth0LockPasswordlessStatic
