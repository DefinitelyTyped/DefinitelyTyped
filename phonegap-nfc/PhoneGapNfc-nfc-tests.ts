/// <reference path="PhoneGapNfc.d.ts"/>

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
