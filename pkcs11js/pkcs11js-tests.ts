/// <reference path="./pkcs11js.d.ts" />

import * as pkcs11js from "pkcs11js";

const libPath = "C:\\tmp\\rtpkcs11ecp.dll";

let pkcs11 = new pkcs11js.PKCS11();
pkcs11.load(libPath);

pkcs11.C_Initialize();

try {
    // Getting info about PKCS11 Module
    let module_info = pkcs11.C_GetInfo();

    // Getting list of slots
    let slots = pkcs11.C_GetSlotList(true);
    let slot = slots[0];

    // Getting info about slot
    let slot_info = pkcs11.C_GetSlotInfo(slot);
    // Getting info about token
    let token_info = pkcs11.C_GetTokenInfo(slot);

    // Getting info about Mechanism
    let mechs = pkcs11.C_GetMechanismList(slot);
    let mech_info = pkcs11.C_GetMechanismInfo(slot, mechs[0]);

    let session = pkcs11.C_OpenSession(slot, pkcs11js.CKF_RW_SESSION | pkcs11js.CKF_SERIAL_SESSION);

    // Getting info about Session
    let info = pkcs11.C_GetSessionInfo(session);
    pkcs11.C_Login(session, 1, "12345678");

    /**
    * Your app code here
    */

    pkcs11.C_Logout(session);
    pkcs11.C_CloseSession(session);
}
catch (e) {
    console.error(e);
}
finally {
    pkcs11.C_Finalize();
}