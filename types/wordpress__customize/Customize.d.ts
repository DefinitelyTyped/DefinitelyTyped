import {BackgroundControl} from './BackgroundControl';
import {BackgroundPositionControl} from './BackgroundPositionControl';
import {Class} from './Class';
import {CodeEditorControl} from './CodeEditorControl';
import {ColorControl} from './ColorControl';
import {Control} from './Control';
import {Control_Constructor} from './Control_Constructor';
import {CroppedImageControl} from './CroppedImageControl';
import {DateTimeControl} from './DateTimeControl';
import {Element} from './Element';
import {Events} from './Events';
import {HeaderControl} from './HeaderControl';
import {ImageControl} from './ImageControl';
import {MediaControl} from './MediaControl';
import {Messenger} from './Messenger';
import {Notification} from './Notification';
import {Notifications} from './Notifications';
import {OverlayNotification} from './OverlayNotification';
import {OuterSection} from './OuterSection';
import {Panel} from './Panel';
import {Panel_Constructor} from './Panel_Constructor';
import {Previewer} from './Previewer';
import {PreviewFrame} from './PreviewFrame';
import {PreviewLinkControl} from './PreviewLinkControl';
import {Section} from './Section';
import {Section_Constructor} from './Section_Constructor';
import {Setting} from './Setting';
import {Setting_Constructor} from './Setting_Constructor';
import {SiteIconControl} from './SiteIconControl';
import {ThemeControl} from './ThemeControl';
import {ThemesPanel} from './ThemesPanel';
import {ThemesSection} from './ThemesSection';
import {UploadControl} from './UploadControl';
import {Utils} from './Utils';
import {Value} from './Value';
import {Values} from './Values';

export interface DirtyValuesOptions {
	unsaved?: boolean;
}

export interface RequestChangesetUpdateOptions {
	autosave?: boolean;
	force?: boolean;
	title?: string;
	date?: string;
}

export interface HandleSettingValiditiesArgs {
	settingValidities: Record<string, any>; // TODO
	focusInvalidControl?: boolean;
}

export interface Customize extends Values<Setting<any>> {
	_latestRevision: number;
	_lastSavedRevision: number;
	_latestSettingRevision: Record<string, number>;
	//(a: any, b?: any): any;

	Class: typeof Class;
	Events: typeof Events;
	Value: typeof Value;
	Values: typeof Values;
	Element: typeof Element;
	Messenger: typeof Messenger;
	Notification: typeof Notification;
	OverlayNotification: typeof OverlayNotification;
	Notifications: typeof Notifications;
	Setting: typeof Setting;
	Section: typeof Section;
	ThemesPanel: typeof ThemesPanel;
	ThemesSection: typeof ThemesSection;
	OuterSection: typeof OuterSection;
	Panel: typeof Panel;
	Control: typeof Control;
	ColorControl: typeof ColorControl;
	MediaControl: typeof MediaControl;
	UploadControl: typeof UploadControl;
	ImageControl: typeof ImageControl;
	BackgroundControl: typeof BackgroundControl;
	BackgroundPositionControl: typeof BackgroundPositionControl;
	CroppedImageControl: typeof CroppedImageControl;
	SiteIconControl: typeof SiteIconControl;
	HeaderControl: typeof HeaderControl;
	ThemeControl: typeof ThemeControl;
	CodeEditorControl: typeof CodeEditorControl;
	DateTimeControl: typeof DateTimeControl;
	PreviewLinkControl: typeof PreviewLinkControl;
	PreviewFrame: typeof PreviewFrame;
	Previewer: typeof Previewer;
	utils: Utils
	ensure(element: string|JQuery): JQuery;
	dirtyValues(options?: DirtyValuesOptions): Record<string, any>;
	requestChangesetUpdate(changes?: Record<string, any>, args?: RequestChangesetUpdateOptions): JQuery.Promise<any, any, any>
	get(): Record<string, any>;
	defaultConstructor: Setting<Class>;
	control: Values<Control>;
	section: Values<Section>;
	panel: Values<Panel>;
	notifications: Notifications;
	setDocumentTitle(documentTitle: string): void;
	settingConstructor: Setting_Constructor;
	controlConstructor: Control_Constructor;
	panelConstructor: Panel_Constructor;
	sectionConstructor: Section_Constructor;
	_handleSettingValidities(args: HandleSettingValiditiesArgs): void;
	findControlsForSettings(settingIds: Array<string>): Record<string, Control>;
	reflowPaneContents(): void;
	state: Values<Class>;
	settings: any; // TODO
	l10n: Record<string, string>
	previewer: Previewer<string>;
}
