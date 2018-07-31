import * as React from 'react';
import * as ReactDOM from 'react-dom';
import FlagIconFactory, { Size } from 'react-flag-icon-css';

const FlagIcon = FlagIconFactory(React, {useCssModules: false});

/**
 * based on https://github.com/matteocng/react-flag-icon-css#basic-usage
 */
interface SimpleFlagComponentProps {
    code: string;
    size: Size;
}

export class SimpleFlagComponent extends React.PureComponent<SimpleFlagComponentProps> {
    render() {
        return (
            <FlagIcon code={this.props.code} size={this.props.size}/>
        );
    }
}

const rootEL = document.body.querySelector('#app');

const appProps: SimpleFlagComponentProps = {
    code: 'it',
    size: '3x'
};
ReactDOM.render(<SimpleFlagComponent {...appProps} />, rootEL);
