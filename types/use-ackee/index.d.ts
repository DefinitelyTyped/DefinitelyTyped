// Type definitions for use-ackee 2.0
// Project: https://github.com/electerious/use-ackee
// Definitions by: Spencer Elliott <https://github.com/elliottsj>
//                 Pablo Sáez <https://github.com/PabloSzx>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { TrackingOptions } from 'ackee-tracker';

interface ServerDetails {
    server: string;
    domainId: string;
}

declare function useAckee(pathname: string | null, server: ServerDetails, opts?: TrackingOptions): void;

declare namespace useAckee {
    function useAckee(pathname: string | null, server: ServerDetails, opts?: TrackingOptions): void;
}

export = useAckee;
