import { base32, base64, codec } from "rfc4648";

base32.stringify([42, 121, 160]);
base32.parse("FJ42A===");
base32.parse("He1l0==", { loose: true });
base64.parse("AOk=", { out: Array });
base64.parse("AOk", { loose: true });

const myEncoding = {
    chars: "01234567",
    bits: 3
};

codec.stringify([220, 10], myEncoding);
codec.parse("670050", myEncoding, { loose: true });
