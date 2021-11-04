import * as React from 'react';
import withNProgress from 'next-nprogress';
import NProgress from 'next-nprogress/component';

class App extends React.Component {
    render() {
        return (
            <div>
                <NProgress/>
                <NProgress
                    color="#29D"
                    options={{ trickleSpeed: 100 }}
                    showAfterMs={250}
                    spinner={false}
                />
            </div>
        );
    }
}

withNProgress()(App);
withNProgress(300)(App);
withNProgress(300, { trickle: false })(App);

class AppWithProps extends React.Component<{title: string}> {
    render() {
        return (
            <div>
                <title>{this.props.title}</title>
            </div>
        );
    }
}

// $ExpectType ComponentType<{ title: string; }>
withNProgress()(AppWithProps);
// $ExpectType ComponentType<{}>
withNProgress()(App);
