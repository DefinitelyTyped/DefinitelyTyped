import * as React from 'react';
import { propTypes, defaultProps } from 'react-props-decorators';

@propTypes({
    foo: React.PropTypes.string,
    bar: React.PropTypes.number
})
@defaultProps({
    foo: "defaultString",
    bar: 100
})
class Baz extends React.Component {
    /* ... */
}
