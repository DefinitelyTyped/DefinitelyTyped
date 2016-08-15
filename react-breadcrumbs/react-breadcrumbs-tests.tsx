///<reference path="../react/react.d.ts" />
///<reference path="../react-router/react-router.d.ts"/>
///<reference path="./react-breadcrumbs.d.ts" />


import * as React from 'react';
import * as Breadcrumbs from 'react-breadcrumbs';


interface MyComponentProps extends ReactRouter.RouteComponentProps<{}, { id: number }> {
}


class MyComponent extends React.Component<MyComponentProps, {}> {
    render() {
        return (
            <div>
                <Breadcrumbs
                    routes={this.props.routes}
                    params={this.props.params}
                />
            </div>
        );
    }
}
