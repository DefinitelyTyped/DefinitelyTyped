(function() {
    var sm = new sn_ws.SOAPMessageV2();
    sm = new sn_ws.SOAPMessageV2('StockQuote', 'GetQuote');
    var response = sm.execute();
    response = sm.executeAsync();
    var endpoint = sm.getEndpoint();
    var requestBody = sm.getRequestBody();
    var header = sm.getRequestHeader('Accept');
    var requestHeaders = sm.getRequestHeaders();
    sm.setBasicAuth('username', 'password');
    sm.setEccCorrelator('unique_id');
    sm.setEccParameter('source', 'http://very.long.endpoint');
    sm.setEndpoint('http://web.service.endpoint');
    sm.setHttpTimeout(6000);
    sm.setMutualAuth('auth_profile_name');
    var body = '<SOAP message body>';
    sm.setRequestBody(body);
    sm.setRequestHeader('Accept', 'Application/json');
    sm.setSOAPAction('GetQuote');
    sm.setStringParameter('symbol', 'NOW');
    sm.setStringParameterNoEscape('symbol', 'NOW');
    sm.setWSSecurity(
        '70d65e074f3812001f6eac118110c71a',
        'Quote keys',
        'UXr82cqX75Z7MaSa+EyjGA==',
        'ba969a074f3812001f6eac118110c76d'
    );
})();
