declare namespace IOSTContract {
    interface Block {
        number: number;
        parent_hash: string;
        witness: string;
        time: number;
    }

    interface _IOSTCrypto {
        sha3(data: string): string;
        verify(algo: string, message: string, signature: string, pubkey: string): number;
    }
}

declare const IOSTCrypto: IOSTContract._IOSTCrypto;
