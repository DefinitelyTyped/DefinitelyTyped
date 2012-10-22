declare module Ember {
	export class CoreObject {
		isDestroyed:Boolean;
		isDestroying:Boolean;
		
		bind(to, from);
		destroy():Ember.Object;
		reopen();
		toString():String;
	}
	
	export class Mixin {
		create(obj:Object):Object;
		extend(first:Object, second:Object):Object;
	}
	
	export class Enumerable extends Ember.Mixin {
		// Fields
		firstObject:Object;
		hasEnumerableObservers:Boolean;
		lastObject:Object;
		nextObject:Object;
		
		// Methods
		addEnumerableObserver(target, opts);
		compact():any[];
		contains(obj:Object):Boolean;
		enumerableContentDidChange(removing:number, adding:number):Object;
		enumerableContentDidChange(removing:Ember.Enumerable, adding:Ember.Enumerable):Object;
		enumerableContentDidChange(start:Number, removing:number, adding:number):Object;
		enumerableContentDidChange(start:Number, removing:Ember.Enumerable, adding:Ember.Enumerable):Object;
		
		enumerableContentWillChange(removing:number, adding:number):Ember.Enumerable;
		enumerableContentWillChange(removing:Ember.Enumerable, adding:Ember.Enumerable):Ember.Enumerable;
		enumerableContentWillChange(start:Number, removing:number, adding:number):Ember.Enumerable;
		enumerableContentWillChange(start:Number, removing:Ember.Enumerable, adding:Ember.Enumerable):Ember.Enumerable;
		
		every(callback:Function, target?:Object):Boolean;
		everyProperty(key:String, value?:String):any[];
		filter(callback:Function, target?:Object):any[];
		filterProperty(key:String, value?:String):any[];
		find(callback:Function, target?:Object):Object;
		findProperty(key:String, value?:String):Object;
		/*forEach
		getEach
		invoke
		map
		mapProperty
		reduce
		removeEnumerableObserver
		setEach
		some
		someProperty
		toArray
		uniq
		without*/
	}
	
	export interface NativeArray extends Array {
		activate();
	}
	export class Object extends Ember.CoreObject {
		
	}
	
	export class Application extends Ember.Object {
		customEvents;
		eventDispatcher;
		ready;
		rootElement;
		
		initialize(router);
		registerInjection(options);
	}
	
	export class Binding {
		static from();
		static oneWay(path:String, flag?:Boolean);
		static to();
		
		connect(obj:Object):Binding;
		copy():Binding;
		disconnect(obj:Object):Binding;
		from(path:String):Binding;
		oneWay():Binding;
		to(propertyPath:String):Binding;
	}
	
	export class ComputedProperty {
		cacheable(aFlag?:Boolean):ComputedProperty;
		meta(hash:any):ComputedProperty;
		property(path:String):ComputedProperty;
		volatile():ComputedProperty;
	}
	
	export class Map {
		
	}
	
	export class Observable extends Ember.Mixin {
		addBeforeObserver(key, target, method);
		addObject(obj:Object);
		addObserver(key:String, target:Object, method:Function):Ember.Object;
		addObserver(key:String, target:Object, method:String):Ember.Object;
		beginPropertyChanges():Ember.Observable;
		cacheFor(keyName:String):Object;
		contentArrayDidChange(array, idx, removedCount, addedCount);
		contentArrayWillChange(array, idx, removedCount, addedCount);
		contentItemSortPropertyDidChange(item);
		decrementProperty(keyName:String, increment:Object):Object;
		destroy();
		endPropertyChanges():Ember.Observable;
		get(key:String):Object;
		getPath(path:String):Object;
		getProperties(...list:String[]):any;
		getProperties(list:any[]):any;
		getWithDefault(keyName:String, defaultValue:Object):Object;
		hasObserverFor(key:String):Boolean;
		incrementProperty(keyName:String, increment:Object):Object;
		insertItemSorted(item);
		notifyPropertyChange(keyName:String):Ember.Observable;
		orderBy(item1, item2);
		propertyDidChange(keyName:String):Ember.Observable;
		propertyWillChange(key:String):Ember.Observable;
		removeObject(obj:Object);
		removeObserver(key:String, target:Object, method:String):Ember.Observable;
		removeObserver(key:String, target:Object, method:Function):Ember.Observable;
		set(key:String, value:Object):Ember.Observable;
		setPath(path:String, value:Object):Ember.Observable;
		setProperties(hash):Ember.Observable;
		setUnknownProperty(key:String, value:Object);
		toggleProperty(keyName:String):Object;
		unknownProperty(key:String):Object;
	}
}


