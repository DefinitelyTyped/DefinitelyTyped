
window.fbAsyncInit = function() {
    FB.init(
        {
            appId      : "{your-app-id}",
            xfbml      : true,
            version    : "v2.0"
        }
    );

    FB.ui(
        {
            method: "share",
            href: "https://developers.facebook.com/docs/dialogs/"
        },
        function(response) {
            console.log(response);
        }
    );

    FB.api(
        "/me",
        "post",
        function (fbResponse) {
            console.log(fbResponse);
        }
    );

    function checkAuth(response: FB.LoginStatusResponse): void {
        if (response.status === "connected") {
            console.log(response.authResponse.accessToken);
            console.log(response.authResponse.expiresIn);
            console.log(response.authResponse.signedRequest);
            console.log(response.authResponse.userID);
        } else if (response.status === "unknown") {
            console.log("not logged in");
        }
    }

    FB.login(checkAuth);

    FB.getLoginStatus(checkAuth);
};