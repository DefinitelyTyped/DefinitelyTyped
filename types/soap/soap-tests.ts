import * as SOAP from 'soap';
import * as events from 'events';
import * as fs from 'fs';
import * as http from 'http';

const url = 'http://example.com/wsdl?wsdl';
// wsdlOptions set only default values
const wsdlOptions = <SOAP.IOptions>{
    attributesKey: 'attributes',
    disableCache: false,
    endpoint: url,
    envelopeKey: 'soap',
    escapeXML: true,
    forceSoap12Headers: false,
    httpClient: new SOAP.HttpClient(),
    ignoreBaseNameSpaces: false,
    ignoredNamespaces: ['tns', 'targetNamespace', 'typedNamespace'],
    request: require('request'),
    stream: false,
    wsdl_headers: [],
    wsdl_options: [],
    valueKey: '$value',
    xmlKey: '$xml'
};

SOAP.createClient(url, wsdlOptions, (err: any, client: SOAP.Client) => {
    let securityOptions = { hasTimeStamp: false };
    client.setSecurity(new SOAP.WSSecurity('user', 'password', securityOptions));
    client.setSecurity(new SOAP.BasicAuthSecurity('user', 'password'));
    client.setSecurity(new SOAP.BearerSecurity('token'));
    client.setSecurity(new SOAP.WSSecurity('user', 'password', securityOptions));
    client.setSecurity(new SOAP.WSSecurityCert('*****', 'cert', ''));
    let defaults = { rejectUnauthorized: false };
    client.setSecurity(new SOAP.ClientSSLSecurity('/path/to/key', '/path/to/cert', '/path/to/ca', defaults));
    client.setSecurity(new SOAP.ClientSSLSecurity('/path/to/key', '/path/to/cert', defaults));
    client.setSecurity(new SOAP.ClientSSLSecurity('/path/to/key', '/path/to/cert', '/path/to/ca'));
    client.setSecurity(new SOAP.ClientSSLSecurityPFX('pfx', 'password', defaults));
    client.setEndpoint('http://localhost');
    client.describe();
    client.addBodyAttribute({});
    client.addHttpHeader('test', true);
    client.addSoapHeader({});
    client.changeSoapHeader(0, {});
    client.clearBodyAttributes();
    client.clearHttpHeaders();
    client.clearSoapHeaders();
    client.getBodyAttributes();
    client.getHttpHeaders();
    client.getSoapHeaders();
    client.setSOAPAction('action');
    (client['create'] as SOAP.ISOAPMethod)({ name: 'value' }, (err: any, result: any) => {
        // result is an object
    });
    (client['create'] as SOAP.ISOAPMethod)({ name: 'value' }, (err: any, result: any) => {
        // result is an object
    }, {});
    client.on('request', (obj: any) => {
        // obj is an object
    });
});

let myService = {
    MyService: {
        MyPort: {
            MyFunction: (args: any) => {
                return {
                    name: args.name
                };
            },

            // This is how to define an asynchronous function.
            MyAsyncFunction: (args: any, callback: any) => {
                // do some work
                callback({
                    name: args.name
                });
            },

            // This is how to receive incoming headers
            HeadersAwareFunction: (args: any, cb: any, headers: any) => {
                return {
                    name: headers.Token
                };
            },

            // You can also inspect the original `req`
            reallyDeatailedFunction: (args: any, cb: any, headers: any, req: any) => {
                console.log('SOAP `reallyDeatailedFunction` request from ' + req.connection.remoteAddress);
                return {
                    name: headers.Token
                };
            }
        }
    }
};

let xml = fs.readFileSync('myservice.wsdl', 'utf8'),
    server = http.createServer((request, response) => {
        response.end('404: Not Found: ' + request.url);
    });

server.listen(8000);
SOAP.listen(server, '/wsdl', myService, xml);
