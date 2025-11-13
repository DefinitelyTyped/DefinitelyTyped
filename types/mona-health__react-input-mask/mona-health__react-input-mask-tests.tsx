import * as React from 'react';
import ReactInputMask, { MaskedState } from '@mona-health/react-input-mask';

const BasicExample: React.FC = () => {
    return <ReactInputMask mask="99/99/9999" />;
};

const RefExample: React.FC = () => {
    const ref = React.useRef<HTMLInputElement>(null);
    return <ReactInputMask mask="99/99/9999" ref={ref} />;
};

const FullExample: React.FC = () => {
    const handleBeforeMaskedStateChange = (states: {
        previousState: MaskedState;
        currentState: MaskedState;
        nextState: MaskedState;
    }): MaskedState => {
        return states.nextState;
    };

    return (
        <ReactInputMask
            mask="99/99/9999"
            maskPlaceholder="dd/mm/yyyy"
            alwaysShowMask={true}
            beforeMaskedStateChange={handleBeforeMaskedStateChange}
            maskChar="_"
            placeholder="Enter date"
            value="01/01/2023"
        />
    );
};

const ArrayMaskExample: React.FC = () => {
    return <ReactInputMask mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/]} />;
};

