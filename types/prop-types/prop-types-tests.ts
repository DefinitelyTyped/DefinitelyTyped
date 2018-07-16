import { ReactElement, ReactNode } from "react";
import * as PropTypes from "prop-types";

class TestClass {}

interface Props {
    any: any;
    array: string[];
    bool: boolean;
    element: ReactElement<any>;
    func(foo: string): void;
    node: ReactNode;
    number: number;
    object: object;
    string: string;
    symbol: symbol;
    instanceOf: TestClass;
    oneOf: 'a' | 'b' | 'c';
    oneOfType: string | boolean;
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
}

type PropTypesMap = PropTypes.ValidationMap<Props>

const propTypes: PropTypesMap = {
    any: PropTypes.any,
    array: PropTypes.array.isRequired,
    bool: PropTypes.bool.isRequired,
    element: PropTypes.element.isRequired,
    func: PropTypes.func.isRequired,
    node: PropTypes.node,
    number: PropTypes.number.isRequired,
    object: PropTypes.object.isRequired,
    string: PropTypes.string.isRequired,
    symbol: PropTypes.symbol.isRequired,
    instanceOf: PropTypes.instanceOf(TestClass).isRequired,
    oneOf: PropTypes.oneOf(['a', 'b', 'c']).isRequired,
    oneOfType: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.shape({
        foo: PropTypes.string,
        bar: PropTypes.number.isRequired
    })]).isRequired,
    arrayOf: PropTypes.arrayOf(PropTypes.bool).isRequired,
    objectOf: PropTypes.objectOf(PropTypes.number).isRequired,
    shape: PropTypes.shape(innerProps).isRequired,
    optionalNumber: PropTypes.number
};

type ExtractedInnerProps = PropTypes.InferProps<typeof innerProps>;

type ExtractedProps = PropTypes.InferProps<typeof propTypes>;

PropTypes.checkPropTypes({xs: PropTypes.array}, {xs: []}, 'location', 'componentName');
