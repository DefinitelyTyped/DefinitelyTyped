declare module 'aurelia-skeleton-navigation/animation-main' {
	export function configure(aurelia: any): void;

}
declare module 'aurelia-skeleton-navigation/app' {
	import { Router } from 'aurelia-router';
	export class App {
	    router: Router;
	    configureRouter(config: any, router: any): void;
	}

}
declare module 'aurelia-skeleton-navigation/child-router' {
	import { Router } from 'aurelia-router';
	export class ChildRouter {
	    router: Router;
	    configureRouter(config: any, router: any): void;
	}

}
declare module 'aurelia-skeleton-navigation/flickr' {
	export class Flickr {
	    heading: string;
	    images: any[];
	    http: any;
	    url: string;
	    constructor(http: any);
	    activate(): any;
	    canDeactivate(): boolean;
	}

}
declare module 'aurelia-skeleton-navigation/nav-bar' {
	export class NavBar {
	    router: any;
	}

}
declare module 'aurelia-skeleton-navigation/welcome' {
	export class Welcome {
	    heading: string;
	    firstName: string;
	    lastName: string;
	    fullName: string;
	    welcome(): void;
	}
	export class UpperValueConverter {
	    toView(value: any): any;
	}

}
