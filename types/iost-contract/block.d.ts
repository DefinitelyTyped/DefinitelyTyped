declare namespace IOSTContract {
    interface Block {
        number: number;
        parent_hash: string;
        witness: string;
        time: number;
    }
}

declare const block: IOSTContract.Block;
