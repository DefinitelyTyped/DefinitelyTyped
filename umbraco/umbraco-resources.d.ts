// Type definitions for Umbraco v7.2.8
// Project: https://github.com/umbraco
// Definitions by: DeCareSystemsIreland <https://github.com/DeCareSystemsIreland>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="angular" />

declare namespace umbraco.resources{

    /**
     * ResourcePromise object
     * The success callback returns the data which will be resolved by the deferred object.
     * The error callback returns an object containing: {errorMsg: errorMessage, data: originalData, status: status }
     */
    export interface IResourcePromise {
        errorMsg: string;
        data: any;
        status: number;
    }

    /**
     * Can be Ascending or Descending - Default: Ascending
     */
    enum Direction {
        Ascending,
        Descending
    }

    /**
     * Property to order items by, default: `SortOrder`
     */
    enum OrderItemsBy {
        SortOrder
    }

/**
 * @ngdoc service
 * @name umbraco.resources.authResource
 * @description
 * This Resource perfomrs actions to common authentication tasks for the Umbraco backoffice user
 *
 * @requires $q
 * @requires $http
 * @requires umbRequestHelper
 * @requires angularHelper
 */
interface IAuthResource{

	    /**
         * @ngdoc method
         * @name umbraco.resources.authResource#performLogin
         * @methodOf umbraco.resources.authResource
         *
         * @description
         * Logs the Umbraco backoffice user in if the credentials are good
         *
         * ##usage
         * <pre>
         * authResource.performLogin(login, password)
         *    .then(function(data) {
         *        //Do stuff for login...
         *    });
         * </pre>
         * @param {string} login Username of backoffice user
         * @param {string} password Password of backoffice user
         * @returns {Promise} resourcePromise object
         *
         */
        performLogin(username: string, password: string): ng.IPromise<IResourcePromise>;

		/**
         * @ngdoc method
         * @name umbraco.resources.authResource#performLogout
         * @methodOf umbraco.resources.authResource
         *
         * @description
         * Logs out the Umbraco backoffice user
         *
         * ##usage
         * <pre>
         * authResource.performLogout()
         *    .then(function(data) {
         *        //Do stuff for logging out...
         *    });
         * </pre>
         * @returns {Promise} resourcePromise object
         *
         */
        performLogout(): ng.IPromise<IResourcePromise>;

		/**
         * @ngdoc method
         * @name umbraco.resources.authResource#getCurrentUser
         * @methodOf umbraco.resources.authResource
         *
         * @description
         * Sends a request to the server to get the current user details, will return a 401 if the user is not logged in
         *
         * ##usage
         * <pre>
         * authResource.getCurrentUser()
         *    .then(function(data) {
         *        //Do stuff for fetching the current logged in Umbraco backoffice user
         *    });
         * </pre>
         * @returns {Promise} resourcePromise object
         *
         */
        getCurrentUser(): ng.IPromise<IResourcePromise>;

		/**
         * @ngdoc method
         * @name umbraco.resources.authResource#isAuthenticated
         * @methodOf umbraco.resources.authResource
         *
         * @description
         * Checks if the user is logged in or not - does not return 401 or 403
         *
         * ##usage
         * <pre>
         * authResource.isAuthenticated()
         *    .then(function(data) {
         *        //Do stuff to check if user is authenticated
         *    });
         * </pre>
         * @returns {Promise} resourcePromise object
         *
         */
        isAuthenticated(): ng.IPromise<IResourcePromise>;

		/**
         * @ngdoc method
         * @name umbraco.resources.authResource#getRemainingTimeoutSeconds
         * @methodOf umbraco.resources.authResource
         *
         * @description
         * Gets the user's remaining seconds before their login times out
         *
         * ##usage
         * <pre>
         * authResource.getRemainingTimeoutSeconds()
         *    .then(function(data) {
         *        //Number of seconds is returned
         *    });
         * </pre>
         * @returns {Promise} resourcePromise object
         *
         */
        getRemainingTimeoutSeconds(): ng.IPromise<IResourcePromise>;
}

/**
  * @ngdoc service
  * @name umbraco.resources.contentResource
  * @description Handles all transactions of content data
  * from the angular application to the Umbraco database, using the Content WebApi controller
  *
  * all methods returns a resource promise async, so all operations won't complete untill .then() is completed.
  *
  * @requires $q
  * @requires $http
  * @requires umbDataFormatter
  * @requires umbRequestHelper
  *
  * ##usage
  * To use, simply inject the contentResource into any controller or service that needs it, and make
  * sure the umbraco.resources module is accesible - which it should be by default.
  *
  * <pre>
  *    contentResource.getById(1234)
  *          .then(function(data) {
  *              $scope.content = data;
  *          });
  * </pre>
  **/
interface IContentResource{
	/**
         * @ngdoc method
         * @name umbraco.resources.contentResource#sort
         * @methodOf umbraco.resources.contentResource
         *
         * @description
         * Sorts all children below a given parent node id, based on a collection of node-ids
         *
         * ##usage
         * <pre>
         * var ids = [123,34533,2334,23434];
         * contentResource.sort({ parentId: 1244, sortedIds: ids })
         *    .then(function() {
         *        $scope.complete = true;
         *    });
         * </pre>
         * @param {Object} args arguments object
         * @param {Int} args.parentId the ID of the parent node
         * @param {Array} options.sortedIds array of node IDs as they should be sorted
         * @returns {Promise} resourcePromise object.
         *
         */
    sort(...args: any[]): ng.IPromise<IResourcePromise>;

		/**
         * @ngdoc method
         * @name umbraco.resources.contentResource#move
         * @methodOf umbraco.resources.contentResource
         *
         * @description
         * Moves a node underneath a new parentId
         *
         * ##usage
         * <pre>
         * contentResource.move({ parentId: 1244, id: 123 })
         *    .then(function() {
         *        alert("node was moved");
         *    }, function(err){
         *      alert("node didnt move:" + err.data.Message);
         *    });
         * </pre>
         * @param {Object} args arguments object
         * @param {Int} args.id the ID of the node to move
         * @param {Int} args.parentId the ID of the parent node to move to
         * @returns {Promise} resourcePromise object.
         *
         */
    move(...args: any[]): ng.IPromise<IResourcePromise>;

