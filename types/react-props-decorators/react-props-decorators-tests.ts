import * as React from 'react';
import * as PropTypes from 'prop-types';
import { propTypes, defaultProps } from 'react-props-decorators';

@propTypes({
    foo: PropTypes.string,
    bar: PropTypes.number
})
@defaultProps({
    foo: "defaultString",
    bar: 100
})
class Baz extends React.Component {
    /* ... */
}
