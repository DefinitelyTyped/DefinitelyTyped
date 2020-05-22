/**
 * An abstract pattern for primary layers of the game canvas to implement
 */
declare class CanvasLayer extends PIXI.Container {
	constructor();

	/* -------------------------------------------- */
	/*  Properties and Attributes
	/* -------------------------------------------- */

	get name(): string;

	/* -------------------------------------------- */
	/*  Rendering
	/* -------------------------------------------- */

	/**
	 * Draw the canvas layer, rendering its internal components and returning a Promise
	 * The Promise resolves to the drawn layer once its contents are successfully rendered.
	 * @return {Promise.<CanvasLayer>}
	 */
	draw(): Promise<CanvasLayer>;

	/* -------------------------------------------- */
	/*  Methods
	/* -------------------------------------------- */

	activate(): void;

	deactivate(): void;
}