		/**
         * @ngdoc method
         * @name umbraco.resources.contentResource#copy
         * @methodOf umbraco.resources.contentResource
         *
         * @description
         * Copies a node underneath a new parentId
         *
         * ##usage
         * <pre>
         * contentResource.copy({ parentId: 1244, id: 123 })
         *    .then(function() {
         *        alert("node was copied");
         *    }, function(err){
         *      alert("node wasnt copy:" + err.data.Message);
         *    });
         * </pre>
         * @param {Object} args arguments object
         * @param {Int} args.id the ID of the node to copy
         * @param {Int} args.parentId the ID of the parent node to copy to
         * @param {Boolean} args.relateToOriginal if true, relates the copy to the original through the relation api
         * @returns {Promise} resourcePromise object.
         *
         */
    copy(...args: any[]): ng.IPromise<IResourcePromise>;


		/**
         * @ngdoc method
         * @name umbraco.resources.contentResource#unPublish
         * @methodOf umbraco.resources.contentResource
         *
         * @description
         * Unpublishes a content item with a given Id
         *
         * ##usage
         * <pre>
         * contentResource.unPublish(1234)
         *    .then(function() {
         *        alert("node was unpulished");
         *    }, function(err){
         *      alert("node wasnt unpublished:" + err.data.Message);
         *    });
         * </pre>
         * @param {Int} id the ID of the node to unpublish
         * @returns {Promise} resourcePromise object.
         *
         */
        unPublish(id: number): ng.IPromise<IResourcePromise>;

		/**
         * @ngdoc method
         * @name umbraco.resources.contentResource#emptyRecycleBin
         * @methodOf umbraco.resources.contentResource
         *
         * @description
         * Empties the content recycle bin
         *
         * ##usage
         * <pre>
         * contentResource.emptyRecycleBin()
         *    .then(function() {
         *        alert('its empty!');
         *    });
         * </pre>
         *
         * @returns {Promise} resourcePromise object.
         *
         */
        emptyRecycleBin(): ng.IPromise<IResourcePromise>;

		/**
         * @ngdoc method
         * @name umbraco.resources.contentResource#deleteById
         * @methodOf umbraco.resources.contentResource
         *
         * @description
         * Deletes a content item with a given id
         *
         * ##usage
         * <pre>
         * contentResource.deleteById(1234)
         *    .then(function() {
         *        alert('its gone!');
         *    });
         * </pre>
         *
         * @param {Int} id id of content item to delete
         * @returns {Promise} resourcePromise object.
         *
         */
        deleteById(id: number): ng.IPromise<IResourcePromise>;

		/**
         * @ngdoc method
         * @name umbraco.resources.contentResource#getById
         * @methodOf umbraco.resources.contentResource
         *
         * @description
         * Gets a content item with a given id
         *
         * ##usage
         * <pre>
         * contentResource.getById(1234)
         *    .then(function(content) {
         *        var myDoc = content;
         *        alert('its here!');
         *    });
         * </pre>
         *
         * @param {Int} id id of content item to return
         * @returns {Promise} resourcePromise object containing the content item.
         *
         */
        getById(id: number): ng.IPromise<IResourcePromise>;

		 /**
         * @ngdoc method
         * @name umbraco.resources.contentResource#getByIds
         * @methodOf umbraco.resources.contentResource
         *
         * @description
         * Gets an array of content items, given a collection of ids
         *
         * ##usage
         * <pre>
         * contentResource.getByIds( [1234,2526,28262])
         *    .then(function(contentArray) {
         *        var myDoc = contentArray;
         *        alert('they are here!');
         *    });
         * </pre>
         *
         * @param {Array} ids ids of content items to return as an array
         * @returns {Promise} resourcePromise object containing the content items array.
         *
         */
        getByIds(ids: number[]): ng.IPromise<IResourcePromise>;

		/**
         * @ngdoc method
         * @name umbraco.resources.contentResource#getScaffold
         * @methodOf umbraco.resources.contentResource
         *
         * @description
         * Returns a scaffold of an empty content item, given the id of the content item to place it underneath and the content type alias.
         *
         * - Parent Id must be provided so umbraco knows where to store the content
         * - Content Type alias must be provided so umbraco knows which properties to put on the content scaffold
         *
         * The scaffold is used to build editors for content that has not yet been populated with data.
         *
         * ##usage
         * <pre>
         * contentResource.getScaffold(1234, 'homepage')
         *    .then(function(scaffold) {
         *        var myDoc = scaffold;
         *        myDoc.name = "My new document";
         *
         *        contentResource.publish(myDoc, true)
         *            .then(function(content){
         *                alert("Retrieved, updated and published again");
         *            });
         *    });
         * </pre>
         *
         * @param {Int} parentId id of content item to return
         * @param {String} alias contenttype alias to base the scaffold on
         * @returns {Promise} resourcePromise object containing the content scaffold.
         *
         */
        getScaffold(parentId: number, alias: string): ng.IPromise<IResourcePromise>;

		/**
         * @ngdoc method
         * @name umbraco.resources.contentResource#getNiceUrl
         * @methodOf umbraco.resources.contentResource
         *
         * @description
         * Returns a url, given a node ID
         *
         * ##usage
         * <pre>
         * contentResource.getNiceUrl(id)
         *    .then(function(url) {
         *        alert('its here!');
         *    });
         * </pre>
         *
         * @param {Int} id Id of node to return the public url to
         * @returns {Promise} resourcePromise object containing the url.
         *
         */
        getNiceUrl(id: number): ng.IPromise<IResourcePromise>;

