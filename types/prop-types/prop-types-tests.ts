import { ReactElement, ReactNode, Requireable } from "react";
import * as PropTypes from "prop-types";

class TestClass {}

interface Props {
    any?: any;
    array: string[];
    bool: boolean;
    element: ReactElement<any>;
    func(foo: string): void;
    node?: ReactNode;
    requiredNode: NonNullable<ReactNode>;
    number: number;
    object: object;
    string: string;
    symbol: symbol;
    instanceOf: TestClass;
    oneOf: 'a' | 'b' | 'c';
    oneOfType: string | boolean | {
        foo?: string;
        bar: number;
    };
    numberOrFalse: false | number;
    nodeOrRenderFn?: ReactNode | (() => ReactNode);
    arrayOf: boolean[];
    objectOf: { [K: string]: number };
    shape: {
        foo: string;
        bar?: boolean;
        baz?: any
    };
    optionalNumber?: number;
}

const innerProps = {
    foo: PropTypes.string.isRequired,
    bar: PropTypes.bool,
    baz: PropTypes.any
};

const arrayOfTypes = [PropTypes.string, PropTypes.bool, PropTypes.shape({
    foo: PropTypes.string,
    bar: PropTypes.number.isRequired
})] as Array<PropTypes.Requireable<string | boolean | { foo?: string; bar: number }>>;
type PropTypesMap = PropTypes.ValidationMap<Props>;

// TS checking
const propTypes: PropTypesMap = {
    any: PropTypes.any,
    array: PropTypes.array.isRequired,
    bool: PropTypes.bool.isRequired,
    element: PropTypes.element.isRequired,
    func: PropTypes.func.isRequired,
    node: PropTypes.node,
    requiredNode: PropTypes.node.isRequired,
    number: PropTypes.number.isRequired,
    object: PropTypes.object.isRequired,
    string: PropTypes.string.isRequired,
    symbol: PropTypes.symbol.isRequired,
    instanceOf: PropTypes.instanceOf(TestClass).isRequired,
    oneOf: PropTypes.oneOf(['a', 'b', 'c']).isRequired,
    oneOfType: PropTypes.oneOfType(arrayOfTypes).isRequired,
    numberOrFalse: PropTypes.oneOfType([PropTypes.oneOf([false]), PropTypes.number]).isRequired,
    nodeOrRenderFn: PropTypes.oneOfType<Requireable<ReactNode | (() => any)>>([PropTypes.node, PropTypes.func]),
    arrayOf: PropTypes.arrayOf(PropTypes.bool).isRequired,
    objectOf: PropTypes.objectOf(PropTypes.number).isRequired,
    shape: PropTypes.shape(innerProps).isRequired,
    optionalNumber: PropTypes.number
};

// JS checking
const propTypesWithoutAnnotation = {
    any: PropTypes.any,
    array: PropTypes.array.isRequired,
    bool: PropTypes.bool.isRequired,
    element: PropTypes.element.isRequired,
    func: PropTypes.func.isRequired,
    node: PropTypes.node,
    requiredNode: PropTypes.node.isRequired,
    number: PropTypes.number.isRequired,
    object: PropTypes.object.isRequired,
    string: PropTypes.string.isRequired,
    symbol: PropTypes.symbol.isRequired,
    instanceOf: PropTypes.instanceOf(TestClass).isRequired,
    // required generic specification because of array type widening
    oneOf: PropTypes.oneOf<'a' | 'b' | 'c'>(['a', 'b', 'c']).isRequired,
    oneOfType: PropTypes.oneOfType(arrayOfTypes).isRequired,
    // workaround for quirks of array literal type inference
    numberOrFalse: PropTypes.oneOfType([PropTypes.oneOf<false>([false]), PropTypes.number ]).isRequired,
    nodeOrRenderFn: PropTypes.oneOfType([PropTypes.node, PropTypes.func] as Array<Requireable<ReactNode | (() => any)>>),
    arrayOf: PropTypes.arrayOf(PropTypes.bool).isRequired,
    objectOf: PropTypes.objectOf(PropTypes.number).isRequired,
    shape: PropTypes.shape(innerProps).isRequired,
    optionalNumber: PropTypes.number
};

const partialPropTypes = {
    number: PropTypes.number.isRequired,
    object: PropTypes.object.isRequired,
    string: PropTypes.string.isRequired,
    symbol: PropTypes.symbol.isRequired,
};

const outerPropTypes = {
    props: PropTypes.shape(propTypes).isRequired
};

const outerPropTypesWithoutAnnotation = {
    props: PropTypes.shape(propTypesWithoutAnnotation).isRequired
};

type ExtractedArrayProps = PropTypes.InferType<(typeof arrayOfTypes)[number]>;

type ExtractedInnerProps = PropTypes.InferProps<typeof innerProps>;

type ExtractedProps = PropTypes.InferProps<typeof propTypes>;
type ExtractedPropsFromOuterProps = PropTypes.InferProps<typeof outerPropTypes>['props'];
type ExtractedPartialProps = PropTypes.InferProps<typeof partialPropTypes>;

type ExtractedPropsWithoutAnnotation = PropTypes.InferProps<typeof propTypesWithoutAnnotation>;
type ExtractedPropsFromOuterPropsWithoutAnnotation = PropTypes.InferProps<typeof outerPropTypesWithoutAnnotation>['props'];

// $ExpectType: true
type ExtractPropsMatch = ExtractedProps extends ExtractedPropsWithoutAnnotation ? true : false;
// $ExpectType: true
type ExtractPropsMatch2 = ExtractedPropsWithoutAnnotation extends ExtractedProps ? true : false;
// $ExpectType: true
type ExtractPropsMatch3 = ExtractedProps extends Props ? true : false;
// $ExpectType: true
type ExtractPropsMatch4 = Props extends ExtractedPropsWithoutAnnotation ? true : false;
// $ExpectType: true
type ExtractFromOuterPropsMatch = ExtractedPropsFromOuterProps extends ExtractedPropsFromOuterPropsWithoutAnnotation ? true : false;
// $ExpectType: true
type ExtractFromOuterPropsMatch2 = ExtractedPropsFromOuterPropsWithoutAnnotation extends ExtractedPropsFromOuterProps ? true : false;
// $ExpectType: true
type ExtractFromOuterPropsMatch3 = ExtractedPropsFromOuterProps extends Props ? true : false;
// $ExpectType: true
type ExtractFromOuterPropsMatch4 = Props extends ExtractedPropsFromOuterPropsWithoutAnnotation ? true : false;

// $ExpectType: false
type ExtractPropsMismatch = ExtractedPartialProps extends Props ? true : false;

// $ExpectType: {}
type UnmatchedPropKeys = Pick<ExtractedPropsWithoutAnnotation, Extract<{
    [K in keyof ExtractedPropsWithoutAnnotation]: ExtractedPropsWithoutAnnotation[K] extends ExtractedProps[K] ? never : K
}[keyof ExtractedPropsWithoutAnnotation], keyof ExtractedPropsWithoutAnnotation>>;
// $ExpectType: {}
type UnmatchedPropKeys2 = Pick<ExtractedProps, Extract<{
    [K in keyof ExtractedProps]: ExtractedProps[K] extends ExtractedPropsWithoutAnnotation[K] ? never : K
}[keyof ExtractedProps], keyof ExtractedProps>>;

PropTypes.checkPropTypes({xs: PropTypes.array}, {xs: []}, 'location', 'componentName');
