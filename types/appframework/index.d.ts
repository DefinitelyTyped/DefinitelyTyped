// Type definitions for AppFramework 2.0
// Project: http://app-framework-software.intel.com/
// Definitions by: kyo_ago <https://github.com/kyo-ago>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface appFrameworkStatic {
    /**
     * This is the internal appframework object that gets extended and added on to it
     * This is also the start of our query selector engine
     * @param {String|Element|Object|Array} selector
     * @param {String|Element|Object} [context]
     */
    (selector: string, context?: any): appFrameworkCollection;
    (collection: appFrameworkCollection): appFrameworkCollection;
    (element: HTMLElement): appFrameworkCollection;
    (htmlString: string): appFrameworkCollection;
    (object: any): appFrameworkCollection;

    /**
     * Checks to see if the parameter is a $afm object
     ```
     var foo=$('#header');
     $.is$(foo);
     ```

     * @param {Object} element
     * @return {Boolean}
     * @title $.is$(param)
     */
    is$(obj: any): boolean;

    /**
     * Map takes in elements and executes a callback function on each and returns a collection
     ```
     $.map([1,2],function(ind){return ind+1});
     ```

     * @param {Array|Object} elements
     * @param {Function} callback
     * @return {Object} appframework object with elements in it
     * @title $.map(elements,callback)
     */
    map(collection: any[], fn: (item: any, index: number) => any): any[];

    /**
     * Iterates through elements and executes a callback.  Returns if false
     ```
     $.each([1,2],function(ind){console.log(ind);});
     ```

     * @param {Array|Object} elements
     * @param {Function} callback
     * @return {Array} elements
     * @title $.each(elements,callback)
     */
    each(collection: any[], fn: (index: number, item: any) => any): void;
    each(collection: any, fn: (key: string, value: any) => any): void;

    /**
     * Extends an object with additional arguments
     ```
     $.extend({foo:'bar'});
     $.extend(element,{foo:'bar'});
     ```

     * @param {Object} [target] element
     * @param any number of additional arguments
     * @return {Object} [target]
     * @title $.extend(target,{params})
     */
    extend(target: any, ...sources: any[]): any;

    /**
     * Checks to see if the parameter is an array
     ```
     var arr=[];
     $.isArray(arr);
     ```

     * @param {Object} element
     * @return {Boolean}
     * @example $.isArray([1]);
     * @title $.isArray(param)
     */
    isArray(object: any): boolean;

    /**
     * Checks to see if the parameter is a function
     ```
     var func=function(){};
     $.isFunction(func);
     ```

     * @param {Object} element
     * @return {Boolean}
     * @title $.isFunction(param)
     */
    isFunction(object: any): boolean;

    /**
     * Checks to see if the parameter is a object
     ```
     var foo={bar:'bar'};
     $.isObject(foo);
     ```

     * @param {Object} element
     * @return {Boolean}
     * @title $.isObject(param)
     */
    isObject(object: any): boolean;

    /**
     * Prototype for afm object.  Also extens $.fn
     */
    fn: Object;

    /* AJAX settings */
    ajaxSettings: appFrameworkAjaxSettings;

    /**
     * Execute a jsonP call, allowing cross domain scripting
     * options.url - URL to call
     * options.success - Success function to call
     * options.error - Error function to call
     ```
     $.jsonP({url:'mysite.php?callback=?&foo=bar',success:function(){},error:function(){}});
     ```

     * @param {Object} options
     * @title $.jsonP(options)
     */
    jsonP(options: appFrameworkAjaxSettings): {};

    /**
     * Execute an Ajax call with the given options
     * options.type - Type of request
     * options.beforeSend - function to execute before sending the request
     * options.success - success callback
     * options.error - error callback
     * options.complete - complete callback - callled with a success or error
     * options.timeout - timeout to wait for the request
     * options.url - URL to make request against
     * options.contentType - HTTP Request Content Type
     * options.headers - Object of headers to set
     * options.dataType - Data type of request
     * options.data - data to pass into request.  $.param is called on objects
     ```
     var opts={
            type:"GET",
            success:function(data){},
            url:"mypage.php",
            data:{bar:'bar'},
            }
     $.ajax(opts);
     ```

     * @param {Object} options
     * @title $.ajax(options)
     */
    ajax(options: appFrameworkAjaxSettings): XMLHttpRequest;

    /**
     * Shorthand call to an Ajax GET request
     ```
     $.get("mypage.php?foo=bar",function(data){});
     ```

     * @param {String} url to hit
     * @param {Function} success
     * @title $.get(url,success)
     */
    get(url: string, fn: (data: any, status?: string, xhr?: XMLHttpRequest) => void): XMLHttpRequest;

    /**
     * Shorthand call to an Ajax POST request
     ```
     $.post("mypage.php",{bar:'bar'},function(data){});
     ```

     * @param {String} url to hit
     * @param {Object} [data] to pass in
     * @param {Function} success
     * @param {String} [dataType]
     * @title $.post(url,[data],success,[dataType])
     */
    post(url: string, fn: (data: any, status?: string, xhr?: XMLHttpRequest) => void, dataType?: string): XMLHttpRequest;
    post(url: string, data: any, fn: (data: any, status?: string, xhr?: XMLHttpRequest) => void, dataType?: string): XMLHttpRequest;

    /**
     * Shorthand call to an Ajax request that expects a JSON response
     ```
     $.getJSON("mypage.php",{bar:'bar'},function(data){});
     ```

     * @param {String} url to hit
     * @param {Object} [data]
     * @param {Function} [success]
     * @title $.getJSON(url,data,success)
     */
    getJSON(url: string, fn: (data: any, status?: string, xhr?: XMLHttpRequest) => void): XMLHttpRequest;
    getJSON(url: string, data: any, fn: (data: any, status: string, xhr: XMLHttpRequest) => void ): XMLHttpRequest;

    /**
     * Converts an object into a key/value par with an optional prefix.  Used for converting objects to a query string
     ```
     var obj={
            foo:'foo',
            bar:'bar'
            }
     var kvp=$.param(obj,'data');
     ```

     * @param {Object} object
     * @param {String} [prefix]
     * @return {String} Key/value pair representation
     * @title $.param(object,[prefix];
     */
    param(object: any, prefix?: string): string;

    /**
     * Used for backwards compatibility.  Uses native JSON.parse function
     ```
     var obj=$.parseJSON("{\"bar\":\"bar\"}");
     ```

     * @params {String} string
     * @return {Object}
     * @title $.parseJSON(string)
     */
    parseJSON(str: string): any;

    /**
     * Helper function to convert XML into  the DOM node representation
     ```
     var xmlDoc=$.parseXML("<xml><foo>bar</foo></xml>");
     ```

     * @param {String} string
     * @return {Object} DOM nodes
     * @title $.parseXML(string)
     */
    parseXML(str: string): any;

    /**
     * Utility function to create a psuedo GUID
     ```
     var id= $.uuid();
     ```
     * @title $.uuid
     */
    uuid(): string;

    /**
     * Gets the css matrix, or creates a fake one
     ```
     $.getCssMatrix(domElement)
     ```
     @returns matrix with postion
     */
    getCssMatrix(node: HTMLElement): appFrameworkCssMatrix;
    getCssMatrix(elem: appFrameworkCollection): appFrameworkCssMatrix;

    /**
     * $.create - a faster alertnative to $("<div id='main'>this is some text</div>");
     ```
     $.create("div",{id:'main',innerHTML:'this is some text'});
     $.create("<div id='main'>this is some text</div>");
     ```
     * @param {String} DOM Element type or html
     * @param [{Object}] properties to apply to the element
     * @return {Object} Returns an appframework object
     * @title $.create(type,[params])
     */
    create(type: string, params?: any): appFrameworkCollection;

    /**
     * $.query  - a faster alertnative to $("div");
     ```
     $.query(".panel");
     ```
     * @param {String} selector
     * @param {Object} [context]
     * @return {Object} Returns an appframework object
     * @title $.query(selector,[context])
     */
    query(selector: string, context?: any): appFrameworkCollection;

    /**
     * Creates a custom event to be used internally.
     * @param {String} type
     * @param {Object} [properties]
     * @return {event} a custom event that can then be dispatched
     * @title $.Event(type,props);
     */
    Event(type: string, props: any): any;

    /* The following are for events on objects */
    /**
     * Bind an event to an object instead of a DOM Node
     ```
     $.bind(this,'event',function(){});
     ```
     * @param {Object} object
     * @param {String} event name
     * @param {Function} function to execute
     * @title $.bind(object,event,function);
     */
    bind(object: any, event: string, fn: Function): void;

    /**
     * Trigger an event to an object instead of a DOM Node
     ```
     $.trigger(this,'event',arguments);
     ```
     * @param {Object} object
     * @param {String} event name
     * @param {Array} arguments
     * @title $.trigger(object,event,argments);
     */
    trigger(object: any, event: string, args?: any[]): void;

    /**
     * Unbind an event to an object instead of a DOM Node
     ```
     $.unbind(this,'event',function(){});
     ```
     * @param {Object} object
     * @param {String} event name
     * @param {Function} function to execute
     * @title $.unbind(object,event,function);
     */
    unbind(object: any, event: string, fn: Function): void;

    /**
     * Creates a proxy function so you can change the 'this' context in the function
     * Update: now also allows multiple argument call or for you to pass your own arguments
     ```
     var newObj={foo:bar}
     $("#main").bind("click",$.proxy(function(evt){console.log(this)},newObj);

     or

     ( $.proxy(function(foo, bar){console.log(this+foo+bar)}, newObj) )('foo', 'bar');

     or

     ( $.proxy(function(foo, bar){console.log(this+foo+bar)}, newObj, ['foo', 'bar']) )();
     ```
     * @param {Function} Callback
     * @param {Object} Context
     * @title $.proxy(callback,context);
     */
    proxy(callback: Function, context: any): void;

    /**
     * Function to clean up node content to prevent memory leaks
     ```
     $.cleanUpContent(node,itself,kill)
     ```
     * @param {HTMLNode} node
     * @param {Bool} kill itself
     * @param {bool} Kill nodes
     * @title $.cleanUpContent(node,itself,kill)
     */
    cleanUpContent(node: HTMLElement, itself?: boolean, kill?: boolean): void;

    /**
     * This adds a command to execute in the JS stack, but is faster then setTimeout
     ```
     $.asap(function,context,args)
     ```
     * @param {Function} function
     * @param {Object} context
     * @param {Array} arguments
     */
    asap(callback: Function, context?: any, args?: any[]): void;

    /**
     * this function executes javascript in HTML.
     ```
     $.parseJS(content)
     ```
     * @param {String|DOM} content
     * @title $.parseJS(content);
     */
    parseJS(content: string): void;
    parseJS(content: HTMLElement): void;

    /**
     * Helper function to parse the user agent.  Sets the following
     * .os.webkit
     * .os.android
     * .os.ipad
     * .os.iphone
     * .os.webos
     * .os.touchpad
     * .os.blackberry
     * .os.opera
     * .os.fennec
     * .os.ie
     * .os.ieTouch
     * .os.supportsTouch
     * .os.playbook
     * .feat.nativetouchScroll
     * @api private
     */
    os: {
        webkit: boolean;
        android: boolean;
        androidICS: boolean;
        ipad: boolean;
        iphone: boolean;
        ios7: boolean;
        webos: boolean;
        touchpad: boolean;
        ios: boolean;
        playbook: boolean;
        blackberry: boolean;
        blackberry10: boolean;
        chrome: boolean;
        opera: boolean;
        fennec: boolean;
        ie: boolean;
        ieTouch: boolean;
        supportsTouch: boolean;
    };

    feat: {
        nativeTouchScroll: boolean;
        cssPrefix: string;
        cssTransformStart: string;
        cssTransformEnd: string;
    }
}

