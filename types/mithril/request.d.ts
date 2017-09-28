import { request, jsonp } from "mithril";

declare namespace RequestService {
	interface Static {
		request: typeof request;
		jsonp: typeof jsonp;
	}
}

declare const RequestService: RequestService.Static;
export = RequestService;
