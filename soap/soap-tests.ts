/// <reference path="soap.d.ts" />

import * as soap from 'soap';

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
});

