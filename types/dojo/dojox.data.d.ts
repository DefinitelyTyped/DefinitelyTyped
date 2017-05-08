// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace dojox {


    namespace data {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/restListener.html
         *
         * this function can be used to receive REST notifications, from Comet or from another frame
         *
         * @param message
         */
        interface restListener{(message: any): void}
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/AndOrReadStore.html
         *
         * AndOrReadStore uses ItemFileReadStore as a base, modifying only the query (_fetchItems) section.
         * Supports queries of the form: query:"id:1 OR dept:'Sales Department' || (id:2 && NOT dept:S*)"
         * Includes legacy/widget support via:
         *
         * query:{complexQuery:"id:1* OR dept:'Sales Department' || (id:2* && NOT dept:S*)"}
         * The ItemFileReadStore implements the dojo/data/api/Read API and reads
         *
         * data from JSON files that have contents in this format --
         *
         * { items: [
         *     { name:'Kermit', color:'green', age:12, friends:['Gonzo', {_reference:{name:'Fozzie Bear'}}]},
         *     { name:'Fozzie Bear', wears:['hat', 'tie']},
         *     { name:'Miss Piggy', pets:'Foo-Foo'}
         * ]}
         * Note that it can also contain an 'identifier' property that specified which attribute on the items
         *
         * in the array of items that acts as the unique identifier for that item.
         *
         * @param keywordParameters {url: String} {data: jsonObject} {typeMap: object}The structure of the typeMap object is as follows:{    type0: function || object,    type1: function || object,    ...    typeN: function || object}Where if it is a function, it is assumed to be an object constructor that takes thevalue of _value as the initialization parameters.  If it is an object, then it is assumedto be an object of general form:{    type: function, //constructor.    deserialize:    function(value) //The function that parses the value and constructs the object defined by type appropriately.}
         */
        class AndOrReadStore extends dojo.data.ItemFileReadStore {
            constructor(keywordParameters: Object);
            /**
             * Parameter to allow users to specify if a close call should force a reload or not.
             * By default, it retains the old behavior of not clearing if close is called.  But
             * if set true, the store will be reset to default state.  Note that by doing this,
             * all item handles will become invalid and a new fetch must be issued.
             *
             */
            "clearOnClose": boolean;
            /**
             *
             */
            "data": Object;
            /**
             * Parameter for specifying that it is OK for the xhrGet call to fail silently.
             *
             */
            "failOk": boolean;
            /**
             * Parameter to indicate to process data from the url as hierarchical
             * (data items can contain other data items in js form).  Default is true
             * for backwards compatibility.  False means only root items are processed
             * as items, all child objects outside of type-mapped objects and those in
             * specific reference format, are left straight JS data objects.
             *
             */
            "hierarchical": boolean;
            /**
             *
             */
            "typeMap": Object;
            /**
             *
             */
            "url": string;
            /**
             * Parameter to allow specifying if preventCache should be passed to the xhrGet call or not when loading data from a url.
             * Note this does not mean the store calls the server on each fetch, only that the data load has preventCache set as an option.
             * Added for tracker: #6072
             *
             */
            "urlPreventCache": boolean;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request               Optional
             */
            close(request: dojo.data.api.Request ): void;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request               Optional
             */
            close(request: Object): void;
            /**
             * See dojo/data/api/Read.containsValue()
             *
             * @param item
             * @param attribute
             * @param value
             */
            containsValue(item: dojo.data.api.Item, attribute: String, value: any): any;
            /**
             *
             * @param type
             * @param event
             */
            emit(type: any, event: any): any;
            /**
             * The error handler when there is an error fetching items.  This function should not be called
             * directly and is used by simpleFetch.fetch().
             *
             * @param errorData
             * @param requestObject
             */
            errorHandler(errorData: Object, requestObject: Object): void;
            /**
             * The simpleFetch mixin is designed to serve as a set of function(s) that can
             * be mixed into other datastore implementations to accelerate their development.
             * The simpleFetch mixin should work well for any datastore that can respond to a _fetchItems()
             * call by returning an array of all the found items that matched the query.  The simpleFetch mixin
             * is not designed to work for datastores that respond to a fetch() call by incrementally
             * loading items, or sequentially loading partial batches of the result
             * set.  For datastores that mixin simpleFetch, simpleFetch
             * implements a fetch method that automatically handles eight of the fetch()
             * arguments -- onBegin, onItem, onComplete, onError, start, count, sort and scope
             * The class mixing in simpleFetch should not implement fetch(),
             * but should instead implement a _fetchItems() method.  The _fetchItems()
             * method takes three arguments, the keywordArgs object that was passed
             * to fetch(), a callback function to be called when the result array is
             * available, and an error callback to be called if something goes wrong.
             * The _fetchItems() method should ignore any keywordArgs parameters for
             * start, count, onBegin, onItem, onComplete, onError, sort, and scope.
             * The _fetchItems() method needs to correctly handle any other keywordArgs
             * parameters, including the query parameter and any optional parameters
             * (such as includeChildren).  The _fetchItems() method should create an array of
             * result items and pass it to the fetchHandler along with the original request object --
             * or, the _fetchItems() method may, if it wants to, create an new request object
             * with other specifics about the request that are specific to the datastore and pass
             * that as the request object to the handler.
             *
             * For more information on this specific function, see dojo/data/api/Read.fetch()
             *
             * @param request               OptionalThe keywordArgs parameter may either be an instance ofconforming to dojo/data/api/Request or may be a simple anonymous objectthat may contain any of the following:{    query: query-object or query-string,    queryOptions: object,    onBegin: Function,    onItem: Function,    onComplete: Function,    onError: Function,    scope: object,    start: int    count: int    sort: array}All implementations should accept keywordArgs objects with any ofthe 9 standard properties: query, onBegin, onItem, onComplete, onErrorscope, sort, start, and count.  Some implementations may accept additionalproperties in the keywordArgs object as valid parameters, such as{includeOutliers:true}.The query parameterThe query may be optional in some data store implementations.The dojo/data/api/Read API does not specify the syntax or semanticsof the query itself -- each different data store implementationmay have its own notion of what a query should look like.However, as of dojo 0.9, 1.0, and 1.1, all the provided datastores in dojo.dataand dojox.data support an object structure query, where the object is a set ofname/value parameters such as { attrFoo: valueBar, attrFoo1: valueBar1}.  Most of thedijit widgets, such as ComboBox assume this to be the case when working with a datastorewhen they dynamically update the query.  Therefore, for maximum compatibility with dijitwidgets the recommended query parameter is a key/value object.  That does not mean that thethe datastore may not take alternative query forms, such as a simple string, a Date, a number,or a mix of such.  Ultimately, The dojo/data/api/Read API is agnostic about what the queryformat.Further note:  In general for query objects that accept strings as attributevalue matches, the store should also support basic filtering capability, such as (match any character) and ? (match single character).  An example query that is a query objectwould be like: { attrFoo: "value"}.  Which generally means match all items where they havean attribute named attrFoo, with a value that starts with 'value'.The queryOptions parameterThe queryOptions parameter is an optional parameter used to specify options that may modifythe query in some fashion, such as doing a case insensitive search, or doing a deep searchwhere all items in a hierarchical representation of data are scanned instead of just the rootitems.  It currently defines two options that all datastores should attempt to honor if possible:{    ignoreCase: boolean, // Whether or not the query should match case sensitively or not.  Default behaviour is false.    deep: boolean   // Whether or not a fetch should do a deep search of items and all child                    // items instead of just root-level items in a datastore.  Default is false.}The onBegin parameter.function(size, request);If an onBegin callback function is provided, the callback functionwill be called just once, before the first onItem callback is called.The onBegin callback function will be passed two arguments, thethe total number of items identified and the Request object.  If the total number isunknown, then size will be -1.  Note that size is not necessarily the size of thecollection of items returned from the query, as the request may have specified to return only asubset of the total set of items through the use of the start and count parameters.The onItem parameter.function(item, request);If an onItem callback function is provided, the callback functionwill be called as each item in the result is received. The callbackfunction will be passed two arguments: the item itself, and theRequest object.The onComplete parameter.function(items, request);If an onComplete callback function is provided, the callback functionwill be called just once, after the last onItem callback is called.Note that if the onItem callback is not present, then onComplete will be passedan array containing all items which matched the query and the request object.If the onItem callback is present, then onComplete is called as:onComplete(null, request).The onError parameter.function(errorData, request);If an onError callback function is provided, the callback functionwill be called if there is any sort of error while attempting toexecute the query.The onError callback function will be passed two arguments:an Error object and the Request object.The scope parameter.If a scope object is provided, all of the callback functions (onItem,onComplete, onError, etc) will be invoked in the context of the scopeobject.  In the body of the callback function, the value of the "this"keyword will be the scope object.   If no scope object is provided,the callback functions will be called in the context of dojo.global().For example, onItem.call(scope, item, request) vs.onItem.call(dojo.global(), item, request)The start parameter.If a start parameter is specified, this is a indication to the datastore toonly start returning items once the start number of items have been located andskipped.  When this parameter is paired with 'count', the store should be ableto page across queries with millions of hits by only returning subsets of thehits for each queryThe count parameter.If a count parameter is specified, this is a indication to the datastore toonly return up to that many items.  This allows a fetch call that may havemillions of item matches to be paired down to something reasonable.The sort parameter.If a sort parameter is specified, this is a indication to the datastore tosort the items in some manner before returning the items.  The array is an array ofjavascript objects that must conform to the following format to be applied to thefetching of items:{    attribute: attribute || attribute-name-string,    descending: true|false;   // Optional.  Default is false.}Note that when comparing attributes, if an item contains no value for the attribute(undefined), then it the default ascending sort logic should push it to the bottomof the list.  In the descending order case, it such items should appear at the top of the list.
             */
            fetch(request: Object): void;
            /**
             * The handler when items are sucessfully fetched.  This function should not be called directly
             * and is used by simpleFetch.fetch().
             *
             * @param items
             * @param requestObject
             */
            fetchHandler(items: any[], requestObject: Object): void;
            /**
             * See dojo/data/api/Identity.fetchItemByIdentity()
             *
             * @param keywordArgs
             */
            fetchItemByIdentity(keywordArgs: Object): void;
            /**
             *
             * @param requestArgs
             * @param arrayOfItems
             * @param findCallback
             */
            filter(requestArgs: any, arrayOfItems: any, findCallback: any): void;
            /**
             * See dojo/data/api/Read.getAttributes()
             *
             * @param item
             */
            getAttributes(item: dojo.data.api.Item): any[];
            /**
             * See dojo/data/api/Read.getFeatures()
             *
             */
            getFeatures(): any;
            /**
             * See dojo/data/api/Identity.getIdentity()
             *
             * @param item
             */
            getIdentity(item: dojo.data.api.Item): any;
            /**
             * See dojo/data/api/Identity.getIdentityAttributes()
             *
             * @param item
             */
            getIdentityAttributes(item: dojo.data.api.Item): any;
            /**
             * See dojo/data/api/Read.getLabel()
             *
             * @param item
             */
            getLabel(item: dojo.data.api.Item): any;
            /**
             * See dojo/data/api/Read.getLabelAttributes()
             *
             * @param item
             */
            getLabelAttributes(item: dojo.data.api.Item): any;
            /**
             * See dojo/data/api/Read.getValue()
             *
             * @param item
             * @param attribute
             * @param defaultValue               Optional
             */
            getValue(item: dojo.data.api.Item, attribute: String, defaultValue: any): any;
            /**
             * See dojo/data/api/Read.getValues()
             *
             * @param item
             * @param attribute
             */
            getValues(item: dojo.data.api.Item, attribute: String): any;
            /**
             * See dojo/data/api/Read.hasAttribute()
             *
             * @param item
             * @param attribute
             */
            hasAttribute(item: dojo.data.api.Item, attribute: String): boolean;
            /**
             * See dojo/data/api/Read.isItem()
             *
             * @param something
             */
            isItem(something: any): boolean;
            /**
             * See dojo/data/api/Read.isItemLoaded()
             *
             * @param something
             */
            isItemLoaded(something: any): any;
            /**
             * See dojo/data/api/Read.loadItem()
             *
             * @param keywordArgs
             */
            loadItem(keywordArgs: Object): void;
            /**
             *
             * @param type
             * @param listener
             */
            on(type: any, listener: any): any;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/AndOrWriteStore.html
         *
         *
         * @param keywordParameters The structure of the typeMap object is as follows:{    type0: function || object,    type1: function || object,    ...    typeN: function || object}Where if it is a function, it is assumed to be an object constructor that takes thevalue of _value as the initialization parameters.  It is serialized assuming object.toString()serialization.  If it is an object, then it is assumedto be an object of general form:{    type: function, //constructor.    deserialize:    function(value) //The function that parses the value and constructs the object defined by type appropriately.    serialize:  function(object) //The function that converts the object back into the proper file format form.}
         */
        class AndOrWriteStore extends dojo.data.ItemFileWriteStore implements dojox.data.AndOrReadStore {
            constructor(keywordParameters: Object);
            /**
             * Parameter to allow users to specify if a close call should force a reload or not.
             * By default, it retains the old behavior of not clearing if close is called.  But
             * if set true, the store will be reset to default state.  Note that by doing this,
             * all item handles will become invalid and a new fetch must be issued.
             *
             */
            "clearOnClose": boolean;
            /**
             *
             */
            "data": Object;
            /**
             * Parameter for specifying that it is OK for the xhrGet call to fail silently.
             *
             */
            "failOk": boolean;
            /**
             * Parameter to indicate to process data from the url as hierarchical
             * (data items can contain other data items in js form).  Default is true
             * for backwards compatibility.  False means only root items are processed
             * as items, all child objects outside of type-mapped objects and those in
             * specific reference format, are left straight JS data objects.
             *
             */
            "hierarchical": boolean;
            /**
             *
             */
            "referenceIntegrity": boolean;
            /**
             *
             */
            "typeMap": Object;
            /**
             *
             */
            "url": string;
            /**
             * Parameter to allow specifying if preventCache should be passed to the xhrGet call or not when loading data from a url.
             * Note this does not mean the store calls the server on each fetch, only that the data load has preventCache set as an option.
             * Added for tracker: #6072
             *
             */
            "urlPreventCache": boolean;
            /**
             * Over-ride of base close function of ItemFileReadStore to add in check for store state.
             * Over-ride of base close function of ItemFileReadStore to add in check for store state.
             * If the store is still dirty (unsaved changes), then an error will be thrown instead of
             * clearing the internal state for reload from the url.
             *
             * @param request               Optional
             */
            close(request: Object): void;
            /**
             * See dojo/data/api/Read.containsValue()
             *
             * @param item
             * @param attribute
             * @param value
             */
            containsValue(item: dojo.data.api.Item, attribute: String, value: any): any;
            /**
             * See dojo/data/api/Write.deleteItem()
             *
             * @param item
             */
            deleteItem(item: dojo.data.api.Item): boolean;
            /**
             *
             * @param type
             * @param event
             */
            emit(type: any, event: any): any;
            /**
             * The error handler when there is an error fetching items.  This function should not be called
             * directly and is used by simpleFetch.fetch().
             *
             * @param errorData
             * @param requestObject
             */
            errorHandler(errorData: Object, requestObject: Object): void;
            /**
             * The simpleFetch mixin is designed to serve as a set of function(s) that can
             * be mixed into other datastore implementations to accelerate their development.
             * The simpleFetch mixin should work well for any datastore that can respond to a _fetchItems()
             * call by returning an array of all the found items that matched the query.  The simpleFetch mixin
             * is not designed to work for datastores that respond to a fetch() call by incrementally
             * loading items, or sequentially loading partial batches of the result
             * set.  For datastores that mixin simpleFetch, simpleFetch
             * implements a fetch method that automatically handles eight of the fetch()
             * arguments -- onBegin, onItem, onComplete, onError, start, count, sort and scope
             * The class mixing in simpleFetch should not implement fetch(),
             * but should instead implement a _fetchItems() method.  The _fetchItems()
             * method takes three arguments, the keywordArgs object that was passed
             * to fetch(), a callback function to be called when the result array is
             * available, and an error callback to be called if something goes wrong.
             * The _fetchItems() method should ignore any keywordArgs parameters for
             * start, count, onBegin, onItem, onComplete, onError, sort, and scope.
             * The _fetchItems() method needs to correctly handle any other keywordArgs
             * parameters, including the query parameter and any optional parameters
             * (such as includeChildren).  The _fetchItems() method should create an array of
             * result items and pass it to the fetchHandler along with the original request object --
             * or, the _fetchItems() method may, if it wants to, create an new request object
             * with other specifics about the request that are specific to the datastore and pass
             * that as the request object to the handler.
             *
             * For more information on this specific function, see dojo/data/api/Read.fetch()
             *
             * @param request               OptionalThe keywordArgs parameter may either be an instance ofconforming to dojo/data/api/Request or may be a simple anonymous objectthat may contain any of the following:{    query: query-object or query-string,    queryOptions: object,    onBegin: Function,    onItem: Function,    onComplete: Function,    onError: Function,    scope: object,    start: int    count: int    sort: array}All implementations should accept keywordArgs objects with any ofthe 9 standard properties: query, onBegin, onItem, onComplete, onErrorscope, sort, start, and count.  Some implementations may accept additionalproperties in the keywordArgs object as valid parameters, such as{includeOutliers:true}.The query parameterThe query may be optional in some data store implementations.The dojo/data/api/Read API does not specify the syntax or semanticsof the query itself -- each different data store implementationmay have its own notion of what a query should look like.However, as of dojo 0.9, 1.0, and 1.1, all the provided datastores in dojo.dataand dojox.data support an object structure query, where the object is a set ofname/value parameters such as { attrFoo: valueBar, attrFoo1: valueBar1}.  Most of thedijit widgets, such as ComboBox assume this to be the case when working with a datastorewhen they dynamically update the query.  Therefore, for maximum compatibility with dijitwidgets the recommended query parameter is a key/value object.  That does not mean that thethe datastore may not take alternative query forms, such as a simple string, a Date, a number,or a mix of such.  Ultimately, The dojo/data/api/Read API is agnostic about what the queryformat.Further note:  In general for query objects that accept strings as attributevalue matches, the store should also support basic filtering capability, such as (match any character) and ? (match single character).  An example query that is a query objectwould be like: { attrFoo: "value"}.  Which generally means match all items where they havean attribute named attrFoo, with a value that starts with 'value'.The queryOptions parameterThe queryOptions parameter is an optional parameter used to specify options that may modifythe query in some fashion, such as doing a case insensitive search, or doing a deep searchwhere all items in a hierarchical representation of data are scanned instead of just the rootitems.  It currently defines two options that all datastores should attempt to honor if possible:{    ignoreCase: boolean, // Whether or not the query should match case sensitively or not.  Default behaviour is false.    deep: boolean   // Whether or not a fetch should do a deep search of items and all child                    // items instead of just root-level items in a datastore.  Default is false.}The onBegin parameter.function(size, request);If an onBegin callback function is provided, the callback functionwill be called just once, before the first onItem callback is called.The onBegin callback function will be passed two arguments, thethe total number of items identified and the Request object.  If the total number isunknown, then size will be -1.  Note that size is not necessarily the size of thecollection of items returned from the query, as the request may have specified to return only asubset of the total set of items through the use of the start and count parameters.The onItem parameter.function(item, request);If an onItem callback function is provided, the callback functionwill be called as each item in the result is received. The callbackfunction will be passed two arguments: the item itself, and theRequest object.The onComplete parameter.function(items, request);If an onComplete callback function is provided, the callback functionwill be called just once, after the last onItem callback is called.Note that if the onItem callback is not present, then onComplete will be passedan array containing all items which matched the query and the request object.If the onItem callback is present, then onComplete is called as:onComplete(null, request).The onError parameter.function(errorData, request);If an onError callback function is provided, the callback functionwill be called if there is any sort of error while attempting toexecute the query.The onError callback function will be passed two arguments:an Error object and the Request object.The scope parameter.If a scope object is provided, all of the callback functions (onItem,onComplete, onError, etc) will be invoked in the context of the scopeobject.  In the body of the callback function, the value of the "this"keyword will be the scope object.   If no scope object is provided,the callback functions will be called in the context of dojo.global().For example, onItem.call(scope, item, request) vs.onItem.call(dojo.global(), item, request)The start parameter.If a start parameter is specified, this is a indication to the datastore toonly start returning items once the start number of items have been located andskipped.  When this parameter is paired with 'count', the store should be ableto page across queries with millions of hits by only returning subsets of thehits for each queryThe count parameter.If a count parameter is specified, this is a indication to the datastore toonly return up to that many items.  This allows a fetch call that may havemillions of item matches to be paired down to something reasonable.The sort parameter.If a sort parameter is specified, this is a indication to the datastore tosort the items in some manner before returning the items.  The array is an array ofjavascript objects that must conform to the following format to be applied to thefetching of items:{    attribute: attribute || attribute-name-string,    descending: true|false;   // Optional.  Default is false.}Note that when comparing attributes, if an item contains no value for the attribute(undefined), then it the default ascending sort logic should push it to the bottomof the list.  In the descending order case, it such items should appear at the top of the list.
             */
            fetch(request: Object): void;
            /**
             * The handler when items are sucessfully fetched.  This function should not be called directly
             * and is used by simpleFetch.fetch().
             *
             * @param items
             * @param requestObject
             */
            fetchHandler(items: any[], requestObject: Object): void;
            /**
             * See dojo/data/api/Identity.fetchItemByIdentity()
             *
             * @param keywordArgs
             */
            fetchItemByIdentity(keywordArgs: Object): void;
            /**
             * This method handles the basic filtering needs for ItemFile* based stores.
             *
             * @param requestArgs
             * @param arrayOfItems
             * @param findCallback
             */
            filter(requestArgs: Object, arrayOfItems: any[], findCallback: Function): void;
            /**
             * See dojo/data/api/Read.getAttributes()
             *
             * @param item
             */
            getAttributes(item: dojo.data.api.Item): any[];
            /**
             * See dojo/data/api/Read.getFeatures()
             *
             */
            getFeatures(): any;
            /**
             * See dojo/data/api/Identity.getIdentity()
             *
             * @param item
             */
            getIdentity(item: dojo.data.api.Item): any;
            /**
             * See dojo/data/api/Identity.getIdentityAttributes()
             *
             * @param item
             */
            getIdentityAttributes(item: dojo.data.api.Item): any;
            /**
             * See dojo/data/api/Read.getLabel()
             *
             * @param item
             */
            getLabel(item: dojo.data.api.Item): any;
            /**
             * See dojo/data/api/Read.getLabelAttributes()
             *
             * @param item
             */
            getLabelAttributes(item: dojo.data.api.Item): any;
            /**
             * See dojo/data/api/Read.getValue()
             *
             * @param item
             * @param attribute
             * @param defaultValue               Optional
             */
            getValue(item: dojo.data.api.Item, attribute: String, defaultValue: any): any;
            /**
             * See dojo/data/api/Read.getValues()
             *
             * @param item
             * @param attribute
             */
            getValues(item: dojo.data.api.Item, attribute: String): any;
            /**
             * See dojo/data/api/Read.hasAttribute()
             *
             * @param item
             * @param attribute
             */
            hasAttribute(item: dojo.data.api.Item, attribute: String): boolean;
            /**
             * See dojo/data/api/Write.isDirty()
             *
             * @param item               Optional
             */
            isDirty(item: any): any;
            /**
             * See dojo/data/api/Read.isItem()
             *
             * @param something
             */
            isItem(something: any): boolean;
            /**
             * See dojo/data/api/Read.isItemLoaded()
             *
             * @param something
             */
            isItemLoaded(something: any): any;
            /**
             * See dojo/data/api/Read.loadItem()
             *
             * @param keywordArgs
             */
            loadItem(keywordArgs: Object): void;
            /**
             * See dojo/data/api/Write.newItem()
             *
             * @param keywordArgs               Optional
             * @param parentInfo               Optional
             */
            newItem(keywordArgs: Object, parentInfo: Object): Object;
            /**
             *
             * @param type
             * @param listener
             */
            on(type: any, listener: any): any;
            /**
             * See dojo/data/api/Write.revert()
             *
             */
            revert(): boolean;
            /**
             * See dojo/data/api/Write.save()
             *
             * @param keywordArgs
             */
            save(keywordArgs: Object): void;
            /**
             * See dojo/data/api/Write.set()
             *
             * @param item
             * @param attribute
             * @param value
             */
            setValue(item: dojo.data.api.Item, attribute: String, value: any): any;
            /**
             * See dojo/data/api/Write.setValues()
             *
             * @param item
             * @param attribute
             * @param values
             */
            setValues(item: dojo.data.api.Item, attribute: String, values: any[]): any;
            /**
             * See dojo/data/api/Write.unsetAttribute()
             *
             * @param item
             * @param attribute
             */
            unsetAttribute(item: dojo.data.api.Item, attribute: String): any;
            /**
             * See dojo/data/api/Notification.onDelete()
             *
             * @param deletedItem
             */
            onDelete(deletedItem: dojo.data.api.Item): void;
            /**
             * See dojo/data/api/Notification.onNew()
             *
             * @param newItem
             * @param parentInfo               Optional
             */
            onNew(newItem: dojo.data.api.Item, parentInfo: Object): void;
            /**
             * See dojo/data/api/Notification.onSet()
             *
             * @param item
             * @param attribute
             * @param oldValue
             * @param newValue
             */
            onSet(item: dojo.data.api.Item, attribute: String, oldValue: Object, newValue: Object): void;
            /**
             * See dojo/data/api/Notification.onSet()
             *
             * @param item
             * @param attribute
             * @param oldValue
             * @param newValue
             */
            onSet(item: dojo.data.api.Item, attribute: String, oldValue: any[], newValue: Object): void;
            /**
             * See dojo/data/api/Notification.onSet()
             *
             * @param item
             * @param attribute
             * @param oldValue
             * @param newValue
             */
            onSet(item: dojo.data.api.Item, attribute: String, oldValue: Object, newValue: any[]): void;
            /**
             * See dojo/data/api/Notification.onSet()
             *
             * @param item
             * @param attribute
             * @param oldValue
             * @param newValue
             */
            onSet(item: dojo.data.api.Item, attribute: String, oldValue: any[], newValue: any[]): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/AppStore.html
         *
         *
         * @param args An anonymous object to initialize properties.  It expects the following values:url:              The url of the Collection to load.urlPreventCache:  Whether or not to append on cache prevention params (as defined by dojo.xhr*)
         */
        class AppStore {
            constructor(args: Object);
            /**
             * So the parser can instantiate the store via markup.
             *
             */
            "url": string;
            /**
             * Whether or not to pass the preventCache parameter to the connection
             *
             */
            "urlPreventCache": boolean;
            /**
             * Whether to use X-Method-Override for PUT/DELETE.
             *
             */
            "xmethod": boolean;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request               Optional
             */
            close(request: dojo.data.api.Request ): void;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request               Optional
             */
            close(request: Object): void;
            /**
             * See dojo/data/api/Read.containsValue()
             *
             * @param item
             * @param attribute
             * @param value
             */
            containsValue(item: any, attribute: String, value: any): any;
            /**
             * See dojo/data/api/Write.deleteItem()
             *
             * @param item
             */
            deleteItem(item: any): boolean;
            /**
             * See dojo/data/api/Identity.fetchItemByIdentity()
             *
             * @param keywordArgs
             */
            fetchItemByIdentity(keywordArgs: any): void;
            /**
             * See dojo/data/api/Read.getAttributes()
             *
             * @param item
             */
            getAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getFeatures()
             *
             */
            getFeatures(): Object;
            /**
             * See dojo/data/api/Identity.getIdentity()
             *
             * @param item
             */
            getIdentity(item: any): any;
            /**
             * See dojo/data/api/Identity.getIdentityAttributes()
             *
             * @param item
             */
            getIdentityAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getLabel()
             *
             * @param item
             */
            getLabel(item: any): any;
            /**
             * See dojo/data/api/Read.getLabelAttributes()
             *
             * @param item
             */
            getLabelAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getValue()
             *
             * @param item
             * @param attribute
             * @param defaultValue               Optional
             */
            getValue(item: any, attribute: String, defaultValue: any): any;
            /**
             * See dojo/data/api/Read.getValues()
             *
             * @param item
             * @param attribute
             */
            getValues(item: any, attribute: String): any;
            /**
             * See dojo/data/api/Read.hasAttribute()
             *
             * @param item
             * @param attribute
             */
            hasAttribute(item: any, attribute: String): boolean;
            /**
             * See dojo/data/api/Write.isDirty()
             *
             * @param item               Optional
             */
            isDirty(item: any): boolean;
            /**
             * See dojo/data/api/Read.isItem()
             *
             * @param something
             */
            isItem(something: any): any;
            /**
             * See dojo/data/api/Read.isItemLoaded()
             *
             * @param something
             */
            isItemLoaded(something: any): any;
            /**
             * See dojo/data/api/Read.loadItem()
             *
             * @param keywordArgs
             */
            loadItem(keywordArgs: Object): void;
            /**
             * See dojo/data/api/Write.newItem()
             *
             * @param keywordArgs               Optional
             */
            newItem(keywordArgs: Object): boolean;
            /**
             * See dojo/data/api/Write.revert()
             *
             */
            revert(): boolean;
            /**
             * See dojo/data/api/Write.save()
             *
             * @param keywordArgs {    onComplete: function    onError: function    scope: object}
             */
            save(keywordArgs: Object): void;
            /**
             * See dojo/data/api/Write.setValue()
             *
             * @param item
             * @param attribute
             * @param value
             */
            setValue(item: any, attribute: String, value: any): boolean;
            /**
             * See dojo/data/api/Write.setValues()
             *
             * @param item
             * @param attribute
             * @param values
             */
            setValues(item: any, attribute: String, values: any[]): any;
            /**
             * See dojo/data/api/Write.unsetAttribute()
             *
             * @param item
             * @param attribute
             */
            unsetAttribute(item: any, attribute: String): boolean;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/AtomReadStore.html
         *
         * A read only data store for Atom XML based services or documents
         * A data store for Atom XML based services or documents.  This store is still under development
         * and doesn't support wildcard filtering yet. Attribute filtering is limited to category or id.
         *
         * @param args An anonymous object to initialize properties.   It expects the following values:url:          The url to a service or an XML document that represents the storeunescapeHTML: A boolean to specify whether or not to unescape HTML textsendQuery:    A boolean indicate to add a query string to the service URL
         */
        class AtomReadStore {
            constructor(args: Object);
            /**
             *
             */
            "label": string;
            /**
             *
             */
            "sendQuery": boolean;
            /**
             *
             */
            "unescapeHTML": boolean;
            /**
             *
             */
            "url": string;
            /**
             * Configurable preventCache option for the URL.
             *
             */
            "urlPreventCache": boolean;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request               Optional
             */
            close(request: dojo.data.api.Request ): void;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request               Optional
             */
            close(request: Object): void;
            /**
             * Check whether the attribute values contain the value
             *
             * @param item An object to check
             * @param attribute A tag name of a child element, An XML attribute name or one ofspecial names
             * @param value
             */
            containsValue(item: dojo.data.api.Item, attribute: Attr, value: any): any;
            /**
             * Check whether the attribute values contain the value
             *
             * @param item An object to check
             * @param attribute A tag name of a child element, An XML attribute name or one ofspecial names
             * @param value
             */
            containsValue(item: dojo.data.api.Item, attribute: String, value: any): any;
            /**
             * Return an array of attribute names
             * 'item' must be have been created by the AtomReadStore instance.
             * tag names of child elements and XML attribute names of attributes
             * specified to the element are returned along with special attribute
             * names applicable to the element including "tagName", "childNodes"
             * if the element has child elements, "text()" if the element has
             * child text nodes, and attribute names in '_attributeMap' that match
             * the tag name of the element.
             *
             * @param item An XML element
             */
            getAttributes(item: dojo.data.api.Item): any;
            /**
             * Return supported data APIs
             *
             */
            getFeatures(): any;
            /**
             * Non-API method for retrieving values regarding the Atom feed,
             * rather than the Atom entries.
             *
             * @param attribute
             * @param defaultValue
             */
            getFeedValue(attribute: any, defaultValue: any): any;
            /**
             * Non-API method for retrieving values regarding the Atom feed,
             * rather than the Atom entries.
             *
             * @param attribute
             * @param defaultValue
             */
            getFeedValues(attribute: any, defaultValue: any): any;
            /**
             * See dojo/data/api/Read.getLabel()
             *
             * @param item
             */
            getLabel(item: dojo.data.api.Item): any;
            /**
             * See dojo/data/api/Read.getLabelAttributes()
             *
             * @param item
             */
            getLabelAttributes(item: dojo.data.api.Item): any;
            /**
             * Return an attribute value
             * 'item' must be an instance of an object created by the AtomReadStore instance.
             * Accepted attributes are id, subtitle, title, summary, content, author, updated,
             * published, category, link and alternate
             *
             * @param item An item returned by a call to the 'fetch' method.
             * @param attribute A attribute of the Atom Entry
             * @param defaultValue               OptionalA default value
             */
            getValue(item: dojo.data.api.Item, attribute: Attr, defaultValue: any): any;
            /**
             * Return an attribute value
             * 'item' must be an instance of an object created by the AtomReadStore instance.
             * Accepted attributes are id, subtitle, title, summary, content, author, updated,
             * published, category, link and alternate
             *
             * @param item An item returned by a call to the 'fetch' method.
             * @param attribute A attribute of the Atom Entry
             * @param defaultValue               OptionalA default value
             */
            getValue(item: dojo.data.api.Item, attribute: String, defaultValue: any): any;
            /**
             * Return an attribute value
             * 'item' must be an instance of an object created by the AtomReadStore instance.
             * Accepted attributes are id, subtitle, title, summary, content, author, updated,
             * published, category, link and alternate
             *
             * @param item An item returned by a call to the 'fetch' method.
             * @param attribute A attribute of the Atom Entry
             */
            getValues(item: dojo.data.api.Item, attribute: Attr): any;
            /**
             * Return an attribute value
             * 'item' must be an instance of an object created by the AtomReadStore instance.
             * Accepted attributes are id, subtitle, title, summary, content, author, updated,
             * published, category, link and alternate
             *
             * @param item An item returned by a call to the 'fetch' method.
             * @param attribute A attribute of the Atom Entry
             */
            getValues(item: dojo.data.api.Item, attribute: String): any;
            /**
             * Check whether an element has the attribute
             *
             * @param item 'item' must be created by the AtomReadStore instance.
             * @param attribute An attribute of an Atom Entry item.
             */
            hasAttribute(item: dojo.data.api.Item, attribute: Attr): any;
            /**
             * Check whether an element has the attribute
             *
             * @param item 'item' must be created by the AtomReadStore instance.
             * @param attribute An attribute of an Atom Entry item.
             */
            hasAttribute(item: dojo.data.api.Item, attribute: String): any;
            /**
             * Check whether the object is an item (XML element)
             *
             * @param something
             */
            isItem(something: any): any;
            /**
             * Check whether the object is an item (XML element) and loaded
             *
             * @param something
             */
            isItemLoaded(something: any): any;
            /**
             * Load an item (XML element)
             *
             * @param keywordArgs object containing the args for loadItem.    See dojo/data/api/Read.loadItem()
             */
            loadItem(keywordArgs: Object): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/CdfStore.html
         *
         * IMPORTANT: The CDF Store is designed to work with Tibco GI, and references Tibco's
         * JSX3 JavaScript library and will not work without it.
         *
         * The CDF Store implements dojo.data.Read, Write, and Identity api's.  It is a local
         * (in memory) store that handles XML documents formatted according to the
         * Common Data Format (CDF) spec:
         * http://www.tibco.com/devnet/resources/gi/3_1/tips_and_techniques/CommonDataFormatCDF.pdf
         *
         * The purpose of this store is to provide a glue between a jsx3 CDF file and a Dijit.
         *
         * While a CDF document is an XML file, other than the initial input, all data returned
         * from and written to this store should be in object format.
         *
         * @param args
         */
        class CdfStore {
            constructor(args: Object);
            /**
             * A object that will be converted into the xmlStr property, and then parsed into a CDF.
             *
             */
            "data": Object;
            /**
             * The unique identifier for each item. Defaults to "jsxid" which is standard for a CDF
             * document. Should not be changed.
             *
             */
            "identity": string;
            /**
             * The property within each item used to define the item.
             *
             */
            "label": string;
            /**
             *
             */
            "mode": number;
            /**
             *
             */
            "url": string;
            /**
             * A string that can be parsed into an XML document and should be formatted according
             * to the CDF spec.
             *
             */
            "xmlStr": string;
            /**
             *
             * @param args
             */
            byId(args: Object): void;
            /**
             *
             * @param args
             */
            byId(args: String): void;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request               Optional
             */
            close(request: dojo.data.api.Request ): void;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request               Optional
             */
            close(request: Object): void;
            /**
             * Check whether an item contains a value
             *
             * @param item
             * @param property
             * @param value
             */
            containsValue(item: any, property: String, value: any): boolean;
            /**
             * Delete an jsx3.xml.Entity (wrapper to a XML element).
             *
             * @param item
             */
            deleteItem(item: any): boolean;
            /**
             * Returns an Array of items based on the request arguments.
             * Returns an Array of items based on the request arguments.
             * If the store is in ASYNC mode, the items should be expected in an onComplete
             * method passed in the request object. If store is in SYNC mode, the items will
             * be return directly as well as within the onComplete method.
             *
             * note:
             * The mode can be set on store initialization or during a fetch as one of the
             * parameters.
             *
             * See:
             *
             * http://www.tibco.com/devnet/resources/gi/3_7/api/html/jsx3/xml/Entity.html#method:selectNodes
             * http://www.w3.org/TR/xpath
             * http://msdn.microsoft.com/en-us/library/ms256086.aspx
             * See dojo.data.Read.fetch():
             *
             * onBegin
             * onComplete
             * onItem
             * onError
             * scope
             * start
             * count
             * sort
             *
             * @param request               OptionalThe items in the store are treated as objects, but this is reading an XMLdocument. Further, the actual querying of the items takes place in Tibco GI'sjsx3.xml.Entity. Therefore, we are using their syntax which is xpath.Note:As conforming to a CDF document, most, if not all nodes are considered "records"and their tagNames are as such. The root node is named "data".
             */
            fetch(request: String): any;
            /**
             * See dojo/data/api/Identity.fetchItemByIdentity(keywordArgs).
             *
             * Note:
             * This method can be synchronous if mode is set.
             * Also, there is a more finger friendly alias of this method, byId();
             *
             * @param args
             */
            fetchItemByIdentity(args: Object): any;
            /**
             * See dojo/data/api/Identity.fetchItemByIdentity(keywordArgs).
             *
             * Note:
             * This method can be synchronous if mode is set.
             * Also, there is a more finger friendly alias of this method, byId();
             *
             * @param args
             */
            fetchItemByIdentity(args: String): any;
            /**
             * Return an array of property names
             *
             * @param item
             */
            getAttributes(item: any): any;
            /**
             * Return supported data APIs
             *
             */
            getFeatures(): Object;
            /**
             * Returns the identifier for an item.
             *
             * @param item
             */
            getIdentity(item: any): any;
            /**
             * Returns the property used for the identity.
             *
             * @param item
             */
            getIdentityAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getLabel()
             *
             * @param item
             */
            getLabel(item: any): any;
            /**
             * returns an array of what properties of the item that were used
             * to generate its label
             * See dojo/data/api/Read.getLabelAttributes()
             *
             * @param item
             */
            getLabelAttributes(item: any): any;
            /**
             * Return an property value of an item
             *
             * @param item
             * @param property
             * @param defaultValue               Optional
             */
            getValue(item: any, property: String, defaultValue: any): any;
            /**
             * Return an array of values
             *
             * @param item
             * @param property
             */
            getValues(item: any, property: String): any[];
            /**
             * Check whether an item has a property
             *
             * @param item
             * @param property
             */
            hasAttribute(item: any, property: String): boolean;
            /**
             * Alias for hasAttribute
             *
             * @param item
             * @param property
             */
            hasProperty(item: any, property: String): any;
            /**
             * Check whether an item is new, modified or deleted.
             * If no item is passed, checks if anything in the store has changed.
             *
             * @param item               Optional
             */
            isDirty(item: any): boolean;
            /**
             * Check whether the object is an item (jsx3.xml.Entity)
             *
             * @param something
             */
            isItem(something: any): boolean;
            /**
             * Check whether the object is a jsx3.xml.Entity object and loaded
             *
             * @param something
             */
            isItemLoaded(something: any): any;
            /**
             * Load an item
             * The store always loads all items, so if it's an item, then it's loaded.
             *
             * @param keywordArgs
             */
            loadItem(keywordArgs: Object): void;
            /**
             * Creates a jsx3.xml.Entity item and inserts it either inside the
             * parent or appends it to the root
             *
             * @param keywordArgs               Optional
             * @param parentInfo               Optional
             */
            newItem(keywordArgs: Object, parentInfo: Object): any;
            /**
             * Creates a jsx3.xml.Entity item and inserts it either inside the
             * parent or appends it to the root
             *
             * @param keywordArgs               Optional
             * @param parentInfo               Optional
             */
            newItem(keywordArgs: Object, parentInfo: String): any;
            /**
             * Invalidate changes (new and/or modified elements)
             * Resets data by simply deleting the reference to the cdfDoc.
             * Subsequent fetches will load the new data.
             *
             * Note:
             * Any items outside the store will no longer be valid and may cause errors.
             *
             */
            revert(): boolean;
            /**
             * Set an property value
             *
             * @param item
             * @param property
             * @param value
             */
            setValue(item: any, property: String, value: any): boolean;
            /**
             * Set property values.
             *
             * @param item
             * @param property
             * @param values
             */
            setValues(item: any, property: String, values: any[]): any;
            /**
             * Remove an property
             *
             * @param item
             * @param property
             */
            unsetAttribute(item: any, property: String): boolean;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/ClientFilter.html
         *
         *
         */
        class ClientFilter {
            constructor();
            /**
             *
             */
            "cacheByDefault": boolean;
            /**
             *
             */
            "serverVersion": number;
            /**
             *
             * @param args
             */
            cachingFetch(args: any): any;
            /**
             * Clears the cache of client side queries
             *
             */
            clearCache(): void;
            /**
             * Performs a query on the client side and returns the results as an array
             *
             * @param request See dojo/data/api/Read.fetch request
             * @param baseResults This provides the result set to start with for client side querying
             */
            clientSideFetch(request: Object, baseResults: any[]): any;
            /**
             *
             * @param request
             * @param baseResults
             */
            clientSidePaging(request: Object, baseResults: any[]): any[];
            /**
             * Returns whether the provide fetch arguments can be used to update an existing list
             *
             * @param request See dojo/data/api/Read.fetch request
             */
            isUpdateable(request: Object): boolean;
            /**
             * returns a comparator function for the given sort order array
             *
             * @param sort See dojox.data.api.Read.fetch
             */
            makeComparator(sort: any): Function;
            /**
             *
             * @param item
             * @param request
             */
            matchesQuery(item: any, request: any): boolean;
            /**
             * Determines whether the provided arguments are super/sub sets of each other
             *
             * @param argsSuper Dojo Data Fetch arguments
             * @param argsSub Dojo Data Fetch arguments
             */
            querySuperSet(argsSuper: any, argsSub: any): any;
            /**
             * Attempts to update the given result set based on previous notifications
             * This will attempt to update the provide result based on previous notification, adding new items
             * from onNew calls, removing deleted items, and updating modified items, and properly removing
             * and adding items as required by the query and sort parameters.
             *
             * @param resultSet The result set array that should be updated
             * @param request This object follows the same meaning as the keywordArgs passed to a dojo/data/api/Read.fetch.
             */
            updateResultSet(resultSet: any[], request: Object): any;
            /**
             *
             */
            onUpdate(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/CouchDBRestStore.html
         *
         * A CouchDBRestStore is an extension of JsonRestStore to handle CouchDB's idiosyncrasies, special features,
         * and deviations from standard HTTP Rest.
         * NOTE: CouchDB is not designed to be run on a public facing network. There is no access control
         * on database documents, and you should NOT rely on client side control to implement security.
         *
         */
        class CouchDBRestStore {
            constructor();
            /**
             * This only differs from JsonRestStore in that it, will put the query string the query part of the URL and it handles start and count
             *
             * @param args
             */
            fetch(args: any): any;
            /**
             *
             * @param couchServerUrl
             */
            getStores(couchServerUrl: any): void;
            /**
             *
             * @param kwArgs
             */
            save(kwArgs: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/CssClassStore.html
         *
         * Basic store to display CSS information.
         * The CssClassStore allows users to get information about active Css classes in the page running the CssClassStore.
         * It can also filter out classes from specific stylesheets.  The attributes it exposes on classes are as follows:
         *
         * class:        The classname, including the '.'.
         * classSans:    The classname without the '.'.
         *
         * @param keywordParameters
         */
        class CssClassStore extends dojox.data.CssRuleStore {
            constructor(keywordParameters: Object);
            /**
             * See dojo/data/api/Read.close().
             * Clears out the cache and allItems objects, meaning all future fetches will requery
             * the stylesheets.
             *
             */
            close(): void;
            /**
             * See dojo/data/api/Read.containsValue()
             *
             * @param item
             * @param attribute
             * @param value
             */
            containsValue(item: any, attribute: String, value: any): any;
            /**
             * See dojo/data/api/Read.fetch()
             *
             * @param request
             */
            fetch(request: any): String;
            /**
             * See dojo/data/api/Identity.fetchItemByIdentity()
             *
             * @param request
             */
            fetchItemByIdentity(request: Object): String;
            /**
             * See dojo/data/api/Read.getAttributes()
             *
             * @param item
             */
            getAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getFeatures()
             *
             */
            getFeatures(): Object;
            /**
             * See dojo/data/api/Identity.getIdentity()
             *
             * @param item
             */
            getIdentity(item: any): any;
            /**
             * See dojo/data/api/Identity.getIdentityAttributes()
             *
             * @param item
             */
            getIdentityAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getLabel()
             *
             * @param item
             */
            getLabel(item: any): any;
            /**
             * See dojo/data/api/Read.getLabelAttributes()
             *
             * @param item
             */
            getLabelAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getValue()
             *
             * @param item
             * @param attribute
             * @param defaultValue
             */
            getValue(item: any, attribute: any, defaultValue: any): any;
            /**
             * See dojo/data/api/Read.getValues()
             *
             * @param item
             * @param attribute
             */
            getValues(item: any, attribute: any): any[];
            /**
             * See dojo/data/api/Read.hasAttribute()
             *
             * @param item
             * @param attribute
             */
            hasAttribute(item: any, attribute: any): boolean;
            /**
             * See dojo/data/api/Read.isItem()
             *
             * @param item
             */
            isItem(item: any): boolean;
            /**
             * See dojo/data/api/Read.isItemLoaded()
             *
             * @param something
             */
            isItemLoaded(something: any): any;
            /**
             * See dojo/data/api/Read.loadItem()
             *
             * @param keywordArgs
             */
            loadItem(keywordArgs: Object): void;
            /**
             *
             * @param context
             */
            setContext(context: any[]): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/CssRuleStore.html
         *
         * Basic store to display CSS information.
         * The CssRuleStore allows users to get information about active CSS rules in the page running the CssRuleStore.
         * It can also filter out rules from specific stylesheets.  The attributes it exposes on rules are as follows:
         *
         * selector:             The selector text.
         * classes:              An array of classes present in this selector.
         * rule:                 The actual DOM Rule object.
         * style:                    The actual DOM CSSStyleDeclaration object.
         * cssText:              The cssText string provided on the rule object.
         * styleSheet:               The originating DOM Stylesheet object.
         * parentStyleSheet:     The parent stylesheet to the sheet this rule originates from.
         * parentStyleSheetHref: The href of the parent stylesheet.
         * AND every style attribute denoted as style.*, such as style.textAlign or style.backgroundColor
         *
         * @param keywordParameters
         */
        class CssRuleStore {
            constructor(keywordParameters: Object);
            /**
             * See dojo/data/api/Read.close().
             * Clears out the cache and allItems objects, meaning all future fetches will requery
             * the stylesheets.
             *
             */
            close(): void;
            /**
             * See dojo/data/api/Read.containsValue()
             *
             * @param item
             * @param attribute
             * @param value
             */
            containsValue(item: any, attribute: String, value: any): any;
            /**
             * See dojo/data/api/Read.fetch()
             *
             * @param request
             */
            fetch(request: any): String;
            /**
             * See dojo/data/api/Read.getAttributes()
             *
             * @param item
             */
            getAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getFeatures()
             *
             */
            getFeatures(): Object;
            /**
             * See dojo/data/api/Read.getLabel()
             *
             * @param item
             */
            getLabel(item: any): any;
            /**
             * See dojo/data/api/Read.getLabelAttributes()
             *
             * @param item
             */
            getLabelAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getValue()
             *
             * @param item
             * @param attribute
             * @param defaultValue
             */
            getValue(item: any, attribute: any, defaultValue: any): any;
            /**
             * See dojo/data/api/Read.getValues()
             *
             * @param item
             * @param attribute
             */
            getValues(item: any, attribute: any): any[];
            /**
             * See dojo/data/api/Read.hasAttribute()
             *
             * @param item
             * @param attribute
             */
            hasAttribute(item: any, attribute: any): boolean;
            /**
             * See dojo/data/api/Read.isItem()
             *
             * @param item
             */
            isItem(item: any): boolean;
            /**
             * See dojo/data/api/Read.isItemLoaded()
             *
             * @param something
             */
            isItemLoaded(something: any): any;
            /**
             * See dojo/data/api/Read.loadItem()
             *
             * @param keywordArgs
             */
            loadItem(keywordArgs: Object): void;
            /**
             *
             * @param context
             */
            setContext(context: any[]): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/CsvStore.html
         *
         * The CsvStore implements the dojo/data/api/Read API and reads
         * data from files in CSV (Comma Separated Values) format.
         * All values are simple string values. References to other items
         * are not supported as attribute values in this datastore.
         *
         * Example data file:
         * name, color, age, tagline
         * Kermit, green, 12, "Hi, I'm Kermit the Frog."
         * Fozzie Bear, orange, 10, "Wakka Wakka Wakka!"
         * Miss Piggy, pink, 11, "Kermie!"
         *
         * Note that values containing a comma must be enclosed with quotes ("")
         * Also note that values containing quotes must be escaped with two consecutive quotes (""quoted"")
         *
         * @param keywordParameters url: Stringdata: Stringlabel: String: The column label for the column to use for the label returned by getLabel.identifier: String: The column label for the column to use for the identity.  Optional.  If not set, the identity is the row number.
         */
        class CsvStore {
            constructor(keywordParameters: Object);
            /**
             * Declarative hook for setting the identifier.
             *
             */
            "identifier": string;
            /**
             * Declarative hook for setting the label attribute.
             *
             */
            "label": string;
            /**
             * Declatative and programmatic hook for defining the separator
             * character used in the Csv style file.
             *
             */
            "separator": string;
            /**
             * Declarative hook for setting Csv source url.
             *
             */
            "url": string;
            /**
             *
             */
            "urlPreventCache": boolean;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request               Optional
             */
            close(request: dojo.data.api.Request ): void;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request               Optional
             */
            close(request: Object): void;
            /**
             * See dojo/data/api/Read.containsValue()
             *
             * @param item
             * @param attribute
             * @param value
             */
            containsValue(item: any, attribute: Attr, value: any): any;
            /**
             * See dojo/data/api/Read.containsValue()
             *
             * @param item
             * @param attribute
             * @param value
             */
            containsValue(item: any, attribute: String, value: any): any;
            /**
             * The error handler when there is an error fetching items.  This function should not be called
             * directly and is used by simpleFetch.fetch().
             *
             * @param errorData
             * @param requestObject
             */
            errorHandler(errorData: Object, requestObject: Object): void;
            /**
             * The simpleFetch mixin is designed to serve as a set of function(s) that can
             * be mixed into other datastore implementations to accelerate their development.
             * The simpleFetch mixin should work well for any datastore that can respond to a _fetchItems()
             * call by returning an array of all the found items that matched the query.  The simpleFetch mixin
             * is not designed to work for datastores that respond to a fetch() call by incrementally
             * loading items, or sequentially loading partial batches of the result
             * set.  For datastores that mixin simpleFetch, simpleFetch
             * implements a fetch method that automatically handles eight of the fetch()
             * arguments -- onBegin, onItem, onComplete, onError, start, count, sort and scope
             * The class mixing in simpleFetch should not implement fetch(),
             * but should instead implement a _fetchItems() method.  The _fetchItems()
             * method takes three arguments, the keywordArgs object that was passed
             * to fetch(), a callback function to be called when the result array is
             * available, and an error callback to be called if something goes wrong.
             * The _fetchItems() method should ignore any keywordArgs parameters for
             * start, count, onBegin, onItem, onComplete, onError, sort, and scope.
             * The _fetchItems() method needs to correctly handle any other keywordArgs
             * parameters, including the query parameter and any optional parameters
             * (such as includeChildren).  The _fetchItems() method should create an array of
             * result items and pass it to the fetchHandler along with the original request object --
             * or, the _fetchItems() method may, if it wants to, create an new request object
             * with other specifics about the request that are specific to the datastore and pass
             * that as the request object to the handler.
             *
             * For more information on this specific function, see dojo/data/api/Read.fetch()
             *
             * @param request               OptionalThe keywordArgs parameter may either be an instance ofconforming to dojo/data/api/Request or may be a simple anonymous objectthat may contain any of the following:{    query: query-object or query-string,    queryOptions: object,    onBegin: Function,    onItem: Function,    onComplete: Function,    onError: Function,    scope: object,    start: int    count: int    sort: array}All implementations should accept keywordArgs objects with any ofthe 9 standard properties: query, onBegin, onItem, onComplete, onErrorscope, sort, start, and count.  Some implementations may accept additionalproperties in the keywordArgs object as valid parameters, such as{includeOutliers:true}.The query parameterThe query may be optional in some data store implementations.The dojo/data/api/Read API does not specify the syntax or semanticsof the query itself -- each different data store implementationmay have its own notion of what a query should look like.However, as of dojo 0.9, 1.0, and 1.1, all the provided datastores in dojo.dataand dojox.data support an object structure query, where the object is a set ofname/value parameters such as { attrFoo: valueBar, attrFoo1: valueBar1}.  Most of thedijit widgets, such as ComboBox assume this to be the case when working with a datastorewhen they dynamically update the query.  Therefore, for maximum compatibility with dijitwidgets the recommended query parameter is a key/value object.  That does not mean that thethe datastore may not take alternative query forms, such as a simple string, a Date, a number,or a mix of such.  Ultimately, The dojo/data/api/Read API is agnostic about what the queryformat.Further note:  In general for query objects that accept strings as attributevalue matches, the store should also support basic filtering capability, such as (match any character) and ? (match single character).  An example query that is a query objectwould be like: { attrFoo: "value"}.  Which generally means match all items where they havean attribute named attrFoo, with a value that starts with 'value'.The queryOptions parameterThe queryOptions parameter is an optional parameter used to specify options that may modifythe query in some fashion, such as doing a case insensitive search, or doing a deep searchwhere all items in a hierarchical representation of data are scanned instead of just the rootitems.  It currently defines two options that all datastores should attempt to honor if possible:{    ignoreCase: boolean, // Whether or not the query should match case sensitively or not.  Default behaviour is false.    deep: boolean   // Whether or not a fetch should do a deep search of items and all child                    // items instead of just root-level items in a datastore.  Default is false.}The onBegin parameter.function(size, request);If an onBegin callback function is provided, the callback functionwill be called just once, before the first onItem callback is called.The onBegin callback function will be passed two arguments, thethe total number of items identified and the Request object.  If the total number isunknown, then size will be -1.  Note that size is not necessarily the size of thecollection of items returned from the query, as the request may have specified to return only asubset of the total set of items through the use of the start and count parameters.The onItem parameter.function(item, request);If an onItem callback function is provided, the callback functionwill be called as each item in the result is received. The callbackfunction will be passed two arguments: the item itself, and theRequest object.The onComplete parameter.function(items, request);If an onComplete callback function is provided, the callback functionwill be called just once, after the last onItem callback is called.Note that if the onItem callback is not present, then onComplete will be passedan array containing all items which matched the query and the request object.If the onItem callback is present, then onComplete is called as:onComplete(null, request).The onError parameter.function(errorData, request);If an onError callback function is provided, the callback functionwill be called if there is any sort of error while attempting toexecute the query.The onError callback function will be passed two arguments:an Error object and the Request object.The scope parameter.If a scope object is provided, all of the callback functions (onItem,onComplete, onError, etc) will be invoked in the context of the scopeobject.  In the body of the callback function, the value of the "this"keyword will be the scope object.   If no scope object is provided,the callback functions will be called in the context of dojo.global().For example, onItem.call(scope, item, request) vs.onItem.call(dojo.global(), item, request)The start parameter.If a start parameter is specified, this is a indication to the datastore toonly start returning items once the start number of items have been located andskipped.  When this parameter is paired with 'count', the store should be ableto page across queries with millions of hits by only returning subsets of thehits for each queryThe count parameter.If a count parameter is specified, this is a indication to the datastore toonly return up to that many items.  This allows a fetch call that may havemillions of item matches to be paired down to something reasonable.The sort parameter.If a sort parameter is specified, this is a indication to the datastore tosort the items in some manner before returning the items.  The array is an array ofjavascript objects that must conform to the following format to be applied to thefetching of items:{    attribute: attribute || attribute-name-string,    descending: true|false;   // Optional.  Default is false.}Note that when comparing attributes, if an item contains no value for the attribute(undefined), then it the default ascending sort logic should push it to the bottomof the list.  In the descending order case, it such items should appear at the top of the list.
             */
            fetch(request: Object): void;
            /**
             * The handler when items are sucessfully fetched.  This function should not be called directly
             * and is used by simpleFetch.fetch().
             *
             * @param items
             * @param requestObject
             */
            fetchHandler(items: any[], requestObject: Object): void;
            /**
             * See dojo/data/api/Identity.fetchItemByIdentity()
             *
             * @param keywordArgs
             */
            fetchItemByIdentity(keywordArgs: Object): void;
            /**
             * See dojo/data/api/Read.getAttributes()
             *
             * @param item
             */
            getAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getFeatures()
             *
             */
            getFeatures(): any;
            /**
             * See dojo/data/api/Identity.getIdentity()
             *
             * @param item
             */
            getIdentity(item: any): any;
            /**
             * See dojo/data/api/Identity.getIdentifierAttributes()
             *
             * @param item
             */
            getIdentityAttributes(item: any): any;
            /**
             * See dojo/data/api/Read.getLabel()
             *
             * @param item
             */
            getLabel(item: any): any;
            /**
             * See dojo/data/api/Read.getLabelAttributes()
             *
             * @param item
             */
            getLabelAttributes(item: any): any;
            /**
             * See dojo/data/api/Read.getValue()
             * Note that for the CsvStore, an empty string value is the same as no value,
             * so the defaultValue would be returned instead of an empty string.
             *
             * @param item
             * @param attribute
             * @param defaultValue               Optional
             */
            getValue(item: any, attribute: Attr, defaultValue: any): any;
            /**
             * See dojo/data/api/Read.getValue()
             * Note that for the CsvStore, an empty string value is the same as no value,
             * so the defaultValue would be returned instead of an empty string.
             *
             * @param item
             * @param attribute
             * @param defaultValue               Optional
             */
            getValue(item: any, attribute: String, defaultValue: any): any;
            /**
             * See dojo/data/api/Read.getValues()
             * CSV syntax does not support multi-valued attributes, so this is just a
             * wrapper function for getValue().
             *
             * @param item
             * @param attribute
             */
            getValues(item: any, attribute: Attr): any[];
            /**
             * See dojo/data/api/Read.getValues()
             * CSV syntax does not support multi-valued attributes, so this is just a
             * wrapper function for getValue().
             *
             * @param item
             * @param attribute
             */
            getValues(item: any, attribute: String): any[];
            /**
             * See dojo/data/api/Read.hasAttribute()
             * The hasAttribute test is true if attribute has an index number within the item's array length
             * AND if the item has a value for that attribute. Note that for the CsvStore, an
             * empty string value is the same as no value.
             *
             * @param item
             * @param attribute
             */
            hasAttribute(item: any, attribute: String): boolean;
            /**
             * See dojo/data/api/Read.isItem()
             *
             * @param something
             */
            isItem(something: any): boolean;
            /**
             * See dojo/data/api/Read.isItemLoaded()
             * The CsvStore always loads all items, so if it's an item, then it's loaded.
             *
             * @param something
             */
            isItemLoaded(something: any): any;
            /**
             * See dojo/data/api/Read.loadItem()
             * The CsvStore always loads all items, so if it's an item, then it's loaded.
             *
             * From the dojo/data/api/Read.loadItem docs:
             *     If a call to isItemLoaded() returns true before loadItem() is even called,
             *     then loadItem() need not do any work at all and will not even invoke
             *     the callback handlers.
             *
             * @param item
             */
            loadItem(item: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/FileStore.html
         *
         *
         * @param args
         */
        class FileStore {
            constructor(args: Object);
            /**
             * Flag to pass on to xhr functions to check if we are OK to fail the call silently
             *
             */
            "failOk": boolean;
            /**
             * Default attribute to use to represent the item as a user-readable
             * string.  Public, so users can change it.
             *
             */
            "label": string;
            /**
             * Array of options to always send when doing requests.
             * Back end service controls this, like 'dirsOnly', 'showHiddenFiles', 'expandChildren', etc.
             *
             */
            "options": any[];
            /**
             *
             */
            "pathAsQueryParam": boolean;
            /**
             * The path separator to use when chaining requests for children
             * Can be overriden by the server on initial load
             *
             */
            "pathSeparator": string;
            /**
             * The URL to the file path service.
             *
             */
            "url": string;
            /**
             * Flag to dennote if preventCache should be passed to xhrGet.
             *
             */
            "urlPreventCache": string;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request
             */
            close(request: any): void;
            /**
             * See dojo/data/api/Read.containsValue()
             *
             * @param item
             * @param attribute
             * @param value
             */
            containsValue(item: any, attribute: any, value: any): boolean;
            /**
             * Fetch  items that match to a query
             *
             * @param request A request object
             */
            fetch(request: any): void;
            /**
             * See dojo/data/api/Read.loadItem()
             *
             * @param keywordArgs
             */
            fetchItemByIdentity(keywordArgs: any): void;
            /**
             * See dojo/data/api/Read.getAttributes()
             *
             * @param item
             */
            getAttributes(item: any): any;
            /**
             * See dojo/data/api/Read.getFeatures()
             *
             */
            getFeatures(): Object;
            /**
             * See dojo/data/api/Identity.getIdentity()
             *
             * @param item
             */
            getIdentity(item: any): any;
            /**
             * See dojo/data/api/Read.getLabelAttributes()
             *
             * @param item
             */
            getIdentityAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getLabel()
             *
             * @param item
             */
            getLabel(item: any): any;
            /**
             * See dojo/data/api/Read.getLabelAttributes()
             *
             * @param item
             */
            getLabelAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getValue()
             *
             * @param item
             * @param attribute
             * @param defaultValue
             */
            getValue(item: any, attribute: any, defaultValue: any): any;
            /**
             * See dojo/data/api/Read.getValue()
             *
             * @param item
             * @param attribute
             */
            getValues(item: any, attribute: any): any[];
            /**
             * See dojo/data/api/Read.hasAttribute()
             *
             * @param item
             * @param attribute
             */
            hasAttribute(item: any, attribute: any): boolean;
            /**
             * See dojo/data/api/Read.isItem()
             *
             * @param item
             */
            isItem(item: any): boolean;
            /**
             * See dojo/data/api/Read.isItemLoaded()
             *
             * @param item
             */
            isItemLoaded(item: any): boolean;
            /**
             * See dojo/data/api/Read.loadItem()
             *
             * @param keywordArgs
             */
            loadItem(keywordArgs: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/FlickrRestStore.html
         *
         *
         * @param args
         */
        class FlickrRestStore extends dojox.data.FlickrStore {
            constructor(args: Object);
            /**
             *
             */
            "label": string;
            /**
             *
             */
            "urlPreventCache": boolean;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request
             */
            close(request: any): void;
            /**
             * See dojo/data/api/Read.containsValue()
             *
             * @param item
             * @param attribute
             * @param value
             */
            containsValue(item: any, attribute: any, value: any): boolean;
            /**
             * The error handler when there is an error fetching items.  This function should not be called
             * directly and is used by simpleFetch.fetch().
             *
             * @param errorData
             * @param requestObject
             */
            errorHandler(errorData: Object, requestObject: Object): void;
            /**
             * The simpleFetch mixin is designed to serve as a set of function(s) that can
             * be mixed into other datastore implementations to accelerate their development.
             * The simpleFetch mixin should work well for any datastore that can respond to a _fetchItems()
             * call by returning an array of all the found items that matched the query.  The simpleFetch mixin
             * is not designed to work for datastores that respond to a fetch() call by incrementally
             * loading items, or sequentially loading partial batches of the result
             * set.  For datastores that mixin simpleFetch, simpleFetch
             * implements a fetch method that automatically handles eight of the fetch()
             * arguments -- onBegin, onItem, onComplete, onError, start, count, sort and scope
             * The class mixing in simpleFetch should not implement fetch(),
             * but should instead implement a _fetchItems() method.  The _fetchItems()
             * method takes three arguments, the keywordArgs object that was passed
             * to fetch(), a callback function to be called when the result array is
             * available, and an error callback to be called if something goes wrong.
             * The _fetchItems() method should ignore any keywordArgs parameters for
             * start, count, onBegin, onItem, onComplete, onError, sort, and scope.
             * The _fetchItems() method needs to correctly handle any other keywordArgs
             * parameters, including the query parameter and any optional parameters
             * (such as includeChildren).  The _fetchItems() method should create an array of
             * result items and pass it to the fetchHandler along with the original request object --
             * or, the _fetchItems() method may, if it wants to, create an new request object
             * with other specifics about the request that are specific to the datastore and pass
             * that as the request object to the handler.
             *
             * For more information on this specific function, see dojo/data/api/Read.fetch()
             *
             * @param request               OptionalThe keywordArgs parameter may either be an instance ofconforming to dojo/data/api/Request or may be a simple anonymous objectthat may contain any of the following:{    query: query-object or query-string,    queryOptions: object,    onBegin: Function,    onItem: Function,    onComplete: Function,    onError: Function,    scope: object,    start: int    count: int    sort: array}All implementations should accept keywordArgs objects with any ofthe 9 standard properties: query, onBegin, onItem, onComplete, onErrorscope, sort, start, and count.  Some implementations may accept additionalproperties in the keywordArgs object as valid parameters, such as{includeOutliers:true}.The query parameterThe query may be optional in some data store implementations.The dojo/data/api/Read API does not specify the syntax or semanticsof the query itself -- each different data store implementationmay have its own notion of what a query should look like.However, as of dojo 0.9, 1.0, and 1.1, all the provided datastores in dojo.dataand dojox.data support an object structure query, where the object is a set ofname/value parameters such as { attrFoo: valueBar, attrFoo1: valueBar1}.  Most of thedijit widgets, such as ComboBox assume this to be the case when working with a datastorewhen they dynamically update the query.  Therefore, for maximum compatibility with dijitwidgets the recommended query parameter is a key/value object.  That does not mean that thethe datastore may not take alternative query forms, such as a simple string, a Date, a number,or a mix of such.  Ultimately, The dojo/data/api/Read API is agnostic about what the queryformat.Further note:  In general for query objects that accept strings as attributevalue matches, the store should also support basic filtering capability, such as (match any character) and ? (match single character).  An example query that is a query objectwould be like: { attrFoo: "value"}.  Which generally means match all items where they havean attribute named attrFoo, with a value that starts with 'value'.The queryOptions parameterThe queryOptions parameter is an optional parameter used to specify options that may modifythe query in some fashion, such as doing a case insensitive search, or doing a deep searchwhere all items in a hierarchical representation of data are scanned instead of just the rootitems.  It currently defines two options that all datastores should attempt to honor if possible:{    ignoreCase: boolean, // Whether or not the query should match case sensitively or not.  Default behaviour is false.    deep: boolean   // Whether or not a fetch should do a deep search of items and all child                    // items instead of just root-level items in a datastore.  Default is false.}The onBegin parameter.function(size, request);If an onBegin callback function is provided, the callback functionwill be called just once, before the first onItem callback is called.The onBegin callback function will be passed two arguments, thethe total number of items identified and the Request object.  If the total number isunknown, then size will be -1.  Note that size is not necessarily the size of thecollection of items returned from the query, as the request may have specified to return only asubset of the total set of items through the use of the start and count parameters.The onItem parameter.function(item, request);If an onItem callback function is provided, the callback functionwill be called as each item in the result is received. The callbackfunction will be passed two arguments: the item itself, and theRequest object.The onComplete parameter.function(items, request);If an onComplete callback function is provided, the callback functionwill be called just once, after the last onItem callback is called.Note that if the onItem callback is not present, then onComplete will be passedan array containing all items which matched the query and the request object.If the onItem callback is present, then onComplete is called as:onComplete(null, request).The onError parameter.function(errorData, request);If an onError callback function is provided, the callback functionwill be called if there is any sort of error while attempting toexecute the query.The onError callback function will be passed two arguments:an Error object and the Request object.The scope parameter.If a scope object is provided, all of the callback functions (onItem,onComplete, onError, etc) will be invoked in the context of the scopeobject.  In the body of the callback function, the value of the "this"keyword will be the scope object.   If no scope object is provided,the callback functions will be called in the context of dojo.global().For example, onItem.call(scope, item, request) vs.onItem.call(dojo.global(), item, request)The start parameter.If a start parameter is specified, this is a indication to the datastore toonly start returning items once the start number of items have been located andskipped.  When this parameter is paired with 'count', the store should be ableto page across queries with millions of hits by only returning subsets of thehits for each queryThe count parameter.If a count parameter is specified, this is a indication to the datastore toonly return up to that many items.  This allows a fetch call that may havemillions of item matches to be paired down to something reasonable.The sort parameter.If a sort parameter is specified, this is a indication to the datastore tosort the items in some manner before returning the items.  The array is an array ofjavascript objects that must conform to the following format to be applied to thefetching of items:{    attribute: attribute || attribute-name-string,    descending: true|false;   // Optional.  Default is false.}Note that when comparing attributes, if an item contains no value for the attribute(undefined), then it the default ascending sort logic should push it to the bottomof the list.  In the descending order case, it such items should appear at the top of the list.
             */
            fetch(request: Object): void;
            /**
             * The handler when items are sucessfully fetched.  This function should not be called directly
             * and is used by simpleFetch.fetch().
             *
             * @param items
             * @param requestObject
             */
            fetchHandler(items: any[], requestObject: Object): void;
            /**
             * See dojo/data/api/Read.getAttributes()
             *
             * @param item
             */
            getAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getFeatures()
             *
             */
            getFeatures(): Object;
            /**
             * See dojo/data/api/Read.getLabel()
             *
             * @param item
             */
            getLabel(item: any): any;
            /**
             * See dojo/data/api/Read.getLabelAttributes()
             *
             * @param item
             */
            getLabelAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getValue()
             *
             * @param item
             * @param attribute
             * @param defaultValue
             */
            getValue(item: any, attribute: any, defaultValue: any): any;
            /**
             * See dojo/data/api/Read.getValue()
             *
             * @param item
             * @param attribute
             */
            getValues(item: any, attribute: any): any;
            /**
             * See dojo/data/api/Read.hasAttributes()
             *
             * @param item
             * @param attribute
             */
            hasAttribute(item: any, attribute: any): boolean;
            /**
             * See dojo/data/api/Read.isItem()
             *
             * @param item
             */
            isItem(item: any): boolean;
            /**
             * See dojo/data/api/Read.isItemLoaded()
             *
             * @param item
             */
            isItemLoaded(item: any): any;
            /**
             * See dojo/data/api/Read.loadItem()
             *
             * @param keywordArgs
             */
            loadItem(keywordArgs: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/FlickrStore.html
         *
         *
         * @param args
         */
        class FlickrStore {
            constructor(args: Object);
            /**
             *
             */
            "label": string;
            /**
             *
             */
            "urlPreventCache": boolean;
            /**
             *
             */
            "urlRegistry": Object;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request
             */
            close(request: any): void;
            /**
             * See dojo/data/api/Read.containsValue()
             *
             * @param item
             * @param attribute
             * @param value
             */
            containsValue(item: any, attribute: any, value: any): boolean;
            /**
             * The error handler when there is an error fetching items.  This function should not be called
             * directly and is used by simpleFetch.fetch().
             *
             * @param errorData
             * @param requestObject
             */
            errorHandler(errorData: Object, requestObject: Object): void;
            /**
             * The simpleFetch mixin is designed to serve as a set of function(s) that can
             * be mixed into other datastore implementations to accelerate their development.
             * The simpleFetch mixin should work well for any datastore that can respond to a _fetchItems()
             * call by returning an array of all the found items that matched the query.  The simpleFetch mixin
             * is not designed to work for datastores that respond to a fetch() call by incrementally
             * loading items, or sequentially loading partial batches of the result
             * set.  For datastores that mixin simpleFetch, simpleFetch
             * implements a fetch method that automatically handles eight of the fetch()
             * arguments -- onBegin, onItem, onComplete, onError, start, count, sort and scope
             * The class mixing in simpleFetch should not implement fetch(),
             * but should instead implement a _fetchItems() method.  The _fetchItems()
             * method takes three arguments, the keywordArgs object that was passed
             * to fetch(), a callback function to be called when the result array is
             * available, and an error callback to be called if something goes wrong.
             * The _fetchItems() method should ignore any keywordArgs parameters for
             * start, count, onBegin, onItem, onComplete, onError, sort, and scope.
             * The _fetchItems() method needs to correctly handle any other keywordArgs
             * parameters, including the query parameter and any optional parameters
             * (such as includeChildren).  The _fetchItems() method should create an array of
             * result items and pass it to the fetchHandler along with the original request object --
             * or, the _fetchItems() method may, if it wants to, create an new request object
             * with other specifics about the request that are specific to the datastore and pass
             * that as the request object to the handler.
             *
             * For more information on this specific function, see dojo/data/api/Read.fetch()
             *
             * @param request               OptionalThe keywordArgs parameter may either be an instance ofconforming to dojo/data/api/Request or may be a simple anonymous objectthat may contain any of the following:{    query: query-object or query-string,    queryOptions: object,    onBegin: Function,    onItem: Function,    onComplete: Function,    onError: Function,    scope: object,    start: int    count: int    sort: array}All implementations should accept keywordArgs objects with any ofthe 9 standard properties: query, onBegin, onItem, onComplete, onErrorscope, sort, start, and count.  Some implementations may accept additionalproperties in the keywordArgs object as valid parameters, such as{includeOutliers:true}.The query parameterThe query may be optional in some data store implementations.The dojo/data/api/Read API does not specify the syntax or semanticsof the query itself -- each different data store implementationmay have its own notion of what a query should look like.However, as of dojo 0.9, 1.0, and 1.1, all the provided datastores in dojo.dataand dojox.data support an object structure query, where the object is a set ofname/value parameters such as { attrFoo: valueBar, attrFoo1: valueBar1}.  Most of thedijit widgets, such as ComboBox assume this to be the case when working with a datastorewhen they dynamically update the query.  Therefore, for maximum compatibility with dijitwidgets the recommended query parameter is a key/value object.  That does not mean that thethe datastore may not take alternative query forms, such as a simple string, a Date, a number,or a mix of such.  Ultimately, The dojo/data/api/Read API is agnostic about what the queryformat.Further note:  In general for query objects that accept strings as attributevalue matches, the store should also support basic filtering capability, such as (match any character) and ? (match single character).  An example query that is a query objectwould be like: { attrFoo: "value"}.  Which generally means match all items where they havean attribute named attrFoo, with a value that starts with 'value'.The queryOptions parameterThe queryOptions parameter is an optional parameter used to specify options that may modifythe query in some fashion, such as doing a case insensitive search, or doing a deep searchwhere all items in a hierarchical representation of data are scanned instead of just the rootitems.  It currently defines two options that all datastores should attempt to honor if possible:{    ignoreCase: boolean, // Whether or not the query should match case sensitively or not.  Default behaviour is false.    deep: boolean   // Whether or not a fetch should do a deep search of items and all child                    // items instead of just root-level items in a datastore.  Default is false.}The onBegin parameter.function(size, request);If an onBegin callback function is provided, the callback functionwill be called just once, before the first onItem callback is called.The onBegin callback function will be passed two arguments, thethe total number of items identified and the Request object.  If the total number isunknown, then size will be -1.  Note that size is not necessarily the size of thecollection of items returned from the query, as the request may have specified to return only asubset of the total set of items through the use of the start and count parameters.The onItem parameter.function(item, request);If an onItem callback function is provided, the callback functionwill be called as each item in the result is received. The callbackfunction will be passed two arguments: the item itself, and theRequest object.The onComplete parameter.function(items, request);If an onComplete callback function is provided, the callback functionwill be called just once, after the last onItem callback is called.Note that if the onItem callback is not present, then onComplete will be passedan array containing all items which matched the query and the request object.If the onItem callback is present, then onComplete is called as:onComplete(null, request).The onError parameter.function(errorData, request);If an onError callback function is provided, the callback functionwill be called if there is any sort of error while attempting toexecute the query.The onError callback function will be passed two arguments:an Error object and the Request object.The scope parameter.If a scope object is provided, all of the callback functions (onItem,onComplete, onError, etc) will be invoked in the context of the scopeobject.  In the body of the callback function, the value of the "this"keyword will be the scope object.   If no scope object is provided,the callback functions will be called in the context of dojo.global().For example, onItem.call(scope, item, request) vs.onItem.call(dojo.global(), item, request)The start parameter.If a start parameter is specified, this is a indication to the datastore toonly start returning items once the start number of items have been located andskipped.  When this parameter is paired with 'count', the store should be ableto page across queries with millions of hits by only returning subsets of thehits for each queryThe count parameter.If a count parameter is specified, this is a indication to the datastore toonly return up to that many items.  This allows a fetch call that may havemillions of item matches to be paired down to something reasonable.The sort parameter.If a sort parameter is specified, this is a indication to the datastore tosort the items in some manner before returning the items.  The array is an array ofjavascript objects that must conform to the following format to be applied to thefetching of items:{    attribute: attribute || attribute-name-string,    descending: true|false;   // Optional.  Default is false.}Note that when comparing attributes, if an item contains no value for the attribute(undefined), then it the default ascending sort logic should push it to the bottomof the list.  In the descending order case, it such items should appear at the top of the list.
             */
            fetch(request: Object): void;
            /**
             * The handler when items are sucessfully fetched.  This function should not be called directly
             * and is used by simpleFetch.fetch().
             *
             * @param items
             * @param requestObject
             */
            fetchHandler(items: any[], requestObject: Object): void;
            /**
             * See dojo/data/api/Read.getAttributes()
             *
             * @param item
             */
            getAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getFeatures()
             *
             */
            getFeatures(): Object;
            /**
             * See dojo/data/api/Read.getLabel()
             *
             * @param item
             */
            getLabel(item: any): any;
            /**
             * See dojo/data/api/Read.getLabelAttributes()
             *
             * @param item
             */
            getLabelAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getValue()
             *
             * @param item
             * @param attribute
             * @param defaultValue
             */
            getValue(item: any, attribute: any, defaultValue: any): any;
            /**
             * See dojo/data/api/Read.getValue()
             *
             * @param item
             * @param attribute
             */
            getValues(item: any, attribute: any): any;
            /**
             * See dojo/data/api/Read.hasAttributes()
             *
             * @param item
             * @param attribute
             */
            hasAttribute(item: any, attribute: any): boolean;
            /**
             * See dojo/data/api/Read.isItem()
             *
             * @param item
             */
            isItem(item: any): boolean;
            /**
             * See dojo/data/api/Read.isItemLoaded()
             *
             * @param item
             */
            isItemLoaded(item: any): any;
            /**
             * See dojo/data/api/Read.loadItem()
             *
             * @param keywordArgs
             */
            loadItem(keywordArgs: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/GoogleFeedStore.html
         *
         * A data store for retrieving RSS and Atom feeds from Google. The
         * feeds can come from any source, which is specified in the "url"
         * parameter of the query passed to the "fetch" function.
         * The following attributes are supported on each item:
         *
         * title - The feed entry title.
         * link - The URL for the HTML version of the feed entry.
         * content - The full content of the blog post, in HTML format
         * summary - A snippet of information about the feed entry, in plain text
         * published - The string date on which the entry was published.      You can parse the date with new Date(store.getValue(item, "published")
         * categories - An array of string tags for the entry
         * The query accepts one parameter: url - The URL of the feed to retrieve
         *
         * @param args
         */
        class GoogleFeedStore {
            constructor(args: Object);
            /**
             * The default attribute which acts as a label for each item.
             *
             */
            "label": string;
            /**
             * Sets whether or not to pass preventCache to dojo.io.script.
             *
             */
            "urlPreventCache": boolean;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request
             */
            close(request: any): void;
            /**
             * See dojo/data/api/Read.containsValue()
             *
             * @param item
             * @param attribute
             * @param value
             */
            containsValue(item: any, attribute: any, value: any): boolean;
            /**
             * Fetch Google search items that match to a query
             *
             * @param request A request object
             */
            fetch(request: any): void;
            /**
             * See dojo/data/api/Read.getAttributes()
             *
             * @param item
             */
            getAttributes(item: any): any;
            /**
             * See dojo/data/api/Read.getFeatures()
             *
             */
            getFeatures(): Object;
            /**
             * Non-API method for retrieving values regarding the Atom feed,
             * rather than the Atom entries.
             *
             * @param attribute
             * @param defaultValue
             */
            getFeedValue(attribute: any, defaultValue: any): any;
            /**
             * Non-API method for retrieving values regarding the Atom feed,
             * rather than the Atom entries.
             *
             * @param attribute
             * @param defaultValue
             */
            getFeedValues(attribute: any, defaultValue: any): any;
            /**
             * See dojo/data/api/Read.getLabel()
             *
             * @param item
             */
            getLabel(item: any): any;
            /**
             * See dojo/data/api/Read.getLabelAttributes()
             *
             * @param item
             */
            getLabelAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getValue()
             *
             * @param item
             * @param attribute
             * @param defaultValue
             */
            getValue(item: any, attribute: any, defaultValue: any): any;
            /**
             * See dojo/data/api/Read.getValue()
             *
             * @param item
             * @param attribute
             */
            getValues(item: any, attribute: any): any;
            /**
             * See dojo/data/api/Read.hasAttributes()
             *
             * @param item
             * @param attribute
             */
            hasAttribute(item: any, attribute: any): boolean;
            /**
             * See dojo/data/api/Read.isItem()
             *
             * @param item
             */
            isItem(item: any): boolean;
            /**
             * See dojo/data/api/Read.isItemLoaded()
             *
             * @param item
             */
            isItemLoaded(item: any): any;
            /**
             * See dojo/data/api/Read.loadItem()
             *
             * @param keywordArgs
             */
            loadItem(keywordArgs: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/HtmlStore.html
         *
         *
         * @param args An anonymous object to initialize properties.  It expects the following values:dataId:   The id of the HTML table to use.ORurl:  The url of the remote page to loaddataId:   The id of the table element in the remote pageand the option:trimWhitespace:  Trim off any surrounding whitespace from the headers (attributenames) and text content of the items in question.  Default is false forbackwards compatibility.
         */
        class HtmlStore {
            constructor(args: Object);
            /**
             * The id in the document for an element from which to get the data.
             *
             */
            "dataId": string;
            /**
             * Flag to denote if it should try to load from a data id (nested in the page)
             * The moment the store is created, instead of waiting for first
             * fetch call.
             *
             */
            "fetchOnCreate": boolean;
            /**
             *
             */
            "trimWhitespace": boolean;
            /**
             * The URL from which to load an HTML document for data loading
             *
             */
            "url": string;
            /**
             * Flag to denote if peventCache should be used on xhrGet calls.
             *
             */
            "urlPreventCache": boolean;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request               Optional
             */
            close(request: dojo.data.api.Request ): void;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request               Optional
             */
            close(request: Object): void;
            /**
             * See dojo/data/api/Read.containsValue()
             *
             * @param item
             * @param attribute
             * @param value
             */
            containsValue(item: any, attribute: String, value: any): any;
            /**
             * The error handler when there is an error fetching items.  This function should not be called
             * directly and is used by simpleFetch.fetch().
             *
             * @param errorData
             * @param requestObject
             */
            errorHandler(errorData: Object, requestObject: Object): void;
            /**
             * The simpleFetch mixin is designed to serve as a set of function(s) that can
             * be mixed into other datastore implementations to accelerate their development.
             * The simpleFetch mixin should work well for any datastore that can respond to a _fetchItems()
             * call by returning an array of all the found items that matched the query.  The simpleFetch mixin
             * is not designed to work for datastores that respond to a fetch() call by incrementally
             * loading items, or sequentially loading partial batches of the result
             * set.  For datastores that mixin simpleFetch, simpleFetch
             * implements a fetch method that automatically handles eight of the fetch()
             * arguments -- onBegin, onItem, onComplete, onError, start, count, sort and scope
             * The class mixing in simpleFetch should not implement fetch(),
             * but should instead implement a _fetchItems() method.  The _fetchItems()
             * method takes three arguments, the keywordArgs object that was passed
             * to fetch(), a callback function to be called when the result array is
             * available, and an error callback to be called if something goes wrong.
             * The _fetchItems() method should ignore any keywordArgs parameters for
             * start, count, onBegin, onItem, onComplete, onError, sort, and scope.
             * The _fetchItems() method needs to correctly handle any other keywordArgs
             * parameters, including the query parameter and any optional parameters
             * (such as includeChildren).  The _fetchItems() method should create an array of
             * result items and pass it to the fetchHandler along with the original request object --
             * or, the _fetchItems() method may, if it wants to, create an new request object
             * with other specifics about the request that are specific to the datastore and pass
             * that as the request object to the handler.
             *
             * For more information on this specific function, see dojo/data/api/Read.fetch()
             *
             * @param request               OptionalThe keywordArgs parameter may either be an instance ofconforming to dojo/data/api/Request or may be a simple anonymous objectthat may contain any of the following:{    query: query-object or query-string,    queryOptions: object,    onBegin: Function,    onItem: Function,    onComplete: Function,    onError: Function,    scope: object,    start: int    count: int    sort: array}All implementations should accept keywordArgs objects with any ofthe 9 standard properties: query, onBegin, onItem, onComplete, onErrorscope, sort, start, and count.  Some implementations may accept additionalproperties in the keywordArgs object as valid parameters, such as{includeOutliers:true}.The query parameterThe query may be optional in some data store implementations.The dojo/data/api/Read API does not specify the syntax or semanticsof the query itself -- each different data store implementationmay have its own notion of what a query should look like.However, as of dojo 0.9, 1.0, and 1.1, all the provided datastores in dojo.dataand dojox.data support an object structure query, where the object is a set ofname/value parameters such as { attrFoo: valueBar, attrFoo1: valueBar1}.  Most of thedijit widgets, such as ComboBox assume this to be the case when working with a datastorewhen they dynamically update the query.  Therefore, for maximum compatibility with dijitwidgets the recommended query parameter is a key/value object.  That does not mean that thethe datastore may not take alternative query forms, such as a simple string, a Date, a number,or a mix of such.  Ultimately, The dojo/data/api/Read API is agnostic about what the queryformat.Further note:  In general for query objects that accept strings as attributevalue matches, the store should also support basic filtering capability, such as (match any character) and ? (match single character).  An example query that is a query objectwould be like: { attrFoo: "value"}.  Which generally means match all items where they havean attribute named attrFoo, with a value that starts with 'value'.The queryOptions parameterThe queryOptions parameter is an optional parameter used to specify options that may modifythe query in some fashion, such as doing a case insensitive search, or doing a deep searchwhere all items in a hierarchical representation of data are scanned instead of just the rootitems.  It currently defines two options that all datastores should attempt to honor if possible:{    ignoreCase: boolean, // Whether or not the query should match case sensitively or not.  Default behaviour is false.    deep: boolean   // Whether or not a fetch should do a deep search of items and all child                    // items instead of just root-level items in a datastore.  Default is false.}The onBegin parameter.function(size, request);If an onBegin callback function is provided, the callback functionwill be called just once, before the first onItem callback is called.The onBegin callback function will be passed two arguments, thethe total number of items identified and the Request object.  If the total number isunknown, then size will be -1.  Note that size is not necessarily the size of thecollection of items returned from the query, as the request may have specified to return only asubset of the total set of items through the use of the start and count parameters.The onItem parameter.function(item, request);If an onItem callback function is provided, the callback functionwill be called as each item in the result is received. The callbackfunction will be passed two arguments: the item itself, and theRequest object.The onComplete parameter.function(items, request);If an onComplete callback function is provided, the callback functionwill be called just once, after the last onItem callback is called.Note that if the onItem callback is not present, then onComplete will be passedan array containing all items which matched the query and the request object.If the onItem callback is present, then onComplete is called as:onComplete(null, request).The onError parameter.function(errorData, request);If an onError callback function is provided, the callback functionwill be called if there is any sort of error while attempting toexecute the query.The onError callback function will be passed two arguments:an Error object and the Request object.The scope parameter.If a scope object is provided, all of the callback functions (onItem,onComplete, onError, etc) will be invoked in the context of the scopeobject.  In the body of the callback function, the value of the "this"keyword will be the scope object.   If no scope object is provided,the callback functions will be called in the context of dojo.global().For example, onItem.call(scope, item, request) vs.onItem.call(dojo.global(), item, request)The start parameter.If a start parameter is specified, this is a indication to the datastore toonly start returning items once the start number of items have been located andskipped.  When this parameter is paired with 'count', the store should be ableto page across queries with millions of hits by only returning subsets of thehits for each queryThe count parameter.If a count parameter is specified, this is a indication to the datastore toonly return up to that many items.  This allows a fetch call that may havemillions of item matches to be paired down to something reasonable.The sort parameter.If a sort parameter is specified, this is a indication to the datastore tosort the items in some manner before returning the items.  The array is an array ofjavascript objects that must conform to the following format to be applied to thefetching of items:{    attribute: attribute || attribute-name-string,    descending: true|false;   // Optional.  Default is false.}Note that when comparing attributes, if an item contains no value for the attribute(undefined), then it the default ascending sort logic should push it to the bottomof the list.  In the descending order case, it such items should appear at the top of the list.
             */
            fetch(request: Object): void;
            /**
             * The handler when items are sucessfully fetched.  This function should not be called directly
             * and is used by simpleFetch.fetch().
             *
             * @param items
             * @param requestObject
             */
            fetchHandler(items: any[], requestObject: Object): void;
            /**
             * See dojo/data/api/Identity.fetchItemByIdentity()
             *
             * @param keywordArgs
             */
            fetchItemByIdentity(keywordArgs: any): void;
            /**
             * See dojo/data/api/Read.getAttributes()
             *
             * @param item
             */
            getAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getFeatures()
             *
             */
            getFeatures(): Object;
            /**
             * See dojo/data/api/Identity.getIdentity()
             *
             * @param item
             */
            getIdentity(item: any): any;
            /**
             * See dojo/data/api/Identity.getIdentityAttributes()
             *
             * @param item
             */
            getIdentityAttributes(item: any): any;
            /**
             * See dojo/data/api/Read.getLabel()
             *
             * @param item
             */
            getLabel(item: any): any;
            /**
             * See dojo/data/api/Read.getLabelAttributes()
             *
             * @param item
             */
            getLabelAttributes(item: any): any;
            /**
             * See dojo/data/api/Read.getValue()
             *
             * @param item
             * @param attribute
             * @param defaultValue               Optional
             */
            getValue(item: any, attribute: String, defaultValue: any): any;
            /**
             * See dojo/data/api/Read.getValues()
             *
             * @param item
             * @param attribute
             */
            getValues(item: any, attribute: String): any[];
            /**
             * See dojo/data/api/Read.hasAttribute()
             *
             * @param item
             * @param attribute
             */
            hasAttribute(item: any, attribute: String): boolean;
            /**
             * See dojo/data/api/Read.isItem()
             *
             * @param something
             */
            isItem(something: any): any;
            /**
             * See dojo/data/api/Read.isItemLoaded()
             *
             * @param something
             */
            isItemLoaded(something: any): any;
            /**
             * See dojo/data/api/Read.loadItem()
             *
             * @param keywordArgs
             */
            loadItem(keywordArgs: Object): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/HtmlTableStore.html
         *
         *
         * @param args
         */
        class HtmlTableStore {
            constructor(args: Object);
            /**
             * The id of the table to load as store contents.
             *
             */
            "tableId": string;
            /**
             * The URL from which to load an HTML document for data loading
             *
             */
            "url": string;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request               Optional
             */
            close(request: dojo.data.api.Request ): void;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request               Optional
             */
            close(request: Object): void;
            /**
             * See dojo/data/api/Read.containsValue()
             *
             * @param item
             * @param attribute
             * @param value
             */
            containsValue(item: any, attribute: String, value: any): any;
            /**
             * The error handler when there is an error fetching items.  This function should not be called
             * directly and is used by simpleFetch.fetch().
             *
             * @param errorData
             * @param requestObject
             */
            errorHandler(errorData: Object, requestObject: Object): void;
            /**
             * The simpleFetch mixin is designed to serve as a set of function(s) that can
             * be mixed into other datastore implementations to accelerate their development.
             * The simpleFetch mixin should work well for any datastore that can respond to a _fetchItems()
             * call by returning an array of all the found items that matched the query.  The simpleFetch mixin
             * is not designed to work for datastores that respond to a fetch() call by incrementally
             * loading items, or sequentially loading partial batches of the result
             * set.  For datastores that mixin simpleFetch, simpleFetch
             * implements a fetch method that automatically handles eight of the fetch()
             * arguments -- onBegin, onItem, onComplete, onError, start, count, sort and scope
             * The class mixing in simpleFetch should not implement fetch(),
             * but should instead implement a _fetchItems() method.  The _fetchItems()
             * method takes three arguments, the keywordArgs object that was passed
             * to fetch(), a callback function to be called when the result array is
             * available, and an error callback to be called if something goes wrong.
             * The _fetchItems() method should ignore any keywordArgs parameters for
             * start, count, onBegin, onItem, onComplete, onError, sort, and scope.
             * The _fetchItems() method needs to correctly handle any other keywordArgs
             * parameters, including the query parameter and any optional parameters
             * (such as includeChildren).  The _fetchItems() method should create an array of
             * result items and pass it to the fetchHandler along with the original request object --
             * or, the _fetchItems() method may, if it wants to, create an new request object
             * with other specifics about the request that are specific to the datastore and pass
             * that as the request object to the handler.
             *
             * For more information on this specific function, see dojo/data/api/Read.fetch()
             *
             * @param request               OptionalThe keywordArgs parameter may either be an instance ofconforming to dojo/data/api/Request or may be a simple anonymous objectthat may contain any of the following:{    query: query-object or query-string,    queryOptions: object,    onBegin: Function,    onItem: Function,    onComplete: Function,    onError: Function,    scope: object,    start: int    count: int    sort: array}All implementations should accept keywordArgs objects with any ofthe 9 standard properties: query, onBegin, onItem, onComplete, onErrorscope, sort, start, and count.  Some implementations may accept additionalproperties in the keywordArgs object as valid parameters, such as{includeOutliers:true}.The query parameterThe query may be optional in some data store implementations.The dojo/data/api/Read API does not specify the syntax or semanticsof the query itself -- each different data store implementationmay have its own notion of what a query should look like.However, as of dojo 0.9, 1.0, and 1.1, all the provided datastores in dojo.dataand dojox.data support an object structure query, where the object is a set ofname/value parameters such as { attrFoo: valueBar, attrFoo1: valueBar1}.  Most of thedijit widgets, such as ComboBox assume this to be the case when working with a datastorewhen they dynamically update the query.  Therefore, for maximum compatibility with dijitwidgets the recommended query parameter is a key/value object.  That does not mean that thethe datastore may not take alternative query forms, such as a simple string, a Date, a number,or a mix of such.  Ultimately, The dojo/data/api/Read API is agnostic about what the queryformat.Further note:  In general for query objects that accept strings as attributevalue matches, the store should also support basic filtering capability, such as (match any character) and ? (match single character).  An example query that is a query objectwould be like: { attrFoo: "value"}.  Which generally means match all items where they havean attribute named attrFoo, with a value that starts with 'value'.The queryOptions parameterThe queryOptions parameter is an optional parameter used to specify options that may modifythe query in some fashion, such as doing a case insensitive search, or doing a deep searchwhere all items in a hierarchical representation of data are scanned instead of just the rootitems.  It currently defines two options that all datastores should attempt to honor if possible:{    ignoreCase: boolean, // Whether or not the query should match case sensitively or not.  Default behaviour is false.    deep: boolean   // Whether or not a fetch should do a deep search of items and all child                    // items instead of just root-level items in a datastore.  Default is false.}The onBegin parameter.function(size, request);If an onBegin callback function is provided, the callback functionwill be called just once, before the first onItem callback is called.The onBegin callback function will be passed two arguments, thethe total number of items identified and the Request object.  If the total number isunknown, then size will be -1.  Note that size is not necessarily the size of thecollection of items returned from the query, as the request may have specified to return only asubset of the total set of items through the use of the start and count parameters.The onItem parameter.function(item, request);If an onItem callback function is provided, the callback functionwill be called as each item in the result is received. The callbackfunction will be passed two arguments: the item itself, and theRequest object.The onComplete parameter.function(items, request);If an onComplete callback function is provided, the callback functionwill be called just once, after the last onItem callback is called.Note that if the onItem callback is not present, then onComplete will be passedan array containing all items which matched the query and the request object.If the onItem callback is present, then onComplete is called as:onComplete(null, request).The onError parameter.function(errorData, request);If an onError callback function is provided, the callback functionwill be called if there is any sort of error while attempting toexecute the query.The onError callback function will be passed two arguments:an Error object and the Request object.The scope parameter.If a scope object is provided, all of the callback functions (onItem,onComplete, onError, etc) will be invoked in the context of the scopeobject.  In the body of the callback function, the value of the "this"keyword will be the scope object.   If no scope object is provided,the callback functions will be called in the context of dojo.global().For example, onItem.call(scope, item, request) vs.onItem.call(dojo.global(), item, request)The start parameter.If a start parameter is specified, this is a indication to the datastore toonly start returning items once the start number of items have been located andskipped.  When this parameter is paired with 'count', the store should be ableto page across queries with millions of hits by only returning subsets of thehits for each queryThe count parameter.If a count parameter is specified, this is a indication to the datastore toonly return up to that many items.  This allows a fetch call that may havemillions of item matches to be paired down to something reasonable.The sort parameter.If a sort parameter is specified, this is a indication to the datastore tosort the items in some manner before returning the items.  The array is an array ofjavascript objects that must conform to the following format to be applied to thefetching of items:{    attribute: attribute || attribute-name-string,    descending: true|false;   // Optional.  Default is false.}Note that when comparing attributes, if an item contains no value for the attribute(undefined), then it the default ascending sort logic should push it to the bottomof the list.  In the descending order case, it such items should appear at the top of the list.
             */
            fetch(request: Object): void;
            /**
             * The handler when items are sucessfully fetched.  This function should not be called directly
             * and is used by simpleFetch.fetch().
             *
             * @param items
             * @param requestObject
             */
            fetchHandler(items: any[], requestObject: Object): void;
            /**
             * See dojo/data/api/Identity.fetchItemByIdentity()
             *
             * @param keywordArgs
             */
            fetchItemByIdentity(keywordArgs: any): void;
            /**
             * See dojo/data/api/Read.getAttributes()
             *
             * @param item
             */
            getAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getFeatures()
             *
             */
            getFeatures(): Object;
            /**
             * See dojo/data/api/Identity.getIdentity()
             *
             * @param item
             */
            getIdentity(item: any): any;
            /**
             * See dojo/data/api/Identity.getIdentityAttributes()
             *
             * @param item
             */
            getIdentityAttributes(item: any): any;
            /**
             * See dojo/data/api/Read.getLabel()
             *
             * @param item
             */
            getLabel(item: any): any;
            /**
             * See dojo/data/api/Read.getLabelAttributes()
             *
             * @param item
             */
            getLabelAttributes(item: any): any;
            /**
             * See dojo/data/api/Read.getValue()
             *
             * @param item
             * @param attribute
             * @param defaultValue               Optional
             */
            getValue(item: any, attribute: String, defaultValue: any): any;
            /**
             * See dojo/data/api/Read.getValues()
             *
             * @param item
             * @param attribute
             */
            getValues(item: any, attribute: String): any[];
            /**
             * See dojo/data/api/Read.hasAttribute()
             *
             * @param item
             * @param attribute
             */
            hasAttribute(item: any, attribute: String): boolean;
            /**
             * See dojo/data/api/Read.isItem()
             *
             * @param something
             */
            isItem(something: any): boolean;
            /**
             * See dojo/data/api/Read.isItemLoaded()
             *
             * @param something
             */
            isItemLoaded(something: any): any;
            /**
             * See dojo/data/api/Read.loadItem()
             *
             * @param keywordArgs
             */
            loadItem(keywordArgs: Object): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/JsonQueryRestStore.html
         *
         *
         * @param options Keyword argumentsThe schema parameterThis is a schema object for this store. This should be JSON Schema format.The service parameterThis is the service object that is used to retrieve lazy data and save resultsThe function should be directly callable with a single parameter of an object id to be loadedThe function should also have the following methods:put(id,value) - puts the value at the given idpost(id,value) - posts (appends) the value at the given iddelete(id) - deletes the value corresponding to the given idNote that it is critical that the service parses responses as JSON.If you are using dojox.rpc.Service, the easiest way to make sure thishappens is to make the responses have a content type ofapplication/json. If you are creating your own service, make sure youuse handleAs: "json" with your XHR requests.The target parameterThis is the target URL for this Service store. This may be used in placeof a service parameter to connect directly to RESTful URL withoutusing a dojox.rpc.Service object.The idAttribute parameterDefaults to 'id'. The name of the attribute that holds an objects id.This can be a preexisting id provided by the server.If an ID isn't already provided when an objectis fetched or added to the store, the autoIdentity systemwill generate an id for it and add it to the index.The syncMode parameterSetting this to true will set the store to using synchronous calls by default.Sync calls return their data immediately from the calling function, socallbacks are unnecessary
         */
        class JsonQueryRestStore extends dojox.data.JsonRestStore implements dojox.data.util.JsonQuery {
            constructor(options?: any);
            /**
             * Allow no trailing slash on target paths. This is generally discouraged since
             * it creates prevents simple scalar values from being used a relative URLs.
             * Disabled by default.
             *
             */
            "allowNoTrailingSlash": boolean;
            /**
             * This parameter is used by the ServiceStore to estimate the total count. When
             * paging is indicated in a fetch and the response includes the full number of items
             * requested by the fetch's count parameter, then the total count will be estimated
             * to be estimateCountFactor multiplied by the provided count. If this is 1, then it is assumed that the server
             * does not support paging, and the response is the full set of items, where the
             * total count is equal to the numer of items returned. If the server does support
             * paging, an estimateCountFactor of 2 is a good value for estimating the total count
             * It is also possible to override _processResults if the server can provide an exact
             * total count.
             *
             */
            "estimateCountFactor": number;
            /**
             * Treat objects in queries as partially loaded objects
             *
             */
            "idAsRef": boolean;
            /**
             * Defaults to 'id'. The name of the attribute that holds an objects id.
             * This can be a preexisting id provided by the server.
             * If an ID isn't already provided when an object
             * is fetched or added to the store, the autoIdentity system
             * will generate an id for it and add it to the index.
             *
             */
            "idAttribute": string;
            /**
             *
             */
            "jsonQueryPagination": boolean;
            /**
             *
             */
            "labelAttribute": string;
            /**
             *
             */
            "loadLazyValues": boolean;
            /**
             * Will load any schemas referenced content-type header or in Link headers
             *
             */
            "loadReferencedSchema": boolean;
            /**
             *
             */
            "referenceIntegrity": boolean;
            /**
             * This is a schema object for this store. This should be JSON Schema format.
             *
             */
            "schema": Object;
            /**
             * This is the service object that is used to retrieve lazy data and save results
             * The function should be directly callable with a single parameter of an object id to be loaded
             *
             */
            "service": Object;
            /**
             * Setting this to true will set the store to using synchronous calls by default.
             * Sync calls return their data immediately from the calling function, so
             * callbacks are unnecessary. This will only work with a synchronous capable service.
             *
             */
            "syncMode": boolean;
            /**
             *
             */
            "target": string;
            /**
             *
             */
            "useFullIdInQueries": boolean;
            /**
             * Removes an object from the list of dirty objects
             * This will prevent that object from being saved to the server on the next save
             *
             * @param object The item to cancel changes on
             */
            cancelChanging(object: any): void;
            /**
             * adds an item to the list of dirty items.    This item
             * contains a reference to the item itself as well as a
             * cloned and trimmed version of old item for use with
             * revert.
             *
             * @param item
             * @param _deleting
             */
            changing(item: any, _deleting: any): void;
            /**
             *
             * @param request
             * @param baseResults
             */
            clientSideFetch(request: Object, baseResults: any[]): any;
            /**
             *
             * @param request
             */
            close(request: any): any;
            /**
             * Checks to see if 'item' has 'value' at 'attribute'
             *
             * @param item
             * @param attribute
             * @param value
             */
            containsValue(item: Object, attribute: String, value: any): boolean;
            /**
             * deletes item and any references to that item from the store.
             *
             * @param item item to delete
             */
            deleteItem(item: any): void;
            /**
             * See dojo/data/api/Read.fetch
             *
             * @param args The queryOptions.cache parameterIf true, indicates that the query result should be cached for future use. This is only availableif dojox.data.ClientFilter has been loaded before the ServiceStoreThe syncMode parameterIndicates that the call should be fetch synchronously if possible (this is not always possible)The clientFetch parameterThis is a fetch keyword argument for explicitly doing client side filtering, querying, and paging
             */
            fetch(args: any): String;
            /**
             *
             * @param args
             */
            fetchItemByIdentity(args: any): any;
            /**
             * Gets the available attributes of an item's 'property' and returns
             * it as an array.
             *
             * @param item
             */
            getAttributes(item: Object): any[];
            /**
             * Gets the constructor for objects from this store
             *
             */
            getConstructor(): any;
            /**
             * return the store feature set
             *
             */
            getFeatures(): any;
            /**
             *
             * @param item
             */
            getIdentity(item: any): any;
            /**
             * returns the attributes which are used to make up the
             * identity of an item.    Basically returns this.idAttribute
             *
             * @param item
             */
            getIdentityAttributes(item: any): any[];
            /**
             * returns the label for an item. Just gets the "label" attribute.
             *
             * @param item
             */
            getLabel(item: any): any;
            /**
             * returns an array of attributes that are used to create the label of an item
             *
             * @param item
             */
            getLabelAttributes(item: any): any[];
            /**
             * Returns the parent item (or query) for the given item
             *
             * @param item The item to find the parent of
             */
            getParent(item: any): any;
            /**
             * Returns a reference to the JSON Schema
             *
             */
            getSchema(): any;
            /**
             * Gets the value of an item's 'property'
             *
             * @param item The item to get the value from
             * @param property property to look up value for
             * @param defaultValue               Optionalthe default value
             */
            getValue(item: Object, property: String, defaultValue: any): any;
            /**
             * Gets the value of an item's 'property' and returns
             * it. If this value is an array it is just returned,
             * if not, the value is added to an array and that is returned.
             *
             * @param item
             * @param property property to look up value for
             */
            getValues(item: Object, property: String): any[];
            /**
             * Checks to see if item has attribute
             *
             * @param item
             * @param attribute
             */
            hasAttribute(item: Object, attribute: String): boolean;
            /**
             * returns true if the item is marked as dirty.
             *
             * @param item
             */
            isDirty(item: any): any;
            /**
             * Checks to see if a passed 'item'
             * really belongs to this JsonRestStore.
             *
             * @param item The value to test for being an item
             * @param anyStore If true, this will return true if the value is an item for any JsonRestStore,not just this instance
             */
            isItem(item: Object, anyStore: boolean): any;
            /**
             * Checks to see if the item is loaded.
             *
             * @param item
             */
            isItemLoaded(item: Object): any;
            /**
             *
             */
            isUpdateable(): boolean;
            /**
             * Loads an item and calls the callback handler. Note, that this will call the callback
             * handler even if the item is loaded. Consequently, you can use loadItem to ensure
             * that an item is loaded is situations when the item may or may not be loaded yet.
             * If you access a value directly through property access, you can use this to load
             * a lazy value as well (doesn't need to be an item).
             *
             * @param args
             */
            loadItem(args: any): any;
            /**
             *
             * @param item
             * @param request
             */
            matchesQuery(item: any, request: any): any;
            /**
             * adds a new item to the store at the specified point.
             * Takes two parameters, data, and options.
             *
             * @param data The data to be added in as an item.
             * @param parentInfo
             */
            newItem(data: Object, parentInfo: any): any;
            /**
             *
             * @param argsSuper
             * @param argsSub
             */
            querySuperSet(argsSuper: any, argsSub: any): any;
            /**
             * returns any modified data to its original state prior to a save();
             *
             * @param kwArgs global:  This will cause the revert to undo all the changes for all  JsonRestStores in a single operation.
             */
            revert(kwArgs: any): void;
            /**
             * Saves the dirty data using REST Ajax methods. See dojo/data/api/Write for API.
             *
             * @param kwArgs global:  This will cause the save to commit the dirty data for all  JsonRestStores as a single transaction.revertOnError:  This will cause the changes to be reverted if there is an  error on the save. By default a revert is executed unless  a value of false is provide for this parameter.incrementalUpdates:  For items that have been updated, if this is enabled, the server will be sent a POST request  with a JSON object containing the changed properties. By default this is  not enabled, and a PUT is used to deliver an update, and will include a full  serialization of all the properties of the item/object.  If this is true, the POST request body will consist of a JSON object with  only the changed properties. The incrementalUpdates parameter may also  be a function, in which case it will be called with the updated and previous objects  and an object update representation can be returned.alwaysPostNewItems:  If this is true, new items will always be sent with a POST request. By default  this is not enabled, and the JsonRestStore will send a POST request if  the item does not include its identifier (expecting server assigned location/  identifier), and will send a PUT request if the item does include its identifier  (the PUT will be sent to the URI corresponding to the provided identifier).
             */
            save(kwArgs: any): any;
            /**
             * sets 'attribute' on 'item' to 'value'
             *
             * @param item
             * @param attribute
             * @param value
             */
            setValue(item: any, attribute: any, value: any): void;
            /**
             * sets 'attribute' on 'item' to 'value' value
             * must be an array.
             *
             * @param item
             * @param attribute
             * @param values
             */
            setValues(item: any, attribute: any, values: any): void;
            /**
             * unsets 'attribute' on 'item'
             *
             * @param item
             * @param attribute
             */
            unsetAttribute(item: any, attribute: any): void;
            /**
             *
             */
            onDelete(): void;
            /**
             *
             */
            onNew(): void;
            /**
             *
             */
            onSet(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/JsonRestStore.html
         *
         *
         * @param options Keyword argumentsThe schema parameterThis is a schema object for this store. This should be JSON Schema format.The service parameterThis is the service object that is used to retrieve lazy data and save resultsThe function should be directly callable with a single parameter of an object id to be loadedThe function should also have the following methods:put(id,value) - puts the value at the given idpost(id,value) - posts (appends) the value at the given iddelete(id) - deletes the value corresponding to the given idNote that it is critical that the service parses responses as JSON.If you are using dojox.rpc.Service, the easiest way to make sure thishappens is to make the responses have a content type ofapplication/json. If you are creating your own service, make sure youuse handleAs: "json" with your XHR requests.The target parameterThis is the target URL for this Service store. This may be used in placeof a service parameter to connect directly to RESTful URL withoutusing a dojox.rpc.Service object.The idAttribute parameterDefaults to 'id'. The name of the attribute that holds an objects id.This can be a preexisting id provided by the server.If an ID isn't already provided when an objectis fetched or added to the store, the autoIdentity systemwill generate an id for it and add it to the index.The syncMode parameterSetting this to true will set the store to using synchronous calls by default.Sync calls return their data immediately from the calling function, socallbacks are unnecessary
         */
        class JsonRestStore extends dojox.data.ServiceStore {
            constructor(options?: any);
            /**
             * Allow no trailing slash on target paths. This is generally discouraged since
             * it creates prevents simple scalar values from being used a relative URLs.
             * Disabled by default.
             *
             */
            "allowNoTrailingSlash": boolean;
            /**
             * This parameter is used by the ServiceStore to estimate the total count. When
             * paging is indicated in a fetch and the response includes the full number of items
             * requested by the fetch's count parameter, then the total count will be estimated
             * to be estimateCountFactor multiplied by the provided count. If this is 1, then it is assumed that the server
             * does not support paging, and the response is the full set of items, where the
             * total count is equal to the numer of items returned. If the server does support
             * paging, an estimateCountFactor of 2 is a good value for estimating the total count
             * It is also possible to override _processResults if the server can provide an exact
             * total count.
             *
             */
            "estimateCountFactor": number;
            /**
             * Treat objects in queries as partially loaded objects
             *
             */
            "idAsRef": boolean;
            /**
             * Defaults to 'id'. The name of the attribute that holds an objects id.
             * This can be a preexisting id provided by the server.
             * If an ID isn't already provided when an object
             * is fetched or added to the store, the autoIdentity system
             * will generate an id for it and add it to the index.
             *
             */
            "idAttribute": string;
            /**
             *
             */
            "labelAttribute": string;
            /**
             *
             */
            "loadLazyValues": boolean;
            /**
             * Will load any schemas referenced content-type header or in Link headers
             *
             */
            "loadReferencedSchema": boolean;
            /**
             *
             */
            "referenceIntegrity": boolean;
            /**
             * This is a schema object for this store. This should be JSON Schema format.
             *
             */
            "schema": Object;
            /**
             * This is the service object that is used to retrieve lazy data and save results
             * The function should be directly callable with a single parameter of an object id to be loaded
             *
             */
            "service": Object;
            /**
             * Setting this to true will set the store to using synchronous calls by default.
             * Sync calls return their data immediately from the calling function, so
             * callbacks are unnecessary. This will only work with a synchronous capable service.
             *
             */
            "syncMode": boolean;
            /**
             *
             */
            "target": string;
            /**
             * Removes an object from the list of dirty objects
             * This will prevent that object from being saved to the server on the next save
             *
             * @param object The item to cancel changes on
             */
            cancelChanging(object: any): void;
            /**
             * adds an item to the list of dirty items.    This item
             * contains a reference to the item itself as well as a
             * cloned and trimmed version of old item for use with
             * revert.
             *
             * @param item
             * @param _deleting
             */
            changing(item: any, _deleting: any): void;
            /**
             *
             * @param request
             */
            close(request: any): any;
            /**
             * Checks to see if 'item' has 'value' at 'attribute'
             *
             * @param item
             * @param attribute
             * @param value
             */
            containsValue(item: Object, attribute: String, value: any): boolean;
            /**
             * deletes item and any references to that item from the store.
             *
             * @param item item to delete
             */
            deleteItem(item: any): void;
            /**
             * See dojo/data/api/Read.fetch
             *
             * @param args The queryOptions.cache parameterIf true, indicates that the query result should be cached for future use. This is only availableif dojox.data.ClientFilter has been loaded before the ServiceStoreThe syncMode parameterIndicates that the call should be fetch synchronously if possible (this is not always possible)The clientFetch parameterThis is a fetch keyword argument for explicitly doing client side filtering, querying, and paging
             */
            fetch(args: any): String;
            /**
             *
             * @param args
             */
            fetchItemByIdentity(args: any): any;
            /**
             * Gets the available attributes of an item's 'property' and returns
             * it as an array.
             *
             * @param item
             */
            getAttributes(item: Object): any[];
            /**
             * Gets the constructor for objects from this store
             *
             */
            getConstructor(): any;
            /**
             * return the store feature set
             *
             */
            getFeatures(): any;
            /**
             *
             * @param item
             */
            getIdentity(item: any): any;
            /**
             * returns the attributes which are used to make up the
             * identity of an item.    Basically returns this.idAttribute
             *
             * @param item
             */
            getIdentityAttributes(item: any): any[];
            /**
             * returns the label for an item. Just gets the "label" attribute.
             *
             * @param item
             */
            getLabel(item: any): any;
            /**
             * returns an array of attributes that are used to create the label of an item
             *
             * @param item
             */
            getLabelAttributes(item: any): any[];
            /**
             * Returns the parent item (or query) for the given item
             *
             * @param item The item to find the parent of
             */
            getParent(item: any): any;
            /**
             * Returns a reference to the JSON Schema
             *
             */
            getSchema(): any;
            /**
             * Will retrieve or create a store using the given options (the same options
             * that are passed to JsonRestStore constructor. Returns a JsonRestStore instance
             *
             * @param options See the JsonRestStore constructor
             * @param Class Constructor to use (for creating stores from JsonRestStore subclasses).This is optional and defaults to JsonRestStore.
             */
            getStore(options: any, Class: any): void;
            /**
             * Gets the value of an item's 'property'
             *
             * @param item The item to get the value from
             * @param property property to look up value for
             * @param defaultValue               Optionalthe default value
             */
            getValue(item: Object, property: String, defaultValue: any): any;
            /**
             * Gets the value of an item's 'property' and returns
             * it. If this value is an array it is just returned,
             * if not, the value is added to an array and that is returned.
             *
             * @param item
             * @param property property to look up value for
             */
            getValues(item: Object, property: String): any[];
            /**
             * Checks to see if item has attribute
             *
             * @param item
             * @param attribute
             */
            hasAttribute(item: Object, attribute: String): boolean;
            /**
             * returns true if the item is marked as dirty.
             *
             * @param item
             */
            isDirty(item: any): any;
            /**
             * Checks to see if a passed 'item'
             * really belongs to this JsonRestStore.
             *
             * @param item The value to test for being an item
             * @param anyStore If true, this will return true if the value is an item for any JsonRestStore,not just this instance
             */
            isItem(item: Object, anyStore?: boolean): any;
            /**
             * Checks to see if the item is loaded.
             *
             * @param item
             */
            isItemLoaded(item: Object): any;
            /**
             * Loads an item and calls the callback handler. Note, that this will call the callback
             * handler even if the item is loaded. Consequently, you can use loadItem to ensure
             * that an item is loaded is situations when the item may or may not be loaded yet.
             * If you access a value directly through property access, you can use this to load
             * a lazy value as well (doesn't need to be an item).
             *
             * @param args
             */
            loadItem(args: any): any;
            /**
             * adds a new item to the store at the specified point.
             * Takes two parameters, data, and options.
             *
             * @param data The data to be added in as an item.
             * @param parentInfo
             */
            newItem(data: Object, parentInfo: any): any;
            /**
             * returns any modified data to its original state prior to a save();
             *
             * @param kwArgs global:  This will cause the revert to undo all the changes for all  JsonRestStores in a single operation.
             */
            revert(kwArgs: any): void;
            /**
             * Saves the dirty data using REST Ajax methods. See dojo/data/api/Write for API.
             *
             * @param kwArgs global:  This will cause the save to commit the dirty data for all  JsonRestStores as a single transaction.revertOnError:  This will cause the changes to be reverted if there is an  error on the save. By default a revert is executed unless  a value of false is provide for this parameter.incrementalUpdates:  For items that have been updated, if this is enabled, the server will be sent a POST request  with a JSON object containing the changed properties. By default this is  not enabled, and a PUT is used to deliver an update, and will include a full  serialization of all the properties of the item/object.  If this is true, the POST request body will consist of a JSON object with  only the changed properties. The incrementalUpdates parameter may also  be a function, in which case it will be called with the updated and previous objects  and an object update representation can be returned.alwaysPostNewItems:  If this is true, new items will always be sent with a POST request. By default  this is not enabled, and the JsonRestStore will send a POST request if  the item does not include its identifier (expecting server assigned location/  identifier), and will send a PUT request if the item does include its identifier  (the PUT will be sent to the URI corresponding to the provided identifier).
             */
            save(kwArgs: any): any;
            /**
             * sets 'attribute' on 'item' to 'value'
             *
             * @param item
             * @param attribute
             * @param value
             */
            setValue(item: any, attribute: any, value: any): void;
            /**
             * sets 'attribute' on 'item' to 'value' value
             * must be an array.
             *
             * @param item
             * @param attribute
             * @param values
             */
            setValues(item: any, attribute: any, values: any): void;
            /**
             * unsets 'attribute' on 'item'
             *
             * @param item
             * @param attribute
             */
            unsetAttribute(item: any, attribute: any): void;
            /**
             *
             */
            onDelete(): void;
            /**
             *
             */
            onNew(): void;
            /**
             *
             */
            onSet(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/KeyValueStore.html
         *
         * This is a dojo.data store implementation.  It can take in either a Javascript
         * array, JSON string, or URL as the data source.  Data is expected to be in the
         * following format:
         *
         * [
         *     { "key1": "value1" },
         *     { "key2": "value2" }
         * ]
         * This is to mimic the Java Properties file format.  Each 'item' from this store
         *
         * is a JS object representing a key-value pair.  If an item in the above array has
         * more than one key/value pair, only the first will be used/accessed.
         *
         * @param keywordParameters {url: String}{data: string}{dataVar: jsonObject}
         */
        class KeyValueStore {
            constructor(keywordParameters: Object);
            /**
             *
             */
            "data": string;
            /**
             *
             */
            "url": string;
            /**
             * Controls if urlPreventCache should be used with underlying xhrGet.
             *
             */
            "urlPreventCache": boolean;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request               Optional
             */
            close(request: dojo.data.api.Request ): void;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request               Optional
             */
            close(request: Object): void;
            /**
             * See dojo/data/api/Read.containsValue()
             *
             * @param item
             * @param attribute
             * @param value
             */
            containsValue(item: any, attribute: String, value: any): any;
            /**
             * The error handler when there is an error fetching items.  This function should not be called
             * directly and is used by simpleFetch.fetch().
             *
             * @param errorData
             * @param requestObject
             */
            errorHandler(errorData: Object, requestObject: Object): void;
            /**
             * The simpleFetch mixin is designed to serve as a set of function(s) that can
             * be mixed into other datastore implementations to accelerate their development.
             * The simpleFetch mixin should work well for any datastore that can respond to a _fetchItems()
             * call by returning an array of all the found items that matched the query.  The simpleFetch mixin
             * is not designed to work for datastores that respond to a fetch() call by incrementally
             * loading items, or sequentially loading partial batches of the result
             * set.  For datastores that mixin simpleFetch, simpleFetch
             * implements a fetch method that automatically handles eight of the fetch()
             * arguments -- onBegin, onItem, onComplete, onError, start, count, sort and scope
             * The class mixing in simpleFetch should not implement fetch(),
             * but should instead implement a _fetchItems() method.  The _fetchItems()
             * method takes three arguments, the keywordArgs object that was passed
             * to fetch(), a callback function to be called when the result array is
             * available, and an error callback to be called if something goes wrong.
             * The _fetchItems() method should ignore any keywordArgs parameters for
             * start, count, onBegin, onItem, onComplete, onError, sort, and scope.
             * The _fetchItems() method needs to correctly handle any other keywordArgs
             * parameters, including the query parameter and any optional parameters
             * (such as includeChildren).  The _fetchItems() method should create an array of
             * result items and pass it to the fetchHandler along with the original request object --
             * or, the _fetchItems() method may, if it wants to, create an new request object
             * with other specifics about the request that are specific to the datastore and pass
             * that as the request object to the handler.
             *
             * For more information on this specific function, see dojo/data/api/Read.fetch()
             *
             * @param request               OptionalThe keywordArgs parameter may either be an instance ofconforming to dojo/data/api/Request or may be a simple anonymous objectthat may contain any of the following:{    query: query-object or query-string,    queryOptions: object,    onBegin: Function,    onItem: Function,    onComplete: Function,    onError: Function,    scope: object,    start: int    count: int    sort: array}All implementations should accept keywordArgs objects with any ofthe 9 standard properties: query, onBegin, onItem, onComplete, onErrorscope, sort, start, and count.  Some implementations may accept additionalproperties in the keywordArgs object as valid parameters, such as{includeOutliers:true}.The query parameterThe query may be optional in some data store implementations.The dojo/data/api/Read API does not specify the syntax or semanticsof the query itself -- each different data store implementationmay have its own notion of what a query should look like.However, as of dojo 0.9, 1.0, and 1.1, all the provided datastores in dojo.dataand dojox.data support an object structure query, where the object is a set ofname/value parameters such as { attrFoo: valueBar, attrFoo1: valueBar1}.  Most of thedijit widgets, such as ComboBox assume this to be the case when working with a datastorewhen they dynamically update the query.  Therefore, for maximum compatibility with dijitwidgets the recommended query parameter is a key/value object.  That does not mean that thethe datastore may not take alternative query forms, such as a simple string, a Date, a number,or a mix of such.  Ultimately, The dojo/data/api/Read API is agnostic about what the queryformat.Further note:  In general for query objects that accept strings as attributevalue matches, the store should also support basic filtering capability, such as (match any character) and ? (match single character).  An example query that is a query objectwould be like: { attrFoo: "value"}.  Which generally means match all items where they havean attribute named attrFoo, with a value that starts with 'value'.The queryOptions parameterThe queryOptions parameter is an optional parameter used to specify options that may modifythe query in some fashion, such as doing a case insensitive search, or doing a deep searchwhere all items in a hierarchical representation of data are scanned instead of just the rootitems.  It currently defines two options that all datastores should attempt to honor if possible:{    ignoreCase: boolean, // Whether or not the query should match case sensitively or not.  Default behaviour is false.    deep: boolean   // Whether or not a fetch should do a deep search of items and all child                    // items instead of just root-level items in a datastore.  Default is false.}The onBegin parameter.function(size, request);If an onBegin callback function is provided, the callback functionwill be called just once, before the first onItem callback is called.The onBegin callback function will be passed two arguments, thethe total number of items identified and the Request object.  If the total number isunknown, then size will be -1.  Note that size is not necessarily the size of thecollection of items returned from the query, as the request may have specified to return only asubset of the total set of items through the use of the start and count parameters.The onItem parameter.function(item, request);If an onItem callback function is provided, the callback functionwill be called as each item in the result is received. The callbackfunction will be passed two arguments: the item itself, and theRequest object.The onComplete parameter.function(items, request);If an onComplete callback function is provided, the callback functionwill be called just once, after the last onItem callback is called.Note that if the onItem callback is not present, then onComplete will be passedan array containing all items which matched the query and the request object.If the onItem callback is present, then onComplete is called as:onComplete(null, request).The onError parameter.function(errorData, request);If an onError callback function is provided, the callback functionwill be called if there is any sort of error while attempting toexecute the query.The onError callback function will be passed two arguments:an Error object and the Request object.The scope parameter.If a scope object is provided, all of the callback functions (onItem,onComplete, onError, etc) will be invoked in the context of the scopeobject.  In the body of the callback function, the value of the "this"keyword will be the scope object.   If no scope object is provided,the callback functions will be called in the context of dojo.global().For example, onItem.call(scope, item, request) vs.onItem.call(dojo.global(), item, request)The start parameter.If a start parameter is specified, this is a indication to the datastore toonly start returning items once the start number of items have been located andskipped.  When this parameter is paired with 'count', the store should be ableto page across queries with millions of hits by only returning subsets of thehits for each queryThe count parameter.If a count parameter is specified, this is a indication to the datastore toonly return up to that many items.  This allows a fetch call that may havemillions of item matches to be paired down to something reasonable.The sort parameter.If a sort parameter is specified, this is a indication to the datastore tosort the items in some manner before returning the items.  The array is an array ofjavascript objects that must conform to the following format to be applied to thefetching of items:{    attribute: attribute || attribute-name-string,    descending: true|false;   // Optional.  Default is false.}Note that when comparing attributes, if an item contains no value for the attribute(undefined), then it the default ascending sort logic should push it to the bottomof the list.  In the descending order case, it such items should appear at the top of the list.
             */
            fetch(request: Object): void;
            /**
             * The handler when items are sucessfully fetched.  This function should not be called directly
             * and is used by simpleFetch.fetch().
             *
             * @param items
             * @param requestObject
             */
            fetchHandler(items: any[], requestObject: Object): void;
            /**
             * See dojo/data/api/Identity.fetchItemByIdentity()
             *
             * @param keywordArgs
             */
            fetchItemByIdentity(keywordArgs: Object): void;
            /**
             * See dojo/data/api/Read.getAttributes()
             *
             * @param item
             */
            getAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getFeatures()
             *
             */
            getFeatures(): any;
            /**
             * See dojo/data/api/Identity.getIdentity()
             *
             * @param item
             */
            getIdentity(item: any): any;
            /**
             * See dojo/data/api/Identity.getIdentifierAttributes()
             *
             * @param item
             */
            getIdentityAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getLabel()
             *
             * @param item
             */
            getLabel(item: any): any;
            /**
             * See dojo/data/api/Read.getLabelAttributes()
             *
             * @param item
             */
            getLabelAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getValue()
             *
             * @param item
             * @param attribute
             * @param defaultValue               Optional
             */
            getValue(item: any, attribute: String, defaultValue: any): any;
            /**
             * See dojo/data/api/Read.getValues()
             * Key/Value syntax does not support multi-valued attributes, so this is just a
             * wrapper function for getValue().
             *
             * @param item
             * @param attribute
             */
            getValues(item: any, attribute: String): any[];
            /**
             * See dojo/data/api/Read.hasAttribute()
             *
             * @param item
             * @param attribute
             */
            hasAttribute(item: any, attribute: String): boolean;
            /**
             * See dojo/data/api/Read.isItem()
             *
             * @param something
             */
            isItem(something: any): boolean;
            /**
             * See dojo/data/api/Read.isItemLoaded()
             * The KeyValueStore always loads all items, so if it's an item, then it's loaded.
             *
             * @param something
             */
            isItemLoaded(something: any): any;
            /**
             * See dojo/data/api/Read.loadItem()
             * The KeyValueStore always loads all items, so if it's an item, then it's loaded.
             *
             * From the dojo/data/api/Read.loadItem docs:
             *
             * If a call to isItemLoaded() returns true before loadItem() is even called,
             * then loadItem() need not do any work at all and will not even invoke
             * the callback handlers.
             *
             * @param keywordArgs
             */
            loadItem(keywordArgs: Object): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/OpenSearchStore.html
         *
         *
         * @param args
         */
        class OpenSearchStore {
            constructor(args: Object);
            /**
             *
             */
            "ATOM_CONTENT_TYPE": number;
            /**
             *
             */
            "ATOM_CONTENT_TYPE_STRING": string;
            /**
             *
             */
            "iframeElement": Object;
            /**
             *
             */
            "itemPath": string;
            /**
             *
             */
            "RSS_CONTENT_TYPE": number;
            /**
             *
             */
            "RSS_CONTENT_TYPE_STRING": string;
            /**
             *
             */
            "url": string;
            /**
             *
             */
            "urlElement": Object;
            /**
             * Flag denoting if xhrGet calls should use the preventCache option.
             *
             */
            "urlPreventCache": boolean;
            /**
             *
             */
            "XML_CONTENT_TYPE": number;
            /**
             *
             */
            "XML_CONTENT_TYPE_STRING": string;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request
             */
            close(request: any): void;
            /**
             * See dojo/data/api/Read.containsValue()
             *
             * @param item
             * @param attribute
             * @param value
             */
            containsValue(item: any, attribute: any, value: any): boolean;
            /**
             * The error handler when there is an error fetching items.  This function should not be called
             * directly and is used by simpleFetch.fetch().
             *
             * @param errorData
             * @param requestObject
             */
            errorHandler(errorData: Object, requestObject: Object): void;
            /**
             * The simpleFetch mixin is designed to serve as a set of function(s) that can
             * be mixed into other datastore implementations to accelerate their development.
             * The simpleFetch mixin should work well for any datastore that can respond to a _fetchItems()
             * call by returning an array of all the found items that matched the query.  The simpleFetch mixin
             * is not designed to work for datastores that respond to a fetch() call by incrementally
             * loading items, or sequentially loading partial batches of the result
             * set.  For datastores that mixin simpleFetch, simpleFetch
             * implements a fetch method that automatically handles eight of the fetch()
             * arguments -- onBegin, onItem, onComplete, onError, start, count, sort and scope
             * The class mixing in simpleFetch should not implement fetch(),
             * but should instead implement a _fetchItems() method.  The _fetchItems()
             * method takes three arguments, the keywordArgs object that was passed
             * to fetch(), a callback function to be called when the result array is
             * available, and an error callback to be called if something goes wrong.
             * The _fetchItems() method should ignore any keywordArgs parameters for
             * start, count, onBegin, onItem, onComplete, onError, sort, and scope.
             * The _fetchItems() method needs to correctly handle any other keywordArgs
             * parameters, including the query parameter and any optional parameters
             * (such as includeChildren).  The _fetchItems() method should create an array of
             * result items and pass it to the fetchHandler along with the original request object --
             * or, the _fetchItems() method may, if it wants to, create an new request object
             * with other specifics about the request that are specific to the datastore and pass
             * that as the request object to the handler.
             *
             * For more information on this specific function, see dojo/data/api/Read.fetch()
             *
             * @param request               OptionalThe keywordArgs parameter may either be an instance ofconforming to dojo/data/api/Request or may be a simple anonymous objectthat may contain any of the following:{    query: query-object or query-string,    queryOptions: object,    onBegin: Function,    onItem: Function,    onComplete: Function,    onError: Function,    scope: object,    start: int    count: int    sort: array}All implementations should accept keywordArgs objects with any ofthe 9 standard properties: query, onBegin, onItem, onComplete, onErrorscope, sort, start, and count.  Some implementations may accept additionalproperties in the keywordArgs object as valid parameters, such as{includeOutliers:true}.The query parameterThe query may be optional in some data store implementations.The dojo/data/api/Read API does not specify the syntax or semanticsof the query itself -- each different data store implementationmay have its own notion of what a query should look like.However, as of dojo 0.9, 1.0, and 1.1, all the provided datastores in dojo.dataand dojox.data support an object structure query, where the object is a set ofname/value parameters such as { attrFoo: valueBar, attrFoo1: valueBar1}.  Most of thedijit widgets, such as ComboBox assume this to be the case when working with a datastorewhen they dynamically update the query.  Therefore, for maximum compatibility with dijitwidgets the recommended query parameter is a key/value object.  That does not mean that thethe datastore may not take alternative query forms, such as a simple string, a Date, a number,or a mix of such.  Ultimately, The dojo/data/api/Read API is agnostic about what the queryformat.Further note:  In general for query objects that accept strings as attributevalue matches, the store should also support basic filtering capability, such as (match any character) and ? (match single character).  An example query that is a query objectwould be like: { attrFoo: "value"}.  Which generally means match all items where they havean attribute named attrFoo, with a value that starts with 'value'.The queryOptions parameterThe queryOptions parameter is an optional parameter used to specify options that may modifythe query in some fashion, such as doing a case insensitive search, or doing a deep searchwhere all items in a hierarchical representation of data are scanned instead of just the rootitems.  It currently defines two options that all datastores should attempt to honor if possible:{    ignoreCase: boolean, // Whether or not the query should match case sensitively or not.  Default behaviour is false.    deep: boolean   // Whether or not a fetch should do a deep search of items and all child                    // items instead of just root-level items in a datastore.  Default is false.}The onBegin parameter.function(size, request);If an onBegin callback function is provided, the callback functionwill be called just once, before the first onItem callback is called.The onBegin callback function will be passed two arguments, thethe total number of items identified and the Request object.  If the total number isunknown, then size will be -1.  Note that size is not necessarily the size of thecollection of items returned from the query, as the request may have specified to return only asubset of the total set of items through the use of the start and count parameters.The onItem parameter.function(item, request);If an onItem callback function is provided, the callback functionwill be called as each item in the result is received. The callbackfunction will be passed two arguments: the item itself, and theRequest object.The onComplete parameter.function(items, request);If an onComplete callback function is provided, the callback functionwill be called just once, after the last onItem callback is called.Note that if the onItem callback is not present, then onComplete will be passedan array containing all items which matched the query and the request object.If the onItem callback is present, then onComplete is called as:onComplete(null, request).The onError parameter.function(errorData, request);If an onError callback function is provided, the callback functionwill be called if there is any sort of error while attempting toexecute the query.The onError callback function will be passed two arguments:an Error object and the Request object.The scope parameter.If a scope object is provided, all of the callback functions (onItem,onComplete, onError, etc) will be invoked in the context of the scopeobject.  In the body of the callback function, the value of the "this"keyword will be the scope object.   If no scope object is provided,the callback functions will be called in the context of dojo.global().For example, onItem.call(scope, item, request) vs.onItem.call(dojo.global(), item, request)The start parameter.If a start parameter is specified, this is a indication to the datastore toonly start returning items once the start number of items have been located andskipped.  When this parameter is paired with 'count', the store should be ableto page across queries with millions of hits by only returning subsets of thehits for each queryThe count parameter.If a count parameter is specified, this is a indication to the datastore toonly return up to that many items.  This allows a fetch call that may havemillions of item matches to be paired down to something reasonable.The sort parameter.If a sort parameter is specified, this is a indication to the datastore tosort the items in some manner before returning the items.  The array is an array ofjavascript objects that must conform to the following format to be applied to thefetching of items:{    attribute: attribute || attribute-name-string,    descending: true|false;   // Optional.  Default is false.}Note that when comparing attributes, if an item contains no value for the attribute(undefined), then it the default ascending sort logic should push it to the bottomof the list.  In the descending order case, it such items should appear at the top of the list.
             */
            fetch(request: Object): void;
            /**
             * The handler when items are sucessfully fetched.  This function should not be called directly
             * and is used by simpleFetch.fetch().
             *
             * @param items
             * @param requestObject
             */
            fetchHandler(items: any[], requestObject: Object): void;
            /**
             * See dojo/data/api/Read.getAttributes()
             *
             * @param item
             */
            getAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getFeatures()
             *
             */
            getFeatures(): Object;
            /**
             * See dojo/data/api/Read.getLabel()
             *
             * @param item
             */
            getLabel(item: any): any;
            /**
             * See dojo/data/api/Read.getLabelAttributes()
             *
             * @param item
             */
            getLabelAttributes(item: any): any;
            /**
             * See dojo/data/api/Read.getValue()
             *
             * @param item
             * @param attribute
             * @param defaultValue
             */
            getValue(item: any, attribute: any, defaultValue: any): any;
            /**
             * See dojo/data/api/Read.getValue()
             *
             * @param item
             * @param attribute
             */
            getValues(item: any, attribute: any): any;
            /**
             * See dojo/data/api/Read.hasAttributes()
             *
             * @param item
             * @param attribute
             */
            hasAttribute(item: any, attribute: any): boolean;
            /**
             * See dojo/data/api/Read.isItem()
             *
             * @param item
             */
            isItem(item: any): boolean;
            /**
             * See dojo/data/api/Read.isItemLoaded()
             *
             * @param item
             */
            isItemLoaded(item: any): any;
            /**
             * See dojo/data/api/Read.loadItem()
             *
             * @param keywordArgs
             */
            loadItem(keywordArgs: any): void;
            /**
             *
             * @param data
             */
            process(data: any): any;
            /**
             *
             * @param item
             * @param attribute
             */
            processItem(item: any, attribute: any): any;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/OpmlStore.html
         *
         * The OpmlStore implements the dojo/data/api/Read API.
         *
         * @param keywordParameters {url: String, label: String}Where label is optional and configures what should be used as the return from getLabel()
         */
        class OpmlStore {
            constructor(keywordParameters: Object);
            /**
             * The attribute of the Opml item to act as a label.
             *
             */
            "label": string;
            /**
             * The location from which to fetch the Opml document.
             *
             */
            "url": string;
            /**
             * Flag to denote if the underlying xhrGet call should set preventCache.
             *
             */
            "urlPreventCache": boolean;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request               Optional
             */
            close(request: dojo.data.api.Request ): void;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request               Optional
             */
            close(request: Object): void;
            /**
             * See dojo/data/api/Read.containsValue()
             *
             * @param item
             * @param attribute
             * @param value
             */
            containsValue(item: any, attribute: Attr, value: any): any;
            /**
             * See dojo/data/api/Read.containsValue()
             *
             * @param item
             * @param attribute
             * @param value
             */
            containsValue(item: any, attribute: String, value: any): any;
            /**
             * The error handler when there is an error fetching items.  This function should not be called
             * directly and is used by simpleFetch.fetch().
             *
             * @param errorData
             * @param requestObject
             */
            errorHandler(errorData: Object, requestObject: Object): void;
            /**
             * The simpleFetch mixin is designed to serve as a set of function(s) that can
             * be mixed into other datastore implementations to accelerate their development.
             * The simpleFetch mixin should work well for any datastore that can respond to a _fetchItems()
             * call by returning an array of all the found items that matched the query.  The simpleFetch mixin
             * is not designed to work for datastores that respond to a fetch() call by incrementally
             * loading items, or sequentially loading partial batches of the result
             * set.  For datastores that mixin simpleFetch, simpleFetch
             * implements a fetch method that automatically handles eight of the fetch()
             * arguments -- onBegin, onItem, onComplete, onError, start, count, sort and scope
             * The class mixing in simpleFetch should not implement fetch(),
             * but should instead implement a _fetchItems() method.  The _fetchItems()
             * method takes three arguments, the keywordArgs object that was passed
             * to fetch(), a callback function to be called when the result array is
             * available, and an error callback to be called if something goes wrong.
             * The _fetchItems() method should ignore any keywordArgs parameters for
             * start, count, onBegin, onItem, onComplete, onError, sort, and scope.
             * The _fetchItems() method needs to correctly handle any other keywordArgs
             * parameters, including the query parameter and any optional parameters
             * (such as includeChildren).  The _fetchItems() method should create an array of
             * result items and pass it to the fetchHandler along with the original request object --
             * or, the _fetchItems() method may, if it wants to, create an new request object
             * with other specifics about the request that are specific to the datastore and pass
             * that as the request object to the handler.
             *
             * For more information on this specific function, see dojo/data/api/Read.fetch()
             *
             * @param request               OptionalThe keywordArgs parameter may either be an instance ofconforming to dojo/data/api/Request or may be a simple anonymous objectthat may contain any of the following:{    query: query-object or query-string,    queryOptions: object,    onBegin: Function,    onItem: Function,    onComplete: Function,    onError: Function,    scope: object,    start: int    count: int    sort: array}All implementations should accept keywordArgs objects with any ofthe 9 standard properties: query, onBegin, onItem, onComplete, onErrorscope, sort, start, and count.  Some implementations may accept additionalproperties in the keywordArgs object as valid parameters, such as{includeOutliers:true}.The query parameterThe query may be optional in some data store implementations.The dojo/data/api/Read API does not specify the syntax or semanticsof the query itself -- each different data store implementationmay have its own notion of what a query should look like.However, as of dojo 0.9, 1.0, and 1.1, all the provided datastores in dojo.dataand dojox.data support an object structure query, where the object is a set ofname/value parameters such as { attrFoo: valueBar, attrFoo1: valueBar1}.  Most of thedijit widgets, such as ComboBox assume this to be the case when working with a datastorewhen they dynamically update the query.  Therefore, for maximum compatibility with dijitwidgets the recommended query parameter is a key/value object.  That does not mean that thethe datastore may not take alternative query forms, such as a simple string, a Date, a number,or a mix of such.  Ultimately, The dojo/data/api/Read API is agnostic about what the queryformat.Further note:  In general for query objects that accept strings as attributevalue matches, the store should also support basic filtering capability, such as (match any character) and ? (match single character).  An example query that is a query objectwould be like: { attrFoo: "value"}.  Which generally means match all items where they havean attribute named attrFoo, with a value that starts with 'value'.The queryOptions parameterThe queryOptions parameter is an optional parameter used to specify options that may modifythe query in some fashion, such as doing a case insensitive search, or doing a deep searchwhere all items in a hierarchical representation of data are scanned instead of just the rootitems.  It currently defines two options that all datastores should attempt to honor if possible:{    ignoreCase: boolean, // Whether or not the query should match case sensitively or not.  Default behaviour is false.    deep: boolean   // Whether or not a fetch should do a deep search of items and all child                    // items instead of just root-level items in a datastore.  Default is false.}The onBegin parameter.function(size, request);If an onBegin callback function is provided, the callback functionwill be called just once, before the first onItem callback is called.The onBegin callback function will be passed two arguments, thethe total number of items identified and the Request object.  If the total number isunknown, then size will be -1.  Note that size is not necessarily the size of thecollection of items returned from the query, as the request may have specified to return only asubset of the total set of items through the use of the start and count parameters.The onItem parameter.function(item, request);If an onItem callback function is provided, the callback functionwill be called as each item in the result is received. The callbackfunction will be passed two arguments: the item itself, and theRequest object.The onComplete parameter.function(items, request);If an onComplete callback function is provided, the callback functionwill be called just once, after the last onItem callback is called.Note that if the onItem callback is not present, then onComplete will be passedan array containing all items which matched the query and the request object.If the onItem callback is present, then onComplete is called as:onComplete(null, request).The onError parameter.function(errorData, request);If an onError callback function is provided, the callback functionwill be called if there is any sort of error while attempting toexecute the query.The onError callback function will be passed two arguments:an Error object and the Request object.The scope parameter.If a scope object is provided, all of the callback functions (onItem,onComplete, onError, etc) will be invoked in the context of the scopeobject.  In the body of the callback function, the value of the "this"keyword will be the scope object.   If no scope object is provided,the callback functions will be called in the context of dojo.global().For example, onItem.call(scope, item, request) vs.onItem.call(dojo.global(), item, request)The start parameter.If a start parameter is specified, this is a indication to the datastore toonly start returning items once the start number of items have been located andskipped.  When this parameter is paired with 'count', the store should be ableto page across queries with millions of hits by only returning subsets of thehits for each queryThe count parameter.If a count parameter is specified, this is a indication to the datastore toonly return up to that many items.  This allows a fetch call that may havemillions of item matches to be paired down to something reasonable.The sort parameter.If a sort parameter is specified, this is a indication to the datastore tosort the items in some manner before returning the items.  The array is an array ofjavascript objects that must conform to the following format to be applied to thefetching of items:{    attribute: attribute || attribute-name-string,    descending: true|false;   // Optional.  Default is false.}Note that when comparing attributes, if an item contains no value for the attribute(undefined), then it the default ascending sort logic should push it to the bottomof the list.  In the descending order case, it such items should appear at the top of the list.
             */
            fetch(request: Object): void;
            /**
             * The handler when items are sucessfully fetched.  This function should not be called directly
             * and is used by simpleFetch.fetch().
             *
             * @param items
             * @param requestObject
             */
            fetchHandler(items: any[], requestObject: Object): void;
            /**
             * See dojo/data/api/Identity.fetchItemByIdentity()
             *
             * @param keywordArgs
             */
            fetchItemByIdentity(keywordArgs: Object): void;
            /**
             * See dojo/data/api/Read.getAttributes()
             *
             * @param item
             */
            getAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getFeatures()
             *
             */
            getFeatures(): Object;
            /**
             * See dojo/data/api/Identity.getIdentity()
             *
             * @param item
             */
            getIdentity(item: any): any;
            /**
             * See dojo/data/api/Identity.getIdentifierAttributes()
             *
             * @param item
             */
            getIdentityAttributes(item: any): any;
            /**
             * See dojo/data/api/Read.getLabel()
             *
             * @param item
             */
            getLabel(item: any): any;
            /**
             * See dojo/data/api/Read.getLabelAttributes()
             *
             * @param item
             */
            getLabelAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getValue()
             *
             * @param item
             * @param attribute
             * @param defaultValue               Optional
             */
            getValue(item: any, attribute: Attr, defaultValue: any): any;
            /**
             * See dojo/data/api/Read.getValue()
             *
             * @param item
             * @param attribute
             * @param defaultValue               Optional
             */
            getValue(item: any, attribute: String, defaultValue: any): any;
            /**
             * See dojo/data/api/Read.getValues()
             *
             * @param item
             * @param attribute
             */
            getValues(item: any, attribute: Attr): any[];
            /**
             * See dojo/data/api/Read.getValues()
             *
             * @param item
             * @param attribute
             */
            getValues(item: any, attribute: String): any[];
            /**
             * See dojo/data/api/Read.hasAttribute()
             *
             * @param item
             * @param attribute
             */
            hasAttribute(item: any, attribute: Attr): boolean;
            /**
             * See dojo/data/api/Read.hasAttribute()
             *
             * @param item
             * @param attribute
             */
            hasAttribute(item: any, attribute: String): boolean;
            /**
             * See dojo/data/api/Read.isItem()
             * Four things are verified to ensure that "something" is an item:
             * something can not be null, the nodeType must be an XML Element,
             * the tagName must be "outline", and the node must be a member of
             * XML document for this datastore.
             *
             * @param something
             */
            isItem(something: any): any;
            /**
             * See dojo/data/api/Read.isItemLoaded().
             * OpmlStore loads every item, so if it's an item, then it's loaded.
             *
             * @param something
             */
            isItemLoaded(something: any): any;
            /**
             * See dojo/data/api/Read.loadItem()
             * The OpmlStore always loads all items, so if it's an item, then it's loaded.
             *
             * From the dojo/data/api/Read.loadItem docs:
             *
             * If a call to isItemLoaded() returns true before loadItem() is even called,
             * then loadItem() need not do any work at all and will not even invoke the callback handlers.
             *
             * @param item
             */
            loadItem(item: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/PersevereStore.html
         *
         *
         */
        class PersevereStore {
            constructor();
            /**
             *
             */
            "jsonQueryPagination": boolean;
            /**
             *
             */
            "useFullIdInQueries": boolean;
            /**
             * Invokes the XHR proxy plugin. Call this if you will be using x-site data.
             *
             */
            addProxy(): void;
            /**
             * Creates Dojo data stores for all the table/classes on a Persevere server
             *
             * @param path               OptionalURL of the Persevere server's root, this normally just "/"which is the default value if the target is not provided
             * @param sync               OptionalIndicates that the operation should happen synchronously.
             */
            getStores(path: String, sync: boolean): any;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/PicasaStore.html
         *
         *
         * @param args
         */
        class PicasaStore {
            constructor(args: Object);
            /**
             * The attribute to use from the picasa item as its label.
             *
             */
            "label": string;
            /**
             * Define out how many results to return for a fetch.
             *
             */
            "maxResults": number;
            /**
             * Flag denoting if preventCache should be passed to io.script.
             *
             */
            "urlPreventCache": boolean;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request
             */
            close(request: any): void;
            /**
             * See dojo/data/api/Read.containsValue()
             *
             * @param item
             * @param attribute
             * @param value
             */
            containsValue(item: any, attribute: any, value: any): boolean;
            /**
             * The error handler when there is an error fetching items.  This function should not be called
             * directly and is used by simpleFetch.fetch().
             *
             * @param errorData
             * @param requestObject
             */
            errorHandler(errorData: Object, requestObject: Object): void;
            /**
             * The simpleFetch mixin is designed to serve as a set of function(s) that can
             * be mixed into other datastore implementations to accelerate their development.
             * The simpleFetch mixin should work well for any datastore that can respond to a _fetchItems()
             * call by returning an array of all the found items that matched the query.  The simpleFetch mixin
             * is not designed to work for datastores that respond to a fetch() call by incrementally
             * loading items, or sequentially loading partial batches of the result
             * set.  For datastores that mixin simpleFetch, simpleFetch
             * implements a fetch method that automatically handles eight of the fetch()
             * arguments -- onBegin, onItem, onComplete, onError, start, count, sort and scope
             * The class mixing in simpleFetch should not implement fetch(),
             * but should instead implement a _fetchItems() method.  The _fetchItems()
             * method takes three arguments, the keywordArgs object that was passed
             * to fetch(), a callback function to be called when the result array is
             * available, and an error callback to be called if something goes wrong.
             * The _fetchItems() method should ignore any keywordArgs parameters for
             * start, count, onBegin, onItem, onComplete, onError, sort, and scope.
             * The _fetchItems() method needs to correctly handle any other keywordArgs
             * parameters, including the query parameter and any optional parameters
             * (such as includeChildren).  The _fetchItems() method should create an array of
             * result items and pass it to the fetchHandler along with the original request object --
             * or, the _fetchItems() method may, if it wants to, create an new request object
             * with other specifics about the request that are specific to the datastore and pass
             * that as the request object to the handler.
             *
             * For more information on this specific function, see dojo/data/api/Read.fetch()
             *
             * @param request               OptionalThe keywordArgs parameter may either be an instance ofconforming to dojo/data/api/Request or may be a simple anonymous objectthat may contain any of the following:{    query: query-object or query-string,    queryOptions: object,    onBegin: Function,    onItem: Function,    onComplete: Function,    onError: Function,    scope: object,    start: int    count: int    sort: array}All implementations should accept keywordArgs objects with any ofthe 9 standard properties: query, onBegin, onItem, onComplete, onErrorscope, sort, start, and count.  Some implementations may accept additionalproperties in the keywordArgs object as valid parameters, such as{includeOutliers:true}.The query parameterThe query may be optional in some data store implementations.The dojo/data/api/Read API does not specify the syntax or semanticsof the query itself -- each different data store implementationmay have its own notion of what a query should look like.However, as of dojo 0.9, 1.0, and 1.1, all the provided datastores in dojo.dataand dojox.data support an object structure query, where the object is a set ofname/value parameters such as { attrFoo: valueBar, attrFoo1: valueBar1}.  Most of thedijit widgets, such as ComboBox assume this to be the case when working with a datastorewhen they dynamically update the query.  Therefore, for maximum compatibility with dijitwidgets the recommended query parameter is a key/value object.  That does not mean that thethe datastore may not take alternative query forms, such as a simple string, a Date, a number,or a mix of such.  Ultimately, The dojo/data/api/Read API is agnostic about what the queryformat.Further note:  In general for query objects that accept strings as attributevalue matches, the store should also support basic filtering capability, such as (match any character) and ? (match single character).  An example query that is a query objectwould be like: { attrFoo: "value"}.  Which generally means match all items where they havean attribute named attrFoo, with a value that starts with 'value'.The queryOptions parameterThe queryOptions parameter is an optional parameter used to specify options that may modifythe query in some fashion, such as doing a case insensitive search, or doing a deep searchwhere all items in a hierarchical representation of data are scanned instead of just the rootitems.  It currently defines two options that all datastores should attempt to honor if possible:{    ignoreCase: boolean, // Whether or not the query should match case sensitively or not.  Default behaviour is false.    deep: boolean   // Whether or not a fetch should do a deep search of items and all child                    // items instead of just root-level items in a datastore.  Default is false.}The onBegin parameter.function(size, request);If an onBegin callback function is provided, the callback functionwill be called just once, before the first onItem callback is called.The onBegin callback function will be passed two arguments, thethe total number of items identified and the Request object.  If the total number isunknown, then size will be -1.  Note that size is not necessarily the size of thecollection of items returned from the query, as the request may have specified to return only asubset of the total set of items through the use of the start and count parameters.The onItem parameter.function(item, request);If an onItem callback function is provided, the callback functionwill be called as each item in the result is received. The callbackfunction will be passed two arguments: the item itself, and theRequest object.The onComplete parameter.function(items, request);If an onComplete callback function is provided, the callback functionwill be called just once, after the last onItem callback is called.Note that if the onItem callback is not present, then onComplete will be passedan array containing all items which matched the query and the request object.If the onItem callback is present, then onComplete is called as:onComplete(null, request).The onError parameter.function(errorData, request);If an onError callback function is provided, the callback functionwill be called if there is any sort of error while attempting toexecute the query.The onError callback function will be passed two arguments:an Error object and the Request object.The scope parameter.If a scope object is provided, all of the callback functions (onItem,onComplete, onError, etc) will be invoked in the context of the scopeobject.  In the body of the callback function, the value of the "this"keyword will be the scope object.   If no scope object is provided,the callback functions will be called in the context of dojo.global().For example, onItem.call(scope, item, request) vs.onItem.call(dojo.global(), item, request)The start parameter.If a start parameter is specified, this is a indication to the datastore toonly start returning items once the start number of items have been located andskipped.  When this parameter is paired with 'count', the store should be ableto page across queries with millions of hits by only returning subsets of thehits for each queryThe count parameter.If a count parameter is specified, this is a indication to the datastore toonly return up to that many items.  This allows a fetch call that may havemillions of item matches to be paired down to something reasonable.The sort parameter.If a sort parameter is specified, this is a indication to the datastore tosort the items in some manner before returning the items.  The array is an array ofjavascript objects that must conform to the following format to be applied to thefetching of items:{    attribute: attribute || attribute-name-string,    descending: true|false;   // Optional.  Default is false.}Note that when comparing attributes, if an item contains no value for the attribute(undefined), then it the default ascending sort logic should push it to the bottomof the list.  In the descending order case, it such items should appear at the top of the list.
             */
            fetch(request: Object): void;
            /**
             * The handler when items are sucessfully fetched.  This function should not be called directly
             * and is used by simpleFetch.fetch().
             *
             * @param items
             * @param requestObject
             */
            fetchHandler(items: any[], requestObject: Object): void;
            /**
             * See dojo/data/api/Read.getAttributes()
             *
             * @param item
             */
            getAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getFeatures()
             *
             */
            getFeatures(): Object;
            /**
             * See dojo/data/api/Read.getLabel()
             *
             * @param item
             */
            getLabel(item: any): any;
            /**
             * See dojo/data/api/Read.getLabelAttributes()
             *
             * @param item
             */
            getLabelAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getValue()
             *
             * @param item
             * @param attribute
             * @param defaultValue
             */
            getValue(item: any, attribute: any, defaultValue: any): any;
            /**
             * See dojo/data/api/Read.getValue()
             *
             * @param item
             * @param attribute
             */
            getValues(item: any, attribute: any): any;
            /**
             * See dojo/data/api/Read.hasAttributes()
             *
             * @param item
             * @param attribute
             */
            hasAttribute(item: any, attribute: any): boolean;
            /**
             * See dojo/data/api/Read.isItem()
             *
             * @param item
             */
            isItem(item: any): boolean;
            /**
             * See dojo/data/api/Read.isItemLoaded()
             *
             * @param item
             */
            isItemLoaded(item: any): any;
            /**
             * See dojo/data/api/Read.loadItem()
             *
             * @param keywordArgs
             */
            loadItem(keywordArgs: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/QueryReadStore.html
         *
         * This class provides a store that is mainly intended to be used
         * for loading data dynamically from the server, used i.e. for
         * retrieving chunks of data from huge data stores on the server (by server-side filtering!).
         * Upon calling the fetch() method of this store the data are requested from
         * the server if they are not yet loaded for paging (or cached).
         *
         * For example used for a combobox which works on lots of data. It
         * can be used to retrieve the data partially upon entering the
         * letters "ac" it returns only items like "action", "acting", etc.
         *
         * note:
         * The field name "id" in a query is reserved for looking up data
         * by id. This is necessary as before the first fetch, the store
         * has no way of knowing which field the server will declare as
         * identifier.
         *
         * @param params
         */
        class QueryReadStore {
            constructor(params: Object);
            /**
             * By default every request for paging is sent to the server.
             *
             */
            "doClientPaging": boolean;
            /**
             * By default all the sorting is done serverside before the data is returned
             * which is the proper place to be doing it for really large datasets.
             *
             */
            "doClientSorting": boolean;
            /**
             *
             */
            "lastRequestHash": Object;
            /**
             *
             */
            "requestMethod": string;
            /**
             *
             */
            "url": string;
            /**
             *
             * @param request               Optional
             */
            close(request: dojo.data.api.Request ): void;
            /**
             *
             * @param request               Optional
             */
            close(request: Object): void;
            /**
             *
             * @param item
             * @param attribute
             * @param value
             */
            containsValue(item: any, attribute: String, value: any): boolean;
            /**
             * See dojo.data.util.simpleFetch.fetch() this is just a copy and I adjusted
             * only the paging, since it happens on the server if doClientPaging is
             * false, thx to http://trac.dojotoolkit.org/ticket/4761 reporting this.
             * Would be nice to be able to use simpleFetch() to reduce copied code,
             * but i dont know how yet. Ideas please!
             *
             * @param request               Optional
             */
            fetch(request: Object): String;
            /**
             * See dojo/data/api/Identity.fetchItemByIdentity()
             *
             * @param keywordArgs
             */
            fetchItemByIdentity(keywordArgs: Object): void;
            /**
             *
             * @param item
             */
            getAttributes(item: any): any[];
            /**
             *
             */
            getFeatures(): any;
            /**
             * See dojo/data/api/Identity.getIdentity()
             *
             * @param item
             */
            getIdentity(item: any): any;
            /**
             * See dojo/data/api/Identity.getIdentityAttributes()
             *
             * @param item
             */
            getIdentityAttributes(item: any): any[];
            /**
             * See dojo/data/api/Read.getLabel()
             *
             * @param item
             */
            getLabel(item: any): any;
            /**
             * See dojo/data/api/Read.getLabelAttributes()
             *
             * @param item
             */
            getLabelAttributes(item: any): any;
            /**
             *
             * @param item
             * @param attribute
             * @param defaultValue               Optional
             */
            getValue(item: any, attribute: String, defaultValue: any): any;
            /**
             *
             * @param item
             * @param attribute
             */
            getValues(item: any, attribute: String): any[];
            /**
             * See dojo/data/api/Read.hasAttribute()
             *
             * @param item
             * @param attribute
             */
            hasAttribute(item: any, attribute: String): any;
            /**
             *
             * @param something
             */
            isItem(something: any): boolean;
            /**
             *
             * @param something
             */
            isItemLoaded(something: any): any;
            /**
             *
             * @param args
             */
            loadItem(args: Object): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/RailsStore.html
         *
         *
         */
        class RailsStore {
            constructor();
            /**
             *
             * @param args
             */
            fetch(args: any): any;
            /**
             *
             * @param options
             */
            preamble(options: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/S3Store.html
         *
         * S3JsonRestStore is an extension of JsonRestStore to handle
         * Amazon's S3 service using JSON data
         *
         * @param options Keyword argumentsThe schema parameterThis is a schema object for this store. This should be JSON Schema format.The service parameterThis is the service object that is used to retrieve lazy data and save resultsThe function should be directly callable with a single parameter of an object id to be loadedThe function should also have the following methods:put(id,value) - puts the value at the given idpost(id,value) - posts (appends) the value at the given iddelete(id) - deletes the value corresponding to the given idNote that it is critical that the service parses responses as JSON.If you are using dojox.rpc.Service, the easiest way to make sure thishappens is to make the responses have a content type ofapplication/json. If you are creating your own service, make sure youuse handleAs: "json" with your XHR requests.The target parameterThis is the target URL for this Service store. This may be used in placeof a service parameter to connect directly to RESTful URL withoutusing a dojox.rpc.Service object.The idAttribute parameterDefaults to 'id'. The name of the attribute that holds an objects id.This can be a preexisting id provided by the server.If an ID isn't already provided when an objectis fetched or added to the store, the autoIdentity systemwill generate an id for it and add it to the index.The syncMode parameterSetting this to true will set the store to using synchronous calls by default.Sync calls return their data immediately from the calling function, socallbacks are unnecessary
         */
        class S3Store extends dojox.data.JsonRestStore {
            constructor(options?: any);
            /**
             * Allow no trailing slash on target paths. This is generally discouraged since
             * it creates prevents simple scalar values from being used a relative URLs.
             * Disabled by default.
             *
             */
            "allowNoTrailingSlash": boolean;
            /**
             * This parameter is used by the ServiceStore to estimate the total count. When
             * paging is indicated in a fetch and the response includes the full number of items
             * requested by the fetch's count parameter, then the total count will be estimated
             * to be estimateCountFactor multiplied by the provided count. If this is 1, then it is assumed that the server
             * does not support paging, and the response is the full set of items, where the
             * total count is equal to the numer of items returned. If the server does support
             * paging, an estimateCountFactor of 2 is a good value for estimating the total count
             * It is also possible to override _processResults if the server can provide an exact
             * total count.
             *
             */
            "estimateCountFactor": number;
            /**
             * Treat objects in queries as partially loaded objects
             *
             */
            "idAsRef": boolean;
            /**
             * Defaults to 'id'. The name of the attribute that holds an objects id.
             * This can be a preexisting id provided by the server.
             * If an ID isn't already provided when an object
             * is fetched or added to the store, the autoIdentity system
             * will generate an id for it and add it to the index.
             *
             */
            "idAttribute": string;
            /**
             *
             */
            "labelAttribute": string;
            /**
             *
             */
            "loadLazyValues": boolean;
            /**
             * Will load any schemas referenced content-type header or in Link headers
             *
             */
            "loadReferencedSchema": boolean;
            /**
             *
             */
            "referenceIntegrity": boolean;
            /**
             * This is a schema object for this store. This should be JSON Schema format.
             *
             */
            "schema": Object;
            /**
             * This is the service object that is used to retrieve lazy data and save results
             * The function should be directly callable with a single parameter of an object id to be loaded
             *
             */
            "service": Object;
            /**
             * Setting this to true will set the store to using synchronous calls by default.
             * Sync calls return their data immediately from the calling function, so
             * callbacks are unnecessary. This will only work with a synchronous capable service.
             *
             */
            "syncMode": boolean;
            /**
             *
             */
            "target": string;
            /**
             * Removes an object from the list of dirty objects
             * This will prevent that object from being saved to the server on the next save
             *
             * @param object The item to cancel changes on
             */
            cancelChanging(object: any): void;
            /**
             * adds an item to the list of dirty items.    This item
             * contains a reference to the item itself as well as a
             * cloned and trimmed version of old item for use with
             * revert.
             *
             * @param item
             * @param _deleting
             */
            changing(item: any, _deleting: any): void;
            /**
             *
             * @param request
             */
            close(request: any): any;
            /**
             * Checks to see if 'item' has 'value' at 'attribute'
             *
             * @param item
             * @param attribute
             * @param value
             */
            containsValue(item: Object, attribute: String, value: any): boolean;
            /**
             * deletes item and any references to that item from the store.
             *
             * @param item item to delete
             */
            deleteItem(item: any): void;
            /**
             * See dojo/data/api/Read.fetch
             *
             * @param args The queryOptions.cache parameterIf true, indicates that the query result should be cached for future use. This is only availableif dojox.data.ClientFilter has been loaded before the ServiceStoreThe syncMode parameterIndicates that the call should be fetch synchronously if possible (this is not always possible)The clientFetch parameterThis is a fetch keyword argument for explicitly doing client side filtering, querying, and paging
             */
            fetch(args: any): String;
            /**
             *
             * @param args
             */
            fetchItemByIdentity(args: any): any;
            /**
             * Gets the available attributes of an item's 'property' and returns
             * it as an array.
             *
             * @param item
             */
            getAttributes(item: Object): any[];
            /**
             * Gets the constructor for objects from this store
             *
             */
            getConstructor(): any;
            /**
             * return the store feature set
             *
             */
            getFeatures(): any;
            /**
             *
             * @param item
             */
            getIdentity(item: any): any;
            /**
             * returns the attributes which are used to make up the
             * identity of an item.    Basically returns this.idAttribute
             *
             * @param item
             */
            getIdentityAttributes(item: any): any[];
            /**
             * returns the label for an item. Just gets the "label" attribute.
             *
             * @param item
             */
            getLabel(item: any): any;
            /**
             * returns an array of attributes that are used to create the label of an item
             *
             * @param item
             */
            getLabelAttributes(item: any): any[];
            /**
             * Returns the parent item (or query) for the given item
             *
             * @param item The item to find the parent of
             */
            getParent(item: any): any;
            /**
             * Returns a reference to the JSON Schema
             *
             */
            getSchema(): any;
            /**
             * Gets the value of an item's 'property'
             *
             * @param item The item to get the value from
             * @param property property to look up value for
             * @param defaultValue               Optionalthe default value
             */
            getValue(item: Object, property: String, defaultValue: any): any;
            /**
             * Gets the value of an item's 'property' and returns
             * it. If this value is an array it is just returned,
             * if not, the value is added to an array and that is returned.
             *
             * @param item
             * @param property property to look up value for
             */
            getValues(item: Object, property: String): any[];
            /**
             * Checks to see if item has attribute
             *
             * @param item
             * @param attribute
             */
            hasAttribute(item: Object, attribute: String): boolean;
            /**
             * returns true if the item is marked as dirty.
             *
             * @param item
             */
            isDirty(item: any): any;
            /**
             * Checks to see if a passed 'item'
             * really belongs to this JsonRestStore.
             *
             * @param item The value to test for being an item
             * @param anyStore If true, this will return true if the value is an item for any JsonRestStore,not just this instance
             */
            isItem(item: Object, anyStore: boolean): any;
            /**
             * Checks to see if the item is loaded.
             *
             * @param item
             */
            isItemLoaded(item: Object): any;
            /**
             * Loads an item and calls the callback handler. Note, that this will call the callback
             * handler even if the item is loaded. Consequently, you can use loadItem to ensure
             * that an item is loaded is situations when the item may or may not be loaded yet.
             * If you access a value directly through property access, you can use this to load
             * a lazy value as well (doesn't need to be an item).
             *
             * @param args
             */
            loadItem(args: any): any;
            /**
             * adds a new item to the store at the specified point.
             * Takes two parameters, data, and options.
             *
             * @param data The data to be added in as an item.
             * @param parentInfo
             */
            newItem(data: Object, parentInfo: any): any;
            /**
             * returns any modified data to its original state prior to a save();
             *
             * @param kwArgs global:  This will cause the revert to undo all the changes for all  JsonRestStores in a single operation.
             */
            revert(kwArgs: any): void;
            /**
             * Saves the dirty data using REST Ajax methods. See dojo/data/api/Write for API.
             *
             * @param kwArgs global:  This will cause the save to commit the dirty data for all  JsonRestStores as a single transaction.revertOnError:  This will cause the changes to be reverted if there is an  error on the save. By default a revert is executed unless  a value of false is provide for this parameter.incrementalUpdates:  For items that have been updated, if this is enabled, the server will be sent a POST request  with a JSON object containing the changed properties. By default this is  not enabled, and a PUT is used to deliver an update, and will include a full  serialization of all the properties of the item/object.  If this is true, the POST request body will consist of a JSON object with  only the changed properties. The incrementalUpdates parameter may also  be a function, in which case it will be called with the updated and previous objects  and an object update representation can be returned.alwaysPostNewItems:  If this is true, new items will always be sent with a POST request. By default  this is not enabled, and the JsonRestStore will send a POST request if  the item does not include its identifier (expecting server assigned location/  identifier), and will send a PUT request if the item does include its identifier  (the PUT will be sent to the URI corresponding to the provided identifier).
             */
            save(kwArgs: any): any;
            /**
             * sets 'attribute' on 'item' to 'value'
             *
             * @param item
             * @param attribute
             * @param value
             */
            setValue(item: any, attribute: any, value: any): void;
            /**
             * sets 'attribute' on 'item' to 'value' value
             * must be an array.
             *
             * @param item
             * @param attribute
             * @param values
             */
            setValues(item: any, attribute: any, values: any): void;
            /**
             * unsets 'attribute' on 'item'
             *
             * @param item
             * @param attribute
             */
            unsetAttribute(item: any, attribute: any): void;
            /**
             *
             */
            onDelete(): void;
            /**
             *
             */
            onNew(): void;
            /**
             *
             */
            onSet(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/ServiceStore.html
         *
         * note that dojox.rpc.Service is not required, you can create your own services
         * A ServiceStore is a readonly data store that provides a data.data interface to an RPC service.
         *
         * var myServices = new dojox.rpc.Service(dojo.moduleUrl("dojox.rpc.tests.resources", "test.smd"));
         * var serviceStore = new dojox.data.ServiceStore({service:myServices.ServiceStore});
         * The ServiceStore also supports lazy loading. References can be made to objects that have not been loaded.
         * For example if a service returned:
         *
         * {"name":"Example","lazyLoadedObject":{"$ref":"obj2"}}
         * And this object has accessed using the dojo.data API:
         *
         * var obj = serviceStore.getValue(myObject,"lazyLoadedObject");
         * The object would automatically be requested from the server (with an object id of "obj2").
         *
         * @param options Keyword argumentsThe schema parameterThis is a schema object for this store. This should be JSON Schema format.The service parameterThis is the service object that is used to retrieve lazy data and save resultsThe function should be directly callable with a single parameter of an object id to be loadedThe idAttribute parameterDefaults to 'id'. The name of the attribute that holds an objects id.This can be a preexisting id provided by the server.If an ID isn't already provided when an objectis fetched or added to the store, the autoIdentity systemwill generate an id for it and add it to the index.The estimateCountFactor parameterThis parameter is used by the ServiceStore to estimate the total count. Whenpaging is indicated in a fetch and the response includes the full number of itemsrequested by the fetch's count parameter, then the total count will be estimatedto be estimateCountFactor multiplied by the provided count. If this is 1, then it is assumed that the serverdoes not support paging, and the response is the full set of items, where thetotal count is equal to the number of items returned. If the server does supportpaging, an estimateCountFactor of 2 is a good value for estimating the total countIt is also possible to override _processResults if the server can provide an exacttotal count.The syncMode parameterSetting this to true will set the store to using synchronous calls by default.Sync calls return their data immediately from the calling function, socallbacks are unnecessary. This will only work with a synchronous capable service.
         */
        class ServiceStore {
            constructor(options?: any);
            /**
             * This parameter is used by the ServiceStore to estimate the total count. When
             * paging is indicated in a fetch and the response includes the full number of items
             * requested by the fetch's count parameter, then the total count will be estimated
             * to be estimateCountFactor multiplied by the provided count. If this is 1, then it is assumed that the server
             * does not support paging, and the response is the full set of items, where the
             * total count is equal to the numer of items returned. If the server does support
             * paging, an estimateCountFactor of 2 is a good value for estimating the total count
             * It is also possible to override _processResults if the server can provide an exact
             * total count.
             *
             */
            "estimateCountFactor": number;
            /**
             * Defaults to 'id'. The name of the attribute that holds an objects id.
             * This can be a preexisting id provided by the server.
             * If an ID isn't already provided when an object
             * is fetched or added to the store, the autoIdentity system
             * will generate an id for it and add it to the index.
             *
             */
            "idAttribute": string;
            /**
             *
             */
            "labelAttribute": string;
            /**
             *
             */
            "loadLazyValues": boolean;
            /**
             * This is a schema object for this store. This should be JSON Schema format.
             *
             */
            "schema": Object;
            /**
             * This is the service object that is used to retrieve lazy data and save results
             * The function should be directly callable with a single parameter of an object id to be loaded
             *
             */
            "service": Object;
            /**
             * Setting this to true will set the store to using synchronous calls by default.
             * Sync calls return their data immediately from the calling function, so
             * callbacks are unnecessary. This will only work with a synchronous capable service.
             *
             */
            "syncMode": boolean;
            /**
             *
             * @param request
             */
            close(request: any): any;
            /**
             * Checks to see if 'item' has 'value' at 'attribute'
             *
             * @param item
             * @param attribute
             * @param value
             */
            containsValue(item: Object, attribute: String, value: any): boolean;
            /**
             * See dojo/data/api/Read.fetch
             *
             * @param args The queryOptions.cache parameterIf true, indicates that the query result should be cached for future use. This is only availableif dojox.data.ClientFilter has been loaded before the ServiceStoreThe syncMode parameterIndicates that the call should be fetch synchronously if possible (this is not always possible)The clientFetch parameterThis is a fetch keyword argument for explicitly doing client side filtering, querying, and paging
             */
            fetch(args: any): String;
            /**
             * fetch an item by its identity, by looking in our index of what we have loaded
             *
             * @param args
             */
            fetchItemByIdentity(args: any): any;
            /**
             * Gets the available attributes of an item's 'property' and returns
             * it as an array.
             *
             * @param item
             */
            getAttributes(item: Object): any[];
            /**
             * return the store feature set
             *
             */
            getFeatures(): Object;
            /**
             *
             * @param item
             */
            getIdentity(item: any): any;
            /**
             * returns the attributes which are used to make up the
             * identity of an item.    Basically returns this.idAttribute
             *
             * @param item
             */
            getIdentityAttributes(item: any): any[];
            /**
             * returns the label for an item. Just gets the "label" attribute.
             *
             * @param item
             */
            getLabel(item: any): any;
            /**
             * returns an array of attributes that are used to create the label of an item
             *
             * @param item
             */
            getLabelAttributes(item: any): any[];
            /**
             * Returns a reference to the JSON Schema
             *
             */
            getSchema(): any;
            /**
             * Gets the value of an item's 'property'
             *
             * @param item The item to get the value from
             * @param property property to look up value for
             * @param defaultValue               Optionalthe default value
             */
            getValue(item: Object, property: String, defaultValue: any): any;
            /**
             * Gets the value of an item's 'property' and returns
             * it. If this value is an array it is just returned,
             * if not, the value is added to an array and that is returned.
             *
             * @param item
             * @param property property to look up value for
             */
            getValues(item: Object, property: String): any[];
            /**
             * Checks to see if item has attribute
             *
             * @param item
             * @param attribute
             */
            hasAttribute(item: Object, attribute: String): boolean;
            /**
             * Checks to see if the argument is an item
             *
             * @param item
             */
            isItem(item: Object): boolean;
            /**
             * Checks to see if the item is loaded.
             *
             * @param item
             */
            isItemLoaded(item: Object): any;
            /**
             * Loads an item and calls the callback handler. Note, that this will call the callback
             * handler even if the item is loaded. Consequently, you can use loadItem to ensure
             * that an item is loaded is situations when the item may or may not be loaded yet.
             * If you access a value directly through property access, you can use this to load
             * a lazy value as well (doesn't need to be an item).
             *
             * @param args
             */
            loadItem(args: any): any;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/SnapLogicStore.html
         *
         *
         * @param args An object that contains properties for initializing the new data store object. Thefollowing properties are understood:url:  A URL to the SnapLogic pipeline's output routed through PipeToHttp. Typically, this  will look like http://<server-host>:<port>/pipe/<pipeline-url>/<pipeline-output-view>.parameters:  An object whose properties define parameters to the pipeline. The values of these  properties will be sent to the pipeline as parameters when it run.
         */
        class SnapLogicStore {
            constructor(args: Object);
            /**
             *
             */
            "Parts": Object;
            /**
             *
             */
            "url": string;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request
             */
            close(request: any): void;
            /**
             * See dojo/data/api/Read.containsValue()
             *
             * @param item
             * @param attribute
             * @param value
             */
            containsValue(item: any, attribute: any, value: any): boolean;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request See dojo/data/api/Read.close() for generic interface.In addition to the standard Read API fetch support, this store supports an optimization forfor retrieving the total count of records in the Pipeline without retrieving the data. Touse this optimization, simply provide an onBegin handler without an onItem or onComplete handler.
             */
            fetch(request: Object): Object;
            /**
             * See dojo/data/api/Read.getAttributes()
             *
             * @param item
             */
            getAttributes(item: any): any;
            /**
             * See dojo/data/api/Read.getFeatures()
             *
             */
            getFeatures(): Object;
            /**
             * See dojo/data/api/Read.getLabel()
             *
             * @param item
             */
            getLabel(item: any): any;
            /**
             * See dojo/data/api/Read.getLabelAttributes()
             *
             * @param item
             */
            getLabelAttributes(item: any): any;
            /**
             * See dojo/data/api/Read.getValue()
             *
             * @param item
             * @param attribute
             * @param defaultValue
             */
            getValue(item: any, attribute: any, defaultValue: any): any;
            /**
             * See dojo/data/api/Read.getValue()
             *
             * @param item
             * @param attribute
             */
            getValues(item: any, attribute: any): any[];
            /**
             * See dojo/data/api/Read.hasAttributes()
             *
             * @param item
             * @param attribute
             */
            hasAttribute(item: any, attribute: any): boolean;
            /**
             * See dojo/data/api/Read.isItem()
             *
             * @param item
             */
            isItem(item: any): boolean;
            /**
             * See dojo/data/api/Read.isItemLoaded()
             *
             * @param item
             */
            isItemLoaded(item: any): any;
            /**
             * See dojo/data/api/Read.loadItem()
             *
             * @param keywordArgs
             */
            loadItem(keywordArgs: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/WikipediaStore.html
         *
         * Initializer for the Wikipedia data store interface.
         * The WikipediaStore is a data store interface to Wikipedia, using the
         * Wikipedia SMD spec from dojox.rpc. It currently is useful only for
         * finding articles that contain some particular text or grabbing single
         * articles by full name; no wildcards or other filtering are supported.
         *
         * @param options
         */
        class WikipediaStore extends dojox.data.ServiceStore {
            constructor(options: any);
            /**
             * This parameter is used by the ServiceStore to estimate the total count. When
             * paging is indicated in a fetch and the response includes the full number of items
             * requested by the fetch's count parameter, then the total count will be estimated
             * to be estimateCountFactor multiplied by the provided count. If this is 1, then it is assumed that the server
             * does not support paging, and the response is the full set of items, where the
             * total count is equal to the numer of items returned. If the server does support
             * paging, an estimateCountFactor of 2 is a good value for estimating the total count
             * It is also possible to override _processResults if the server can provide an exact
             * total count.
             *
             */
            "estimateCountFactor": number;
            /**
             * Defaults to 'id'. The name of the attribute that holds an objects id.
             * This can be a preexisting id provided by the server.
             * If an ID isn't already provided when an object
             * is fetched or added to the store, the autoIdentity system
             * will generate an id for it and add it to the index.
             *
             */
            "idAttribute": string;
            /**
             *
             */
            "labelAttribute": string;
            /**
             *
             */
            "loadLazyValues": boolean;
            /**
             * This is a schema object for this store. This should be JSON Schema format.
             *
             */
            "schema": Object;
            /**
             * This is the service object that is used to retrieve lazy data and save results
             * The function should be directly callable with a single parameter of an object id to be loaded
             *
             */
            "service": Object;
            /**
             * Setting this to true will set the store to using synchronous calls by default.
             * Sync calls return their data immediately from the calling function, so
             * callbacks are unnecessary. This will only work with a synchronous capable service.
             *
             */
            "syncMode": boolean;
            /**
             *
             * @param request
             */
            close(request: any): any;
            /**
             * Checks to see if 'item' has 'value' at 'attribute'
             *
             * @param item
             * @param attribute
             * @param value
             */
            containsValue(item: Object, attribute: String, value: any): boolean;
            /**
             * Fetch a page or some partially-loaded search results from
             * Wikipedia. Note that there isn't a way to sort data coming
             * in from the API, so we just ignore the sort parameter.
             *
             * @param request
             */
            fetch(request: Object): any;
            /**
             * fetch an item by its identity, by looking in our index of what we have loaded
             *
             * @param args
             */
            fetchItemByIdentity(args: any): any;
            /**
             * Gets the available attributes of an item's 'property' and returns
             * it as an array.
             *
             * @param item
             */
            getAttributes(item: Object): any[];
            /**
             * return the store feature set
             *
             */
            getFeatures(): Object;
            /**
             *
             * @param item
             */
            getIdentity(item: any): any;
            /**
             * returns the attributes which are used to make up the
             * identity of an item.    Basically returns this.idAttribute
             *
             * @param item
             */
            getIdentityAttributes(item: any): any[];
            /**
             * returns the label for an item. Just gets the "label" attribute.
             *
             * @param item
             */
            getLabel(item: any): any;
            /**
             * returns an array of attributes that are used to create the label of an item
             *
             * @param item
             */
            getLabelAttributes(item: any): any[];
            /**
             * Returns a reference to the JSON Schema
             *
             */
            getSchema(): any;
            /**
             * Gets the value of an item's 'property'
             *
             * @param item The item to get the value from
             * @param property property to look up value for
             * @param defaultValue               Optionalthe default value
             */
            getValue(item: Object, property: String, defaultValue: any): any;
            /**
             * Gets the value of an item's 'property' and returns
             * it. If this value is an array it is just returned,
             * if not, the value is added to an array and that is returned.
             *
             * @param item
             * @param property property to look up value for
             */
            getValues(item: Object, property: String): any[];
            /**
             * Checks to see if item has attribute
             *
             * @param item
             * @param attribute
             */
            hasAttribute(item: Object, attribute: String): boolean;
            /**
             * Checks to see if the argument is an item
             *
             * @param item
             */
            isItem(item: Object): boolean;
            /**
             * Checks to see if the item is loaded.
             *
             * @param item
             */
            isItemLoaded(item: Object): any;
            /**
             * Loads an item and calls the callback handler. Note, that this will call the callback
             * handler even if the item is loaded. Consequently, you can use loadItem to ensure
             * that an item is loaded is situations when the item may or may not be loaded yet.
             * If you access a value directly through property access, you can use this to load
             * a lazy value as well (doesn't need to be an item).
             *
             * @param args
             */
            loadItem(args: any): any;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/XmlItem.html
         *
         *
         * @param element An XML element
         * @param store The containing store, if any.
         * @param query The query to use to look up a specific element.Usually an XPath or dojo.query statement.
         */
        class XmlItem {
            constructor(element: any, store: any, query: any);
            /**
             * Return a value of the first text child of the element
             *
             */
            toString(): any;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/XmlStore.html
         *
         * A data store for XML based services or documents
         * A data store for XML based services or documents
         *
         * @param args An anonymous object to initialize properties.  It expects the following values:url:      The url to a service or an XML document that represents the storerootItem: A tag name for root itemskeyAttribute: An attribute name for a key or an identity (unique identifier)          Required for serverside fetchByIdentity, etc.  Not required for          client side fetchItemBIdentity, as it will use an XPath-like          structure if keyAttribute was not specified.  Recommended to always          set this, though, for consistent identity behavior.attributeMap: An anonymous object contains properties for attribute mapping,          {"tag_name.item_attribute_name": "@xml_attribute_name", ...}sendQuery:    A boolean indicate to add a query string to the service URL.          Default is false.urlPreventCache: Parameter to indicate whether or not URL calls should apply           the preventCache option to the xhr request.
         */
        class XmlStore {
            constructor(args: Object);
            /**
             *
             */
            "attributeMap": Object;
            /**
             *
             */
            "keyAttribute": string;
            /**
             *
             */
            "label": string;
            /**
             *
             */
            "rootItem": string;
            /**
             *
             */
            "sendQuery": boolean;
            /**
             *
             */
            "url": string;
            /**
             *
             */
            "urlPreventCache": boolean;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request               Optional
             */
            close(request: dojo.data.api.Request ): void;
            /**
             * See dojo/data/api/Read.close()
             *
             * @param request               Optional
             */
            close(request: Object): void;
            /**
             * Check whether the attribute values contain the value
             *
             * @param item An object to check
             * @param attribute A tag name of a child element, An XML attribute name or one ofspecial names
             * @param value
             */
            containsValue(item: dojo.data.api.Item, attribute: Attr, value: any): any;
            /**
             * Check whether the attribute values contain the value
             *
             * @param item An object to check
             * @param attribute A tag name of a child element, An XML attribute name or one ofspecial names
             * @param value
             */
            containsValue(item: dojo.data.api.Item, attribute: String, value: any): any;
            /**
             * Delete an dojox.data.XmlItem (wrapper to a XML element).
             *
             * @param item An XML element to delete
             */
            deleteItem(item: dojo.data.api.Item): any;
            /**
             * The error handler when there is an error fetching items.  This function should not be called
             * directly and is used by simpleFetch.fetch().
             *
             * @param errorData
             * @param requestObject
             */
            errorHandler(errorData: Object, requestObject: Object): void;
            /**
             * The simpleFetch mixin is designed to serve as a set of function(s) that can
             * be mixed into other datastore implementations to accelerate their development.
             * The simpleFetch mixin should work well for any datastore that can respond to a _fetchItems()
             * call by returning an array of all the found items that matched the query.  The simpleFetch mixin
             * is not designed to work for datastores that respond to a fetch() call by incrementally
             * loading items, or sequentially loading partial batches of the result
             * set.  For datastores that mixin simpleFetch, simpleFetch
             * implements a fetch method that automatically handles eight of the fetch()
             * arguments -- onBegin, onItem, onComplete, onError, start, count, sort and scope
             * The class mixing in simpleFetch should not implement fetch(),
             * but should instead implement a _fetchItems() method.  The _fetchItems()
             * method takes three arguments, the keywordArgs object that was passed
             * to fetch(), a callback function to be called when the result array is
             * available, and an error callback to be called if something goes wrong.
             * The _fetchItems() method should ignore any keywordArgs parameters for
             * start, count, onBegin, onItem, onComplete, onError, sort, and scope.
             * The _fetchItems() method needs to correctly handle any other keywordArgs
             * parameters, including the query parameter and any optional parameters
             * (such as includeChildren).  The _fetchItems() method should create an array of
             * result items and pass it to the fetchHandler along with the original request object --
             * or, the _fetchItems() method may, if it wants to, create an new request object
             * with other specifics about the request that are specific to the datastore and pass
             * that as the request object to the handler.
             *
             * For more information on this specific function, see dojo/data/api/Read.fetch()
             *
             * @param request               OptionalThe keywordArgs parameter may either be an instance ofconforming to dojo/data/api/Request or may be a simple anonymous objectthat may contain any of the following:{    query: query-object or query-string,    queryOptions: object,    onBegin: Function,    onItem: Function,    onComplete: Function,    onError: Function,    scope: object,    start: int    count: int    sort: array}All implementations should accept keywordArgs objects with any ofthe 9 standard properties: query, onBegin, onItem, onComplete, onErrorscope, sort, start, and count.  Some implementations may accept additionalproperties in the keywordArgs object as valid parameters, such as{includeOutliers:true}.The query parameterThe query may be optional in some data store implementations.The dojo/data/api/Read API does not specify the syntax or semanticsof the query itself -- each different data store implementationmay have its own notion of what a query should look like.However, as of dojo 0.9, 1.0, and 1.1, all the provided datastores in dojo.dataand dojox.data support an object structure query, where the object is a set ofname/value parameters such as { attrFoo: valueBar, attrFoo1: valueBar1}.  Most of thedijit widgets, such as ComboBox assume this to be the case when working with a datastorewhen they dynamically update the query.  Therefore, for maximum compatibility with dijitwidgets the recommended query parameter is a key/value object.  That does not mean that thethe datastore may not take alternative query forms, such as a simple string, a Date, a number,or a mix of such.  Ultimately, The dojo/data/api/Read API is agnostic about what the queryformat.Further note:  In general for query objects that accept strings as attributevalue matches, the store should also support basic filtering capability, such as (match any character) and ? (match single character).  An example query that is a query objectwould be like: { attrFoo: "value"}.  Which generally means match all items where they havean attribute named attrFoo, with a value that starts with 'value'.The queryOptions parameterThe queryOptions parameter is an optional parameter used to specify options that may modifythe query in some fashion, such as doing a case insensitive search, or doing a deep searchwhere all items in a hierarchical representation of data are scanned instead of just the rootitems.  It currently defines two options that all datastores should attempt to honor if possible:{    ignoreCase: boolean, // Whether or not the query should match case sensitively or not.  Default behaviour is false.    deep: boolean   // Whether or not a fetch should do a deep search of items and all child                    // items instead of just root-level items in a datastore.  Default is false.}The onBegin parameter.function(size, request);If an onBegin callback function is provided, the callback functionwill be called just once, before the first onItem callback is called.The onBegin callback function will be passed two arguments, thethe total number of items identified and the Request object.  If the total number isunknown, then size will be -1.  Note that size is not necessarily the size of thecollection of items returned from the query, as the request may have specified to return only asubset of the total set of items through the use of the start and count parameters.The onItem parameter.function(item, request);If an onItem callback function is provided, the callback functionwill be called as each item in the result is received. The callbackfunction will be passed two arguments: the item itself, and theRequest object.The onComplete parameter.function(items, request);If an onComplete callback function is provided, the callback functionwill be called just once, after the last onItem callback is called.Note that if the onItem callback is not present, then onComplete will be passedan array containing all items which matched the query and the request object.If the onItem callback is present, then onComplete is called as:onComplete(null, request).The onError parameter.function(errorData, request);If an onError callback function is provided, the callback functionwill be called if there is any sort of error while attempting toexecute the query.The onError callback function will be passed two arguments:an Error object and the Request object.The scope parameter.If a scope object is provided, all of the callback functions (onItem,onComplete, onError, etc) will be invoked in the context of the scopeobject.  In the body of the callback function, the value of the "this"keyword will be the scope object.   If no scope object is provided,the callback functions will be called in the context of dojo.global().For example, onItem.call(scope, item, request) vs.onItem.call(dojo.global(), item, request)The start parameter.If a start parameter is specified, this is a indication to the datastore toonly start returning items once the start number of items have been located andskipped.  When this parameter is paired with 'count', the store should be ableto page across queries with millions of hits by only returning subsets of thehits for each queryThe count parameter.If a count parameter is specified, this is a indication to the datastore toonly return up to that many items.  This allows a fetch call that may havemillions of item matches to be paired down to something reasonable.The sort parameter.If a sort parameter is specified, this is a indication to the datastore tosort the items in some manner before returning the items.  The array is an array ofjavascript objects that must conform to the following format to be applied to thefetching of items:{    attribute: attribute || attribute-name-string,    descending: true|false;   // Optional.  Default is false.}Note that when comparing attributes, if an item contains no value for the attribute(undefined), then it the default ascending sort logic should push it to the bottomof the list.  In the descending order case, it such items should appear at the top of the list.
             */
            fetch(request: Object): void;
            /**
             * The handler when items are sucessfully fetched.  This function should not be called directly
             * and is used by simpleFetch.fetch().
             *
             * @param items
             * @param requestObject
             */
            fetchHandler(items: any[], requestObject: Object): void;
            /**
             * See dojo/data/api/Identity.fetchItemByIdentity(keywordArgs)
             *
             * @param keywordArgs
             */
            fetchItemByIdentity(keywordArgs: Object): void;
            /**
             * Return an array of attribute names
             * 'item' must be an instance of a dojox.data.XmlItem from the store instance.
             * tag names of child elements and XML attribute names of attributes
             * specified to the element are returned along with special attribute
             * names applicable to the element including "tagName", "childNodes"
             * if the element has child elements, "text()" if the element has
             * child text nodes, and attribute names in '_attributeMap' that match
             * the tag name of the element.
             *
             * @param item An XML element
             */
            getAttributes(item: dojo.data.api.Item): any;
            /**
             * Return supported data APIs
             *
             */
            getFeatures(): any;
            /**
             * Returns a unique identifier for an item.
             *
             * @param item The XML Item from the store from which to obtain its identifier.
             */
            getIdentity(item: dojo.data.api.Item): any;
            /**
             * Returns an array of attribute names that are used to generate the identity.
             * For XmlStore, if sendQuery is false and no keyAttribute was set, then this function
             * returns null, as xpath is used for the identity, which is not a public attribute of
             * the item.  If sendQuery is true and keyAttribute is set, then this function
             * returns an array of one attribute name: keyAttribute.   This means the server side
             * implementation must apply a keyAttribute to a returned node that always allows
             * it to be looked up again.
             *
             * @param item The item from the store from which to obtain the array of public attributes thatcompose the identifier, if any.
             */
            getIdentityAttributes(item: dojo.data.api.Item): any;
            /**
             * See dojo/data/api/Read.getLabel()
             *
             * @param item
             */
            getLabel(item: dojo.data.api.Item): any;
            /**
             * See dojo/data/api/Read.getLabelAttributes()
             *
             * @param item
             */
            getLabelAttributes(item: dojo.data.api.Item): any;
            /**
             * Return an attribute value
             * 'item' must be an instance of a dojox.data.XmlItem from the store instance.
             * If 'attribute' specifies "tagName", the tag name of the element is
             * returned.
             * If 'attribute' specifies "childNodes", the first element child is
             * returned.
             * If 'attribute' specifies "text()", the value of the first text
             * child is returned.
             * For generic attributes, if '_attributeMap' is specified,
             * an actual attribute name is looked up with the tag name of
             * the element and 'attribute' (concatenated with '.').
             * Then, if 'attribute' starts with "@", the value of the XML
             * attribute is returned.
             * Otherwise, the first child element of the tag name specified with
             * 'attribute' is returned.
             *
             * @param item An XML element that holds the attribute
             * @param attribute A tag name of a child element, An XML attribute name or one ofspecial names
             * @param defaultValue               OptionalA default value
             */
            getValue(item: dojo.data.api.Item, attribute: Attr, defaultValue: any): any;
            /**
             * Return an attribute value
             * 'item' must be an instance of a dojox.data.XmlItem from the store instance.
             * If 'attribute' specifies "tagName", the tag name of the element is
             * returned.
             * If 'attribute' specifies "childNodes", the first element child is
             * returned.
             * If 'attribute' specifies "text()", the value of the first text
             * child is returned.
             * For generic attributes, if '_attributeMap' is specified,
             * an actual attribute name is looked up with the tag name of
             * the element and 'attribute' (concatenated with '.').
             * Then, if 'attribute' starts with "@", the value of the XML
             * attribute is returned.
             * Otherwise, the first child element of the tag name specified with
             * 'attribute' is returned.
             *
             * @param item An XML element that holds the attribute
             * @param attribute A tag name of a child element, An XML attribute name or one ofspecial names
             * @param defaultValue               OptionalA default value
             */
            getValue(item: dojo.data.api.Item, attribute: String, defaultValue: any): any;
            /**
             * Return an array of attribute values
             * 'item' must be an instance of a dojox.data.XmlItem from the store instance.
             * If 'attribute' specifies "tagName", the tag name of the element is
             * returned.
             * If 'attribute' specifies "childNodes", child elements are returned.
             * If 'attribute' specifies "text()", the values of child text nodes
             * are returned.
             * For generic attributes, if 'attributeMap' is specified,
             * an actual attribute name is looked up with the tag name of
             * the element and 'attribute' (concatenated with '.').
             * Then, if 'attribute' starts with "@", the value of the XML
             * attribute is returned.
             * Otherwise, child elements of the tag name specified with
             * 'attribute' are returned.
             *
             * @param item An XML element that holds the attribute
             * @param attribute A tag name of child elements, An XML attribute name or one ofspecial names
             */
            getValues(item: dojo.data.api.Item, attribute: Attr): any;
            /**
             * Return an array of attribute values
             * 'item' must be an instance of a dojox.data.XmlItem from the store instance.
             * If 'attribute' specifies "tagName", the tag name of the element is
             * returned.
             * If 'attribute' specifies "childNodes", child elements are returned.
             * If 'attribute' specifies "text()", the values of child text nodes
             * are returned.
             * For generic attributes, if 'attributeMap' is specified,
             * an actual attribute name is looked up with the tag name of
             * the element and 'attribute' (concatenated with '.').
             * Then, if 'attribute' starts with "@", the value of the XML
             * attribute is returned.
             * Otherwise, child elements of the tag name specified with
             * 'attribute' are returned.
             *
             * @param item An XML element that holds the attribute
             * @param attribute A tag name of child elements, An XML attribute name or one ofspecial names
             */
            getValues(item: dojo.data.api.Item, attribute: String): any;
            /**
             * Check whether an element has the attribute
             *
             * @param item 'item' must be an instance of a dojox.data.XmlItem from the store instance.
             * @param attribute A tag name of a child element, An XML attribute name or one ofspecial names
             */
            hasAttribute(item: dojo.data.api.Item, attribute: Attr): any;
            /**
             * Check whether an element has the attribute
             *
             * @param item 'item' must be an instance of a dojox.data.XmlItem from the store instance.
             * @param attribute A tag name of a child element, An XML attribute name or one ofspecial names
             */
            hasAttribute(item: dojo.data.api.Item, attribute: String): any;
            /**
             * Check whether an item is new, modified or deleted
             * If 'item' is specified, true is returned if the item is new,
             * modified or deleted.
             * Otherwise, true is returned if there are any new, modified
             * or deleted items.
             *
             * @param item               OptionalAn item (XML element) to check
             */
            isDirty(item: any): any;
            /**
             * Check whether the object is an item (XML element)
             *
             * @param something
             */
            isItem(something: any): any;
            /**
             * Check whether the object is an item (XML element) and loaded
             *
             * @param something
             */
            isItemLoaded(something: any): any;
            /**
             * Load an item (XML element)
             *
             * @param keywordArgs object containing the args for loadItem.  See dojo/data/api/Read.loadItem()
             */
            loadItem(keywordArgs: Object): void;
            /**
             * Return a new dojox.data.XmlItem
             * At least, 'keywordArgs' must contain "tagName" to be used for
             * the new element.
             * Other attributes in 'keywordArgs' are set to the new element,
             * including "text()", but excluding "childNodes".
             *
             * @param keywordArgs               OptionalAn object containing initial attributes
             * @param parentInfo
             */
            newItem(keywordArgs: Object, parentInfo: any): any;
            /**
             * Invalidate changes (new and/or modified elements)
             *
             */
            revert(): any;
            /**
             * Save new and/or modified items (XML elements)
             * 'url' is used to save XML documents for new, modified and/or
             * deleted XML elements.
             *
             * @param keywordArgs An object for callbacks
             */
            save(keywordArgs: Object): void;
            /**
             * Set an attribute value
             * 'item' must be an instance of a dojox.data.XmlItem from the store instance.
             * If 'attribute' specifies "tagName", nothing is set and false is
             * returned.
             * If 'attribute' specifies "childNodes", the value (XML element) is
             * added to the element.
             * If 'attribute' specifies "text()", a text node is created with
             * the value and set it to the element as a child.
             * For generic attributes, if '_attributeMap' is specified,
             * an actual attribute name is looked up with the tag name of
             * the element and 'attribute' (concatenated with '.').
             * Then, if 'attribute' starts with "@", the value is set to the XML
             * attribute.
             * Otherwise, a text node is created with the value and set it to
             * the first child element of the tag name specified with 'attribute'.
             * If the child element does not exist, it is created.
             *
             * @param item An XML element that holds the attribute
             * @param attribute A tag name of a child element, An XML attribute name or one ofspecial names
             * @param value A attribute value to set
             */
            setValue(item: dojo.data.api.Item, attribute: Attr, value: any): any;
            /**
             * Set an attribute value
             * 'item' must be an instance of a dojox.data.XmlItem from the store instance.
             * If 'attribute' specifies "tagName", nothing is set and false is
             * returned.
             * If 'attribute' specifies "childNodes", the value (XML element) is
             * added to the element.
             * If 'attribute' specifies "text()", a text node is created with
             * the value and set it to the element as a child.
             * For generic attributes, if '_attributeMap' is specified,
             * an actual attribute name is looked up with the tag name of
             * the element and 'attribute' (concatenated with '.').
             * Then, if 'attribute' starts with "@", the value is set to the XML
             * attribute.
             * Otherwise, a text node is created with the value and set it to
             * the first child element of the tag name specified with 'attribute'.
             * If the child element does not exist, it is created.
             *
             * @param item An XML element that holds the attribute
             * @param attribute A tag name of a child element, An XML attribute name or one ofspecial names
             * @param value A attribute value to set
             */
            setValue(item: dojo.data.api.Item, attribute: String, value: any): any;
            /**
             * Set attribute values
             * 'item' must be an instance of a dojox.data.XmlItem from the store instance.
             * If 'attribute' specifies "tagName", nothing is set and false is
             * returned.
             * If 'attribute' specifies "childNodes", the value (array of XML
             * elements) is set to the element's childNodes.
             * If 'attribute' specifies "text()", a text node is created with
             * the values and set it to the element as a child.
             * For generic attributes, if '_attributeMap' is specified,
             * an actual attribute name is looked up with the tag name of
             * the element and 'attribute' (concatenated with '.').
             * Then, if 'attribute' starts with "@", the first value is set to
             * the XML attribute.
             * Otherwise, child elements of the tag name specified with
             * 'attribute' are replaced with new child elements and their
             * child text nodes of values.
             *
             * @param item An XML element that holds the attribute
             * @param attribute A tag name of child elements, an XML attribute name or one ofspecial names
             * @param values
             */
            setValues(item: dojo.data.api.Item, attribute: Attr, values: any[]): any;
            /**
             * Set attribute values
             * 'item' must be an instance of a dojox.data.XmlItem from the store instance.
             * If 'attribute' specifies "tagName", nothing is set and false is
             * returned.
             * If 'attribute' specifies "childNodes", the value (array of XML
             * elements) is set to the element's childNodes.
             * If 'attribute' specifies "text()", a text node is created with
             * the values and set it to the element as a child.
             * For generic attributes, if '_attributeMap' is specified,
             * an actual attribute name is looked up with the tag name of
             * the element and 'attribute' (concatenated with '.').
             * Then, if 'attribute' starts with "@", the first value is set to
             * the XML attribute.
             * Otherwise, child elements of the tag name specified with
             * 'attribute' are replaced with new child elements and their
             * child text nodes of values.
             *
             * @param item An XML element that holds the attribute
             * @param attribute A tag name of child elements, an XML attribute name or one ofspecial names
             * @param values
             */
            setValues(item: dojo.data.api.Item, attribute: String, values: any[]): any;
            /**
             * Remove an attribute
             * 'item' must be an instance of a dojox.data.XmlItem from the store instance.
             * 'attribute' can be an XML attribute name of the element or one of
             * special names described below.
             * If 'attribute' specifies "tagName", nothing is removed and false is
             * returned.
             * If 'attribute' specifies "childNodes" or "text()", all child nodes
             * are removed.
             * For generic attributes, if '_attributeMap' is specified,
             * an actual attribute name is looked up with the tag name of
             * the element and 'attribute' (concatenated with '.').
             * Then, if 'attribute' starts with "@", the XML attribute is removed.
             * Otherwise, child elements of the tag name specified with
             * 'attribute' are removed.
             *
             * @param item An XML element that holds the attribute
             * @param attribute A tag name of child elements, an XML attribute name or one ofspecial names
             */
            unsetAttribute(item: dojo.data.api.Item, attribute: Attr): any;
            /**
             * Remove an attribute
             * 'item' must be an instance of a dojox.data.XmlItem from the store instance.
             * 'attribute' can be an XML attribute name of the element or one of
             * special names described below.
             * If 'attribute' specifies "tagName", nothing is removed and false is
             * returned.
             * If 'attribute' specifies "childNodes" or "text()", all child nodes
             * are removed.
             * For generic attributes, if '_attributeMap' is specified,
             * an actual attribute name is looked up with the tag name of
             * the element and 'attribute' (concatenated with '.').
             * Then, if 'attribute' starts with "@", the XML attribute is removed.
             * Otherwise, child elements of the tag name specified with
             * 'attribute' are removed.
             *
             * @param item An XML element that holds the attribute
             * @param attribute A tag name of child elements, an XML attribute name or one ofspecial names
             */
            unsetAttribute(item: dojo.data.api.Item, attribute: String): any;
        }
        namespace util {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/util/JsonQuery.html
             *
             *
             */
            class JsonQuery {
                constructor();
                /**
                 *
                 */
                "jsonQueryPagination": boolean;
                /**
                 *
                 */
                "useFullIdInQueries": boolean;
                /**
                 *
                 * @param request
                 * @param baseResults
                 */
                clientSideFetch(request: Object, baseResults: any[]): any;
                /**
                 *
                 * @param args
                 */
                fetch(args: any): any;
                /**
                 *
                 */
                isUpdateable(): boolean;
                /**
                 *
                 * @param item
                 * @param request
                 */
                matchesQuery(item: any, request: any): any;
                /**
                 *
                 * @param argsSuper
                 * @param argsSub
                 */
                querySuperSet(argsSuper: any, argsSub: any): any;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/css.html
         *
         *
         */
        interface css {
            /**
             *
             */
            rules: Object;
            /**
             *
             * @param initialStylesheets
             */
            determineContext(initialStylesheets: any): any[];
            /**
             *
             * @param sheet
             */
            findStyleSheet(sheet: any): any[];
            /**
             *
             * @param sheets
             */
            findStyleSheets(sheets: any): any[];
        }
        namespace css {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/css.rules.html
             *
             *
             */
            interface rules {
                /**
                 *
                 * @param fn
                 * @param ctx
                 * @param context
                 */
                forEach(fn: any, ctx: any, context: any): void;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/dom.html
         *
         *
         */
        interface dom {
            /**
             * cross-browser implementation of creating an XML document object.
             *
             * @param str               OptionalOptional text to create the document from.  If not provided, an empty XML document will be created.If str is empty string "", then a new empty document will be created.
             * @param mimetype               OptionalOptional mimetype of the text.  Typically, this is text/xml.  Will be defaulted to text/xml if not provided.
             */
            createDocument(str: String, mimetype: String): any;
            /**
             * Implementation of MS's innerXML function.
             *
             * @param node The node from which to generate the XML text representation.
             */
            innerXML(node: HTMLElement): void;
            /**
             * removes all children from node and returns the count of children removed.
             * The children nodes are not destroyed. Be sure to call dojo._destroyElement on them
             * after they are not used anymore.
             *
             * @param node The node to remove all the children from.
             */
            removeChildren(node: HTMLElement): void;
            /**
             * Removes all children of node and appends newChild. All the existing
             * children will be destroyed.
             * Removes all children of node and appends newChild. All the existing
             * children will be destroyed.
             *
             * @param node The node to modify the children on
             * @param newChildren The children to add to the node.  It can either be a single Node or anarray of Nodes.
             */
            replaceChildren(node: HTMLElement, newChildren: HTMLElement): void;
            /**
             * Removes all children of node and appends newChild. All the existing
             * children will be destroyed.
             * Removes all children of node and appends newChild. All the existing
             * children will be destroyed.
             *
             * @param node The node to modify the children on
             * @param newChildren The children to add to the node.  It can either be a single Node or anarray of Nodes.
             */
            replaceChildren(node: HTMLElement, newChildren: any[]): void;
            /**
             * Implementation of the DOM Level 3 attribute; scan node for text
             * Implementation of the DOM Level 3 attribute; scan node for text
             * This function can also update the text of a node by replacing all child
             * content of the node.
             *
             * @param node The node to get the text off of or set the text on.
             * @param text               OptionalOptional argument of the text to apply to the node.
             */
            textContent(node: HTMLElement, text: String): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/GoogleSearchStore.html
         *
         *
         */
        interface GoogleSearchStore {
            /**
             *
             */
            BlogSearch(): void;
            /**
             *
             */
            BookSearch(): void;
            /**
             *
             */
            ImageSearch(): void;
            /**
             *
             */
            LocalSearch(): void;
            /**
             *
             */
            NewsSearch(): void;
            /**
             *
             */
            Search(): void;
            /**
             *
             */
            VideoSearch(): void;
            /**
             *
             */
            WebSearch(): void;
        }
        namespace GoogleSearchStore {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/GoogleSearchStore.BlogSearch.html
             *
             * A data store for retrieving search results from Google.
             * The following attributes are supported on each item:
             *
             * title - The blog post title in HTML format.
             * titleNoFormatting - The  blog post title in plain text
             * content - A snippet of information about the blog post
             * blogUrl - The URL for the blog
             * postUrl - The URL for the a single blog post
             * visibleUrl - The URL with no protocol specified.
             * cacheUrl - The URL to the copy of the document cached by Google
             * author - The author of the blog post
             * publishedDate - The published date, in RFC-822 format
             * The query accepts one parameter: text - The string to search for
             *
             * @param args
             */
            class BlogSearch {
                constructor(args: Object);
                /**
                 * The default attribute which acts as a label for each item.
                 *
                 */
                "label": string;
                /**
                 * Sets whether or not to pass preventCache to dojo.io.script.
                 *
                 */
                "urlPreventCache": boolean;
                /**
                 * See dojo/data/api/Read.close()
                 *
                 * @param request
                 */
                close(request: any): void;
                /**
                 * See dojo/data/api/Read.containsValue()
                 *
                 * @param item
                 * @param attribute
                 * @param value
                 */
                containsValue(item: any, attribute: any, value: any): boolean;
                /**
                 * Fetch Google search items that match to a query
                 *
                 * @param request A request object
                 */
                fetch(request: any): void;
                /**
                 * See dojo/data/api/Read.getAttributes()
                 *
                 * @param item
                 */
                getAttributes(item: any): any;
                /**
                 * See dojo/data/api/Read.getFeatures()
                 *
                 */
                getFeatures(): Object;
                /**
                 * See dojo/data/api/Read.getLabel()
                 *
                 * @param item
                 */
                getLabel(item: any): any;
                /**
                 * See dojo/data/api/Read.getLabelAttributes()
                 *
                 * @param item
                 */
                getLabelAttributes(item: any): any[];
                /**
                 * See dojo/data/api/Read.getValue()
                 *
                 * @param item
                 * @param attribute
                 * @param defaultValue
                 */
                getValue(item: any, attribute: any, defaultValue: any): any;
                /**
                 * See dojo/data/api/Read.getValue()
                 *
                 * @param item
                 * @param attribute
                 */
                getValues(item: any, attribute: any): any;
                /**
                 * See dojo/data/api/Read.hasAttributes()
                 *
                 * @param item
                 * @param attribute
                 */
                hasAttribute(item: any, attribute: any): boolean;
                /**
                 * See dojo/data/api/Read.isItem()
                 *
                 * @param item
                 */
                isItem(item: any): boolean;
                /**
                 * See dojo/data/api/Read.isItemLoaded()
                 *
                 * @param item
                 */
                isItemLoaded(item: any): any;
                /**
                 * See dojo/data/api/Read.loadItem()
                 *
                 * @param keywordArgs
                 */
                loadItem(keywordArgs: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/GoogleSearchStore.BookSearch.html
             *
             * A data store for retrieving search results from Google.
             * The following attributes are supported on each item:
             *
             * title - The book title in HTML format.
             * titleNoFormatting - The book title in plain text
             * authors - An array of authors
             * url - The URL for the item
             * unescapedUrl - The URL for the item, with URL escaping. This is often more readable
             * bookId - An identifier for the book, usually an ISBN.
             * pageCount - The number of pages in the book.
             * publishedYear - The year of publication.
             * The query accepts one parameter: text - The string to search for
             *
             * @param args
             */
            class BookSearch {
                constructor(args: Object);
                /**
                 * The default attribute which acts as a label for each item.
                 *
                 */
                "label": string;
                /**
                 * Sets whether or not to pass preventCache to dojo.io.script.
                 *
                 */
                "urlPreventCache": boolean;
                /**
                 * See dojo/data/api/Read.close()
                 *
                 * @param request
                 */
                close(request: any): void;
                /**
                 * See dojo/data/api/Read.containsValue()
                 *
                 * @param item
                 * @param attribute
                 * @param value
                 */
                containsValue(item: any, attribute: any, value: any): boolean;
                /**
                 * Fetch Google search items that match to a query
                 *
                 * @param request A request object
                 */
                fetch(request: any): void;
                /**
                 * See dojo/data/api/Read.getAttributes()
                 *
                 * @param item
                 */
                getAttributes(item: any): any;
                /**
                 * See dojo/data/api/Read.getFeatures()
                 *
                 */
                getFeatures(): Object;
                /**
                 * See dojo/data/api/Read.getLabel()
                 *
                 * @param item
                 */
                getLabel(item: any): any;
                /**
                 * See dojo/data/api/Read.getLabelAttributes()
                 *
                 * @param item
                 */
                getLabelAttributes(item: any): any[];
                /**
                 * See dojo/data/api/Read.getValue()
                 *
                 * @param item
                 * @param attribute
                 * @param defaultValue
                 */
                getValue(item: any, attribute: any, defaultValue: any): any;
                /**
                 * See dojo/data/api/Read.getValue()
                 *
                 * @param item
                 * @param attribute
                 */
                getValues(item: any, attribute: any): any;
                /**
                 * See dojo/data/api/Read.hasAttributes()
                 *
                 * @param item
                 * @param attribute
                 */
                hasAttribute(item: any, attribute: any): boolean;
                /**
                 * See dojo/data/api/Read.isItem()
                 *
                 * @param item
                 */
                isItem(item: any): boolean;
                /**
                 * See dojo/data/api/Read.isItemLoaded()
                 *
                 * @param item
                 */
                isItemLoaded(item: any): any;
                /**
                 * See dojo/data/api/Read.loadItem()
                 *
                 * @param keywordArgs
                 */
                loadItem(keywordArgs: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/GoogleSearchStore.ImageSearch.html
             *
             * A data store for retrieving search results from Google.
             * The following attributes are supported on each item:
             *
             * title - The image title in HTML format.
             * titleNoFormatting - The image title in plain text
             * url - The URL for the image
             * unescapedUrl - The URL for the image, with URL escaping. This is often more readable
             * tbUrl - The URL for the image thumbnail
             * visibleUrl - A shortened version of the URL associated with the result, stripped of a protocol and path
             * originalContextUrl - The URL of the page containing the image.
             * width - The width of the image in pixels.
             * height - The height of the image in pixels.
             * tbWidth - The width of the image thumbnail in pixels.
             * tbHeight - The height of the image thumbnail in pixels.
             * content - A snippet of information about the image, in HTML format
             * contentNoFormatting - A snippet of information about the image, in plain text
             * The query accepts one parameter: text - The string to search for
             *
             * @param args
             */
            class ImageSearch {
                constructor(args: Object);
                /**
                 * The default attribute which acts as a label for each item.
                 *
                 */
                "label": string;
                /**
                 * Sets whether or not to pass preventCache to dojo.io.script.
                 *
                 */
                "urlPreventCache": boolean;
                /**
                 * See dojo/data/api/Read.close()
                 *
                 * @param request
                 */
                close(request: any): void;
                /**
                 * See dojo/data/api/Read.containsValue()
                 *
                 * @param item
                 * @param attribute
                 * @param value
                 */
                containsValue(item: any, attribute: any, value: any): boolean;
                /**
                 * Fetch Google search items that match to a query
                 *
                 * @param request A request object
                 */
                fetch(request: any): void;
                /**
                 * See dojo/data/api/Read.getAttributes()
                 *
                 * @param item
                 */
                getAttributes(item: any): any;
                /**
                 * See dojo/data/api/Read.getFeatures()
                 *
                 */
                getFeatures(): Object;
                /**
                 * See dojo/data/api/Read.getLabel()
                 *
                 * @param item
                 */
                getLabel(item: any): any;
                /**
                 * See dojo/data/api/Read.getLabelAttributes()
                 *
                 * @param item
                 */
                getLabelAttributes(item: any): any[];
                /**
                 * See dojo/data/api/Read.getValue()
                 *
                 * @param item
                 * @param attribute
                 * @param defaultValue
                 */
                getValue(item: any, attribute: any, defaultValue: any): any;
                /**
                 * See dojo/data/api/Read.getValue()
                 *
                 * @param item
                 * @param attribute
                 */
                getValues(item: any, attribute: any): any;
                /**
                 * See dojo/data/api/Read.hasAttributes()
                 *
                 * @param item
                 * @param attribute
                 */
                hasAttribute(item: any, attribute: any): boolean;
                /**
                 * See dojo/data/api/Read.isItem()
                 *
                 * @param item
                 */
                isItem(item: any): boolean;
                /**
                 * See dojo/data/api/Read.isItemLoaded()
                 *
                 * @param item
                 */
                isItemLoaded(item: any): any;
                /**
                 * See dojo/data/api/Read.loadItem()
                 *
                 * @param keywordArgs
                 */
                loadItem(keywordArgs: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/GoogleSearchStore.LocalSearch.html
             *
             * A data store for retrieving search results from Google.
             * The following attributes are supported on each item:
             *
             * title - The blog post title in HTML format.
             * titleNoFormatting - The  blog post title in plain text
             * content - A snippet of information about the blog post
             * url - The URL for the item
             * lat - The latitude.
             * lng - The longtitude.
             * streetAddress - The street address
             * city - The city
             * region - The region
             * country - The country
             * phoneNumbers - Phone numbers associated with this address. Can be one or more.
             * ddUrl - A URL that can be used to provide driving directions from the center of the search results to this search results
             * ddUrlToHere - A URL that can be used to provide driving directions from this search result to a user specified location
             * staticMapUrl - The published date, in RFC-822 format
             * viewport - Recommended viewport for the query results (same for all results in a query)
             * center - contains lat, lng properties
             * span - lat, lng properties for the viewport span
             * ne, sw - lat, lng properties for the viewport corners
             *
             * The query accepts the following parameters:
             *
             * text - The string to search for
             * centerLatLong - Comma-separated lat & long for the center of the search (e.g. "48.8565,2.3509")
             * searchSpan - Comma-separated lat & long degrees indicating the size of the desired search area (e.g. "0.065165,0.194149")
             *
             * @param args
             */
            class LocalSearch {
                constructor(args: Object);
                /**
                 * The default attribute which acts as a label for each item.
                 *
                 */
                "label": string;
                /**
                 * Sets whether or not to pass preventCache to dojo.io.script.
                 *
                 */
                "urlPreventCache": boolean;
                /**
                 * See dojo/data/api/Read.close()
                 *
                 * @param request
                 */
                close(request: any): void;
                /**
                 * See dojo/data/api/Read.containsValue()
                 *
                 * @param item
                 * @param attribute
                 * @param value
                 */
                containsValue(item: any, attribute: any, value: any): boolean;
                /**
                 * Fetch Google search items that match to a query
                 *
                 * @param request A request object
                 */
                fetch(request: any): void;
                /**
                 * See dojo/data/api/Read.getAttributes()
                 *
                 * @param item
                 */
                getAttributes(item: any): any;
                /**
                 * See dojo/data/api/Read.getFeatures()
                 *
                 */
                getFeatures(): Object;
                /**
                 * See dojo/data/api/Read.getLabel()
                 *
                 * @param item
                 */
                getLabel(item: any): any;
                /**
                 * See dojo/data/api/Read.getLabelAttributes()
                 *
                 * @param item
                 */
                getLabelAttributes(item: any): any[];
                /**
                 * See dojo/data/api/Read.getValue()
                 *
                 * @param item
                 * @param attribute
                 * @param defaultValue
                 */
                getValue(item: any, attribute: any, defaultValue: any): any;
                /**
                 * See dojo/data/api/Read.getValue()
                 *
                 * @param item
                 * @param attribute
                 */
                getValues(item: any, attribute: any): any;
                /**
                 * See dojo/data/api/Read.hasAttributes()
                 *
                 * @param item
                 * @param attribute
                 */
                hasAttribute(item: any, attribute: any): boolean;
                /**
                 * See dojo/data/api/Read.isItem()
                 *
                 * @param item
                 */
                isItem(item: any): boolean;
                /**
                 * See dojo/data/api/Read.isItemLoaded()
                 *
                 * @param item
                 */
                isItemLoaded(item: any): any;
                /**
                 * See dojo/data/api/Read.loadItem()
                 *
                 * @param keywordArgs
                 */
                loadItem(keywordArgs: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/GoogleSearchStore.NewsSearch.html
             *
             * A data store for retrieving search results from Google.
             * The following attributes are supported on each item:
             *
             * title - The news story title in HTML format.
             * titleNoFormatting - The news story title in plain text
             * content - A snippet of information about the news story
             * url - The URL for the item
             * unescapedUrl - The URL for the item, with URL escaping. This is often more readable
             * publisher - The name of the publisher
             * clusterUrl - A URL pointing to a page listing related storied.
             * location - The location of the news story.
             * publishedDate - The date of publication, in RFC-822 format.
             * relatedStories - An optional array of objects specifying related stories.
             *   Each object has the following subset of properties:
             *   "title", "titleNoFormatting", "url", "unescapedUrl", "publisher", "location", "publishedDate".
             * The query accepts one parameter: text - The string to search for
             *
             * @param args
             */
            class NewsSearch {
                constructor(args: Object);
                /**
                 * The default attribute which acts as a label for each item.
                 *
                 */
                "label": string;
                /**
                 * Sets whether or not to pass preventCache to dojo.io.script.
                 *
                 */
                "urlPreventCache": boolean;
                /**
                 * See dojo/data/api/Read.close()
                 *
                 * @param request
                 */
                close(request: any): void;
                /**
                 * See dojo/data/api/Read.containsValue()
                 *
                 * @param item
                 * @param attribute
                 * @param value
                 */
                containsValue(item: any, attribute: any, value: any): boolean;
                /**
                 * Fetch Google search items that match to a query
                 *
                 * @param request A request object
                 */
                fetch(request: any): void;
                /**
                 * See dojo/data/api/Read.getAttributes()
                 *
                 * @param item
                 */
                getAttributes(item: any): any;
                /**
                 * See dojo/data/api/Read.getFeatures()
                 *
                 */
                getFeatures(): Object;
                /**
                 * See dojo/data/api/Read.getLabel()
                 *
                 * @param item
                 */
                getLabel(item: any): any;
                /**
                 * See dojo/data/api/Read.getLabelAttributes()
                 *
                 * @param item
                 */
                getLabelAttributes(item: any): any[];
                /**
                 * See dojo/data/api/Read.getValue()
                 *
                 * @param item
                 * @param attribute
                 * @param defaultValue
                 */
                getValue(item: any, attribute: any, defaultValue: any): any;
                /**
                 * See dojo/data/api/Read.getValue()
                 *
                 * @param item
                 * @param attribute
                 */
                getValues(item: any, attribute: any): any;
                /**
                 * See dojo/data/api/Read.hasAttributes()
                 *
                 * @param item
                 * @param attribute
                 */
                hasAttribute(item: any, attribute: any): boolean;
                /**
                 * See dojo/data/api/Read.isItem()
                 *
                 * @param item
                 */
                isItem(item: any): boolean;
                /**
                 * See dojo/data/api/Read.isItemLoaded()
                 *
                 * @param item
                 */
                isItemLoaded(item: any): any;
                /**
                 * See dojo/data/api/Read.loadItem()
                 *
                 * @param keywordArgs
                 */
                loadItem(keywordArgs: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/GoogleSearchStore.VideoSearch.html
             *
             * A data store for retrieving search results from Google.
             * The following attributes are supported on each item:
             *
             * title - The blog post title in HTML format.
             * titleNoFormatting - The  blog post title in plain text
             * content - A snippet of information about the blog post
             * url - The URL for the item
             * published - The published date, in RFC-822 format.
             * publisher - The name of the publisher.
             * duration - The approximate duration, in seconds, of the video.
             * tbWidth - The width in pixels of the video.
             * tbHeight - The height in pixels of the video
             * tbUrl - The URL to a thumbnail representation of the video.
             * playUrl - If present, supplies the url of the flash version of the video that can be played inline on your page. To play this video simply create and  element on your page using this value as the src attribute and using application/x-shockwave-flash as the type attribute. If you want the video to play right away, make sure to append &autoPlay=true to the url..
             * The query accepts one parameter: text - The string to search for
             *
             * @param args
             */
            class VideoSearch {
                constructor(args: Object);
                /**
                 * The default attribute which acts as a label for each item.
                 *
                 */
                "label": string;
                /**
                 * Sets whether or not to pass preventCache to dojo.io.script.
                 *
                 */
                "urlPreventCache": boolean;
                /**
                 * See dojo/data/api/Read.close()
                 *
                 * @param request
                 */
                close(request: any): void;
                /**
                 * See dojo/data/api/Read.containsValue()
                 *
                 * @param item
                 * @param attribute
                 * @param value
                 */
                containsValue(item: any, attribute: any, value: any): boolean;
                /**
                 * Fetch Google search items that match to a query
                 *
                 * @param request A request object
                 */
                fetch(request: any): void;
                /**
                 * See dojo/data/api/Read.getAttributes()
                 *
                 * @param item
                 */
                getAttributes(item: any): any;
                /**
                 * See dojo/data/api/Read.getFeatures()
                 *
                 */
                getFeatures(): Object;
                /**
                 * See dojo/data/api/Read.getLabel()
                 *
                 * @param item
                 */
                getLabel(item: any): any;
                /**
                 * See dojo/data/api/Read.getLabelAttributes()
                 *
                 * @param item
                 */
                getLabelAttributes(item: any): any[];
                /**
                 * See dojo/data/api/Read.getValue()
                 *
                 * @param item
                 * @param attribute
                 * @param defaultValue
                 */
                getValue(item: any, attribute: any, defaultValue: any): any;
                /**
                 * See dojo/data/api/Read.getValue()
                 *
                 * @param item
                 * @param attribute
                 */
                getValues(item: any, attribute: any): any;
                /**
                 * See dojo/data/api/Read.hasAttributes()
                 *
                 * @param item
                 * @param attribute
                 */
                hasAttribute(item: any, attribute: any): boolean;
                /**
                 * See dojo/data/api/Read.isItem()
                 *
                 * @param item
                 */
                isItem(item: any): boolean;
                /**
                 * See dojo/data/api/Read.isItemLoaded()
                 *
                 * @param item
                 */
                isItemLoaded(item: any): any;
                /**
                 * See dojo/data/api/Read.loadItem()
                 *
                 * @param keywordArgs
                 */
                loadItem(keywordArgs: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/GoogleSearchStore.Search.html
             *
             * A data store for retrieving search results from Google.
             * This data store acts as a base class for Google searches,
             * and has a number of child data stores that implement different
             * searches. This store defaults to searching the web, and is functionally
             * identical to the dojox.data.GoogleWebSearchStore object.
             * The following attributes are supported on each item:
             *
             * url - The URL for the item
             * unescapedUrl - The URL for the item, with URL escaping. This is often more readable
             * visibleUrl - The URL with no protocol specified.
             * cacheUrl - The URL to the copy of the document cached by Google
             * title - The page title in HTML format.
             * titleNoFormatting - The page title in plain text
             * content - A snippet of information about the page
             * The query accepts one parameter: text - The string to search for
             *
             * @param args
             */
            class Search {
                constructor(args: Object);
                /**
                 * The default attribute which acts as a label for each item.
                 *
                 */
                "label": string;
                /**
                 * Sets whether or not to pass preventCache to dojo.io.script.
                 *
                 */
                "urlPreventCache": boolean;
                /**
                 * See dojo/data/api/Read.close()
                 *
                 * @param request
                 */
                close(request: any): void;
                /**
                 * See dojo/data/api/Read.containsValue()
                 *
                 * @param item
                 * @param attribute
                 * @param value
                 */
                containsValue(item: any, attribute: any, value: any): boolean;
                /**
                 * Fetch Google search items that match to a query
                 *
                 * @param request A request object
                 */
                fetch(request: any): void;
                /**
                 * See dojo/data/api/Read.getAttributes()
                 *
                 * @param item
                 */
                getAttributes(item: any): any;
                /**
                 * See dojo/data/api/Read.getFeatures()
                 *
                 */
                getFeatures(): Object;
                /**
                 * See dojo/data/api/Read.getLabel()
                 *
                 * @param item
                 */
                getLabel(item: any): any;
                /**
                 * See dojo/data/api/Read.getLabelAttributes()
                 *
                 * @param item
                 */
                getLabelAttributes(item: any): any[];
                /**
                 * See dojo/data/api/Read.getValue()
                 *
                 * @param item
                 * @param attribute
                 * @param defaultValue
                 */
                getValue(item: any, attribute: any, defaultValue: any): any;
                /**
                 * See dojo/data/api/Read.getValue()
                 *
                 * @param item
                 * @param attribute
                 */
                getValues(item: any, attribute: any): any;
                /**
                 * See dojo/data/api/Read.hasAttributes()
                 *
                 * @param item
                 * @param attribute
                 */
                hasAttribute(item: any, attribute: any): boolean;
                /**
                 * See dojo/data/api/Read.isItem()
                 *
                 * @param item
                 */
                isItem(item: any): boolean;
                /**
                 * See dojo/data/api/Read.isItemLoaded()
                 *
                 * @param item
                 */
                isItemLoaded(item: any): any;
                /**
                 * See dojo/data/api/Read.loadItem()
                 *
                 * @param keywordArgs
                 */
                loadItem(keywordArgs: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/data/GoogleSearchStore.WebSearch.html
             *
             * A data store for retrieving search results from Google.
             * The following attributes are supported on each item:
             *
             * title - The page title in HTML format.
             * titleNoFormatting - The page title in plain text
             * content - A snippet of information about the page
             * url - The URL for the item
             * unescapedUrl - The URL for the item, with URL escaping. This is often more readable
             * visibleUrl - The URL with no protocol specified.
             * cacheUrl - The URL to the copy of the document cached by Google
             * estimatedResultCount - (aggregated per-query) estimated number of results
             * The query accepts one parameter: text - The string to search for
             *
             * @param args
             */
            class WebSearch {
                constructor(args: Object);
                /**
                 * The default attribute which acts as a label for each item.
                 *
                 */
                "label": string;
                /**
                 * Sets whether or not to pass preventCache to dojo.io.script.
                 *
                 */
                "urlPreventCache": boolean;
                /**
                 * See dojo/data/api/Read.close()
                 *
                 * @param request
                 */
                close(request: any): void;
                /**
                 * See dojo/data/api/Read.containsValue()
                 *
                 * @param item
                 * @param attribute
                 * @param value
                 */
                containsValue(item: any, attribute: any, value: any): boolean;
                /**
                 * Fetch Google search items that match to a query
                 *
                 * @param request A request object
                 */
                fetch(request: any): void;
                /**
                 * See dojo/data/api/Read.getAttributes()
                 *
                 * @param item
                 */
                getAttributes(item: any): any;
                /**
                 * See dojo/data/api/Read.getFeatures()
                 *
                 */
                getFeatures(): Object;
                /**
                 * See dojo/data/api/Read.getLabel()
                 *
                 * @param item
                 */
                getLabel(item: any): any;
                /**
                 * See dojo/data/api/Read.getLabelAttributes()
                 *
                 * @param item
                 */
                getLabelAttributes(item: any): any[];
                /**
                 * See dojo/data/api/Read.getValue()
                 *
                 * @param item
                 * @param attribute
                 * @param defaultValue
                 */
                getValue(item: any, attribute: any, defaultValue: any): any;
                /**
                 * See dojo/data/api/Read.getValue()
                 *
                 * @param item
                 * @param attribute
                 */
                getValues(item: any, attribute: any): any;
                /**
                 * See dojo/data/api/Read.hasAttributes()
                 *
                 * @param item
                 * @param attribute
                 */
                hasAttribute(item: any, attribute: any): boolean;
                /**
                 * See dojo/data/api/Read.isItem()
                 *
                 * @param item
                 */
                isItem(item: any): boolean;
                /**
                 * See dojo/data/api/Read.isItemLoaded()
                 *
                 * @param item
                 */
                isItemLoaded(item: any): any;
                /**
                 * See dojo/data/api/Read.loadItem()
                 *
                 * @param keywordArgs
                 */
                loadItem(keywordArgs: any): void;
            }
        }

    }

}

declare module "dojox/data/restListener" {
    var exp: dojox.data.restListener
    export=exp;
}
declare module "dojox/data/css" {
    var exp: dojox.data.css
    export=exp;
}
declare module "dojox/data/css.rules" {
    var exp: dojox.data.css.rules
    export=exp;
}
declare module "dojox/data/dom" {
    var exp: dojox.data.dom
    export=exp;
}
declare module "dojox/data/GoogleSearchStore" {
    var exp: dojox.data.GoogleSearchStore
    export=exp;
}
declare module "dojox/data/GoogleSearchStore.ImageSearch" {
    var exp: dojox.data.GoogleSearchStore.ImageSearch
    export=exp;
}
declare module "dojox/data/GoogleSearchStore.BookSearch" {
    var exp: dojox.data.GoogleSearchStore.BookSearch
    export=exp;
}
declare module "dojox/data/GoogleSearchStore.LocalSearch" {
    var exp: dojox.data.GoogleSearchStore.LocalSearch
    export=exp;
}
declare module "dojox/data/GoogleSearchStore.BlogSearch" {
    var exp: dojox.data.GoogleSearchStore.BlogSearch
    export=exp;
}
declare module "dojox/data/GoogleSearchStore.VideoSearch" {
    var exp: dojox.data.GoogleSearchStore.VideoSearch
    export=exp;
}
declare module "dojox/data/GoogleSearchStore.Search" {
    var exp: dojox.data.GoogleSearchStore.Search
    export=exp;
}
declare module "dojox/data/GoogleSearchStore.WebSearch" {
    var exp: dojox.data.GoogleSearchStore.WebSearch
    export=exp;
}
declare module "dojox/data/GoogleSearchStore.NewsSearch" {
    var exp: dojox.data.GoogleSearchStore.NewsSearch
    export=exp;
}
declare module "dojox/data/AndOrReadStore" {
    var exp: dojox.data.AndOrReadStore
    export=exp;
}
declare module "dojox/data/AppStore" {
    var exp: dojox.data.AppStore
    export=exp;
}
declare module "dojox/data/AndOrWriteStore" {
    var exp: dojox.data.AndOrWriteStore
    export=exp;
}
declare module "dojox/data/AtomReadStore" {
    var exp: dojox.data.AtomReadStore
    export=exp;
}
declare module "dojox/data/ClientFilter" {
    var exp: dojox.data.ClientFilter
    export=exp;
}
declare module "dojox/data/CouchDBRestStore" {
    var exp: dojox.data.CouchDBRestStore
    export=exp;
}
declare module "dojox/data/CdfStore" {
    var exp: dojox.data.CdfStore
    export=exp;
}
declare module "dojox/data/CssRuleStore" {
    var exp: dojox.data.CssRuleStore
    export=exp;
}
declare module "dojox/data/CssClassStore" {
    var exp: dojox.data.CssClassStore
    export=exp;
}
declare module "dojox/data/CsvStore" {
    var exp: dojox.data.CsvStore
    export=exp;
}
declare module "dojox/data/FileStore" {
    var exp: dojox.data.FileStore
    export=exp;
}
declare module "dojox/data/FlickrRestStore" {
    var exp: dojox.data.FlickrRestStore
    export=exp;
}
declare module "dojox/data/GoogleFeedStore" {
    var exp: dojox.data.GoogleFeedStore
    export=exp;
}
declare module "dojox/data/FlickrStore" {
    var exp: dojox.data.FlickrStore
    export=exp;
}
declare module "dojox/data/HtmlStore" {
    var exp: dojox.data.HtmlStore
    export=exp;
}
declare module "dojox/data/HtmlTableStore" {
    var exp: dojox.data.HtmlTableStore
    export=exp;
}
declare module "dojox/data/KeyValueStore" {
    var exp: dojox.data.KeyValueStore
    export=exp;
}
declare module "dojox/data/JsonRestStore" {
    var exp: dojox.data.JsonRestStore
    export=exp;
}
declare module "dojox/data/JsonQueryRestStore" {
    var exp: dojox.data.JsonQueryRestStore
    export=exp;
}
declare module "dojox/data/PersevereStore" {
    var exp: dojox.data.PersevereStore
    export=exp;
}
declare module "dojox/data/OpenSearchStore" {
    var exp: dojox.data.OpenSearchStore
    export=exp;
}
declare module "dojox/data/PicasaStore" {
    var exp: dojox.data.PicasaStore
    export=exp;
}
declare module "dojox/data/OpmlStore" {
    var exp: dojox.data.OpmlStore
    export=exp;
}
declare module "dojox/data/RailsStore" {
    var exp: dojox.data.RailsStore
    export=exp;
}
declare module "dojox/data/QueryReadStore" {
    var exp: dojox.data.QueryReadStore
    export=exp;
}
declare module "dojox/data/S3Store" {
    var exp: dojox.data.S3Store
    export=exp;
}
declare module "dojox/data/SnapLogicStore" {
    var exp: dojox.data.SnapLogicStore
    export=exp;
}
declare module "dojox/data/XmlItem" {
    var exp: dojox.data.XmlItem
    export=exp;
}
declare module "dojox/data/ServiceStore" {
    var exp: dojox.data.ServiceStore
    export=exp;
}
declare module "dojox/data/WikipediaStore" {
    var exp: dojox.data.WikipediaStore
    export=exp;
}
declare module "dojox/data/XmlStore" {
    var exp: dojox.data.XmlStore
    export=exp;
}
declare module "dojox/data/util/JsonQuery" {
    var exp: dojox.data.util.JsonQuery
    export=exp;
}
