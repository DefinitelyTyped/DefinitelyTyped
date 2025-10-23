import * as React from "react";

interface Props {
    bool?: boolean;
    fnc: () => any;
    node?: React.ReactNode;
    num?: number;
    reqNode: NonNullable<React.ReactNode>;
    str: string;
}

const defaultProps = {
    fnc: (() => "abc") as () => any,
    extraBool: false,
    reqNode: "text_node" as NonNullable<React.ReactNode>,
};

class UnannotatedPropTypesAndDefaultProps extends React.Component {
    static defaultProps = defaultProps;
}

const unannotatedPropTypesAndDefaultPropsTests = [
    <UnannotatedPropTypesAndDefaultProps />,
    // @ts-expect-error defaultProps don't magically add to the props type
    <UnannotatedPropTypesAndDefaultProps extraBool={0} />,
];

class AnnotatedDefaultProps extends React.Component<Props> {
    static defaultProps = defaultProps;
}

const annotatedDefaultPropsTests = [
    // @ts-expect-error
    <AnnotatedDefaultProps />, // str is required
    <AnnotatedDefaultProps str="abc" />,
    <AnnotatedDefaultProps str="abc" reqNode={<span />} />,
    // @ts-expect-error
    <AnnotatedDefaultProps str={() => {}} />, // str type mismatch
    <AnnotatedDefaultProps
        bool={true}
        extraBool={false}
        fnc={() => {}}
        node={null}
        num={0}
        reqNode={undefined}
        str="abc"
    />,
];

class UnannotatedDefaultProps extends React.Component {
    static defaultProps = defaultProps;
}

const unannotatedDefaultPropsTests = [
    <UnannotatedDefaultProps />,
    <UnannotatedDefaultProps
        extraBool={true}
        fnc={() => {}}
        reqNode={<span />}
    />,
];

class ComponentWithNoDefaultProps extends React.Component<Props> {}

function FunctionalComponent(
    {
        fnc = (() => "abc"),
        reqNode = "text_node",
    }: Omit<Props, "fnc" | "reqNode"> & Partial<Pick<Props, "fnc" | "reqNode">>,
) {
    return <>{reqNode}{fnc()}</>;
}

const functionalComponentTests = [
    // @ts-expect-error
    <FunctionalComponent />,
    <FunctionalComponent str="" />,
];

const MemoFunctionalComponent = React.memo(FunctionalComponent);
const MemoAnnotatedDefaultProps = React.memo(AnnotatedDefaultProps);
const LazyMemoFunctionalComponent = React.lazy(async () => ({ default: MemoFunctionalComponent }));
const LazyMemoAnnotatedDefaultProps = React.lazy(async () => ({ default: MemoAnnotatedDefaultProps }));

const memoTests = [
    // @ts-expect-error
    <MemoFunctionalComponent />,
    <MemoFunctionalComponent str="abc" />,
    // @ts-expect-error
    <MemoAnnotatedDefaultProps />,
    <AnnotatedDefaultProps str="abc" />,
    <MemoAnnotatedDefaultProps str="abc" />,
    <LazyMemoFunctionalComponent str="abc" />,
    // @ts-expect-error
    <LazyMemoAnnotatedDefaultProps />,
    <LazyMemoAnnotatedDefaultProps str="abc" />,
];

const ForwardRef = React.forwardRef((
    { fnc = (() => "abc"), reqNode = "text_node", ...props }:
        & Omit<Props, "fnc" | "reqNode">
        & Partial<Pick<Props, "fnc" | "reqNode">>,
    ref: React.Ref<ComponentWithNoDefaultProps>,
) => <ComponentWithNoDefaultProps ref={ref} fnc={fnc} reqNode={reqNode} {...props} />);

const forwardRefTests = [
    // @ts-expect-error
    <ForwardRef />,
    <ForwardRef
        fnc={() => {}}
        reqNode={<span />}
        str=""
    />,
    <ForwardRef str="abc" />,
];
