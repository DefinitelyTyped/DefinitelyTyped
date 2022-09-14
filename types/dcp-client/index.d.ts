// Type definitions for dcp-client 4.2
// Project: https://github.com/Distributed-Compute-Labs/dcp-client
// Definitions by: Roman Fairushyn <https://github.com/roman5364>
//                 Bryan Hoang <https://github.com/bryan-hoang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyType

import { Wallet } from './src/wallet';
import { Worker } from './src/worker';
import { Compute } from './src/compute';

export function init(): Promise<DCPClient>;

export interface DCPClient {
    compute: Compute;
    wallet: Wallet;
    worker: Worker;
}

export class Keystore {
    id: number;
}

export interface Address {
    account: string;
}

export class AuthKeystore extends Keystore {}

export class PaymentKeystore extends Keystore {
    address: Address;
}

export interface LoadResult {
    keystore: Keystore;
    safe: boolean | false;
}

export interface LoadOptions {
    /**
     * The keystore filename.
     */
    filename: string | undefined;

    /**
     * The keystore label or filename.
     */
    name: string | undefined;

    /**
     * Override paths.
     */
    dir: string | undefined;

    /**
     *  Override the default keystore directory search path (Node.js Only). This must be a complete pathname.
     */
    paths?: string[] | LoadOptions["dir"];
}

export interface AuthKeystoreOptions {
    /**
     * The keystore name.
     */
    name: string | 'default';

    /**
     * An optional, user-defined identifier used for caching keystores.
     */
    contextId?: string | undefined;

    /**
     *  An optional name for the job that they keystore is being requested for.
     */
    jobName?: string | undefined;

    /**
     * Try an empty password before prompting user. Defaults to true.
     */
    checkEmpty: boolean | true;
}

export class JobHandle extends Job {}

export class JobInfo {
    status: string;
    jobInfo: object;
}
export class JobHistory {
    status: string;
    history: object;
}

export interface Ranges {
    ranges: [];
}

export class ResultHandle {}

export type jobId = number;

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

/**
 * [See docs](https://docs.dcp.dev/api/compute/classes/job.html#methods)
 */
export class Job {
    /**
     * An object to store public-facing attributes of a job. Anything stored in this object will be available for use inside the work function.
     * Properties of this object can be seen by the worker in order to display what job it is currently working on.
     */
    public: PublicProperties;

    /**
     * Setting Job.useStrict true runs the work function in the strict mode.
     */
    useStrict: boolean;

    /**
     * @accepted - Emitted when the job gets accepted by the DCP Scheduler.
     * @complete - Emitted when the job finishes.
     * @readystatechange - Emitted leading up to deployment of the job.
     * @console - Used to collect the console output of the workers.
     * @result - Emitted when a slice completes and returns.
     */
    on(event: 'accepted' | 'complete' | 'readystatechange' | 'console' | 'result', listener: () => void): this;

    /**
     * Deploys the job to the scheduler for work to be done by distributed workers all throughout the DCP network.
     * @param slicePaymentOffer - The amount of DCC user is willing to pay per slice.
     * @param paymentAccountKeystore – Instance of Wallet API Keystore being used as the payment account for executing a job.
     * @param initialSliceProfile – Object describing the cost the user believes the average slice will incur in terms of CPU/GPU and I/O.
     * @returns Promise<ResultHandle>
     */
    exec(slicePaymentOffer: number | object, paymentAccountKeystore: Keystore, initialSliceProfile: object): Promise<ResultHandle>;

    /**
     * Deploys the job for work to be done in locally in the client.
     * @param cores – The number of local cores to be used to execute the job.
     * @param slicePaymentOffer – The amount of DCC user is willing to pay per slice. However, localExec jobs don’t take DCC.
     * @param paymentAccountKeystore – Instance of Wallet API Keystore being used as the payment account for executing a job.
     * @param initialSliceProfile – Object describing the cost the user believes the average slice will incur in terms of CPU/CPU and I/O.
     * @returns Promise<ResultHandle>
     */
    localExec(cores: number, slicePaymentOffer: number | object, paymentAccountKeystore: Keystore, initialSliceProfile: object): Promise<ResultHandle>;

    /**
     * Deploys the job for work to be done in locally in the client.
     * @param reason string – The reason for job cancellation, sent to client if provided.
     * @returns Promise<void>
     */
    cancel(reason: string): Promise<void>;

    /**
     * Resumes the job.
     * @returns Promise<void>
     */
    resume(reason: string): Promise<void>;

    /**
     * Resumes the job.
     * modulePaths should not have .js extension at the end of the path. For more information on moduleIdentifiers, view the CommonJs specification in
     * [See docs](https://wiki.commonjs.org/wiki/Modules/1.1#Module_Identifiers)
     * @param modulePaths – Either a string or a list of strings that represent the module dependency path.
     * @returns Promise<void>
     */
    requires(modulePaths: string| string[]): Promise<void>;
}

export class WorkValueQuote {}

export class SliceProfile {}

export class WorkValue {}

export class Supervisor {}

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

/**
 * [See docs](https://docs.dcp.dev/specs/worker-api.html?highlight=ignorenoprogress#new-worker-options-object)
 */
export class SandboxOptions {
    /**
     * When true, the sandbox will ignore errors from the sandbox not firing progress events.
     */
    ignoreNoProgress: boolean | false;
}

/**
 * [See docs](https://docs.dcp.dev/specs/worker-api.html?highlight=maximum%20number%20sandboxes%20can%20working%20one%20time#new-worker-options-object)
 */
export interface WorkerParams {
    /**
     * @summary Maximum number of sandboxes that can be working at one time.
     */
    maxWorkingSandboxes: number | 1;

    /**
     * @summary Sandbox options
     */
    sandboxOptions: SandboxOptions;

    /**
     * @summary Address used for depositing DCCs in after a slice is computed,
     * will default to (await wallet.get()).address
     */
    paymentAddress?: string | Keystore;

    /**
     * @summary Keystore that will be used as the identity when communicating with the scheduler, will default to wallet.getId()
     */
    identityKeystore?: Keystore | undefined;

    /**
     * @summary URL to use when connecting to the scheduler, defaults to dcpConfig.scheduler.location
     */
    schedulerURL?: string;

    /**
     * @summary When provided, this worker will only compute slices for the provided job. The job must have been deployed with the local exec flag set.
     */
    jobAddress?: string;
}

/**
 * [See docs](https://docs.dcp.dev/specs/worker-api.html?highlight=maxworkingsandboxes%20number#sandbox-api)
 */
export interface Sandbox {
    /**
     * Emitted when the sandbox begins working on a slice. The job description object. Use job.public for accessing the job’s title/description.
     */
    on(event: 'sliceStart', listener: (job: object) => void): this;

    /**
     * Emitted when the sandbox completes the slice it was working on.
     */
    on(event: 'sliceFinish', listener: (result: any) => void): this;

    /**
     * @sliceError - Emitted when the slice the sandbox was working on throws an error. The first argument is the same payload from sliceStart, the second argument is the error instance.
     * @sliceEnd - Emitted when the slice either finishes or throws an error. The callback argument is the payload from sliceStart.
     * @terminate - Emitted when the sandbox environment is terminated. The sandbox will not be used after this event is emitted.
     */
    on(event: 'sliceError' | 'sliceEnd' | 'terminate', listener: () => void): this;
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