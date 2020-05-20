import * as React from 'react';
import { render } from 'react-dom';

import { LiveAnnouncer, LiveMessage, LiveMessenger } from 'react-aria-live';

render(
    <LiveAnnouncer>
        <LiveMessage
            aria-live='polite'
            message='hello'
            clearOnUnmount
        />
    </LiveAnnouncer>,
    document.getElementById('main')
);

render(
    <LiveAnnouncer>
        <LiveMessenger>
            {({ announcePolite, announceAssertive }) =>
                <>
                    <button
                        onClick={() => {
                            announcePolite('Polite message');
                        }}>
                        Press me for a polite message
                    </button>
                    <button
                        onClick={() => {
                            announceAssertive('Assertive message', 'UniqueId');
                        }}>
                        Press me for an assertive message
                    </button>
                </>
            }
        </LiveMessenger>
    </LiveAnnouncer>,
    document.getElementById('main')
);
