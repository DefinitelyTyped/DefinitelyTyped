declare module 'aurelia-bootstrapper/index' {
	export function bootstrap(configure: any): Promise<{}>;

}
declare module 'aurelia-bootstrapper' {
	export * from 'aurelia-bootstrapper/index';
}
