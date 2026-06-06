/// <reference types="jquery" />

import { Customize } from "./Customize";

import { BackgroundControl } from "./BackgroundControl";
import { BackgroundPositionControl } from "./BackgroundPositionControl";
import { Class } from "./Class";
import { CodeEditorControl } from "./CodeEditorControl";
import { ColorControl } from "./ColorControl";
import { Control } from "./Control";
import { CroppedImageControl } from "./CroppedImageControl";
import { DateTimeControl } from "./DateTimeControl";
import { Element } from "./Element";
import { Events } from "./Events";
import { HeaderControl } from "./HeaderControl";
import { ImageControl } from "./ImageControl";
import { MediaControl } from "./MediaControl";
import { Messenger } from "./Messenger";
import { Notification } from "./Notification";
import { Notifications } from "./Notifications";
import { OuterSection } from "./OuterSection";
import { OverlayNotification } from "./OverlayNotification";
import { Panel } from "./Panel";
import { Previewer } from "./Previewer";
import { PreviewFrame } from "./PreviewFrame";
import { PreviewLinkControl } from "./PreviewLinkControl";
import { Section } from "./Section";
import { Setting } from "./Setting";
import { SiteIconControl } from "./SiteIconControl";
import { ThemeControl } from "./ThemeControl";
import { ThemesPanel } from "./ThemesPanel";
import { ThemesSection } from "./ThemesSection";
import { UploadControl } from "./UploadControl";
import { Value } from "./Value";
import { Values } from "./Values";

declare global {
    namespace wordpress__customize {
        export {
            BackgroundControl,
            BackgroundPositionControl,
            Class,
            CodeEditorControl,
            ColorControl,
            Control,
            CroppedImageControl,
            DateTimeControl,
            Element,
            Events,
            HeaderControl,
            ImageControl,
            MediaControl,
            Messenger,
            Notification,
            Notifications,
            OuterSection,
            OverlayNotification,
            Panel,
            Previewer,
            PreviewFrame,
            PreviewLinkControl,
            Section,
            Setting,
            SiteIconControl,
            ThemeControl,
            ThemesPanel,
            ThemesSection,
            UploadControl,
            Value,
            Values,
        };
    }
    const wp: {
        customize: Customize;
    };
}
