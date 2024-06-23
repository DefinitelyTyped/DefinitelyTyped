/// <reference types="node"/>

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
        };
        buffer: Buffer;
    };
}

declare function createType1Message(workstation: string, domain: string): string;
declare function decodeType2Message(type1Message: string): NtlmType2;
declare function createType3Message(
    type2Message: NtlmType2,
    username: string,
    password: string,
    workstation: string,
    domain: string,
): string;
export { createType1Message, createType3Message, decodeType2Message };
