import { render } from "mithril";

declare namespace RenderService {
	export interface Static {
		render: typeof render;
	}
}

declare const RenderService: RenderService.Static;
export = RenderService;
