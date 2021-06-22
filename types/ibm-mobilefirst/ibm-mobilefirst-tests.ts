// Tests

// Test WL.Client
WL.Client.connect({
    onSuccess: function (response: WL.ResponseBase) {
        var title: string = response.responseJSON["title"];
        console.log(response.status + ' ' + title);
    },
    onFailure: function (response: WL.FailureResponse) {
    },
    timeout: 30
});

WL.Client.invokeProcedure({ adapter: "", procedure: ""}).then(function(response) {
    response.responseJSON;
}, function(response) {
    response.status;
});

// Test WL.Device
WL.Device.getNetworkInfo(function(networkInfo) {
    var addrs = networkInfo.Ipv4Addresses;
    addrs[0].wifiAddress;
})

// Test user delete certificate
WL.UserAuth.deleteCertificate("entity").then(function() {
    console.log('WL.UserAuth.deleteCertificate success');
}, function(error: string) {
    console.log('WL.UserAuth.deleteCertificate failure ' + error);
});

// Test Auhorization Manager
var xhr = new XMLHttpRequest();
WLAuthorizationManager.addCachedAuthorizationHeader(xhr).always(
    function(response: WLAuthorizationManager.RequestObject) {
        // success or failure flow
    }
);
WLAuthorizationManager.getAppIdentity().then(function(data) {
    // success flow with application identity
}, function(error: string) {
    // failure flow with error
});
WLAuthorizationManager.getCachedAuthorizationHeader().then(function(response) {
    // success flow
}, function(error) {
    // error flow
});
WLAuthorizationManager.getDeviceIdentity().then(function(data) {
    // success flow with device identity
}, function(error) {
    // failure flow with error
});

// Test WL.JSONStore
var arr: any[];
arr = WL.JSONStore.QueryPart().between('gpa', [3.0, 4.0]);
    //arr = [{$between: [{ gpa : [3.0, 4.0] }]}]
arr = WL.JSONStore.QueryPart().equal('age', 35);
    //arr = [{$equal: [{ age : 35 }]}]
arr = WL.JSONStore.QueryPart().greaterOrEqualThan('age', 40);
    //arr = [{$greaterOrEqualThan: [{ age : 40 }]}]
arr = WL.JSONStore.QueryPart().greaterThan('age', 40);
    //arr = [{$greaterThan: [{ age : 40 }]}]
arr = WL.JSONStore.QueryPart().inside('gpa', [3.0, 4.0]);
    //arr = [{$inside: [{ gpa : [3.0, 4.0] }]}]
arr = WL.JSONStore.QueryPart().leftLike('name', 'ca');
    //arr = [{$leftLike: [{ name : 'ca' }]}]
arr = WL.JSONStore.QueryPart().lessOrEqualThan('age', 40);
    //arr = [{$lessOrEqualThan: [{ age : 40 }]}]
arr = WL.JSONStore.QueryPart().lessThan('age', 40);
    //arr = [{$lessThan: [{ age : 40 }]}]
arr = WL.JSONStore.QueryPart().like('name', 'ca');
    //arr = [{$like: [{ name : 'ca' }]}]
arr = WL.JSONStore.QueryPart().notBetween('gpa', [3.0, 4.0]);
    //arr = [{$notBetween: [{ gpa : [3.0, 4.0] }]}]
arr = WL.JSONStore.QueryPart().notEqual('name', 'ca');
    //arr = [{$notEqual: [{ name : 'ca' }]}]

// Test WL.Logger
WL.Logger.config();
var logger = WL.Logger.create({pkg: 'myapp'});
logger.debug('Hello world');
logger.error('Hello world');
logger.fatal('Hello world');
logger.info('Hello world');
logger.trace('Hello world');
logger.warn('Hello world');
WL.Logger.ctx({pkg: 'hello'}).debug('Hello world'); //Package name context passed
WL.Logger.debug('Hello world');
WL.Logger.error('Hello world');
WL.Logger.fatal('Hello world');
WL.Logger.info('Hello world');
WL.Logger.log('Hello world');
WL.Logger.trace('Hello world');
WL.Logger.warn('Hello world');
WL.Logger.metadata( { hi : 'world' } ).info('hello');
WL.Logger.setNativeOptions({
        maxFileSize : 100000,
        level : 'debug',
        capture : true,
        filters : { jsonstore : 'debug' }
    });
WL.Logger.status().then(function (state) {
    //{ enabled : true, stringify: true, filters : {},
    // level : 'info', pkg : '', tag: {level: false, pkg: true} }
}).fail(function (errMsg) {
    //errMsg = error message
});

// Test WL.SecurityUtils
WL.SecurityUtils.base64Encode('input string').then(function(result: string) {
    console.log('Base64 Encoded: ' + result);
}, function() {
    console.log('An error occurred');
});

// Test WL.SimpleDialog
WL.SimpleDialog.show(
    'My Title', 'My Text', [{
        text: 'First Button',
        handler: function() {
            WL.Logger.debug("First button pressed");
        }
    }]);

// Test WL.TabBar
// iOS
var creditTab = WL.TabBar.addItem("CREDIT", function() {
    alert("the CREDIT tab was selected!");
}, "Visa", {
    image:"images/credit.png",
    badge: "2"
});
creditTab.setEnabled(false);
creditTab.updateBadge("3");
creditTab.updateBadge(null);
// Android
var tabFeeds = WL.TabBar.addItem ('tab2', function() {
    console.log('handler');
}, 'Engadget Feeds', {
    image: 'images/feed.png',
    imageSelected: 'images/feed.png'
});
tabFeeds.setEnabled(true);

// Test WLResourceRequest
var request1 = new WLResourceRequest('/adapters/sampleAdapter/multiplyNumbers', WLResourceRequest.GET);
request1.setQueryParameter('params', [5, 6]);
request1.send().then(function(response: WL.Response) {
    console.log('Success ' + response.responseJSON);
}, function(error: WL.ResponseBase) {
    console.log('Error ' + error.errorCode + ' ' + error.errorMsg);
});
var request2 = new WLResourceRequest('url', WLResourceRequest.POST, 30000);
request2.send('content').then(function(response: WL.Response) {
    console.log('Success ' + response.responseJSON);
}, function(error: WL.ResponseBase) {
    console.log('Error ' + error.errorCode + ' ' + error.errorMsg);
});
var request3 = new WLResourceRequest('url', 'METHOD',  50000);
request3.send({ data: 'content', more_data: 'more_content' }).then(function(response: WL.Response) {
    console.log('Success ' + response.responseJSON);
}, function(error: WL.ResponseBase) {
    console.log('Error ' + error.errorCode + ' ' + error.errorMsg);
});
