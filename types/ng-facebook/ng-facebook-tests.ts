

{
    let $facebookProvider: angular.ngFacebook.IFacebookProvider;

    $facebookProvider
        .setAppId("764262530321266")
        .setPermissions(["email", "user_friends"])
        .setPermissions("user_friends")
        .setCustomInit({
            xfbml: true
        })
        .setVersion("v2.2");

    let appId: string = $facebookProvider.getAppId();
    let version: string = $facebookProvider.getVersion();
    let permissions: string = $facebookProvider.getPermissions();
    let customInit: any = $facebookProvider.getCustomInit();
}

{
    let $facebook: angular.ngFacebook.IFacebookService;

    let customInit: facebook.InitParams = $facebook.config<facebook.InitParams>("customInit");
    let version: string = $facebook.config<string>("version");
    let appId: string = $facebook.config<string>("appId");

    $facebook.init();

    $facebook.setCache("key1", 123);
    $facebook.setCache<{ prop1: number }>("key2", { prop1: 456 });
    let cache: number = $facebook.getCache<number>("key");
    $facebook.clearCache();

    let isConnected: boolean = $facebook.isConnected();

    let authResponse: {} = $facebook.getAuthResponse();

    $facebook.getLoginStatus().then(status => { });
    $facebook.getLoginStatus(true).then(status => { });

    $facebook.logout().then(() => { });
    $facebook.login().then(() => { });

    $facebook.api("/me").then(user => { });
    $facebook.api("/me", "get");
    $facebook.api("/me", { param: 1 });
    $facebook.api("/me", "get", { param: 1 });

    $facebook.cachedApi("'/me/friends").then(friends => { });
}
