// Examples of working with resource, previously from the angular.d.ts. readme
// Working with $resource

// We have the option to define arguments for a custom resource
interface IArticleParameters {
    id: number;
}

interface IArticleResource extends ng.resource.IResource<IArticleResource> {
    title: string;
    text: string;
    date: Date;
    author: number;

    // Although all actions defined on IArticleResourceClass are available with
    // the '$' prefix, we have the choice to expose only what we will use
    $publish(): IArticleResource;
    $unpublish(): IArticleResource;
}

// Let's define a custom resource
interface IArticleResourceClass extends ng.resource.IResourceClass<IArticleResource> {
    // Overload get to accept our custom parameters
    get(): IArticleResource;
    get(params: IArticleParameters, onSuccess: Function): IArticleResource;

    // Add our custom resource actions
    publish(params?: IArticleParameters): IArticleResource;
    unpublish(params: IArticleParameters): IArticleResource;
}

function MainController($resource: ng.resource.IResourceService): void {
    // IntelliSense will provide IActionDescriptor interface and will validate
    // your assignment against it
    const publishDescriptor: ng.resource.IActionDescriptor = {
        method: 'GET',
        isArray: false
    };

    // A call to the $resource service returns a IResourceClass. Since
    // our own IArticleResourceClass defines 2 more actions, we cast the return
    // value to make the compiler aware of that
    const articleResource: IArticleResourceClass = $resource<IArticleResource, IArticleResourceClass>('/articles/:id', null, {
        publish : publishDescriptor,
        unpublish : {
            method: 'POST'
        }
    });

    // Now we can do this
    articleResource.unpublish({ id: 1 });

    // IResourceClass.get() will be automatically available here
    const article: IArticleResource = articleResource.get({id: 1}, function success(): void {
        // Again, default + custom action here...
        article.title = 'New Title';
        article.$save();
        article.$publish();
    });
}

import IHttpResponse = angular.IHttpResponse;

interface IMyData {}
interface IMyResource extends angular.resource.IResource<IMyResource> {}
interface IMyResourceClass extends angular.resource.IResourceClass<IMyResource> {}

///////////////////////////////////////
// IActionDescriptor
///////////////////////////////////////
let actionDescriptor: angular.resource.IActionDescriptor;

angular.injector(['ng']).invoke(function ($cacheFactory: angular.ICacheFactoryService) {
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
    actionDescriptor.withCredentials = true;
    actionDescriptor.responseType = 'response type';
    actionDescriptor.interceptor = {
        response() { return {} as IHttpResponse<IMyData>; },
        responseError() {}
    };
    actionDescriptor.cancellable = true;
    actionDescriptor.hasBody = true;
});

///////////////////////////////////////
// IResourceClass
///////////////////////////////////////
let resourceClass: IMyResourceClass;
let resource: IMyResource;
let resourceArray: angular.resource.IResourceArray<IMyResource>;

resource = resourceClass.delete();
resource = resourceClass.delete({ key: 'value' });
resource = resourceClass.delete({ key: 'value' }, function () { });
resource = resourceClass.delete(function () { });
resource = resourceClass.delete(function () { }, function () { });
resource = resourceClass.delete({ key: 'value' }, { key: 'value' });
resource = resourceClass.delete({ key: 'value' }, { key: 'value' }, function () { });
resource = resourceClass.delete({ key: 'value' }, { key: 'value' }, function () { }, function () { });
resource.$promise.then(function(data: IMyResource) {});
resource.$cancelRequest();

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

let promise: angular.IPromise<IMyResource>;
let arrayPromise: angular.IPromise<IMyResource[]>;
let json: IMyResource;

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

json    = resource.toJSON();

///////////////////////////////////////
// IResourceService
///////////////////////////////////////
let resourceService: angular.resource.IResourceService;
resourceClass = resourceService<IMyResource, IMyResourceClass>('test');
resourceClass = resourceService<IMyResource>('test');
resourceClass = resourceService('test');

///////////////////////////////////////
// IModule
///////////////////////////////////////
let mod: ng.IModule;
let resourceServiceFactoryFunction: angular.resource.IResourceServiceFactoryFunction<IMyResource>;

resourceClass = resourceServiceFactoryFunction<IMyResourceClass>(resourceService);

resourceServiceFactoryFunction = function (resourceService: angular.resource.IResourceService) { return resourceClass as any; };
mod = mod.factory('factory name', resourceServiceFactoryFunction);

///////////////////////////////////////
// IResource
///////////////////////////////////////

///////////////////////////////////////
// IResourceServiceProvider
///////////////////////////////////////
let resourceServiceProvider: angular.resource.IResourceServiceProvider;
resourceServiceProvider.defaults.stripTrailingSlashes = false;
