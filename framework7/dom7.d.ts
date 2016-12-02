// Type definitions for Dom7
// Project: https://github.com/nolimits4web/Framework7
// Definitions by: JasonKleban <https://github.com/JasonKleban/Framework7.d.ts>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Dom7 {
	interface Dom7AjaxSettings {
		url?: string;
		method?: string;
		success?: Function;
		beforeSend?: Function;
		error?: Function;
		complete?: Function;
		async?: boolean;
		cache?: boolean;
		contentType?: any;
		crossDomain?: boolean;
		data?: any;
		processData?: boolean;
		dataType?: string;
		headers?: { [key: string]: any; };
		xhrFields?: { [key: string]: any; };
		username?: string;
		password?: string;
		timeout?: number;
	}
	
	interface Dom7XHR extends XMLHttpRequest {
		requestParameters?: any;
		requestUrl?: string;
	}
	
	interface DomAjaxSettings {
		beforeSend? (jqXHR: Dom7XHR, settings: DomAjaxSettings): any;
		error? (jqXHR: Dom7XHR, textStatus: string, errorThrown: string): any;
		success? (data: any, textStatus: string, jqXHR: Dom7XHR): any;
		complete? (jqXHR: Dom7XHR, textStatus: string): any;
		statusCode?: { [key: string]: any; };
	}
	
	interface Dom7 {
		length: number;
		
		// Classes
		addClass(className : string) : Dom7;
		removeClass(className : string) : Dom7;
		hasClass(className : string) : Dom7;
		toggleClass(className : string) : Dom7;
		
		// Attributes and properties
		prop(propName : string) : any;
		prop(propName : string, propValue: any) : Dom7;
		prop(propertiesObject : any) : Dom7;
		attr(attrName : string) : string;
		attr(attrName : string, attrValue : string) : Dom7;
		attr(attributesObject : any) : Dom7;
		removeAttr(attrName : string) : Dom7;
		val() : any;
		val(newValue : any) : Dom7;
		
		// Data
		data(key : string, value : any) : Dom7;
		data(key : string) : any;
		removeData(key : string);
		dataset() : any;
		
		// CSS trasforms, transitions
		transform(CSSTransformString : string) : Dom7;
		transition(transitionDuration : number) : Dom7;
		
		// Events
		on(eventName : string, handler : (event : Event) => void, useCapture? : boolean) : Dom7;
		on(eventName : string, delegatedTarget : string, handler : (event : Event) => void, useCapture? : boolean) : Dom7;
		once(eventName : string, handler : (event : Event) => void, useCapture? : boolean) : Dom7;
		once(eventName : string, delegatedTarget : string, handler : (event : Event) => void, useCapture? : boolean) : Dom7;
		off(eventName : string, handler : (event : Event) => void, useCapture? : boolean) : Dom7;
		off(eventName : string, delegatedTarget : string, handler : (event : Event) => void, useCapture? : boolean) : Dom7;
		trigger(eventName : string, eventData : any) : Dom7;
		transitionEnd(callback : () => void, permanent : boolean) : Dom7;
		animationEnd(callback : () => void) : Dom7;
		
		// Styles
		width() : number;
		width(value: string | number) : Dom7;
		outerWidth(includeMargin? : boolean) : number;
		outerWidth(value: string | number) : Dom7;
		height() : number;
		height(value: string | number) : Dom7;
		outerHeight(includeMargin? : boolean) : number;
		outerHeight(value: string | number) : Dom7;
		offset() : number;
		offset(value: string | number) : Dom7;
		hide() : void;
		show() : void;
		css(property : string) : string | number;
		css(property : string, value: string | number) : Dom7;
		css(propertiesObject : any) : Dom7;
		
		// Scroll
		scrollTop() : number;
		scrollTop(position : number, duration? : number, callback? : () => void) : Dom7;
		scrollLeft() : number;
		scrollLeft(position : number, duration? : number, callback? : () => void) : Dom7;
		scrollTo(left : number, top : number, duration? : number, callback? : () => void) : Dom7;
		
		// Dom manipulation
		add(html: string) : Dom7;
		add(... elements : Array<Element | Dom7>) : Dom7;
		each(callback : (index : number, element : any) => void) : Dom7;
		html() : string;
		html(newInnerHTML : string) : Dom7;
		text() : string;
		text(newTextContent : string) : Dom7;
		is(CSSSelector : string | Element | Dom7) : boolean;
		index() : boolean;
		eq(index : number) : boolean;
		append(element : string | Element | Dom7) : Dom7;
		append(element : string | Element | Dom7) : Dom7;
		appendTo(element : string | Element | Dom7) : Dom7;
		prepend(element : string | Element | Dom7) : Dom7;
		prependTo(element : string | Element | Dom7) : Dom7;
		insertBefore(element : string | Element | Dom7) : Dom7;
		insertAfter(element : string | Element | Dom7) : Dom7;
		next(selector? : string) : Dom7;
		nextAll(selector? : string) : Dom7;
		prev(selector? : string) : Dom7;
		prevAll(selector? : string) : Dom7;
		parent(selector? : string) : Dom7;
		parents(selector? : string) : Dom7;
		find(selector? : string) : Dom7;
		children(selector? : string) : Dom7;
		filter(callback : (index : number, element : any) => boolean) : Dom7;
		remove() : Dom7;
		
		// Shortcuts
		click() : Dom7;
		click(handler : (event : Event) => void) : Dom7;
		blur() : Dom7;
		blur(handler : (event : Event) => void) : Dom7;
		focus() : Dom7;
		focus(handler : (event : Event) => void) : Dom7;
		focusin() : Dom7;
		focusin(handler : (event : Event) => void) : Dom7;
		focusout() : Dom7;
		focusout(handler : (event : Event) => void) : Dom7;
		keyup() : Dom7;
		keyup(handler : (event : Event) => void) : Dom7;
		keydown() : Dom7;
		keydown(handler : (event : Event) => void) : Dom7;
		keypress() : Dom7;
		keypress(handler : (event : Event) => void) : Dom7;
		submit() : Dom7;
		submit(handler : (event : Event) => void) : Dom7;
		change() : Dom7;
		change(handler : (event : Event) => void) : Dom7;
		mousedown() : Dom7;
		mousedown(handler : (event : Event) => void) : Dom7;
		mousemove() : Dom7;
		mousemove(handler : (event : Event) => void) : Dom7;
		mouseup() : Dom7;
		mouseup(handler : (event : Event) => void) : Dom7;
		mouseenter() : Dom7;
		mouseenter(handler : (event : Event) => void) : Dom7;
		mouseleave() : Dom7;
		mouseleave(handler : (event : Event) => void) : Dom7;
		mouseout() : Dom7;
		mouseout(handler : (event : Event) => void) : Dom7;
		mouseover() : Dom7;
		mouseover(handler : (event : Event) => void) : Dom7;
		touchstart() : Dom7;
		touchstart(handler : (event : Event) => void) : Dom7;
		touchend() : Dom7;
		touchend(handler : (event : Event) => void) : Dom7;
		touchmove() : Dom7;
		touchmove(handler : (event : Event) => void) : Dom7;
		resize(handler : (event : Event) => void) : Dom7;
		scroll(handler : (event : Event) => void) : Dom7;
	}
	
	interface Dom7Static
	{
		(): Dom7;
		(selector: string, context?: Element|Dom7): Dom7;
		(element: Element): Dom7;
		(element: Document): Dom7;
		(elementArray: Element[]): Dom7;
		
		// Utility
		each(callback : (index : number, element : any) => void) : void;
		parseUrlQuery(url : string) : any;
		isArray(target: any) : boolean;
		unique<T>(target: T[]) : T[];
		serializeObject(target: any) : string;
		toCamelCase(string: string) : string;
		dataset(target: string | HTMLElement | Dom7) : any;
		requestAnimationFrame(callback: () => void) : number;
		cancelAnimationFrame(requestID: number);
		
		ajax(parameters : Dom7AjaxSettings) : Dom7XHR;
		
		get(url: string, data: any, success : (data : any, status : number, xhr : Dom7XHR) => void) : Dom7XHR;
		post(url: string, data: any, success : (data : any, status : number, xhr : Dom7XHR) => void) : Dom7XHR;
		getJSON(url: string, data: any, success : (data : any, status : number, xhr : Dom7XHR) => void) : Dom7XHR;
	}
}

declare let Dom7 : Dom7.Dom7Static;

declare module "Dom7" {
	export = Dom7;
}

