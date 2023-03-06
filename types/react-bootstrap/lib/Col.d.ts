import * as React from 'react';

declare namespace Col {
    export interface ColProps extends React.HTMLProps<Col> {
        componentClass?: React.ElementType | undefined;
        lg?: number | undefined;
        lgHidden?: boolean | undefined;
        lgOffset?: number | undefined;
        lgPull?: number | undefined;
        lgPush?: number | undefined;
        md?: number | undefined;
        mdHidden?: boolean | undefined;
        mdOffset?: number | undefined;
        mdPull?: number | undefined;
        mdPush?: number | undefined;
        sm?: number | undefined;
        smHidden?: boolean | undefined;
        smOffset?: number | undefined;
        smPull?: number | undefined;
        smPush?: number | undefined;
        xs?: number | undefined;
        xsHidden?: boolean | undefined;
        xsOffset?: number | undefined;
        xsPull?: number | undefined;
        xsPush?: number | undefined;
    }
}
declare class Col extends React.Component<Col.ColProps> { }
export = Col;
