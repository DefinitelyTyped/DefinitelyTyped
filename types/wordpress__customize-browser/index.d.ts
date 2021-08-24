// Type definitions for non-npm package @wordpress/customize-browser 5.5
// Project: https://core.trac.wordpress.org/browser/trunk/src/js/_enqueues/wp/customize
// Definitions by: Marek Dědič <https://github.com/marekdedic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.9

/// <reference types="jquery" />

import { Customize } from './Customize';

import { Class } from './Class';
import { Events } from './Events';
import { Value } from './Value';
import { Values } from './Values';
import { Element } from './Element';
import { Messenger } from './Messenger';
import { Notification } from './Notification';
import { OverlayNotification } from './OverlayNotification';
import { Notifications } from './Notifications';
import { Setting } from './Setting';
import { Section } from './Section';
import { ThemesPanel } from './ThemesPanel';
import { ThemesSection } from './ThemesSection';
import { OuterSection } from './OuterSection';
import { Panel } from './Panel';
import { Control } from './Control';
import { ColorControl } from './ColorControl';
import { MediaControl } from './MediaControl';
import { UploadControl } from './UploadControl';
import { ImageControl } from './ImageControl';
import { BackgroundControl } from './BackgroundControl';
import { BackgroundPositionControl } from './BackgroundPositionControl';
import { CroppedImageControl } from './CroppedImageControl';
import { SiteIconControl } from './SiteIconControl';
import { HeaderControl } from './HeaderControl';
import { ThemeControl } from './ThemeControl';
import { CodeEditorControl } from './CodeEditorControl';
import { DateTimeControl } from './DateTimeControl';
import { PreviewLinkControl } from './PreviewLinkControl';
import { PreviewFrame } from './PreviewFrame';
import { Previewer } from './Previewer';

declare global {
    namespace wordpress__customize {
        export {
            Class,
            Events,
            Value,
            Values,
            Element,
            Messenger,
            Notification,
            OverlayNotification,
            Notifications,
            Setting,
            Section,
            ThemesPanel,
            ThemesSection,
            OuterSection,
            Panel,
            Control,
            ColorControl,
            MediaControl,
            UploadControl,
            ImageControl,
            BackgroundControl,
            BackgroundPositionControl,
            CroppedImageControl,
            SiteIconControl,
            HeaderControl,
            ThemeControl,
            CodeEditorControl,
            DateTimeControl,
            PreviewLinkControl,
            PreviewFrame,
            Previewer,
        };
    }
    const wp: {
        customize: Customize;
    };
}
