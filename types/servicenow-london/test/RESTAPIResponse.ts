function testRESTAPIResponse(response: sn_ws.RESTAPIResponse) {
    response.setContentType('application/json');
    response.setStatus(200);
    var writer = response.getStreamWriter();

    var body: any = {};
    body.name = 'incident';
    body.number = '1234';
    body.caller = { id: 'user1' };
    response.setBody(body);

    var bodyArray = [];
    body = {};
    body.name = 'incident';
    body.number = '1234';
    body.caller = { id: 'user1' };
    bodyArray.push(body);
    response.setBody(bodyArray);

    response.setHeader('Location', '<URI>');

    var headers: any = {};
    headers['X-Total-Count'] = 100;
    headers.Location = 'https://instance.service-now.com/<endpoint_to_resource>';
    response.setHeaders(headers);

    response.setStatus(200);
}
