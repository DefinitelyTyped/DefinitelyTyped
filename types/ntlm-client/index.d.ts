// Type definitions for ntlm-client 0.1
// Project: https://github.com/clncln1/node-ntlm-client
// Definitions by: Manuel Borrajo <https://github.com/borrajo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import "node";

interface NtlmType2 {
    flags: number;
    encoding: string;
    version: number;
    challenge: Buffer;
    targetName: string;
    targetInfo: {
        parsed: {
            DOMAIN: string;
            SERVER: string;
            DNS: string;
            FQDN: string;
            PARENT_DNS: string;
        },
        buffer: Buffer;
    };
}

declare namespace ntlm {
    function createType1Message(workstation: string, domain: string): string;
    function decodeType2Message(type1Message: string): NtlmType2;
    function createType3Message(type2Message: NtlmType2, username: string, password: string, workstation: string, domain: string): string;
}

export { ntlm };
