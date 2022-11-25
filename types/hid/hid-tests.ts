import { enumerate } from 'hid';

const devices = enumerate(); // $ExpectType DeviceDescriptor[]