interface appFrameworkCollection {
    reduce(callbackfn: (previousValue: appFrameworkCollection, currentValue: appFrameworkCollection, currentIndex: number, array: appFrameworkCollection[]) => appFrameworkCollection, initialValue?: appFrameworkCollection): appFrameworkCollection;
    push(...items: appFrameworkCollection[]): number;
    indexOf(searchElement: appFrameworkCollection, fromIndex?: number): number;
    concat(...items: appFrameworkCollection[]): appFrameworkCollection[];
    slice(start: number, end?: number): appFrameworkCollection[];
    length: number;

    /**
     * This is a wrapper to $.map on the selected elements
     ```
     $().map(function(){this.value+=ind});
     ```

     * @param {Function} callback
     * @return {Object} an appframework object
     * @title $().map(function)
     */
    map(fn: (index: number, item: any) => any): appFrameworkCollection;
    /**
     * Iterates through all elements and applys a callback function
     ```
     $().each(function(){console.log(this.value)});
     ```

     * @param {Function} callback
     * @return {Object} an appframework object
     * @title $().each(function)
     */
    each(fn: (index: number, item: any) => any): appFrameworkCollection;
    forEach(fn: (item: any, index: number) => any): void;

    /**
     * This is executed when DOMContentLoaded happens, or after if you've registered for it.
     ```
     $(document).ready(function(){console.log('I'm ready');});
     ```

     * @param {Function} callback
     * @return {Object} an appframework object
     * @title $().ready(function)
     */
    ready(fn: Function): appFrameworkStatic;

