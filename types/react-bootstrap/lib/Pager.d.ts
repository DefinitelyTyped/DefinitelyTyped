import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SelectCallback } from 'react-bootstrap';
import PagerItem = require('./PagerItem');

declare namespace Pager {
    export interface PagerProps extends ReactDOM.HTMLProps<Pager> {
        onSelect?: SelectCallback;
        bsClass?: string;
    }
}
declare class Pager extends React.Component<Pager.PagerProps> {
    static Item: typeof PagerItem;
}
export = Pager;
