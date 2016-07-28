/// <reference path="typedarray-to-buffer.d.ts"/>

import {typedarrayToBuffer} from "typedarray-to-buffer";

const uint8Array: Uint8Array = new Uint8Array([0]);

const buff: Buffer = typedarrayToBuffer(uint8Array);
