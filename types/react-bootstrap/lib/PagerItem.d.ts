import * as React from 'react';
import { SelectCallback } from 'react-bootstrap';

declare namespace PagerItem {
    export interface PagerItemProps extends React.HTMLProps<PagerItem> {
        disabled?: boolean | undefined;
        eventKey?: any;
        next?: boolean | undefined;
        onSelect?: SelectCallback | undefined;
        previous?: boolean | undefined;
        target?: string | undefined;
    }
}
declare class PagerItem extends React.Component<PagerItem.PagerItemProps> { }
export = PagerItem;
