declare module "react-is-deprecated" {
    import type * as PropTypes from "prop-types";

    interface PropTypesValidators {
        any: typeof PropTypes.any;
        array: typeof PropTypes.array;
        bool: typeof PropTypes.bool;
        func: typeof PropTypes.func;
        number: typeof PropTypes.number;
        object: typeof PropTypes.object;
        string: typeof PropTypes.string;
        node: typeof PropTypes.node;
        element: typeof PropTypes.element;
        instanceOf: typeof PropTypes.instanceOf;
        oneOf: typeof PropTypes.oneOf;
        oneOfType: typeof PropTypes.oneOfType;
        arrayOf: typeof PropTypes.arrayOf;
        objectOf: typeof PropTypes.objectOf;
        shape: typeof PropTypes.shape;
        exact: typeof PropTypes.exact;
    }

    export function deprecate<T>(validator: PropTypes.Validator<T>, message: string): PropTypes.Validator<T>;

    interface Deprecatable<T> {
        isDeprecated: (message: string) => PropTypes.Validator<T>;
    }

    // Unfortunately this copy-paste must happen -- I can't just take PropTypes and programmatically
    // define a version that intersects in the Deprecatable interface into the keys.
    interface DeprecatablePropTypes {
        any: PropTypes.Requireable<any> & Deprecatable<any>;
        array: PropTypes.Requireable<any> & Deprecatable<any>;
        bool: PropTypes.Requireable<any> & Deprecatable<any>;
        func: PropTypes.Requireable<any> & Deprecatable<any>;
        number: PropTypes.Requireable<any> & Deprecatable<any>;
        object: PropTypes.Requireable<any> & Deprecatable<any>;
        string: PropTypes.Requireable<any> & Deprecatable<any>;
        node: PropTypes.Requireable<any> & Deprecatable<any>;
        element: PropTypes.Requireable<any> & Deprecatable<any>;
        instanceOf(expectedClass: {}): PropTypes.Requireable<any> & Deprecatable<any>;
        oneOf(types: any[]): PropTypes.Requireable<any> & Deprecatable<any>;
        oneOfType(types: Array<PropTypes.Validator<any>>): PropTypes.Requireable<any> & Deprecatable<any>;
        arrayOf(type: PropTypes.Validator<any>): PropTypes.Requireable<any> & Deprecatable<any>;
        objectOf(type: PropTypes.Validator<any>): PropTypes.Requireable<any> & Deprecatable<any>;
        shape(type: PropTypes.ValidationMap<any>): PropTypes.Requireable<any> & Deprecatable<any>;
    }

    export function addIsDeprecated(propTypes: PropTypesValidators): DeprecatablePropTypes;
}
