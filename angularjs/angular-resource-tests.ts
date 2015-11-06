/// <reference path="angular-resource.d.ts" />

interface IMyResource extends angular.resource.IResource<IMyResource> { };
interface IMyResourceClass extends angular.resource.IResourceClass<IMyResource> { };

///////////////////////////////////////
// IActionDescriptor
///////////////////////////////////////
var actionDescriptor: angular.resource.IActionDescriptor;

angular.injector(['ng']).invoke(function ($cacheFactory: angular.ICacheFactoryService, $timeout: angular.ITimeoutService) {
    actionDescriptor.method = 'method action';
    actionDescriptor.params = { key: 'value' };
    actionDescriptor.url = '/api/test-url/';
    actionDescriptor.isArray = true;
    actionDescriptor.transformRequest = function () { };
    actionDescriptor.transformRequest = [function () { }];
    actionDescriptor.transformResponse = function () { };
    actionDescriptor.transformResponse = [function () { }];
    actionDescriptor.headers = { header: 'value' };
    actionDescriptor.cache = true;
    actionDescriptor.cache = $cacheFactory('cacheId');
    actionDescriptor.timeout = 1000;
    actionDescriptor.timeout = $timeout(function () { });
    actionDescriptor.withCredentials = true;
    actionDescriptor.responseType = 'response type';
    actionDescriptor.interceptor = { key: 'value' };
});


///////////////////////////////////////
// IResourceClass
///////////////////////////////////////
var resourceClass: IMyResourceClass;
var resource: IMyResource;
var resourceArray: angular.resource.IResourceArray<IMyResource>;

resource = resourceClass.delete();
resource = resourceClass.delete({ key: 'value' });
resource = resourceClass.delete({ key: 'value' }, function () { });
resource = resourceClass.delete(function () { });
resource = resourceClass.delete(function () { }, function () { });
resource = resourceClass.delete({ key: 'value' }, { key: 'value' });
resource = resourceClass.delete({ key: 'value' }, { key: 'value' }, function () { });
resource = resourceClass.delete({ key: 'value' }, { key: 'value' }, function () { }, function () { });
resource.$promise.then(function(data: IMyResource) {});

resource = resourceClass.get();
resource = resourceClass.get({ key: 'value' });
resource = resourceClass.get({ key: 'value' }, function () { });
resource = resourceClass.get(function () { });
resource = resourceClass.get(function () { }, function () { });
resource = resourceClass.get({ key: 'value' }, { key: 'value' });
resource = resourceClass.get({ key: 'value' }, { key: 'value' }, function () { });
resource = resourceClass.get({ key: 'value' }, { key: 'value' }, function () { }, function () { });

resourceArray = resourceClass.query();
resourceArray = resourceClass.query({ key: 'value' });
resourceArray = resourceClass.query({ key: 'value' }, function () { });
resourceArray = resourceClass.query(function () { });
resourceArray = resourceClass.query(function () { }, function () { });
resourceArray = resourceClass.query({ key: 'value' }, { key: 'value' });
resourceArray = resourceClass.query({ key: 'value' }, { key: 'value' }, function () { });
resourceArray = resourceClass.query({ key: 'value' }, { key: 'value' }, function () { }, function () { });
resourceArray.push(resource);
resourceArray.$promise.then(function(data: angular.resource.IResourceArray<IMyResource>) {});

resource = resourceClass.remove();
resource = resourceClass.remove({ key: 'value' });
resource = resourceClass.remove({ key: 'value' }, function () { });
resource = resourceClass.remove(function () { });
resource = resourceClass.remove(function () { }, function () { });
resource = resourceClass.remove({ key: 'value' }, { key: 'value' });
resource = resourceClass.remove({ key: 'value' }, { key: 'value' }, function () { });
resource = resourceClass.remove({ key: 'value' }, { key: 'value' }, function () { }, function () { });

resource = resourceClass.save();
resource = resourceClass.save({ key: 'value' });
resource = resourceClass.save({ key: 'value' }, function () { });
resource = resourceClass.save(function () { });
resource = resourceClass.save(function () { }, function () { });
resource = resourceClass.save({ key: 'value' }, { key: 'value' });
resource = resourceClass.save({ key: 'value' }, { key: 'value' }, function () { });
resource = resourceClass.save({ key: 'value' }, { key: 'value' }, function () { }, function () { });

///////////////////////////////////////
// IResource
///////////////////////////////////////

var promise : angular.IPromise<IMyResource>;
var arrayPromise : angular.IPromise<IMyResource[]>;

promise = resource.$delete();
promise = resource.$delete({ key: 'value' });
promise = resource.$delete({ key: 'value' }, function () { });
promise = resource.$delete(function () { });
promise = resource.$delete(function () { }, function () { });
promise = resource.$delete({ key: 'value' }, function () { }, function () { });
promise.then(function(data: IMyResource) {});

promise = resource.$get();
promise = resource.$get({ key: 'value' });
promise = resource.$get({ key: 'value' }, function () { });
promise = resource.$get(function () { });
promise = resource.$get(function () { }, function () { });
promise = resource.$get({ key: 'value' }, function () { }, function () { });

arrayPromise = resourceArray[0].$query();
arrayPromise = resourceArray[0].$query({ key: 'value' });
arrayPromise = resourceArray[0].$query({ key: 'value' }, function () { });
arrayPromise = resourceArray[0].$query(function () { });
arrayPromise = resourceArray[0].$query(function () { }, function () { });
arrayPromise = resourceArray[0].$query({ key: 'value' }, function () { }, function () { });
arrayPromise.then(function(data: angular.resource.IResourceArray<IMyResource>) {});

promise = resource.$remove();
promise = resource.$remove({ key: 'value' });
promise = resource.$remove({ key: 'value' }, function () { });
promise = resource.$remove(function () { });
promise = resource.$remove(function () { }, function () { });
promise = resource.$remove({ key: 'value' }, function () { }, function () { });

promise = resource.$save();
promise = resource.$save({ key: 'value' });
promise = resource.$save({ key: 'value' }, function () { });
promise = resource.$save(function () { });
promise = resource.$save(function () { }, function () { });
promise = resource.$save({ key: 'value' }, function () { }, function () { });

///////////////////////////////////////
// IResourceService
///////////////////////////////////////
var resourceService: angular.resource.IResourceService;
resourceClass = resourceService<IMyResource, IMyResourceClass>('test');
resourceClass = resourceService<IMyResource>('test');
resourceClass = resourceService('test');

///////////////////////////////////////
// IModule
///////////////////////////////////////
var mod: ng.IModule;
var resourceServiceFactoryFunction: angular.resource.IResourceServiceFactoryFunction<IMyResource>;
var resourceService: angular.resource.IResourceService;

resourceClass = resourceServiceFactoryFunction<IMyResourceClass>(resourceService);

resourceServiceFactoryFunction = function (resourceService: angular.resource.IResourceService) { return <any>resourceClass; };
mod = mod.factory('factory name', resourceServiceFactoryFunction);

///////////////////////////////////////
// IResource
///////////////////////////////////////


///////////////////////////////////////
// IResourceServiceProvider
///////////////////////////////////////
var resourceServiceProvider: angular.resource.IResourceServiceProvider;
resourceServiceProvider.defaults.stripTrailingSlashes = false;