		/**
         * @ngdoc method
         * @name umbraco.resources.contentResource#getChildren
         * @methodOf umbraco.resources.contentResource
         *
         * @description
         * Gets children of a content item with a given id
         *
         * ##usage
         * <pre>
         * contentResource.getChildren(1234, {pageSize: 10, pageNumber: 2})
         *    .then(function(contentArray) {
         *        var children = contentArray;
         *        alert('they are here!');
         *    });
         * </pre>
         *
         * @param {Int} parentid id of content item to return children of
         * @param {Object} options optional options object
         * @param {Int} options.pageSize if paging data, number of nodes per page, default = 0
         * @param {Int} options.pageNumber if paging data, current page index, default = 0
         * @param {String} options.filter if provided, query will only return those with names matching the filter
         * @param {String} options.orderDirection can be `Ascending` or `Descending` - Default: `Ascending`
         * @param {String} options.orderBy property to order items by, default: `SortOrder`
         * @returns {Promise} resourcePromise object containing an array of content items.
         *
         */
        getChildren(parentId: number, options?: { pageSize: number; pageNumber: number; filter: string; orderDirection: Direction; orderBy: OrderItemsBy }): ng.IPromise<IResourcePromise>;

		/**
         * @ngdoc method
         * @name umbraco.resources.contentResource#hasPermission
         * @methodOf umbraco.resources.contentResource
         *
         * @description
         * Returns true/false given a permission char to check against a nodeID
         * for the current user
         *
         * ##usage
         * <pre>
         * contentResource.hasPermission('p',1234)
         *    .then(function() {
         *        alert('You are allowed to publish this item');
         *    });
         * </pre>
         *
         * @param {String} permission char representing the permission to check
         * @param {Int} id id of content item to delete
         * @returns {Promise} resourcePromise object.
         *
         */
        checkPermission(permission: string, id: number): ng.IPromise<IResourcePromise>;

		/**
         * @ngdoc method
         * @name umbraco.resources.contentResource#save
         * @methodOf umbraco.resources.contentResource
         *
         * @description
         * Saves changes made to a content item to its current version, if the content item is new, the isNew paramater must be passed to force creation
         * if the content item needs to have files attached, they must be provided as the files param and passed seperately
         *
         *
         * ##usage
         * <pre>
         * contentResource.getById(1234)
         *    .then(function(content) {
         *          content.name = "I want a new name!";
         *          contentResource.save(content, false)
         *            .then(function(content){
         *                alert("Retrieved, updated and saved again");
         *            });
         *    });
         * </pre>
         *
         * @param {Object} content The content item object with changes applied
         * @param {Bool} isNew set to true to create a new item or to update an existing
         * @param {Array} files collection of files for the document
         * @returns {Promise} resourcePromise object containing the saved content item.
         *
         */
        save(content: IContentResource, isNew: boolean, files: any[]): ng.IPromise<IResourcePromise>;

		/**
         * @ngdoc method
         * @name umbraco.resources.contentResource#publish
         * @methodOf umbraco.resources.contentResource
         *
         * @description
         * Saves and publishes changes made to a content item to a new version, if the content item is new, the isNew paramater must be passed to force creation
         * if the content item needs to have files attached, they must be provided as the files param and passed seperately
         *
         *
         * ##usage
         * <pre>
         * contentResource.getById(1234)
         *    .then(function(content) {
         *          content.name = "I want a new name, and be published!";
         *          contentResource.publish(content, false)
         *            .then(function(content){
         *                alert("Retrieved, updated and published again");
         *            });
         *    });
         * </pre>
         *
         * @param {Object} content The content item object with changes applied
         * @param {Bool} isNew set to true to create a new item or to update an existing
         * @param {Array} files collection of files for the document
         * @returns {Promise} resourcePromise object containing the saved content item.
         *
         */
        publish(content: IContentResource, isNew: boolean, files: any[]): ng.IPromise<IResourcePromise>;

		/**
         * @ngdoc method
         * @name umbraco.resources.contentResource#sendToPublish
         * @methodOf umbraco.resources.contentResource
         *
         * @description
         * Saves changes made to a content item, and notifies any subscribers about a pending publication
         *
         * ##usage
         * <pre>
         * contentResource.getById(1234)
         *    .then(function(content) {
         *          content.name = "I want a new name, and be published!";
         *          contentResource.sendToPublish(content, false)
         *            .then(function(content){
         *                alert("Retrieved, updated and notication send off");
         *            });
         *    });
         * </pre>
         *
         * @param {Object} content The content item object with changes applied
         * @param {Bool} isNew set to true to create a new item or to update an existing
         * @param {Array} files collection of files for the document
         * @returns {Promise} resourcePromise object containing the saved content item.
         *
         */
        sendToPublish(content: IContentResource, isNew: boolean, files: any[]): ng.IPromise<IResourcePromise>;


        /**
         * @ngdoc method
         * @name umbraco.resources.contentResource#publishByid
         * @methodOf umbraco.resources.contentResource
         *
         * @description
         * Publishes a content item with a given ID
         *
         * ##usage
         * <pre>
         * contentResource.publishById(1234)
         *    .then(function(content) {
         *        alert("published");
         *    });
         * </pre>
         *
         * @param {Int} id The ID of the conten to publish
         * @returns {Promise} resourcePromise object containing the published content item.
         *
         */
        publishById(id: number): ng.IPromise<IResourcePromise>;

}

/**
    * @ngdoc service
    * @name umbraco.resources.contentTypeResource
    * @description Loads in data for content types
    **/
interface IContentTypeResource{
        /**
         * @ngdoc method
         * @name umbraco.resources.contentTypeResource#getAllowedTypes
         * @methodOf umbraco.resources.contentTypeResource
         *
         * @description
         * Returns a list of allowed content types underneath a content item with a given ID
         *
         * ##usage
         * <pre>
         * contentTypeResource.getAllowedTypes(1234)
         *    .then(function(array) {
         *        $scope.type = type;
         *    });
         * </pre>
         * @param {Int} contentId id of the content item to retrive allowed child types for
         * @returns {Promise} resourcePromise object.
         *
         */
    getAllowedTypes(contentId: number): ng.IPromise<IResourcePromise>;

        /**
         * @ngdoc method
         * @name umbraco.resources.contentTypeResource#getAllPropertyTypeAliases
         * @methodOf umbraco.resources.contentTypeResource
         *
         * @description
         * Returns a list of defined property type aliases
         *
         * @returns {Promise} resourcePromise object.
         *
         */
    getAllPropertyTypeAliases(): ng.IPromise<IResourcePromise>;
}

/**
    * @ngdoc service
    * @name umbraco.resources.currentUserResource
    * @description Used for read/updates for the currently logged in user
    *
    *
    **/
interface ICurrentUserResource{

