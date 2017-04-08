import * as PropTypes from "prop-types";

let testObj: any = {
    anyIsRequired: PropTypes.any.isRequired,
    arrayIsRequired: PropTypes.array.isRequired,
    boolIsRequired: PropTypes.bool.isRequired,
    funcIsRequired: PropTypes.func.isRequired,
    numberIsRequired: PropTypes.number.isRequired,
    objectIsRequired: PropTypes.object.isRequired,
    stringIsRequired: PropTypes.string.isRequired,
    nodeIsRequired: PropTypes.node.isRequired,
    elementIsRequired: PropTypes.element.isRequired
};
console.log(testObj);
