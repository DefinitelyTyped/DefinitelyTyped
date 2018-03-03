import * as React from 'react';
import Rnd from 'react-rnd';

const onResize: Rnd.ResizeHandler = (e, direction, ref, delta, position) => {
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
    enableResizing={false}
    resizeHandleStyles={{
        top: { background: '#000' }
    }}
/>;
