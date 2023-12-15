import { JWKInterface } from "arweave/node/lib/wallet";

declare global {
    interface Window {
        closeLoginModal: typeof closeLoginModal;
        openLoginModal: typeof openLoginModal;
        getAddress: typeof getAddress;
        getWallet: typeof getWallet;
        WeaveID: any;
        init: typeof init;
    }
}

export function closeLoginModal(): void;
export function openLoginModal(e?: Event): Promise<string>;
export function getAddress(): Promise<string>;
export function getWallet(): Promise<JWKInterface>;
export function init(): void;

export {};
