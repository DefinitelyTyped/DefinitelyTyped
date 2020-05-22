// @TODO: Assign class types

declare const CONFIG: {
	
	/**
	 * Configure debugging flags to display additional information
	 */
	debug: {
		hooks: boolean,
		sight: boolean
	},

	/**
	 * Configuration for the default Actor entity class
	 */
	Actor: {
		entityClass: typeof Actor,
		collection: Actors,
		sheetClasses: typeof ActorSheet
	},

	/**
	 * Configuration for the default Item entity class
	 */
	Item: {
		entityClass: typeof Item,
		collection: Items,
		sheetClasses: typeof ItemSheet
	},

	/**
	 * Configuration for the JournalEntry entity
	 */
	JournalEntry: {
		entityClass: typeof JournalEntry,
		sheetClass: typeof JournalSheet,
		noteIcons: {
			"Anchor": string,
			[key: string]: string
		},
		sidebarIcon: string
	},

	/**
	 * Configuration for the default Scene entity class
	 */
	Scene: {
		entityClass: typeof Scene,
		collection: Scenes,
		sheetClass: any,
		notesClass: any,
		sidebarIcon: string
	},

	/**
	 * Configuration for the default Playlist entity class
	 */
	Playlist: {
		entityClass,
		sheetClass,
		sidebarIcon: string
	},

	/**
	 * Configuration for RollTable random draws
	 */
	RollTable: {
		entityClass,
		sheetClass,
		sidebarIcon: string,
		resultIcon: string
	},

	/**
	 * The control icons used for rendering common HUD operations
	 */
	controlIcons: {
		combat: string,
		visibility: string,
		effects: string,
		lock: string,
		up: string,
		down: string,
		defeated: string,
		[key: string]: string
	},

	/**
	 * Suggested font families that are displayed wherever a choice is presented
	 */
	fontFamilies: string[],

	/**
	 * The default font family used for text labels on the PIXI Canvas
	 */
	defaultFontFamily: string,

	/**
	 * Available Weather Effects implemntations
	 */
	weatherEffects: any,

	/**
	 * An array of status effect icons which can be applied to Tokens
	 */
	statusEffects: string[],

	/**
	 * A mapping of core audio effects used which can be replaced by systems or mods
	 */
	sounds: {
		dice: string,
		lock: string,
		notification: string,
		combat: string
	},

	/**
	 * Define the set of supported languages for localization
	 */
	supportedLanguages: {
		en: string,
		[key: string]: string
	},

	/**
	 * Maximum canvas zoom scale
	 */
	maxCanvasZoom: number,
	
	[key: string]: any;
};