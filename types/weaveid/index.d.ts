// Type definitions for weaveid 1.0
// Project: https://github.com/instawallet/weaveid-js
// Definitions by: Marton Lederer <https://github.com/martonlederer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
