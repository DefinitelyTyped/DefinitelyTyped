import Rect, { useRect } from '@reach/rect';

import * as React from 'react';
import { render } from 'react-dom';

function Example() {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const rect = useRect(ref);

    return (
        <div>
            <pre>{JSON.stringify(rect, null, 2)}</pre>
            <div ref={ref} />

            <Rect observe={false}>
                {({ rect, ref }) => (
                    <div ref={ref}>
                        <div>Will not measure the element when false</div>
                        <div>
                            Edit this code and change it to <code>true</code>
                        </div>
                        <pre>{JSON.stringify(rect, null, 2)}</pre>
                    </div>
                )}
            </Rect>
        </div>
    );
}

render(<Example />, document.getElementById('app'));
render(<Rect />, document.getElementById('app'));