    /**
     * Searches through the collection and reduces them to elements that match the selector
     ```
     $("#foo").find('.bar');
     $("#foo").find($('.bar'));
     $("#foo").find($('.bar').get(0));
     ```

     * @param {String|Object|Array} selector
     * @return {Object} an appframework object filtered
     * @title $().find(selector)

     */
    find(selector: string): appFrameworkCollection;

    /**
     * Gets or sets the innerHTML for the collection.
     * If used as a get, the first elements innerHTML is returned
     ```
     $("#foo").html(); //gets the first elements html
     $("#foo").html('new html');//sets the html
     $("#foo").html('new html',false); //Do not do memory management cleanup
     ```

     * @param {String} html to set
     * @param {Bool} [cleanup] - set to false for performance tests and if you do not want to execute memory management cleanup
     * @return {Object} an appframework object
     * @title $().html([html])
     */
    html(): string;
    html(html: string): appFrameworkCollection;
    html(html: string, cleanup: boolean): appFrameworkCollection;

    /**
     * Gets or sets the innerText for the collection.
     * If used as a get, the first elements innerText is returned
     ```
     $("#foo").text(); //gets the first elements text;
     $("#foo").text('new text'); //sets the text
     ```

     * @param {String} text to set
     * @return {Object} an appframework object
     * @title $().text([text])
     */
    text(): string;
    text(text: string): appFrameworkCollection;

