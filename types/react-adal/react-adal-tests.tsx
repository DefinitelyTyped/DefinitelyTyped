import * as React from 'react';
import { AuthenticationContext, adalFetch, adalGetToken, runWithAdal, withAdalLogin, AdalConfig } from 'react-adal';

const resourceUrl = 'https://graph.microsoft.net';

const adalConfig: AdalConfig = {
    cacheLocation: "localStorage",
    clientId: '9ha8cqc6-4668-459a-9272-f48c80a053y5',
    endpoints: {
        api: resourceUrl
    },
    postLogoutRedirectUri: 'https://localhost:3000',
    tenant: 'tenantname.onmicrosoft.com'
  };

const authContext = new AuthenticationContext(adalConfig);

const adalApiFetch = (fetch: any, url: string, options: any) => {
    return adalFetch(authContext, resourceUrl, fetch, url, options);
};

const getToken = () => adalGetToken(authContext, resourceUrl);

class App extends React.Component {
    render() {
        return null;
    }
}

// user must login to use the app
runWithAdal(authContext, () => {
    //  ReactDOM.render(<App />, document.getElementById('react-app') as HTMLElement);
}, false);

const withAdalLoginApi = withAdalLogin(authContext, resourceUrl);

const Loading: React.FC = (props) => {
    return null;
};

const ErrorPage: React.FC = (props) => {
    return null;
};

class SignInPage extends React.Component {
    render() {
        return null;
    }
}

class ProtectedPage1 extends React.Component {
    render() {
        return null;
    }
}

const ProtectedPage2: React.FC = (props) => {
    return null;
};

const AdalProtectedPage1 = withAdalLoginApi(ProtectedPage1, () => <Loading />, () => <ErrorPage/>);
const AdalProtectedPage2 = withAdalLoginApi(ProtectedPage2, () => <h4>loading...</h4>, () => <h4>It seems something went wrong...</h4>);

// user must login to use only specific pages
runWithAdal(authContext, () => {
     const routes = <div>
          {/* @ts-expect-error */}
          <Route exact={true} path='/' component={SignInPage} />
          {/* @ts-expect-error */}
          <Route path='/private1' component={AdalProtectedPage1} />
          {/* @ts-expect-error */}
          <Route path='/private2' component={AdalProtectedPage2} />
        </div>;
        // @ts-expect-error
     const App = <ConnectedRouter history={({} as any)} children={routes} />;
     // @ts-expect-error
     ReactDOM.render(<App />, document.getElementById('react-app') as HTMLElement);
}, true);
