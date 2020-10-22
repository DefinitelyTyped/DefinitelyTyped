import * as React from 'react';
import * as Box from 'ink-box';
import * as Gradient from 'ink-gradient';

function test() {
    return (
        <Gradient name="rainbow">
            <Box borderStyle="round" borderColor="cyan" float="center" padding={1}>
                I Love TypeScript!
            </Box>
        </Gradient>
    );
}
