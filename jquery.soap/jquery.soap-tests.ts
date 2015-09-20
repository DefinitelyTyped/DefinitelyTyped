/// <reference path="jquery.soap.d.ts"/>

$.soap({
    url: 'http://my.server.com/soapservices/',      //endpoint address for the service
    method: 'helloWorld',                           // service operation name
    // 1) will be appended to url if appendMethodToURL=true
    // 2) will be used for request element name when building xml from JSON 'params' (unless 'elementName' is provided)
    // 3) will be used to set SOAPAction request header if no SOAPAction is specified
    appendMethodToURL: true,                        // method name will be appended to URL defaults to true
    SOAPAction: 'action',                           // manually set the Request Header 'SOAPAction', defaults to the method specified above (optional)
    soap12: false,                                  // use SOAP 1.2 namespace and HTTP headers - default to false
    context: document.body,                          // Used to set this in beforeSend, success, error and data callback functions

    // addional headers and namespaces
    envAttributes: {                                // additional attributes (like namespaces) for the Envelope:
        'xmlns:another': 'http://anotherNamespace.com/'
    },
    HTTPHeaders: {                                  // additional http headers send with the $.ajax call, will be given to $.ajax({ headers: })
        'Authorization': 'Basic ' + btoa('user:pass')
    },

    //data can be XML DOM, XML String, JSON or a function
    data: {                                         // JSON structure used to build request XML - SHOULD be coupled with ('namespaceQualifier' AND 'namespaceURL') AND ('method' OR 'elementName')
        name: 'Remy Blom',
        msg: 'Hi!'
    },

    //these options ONLY apply when the request XML is going to be built from JSON 'params'
    namespaceQualifier: 'myns',                     // used as namespace prefix for all elements in request (optional)
    namespaceURL: 'urn://service.my.server.com',    // namespace url added to parent request element (optional)
    noPrefix: false,                                // set to true if you don't want the namespaceQualifier to be the prefix for the nodes in params. defaults to false (optional)
    elementName: 'requestElementName',              // override 'method' as outer element (optional)

    //callback functions
    beforeSend: function(SOAPEnvelope) { },        // callback function - SOAPEnvelope object is passed back prior to ajax call (optional)
    success: function(SOAPResponse) { },            // callback function to handle successful return (optional)
    error: function(SOAPResponse) { },            // callback function to handle fault return (optional)
    statusCode: {                                   // callback functions based on statusCode
        404: function() {
            console.log('404 Not Found')
        },
        200: function() {
            console.log('200 OK')
        }
    },

    // WS-Security
    wss: {
        username: 'user',
        password: 'pass',
        nonce: 'w08370jf7340qephufqp3r4',
        created: new Date().getTime()
    },

    // debugging
    enableLogging: false                            // to enable the local log function set to true, defaults to false (optional)
})