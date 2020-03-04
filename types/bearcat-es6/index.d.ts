// Type definitions for bearcat-es6 0.6.1
// Project: https://github.com/ChrisPei/bearcat-es6
// Definitions by: Xin Li <https://github.com/xinxinran0221010>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node" />

import { EventEmitter } from 'events';

declare namespace bearcat {
    type CallbackFunc = Function;
    type ParamClassFunc = Function;
    type BeanPostProcessor = {
        postProcessBeanFactory: Function
    };

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
         * @param  {Array}  configLocations context path array
         * @param  {Object} opts
         * @param  {String} opts.NODE_ENV                    setup env
         * @param  {String} opts.BEARCAT_ENV                 setup env
         * @param  {String} opts.NODE_CPATH                  setup config path
         * @param  {String} opts.BEARCAT_CPATH               setup config path
         * @param  {String} opts.BEARCAT_HPATH               setup hot reload path(s), usually it is the scan source directory(app by default)
         * @param  {String} opts.BEARCAT_LOGGER              setup 'off' to turn off bearcat logger configuration
         * @param  {String} opts.BEARCAT_HOT                 setup 'on' to turn on bearcat hot code reload
         * @param  {String} opts.BEARCAT_ANNOTATION          setup 'off' to turn off bearcat $ based annotation
         * @param  {String} opts.BEARCAT_GLOBAL             setup bearcat to be global object
         * @param  {String} opts.BEARCAT_FUNCTION_STRING     setup bearcat to use func.toString for $ based annotation
         *
         * @return {Object} bearcat object
         * @api public
         */
        createApp(configLocations: string[], opts: object): Bearcat;

        createApp(opts: object): Bearcat;

        /**
         * Bearcat start app.
         *
         * @param  {Function} cb start callback function
         * @api public
         */
        start(cb?: CallbackFunc): void;

        /**
         * Bearcat stop app.
         * it will stop internal applicationContext, destroy all singletonBeans
         *
         * @api public
         */
        stop(): void;

        /**
         * Bearcat get beanFactory instance.
         *
         * @return  {Object} beanFactory instance
         * @api public
         */
        getBeanFactory(): BeanFactory;

        /**
         * Bearcat get applicationContext.
         *
         * @return  {Object} applicationContext
         * @api public
         */
        getApplicationContext(): ApplicationContext;

        /**
         * Bearcat get bean from IoC container through meta argument.
         *
         * Examples:
         *
         *      bearcat.getBeanByMeta({
         *		 id: "car",
         *		 func: Car // Car is a function constructor
         *	  });
         *
         * @param  {Object} meta meta object
         * @api public
         */
        getBeanByMeta(meta: object): object | null;

        /**
         * Bearcat get bean from IoC container through $ annotation function.
         *
         * Examples:
         *
         *      bearcat.getBeanByFunc(function() {
         *		 $id = "car";
         *		 $scope = "prototype";
         *	  });
         *
         * @param  {Function} func $ annotation function
         * @api public
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
         * @param  {Array|String} ids async loading beans id
         * @api public
         */
        use(ids: string | string[]): void;

        /**
         * Bearcat async loading beans.
         *
         * Examples:
         *
         *      bearcat.async(['car'], function(car) {
         *		  // car is ready
         *	  });
         *
         * @param  {Array|String} ids async loading beans id
         * @param {Function}     cb callback with loaded bean instances
         * @api public
         */
        async(ids: string | string[], cb?: CallbackFunc): void;

        /**
         * Bearcat add module(bean) to IoC container through $ annotation function.
         *
         * Examples:
         *
         *      bearcat.module(function() {
         *		 $id = "car";
         *		 $scope = "prototype";
         *	  });
         *
         * @param  {Function} func $ annotation function
         * @param  {Function} context context object
         * @api public
         */
        module(func: ParamClassFunc, context?: object | null): object | void;

        /**
         * Bearcat define module(bean).
         *
         * Examples:
         *
         *    bearcat.define('car', function(exports, module) {
         *	     module.exports = function() {
         *	         console.log('run car...')
         *       }
         *    }, typeof module !== 'undefined' ? module : {});
         *
         * @param  {String}   id
         * @param  {Function} factory function
         * @param  {object}   context object
         * @api public
         */
        define(id: string, factory: ParamClassFunc, context: object | null): void;

