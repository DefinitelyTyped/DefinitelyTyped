import {Panel} from './Panel';

export class ThemesPanel extends Panel {
	installingThemes: Array<string>;
	canSwitchTheme(slug?: string): boolean;
	installTheme(event: JQuery.Event): JQuery.Promise<any, any, any>;
	loadThemePreview(themeId: string): JQuery.Promise<any, any, any>;
	updateTheme(event: JQuery.Event): void;
	deleteTheme(event: JQuery.Event): void;
}