        /**
         * @ngdoc method
         * @name umbraco.resources.currentUserResource#changePassword
         * @methodOf umbraco.resources.currentUserResource
         *
         * @description
         * Changes the current users password
         *
         * @returns {Promise} resourcePromise object containing the user array.
         *
         */
        changePassword(changePasswordArgs: any): ng.IPromise<IResourcePromise>;

        /**
         * @ngdoc method
         * @name umbraco.resources.currentUserResource#getMembershipProviderConfig
         * @methodOf umbraco.resources.currentUserResource
         *
         * @description
         * Gets the configuration of the user membership provider which is used to configure the change password form
         */
        getMembershipProviderConfig(): any;

}

/**
    * @ngdoc service
    * @name umbraco.resources.dashboardResource
    * @description Handles loading the dashboard manifest
    **/
interface IDashboardResource{
        /**
         * @ngdoc method
         * @name umbraco.resources.dashboardResource#getDashboard
         * @methodOf umbraco.resources.dashboardResource
         *
         * @description
         * Retrieves the dashboard configuration for a given section
         *
         * @param {string} section Alias of section to retrieve dashboard configuraton for
         * @returns {Promise} resourcePromise object containing the user array.
         *
         */
    getDashboard(section: string): ng.IPromise<IResourcePromise>;
}

/**
    * @ngdoc service
    * @name umbraco.resources.dataTypeResource
    * @description Loads in data for data types
    **/
interface IDataTypeResource{
       /**
         * @ngdoc method
         * @name umbraco.resources.dataTypeResource#getPreValues
         * @methodOf umbraco.resources.dataTypeResource
         *
         * @description
         * Retrieves available prevalues for a given data type + editor
         *
         * ##usage
         * <pre>
         * dataTypeResource.getPrevalyes("Umbraco.MediaPicker", 1234)
         *    .then(function(prevalues) {
         *        alert('its gone!');
         *    });
         * </pre>
         *
         * @param {String} editorAlias string alias of editor type to retrive prevalues configuration for
         * @param {Int} id id of datatype to retrieve prevalues for
         * @returns {Promise} resourcePromise object.
         *
         */
    getPreValues(editorAlias: string, dataTypeId: number): ng.IPromise<IResourcePromise>;

        /**
         * @ngdoc method
         * @name umbraco.resources.dataTypeResource#getById
         * @methodOf umbraco.resources.dataTypeResource
         *
         * @description
         * Gets a data type item with a given id
         *
         * ##usage
         * <pre>
         * dataTypeResource.getById(1234)
         *    .then(function() {
         *        alert('its gone!');
         *    });
         * </pre>
         *
         * @param {Int} id id of data type to retrieve
         * @returns {Promise} resourcePromise object.
         *
         */
    getById(id: number): ng.IPromise<IResourcePromise>;

        getAll() : any;

        /**
         * @ngdoc method
         * @name umbraco.resources.contentResource#getScaffold
         * @methodOf umbraco.resources.contentResource
         *
         * @description
         * Returns a scaffold of an empty data type item
         *
         * The scaffold is used to build editors for data types that has not yet been populated with data.
         *
         * ##usage
         * <pre>
         * dataTypeResource.getScaffold()
         *    .then(function(scaffold) {
         *        var myType = scaffold;
         *        myType.name = "My new data type";
         *
         *        dataTypeResource.save(myType, myType.preValues, true)
         *            .then(function(type){
         *                alert("Retrieved, updated and saved again");
         *            });
         *    });
         * </pre>
         *
         * @returns {Promise} resourcePromise object containing the data type scaffold.
         *
         */
        getScaffold(): ng.IPromise<IResourcePromise>;

        /**
         * @ngdoc method
         * @name umbraco.resources.dataTypeResource#deleteById
         * @methodOf umbraco.resources.dataTypeResource
         *
         * @description
         * Deletes a data type with a given id
         *
         * ##usage
         * <pre>
         * dataTypeResource.deleteById(1234)
         *    .then(function() {
         *        alert('its gone!');
         *    });
         * </pre>
         *
         * @param {Int} id id of content item to delete
         * @returns {Promise} resourcePromise object.
         *
         */
        deleteById(id: number): ng.IPromise<IResourcePromise>;

        /**
         * @ngdoc method
         * @name umbraco.resources.dataTypeResource#save
         * @methodOf umbraco.resources.dataTypeResource
         *
         * @description
         * Saves or update a data type
         *
         * @param {Object} dataType data type object to create/update
         * @param {Array} preValues collection of prevalues on the datatype
         * @param {Bool} isNew set to true if type should be create instead of updated
         * @returns {Promise} resourcePromise object.
         *
         */
        save(dataType: Object, preValues: any[], isNew: boolean): ng.IPromise<IResourcePromise>;
}

/**
    * @ngdoc service
    * @name umbraco.resources.entityResource
    * @description Loads in basic data for all entities
    *
    * ##What is an entity?
    * An entity is a basic **read-only** representation of an Umbraco node. It contains only the most
    * basic properties used to display the item in trees, lists and navigation.
    *
    * ##What is the difference between entity and content/media/etc...?
    * the entity only contains the basic node data, name, id and guid, whereas content
    * nodes fetched through the content service also contains additional all of the content property data, etc..
    * This is the same principal for all entity types. Any user that is logged in to the back office will have access
    * to view the basic entity information for all entities since the basic entity information does not contain sensitive information.
    *
    * ##Entity object types?
    * You need to specify the type of object you want returned.
    *
    * The core object types are:
    *
    * - Document
    * - Media
    * - Member
    * - Template
    * - DocumentType
    * - MediaType
    * - MemberType
    * - Macro
    * - User
    * - Language
    * - Domain
    * - DataType
    **/
interface IEntityResource{

    /**
         * @ngdoc method
         * @name umbraco.resources.entityResource#getPath
         * @methodOf umbraco.resources.entityResource
         *
         * @description
         * Returns a path, given a node ID and type
         *
         * ##usage
         * <pre>
         * entityResource.getPath(id)
         *    .then(function(pathArray) {
         *        alert('its here!');
         *    });
         * </pre>
         *
         * @param {Int} id Id of node to return the public url to
         * @param {string} type Object type name
         * @returns {Promise} resourcePromise object containing the url.
         *
         */
    getPath(id: number, type: string): ng.IPromise<IResourcePromise>;

