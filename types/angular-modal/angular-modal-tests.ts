var btfModal: angularModal.AngularModalFactory;

// Using template URL
function withTemplateUrl() {
    btfModal({
        controller: 'SomeController',
        controllerAs: 'vm',
        templateUrl: 'some-template.html'
    });
}

// Using template
function withTemplate() {
    btfModal({
        controller: 'SomeController',
        controllerAs: 'vm',
        template: '<div></div>'
    });
}

// Using controller function
function withControllerAsFunction() {
    btfModal({
        controller: function () {},
        template: '<div></div>'
    })
}

// Using constructor function
function withControllerClass() {
    class TestController {
        constructor(dependency1:any, dependency2:any) {}
    }
    btfModal({
        controller: TestController,
        template: '<div></div>'
    });
}

// With container as selector
function withContainerAsString() {
    btfModal({
        template: '<div></div>',
        container: '.container'
    });
}

// With container as jQuery/JQLite element
function withContainerAsJquery() {
    var container: JQuery = angular.element('body');
    btfModal({
        template: '<div></div>',
        container: container
    });
}

// With container as DOM Element
function withContainerAsDom() {
    var container: Element = document.getElementById('container');
    btfModal({
        template: '<div></div>',
        container: container
    });
}

// With container as DOM Element Array
function withContainerAsDomArray() {
    var container: Element[] = [document.getElementById('container'), document.getElementById('container2')];
    btfModal({
        template: '<div></div>',
        container: container
    });
}

// With container as function
function withContainerAsFunction() {
    btfModal({
        template: '<div></div>',
        container: function() {}
    });
}

// With container as array
function withContainerAsArray() {
    btfModal({
        template: '<div></div>',
        container: ['1', 2]
    });
}

// Calling return values
function callingValues() {
    var modal: angularModal.AngularModal = btfModal({
        template: '<div></div>'
    });
    modal.activate().then(() => {}, () => {});
    // activating with random locals
    modal.activate({name: 'TestName'}).then(() => {}, () => {});
    // activating with genericly typed locals
    modal.activate<{name: string}>({name: 'TestName'}).then(() => {}, () => {});
    modal.deactivate().then(() => {}, () => {});
    var isActive: boolean = modal.active();
}

