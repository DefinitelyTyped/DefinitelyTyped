import * as React from 'react';
import { history } from 'react-router-guard';

const History = () => {
    React.useEffect(() => {
        history.push('/test');
    }, []);

    return null;
};

export default History;
