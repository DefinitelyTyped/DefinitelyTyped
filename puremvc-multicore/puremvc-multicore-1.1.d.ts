declare module puremvc
{
	export interface ICommand
		extends INotifier
	{
		execute( notification:INotification ):void;
	}

	export interface IController
	{
		executeCommand( notification:INotification ):void;
		registerCommand( notificationName:string, commandClassRef:Function ):void;
		hasCommand( notificationName:string ):boolean;
		removeCommand( notificationName:string ):void;
	}

	export interface IFacade
		extends INotifier
	{
		registerCommand( notificationName:string, commandClassRef:Function ):void;
		removeCommand( notificationName:string ): void;
		hasCommand( notificationName:string ):boolean;
		registerProxy( proxy:IProxy ):void;
		retrieveProxy( proxyName:string ):IProxy;
		removeProxy( proxyName:string ):IProxy;
		hasProxy( proxyName:string ):boolean;
		registerMediator( mediator:IMediator ):void;
		retrieveMediator( mediatorName:string ):IMediator;
		removeMediator( mediatorName:string ):IMediator;
		hasMediator( mediatorName:string ):boolean;
		notifyObservers( notification:INotification ):void;
	}

	export interface IMediator
		extends INotifier
	{
		getMediatorName():string;
		getViewComponent():any;
		setViewComponent( viewComponent:any ):void;
		listNotificationInterests( ):string[];
		handleNotification( notification:INotification ):void;
		onRegister():void;
		onRemove():void;
	}

	export interface IModel
	{
		registerProxy( proxy:IProxy ):void;
		removeProxy( proxyName:string ):IProxy;
		retrieveProxy( proxyName:string ):IProxy;
		hasProxy( proxyName:string ):boolean;
	}

	export interface INotification
	{
		getName():string;
		setBody( body:any ):void;
		getBody():any;
		setType( type:string ):void;
		getType():string;
		toString():string;
	}

	export interface INotifier
	{
		sendNotification( name:string, body?:any, type?:string ):void;
		initializeNotifier( key:string ):void;
	}

	export interface IObserver
	{
		setNotifyMethod( notifyMethod:Function ):void;
		setNotifyContext( notifyContext:any ):void;
		notifyObserver( notification:INotification ):void;
		compareNotifyContext( object:any ):boolean;
	}

	export interface IProxy
		extends INotifier
	{
		getProxyName():string;
		setData( data:any ):void;
		getData():any;
		onRegister( ):void;
		onRemove( ):void;
	}

	export interface IView
	{
		registerObserver( notificationName:string, observer:IObserver ):void;
		removeObserver( notificationName:string, notifyContext:any ):void;
		notifyObservers( notification:INotification ):void;
		registerMediator( mediator:IMediator ):void;
		retrieveMediator( mediatorName:string ):IMediator;
		removeMediator( mediatorName:string ):IMediator;
		hasMediator( mediatorName:string ):boolean;
	}

    export class Observer
		implements IObserver
	{
        public notify: Function;
        public context: any;
        constructor (notifyMethod: Function, notifyContext: any);
        private getNotifyMethod(): Function;
        public setNotifyMethod(notifyMethod: Function): void;
        private getNotifyContext(): any;
        public setNotifyContext(notifyContext: any): void;
        public notifyObserver(notification: INotification): void;
        public compareNotifyContext(object: any):boolean;
    }

    export class View
		implements IView
	{
        public mediatorMap: Object;
        public observerMap: Object;
        public multitonKey: string;
        constructor (key: string);
        public initializeView(): void;
        public registerObserver(notificationName: string, observer: IObserver): void;
        public removeObserver(notificationName: string, notifyContext: any): void;
        public notifyObservers(notification: INotification): void;
        public registerMediator(mediator: IMediator): void;
        public retrieveMediator(mediatorName: string): IMediator;
        public removeMediator(mediatorName: string): IMediator;
        public hasMediator(mediatorName: string): boolean;
        static instanceMap: Object;
        static MULTITON_MSG: string;
        static getInstance(key: string): IView;
        static removeView(key: string): void;
    }

    export class Controller
		implements IController
	{
        public view: IView;
        public commandMap: Object;
        public multitonKey: string;
        constructor (key: string);
        public initializeController(): void;
        public executeCommand(notification: INotification): void;
        public registerCommand(notificationName: string, commandClassRef: Function): void;
        public hasCommand(notificationName: string): boolean;
        public removeCommand(notificationName: string): void;
        static instanceMap: Object;
        static MULTITON_MSG: string;
        static getInstance(key: string): IController;
        static removeController(key: string): void;
    }

    export class Model
		implements IModel
	{
        public proxyMap: Object;
        public multitonKey: string;
        constructor (key: string);
        public initializeModel(): void;
        public registerProxy(proxy: IProxy): void;
        public removeProxy(proxyName: string): IProxy;
        public retrieveProxy(proxyName: string): IProxy;
        public hasProxy(proxyName: string): boolean;
        static MULTITON_MSG: string;
        static instanceMap: Object;
        static getInstance(key): IModel;
        static removeModel(key): void;
    }

    export class Notification
		implements INotification
	{
        public name: string;
        public body: any;
        public type: string;
        constructor (name: string, body?: any, type?: string);
        public getName(): string;
        public setBody(body: any): void;
        public getBody(): any;
        public setType(type: string): void;
        public getType(): string;
        public toString(): string;
    }

    export class Facade
		implements IFacade
	{
        public model: IModel;
        public view: IView;
        public controller: IController;
        public multitonKey: string;
        constructor (key);
        public initializeFacade(): void;
        public initializeModel(): void;
        public initializeController(): void;
        public initializeView(): void;
        public registerCommand(notificationName: string, commandClassRef: Function): void;
        public removeCommand(notificationName: string): void;
        public hasCommand(notificationName: string): boolean;
        public registerProxy(proxy: IProxy): void;
        public retrieveProxy(proxyName: string): IProxy;
        public removeProxy(proxyName: string): IProxy;
        public hasProxy(proxyName: string): boolean;
        public registerMediator(mediator: IMediator): void;
        public retrieveMediator(mediatorName: string): IMediator;
        public removeMediator(mediatorName: string): IMediator;
        public hasMediator(mediatorName: string): boolean;
        public notifyObservers(notification: INotification): void;
        public sendNotification(name: string, body?: any, type?: string): void;
        public initializeNotifier(key: string): void;
        static MULTITON_MSG: string;
        static instanceMap: Object;
        static getInstance(key: string): IFacade;
        static hasCore(key: string): boolean;
        static removeCore(key: string): void;
    }

    export class Notifier
		implements INotifier
	{
        public multitonKey: string;
        public initializeNotifier(key): void;
        public sendNotification(name: string, body?: any, type?: string): void;
        public facade(): IFacade;
        static MULTITON_MSG: string;
    }

    export class MacroCommand
		extends Notifier
		implements ICommand, INotifier
	{
        public subCommands: Function[];
        constructor ();
        public initializeMacroCommand(): void;
        public addSubCommand(commandClassRef: Function): void;
        public execute(notification: INotification): void;
    }

    export class SimpleCommand
		extends Notifier
		implements ICommand, INotifier
	{
        public execute(notification: INotification): void;
    }

    export class Mediator
		extends Notifier
		implements IMediator, INotifier
	{
        public mediatorName: string;
        public viewComponent: any;
        constructor (mediatorName?: string, viewComponent?: any);
        public getMediatorName(): string;
        public getViewComponent(): any;
        public setViewComponent(viewComponent: any): void;
        public listNotificationInterests(): string[];
        public handleNotification(notification: INotification): void;
        public onRegister(): void;
        public onRemove(): void;
        static NAME: string;
    }

    export class Proxy
		extends Notifier
		implements IProxy, INotifier
	{
        public proxyName: string;
        public data: any;
        constructor (proxyName?: string, data?: any);
        public getProxyName(): string;
        public setData(data: any): void;
        public getData(): any;
        public onRegister(): void;
        public onRemove(): void;
        static NAME: string;
    }
}