    /**
     * Gets or sets a css property for the collection
     * If used as a get, the first elements css property is returned
     * This will add px to properties that need it.
     ```
     $().css("background"); // Gets the first elements background
     $().css("background","red")  //Sets the elements background to red
     ```

     * @param {String} attribute to get
     * @param {String} value to set as
     * @return {Object} an appframework object
     * @title $().css(attribute,[value])
     */
    css(property: string): any;
    css(property: string, value: any): appFrameworkCollection;
    css(properties: any): appFrameworkCollection;

    /**
     * Performs a css vendor specific transform:translate operation on the collection.
     *
     ```
     $("#main").cssTranslate('200px,0,0');
     ```
     * @param {String} Transform values
     * @return {Object} an appframework object
     * @title $().vendorCss(value)
     */
    vendorCss(transform: string): appFrameworkCollection;

    /**
     * Gets the computed style of CSS values
     *
     ```
     $("#main").computedStyle('display');
     ```
     * @param {String} css property
     * @return {Int|String|Float|} css vlaue
     * @title $().computedStyle()
     */
    computedStyle(css: string): appFrameworkCollection;

    /**
     * Sets the innerHTML of all elements to an empty string
     ```
     $().empty();
     ```

     * @return {Object} an appframework object
     * @title $().empty()
     */
    empty(): appFrameworkCollection;

    /**
     * Sets the elements display property to "none".
     * This will also store the old property into an attribute for hide
     ```
     $().hide();
     ```

     * @return {Object} an appframework object
     * @title $().hide()
     */
    hide(): appFrameworkCollection;

    /**
     * Shows all the elements by setting the css display property
     * We look to see if we were retaining an old style (like table-cell) and restore that, otherwise we set it to block
     ```
     $().show();
     ```

     * @return {Object} an appframework object
     * @title $().show()
     */
    show(): appFrameworkCollection;

    /**
     * Toggle the visibility of a div
     ```
     $().toggle();
     $().toggle(true); //force showing
     ```

     * @param {Boolean} [show] -force the hiding or showing of the element
     * @return {Object} an appframework object
     * @title $().toggle([show])
     */
    toggle(show?: boolean): appFrameworkCollection;

    /**
     * Gets or sets an elements value
     * If used as a getter, we return the first elements value.  If nothing is in the collection, we return undefined
     ```
     $().value; //Gets the first elements value;
     $().value="bar"; //Sets all elements value to bar
     ```

     * @param {String} [value] to set
     * @return {String|Object} A string as a getter, appframework object as a setter
     * @title $().val([value])
     */
    val(): string;
    val(value: string): appFrameworkCollection;

    /**
     * Gets or sets an attribute on an element
     * If used as a getter, we return the first elements value.  If nothing is in the collection, we return undefined
     ```
     $().attr("foo"); //Gets the first elements 'foo' attribute
     $().attr("foo","bar");//Sets the elements 'foo' attribute to 'bar'
     $().attr("foo",{bar:'bar'}) //Adds the object to an internal cache
     ```

     * @param {String|Object} attribute to act upon.  If it's an object (hashmap), it will set the attributes based off the kvp.
     * @param {String|Array|Object|function} [value] to set
     * @return {String|Object|Array|Function} If used as a getter, return the attribute value.  If a setter, return an appframework object
     * @title $().attr(attribute,[value])
     */
    attr(attribute: string): any;
    attr(attributeHash: Object): appFrameworkCollection;
    attr(attribute: string, value: string): appFrameworkCollection;
    attr(attribute: string, value: any): appFrameworkCollection;

    /**
     * Removes an attribute on the elements
     ```
     $().removeAttr("foo");
     ```

     * @param {String} attributes that can be space delimited
     * @return {Object} appframework object
     * @title $().removeAttr(attribute)
     */
    removeAttr(attribute: string): appFrameworkCollection;