        /**
         * Bearcat add module(bean) to IoC container through $ annotation function.
         *
         * Examples:
         *
         *      var Car = bearcat.require('car');
         *
         * @param  {String} id
         * @api public
         */
        require(id: string): any;

        /**
         * Bearcat get bean from IoC container through beanName or meta argument.
         *
         * Examples:
         *
         *
         *      // through beanName
         *      var car = bearcat.getBean("car");
         *
         *      // through meta
         *      var car = bearcat.getBean({
         *		 id: "car",
         *		 func: Car // Car is a function constructor
         *	  });
         *
         *      // through $ annotation func
         *      var car = bearcat.getBean(function() {
         *		 $id = "car";
         *		 $scope = "prototype";
         *	  });
         *
         * @param  {String} beanName
         * @return {Object} bean
         * @api public
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
         * @param  {String}   beanName
         * @return {Function} bean constructor function
         * @api public
         */
        getFunction(beanName: string): Function | null;

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
         * @param  {String}   beanName
         * @return {Function} bean constructor function
         * @api public
         */
        getClass(beanName: string): Function | null;

        /**
         * Bearcat shim to enable function inherits.
         *
         * Examples:
         *
         *
         *      bearcat.extend("bus", "car");
         *
         *
         * @param  {String}        beanName
         * @param  {String|Array}   superBeanName or superBeanName array
         * @api public
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
         * @param  {String}   beanName
         * @param  {Object}   context
         * @param  {Array}   args
         * @api public
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
         * @param  {String}   modelId
         * @return {Object}   model
         * @api public
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
         * @param  {String} beanName
         * @param  {String} fnName routeName
         * @api public
         */
        getRoute(beanName: string, fnName: string): Function;
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
         * @api public
         */
        init(): void;

        /**
         * ApplicationContext set container startUpDate.
         *
         * @param  {Number} startUpDate
         * @api public
         */
        setStartupDate(startUpDate: number): void;

        /**
         * ApplicationContext get container startUpDate.
         *
         * @return  {Number} startUpDate
         * @api public
         */
        getStartupDate(): number;

        /**
         * ApplicationContext get resourceLoader.
         *
         * @return  {Object} resourceLoader
         * @api public
         */
        getResourceLoader(): ResourceLoader;

        /**
         * ApplicationContext get asyncScriptLoader.
         *
         * @return  {Object} asyncScriptLoader
         * @api public
         */
        getAsyncScriptLoader(): AsyncScriptLoader;

        /**
         * ApplicationContext get bootStrapLoader.
         *
         * @return  {Object} bootStrapLoader
         * @api public
         */
        getBootStrapLoader(): BootStrapLoader;

        /**
         * ApplicationContext get metaObjects resource from contextPath.
         *
         * @param   {String} cpath contextPath
         * @return  {Object} metaObjects
         * @api public
         */
        getResource(cpath: string): object;

        /**
         * ApplicationContext get contextPath locations.
         *
         * @return  {Array} contextPath locations
         * @api public
         */
        getConfigLocations(): string[];

        /**
         * ApplicationContext add beanFactoryPostProcessor.
         *
         * @param  {Object} beanFactoryPostProcessor
         * @api public
         */
        addBeanFactoryPostProcessor(beanFactoryPostProcessor: BeanPostProcessor): void;

        /**
         * ApplicationContext get beanFactoryPostProcessors.
         *
         * @return  {Array} beanFactoryPostProcessors
         * @api public
         */
        getBeanFactoryProcessors(): BeanPostProcessor[];

        /**
         * ApplicationContext do refresh actions.
         * refresh beanFactory, preIntialize singleton Beans
         *
         * @param  {Function} cb callback function
         * @api public
         */
        refresh(cb?: CallbackFunc): void;

        /**
         * ApplicationContext cancel refresh.
         *
         * @api publish
         */
        cancelRefresh(): void;

