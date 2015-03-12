# AngularJS Definitions Usage Notes

## Referencing AngularJS definition files in your code

To do that, simply add `/// <reference path="angular.d.ts" />` at the top of your code.

That will make available to your code all interfaces AngularJS' main module **angular** implements, as well as the **AUTO** module.

If you are including other AngularJS' modules in your code, like **ngResource**, just like you needed to include the additional module implementation file in your code, _angular-resource.js_, you will also need to reference the definitions file related to that module. Your code would then have the following definitions files reference:

    /// <reference path="angular.d.ts" />
    /// <reference path="angular-resource.d.ts" />

Having these modules in separated files is actually good because they sometimes either augment or modify some of **ng**'s interfaces, and thus those differences should only be available to you when you really need them. Also, it forces you to explicit what you're going to be using.

The following extra definition files are available for referencing:

* angular-resource.d.ts (for the **ngResource** module)
* angular-route.d.ts (for the **ngRoute** module)
* angular-cookies.d.ts (for the **ngCookies** module)
* angular-sanitize.d.ts (for the **ngSanitize** module)
* angular-mocks.d.ts (for the **ngMock** and **ngMockE2E** modules)

(postfix with version number for specific verion, eg. angular-resource-1.0.d.ts)


## Definitions modularized

To avoid cluttering the list of suggestions as you type in your IDE, all interfaces reside in their respective module namespace:

* `angular` for AngularJS' **ng** module
* `angular.auto` for **AUTO**
* `angular.cookies` for **ngCookies**
* `angular.mock` for **ngMock**
* `angular.resource` for **ngResource**
* `angular.route` for **ngRoute**
* `angular.sanitize` for **ngSanitize**

**ngMockE2E** does not define a new namespace, but rather modifies some of **ng**'s interfaces.

Bellow is an example of how to use the interfaces:
```ts
function MainController($scope: angular.IScope, $http: angular.IHttpService) {
    // code assistance will now be available for $scope and $http
}
```

## Services and other injectables

AngularJS makes vast use of what it calls "injectable" functions. To put it simple, in AngularJS you are constantly annotating your functions and constructors with their dependencies, services that are going to be provided as arguments automagically during invocation.

All known services interfaces have been defined, and were named using the following convention:

**I + 'ServiceName' + 'Service'**

So, for instance, the **$parse** service has it's interface defined as **angular.IParseService**.

Service providers, by the same logic, follow this convention:

**I + 'ServiceName' + 'Provider'**

The **$httpProvider**, thus, is defined by **angular.IHttpProvider**.


## A word on $scope and assigning new members

TypeScript allows for static checking. Among other obvious things, that means you're gonna have to extend interfaces when you need to augment an object whose interface has been defined, because otherwise the compiler will see it as an error to try to assign a value to a unspecified member.

Consider the following ordinary code:
```ts
function Controller($scope) {
    $scope.$broadcast('myEvent');
    $scope.title = 'Yabadabadu';
}
```
That will not produce any compilation error because the compiler does not know the first thing about $scope to do any checking. For that same reason, you will not get any assistance either.

Now consider this:
```ts
function Controller($scope: angular.IScope) {
    $scope.$broadcast('myEvent');
    $scope.title = 'Yabadabadu';
}
```

Now we annotated `$scope` with the interface `angular.IScope`. The compiler now knows that, among other members, `$scope` has a method called `$broadcast`. That interface, however, does not define a `title` property. The compiler will complain about it.

Since you are augmenting the $scope object, you should let the compiler know what to expect then:
```ts
interface ICustomScope extends angular.IScope {
    title: string;
}

function Controller($scope: ICustomScope) {
    $scope.$broadcast('myEvent');
    $scope.title = 'Yabadabadu';
}
```

## Examples

### Working with $resource
```ts
/// <reference path="angular.d.ts" />
/// <reference path="angular-resource.d.ts" />

// We have the option to define arguments for a custom resource
interface IArticleParameters {
    id: number;
}

interface IArticleResource extends angular.resource.IResource<IArticleResource> {
    title: string;
    text: string;
    date: Date;
    author: number;

    // Although all actions defined on IArticleResourceClass are avaiable with
    // the '$' prefix, we have the choice to expose only what we will use
    $publish(): IArticleResource;
    $unpublish(): IArticleResource;
}

// Let's define a custom resource
interface IArticleResourceClass extends angular.resource.IResourceClass<IArticleResource> {
    // Overload get to accept our custom parameters
    get(): angular.resource.IResource;
    get(params: IArticleParameters, onSuccess: Function): IArticleResource;

    // Add our custom resource actions
    publish(): IArticleResource;
    publish(params: IArticleParameters): IArticleResource;
    unpublish(params: IArticleParameters): IArticleResource;
}

function MainController($resource: angular.resource.IResourceService) {

    // IntelliSense will provide IActionDescriptor interface and will validate
    // your assignment against it
    var publishDescriptor: angular.resource.IActionDescriptor;
    publishDescriptor = {
        method: 'GET',
        isArray: false
    };

    // I could still create a descriptor without the interface...
    var unpublishDescriptor = {
        method: 'POST'
    }

    // A call to the $resource service returns a IResourceClass. Since
    // our own IArticleResourceClass defines 2 more actions, we cast the return
    // value to make the compiler aware of that
    var articleResource = $resource<IArticleResource, IArticleResourceClass>('/articles/:id', null, {
        publish : publishDescriptor,
        unpublish : unpublishDescriptor
    });

    // Now we can do this
    articleResource.unpublish({ id: 1 });

    // IResourceClass.get() will be automatically available here
    var article: IArticleResource = articleResource.get({id: 1}, function success() {
        // Again, default + custom action here...
        article.title = 'New Title';
        article.$save();
        article.$publish();
    });
}
```

### Working with $resource in angular-1.0 definitions
```ts
/// <reference path="angular-1.0.d.ts" />
/// <reference path="angular-resource-1.0.d.ts" />

// Let's define a custom resource
interface IArticleResourceClass extends angular.resource.IResourceClass {
    publish: angular.resource.IActionCall;
    unpublish: angular.resource.IActionCall;
}
interface IArticleResource extends angular.resource.IResource {
    title: string;
    text: string;
    date: Date;
    author: number;
    $publish: angular.resource.IActionCall;
    $unpublish: angular.resource.IActionCall;
}

function MainController($resource: angular.resource.IResourceService) {

    // IntelliSense will provide IActionDescriptor interface and will validate
    // your assignment against it
    var publishDescriptor: angular.resource.IActionDescriptor;
    publishDescriptor = {
        method: 'GET',
        isArray: false
    };

    // I could still create a descriptor without the interface...
    var unpublishDescriptor = {
        method: 'POST'
    }

    // A call to the $resource service returns a IResourceClass. Since
    // our own IArticleResourceClass defines 2 more actions, we cast the return
    // value to make the compiler aware of that
    var articles = <IArticleResourceClass> $resource('/articles/:id', null, {
        publish : publishDescriptor,
        unpublish : unpublishDescriptor
    });

    // Now we can do this
    articles.unpublish({ id: 1 });

    // IResourceClass.get() will be automatically available here
    var article = <IArticleResource> articles.get({id: 1});

    // Again, default + custom action here...
    article.title = 'New Title';
    article.$save();
    article.$publish();

}
```
