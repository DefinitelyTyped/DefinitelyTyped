import * as fs from 'fs';

import { Tracer } from 'chrome-trace-event';

// This is copied from Webpack (real world usage)
// https://github.com/webpack/webpack/blob/10282ea20648b465caec6448849f24fc34e1ba3e/lib/debug/ProfilingPlugin.js#L79
const trace = new Tracer({
    noStream: true
});

const fsStream = fs.createWriteStream('path/to/happiness');

trace.pipe(fsStream);

trace.instantEvent({
    name: "TracingStartedInPage",
    id: 42,
    cat: ["disabled-by-default-devtools.timeline"],
    args: {
        data: {
            sessionId: "-1",
            page: "0xfff",
            frames: [
                {
                    frame: "0xfff",
                    url: "webpack",
                    name: ""
                }
            ]
        }
    }
});

trace.instantEvent({
    name: "TracingStartedInBrowser",
    id: 42,
    cat: ["disabled-by-default-devtools.timeline"],
    args: {
        data: {
            sessionId: "-1"
        }
    }
});
