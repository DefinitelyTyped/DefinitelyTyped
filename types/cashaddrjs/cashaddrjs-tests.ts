import * as cashaddr from 'cashaddrjs';

let someAddress = 'bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a';
let prefix: string;
let type: string;
let hash: Uint8Array;
({ prefix, type, hash } = cashaddr.decode(someAddress));
someAddress = cashaddr.encode(prefix, type, hash);
const someInvalidInput = 'abcdefghijklmn';
try {
    cashaddr.decode(someInvalidInput);
} catch (err) {
    if (err instanceof cashaddr.ValidationError) {
        // As expected.
    } else {
        const someMessage = 'some error message';
        throw new cashaddr.ValidationError(someMessage);
    }
}
