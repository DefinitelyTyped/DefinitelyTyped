

interface IMyResource extends OData.IResource<IMyResource> { };
interface IMyResourceClass extends OData.IResourceClass<IMyResource> { };

///////////////////////////////////////
// IActionDescriptor
///////////////////////////////////////
var actionDescriptor: OData.IActionDescriptor;

actionDescriptor.url = '/api/test-url/'
actionDescriptor.headers = { header: 'value' };
actionDescriptor.isArray = true;
actionDescriptor.method = 'method action';
actionDescriptor.params = { key: 'value' };

///////////////////////////////////////
// IResourceClass
///////////////////////////////////////
var resourceClass: IMyResourceClass;
var resource: IMyResource;
var resourceArray: OData.IResourceArray<IMyResource>;

resource = resourceClass.delete();
resource = resourceClass.delete({ key: 'value' });
resource = resourceClass.delete({ key: 'value' }, function() { });
resource = resourceClass.delete(function() { });
resource = resourceClass.delete(function() { }, function() { });
resource = resourceClass.delete({ key: 'value' }, { key: 'value' });
resource = resourceClass.delete({ key: 'value' }, { key: 'value' }, function() { });
resource = resourceClass.delete({ key: 'value' }, { key: 'value' }, function() { }, function() { });
resource.$promise.then(function(data: IMyResource) { });

resource = resourceClass.get();
resource = resourceClass.get({ key: 'value' });
resource = resourceClass.get({ key: 'value' }, function() { });
resource = resourceClass.get(function() { });
resource = resourceClass.get(function() { }, function() { });
resource = resourceClass.get({ key: 'value' }, { key: 'value' });
resource = resourceClass.get({ key: 'value' }, { key: 'value' }, function() { });
resource = resourceClass.get({ key: 'value' }, { key: 'value' }, function() { }, function() { });

resourceArray = resourceClass.query();
resourceArray = resourceClass.query({ key: 'value' });
resourceArray = resourceClass.query({ key: 'value' }, function() { });
resourceArray = resourceClass.query(function() { });
resourceArray = resourceClass.query(function() { }, function() { });
resourceArray = resourceClass.query({ key: 'value' }, { key: 'value' });
resourceArray = resourceClass.query({ key: 'value' }, { key: 'value' }, function() { });
resourceArray = resourceClass.query({ key: 'value' }, { key: 'value' }, function() { }, function() { });
resourceArray.push(resource);
resourceArray.$promise.then(function(data: OData.IResourceArray<IMyResource>) { });

resource = resourceClass.remove();
resource = resourceClass.remove({ key: 'value' });
resource = resourceClass.remove({ key: 'value' }, function() { });
resource = resourceClass.remove(function() { });
resource = resourceClass.remove(function() { }, function() { });
resource = resourceClass.remove({ key: 'value' }, { key: 'value' });
resource = resourceClass.remove({ key: 'value' }, { key: 'value' }, function() { });
resource = resourceClass.remove({ key: 'value' }, { key: 'value' }, function() { }, function() { });

resource = resourceClass.save();
resource = resourceClass.save({ key: 'value' });
resource = resourceClass.save({ key: 'value' }, function() { });
resource = resourceClass.save(function() { });
resource = resourceClass.save(function() { }, function() { });
resource = resourceClass.save({ key: 'value' }, { key: 'value' });
resource = resourceClass.save({ key: 'value' }, { key: 'value' }, function() { });
resource = resourceClass.save({ key: 'value' }, { key: 'value' }, function() { }, function() { });

///////////////////////////////////////
// IResource
///////////////////////////////////////

var promise: angular.IPromise<IMyResource>;
var arrayPromise: angular.IPromise<IMyResource[]>;

promise = resource.$delete();
promise = resource.$delete({ key: 'value' });
promise = resource.$delete({ key: 'value' }, function() { });
promise = resource.$delete(function() { });
promise = resource.$delete(function() { }, function() { });
promise = resource.$delete({ key: 'value' }, function() { }, function() { });
promise.then(function(data: IMyResource) { });

