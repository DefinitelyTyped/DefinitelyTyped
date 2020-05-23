// @TODO:

/**
 * Configuration sheet for the Drawing object
 *
 * @param drawing			The Drawing object being configured
 * @param options			Additional application rendering options
 * @param options.preview 	Configure a preview version of the Drawing which is not yet saved
 */
declare class DrawingConfig extends FormApplication {
    /**
     * Extend the application close method to clear any preview sound aura if one exists
     */
    close(): Promise<void>;
}

/**
 * Light Source Configuration Sheet
 *
 * @param light		The AmbientLight object for which settings are being configured
 * @param options	LightConfig ui options (see Application)
 */
declare class LightConfig extends FormApplication {}

/**
 * Ambient Sound Config Sheet
 *
 * @param sound 			The sound object being configured
 * @param options			Additional application rendering options
 * @param options.preview	Configure a preview version of a sound which is not yet saved
 */
declare class AmbientSoundConfig extends FormApplication {}
/**
 * Tile Config Sheet
 *
 * @param tile				The Tile object being configured
 * @param options			Additional application rendering options
 * @param options.preview	Configure a preview version of a tile which is not yet saved
 */
declare class TileConfig extends FormApplication {}

/**
 * A Token Configuration Application
 *
 * @param token		The Token object for which settings are being configured
 * @param options	TokenConfig ui options (see Application)
 *
 * @param options.configureDefault	Configure the default actor token on submit
 */
declare class TokenConfig extends FormApplication {}

/**
 * Wall Configuration Sheet
 *
 * @param object	The Wall object for which settings are being configured
 * @param options	Additional options which configure the rendering of the configuration sheet.
 */
declare class WallConfig extends FormApplication {}