        /**
         * ApplicationContext destroy.
         *
         * @api public
         */
        destroy(): void;

        /**
         * ApplicationContext check whether applicationContext is active or not.
         *
         * @api public
         */
        isActive(): boolean;

        /**
         * ApplicationContext getBean through beanName from applicationContext.
         *
         * @param   {String} beanName
         * @return  {Object} beanObject
         * @api public
         */
        getBean(beanName: string): object;

        /**
         * ApplicationContext getBean through metaObject from applicationContext.
         *
         * @param   {Object} meta metaObject
         * @return  {Object} beanObject
         * @api public
         */
        getBeanByMeta(meta: object): object;

        /**
         * ApplicationContext getBean through $ annotation function from applicationContext.
         *
         * @param   {Function} func $ annotation function
         * @return  {Object}   beanObject
         * @api public
         */
        getBeanByFunc(func: Function): object;

        /**
         * ApplicationContext getModel through modelId.
         *
         * @param   {String}   modelId
         * @return  {Object}   model
         * @api public
         */
        getModel(modelId: string): object;

        /**
         * ApplicationContext getModelDefinition through modelId.
         *
         * @param   {String}   modelId
         * @return  {Object}   modelDefinition
         * @api public
         */
        getModelDefinition(modelId: string): object;

        /**
         * ApplicationContext get bean contructor function.
         *
         * @param  {String}   beanName
         * @return {Function} bean constructor function
         * @api public
         */
        getBeanFunction(beanName: string): Function;

        /**
         * ApplicationContext extend bean.
         *
         * @param  {String}        beanName
         * @param  {String|Array}   superBeanName or superBeanName array
         * @api public
         */
        extendBean(beanName: string, superBeanName: string | string[]): void;

        /**
         * ApplicationContext do extend bean.
         *
         * @param  {String}   beanName
         * @param  {String}   superBeanName
         * @api public
         */
        doExtendBean(beanName: string, superBeanName: string): void;

        /**
         * ApplicationContext add module(bean) to IoC container through $ annotation function from applicationContext.
         *
         * @param   {Function} func $ annotation function
         * @param   {Object} context
         * @api public
         */
        module(func: Function, context?: object | null): void;

        /**
         * ApplicationContext service locator pattern define module.
         *
         * @param   {String}   id
         * @param   {Function} factory factory function
         * @param   {Object} context context object
         * @api public
         */
        define(id: string, factory: Function, context?: object | null): void;

        /**
         * ApplicationContext service locator pattern define module.
         *
         * @param   {String}   id
         * @api public
         */
        require(id: string): any;

        /**
         * ApplicationContext add startup loaded bean ids.
         *
         * @param   {Array} ids loaded bean ids
         * @api public
         */
        use(ids: string[]): void;

        /**
         * ApplicationContext async load bean with bean ids.
         *
         * @param   {Array}    ids bean ids
         * @param   {Function} cb callback function
         * @api public
         */
        async(ids: string[], cb?: CallbackFunc): void;

        /**
         * ApplicationContext check ApplicationContext contains bean or not.
         *
         * @param  {String} beanName
         * @return {Boolean}
         * @api public
         */
        containsBean(beanName: string): boolean;

        /**
         * ApplicationContext check bean is a singleton or not.
         *
         * @param  {String} beanName
         * @return {Boolean}
         * @api public
         */
        isSingleton(beanName: string): boolean;

        /**
         * ApplicationContext check bean is a prototype or not.
         *
         * @param  {String} beanName
         * @return {Boolean}
         * @api public
         */
        isPrototype(beanName: string): boolean;

        /**
         * ApplicationContext check ApplicationContext contains beanName beanDefinition or not.
         *
         * @param  {String} beanName
         * @return {Boolean}
         * @api public
         */
        containsBeanDefinition(beanName: string): boolean;

        /**
         * ApplicationContext check whether applicationContext is running or not.
         *
         * @return {Boolean} true|false
         * @api public
         */
        isRunning(): boolean;

        /**
         * ApplicationContext close beanFactory.
         *
         * @api public
         */
        closeBeanFactory(): void;

