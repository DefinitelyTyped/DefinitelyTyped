import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SelectCallback } from 'react-bootstrap';

declare namespace PagerItem {
    export interface PagerItemProps extends ReactDOM.HTMLProps<PagerItem> {
        disabled?: boolean;
        eventKey?: any;
        next?: boolean;
        onSelect?: SelectCallback;
        previous?: boolean;
        target?: string;
    }
}
declare class PagerItem extends React.Component<PagerItem.PagerItemProps> { }
export = PagerItem;
