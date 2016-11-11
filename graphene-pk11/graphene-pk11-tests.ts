
import * as graphene from "graphene-pk11";
let Module = graphene.Module;

let lib = "/usr/local/lib/softhsm/libsofthsm2.so";

let mod = Module.load(lib, "SoftHSM");
mod.initialize();

let slot = mod.getSlots(0);
if (slot.flags & graphene.SlotFlag.TOKEN_PRESENT) {
    let session = slot.open();
    session.login("12345");

    // generate EC key
    let keys = session.generateKeyPair(graphene.KeyGenMechanism.ECDSA, {
        keyType: graphene.KeyType.ECDSA,
        token: false,
        derive: true,
        paramsECDSA: graphene.NamedCurve.getByName("secp192r1").value
    }, {
            keyType: graphene.KeyType.ECDSA,
            token: false,
            derive: true
        });

    // derive algorithm
    let alg = {
        name: "ECDH1_DERIVE",
        params: new graphene.EcdhParams(
            graphene.EcKdf.SHA1,
            null,
            keys.publicKey.getAttribute({ pointEC: null }).pointEC)
    };

    // Template for derived key
    let template = {
        "class": graphene.ObjectClass.SECRET_KEY,
        "token": false,
        "keyType": graphene.KeyType.AES,
        "valueLen": 256 / 8,
        "encrypt": true,
        "decrypt": true
    };

    // Key derivation
    let dKey = session.deriveKey(alg, keys.privateKey, template);
    console.log("Derived key handle:", dKey.handle);

    session.logout();
    session.close();
}
else {
    console.error("Slot is not initialized");
}

mod.finalize();

// Find

const session = slot.open();

// Get all objects
session.find();

let object: graphene.SessionObject;
// Get objects by params
object = session.find({ value: new Buffer(0), label: "some" }).items(0);
// Get objects by params and use callback for each founded object
object = session.find({ value: new Buffer(0), label: "some" }, (obj, index) => index === 0).items(0);

// Attributes

// get attribute by name
object.getAttribute("label").label;
// get multi-attributes
object.getAttribute({
    label: null,
    token: null,
    issuer: null,
}).label;

// set 1 attribute
object.setAttribute({ label: "new label" });
// set * attributes
object.setAttribute({ label: "new label", token: true });