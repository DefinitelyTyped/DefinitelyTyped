// Type definitions for bearcat-es6 0.6
// Project: https://github.com/ChrisPei/bearcat-es6
// Definitions by: Xin Li <https://github.com/xinxinran0221010>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node" />

import { EventEmitter } from 'events';

declare namespace bearcat {
    type CallbackFunc = () => void;
    type ParamClassFunc = () => void;
    type ConstructorFunction = (...params: any[]) => any;
    interface BeanPostProcessor {
        postProcessBeanFactory: CallbackFunc;
    }

    interface Bearcat {
        opts: object;
        configLocations: string[];
        state: number;
        startTime: number;
        version: string;
        applicationContext: ApplicationContext;

        /**
         * Bearcat createApp constructor function.
         *
         * @param    configLocations context path array
         * @param   opts
         * @param   opts.NODE_ENV                    setup env
         * @param   opts.BEARCAT_ENV                 setup env
         * @param   opts.NODE_CPATH                  setup config path
         * @param   opts.BEARCAT_CPATH               setup config path
         * @param   opts.BEARCAT_HPATH               setup hot reload path(s), usually it is the scan source directory(app by default)
         * @param   opts.BEARCAT_LOGGER              setup 'off' to turn off bearcat logger configuration
         * @param   opts.BEARCAT_HOT                 setup 'on' to turn on bearcat hot code reload
         * @param   opts.BEARCAT_ANNOTATION          setup 'off' to turn off bearcat $ based annotation
         * @param   opts.BEARCAT_GLOBAL             setup bearcat to be global object
         * @param   opts.BEARCAT_FUNCTION_STRING     setup bearcat to use func.toString for $ based annotation
         *
         * @return  bearcat object
         * @api     public
         */
        createApp(configLocations: string[], opts: object): Bearcat;

        createApp(opts: object): Bearcat;

        /**
         * Bearcat start app.
         *
         * @param   cb start callback function
         * @api     public
         */
        start(cb?: CallbackFunc): void;

        /**
         * Bearcat stop app.
         * it will stop internal applicationContext, destroy all singletonBeans
         *
         * @api     public
         */
        stop(): void;

        /**
         * Bearcat get beanFactory instance.
         *
         * @return  beanFactory instance
         * @api     public
         */
        getBeanFactory(): BeanFactory;

        /**
         * Bearcat get applicationContext.
         *
         * @return   applicationContext
         * @api     public
         */
        getApplicationContext(): ApplicationContext;

        /**
         * Bearcat get bean from IoC container through meta argument.
         *
         * @param   meta meta object
         * @api     public
         */
        getBeanByMeta(meta: object): object | null;

        /**
         * Bearcat get bean from IoC container through $ annotation function.
         *
         * @param   func $ annotation function
         * @api     public
         */
        getBeanByFunc(func: ParamClassFunc): object | null;

        /**
         * Bearcat add async loading beans, this just add beans needed to be loaded to bearcat.
         *
         * Examples:
         *
         *      bearcat.use(['car']);
         *      bearcat.use('car');
         *
         * @param   ids async loading beans id
         * @api     public
         */
        use(ids: string | string[]): void;

        /**
         * Bearcat async loading beans.
         *
         * @param   ids async loading beans id
         * @param   cb callback with loaded bean instances
         * @api     public
         */
        async(ids: string | string[], cb?: CallbackFunc): void;

        /**
         * Bearcat add module(bean) to IoC container through $ annotation function.
         *
         * @param   func $ annotation function
         * @param   context context object
         * @api     public
         */
        module(func: ParamClassFunc, context?: object | null): object | void;

        /**
         * Bearcat define module(bean).
         *
         * @param   id
         * @param   factory function
         * @param   context object
         * @api     public
         */
        define(id: string, factory: ParamClassFunc, context: object | null): void;

        /**
         * Bearcat add module(bean) to IoC container through $ annotation function.
         *
         * Examples:
         *
         *      var Car = bearcat.require('car');
         *
         * @param   id
         * @api     public
         */
        require(id: string): any;

        /**
         * Bearcat get bean from IoC container through beanName or meta argument.
         *
         * @param   beanName
         * @return  bean
         * @api     public
         */
        getBean(beanName: string | object | ParamClassFunc): object | null;

        /**
         * Bearcat get bean constructor function from IoC container through beanName.
         *
         * Examples:
         *
         *
         *      // through beanName
         *      var Car = bearcat.getFunction("car");
         *
         *
         * @param   beanName
         * @return  bean constructor function
         * @api     public
         */
        getFunction(beanName: string): ConstructorFunction | null;

