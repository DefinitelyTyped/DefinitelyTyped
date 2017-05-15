import * as PropTypes from "prop-types";

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

let propTypes: PropTypes.ValidationMap<Props> = {
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
