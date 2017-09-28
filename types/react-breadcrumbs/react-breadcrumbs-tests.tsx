import * as React from 'react';
import * as ReactRouter from "react-router";
import * as Breadcrumbs from 'react-breadcrumbs';


interface MyComponentProps extends ReactRouter.RouteComponentProps<{}, { id: number }> {
}


class MyComponent extends React.Component<MyComponentProps> {
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
