import React from 'react';
import { Text, render } from 'ink';
import TextAnimation from 'ink-text-animation';

const Demo = () => (
    <div>
        <TextAnimation>
            <Text>Look at me, I'm moving!</Text>
        </TextAnimation>
    </div>
);

render(<Demo />);
