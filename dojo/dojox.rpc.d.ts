// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="dojo.d.ts" />
declare module dojox {
    
    module rpc {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/rpc/Rest.html
         *
         * This provides a HTTP REST service with full range REST verbs include PUT,POST, and DELETE.
         * A normal GET query is done by using the service directly:
         * 
         * var restService = dojox.rpc.Rest("Project");
         * restService("4");
         * This will do a GET for the URL "/Project/4".
         * 
         * restService.put("4","new content");
         * This will do a PUT to the URL "/Project/4" with the content of "new content".
         * 
         * You can also use the SMD service to generate a REST service:
         * 
         * var services = dojox.rpc.Service({services: {myRestService: {transport: "REST",...
         * services.myRestService("parameters");
         * The modifying methods can be called as sub-methods of the rest service method like:
         * 
         * services.myRestService.put("parameters","data to put in resource");
         * services.myRestService.post("parameters","data to post to the resource");
         * services.myRestService['delete']("parameters");
         * 
         * @param path     
         * @param isJson       Optional    
         * @param schema       Optional    
         * @param getRequest       Optional    
         */
        interface Rest{(path: String, isJson?: boolean, schema?: Object, getRequest?: Function): void}
        module Rest {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/rpc/Rest._index.html
             *
             * 
             */
            interface _index {
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/rpc/Rest._timeStamps.html
             *
             * 
             */
            interface _timeStamps {
            }
        }

        module Client {
        }

        module JsonRPC {
        }

        module ProxiedPath {
        }

        module Service {
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/rpc/OfflineRest.html
         *
         * Makes the REST service be able to store changes in local
         * storage so it can be used offline automatically.
         * 
         */
        interface OfflineRest {
            /**
             * 
             */
            stores: any[];
            /**
             * Adds a store to the monitored store for local storage
             * 
             * @param store Store to add             
             * @param baseQuery               OptionalThis is the base query to should be used to load the items forthe store. Generally you want to load all the items that should beavailable when offline.             
             */
            addStore(store: dojo.data.api.Read, baseQuery: String): void;
            /**
             * 
             */
            downloadChanges(): void;
            /**
             * 
             */
            sendChanges(): void;
            /**
             * 
             */
            sync(): void;
            /**
             * 
             */
            turnOffAutoSync(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/rpc/JsonRest.html
         *
         * 
         */
        interface JsonRest {
            /**
             * 
             */
            conflictDateHeader: string;
            /**
             * 
             */
            schemas: Object;
            /**
             * 
             */
            services: Object;
            /**
             * 
             * @param service             
             * @param id             
             */
            byId(service: any, id: any): any;
            /**
             * adds an object to the list of dirty objects.  This object
             * contains a reference to the object itself as well as a
             * cloned and trimmed version of old object for use with
             * revert.
             * 
             * @param object             
             * @param _deleting             
             */
            changing(object: any, _deleting: any): void;
            /**
             * Saves the dirty data using REST Ajax methods
             * 
             * @param kwArgs             
             */
            commit(kwArgs: any): any[];
            /**
             * deletes an object
             * 
             * @param object object to delete             
             */
            deleteObject(object: any): void;
            /**
             * Fetches a resource by an absolute path/id and returns a dojo.Deferred.
             * 
             * @param absoluteId             
             */
            fetch(absoluteId: any): any;
            /**
             * Creates or gets a constructor for objects from this service
             * 
             * @param service             
             * @param schema             
             */
            getConstructor(service: Function, schema: any): any;
            /**
             * Creates or gets a constructor for objects from this service
             * 
             * @param service             
             * @param schema             
             */
            getConstructor(service: String, schema: any): any;
            /**
             * 
             */
            getDirtyObjects(): any[];
            /**
             * Return the ids attribute used by this service (based on it's schema).
             * Defaults to "id", if not other id is defined
             * 
             * @param service             
             */
            getIdAttribute(service: any): String;
            /**
             * Returns the REST service and the local id for the given absolute id. The result
             * is returned as an object with a service property and an id property
             * 
             * @param absoluteId This is the absolute id of the object             
             */
            getServiceAndId(absoluteId: String): Object;
            /**
             * returns true if the item is marked as dirty or true if there are any dirty items
             * 
             * @param item             
             * @param store             
             */
            isDirty(item: any, store: any): any;
            /**
             * 
             * @param service             
             * @param id             
             * @param args             
             */
            query(service: any, id: any, args: any): any;
            /**
             * Registers a service for as a JsonRest service, mapping it to a path and schema
             * 
             * @param service This is the service to register             
             * @param servicePath This is the path that is used for all the ids for the objects returned by service             
             * @param schema               OptionalThis is a JSON Schema object to associate with objects returned by this service             
             */
            registerService(service: Function, servicePath: String, schema: Object): void;
            /**
             * Reverts all the changes made to JSON/REST data
             * 
             * @param service             
             */
            revert(service: any): void;
            /**
             * 
             * @param actions             
             * @param kwArgs             
             */
            sendToServer(actions: any, kwArgs: any): void;
            /**
             * This provides a HTTP REST service with full range REST verbs include PUT,POST, and DELETE.
             * A normal GET query is done by using the service directly:
             * 
             * var restService = dojox.rpc.Rest("Project");
             * restService("4");
             * This will do a GET for the URL "/Project/4".
             * 
             * restService.put("4","new content");
             * This will do a PUT to the URL "/Project/4" with the content of "new content".
             * 
             * You can also use the SMD service to generate a REST service:
             * 
             * var services = dojox.rpc.Service({services: {myRestService: {transport: "REST",...
             * services.myRestService("parameters");
             * The modifying methods can be called as sub-methods of the rest service method like:
             * 
             * services.myRestService.put("parameters","data to put in resource");
             * services.myRestService.post("parameters","data to post to the resource");
             * services.myRestService['delete']("parameters");
             * 
             * @param path             
             * @param isJson               Optional            
             * @param schema               Optional            
             * @param getRequest               Optional            
             */
            serviceClass(path: String, isJson: boolean, schema: Object, getRequest: Function): Function;
        }
        module JsonRest {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/rpc/JsonRest.services.html
             *
             * 
             */
            interface services {
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/rpc/JsonRest.schemas.html
             *
             * 
             */
            interface schemas {
            }
        }

    }

}
declare module "dojox/rpc/Rest" {
    var exp: dojox.rpc.Rest
    export=exp;
}
declare module "dojox/rpc/Rest._index" {
    var exp: dojox.rpc.Rest._index
    export=exp;
}
declare module "dojox/rpc/Rest._timeStamps" {
    var exp: dojox.rpc.Rest._timeStamps
    export=exp;
}
declare module "dojox/rpc/OfflineRest" {
    var exp: dojox.rpc.OfflineRest
    export=exp;
}
declare module "dojox/rpc/JsonRest" {
    var exp: dojox.rpc.JsonRest
    export=exp;
}
declare module "dojox/rpc/JsonRest.services" {
    var exp: dojox.rpc.JsonRest.services
    export=exp;
}
declare module "dojox/rpc/JsonRest.schemas" {
    var exp: dojox.rpc.JsonRest.schemas
    export=exp;
}
