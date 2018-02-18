import * as React from 'react';
import TwitterLogin from 'react-twitter-auth';

const ReactTwitterAuth: React.StatelessComponent = () => {
    function handleSucess(response: string) {}
    function handleFailure(msg: string) {}

    return (
        <TwitterLogin loginUrl="http://server.url/api/v1/auth/twitter"
                      onSuccess={ handleSucess }
                      onFailure={ handleFailure }
                      requestTokenUrl="http://server.url/api/v1/auth/twitter/reverse"
                      dialogWidth={ 1200 }
                      dialogHeight={ 800 }
                      style={ "font-size: 14px;" }
                      disabled={ false }
                      text={ "test" }
                      tag={ "test" }
                      className={ "test" }
                      credentials={ "same-origin" }
                      showIcon={true}/>
    );
};
