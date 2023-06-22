import * as React from 'react';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

() => (
    <ScrollSync onSync={e => e.childNodes} proportional vertical horizontal enabled>
        <ScrollSyncPane enabled group="one" attachTo={document.body}>
            <div></div>
        </ScrollSyncPane>
        <ScrollSyncPane enabled group="two" attachTo={document.body}>
            <div></div>
        </ScrollSyncPane>
        <ScrollSyncPane enabled group={["one", "two"]} attachTo={document.body}>
            <div></div>
        </ScrollSyncPane>
    </ScrollSync>
);
