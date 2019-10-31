import * as srp from "secure-random-password";

{
    srp.randomPassword();
    srp.randomString();
    srp.randomString({
        length: 5,
        characters: [
            srp.lower,
            srp.upper,
            srp.consonants,
            srp.vowels,
            srp.digits,
            srp.symbols,
            srp.fullSymbols,
            srp.copyableSymbols
        ]
    });
}
