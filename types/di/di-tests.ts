import * as di from "di";

const emptyInjector = new di.Injector();
const moduleSpecifications = [{}];
const fullInjector = new di.Injector(moduleSpecifications);
const childInjector = new di.Injector(moduleSpecifications, emptyInjector);

const dep: {} = fullInjector.get('foo');

const factory = (context: {}, deps: Array<{}>) => {
	return {};
};

const invoked: {} = fullInjector.invoke(factory, {});

const oldTimeyClass = {prototype: {}};

const instance: {} = fullInjector.instantiate(oldTimeyClass);

const anotherChildInjector: di.Injector =
		fullInjector.createChild(moduleSpecifications);