        /**
         * Bearcat get bean constructor function from IoC container through beanName, the same as bearcat.getFunction.
         *
         * Examples:
         *
         *
         *      // through beanName
         *      var Car = bearcat.getClass("car");
         *
         *
         * @param   beanName
         * @return  bean constructor function
         * @api     public
         */
        getClass(beanName: string): ConstructorFunction | null;

        /**
         * Bearcat shim to enable function inherits.
         *
         * Examples:
         *
         *
         *      bearcat.extend("bus", "car");
         *
         *
         * @param  beanName
         * @param  superBeanName or superBeanName array
         * @api    public
         */
        extend(beanName: string, superBeanName: string | string[]): void;

        /**
         * Bearcat call function used for inherits to call super constructor function.
         *
         * Examples:
         *
         *
         *      bearcat.call("car", this);
         *
         *
         * @param   beanName
         * @param   context
         * @param   args
         * @api     public
         */
        call(beanName: string, context?: object | null, ...args: any[]): void;

        /**
         * Bearcat get model from bearcat through modelId.
         *
         * Examples:
         *
         *
         *      // through modelId
         *      var carModel = bearcat.getModel("car");
         *
         *
         * @param   modelId
         * @return  model
         * @api     public
         */
        getModel(modelId: string): object;

        /**
         * Bearcat convenient function for using in MVC route mapping.
         *
         * Examples:
         *
         *
         *      // express
         *      var app = express();
         *      app.get('/', bearcat.getRoute('bearController', 'index'));
         *
         *
         * @param   beanName
         * @param   fnName routeName
         * @api     public
         */
        getRoute(beanName: string, fnName: string): ConstructorFunction;
    }

    interface ApplicationContext extends EventEmitter {
        opts: object;
        configLocations: string[];
        loadBeans: string[];
        active: boolean;
        reloadMap: object;
        beanFactory: BeanFactory;
        startUpDate: number;
        extendBeanMap: object;
        extendedBeanMap: object;
        extendBeanCurMap: object;
        moduleFactory: ModuleFactory;
        resourceLoader: ResourceLoader;
        bootStrapLoader: BootStrapLoader;
        asyncScriptLoader: AsyncScriptLoader;
        cpath: string;
        hpath: string;
        env: string;
        base: string;
        beanFactoryPostProcessors: BeanPostProcessor[];

        /**
         * ApplicationContext init.
         *
         * @api     public
         */
        init(): void;

        /**
         * ApplicationContext set container startUpDate.
         *
         * @param   startUpDate
         * @api     public
         */
        setStartupDate(startUpDate: number): void;

        /**
         * ApplicationContext get container startUpDate.
         *
         * @return  startUpDate
         * @api     public
         */
        getStartupDate(): number;

        /**
         * ApplicationContext get resourceLoader.
         *
         * @return  resourceLoader
         * @api     public
         */
        getResourceLoader(): ResourceLoader;

        /**
         * ApplicationContext get asyncScriptLoader.
         *
         * @return  asyncScriptLoader
         * @api     public
         */
        getAsyncScriptLoader(): AsyncScriptLoader;

        /**
         * ApplicationContext get bootStrapLoader.
         *
         * @return  bootStrapLoader
         * @api     public
         */
        getBootStrapLoader(): BootStrapLoader;

        /**
         * ApplicationContext get metaObjects resource from contextPath.
         *
         * @param   cpath contextPath
         * @return  metaObjects
         * @api     public
         */
        getResource(cpath: string): object;

        /**
         * ApplicationContext get contextPath locations.
         *
         * @return  contextPath locations
         * @api     public
         */
        getConfigLocations(): string[];

        /**
         * ApplicationContext add beanFactoryPostProcessor.
         *
         * @param   beanFactoryPostProcessor
         * @api     public
         */
        addBeanFactoryPostProcessor(beanFactoryPostProcessor: BeanPostProcessor): void;

        /**
         * ApplicationContext get beanFactoryPostProcessors.
         *
         * @return  beanFactoryPostProcessors
         * @api     public
         */
        getBeanFactoryProcessors(): BeanPostProcessor[];

        /**
         * ApplicationContext do refresh actions.
         * refresh beanFactory, preIntialize singleton Beans
         *
         * @param   cb callback function
         * @api     public
         */
        refresh(cb?: CallbackFunc): void;

