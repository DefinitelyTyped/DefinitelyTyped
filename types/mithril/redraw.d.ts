import { redraw, render } from ".";

declare namespace RedrawService {
	interface Static {
		render: typeof render;
		redraw: typeof redraw;
	}
}

declare const RedrawService: RedrawService.Static;
export = RedrawService;
