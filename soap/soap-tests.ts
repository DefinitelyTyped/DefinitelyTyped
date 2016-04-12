/// <reference path="soap.d.ts" />

import * as soap from 'soap';
import * as events from 'events';

const url = 'http://example.com/wsdl?wsdl';
const wsdlOptions = { name: 'value' };

soap.createClient(url, wsdlOptions, function(err: any, client: soap.Client) {
    let securityOptions = { 'hasTimeStamp': false };
    client.setSecurity(new soap.WSSecurity('user', 'password', securityOptions));
    client.addSoapHeader({});
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