    /**
     * Gets or sets a property on an element
     * If used as a getter, we return the first elements value.  If nothing is in the collection, we return undefined
     ```
     $().prop("foo"); //Gets the first elements 'foo' property
     $().prop("foo","bar");//Sets the elements 'foo' property to 'bar'
     $().prop("foo",{bar:'bar'}) //Adds the object to an internal cache
     ```

     * @param {String|Object} property to act upon.  If it's an object (hashmap), it will set the attributes based off the kvp.
     * @param {String|Array|Object|function} [value] to set
     * @return {String|Object|Array|Function} If used as a getter, return the property value.  If a setter, return an appframework object
     * @title $().prop(property,[value])
     */
    prop(attribute: string): any;
    prop(attributeHash: Object): appFrameworkCollection;
    prop(attribute: string, value: string): appFrameworkCollection;
    prop(attribute: string, value: any): appFrameworkCollection;

    /**
     * Removes a property on the elements
     ```
     $().removeProp("foo");
     ```

     * @param {String} properties that can be space delimited
     * @return {Object} appframework object
     * @title $().removeProp(attribute)
     */
    removeProp(attribute: string): appFrameworkCollection;

    /**
     * Removes elements based off a selector
     ```
     $().remove();  //Remove all
     $().remove(".foo");//Remove off a string selector
     var element=$("#foo").get(0);
     $().remove(element); //Remove by an element
     $().remove($(".foo"));  //Remove by a collection

     ```

     * @param {String|Object|Array} selector to filter against
     * @return {Object} appframework object
     * @title $().remove(selector)
     */
    remove(): appFrameworkCollection;
    remove(selector: string): appFrameworkCollection;
    remove(element: HTMLElement): appFrameworkCollection;
    remove(elements: any[]): appFrameworkCollection;
    remove(elements: appFrameworkCollection): appFrameworkCollection;

    /**
     * Adds a css class to elements.
     ```
     $().addClass("selected");
     ```

     * @param {String} classes that are space delimited
     * @return {Object} appframework object
     * @title $().addClass(name)
     */
    addClass(className: string): appFrameworkCollection;

    /**
     * Removes a css class from elements.
     ```
     $().removeClass("foo"); //single class
     $().removeClass("foo selected");//remove multiple classess
     ```

     * @param {String} classes that are space delimited
     * @return {Object} appframework object
     * @title $().removeClass(name)
     */
    removeClass(className: string): appFrameworkCollection;

    /**
    * Adds or removes a css class to elements.
        ```
        $().toggleClass("selected");
        ```

    * @param {String} classes that are space delimited
    * @param {Boolean} [state] force toggle to add or remove classes
    * @return {Object} appframework object
    * @title $().toggleClass(name)
    */
    toggleClass(name: string, state?: boolean): appFrameworkCollection;

    /**
     * Replaces a css class on elements.
     ```
     $().replaceClass("on", "off");
     ```

     * @param {String} classes that are space delimited
     * @param {String} classes that are space delimited
     * @return {Object} appframework object
     * @title $().replaceClass(old, new)
     */
    replaceClass(oldClassName: string, newClassName: string): appFrameworkCollection;

    /**
     * Checks to see if an element has a class.
     ```
     $().hasClass('foo');
     $().hasClass('foo',element);
     ```

     * @param {String} class name to check against
     * @param {Object} [element] to check against
     * @return {Boolean}
     * @title $().hasClass(name,[element])
     */
    hasClass(className: string, element: HTMLElement): boolean;

    /**
     * Appends to the elements
     * We boil everything down to an appframework object and then loop through that.
     * If it's HTML, we create a dom element so we do not break event bindings.
     * if it's a script tag, we evaluate it.
     ```
     $().append("<div></div>"); //Creates the object from the string and appends it
     $().append($("#foo")); //Append an object;
     ```

     * @param {String|Object} Element/string to add
     * @param {Boolean} [insert] insert or append
     * @return {Object} appframework object
     * @title $().append(element,[insert])
     */
    append(content: any): appFrameworkCollection;

    /**
     * Appends the current collection to the selector
     ```
     $().appendTo("#foo"); //Append an object;
     ```

     * @param {String|Object} Selector to append to
     * @param {Boolean} [insert] insert or append
     * @title $().appendTo(element,[insert])
     */
    appendTo(target: any): appFrameworkCollection;

    /**
     * Prepends the current collection to the selector
     ```
     $().prependTo("#foo"); //Prepend an object;
     ```

     * @param {String|Object} Selector to prepent to
     * @title $().prependTo(element)
     */
    prependTo(target: any): appFrameworkCollection;

