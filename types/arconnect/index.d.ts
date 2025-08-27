import { SignatureOptions } from "arweave/node/lib/crypto/crypto-interface";
import Transaction from "arweave/node/lib/transaction";

/**
 * Arweave wallet declarations
 */
declare global {
    interface Window {
        arweaveWallet: {
            connect(permissions: PermissionType[]): Promise<void>;
            disconnect(): Promise<void>;
            getActiveAddress(): Promise<string>;
            getAllAddresses(): Promise<string[]>;
            getWalletNames(): Promise<{ [addr: string]: string }>;
            sign(
                transaction: Transaction,
                options?: SignatureOptions,
            ): Promise<Transaction>;
            getPermissions(): Promise<PermissionType[]>;
            encrypt(
                data: string,
                options: {
                    algorithm: string;
                    hash: string;
                    salt?: string | undefined;
                },
            ): Promise<Uint8Array>;
            decrypt(
                data: Uint8Array,
                options: {
                    algorithm: string;
                    hash: string;
                    salt?: string | undefined;
                },
            ): Promise<string>;
        };
    }
    interface WindowEventMap {
        walletSwitch: CustomEvent<{ address: string }>;
        arweaveWalletLoaded: CustomEvent<{}>;
    }
}

/**
 * Arweave wallet permission types
 */
export type PermissionType =
    | "ACCESS_ADDRESS"
    | "ACCESS_ALL_ADDRESSES"
    | "SIGN_TRANSACTION"
    | "ENCRYPT"
    | "DECRYPT";

export {};
