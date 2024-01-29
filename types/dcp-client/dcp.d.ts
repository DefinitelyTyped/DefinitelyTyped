import type Compute from "dcp/compute";
import type Wallet from "dcp/wallet";
import type Worker from "dcp/worker";

export as namespace dcp;

export const compute: Compute;

/**
 * The global symbol injected by `dcp-client` when loaded in a browser environment. Exposes the various
 * submodules of the API.
 *
 * [Documentation](https://docs.dcp.dev/index.html)
 */
export const wallet: Wallet;

export const worker: Worker;