interface EmberStatic {
	// Statics
	CP_DEFAULT_CACHEABLE:Boolean;
	ENV:Object;
	EXTEND_PROTOTYPES:Boolean;
	LOG_BINDINGS:Boolean;
	LOG_STACKTRACE_ON_DEPRECATION:Boolean;
	META_KEY:String;
	SHIM_ES5:Boolean;
	STRINGS:Object;
	VERSION:String;
	VIEW_PRESERVES_CONTEXT:Boolean;
	
	// API Doc Members
	A(arr:any[]):Ember.NativeArray;
	addBeforeObserver(obj:Object, path:String, target:Object, method:Function);
	addListener(obj:Object, eventName:String, target:Object, method:Function);
	addObserver(obj:Object, path:String, target:Object, method:Function);
	alias(methodName:String);
	assert(desc:String, test:Boolean);
	beforeObserver(func:Function);
	beginPropertyChanges();
	bind(obj:Object, to:String, from:String):Ember.Binding;
	cacheFor(obj:Object, key:String);
	canInvoke(obj:Object, methodName:String);
	changeProperties(cb:Function, binding?:Ember.Binding);
	compare(first:Object, second:Object):number;
	computed(func:Function):Ember.ComputedProperty;
	copy(obj:Object, deep:Boolean):Object;
	create(obj:Object, props:any);
	deferEvent(obj:Object, eventName:String, param:any);
	deprecate(message:String, test?:Boolean);
	deprecateFunc(message:String, func:Function);
	destroy(obj:Object):void;
	empty(obj:Object):Boolean;
	endPropertyChanges();
	finishChains(obj:Object);	
	get(obj:Object, keyName:String):Object;
	getMeta(obj:Object, property:any);
	getWithDefault(root, key, defaultValue);
	hasListeners(obj:Object, eventName:String):Boolean;
	immediateObserver();
	inspect(obj:Object):String;
	isArray(obj?:any):Boolean;
	isEqual(a:Object, b:Object):Boolean;
	isGlobalPath(path:String):Boolean;
	isWatching(obj:Object, key):Boolean;
	keys(obj:Object):any[];
	listenersFor(obj:Object, eventName:String):any[];
	makeArray(obj:Object):any[];
	
	Map();
	MapWithDefault(options);
	mixin(obj:Object);
	none(obj:Object):Boolean;
	observer(func:Function);
	oneWay(obj:Object, to, from);
	onLoad(name:String, callback:Function);
	
	OrderedSet();
	overrideChains(obj:Object, keyName:String, m:any);
	propertyDidChange(obj:Object, keyName:String):void;
	propertyWillChange(obj:Object, keyName:String, value:any):void;
	removeBeforeObserver(obj, path, target, method);
	removeListener(obj, eventName, target, method);
	removeObserver(obj, path, target, method);
	
	required();
	runLoadHooks(name:String, object:Object);
	sendEvent(obj:Object, eventName:String, params);
	set(obj:Object, keyName:String, value, tolerant);
	setMeta(obj:Object, property, value);
	setProperties(self, hash);
	toString():String;
	tryInvoke(obj:Object, methodName:String, args:any[]):Boolean;
	trySet(root, path, value);
	typeOf(item):String;
	warn(message:String, test:Boolean);
	watchedEvents(obj:Object);
	
	// Other members not listed in API Doc
	meta(obj, writable);
	metaPath(obj, path, writable);
	normalizeTuple(target, path);
	notifyBeforeObservers(obj, keyName);
	notifyObservers(obj, keyName);
	observersFor(obj, path);
	rewatch(obj);
	run(target, method);
	defineProperty(obj, keyName, desc, data, meta);
	beforeObserversFor(obj:Object, path:String);
	generateGuid(obj, prefix);
	getPath();
	guidFor(obj);
	identifyNamespaces();	
	setPath();	
	trySetPath();
	unwatch(obj, keyName);	
	watch(obj, keyName);	
	wrap(func, superFunc);
}
declare var Ember:EmberStatic; 
