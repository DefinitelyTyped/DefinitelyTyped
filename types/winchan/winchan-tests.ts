import WinChan from "winchan";

WinChan.open({
    url: "http://trusted.host/dialog.html",
    relay_url: "http://trusted.host/relay.html",
    window_features: "menubar=0,location=0,resizable=0,scrollbars=0,status=0,dialog=1,width=700,height=375",
    params: {
        these: "things",
        are: "input parameters",
    },
}, function(err, r) {
});

WinChan.onOpen(function(origin, args, cb) {
    cb({
        "these things": "are the response",
    });
});
