import * as React from 'react';
import Latex = require('react-latex');

export default (
    <div>
        <Latex
            displayMode={true}
            leqno={true}
            fleqn={true}
            throwOnError={true}
            errorColor="#123123"
            macros={{ a: 1, b: 2 }}
            minRuleThickness={123}
            colorIsTextColor={true}
            maxSize={123}
            maxExpand={123}
            strict={true}
            trust={true}
        >
            abc
        </Latex>
        <Latex />
    </div>
);
