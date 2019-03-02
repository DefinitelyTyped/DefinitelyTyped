import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as AirbnbPropTypes from 'airbnb-prop-types';

class ClassComp extends React.Component {
    render() {
        return null;
    }
}

function FuncComp() {
    return null;
}

// $ExpectType Requireable<number | null>
AirbnbPropTypes.and([PropTypes.number]);
// $ExpectType Requireable<number | null>
AirbnbPropTypes.and([PropTypes.number, AirbnbPropTypes.nonNegativeInteger]);
// $ExpectType Validator<number>
AirbnbPropTypes.and([PropTypes.number, AirbnbPropTypes.integer()], 'foo').isRequired;

// $ExpectType Requireable<number>
AirbnbPropTypes.between({ lt: 1 });
// $ExpectType Requireable<number>
AirbnbPropTypes.between({ lte: 2 });
// $ExpectType Requireable<number>
AirbnbPropTypes.between({ gt: 3 });
// $ExpectType Requireable<number>
AirbnbPropTypes.between({ gte: 4 });
// $ExpectType Requireable<number>
AirbnbPropTypes.between({ lt: 1, gt: 0 });

// $ExpectType Requireable<boolean>
AirbnbPropTypes.booleanSome('foo', 'bar', 'baz');

// $ExpectType Requireable<ReactNodeLike>
AirbnbPropTypes.childrenHavePropXorChildren('foo');

// $ExpectType Requireable<ReactNodeLike>
AirbnbPropTypes.childrenOf(PropTypes.string);

// $ExpectType Requireable<ReactNodeLike>
AirbnbPropTypes.childrenOfType(ClassComp);
// $ExpectType Requireable<ReactNodeLike>
AirbnbPropTypes.childrenOfType(FuncComp);
// $ExpectType Requireable<ReactNodeLike>
AirbnbPropTypes.childrenOfType('div');
// $ExpectType Requireable<ReactNodeLike>
AirbnbPropTypes.childrenOfType(ClassComp, FuncComp, 'div');

// $ExpectType Requireable<ReactNodeLike>
AirbnbPropTypes.childrenSequenceOf({ validator: PropTypes.number });
// $ExpectType Requireable<ReactNodeLike>
AirbnbPropTypes.childrenSequenceOf({ validator: PropTypes.string, max: 100 });
// $ExpectType Requireable<ReactNodeLike>
AirbnbPropTypes.childrenSequenceOf({ validator: PropTypes.bool, min: 0 });

// $ExpectType Requireable<ReactNodeLike>
AirbnbPropTypes.componentWithName('Foo');
// $ExpectType Requireable<ReactNodeLike>
AirbnbPropTypes.componentWithName(/Foo/);
// $ExpectType Requireable<ReactNodeLike>
AirbnbPropTypes.componentWithName('Foo', { stripHOCs: ['connect'] });

// $ExpectType Requireable<number>
AirbnbPropTypes.disallowedIf(PropTypes.number, 'foo', PropTypes.string);

// $ExpectType Requireable<ReactElementLike>
AirbnbPropTypes.elementType(ClassComp);
// $ExpectType Requireable<ReactElementLike>
AirbnbPropTypes.elementType(FuncComp);
// $ExpectType Requireable<ReactElementLike>
AirbnbPropTypes.elementType('div');
// $ExpectType Requireable<ReactElementLike>
AirbnbPropTypes.elementType('*');
// $ExpectError
AirbnbPropTypes.elementType(ClassComp, FuncComp, 'div');

// $ExpectType Requireable<null | undefined>
AirbnbPropTypes.explicitNull();
// $ExpectType Validator<never>
AirbnbPropTypes.explicitNull().isRequired;

interface ForbidShape {
    foo: string;
    bar: number;
    baz?: boolean | null;
}

// $ExpectType ValidationMap<{ foo: string | null; bar: number; baz: boolean | null; }>
AirbnbPropTypes.forbidExtraProps({
    foo: PropTypes.string,
    bar: PropTypes.number.isRequired,
    baz: PropTypes.bool,
});

// $ExpectType ValidationMap<ForbidShape>
AirbnbPropTypes.forbidExtraProps<ForbidShape>({
    foo: PropTypes.string.isRequired,
    bar: PropTypes.number.isRequired,
    baz: PropTypes.bool,
});

// $ExpectType Requireable<number>
AirbnbPropTypes.integer();

