import * as React from 'react';
import Truncate from 'react-truncate';

const TruncateTest: React.SFC = _ => (
    <div>
        <Truncate>
            Test string
        </Truncate>

        <Truncate lines={2} ellipsis="..." onTruncate={(isTruncated) => isTruncated} className="testClass">
            <div>Test string</div>
        </Truncate>

        <Truncate lines={false} ellipsis={<span>Read more</span>} id="identifier">
            <div>Test string</div>
        </Truncate>

        <Truncate trimWhitespace={true}>
            <div>Test string</div>
        </Truncate>
    </div>
);
