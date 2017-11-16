import * as uinput from 'uinput';
import { WriteStream } from 'fs';

const setupOptions: uinput.ISetupOptions = {
  EV_KEY: [uinput.KEY_A, uinput.KEY_B]
};

const createID: uinput.ICreateID = {
  product: 123,
  vendor: 456,
  version: 789,
  bustype: uinput.BUS_VIRTUAL
};

const createOptions: uinput.ICreateOptions = {
  id: createID,
  name: "TestDevice"
};

uinput.setup(setupOptions, (err0: Error | undefined, stream: WriteStream): void => {
  if (err0 instanceof Error) {
    throw err0;
  }

  uinput.create(stream, createOptions, (err1?: Error) => {
    if (err1 instanceof Error) {
      throw err1;
    }

    uinput.key_event(stream, uinput.KEY_A, (err2?: Error) => {
      if (err2 instanceof Error) {
        throw err2;
      }
    });

    uinput.emit_combo(stream, [uinput.KEY_A, uinput.KEY_B], (err3?: Error) => {
      if (err3 instanceof Error) {
        throw err3;
      }
    });
  });
});
