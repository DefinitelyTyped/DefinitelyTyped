function test_overview() {
    /*Bliss includes several static methods (on the Bliss or $ object). For example, to copy all properties of an object onto another object, you would
    call $.extend():*/
    var yolo = $.extend({ foo: 1 }, { bar: 2 });

    var element = $.create();

    /*Many of Bliss’ methods take an element or an array of elements as their first argument. For example, to set both the width and padding of an element to 0,
    you could use the $.style() method:*/
    $.style(element, { width: 0, padding: 0 });

    /*These types of methods are also available on elements and arrays, for convenience. However, since adding convenience methods to elements and arrays directly
    would be a JS Mortal Sin™, Bliss only adds a _ property on elements & arrays, on which it hangs all its methods, to avoid conflicts. The previous example would
    be written as: */
    element._.style({
        "width": 0,
        "padding": 0
    });

    /* Bliss.$() method */
    var my$$ = $.$;

    var myArray = $$("div");
    /*The ._. sequence of characters that appears all too often when coding with Bliss is where Bliss gets its logo from. However, the property can be
    customized to anything you want.

    Methods that are available on elements like this will have an ELEMENT tag in these docs.

    If you wanted to set the width and padding of multiple elements to 0, you could use an array:*/
    myArray._.style({
        "width": 0,
        "padding": 0
    });

    /*Methods that are available on arrays like this will have an ARRAY tag in these docs.

    /*For example, assume that in addition to these CSS changes you also wanted to add a hidden attribute to this element. Bliss methods that don’t return a value
    return the element or array they are called on, so you could call more element methods on them, including native ones:*/
    element._.style({
        "width": 0,
        "padding": 0
    }).setAttribute("hidden", "");

    /*Now assume you also wanted to set a second attribute: The "class" attribute to "foo". The native setAttribute() method is not chainable, it returns undefined.
    However, all native element methods are also available on the almighty _ property, and there they are also chainable:*/
    element._.style({
    "width": 0,
    "padding": 0
    })._.setAttribute("hidden", "").setAttribute("class", "foo");

    //This works, but it’s a bit unwieldy. Thankfully, Bliss offers an $.attributes() method for setting multiple attributes at once:
    element._.style({
        "width": 0,
        "padding": 0
    })._.attributes({
        "hidden": "",
        "class": "foo"
    });

    //This is better and more readable, but still a bit awkward. Turns out there is a special $.set() method to do both at once:
    element._.set({
        attributes: {
            "hidden": "",
            "class": "foo"
        },
        style: {
            "width": 0,
            "padding": 0
        }
    });

    /*Because $.attributes() and $.style() are also available for $.set() parameters, they will have the special $.SET() tag in these docs.
    Note that you don’t actually need attributes: {…} in $.set() at all: if there are any unrecognized properties in the parameter object,
    Bliss will first check if there is a property with that name on the element and if not,
    set an attribute. So you could rewrite the example above as:*/
    element._.set({
        "hidden": "",
        "class": "foo", // or "className": "foo" to use the property
        style: {
            "width": 0,
            "padding": 0
        }
    });

}


function vanilla_test() {
    var element = $.create();

    element.classList.add("my-class");
    element.classList.remove("my-class");
    element.classList.toggle("my-class");
    element.classList.contains("my-class")
    element.remove();
    //element.contains(otherElement) // Not working
    //element.matches(selector) // Not working
    //element.closest(selector) // Not working
    element.nextElementSibling
    //element.children // Not working

    $$("div")._.remove();
}

function $_test() {
    // return the first element with a class of .foo
    // that is inside the first element with a class of .bar
    var ret = $(".foo", $(".bar"));
    // Return the first element with a class of .foo
    // that is inside any element with a class of .bar
    var ret = $(".bar .foo");
    // Get the first element with a class of .foo
    // and set its title attribute to "yolo"
    // If there is no such element, this will throw an exception!
    $(".foo").setAttribute("title", "yolo");

    // Check if the .foo element exists
    // and set an attribute by using a variable "foo"
    // as a reference of the element
    var foo = $(".foo");
    if (foo) {
        foo.setAttribute("title", "yolo");
    }
}

