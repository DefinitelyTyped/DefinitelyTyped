import RSVP from "rsvp";

export interface WaitOptions {
    waitForTimers?: boolean | undefined;
    waitForAJAX?: boolean | undefined;
    waitForWaiters?: boolean | undefined;
}

export default function wait(options?: WaitOptions): RSVP.Promise<void>;
