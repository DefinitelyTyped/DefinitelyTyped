import { ReactElement, ReactNode } from "react";
import * as PropTypes from "prop-types";

declare const uniqueType: unique symbol;

class TestClass { }

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
    optionalNumber?: number | null;
    customProp?: typeof uniqueType;
}

const innerProps = {
    foo: PropTypes.string.isRequired,
    bar: PropTypes.bool,
    baz: PropTypes.any
};

const arrayOfTypes = [PropTypes.string, PropTypes.bool, PropTypes.shape({
    foo: PropTypes.string,
    bar: PropTypes.number.isRequired
})];
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
    oneOf: PropTypes.oneOf<'a' | 'b' | 'c'>(['a', 'b', 'c']).isRequired,
    oneOfType: PropTypes.oneOfType(arrayOfTypes).isRequired,
    numberOrFalse: PropTypes.oneOfType([PropTypes.oneOf<false>([false]), PropTypes.number]).isRequired,
    // The generic function type (() => any) is assignable to ReactNode because ReactNode extends the empty object type {}
    // Which widens the array literal of validators to just Array<Requireable<() => any>>
    // It's too risky to change ReactNode to exclude {} even though it's invalid, as it's required for children-as-function props to work
    // So we assert the explicit tuple type
    nodeOrRenderFn: PropTypes.oneOfType([PropTypes.node, PropTypes.func] as [PropTypes.Requireable<ReactNode>, PropTypes.Requireable<() => any>]),
    arrayOf: PropTypes.arrayOf(PropTypes.bool.isRequired).isRequired,
    objectOf: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
    shape: PropTypes.shape(innerProps).isRequired,
    optionalNumber: PropTypes.number,
    customProp: (() => null) as PropTypes.Validator<typeof uniqueType | undefined>
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
    numberOrFalse: PropTypes.oneOfType([PropTypes.oneOf<false>([false]), PropTypes.number]).isRequired,
    nodeOrRenderFn: PropTypes.oneOfType([PropTypes.node, PropTypes.func] as [PropTypes.Requireable<ReactNode>, PropTypes.Requireable<() => any>]),
    arrayOf: PropTypes.arrayOf(PropTypes.bool.isRequired).isRequired,
    objectOf: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
    shape: PropTypes.shape(innerProps).isRequired,
    optionalNumber: PropTypes.number,
    customProp: (() => null) as PropTypes.Validator<typeof uniqueType | undefined>
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

PropTypes.checkPropTypes({ xs: PropTypes.array }, { xs: [] }, 'location', 'componentName');

// This would be the type that JSX sees
type Defaultize<T, D> =
    & Pick<T, Exclude<keyof T, keyof D>>
    & Partial<Pick<T, Extract<keyof T, keyof D>>>
    & Partial<Pick<D, Exclude<keyof D, keyof T>>>;

// This would be the type inside the component
type Undefaultize<T, D> =
    & Pick<T, Exclude<keyof T, keyof D>>
    & { [K in Extract<keyof T, keyof D>]-?: Exclude<T[K], undefined>; }
    & Required<Pick<D, Exclude<keyof D, keyof T>>>;

const componentPropTypes = {
    fi: PropTypes.func.isRequired,
    foo: PropTypes.string,
    bar: PropTypes.number.isRequired,
    baz: PropTypes.bool,
    bat: PropTypes.node
};

const componentDefaultProps = {
    fi: () => null,
    baz: false,
    bat: ['This', 'is', 'a', 'string']
};

type DefaultizedProps = Defaultize<PropTypes.InferProps<typeof componentPropTypes>, typeof componentDefaultProps>;
type UndefaultizedProps = Undefaultize<PropTypes.InferProps<typeof componentPropTypes>, typeof componentDefaultProps>;

// $ExpectType: true
type DefaultizedPropsTest = {
    fi?: (...args: any[]) => any;
    foo?: string | null;
    bar: number;
    baz?: boolean | null;
    bat?: ReactNode;
} extends DefaultizedProps ? true : false;
// $ExpectType: true
type UndefaultizedPropsTest = {
    fi: (...args: any[]) => any;
    foo?: string | null;
    bar: number;
    baz: boolean;
    bat: Exclude<ReactNode, undefined>;
} extends UndefaultizedProps ? true : false;