        /**
         * ApplicationContext check whether applicationContext has beanFactory or not.
         *
         * @return {Boolean} true|false
         * @api public
         */
        hasBeanFactory(): boolean;

        /**
         * ApplicationContext getBeanFactory.
         *
         * @return {Object} beanFactory
         * @api public
         */
        getBeanFactory(): BeanFactory;

        /**
         * ApplicationContext getModuleFactory.
         *
         * @return {Object} moduleFactory
         * @api public
         */
        getModuleFactory(): ModuleFactory;

        /**
         * ApplicationContext get beanDefinition.
         *
         * @param  {String} beanName
         * @return {Object} beanDefinition
         * @api public
         */
        getBeanDefinition(beanName: string): object;

        /**
         * ApplicationContext remove beanDefinition from ApplicationContext.
         *
         * @param  {String} beanName
         * @api public
         */
        removeBeanDefinition(beanName: string): void;

        /**
         * ApplicationContext set env.
         *
         * @param {String} env
         * @api public
         */
        setEnv(env: string): void;

        /**
         * ApplicationContext get env.
         *
         * @return {String} env
         * @api public
         */
        getEnv(): string;

        /**
         * ApplicationContext set config path.
         *
         * @param {String} cpath config path
         * @api public
         */
        setConfigPath(cpath: string): void;

        /**
         * ApplicationContext get config path.
         *
         * @return {String} config path
         * @api public
         */
        getConfigPath(): string;

        /**
         * ApplicationContext set hot reload path.
         *
         * @param {String} hpath hot reload path
         * @api public
         */
        setHotPath(hpath: string): void;

        /**
         * ApplicationContext get hot reload path.
         *
         * @return {String} hpath hot reload path
         * @api public
         */
        getHotPath(): string;

        /**
         * ApplicationContext get base path.
         *
         * @return {String} base path
         * @api public
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
         * @param  {String} beanName
         * @return {Object} bean object
         * @api public
         */
        getBean(beanName: string): object;

        /**
         * BeanFactory get bean proxy through BeanFactory IoC container for lazy init bean.
         * when invoke bean proxy, proxy will invoke getBean to get the target bean
         *
         * @param  {String} beanName
         * @return {Object} bean proxy object
         * @api public
         */
        getBeanProxy(beanName: string): object;

        /**
         * BeanFactory get model through BeanFactory IoC container.
         *
         * @param  {String} modelId
         * @return {Object} model proxy object
         * @api public
         */
        getModelProxy(modelId: string): object;

        /**
         * BeanFactory get constraint through BeanFactory IoC container.
         *
         * @param  {String} cid
         * @return {Object} constraint bean object
         * @api public
         */
        getConstraint(cid: string): object;

        /**
         * BeanFactory set parent bean.
         *
         * @param  {String} beanName
         * @return {Object} beanDefinition
         * @api public
         */
        setParentBean(beanName: string): object;

        /**
         * BeanFactory register beans through metaObjects into BeanFactory.
         *
         * @param  {Object} metaObjects
         * @api public
         */
        registerBeans(metaObjects: object): void;

        /**
         * BeanFactory register bean through metaObject into BeanFactory.
         *
         * @param  {String} beanName
         * @param  {Object} metaObject
         * @api public
         */
        registerBean(beanName: string, metaObject: object): void;

        /**
         * BeanFactory register model through metaObject into BeanFactory.
         *
         * @param  {String} beanName bean id
         * @param  {String} modelId  model id
         * @param  {Object} metaObject
         * @api public
         */
        registerModel(beanName: string, modelId: string, metaObject: object): void;

        /**
         * BeanFactory register constraint through metaObject into BeanFactory.
         *
         * @param  {String} beanName bean id
         * @param  {String} cid      constraint id
         * @param  {Object} metaObject
         * @api public
         */
        registerConstraint(beanName: string, cid: string, metaObject: object): void;

        /**
         * BeanFactory instantiating singletion beans in advance.
         *
         * @param  {Function} cb callback function
         * @api public
         */
        preInstantiateSingletons(cb?: CallbackFunc): void;

