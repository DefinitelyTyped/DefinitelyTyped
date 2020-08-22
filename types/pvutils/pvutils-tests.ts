import * as pvutils from "pvutils";

pvutils.getUTCDate(new Date).getTime();

pvutils.getParametersValue({}, "name", "").charAt(0);
pvutils.getParametersValue({}, "name", 0).toFixed();
pvutils.getParametersValue({}, "name", true).valueOf();
pvutils.getParametersValue({}, "name", new Date).getTime();

pvutils.bufferToHexCodes(new ArrayBuffer(0)).charAt(0);
pvutils.bufferToHexCodes(new ArrayBuffer(0), 0).charAt(0);
pvutils.bufferToHexCodes(new ArrayBuffer(0), 0, 0).charAt(0);

pvutils.checkBufferParams({}, new ArrayBuffer(0), 0, 0).valueOf();

pvutils.utilFromBase(new Uint8Array(0), 0).toFixed();

pvutils.utilToBase(0, 0).byteLength;
pvutils.utilToBase(0, 0, 0).byteLength;

pvutils.utilConcatBuf(new ArrayBuffer(0), new ArrayBuffer(0), new ArrayBuffer(0), new ArrayBuffer(0)).byteLength;

pvutils.utilDecodeTC().toFixed();

pvutils.utilEncodeTC(0).byteLength;

pvutils.isEqualBuffer(new ArrayBuffer(0), new ArrayBuffer(0)) === true;

pvutils.padNumber(0, 0).charAt(0);

pvutils.toBase64("").charAt(0);
pvutils.toBase64("", true).charAt(0);
pvutils.toBase64("", true, true).charAt(0);

pvutils.fromBase64("", true).charAt(0);
pvutils.fromBase64("", true, true).charAt(0);

pvutils.arrayBufferToString(new ArrayBuffer(0)).charAt(0);
pvutils.arrayBufferToString(new Uint8Array(0)).charAt(0);

pvutils.stringToArrayBuffer("").byteLength;

pvutils.nearestPowerOf2(0).toFixed();
