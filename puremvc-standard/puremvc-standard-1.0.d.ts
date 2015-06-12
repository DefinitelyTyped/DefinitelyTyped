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
		hasCommand( notificationName:string ):bool;
		removeCommand( notificationName:string ):void;
	}

	export interface IFacade
		extends INotifier
	{
		registerCommand( notificationName:string, commandClassRef:Function ):void;
		removeCommand( notificationName:string ): void;
		hasCommand( notificationName:string ):bool;
		registerProxy( proxy:IProxy ):void;
		retrieveProxy( proxyName:string ):IProxy;
		removeProxy( proxyName:string ):IProxy;
		hasProxy( proxyName:string ):bool;
		registerMediator( mediator:IMediator ):void;
		retrieveMediator( mediatorName:string ):IMediator;
		removeMediator( mediatorName:string ):IMediator;
		hasMediator( mediatorName:string ):bool;
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
		hasProxy( proxyName:string ):bool;
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
	}

	export interface IObserver
	{
		setNotifyMethod( notifyMethod:Function ):void;
		setNotifyContext( notifyContext:any ):void;
		notifyObserver( notification:INotification ):void;
		compareNotifyContext( object:any ):bool;
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
		hasMediator( mediatorName:string ):bool;
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
        public compareNotifyContext(object: any): bool;
    }
	
	export class View
		implements IView
	{
        public mediatorMap: Object;
        public observerMap: Object;
        constructor ();
        public initializeView(): void;
        public registerObserver(notificationName: string, observer: IObserver): void;
        public removeObserver(notificationName: string, notifyContext: any): void;
        public notifyObservers(notification: INotification): void;
        public registerMediator(mediator: IMediator): void;
        public retrieveMediator(mediatorName: string): IMediator;
        public removeMediator(mediatorName: string): IMediator;
        public hasMediator(mediatorName: string): bool;
        static SINGLETON_MSG: string;
        static instance: IView;
        static getInstance(): IView;
    }


    export class Controller
		implements IController
	{
        public view: IView;
        public commandMap: Object;
        constructor ();
        public initializeController(): void;
        public executeCommand(notification: INotification): void;
        public registerCommand(notificationName: string, commandClassRef: Function): void;
        public hasCommand(notificationName: string): bool;
        public removeCommand(notificationName: string): void;
        static instance: IController;
        static SINGLETON_MSG: string;
        static getInstance(): IController;
    }

    export class Model
		implements IModel
	{
        public proxyMap: Object;
        constructor ();
        public initializeModel(): void;
        public registerProxy(proxy: IProxy): void;
        public removeProxy(proxyName: string): IProxy;
        public retrieveProxy(proxyName: string): IProxy;
        public hasProxy(proxyName: string): bool;
        static SINGLETON_MSG: string;
        static instance: IModel;
        static getInstance(): IModel;
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
        constructor ();
        public initializeFacade(): void;
        public initializeModel(): void;
        public initializeController(): void;
        public initializeView(): void;
        public registerCommand(notificationName: string, commandClassRef: Function): void;
        public removeCommand(notificationName: string): void;
        public hasCommand(notificationName: string): bool;
        public registerProxy(proxy: IProxy): void;
        public retrieveProxy(proxyName: string): IProxy;
        public removeProxy(proxyName: string): IProxy;
        public hasProxy(proxyName: string): bool;
        public registerMediator(mediator: IMediator): void;
        public retrieveMediator(mediatorName: string): IMediator;
        public removeMediator(mediatorName: string): IMediator;
        public hasMediator(mediatorName: string): bool;
        public notifyObservers(notification: INotification): void;
        public sendNotification(name: string, body?: any, type?: string): void;
        static SINGLETON_MSG: string;
        static instance: IFacade;
        static getInstance(): IFacade;
    }

    export class Notifier
		implements INotifier
	{
        public facade: IFacade;
        constructor ();
        public sendNotification(name: string, body?: any, type?: string): void;
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
