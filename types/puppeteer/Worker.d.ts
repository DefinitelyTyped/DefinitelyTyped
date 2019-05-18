import { Evaluateable, ExecutionContextable } from "./able";
import { EventEmitter } from "events";

/**
 * The Worker class represents a WebWorker.
 * The events workercreated and workerdestroyed are emitted on the page object to signal the worker lifecycle.
 */
export interface Worker extends Evaluateable, EventEmitter, ExecutionContextable {
    url(): string;
}
