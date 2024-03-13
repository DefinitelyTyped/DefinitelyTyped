import * as React from "react";

import { LiveAnnouncer, LiveMessage, LiveMessenger } from "react-aria-live";

<LiveAnnouncer>
    <LiveMessage
        aria-live="polite"
        message="hello"
        clearOnUnmount
    />
</LiveAnnouncer>;

<LiveAnnouncer>
    <LiveMessenger>
        {({ announcePolite, announceAssertive }) => (
            <>
                <button
                    onClick={() => {
                        announcePolite("Polite message");
                    }}
                >
                    Press me for a polite message
                </button>
                <button
                    onClick={() => {
                        announceAssertive("Assertive message", "UniqueId");
                    }}
                >
                    Press me for an assertive message
                </button>
            </>
        )}
    </LiveMessenger>
</LiveAnnouncer>;
