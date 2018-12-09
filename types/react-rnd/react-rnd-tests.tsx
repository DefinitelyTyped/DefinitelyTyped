import * as React from 'react';
import { default as Rnd, ResizeHandler } from "react-rnd";

const onResize: ResizeHandler = (e, direction, ref, delta, position) => {
    direction === 'right';
    delta.width;
    delta.height;
    position.x;
    position.y;
};

<Rnd
    className="class"
    lockAspectRatio
    maxWidth={100}
    enableResizing={{
        bottom: true,
        bottomLeft: true,
        bottomRight: false,
        left: false
    }}
    disableDragging={false}
    resizeHandleStyles={{
        top: { background: '#000' }
    }}
/>;
