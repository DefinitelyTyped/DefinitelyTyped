import * as React from 'react';
import Switch, { Case, Default } from 'react-switch-case';

class Test extends React.Component {
    render() {
        const condition = 'component1';

        return (
            <Switch condition={condition}>
                <Case value="component1">
                    <span>Component 1</span>
                </Case>
                <Case value="component2">
                    <span>Component 2</span>
                </Case>
                <Default>
                    <span>Nothing!</span>
                </Default>
            </Switch>
        );
    }
}
