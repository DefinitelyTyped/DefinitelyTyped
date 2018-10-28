import Yayson = require("yayson");

const yayson = Yayson({ adapter: 'default' }) || Yayson({ adapter: 'sequelize' }) || Yayson();
const Adapter = yayson.Adapter;
const Store = yayson.Store;
const Presenter = yayson.Presenter;

interface Thing {
  hello: 'world' | 'you';
}

function test_store() {
  const store = new Store();

  store.sync('some string').toString();
  store.sync(1234).toString();
  store.sync({ any: 'thing' }).toString();

  store.find('mytype', '1234').toString();
  <[string]> store.findAll('mytype');

  store.remove('mytype', '1234');
  store.remove('mytype');

  store.reset();

  <Yayson.Record[]> store.records;
  store.records[0].attributes.toString();
  store.records[0].id.toString();
  store.records[0].relationships.toString();
  <string> store.records[0].type;

  store.relations['something'];
}

function test_presenter_static() {
  Presenter.render('something').toString();
  Presenter.render({}).toString();
  Presenter.render({}, { meta: {} }).toString();

  <[string]> Presenter.render([]);
  <[string]> Presenter.render([], { meta: {} });

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

  <[string]> presenter.render([]);
  <[string]> presenter.render([], { meta: {} });

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
  Adapter.get({ name: 'Abraham' }, 'name').toString();

  <string> Adapter.id({ id: 5 });
}
