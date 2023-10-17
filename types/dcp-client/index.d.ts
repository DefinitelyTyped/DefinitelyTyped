/// <reference path="./dcp.d.ts" />
/// <reference path="./compute.d.ts" />
/// <reference path="./wallet.d.ts" />
/// <reference path="./worker.d.ts" />

import type Compute from "dcp/compute";
import type Wallet from "dcp/wallet";
import type Worker from "dcp/worker";

/**
 * Asynchronously initialize the dcp-client bundle for use by the compute API, etc.
 */
export function init(): Promise<DCPClient>;

/**
 * Synchronously initialize the dcp-client bundle for use by the compute API, etc.
 */
export function initSync(): DCPClient;

declare global {
    /**
     * Emits a progress event. Every work function must invoke this function.
     * If a progress event is not emitted within 30 seconds, the scheduler will throw an ENOPROGRESS error.
     * @param n An estimate between 0 and 1 (inclusive) of the ratio of work completed to the total amount of work that needs to be done for one slice.
     * This value must be between 6 significant digits and must always be increasing as more work is continuously being done.
     * @returns void | EnoProgressError
     */
    function progress(n?: string | number): void | EnoProgressError;
}

/**
 * [See docs](https://docs.dcp.dev/specs/worker-api.html?highlight=string%20representation%20dcc%20value%20paid%20out#events)
 */
export interface PaymentParams {
    /**
     * Whether the slice was accepted, payment value will be 0 if not accepted.
     */
    accepted: boolean;
    /**
     * String representation of the DCC value that was paid out.
     */
    payment: string;
    /**
     * Reason string for why the slice was accepted/rejected.
     */
    reason: string;
    /**
     * Bank address that the payment was sent to.
     */
    paymentAddress: string;
}

/**
 * [See docs](https://docs.dcp.dev/specs/worker-api.html?highlight=maxworkingsandboxes%20number#schedmsg-commands)
 */
export interface SchedMsg {
    /**
     * This command instructs the worker to immediately stop working, and can optionally disable the worker to prevent restarting.
     * The user will need to manually intervene to restart the worker. When false, the worker will be disabled.
     */
    kill(temporary: boolean): void;

    /**
     * This command instructs the worker to restart, e.g. call worker.stop() then worker.start().
     */
    restart(): void;

    /**
     * This command instructs the worker to stop working on a specific job. The address of the job to stop working on.
     */
    remove(jobAddress: string): void;

    /**
     * This command is an announcement from the scheduler,
     * the provided message should be displayed to the user (modal on web, console on node). The message to be displayed to the user.
     */
    announce(message: string): void;

    /**
     * This command instructs the worker to “hard” reload, in the browser this will trigger a page refresh and in node it will exit the process.
     */
    reload(): void;

    /**
     * This web-only command will open a new webpage to the provided URL. The URL to open the new page to.
     */
    openPopup(href: string): void;
}

export interface DCPClient {
    compute: Compute;
    /**
     * The Wallet API is a library for working with the Distributive Compute Protocol (DCP), to perform operations
     * related to Addresses, Keystores, Key Pairs, etc.
     *
     * [Wallet API](https://docs.dcp.dev/specs/wallet-api.html)
     */
    wallet: Wallet;
    worker: Worker;
}

export class EnoProgressError implements Error {
    name: string;
    stack?: string | undefined;
    message: string;
}

export type URL = string;
export type DcpURL = object | string;

export type Status = any;
export type WorkValueQuote = any;
export type WorkValue = any;

export interface PublicProperties {
    /**
     * Public-facing name of the job.
     */
    name: string;

    /**
     * Public-facing description of the job.
     */
    description: string;

    /**
     * Public-facing link to an external resource about the job.
     */
    link: string;
}
