/// <reference path="angular-resource.d.ts" />

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
var resourceClass: ng.resource.IResourceClass;
var resource: ng.resource.IResource;

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

resource = resourceClass.query();
resource = resourceClass.query({ key: 'value' });
resource = resourceClass.query({ key: 'value' }, function () { });
resource = resourceClass.query(function () { });
resource = resourceClass.query(function () { }, function () { });
resource = resourceClass.query({ key: 'value' }, { key: 'value' });
resource = resourceClass.query({ key: 'value' }, { key: 'value' }, function () { });
resource = resourceClass.query({ key: 'value' }, { key: 'value' }, function () { }, function () { });

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
// IModule
///////////////////////////////////////
var mod: ng.IModule;
var resourceServiceFactoryFunction: ng.resource.IResourceServiceFactoryFunction;
var resourceService: ng.resource.IResourceService;

resourceServiceFactoryFunction = function (resourceService) { return resourceClass };
mod = mod.factory('factory name', resourceServiceFactoryFunction);
