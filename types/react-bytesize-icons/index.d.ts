import * as React from "react";

export type StrokeLinejoin = "round" | "bevel" | "miter" | "inherit";
export type StrokeLinecap = "round" | "butt" | "square" | "inherit";
interface BytesizeBaseIconsProps {
    children?: React.ReactNode;
    ref?: React.LegacyRef<any> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    color?: string | undefined;
    className?: string | undefined;
    id?: string | undefined;
}
interface BytesizeIconsProps extends BytesizeBaseIconsProps {
    strokeWidth?: string | undefined;
    strokeLinejoin?: StrokeLinejoin | undefined;
    strokeLinecap?: StrokeLinecap | undefined;
}
export class BytesizeBaseIconComponent extends React.Component<BytesizeBaseIconsProps> {}
export class BytesizeIconComponent extends React.Component<BytesizeIconsProps> {}

export class Activity extends BytesizeIconComponent {}
export class Alert extends BytesizeIconComponent {}
export class Archive extends BytesizeIconComponent {}
export class ArrowBottom extends BytesizeIconComponent {}
export class ArrowLeft extends BytesizeIconComponent {}
export class ArrowRight extends BytesizeIconComponent {}
export class ArrowTop extends BytesizeIconComponent {}
export class Backwards extends BytesizeIconComponent {}
export class Ban extends BytesizeIconComponent {}
export class Bag extends BytesizeIconComponent {}
export class Bell extends BytesizeIconComponent {}
export class Bookmark extends BytesizeIconComponent {}
export class Camera extends BytesizeIconComponent {}
export class CaretBottom extends BytesizeIconComponent {}
export class CaretLeft extends BytesizeIconComponent {}
export class CaretRight extends BytesizeIconComponent {}
export class CaretTop extends BytesizeIconComponent {}
export class Cart extends BytesizeIconComponent {}
export class Checkmark extends BytesizeIconComponent {}
export class ChevronBottom extends BytesizeIconComponent {}
export class ChevronLeft extends BytesizeIconComponent {}
export class ChevronRight extends BytesizeIconComponent {}
export class ChevronTop extends BytesizeIconComponent {}
export class Clipboard extends BytesizeIconComponent {}
export class Clock extends BytesizeIconComponent {}
export class Close extends BytesizeIconComponent {}
export class Code extends BytesizeIconComponent {}
export class Compose extends BytesizeIconComponent {}
export class CreditCard extends BytesizeIconComponent {}
export class Desktop extends BytesizeIconComponent {}
export class Download extends BytesizeIconComponent {}
export class Send extends BytesizeIconComponent {}
export class Edit extends BytesizeIconComponent {}
export class Eject extends BytesizeIconComponent {}
export class EllipsisHorizontal extends BytesizeIconComponent {}
export class EllipsisVertical extends BytesizeIconComponent {}
export class End extends BytesizeIconComponent {}
export class Export extends BytesizeIconComponent {}
export class External extends BytesizeIconComponent {}
export class Book extends BytesizeIconComponent {}
export class Calendar extends BytesizeIconComponent {}
export class Print extends BytesizeIconComponent {}
export class Eye extends BytesizeIconComponent {}
export class Feed extends BytesizeIconComponent {}
export class File extends BytesizeIconComponent {}
export class Filter extends BytesizeIconComponent {}
export class Fire extends BytesizeIconComponent {}
export class Flag extends BytesizeIconComponent {}
export class FolderOpen extends BytesizeIconComponent {}
export class Folder extends BytesizeIconComponent {}
export class Forwards extends BytesizeIconComponent {}
export class Fullscreen extends BytesizeIconComponent {}
export class FullscreenExit extends BytesizeIconComponent {}
export class Gift extends BytesizeIconComponent {}
export class GitHub extends BytesizeBaseIconComponent {}
export class Heart extends BytesizeIconComponent {}
export class Home extends BytesizeIconComponent {}
export class Import extends BytesizeIconComponent {}
export class Inbox extends BytesizeIconComponent {}
export class Info extends BytesizeIconComponent {}
export class Lightning extends BytesizeIconComponent {}
export class Link extends BytesizeIconComponent {}
export class Location extends BytesizeIconComponent {}
export class Lock extends BytesizeIconComponent {}
export class Mail extends BytesizeIconComponent {}
export class Menu extends BytesizeIconComponent {}
export class Message extends BytesizeIconComponent {}
export class Microphone extends BytesizeIconComponent {}
export class Mobile extends BytesizeIconComponent {}
export class Move extends BytesizeIconComponent {}
export class Moon extends BytesizeIconComponent {}
export class Music extends BytesizeIconComponent {}
export class Mute extends BytesizeIconComponent {}
export class Options extends BytesizeIconComponent {}
export class Paperclip extends BytesizeIconComponent {}
export class Pause extends BytesizeIconComponent {}
export class Photo extends BytesizeIconComponent {}
export class Plus extends BytesizeIconComponent {}
export class Minus extends BytesizeIconComponent {}
export class Play extends BytesizeIconComponent {}
export class Portfolio extends BytesizeIconComponent {}
export class Reload extends BytesizeIconComponent {}
export class Reply extends BytesizeIconComponent {}
export class Search extends BytesizeIconComponent {}
export class Settings extends BytesizeIconComponent {}
export class SignIn extends BytesizeIconComponent {}
export class SignOut extends BytesizeIconComponent {}
export class Star extends BytesizeIconComponent {}
export class Start extends BytesizeIconComponent {}
export class Tag extends BytesizeIconComponent {}
export class Telephone extends BytesizeIconComponent {}
export class Trash extends BytesizeIconComponent {}
export class Twitter extends BytesizeBaseIconComponent {}
export class Unlock extends BytesizeIconComponent {}
export class Upload extends BytesizeIconComponent {}
export class User extends BytesizeIconComponent {}
export class Video extends BytesizeIconComponent {}
export class Volume extends BytesizeIconComponent {}
export class Work extends BytesizeIconComponent {}
export class ZoomIn extends BytesizeIconComponent {}
export class ZoomOut extends BytesizeIconComponent {}
export class ZoomReset extends BytesizeIconComponent {}
