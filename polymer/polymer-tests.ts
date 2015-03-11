/// <reference path="polymer.d.ts"/>

class AbstractPolymerElement implements PolymerElement {
	$: { [id: string]: HTMLElement }; //polymer object for elements that have an ID

	// inargs is the [args] for the callback.. need to update function def
	async(inMethod: () => void, inArgs?: Array<any>, inTimeout?: number): void { }
	job(jobName: string, inMethod: () => void, inTimeout?: number): void { }
	fire(eventName: string, details?: any, targetNode?: any, bubbles?: boolean, cancelable?: boolean): void { }
	asyncFire(eventName: string, details?: any, targetNode?: any, bubbles?: boolean, cancelable?: boolean): void { }

	cancelUnbindAll(): void { }

	// these are mix in API's.. hacky way to deal with them at the moment.
	resizableAttachedHandler;
	resizableDetachedHandler;
}

class AbstractWebComponent extends AbstractPolymerElement {

	public name: string;

	constructor(name: string) {
		super();
		this.name = name;
	}

	protected get(): HTMLElement {
		return <any>this;
	}
}

function registerWebComponent(webComponentClass: Function, ...mixins): void {
		
	// we need a flat object, without prototype in order to polymer to work on our components
	var flattenedComponent = {};
	var poly_func = ["async", "job", "fire", "asyncFire", "cancelUnbindAll"];
	if (mixins) {
		// apply mixins
		mixins.forEach(mixin => {
			for (var i in mixin) {
				if (mixin.hasOwnProperty(i)) {
					webComponentClass.prototype[i] = mixin[i];
				}
			}
		});
	}
	var webComponent: AbstractWebComponent = new (<any>webComponentClass)();
	for (var i in webComponent) {
		if (!_.contains(poly_func, i)) {
			flattenedComponent[i] = webComponent[i];
		}
	}

	console.debug('registering web component', webComponent, flattenedComponent);
	Polymer(webComponent.name, flattenedComponent);
}

class Spinner extends AbstractWebComponent {
	private pendingRequestsCount: number;

	constructor() {
		super('test-spinner');
	}

	public ready(): void {
		this.pendingRequestsCount = 0;
		this.updateUI();
	}

	private updateUI(): void {
		var spinnerHidden: boolean = this.pendingRequestsCount == 0;
		if (spinnerHidden) {
			this.get().setAttribute('hidden', 'true');
		} else {
			this.get().removeAttribute('hidden');
		}
	}
}