// Type definitions for react-bytesize-icons 0.6.4
// Project: https://github.com/abdelhai/react-bytesize-icons
// Definitions by: rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />

declare namespace ReactBytesizeIcons {
    type StrokeLinejoin = "round" | "bevel" | "miter" | "inherit";
    type StrokeLinecap = "round" | "butt" | "square" | "inherit";
    interface BytesizeIconsProps extends __React.Props<any> {
        width?: number;
        height?: number;
        strokeWidth?: string;
        strokeLinejoin?: StrokeLinejoin;
        strokeLinecap?: StrokeLinecap;
        color?: string;
    }
    class BytesizeIconComponent extends __React.Component<BytesizeIconsProps, {}> {}
}

declare module "react-bytesize-icons" {
    export class Activity extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Alert extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Archive extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class ArrowBottom extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class ArrowLeft extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class ArrowRight extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class ArrowTop extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Backwards extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Ban extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Bell extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Bookmark extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Camera extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class CaretBottom extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class CaretLeft extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class CaretRight extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class CaretTop extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Cart extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Checkmark extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class ChevronBottom extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class ChevronLeft extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class ChevronRight extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class ChevronTop extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Clock extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Close extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Code extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Compose extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Creditcard extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Download extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Send extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Edit extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Eject extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class EllipsisHorizontal extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class EllipsisVertical extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class End extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Export extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class External extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Book extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Calendar extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Print extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Eye extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class File extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Fire extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Flag extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class FolderOpen extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Folder extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Forwards extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Gift extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Github extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Heart extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Home extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Import extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Inbox extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Info extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Lightning extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Link extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Location extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Lock extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Mail extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Menu extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Message extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Music extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Mute extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Options extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Paperclip extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Pause extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Photo extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Plus extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Minus extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Play extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Portfolio extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Reload extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Reply extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Search extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Settings extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Star extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Start extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Tag extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Trash extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Twitter extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Unlock extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Upload extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class User extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Video extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Volume extends ReactBytesizeIcons.BytesizeIconComponent {}
    export class Work extends ReactBytesizeIcons.BytesizeIconComponent {}
}
