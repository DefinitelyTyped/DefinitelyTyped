import * as React from 'react';
import PlaidLink from 'react-plaid-link';

function PlaidLinkTests() {
    return (
        <>
            <PlaidLink
                clientName="Your app name"
                env="sandbox"
                institution={}
                publicKey={}
                product={['auth', 'transactions']}
                apiVersion={'v1'}
                token="public-token-123"
                selectAcocunt={true}
                webhook="https://webhooks.test.com"
                onEvent={(eventName, metadata) => null}
                onExit={(err, metadata) => null}
                onSuccess={(token, metadata) => null}
            />
        </>
    );
}
