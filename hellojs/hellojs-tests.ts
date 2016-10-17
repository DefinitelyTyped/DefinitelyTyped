

hello.init({
    'facebook': '<app key>',
}, {
    redirect_uri: 'hello.html',
    display: 'page',
});

hello.init({
    facebook: '359288236870',
    windows: '000000004403AD10'
});

hello('facebook').login();

hello('facebook').logout();

hello.on('auth.login', auth => {
    alert('log to ' + auth.network);
}).on('auth.logout', auth => {
        alert('unlog from ' + auth.network);
    });

hello.getAuthResponse('facebook');

hello.login('facebook', null, () => {
    var req = hello.getAuthResponse('facebook');
});

hello.logout('facebook');

var serviceInfo = hello.service('facebook');

hello("facebook").api("me").success(function(json) {
    alert("Your name is " + json.name);
}).error(function () {
    alert("Whoops!");
});

var sessionstart = function () {
    alert("Session has started");
};
hello.on("auth.login", sessionstart);

hello.off("auth.login", sessionstart);

hello("facebook").login({ scope: "friends,photos,publish" });