function $$_test() {
    // Add an id to all <h1> headings that don’t already have one
    $$<HTMLHeadElement>("h1:not([id])").forEach(function(h1){
        h1.id = h1.textContent.replace(/\W/g, "");
    });
    // Get an array with all ids on the page
    var ids = $$<HTMLElement>("[id]").map(function(element){
        return element.id;
    });
    // Get all of an element’s attributes starting with data-bliss-
    var element = $.create("div");

    $$<Attr>(element.attributes).filter(function(attribute){
        return attribute.name.indexOf("data-bliss-") === 0;
    }).map(function(attribute){
        return attribute.name;
    });
}

function $_create_test() {
    $.create("ul", {
        className: "nav",
        contents: [
            "Navigation: ",
            {tag: "li",
            contents: {tag: "a",
                href: "index.html",
                textContent: "Home"
            }
            },
            {tag: "li",
            contents: {tag: "a",
                href: "contact.html",
                textContent: "Contact",
                target: "_blank"
            }}
        ]
    });

    var paragraph = $.create("p");
    var div = $.create();
}

function $_set_test() {
    $.set(document.createElement("nav"), {
        style: {
            color: "red"
        },
        events: {
            click: function(evt:Event) {
                console.log("YOLO");
            }
        },
        contents: ["Navigation: ", {tag: "ul",
            className: "buttons",
            delegate: {
                click: {
                    li: function() {
                        console.log("A list item was clicked");
                    }
                }
            },
            contents: [{tag: "li",
                    contents: {tag: "a",
                        href: "index.html",
                        textContent: "Home"
                    }
                }, {tag: "li",
                    contents: {tag: "a",
                        href: "docs.html",
                        textContent: "Docs"
                    }
                }
            ]
        }],
        inside: $("body > header")
    });
}

function $_contents_test() {
    var nav = $.create();

    nav._.contents(["Navigation: ", {tag: "ul",
        className: "buttons",
        delegate: {
            click: {
                li: function() {
                    console.log("A list item was clicked")
                }
            }
        },
        contents: [{tag: "li",
                contents: {tag: "a",
                    href: "index.html",
                    textContent: "Home"
                }
            }, {tag: "li",
                contents: {tag: "a",
                    href: "docs.html",
                    textContent: "Docs"
                }
            }
        ]
    }])
}

function $_clone_test() {
    var button = $<HTMLButtonElement>("button");
    button.addEventListener("click", function() { console.log("Click from listener!"); });
    button.onclick = function() { console.log("Click from inline event!"); };
    var button2 = button._.clone();
    // If clicked, button2 will print both messages
}

function $_after_test() {
    var button = $<HTMLButtonElement>("button");
    $.after(button, $(".selector"));
}

function $_around_test() {
    var button = $<HTMLButtonElement>("button");
    $.around(button, $(".selector"));

    // Wrap headings with a link to their section
    $$<HTMLElement>("section[id] > h1, article[id] > h1").forEach(function(h1){
        $.create("a", {
            href: "#" + (<HTMLElement>h1.parentNode).id,
            around: h1
        });
    });
}

function $_attributes_test() {
    var button = $<HTMLButtonElement>("button");
    $.attributes(button, { backgroundColor: "#FFFFFF" });

    button._.attributes({color: "#000000"});
}

function $_before_test() {
    var button = $<HTMLButtonElement>("button");
    $.before(button, $(".selector"));

    button._.before($(".selector"));
}

function $_inside_test() {
    var button = $<HTMLButtonElement>("button");
    $.inside(button, $(".selector"));

    button._.inside($(".selector"));
}

