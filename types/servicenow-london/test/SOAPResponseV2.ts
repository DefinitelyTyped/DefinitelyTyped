(function() {
    var r = new sn_ws.SOAPMessageV2('<A SOAP message>', 'get');
    var response = r.execute();
    var allHeaders = response.getAllHeaders();
    for (var h in allHeaders) {
        gs.info(allHeaders[h].name + ': ' + allHeaders[h].value);
    }
    var body = response.getBody();
    var cookies = response.getCookies();
    for (var i = 0; i < cookies.size(); i++) {
        gs.info('cookie: ' + cookies.get(i));
    }
    var errorCode = response.getErrorCode();
    var errorMsg = response.getErrorMessage();
    var headerVal = response.getHeader("Accept");
    var headers = response.getHeaders();
    var statusCode = response.getStatusCode();
    var error = response.haveError();
    response.waitForResponse(60);
})();
