import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace HelpBlock {
    export interface HelpBlockProps extends ReactDOM.HTMLProps<HelpBlock> {
        bsClass?: string;
    }
}
declare class HelpBlock extends React.Component<HelpBlock.HelpBlockProps> { }
export = HelpBlock;
