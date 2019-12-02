// Type definitions for zengin-code 1.0
// Project: https://github.com/zengin-code/zengin-js
// Definitions by: Takaaki Mikami <https://github.com/aki-webii>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

interface BankAndBranchDataStructure {
    code: string;
    name: string;
    kana: string;
    hira: string;
    roma: string;
}

// In this definition, the key of object is not defined.
// Basically, it should be defined. But in this case, the key cann't be listed because it has a lot of key and it will be changned depends on the consolidation of Japanese banks.
interface Banks {
    [key: string]: BankAndBranchDataStructure & {
        branches: {
            [key: string]: BankAndBranchDataStructure;
        };
    };
}

declare const banks: Banks;

export default banks;
