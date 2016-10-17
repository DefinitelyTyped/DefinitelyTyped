function test_cordova_plugin_ms_adal() {
    var testConfiguration = {
        authority: 'https://login.microsoftonline.com/testtenant.onmicrosoft.com',
        resourceUrl: 'https://graph.windows.net/',
        clientId: '12345678-1234-1234-1234-123456789abc',
        redirectUrl: 'http://app.testtenant.onmicrosoft.com'
    };

    // create AuthenticationContext
    Microsoft.ADAL.AuthenticationContext.createAsync(testConfiguration.authority)
        .then((context) => {

            context.tokenCache.readItems().then((cacheItems) => {
                if (cacheItems.length >= 1) {
                    var testUserId: string;
                    testUserId = cacheItems[0].userInfo.userId;

                    context.acquireTokenSilentAsync(testConfiguration.resourceUrl, testConfiguration.clientId, testUserId).then((authResult) => {
                        console.log("Silently acquired token successfully");
                    }, (err) => {
                        console.log("Failed to acquire token silently " + JSON.stringify(err));
                    });
                }
                else {

                    context.acquireTokenAsync(testConfiguration.resourceUrl, testConfiguration.clientId, testConfiguration.redirectUrl)
                        .then((authResult) => {
                            console.log("Acquired token successfully");
                        }, (err) => {
                            console.log("Failed to acquire token " + JSON.stringify(err));
                        });
                }
            });
            
            // clear TokenCache
            context.tokenCache.clear();

        }, (message) => {
            console.log(message);
        });


}

