import * as React from 'react';
import { SelectCallback } from 'react-bootstrap';
import PagerItem = require('./PagerItem');

declare namespace Pager {
    export interface PagerProps extends React.HTMLProps<Pager> {
        onSelect?: SelectCallback | undefined;
        bsClass?: string | undefined;
    }
}
declare class Pager extends React.Component<Pager.PagerProps> {
    static Item: typeof PagerItem;
}
export = Pager;
