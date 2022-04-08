import {
  PARITY_NONE,
  PARITY_EVEN,
  PARITY_ODD,
  PARITY_MARK,
  PARITY_SPACE,
  DEFAULT_PORT,
  Options,
  Serial
} from 'raspi-serial';

let options: Options = {};
options = {
  parity: PARITY_EVEN
};
options = {
  parity: PARITY_ODD
};
options = {
  parity: PARITY_MARK
};
options = {
  parity: PARITY_SPACE
};
options = {
  portId: DEFAULT_PORT,
  baudRate: 9600,
  dataBits: 8,
  stopBits: 1,
  parity: PARITY_NONE
};

new Serial();
const serial = new Serial(options);
