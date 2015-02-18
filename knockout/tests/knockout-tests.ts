/// <reference path="../knockout.d.ts" />
/// <reference path="../../knockout.mapping/knockout.mapping.d.ts" />

declare var $;

function test_creatingVMs() {
    var myViewModel = {
        personName: ko.observable('Bob'),
        personAge: ko.observable(123)
    };
    ko.applyBindings(myViewModel);
    ko.applyBindings(myViewModel, document.getElementById('someElementId'));

    myViewModel.personName();
    myViewModel.personName('Mary');
    myViewModel.personAge(50);

    myViewModel.personName.subscribe(function (newValue) {
        alert("The person's new name is " + newValue);
    });

    var subscription = myViewModel.personName.subscribe(function (newValue) { });
    subscription.dispose();
}

function test_computed() {
    function AppViewModel() {
        var self = this;

        self.firstName = ko.observable('Bob');
        self.lastName = ko.observable('Smith');
        self.fullName = ko.computed(function () {
            return self.firstName() + " " + self.lastName();
        });
    }

    function MyViewModel() {
        this.firstName = ko.observable('Planet');
        this.lastName = ko.observable('Earth');

        this.fullName = ko.computed<string>({
            read: function () {
                return this.firstName() + " " + this.lastName();
            },
            write: function (value) {
                var lastSpacePos = value.lastIndexOf(" ");
                if (lastSpacePos > 0) {
                    this.firstName(value.substring(0, lastSpacePos));
                    this.lastName(value.substring(lastSpacePos + 1));
                }
            },
            owner: this
        });
    }

    function MyViewModel1() {
        this.price = ko.observable(25.99);

        this.formattedPrice = ko.computed<string>({
            read: function () {
                return '$' + this.price().toFixed(2);
            },
            write: function (value) {
                var num = parseFloat(value.replace(/[^\.\d]/g, ""));
                this.price(isNaN(num) ? 0 : num);
            },
            owner: this
        });
    }

    function MyViewModel2() {
        this.acceptedNumericValue = ko.observable(123);
        this.lastInputWasValid = ko.observable(true);

        this.attemptedValue = ko.computed<number>({
            read: this.acceptedNumericValue,
            write: function (value) {
                if (isNaN(value))
                    this.lastInputWasValid(false);
                else {
                    this.lastInputWasValid(true);
                    this.acceptedNumericValue(value);
                }
            },
            owner: this
        });
    }

    ko.applyBindings(new MyViewModel());
}

class GetterViewModel {
    private _selectedRange: KnockoutObservable<any>;

    constructor() {
        this._selectedRange = ko.observable();
    }

    public range: KnockoutObservable<any>;
}

function testGetter() {
    var model = new GetterViewModel();

    model.range.subscribe((range: number) => {
    });
}

function test_observableArrays() {
    var myObservableArray = ko.observableArray<any>();
    myObservableArray.push('Some value');
    var anotherObservableArray = ko.observableArray([
        { name: "Bungle", type: "Bear" },
        { name: "George", type: "Hippo" },
        { name: "Zippy", type: "Unknown" }
    ]);

    myObservableArray().length;
    myObservableArray()[0];

    myObservableArray.indexOf('Blah');
    myObservableArray.push('Some new value');
    myObservableArray.pop();
    myObservableArray.unshift('Some new value');
    myObservableArray.shift();
    myObservableArray.reverse();
    myObservableArray.sort(function (left, right) { return left == right ? 0 : (left < right ? -1 : 1) });
    myObservableArray.splice(1, 3);

    myObservableArray.remove('Blah');
    myObservableArray.remove(function (item) { return item.age < 18 });
    myObservableArray.removeAll(['Chad', 132, undefined]);
    myObservableArray.removeAll();
    myObservableArray.destroy('Blah');
    myObservableArray.destroy(function (someItem) { return someItem.age < 18 });
    myObservableArray.destroyAll(['Chad', 132, undefined]);
    myObservableArray.destroyAll();

    ko.utils.arrayForEach(myObservableArray(), function (item) { });
}