        /**
         * @ngdoc method
         * @name umbraco.resources.entityResource#getById
         * @methodOf umbraco.resources.entityResource
         *
         * @description
         * Gets an entity with a given id
         *
         * ##usage
         * <pre>
         * //get media by id
         * entityResource.getEntityById(0, "Media")
         *    .then(function(ent) {
         *        var myDoc = ent;
         *        alert('its here!');
         *    });
         * </pre>
         *
         * @param {Int} id id of entity to return
         * @param {string} type Object type name
         * @returns {Promise} resourcePromise object containing the entity.
         *
         */
        getById(id: number, type: string): ng.IPromise<IResourcePromise>;

        getByQuery(query: string, nodeContextId: number|string, type: string): ng.IPromise<IResourcePromise>;

         /**
         * @ngdoc method
         * @name umbraco.resources.entityResource#getByIds
         * @methodOf umbraco.resources.entityResource
         *
         * @description
         * Gets an array of entities, given a collection of ids
         *
         * ##usage
         * <pre>
         * //Get templates for ids
         * entityResource.getEntitiesByIds( [1234,2526,28262], "Template")
         *    .then(function(templateArray) {
         *        var myDoc = contentArray;
         *        alert('they are here!');
         *    });
         * </pre>
         *
         * @param {Array} ids ids of entities to return as an array
         * @param {string} type type name
         * @returns {Promise} resourcePromise object containing the entity array.
         *
         */
        getByIds(ids: number[], type: string): ng.IPromise<IResourcePromise>;

         /**
         * @ngdoc method
         * @name umbraco.resources.entityResource#getEntityById
         * @methodOf umbraco.resources.entityResource
         *
         * @description
         * Gets an entity with a given id
         *
         * ##usage
         * <pre>
         *
         * //Only return media
         * entityResource.getAll("Media")
         *    .then(function(ent) {
         *        var myDoc = ent;
         *        alert('its here!');
         *    });
         * </pre>
         *
         * @param {string} type Object type name
         * @param {string} postFilter optional filter expression which will execute a dynamic where clause on the server
         * @param {string} postFilterParams optional parameters for the postFilter expression
         * @returns {Promise} resourcePromise object containing the entity.
         *
         */
        getAll(type: string, postFilter: string, postFilterParams: string): ng.IPromise<IResourcePromise>;

        /**
         * @ngdoc method
         * @name umbraco.resources.entityResource#getAncestors
         * @methodOf umbraco.resources.entityResource
         *
         * @description
         * Gets ancestor entities for a given item
         *
         *
         * @param {string} type Object type name
         * @returns {Promise} resourcePromise object containing the entity.
         *
         */
        getAncestors(id: number, type: string): ng.IPromise<IResourcePromise>;

        /**
         * @ngdoc method
         * @name umbraco.resources.entityResource#getAncestors
         * @methodOf umbraco.resources.entityResource
         *
         * @description
         * Gets children entities for a given item
         *
         *
         * @param {string} type Object type name
         * @returns {Promise} resourcePromise object containing the entity.
         *
         */
        getChildren(id: number, type: string): ng.IPromise<IResourcePromise>;

        /**
         * @ngdoc method
         * @name umbraco.resources.entityResource#searchMedia
         * @methodOf umbraco.resources.entityResource
         *
         * @description
         * Gets an array of entities, given a lucene query and a type
         *
         * ##usage
         * <pre>
         * entityResource.search("news", "Media")
         *    .then(function(mediaArray) {
         *        var myDoc = mediaArray;
         *        alert('they are here!');
         *    });
         * </pre>
         *
         * @param {String} Query search query
         * @param {String} Type type of conten to search
         * @returns {Promise} resourcePromise object containing the entity array.
         *
         */
        search(query: string, type: string, searchFrom: any, canceler: any): ng.IPromise<IResourcePromise>;

         /**
         * @ngdoc method
         * @name umbraco.resources.entityResource#searchAll
         * @methodOf umbraco.resources.entityResource
         *
         * @description
         * Gets an array of entities from all available search indexes, given a lucene query
         *
         * ##usage
         * <pre>
         * entityResource.searchAll("bob")
         *    .then(function(array) {
         *        var myDoc = array;
         *        alert('they are here!');
         *    });
         * </pre>
         *
         * @param {String} Query search query
         * @returns {Promise} resourcePromise object containing the entity array.
         *
         */
        searchAll(query: string, canceler: any): ng.IPromise<IResourcePromise>;
}

    /**
     * LogType
     */
    enum LogType{
    Debug,
    Info
}

/**
    * @ngdoc service
    * @name umbraco.resources.logResource
    * @description Retrives log history from umbraco
    *
    *
    **/
interface ILogResource{
    /**
         * @ngdoc method
         * @name umbraco.resources.logResource#getEntityLog
         * @methodOf umbraco.resources.logResource
         *
         * @description
         * Gets the log history for a give entity id
         *
         * ##usage
         * <pre>
         * logResource.getEntityLog(1234)
         *    .then(function(log) {
         *        alert('its here!');
         *    });
         * </pre>
         *
         * @param {Int} id id of entity to return log history
         * @returns {Promise} resourcePromise object containing the log.
         *
         */
    getEntityLog(id: number): ng.IPromise<IResourcePromise>;

        /**
         * @ngdoc method
         * @name umbraco.resources.logResource#getUserLog
         * @methodOf umbraco.resources.logResource
         *
         * @description
         * Gets the current users' log history for a given type of log entry
         *
         * ##usage
         * <pre>
         * logResource.getUserLog("save", new Date())
         *    .then(function(log) {
         *        alert('its here!');
         *    });
         * </pre>
         *
         * @param {String} type logtype to query for
         * @param {DateTime} since query the log back to this date, by defalt 7 days ago
         * @returns {Promise} resourcePromise object containing the log.
         *
         */
    getUserLog(type: LogType, since: Date): ng.IPromise<IResourcePromise>;

