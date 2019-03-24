(function() {
    var sm = new sn_ws.RESTMessageV2('<REST_message_record>', 'get');
    var response = sm.execute();
    var response = sm.executeAsync();
    response.waitForResponse(60);

    var endpoint = sm.getEndpoint();
    var body = sm.getRequestBody();
    var header = sm.getRequestHeader('Accept');
    var headers = sm.getRequestHeaders();

    sm.setBasicAuth('username', 'password');
    sm.setEccCorrelator('unique_identifier');
    sm.setEccParameter('source', 'http://very.long.endpoint.url');
    sm.setEndpoint('http://web.service.endpoint');
    sm.setHttpMethod('post');
    sm.setHttpTimeout(6000);
    sm.setLogLevel('all');
    sm.setMIDServer('mid_server_name');
    sm.setMutualAuth('mutual_auth_profile_name');
    sm.setQueryParameter('sysparm_query', 'active=true^ORDERBYnumber^ORDERBYDESCcategory');
    sm.setRequestHeader('Accept', 'Application/json');
    sm.setStringParameter('s', 'NOW');
    sm.setStringParameterNoEscape('s', 'NOW');

    var body = '<Message body content>';
    sm.setRequestBody(body);
})();
(function sampleRESTMessageV2() {
    try {
        var request = new sn_ws.RESTMessageV2();
        request.setHttpMethod('get');

        var attachment_sys_id = '<attachment_record_sys_id>',
            tablename = 'incident',
            recordSysId = '<incident_sys_id>',
            response,
            httpResponseStatus,
            filename = '<filename>';

        //endpoint - ServiceNow REST Attachment API
        request.setEndpoint(
            'https://<instance_name>.service-now.com/api/now/attachment/' +
                attachment_sys_id +
                '/file'
        );
        request.setBasicAuth('<username>', '<password>');

        //RESTMessageV2 - saveResponseBodyAsAttachment(String tableName, String recordSysId, String fileName)
        request.saveResponseBodyAsAttachment(tablename, recordSysId, filename);

        response = request.execute();
        httpResponseStatus = response.getStatusCode();

        gs.info(' http response status_code:  ' + httpResponseStatus);
    } catch (ex) {
        var message = ex.getMessage();
        gs.info(message);
    }
})();
(function() {
    var requestBody;
    var response;
    var responseBody;
    var status;
    var sm;
    try {
        // Might throw exception if message doesn't exist or not visible due to scope.
        sm = new sn_ws.RESTMessageV2('<REST_message_record>', 'get');

        //set auth profile to an OAuth 2.0 profile record.
        sm.setAuthenticationProfile('oauth2', '1234adsf123212131123qasdsf');

        sm.setStringParameter('symbol', 'NOW');
        sm.setStringParameterNoEscape('xml_data', '<data>test</data>');

        //In milliseconds. Wait at most 10 seconds for response from http request.
        sm.setHttpTimeout(10000);
        //Might throw exception if http connection timed out or some issue
        //with sending request itself because of encryption/decryption of password.
        response = sm.execute();
        responseBody = response.haveError() ? response.getErrorMessage() : response.getBody();
        status = response.getStatusCode();
    } catch (ex) {
        responseBody = ex.getMessage();
        status = '500';
    } finally {
        requestBody = sm ? sm.getRequestBody() : null;
    }
})();
(function sampleRESTMessageV2() {
    try {
        var request = new sn_ws.RESTMessageV2();
        request.setHttpMethod('post');
        request.setEndpoint('<web service endpoint URL>');
        request.setRequestBodyFromAttachment('<attachment sys_id>');

        var response = request.execute();
        var httpResponseStatus = response.getStatusCode();

        gs.info('http response status_code: ' + httpResponseStatus);
    } catch (ex) {
        var message = ex.getMessage();
        gs.info(message);
    }
})();