// You have to extend knockout for your own handlers
interface KnockoutBindingHandlers {
    yourBindingName: KnockoutBindingHandler;
    slideVisible: KnockoutBindingHandler;
    hasFocus: KnockoutBindingHandler;
    allowBindings: KnockoutBindingHandler;
    withProperties: KnockoutBindingHandler;
    randomOrder: KnockoutBindingHandler;
}

function test_bindings() {
    var currentProfit = ko.observable(150000);
    ko.applyBindings({
        people: [
            { firstName: 'Bert', lastName: 'Bertington' },
            { firstName: 'Charles', lastName: 'Charlesforth' },
            { firstName: 'Denise', lastName: 'Dentiste' }
        ]
    });
    var viewModel = { availableCountries: ko.observableArray(['France', 'Germany', 'Spain']) };
    viewModel.availableCountries.push('China');

    ko.bindingHandlers.yourBindingName = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        },
        update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        }
    };
    ko.bindingHandlers.slideVisible = {
        update: function (element, valueAccessor, allBindingsAccessor) {
            var value = valueAccessor(), allBindings = allBindingsAccessor();
            var valueUnwrapped = ko.utils.unwrapObservable(value);
            var duration = allBindings.slideDuration || 400;
            if (valueUnwrapped == true)
                $(element).slideDown(duration);
            else
                $(element).slideUp(duration);
        },
        init: function (element, valueAccessor) {
            var value = ko.utils.unwrapObservable(valueAccessor());
            $(element).toggle(value);
        }
    };
    ko.bindingHandlers.hasFocus = {
        init: function (element, valueAccessor) {
            $(element).focus(function () {
                var value = valueAccessor();
                value(true);
            });
            $(element).blur(function () {
                var value = valueAccessor();
                value(false);
            });
        },
        update: function (element, valueAccessor) {
            var value = valueAccessor();
            if (ko.utils.unwrapObservable(value))
                element.focus();
            else
                element.blur();
        }
    };
    ko.bindingHandlers.allowBindings = {
        init: function (elem, valueAccessor) {
            var shouldAllowBindings = ko.utils.unwrapObservable(valueAccessor());
            return { controlsDescendantBindings: !shouldAllowBindings };
        }
    };
    ko.bindingHandlers.withProperties = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var newProperties = valueAccessor(),
                innerBindingContext = bindingContext.extend(newProperties);
            ko.applyBindingsToDescendants(innerBindingContext, element);
            return { controlsDescendantBindings: true };
        }
    };
    ko.bindingHandlers.withProperties = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var newProperties = valueAccessor(),
                childBindingContext = bindingContext.createChildContext(viewModel);
            ko.utils.extend(childBindingContext, newProperties);
            ko.applyBindingsToDescendants(childBindingContext, element);
            return { controlsDescendantBindings: true };
        }
    };
    ko.bindingHandlers.randomOrder = {
        init: function (elem, valueAccessor) {
            var child = ko.virtualElements.firstChild(elem),
                childElems = [];
            while (child) {
                childElems.push(child);
                child = ko.virtualElements.nextSibling(child);
            }
            ko.virtualElements.emptyNode(elem);
            while (childElems.length) {
                var randomIndex = Math.floor(Math.random() * childElems.length),
                    chosenChild = childElems.splice(randomIndex, 1);
                ko.virtualElements.prepend(elem, chosenChild[0]);
            }
        }
    };

    var node, containerElem, nodeToInsert, insertAfter, nodeToPrepend, arrayOfNodes;
    ko.virtualElements.emptyNode(containerElem);
    ko.virtualElements.firstChild(containerElem);
    ko.virtualElements.insertAfter(containerElem, nodeToInsert, insertAfter);
    ko.virtualElements.nextSibling(node);
    ko.virtualElements.prepend(containerElem, nodeToPrepend);
    ko.virtualElements.setDomNodeChildren(containerElem, arrayOfNodes);
}

// Have to define your own extenders
interface KnockoutExtenders {
    logChange(target, option);
    numeric(target, precision);
    required(target, overrideMessage);
}

interface KnockoutObservableArrayFunctions<T> {
    filterByProperty(propName, matchValue): KnockoutComputed<any>;
}

declare var validate;

