import * as React from 'react';
import { alert, confirm } from 'react-bootstrap-confirmation';

const AlertButton: React.FC = () => {
    const display = async () => {
        await alert('Something very wrong is happening!', { okButtonStyle: 'light' }); // undefined
    };
    return (
        <button type="button" className="btn btn-primary" onClick={display}>
            Display alert
        </button>
    );
};

const ConfirmButton: React.FC = () => {
    const display = async () => {
        const res = await confirm('Are you really sure?', { okText: 'yes' }); // bool
    };
    return (
        <button type="button" className="btn btn-primary" onClick={display}>
            Display alert
        </button>
    );
};
