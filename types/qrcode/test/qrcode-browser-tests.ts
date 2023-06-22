import 'qrcode/build/qrcode';
import 'qrcode/build/qrcode.tosjis';

globalThis.QRCode.create;
globalThis.QRCode.toCanvas;
globalThis.QRCode.toDataURL;
globalThis.QRCode.toString;
globalThis.QRCode.toSJIS;

globalThis.QRCode.create('foo', { toSJISFunc: globalThis.QRCode.toSJIS });
