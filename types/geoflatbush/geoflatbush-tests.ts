import Flatbush from 'flatbush';
import { around } from 'geoflatbush';

const index = new Flatbush(1);
const results = around(index, 0, 0);
