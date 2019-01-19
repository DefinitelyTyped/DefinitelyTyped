import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace Clearfix {
    export interface ClearfixProps extends ReactDOM.HTMLProps<Clearfix> {
        componentClass?: React.ReactType,
        visibleXsBlock?: boolean;
        visibleSmBlock?: boolean;
        visibleMdBlock?: boolean;
        visibleLgBlock?: boolean;
        bsClass?: string;
    }
}
declare class Clearfix extends React.Component<Clearfix.ClearfixProps> { }
export = Clearfix;
