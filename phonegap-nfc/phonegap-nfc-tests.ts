/// <reference path="phonegap-nfc.d.ts"/>

import nfc = require('nfc');
import ndef = require('ndef');
import NdefRecord = PhoneGapNfc.NdefRecord;

nfc.addTagDiscoveredListener(() => {});
nfc.addTagDiscoveredListener(() => {},() => {}, () => {});

nfc.addMimeTypeListener('text/json',() => {});
nfc.addMimeTypeListener('text/json',() => {},() => {}, () => {});

nfc.addNdefListener(() => {});
nfc.addNdefListener(() => {}, () => {},() => {});

nfc.addNdefFormatableListener(() => {});
nfc.addNdefFormatableListener(() => {}, () => {}, () => {});

nfc.write([],() => {}, () => {});

nfc.makeReadOnly();
nfc.makeReadOnly(() => {}, () => {});

nfc.share([]);
nfc.share([],() => {}, () => {});

nfc.unshare();
nfc.unshare(() => {}, () => {});

nfc.handover('uri',() => {}, () => {});
nfc.handover(['uri'],() => {}, () => {});
nfc.handover('uri');
nfc.handover(['uri']);

nfc.stopHandover();
nfc.stopHandover(() => {}, () => {});

nfc.erase();
nfc.erase(() => {}, () => {});

nfc.enabled();
nfc.enabled(() => {}, () => {});

nfc.removeTagDiscoveredListener(() => {});
nfc.removeTagDiscoveredListener(() => {},() => {},() => {});

nfc.removeMimeTypeListener('text/json',() => {});
nfc.removeMimeTypeListener('text/json',() => {},() => {},() => {});

nfc.removeNdefListener(() => {});
nfc.removeNdefListener(() => {},() => {},() => {});

nfc.showSettings();
nfc.showSettings(() => {},() => {});

let record:NdefRecord = ndef.record(0x01,[0x0F],[0x0C],[0xFF]);

record = ndef.textRecord('textRecord','fr',[24,78]);

record = ndef.uriRecord('uriRecord',[24,78]);

record = ndef.absoluteUriRecord('uriRecord',[88,142],[24,78]);

record = ndef.mimeMediaRecord('text/json',[88,142],[24,78]);

record = ndef.smartPoster([],[88,142]);

record = ndef.emptyRecord();

record = ndef.androidApplicationRecord('fr.redfroggy.phonegap');

let bytes:Array<number> = ndef.encodeMessage([]);

let records:Array<NdefRecord> = ndef.decodeMessage(bytes);

let obj:any = ndef.decodeTnf(bytes[0]);

let tnfByte:number = ndef.encodeTnf(bytes[0],bytes[1],bytes[2],bytes[3],bytes[4],bytes[5]);

let tnfString:string = ndef.tnfToString(tnfByte);
