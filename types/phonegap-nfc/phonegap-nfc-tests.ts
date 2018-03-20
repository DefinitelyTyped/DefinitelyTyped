import nfc = require('nfc');
import ndef = require('ndef');
import NdefRecord = PhoneGapNfc.NdefRecord;
import NdefTag = PhoneGapNfc.NdefTag;
import NdefTagEvent = PhoneGapNfc.NdefTagEvent;

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
nfc.enabled((status: String) => {}, (status: String) => {});

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

let ndefTag: NdefTag = {
    id: [4, 12, 109, 98, 8, 41, -127],
    techTypes: ["android.nfc.tech.MifareUltralight", "android.nfc.tech.NfcA", "android.nfc.tech.Ndef"],
    type: "NFC Forum Type 2",
    date: "1394448136236",

    canMakeReadOnly: true,
    isWritable: true,
    maxSize: 137,
    ndefMessage: records
};

let eventTarget: EventTarget = {
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean) { return; },
    dispatchEvent(evt: Event) { return true; },
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean) { return; }
}

let ndefTagEvent = {
    bubbles: false,
    cancelBubble: false,
    cancelable: false,
    currentTarget: eventTarget,
    defaultPrevented: false,
    eventPhase: 2,
    isTrusted: true,
    returnValue: true,
    srcElement: new Element(),
    target: eventTarget,
    timeStamp: 1394448136236,
    type: "ndef",
    initEvent(eventTypeArg: string, canBubbleArg: boolean, cancelableArg: boolean) { return; },
    preventDefault() { return; },
    stopImmediatePropagation() { return; },
    stopPropagation() { return; },
    AT_TARGET: 0,
    BUBBLING_PHASE: 0,
    CAPTURING_PHASE: 0,
    scoped: false,
    deepPath(): any { },
    tag: ndefTag
};

let event: NdefTagEvent = ndefTagEvent;