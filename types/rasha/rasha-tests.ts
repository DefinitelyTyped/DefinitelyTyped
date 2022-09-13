import * as rasha from "rasha";

const gOptions: Rasha.GenerateOptions = { format: "jwk" };

rasha.generate(gOptions).then((keypair: Rasha.RsaKeys) => {
    console.log(keypair.private);
    console.log(keypair.public);
});

// const rsa: RsaKeys = Rasha.generate(gOptions);
