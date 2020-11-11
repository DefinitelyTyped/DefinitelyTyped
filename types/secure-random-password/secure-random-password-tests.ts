import * as srp from "secure-random-password";

{
    srp.randomPassword();
    srp.randomPassword({ length: 4, characters: srp.digits });
    srp.randomPassword({ characters: [srp.lower, srp.upper, srp.digits] });
    srp.randomPassword({
        characters: [
            { characters: srp.upper, exactly: 1 },
            { characters: srp.symbols, exactly: 1 },
            srp.lower]
    });
    srp.randomPassword({
        characters: [
            { characters: srp.symbols, exactly: 1 },
            { characters: srp.upper },
        ]
    });
    srp.randomPassword({
        characters: { characters: srp.symbols }
    });
    srp.randomPassword({
        characters: [
            { characters: srp.symbols, exactly: 1 },
            { characters: srp.upper },
            '_-',
        ]
    });
    srp.randomPassword({ avoidAmbiguous: false, characters: 'O0o' });
    srp.randomPassword({ characters: 'abc' });
    srp.randomPassword({ characters: srp.lower, predicate: (x: string) => !x.includes('secure') });

    srp.randomString();
    srp.randomString({ length: 8 });
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
