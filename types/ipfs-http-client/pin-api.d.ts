import { MultiHash, NodeCallback } from './common';

export interface PinAddOptions {
    recursive: boolean;
}

export interface PinLsOptions {
    type: boolean;
}

export interface PinLsResult {
    hash: string;
    type: string;
}

export interface PinRmOptions {
    recursive: boolean;
}

export interface Pin {
    add(hash: MultiHash, options?: Partial<PinAddOptions>): Promise<void>;
    add(hash: MultiHash, options: Partial<PinAddOptions>, callback: NodeCallback<void>): void;
    add(hash: MultiHash, callback: NodeCallback<void>): void;

    ls(hash?: MultiHash): Promise<PinLsResult[]>;
    ls(options?: Partial<PinLsOptions>): Promise<PinLsResult[]>;
    ls(hash: MultiHash, options?: Partial<PinLsOptions>): Promise<PinLsResult[]>;
    ls(callback: NodeCallback<PinLsResult[]>): void;
    ls(hash: MultiHash, callback: NodeCallback<PinLsResult[]>): void;
    ls(options: Partial<PinLsOptions>, callback: NodeCallback<PinLsResult[]>): void;
    ls(hash: MultiHash, options: Partial<PinLsOptions>, callback: NodeCallback<PinLsResult[]>): void;

    rm(hash: MultiHash, options?: Partial<PinRmOptions>): Promise<void>;
    rm(hash: MultiHash, callback: NodeCallback<void>): void;
    rm(hash: MultiHash, options: PinRmOptions, callback: NodeCallback<void>): void;
}
