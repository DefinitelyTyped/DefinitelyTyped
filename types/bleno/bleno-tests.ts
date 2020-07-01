import * as Bleno from 'bleno';

export class EchoCharacteristic extends Bleno.Characteristic {
  _value: any;
  _updateValueCallback: any;

  constructor() {
    super({
      uuid: 'ec0e',
      properties: ['read', 'write', 'notify'],
      value: null
    });
    this._value = new ArrayBuffer(0);
    this._updateValueCallback = null;
  }

  onReadRequest(offset: number, callback: any) {
    callback(Bleno.Characteristic.RESULT_SUCCESS, this._value);
  }

  onWriteRequest(data: any, offset: number, withoutResponse: boolean, callback: any) {
    this._value = data;

    if (this._updateValueCallback) {
      this._updateValueCallback(this._value);
    }

    callback(Bleno.Characteristic.RESULT_SUCCESS);
  }

  onSubscribe(maxValueSize: number, updateValueCallback: any) {
    this._updateValueCallback = updateValueCallback;
  }

  onUnsubscribefunction() {
    this._updateValueCallback = null;
  }
}

Bleno.on('stateChange', (state: string) => {
  if (state === 'poweredOn') {
    Bleno.startAdvertising('echo', ['ec00'], () => {});
  } else {
    Bleno.stopAdvertising(() => {});
  }
});

const characteristic = new EchoCharacteristic();
Bleno.on('advertisingStart', (error?: Error | null) => {
  if (!error) {
    Bleno.setServices(
      [new Bleno.PrimaryService({uuid: 'ec00', characteristics: [ characteristic ] })],
      () => {}
    );
  }
});

const SERVICE_UUID = '87B1E448-1C07-4957-B7D3-017DF4EE3863';
const CONTROL_CHAR_UUID = '87B1E448-1C07-4957-B7D3-017DF4EE3864';
const STATUS_CHAR_UUID = '87B1E448-1C07-4957-B7D3-017DF4EE3866';

class StatusCharacteristic extends Bleno.Characteristic {
    constructor() {
        super({
            uuid: 'STATUS_CHAR_UUID',
            properties: ['read'],
            descriptors: [
                new Bleno.Descriptor({
                    uuid: '2901',
                    value: Buffer.from('Status'),
                }),
            ],
        });
    }

    onReadRequest(
        offset: number,
        callback: (result: number, data?: Buffer) => void
    ) {
        try {
            const data = Buffer.from('status ok');
            callback(Bleno.Characteristic.RESULT_SUCCESS, data.slice(offset));
        } catch (error) {
            callback(Bleno.Characteristic.RESULT_UNLIKELY_ERROR);
        }
    }
}

class ControlCharacteristic extends Bleno.Characteristic {
    private readonly callback: (data: Buffer) => void;

    constructor(onWriteRequestCb: (data: Buffer) => void) {
        super({
            uuid: CONTROL_CHAR_UUID,
            properties: ['write'],
            descriptors: [
                new Bleno.Descriptor({
                    uuid: '2901',
                    value: Buffer.from('test characteristic'),
                }),
            ],
        });
        this.callback = onWriteRequestCb;
    }

    onWriteRequest(
        data: Buffer,
        offset: number,
        withoutResponse: any,
        callback: (result: number) => void
    ): void {
        if (offset > 0) {
            this.callback(data.slice(offset));
        } else {
            this.callback(data);
        }
        callback(this.RESULT_SUCCESS);
    }
}

export class BluetoothController {
    private isAdvertising: boolean;

    constructor() {
        this.isAdvertising = false;
        this.setup();
    }

    toString(): string {
        return '<Control>';
    }

    dispose(callback: () => void) {
        if (this.isAdvertising) {
            Bleno.stopAdvertising(callback);
        } else {
            callback();
        }
    }

    private setup() {
      Bleno.on('stateChange', (state: string) => {
            console.log('bluetooth', `stateChange: ${state}, address = ${Bleno.address}`);

            if (state === 'poweredOn') {
              Bleno.startAdvertising('device', [SERVICE_UUID]);
            } else {
              Bleno.stopAdvertising();
            }
        });

        Bleno.on('accept', (clientAddress: string) => {
          console.log('bluetooth', `accept, client: ${clientAddress}`);
          Bleno.updateRssi();
        });

        Bleno.on('disconnect', (clientAddress: string) => {
          console.log('bluetooth', `disconnect, client: ${clientAddress}`);
        });

        Bleno.on('rssiUpdate', (rssi: number) => {
            console.log('bluetooth', `rssiUpdate: ${rssi}`);
        });

        Bleno.on('mtuChange', (mtu: number) => {
          console.log('bluetooth', `mtuChange: ${mtu}`);
        });

        Bleno.on('advertisingStart', (error?: Error | null) => {
          console.log('bluetooth', `advertisingStart: ${error ? error : 'success'}`);
            if (!error) {
                this.isAdvertising = true;
                Bleno.setServices([
                    new Bleno.PrimaryService({
                        uuid: SERVICE_UUID,
                        characteristics: [
                            new ControlCharacteristic((data) => {
                                this.onWriteRequest(data);
                            }),
                            new StatusCharacteristic(),
                        ],
                    }),
                ]);
            }
        });

        Bleno.on('advertisingStop', () => {
            this.isAdvertising = false;
            console.log('bluetooth', 'advertisingStop');
        });

        Bleno.on('servicesSet', (error?: Error | null) => {
          console.log('bluetooth', `servicesSet: ${error ? error : 'success'}`);
        });
    }