function test_more() {
    var viewModel = {
        firstName: ko.observable("Bert"),
        lastName: ko.observable("Smith"),
        pets: ko.observableArray(["Cat", "Dog", "Fish"]),
        type: "Customer",
        hasALotOfPets: <any>null
    };
    viewModel.hasALotOfPets = ko.computed(function () {
        return this.pets().length > 2
    }, viewModel);
    var plainJs = ko.toJS(viewModel);

    ko.extenders.logChange = function (target, option) {
        target.subscribe(function (newValue) {
            console.log(option + ": " + newValue);
        });
        return target;
    };

    ko.extenders.numeric = function (target, precision) {
        var result = ko.computed<any>({
            read: target,
            write: function (newValue) {
                var current = target(),
                    roundingMultiplier = Math.pow(10, precision),
                    newValueAsNum = isNaN(newValue) ? 0 : parseFloat(newValue),
                    valueToWrite = Math.round(newValueAsNum * roundingMultiplier) / roundingMultiplier;

                if (valueToWrite !== current) {
                    target(valueToWrite);
                } else {
                    if (newValue !== current) {
                        target.notifySubscribers(valueToWrite);
                    }
                }
            }
        });

        result(target());

        return result;
    };

    function AppViewModel(one, two) {
        this.myNumberOne = ko.observable(one).extend({ numeric: 0 });
        this.myNumberTwo = ko.observable(two).extend({ numeric: 2 });
    }

    ko.applyBindings(new AppViewModel(221.2234, 123.4525));

    ko.extenders.required = function (target, overrideMessage) {

        target.hasError = ko.observable();
        target.validationMessage = ko.observable();

        function validate(newValue) {
            target.hasError(newValue ? false : true);
            target.validationMessage(newValue ? "" : overrideMessage || "This field is required");
        }

        validate(target());

        target.subscribe(validate);

        return target;
    };

    function AppViewModel2(first, last) {
        this.firstName = ko.observable(first).extend({ required: "Please enter a first name" });
        this.lastName = ko.observable(last).extend({ required: "" });
    }

    ko.applyBindings(new AppViewModel2("Bob", "Smith"));

    var first;
    this.firstName = ko.observable(first).extend({ required: "Please enter a first name", logChange: "first name" });

    var upperCaseName = ko.computed(function () {
        return name.toUpperCase();
    }).extend({ throttle: 500 });

    function AppViewModel3() {
        this.instantaneousValue = ko.observable();
        this.throttledValue = ko.computed(this.instantaneousValue)
                                .extend({ throttle: 400 });

        this.loggedValues = ko.observableArray([]);
        this.throttledValue.subscribe(function (val) {
            if (val !== '')
                this.loggedValues.push(val);
        }, this);
    }

    function GridViewModel() {
        this.pageSize = ko.observable(20);
        this.pageIndex = ko.observable(1);
        this.currentPageData = ko.observableArray();

        ko.computed(function () {
            var params = { page: this.pageIndex(), size: this.pageSize() };
            $.getJSON('/Some/Json/Service', params, this.currentPageData);
        }, this);
    }
    this.setPageSize = function (newPageSize) {
        this.pageSize(newPageSize);
        this.pageIndex(1);
    }

    ko.computed(function () {
        var params = { page: this.pageIndex(), size: this.pageSize() };
        $.getJSON('/Some/Json/Service', params, this.currentPageData);
    }, this).extend({ throttle: 1 });

    $(".remove").click(function () {
        viewModel.pets.remove(ko.dataFor(this));
    });
    $(".remove").live("click", function () {
        viewModel.pets.remove(ko.dataFor(this));
    });

    $("#people").delegate(".remove", "click", function () {

        var context = ko.contextFor(this),
            parentArray = context.$parent.people || context.$parent.children;

        parentArray.remove(context.$data);

        return false;
    });
    $("#people").delegate(".add", "click", function () {
        var context = ko.contextFor(this),
            childName = context.$data.name() + " child",
            parentArray = context.$data.people || context.$data.children;

        context.$root.addChild(childName, parentArray);

        return false;
    });
    ko.observableArray.fn.filterByProperty = function (propName, matchValue) {
        return ko.computed(function () {
            var allItems = this(), matchingItems = [];
            for (var i = 0; i < allItems.length; i++) {
                var current = allItems[i];
                if (ko.utils.unwrapObservable(current[propName]) === matchValue)
                    matchingItems.push(current);
            }
            return matchingItems;
        }, this);
    }
    function Task(title, done) {
        this.title = ko.observable(title);
        this.done = ko.observable(done);
    }

    function AppViewModel4() {
        this.tasks = ko.observableArray([
            new Task('Find new desktop background', true),
            new Task('Put shiny stickers on laptop', false),
            new Task('Request more reggae music in the office', true)
        ]);

        this.doneTasks = this.tasks.filterByProperty("done", true);
    }

    ko.applyBindings(new AppViewModel4());
    this.doneTasks = ko.computed(function () {
    var all = this.tasks(), done = [];
        for (var i = 0; i < all.length; i++)
            if (all[i].done())
                done.push(all[i]);
        return done;
    }, this);
}