        /**
         * @ngdoc method
         * @name umbraco.resources.logResource#getLog
         * @methodOf umbraco.resources.logResource
         *
         * @description
         * Gets the log history for a given type of log entry
         *
         * ##usage
         * <pre>
         * logResource.getLog("save", new Date())
         *    .then(function(log) {
         *        alert('its here!');
         *    });
         * </pre>
         *
         * @param {String} type logtype to query for
         * @param {DateTime} since query the log back to this date, by defalt 7 days ago
         * @returns {Promise} resourcePromise object containing the log.
         *
         */
    getLog(type: LogType, since: Date): ng.IPromise<IResourcePromise>;
}

/**
    * @ngdoc service
    * @name umbraco.resources.macroResource
    * @description Deals with data for macros
    *
    **/
interface IMacroResource{

    /**
         * @ngdoc method
         * @name umbraco.resources.macroResource#getMacroParameters
         * @methodOf umbraco.resources.macroResource
         *
         * @description
         * Gets the editable macro parameters for the specified macro alias
         *
         * @param {int} macroId The macro id to get parameters for
         *
         */
        getMacroParameters(macroId: number): any;

           /**
         * @ngdoc method
         * @name umbraco.resources.macroResource#getMacroResult
         * @methodOf umbraco.resources.macroResource
         *
         * @description
         * Gets the result of a macro as html to display in the rich text editor
         *
         * @param {int} macroId The macro id to get parameters for
         * @param {int} pageId The current page id
         * @param {Array} macroParamDictionary A dictionary of macro parameters
         *
         */
        getMacroResultAsHtmlForEditor(macroId: number, pageId: number, macroParamDictionary: any[]): any;
}

/**
    * @ngdoc service
    * @name umbraco.resources.mediaResource
    * @description Loads in data for media
    **/
interface IMediaResource{
    /**
         * @ngdoc method
         * @name umbraco.resources.mediaResource#sort
         * @methodOf umbraco.resources.mediaResource
         *
         * @description
         * Sorts all children below a given parent node id, based on a collection of node-ids
         *
         * ##usage
         * <pre>
         * var ids = [123,34533,2334,23434];
         * mediaResource.sort({ sortedIds: ids })
         *    .then(function() {
         *        $scope.complete = true;
         *    });
         * </pre>
         * @param {Object} args arguments object
         * @param {Int} args.parentId the ID of the parent node
         * @param {Array} options.sortedIds array of node IDs as they should be sorted
         * @returns {Promise} resourcePromise object.
         *
         */
    sort(...args: any[]): ng.IPromise<IResourcePromise>;


    /**
         * @ngdoc method
         * @name umbraco.resources.mediaResource#move
         * @methodOf umbraco.resources.mediaResource
         *
         * @description
         * Moves a node underneath a new parentId
         *
         * ##usage
         * <pre>
         * mediaResource.move({ parentId: 1244, id: 123 })
         *    .then(function() {
         *        alert("node was moved");
         *    }, function(err){
         *      alert("node didnt move:" + err.data.Message);
         *    });
         * </pre>
         * @param {Object} args arguments object
         * @param {Int} args.idd the ID of the node to move
         * @param {Int} args.parentId the ID of the parent node to move to
         * @returns {Promise} resourcePromise object.
         *
         */
    move(...args: any[]): ng.IPromise<IResourcePromise>;

        /**
         * @ngdoc method
         * @name umbraco.resources.mediaResource#getById
         * @methodOf umbraco.resources.mediaResource
         *
         * @description
         * Gets a media item with a given id
         *
         * ##usage
         * <pre>
         * mediaResource.getById(1234)
         *    .then(function(media) {
         *        var myMedia = media;
         *        alert('its here!');
         *    });
         * </pre>
         *
         * @param {Int} id id of media item to return
         * @returns {Promise} resourcePromise object containing the media item.
         *
         */
    getById(id: number): ng.IPromise<IResourcePromise>;

        /**
         * @ngdoc method
         * @name umbraco.resources.mediaResource#deleteById
         * @methodOf umbraco.resources.mediaResource
         *
         * @description
         * Deletes a media item with a given id
         *
         * ##usage
         * <pre>
         * mediaResource.deleteById(1234)
         *    .then(function() {
         *        alert('its gone!');
         *    });
         * </pre>
         *
         * @param {Int} id id of media item to delete
         * @returns {Promise} resourcePromise object.
         *
         */
    deleteById(id: number): ng.IPromise<IResourcePromise>;

        /**
         * @ngdoc method
         * @name umbraco.resources.mediaResource#getByIds
         * @methodOf umbraco.resources.mediaResource
         *
         * @description
         * Gets an array of media items, given a collection of ids
         *
         * ##usage
         * <pre>
         * mediaResource.getByIds( [1234,2526,28262])
         *    .then(function(mediaArray) {
         *        var myDoc = contentArray;
         *        alert('they are here!');
         *    });
         * </pre>
         *
         * @param {Array} ids ids of media items to return as an array
         * @returns {Promise} resourcePromise object containing the media items array.
         *
         */
    getByIds(ids: number[]): ng.IPromise<IResourcePromise>;


         /**
         * @ngdoc method
         * @name umbraco.resources.mediaResource#getScaffold
         * @methodOf umbraco.resources.mediaResource
         *
         * @description
         * Returns a scaffold of an empty media item, given the id of the media item to place it underneath and the media type alias.
         *
         * - Parent Id must be provided so umbraco knows where to store the media
         * - Media Type alias must be provided so umbraco knows which properties to put on the media scaffold
         *
         * The scaffold is used to build editors for media that has not yet been populated with data.
         *
         * ##usage
         * <pre>
         * mediaResource.getScaffold(1234, 'folder')
         *    .then(function(scaffold) {
         *        var myDoc = scaffold;
         *        myDoc.name = "My new media item";
         *
         *        mediaResource.save(myDoc, true)
         *            .then(function(media){
         *                alert("Retrieved, updated and saved again");
         *            });
         *    });
         * </pre>
         *
         * @param {Int} parentId id of media item to return
         * @param {String} alias mediatype alias to base the scaffold on
         * @returns {Promise} resourcePromise object containing the media scaffold.
         *
         */
    getScaffold(parentId: number, alias: string): ng.IPromise<IResourcePromise>;

