declare module 'aurelia-app-contacts/web-api' {
	export class WebAPI {
	    isRequesting: any;
	    getContactList(): Promise<{}>;
	    getContactDetails(id: any): Promise<{}>;
	    saveContact(contact: any): Promise<{}>;
	}

}
declare module 'aurelia-app-contacts/app' {
	import { Router } from 'aurelia-router';
	import { WebAPI } from 'aurelia-app-contacts/web-api';
	export class App {
	    static inject: typeof WebAPI[];
	    router: Router;
	    api: any;
	    constructor(api: any);
	    configureRouter(config: any, router: any): void;
	}

}
declare module 'aurelia-app-contacts/messages' {
	export class ContactUpdated {
	    contact: any;
	    constructor(contact: any);
	}
	export class ContactViewed {
	    contact: any;
	    constructor(contact: any);
	}

}
declare module 'aurelia-app-contacts/utility' {
	export function areEqual(obj1: any, obj2: any): boolean;

}
declare module 'aurelia-app-contacts/contact-detail' {
	export class ContactDetail {
	    static inject: any[];
	    api: any;
	    ea: any;
	    contact: any;
	    originalContact: any;
	    constructor(api: any, ea: any);
	    activate(params: any, config: any): any;
	    canSave: boolean;
	    save(): void;
	    canDeactivate(): boolean;
	}

}
declare module 'aurelia-app-contacts/contact-list' {
	export class ContactList {
	    static inject: any[];
	    api: any;
	    contacts: any;
	    selectedId: any;
	    constructor(api: any, ea: any);
	    created(): void;
	    select(contact: any): boolean;
	}

}
declare module 'aurelia-app-contacts/loading-indicator' {
	export class LoadingIndicator {
	    loading: boolean;
	    loadingChanged(newValue: any): void;
	}

}
declare module 'aurelia-app-contacts/no-selection' {
	export class NoSelection {
	    message: any;
	    constructor();
	}

}
