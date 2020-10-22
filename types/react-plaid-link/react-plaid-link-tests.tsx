import * as React from 'react';
import PlaidLink from 'react-plaid-link';

import { render } from 'react-dom';

// render(<PlaidLink />, document.getElementById('app'));

const AllProps = () => {
    return (
        <PlaidLink
            apiVersion="test"
            clientName="test"
            env="tartan"
            institution="test"
            publicKey="123123asdasd123123"
            product={[
                'connect',
                'info',
                'auth',
                'identity',
                'income',
                'transactions',
                'assets',
                'liabilities',
                'investments',
                'payment_initiation',
            ]}
            token="test"
            user={{ legalName: 'Keevan', emailAddress: 'testuser@gmail.com' }}
            selectAccount={true}
            webhook="yes please"
            onSuccess={(publicToken, metadata) => {}}
            onExit={(error, metadata) => {}}
            onLoad={() => {}}
            onEvent={(eventName, metadata) => {}}
            style={{ backgroundColor: 'blue' }}
            className="new-classname"
        />
    );
};

const RequiredProps = () => {
    return (
        <PlaidLink
            clientName="test"
            env="sandbox"
            publicKey="test"
            product={['info']}
            onSuccess={(publicToken, metadata) => {}}
        />
    );
};

render(<AllProps />, document.getElementById('app'));
render(<RequiredProps />, document.getElementById('app'));