    /**
     * Prepends to the elements
     * This simply calls append and sets insert to true
     ```
     $().prepend("<div></div>");//Creates the object from the string and appends it
     $().prepend($("#foo")); //Prepends an object
     ```

     * @param {String|Object} Element/string to add
     * @return {Object} appframework object
     * @title $().prepend(element)
     */
    prepend(content: any): appFrameworkCollection;

    /**
     * Inserts collection before the target (adjacent)
     ```
     $().insertBefore(af("#target"));
     ```

     * @param {String|Object} Target
     * @title $().insertBefore(target);
     */
    insertBefore(target: any): appFrameworkCollection;

    /**
     * Inserts collection after the target (adjacent)
     ```
     $().insertAfter(af("#target"));
     ```
     * @param {String|Object} target
     * @title $().insertAfter(target);
     */
    insertAfter(target: any): void;

    /**
     * Returns the raw DOM element.
     ```
     $().get(0); //returns the first element
     $().get(2);// returns the third element
     ```

     * @param {Int} [index]
     * @return {Object} raw DOM element
     * @title $().get([index])
     */
    get(): HTMLElement[];
    get(index: number): HTMLElement;

    /**
     * Returns the offset of the element, including traversing up the tree
     ```
     $().offset();
     ```

     * @return {Object} with left, top, width and height properties
     * @title $().offset()
     */
    offset(): {
        left: number;
        top: number;
        right: number;
        bottom: number;
        width: number;
        height: number;
    };

    /**
     * returns the height of the element, including padding on IE
     ```
     $().height();
     ```
     * @return {string} height
     * @title $().height()
     */
    height(): string;

    /**
     * returns the width of the element, including padding on IE
     ```
     $().width();
     ```
     * @return {string} width
     * @title $().width()
     */
    width(): string;

    /**
     * Returns the parent nodes of the elements based off the selector
     ```
     $("#foo").parent('.bar');
     $("#foo").parent($('.bar'));
     $("#foo").parent($('.bar').get(0));
     ```

     * @param {String|Array|Object} [selector]
     * @return {Object} appframework object with unique parents
     * @title $().parent(selector)
     */
    parent(selector?: any): appFrameworkCollection;

    /**
     * Returns the parents of the elements based off the selector (traversing up until html document)
     ```
     $("#foo").parents('.bar');
     $("#foo").parents($('.bar'));
     $("#foo").parents($('.bar').get(0));
     ```

     * @param {String|Array|Object} [selector]
     * @return {Object} appframework object with unique parents
     * @title $().parents(selector)
     */
    parents(selector?: any): appFrameworkCollection;

    /**
     * Returns the child nodes of the elements based off the selector
     ```
     $("#foo").children('.bar'); //Selector
     $("#foo").children($('.bar')); //Objects
     $("#foo").children($('.bar').get(0)); //Single element
     ```

     * @param {String|Array|Object} [selector]
     * @return {Object} appframework object with unique children
     * @title $().children(selector)
     */
    children(selector?: any): appFrameworkCollection;

    /**
     * Returns the siblings of the element based off the selector
     ```
     $("#foo").siblings('.bar'); //Selector
     $("#foo").siblings($('.bar')); //Objects
     $("#foo").siblings($('.bar').get(0)); //Single element
     ```

     * @param {String|Array|Object} [selector]
     * @return {Object} appframework object with unique siblings
     * @title $().siblings(selector)
     */
    siblings(selector?: any): appFrameworkCollection;

    /**
     * Returns the closest element based off the selector and optional context
     ```
     $("#foo").closest('.bar'); //Selector
     $("#foo").closest($('.bar')); //Objects
     $("#foo").closest($('.bar').get(0)); //Single element
     ```

     * @param {String|Array|Object} selector
     * @param {Object} [context]
     * @return {Object} Returns an appframework object with the closest element based off the selector
     * @title $().closest(selector,[context]);
     */
    closest(selector?: any): appFrameworkCollection;

    /**
     * Filters elements based off the selector
     ```
     $("#foo").filter('.bar'); //Selector
     $("#foo").filter($('.bar')); //Objects
     $("#foo").filter($('.bar').get(0)); //Single element
     ```

     * @param {String|Array|Object} selector
     * @return {Object} Returns an appframework object after the filter was run
     * @title $().filter(selector);
     */
    filter(selector?: any): appFrameworkCollection;

    /**
     * Basically the reverse of filter.  Return all elements that do NOT match the selector
     ```
     $("#foo").not('.bar'); //Selector
     $("#foo").not($('.bar')); //Objects
     $("#foo").not($('.bar').get(0)); //Single element
     ```

     * @param {String|Array|Object} selector
     * @return {Object} Returns an appframework object after the filter was run
     * @title $().not(selector);
     */
    not(selector?: any): appFrameworkCollection;

