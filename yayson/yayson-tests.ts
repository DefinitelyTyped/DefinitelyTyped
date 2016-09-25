/// <reference path="yayson.d.ts" />

import * as Yayson from "yayson";

const yayson = Yayson({ adapter: 'default' }) || Yayson({ adapter: 'sequelize' }) || Yayson();
const Adapter = yayson.Adapter;
const Store = yayson.Store;
const Presenter = yayson.Presenter;

interface Thing {
  hello: 'world' | 'you';
}

function test_store() {
  const store = new Store();

  store.sync({ any: 'thing' });

  store.find('mytype', '1234').toString();
  <Thing> store.find<Thing>('mytype', '1234');

  store.findAll('mytype').length;
  <Thing[]> store.findAll<Thing>('mytype');

  store.remove('mytype', '1234');
  store.remove('mytype');

  store.reset();

  store.records.length;
  <{ [type: string]: any }> store.relations;
}

function test_presenter_static() {
  Presenter.render({}).toString();
  Presenter.render({}, { meta: {} }).toString();

  Presenter.render([]).length;
  Presenter.render([], { meta: {} }).length;

  const promiseNum: PromiseLike<number> = null;

  Presenter.render(promiseNum).then(data => data.toExponential());
  Presenter.render(promiseNum, { meta: { so: 'meta' } }).then(data => data.toExponential());

  Presenter.toJSON({ any: 'thing' }).toString();
  Presenter.toJSON({ other: 'thing' }, { meta: { so: 'meta' } }).toString();
}

function test_presenter_instance() {
  const presenter = new Presenter();

  presenter.render({}).toString();
  presenter.render({}, { meta: {} }).toString();

  presenter.render([]).length;
  presenter.render([], { meta: {} }).length;

  const promiseNum: PromiseLike<number> = null;

  presenter.render(promiseNum).then(data => data.toExponential());
  presenter.render(promiseNum, { meta: { so: 'meta' } }).then(data => data.toExponential());

  presenter.toJSON({ any: 'thing' }).toString();
  presenter.toJSON({ other: 'thing' }, { meta: { so: 'meta' } }).toString();
}

function test_presenter_inheritance() {
  class MotorPresenter extends Presenter {
    type = 'motors';
    relationships() {
      return { car: CarPresenter }
    };
    selfLinks(instance: any) {
      return '/cars/' + this.id(instance);
    };
  }

  class CarPresenter extends Presenter {
    type = 'cars'
    relationships() {
      return { motor: MotorPresenter }
    };
  }

  const motor: { id: any; car: any } = {
    id: 2,
    car: null
  }

  const car = {
    id: 1,
    motor: motor
  }

  motor.car = car;

  CarPresenter.toJSON(car).toString();
  CarPresenter.toJSON(car, { meta: { so: 'meta' } }).toString();

  CarPresenter.render({ id: 3 }).toString();
  CarPresenter.render({ id: 3 }, { meta: { so: 'meta' } }).toString();
  CarPresenter.render({ id: 3 }, { car: { id: 3 } }).toString();
}

function test_adapter() {
  Adapter.get({ name: 'Abraham' }).toString();
  <string> Adapter.get<string>({ name: 'Abraham' });

  <any> Adapter.get({ name: 'Abraham' }, 'name');
  name = Adapter.get<string>({ name: 'Abraham' }, 'name');

  <string> Adapter.id({ id: 5 });
}
