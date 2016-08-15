///<reference path="../react/react.d.ts" />
///<reference path="./react-css-modules.d.ts" />


import * as React from 'react';
import * as CSSModules from 'react-css-modules';

const styles = {};

interface TableProps extends CSSModules.InjectedCSSModuleProps {

}

class Table extends React.Component<TableProps, {}> {
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
class TableDecorated extends React.Component<TableDecoratedProps, {}> {
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
