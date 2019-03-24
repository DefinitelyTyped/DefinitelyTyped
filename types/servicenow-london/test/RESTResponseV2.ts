(function() {
    var sm = new sn_ws.RESTMessageV2('<A REST message>', 'get');
    var response = sm.execute();
    var allHeaders = response.getAllHeaders();
    for (var header in allHeaders) {
        gs.info(allHeaders[header].name + ': ' + allHeaders[header].value);
    }
    var cookies = response.getCookies();
    for (var i = 0; i < cookies.size(); i++) {
        gs.info('cookie: ' + cookies.get(i));
    }
    var responseBody = response.getBody();
    var errorCode = response.getErrorCode();
    var errorMsg = response.getErrorMessage();
    var headerVal = response.getHeader('Content-Type');
    var headers = response.getHeaders();
    var queryString = response.getQueryString();
    var statusCode = response.getStatusCode();
    var error = response.haveError();
    var response = sm.executeAsync();
    response.waitForResponse(60);
})();
