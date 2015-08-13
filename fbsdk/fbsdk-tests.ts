/// <reference path="fbsdk.d.ts" />

window.fbAsyncInit = function() {
	FB.init(
		{
			appId      : '{your-app-id}',
			xfbml      : true,
			version    : 'v2.0'
		}
	);

	FB.ui(
		{
			method: 'share',
			href: 'https://developers.facebook.com/docs/dialogs/'
		},
		function(response) {
			console.log(response);
		}
	);

	FB.api(
		"/me",
		"POST",
		function (fbResponse){
			console.log(fbResponse);
		}
	);
};