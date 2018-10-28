import * as React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

interface DemoComponentContainerProps {
    status: string;
}

interface DemoComponentData {
    data: string;
    result: string;
}

const DemoComponent: React.SFC<DemoComponentContainerProps & DemoComponentData> = (props) => (
    <div>{props.data}</div>
);

const DemoComponentContainer: React.ComponentClass<DemoComponentContainerProps> = withTracker<
    DemoComponentData,
    DemoComponentContainerProps
>(() => ({
    data: 'some data',
    result: 'success',
}))(DemoComponent);

const RootComponent = () => (
    <DemoComponentContainer status="ok" />
);