// $ExpectType Requireable<{}>
AirbnbPropTypes.keysOf(PropTypes.number);
// $ExpectType Requireable<{}>
AirbnbPropTypes.keysOf(PropTypes.number, 'foo');
// $ExpectType Requireable<{}>
AirbnbPropTypes.keysOf(PropTypes.oneOf(['foo', 'bar']));

// $ExpectType Requireable<number>
AirbnbPropTypes.mutuallyExclusiveProps(PropTypes.number);
// $ExpectType Requireable<number>
AirbnbPropTypes.mutuallyExclusiveProps(PropTypes.number, 'foo');
// $ExpectType Requireable<string>
AirbnbPropTypes.mutuallyExclusiveProps(PropTypes.string, 'foo', 'bar');

// $ExpectType Requireable<boolean>
AirbnbPropTypes.mutuallyExclusiveTrueProps('foo');
// $ExpectType Requireable<boolean>
AirbnbPropTypes.mutuallyExclusiveTrueProps('foo', 'bar');

// $ExpectType Requireable<ReactNodeLike>
AirbnbPropTypes.nChildren(1, PropTypes.number);
// $ExpectType Requireable<ReactNodeLike>
AirbnbPropTypes.nChildren(1, AirbnbPropTypes.childrenOfType('span'));

// $ExpectType Requireable<number>
AirbnbPropTypes.nonNegativeInteger;

// $ExpectType Requireable<number>
AirbnbPropTypes.nonNegativeNumber();

// $ExpectType Requireable<string>
AirbnbPropTypes.numericString();

// $ExpectType Requireable<{}>
AirbnbPropTypes.object();
// $ExpectType Requireable<{ foo: string; }>
AirbnbPropTypes.object<{ foo: string }>();

AirbnbPropTypes.or([PropTypes.bool.isRequired, AirbnbPropTypes.explicitNull().isRequired]);
AirbnbPropTypes.or([PropTypes.bool, PropTypes.number, PropTypes.arrayOf(PropTypes.string)]);
AirbnbPropTypes.or([PropTypes.number, PropTypes.string, PropTypes.bool], 'foo');

// $ExpectType Requireable<number>
AirbnbPropTypes.range(0, 10);
// $ExpectType Requireable<5>
AirbnbPropTypes.range<5>(0, 10);

// $ExpectType Requireable<string | null>
AirbnbPropTypes.requiredBy('foo', PropTypes.string);
// $ExpectType Validator<number>
AirbnbPropTypes.requiredBy('bar', PropTypes.number, 42).isRequired;

// $ExpectType Requireable<{}>
AirbnbPropTypes.restrictedProp();
// $ExpectType Requireable<{}>
AirbnbPropTypes.restrictedProp(() => 'Error');
// $ExpectType Requireable<{}>
AirbnbPropTypes.restrictedProp(() => new Error('Error'));

// $ExpectType Requireable<{}>
AirbnbPropTypes.sequenceOf({ validator: PropTypes.number });
// $ExpectType Requireable<{}>
AirbnbPropTypes.sequenceOf({ validator: PropTypes.number }, { validator: PropTypes.string });
// $ExpectType Requireable<{}>
AirbnbPropTypes.sequenceOf(
    { validator: PropTypes.number, min: 0, max: 10 },
    { validator: PropTypes.string },
    { validator: PropTypes.bool },
);

interface ShapeShape {
    foo: string;
    bar?: number | null;
}

// $ExpectType Requireable<{ foo: string | null; }>
AirbnbPropTypes.shape({
    foo: PropTypes.string,
});
// $ExpectType Requireable<{ foo: string | null; bar: number | null; }>
AirbnbPropTypes.shape({
    foo: PropTypes.string,
    bar: PropTypes.number,
});
// $ExpectType Requireable<ShapeShape>
AirbnbPropTypes.shape<ShapeShape>({
    foo: PropTypes.string.isRequired,
    bar: PropTypes.number,
});

// $ExpectType Requireable<string>
AirbnbPropTypes.stringStartsWith('foo');

// $ExpectType Requireable<any[]>
AirbnbPropTypes.uniqueArray();
// $ExpectType Requireable<string[]>
AirbnbPropTypes.uniqueArray<string>();

// $ExpectType Requireable<{ [key: string]: number | null; }>
AirbnbPropTypes.valuesOf(PropTypes.number);
