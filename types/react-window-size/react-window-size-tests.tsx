import * as React from 'react';
import windowSize, { WindowSizeProps } from 'react-window-size';

interface TestProps {
    foo: string;
}

type TestInnerProps = TestProps & WindowSizeProps;

const TestComponent: React.ComponentType<TestInnerProps> = ({ foo, windowHeight, windowWidth }) => {
    foo; // $ExpectType string
    windowHeight; // $ExpectType number
    windowWidth; // $ExpectType number
    return (
        <div>
            <p>Foo: {foo}</p>
            <p>Window height: {windowHeight}</p>
            <p>Window width: {windowWidth}</p>
        </div>
    );
};

windowSize(TestComponent); // $ExpectType ComponentType<TestProps>
