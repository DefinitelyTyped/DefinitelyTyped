import * as React from 'react';
import FaBeer from 'react-icons/fa/beer';
import {FaExclamation} from 'react-icons/fa';

class Question extends React.Component {
    render() {
        return <h3> Lets go for a <FaBeer /><FaExclamation />? </h3>;
    }
}
