import * as PropTypes from 'prop-types';
import * as Immutable from 'immutable';
import * as ImmutablePropTypes from 'react-immutable-proptypes';

interface Props {
    list: Immutable.List<any>;
    map: Immutable.Map<any, any>;
    orderedMap: Immutable.OrderedMap<any, any>;
    set: Immutable.Set<any>;
    orderedSet: Immutable.OrderedSet<any>;
    stack: Immutable.Stack<any>;
    seq: Immutable.Seq<any, any>;
    record: Immutable.Map<string, any>;
    iterable: Immutable.Iterable<any, any>;
    listOf: Immutable.List<string>;
    mapOf: Immutable.Map<string, number>;
    mapOfNoKey: Immutable.Map<any, number>;
    orderedMapOf: Immutable.OrderedMap<string, number>;
    orderedMapOfNoKey: Immutable.OrderedMap<any, number>;
    setOf: Immutable.Set<string>;
    orderedSetOf: Immutable.OrderedSet<string>;
    stackOf: Immutable.Stack<string>;
    iterableOf: Immutable.Iterable<any, string>;
    recordOf: Immutable.Map<string, any>;
    shape: Immutable.Iterable<any, any>;
    contains: Immutable.Iterable<any, any>;
    mapContains: Immutable.Map<any, any>;
}

const propTypes: PropTypes.ValidationMap<Props> = {
    list: ImmutablePropTypes.list.isRequired,
    map: ImmutablePropTypes.map.isRequired,
    orderedMap: ImmutablePropTypes.orderedMap.isRequired,
    set: ImmutablePropTypes.set.isRequired,
    orderedSet: ImmutablePropTypes.orderedSet.isRequired,
    stack: ImmutablePropTypes.stack.isRequired,
    seq: ImmutablePropTypes.seq.isRequired,
    record: ImmutablePropTypes.record.isRequired,
    iterable: ImmutablePropTypes.iterable.isRequired,
    listOf: ImmutablePropTypes.listOf(
        PropTypes.string.isRequired
    ).isRequired,
    mapOf: ImmutablePropTypes.mapOf(
        PropTypes.number.isRequired,
        PropTypes.string.isRequired
    ).isRequired,
    mapOfNoKey: ImmutablePropTypes.mapOf(
        PropTypes.number.isRequired
    ).isRequired,
    orderedMapOf: ImmutablePropTypes.orderedMapOf(
        PropTypes.number.isRequired,
        PropTypes.string.isRequired
    ).isRequired,
    orderedMapOfNoKey: ImmutablePropTypes.orderedMapOf(
        PropTypes.number.isRequired
    ).isRequired,
    setOf: ImmutablePropTypes.setOf(
        PropTypes.string.isRequired
    ).isRequired,
    orderedSetOf: ImmutablePropTypes.orderedSetOf(
        PropTypes.string.isRequired
    ).isRequired,
    stackOf: ImmutablePropTypes.stackOf(
        PropTypes.string.isRequired
    ).isRequired,
    iterableOf: ImmutablePropTypes.iterableOf(
        PropTypes.string.isRequired
    ).isRequired,
    recordOf: ImmutablePropTypes.recordOf({
        foo: PropTypes.string.isRequired,
    }).isRequired,
    shape: ImmutablePropTypes.shape({
        foo: PropTypes.string.isRequired,
    }).isRequired,
    contains: ImmutablePropTypes.contains({
        foo: PropTypes.string.isRequired,
    }).isRequired,
    mapContains: ImmutablePropTypes.mapContains({
        foo: PropTypes.string.isRequired,
    }).isRequired,
};

type ExtractedProps = PropTypes.InferProps<typeof propTypes>;

// $ExpectType true
type ExtractPropsMatch = ExtractedProps extends Props ? true : false;