    private onWriteRequest(data: Buffer) {
      console.log(data.toString('hex'));
    }
}

///////////////////////////////////////////////////////////////////////////////
// code from bleno's README
//

const bleno = Bleno;

function test1() {
  const name = 'name';
  const serviceUuids = ['fffffffffffffffffffffffffffffff0'];

  bleno.startAdvertising(name);
  bleno.startAdvertising(name, serviceUuids);
  bleno.startAdvertising(name, serviceUuids, (error) => {});
}

function test2() {
  const uuid = 'e2c56db5dffb48d2b060d0f5a71096e0';
  const major = 0; // 0x0000 - 0xffff
  const minor = 0; // 0x0000 - 0xffff
  const measuredPower = -59; // -128 - 127

  bleno.startAdvertisingIBeacon(uuid, major, minor, measuredPower);
  bleno.startAdvertisingIBeacon(uuid, major, minor, measuredPower, (error) => {});
}

function test3() {
  const scanData = new Buffer(''); // maximum 31 bytes
  const advertisementData = new Buffer(''); // maximum 31 bytes

  bleno.startAdvertisingWithEIRData(advertisementData);
  bleno.startAdvertisingWithEIRData(advertisementData, (error) => {});
  bleno.startAdvertisingWithEIRData(advertisementData, scanData, (error) => {});
}

function test4() {
  bleno.stopAdvertising();
  bleno.stopAdvertising(() => {});
}

function test5() {
  const service = new bleno.PrimaryService({uuid: '0000'});
  const services = [
    service
  ];

 bleno.setServices(services);
 bleno.setServices(services, (error) => {});
}

function test6() {
  bleno.disconnect(); // Linux only
}

function test7() {
  bleno.updateRssi(); // not available in OS X 10.9
  bleno.updateRssi((error, rssi) => {}); // not available in OS X 10.9
}

function test8() {
  const PrimaryService = bleno.PrimaryService;

  const primaryService = new PrimaryService({
      uuid: 'fffffffffffffffffffffffffffffff0', // or 'fff0' for 16-bit
      characteristics: [
          // see Characteristic for data type
      ]
  });
}

function test9() {
  const Characteristic = bleno.Characteristic;

  const characteristic = new Characteristic({
      uuid: 'fffffffffffffffffffffffffffffff1', // or 'fff1' for 16-bit
      properties: ['read'], // can be a combination of 'read', 'write', 'writeWithoutResponse', 'notify', 'indicate'
      secure: ['notify'], // enable security for properties, can be a combination of 'read', 'write', 'writeWithoutResponse', 'notify', 'indicate'
      value: null, // optional static value, must be of type Buffer - for read only characteristics
      descriptors: [
          // see Descriptor for data type
          new bleno.Descriptor({uuid: '0000'})
      ],
      onReadRequest: null, // optional read request handler, function(offset, callback) { ... }
      onWriteRequest: null, // optional write request handler, function(data, offset, withoutResponse, callback) { ...}
      onSubscribe: null, // optional notify/indicate subscribe handler, function(maxValueSize, updateValueCallback) { ...}
      onUnsubscribe: null, // optional notify/indicate unsubscribe handler, function() { ...}
      onNotify: null, // optional notify sent handler, function() { ...}
      onIndicate: null // optional indicate confirmation received handler, function() { ...}
  });
}

function test10() {
  bleno.Characteristic.RESULT_SUCCESS;
  bleno.Characteristic.RESULT_INVALID_OFFSET;
  bleno.Characteristic.RESULT_INVALID_ATTRIBUTE_LENGTH;
  bleno.Characteristic.RESULT_UNLIKELY_ERROR;
}

function test11() {
  const Descriptor = bleno.Descriptor;

  const descriptor = new Descriptor({
      uuid: '2901',
      value: 'value' // static value, must be of type Buffer or string if set
  });
}

function test12() {
  bleno.on('stateChange', (state: string) => {});
  bleno.on('advertisingStart', (error?: Error | null) => {});
  bleno.on('advertisingStartError', (error: Error) => {});
  bleno.on('advertisingStop', () => {});
  bleno.on('servicesSet', (error?: Error | null) => {});
  bleno.on('servicesSetError', (error: Error) => {});
  bleno.on('accept', (clientAddress) => {}); // not available on OS X 10.9
  bleno.on('disconnect', (clientAddress) => {}); // Linux only
  bleno.on('rssiUpdate', (rssi) => {}); // not available on OS X 10.9
}
