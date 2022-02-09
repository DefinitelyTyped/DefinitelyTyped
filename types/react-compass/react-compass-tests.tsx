import * as React from "react";
import ReactCompass from 'react-compass';

interface CompassProps {
    direction: number;
}

const CompassComp: React.FC<CompassProps> = (props) => {
    return (<ReactCompass direction={0} />);
};
