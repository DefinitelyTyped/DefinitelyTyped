function testRESTAPIRequestBody(request: sn_ws.RESTAPIRequest) {
    var requestBody = request.body; 
    // Returns instance of RESTAPIRequestBody
    
    var headers = request.headers;
    var acceptHeader = headers.Accept;
    var myCustomHeader = headers.myCustom;
    var specialHeader = headers['special - header'];
    var pathParams = request.pathParams;
    var tableName = pathParams.tableName;
    // "myApp_table"
    
    var id = pathParams.id;
    // "1234"
    
    var queryParams = request.queryParams;
    var isActiveQuery = queryParams.active;
    // false
    
    var nameQueryVal = queryParams.name;
    // "now"
    
    var query = request.queryString;
    // "active=false&name=now"
    
    var query2 = request.uri;
    // "api/now/table/myTable"
    
    var query3 = request.url;
    // "https://instance.service-now.com/api/now/table/myTable?active=false&name=now"
    
    var acceptHeader = request.getHeader('accept');
}
