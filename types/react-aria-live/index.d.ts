import * as React from "react";

export class LiveAnnouncer extends React.Component {
    announcePolite(message: string, id?: string): void;
    announceAssertive(message: string, id?: string): void;
}

export const LiveMessage: React.FunctionComponent<{
    "aria-live": "assertive" | "polite";
    clearOnUnmount?: boolean | "true" | "false" | undefined;
    message: string;
}>;

export const LiveMessenger: React.FunctionComponent<{
    children(contextProps: {
        announceAssertive(message: string, id?: string): void;
        announcePolite(message: string, id?: string): void;
    }): React.ReactNode;
}>;
