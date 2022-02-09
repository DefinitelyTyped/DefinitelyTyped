import * as React from 'react';

declare namespace Clearfix {
    export interface ClearfixProps extends React.HTMLProps<Clearfix> {
        componentClass?: React.ElementType | undefined,
        visibleXsBlock?: boolean | undefined;
        visibleSmBlock?: boolean | undefined;
        visibleMdBlock?: boolean | undefined;
        visibleLgBlock?: boolean | undefined;
        bsClass?: string | undefined;
    }
}
declare class Clearfix extends React.Component<Clearfix.ClearfixProps> { }
export = Clearfix;
