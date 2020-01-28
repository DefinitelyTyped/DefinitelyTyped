declare namespace IOSTContract {
    interface Blockchain {
        transfer(from: string, to: string, amount: string, memo: string): void;
        withdraw(to: string, amount: string, memo: string): void;
        deposit(from: string, amount: string, memo: string): void;
        contractName(): string;
        publisher(): string;
        contractOwner(): string;
        call(contract: string, abi: string, args: string[] | string): string[];
        callWithAuth(contract: string, abi: string, args: string[] | string): string[];
        requireAuth(account: string, permission: string): boolean;
        receipt(data: string): void;
        event(data: string): void;
    }
}

declare const blockchain: IOSTContract.Blockchain;
