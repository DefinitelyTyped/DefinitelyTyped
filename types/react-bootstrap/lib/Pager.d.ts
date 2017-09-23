import * as React from 'react';
import { SelectCallback } from 'react-bootstrap';
import * as PagerItem from './PagerItem';

declare namespace Pager {
    export interface PagerProps extends React.HTMLProps<Pager> {
        onSelect?: SelectCallback;
    }
}
declare class Pager extends React.Component<Pager.PagerProps> {
    static Item: typeof PagerItem;
}
export = Pager;