function $_properties_test() {
    document.createElement("button")._.properties({
        className: "continue",
        textContent: "Next Step",
        onclick: function() { /*MyApp.next()*/ }
    });
}

function $_start_test() {
    var button = $<HTMLButtonElement>("button");
    $.start(button, $(".selector"));

    button._.start($(".selector"));
}

function $_style_test() {
    document.body._.style({
        color: "white",
        backgroundColor: "red",
        cssFloat: "left"
    });
}

function $_transition_test() {
    var element = $<HTMLDivElement>(".selector");

    // Fade out an element then remove it from the DOM
    $.transition(element, {opacity: 0}).then($.remove);

    // Fade out and shrink all <div>s on a page,
    // then remove them from the DOM
    Promise.all($$<HTMLDivElement>("div")._.transition({
        opacity: 0,
        transform: "scale(0)"
    })).then( (elts) => {
        elts.forEach(elt => {
            $.remove(elt);
        });
    });
}

function $_delegate_test() {
    var element = $<HTMLDivElement>(".selector");

    $.delegate(element, "locationchange", ".selected", () => {});
    $.delegate(element, "locationchange", {
        "callback1" : () => {}
    });
    $.delegate(element, {
        "locationchange" : {
            "callback1" : () => {}
        }
    });

    element._.delegate("locationchange", ".selected", () => {});
    element._.delegate( "locationchange", {
        "callback1" : () => {}
    });
    element._.delegate({
        "locationchange" : {
            "callback1" : () => {}
        }
    });
}

function $_events_test() {
    $$('input[type="range"]')._.events({
        "input change": function(evt) { this.title = this.value}
    });

    $$("input")._.addEventListener("input", function(){ /* ... */});
}

function $_fire_test() {

    var myMap = $(".myMap");
    var myInput = $(".myInput");

    // Fire a custom event on a map widget
    myMap._.fire("locationchange", {
        location: [42.361667, -71.092751]
    });
    // Fire a fake input event
    myInput._.fire("input");
}

function $_once_test() {
    $$('input[type="range"]')._.once({
        "input change": function(evt) { this.title = this.value}
    });
}

function $_ready_test() {
    // Add a red border to all divs on a page
    $.ready().then(function(){
        $$("div")._.style({ border: "1px solid red" });
    });
}

function $_all_test() {
    // Uppercase all strings in an array
    ["Foo", "bar"]._.all("toUpperCase"); // Returns ["FOO", "BAR"]
}

function $_class_test() {
    var cls = $.Class({
        constructor: function() {/* ... */}
    });
}

function $_each_test() {
    var elt = {a:"a", b:"b"};

    $.each<any>(elt, function (name:string, value:any) {
        /* ... */
    }, elt);
}

function $_extend_test() {
    var o1 = {foo: 1, bar:2}
    var o2 = $.extend(o1, {foo: 3, baz: 4});
    // o2 is {foo: 3, bar: 2, baz: 4}
    // Get typography-related computed style on <body>
    var type = $.extend({},
                    getComputedStyle(document.body),
                    /^font|^lineHeight$/);
}

function $_lazy_test() {
    var x = {a:""};
    $.lazy(x, "foo", () =>  {return "bar";});

    $.lazy(x, {
        "foo" : function() {
            return "bar"
        }
    });
}

function $_live_test() {
    var x = {a:""};
    $.live(x, "foo", () =>  {return "bar";});
}

function $_type_test(...args: any[]) {
    // Check if the second argument of a function is a regexp
    if ($.type(args[1]) === "regexp") {
        // ...
    }
}

function $_value_test() {
    $.value(document, "body", "nodeType"); // 1
    $.value(document, "body", "foo", "bar", "baz"); // undefined, no errors
    $.value("document", "body", "nodeType"); // 1, no root, starting from self
}

function $_fetch_test() {
    $.fetch("/api/create", {
        method: "POST",
        responseType: "json"
    }).then(function(){
        alert("success!");
    }).catch(function(error){
        console.error(error);
    });
}
