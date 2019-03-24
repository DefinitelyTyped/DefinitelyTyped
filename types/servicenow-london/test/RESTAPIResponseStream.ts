function testRESTAPIResponseStream(response: sn_ws.RESTAPIResponse, attachmentStream: any) {
    response.setContentType('application/json');
    response.setStatus(200);
    var writer = response.getStreamWriter();
    writer.writeStream(attachmentStream);

    response.setContentType('application/json');
    response.setStatus(200);
    var writer = response.getStreamWriter();
    var body: any = {
        name: 'user1',
        id: 1234,
        roles: [{ name: 'admin' }, { name: 'itil' }]
    };
    writer.writeString("{'name':'user','id':'1234'}");
    writer.writeString(JSON.stringify(body));
}
