/// <reference path="polymer.d.ts"/>

class AbstractPolymerElement implements PolymerElement {
	$: { [id: string]: HTMLElement }; //polymer object for elements that have an ID

	// inargs is the [args] for the callback.. need to update function def
	async(inMethod: () => void, inArgs?: Array<any>, inTimeout?: number): void { }
	job(jobName: string, inMethod: () => void, inTimeout?: number): void { }
	fire(eventName: string, details?: any, targetNode?: any, bubbles?: boolean, cancelable?: boolean): void { }
	asyncFire(eventName: string, details?: any, targetNode?: any, bubbles?: boolean, cancelable?: boolean): void { }

	cancelUnbindAll(): void { }
		
	/**
	 * User must call from attached callback
	 */
	resizableAttachedHandler(): void {}

	/**
	 * User must call from detached callback
	 */
	resizableDetachedHandler(): void {}

	/**
	 * User must call from attached callback
	 */
	resizerAttachedHandler(): void {}

	/**
	 * User must call from detached callback
	 */
	resizerDetachedHandler(): void {}

	/**
	 * User should call when resizing or un-hiding children
	 */
	notifyResize(): void {}
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

function registerWebComponent(webComponentClass: Function, ...mixins: any[]): void {
		
	// we need a flat object, without prototype in order to polymer to work on our components
	var flattenedComponent: any = {};
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
		// do not include polymer functions
		if (i != "async" && i != "job" && i != "fire" && i != "asyncFire" && i != "cancelUnbindAll") {
			var attribute: any = (<any>webComponent)[i];
			flattenedComponent[i] = attribute;
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