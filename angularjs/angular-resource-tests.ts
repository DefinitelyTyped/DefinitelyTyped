/// <reference path="angular-resource.d.ts" />

interface IMyResource extends ng.resource.IResource<IMyResource> { };
interface IMyResourceClass extends ng.resource.IResourceClass<IMyResource> { };

///////////////////////////////////////
// IActionDescriptor
///////////////////////////////////////
var actionDescriptor: ng.resource.IActionDescriptor;

actionDescriptor.headers = { header: 'value' };
actionDescriptor.isArray = true;
actionDescriptor.method = 'method action';
actionDescriptor.params = { key: 'value' };


///////////////////////////////////////
// IResourceClass
///////////////////////////////////////
var resourceClass: IMyResourceClass;
var resource: IMyResource;
var resourceArray: IMyResource[];

resource = resourceClass.delete();
resource = resourceClass.delete({ key: 'value' });
resource = resourceClass.delete({ key: 'value' }, function () { });
resource = resourceClass.delete(function () { });
resource = resourceClass.delete(function () { }, function () { });
resource = resourceClass.delete({ key: 'value' }, { key: 'value' });
resource = resourceClass.delete({ key: 'value' }, { key: 'value' }, function () { });
resource = resourceClass.delete({ key: 'value' }, { key: 'value' }, function () { }, function () { });

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
// IResourceService
///////////////////////////////////////
var resourceService: ng.resource.IResourceService;
resourceClass = resourceService<IMyResource, IMyResourceClass>('test');
resourceClass = resourceService<IMyResource>('test');
resourceClass = resourceService('test');

///////////////////////////////////////
// IModule
///////////////////////////////////////
var mod: ng.IModule;
var resourceServiceFactoryFunction: ng.resource.IResourceServiceFactoryFunction<IMyResource>;
var resourceService: ng.resource.IResourceService;

resourceClass = resourceServiceFactoryFunction<IMyResourceClass>(resourceService);

resourceServiceFactoryFunction = function (resourceService: ng.resource.IResourceService) { return <any>resourceClass; };
mod = mod.factory('factory name', resourceServiceFactoryFunction);
