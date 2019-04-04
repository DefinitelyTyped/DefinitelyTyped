import * as React from 'react';

declare namespace Clearfix {
    export interface ClearfixProps extends React.HTMLProps<Clearfix> {
        componentClass?: React.ElementType,
        visibleXsBlock?: boolean;
        visibleSmBlock?: boolean;
        visibleMdBlock?: boolean;
        visibleLgBlock?: boolean;
        bsClass?: string;
    }
}
declare class Clearfix extends React.Component<Clearfix.ClearfixProps> { }
export = Clearfix;