        rootMedia(): any;

         /**
         * @ngdoc method
         * @name umbraco.resources.mediaResource#getChildren
         * @methodOf umbraco.resources.mediaResource
         *
         * @description
         * Gets children of a media item with a given id
         *
         * ##usage
         * <pre>
         * mediaResource.getChildren(1234, {pageSize: 10, pageNumber: 2})
         *    .then(function(contentArray) {
         *        var children = contentArray;
         *        alert('they are here!');
         *    });
         * </pre>
         *
         * @param {Int} parentid id of content item to return children of
         * @param {Object} options optional options object
         * @param {Int} options.pageSize if paging data, number of nodes per page, default = 0
         * @param {Int} options.pageNumber if paging data, current page index, default = 0
         * @param {String} options.filter if provided, query will only return those with names matching the filter
         * @param {String} options.orderDirection can be `Ascending` or `Descending` - Default: `Ascending`
         * @param {String} options.orderBy property to order items by, default: `SortOrder`
         * @returns {Promise} resourcePromise object containing an array of content items.
         *
         */
        getChildren(parentId: number, options?: { pageSize: number; pageNumber: number; filter: string; orderDirection: Direction; orderBy: OrderItemsBy }): ng.IPromise<IResourcePromise>;

         /**
         * @ngdoc method
         * @name umbraco.resources.mediaResource#save
         * @methodOf umbraco.resources.mediaResource
         *
         * @description
         * Saves changes made to a media item, if the media item is new, the isNew paramater must be passed to force creation
         * if the media item needs to have files attached, they must be provided as the files param and passed seperately
         *
         *
         * ##usage
         * <pre>
         * mediaResource.getById(1234)
         *    .then(function(media) {
         *          media.name = "I want a new name!";
         *          mediaResource.save(media, false)
         *            .then(function(media){
         *                alert("Retrieved, updated and saved again");
         *            });
         *    });
         * </pre>
         *
         * @param {Object} media The media item object with changes applied
         * @param {Bool} isNew set to true to create a new item or to update an existing
         * @param {Array} files collection of files for the media item
         * @returns {Promise} resourcePromise object containing the saved media item.
         *
         */
        save(media: Object, isNew: boolean, files: any[]): ng.IPromise<IResourcePromise>;

        /**
         * @ngdoc method
         * @name umbraco.resources.mediaResource#addFolder
         * @methodOf umbraco.resources.mediaResource
         *
         * @description
         * Shorthand for adding a media item of the type "Folder" under a given parent ID
         *
         * ##usage
         * <pre>
         * mediaResource.addFolder("My gallery", 1234)
         *    .then(function(folder) {
         *        alert('New folder');
         *    });
         * </pre>
         *
         * @param {string} name Name of the folder to create
         * @param {int} parentId Id of the media item to create the folder underneath
         * @returns {Promise} resourcePromise object.
         *
         */
        addFolder(name: string, parentId: number): ng.IPromise<IResourcePromise>;

        /**
         * @ngdoc method
         * @name umbraco.resources.mediaResource#emptyRecycleBin
         * @methodOf umbraco.resources.mediaResource
         *
         * @description
         * Empties the media recycle bin
         *
         * ##usage
         * <pre>
         * mediaResource.emptyRecycleBin()
         *    .then(function() {
         *        alert('its empty!');
         *    });
         * </pre>
         *
         * @returns {Promise} resourcePromise object.
         *
         */
        emptyRecycleBin(): ng.IPromise<IResourcePromise>;

}

/**
    * @ngdoc service
    * @name umbraco.resources.mediaTypeResource
    * @description Loads in data for media types
    **/
interface IMediaTypeResource{
    /**
         * @ngdoc method
         * @name umbraco.resources.mediaTypeResource#getAllowedTypes
         * @methodOf umbraco.resources.mediaTypeResource
         *
         * @description
         * Returns a list of allowed media types underneath a media item with a given ID
         *
         * ##usage
         * <pre>
         * mediaTypeResource.getAllowedTypes(1234)
         *    .then(function(array) {
         *        $scope.type = type;
         *    });
         * </pre>
         * @param {Int} mediaId id of the media item to retrive allowed child types for
         * @returns {Promise} resourcePromise object.
         *
         */
    getAllowedTypes(mediaId: number): ng.IPromise<IResourcePromise>;
}

/**
    * @ngdoc service
    * @name umbraco.resources.memberResource
    * @description Loads in data for members
    **/
interface IMemberResource{

    getPagedResults(memberTypeAlias: string, options: any): any;

    getListNode(listName: string): any;

    /**
         * @ngdoc method
         * @name umbraco.resources.memberResource#getByKey
         * @methodOf umbraco.resources.memberResource
         *
         * @description
         * Gets a member item with a given key
         *
         * ##usage
         * <pre>
         * memberResource.getByKey("0000-0000-000-00000-000")
         *    .then(function(member) {
         *        var mymember = member;
         *        alert('its here!');
         *    });
         * </pre>
         *
         * @param {Guid} key key of member item to return
         * @returns {Promise} resourcePromise object containing the member item.
         *
         */
    getByKey(key: string): ng.IPromise<IResourcePromise>;

         /**
         * @ngdoc method
         * @name umbraco.resources.memberResource#deleteByKey
         * @methodOf umbraco.resources.memberResource
         *
         * @description
         * Deletes a member item with a given key
         *
         * ##usage
         * <pre>
         * memberResource.deleteByKey("0000-0000-000-00000-000")
         *    .then(function() {
         *        alert('its gone!');
         *    });
         * </pre>
         *
         * @param {Guid} key id of member item to delete
         * @returns {Promise} resourcePromise object.
         *
         */
    deleteByKey(key: string): ng.IPromise<IResourcePromise>;

