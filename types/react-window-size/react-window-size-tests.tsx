import * as React from "react";
import windowSize, { WindowSizeProps } from "react-window-size";

interface TestProps {
    foo: string;
}

type TestInnerProps = TestProps & WindowSizeProps;

declare const TestComponent: React.ComponentType<TestInnerProps>;

// $ExpectType ComponentType<TestProps>
windowSize(TestComponent);
