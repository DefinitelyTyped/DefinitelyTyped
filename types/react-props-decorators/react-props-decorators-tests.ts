import * as PropTypes from "prop-types";
import * as React from "react";
import { defaultProps, propTypes } from "react-props-decorators";

@propTypes({
    foo: PropTypes.string,
    bar: PropTypes.number,
})
@defaultProps({
    foo: "defaultString",
    bar: 100,
})
class Baz extends React.Component {
    /* ... */
}
