import * as PropTypes from "prop-types";
import * as React from "react";

interface Props {
    any: any;
    array: string[];
    bool: boolean;
    func: any;
    string: string;
    number: number;
    object: {};
    node: any;
    element: any;
}

let propTypes: React.ValidationMap<Props> = {
    any: PropTypes.any.isRequired,
    array: PropTypes.array.isRequired,
    bool: PropTypes.bool.isRequired,
    func: PropTypes.func.isRequired,
    number: PropTypes.number.isRequired,
    object: PropTypes.object.isRequired,
    string: PropTypes.string.isRequired,
    node: PropTypes.node.isRequired,
    element: PropTypes.element.isRequired
};
