/// <reference path="persona.d.ts" />


// https://developer.mozilla.org/en-US/docs/Web/API/navigator.id.watch
navigator.id.watch({
    loggedInUser: 'bob@example.org',
    onlogin: function(assertion: String) {},
    onlogout: function() {}
});
navigator.id.watch({
    loggedInUser: 'bob@example.org',
    onlogin: function(assertion: String) {},
    onlogout: function() {},
    onready: function() {}
});


// https://developer.mozilla.org/en-US/docs/Web/API/navigator.id.request
navigator.id.request();
navigator.id.request({siteName: 'Example Site', siteLogo: '/logo.png'});
navigator.id.request({termsOfService: '/tos.html', privacyPolicy: '/privacy.html'});
navigator.id.request({
    backgroundColor: '#rrggbb',
    siteName: 'My Example Site',
    siteLogo: '/logo.png',
    termsOfService: '/tos.html',
    privacyPolicy: '/privacy.html',
    returnTo: '/welcome.html',
    oncancel: function() {}
});


// https://developer.mozilla.org/en-US/docs/Web/API/navigator.id.logout
navigator.id.logout();


// https://developer.mozilla.org/en-US/docs/Web/API/navigator.id.get
var gotAssertion = function ( assertion: String ) {}
navigator.id.get(gotAssertion);
navigator.id.get(gotAssertion, {privacyPolicy: "/privacy.html", termsOfService: "/tos.html"});
navigator.id.get(gotAssertion, {
    backgroundColor: '#rrggbb',
    siteName: 'My Example Site',
    siteLogo: '/logo.png',
    termsOfService: '/tos.html',
    privacyPolicy: '/privacy.html'
});