function test_mappingplugin() {
    var viewModel0 = {
        serverTime: ko.observable(),
        numUsers: ko.observable()
    }
    var data = {
        serverTime: '2010-01-07',
        numUsers: 3
    };
    viewModel0.serverTime(data.serverTime);
    viewModel0.numUsers(data.numUsers);

    var viewModel = ko.mapping.fromJS(data);
    ko.mapping.fromJS(data, viewModel);
    var unmapped = ko.mapping.toJS(viewModel);

    var viewModel = ko.mapping.fromJS(data);
    ko.mapping.fromJS(data, viewModel);

    var myChildModel = function (data) {
        ko.mapping.fromJS(data, {}, this);

        this.nameLength = ko.computed(function () {
            return this.name().length;
        }, this);
    }

    var oldOptions = ko.mapping.defaultOptions().include;
    ko.mapping.defaultOptions().include = ["alwaysIncludeThis"];

    var oldOptions = ko.mapping.defaultOptions().copy;
    ko.mapping.defaultOptions().copy = ["alwaysCopyThis"];

    var someObject;
    ko.mapping.fromJS(data, {}, someObject);
    ko.mapping.fromJS(data, {}, this);

    var alice, aliceMappingOptions, bob, bobMappingOptions;
    var viewModel = ko.mapping.fromJS(alice, aliceMappingOptions);
    ko.mapping.fromJS(bob, bobMappingOptions, viewModel);

    var obj;
    var result = ko.mapping.fromJS(obj, {
        key: function (item) {
            return ko.utils.unwrapObservable(item.id);
        }
    });

    result.mappedRemove({ id: 2 });
    var newItem = result.mappedCreate({ id: 3 });
}

// Define your own functions
interface KnockoutSubscribableFunctions<T> {
    publishOn(topic: string): any;
    subscribeTo(topic: string): any;
}

interface KnockoutBindingHandlers {
    isolatedOptions: KnockoutBindingHandler;
}

function test_misc() {
    // define dummy vars
    var callback: any;
    var target: any;
    var topic: any;
    var vm: any;
    var value: any;

    var postbox = new ko.subscribable();
    postbox.subscribe(callback, target, topic);

    postbox.subscribe(function (newValue) {
        this.latestTopic(newValue);
    }, vm, "mytopic");
    postbox.notifySubscribers(value, "mytopic");

    ko.subscribable.fn.publishOn = function (topic) {
        this.subscribe(function (newValue) {
            postbox.notifySubscribers(newValue, topic);
        });

        return this;
    };

    this.myObservable = <KnockoutObservable<string>>ko.observable("myValue").publishOn("myTopic");

    ko.subscribable.fn.subscribeTo = function (topic) {
        postbox.subscribe(this, null, topic);

        return this;
    };

    this.observableFromAnotherVM = <KnockoutObservable<any>>ko.observable().subscribeTo("myTopic");

    postbox.subscribe(function (newValue) {
        this(newValue);
    }, this, topic);

    ko.bindingHandlers.isolatedOptions = {
        init: function (element, valueAccessor) {
            var args = arguments;
            ko.computed({
                read: function () {
                    ko.utils.unwrapObservable(valueAccessor());
                    ko.bindingHandlers.options.update.apply(this, args);
                },
                owner: this,
                disposeWhenNodeIsRemoved: element
            });
        }
    };

    ko.subscribable.fn.publishOn = function (topic) {
        this.subscribe(function (newValue) {
            postbox.notifySubscribers(newValue, topic);
        });

        return this;
    };

    this.myObservable = ko.observable("myValue").publishOn("myTopic");

    var x = ko.observableArray([1, 2, 3]);

    var element;
    ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
        $(element).datepicker("destroy");
    });
	
	this.observableFactory = function(): KnockoutObservable<number>{
	    if (true) {
			return ko.computed({
				read:function(){ 
					return 3; 
				}
			});
		} else {
			return ko.observable(3);
		}
	}
	
}

