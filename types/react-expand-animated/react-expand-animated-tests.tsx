import * as React from 'react';
import Expand from 'react-expand-animated';

<Expand
    open={true}
    duration={1000}
    easing="ease-out"
    className="my-class"
    tag="div"
    transitions={['height', 'opacity']}
    styles={{
        open: { marginTop: 100 },
        close: { marginTop: 0 },
    }}
>
    <div />
</Expand>;

// $ExpectError
<Expand transitions={['not-a-css-prop']}>
    <div />
</Expand>;

<Expand
    styles={{
        // $ExpectError
        open: { notACssProp: 100 },
        close: { marginBottom: 100 },
    }}
>
    <div />
</Expand>;

<Expand
    styles={{
        open: { marginBottom: 100 },
        // $ExpectError
        close: { notACssProp: 100 },
    }}
>
    <div />
</Expand>;
