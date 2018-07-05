import { LocalLengthBlock, Null } from "asn1js";
import { OctetString } from "asn1js";
import { ObjectIdentifier } from "asn1js";
import { UTCTime } from "asn1js";

let t = new LocalLengthBlock();

{
    // Null
    let testNull = new Null();
    let json = testNull.toJSON();

    testNull.toBER();
    testNull.fromBER(new Uint8Array(0).buffer, 0, 0);
}

{
    // OctetString
    let test = new OctetString();
    let json = test.toJSON();

    test.toBER();
    test.fromBER(new Uint8Array(0).buffer, 0, 0);
    test.isEqual(test);
    OctetString.blockName() === "name";
}

{
    // ObjectIdentifier
    let test = new ObjectIdentifier();
    let json = test.toJSON();

    test.toBER();
    test.fromBER(new Uint8Array(0).buffer, 0, 0);
    OctetString.blockName() === "name";
}

{
    // UTCTime
    let test = new UTCTime();
    test = new UTCTime({
        value: ""
    });
    test = new UTCTime({
        valueDate: new Date()
    });
    let json = test.toJSON();

    test.toBER();
    test.fromBER(new Uint8Array(0).buffer, 0, 0);
    OctetString.blockName() === "name";
}
