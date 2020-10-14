import * as React from 'react';
import { render } from 'react-dom';
import * as Box from 'ink-box';
import * as Gradient from 'ink-gradient';

const node = document.getElementById('main');

render(
    <Gradient name="rainbow">
        <Box borderStyle="round" borderColor="cyan" float="center" padding={1}>
            I Love TypeScript!
        </Box>
    </Gradient>,
    node,
);
