/// <reference path="./graphene-pk11.d.ts" />

import * as graphene from "graphene-pk11";

// Example of Hashing from README.MD <https://github.com/PeculiarVentures/graphene#hashing>
let Module = graphene.Module;

let lib = "/usr/local/lib/softhsm/libsofthsm2.so";

let mod = Module.load(lib, "SoftHSM");
mod.initialize();

let slot = mod.getSlots(0);
if (slot.flags & graphene.SlotFlag.TOKEN_PRESENT) {
    let session = slot.open();

    let digest = session.createDigest("sha1");
    digest.update("simple text 1");
    digest.update("simple text 2");
    let hash = digest.final();

    console.log("Hash SHA1:", hash.toString("hex")); // Hash SHA1: e1dc1e52e9779cd69679b3e0af87d2e288190d34 
    session.close();
}
else {
    console.error("Slot is not initialized");
}

mod.finalize();