    /**
     * Gets or set data-* attribute parameters on elements (when a string)
     * When used as a getter, it's only the first element
     ```
     $().data("foo"); //Gets the data-foo attribute for the first element
     $().data("foo","bar"); //Sets the data-foo attribute for all elements
     $().data("foo",{bar:'bar'});//object as the data
     ```

     * @param {String} key
     * @param {String|Array|Object} value
     * @return {String|Object} returns the value or appframework object
     * @title $().data(key,[value]);
     */
    data(attribute: string): any;
    data(attribute: string, value: string): appFrameworkCollection;
    data(attribute: string, value: any): appFrameworkCollection;

    /**
     * Rolls back the appframework elements when filters were applied
     * This can be used after .not(), .filter(), .children(), .parent()
     ```
     $().filter(".panel").end(); //This will return the collection BEFORE filter is applied
     ```

     * @return {Object} returns the previous appframework object before filter was applied
     * @title $().end();
     */
    end(): appFrameworkCollection;

    /**
     * Clones the nodes in the collection.
     ```
     $().clone();// Deep clone of all elements
     $().clone(false); //Shallow clone
     ```

     * @param {Boolean} [deep] - do a deep copy or not
     * @return {Object} appframework object of cloned nodes
     * @title $().clone();
     */
    clone(deep?: boolean): appFrameworkCollection;

    /**
     * Returns the number of elements in the collection
     ```
     $().size();
     ```

     * @return {Int}
     * @title $().size();
     */
    size(): number;

    /**
     * Serailizes a form into a query string
     ```
     $().serialize();
     ```
     * @return {String}
     * @title $().serialize()
     */
    serialize(): string;

    /* added in 1.2 */
    /**
     * Reduce the set of elements based off index
     ```
     $().eq(index)
     ```
     * @param {Int} index - Index to filter by. If negative, it will go back from the end
     * @return {Object} appframework object
     * @title $().eq(index)
     */
    eq(index: number): appFrameworkCollection;

    /**
     * Returns the index of the selected element in the collection
     ```
     $().index(elem)
     ```
     * @param {String|Object} element to look for.  Can be a selector or object
     * @return integer - index of selected element
     * @title $().index(elem)
     */
    index(): number;
    index(selector: any): number;

    /**
     * Returns boolean if the object is a type of the selector
     ```
     $().is(selector)
     ```
     * param {String|Object} selector to act upon
     * @return boolean
     * @title $().is(selector)
     */
    is(selector: any): number;

    /**
     * Binds an event to each element in the collection and executes the callback
     ```
     $().bind('click',function(){console.log('I clicked '+this.id);});
     ```

     * @param {String|Object} event
     * @param {Function} callback
     * @return {Object} appframework object
     * @title $().bind(event,callback)
     */
    bind(eventHash: Object): appFrameworkCollection;
    bind(eventName: string, fn: (e: Event) => any): appFrameworkCollection;

    /**
     * Unbinds an event to each element in the collection.  If a callback is passed in, we remove just that one, otherwise we remove all callbacks for those events
     ```
     $().unbind('click'); //Unbinds all click events
     $().unbind('click',myFunc); //Unbinds myFunc
     ```

     * @param {String|Object} event
     * @param {Function} [callback]
     * @return {Object} appframework object
     * @title $().unbind(event,[callback]);
     */
    unbind(eventHash: {}): appFrameworkCollection;
    unbind(eventName?: string): appFrameworkCollection;
    unbind(eventName: string, fn?: (e: Event) => any): appFrameworkCollection;

    /**
     * Binds an event to each element in the collection that will only execute once.  When it executes, we remove the event listener then right away so it no longer happens
     ```
     $().one('click',function(){console.log('I was clicked once');});
     ```

     * @param {String|Object} event
     * @param {Function} [callback]
     * @return appframework object
     * @title $().one(event,callback);
     */
    one(eventHash: {}): appFrameworkCollection;
    one(eventName: string, fn: (e: Event) => any): appFrameworkCollection;

    /**
     * Delegate an event based off the selector.  The event will be registered at the parent level, but executes on the selector.
     ```
     $("#div").delegate("p",'click',callback);
     ```

     * @param {String|Array|Object} selector
     * @param {String|Object} event
     * @param {Function} callback
     * @return {Object} appframework object
     * @title $().delegate(selector,event,callback)
     */
    delegate(selector: any, eventHash: {}): appFrameworkCollection;
    delegate(selector: any, eventName: string, fn: (e: Event) => any): appFrameworkCollection;