        /**
         * ApplicationContext cancel refresh.
         *
         * @api     publish
         */
        cancelRefresh(): void;

        /**
         * ApplicationContext destroy.
         *
         * @api     public
         */
        destroy(): void;

        /**
         * ApplicationContext check whether applicationContext is active or not.
         *
         * @api     public
         */
        isActive(): boolean;

        /**
         * ApplicationContext getBean through beanName from applicationContext.
         *
         * @param   beanName
         * @return  beanObject
         * @api     public
         */
        getBean(beanName: string): object;

        /**
         * ApplicationContext getBean through metaObject from applicationContext.
         *
         * @param   meta metaObject
         * @return  beanObject
         * @api     public
         */
        getBeanByMeta(meta: object): object;

        /**
         * ApplicationContext getBean through $ annotation function from applicationContext.
         *
         * @param   func $ annotation function
         * @return  beanObject
         * @api     public
         */
        getBeanByFunc(func: ConstructorFunction): object;

        /**
         * ApplicationContext getModel through modelId.
         *
         * @param   modelId
         * @return  model
         * @api     public
         */
        getModel(modelId: string): object;

        /**
         * ApplicationContext getModelDefinition through modelId.
         *
         * @param   modelId
         * @return  modelDefinition
         * @api     public
         */
        getModelDefinition(modelId: string): object;

        /**
         * ApplicationContext get bean contructor function.
         *
         * @param   beanName
         * @return  bean constructor function
         * @api     public
         */
        getBeanFunction(beanName: string): ConstructorFunction;

        /**
         * ApplicationContext extend bean.
         *
         * @param   beanName
         * @param   superBeanName or superBeanName array
         * @api     public
         */
        extendBean(beanName: string, superBeanName: string | string[]): void;

        /**
         * ApplicationContext do extend bean.
         *
         * @param   beanName
         * @param   superBeanName
         * @api     public
         */
        doExtendBean(beanName: string, superBeanName: string): void;

        /**
         * ApplicationContext add module(bean) to IoC container through $ annotation function from applicationContext.
         *
         * @param   func $ annotation function
         * @param   context
         * @api     public
         */
        module(func: ConstructorFunction, context?: object | null): void;

        /**
         * ApplicationContext service locator pattern define module.
         *
         * @param   id
         * @param   factory factory function
         * @param   context context object
         * @api     public
         */
        define(id: string, factory: ConstructorFunction, context?: object | null): void;

        /**
         * ApplicationContext service locator pattern define module.
         *
         * @param   id
         * @api     public
         */
        require(id: string): any;

        /**
         * ApplicationContext add startup loaded bean ids.
         *
         * @param   ids loaded bean ids
         * @api     public
         */
        use(ids: string[]): void;

        /**
         * ApplicationContext async load bean with bean ids.
         *
         * @param   ids bean ids
         * @param   cb callback function
         * @api     public
         */
        async(ids: string[], cb?: CallbackFunc): void;

        /**
         * ApplicationContext check ApplicationContext contains bean or not.
         *
         * @param   beanName
         * @return  a boolean value that contains bean or not
         * @api     public
         */
        containsBean(beanName: string): boolean;

        /**
         * ApplicationContext check bean is a singleton or not.
         *
         * @param   beanName
         * @return  a boolean value that is a singleton or not
         * @api     public
         */
        isSingleton(beanName: string): boolean;

        /**
         * ApplicationContext check bean is a prototype or not.
         *
         * @param   beanName
         * @return  a boolean value that is a prototype or not
         * @api     public
         */
        isPrototype(beanName: string): boolean;

        /**
         * ApplicationContext check ApplicationContext contains beanName beanDefinition or not.
         *
         * @param   beanName
         * @return  a boolean value that contains beanName beanDefinition or not
         * @api     public
         */
        containsBeanDefinition(beanName: string): boolean;

        /**
         * ApplicationContext check whether applicationContext is running or not.
         *
         * @return  true|false
         * @api     public
         */
        isRunning(): boolean;

        /**
         * ApplicationContext close beanFactory.
         *
         * @api     public
         */
        closeBeanFactory(): void;

        /**
         * ApplicationContext check whether applicationContext has beanFactory or not.
         *
         * @return  true|false
         * @api     public
         */
        hasBeanFactory(): boolean;

        /**
         * ApplicationContext getBeanFactory.
         *
         * @return  beanFactory
         * @api     public
         */
        getBeanFactory(): BeanFactory;

