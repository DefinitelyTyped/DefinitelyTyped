import * as React from 'react';
import CSSModules = require('react-css-modules');

const styles = {};

interface TableProps extends CSSModules.InjectedCSSModuleProps {

}

class Table extends React.Component<TableProps> {
    render () {
        const { styles } = this.props;

        return <div styleName='table'>
            <div styleName='row'>
                <div styleName='cell'>A0</div>
                <div styleName='cell'>B0</div>
            </div>
        </div>;
    }
}

const TableHOC = CSSModules(Table, styles);



interface TableDecoratedProps extends CSSModules.InjectedCSSModuleProps {

}

@CSSModules(styles)
class TableDecorated extends React.Component<TableDecoratedProps> {
    render () {
        const { styles } = this.props;

        return <div styleName='table'>
            <div styleName='row'>
                <div styleName='cell'>A0</div>
                <div styleName='cell'>B0</div>
            </div>
        </div>;
    }
}


interface TableProps extends CSSModules.InjectedCSSModuleProps {

}

class Svg extends React.Component<TableProps> {
    render () {
        const { styles } = this.props;

        return <svg styleName='table'>
            <g styleName='row'>
                <rect styleName='cell' />
                <rect styleName='cell' />
            </g>
        </svg>;
    }
}

class ClassComponent extends React.Component {
    render() {
        return (
            <div></div>
        );
    }
}

function FunctionComponent() {
    return (
        <div></div>
    );
}

class TestClassComponent {
    return() {
        return (
            <>
                <ClassComponent styleName="foo"></ClassComponent>
                <FunctionComponent styleName="bar"></FunctionComponent>
            </>
        );
    }
}


const SvgHOC = CSSModules(Svg, styles);
