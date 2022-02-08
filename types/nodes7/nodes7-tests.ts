import nodes7 = require("nodes7");

const s7bool: nodes7.S7Types = true;
const s7number: nodes7.S7Types = 0;
const s7string: nodes7.S7Types = "";

const i = new nodes7(); // $ExpectType NodeS7

i.initiateConnection(); // $ExpectError
i.initiateConnection({});  // $ExpectError
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
    host: 0  // $ExpectError
}, () => {});
i.initiateConnection({
    port: "0"  // $ExpectError
}, () => {});
i.initiateConnection({
    rack: "0"  // $ExpectError
}, () => {});
i.initiateConnection({
    slot: "0"  // $ExpectError
}, () => {});
i.initiateConnection({
    timeout: "0"  // $ExpectError
}, () => {});
i.initiateConnection({
    localTSAP: "0"  // $ExpectError
}, () => {});
i.initiateConnection({
    remoteTSAP: "0"  // $ExpectError
}, () => {});

i.dropConnection(); // $ExpectError
i.dropConnection(() => {}); // $ExpectType void

i.setTranslationCB(); // $ExpectError
i.setTranslationCB(() => {}); // $ExpectError
i.setTranslationCB(() => ""); // $ExpectType void
i.setTranslationCB(x => x); // $ExpectType void

i.addItems(); // $ExpectError
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

i.writeItems(); // $ExpectError
i.writeItems(""); // $ExpectError
i.writeItems([""]); // $ExpectError
i.writeItems("", 0); // $ExpectError
i.writeItems([""], [0]); // $ExpectError
// $ExpectType number
i.writeItems("", 0, () => {});
// $ExpectType number
i.writeItems([""], [0], () => {});
// $ExpectType number
i.writeItems("", 0, (err) => {});
// $ExpectType number
i.writeItems([""], [0], (err) => {});
i.writeItems("", [0], () => {}); // $ExpectError
i.writeItems([""], 0, () => {}); // $ExpectError

i.readAllItems(); // $ExpectError
// $ExpectType void
i.readAllItems(() => {});
// $ExpectType void
i.readAllItems((err) => {});
// $ExpectType void
i.readAllItems((err, values) => {});
