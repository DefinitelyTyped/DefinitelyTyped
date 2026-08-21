import { Codec } from "level-codec";

const test = (codec: Codec) => {
    return codec.keyAsBuffer();
};

test(new Codec({ keyEncoding: "hex" }));
test(new Codec());

// new not needed
test(Codec({ keyEncoding: "hex" }));
test(Codec());
