

facebookConnectPlugin.api("a", ["b", "c"]);
facebookConnectPlugin.api("a", ["b", "c"], (result: any) => {});
facebookConnectPlugin.api("a", ["b", "c"], (result: any) => {}, (error: string) => {});

facebookConnectPlugin.getAccessToken((token: string) => {});
facebookConnectPlugin.getAccessToken((token: string) => {}, (error: string) => {});

facebookConnectPlugin.getLoginStatus();
facebookConnectPlugin.getLoginStatus((status: PhonegapFacebookPlugin.LoginResult) => {
    var accessToken: string = status.authResponse.accessToken;
    var expiresIn: string = status.authResponse.expiresIn;
    var secret: string = status.authResponse.secret;
    var session_key: boolean = status.authResponse.session_key;
    var sig: string = status.authResponse.sig;
    var userID: string = status.authResponse.userID;
    var status1: string = status.status;
}, (error: string) => {});

facebookConnectPlugin.logEvent("a");
facebookConnectPlugin.logEvent("a", {});
facebookConnectPlugin.logEvent("a", {}, 42);
facebookConnectPlugin.logEvent("a", {}, 42, () => {});
facebookConnectPlugin.logEvent("a", {}, 42, () => {}, (error: string) => {});

facebookConnectPlugin.logPurchase(42, "a");
facebookConnectPlugin.logPurchase(42, "a", () => {});
facebookConnectPlugin.logPurchase(42, "a", () => {}, (error: string) => {});

facebookConnectPlugin.login(["a", "b"], (result: PhonegapFacebookPlugin.LoginResult) => {
    var accessToken: string = result.authResponse.accessToken;
    var expiresIn: string = result.authResponse.expiresIn;
    var secret: string = result.authResponse.secret;
    var session_key: boolean = result.authResponse.session_key;
    var sig: string = result.authResponse.sig;
    var userID: string = result.authResponse.userID;
    var status: string = result.status;
}, (error: string) => {});

facebookConnectPlugin.logout();
facebookConnectPlugin.logout(() => {});
facebookConnectPlugin.logout(() => {}, (error: string) => {});

//#region BaseDialog

var baseDialogOptions: PhonegapFacebookPlugin.BaseDialogOptions = {
    method: "a"
};

facebookConnectPlugin.showDialog(baseDialogOptions, (status: PhonegapFacebookPlugin.BaseDialogResult) => {}, (error: string) => {});

//#endregion

//#region Feed Dialog

var feedDialogOptions: PhonegapFacebookPlugin.FeedDialogOptions = {
    method: "feed",
    from: "a",
    to: "b",
    link: "c",
    picture: "d",
    source: "e",
    name: "f",
    caption: "g",
    description: "h",
    ref: "i"
};

facebookConnectPlugin.showDialog(feedDialogOptions, (status: PhonegapFacebookPlugin.FeedDialogResult) => {
    var post_id: string = status.post_id;
}, (error: string) => {});

//#endregion

//#region Send Dialog

var sendDialogOptions: PhonegapFacebookPlugin.SendDialogOptions = {
    method: "send",
    to: "a",
    link: "b"
};

facebookConnectPlugin.showDialog(sendDialogOptions, (status: PhonegapFacebookPlugin.SendDialogResult) => {
}, (error: string) => {});

//#endregion

//#region Share Dialog

var shareDialogOptions: PhonegapFacebookPlugin.ShareDialogOptions = {
    method: "share",
    href: "a"
};

facebookConnectPlugin.showDialog(shareDialogOptions, (status: PhonegapFacebookPlugin.ShareDialogResult) => {
    var post_id: string = status.post_id;
}, (error: string) => {});

//#endregion

//#region Share Open Graph Dialog

var shareOpenGraphDialogOptions: PhonegapFacebookPlugin.ShareOpenGraphDialogOptions = {
    method: "share_open_graph",
    action_type: "a",
    action_properties: "b"
};

facebookConnectPlugin.showDialog(shareOpenGraphDialogOptions, (status: PhonegapFacebookPlugin.ShareDialogResult) => {
    var post_id: string = status.post_id;
}, (error: string) => {});

//#endregion