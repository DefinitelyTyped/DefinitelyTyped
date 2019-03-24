function testRESTAPIRequest(request: sn_ws.RESTAPIRequest) {
    var entry;
    var id;
    var requestBody = request.body;
    var requestData = requestBody.data;
    if (requestData instanceof Array) {
        entry = requestData[0].name;
        id = requestData[0].id;
    } else {
        entry = requestData.name;
        id = requestData.id;
    }

    var requestStream = requestBody.dataStream;
    var requestString = requestBody.dataString;
    requestBody.hasNext();
    requestBody.hasNext();
    var requestEntry = requestBody.nextEntry();

    var name = requestEntry.name;
    requestEntry = requestBody.nextEntry();
}
