// Type definitions for route-recognizer
// Project: https://github.com/tildeio/route-recognizer
// Definitions by: Dave Keen <http://www.keendevelopment.ch>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "route-recognizer" {
	
	class RouteRecognizer<H> {
		constructor()
		add: (routes: Route<H>[]) => void
		recognize: (path: string) => MatchedRoute<H>[]
	}
	
	interface Route<H> {
		path: string
		handler: H
	}
	
	export = RouteRecognizer
}

interface MatchedRoute<H> {
	handler: H
	params: { [key: string]: string }
}