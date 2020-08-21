// Type definitions for non-npm package @wordpress/customize-browser 5.5
// Project: https://core.trac.wordpress.org/browser/trunk/src/js/_enqueues/wp/customize
// Definitions by: Marek Dědič <https://github.com/marekdedic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.9

/// <reference types="jquery" />

import { Customize } from './Customize';

import { Class as Local_Class } from './Class';
import { Events as Local_Events } from './Events';
import { Value as Local_Value } from './Value';
import { Values as Local_Values } from './Values';
import { Element as Local_Element } from './Element';
import { Messenger as Local_Messenger } from './Messenger';
import { Notification as Local_Notification } from './Notification';
import { OverlayNotification as Local_OverlayNotification } from './OverlayNotification';
import { Notifications as Local_Notifications } from './Notifications';
import { Setting as Local_Setting } from './Setting';
import { Section as Local_Section } from './Section';
import { ThemesPanel as Local_ThemesPanel } from './ThemesPanel';
import { ThemesSection as Local_ThemesSection } from './ThemesSection';
import { OuterSection as Local_OuterSection } from './OuterSection';
import { Panel as Local_Panel } from './Panel';
import { Control as Local_Control } from './Control';
import { ColorControl as Local_ColorControl } from './ColorControl';
import { MediaControl as Local_MediaControl } from './MediaControl';
import { UploadControl as Local_UploadControl } from './UploadControl';
import { ImageControl as Local_ImageControl } from './ImageControl';
import { BackgroundControl as Local_BackgroundControl } from './BackgroundControl';
import { BackgroundPositionControl as Local_BackgroundPositionControl } from './BackgroundPositionControl';
import { CroppedImageControl as Local_CroppedImageControl } from './CroppedImageControl';
import { SiteIconControl as Local_SiteIconControl } from './SiteIconControl';
import { HeaderControl as Local_HeaderControl } from './HeaderControl';
import { ThemeControl as Local_ThemeControl } from './ThemeControl';
import { CodeEditorControl as Local_CodeEditorControl } from './CodeEditorControl';
import { DateTimeControl as Local_DateTimeControl } from './DateTimeControl';
import { PreviewLinkControl as Local_PreviewLinkControl } from './PreviewLinkControl';
import { PreviewFrame as Local_PreviewFrame } from './PreviewFrame';
import { Previewer as Local_Previewer } from './Previewer';

declare global {
    namespace wordpress__customize {
        abstract class Class extends Local_Class {}
        class Events<T extends keyof any> extends Local_Events<T> {}
        class Value<T> extends Local_Value<T> {}
        class Values<T> extends Local_Values<T> {}
        class Element extends Local_Element {}
        class Messenger<T> extends Local_Messenger<T> {}
        class Notification extends Local_Notification {}
        class OverlayNotification extends Local_OverlayNotification {}
        class Notifications extends Local_Notifications {}
        class Setting<T> extends Local_Setting<T> {}
        class Section extends Local_Section {}
        class ThemesPanel extends Local_ThemesPanel {}
        class ThemesSection extends Local_ThemesSection {}
        class OuterSection extends Local_OuterSection {}
        class Panel extends Local_Panel {}
        class Control extends Local_Control {}
        class ColorControl extends Local_ColorControl {}
        class MediaControl extends Local_MediaControl {}
        class UploadControl extends Local_UploadControl {}
        class ImageControl extends Local_ImageControl {}
        class BackgroundControl extends Local_BackgroundControl {}
        class BackgroundPositionControl extends Local_BackgroundPositionControl {}
        class CroppedImageControl extends Local_CroppedImageControl {}
        class SiteIconControl extends Local_SiteIconControl {}
        class HeaderControl extends Local_HeaderControl {}
        class ThemeControl extends Local_ThemeControl {}
        class CodeEditorControl extends Local_CodeEditorControl {}
        class DateTimeControl extends Local_DateTimeControl {}
        class PreviewLinkControl extends Local_PreviewLinkControl {}
        class PreviewFrame<T> extends Local_PreviewFrame<T> {}
        class Previewer<T> extends Local_Previewer<T> {}
    }
    const wp: {
        customize: Customize;
    };
}
