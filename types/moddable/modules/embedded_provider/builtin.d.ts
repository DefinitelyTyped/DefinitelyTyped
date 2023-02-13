/*
* Copyright (c) 2022 Shinya Ishikawa
*
*   This file is part of the Moddable SDK Tools.
*
*   The Moddable SDK Tools is free software: you can redistribute it and/or modify
*   it under the terms of the GNU General Public License as published by
*   the Free Software Foundation, either version 3 of the License, or
*   (at your option) any later version.
*
*   The Moddable SDK Tools is distributed in the hope that it will be useful,
*   but WITHOUT ANY WARRANTY; without even the implied warranty of
*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*   GNU General Public License for more details.
*
*   You should have received a copy of the GNU General Public License
*   along with the Moddable SDK Tools.  If not, see <http://www.gnu.org/licenses/>.
*
*/


declare module "embedded:provider/builtin" {
  import Digital from "embedded:io/digital";
  import DigitalBank from "embedded:io/digitalbank";
  import Analog from "embedded:io/analog";
  import PWM from "embedded:io/pwm";
  import PulseCount from "embedded:io/pulsecount";
  import I2C from "embedded:io/i2c";
  import SMBus from "embedded:io/smbus";
  import SPI from "embedded:io/spi";
  import Serial from "embedded:io/serial";
  import type { PinSpecifier } from "embedded:io/_common";
  const device: {
    io: {
      Digital: typeof Digital;
      DigitalBank: typeof DigitalBank;
      Analog: typeof Analog;
      PWM: typeof PWM;
      PulseCount: typeof PulseCount;
      I2C: typeof I2C;
      SMBus: typeof SMBus;
      SPI: typeof SPI;
      Serial: typeof Serial;
    };
    Digital: { default: ConstructorParameters<typeof Digital>[0] };
    DigitalBank: { default: ConstructorParameters<typeof DigitalBank>[0] };
    Analog: { default: ConstructorParameters<typeof Analog>[0] };
    PWM: { default: ConstructorParameters<typeof PWM>[0] };
    PulseCount: { default: ConstructorParameters<typeof PulseCount>[0] };
    I2C: { default: ConstructorParameters<typeof I2C>[0] };
    SMBus: { default: ConstructorParameters<typeof SMBus>[0] };
    SPI: { default: ConstructorParameters<typeof SPI>[0] };
    Serial: { default: ConstructorParameters<typeof Serial>[0] };
    pin: { [name: string]: PinSpecifier };
  };
  export default device;
}
