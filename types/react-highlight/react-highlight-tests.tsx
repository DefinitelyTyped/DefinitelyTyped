import * as React from 'react';
import Highlight from 'react-highlight';

export const _ = () => (
    <>
        <Highlight />
        <Highlight className="javascript" />
        <Highlight className="typescript">`console.log("Hello, world!");`</Highlight>
        <Highlight innerHTML />
        <Highlight innerHTML={true} />
        <Highlight innerHTML={false} />
    </>
);
