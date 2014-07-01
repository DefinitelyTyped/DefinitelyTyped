// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="dojo.d.ts" />
declare module dojox {
    
    module NodeList {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/NodeList/delegate.html
         *
         * Array-like object which adds syntactic
         * sugar for chaining, common iteration operations, animation, and
         * node manipulation. NodeLists are most often returned as the
         * result of dojo/query() calls.
         * NodeList instances provide many utilities that reflect
         * core Dojo APIs for Array iteration and manipulation, DOM
         * manipulation, and event handling. Instead of needing to dig up
         * functions in the dojo package, NodeLists generally make the
         * full power of Dojo available for DOM manipulation tasks in a
         * simple, chainable way.
         * 
         * @param array     
         */
        interface delegate{(array: any): void}
        module delegate {
            /**
             * 
             */
            var events: any[]
            /**
             * adds the specified class to every node in the list
             * 
             * @param className A String class name to add, or several space-separated class names,or an array of class names.             
             */
            interface addClass{(className: String): void}
            /**
             * adds the specified class to every node in the list
             * 
             * @param className A String class name to add, or several space-separated class names,or an array of class names.             
             */
            interface addClass{(className: any[]): void}
            /**
             * Animate the effects of adding a class to all nodes in this list.
             * see dojox.fx.addClass
             * 
             * @param cssClass             
             * @param args             
             */
            interface addClassFx{(cssClass: any, args: any): {type:Function;value:any}}
            /**
             * add a node, NodeList or some HTML as a string to every item in the
             * list.  Returns the original list.
             * a copy of the HTML content is added to each item in the
             * list, with an optional position argument. If no position
             * argument is provided, the content is appended to the end of
             * each item.
             * 
             * @param content the content to be set on the parent element.This can be an html string, a node reference or a NodeList, dojo/NodeList, Array or other enumerable list of nodes             
             * @param position               Optionalcan be one of:"last"||"end" (default)"first||"start""before""after""replace" (replaces nodes in this NodeList with new content)"only" (removes other children of the nodes so new content is the only child)or an offset in the childNodes property             
             */
            interface addContent{(content: String, position: String): Function}
            /**
             * add a node, NodeList or some HTML as a string to every item in the
             * list.  Returns the original list.
             * a copy of the HTML content is added to each item in the
             * list, with an optional position argument. If no position
             * argument is provided, the content is appended to the end of
             * each item.
             * 
             * @param content the content to be set on the parent element.This can be an html string, a node reference or a NodeList, dojo/NodeList, Array or other enumerable list of nodes             
             * @param position               Optionalcan be one of:"last"||"end" (default)"first||"start""before""after""replace" (replaces nodes in this NodeList with new content)"only" (removes other children of the nodes so new content is the only child)or an offset in the childNodes property             
             */
            interface addContent{(content: HTMLElement, position: String): Function}
            /**
             * add a node, NodeList or some HTML as a string to every item in the
             * list.  Returns the original list.
             * a copy of the HTML content is added to each item in the
             * list, with an optional position argument. If no position
             * argument is provided, the content is appended to the end of
             * each item.
             * 
             * @param content the content to be set on the parent element.This can be an html string, a node reference or a NodeList, dojo/NodeList, Array or other enumerable list of nodes             
             * @param position               Optionalcan be one of:"last"||"end" (default)"first||"start""before""after""replace" (replaces nodes in this NodeList with new content)"only" (removes other children of the nodes so new content is the only child)or an offset in the childNodes property             
             */
            interface addContent{(content: Object, position: String): Function}
            /**
             * add a node, NodeList or some HTML as a string to every item in the
             * list.  Returns the original list.
             * a copy of the HTML content is added to each item in the
             * list, with an optional position argument. If no position
             * argument is provided, the content is appended to the end of
             * each item.
             * 
             * @param content the content to be set on the parent element.This can be an html string, a node reference or a NodeList, dojo/NodeList, Array or other enumerable list of nodes             
             * @param position               Optionalcan be one of:"last"||"end" (default)"first||"start""before""after""replace" (replaces nodes in this NodeList with new content)"only" (removes other children of the nodes so new content is the only child)or an offset in the childNodes property             
             */
            interface addContent{(content:  dojo.NodeList, position: String): Function}
            /**
             * add a node, NodeList or some HTML as a string to every item in the
             * list.  Returns the original list.
             * a copy of the HTML content is added to each item in the
             * list, with an optional position argument. If no position
             * argument is provided, the content is appended to the end of
             * each item.
             * 
             * @param content the content to be set on the parent element.This can be an html string, a node reference or a NodeList, dojo/NodeList, Array or other enumerable list of nodes             
             * @param position               Optionalcan be one of:"last"||"end" (default)"first||"start""before""after""replace" (replaces nodes in this NodeList with new content)"only" (removes other children of the nodes so new content is the only child)or an offset in the childNodes property             
             */
            interface addContent{(content: String, position: number): Function}
            /**
             * add a node, NodeList or some HTML as a string to every item in the
             * list.  Returns the original list.
             * a copy of the HTML content is added to each item in the
             * list, with an optional position argument. If no position
             * argument is provided, the content is appended to the end of
             * each item.
             * 
             * @param content the content to be set on the parent element.This can be an html string, a node reference or a NodeList, dojo/NodeList, Array or other enumerable list of nodes             
             * @param position               Optionalcan be one of:"last"||"end" (default)"first||"start""before""after""replace" (replaces nodes in this NodeList with new content)"only" (removes other children of the nodes so new content is the only child)or an offset in the childNodes property             
             */
            interface addContent{(content: HTMLElement, position: number): Function}
            /**
             * add a node, NodeList or some HTML as a string to every item in the
             * list.  Returns the original list.
             * a copy of the HTML content is added to each item in the
             * list, with an optional position argument. If no position
             * argument is provided, the content is appended to the end of
             * each item.
             * 
             * @param content the content to be set on the parent element.This can be an html string, a node reference or a NodeList, dojo/NodeList, Array or other enumerable list of nodes             
             * @param position               Optionalcan be one of:"last"||"end" (default)"first||"start""before""after""replace" (replaces nodes in this NodeList with new content)"only" (removes other children of the nodes so new content is the only child)or an offset in the childNodes property             
             */
            interface addContent{(content: Object, position: number): Function}
            /**
             * add a node, NodeList or some HTML as a string to every item in the
             * list.  Returns the original list.
             * a copy of the HTML content is added to each item in the
             * list, with an optional position argument. If no position
             * argument is provided, the content is appended to the end of
             * each item.
             * 
             * @param content the content to be set on the parent element.This can be an html string, a node reference or a NodeList, dojo/NodeList, Array or other enumerable list of nodes             
             * @param position               Optionalcan be one of:"last"||"end" (default)"first||"start""before""after""replace" (replaces nodes in this NodeList with new content)"only" (removes other children of the nodes so new content is the only child)or an offset in the childNodes property             
             */
            interface addContent{(content:  dojo.NodeList, position: number): Function}
            /**
             * places any/all elements in queryOrListOrNode at a
             * position relative to the first element in this list.
             * Returns a dojo/NodeList of the adopted elements.
             * 
             * @param queryOrListOrNode a DOM node or a query string or a query result.Represents the nodes to be adopted relative to thefirst element of this NodeList.             
             * @param position               Optionalcan be one of:"last" (default)"first""before""after""only""replace"or an offset in the childNodes property             
             */
            interface adopt{(queryOrListOrNode: String, position: String): any}
            /**
             * places any/all elements in queryOrListOrNode at a
             * position relative to the first element in this list.
             * Returns a dojo/NodeList of the adopted elements.
             * 
             * @param queryOrListOrNode a DOM node or a query string or a query result.Represents the nodes to be adopted relative to thefirst element of this NodeList.             
             * @param position               Optionalcan be one of:"last" (default)"first""before""after""only""replace"or an offset in the childNodes property             
             */
            interface adopt{(queryOrListOrNode: any[], position: String): any}
            /**
             * places any/all elements in queryOrListOrNode at a
             * position relative to the first element in this list.
             * Returns a dojo/NodeList of the adopted elements.
             * 
             * @param queryOrListOrNode a DOM node or a query string or a query result.Represents the nodes to be adopted relative to thefirst element of this NodeList.             
             * @param position               Optionalcan be one of:"last" (default)"first""before""after""only""replace"or an offset in the childNodes property             
             */
            interface adopt{(queryOrListOrNode: HTMLElement, position: String): any}
            /**
             * Places the content after every node in the NodeList.
             * The content will be cloned if the length of NodeList
             * is greater than 1. Only the DOM nodes are cloned, not
             * any attached event handlers.
             * 
             * @param content             
             */
            interface after{(content: String): any}
            /**
             * Places the content after every node in the NodeList.
             * The content will be cloned if the length of NodeList
             * is greater than 1. Only the DOM nodes are cloned, not
             * any attached event handlers.
             * 
             * @param content             
             */
            interface after{(content: HTMLElement): any}
            /**
             * Places the content after every node in the NodeList.
             * The content will be cloned if the length of NodeList
             * is greater than 1. Only the DOM nodes are cloned, not
             * any attached event handlers.
             * 
             * @param content             
             */
            interface after{(content: NodeList): any}
            /**
             * Adds the nodes from the previous dojo/NodeList to the current dojo/NodeList.
             * .end() can be used on the returned dojo/NodeList to get back to the
             * original dojo/NodeList.
             * 
             */
            interface andSelf{(): any}
            /**
             * Animate one or more CSS properties for all nodes in this list.
             * The returned animation object will already be playing when it
             * is returned. See the docs for dojo.anim for full details.
             * 
             * @param properties the properties to animate. does NOT support the auto parameter like otherNodeList-fx methods.             
             * @param duration               OptionalOptional. The time to run the animations for             
             * @param easing               OptionalOptional. The easing function to use.             
             * @param onEnd               OptionalA function to be called when the animation ends             
             * @param delay               Optionalhow long to delay playing the returned animation             
             */
            interface anim{(properties: Object, duration: number, easing: Function, onEnd: Function, delay: number): any}
            /**
             * Animate all elements of this NodeList across the properties specified.
             * syntax identical to dojo.animateProperty
             * 
             * @param args               OptionalAdditional dojo/_base/fx.Animation arguments to mix into this set with the addition ofan auto parameter.             
             */
            interface animateProperty{(args: Object): any}
            /**
             * appends the content to every node in the NodeList.
             * The content will be cloned if the length of NodeList
             * is greater than 1. Only the DOM nodes are cloned, not
             * any attached event handlers.
             * 
             * @param content             
             */
            interface append{(content: String): any}
            /**
             * appends the content to every node in the NodeList.
             * The content will be cloned if the length of NodeList
             * is greater than 1. Only the DOM nodes are cloned, not
             * any attached event handlers.
             * 
             * @param content             
             */
            interface append{(content: HTMLElement): any}
            /**
             * appends the content to every node in the NodeList.
             * The content will be cloned if the length of NodeList
             * is greater than 1. Only the DOM nodes are cloned, not
             * any attached event handlers.
             * 
             * @param content             
             */
            interface append{(content: NodeList): any}
            /**
             * appends nodes in this NodeList to the nodes matched by
             * the query passed to appendTo.
             * The nodes in this NodeList will be cloned if the query
             * matches more than one element. Only the DOM nodes are cloned, not
             * any attached event handlers.
             * 
             * @param query             
             */
            interface appendTo{(query: String): any}
            /**
             * Returns a new NodeList comprised of items in this NodeList
             * at the given index or indices.
             * 
             * @param index One or more 0-based indices of items in the currentNodeList. A negative index will start at the end of thelist and go backwards.             
             */
            interface at{(index: number[]): any}
            /**
             * gets or sets the DOM attribute for every element in the
             * NodeList. See also dojo/dom-attr
             * 
             * @param property the attribute to get/set             
             * @param value               Optionaloptional. The value to set the property to             
             */
            interface attr{(property: String, value: String): any}
            /**
             * Places the content before every node in the NodeList.
             * The content will be cloned if the length of NodeList
             * is greater than 1. Only the DOM nodes are cloned, not
             * any attached event handlers.
             * 
             * @param content             
             */
            interface before{(content: String): any}
            /**
             * Places the content before every node in the NodeList.
             * The content will be cloned if the length of NodeList
             * is greater than 1. Only the DOM nodes are cloned, not
             * any attached event handlers.
             * 
             * @param content             
             */
            interface before{(content: HTMLElement): any}
            /**
             * Places the content before every node in the NodeList.
             * The content will be cloned if the length of NodeList
             * is greater than 1. Only the DOM nodes are cloned, not
             * any attached event handlers.
             * 
             * @param content             
             */
            interface before{(content: NodeList): any}
            /**
             * Returns all immediate child elements for nodes in this dojo/NodeList.
             * Optionally takes a query to filter the child elements.
             * .end() can be used on the returned dojo/NodeList to get back to the
             * original dojo/NodeList.
             * 
             * @param query               Optionala CSS selector.             
             */
            interface children{(query: String): any}
            /**
             * Clones all the nodes in this NodeList and returns them as a new NodeList.
             * Only the DOM nodes are cloned, not any attached event handlers.
             * 
             */
            interface clone{(): any}
            /**
             * Returns closest parent that matches query, including current node in this
             * dojo/NodeList if it matches the query.
             * .end() can be used on the returned dojo/NodeList to get back to the
             * original dojo/NodeList.
             * 
             * @param query a CSS selector.             
             * @param root               OptionalIf specified, query is relative to "root" rather than document body.             
             */
            interface closest{(query: String, root: String): any}
            /**
             * Returns closest parent that matches query, including current node in this
             * dojo/NodeList if it matches the query.
             * .end() can be used on the returned dojo/NodeList to get back to the
             * original dojo/NodeList.
             * 
             * @param query a CSS selector.             
             * @param root               OptionalIf specified, query is relative to "root" rather than document body.             
             */
            interface closest{(query: String, root: HTMLElement): any}
            /**
             * Returns a new NodeList comprised of items in this NodeList
             * as well as items passed in as parameters
             * This method behaves exactly like the Array.concat method
             * with the caveat that it returns a NodeList and not a
             * raw Array. For more details, see the Array.concat
             * docs
             * 
             * @param item               OptionalAny number of optional parameters may be passed in to bespliced into the NodeList             
             */
            interface concat{(item: Object): any}
            /**
             * Attach event handlers to every item of the NodeList. Uses dojo.connect()
             * so event properties are normalized.
             * 
             * Application must manually require() "dojo/_base/connect" before using this method.
             * 
             * @param methodName the name of the method to attach to. For DOM events, this should bethe lower-case name of the event             
             * @param objOrFunc if 2 arguments are passed (methodName, objOrFunc), objOrFunc shouldreference a function or be the name of the function in the globalnamespace to attach. If 3 arguments are provided(methodName, objOrFunc, funcName), objOrFunc must be the scope tolocate the bound function in             
             * @param funcName               Optionaloptional. A string naming the function in objOrFunc to bind to theevent. May also be a function reference.             
             */
            interface connect{(methodName: String, objOrFunc: Object, funcName: String): void}
            /**
             * Attach event handlers to every item of the NodeList. Uses dojo.connect()
             * so event properties are normalized.
             * 
             * Application must manually require() "dojo/_base/connect" before using this method.
             * 
             * @param methodName the name of the method to attach to. For DOM events, this should bethe lower-case name of the event             
             * @param objOrFunc if 2 arguments are passed (methodName, objOrFunc), objOrFunc shouldreference a function or be the name of the function in the globalnamespace to attach. If 3 arguments are provided(methodName, objOrFunc, funcName), objOrFunc must be the scope tolocate the bound function in             
             * @param funcName               Optionaloptional. A string naming the function in objOrFunc to bind to theevent. May also be a function reference.             
             */
            interface connect{(methodName: String, objOrFunc: Function, funcName: String): void}
            /**
             * Attach event handlers to every item of the NodeList. Uses dojo.connect()
             * so event properties are normalized.
             * 
             * Application must manually require() "dojo/_base/connect" before using this method.
             * 
             * @param methodName the name of the method to attach to. For DOM events, this should bethe lower-case name of the event             
             * @param objOrFunc if 2 arguments are passed (methodName, objOrFunc), objOrFunc shouldreference a function or be the name of the function in the globalnamespace to attach. If 3 arguments are provided(methodName, objOrFunc, funcName), objOrFunc must be the scope tolocate the bound function in             
             * @param funcName               Optionaloptional. A string naming the function in objOrFunc to bind to theevent. May also be a function reference.             
             */
            interface connect{(methodName: String, objOrFunc: String, funcName: String): void}
            /**
             * Deprecated: Use position() for border-box x/y/w/h
             * or marginBox() for margin-box w/h/l/t.
             * Returns the box objects of all elements in a node list as
             * an Array (not a NodeList). Acts like domGeom.coords, though assumes
             * the node passed is each node in this list.
             * 
             */
            interface coords{(): void}
            /**
             * stash or get some arbitrary data on/from these nodes.
             * Stash or get some arbitrary data on/from these nodes. This private _data function is
             * exposed publicly on dojo/NodeList, eg: as the result of a dojo/query call.
             * DIFFERS from jQuery.data in that when used as a getter, the entire list is ALWAYS
             * returned. EVEN WHEN THE LIST IS length == 1.
             * 
             * A single-node version of this function is provided as dojo._nodeData, which follows
             * the same signature, though expects a String ID or DomNode reference in the first
             * position, before key/value arguments.
             * 
             * @param key               OptionalIf an object, act as a setter and iterate over said object setting data items as defined.If a string, and value present, set the data for defined key to valueIf a string, and value absent, act as a getter, returning the data associated with said key             
             * @param value               OptionalThe value to set for said key, provided key is a string (and not an object)             
             */
            interface data{(key: Object, value: any): any}
            /**
             * stash or get some arbitrary data on/from these nodes.
             * Stash or get some arbitrary data on/from these nodes. This private _data function is
             * exposed publicly on dojo/NodeList, eg: as the result of a dojo/query call.
             * DIFFERS from jQuery.data in that when used as a getter, the entire list is ALWAYS
             * returned. EVEN WHEN THE LIST IS length == 1.
             * 
             * A single-node version of this function is provided as dojo._nodeData, which follows
             * the same signature, though expects a String ID or DomNode reference in the first
             * position, before key/value arguments.
             * 
             * @param key               OptionalIf an object, act as a setter and iterate over said object setting data items as defined.If a string, and value present, set the data for defined key to valueIf a string, and value absent, act as a getter, returning the data associated with said key             
             * @param value               OptionalThe value to set for said key, provided key is a string (and not an object)             
             */
            interface data{(key: String, value: any): any}
            /**
             * Monitor nodes in this NodeList for [bubbled] events on nodes that match selector.
             * Calls fn(evt) for those events, where (inside of fn()), this == the node
             * that matches the selector.
             * Sets up event handlers that can catch events on any subnodes matching a given selector,
             * including nodes created after delegate() has been called.
             * 
             * This allows an app to setup a single event handler on a high level node, rather than many
             * event handlers on subnodes. For example, one onclick handler for a Tree widget, rather than separate
             * handlers for each node in the tree.
             * Since setting up many event handlers is expensive, this can increase performance.
             * 
             * Note that delegate() will not work for events that don't bubble, like focus.
             * onmouseenter/onmouseleave also don't currently work.
             * 
             * @param selector CSS selector valid to dojo.query, like ".foo" or "div > span".  Theselector is relative to the nodes in this NodeList, not the document root.For example myNodeList.delegate("> a", "onclick", ...) will catch events onanchor nodes which are (immediate) children of the nodes in myNodeList.             
             * @param eventName Standard event name used as an argument to dojo.connect, like "onclick".             
             * @param fn Callback function passed the event object, and where this == the node that matches the selector.That means that for example, after setting up a handler viadojo.query("body").delegate("fieldset", "onclick", ...)clicking on a fieldset or any nodes inside of a fieldset will be reportedas a click on the fieldset itself.             
             */
            interface delegate{(selector: String, eventName: String, fn: Function): any}
            /**
             * Renders the specified template in each of the NodeList entries.
             * 
             * @param template The template string or location             
             * @param context The context object or location             
             */
            interface dtl{(template: String, context: Object): Function}
            /**
             * clears all content from each node in the list. Effectively
             * equivalent to removing all child nodes from every item in
             * the list.
             * 
             */
            interface empty{(): any}
            /**
             * Ends use of the current NodeList by returning the previous NodeList
             * that generated the current NodeList.
             * Returns the NodeList that generated the current NodeList. If there
             * is no parent NodeList, an empty NodeList is returned.
             * 
             */
            interface end{(): any}
            /**
             * Returns the even nodes in this dojo/NodeList as a dojo/NodeList.
             * .end() can be used on the returned dojo/NodeList to get back to the
             * original dojo/NodeList.
             * 
             */
            interface even{(): any}
            /**
             * see dojo/_base/array.every() and the Array.every
             * docs.
             * Takes the same structure of arguments and returns as
             * dojo/_base/array.every() with the caveat that the passed array is
             * implicitly this NodeList
             * 
             * @param callback the callback             
             * @param thisObject               Optionalthe context             
             */
            interface every{(callback: Function, thisObject: Object): any}
            /**
             * fade in all elements of this NodeList via dojo.fadeIn
             * 
             * @param args               OptionalAdditional dojo/_base/fx.Animation arguments to mix into this set with the addition ofan auto parameter.             
             */
            interface fadeIn{(args: Object): any}
            /**
             * fade out all elements of this NodeList via dojo.fadeOut
             * 
             * @param args               OptionalAdditional dojo/_base/fx.Animation arguments to mix into this set with the addition ofan auto parameter.             
             */
            interface fadeOut{(args: Object): any}
            /**
             * "masks" the built-in javascript filter() method (supported
             * in Dojo via dojo.filter) to support passing a simple
             * string filter in addition to supporting filtering function
             * objects.
             * 
             * @param filter If a string, a CSS rule like ".thinger" or "div > span".             
             */
            interface filter{(filter: String): any}
            /**
             * "masks" the built-in javascript filter() method (supported
             * in Dojo via dojo.filter) to support passing a simple
             * string filter in addition to supporting filtering function
             * objects.
             * 
             * @param filter If a string, a CSS rule like ".thinger" or "div > span".             
             */
            interface filter{(filter: Function): any}
            /**
             * Returns the first node in this dojo/NodeList as a dojo/NodeList.
             * .end() can be used on the returned dojo/NodeList to get back to the
             * original dojo/NodeList.
             * 
             */
            interface first{(): any}
            /**
             * see dojo/_base/array.forEach(). The primary difference is that the acted-on
             * array is implicitly this NodeList. If you want the option to break out
             * of the forEach loop, use every() or some() instead.
             * 
             * @param callback             
             * @param thisObj             
             */
            interface forEach{(callback: any, thisObj: any): Function}
            /**
             * allows setting the innerHTML of each node in the NodeList,
             * if there is a value passed in, otherwise, reads the innerHTML value of the first node.
             * This method is simpler than the dojo/NodeList.html() method provided by
             * dojo/NodeList-html. This method just does proper innerHTML insertion of HTML fragments,
             * and it allows for the innerHTML to be read for the first node in the node list.
             * Since dojo/NodeList-html already took the "html" name, this method is called
             * "innerHTML". However, if dojo/NodeList-html has not been loaded yet, this
             * module will define an "html" method that can be used instead. Be careful if you
             * are working in an environment where it is possible that dojo/NodeList-html could
             * have been loaded, since its definition of "html" will take precedence.
             * The nodes represented by the value argument will be cloned if more than one
             * node is in this NodeList. The nodes in this NodeList are returned in the "set"
             * usage of this method, not the HTML that was inserted.
             * 
             * @param value               Optional            
             */
            interface html{(value: String): any}
            /**
             * allows setting the innerHTML of each node in the NodeList,
             * if there is a value passed in, otherwise, reads the innerHTML value of the first node.
             * This method is simpler than the dojo/NodeList.html() method provided by
             * dojo/NodeList-html. This method just does proper innerHTML insertion of HTML fragments,
             * and it allows for the innerHTML to be read for the first node in the node list.
             * Since dojo/NodeList-html already took the "html" name, this method is called
             * "innerHTML". However, if dojo/NodeList-html has not been loaded yet, this
             * module will define an "html" method that can be used instead. Be careful if you
             * are working in an environment where it is possible that dojo/NodeList-html could
             * have been loaded, since its definition of "html" will take precedence.
             * The nodes represented by the value argument will be cloned if more than one
             * node is in this NodeList. The nodes in this NodeList are returned in the "set"
             * usage of this method, not the HTML that was inserted.
             * 
             * @param value               Optional            
             */
            interface html{(value: HTMLElement): any}
            /**
             * allows setting the innerHTML of each node in the NodeList,
             * if there is a value passed in, otherwise, reads the innerHTML value of the first node.
             * This method is simpler than the dojo/NodeList.html() method provided by
             * dojo/NodeList-html. This method just does proper innerHTML insertion of HTML fragments,
             * and it allows for the innerHTML to be read for the first node in the node list.
             * Since dojo/NodeList-html already took the "html" name, this method is called
             * "innerHTML". However, if dojo/NodeList-html has not been loaded yet, this
             * module will define an "html" method that can be used instead. Be careful if you
             * are working in an environment where it is possible that dojo/NodeList-html could
             * have been loaded, since its definition of "html" will take precedence.
             * The nodes represented by the value argument will be cloned if more than one
             * node is in this NodeList. The nodes in this NodeList are returned in the "set"
             * usage of this method, not the HTML that was inserted.
             * 
             * @param value               Optional            
             */
            interface html{(value: NodeList): any}
            /**
             * see dojo/_base/array.indexOf(). The primary difference is that the acted-on
             * array is implicitly this NodeList
             * For more details on the behavior of indexOf, see Mozilla's
             * indexOf
             * docs
             * 
             * @param value The value to search for.             
             * @param fromIndex               OptionalThe location to start searching from. Optional. Defaults to 0.             
             */
            interface indexOf{(value: Object, fromIndex: number): any}
            /**
             * allows setting the innerHTML of each node in the NodeList,
             * if there is a value passed in, otherwise, reads the innerHTML value of the first node.
             * This method is simpler than the dojo/NodeList.html() method provided by
             * dojo/NodeList-html. This method just does proper innerHTML insertion of HTML fragments,
             * and it allows for the innerHTML to be read for the first node in the node list.
             * Since dojo/NodeList-html already took the "html" name, this method is called
             * "innerHTML". However, if dojo/NodeList-html has not been loaded yet, this
             * module will define an "html" method that can be used instead. Be careful if you
             * are working in an environment where it is possible that dojo/NodeList-html could
             * have been loaded, since its definition of "html" will take precedence.
             * The nodes represented by the value argument will be cloned if more than one
             * node is in this NodeList. The nodes in this NodeList are returned in the "set"
             * usage of this method, not the HTML that was inserted.
             * 
             * @param value               Optional            
             */
            interface innerHTML{(value: String): any}
            /**
             * allows setting the innerHTML of each node in the NodeList,
             * if there is a value passed in, otherwise, reads the innerHTML value of the first node.
             * This method is simpler than the dojo/NodeList.html() method provided by
             * dojo/NodeList-html. This method just does proper innerHTML insertion of HTML fragments,
             * and it allows for the innerHTML to be read for the first node in the node list.
             * Since dojo/NodeList-html already took the "html" name, this method is called
             * "innerHTML". However, if dojo/NodeList-html has not been loaded yet, this
             * module will define an "html" method that can be used instead. Be careful if you
             * are working in an environment where it is possible that dojo/NodeList-html could
             * have been loaded, since its definition of "html" will take precedence.
             * The nodes represented by the value argument will be cloned if more than one
             * node is in this NodeList. The nodes in this NodeList are returned in the "set"
             * usage of this method, not the HTML that was inserted.
             * 
             * @param value               Optional            
             */
            interface innerHTML{(value: HTMLElement): any}
            /**
             * allows setting the innerHTML of each node in the NodeList,
             * if there is a value passed in, otherwise, reads the innerHTML value of the first node.
             * This method is simpler than the dojo/NodeList.html() method provided by
             * dojo/NodeList-html. This method just does proper innerHTML insertion of HTML fragments,
             * and it allows for the innerHTML to be read for the first node in the node list.
             * Since dojo/NodeList-html already took the "html" name, this method is called
             * "innerHTML". However, if dojo/NodeList-html has not been loaded yet, this
             * module will define an "html" method that can be used instead. Be careful if you
             * are working in an environment where it is possible that dojo/NodeList-html could
             * have been loaded, since its definition of "html" will take precedence.
             * The nodes represented by the value argument will be cloned if more than one
             * node is in this NodeList. The nodes in this NodeList are returned in the "set"
             * usage of this method, not the HTML that was inserted.
             * 
             * @param value               Optional            
             */
            interface innerHTML{(value: NodeList): any}
            /**
             * The nodes in this NodeList will be placed after the nodes
             * matched by the query passed to insertAfter.
             * The nodes in this NodeList will be cloned if the query
             * matches more than one element. Only the DOM nodes are cloned, not
             * any attached event handlers.
             * 
             * @param query             
             */
            interface insertAfter{(query: String): any}
            /**
             * The nodes in this NodeList will be placed after the nodes
             * matched by the query passed to insertAfter.
             * The nodes in this NodeList will be cloned if the query
             * matches more than one element. Only the DOM nodes are cloned, not
             * any attached event handlers.
             * 
             * @param query             
             */
            interface insertBefore{(query: String): any}
            /**
             * Create a new instance of a specified class, using the
             * specified properties and each node in the NodeList as a
             * srcNodeRef.
             * 
             * @param declaredClass             
             * @param properties               Optional            
             */
            interface instantiate{(declaredClass: String, properties: Object): any}
            /**
             * Create a new instance of a specified class, using the
             * specified properties and each node in the NodeList as a
             * srcNodeRef.
             * 
             * @param declaredClass             
             * @param properties               Optional            
             */
            interface instantiate{(declaredClass: Object, properties: Object): any}
            /**
             * Returns the last node in this dojo/NodeList as a dojo/NodeList.
             * .end() can be used on the returned dojo/NodeList to get back to the
             * original dojo/NodeList.
             * 
             */
            interface last{(): any}
            /**
             * see dojo/_base/array.lastIndexOf(). The primary difference is that the
             * acted-on array is implicitly this NodeList
             * For more details on the behavior of lastIndexOf, see
             * Mozilla's lastIndexOf
             * docs
             * 
             * @param value The value to search for.             
             * @param fromIndex               OptionalThe location to start searching from. Optional. Defaults to 0.             
             */
            interface lastIndexOf{(value: Object, fromIndex: number): any}
            /**
             * see dojo/_base/array.map(). The primary difference is that the acted-on
             * array is implicitly this NodeList and the return is a
             * NodeList (a subclass of Array)
             * 
             * @param func             
             * @param obj               Optional            
             */
            interface map{(func: Function, obj: Function): any}
            /**
             * Returns margin-box size of nodes
             * 
             */
            interface marginBox{(): void}
            /**
             * Returns the next element for nodes in this dojo/NodeList.
             * Optionally takes a query to filter the next elements.
             * .end() can be used on the returned dojo/NodeList to get back to the
             * original dojo/NodeList.
             * 
             * @param query               Optionala CSS selector.             
             */
            interface next{(query: String): any}
            /**
             * Returns all sibling elements that come after the nodes in this dojo/NodeList.
             * Optionally takes a query to filter the sibling elements.
             * .end() can be used on the returned dojo/NodeList to get back to the
             * original dojo/NodeList.
             * 
             * @param query               Optionala CSS selector.             
             */
            interface nextAll{(query: String): any}
            /**
             * Returns the odd nodes in this dojo/NodeList as a dojo/NodeList.
             * .end() can be used on the returned dojo/NodeList to get back to the
             * original dojo/NodeList.
             * 
             */
            interface odd{(): any}
            /**
             * Listen for events on the nodes in the NodeList. Basic usage is:
             * 
             * @param eventName             
             * @param listener             
             */
            interface on{(eventName: any, listener: any): any}
            /**
             * removes elements in this list that match the filter
             * from their parents and returns them as a new NodeList.
             * 
             * @param filter               OptionalCSS selector like ".foo" or "div > span"             
             */
            interface orphan{(filter: String): any}
            /**
             * Returns immediate parent elements for nodes in this dojo/NodeList.
             * Optionally takes a query to filter the parent elements.
             * .end() can be used on the returned dojo/NodeList to get back to the
             * original dojo/NodeList.
             * 
             * @param query               Optionala CSS selector.             
             */
            interface parent{(query: String): any}
            /**
             * Returns all parent elements for nodes in this dojo/NodeList.
             * Optionally takes a query to filter the child elements.
             * .end() can be used on the returned dojo/NodeList to get back to the
             * original dojo/NodeList.
             * 
             * @param query               Optionala CSS selector.             
             */
            interface parents{(query: String): any}
            /**
             * places elements of this node list relative to the first element matched
             * by queryOrNode. Returns the original NodeList. See: dojo/dom-construct.place
             * 
             * @param queryOrNode may be a string representing any valid CSS3 selector or a DOM node.In the selector case, only the first matching element will be usedfor relative positioning.             
             * @param position can be one of:"last" (default)"first""before""after""only""replace"or an offset in the childNodes property             
             */
            interface place{(queryOrNode: String, position: String): any}
            /**
             * places elements of this node list relative to the first element matched
             * by queryOrNode. Returns the original NodeList. See: dojo/dom-construct.place
             * 
             * @param queryOrNode may be a string representing any valid CSS3 selector or a DOM node.In the selector case, only the first matching element will be usedfor relative positioning.             
             * @param position can be one of:"last" (default)"first""before""after""only""replace"or an offset in the childNodes property             
             */
            interface place{(queryOrNode: HTMLElement, position: String): any}
            /**
             * Returns border-box objects (x/y/w/h) of all elements in a node list
             * as an Array (not a NodeList). Acts like dojo/dom-geometry-position, though
             * assumes the node passed is each node in this list.
             * 
             */
            interface position{(): any}
            /**
             * prepends the content to every node in the NodeList.
             * The content will be cloned if the length of NodeList
             * is greater than 1. Only the DOM nodes are cloned, not
             * any attached event handlers.
             * 
             * @param content             
             */
            interface prepend{(content: String): any}
            /**
             * prepends the content to every node in the NodeList.
             * The content will be cloned if the length of NodeList
             * is greater than 1. Only the DOM nodes are cloned, not
             * any attached event handlers.
             * 
             * @param content             
             */
            interface prepend{(content: HTMLElement): any}
            /**
             * prepends the content to every node in the NodeList.
             * The content will be cloned if the length of NodeList
             * is greater than 1. Only the DOM nodes are cloned, not
             * any attached event handlers.
             * 
             * @param content             
             */
            interface prepend{(content: NodeList): any}
            /**
             * prepends nodes in this NodeList to the nodes matched by
             * the query passed to prependTo.
             * The nodes in this NodeList will be cloned if the query
             * matches more than one element. Only the DOM nodes are cloned, not
             * any attached event handlers.
             * 
             * @param query             
             */
            interface prependTo{(query: String): any}
            /**
             * Returns the previous element for nodes in this dojo/NodeList.
             * Optionally takes a query to filter the previous elements.
             * .end() can be used on the returned dojo/NodeList to get back to the
             * original dojo/NodeList.
             * 
             * @param query               Optionala CSS selector.             
             */
            interface prev{(query: String): any}
            /**
             * Returns all sibling elements that come before the nodes in this dojo/NodeList.
             * Optionally takes a query to filter the sibling elements.
             * The returned nodes will be in reverse DOM order -- the first node in the list will
             * be the node closest to the original node/NodeList.
             * .end() can be used on the returned dojo/NodeList to get back to the
             * original dojo/NodeList.
             * 
             * @param query               Optionala CSS selector.             
             */
            interface prevAll{(query: String): any}
            /**
             * Returns a new list whose members match the passed query,
             * assuming elements of the current NodeList as the root for
             * each search.
             * 
             * @param queryStr             
             */
            interface query{(queryStr: String): any}
            /**
             * removes elements in this list that match the filter
             * from their parents and returns them as a new NodeList.
             * 
             * @param filter               OptionalCSS selector like ".foo" or "div > span"             
             */
            interface remove{(filter: String): any}
            /**
             * Removes an attribute from each node in the list.
             * 
             * @param name the name of the attribute to remove             
             */
            interface removeAttr{(name: String): void}
            /**
             * removes the specified class from every node in the list
             * 
             * @param className               OptionalAn optional String class name to remove, or several space-separatedclass names, or an array of class names. If omitted, all class nameswill be deleted.             
             */
            interface removeClass{(className: String): any}
            /**
             * removes the specified class from every node in the list
             * 
             * @param className               OptionalAn optional String class name to remove, or several space-separatedclass names, or an array of class names. If omitted, all class nameswill be deleted.             
             */
            interface removeClass{(className: any[]): any}
            /**
             * Animate the effect of removing a class to all nodes in this list.
             * see dojox.fx.removeClass
             * 
             * @param cssClass             
             * @param args             
             */
            interface removeClassFx{(cssClass: any, args: any): {type:Function;value:any}}
            /**
             * Remove the data associated with these nodes.
             * 
             * @param key               OptionalIf omitted, clean all data for this node.If passed, remove the data item found at key             
             */
            interface removeData{(key: String): void}
            /**
             * replaces nodes matched by the query passed to replaceAll with the nodes
             * in this NodeList.
             * The nodes in this NodeList will be cloned if the query
             * matches more than one element. Only the DOM nodes are cloned, not
             * any attached event handlers.
             * 
             * @param query             
             */
            interface replaceAll{(query: String): any}
            /**
             * Replaces one or more classes on a node if not present.
             * Operates more quickly than calling removeClass() and addClass()
             * 
             * @param addClassStr A String class name to add, or several space-separated class names,or an array of class names.             
             * @param removeClassStr               OptionalA String class name to remove, or several space-separated class names,or an array of class names.             
             */
            interface replaceClass{(addClassStr: String, removeClassStr: String): void}
            /**
             * Replaces one or more classes on a node if not present.
             * Operates more quickly than calling removeClass() and addClass()
             * 
             * @param addClassStr A String class name to add, or several space-separated class names,or an array of class names.             
             * @param removeClassStr               OptionalA String class name to remove, or several space-separated class names,or an array of class names.             
             */
            interface replaceClass{(addClassStr: any[], removeClassStr: String): void}
            /**
             * Replaces one or more classes on a node if not present.
             * Operates more quickly than calling removeClass() and addClass()
             * 
             * @param addClassStr A String class name to add, or several space-separated class names,or an array of class names.             
             * @param removeClassStr               OptionalA String class name to remove, or several space-separated class names,or an array of class names.             
             */
            interface replaceClass{(addClassStr: String, removeClassStr: any[]): void}
            /**
             * Replaces one or more classes on a node if not present.
             * Operates more quickly than calling removeClass() and addClass()
             * 
             * @param addClassStr A String class name to add, or several space-separated class names,or an array of class names.             
             * @param removeClassStr               OptionalA String class name to remove, or several space-separated class names,or an array of class names.             
             */
            interface replaceClass{(addClassStr: any[], removeClassStr: any[]): void}
            /**
             * Replaces each node in ths NodeList with the content passed to replaceWith.
             * The content will be cloned if the length of NodeList
             * is greater than 1. Only the DOM nodes are cloned, not
             * any attached event handlers.
             * 
             * @param content             
             */
            interface replaceWith{(content: String): any}
            /**
             * Replaces each node in ths NodeList with the content passed to replaceWith.
             * The content will be cloned if the length of NodeList
             * is greater than 1. Only the DOM nodes are cloned, not
             * any attached event handlers.
             * 
             * @param content             
             */
            interface replaceWith{(content: HTMLElement): any}
            /**
             * Replaces each node in ths NodeList with the content passed to replaceWith.
             * The content will be cloned if the length of NodeList
             * is greater than 1. Only the DOM nodes are cloned, not
             * any attached event handlers.
             * 
             * @param content             
             */
            interface replaceWith{(content: NodeList): any}
            /**
             * Returns all sibling elements for nodes in this dojo/NodeList.
             * Optionally takes a query to filter the sibling elements.
             * .end() can be used on the returned dojo/NodeList to get back to the
             * original dojo/NodeList.
             * 
             * @param query               Optionala CSS selector.             
             */
            interface siblings{(query: String): any}
            /**
             * Returns a new NodeList, maintaining this one in place
             * This method behaves exactly like the Array.slice method
             * with the caveat that it returns a dojo/NodeList and not a
             * raw Array. For more details, see Mozilla's slice
             * documentation
             * 
             * @param begin Can be a positive or negative integer, with positiveintegers noting the offset to begin at, and negativeintegers denoting an offset from the end (i.e., to the leftof the end)             
             * @param end               OptionalOptional parameter to describe what position relative tothe NodeList's zero index to end the slice at. Like begin,can be positive or negative.             
             */
            interface slice{(begin: number, end: number): any}
            /**
             * slide all elements of the node list to the specified place via dojo/fx.slideTo()
             * 
             * @param args               OptionalAdditional dojo/_base/fx.Animation arguments to mix into this set with the addition ofan auto parameter.             
             */
            interface slideTo{(args: Object): any}
            /**
             * Takes the same structure of arguments and returns as
             * dojo/_base/array.some() with the caveat that the passed array is
             * implicitly this NodeList.  See dojo/_base/array.some() and Mozilla's
             * Array.some
             * documentation.
             * 
             * @param callback the callback             
             * @param thisObject               Optionalthe context             
             */
            interface some{(callback: Function, thisObject: Object): any}
            /**
             * Returns a new NodeList, manipulating this NodeList based on
             * the arguments passed, potentially splicing in new elements
             * at an offset, optionally deleting elements
             * This method behaves exactly like the Array.splice method
             * with the caveat that it returns a dojo/NodeList and not a
             * raw Array. For more details, see Mozilla's splice
             * documentation
             * For backwards compatibility, calling .end() on the spliced NodeList
             * does not return the original NodeList -- splice alters the NodeList in place.
             * 
             * @param index begin can be a positive or negative integer, with positiveintegers noting the offset to begin at, and negativeintegers denoting an offset from the end (i.e., to the leftof the end)             
             * @param howmany               OptionalOptional parameter to describe what position relative tothe NodeList's zero index to end the slice at. Like begin,can be positive or negative.             
             * @param item               OptionalAny number of optional parameters may be passed in to bespliced into the NodeList             
             */
            interface splice{(index: number, howmany: number, item: Object[]): any}
            /**
             * gets or sets the CSS property for every element in the NodeList
             * 
             * @param property the CSS property to get/set, in JavaScript notation("lineHieght" instead of "line-height")             
             * @param value               Optionaloptional. The value to set the property to             
             */
            interface style{(property: String, value: String): any}
            /**
             * allows setting the text value of each node in the NodeList,
             * if there is a value passed in, otherwise, returns the text value for all the
             * nodes in the NodeList in one string.
             * 
             * @param value             
             */
            interface text{(value: String): any}
            /**
             * Adds a class to node if not present, or removes if present.
             * Pass a boolean condition if you want to explicitly add or remove.
             * 
             * @param className the CSS class to add             
             * @param condition               OptionalIf passed, true means to add the class, false means to remove.             
             */
            interface toggleClass{(className: String, condition: boolean): void}
            /**
             * Animate the effect of adding or removing a class to all nodes in this list.
             * see dojox.fx.toggleClass
             * 
             * @param cssClass             
             * @param force             
             * @param args             
             */
            interface toggleClassFx{(cssClass: any, force: any, args: any): {type:Function;value:any}}
            /**
             * 
             */
            interface toString{(): any}
            /**
             * If a value is passed, allows seting the value property of form elements in this
             * NodeList, or properly selecting/checking the right value for radio/checkbox/select
             * elements. If no value is passed, the value of the first node in this NodeList
             * is returned.
             * 
             * @param value             
             */
            interface val{(value: String): any}
            /**
             * If a value is passed, allows seting the value property of form elements in this
             * NodeList, or properly selecting/checking the right value for radio/checkbox/select
             * elements. If no value is passed, the value of the first node in this NodeList
             * is returned.
             * 
             * @param value             
             */
            interface val{(value: any[]): any}
            /**
             * wipe in all elements of this NodeList via dojo/fx.wipeIn()
             * 
             * @param args               OptionalAdditional dojo/_base/fx.Animation arguments to mix into this set with the addition ofan auto parameter.             
             */
            interface wipeIn{(args: Object): any}
            /**
             * wipe out all elements of this NodeList via dojo/fx.wipeOut()
             * 
             * @param args               OptionalAdditional dojo/_base/fx.Animation arguments to mix into this set with the addition ofan auto parameter.             
             */
            interface wipeOut{(args: Object): any}
            /**
             * Wrap each node in the NodeList with html passed to wrap.
             * html will be cloned if the NodeList has more than one
             * element. Only DOM nodes are cloned, not any attached
             * event handlers.
             * 
             * @param html             
             */
            interface wrap{(html: String): any}
            /**
             * Wrap each node in the NodeList with html passed to wrap.
             * html will be cloned if the NodeList has more than one
             * element. Only DOM nodes are cloned, not any attached
             * event handlers.
             * 
             * @param html             
             */
            interface wrap{(html: HTMLElement): any}
            /**
             * Insert html where the first node in this NodeList lives, then place all
             * nodes in this NodeList as the child of the html.
             * 
             * @param html             
             */
            interface wrapAll{(html: String): any}
            /**
             * Insert html where the first node in this NodeList lives, then place all
             * nodes in this NodeList as the child of the html.
             * 
             * @param html             
             */
            interface wrapAll{(html: HTMLElement): any}
            /**
             * For each node in the NodeList, wrap all its children with the passed in html.
             * html will be cloned if the NodeList has more than one
             * element. Only DOM nodes are cloned, not any attached
             * event handlers.
             * 
             * @param html             
             */
            interface wrapInner{(html: String): any}
            /**
             * For each node in the NodeList, wrap all its children with the passed in html.
             * html will be cloned if the NodeList has more than one
             * element. Only DOM nodes are cloned, not any attached
             * event handlers.
             * 
             * @param html             
             */
            interface wrapInner{(html: HTMLElement): any}
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/NodeList/delegate._nodeDataCache.html
             *
             * 
             */
            interface _nodeDataCache {
            }
        }

    }

}