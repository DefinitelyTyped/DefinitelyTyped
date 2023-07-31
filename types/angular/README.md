# AngularJS Definitions Usage Notes

## Referencing AngularJS definition files in your code

Read the [TypeScript handbook](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html) for details on consuming these type definitions.

If you are including other AngularJS' modules in your code, like **ngResource**, just like you needed to include the additional module implementation file in your code, _angular-resource.js_, you will also need to reference the definitions file related to that module. Your code would then have the following definitions files reference:




Having these modules in separated packages is actually good because they sometimes either augment or modify some of **ng**'s interfaces, and thus those differences should only be available to you when you really need them. Also, it forces you to explicit what you're going to be using.

The following extra definition files are available for referencing:

* angular-resource/index.d.ts (for the **ngResource** module)
* angular-route/index.d.ts (for the **ngRoute** module)
* angular-cookies/index.d.ts (for the **ngCookies** module)
* angular-sanitize/index.d.ts (for the **ngSanitize** module)
* angular-animate/index.d.ts (for the **ngAnimate** module)
* angular-mocks/index.d.ts (for the **ngMock** and **ngMockE2E** modules)

## The Angular Static

The definitions declare the AngularJS static variable `angular` as ambient. That means that, after referencing the AngularJS definition, you will be able to get type checks and code assistance for the global `angular` member.


## Definitions modularized

To avoid cluttering the list of suggestions as you type in your IDE, all interfaces reside in their respective module namespace after you include their respective definitions:

* `ng` for AngularJS' **ng** module
* `ng.auto` for **AUTO**
* `ng.cookies` for **ngCookies**
* `ng.mock` for **ngMock**
* `ng.resource` for **ngResource**
* `ng.route` for **ngRoute**
* `ng.sanitize` for **ngSanitize**
* `ng.animate` for **ngAnimate**

**ngMockE2E** does not define a new namespace, but rather modifies some of **ng**'s interfaces.

Below is an example of how to use the interfaces:
```ts
function MainController($scope: ng.IScope, $http: ng.IHttpService) {
    // code assistance will now be available for $scope and $http
}
```

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
```ts
function Controller($scope) {
    $scope.$broadcast('myEvent');
    $scope.title = 'Yabadabadu';
}
```
That will not produce any compilation error because the compiler does not know the first thing about $scope to do any checking. For that same reason, you will not get any assistance either.

Now consider this:
```ts
function Controller($scope: ng.IScope) {
    $scope.$broadcast('myEvent');
    $scope.title = 'Yabadabadu';
}
```

Now we annotated `$scope` with the interface `ng.IScope`. The compiler now knows that, among other members, `$scope` has a method called `$broadcast`. That interface, however, does not define a `title` property. The compiler will complain about it.

Since you are augmenting the $scope object, you should let the compiler know what to expect then:
```ts
interface ICustomScope extends ng.IScope {
    title: string;
}

function Controller($scope: ICustomScope) {
    $scope.$broadcast('myEvent');
    $scope.title = 'Yabadabadu';
}
```

## Examples

