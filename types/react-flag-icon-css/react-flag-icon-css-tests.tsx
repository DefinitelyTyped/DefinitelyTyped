import * as React from 'react';
import * as ReactDOM from 'react-dom';
import FlagIconFactory, { CustomFlagIconFactory, FlagIconSize } from 'react-flag-icon-css';

const FlagIcon = FlagIconFactory(React, {useCssModules: false});

/**
 * based on https://github.com/matteocng/react-flag-icon-css#basic-usage
 */
interface SimpleFlagComponentProps {
    code: string;
    size: FlagIconSize;
}

export class SimpleFlagComponent extends React.PureComponent<SimpleFlagComponentProps> {
    render() {
        return (
            <FlagIcon code={this.props.code} size={this.props.size}/>
        );
    }
}

const rootEL = document.getElementById('react-app') as HTMLElement;

const appProps: SimpleFlagComponentProps = {
    code: 'it',
    size: '3x'
};
ReactDOM.render(<SimpleFlagComponent {...appProps} />, rootEL);

/**
 * based on https://github.com/matteocng/react-flag-icon-css#exampleCustomFlagsIndex
 */
const styles = {
    ['.flag-icon-ex1']: {
        'background-image': '../images/4x3/ex1.svg'
    },
    ['.flag-icon-ex1.flag-icon-squared']: {
        'background-image': '../images/1x1/ex1.svg'
    }
};

const codes = {
    ex1: 'Example 1 country'
};

const optionsCssModules = {customCodes: codes, themeStyles: styles};
const FlagIconCssModules = CustomFlagIconFactory(React, optionsCssModules);

export class CustomFlagComponent extends React.PureComponent<SimpleFlagComponentProps> {
    render() {
        return (
            <FlagIconCssModules code={this.props.code} size={this.props.size}/>
        );
    }
}

const appCustomProps: SimpleFlagComponentProps = {
    code: 'ex1',
    size: 'lg'
};
ReactDOM.render(<CustomFlagComponent {...appCustomProps} />, rootEL);

/**
 * based on 'props:children' test
 */
interface ChildrenFlagComponentProps {
    code: string;
    size: FlagIconSize;
    children: React.ReactNode;
}

export class ChildrenFlagComponent extends React.PureComponent<ChildrenFlagComponentProps> {
    render() {
        return (
            <FlagIcon code={this.props.code} size={this.props.size} children={this.props.children}/>
        );
    }
}

const appChildrenProps: ChildrenFlagComponentProps = {
    code: 'ex1',
    size: 'lg',
    children: <FlagIcon code='it'/>
};
ReactDOM.render(<ChildrenFlagComponent {...appChildrenProps} />, rootEL);