        /**
         * ApplicationContext getModuleFactory.
         *
         * @return  moduleFactory
         * @api     public
         */
        getModuleFactory(): ModuleFactory;

        /**
         * ApplicationContext get beanDefinition.
         *
         * @param   beanName
         * @return  beanDefinition
         * @api     public
         */
        getBeanDefinition(beanName: string): object;

        /**
         * ApplicationContext remove beanDefinition from ApplicationContext.
         *
         * @param   beanName
         * @api     public
         */
        removeBeanDefinition(beanName: string): void;

        /**
         * ApplicationContext set env.
         *
         * @param   env
         * @api     public
         */
        setEnv(env: string): void;

        /**
         * ApplicationContext get env.
         *
         * @return  env
         * @api     public
         */
        getEnv(): string;

        /**
         * ApplicationContext set config path.
         *
         * @param   cpath config path
         * @api     public
         */
        setConfigPath(cpath: string): void;

        /**
         * ApplicationContext get config path.
         *
         * @return  config path
         * @api     public
         */
        getConfigPath(): string;

        /**
         * ApplicationContext set hot reload path.
         *
         * @param   hpath hot reload path
         * @api     public
         */
        setHotPath(hpath: string): void;

        /**
         * ApplicationContext get hot reload path.
         *
         * @return  hpath hot reload path
         * @api     public
         */
        getHotPath(): string;

        /**
         * ApplicationContext get base path.
         *
         * @return  base path
         * @api     public
         */
        getBase(): string;
    }

    interface BeanFactory {
        aspects: object[];
        modelMap: object;
        initCbMap: object;
        beanCurMap: object;
        constraints: object;
        tableModelMap: object;
        beanFunctions: object;
        beanDefinitions: object;
        beanPostProcessors: BeanPostProcessor[];
        singletonBeanFactory: SingletonBeanFactory;

        /**
         * BeanFactory get bean instance through BeanFactory IoC container.
         *
         * @param   beanName
         * @return  bean object
         * @api     public
         */
        getBean(beanName: string): object;

        /**
         * BeanFactory get bean proxy through BeanFactory IoC container for lazy init bean.
         * when invoke bean proxy, proxy will invoke getBean to get the target bean
         *
         * @param   beanName
         * @return  bean proxy object
         * @api     public
         */
        getBeanProxy(beanName: string): object;

        /**
         * BeanFactory get model through BeanFactory IoC container.
         *
         * @param   modelId
         * @return  model proxy object
         * @api     public
         */
        getModelProxy(modelId: string): object;

        /**
         * BeanFactory get constraint through BeanFactory IoC container.
         *
         * @param   cid
         * @return  constraint bean object
         * @api     public
         */
        getConstraint(cid: string): object;

        /**
         * BeanFactory set parent bean.
         *
         * @param   beanName
         * @return  beanDefinition
         * @api     public
         */
        setParentBean(beanName: string): object;

        /**
         * BeanFactory register beans through metaObjects into BeanFactory.
         *
         * @param   metaObjects
         * @api     public
         */
        registerBeans(metaObjects: object): void;

        /**
         * BeanFactory register bean through metaObject into BeanFactory.
         *
         * @param   beanName
         * @param   metaObject
         * @api     public
         */
        registerBean(beanName: string, metaObject: object): void;

        /**
         * BeanFactory register model through metaObject into BeanFactory.
         *
         * @param   beanName bean id
         * @param   modelId  model id
         * @param   metaObject
         * @api     public
         */
        registerModel(beanName: string, modelId: string, metaObject: object): void;

        /**
         * BeanFactory register constraint through metaObject into BeanFactory.
         *
         * @param   beanName bean id
         * @param   cid      constraint id
         * @param   metaObject
         * @api     public
         */
        registerConstraint(beanName: string, cid: string, metaObject: object): void;

        /**
         * BeanFactory instantiating singletion beans in advance.
         *
         * @param   cb callback function
         * @api     public
         */
        preInstantiateSingletons(cb?: CallbackFunc): void;

        /**
         * BeanFactory add beanPostProcessor to BeanFactory.
         * @param   beanPostProcessor
         * @api     public
         */
        addBeanPostProcessor(beanPostProcessor: BeanPostProcessor): void;

        /**
         * BeanFactory get beanPostProcessors.
         * @return  beanPostProcessors
         * @api public
         */
        getBeanPostProcessors(): BeanPostProcessor[];

        /**
         * BeanFactory destroy singletons.
         *
         * @api     public
         */
        destroySingletons(): void;

