import * as bearcat from 'bearcat-es6';

const EF = () => {};

bearcat.createApp({}); // $ExpectType Bearcat
bearcat.start(() => {
    bearcat.getBeanByMeta({});                 // $ExpectType object | null
    bearcat.getBeanByFunc(EF);                      // $ExpectType object | null
    bearcat.use('beanId');
    bearcat.module(EF, null);
    bearcat.define('testId', EF, null);
    bearcat.require('testId');
    bearcat.getBean('testId');
    bearcat.getFunction('testId');      // $ExpectType ConstructorFunction | null
    bearcat.getClass('testId');         // $ExpectType ConstructorFunction | null
    bearcat.extend('testSubId', 'testId');
    bearcat.call('testId', null);
    bearcat.getModel('testSubId');
    bearcat.getRoute('testId', 'controllerEntry');

    const applicationContext: bearcat.ApplicationContext = bearcat.getApplicationContext(); // $ExpectType ApplicationContext
    applicationContext.init();
    applicationContext.setStartupDate(Date.now());
    applicationContext.getStartupDate();                                // $ExpectType number
    applicationContext.getResource('/a/c/b');                     // $ExpectType object
    applicationContext.getConfigLocations();                            // $ExpectType string[]
    applicationContext.addBeanFactoryPostProcessor({postProcessBeanFactory: EF});
    applicationContext.getBeanFactoryProcessors();                      // $ExpectType BeanPostProcessor[]
    applicationContext.refresh();
    applicationContext.refresh(() => {});
    applicationContext.isActive();
    applicationContext.getBean('testId');
    applicationContext.getBeanByMeta({});
    applicationContext.getBeanByFunc(EF);
    applicationContext.getModel('mId');
    applicationContext.getModelDefinition('mId');
    applicationContext.getBeanFunction('testId');
    applicationContext.extendBean('testId', ['testParentId']);
    applicationContext.doExtendBean('testId', 'testParentId');
    applicationContext.module(EF, null);
    applicationContext.define('testNewId', EF, null);
    applicationContext.require('testNewId');
    applicationContext.use(['testId']);
    applicationContext.async(['testId']);
    applicationContext.containsBean('testId');      // $ExpectType boolean
    applicationContext.isSingleton('testId');       // $ExpectType boolean
    applicationContext.isPrototype('testId');       // $ExpectType boolean
    applicationContext.containsBeanDefinition('testId');       // $ExpectType boolean
    applicationContext.isRunning();                           // $ExpectType boolean
    applicationContext.hasBeanFactory();                      // $ExpectType boolean
    applicationContext.getBeanDefinition('testId');
    applicationContext.removeBeanDefinition('testNewId');
    applicationContext.setEnv('testing');
    applicationContext.getEnv();                            // $ExpectType string
    applicationContext.setConfigPath('./config');
    applicationContext.getConfigPath();
    applicationContext.setHotPath('./src');
    applicationContext.getHotPath();
    applicationContext.getBase();

    const asyncScriptLoader: bearcat.AsyncScriptLoader = applicationContext.getAsyncScriptLoader(); // $ExpectType AsyncScriptLoader
    asyncScriptLoader.getLoadBeans();
    asyncScriptLoader.load(['abc'], () => {});
    asyncScriptLoader.save('/a/b', {});
    asyncScriptLoader.module('mId', {});
    asyncScriptLoader.resolve('mId', '');       // $ExpectType string
    asyncScriptLoader.resolveDeps({});
    asyncScriptLoader.getPathById('mId');
    asyncScriptLoader.get('/a/b', []);
    asyncScriptLoader.setApplicationContext(applicationContext);

    const bootStrapLoader: bearcat.BootStrapLoader = applicationContext.getBootStrapLoader(); // $ExpectType BootStrapLoader
    bootStrapLoader.load(['a']);

    const resourceLoader: bearcat.ResourceLoader = applicationContext.getResourceLoader();    // $ExpectType ResourceLoader
    resourceLoader.addLoadPath('./');
    resourceLoader.getConfigLoader();
    resourceLoader.load('./a');

    const beanFactory: bearcat.BeanFactory = applicationContext.getBeanFactory(); // $ExpectType BeanFactory
    const beanFactorySame = bearcat.getBeanFactory();                     // $ExpectType BeanFactory
    if (beanFactory !== beanFactorySame) {
        return;        // should not run here!
    }

    beanFactory.getBean('testId');
    beanFactory.getBeanProxy('testId');
    beanFactory.getModelProxy('mId');
    beanFactory.getConstraint('cId');
    beanFactory.setParentBean('testParentBean');
    beanFactory.registerBeans({});
    beanFactory.registerBean('testNewId', {});
    beanFactory.registerModel('testId', 'mNewId', {});
    beanFactory.registerConstraint('testId', 'cNewId', {});
    beanFactory.preInstantiateSingletons();
    beanFactory.addBeanPostProcessor({postProcessBeanFactory: EF});
    beanFactory.getBeanPostProcessors();
    beanFactory.isSingleton('testId');
    beanFactory.isPrototype('testId');
    beanFactory.containsBean('testId');
    beanFactory.getBeanFunction('testId');
    beanFactory.setBeanFunction('testId', EF);
    beanFactory.removeFunction('testId');
    beanFactory.getInitCb('testId');
    beanFactory.setInitCb('testId', EF);
    beanFactory.getBeanDefinition('testId');
    beanFactory.getBeanDefinitions();
    beanFactory.removeBeanDefinition('testId');
    beanFactory.containsBeanDefinition('testId');
    beanFactory.getAspects(); // $ExpectType object[]
    beanFactory.getModelDefinition('mId');
    beanFactory.getModelDefinitions();
    beanFactory.getConstraintDefinition('cId');
    beanFactory.setTableModelMap('tId', {});
    beanFactory.getModelDefinitionByTable('tId');

    const moduleFactory: bearcat.ModuleFactory = applicationContext.getModuleFactory();
    moduleFactory.define('mId', {});
    moduleFactory.require('mId');

    beanFactory.destroyBean('testId', {});
    beanFactory.destroySingleton('testNewId');
    beanFactory.destroySingletons();
    beanFactory.destroyBeanFactory();
    applicationContext.closeBeanFactory();
    applicationContext.cancelRefresh();
    applicationContext.destroy();
    bearcat.stop();
});

bearcat.async('test', () => {});
