import { Obj } from './Obj';
import { Binary } from './Binary';
import { CSSProperties, Component } from 'react';
import { Widget } from './Widget';
import { Link } from './Link';

export interface CSSImageStyleBackgroundProps {
    image: Obj | Binary | string;
    attachment?: CSSProperties['backgroundAttachment'];
    clip?: CSSProperties['backgroundClip'];
    color?: CSSProperties['backgroundColor'];
    origin?: CSSProperties['backgroundOrigin'];
    position?: CSSProperties['backgroundPosition'];
    repeat?: CSSProperties['backgroundRepeat'];
    size?: CSSProperties['backgroundSize'];
}

export type CSSPropsWithoutBackground =
    Omit<CSSProperties,
        'background' |
        'backgroundAttachment' |
        'backgroundClip' |
        'backgroundColor' |
        'backgroundPosition' |
        'backgroundRepeat' |
        'backgroundSize'
    >;

export interface BackgroundImageBackgroundProp {
    background: CSSImageStyleBackgroundProps | CSSImageStyleBackgroundProps[];
}

export interface BackgroundImageTagProps {
    tag?: string;
    style: CSSPropsWithoutBackground & BackgroundImageBackgroundProp;
    className?: string;
}
export class BackgroundImageTag extends Component<BackgroundImageTagProps, any> { }

export interface ChildListTagProps {
    parent?: Obj;
    tag?: string;
    // TODO: hard to type
    renderChild?: (child: any) => any;
}

export class ChildListTag extends Component<ChildListTag, any> { }

export interface ContentTagProps extends React.HTMLAttributes<any> {
    attribute: string;
    content: Obj | Widget;
    tag?: string;
    widgetProps?: object;
}
export class ContentTag extends Component<ContentTagProps, any> { }
export class CurrentPage extends Component<{}, any> { }

export interface ImageTagProps extends React.HTMLAttributes<HTMLImageElement> {
    attribute: string;
    content: Binary | Obj | Widget;
    alt?: string;
}

export class ImageTag extends Component<ImageTagProps, any> { }

export class InPlaceEditingOff extends Component<any, any> { }

export interface LinkTagProps {
    to: Obj | Link;
    params: object;
    onClick: (event: React.MouseEvent) => void;
}

export class LinkTag extends Component<LinkTagProps, any> { }
export class NotFoundErrorPage extends Component<{}, any> { }
export class RestoreInPlaceEditing extends Component<{}, any> { }

export interface WidgetTagProps extends React.HTMLAttributes<any> {
    tag: string;
    [key: string]: any;
}

export class WidgetTag extends Component<WidgetTagProps, any> { }
