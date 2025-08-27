//

declare namespace IOSTContract {
    interface Tx {
        time: number;
        hash: string;
        expiration: number;
        gas_limit: number;
        gas_ratio: number;
        auth_list: object;
        publisher: string;
    }
}

declare const tx: IOSTContract.Tx;
