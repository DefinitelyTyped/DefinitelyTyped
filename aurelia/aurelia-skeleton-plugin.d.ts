declare module 'aurelia-skeleton-plugin/hello-world' {
	export class HelloWorld {
	}

}
declare module 'aurelia-skeleton-plugin/index' {
	export function configure(aurelia: any): void;

}
declare module 'aurelia-skeleton-plugin' {
	export * from 'aurelia-skeleton-plugin/index';
}
