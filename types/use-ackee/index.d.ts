import { TrackingOptions } from "ackee-tracker";

interface ServerDetails {
    server: string;
    domainId: string;
}

declare function useAckee(pathname: string | null, server: ServerDetails, opts?: TrackingOptions): void;

declare namespace useAckee {
    function useAckee(pathname: string | null, server: ServerDetails, opts?: TrackingOptions): void;
}

export = useAckee;