        /**
         * BeanFactory add beanPostProcessor to BeanFactory.
         * @param  {Object} beanPostProcessor
         * @api public
         */
        addBeanPostProcessor(beanPostProcessor: BeanPostProcessor): void;

        /**
         * BeanFactory get beanPostProcessors.
         * @return {Object} beanPostProcessors
         * @api public
         */
        getBeanPostProcessors(): BeanPostProcessor[];

        /**
         * BeanFactory destroy singletons.
         *
         * @api public
         */
        destroySingletons(): void;

        /**
         * BeanFactory destroy BeanFactory.
         *
         * @api public
         */
        destroyBeanFactory(): void;

        /**
         * BeanFactory destroy singleton.
         *
         * @param  {String} beanName
         * @api public
         */
        destroySingleton(beanName: string): void;

        /**
         * BeanFactory destroy bean.
         *
         * @param  {String} beanName
         * @param  {Object} beanObject
         * @api public
         */
        destroyBean(beanName: string, beanObject: object): void;

        /**
         * BeanFactory check bean is a singleton or not.
         *
         * @param  {String} beanName
         * @return {Boolean}
         * @api public
         */
        isSingleton(beanName: string): boolean;

        /**
         * BeanFactory check bean is a prototype or not.
         *
         * @param  {String} beanName
         * @return {Boolean}
         * @api public
         */
        isPrototype(beanName: string): boolean;

        /**
         * BeanFactory check BeanFactory contains bean or not.
         *
         * @param  {String} beanName
         * @return {Boolean}
         * @api public
         */
        containsBean(beanName: string): boolean;

        /**
         * BeanFactory get bean contructor function.
         *
         * @param  {String} beanName
         * @return {Function} bean constructor function
         * @api public
         */
        getBeanFunction(beanName: string): Function;

        /**
         * BeanFactory set bean contructor function.
         *
         * @param  {String}   beanName
         * @param  {Function} func bean constructor function
         * @api public
         */
        setBeanFunction(beanName: string, func: Function): void;

        /**
         * BeanFactory remove bean contructor function from BeanFactory.
         *
         * @param  {String} beanName
         * @api public
         */
        removeFunction(beanName: string): void;

        /**
         * BeanFactory get init method.
         *
         * @param  {String}   beanName
         * @return {Function} bean init method
         * @api public
         */
        getInitCb(beanName: string): Function;

        /**
         * BeanFactory set init method.
         *
         * @param  {String}   beanName
         * @param  {Function} initCb bean init method
         * @api public
         */
        setInitCb(beanName: string, initCb: Function): void;

        /**
         * BeanFactory get beanDefinition.
         *
         * @param  {String} beanName
         * @return {Object} beanDefinition
         * @api public
         */
        getBeanDefinition(beanName: string): object;

        /**
         * BeanFactory get beanDefinitions.
         *
         * @return {Object} beanDefinitions
         * @api public
         */
        getBeanDefinitions(): object;

        /**
         * BeanFactory remove beanDefinition from BeanFactory.
         *
         * @param  {String} beanName
         * @api public
         */
        removeBeanDefinition(beanName: string): void;

        /**
         * BeanFactory check BeanFactory contains beanName beanDefinition or not.
         *
         * @param  {String} beanName
         * @return {Boolean}
         * @api public
         */
        containsBeanDefinition(beanName: string): boolean;

        /**
         * BeanFactory get aspects.
         *
         * @return {Array} aspects
         * @api public
         */
        getAspects(): object[];

        /**
         * BeanFactory get modelDefinition.
         *
         * @param  {String} modelId
         * @return {Object} modelDefinition
         * @api public
         */
        getModelDefinition(modelId: string): object;

        /**
         * BeanFactory get modelDefinitions.
         *
         * @return {Object} modelDefinition map
         * @api public
         */
        getModelDefinitions(): object;

        /**
         * BeanFactory get getConstraintDefinition.
         *
         * @param  {String} cid
         * @return {Object} getConstraintDefinition
         * @api public
         */
        getConstraintDefinition(cid: string): object;

        /**
         * BeanFactory set table model map.
         *
         * @param  {String} table name
         * @param  {Object} modelDefinition
         * @api public
         */
        setTableModelMap(table: string, modelDefinition: object): void;

