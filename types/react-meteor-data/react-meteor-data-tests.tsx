import * as React from 'react';
import {withTracker} from 'meteor/react-meteor-data';

interface DemoComponentContainerProps {
    status: string;
}

interface DemoComponentProps extends DemoComponentContainerProps {
    data: string;
}

const DemoComponent: React.SFC<DemoComponentProps> = (props) => (
  <div>{props.data}</div>
);

const DemoComponentContainer = withTracker<
    DemoComponentContainerProps,
    DemoComponentProps,
    DemoComponentContainerProps & DemoComponentProps
>((props) => ({
    ...props,
    data: 'some data',
}))(DemoComponent);

export default () => (
    <DemoComponentContainer status="ok" />
);
