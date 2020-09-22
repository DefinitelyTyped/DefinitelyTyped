$.soap({
    url: 'http://my.server.com/soapservices/',
    method: 'helloWorld',

    data: {
        name: 'Remy Blom',
        msg: 'Hi!'
    },

    success: function(soapResponse) {
        // do stuff with soapResponse
        // if you want to have the response as JSON use soapResponse.toJSON();
        // or soapResponse.toString() to get XML string
        // or soapResponse.toXML() to get XML DOM
    },
    error: function(SOAPResponse) {
        // show error
    }
});

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

$.soap({

}).done(function(data, textStatus, jqXHR) {
    // do stuff on success here...
}).fail(function(jqXHR, textStatus, errorThrown) {
    // do stuff on error here...
})

$.soap({
    url: 'http://my.server.com/soapservices/',
    namespaceQualifier: 'myns',
    namespaceURL: 'urn://service.my.server.com',
    error: function(soapResponse) {
        // show error
    }
});

$.soap({
    method: 'helloWorld',
    data: {
        name: 'Remy Blom',
        msg: 'Hi!'
    },
    success: function(soapResponse) {
        // do stuff with soapResponse
    }
});

$.soap({
    method: 'doSomethingElse',
    data: {},
    success: function(soapResponse) {
        // do stuff with soapResponse
    }
});

$.soap({
    url: 'http://another.server.com/anotherService',
    method: 'helloWorld',
    data: {
        name: 'Remy Blom',
        msg: 'Hi!'
    },
    success: function(soapResponse) {
        // do stuff with soapResponse
    },
    error: function(soapResponse) {
        alert('that other server might be down...')
    }
});

$.soap({
    // other parameters..

    // WS-Security
    wss: {
        username: 'user',
        password: 'pass',
        nonce: 'w08370jf7340qephufqp3r4',
        created: new Date().getTime()
    }
});

var username = 'foo';
var password = 'bar';

$.soap({
    // other parameters...

    HTTPHeaders: {
        Authorization: 'Basic ' + btoa(username + ':' + password)
    }
});

// jquery.soap/doc/options.md

$.soap({
    url: 'http://server.com/webServices/',
    method: 'getItem',
    appendMethodToURL: false
})

$.soap({
    beforeSend: function(SOAPEnvelope) {
        console.log(SOAPEnvelope.toString());
    }
});

$.soap({
    context: document.body,
    success: function(SOAPResponse) {
        console.log(this);
    }
});

var xml =
    ['<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope/">',
        '<soap:Body>',
        '<requestNode>',
        '</requestNode>',
        '</soap:Body>',
        '</soap:Envelope>'];

$.soap({
    data: xml.join('')
});

$.soap({
    method: 'requestNode',
    data: {
        name: 'Remy Blom',
        msg: 'Hi!'
    }
});

$.soap({
    envAttributes: {
        'xmlns:another': 'http://anotherNamespace.com/'
    }
})

$.soap({
    method: 'helloWorld',
    elementName: 'requestNode'
})

$.soap({
    enableLogging: true
})

$.soap({
    error: function(SOAPResponse) {
        console.log(SOAPResponse.toString())
    }
})

$.soap({
    HTTPHeaders: {
        'Authorization': 'Basic ' + btoa('user:pass')
    }
})

$.soap({
    url: 'http://server.com/webServices/',
    method: 'getItem'
})

$.soap({
    method: 'helloWorld',
    namespaceQualifier: 'myns',
    namespaceURL: 'urn://service.my.server.com'
})

$.soap({
    method: 'helloWorld',
    namespaceQualifier: 'myns',
    namespaceURL: 'urn://service.my.server.com'
})

$.soap({
    method: 'helloWorld',
    namespaceQualifier: 'myns',
    namespaceURL: 'urn://service.my.server.com',
    noPrefix: true
})

$.soap({
    request: function(SOAPEnvelope) {
        console.log(SOAPEnvelope.toString());
    }
})

$.soap({
    soap12: true
})

$.soap({
    url: 'http://server.com/webServices/',
    method: 'getItem',
    SOAPAction: 'getAnItem'
})

$.soap({
    SOAPHeader: {
        test: [1, 2, 3]
    }
})

$.soap({
    statusCode: {
        404: function() {
            console.log('404 Not Found')
        },
        200: function() {
            console.log('200 OK')
        }
    }
})

$.soap({
    success: function(SOAPResponse) {
        console.log(SOAPResponse.toString());
    }
})

$.soap({
    url: 'http://server.com/webServices/',
    method: 'getItem'
})

$.soap({
    wss: {
        username: 'user',
        password: 'pass',
        nonce: 'w08370jf7340qephufqp3r4',
        created: new Date().getTime()
    }
})
