/**
 * The global CONSTANTS object
 */
declare const CONST: {
	vtt: 'Foundry VTT';
	VTT: 'Foundry Virtual Tabletop';
	WEBSITE_URL: 'https://foundryvtt.com';

	BASE_ENTITY_TYPE: 'base';

	/**
	 * Valid Chat Message types
	 */
	CHAT_MESSAGE_TYPES: {
		OTHER: 0;
		OOC: 1;
		IC: 2;
		EMOTE: 3;
		WHISPER: 4;
		ROLL: 5;
	};

	/**
	 * The allowed Entity types which may exist within a Compendium pack
	 * This is a subset of ENTITY_TYPES
	 */
	COMPENDIUM_ENTITY_TYPES: [
		'Actor',
		'Item',
		'Scene',
		'JournalEntry',
		'Macro',
		'RollTable',
		'Playlist'
	];

	/**
	 * The default artwork used for Token images if none is provided
	 */
	DEFAULT_TOKEN: 'icons/svg/mystery-man.svg';

	/**
	 * The default artwork used for Note placeables if none is provided
	 */
	DEFAULT_NOTE_ICON: 'icons/svg/book.svg';

	/**
	 * The supported dice roll visibility modes
	 */
	DICE_ROLL_MODES: {
		PUBLIC: 'roll';
		PRIVATE: 'gmroll';
		BLIND: 'blindroll';
		SELF: 'selfroll';
	};

	/**
	 * The allowed Drawing types which may be saved
	 */
	DRAWING_TYPES: {
		RECTANGLE: 'r';
		ELLIPSE: 'e';
		TEXT: 't';
		POLYGON: 'p';
		FREEHAND: 'f';
	};

	/**
	 * The allowed fill types which a Drawing object may display
	 * NONE: The drawing is not filled
	 * SOLID: The drawing is filled with a solid color
	 * PATTERN: The drawing is filled with a tiled image pattern
	 */
	DRAWING_FILL_TYPES: {
		NONE: 0;
		SOLID: 1;
		PATTERN: 2;
	};

	/**
	 * The default configuration values used for Drawing objects
	 */
	DRAWING_DEFAULT_VALUES: {
		width: 0;
		height: 0;
		rotation: 0;
		z: 0;
		hidden: false;
		locked: false;
		fillType: number;
		fillAlpha: 0.5;
		bezierFactor: 0.1;
		strokeAlpha: 1.0;
		strokeWidth: 8;
		fontSize: 48;
		textAlpha: 1.0;
		textColor: '#FFFFFF';
	};

	/**
	 * Define the allowed Entity class types
	 */
	ENTITY_TYPES: [
		'Actor',
		'ChatMessage',
		'Combat',
		'Item',
		'Folder',
		'JournalEntry',
		'Macro',
		'Playlist',
		'RollTable',
		'Scene',
		'User'
	];

	/**
	 * EULA version number
	 */
	EULA_VERSION: string;

	/**
	 * Define the allowed permission levels for a non-user Entity.
	 * Each level is assigned a value in ascending order. Higher levels grant more permissions.
	 */
	ENTITY_PERMISSIONS: {
		NONE: 0;
		LIMITED: 1;
		OBSERVER: 2;
		OWNER: 3;
	};

	/**
	 * The maximum allowed level of depth for Folder nesting
	 */
	FOLDER_MAX_DEPTH: 3;

	/**
	 * Define the allowed Entity types which Folders may contain
	 */
	FOLDER_ENTITY_TYPES: [
		'Actor',
		'Item',
		'Scene',
		'JournalEntry',
		'RollTable'
	];

	/**
	 * Define the allowed Entity types which may be dynamically linked in chat
	 */
	ENTITY_LINK_TYPES: [
		'Actor',
		'Item',
		'Scene',
		'JournalEntry',
		'Macro',
		'RollTable'
	];

	/**
	 * The allowed Grid types which are supported by the software
	 */
	GRID_TYPES: {
		GRIDLESS: 0;
		SQUARE: 1;
		HEXODDR: 2;
		HEXEVENR: 3;
		HEXODDQ: 4;
		HEXEVENQ: 5;
	};

	/**
	 * The minimum allowed grid size which is supported by the software
	 */
	GRID_MIN_SIZE: 50;

	/**
	 * An Array of valid MacroAction scope values
	 */
	MACRO_SCOPES: ['global', 'actors', 'actor'];

	/**
	 * The allowed playback modes for an audio Playlist
	 * DISABLED: The playlist does not play on its own, only individual Sound tracks played as a soundboard
	 * SEQUENTIAL: The playlist plays sounds one at a time in sequence
	 * SHUFFLE: The playlist plays sounds one at a time in randomized order
	 * SIMULTANEOUS: The playlist plays all contained sounds at the same time
	 */
	PLAYLIST_MODES: {
		DISABLED: -1;
		SEQUENTIAL: 0;
		SHUFFLE: 1;
		SIMULTANEOUS: 2;
	};

	/**
	 * Define the threshold version which packages must support as their minimumCoreVersion in order to be usable
	 */
	REQUIRED_PACKAGE_CORE_VERSION: string;

	/**
	 * Encode the reasons why a package may be available or unavailable for use
	 */
	PACKAGE_AVAILABILITY_CODES: {
		AVAILABLE: 0;
		REQUIRES_UPDATE: 1;
		REQUIRES_SYSTEM: 2;
		REQUIRES_DEPENDENCY: 3;
		REQUIRES_CORE: 4;
	};

	/**
	 * A safe password string which can be displayed
	 */
	PASSWORD_SAFE_STRING: string;

	/**
	 * The default sorting density for manually ordering child objects within a parent
	 */
	SORT_INTEGER_DENSITY: 100000;

	/**
	 * The allowed types of a TableResult document
	 */
	TABLE_RESULT_TYPES: {
		TEXT: 0;
		ENTITY: 1;
		COMPENDIUM: 2;
	};

	/**
	 * Define the valid anchor locations for a Tooltip displayed on a Placeable Object
	 */
	TEXT_ANCHOR_POINTS: {
		CENTER: 0;
		BOTTOM: 1;
		TOP: 2;
		LEFT: 3;
		RIGHT: 4;
	};

	/**
	 * Describe the various thresholds of token control upon which to show certain pieces of information
	 * NONE - no information is displayed
	 * CONTROL - displayed when the token is controlled
	 * OWNER HOVER - displayed when hovered by a GM or a user who owns the actor
	 * HOVER - displayed when hovered by any user
	 * OWNER - always displayed for a GM or for a user who owns the actor
	 * ALWAYS - always displayed for everyone
	 */
	TOKEN_DISPLAY_MODES: {
		NONE: 0;
		CONTROL: 10;
		OWNER_HOVER: 20;
		HOVER: 30;
		OWNER: 40;
		ALWAYS: 50;
	};

	/**
	 * The allowed Token disposition types
	 * HOSTILE - Displayed as an enemy with a red border
	 * NEUTRAL - Displayed as neutral with a yellow border
	 * FRIENDLY - Displayed as an ally with a cyan border
	 */
	TOKEN_DISPOSITIONS: {
		HOSTILE: -1;
		NEUTRAL: 0;
		FRIENDLY: 1;
	};

	/**
	 * Define the allowed User permission levels.
	 * Each level is assigned a value in ascending order. Higher levels grant more permissions.
	 */
	USER_ROLES: {
		NONE: 0;
		PLAYER: 1;
		TRUSTED: 2;
		ASSISTANT: 3;
		GAMEMASTER: 4;
	};

	/**
	 * Invert the User Role mapping to recover role names from a role integer
	 */
	USER_ROLE_NAMES: any;

	/**
	 * Define the named actions which users or user roles can be permitted to do.
	 * Each key of this Object denotes an action for which permission may be granted (true) or withheld (false)
	 */
	USER_PERMISSIONS: {
		BROADCAST_AUDIO: {
			label: 'PERMISSION.BroadcastAudio';
			hint: 'PERMISSION.BroadcastAudioHint';
			disableGM: true;
			defaultRole: number;
		};
		BROADCAST_VIDEO: {
			label: 'PERMISSION.BroadcastVideo';
			hint: 'PERMISSION.BroadcastVideoHint';
			disableGM: true;
			defaultRole: number;
		};
		ACTOR_CREATE: {
			label: 'PERMISSION.ActorCreate';
			hint: 'PERMISSION.ActorCreateHint';
			disableGM: false;
			defaultRole: number;
		};
		DRAWING_CREATE: {
			label: 'PERMISSION.DrawingCreate';
			hint: 'PERMISSION.DrawingCreateHint';
			disableGM: false;
			defaultRole: number;
		};
		ITEM_CREATE: {
			label: 'PERMISSION.ItemCreate';
			hint: 'PERMISSION.ItemCreateHint';
			disableGM: false;
			defaultRole: number;
		};
		FILES_BROWSE: {
			label: 'PERMISSION.FilesBrowse';
			hint: 'PERMISSION.FilesBrowseHint';
			disableGM: false;
			defaultRole: number;
		};
		FILES_UPLOAD: {
			label: 'PERMISSION.FilesUpload';
			hint: 'PERMISSION.FilesUploadHint';
			disableGM: false;
			defaultRole: number;
		};
		MACRO_SCRIPT: {
			label: 'PERMISSION.MacroScript';
			hint: 'PERMISSION.MacroScriptHint';
			disableGM: false;
			defaultRole: number;
		};
		MESSAGE_WHISPER: {
			label: 'PERMISSION.MessageWhisper';
			hint: 'PERMISSION.MessageWhisperHint';
			disableGM: false;
			defaultRole: number;
		};
		SETTINGS_MODIFY: {
			label: 'PERMISSION.SettingsModify';
			hint: 'PERMISSION.SettingsModifyHint';
			disableGM: false;
			defaultRole: number;
		};
		SHOW_CURSOR: {
			label: 'PERMISSION.ShowCursor';
			hint: 'PERMISSION.ShowCursorHint';
			disableGM: true;
			defaultRole: number;
		};
		TEMPLATE_CREATE: {
			label: 'PERMISSION.TemplateCreate';
			hint: 'PERMISSION.TemplateCreateHint';
			disableGM: false;
			defaultRole: number;
		};
		TOKEN_CREATE: {
			label: 'PERMISSION.TokenCreate';
			hint: 'PERMISSION.TokenCreateHint';
			disableGM: false;
			defaultRole: number;
		};
		TOKEN_CONFIGURE: {
			label: 'PERMISSION.TokenConfigure';
			hint: 'PERMISSION.TokenConfigureHint';
			disableGM: false;
			defaultRole: number;
		};
		WALL_DOORS: {
			label: 'PERMISSION.WallDoors';
			hint: 'PERMISSION.WallDoorsHint';
			disableGM: false;
			defaultRole: number;
		};
	};

	/**
	 * The allowed directions of effect that a Wall can have
	 * BOTH: The wall collides from both directions
	 * LEFT: The wall collides only when a ray strikes its left side
	 * RIGHT: The wall collides only when a ray strikes its right side
	 */
	WALL_DIRECTIONS: {
		BOTH: 0;
		LEFT: 1;
		RIGHT: 2;
	};

	/**
	 * The allowed door types which a Wall may contain
	 * NONE: The wall does not contain a door
	 * DOOR: The wall contains a regular door
	 * SECRET: The wall contains a secret door
	 */
	WALL_DOOR_TYPES: {
		NONE: 0;
		DOOR: 1;
		SECRET: 2;
	};

	/**
	 * The allowed door states which may describe a Wall that contains a door
	 * CLOSED: The door is closed
	 * OPEN: The door is open
	 * LOCKED: The door is closed and locked
	 */
	WALL_DOOR_STATES: {
		CLOSED: 0;
		OPEN: 1;
		LOCKED: 2;
	};

	/**
	 * The types of movement collision which a Wall may impose
	 * NONE: Movement does not collide with this wall
	 * NORMAL: Movement collides with this wall
	 */
	WALL_MOVEMENT_TYPES: {
		NONE: 0;
		NORMAL: 1;
	};

	/**
	 * The types of sensory collision which a Wall may impose
	 * NONE: Senses do not collide with this wall
	 * NORMAL: Senses collide with this wall
	 * LIMITED: Senses collide with the second intersection, bypassing the first
	 */
	WALL_SENSE_TYPES: {
		NONE: 0;
		NORMAL: 1;
		LIMITED: 2;
	};

	/**
	 * The supported file extensions for image-type files
	 */
	IMAGE_FILE_EXTENSIONS: ['jpg', 'jpeg', 'png', 'svg', 'webp'];

	/**
	 * The supported file extensions for video-type files
	 */
	VIDEO_FILE_EXTENSIONS: ['mp4', 'ogg', 'webm'];

	/**
	 * The supported file extensions for audio-type files
	 */
	AUDIO_FILE_EXTENSIONS: ['flac', 'mp3', 'ogg', 'wav', 'webm'];
};
