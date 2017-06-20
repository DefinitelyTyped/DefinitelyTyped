import * as auth0 from 'auth0-js';
import Auth0Lock from 'auth0-lock';

const CLIENT_ID = "YOUR_AUTH0_APP_CLIENTID";
const DOMAIN = "YOUR_DOMAIN_AT.auth0.com";

var lock: Auth0LockStatic = new Auth0Lock(CLIENT_ID, DOMAIN);

lock.show();
lock.hide();
lock.logout(() => {});

// Show supports UI arguments

var showOptions : Auth0LockShowOptions = {
  allowedConnections: [ "twitter", "facebook" ],
  allowSignUp: true,
  allowForgotPassword: false,
  auth: {
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
  rememberLastLogin: false
};

lock.show(showOptions);

// The examples below are lifted from auth0-lock documentation on Github

// "on" event-driven example

lock.on("authenticated", function(authResult : any) {
  lock.getProfile(authResult.idToken, function(error: auth0.Auth0Error, profile: auth0.Auth0UserProfile) {
    if (error) {
      // Handle error
      return;
    }

    localStorage.setItem("idToken", authResult.idToken);
    localStorage.setItem("profile", JSON.stringify(profile));
  });
});

lock.on("authenticated", function(authResult : any) {
  lock.getUserInfo(authResult.accessToken, function(error, profile) {
    if (error) {
      // Handle error
      return;
    }

    localStorage.setItem("idToken", authResult.idToken);
    localStorage.setItem("profile", JSON.stringify(profile));
  });
});

// test theme

var themeOptions : Auth0LockConstructorOptions = {
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
    labeledSubmitButton: false,
    logo: "https://example.com/assets/logo.png",
    primaryColor: "green"
  }
};

new Auth0Lock(CLIENT_ID, DOMAIN, themeOptions);

// test empty theme

var themeOptionsEmpty : Auth0LockConstructorOptions = {
  theme: { }
};

new Auth0Lock(CLIENT_ID, DOMAIN, themeOptions);

// test authentication

var authOptions : Auth0LockConstructorOptions = {
  auth: {
   params: { state: "foo" },
   redirect: true,
   redirectUrl: "some url",
   responseType: "token",
   sso: true
  }
};

new Auth0Lock(CLIENT_ID, DOMAIN, authOptions);

// test multi-variant example

var multiVariantOptions : Auth0LockConstructorOptions = {
  container: "myContainer",
  closable: false,
  languageDictionary: {
    signUpTerms: "I agree to the <a href='/terms' target='_new'>terms of service</a> ...",
    title: "My Company",
  },
  autofocus: false
};

new Auth0Lock(CLIENT_ID, DOMAIN, multiVariantOptions);

// test text-field additional sign up field

var textFieldOptions : Auth0LockConstructorOptions = {
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

var selectFieldOptions : Auth0LockConstructorOptions = {
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

var selectFieldOptionsWithCallbacks : Auth0LockConstructorOptions = {
  additionalSignUpFields: [{
    type: "select",
    name: "location",
    placeholder: "choose your location",
    options: function(cb) {
      // obtain options, in case of error you call cb with the error in the
      // first arg instead of null

      let options = [
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

      let prefill = "us";

      cb(null, prefill);
    }
  }]
};

new Auth0Lock(CLIENT_ID, DOMAIN, selectFieldOptionsWithCallbacks);

// test Avatar options

var avatarOptions : Auth0LockConstructorOptions = {
  avatar: {
    url: (email : string, cb : Auth0LockAvatarUrlCallback) => {
      // obtain url for email, in case of error you call cb with the error in
      // the first arg instead of null

      let url = "url";

      cb(null, url);
    },
    displayName: (email : string, cb : Auth0LockAvatarDisplayNameCallback) => {
      // obtain displayName for email, in case of error you call cb with the
      // error in the first arg instead of null

      let displayName = "displayName";

      cb(null, displayName);
    }
  }
};

new Auth0Lock(CLIENT_ID, DOMAIN, avatarOptions);

var authResult : AuthResult = {
    accessToken: 'fake_access_token',
    idToken: 'fake_id_token',
    idTokenPayload: {
      aud: "EaQzyHt1Dy57l-r5iHcMeT-lh1fFZntg",
      exp: 1494393724,
      iat: 1494357724,
      iss: "https://www.foo.com",
      sub: "auth0|aksjfkladsf"
    },
    refreshToken: undefined,
    state: "923jf092j3.FFSDJFDSKLDF"
};
