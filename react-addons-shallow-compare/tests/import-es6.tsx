import * as React from 'react';
import * as shallowCompare from 'react-addons-shallow-compare';

export class MyComponent extends React.Component<{}, {}> {
    shouldComponentUpdate(nextProps: any, nextState: any, nextContext: any): boolean {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        return <div>empty</div>;
    }
}
