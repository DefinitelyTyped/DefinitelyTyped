import * as setType from 'es6-set-proptypes';
import * as PropTypes from "prop-types";

interface SetProps {
    names: Set<string>;
}

const propTypes: PropTypes.ValidationMap<SetProps> = {
    names: setType.isRequired,
};
