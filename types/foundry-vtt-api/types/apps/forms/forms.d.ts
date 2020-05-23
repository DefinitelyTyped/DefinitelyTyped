// @TODO:

/**
 * Configure the Combat tracker to display additional information as appropriate
 */
declare class CombatTrackerConfig extends FormApplication {}

/**
 * Edit a folder, configuring its name and appearance
 * @type {FormApplication}
 */
declare class FolderConfig extends FormApplication {}

/**
 * An Image Popout Application
 * Provides optional support to edit the image path being viewed
 * @type {Application}
 * @params image {String}       The image being viewed
 * @params options {Object}     Standard Application rendering options
 * @params onUpdate {Function}  An optional callback function which should be triggered if the Image path is edited
 */
declare class ImagePopout extends FormApplication {}

/**
 * Template Measurement Config Sheet
 *
 * @param template			The template object being configured
 * @param options			Additional application rendering options
 * @param options.preview	Configure a preview version of a sound which is not yet saved
 */
declare class MeasuredTemplateConfig extends FormApplication {}

/**
 * The player configuration menu
 * This form is used to allow the client to edit some preferences about their own User entity
 */
declare class PlayerConfig extends FormApplication {}
/**
 * Playlist Configuration Sheet
 *
 * @param object	The Playlist being edited
 * @param options	Additional application rendering options
 */
declare class PlaylistConfig extends FormApplication {}

/**
 * Playlist Sound Configuration Sheet
 *
 * @param sound		The sound object being configured
 * @param options	Additional application rendering options
 */
declare class PlaylistSoundConfig extends FormApplication {}

/**
 * Entity Sheet Configuration Application
 *
 * @param entity	The Entity object for which the sheet is being configured
 * @param options	Additional Application options
 */
declare class EntitySheetConfig extends FormApplication {}
