# AngularJS Definitions Usage Notes

## Referencing AngularJS definition files in your code

To do that, simply add `/// <reference path="angular-1.0.d.ts" />` at the top of your code.

That will make available to your code all interfaces AngularJS' main module **ng** implements, as well as the **AUTO** module.

If you are including other AngularJS' modules in your code, like **ngResource**, just like you needed to include the additional module implementation file in your code, _angular-resource.js_, you will also need to reference the definitions file related to that module. Your code would then have the following definitions files reference:

    /// <reference path="angular-1.0.d.ts" />
    /// <reference path="angular-resource-1.0.d.ts" />

Having these modules in separated files is actually good because they sometimes either augment or modify some of **ng**'s interfaces, and thus those differences should only be available to you when you really need them. Also, it forces you to explicit what you're going to be using.

The following extra definition files are available for referencing:

* angular-resource-1.0.d.ts (for the **ngResource** module)
* angular-cookies-1.0.d.ts (for the **ngCookies** module)
* angular-sanitize-1.0.d.ts (for the **ngSanitize** module)
* angular-mocks-1.0.d.ts (for the **ngMock** and **ngMockE2E** modules)


## The Angular Static

The definitions declare the AngularJS static variable `angular` as ambient. That means that, after referencing the AngularJS definition, you will be able to get type checks and code assistance for the global `angular` member.


## Definitions modularized

To avoid cluttering the list of suggestions as you type in your IDE, all interfaces reside in their respective module namespace:

* `ng` for AngularJS' **ng** module
* `ng.auto` for **AUTO**
* `ng.cookies` for **ngCookies**
* `ng.mock` for **ngMock**
* `ng.resource` for **ngResource**
* `ng.sanitize` for **ngSanitize**

**ngMockE2E** does not define a new namespace, but rather modifies some of **ng**'s interfaces.

Bellow is an example of how to use the interfaces:

    function MainController($scope: ng.IScope, $http: ng.IHttpService) {
        // code assistance will now be available for $scope and $http
    }


## Services and other injectables

AngularJS makes vast use of what it calls "injectable" functions. To put it simple, in AngularJS you are constantly annotating your functions and constructors with their dependencies, services that are going to be provided as arguments automagically during invocation.

All known services interfaces have been defined, and were named using the following convention:

**I + 'ServiceName' + 'Service'**

So, for instance, the **$parse** service has it's interface defined as **ng.IParseService**.

Service providers, by the same logic, follow this convention:

**I + 'ServiceName' + 'Provider'**

The **$httpProvider**, thus, is defined by **ng.IHttpProvider**.


## A word on $scope and assigning new members

TypeScript allows for static checking. Among other obvious things, that means you're gonna have to extend interfaces when you need to augment an object whose interface has been defined, because otherwise the compiler will see it as an error to try to assign a value to a unspecified member.

Consider the following ordinary code:

    function Controller($scope) {        
        $scope.$broadcast('myEvent');
        $scope.title = 'Yabadabadu';
    }

That will not produce any compilation error because the compiler does not know the first thing about $scope to do any checking. For that same reason, you will not get any assistance either.

Now consider this:

    function Controller($scope: ng.IScope) {
        $scope.$broadcast('myEvent');
        $scope.title = 'Yabadabadu';
    }

Now we annotated `$scope` with the interface `ng.IScope`. The compiler now knows that, among other members, `$scope` has a method called `$broadcast`. That interface, however, does not define a `title` property. The compiler will complain about it.

Since you are augmenting the $scope object, you should let the compiler know what to expect then:

    interface ICustomScope extends ng.IScope {
        title: string;
    }
    
    function Controller($scope: ng.ICustomScope) {
        $scope.$broadcast('myEvent');
        $scope.title = 'Yabadabadu';
    }

## Exemples

### Working with $resource

    /// <reference path="angular-1.0.d.ts" />
    /// <reference path="angular-resource-1.0.d.ts" />

    // Let's define a custom resource
    interface IArticleResourceClass extends ng.resource.IResourceClass {
        publish: ng.resource.IActionCall;
        unpublish: ng.resource.IActionCall;
    }
    interface IArticleResource extends ng.resource.IResource {
        title: string;
        text: string;
        date: Date;
        author: number;
        $publish: ng.resource.IActionCall;
        $unpublish: ng.resource.IActionCall;
    }

    function MainController($resource: ng.resource.IResourceService) {
                
        // IntelliSense will provide IActionDescriptor interface and will validate
        // your assignment against it
        var publishDescriptor: ng.resource.IActionDescriptor;
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