        /**
         * BeanFactory destroy BeanFactory.
         *
         * @api     public
         */
        destroyBeanFactory(): void;

        /**
         * BeanFactory destroy singleton.
         *
         * @param   beanName
         * @api     public
         */
        destroySingleton(beanName: string): void;

        /**
         * BeanFactory destroy bean.
         *
         * @param   beanName
         * @param   beanObject
         * @api     public
         */
        destroyBean(beanName: string, beanObject: object): void;

        /**
         * BeanFactory check bean is a singleton or not.
         *
         * @param   beanName
         * @return  true | false
         * @api     public
         */
        isSingleton(beanName: string): boolean;

        /**
         * BeanFactory check bean is a prototype or not.
         *
         * @param   beanName
         * @return  true | false
         * @api     public
         */
        isPrototype(beanName: string): boolean;

        /**
         * BeanFactory check BeanFactory contains bean or not.
         *
         * @param   beanName
         * @return  true | false
         * @api     public
         */
        containsBean(beanName: string): boolean;

        /**
         * BeanFactory get bean contructor function.
         *
         * @param   beanName
         * @return  bean constructor function
         * @api     public
         */
        getBeanFunction(beanName: string): ConstructorFunction;

        /**
         * BeanFactory set bean contructor function.
         *
         * @param   beanName
         * @param   func bean constructor function
         * @api     public
         */
        setBeanFunction(beanName: string, func: ConstructorFunction): void;

        /**
         * BeanFactory remove bean contructor function from BeanFactory.
         *
         * @param   beanName
         * @api     public
         */
        removeFunction(beanName: string): void;

        /**
         * BeanFactory get init method.
         *
         * @param   beanName
         * @return  bean init method
         * @api     public
         */
        getInitCb(beanName: string): CallbackFunc;

        /**
         * BeanFactory set init method.
         *
         * @param   beanName
         * @param   initCb bean init method
         * @api     public
         */
        setInitCb(beanName: string, initCb: CallbackFunc): void;

        /**
         * BeanFactory get beanDefinition.
         *
         * @param   beanName
         * @return  beanDefinition
         * @api     public
         */
        getBeanDefinition(beanName: string): object;

        /**
         * BeanFactory get beanDefinitions.
         *
         * @return  beanDefinitions
         * @api     public
         */
        getBeanDefinitions(): object;

        /**
         * BeanFactory remove beanDefinition from BeanFactory.
         *
         * @param   beanName
         * @api     public
         */
        removeBeanDefinition(beanName: string): void;

        /**
         * BeanFactory check BeanFactory contains beanName beanDefinition or not.
         *
         * @param   beanName
         * @return  true | false
         * @api     public
         */
        containsBeanDefinition(beanName: string): boolean;

        /**
         * BeanFactory get aspects.
         *
         * @return  aspects
         * @api     public
         */
        getAspects(): object[];

        /**
         * BeanFactory get modelDefinition.
         *
         * @param   modelId
         * @return  modelDefinition
         * @api     public
         */
        getModelDefinition(modelId: string): object;

        /**
         * BeanFactory get modelDefinitions.
         *
         * @return  modelDefinition map
         * @api     public
         */
        getModelDefinitions(): object;

        /**
         * BeanFactory get getConstraintDefinition.
         *
         * @param   cid
         * @return  getConstraintDefinition
         * @api     public
         */
        getConstraintDefinition(cid: string): object;

        /**
         * BeanFactory set table model map.
         *
         * @param   table name
         * @param   modelDefinition
         * @api     public
         */
        setTableModelMap(table: string, modelDefinition: object): void;

        /**
         * BeanFactory get modelDefinition by table.
         *
         * @param   table name
         * @return  modelDefinition
         * @api     public
         */
        getModelDefinitionByTable(table: string): object;
    }

    interface SingletonBeanFactory {
        beanFactory: BeanFactory;
        singletonObjects: object;

        /**
         * SingletonBeanFactory add singleton to SingletonBeanFactory.
         *
         * @param   beanName
         * @param   beanObject
         * @api     public
         */
        addSingleton(beanName: string, beanObject: object): void;

        /**
         * SingletonBeanFactory check SingletonBeanFactory contains singleton or not.
         *
         * @param   beanName
         * @return  true | false
         * @api     public
         */
        containsSingleton(beanName: string): boolean;

        /**
         * SingletonBeanFactory get singleton from SingletonBeanFactory.
         *
         * @param   beanName
         * @return  singletonObject
         * @api     public
         */
        getSingleton(beanName: string): object;

