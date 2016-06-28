/// <reference path="soap.d.ts" />

import * as soap from 'soap';
import * as events from 'events';
import * as fs from "fs";
import * as http from "http";

const url = 'http://example.com/wsdl?wsdl';
const wsdlOptions = { name: 'value' };

soap.createClient(url, wsdlOptions, function(err: any, client: soap.Client) {
    let securityOptions = { 'hasTimeStamp': false };
    client.setSecurity(new soap.WSSecurity('user', 'password', securityOptions));
    let defaults = {'rejectUnauthorized': false};
    client.setSecurity(new soap.ClientSSLSecurity('/path/to/key', '/path/to/cert', '/path/to/ca',defaults));
    client.addSoapHeader({});
    client.setEndpoint('http://localhost');
    client['create']({ name: 'value' }, function(err, result) {
        // result is an object
    });
    client['create']({ name: 'value' }, function(err, result) {
        // result is an object
    }, {});
    client.on('request', function(obj: any) {
        //obj is an object
    });
});

var myService = {
      MyService: {
          MyPort: {
              MyFunction: function(args: any) {
                  return {
                      name: args.name
                  };
              },
 
              // This is how to define an asynchronous function. 
              MyAsyncFunction: function(args: any, callback: any) {
                  // do some work 
                  callback({
                      name: args.name
                  });
              },
 
              // This is how to receive incoming headers 
              HeadersAwareFunction: function(args: any, cb: any, headers: any) {
                  return {
                      name: headers.Token
                  };
              },
 
              // You can also inspect the original `req` 
              reallyDeatailedFunction: function(args: any, cb: any, headers: any, req: any) {
                  console.log('SOAP `reallyDeatailedFunction` request from ' + req.connection.remoteAddress);
                  return {
                      name: headers.Token
                  };
              }
          }
      }
  };
 
var xml = fs.readFileSync('myservice.wsdl', 'utf8'),
    server = http.createServer(function(request,response) {
        response.end("404: Not Found: " + request.url);
    });
 
server.listen(8000);
soap.listen(server, '/wsdl', myService, xml);
