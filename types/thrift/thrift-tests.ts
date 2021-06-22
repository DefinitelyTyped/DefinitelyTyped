import * as http from 'http';
import * as https from 'https';

import {
  createConnection,
  createServer,
  createClient,
  Multiplexer,
  Thrift,
  TBinaryProtocol,
  TBufferedTransport,
  TProtocol,
  TTransport,
  TTransportCallback,
  Int64,
  TMessage,
  TStruct,
  TField,
  TSet,
  TList,
  TMap,
  createWSConnection,
  createWSClient,
} from 'thrift';

interface MockServiceHandlers {
  ping(): string;
}

class MockProcessor {
}

class MockClient {
}

const mockServiceHandlers: MockServiceHandlers = {
  ping(): string {
    return 'ok';
  }
};

const mockGeneratedService = {
  Client: MockClient,
  Processor: MockProcessor
};

createServer<MockProcessor, MockServiceHandlers>(mockGeneratedService, mockServiceHandlers);

const httpOptions: http.RequestOptions = {
    timeout: 10000,
    headers: {
        'Content-Type': 'application/octet-stream'
    }
};

const httpsOptions: https.RequestOptions = {
    timeout: 10000,
    headers: {
        'Content-Type': 'application/octet-stream'
    },
    secureProtocol: 'SSLv3_method'
};

const clientConnection = createConnection('0.0.0.0', 1234, {
    transport: TBufferedTransport,
    protocol: TBinaryProtocol,
    nodeOptions: httpOptions
});

const secureConnection = createConnection('0.0.0.0', 1234, {
    transport: TBufferedTransport,
    protocol: TBinaryProtocol,
    nodeOptions: httpsOptions
});

const webSocketConnection = createWSConnection('0.0.0.0', 1234, {
    transport: TBufferedTransport,
    protocol: TBinaryProtocol
});

createClient<MockClient>(mockGeneratedService, clientConnection);

createWSClient<MockClient>(mockGeneratedService, webSocketConnection);

const mockBuffer: Buffer = Buffer.alloc(8);

const mockCallback: TTransportCallback = (msg: Buffer, seq: number): void => {};

const mockTransport: TTransport = new TBufferedTransport(mockBuffer, mockCallback);

const mockProtocol: TProtocol = new TBinaryProtocol(mockTransport);

// Test utility types
const len: number = Thrift.objectLength({});

// Test transport types
const pI16: number = mockTransport.readI16();
const pI32: number = mockTransport.readI32();
const pDouble: number = mockTransport.readDouble();
const pByte: number = mockTransport.readByte();
const pString: string = mockTransport.readString();
const isOpen: boolean = mockTransport.isOpen();
const open: boolean = mockTransport.open();
const close: boolean = mockTransport.close();

mockTransport.write(mockBuffer);
mockTransport.write('test');
mockTransport.flush();
mockTransport.setCurrSeqId(1);
mockTransport.ensureAvailable(10);
mockTransport.commitPosition();
mockTransport.rollbackPosition();

// Test protocol types
mockProtocol.flush();
mockProtocol.writeMessageBegin('test', Thrift.MessageType.CALL, 1);
mockProtocol.writeMessageEnd();
mockProtocol.writeStructBegin('test');
mockProtocol.writeStructEnd();
mockProtocol.writeFieldBegin('test', Thrift.Type.BOOL, 1);
mockProtocol.writeFieldEnd();
mockProtocol.writeFieldStop();
mockProtocol.writeMapBegin(Thrift.Type.STRING, Thrift.Type.I64, 1);
mockProtocol.writeMapEnd();
mockProtocol.writeListBegin(Thrift.Type.STRING, 10);
mockProtocol.writeListEnd();
mockProtocol.writeSetBegin(Thrift.Type.I32, 10);
mockProtocol.writeSetEnd();
mockProtocol.writeBool(true);
mockProtocol.writeByte(1);
mockProtocol.writeI16(16);
mockProtocol.writeI32(32);
mockProtocol.writeI64(64);
mockProtocol.writeI64(new Int64('0xff'));
mockProtocol.writeDouble(42);
mockProtocol.writeString('test');
mockProtocol.writeString(new Buffer('test'));
mockProtocol.writeBinary('test');
mockProtocol.writeBinary(new Buffer('test'));

const message: TMessage = mockProtocol.readMessageBegin();
mockProtocol.readMessageEnd();
const struct: TStruct = mockProtocol.readStructBegin();
mockProtocol.readStructEnd();
const field: TField = mockProtocol.readFieldBegin();
mockProtocol.readFieldEnd();
const map: TMap = mockProtocol.readMapBegin();
mockProtocol.readMapEnd();
const list: TList = mockProtocol.readListBegin();
mockProtocol.readListEnd();
const set: TSet = mockProtocol.readSetBegin();
mockProtocol.readSetEnd();
const bool: boolean = mockProtocol.readBool();
const byte: number = mockProtocol.readByte();
const tI16: number = mockProtocol.readI16();
const tI32: number = mockProtocol.readI32();
const tI64: Int64 = mockProtocol.readI64();
const tDouble: number = mockProtocol.readDouble();
const tBinary: Buffer = mockProtocol.readBinary();
const tString: string = mockProtocol.readString();
const tTrans: TTransport = mockProtocol.getTransport();
mockProtocol.skip(Thrift.Type.STRUCT);

const multiplexer = new Multiplexer();
multiplexer.createClient("mock-service", mockGeneratedService, clientConnection);
