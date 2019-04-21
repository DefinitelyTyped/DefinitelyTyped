import React = require("react");

// Function/class components
// ---------------------------------------
interface FunctionComponentProps {
    foo?: number;
    bar: number;
}
const FunctionComponent: React.FC<FunctionComponentProps> = ({
    foo = 123,
    bar
}) => {
    return <div>{foo + bar}</div>;
};

interface ClassComponentProps {
    foo: number;
    bar: number;
}
class ClassComponent extends React.Component<ClassComponentProps> {
    static defaultProps = {
        foo: 123,
    };

    render() {
        return <div>{this.props.foo + this.props.bar}</div>;
    }
}

const fcProps: React.ComponentProps<typeof FunctionComponent> = { bar: 123 };
const ccProps: React.ComponentProps<typeof ClassComponent> = { bar: 123 };

// Intrinsic elements
// ---------------------------------------
type ImgProps = React.ComponentProps<'img'>;
// $ExpectType "async" | "auto" | "sync" | undefined
type ImgPropsDecoding = ImgProps['decoding'];
type ImgPropsWithRef = React.ComponentPropsWithRef<'img'>;
// $ExpectType ((instance: HTMLImageElement | null) => void) | RefObject<HTMLImageElement> | null | undefined
type ImgPropsWithRefRef = ImgPropsWithRef['ref'];
type ImgPropsWithoutRef = React.ComponentPropsWithoutRef<'img'>;
// $ExpectType false
type ImgPropsHasRef = 'ref' extends keyof ImgPropsWithoutRef ? true : false;