        /**
         * @ngdoc method
         * @name umbraco.resources.memberResource#getScaffold
         * @methodOf umbraco.resources.memberResource
         *
         * @description
         * Returns a scaffold of an empty member item, given the id of the member item to place it underneath and the member type alias.
         *
         * - Member Type alias must be provided so umbraco knows which properties to put on the member scaffold
         *
         * The scaffold is used to build editors for member that has not yet been populated with data.
         *
         * ##usage
         * <pre>
         * memberResource.getScaffold('client')
         *    .then(function(scaffold) {
         *        var myDoc = scaffold;
         *        myDoc.name = "My new member item";
         *
         *        memberResource.save(myDoc, true)
         *            .then(function(member){
         *                alert("Retrieved, updated and saved again");
         *            });
         *    });
         * </pre>
         *
         * @param {String} alias membertype alias to base the scaffold on
         * @returns {Promise} resourcePromise object containing the member scaffold.
         *
         */
    getScaffold(alias: string): ng.IPromise<IResourcePromise>;

        /**
         * @ngdoc method
         * @name umbraco.resources.memberResource#save
         * @methodOf umbraco.resources.memberResource
         *
         * @description
         * Saves changes made to a member, if the member is new, the isNew paramater must be passed to force creation
         * if the member needs to have files attached, they must be provided as the files param and passed seperately
         *
         *
         * ##usage
         * <pre>
         * memberResource.getBykey("23234-sd8djsd-3h8d3j-sdh8d")
         *    .then(function(member) {
         *          member.name = "Bob";
         *          memberResource.save(member, false)
         *            .then(function(member){
         *                alert("Retrieved, updated and saved again");
         *            });
         *    });
         * </pre>
         *
         * @param {Object} media The member item object with changes applied
         * @param {Bool} isNew set to true to create a new item or to update an existing
         * @param {Array} files collection of files for the media item
         * @returns {Promise} resourcePromise object containing the saved media item.
         *
         */
    save(member: Object, isNew: boolean, files: any[]): ng.IPromise<IResourcePromise>;

}

/**
    * @ngdoc service
    * @name umbraco.resources.memberTypeResource
    * @description Loads in data for member types
    **/
interface IMemberTypeResource{
    //return all member types
        getTypes(): any;
}

/**
    * @ngdoc service
    * @name umbraco.resources.packageInstallResource
    * @description handles data for package installations
    **/
interface IPackageResource{

    /**
         * @ngdoc method
         * @name umbraco.resources.packageInstallResource#fetchPackage
         * @methodOf umbraco.resources.packageInstallResource
         *
         * @description
         * Downloads a package file from our.umbraco.org to the website server.
         *
         * ##usage
         * <pre>
         * packageResource.download("guid-guid-guid-guid")
         *    .then(function(path) {
         *        alert('downloaded');
         *    });
         * </pre>
         *
         * @param {String} the unique package ID
         * @returns {String} path to the downloaded zip file.
         *
         */
        fetch(id: string): string;

        /**
         * @ngdoc method
         * @name umbraco.resources.packageInstallResource#createmanifest
         * @methodOf umbraco.resources.packageInstallResource
         *
         * @description
         * Creates a package manifest for a given folder of files.
         * This manifest keeps track of all installed files and data items
         * so a package can be uninstalled at a later time.
         * After creating a manifest, you can use the ID to install files and data.
         *
         * ##usage
         * <pre>
         * packageResource.createManifest("packages/id-of-install-file")
         *    .then(function(summary) {
         *        alert('unzipped');
         *    });
         * </pre>
         *
         * @param {String} folder the path to the temporary folder containing files
         * @returns {Int} the ID assigned to the saved package manifest
         *
         */
        import(package: string): number;

        installFiles(package: string): void;

        installData(package: string): void;

        cleanUp(package: string): void;

}

/**
    * @ngdoc service
    * @name umbraco.resources.sectionResource
    * @description Loads in data for section
    **/
interface ISectionResource{
    /** Loads in the data to display the section list */
        getSections(): void;
}

/**
    * @ngdoc service
    * @name umbraco.resources.stylesheetResource
    * @description service to retrieve available stylesheets
    *
    *
    **/
interface IStylesheetResource{
     /**
         * @ngdoc method
         * @name umbraco.resources.stylesheetResource#getAll
         * @methodOf umbraco.resources.stylesheetResource
         *
         * @description
         * Gets all registered stylesheets
         *
         * ##usage
         * <pre>
         * stylesheetResource.getAll()
         *    .then(function(stylesheets) {
         *        alert('its here!');
         *    });
         * </pre>
         *
         * @returns {Promise} resourcePromise object containing the stylesheets.
         *
         */
    getAll(): ng.IPromise<IResourcePromise>;

        /**
         * @ngdoc method
         * @name umbraco.resources.stylesheetResource#getRules
         * @methodOf umbraco.resources.stylesheetResource
         *
         * @description
         * Returns all defined child rules for a stylesheet with a given ID
         *
         * ##usage
         * <pre>
         * stylesheetResource.getRules(2345)
         *    .then(function(rules) {
         *        alert('its here!');
         *    });
         * </pre>
         *
         * @returns {Promise} resourcePromise object containing the rules.
         *
         */
    getRules(id: number): ng.IPromise<IResourcePromise>;

         /**
         * @ngdoc method
         * @name umbraco.resources.stylesheetResource#getRulesByName
         * @methodOf umbraco.resources.stylesheetResource
         *
         * @description
         * Returns all defined child rules for a stylesheet with a given name
         *
         * ##usage
         * <pre>
         * stylesheetResource.getRulesByName("ie7stylesheet")
         *    .then(function(rules) {
         *        alert('its here!');
         *    });
         * </pre>
         *
         * @returns {Promise} resourcePromise object containing the rules.
         *
         */
    getRulesByName(name: string): ng.IPromise<IResourcePromise>;


}

/**
    * @ngdoc service
    * @name umbraco.resources.treeResource
    * @description Loads in data for trees
    **/
interface ITreeResource{
    /** Loads in the data to display the nodes menu */
        loadMenu(node: any): void;

         /** Loads in the data to display the nodes for an application */
        loadApplication(options: any): void;

         /** Loads in the data to display the child nodes for a given node */
        loadNodes(options: any): void;
}

/**
    * @ngdoc service
    * @name umbraco.resources.userResource
    **/
interface IUserResource{
     disableUser(userId: number): void;
}
    }