interface KnockoutBindingHandlers {
    allBindingsAccessorTest: KnockoutBindingHandler;
}

function test_allBindingsAccessor() {
    ko.bindingHandlers.allBindingsAccessorTest = {
        init: (element: any, valueAccessor: () => any, allBindingsAccessor: KnockoutAllBindingsAccessor, viewModel: any, bindingContext: KnockoutBindingContext) => {
            var allBindings = allBindingsAccessor();
            var hasBinding = allBindingsAccessor.has("myBindingName");
            var myBinding = allBindingsAccessor.get("myBindingName");
            var fnAccessorBinding = allBindingsAccessor().myBindingName;
        },
        update: (element: any, valueAccessor: () => any, allBindingsAccessor: KnockoutAllBindingsAccessor, viewModel: any, bindingContext: KnockoutBindingContext) => {
            var allBindings = allBindingsAccessor();
            var hasBinding = allBindingsAccessor.has("myBindingName");
            var myBinding = allBindingsAccessor.get("myBindingName");
            var fnAccessorBinding = allBindingsAccessor().myBindingName;
        }
    };
}

function test_Components() {

    function test_Register() {
        // test all possible ko.components.register() overloads
        var nodeArray = [new Node, new Node];
        var singleNode = new Node;

        // ------- string-templates with different viewmodel overloads:

        // string template and inline function (commonly used in examples)
        ko.components.register("name", { template: "string-template", viewModel: function (params) { return null; } });

        // string template and instance vm
        ko.components.register("name", { template: "string-template", viewModel: { instance: null } });

        // string template and createViewModel factory method
        ko.components.register("name", { template: "string-template", viewModel: { createViewModel: function (params: any, componentInfo: KnockoutComponentInfo) { return null; } } });

        // string template and require module vm
        ko.components.register("name", { template: "string-template", viewModel: { require: "module" } });

        // ------- non-string templates 

        // viewmodel as function and four types of template
        ko.components.register("name", { template: { element: "elementID" }, viewModel: function (params) { return null; } });
        // Node template for element and inline function (commonly used in examples)
        ko.components.register("name", { template: { element: singleNode }, viewModel: function (params) { return null; } });
        // object template for element and inline function (commonly used in examples)
        ko.components.register("name", { template: nodeArray, viewModel: function (params) { return null; } });
        // object template for element and inline function (commonly used in examples)
        ko.components.register("name", { template: { require: "module" }, viewModel: function (params) { return null; } });

        // viewmodel as object, and four types of non-string tempalte
        ko.components.register("name", { template: { element: "elementID" }, viewModel: { instance: null } });
        // Node template for element and inline function (commonly used in examples)
        ko.components.register("name", { template: { element: singleNode }, viewModel: { instance: null } });
        // object template for element and inline function (commonly used in examples)
        ko.components.register("name", { template: nodeArray, viewModel: { instance: null } });
        // object template for element and inline function (commonly used in examples)
        ko.components.register("name", { template: { require: "module" }, viewModel: { instance: null } });

        // Empty config for registering custom elements that are handled by name convention
		ko.components.register('name', { /* No config needed */ });
    }
}

function testUnwrapUnion() {
    
    var possibleObs: KnockoutObservable<number> | number;
    var num = ko.unwrap(possibleObs);

}