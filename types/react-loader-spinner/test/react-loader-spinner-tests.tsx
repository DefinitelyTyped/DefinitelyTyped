import * as React from 'react';
import Loader from 'react-loader-spinner';

const App = () => {
    return (
        <div>
            <Loader type="Audio" color="#8000FF" timeout={3000} height={80} width={80} visible={true} />
        </div>
    );
};
