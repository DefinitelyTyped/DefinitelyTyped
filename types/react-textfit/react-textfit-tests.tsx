import * as React from 'react';
import { Textfit } from 'react-textfit';

const TruncatedText = () => (
    <Textfit
        mode="single"
        forceSingleModeWidth={true}
        min={1}
        max={100}
        throttle={50}
        onReady={s => {
            console.log(s);
        }}
    >
        test
    </Textfit>
);
