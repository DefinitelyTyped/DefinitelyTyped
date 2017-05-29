import * as Thrift from 'thrift';

const fakeGeneratedService: any = {};
const fakeServiceMethods: any = {};
const fakeConnectionParams: any = {};

Thrift.createServer(fakeGeneratedService, fakeServiceMethods);

const clientConnection = Thrift.createConnection('0.0.0.0', 1234, fakeConnectionParams);
Thrift.createClient(fakeGeneratedService, clientConnection);
