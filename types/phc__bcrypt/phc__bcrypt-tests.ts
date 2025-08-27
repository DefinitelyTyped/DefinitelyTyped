import { hash, identifiers, verify } from "@phc/bcrypt";

function test_hash() {
    hash("keep-it-secret").then<string>(
        (hashedStringWithDefaultOption: string): string => hashedStringWithDefaultOption,
    );

    hash("keep-it-secret", {
        rounds: 4,
    }).then<string>(
        (hashedStringWithRounds: string): string => hashedStringWithRounds,
    );

    hash("keep-it-secret", {
        saltSize: 32,
    }).then<string>(
        (hashedStringWithSaltSize: string): string => hashedStringWithSaltSize,
    );

    hash("keep-it-secret", {
        rounds: 8,
        saltSize: 16,
    }).then<string>(
        (hashedStringWithBoth: string): string => hashedStringWithBoth,
    );
}

function test_identifiers() {
    const result = identifiers();
    result.map<string>((i: string) => i);
}

function test_verify() {
    verify("some-hashed", "plain-password").then<boolean>(
        (result: boolean): boolean => result,
    );
}
