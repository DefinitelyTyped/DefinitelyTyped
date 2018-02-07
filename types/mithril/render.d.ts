import { render } from ".";

declare namespace RenderService {
	interface Static {
		render: typeof render;
	}
}

declare const RenderService: RenderService.Static;
export = RenderService;
