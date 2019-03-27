import * as React from 'react';
import TwitterLogin from 'react-twitter-auth';

const ReactTwitterAuth: React.StatelessComponent = () => {
    function handleSucess(response: string) {}
    function handleFailure(msg: string) {}

    return (
        <div>
            <TwitterLogin
                loginUrl="http://server.url/api/v1/auth/twitter"
                onSuccess={ handleSucess }
                onFailure={ handleFailure }
                requestTokenUrl="http://server.url/api/v1/auth/twitter/reverse"
            />
            <TwitterLogin
                loginUrl="http://server.url/api/v1/auth/twitter"
                onSuccess={ handleSucess }
                onFailure={ handleFailure }
                requestTokenUrl="http://server.url/api/v1/auth/twitter/reverse"
                dialogWidth={ 1200 }
                dialogHeight={ 800 }
                style={{display: "initial"}}
                disabled={ false }
                text={ "test" }
                tag="button"
                credentials="same-origin"
                showIcon={true}
            />
            <TwitterLogin
                loginUrl="http://server.url/api/v1/auth/twitter"
                onSuccess={ handleSucess }
                onFailure={ handleFailure }
                requestTokenUrl="http://server.url/api/v1/auth/twitter/reverse"
                dialogWidth={ 1200 }
                dialogHeight={ 800 }
                style={{display: "initial"}}
                disabled={ false }
                text={ "test" }
                tag="button"
                credentials="same-origin"
                showIcon={true}
                customHeaders={{
                    authorization: 'Bearer sometoken',
                }}
                forceLogin={true}
            >
                Login with twitter
            </TwitterLogin>
        </div>
    );
};