promise = resource.$get();
promise = resource.$get({ key: 'value' });
promise = resource.$get({ key: 'value' }, function() { });
promise = resource.$get(function() { });
promise = resource.$get(function() { }, function() { });
promise = resource.$get({ key: 'value' }, function() { }, function() { });

arrayPromise = resourceArray[0].$query();
arrayPromise = resourceArray[0].$query({ key: 'value' });
arrayPromise = resourceArray[0].$query({ key: 'value' }, function() { });
arrayPromise = resourceArray[0].$query(function() { });
arrayPromise = resourceArray[0].$query(function() { }, function() { });
arrayPromise = resourceArray[0].$query({ key: 'value' }, function() { }, function() { });
arrayPromise.then(function(data: OData.IResourceArray<IMyResource>) { });

promise = resource.$remove();
promise = resource.$remove({ key: 'value' });
promise = resource.$remove({ key: 'value' }, function() { });
promise = resource.$remove(function() { });
promise = resource.$remove(function() { }, function() { });
promise = resource.$remove({ key: 'value' }, function() { }, function() { });

promise = resource.$save();
promise = resource.$save({ key: 'value' });
promise = resource.$save({ key: 'value' }, function() { });
promise = resource.$save(function() { });
promise = resource.$save(function() { }, function() { });
promise = resource.$save({ key: 'value' }, function() { }, function() { });

///////////////////////////////////////
// IResourceService
///////////////////////////////////////
var resourceService: OData.IResourceService;
resourceClass = resourceService<IMyResource, IMyResourceClass>('test');
resourceClass = resourceService<IMyResource>('test');
resourceClass = resourceService('test');

///////////////////////////////////////
// IModule
///////////////////////////////////////
var mod: ng.IModule;
var resourceServiceFactoryFunction: OData.IResourceServiceFactoryFunction<IMyResource>;
var resourceService: OData.IResourceService;

resourceClass = resourceServiceFactoryFunction<IMyResourceClass>(resourceService);

resourceServiceFactoryFunction = function(resourceService: OData.IResourceService) { return <any>resourceClass; };
mod = mod.factory('factory name', resourceServiceFactoryFunction);

///////////////////////////////////////
// IResource
///////////////////////////////////////


///////////////////////////////////////
// IResourceServiceProvider
///////////////////////////////////////
var resourceServiceProvider: OData.IResourceServiceProvider;
resourceServiceProvider.defaults.stripTrailingSlashes = false;



///////////////////////////////////////
// OData
///////////////////////////////////////

interface User extends OData.IResource<User> {
	name: string;
}

var resourceService: OData.IResourceService;
var odataResourceClass = resourceService<User>("my/url", {}, {}, { odata: { method: 'POST' } });

var Value: OData.ValueFactory;
var Property: OData.PropertyFactory;
var Predicate: OData.PredicateFactory;

var users = odataResourceClass.odata().query();

users[0].name;
users[0].$save;
users[0].$update;

var user = odataResourceClass.odata()
	.filter(new Value("1", OData.ValueTypes.Int32), new Property("abc"))
	.filter("Name", "John")
	.filter("Age", ">", 20)
	.skip(10)
	.take(20)
	.orderBy("Name", "desc")
	.transformUrl((s)=>s)
	.single();
user.$save();

var predicate1 = new Predicate("a", "b");
var predicate2 = new Predicate("c", "d");
var predicate3 = new Predicate("Age", '>', 10);

var combination1 = Predicate.or([predicate1, predicate2]);
var combination2 = Predicate.and([combination1, predicate2]);

var predicate = new Predicate("FirstName", "John")
	.or(new Predicate("LastName", '!=', "Doe"))
	.and(new Predicate("Age", '>', 10));


users = odataResourceClass.odata()
	.withInlineCount()
	.query();


var countResult = odataResourceClass.odata().count();
var total = countResult.result;




var usersSelect1 = odataResourceClass.odata()
	.select('name', 'user');


var usersSelect2 = odataResourceClass.odata()
	.select(['name', 'user']);