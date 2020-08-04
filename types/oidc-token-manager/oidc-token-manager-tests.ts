

var config = {
    client_id: "implicitclient",
    redirect_uri: window.location.protocol + "//" + window.location.host + "/callback.html",
    post_logout_redirect_uri: window.location.protocol + "//" + window.location.host + "/index.html",
    response_type: "id_token token",
    scope: "openid profile email read write",
    authority: "https://localhost:44333/core",
    silent_redirect_uri: window.location.protocol + "//" + window.location.host + "/frame.html",
    popup_redirect_uri: window.location.protocol + "//" + window.location.host + "/popup.html",
    silent_renew: true
};
var mgr = new OidcTokenManager(config);
if (!mgr.expired) {
    console.log("Token loaded, expires in: ", mgr.expires_in);
    console.log("profile", mgr.profile);
    console.log("access_token", !!mgr.access_token);
}
else {
    console.log("No token loaded");
}
mgr.addOnTokenObtained(function () {
    console.log("token obtained, scopes: ", mgr.scopes);
});
mgr.addOnTokenRemoved(function () {
    console.log("token removed");
});
mgr.addOnTokenExpiring(function () {
    console.log("token is about to expire");
    //mgr.renewTokenSilent();
});
mgr.addOnTokenExpired(function () {
    console.log("token expired");
});
    mgr.redirectForToken();
    mgr.openPopupForTokenAsync().then(function () {
        console.log('popup success');
    }, function (err) {
        console.log('popup error: ', err);
    });
    mgr.removeToken();
    mgr.redirectForLogout();
function toggleForget() {
}
mgr.addOnTokenObtained(toggleForget);
mgr.addOnTokenRemoved(toggleForget);