        /**
         * BeanFactory get modelDefinition by table.
         *
         * @param   {String} table name
         * @return  {Object} modelDefinition
         * @api public
         */
        getModelDefinitionByTable(table: string): object;
    }

    interface SingletonBeanFactory {
        beanFactory: BeanFactory;
        singletonObjects: object;

        /**
         * SingletonBeanFactory add singleton to SingletonBeanFactory.
         *
         * @param  {String} beanName
         * @param  {Object} beanObject
         * @api public
         */
        addSingleton(beanName: string, beanObject: object): void;

        /**
         * SingletonBeanFactory check SingletonBeanFactory contains singleton or not.
         *
         * @param  {String} beanName
         * @return {Boolean}
         * @api public
         */
        containsSingleton(beanName: string): boolean;

        /**
         * SingletonBeanFactory get singleton from SingletonBeanFactory.
         *
         * @param  {String} beanName
         * @return {Object} singletonObject
         * @api public
         */
        getSingleton(beanName: string): object;

        /**
         * SingletonBeanFactory get all singleton names from SingletonBeanFactory.
         *
         * @api public
         */
        getSingletonNames(): string[];

        /**
         * SingletonBeanFactory remove singleton from SingletonBeanFactory.
         *
         * @param  {String} beanName
         * @api public
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
         * @return  {Object} config loader
         * @api public
         */
        getConfigLoader(): object;

        /**
         * ResourceLoader add context load path.
         *
         * @param  {String} cpath context load path
         * @api public
         */
        addLoadPath(cpath: string): void;

        /**
         * ResourceLoader load metaObjects from context path.
         *
         * @param   {String} cpath context load path
         * @return  {Object} metaObjects
         * @api public
         */
        load(cpath: string): object;
    }

    interface AsyncScriptLoader {
        cacheModules: object;
        loaderDir: string;
        applicationContext: ApplicationContext;

        /**
         * AsyncScriptLoader get loaded beans list.
         *
         * @return  {Array}  loaded beans
         * @api public
         */
        getLoadBeans(): object[];

        /**
         * AsyncScriptLoader load beans asynchronously.
         *
         * @param  {Array}     ids loaded beans ids
         * @param  {Function}  cb callback function
         * @api public
         */
        load(ids: string[], cb?: CallbackFunc): void;

        /**
         * AsyncScriptLoader save load script with uri meta.
         *
         * @param  {String}  uri
         * @param  {Object}  meta
         * @api public
         */
        save(uri: string, meta: object): void;

        /**
         * AsyncScriptLoader register script with id, meta.
         *
         * @param  {String}  id
         * @param  {Object}  beanMeta
         * @api public
         */
        module(id: string, beanMeta: object): void;

        /**
         * AsyncScriptLoader resolve uri path with refUri.
         *
         * @param  {String}  id
         * @param  {String}  refUri
         * @return {String}  resolved path
         * @api public
         */
        resolve(id: string, refUri: string): string;

        /**
         * AsyncScriptLoader resolve deps through bean meta.
         *
         * @param  {Object}  beanMeta
         * @return  {Array}   resolved deps
         * @api public
         */
        resolveDeps(beanMeta: object): string[];

        /**
         * AsyncScriptLoader get bean path through bean id.
         *
         * @param  {String}  id
         * @return {String}  bean path
         * @api public
         */
        getPathById(id: string): string;

        /**
         * AsyncScriptLoader get script from cache or new.
         *
         * @param  {String}  uri
         * @param  {Array}   deps id
         * @return {Object}  module
         * @api public
         */
        get(uri: string, deps: string[]): object;

        /**
         * AsyncScriptLoader set applicationContext reference.
         *
         * @param  {Object}  applicationContext
         * @api public
         */
        setApplicationContext(applicationContext: ApplicationContext): void;
    }

    interface BootStrapLoader {

        /**
         * BootStrapLoader load script files.
         *
         * @api public
         * @param idPaths
         */
        load(idPaths: string[]): void;
    }
}

declare var bearcat: bearcat.Bearcat;
export = bearcat;
