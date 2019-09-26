import * as React from 'react';
import Loader from 'wix-style-react/Loader';

function LoaderWithMandatoryProps() {
    return <Loader />;
}

function LoaderWithAllProps() {
    return (
        <Loader
            color="blue"
            dataHook="hook"
            size="large"
            status="error"
            statusMessage="msg"
            text="text"
            shouldLoadAsync
        />
    );
}
