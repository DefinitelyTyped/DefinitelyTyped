import * as React from "react";
import { withSizes, Sizes } from "react-sizes";

interface TestProps {
    foo: string;
}

type TestInnerProps = TestProps & Sizes;

const mapSizesToProps = ({ width, height }: Sizes) => ({
    width,
    height
});

const TestComponent: React.ComponentType<TestInnerProps> = ({
    foo,
    width,
    height
}) => {
    foo; // $ExpectType string
    width; // $ExpectType number
    height; // $ExpectType number
    return (
        <div>
            <p>Foo: {foo}</p>
            <p>Window width: {width}</p>
            <p>Window height: {height}</p>
        </div>
    );
};

withSizes(mapSizesToProps)(TestComponent); // $ExpectType ComponentType<TestProps>
