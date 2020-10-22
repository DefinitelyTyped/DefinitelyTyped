import * as React from 'react';
import Flag from 'react-world-flags';

const tests = () => {
    return [
        <Flag code="nor" height="16" />,
        <Flag code="foo" fallback={<span>Unknown</span>} />,
        <Flag code="" height="42" fallback={<span>Does not exist.</span>} />,
        <Flag code="xxx" height="42" />,
    ];
};
