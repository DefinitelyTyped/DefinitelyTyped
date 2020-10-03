import { Identity } from './Identity';
export interface Layout {
    settings: {
        popoutWholeStack?: boolean;
        constrainDragToContainer?: boolean;
        showPopoutIcon?: boolean;
        showMaximiseIcon?: boolean;
        showCloseIcon?: boolean;
    };
    content: LayoutContent;
}
export declare type LayoutContent = (LayoutRow | LayoutColumn | LayoutComponent)[];
export interface LayoutRow {
    type: 'row';
    content: LayoutContent;
}
export interface LayoutColumn {
    type: 'column';
    content: LayoutContent;
}
export interface LayoutComponent {
    type: 'component';
    componentName: string;
    componentState: {
        identity: Identity;
        url: string;
        title?: string;
    };
}