    /**
     * Unbinds events that were registered through delegate.  It acts upon the selector and event.  If a callback is specified, it will remove that one, otherwise it removes all of them.
     ```
     $("#div").undelegate("p",'click',callback);//Undelegates callback for the click event
     $("#div").undelegate("p",'click');//Undelegates all click events
     ```

     * @param {String|Array|Object} selector
     * @param {String|Object} event
     * @param {Function} callback
     * @return {Object} appframework object
     * @title $().undelegate(selector,event,[callback]);
     */
    undelegate(selector: any, eventHash: {}): appFrameworkCollection;
    undelegate(selector: any, eventName: string, fn: (e: Event) => any): appFrameworkCollection;

    /**
     * Similar to delegate, but the function parameter order is easier to understand.
     * If selector is undefined or a function, we just call .bind, otherwise we use .delegate
     ```
     $("#div").on("click","p",callback);
     ```

     * @param {String|Array|Object} selector
     * @param {String|Object} event
     * @param {Function} callback
     * @return {Object} appframework object
     * @title $().on(event,selector,callback);
     */
    on(eventHash: {}, selector?: any): appFrameworkCollection;
    on(eventName: string, fn: (e: Event) => any): appFrameworkCollection;
    on(eventName: string, selector: string, fn: (e: Event) => any): appFrameworkCollection;

    /**
     * Removes event listeners for .on()
     * If selector is undefined or a function, we call unbind, otherwise it's undelegate
     ```
     $().off("click","p",callback); //Remove callback function for click events
     $().off("click","p") //Remove all click events
     ```

     * @param {String|Object} event
     * @param {String|Array|Object} selector
     * @param {Sunction} callback
     * @return {Object} appframework object
     * @title $().off(event,selector,[callback])
     */
    off(eventHash: {}, selector?: any): appFrameworkCollection;
    off(eventName: string, fn: (e: Event) => any): appFrameworkCollection;
    off(eventName: string, selector: string, fn: (e: Event) => any): appFrameworkCollection;

    /**
     This triggers an event to be dispatched.  Usefull for emulating events, etc.
     ```
     $().trigger("click",{foo:'bar'});//Trigger the click event and pass in data
     ```

     * @param {String|Object} event
     * @param {Object} [data]
     * @return {Object} appframework object
     * @title $().trigger(event,data);
     */
    trigger(eventName: string, data?: any): appFrameworkCollection;
    trigger(eventHash: {}, data?: any): appFrameworkCollection;

    /**
     custom events since people want to do $().click instead of $().bind("click")
     */
    click(fn?: (e: Event) => any): appFrameworkCollection;

    /**
     custom events since people want to do $().keydown instead of $().bind("keydown")
     */
    keydown(fn?: (e: Event) => any): appFrameworkCollection;

    /**
     custom events since people want to do $().keyup instead of $().bind("keyup")
     */
    keyup(fn?: (e: Event) => any): appFrameworkCollection;

    /**
     custom events since people want to do $().keypress instead of $().bind("keypress")
     */
    keypress(fn?: (e: Event) => any): appFrameworkCollection;

    /**
     custom events since people want to do $().submit instead of $().bind("submit")
     */
    submit(fn?: (e: Event) => any): appFrameworkCollection;

    /**
     custom events since people want to do $().load instead of $().bind("load")
     */
    load(fn?: (e: Event) => any): appFrameworkCollection;

    /**
     custom events since people want to do $().resize instead of $().bind("resize")
     */
    resize(fn?: (e: Event) => any): appFrameworkCollection;

    /**
     custom events since people want to do $().change instead of $().bind("change")
     */
    change(fn?: (e: Event) => any): appFrameworkCollection;

    /**
     custom events since people want to do $().select instead of $().bind("select")
     */
    select(fn?: (e: Event) => any): appFrameworkCollection;

    /**
     custom events since people want to do $().error instead of $().bind("error")
     */
    error(fn?: (e: Event) => any): appFrameworkCollection;

    /**
     custom events since people want to do $().focus instead of $().bind("focus")
     */
    focus(fn?: (e: Event) => any): appFrameworkCollection;

    /**
     custom events since people want to do $().blur instead of $().bind("blur")
     */
    blur(fn?: (e: Event) => any): appFrameworkCollection;
}

interface appFrameworkAjaxSettings {
    type?: string;
    beforeSend?: (xhr: XMLHttpRequest, settings: appFrameworkAjaxSettings) => boolean;
    success?: (data: any, status: string, xhr: XMLHttpRequest) => void;
    error?: (xhr: XMLHttpRequest, errorType: string, error: Error) => void;
    complete?: (xhr: XMLHttpRequest, status: string) => void;
    timeout?: number;
    url?: string;
    contentType?: string;
    headers?: any;
    dataType?: string;
    data?: any;
    context?: any;
    crossDomain?: boolean;
}

interface appFrameworkCssMatrix {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
}

declare var af: (fn: ($: appFrameworkStatic) => void) => void;
declare var $: appFrameworkStatic;
