// Type definitions for Backbone.LayoutManager 0.9.5
// Project: http://layoutmanager.org/
// Definitions by: He Jiang <https://github.com/hejiang2000>
// Definitions: https://github.com/hejiang2000/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

import * as Backbone from 'backbone';

declare module 'backbone' {
	interface LayoutOptions<TModel extends Model> extends ViewOptions<TModel> {
		template?: string;
        views?: { [viewName: string]: View<TModel> };
	}

	interface LayoutManagerOptions {
		manage?: boolean;
		el?: boolean;
	}

	class Layout<TModel extends Model> extends View<TModel> {
		template: string;
		constructor(options?: LayoutOptions<TModel>);

		beforeRender(): void;
		afterRender(): void;
		cleanup(): void;

		fetchTemplate(path: string): (context:any)=>string;
		async():(compiled:(context:any)=>void)=>void;
		promise(): JQueryPromise<any>;

		getAllOptions(): LayoutOptions<TModel>;

		getView(fn?:any): any;
		getViews(fn?:any): any[];

		insertView(selector:any, view?:any): any; // return view;
		insertViews(views:any): Layout<TModel>; // return this;

		remove(): Layout<TModel>;
		removeView(fn:any): Layout<TModel>;

		render(): Layout<TModel>; // return this
		renderViews(): Layout<TModel>; // return this
		setView<U>(name: any, view: U, insert?:boolean): U; // return view
		setViews(views:any): Layout<TModel>; // return this
		then(fn:()=>void):void;

		static cache(path: string, contents?: any): any;
		static cleanViews(views: any): void;
		static configure(options: LayoutManagerOptions): void;
		static setupView(views: any, options?: LayoutOptions<Model>): void;
	}
}

