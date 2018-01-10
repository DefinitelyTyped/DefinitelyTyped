import * as React from 'react';
import FaBeer from 'react-icons/fa/beer';
import { FaExclamation } from 'react-icons/fa';
import FaCog = require('react-icons/lib/fa/cog');
import { FaPowerOff } from 'react-icons/lib/fa';

class Question extends React.Component {
    render() {
        return <h3> Lets go for a <FaBeer /><FaExclamation />? It'll help you <FaPowerOff /> your <FaCog /></h3>;
    }
}
