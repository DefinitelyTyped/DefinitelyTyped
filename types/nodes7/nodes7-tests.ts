import nodes7 = require("nodes7");

const s7bool: nodes7.S7Types = true;
const s7number: nodes7.S7Types = 0;
const s7string: nodes7.S7Types = "";

const i = new nodes7(); // $ExpectType NodeS7

// @ts-expect-error
i.initiateConnection();
// @ts-expect-error
i.initiateConnection({});
// $ExpectType void
i.initiateConnection({}, () => {});
// $ExpectType void
i.initiateConnection({}, (err) => {});
// $ExpectType void
i.initiateConnection({
    host: "",
    port: 0,
    rack: 0,
    slot: 0,
    timeout: 0,
    localTSAP: 0x0,
    remoteTSAP: 0x0
}, (err) => {});
i.initiateConnection({
    // @ts-expect-error
    host: 0
}, () => {});
i.initiateConnection({
    // @ts-expect-error
    port: "0"
}, () => {});
i.initiateConnection({
    // @ts-expect-error
    rack: "0"
}, () => {});
i.initiateConnection({
    // @ts-expect-error
    slot: "0"
}, () => {});
i.initiateConnection({
    // @ts-expect-error
    timeout: "0"
}, () => {});
i.initiateConnection({
    // @ts-expect-error
    localTSAP: "0"
}, () => {});
i.initiateConnection({
    // @ts-expect-error
    remoteTSAP: "0"
}, () => {});

// @ts-expect-error
i.dropConnection();
i.dropConnection(() => {}); // $ExpectType void

// @ts-expect-error
i.setTranslationCB();
// @ts-expect-error
i.setTranslationCB(() => {});
i.setTranslationCB(() => ""); // $ExpectType void
i.setTranslationCB(x => x); // $ExpectType void

// @ts-expect-error
i.addItems();
// $ExpectType void
i.addItems("");
// $ExpectType void
i.addItems("_COMMERR");
// $ExpectType void
i.addItems([]);
// $ExpectType void
i.addItems([""]);
// $ExpectType void
i.addItems(["_COMMERR"]);
// $ExpectType void
i.addItems(["", "_COMMERR"]);

// $ExpectType void
i.removeItems();
// $ExpectType void
i.removeItems("");
// $ExpectType void
i.removeItems([""]);

// @ts-expect-error
i.writeItems();
// @ts-expect-error
i.writeItems("");
// @ts-expect-error
i.writeItems([""]);
// @ts-expect-error
i.writeItems("", 0);
// @ts-expect-error
i.writeItems([""], [0]);
// $ExpectType number
i.writeItems("", 0, () => {});
// $ExpectType number
i.writeItems([""], [0], () => {});
// $ExpectType number
i.writeItems("", 0, (err) => {});
// $ExpectType number
i.writeItems([""], [0], (err) => {});
// @ts-expect-error
i.writeItems("", [0], () => {});
// @ts-expect-error
i.writeItems([""], 0, () => {});

// @ts-expect-error
i.readAllItems();
// $ExpectType void
i.readAllItems(() => {});
// $ExpectType void
i.readAllItems((err) => {});
// $ExpectType void
i.readAllItems((err, values) => {});
