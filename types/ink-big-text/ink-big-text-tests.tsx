import * as React from 'react';
import * as Gradient from 'ink-gradient';
import * as BigText from 'ink-big-text';

function test() {
    return (
        <Gradient name="rainbow">
            <BigText text="I love TypeScript" backgroundColor="black" align="center" />
        </Gradient>
    );
}