        /**
         * SingletonBeanFactory get all singleton names from SingletonBeanFactory.
         *
         * @api     public
         */
        getSingletonNames(): string[];

        /**
         * SingletonBeanFactory remove singleton from SingletonBeanFactory.
         *
         * @param   beanName
         * @api     public
         */
        removeSingleton(beanName: string): void;
    }

    interface ModuleFactory {
        factoryMap: object;
        moduleMap: object;

        define(id: string, factory: object): void;

        require(id: string): any;
    }

    interface ResourceLoader {
        loadPathMap: object;
        loadPaths: string;

        /**
         * ResourceLoader get config loader.
         *
         * @return  config loader
         * @api     public
         */
        getConfigLoader(): ConfigLoader;

        /**
         * ResourceLoader add context load path.
         *
         * @param   cpath context load path
         * @api     public
         */
        addLoadPath(cpath: string): void;

        /**
         * ResourceLoader load metaObjects from context path.
         *
         * @param   cpath context load path
         * @return  metaObjects
         * @api     public
         */
        load(cpath: string): object;
    }

    interface ConfigLoader {
        /**
         * ConfigLoader get meta loader.
         *
         * @return  meta loader
         * @api     public
         */
        getMetaLoader(): MetaLoader;

        /**
         * ConfigLoader get meta objects from context path.
         *
         * @param   cpath context path
         * @return  meta objects
         * @api     public
         */
        getResources(cpath: string): object;

        /**
         * ConfigLoader get recursive scan paths and metaObjects in context.json.
         *
         * @param   cpath context path
         * @param   scanPaths scan paths
         * @param   metaObjects
         * @api     public
         */
        getRecursiveScanPath(cpath: string, scanPaths: string[], metaObjects: object): void;
    }

    interface MetaLoader {
        metaObjects: object;

        /**
         * MetaLoader load metaObjects from meta path.
         *
         * @param   mpath
         * @return  meta objects
         * @api     public
         */
        load(mpath: string): object;

        /**
         * MetaLoader set metaObject to beanName.
         *
         * @param   beanName
         * @param   metaObject
         * @api     public
         */
        setMetaObject(beanName: string, metaObject: object): void;

        /**
         * MetaLoader get metaObjects.
         *
         * @return  metaObjects
         * @api     public
         */
        getMetaObjects(): object;
    }

    interface AsyncScriptLoader {
        cacheModules: object;
        loaderDir: string;
        applicationContext: ApplicationContext;

        /**
         * AsyncScriptLoader get loaded beans list.
         *
         * @return  loaded beans
         * @api     public
         */
        getLoadBeans(): object[];

        /**
         * AsyncScriptLoader load beans asynchronously.
         *
         * @param   ids loaded beans ids
         * @param   cb callback function
         * @api     public
         */
        load(ids: string[], cb?: CallbackFunc): void;

        /**
         * AsyncScriptLoader save load script with uri meta.
         *
         * @param   uri
         * @param   meta
         * @api     public
         */
        save(uri: string, meta: object): void;

        /**
         * AsyncScriptLoader register script with id, meta.
         *
         * @param   id
         * @param   beanMeta
         * @api     public
         */
        module(id: string, beanMeta: object): void;

        /**
         * AsyncScriptLoader resolve uri path with refUri.
         *
         * @param   id
         * @param   refUri
         * @return  resolved path
         * @api     public
         */
        resolve(id: string, refUri: string): string;

        /**
         * AsyncScriptLoader resolve deps through bean meta.
         *
         * @param   beanMeta
         * @return  resolved deps
         * @api     public
         */
        resolveDeps(beanMeta: object): string[];

        /**
         * AsyncScriptLoader get bean path through bean id.
         *
         * @param   id
         * @return  bean path
         * @api     public
         */
        getPathById(id: string): string;

        /**
         * AsyncScriptLoader get script from cache or new.
         *
         * @param   uri
         * @param   deps id
         * @return  module
         * @api     public
         */
        get(uri: string, deps: string[]): object;

        /**
         * AsyncScriptLoader set applicationContext reference.
         *
         * @param   applicationContext
         * @api     public
         */
        setApplicationContext(applicationContext: ApplicationContext): void;
    }

    interface BootStrapLoader {
        /**
         * BootStrapLoader load script files.
         *
         * @param   idPaths
         * @api     public
         */
        load(idPaths: string[]): void;
    }
}

declare var bearcat: bearcat.Bearcat;
export = bearcat;
