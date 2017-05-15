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

let characteristic = new EchoCharacteristic();
Bleno.on('advertisingStart', (error: string) => {
  if (!error) {
    Bleno.setServices(
      [new Bleno.PrimaryService({uuid: 'ec00', characteristics: [ characteristic ] })],
      () => {}
    );
  }
});
