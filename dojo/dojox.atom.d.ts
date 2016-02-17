// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="dijit.d.ts" />
declare module dojox {
    
    module atom {
        module io {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/atom/io/Connection.html
             *
             * This object implements a transport layer for working with ATOM feeds and ATOM publishing protocols.
             * This object implements a transport layer for working with ATOM feeds and ATOM publishing protocols.
             * Specifically, it provides a mechanism by which feeds can be fetched and entries can be fetched, created
             * deleted, and modified.  It also provides access to the introspection data.
             * 
             * @param sync     
             * @param preventCache     
             */
            class Connection {
                constructor(sync: boolean, preventCache: boolean);
                /**
                 * 
                 */
                "alertsEnabled": boolean;
                /**
                 * 
                 */
                "preventCache": boolean;
                /**
                 * Function to add a new ATOM entry by posting the new entry via APP.
                 * This function takes a specific dojox.atom.io.model.Entry object and pushes the
                 * changes back to the provider of the Entry.
                 * 
                 * @param entry ObjectThe dojox.atom.io.model.Entry object to publish.             
                 * @param url             
                 * @param callback FunctionA function reference that will handle the results from the entry publish.The callback should accept two parameters:   The first is an dojox.atom.io.model.Entry object, and the second is the location of the entryEither can be null, depending on the value of retrieveUpdated.             
                 * @param errorCallback             
                 * @param retrieveEntry booleanA boolean flag denoting if the entry that was created should then beretrieved and returned to the caller via the callback.             
                 * @param scope ObjectThe scope to use for all callbacks.             
                 */
                addEntry(entry: any, url: any, callback: any, errorCallback: any, retrieveEntry: any, scope: any): any;
                /**
                 * Function to delete a specific ATOM entry via APP.
                 * This function takes a specific dojox.atom.io.model.Entry object and calls for a delete on the
                 * service housing the ATOM Entry database.
                 * The entry MUST have a link tag with rel="edit" for this to work.
                 * 
                 * @param entry ObjectThe dojox.atom.io.model.Entry object to delete.             
                 * @param callback FunctionA function reference that will handle the results from the entry delete.The callback is called only if the delete is successful.             
                 * @param errorCallback             
                 * @param xmethod             
                 * @param scope             
                 */
                deleteEntry(entry: any, callback: any, errorCallback: any, xmethod: any, scope: any): any;
                /**
                 * Function to retrieve a single entry from an ATOM feed from the given URL.
                 * This function takes the URL for an ATOM entry and returns the constructed dojox.atom.io.model.Entry object through
                 * the specified callback.
                 * 
                 * @param url StringThe URL of the ATOM Entry document to parse.             
                 * @param callback FunctionA function reference that will handle the Entry object obtained.The callback should accept two parameters, the dojox.atom.io.model.Entry object and the original dom.             
                 * @param errorCallback             
                 * @param scope             
                 */
                getEntry(url: any, callback: any, errorCallback: any, scope: any): any;
                /**
                 * Function to obtain a s specific ATOM feed from a given ATOM Feed url.
                 * This function takes the URL for a specific ATOM feed and returns
                 * the data from that feed to the caller through the use of a callback
                 * handler.
                 * 
                 * @param url The URL of the ATOM feed to fetch.             
                 * @param callback FunctionA function reference that will handle the feed when it has been retrieved.The callback should accept two parameters:  The feed object and the original complete DOM object.             
                 * @param errorCallback             
                 * @param scope The scope to use for all callbacks.             
                 */
                getFeed(url: String, callback: Function, errorCallback: Function, scope: Object): any;
                /**
                 * Function to retrieve an introspection document from the given URL.
                 * This function takes the URL for an ATOM item and feed and returns
                 * the introspection document.
                 * 
                 * @param url StringThe URL of the ATOM document to obtain the introspection document of.             
                 * @param callback FunctionA function reference that will handle the introspection document when it has been retrieved.The callback should accept two parameters:  The introspection document object and the original complete DOM object.             
                 * @param errorCallback             
                 * @param scope             
                 */
                getService(url: any, callback: any, errorCallback: any, scope: any): any;
                /**
                 * Function to update a specific ATOM entry by putting the new changes via APP.
                 * This function takes a specific dojox.atom.io.model.Entry object and pushes the
                 * changes back to the provider of the Entry.
                 * The entry MUST have a link tag with rel="edit" for this to work.
                 * 
                 * @param entry ObjectThe dojox.atom.io.model.Entry object to update.             
                 * @param callback FunctionA function reference that will handle the results from the entry update.The callback should accept two parameters:  The first is an Entry object, and the second is the URL of that EntryEither can be null, depending on the value of retrieveUpdated.             
                 * @param errorCallback             
                 * @param retrieveUpdated booleanA boolean flag denoting if the entry that was updated should then beretrieved and returned to the caller via the callback.             
                 * @param xmethod booleanWhether to use POST for PUT/DELETE items and send the X-Method-Override header.             
                 * @param scope ObjectThe scope to use for all callbacks.             
                 */
                updateEntry(entry: any, callback: any, errorCallback: any, retrieveUpdated: any, xmethod: any, scope: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/atom/io/model.html
             *
             * 
             */
            interface model {
                /**
                 * 
                 */
                util: Object;
                /**
                 * 
                 */
                AtomItem(): void;
                /**
                 * 
                 */
                Category(): void;
                /**
                 * 
                 */
                Collection(): void;
                /**
                 * 
                 */
                Content(): void;
                /**
                 * 
                 */
                Entry(): void;
                /**
                 * 
                 */
                Feed(): void;
                /**
                 * 
                 */
                Generator(): void;
                /**
                 * 
                 */
                Link(): void;
                /**
                 * 
                 */
                Node(): void;
                /**
                 * 
                 */
                Person(): void;
                /**
                 * 
                 */
                Service(): void;
                /**
                 * 
                 */
                Workspace(): void;
            }
            module model {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/atom/io/model.AtomItem.html
                 *
                 * Class container for generic Atom items.
                 * 
                 * @param args     
                 */
                class AtomItem {
                    constructor(args: any);
                    /**
                     * 
                     * @param tag             
                     */
                    accept(tag: any): any;
                    /**
                     * 
                     * @param name             
                     * @param value             
                     */
                    addAttribute(name: any, value: any): void;
                    /**
                     * Function to add in an author to the list of authors.
                     * 
                     * @param name The author's name.             
                     * @param email The author's e-mail address.             
                     * @param uri A URI associated with the author.             
                     */
                    addAuthor(name: String, email: String, uri: String): void;
                    /**
                     * Function to add in a category to the list of categories.
                     * 
                     * @param scheme             
                     * @param term             
                     * @param label             
                     */
                    addCategory(scheme: String, term: String, label: String): void;
                    /**
                     * 
                     * @param content             
                     */
                    addContent(content: any): void;
                    /**
                     * Function to add in an author to the list of authors.
                     * 
                     * @param name The author's name.             
                     * @param email The author's e-mail address.             
                     * @param uri A URI associated with the author.             
                     */
                    addContributor(name: String, email: String, uri: String): void;
                    /**
                     * Function to add in an extension namespace into the item.
                     * 
                     * @param name_space The namespace of the extension.             
                     * @param name The name of the extension             
                     * @param attributes The attributes associated with the extension.             
                     * @param content The content of the extension.             
                     * @param shortNS             
                     */
                    addExtension(name_space: String, name: String, attributes: any[], content: String, shortNS: String): void;
                    /**
                     * Function to add in a link to the list of links.
                     * 
                     * @param href             
                     * @param rel             
                     * @param hrefLang             
                     * @param title A title to associate with the link.             
                     * @param type The type of link is is.             
                     */
                    addLink(href: String, rel: String, hrefLang: String, title: String, type: String): void;
                    /**
                     * 
                     * @param fullName             
                     * @param shortName             
                     */
                    addNamespace(fullName: any, shortName: any): void;
                    /**
                     * 
                     * @param node             
                     */
                    buildFromDom(node: any): void;
                    /**
                     * 
                     */
                    destroy(): void;
                    /**
                     * 
                     * @param name             
                     */
                    getAttribute(name: any): any;
                    /**
                     * Function to get all categories that match a particular scheme.
                     * 
                     * @param scheme The scheme to filter on.             
                     */
                    getCategories(scheme: String): any;
                    /**
                     * Function to get extensions that match a namespace and name.
                     * 
                     * @param name_space The namespace of the extension.             
                     * @param name The name of the extension             
                     */
                    getExtensions(name_space: String, name: String): any[];
                    /**
                     * Function to remove all basic links from the list of links.
                     * 
                     */
                    removeBasicLinks(): number;
                    /**
                     * Function to remove all categories that match a particular scheme and term.
                     * 
                     * @param scheme The scheme to filter on.             
                     * @param term The term to filter on.             
                     */
                    removeCategories(scheme: String, term: String): number;
                    /**
                     * Function to remove extensions that match a namespace and name.
                     * 
                     * @param name_space The namespace of the extension.             
                     * @param name The name of the extension             
                     */
                    removeExtensions(name_space: String, name: String): void;
                    /**
                     * Function to remove a link from the list of links.
                     * 
                     * @param href The href.             
                     * @param rel             
                     */
                    removeLink(href: String, rel: String): number;
                    /**
                     * Function to set the title of the item.
                     * 
                     * @param str The title to set.             
                     * @param type The type of title format, text, xml, xhtml, etc.             
                     */
                    setTitle(str: String, type: String): void;
                    /**
                     * 
                     */
                    toString(): any;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/atom/io/model.Category.html
                 *
                 * Class container for 'Category' types.
                 * 
                 * @param scheme     
                 * @param term     
                 * @param label     
                 */
                class Category {
                    constructor(scheme: String, term: String, label: String);
                    /**
                     * 
                     * @param name             
                     * @param value             
                     */
                    addAttribute(name: any, value: any): void;
                    /**
                     * 
                     * @param content             
                     */
                    addContent(content: any): void;
                    /**
                     * Function to do construction of the Category data from the DOM node containing it.
                     * 
                     * @param node The DOM node to process for content.             
                     */
                    buildFromDom(node: HTMLElement): void;
                    /**
                     * 
                     * @param name             
                     */
                    getAttribute(name: any): any;
                    /**
                     * Function to construct string form of the category tag, which is an XML structure.
                     * 
                     */
                    toString(): any;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/atom/io/model.Collection.html
                 *
                 * Class container for 'Collection' types.
                 * 
                 * @param href     
                 * @param title     
                 */
                class Collection {
                    constructor(href: any, title: any);
                    /**
                     * 
                     * @param tag             
                     */
                    accept(tag: any): any;
                    /**
                     * 
                     * @param name             
                     * @param value             
                     */
                    addAttribute(name: any, value: any): void;
                    /**
                     * Function to add in an author to the list of authors.
                     * 
                     * @param name The author's name.             
                     * @param email The author's e-mail address.             
                     * @param uri A URI associated with the author.             
                     */
                    addAuthor(name: String, email: String, uri: String): void;
                    /**
                     * Function to add in a category to the list of categories.
                     * 
                     * @param scheme             
                     * @param term             
                     * @param label             
                     */
                    addCategory(scheme: String, term: String, label: String): void;
                    /**
                     * 
                     * @param content             
                     */
                    addContent(content: any): void;
                    /**
                     * Function to add in an author to the list of authors.
                     * 
                     * @param name The author's name.             
                     * @param email The author's e-mail address.             
                     * @param uri A URI associated with the author.             
                     */
                    addContributor(name: String, email: String, uri: String): void;
                    /**
                     * Function to add in an extension namespace into the item.
                     * 
                     * @param name_space The namespace of the extension.             
                     * @param name The name of the extension             
                     * @param attributes The attributes associated with the extension.             
                     * @param content The content of the extension.             
                     * @param shortNS             
                     */
                    addExtension(name_space: String, name: String, attributes: any[], content: String, shortNS: String): void;
                    /**
                     * Function to add in a link to the list of links.
                     * 
                     * @param href             
                     * @param rel             
                     * @param hrefLang             
                     * @param title A title to associate with the link.             
                     * @param type The type of link is is.             
                     */
                    addLink(href: String, rel: String, hrefLang: String, title: String, type: String): void;
                    /**
                     * 
                     * @param fullName             
                     * @param shortName             
                     */
                    addNamespace(fullName: any, shortName: any): void;
                    /**
                     * Function to do construction of the Collection data from the DOM node containing it.
                     * 
                     * @param node The DOM node to process for content.             
                     */
                    buildFromDom(node: HTMLElement): void;
                    /**
                     * 
                     */
                    destroy(): void;
                    /**
                     * 
                     * @param name             
                     */
                    getAttribute(name: any): any;
                    /**
                     * Function to get all categories that match a particular scheme.
                     * 
                     * @param scheme The scheme to filter on.             
                     */
                    getCategories(scheme: String): any;
                    /**
                     * Function to get extensions that match a namespace and name.
                     * 
                     * @param name_space The namespace of the extension.             
                     * @param name The name of the extension             
                     */
                    getExtensions(name_space: String, name: String): any[];
                    /**
                     * Function to remove all basic links from the list of links.
                     * 
                     */
                    removeBasicLinks(): number;
                    /**
                     * Function to remove all categories that match a particular scheme and term.
                     * 
                     * @param scheme The scheme to filter on.             
                     * @param term The term to filter on.             
                     */
                    removeCategories(scheme: String, term: String): number;
                    /**
                     * Function to remove extensions that match a namespace and name.
                     * 
                     * @param name_space The namespace of the extension.             
                     * @param name The name of the extension             
                     */
                    removeExtensions(name_space: String, name: String): void;
                    /**
                     * Function to remove a link from the list of links.
                     * 
                     * @param href The href.             
                     * @param rel             
                     */
                    removeLink(href: String, rel: String): number;
                    /**
                     * Function to set the title of the item.
                     * 
                     * @param str The title to set.             
                     * @param type The type of title format, text, xml, xhtml, etc.             
                     */
                    setTitle(str: String, type: String): void;
                    /**
                     * 
                     */
                    toString(): any;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/atom/io/model.Content.html
                 *
                 * Class container for 'Content' types. Such as summary, content, username, and so on types of data.
                 * 
                 * @param tagName     
                 * @param value     
                 * @param src     
                 * @param type     
                 * @param xmlLang     
                 */
                class Content {
                    constructor(tagName: any, value: any, src: any, type: any, xmlLang: any);
                    /**
                     * 
                     * @param name             
                     * @param value             
                     */
                    addAttribute(name: any, value: any): void;
                    /**
                     * 
                     * @param content             
                     */
                    addContent(content: any): void;
                    /**
                     * Function to do construction of the Content data from the DOM node containing it.
                     * 
                     * @param node The DOM node to process for content.             
                     */
                    buildFromDom(node: HTMLElement): void;
                    /**
                     * 
                     * @param name             
                     */
                    getAttribute(name: any): any;
                    /**
                     * Function to construct string form of the content tag, which is an XML structure.
                     * 
                     */
                    toString(): any;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/atom/io/model.Entry.html
                 *
                 * Class container for 'Entry' types.
                 * 
                 * @param id     
                 */
                class Entry {
                    constructor(id: String);
                    /**
                     * 
                     * @param tag             
                     */
                    accept(tag: any): any;
                    /**
                     * 
                     * @param name             
                     * @param value             
                     */
                    addAttribute(name: any, value: any): void;
                    /**
                     * Function to add in an author to the list of authors.
                     * 
                     * @param name The author's name.             
                     * @param email The author's e-mail address.             
                     * @param uri A URI associated with the author.             
                     */
                    addAuthor(name: String, email: String, uri: String): void;
                    /**
                     * Function to add in a category to the list of categories.
                     * 
                     * @param scheme             
                     * @param term             
                     * @param label             
                     */
                    addCategory(scheme: String, term: String, label: String): void;
                    /**
                     * 
                     * @param content             
                     */
                    addContent(content: any): void;
                    /**
                     * Function to add in an author to the list of authors.
                     * 
                     * @param name The author's name.             
                     * @param email The author's e-mail address.             
                     * @param uri A URI associated with the author.             
                     */
                    addContributor(name: String, email: String, uri: String): void;
                    /**
                     * Function to add in an extension namespace into the item.
                     * 
                     * @param name_space The namespace of the extension.             
                     * @param name The name of the extension             
                     * @param attributes The attributes associated with the extension.             
                     * @param content The content of the extension.             
                     * @param shortNS             
                     */
                    addExtension(name_space: String, name: String, attributes: any[], content: String, shortNS: String): void;
                    /**
                     * Function to add in a link to the list of links.
                     * 
                     * @param href             
                     * @param rel             
                     * @param hrefLang             
                     * @param title A title to associate with the link.             
                     * @param type The type of link is is.             
                     */
                    addLink(href: String, rel: String, hrefLang: String, title: String, type: String): void;
                    /**
                     * 
                     * @param fullName             
                     * @param shortName             
                     */
                    addNamespace(fullName: any, shortName: any): void;
                    /**
                     * 
                     * @param node             
                     */
                    buildFromDom(node: any): void;
                    /**
                     * 
                     */
                    destroy(): void;
                    /**
                     * 
                     * @param name             
                     */
                    getAttribute(name: any): any;
                    /**
                     * Function to get all categories that match a particular scheme.
                     * 
                     * @param scheme The scheme to filter on.             
                     */
                    getCategories(scheme: String): any;
                    /**
                     * Function to get the href that allows editing of this feed entry.
                     * 
                     */
                    getEditHref(): any;
                    /**
                     * Function to get extensions that match a namespace and name.
                     * 
                     * @param name_space The namespace of the extension.             
                     * @param name The name of the extension             
                     */
                    getExtensions(name_space: String, name: String): any[];
                    /**
                     * Function to remove all basic links from the list of links.
                     * 
                     */
                    removeBasicLinks(): number;
                    /**
                     * Function to remove all categories that match a particular scheme and term.
                     * 
                     * @param scheme The scheme to filter on.             
                     * @param term The term to filter on.             
                     */
                    removeCategories(scheme: String, term: String): number;
                    /**
                     * Function to remove extensions that match a namespace and name.
                     * 
                     * @param name_space The namespace of the extension.             
                     * @param name The name of the extension             
                     */
                    removeExtensions(name_space: String, name: String): void;
                    /**
                     * Function to remove a link from the list of links.
                     * 
                     * @param href The href.             
                     * @param rel             
                     */
                    removeLink(href: String, rel: String): number;
                    /**
                     * 
                     * @param url             
                     */
                    setEditHref(url: any): void;
                    /**
                     * Function to set the title of the item.
                     * 
                     * @param str The title to set.             
                     * @param type The type of title format, text, xml, xhtml, etc.             
                     */
                    setTitle(str: String, type: String): void;
                    /**
                     * Function to construct string form of the entry tag, which is an XML structure.
                     * 
                     * @param amPrimary             
                     */
                    toString(amPrimary: any): any;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/atom/io/model.Generator.html
                 *
                 * Class container for 'Generator' types.
                 * 
                 * @param uri     
                 * @param version     
                 * @param value     
                 */
                class Generator {
                    constructor(uri: String, version: String, value: String);
                    /**
                     * 
                     * @param name             
                     * @param value             
                     */
                    addAttribute(name: any, value: any): void;
                    /**
                     * 
                     * @param content             
                     */
                    addContent(content: any): void;
                    /**
                     * Function to do construction of the generator data from the DOM node containing it.
                     * 
                     * @param node The DOM node to process for link data.             
                     */
                    buildFromDom(node: any): void;
                    /**
                     * 
                     * @param name             
                     */
                    getAttribute(name: any): any;
                    /**
                     * Function to construct string form of the Generator tag, which is an XML structure.
                     * 
                     */
                    toString(): any;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/atom/io/model.Feed.html
                 *
                 * Class container for 'Feed' types.
                 * 
                 * @param args     
                 */
                class Feed {
                    constructor(args: any);
                    /**
                     * 
                     * @param tag             
                     */
                    accept(tag: any): any;
                    /**
                     * 
                     * @param name             
                     * @param value             
                     */
                    addAttribute(name: any, value: any): void;
                    /**
                     * Function to add in an author to the list of authors.
                     * 
                     * @param name The author's name.             
                     * @param email The author's e-mail address.             
                     * @param uri A URI associated with the author.             
                     */
                    addAuthor(name: String, email: String, uri: String): void;
                    /**
                     * Function to add in a category to the list of categories.
                     * 
                     * @param scheme             
                     * @param term             
                     * @param label             
                     */
                    addCategory(scheme: String, term: String, label: String): void;
                    /**
                     * 
                     * @param content             
                     */
                    addContent(content: any): void;
                    /**
                     * Function to add in an author to the list of authors.
                     * 
                     * @param name The author's name.             
                     * @param email The author's e-mail address.             
                     * @param uri A URI associated with the author.             
                     */
                    addContributor(name: String, email: String, uri: String): void;
                    /**
                     * Function to add an entry to this feed.
                     * 
                     * @param entry The entry object to add.             
                     */
                    addEntry(entry: Object): void;
                    /**
                     * Function to add in an extension namespace into the item.
                     * 
                     * @param name_space The namespace of the extension.             
                     * @param name The name of the extension             
                     * @param attributes The attributes associated with the extension.             
                     * @param content The content of the extension.             
                     * @param shortNS             
                     */
                    addExtension(name_space: String, name: String, attributes: any[], content: String, shortNS: String): void;
                    /**
                     * Function to add in a link to the list of links.
                     * 
                     * @param href             
                     * @param rel             
                     * @param hrefLang             
                     * @param title A title to associate with the link.             
                     * @param type The type of link is is.             
                     */
                    addLink(href: String, rel: String, hrefLang: String, title: String, type: String): void;
                    /**
                     * 
                     * @param fullName             
                     * @param shortName             
                     */
                    addNamespace(fullName: any, shortName: any): void;
                    /**
                     * 
                     * @param node             
                     */
                    buildFromDom(node: any): void;
                    /**
                     * Function to Create a new entry object in the feed.
                     * 
                     */
                    createEntry(): any;
                    /**
                     * 
                     */
                    destroy(): void;
                    /**
                     * 
                     * @param name             
                     */
                    getAttribute(name: any): any;
                    /**
                     * Function to get all categories that match a particular scheme.
                     * 
                     * @param scheme The scheme to filter on.             
                     */
                    getCategories(scheme: String): any;
                    /**
                     * Function to get an entry by its id.
                     * 
                     * @param entryId             
                     */
                    getEntry(entryId: String): any;
                    /**
                     * Function to get extensions that match a namespace and name.
                     * 
                     * @param name_space The namespace of the extension.             
                     * @param name The name of the extension             
                     */
                    getExtensions(name_space: String, name: String): any[];
                    /**
                     * Function to get the first entry of the feed.
                     * 
                     */
                    getFirstEntry(): any;
                    /**
                     * Function to get the href that refers to this feed.
                     * 
                     */
                    getSelfHref(): any;
                    /**
                     * Function to remove all basic links from the list of links.
                     * 
                     */
                    removeBasicLinks(): number;
                    /**
                     * Function to remove all categories that match a particular scheme and term.
                     * 
                     * @param scheme The scheme to filter on.             
                     * @param term The term to filter on.             
                     */
                    removeCategories(scheme: String, term: String): number;
                    /**
                     * Function to remove an entry from the list of links.
                     * 
                     * @param entry The entry.             
                     */
                    removeEntry(entry: Object): number;
                    /**
                     * Function to remove extensions that match a namespace and name.
                     * 
                     * @param name_space The namespace of the extension.             
                     * @param name The name of the extension             
                     */
                    removeExtensions(name_space: String, name: String): void;
                    /**
                     * Function to remove a link from the list of links.
                     * 
                     * @param href The href.             
                     * @param rel             
                     */
                    removeLink(href: String, rel: String): number;
                    /**
                     * Function to add a set of entries to the feed.
                     * 
                     * @param arrayOfEntry An array of entry objects to add to the feed.             
                     */
                    setEntries(arrayOfEntry: any[]): void;
                    /**
                     * Function to set the title of the item.
                     * 
                     * @param str The title to set.             
                     * @param type The type of title format, text, xml, xhtml, etc.             
                     */
                    setTitle(str: String, type: String): void;
                    /**
                     * Function to construct string form of the feed tag, which is an XML structure.
                     * 
                     */
                    toString(): any;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/atom/io/model.Link.html
                 *
                 * Class container for 'link' types.
                 * 
                 * @param href     
                 * @param rel     
                 * @param hrefLang     
                 * @param title     
                 * @param type     
                 */
                class Link {
                    constructor(href: any, rel: any, hrefLang: any, title: any, type: any);
                    /**
                     * 
                     * @param name             
                     * @param value             
                     */
                    addAttribute(name: any, value: any): void;
                    /**
                     * 
                     * @param content             
                     */
                    addContent(content: any): void;
                    /**
                     * Function to do construction of the link data from the DOM node containing it.
                     * 
                     * @param node The DOM node to process for link data.             
                     */
                    buildFromDom(node: any): void;
                    /**
                     * 
                     * @param name             
                     */
                    getAttribute(name: any): any;
                    /**
                     * Function to construct string form of the link tag, which is an XML structure.
                     * 
                     */
                    toString(): any;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/atom/io/model.Node.html
                 *
                 * 
                 * @param name_space     
                 * @param name     
                 * @param attributes     
                 * @param content     
                 * @param shortNs     
                 */
                class Node {
                    constructor(name_space: any, name: any, attributes: any, content: any, shortNs: any);
                    /**
                     * 
                     * @param name             
                     * @param value             
                     */
                    addAttribute(name: any, value: any): void;
                    /**
                     * 
                     * @param content             
                     */
                    addContent(content: any): void;
                    /**
                     * 
                     * @param node             
                     */
                    buildFromDom(node: any): void;
                    /**
                     * 
                     * @param name             
                     */
                    getAttribute(name: any): any;
                    /**
                     * 
                     */
                    toString(): any;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/atom/io/model.Person.html
                 *
                 * Class container for 'person' types, such as Author, contributors, and so on.
                 * 
                 * @param personType     
                 * @param name     
                 * @param email     
                 * @param uri     
                 */
                class Person {
                    constructor(personType: any, name: any, email: any, uri: any);
                    /**
                     * 
                     * @param tag             
                     */
                    accept(tag: any): any;
                    /**
                     * 
                     * @param name             
                     * @param value             
                     */
                    addAttribute(name: any, value: any): void;
                    /**
                     * 
                     * @param content             
                     */
                    addContent(content: any): void;
                    /**
                     * Function to do construction of the person data from the DOM node containing it.
                     * 
                     * @param node The DOM node to process for person data.             
                     */
                    buildFromDom(node: any): void;
                    /**
                     * 
                     * @param name             
                     */
                    getAttribute(name: any): any;
                    /**
                     * Function to construct string form of the Person tag, which is an XML structure.
                     * 
                     */
                    toString(): any;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/atom/io/model.Service.html
                 *
                 * Class container for 'Feed' types.
                 * 
                 * @param href     
                 */
                class Service {
                    constructor(href: any);
                    /**
                     * 
                     * @param tag             
                     */
                    accept(tag: any): any;
                    /**
                     * 
                     * @param name             
                     * @param value             
                     */
                    addAttribute(name: any, value: any): void;
                    /**
                     * Function to add in an author to the list of authors.
                     * 
                     * @param name The author's name.             
                     * @param email The author's e-mail address.             
                     * @param uri A URI associated with the author.             
                     */
                    addAuthor(name: String, email: String, uri: String): void;
                    /**
                     * Function to add in a category to the list of categories.
                     * 
                     * @param scheme             
                     * @param term             
                     * @param label             
                     */
                    addCategory(scheme: String, term: String, label: String): void;
                    /**
                     * 
                     * @param content             
                     */
                    addContent(content: any): void;
                    /**
                     * Function to add in an author to the list of authors.
                     * 
                     * @param name The author's name.             
                     * @param email The author's e-mail address.             
                     * @param uri A URI associated with the author.             
                     */
                    addContributor(name: String, email: String, uri: String): void;
                    /**
                     * Function to add in an extension namespace into the item.
                     * 
                     * @param name_space The namespace of the extension.             
                     * @param name The name of the extension             
                     * @param attributes The attributes associated with the extension.             
                     * @param content The content of the extension.             
                     * @param shortNS             
                     */
                    addExtension(name_space: String, name: String, attributes: any[], content: String, shortNS: String): void;
                    /**
                     * Function to add in a link to the list of links.
                     * 
                     * @param href             
                     * @param rel             
                     * @param hrefLang             
                     * @param title A title to associate with the link.             
                     * @param type The type of link is is.             
                     */
                    addLink(href: String, rel: String, hrefLang: String, title: String, type: String): void;
                    /**
                     * 
                     * @param fullName             
                     * @param shortName             
                     */
                    addNamespace(fullName: any, shortName: any): void;
                    /**
                     * Function to do construction of the Service data from the DOM node containing it.
                     * 
                     * @param node The DOM node to process for content.             
                     */
                    buildFromDom(node: HTMLElement): void;
                    /**
                     * 
                     */
                    destroy(): void;
                    /**
                     * 
                     * @param name             
                     */
                    getAttribute(name: any): any;
                    /**
                     * Function to get all categories that match a particular scheme.
                     * 
                     * @param scheme The scheme to filter on.             
                     */
                    getCategories(scheme: String): any;
                    /**
                     * Function to collections that match a specific url.
                     * 
                     * @param url e URL to match collections against.             
                     */
                    getCollection(url: String): any;
                    /**
                     * Function to get extensions that match a namespace and name.
                     * 
                     * @param name_space The namespace of the extension.             
                     * @param name The name of the extension             
                     */
                    getExtensions(name_space: String, name: String): any[];
                    /**
                     * Function to remove all basic links from the list of links.
                     * 
                     */
                    removeBasicLinks(): number;
                    /**
                     * Function to remove all categories that match a particular scheme and term.
                     * 
                     * @param scheme The scheme to filter on.             
                     * @param term The term to filter on.             
                     */
                    removeCategories(scheme: String, term: String): number;
                    /**
                     * Function to remove extensions that match a namespace and name.
                     * 
                     * @param name_space The namespace of the extension.             
                     * @param name The name of the extension             
                     */
                    removeExtensions(name_space: String, name: String): void;
                    /**
                     * Function to remove a link from the list of links.
                     * 
                     * @param href The href.             
                     * @param rel             
                     */
                    removeLink(href: String, rel: String): number;
                    /**
                     * Function to set the title of the item.
                     * 
                     * @param str The title to set.             
                     * @param type The type of title format, text, xml, xhtml, etc.             
                     */
                    setTitle(str: String, type: String): void;
                    /**
                     * 
                     */
                    toString(): any;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/atom/io/model.Workspace.html
                 *
                 * Class container for 'Workspace' types.
                 * 
                 * @param title     
                 */
                class Workspace {
                    constructor(title: any);
                    /**
                     * 
                     * @param tag             
                     */
                    accept(tag: any): any;
                    /**
                     * 
                     * @param name             
                     * @param value             
                     */
                    addAttribute(name: any, value: any): void;
                    /**
                     * Function to add in an author to the list of authors.
                     * 
                     * @param name The author's name.             
                     * @param email The author's e-mail address.             
                     * @param uri A URI associated with the author.             
                     */
                    addAuthor(name: String, email: String, uri: String): void;
                    /**
                     * Function to add in a category to the list of categories.
                     * 
                     * @param scheme             
                     * @param term             
                     * @param label             
                     */
                    addCategory(scheme: String, term: String, label: String): void;
                    /**
                     * 
                     * @param content             
                     */
                    addContent(content: any): void;
                    /**
                     * Function to add in an author to the list of authors.
                     * 
                     * @param name The author's name.             
                     * @param email The author's e-mail address.             
                     * @param uri A URI associated with the author.             
                     */
                    addContributor(name: String, email: String, uri: String): void;
                    /**
                     * Function to add in an extension namespace into the item.
                     * 
                     * @param name_space The namespace of the extension.             
                     * @param name The name of the extension             
                     * @param attributes The attributes associated with the extension.             
                     * @param content The content of the extension.             
                     * @param shortNS             
                     */
                    addExtension(name_space: String, name: String, attributes: any[], content: String, shortNS: String): void;
                    /**
                     * Function to add in a link to the list of links.
                     * 
                     * @param href             
                     * @param rel             
                     * @param hrefLang             
                     * @param title A title to associate with the link.             
                     * @param type The type of link is is.             
                     */
                    addLink(href: String, rel: String, hrefLang: String, title: String, type: String): void;
                    /**
                     * 
                     * @param fullName             
                     * @param shortName             
                     */
                    addNamespace(fullName: any, shortName: any): void;
                    /**
                     * Function to do construction of the Workspace data from the DOM node containing it.
                     * 
                     * @param node The DOM node to process for content.             
                     */
                    buildFromDom(node: HTMLElement): void;
                    /**
                     * 
                     */
                    destroy(): void;
                    /**
                     * 
                     * @param name             
                     */
                    getAttribute(name: any): any;
                    /**
                     * Function to get all categories that match a particular scheme.
                     * 
                     * @param scheme The scheme to filter on.             
                     */
                    getCategories(scheme: String): any;
                    /**
                     * Function to get extensions that match a namespace and name.
                     * 
                     * @param name_space The namespace of the extension.             
                     * @param name The name of the extension             
                     */
                    getExtensions(name_space: String, name: String): any[];
                    /**
                     * Function to remove all basic links from the list of links.
                     * 
                     */
                    removeBasicLinks(): number;
                    /**
                     * Function to remove all categories that match a particular scheme and term.
                     * 
                     * @param scheme The scheme to filter on.             
                     * @param term The term to filter on.             
                     */
                    removeCategories(scheme: String, term: String): number;
                    /**
                     * Function to remove extensions that match a namespace and name.
                     * 
                     * @param name_space The namespace of the extension.             
                     * @param name The name of the extension             
                     */
                    removeExtensions(name_space: String, name: String): void;
                    /**
                     * Function to remove a link from the list of links.
                     * 
                     * @param href The href.             
                     * @param rel             
                     */
                    removeLink(href: String, rel: String): number;
                    /**
                     * Function to set the title of the item.
                     * 
                     * @param str The title to set.             
                     * @param type The type of title format, text, xml, xhtml, etc.             
                     */
                    setTitle(str: String, type: String): void;
                    /**
                     * 
                     */
                    toString(): any;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/atom/io/model._actions.html
                 *
                 * Container for tag handling functions.
                 * Container for tag handling functions.  Each child of this container is
                 * a handler function for the given type of node. Each accepts two parameters:
                 * 
                 */
                interface _actions {
                    /**
                     * The dom node containing the data
                     * 
                     */
                    node: Object;
                    /**
                     * The object to insert data into.
                     * 
                     */
                    obj: Object;
                    /**
                     * 
                     * @param obj             
                     * @param node             
                     */
                    author(obj: any, node: any): void;
                    /**
                     * 
                     * @param obj             
                     * @param node             
                     */
                    category(obj: any, node: any): void;
                    /**
                     * 
                     * @param obj             
                     * @param node             
                     */
                    content(obj: any, node: any): void;
                    /**
                     * 
                     * @param obj             
                     * @param node             
                     */
                    contributor(obj: any, node: any): void;
                    /**
                     * 
                     * @param obj             
                     * @param node             
                     */
                    email(obj: any, node: any): void;
                    /**
                     * 
                     * @param obj             
                     * @param node             
                     */
                    entry(obj: any, node: any): void;
                    /**
                     * 
                     * @param obj             
                     * @param node             
                     */
                    generator(obj: any, node: any): void;
                    /**
                     * 
                     * @param obj             
                     * @param node             
                     */
                    icon(obj: any, node: any): void;
                    /**
                     * 
                     * @param obj             
                     * @param node             
                     */
                    id(obj: any, node: any): void;
                    /**
                     * 
                     * @param obj             
                     * @param node             
                     */
                    issued(obj: any, node: any): void;
                    /**
                     * 
                     * @param obj             
                     * @param node             
                     */
                    link(obj: any, node: any): void;
                    /**
                     * 
                     * @param obj             
                     * @param node             
                     */
                    modified(obj: any, node: any): void;
                    /**
                     * 
                     * @param obj             
                     * @param node             
                     */
                    name(obj: any, node: any): void;
                    /**
                     * 
                     * @param obj             
                     * @param node             
                     */
                    published(obj: any, node: any): void;
                    /**
                     * 
                     * @param obj             
                     * @param node             
                     */
                    rights(obj: any, node: any): void;
                    /**
                     * 
                     * @param obj             
                     * @param node             
                     */
                    subtitle(obj: any, node: any): void;
                    /**
                     * 
                     * @param obj             
                     * @param node             
                     */
                    summary(obj: any, node: any): void;
                    /**
                     * 
                     * @param obj             
                     * @param node             
                     */
                    title(obj: any, node: any): void;
                    /**
                     * 
                     * @param obj             
                     * @param node             
                     */
                    updated(obj: any, node: any): void;
                    /**
                     * 
                     * @param obj             
                     * @param node             
                     */
                    uri(obj: any, node: any): void;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/atom/io/model._Constants.html
                 *
                 * Container for general constants.
                 * 
                 */
                interface _Constants {
                    /**
                     * 
                     */
                    APP_NS: string;
                    /**
                     * 
                     */
                    ATOM_NS: string;
                    /**
                     * 
                     */
                    ATOM_URI: string;
                    /**
                     * 
                     */
                    PURL_NS: string;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/atom/io/model.util.html
                 *
                 * 
                 */
                interface util {
                    /**
                     * Utility function to create a date from a DOM node's text content.
                     * 
                     * @param node The DOM node to inspect.             
                     */
                    createDate(node: HTMLElement): any;
                    /**
                     * Utility function to escape XML special characters in an HTML string.
                     * 
                     * @param str The string to escape             
                     */
                    escapeHtml(str: String): any;
                    /**
                     * Utility function to get a node name and deal with IE's bad handling of namespaces
                     * on tag names.
                     * 
                     * @param node The DOM node whose name to retrieve.             
                     */
                    getNodename(node: HTMLElement): String;
                    /**
                     * Utility function to un-escape XML special characters in an HTML string.
                     * 
                     * @param str The string to un-escape.             
                     */
                    unEscapeHtml(str: String): any;
                }
            }

        }

        module widget {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/atom/widget/FeedEntryEditor.html
             *
             * An ATOM feed entry editor that allows viewing of the individual attributes of an entry.
             * 
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
             */
            class FeedEntryEditor extends dojox.atom.widget.FeedEntryViewer {
                constructor(params?: Object, srcNodeRef?: HTMLElement);
                /**
                 * Object to which attach points and events will be scoped.  Defaults
                 * to 'this'.
                 * 
                 */
                "attachScope": Object;
                set(property:"attachScope", value: Object): void;
                get(property:"attachScope"): Object;
                watch(property:"attachScope", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * Deprecated. Instead of attributeMap, widget should have a _setXXXAttr attribute
                 * for each XXX attribute to be mapped to the DOM.
                 * 
                 * attributeMap sets up a "binding" between attributes (aka properties)
                 * of the widget and the widget's DOM.
                 * Changes to widget attributes listed in attributeMap will be
                 * reflected into the DOM.
                 * 
                 * For example, calling set('title', 'hello')
                 * on a TitlePane will automatically cause the TitlePane's DOM to update
                 * with the new title.
                 * 
                 * attributeMap is a hash where the key is an attribute of the widget,
                 * and the value reflects a binding to a:
                 * 
                 * DOM node attribute
                 *   focus: {node: "focusNode", type: "attribute"}
                 * Maps this.focus to this.focusNode.focus
                 * 
                 * DOM node innerHTML
                 *   title: { node: "titleNode", type: "innerHTML" }
                 * Maps this.title to this.titleNode.innerHTML
                 * 
                 * DOM node innerText
                 *   title: { node: "titleNode", type: "innerText" }
                 * Maps this.title to this.titleNode.innerText
                 * 
                 * DOM node CSS class
                 *   myClass: { node: "domNode", type: "class" }
                 * Maps this.myClass to this.domNode.className
                 * 
                 * If the value is an array, then each element in the array matches one of the
                 * formats of the above list.
                 * 
                 * There are also some shorthands for backwards compatibility:
                 * 
                 * string --> { node: string, type: "attribute" }, for example:
                 * "focusNode" ---> { node: "focusNode", type: "attribute" }
                 * "" --> { node: "domNode", type: "attribute" }
                 * 
                 */
                "attributeMap": Object;
                set(property:"attributeMap", value: Object): void;
                get(property:"attributeMap"): Object;
                watch(property:"attributeMap", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * Root CSS class of the widget (ex: dijitTextBox), used to construct CSS classes to indicate
                 * widget state.
                 * 
                 */
                "baseClass": string;
                set(property:"baseClass", value: string): void;
                get(property:"baseClass"): string;
                watch(property:"baseClass", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * 
                 */
                "class": string;
                set(property:"class", value: string): void;
                get(property:"class"): string;
                watch(property:"class", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * Designates where children of the source DOM node will be placed.
                 * "Children" in this case refers to both DOM nodes and widgets.
                 * For example, for myWidget:
                 * 
                 * <div data-dojo-type=myWidget>
                 *     <b> here's a plain DOM node
                 *     <span data-dojo-type=subWidget>and a widget</span>
                 *     <i> and another plain DOM node </i>
                 * </div>
                 * containerNode would point to:
                 * 
                 * <b> here's a plain DOM node
                 * <span data-dojo-type=subWidget>and a widget</span>
                 * <i> and another plain DOM node </i>
                 * In templated widgets, "containerNode" is set via a
                 * data-dojo-attach-point assignment.
                 * 
                 * containerNode must be defined for any widget that accepts innerHTML
                 * (like ContentPane or BorderContainer or even Button), and conversely
                 * is null for widgets that don't, like TextBox.
                 * 
                 */
                "containerNode": HTMLElement;
                set(property:"containerNode", value: HTMLElement): void;
                get(property:"containerNode"): HTMLElement;
                watch(property:"containerNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                /**
                 * Used to provide a context require to the dojo/parser in order to be
                 * able to use relative MIDs (e.g. ./Widget) in the widget's template.
                 * 
                 */
                "contextRequire": Function;
                set(property:"contextRequire", value: Function): void;
                get(property:"contextRequire"): Function;
                watch(property:"contextRequire", callback:{(property?:string, oldValue?:Function, newValue?: Function):void}) :{unwatch():void}
                /**
                 * Bi-directional support, as defined by the HTML DIR
                 * attribute. Either left-to-right "ltr" or right-to-left "rtl".  If undefined, widgets renders in page's
                 * default direction.
                 * 
                 */
                "dir": string;
                set(property:"dir", value: string): void;
                get(property:"dir"): string;
                watch(property:"dir", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * 
                 */
                "displayEntrySections": string;
                set(property:"displayEntrySections", value: string): void;
                get(property:"displayEntrySections"): string;
                watch(property:"displayEntrySections", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * This is our visible representation of the widget! Other DOM
                 * Nodes may by assigned to other properties, usually through the
                 * template system's data-dojo-attach-point syntax, but the domNode
                 * property is the canonical "top level" node in widget UI.
                 * 
                 */
                "domNode": HTMLElement;
                set(property:"domNode", value: HTMLElement): void;
                get(property:"domNode"): HTMLElement;
                watch(property:"domNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                /**
                 * 
                 */
                "enableEdit": boolean;
                set(property:"enableEdit", value: boolean): void;
                get(property:"enableEdit"): boolean;
                watch(property:"enableEdit", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * 
                 */
                "enableMenu": boolean;
                set(property:"enableMenu", value: boolean): void;
                get(property:"enableMenu"): boolean;
                watch(property:"enableMenu", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * 
                 */
                "enableMenuFade": boolean;
                set(property:"enableMenuFade", value: boolean): void;
                get(property:"enableMenuFade"): boolean;
                watch(property:"enableMenuFade", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * 
                 */
                "entryNewButton": Object;
                set(property:"entryNewButton", value: Object): void;
                get(property:"entryNewButton"): Object;
                watch(property:"entryNewButton", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * 
                 */
                "entrySelectionTopic": string;
                set(property:"entrySelectionTopic", value: string): void;
                get(property:"entrySelectionTopic"): string;
                watch(property:"entrySelectionTopic", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * This widget or a widget it contains has focus, or is "active" because
                 * it was recently clicked.
                 * 
                 */
                "focused": boolean;
                set(property:"focused", value: boolean): void;
                get(property:"focused"): boolean;
                watch(property:"focused", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * A unique, opaque ID string that can be assigned by users or by the
                 * system. If the developer passes an ID which is known not to be
                 * unique, the specified ID is ignored and the system-generated ID is
                 * used instead.
                 * 
                 */
                "id": string;
                set(property:"id", value: string): void;
                get(property:"id"): string;
                watch(property:"id", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * Rarely used.  Overrides the default Dojo locale used to render this widget,
                 * as defined by the HTML LANG attribute.
                 * Value must be among the list of locales specified during by the Dojo bootstrap,
                 * formatted according to RFC 3066 (like en-us).
                 * 
                 */
                "lang": string;
                set(property:"lang", value: string): void;
                get(property:"lang"): string;
                watch(property:"lang", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * The document this widget belongs to.  If not specified to constructor, will default to
                 * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
                 * 
                 */
                "ownerDocument": Object;
                set(property:"ownerDocument", value: Object): void;
                get(property:"ownerDocument"): Object;
                watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * 
                 */
                "searchContainerNode": boolean;
                set(property:"searchContainerNode", value: boolean): void;
                get(property:"searchContainerNode"): boolean;
                watch(property:"searchContainerNode", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * pointer to original DOM node
                 * 
                 */
                "srcNodeRef": HTMLElement;
                set(property:"srcNodeRef", value: HTMLElement): void;
                get(property:"srcNodeRef"): HTMLElement;
                watch(property:"srcNodeRef", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                /**
                 * HTML style attributes as cssText string or name/value hash
                 * 
                 */
                "style": string;
                set(property:"style", value: string): void;
                get(property:"style"): string;
                watch(property:"style", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * Path to template (HTML file) for this widget relative to dojo.baseUrl.
                 * Deprecated: use templateString with require([... "dojo/text!..."], ...) instead
                 * 
                 */
                "templatePath": string;
                set(property:"templatePath", value: string): void;
                get(property:"templatePath"): string;
                watch(property:"templatePath", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * 
                 */
                "templateString": string;
                set(property:"templateString", value: string): void;
                get(property:"templateString"): string;
                watch(property:"templateString", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * HTML title attribute.
                 * 
                 * For form widgets this specifies a tooltip to display when hovering over
                 * the widget (just like the native HTML title attribute).
                 * 
                 * For TitlePane or for when this widget is a child of a TabContainer, AccordionContainer,
                 * etc., it's used to specify the tab label, accordion pane title, etc.  In this case it's
                 * interpreted as HTML.
                 * 
                 */
                "title": string;
                set(property:"title", value: string): void;
                get(property:"title"): string;
                watch(property:"title", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * When this widget's title attribute is used to for a tab label, accordion pane title, etc.,
                 * this specifies the tooltip to appear when the mouse is hovered over that text.
                 * 
                 */
                "tooltip": string;
                set(property:"tooltip", value: string): void;
                get(property:"tooltip"): string;
                watch(property:"tooltip", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * Should we parse the template to find widgets that might be
                 * declared in markup inside it?  False by default.
                 * 
                 */
                "widgetsInTemplate": boolean;
                set(property:"widgetsInTemplate", value: boolean): void;
                get(property:"widgetsInTemplate"): boolean;
                watch(property:"widgetsInTemplate", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * Makes the given widget a child of this widget.
                 * Inserts specified child widget's dom node as a child of this widget's
                 * container node, and possibly does other processing (such as layout).
                 * 
                 * @param widget             
                 * @param insertIndex               Optional            
                 */
                addChild(widget: dijit._WidgetBase, insertIndex: number): void;
                /**
                 * This method is deprecated, use get() or set() directly.
                 * 
                 * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
                 * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
                 */
                attr(name: String, value: Object): any;
                /**
                 * This method is deprecated, use get() or set() directly.
                 * 
                 * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
                 * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
                 */
                attr(name: Object, value: Object): any;
                /**
                 * Construct the UI for this widget, setting this.domNode.
                 * Most widgets will mixin dijit._TemplatedMixin, which implements this method.
                 * 
                 */
                buildRendering(): void;
                /**
                 * Cancels edits and reverts the editor to its previous state (display mode)
                 * 
                 */
                cancelEdits(): any;
                /**
                 * Clears the editor, destroys all editors, leaving the editor completely clear
                 * 
                 */
                clear(): void;
                /**
                 * 
                 */
                clearEditors(): void;
                /**
                 * Function to clear all the display nodes for the ATOM entry from the viewer.
                 * 
                 */
                clearNodes(): void;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: Object, event: String, method: String): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: any, event: String, method: String): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: Object, event: Function, method: String): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: any, event: Function, method: String): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: Object, event: String, method: Function): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: any, event: String, method: Function): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: Object, event: Function, method: Function): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: any, event: Function, method: Function): any;
                /**
                 * Wrapper to setTimeout to avoid deferred functions executing
                 * after the originating widget has been destroyed.
                 * Returns an object handle with a remove method (that returns null) (replaces clearTimeout).
                 * 
                 * @param fcn Function reference.             
                 * @param delay               OptionalDelay, defaults to 0.             
                 */
                defer(fcn: Function, delay: number): Object;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * Recursively destroy the children of this widget and their
                 * descendants.
                 * 
                 * @param preserveDom               OptionalIf true, the preserveDom attribute is passed to all descendantwidget's .destroy() method. Not for use with _Templatedwidgets.             
                 */
                destroyDescendants(preserveDom: boolean): void;
                /**
                 * Destroy this widget and its descendants
                 * This is the generic "destructor" function that all widget users
                 * should call to cleanly discard with a widget. Once a widget is
                 * destroyed, it is removed from the manager object.
                 * 
                 * @param preserveDom               OptionalIf true, this method will leave the original DOM structurealone of descendant Widgets. Note: This will NOT work withdijit._TemplatedMixin widgets.             
                 */
                destroyRecursive(preserveDom: boolean): void;
                /**
                 * Destroys the DOM nodes associated with this widget.
                 * 
                 * @param preserveDom               OptionalIf true, this method will leave the original DOM structure aloneduring tear-down. Note: this will not work with _Templatedwidgets yet.             
                 */
                destroyRendering(preserveDom?: boolean): void;
                /**
                 * Deprecated, will be removed in 2.0, use handle.remove() instead.
                 * 
                 * Disconnects handle created by connect.
                 * 
                 * @param handle             
                 */
                disconnect(handle: any): void;
                /**
                 * Used by widgets to signal that a synthetic event occurred, ex:
                 * 
                 * myWidget.emit("attrmodified-selectedChildWidget", {}).
                 * Emits an event on this.domNode named type.toLowerCase(), based on eventObj.
                 * Also calls onType() method, if present, and returns value from that method.
                 * By default passes eventObj to callback, but will pass callbackArgs instead, if specified.
                 * Modifies eventObj by adding missing parameters (bubbles, cancelable, widget).
                 * 
                 * @param type             
                 * @param eventObj               Optional            
                 * @param callbackArgs               Optional            
                 */
                emit(type: String, eventObj: Object, callbackArgs: any[]): any;
                /**
                 * Get a property from a widget.
                 * Get a named property from a widget. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * 
                 * For example, if the widget has properties foo and bar
                 * and a method named _getFooAttr(), calling:
                 * myWidget.get("foo") would be equivalent to calling
                 * widget._getFooAttr() and myWidget.get("bar")
                 * would be equivalent to the expression
                 * widget.bar2
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Returns all direct children of this widget, i.e. all widgets underneath this.containerNode whose parent
                 * is this widget.   Note that it does not return all descendants, but rather just direct children.
                 * Analogous to Node.childNodes,
                 * except containing widgets rather than DOMNodes.
                 * 
                 * The result intentionally excludes internally created widgets (a.k.a. supporting widgets)
                 * outside of this.containerNode.
                 * 
                 * Note that the array returned is a simple array.  Application code should not assume
                 * existence of methods like forEach().
                 * 
                 */
                getChildren(): any[];
                /**
                 * Returns all the widgets contained by this, i.e., all widgets underneath this.containerNode.
                 * This method should generally be avoided as it returns widgets declared in templates, which are
                 * supposed to be internal/hidden, but it's left here for back-compat reasons.
                 * 
                 */
                getDescendants(): any[];
                /**
                 * 
                 */
                getEntry(): any;
                /**
                 * 
                 */
                getFeed(): any;
                /**
                 * Gets the index of the child in this container or -1 if not found
                 * 
                 * @param child             
                 */
                getIndexOfChild(child: dijit._WidgetBase): any;
                /**
                 * Returns the parent widget of this widget.
                 * 
                 */
                getParent(): any;
                /**
                 * Returns true if widget has child widgets, i.e. if this.containerNode contains widgets.
                 * 
                 */
                hasChildren(): boolean;
                /**
                 * Function to return if a displayable field is valid or not
                 * 
                 * @param field The field name to get the valid parameter of.  Such as 'content', 'id', etc.             
                 */
                isFieldValid(field: String): any;
                /**
                 * Return true if this widget can currently be focused
                 * and false if not
                 * 
                 */
                isFocusable(): any;
                /**
                 * Return this widget's explicit or implicit orientation (true for LTR, false for RTL)
                 * 
                 */
                isLeftToRight(): any;
                /**
                 * 
                 * @param type protected             
                 * @param func             
                 */
                on(type: String, func: Function): any;
                /**
                 * 
                 * @param type protected             
                 * @param func             
                 */
                on(type: Function, func: Function): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 * 
                 * @param reference Widget, DOMNode, or id of widget or DOMNode             
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                 */
                placeAt(reference: String, position: String): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 * 
                 * @param reference Widget, DOMNode, or id of widget or DOMNode             
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                 */
                placeAt(reference: HTMLElement, position: String): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 * 
                 * @param reference Widget, DOMNode, or id of widget or DOMNode             
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                 */
                placeAt(reference: dijit._WidgetBase, position: String): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 * 
                 * @param reference Widget, DOMNode, or id of widget or DOMNode             
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                 */
                placeAt(reference: String, position: number): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 * 
                 * @param reference Widget, DOMNode, or id of widget or DOMNode             
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                 */
                placeAt(reference: HTMLElement, position: number): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 * 
                 * @param reference Widget, DOMNode, or id of widget or DOMNode             
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                 */
                placeAt(reference: dijit._WidgetBase, position: number): any;
                /**
                 * 
                 */
                postCreate(): void;
                /**
                 * Called after the parameters to the widget have been read-in,
                 * but before the widget template is instantiated. Especially
                 * useful to set properties that are referenced in the widget
                 * template.
                 * 
                 */
                postMixInProperties(): void;
                /**
                 * Removes the passed widget instance from this widget but does
                 * not destroy it.  You can also pass in an integer indicating
                 * the index within the container to remove (ie, removeChild(5) removes the sixth widget).
                 * 
                 * @param widget             
                 */
                removeChild(widget: dijit._WidgetBase): void;
                /**
                 * Removes the passed widget instance from this widget but does
                 * not destroy it.  You can also pass in an integer indicating
                 * the index within the container to remove (ie, removeChild(5) removes the sixth widget).
                 * 
                 * @param widget             
                 */
                removeChild(widget: number): void;
                /**
                 * Saves edits submitted when the 'save' button is pressed.
                 * Saves edits submitted when the 'save' button is pressed.  Distinguishes between new and existing
                 * entries and saves appropriately.  Fetches the values of the editors, and, if existing, compares them to
                 * the existing values and submits the updates, otherwise creates a new entry and posts it as a new entry.
                 * 
                 */
                saveEdits(): any;
                /**
                 * Set a property on a widget
                 * Sets named properties on a widget which may potentially be handled by a
                 * setter in the widget.
                 * 
                 * For example, if the widget has properties foo and bar
                 * and a method named _setFooAttr(), calling
                 * myWidget.set("foo", "Howdy!") would be equivalent to calling
                 * widget._setFooAttr("Howdy!") and myWidget.set("bar", 3)
                 * would be equivalent to the statement widget.bar = 3;
                 * 
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * myWidget.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * });
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: any, value: any): any;
                /**
                 * Deprecated.  Use set() instead.
                 * 
                 * @param attr             
                 * @param value             
                 */
                setAttribute(attr: String, value: any): void;
                /**
                 * Function to set the contents of the author node in the template to some value from the entry.
                 * Function to set the contents of the author node in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param authorsAnchorNode The DOM node to attach the author data to.             
                 * @param editMode Boolean to indicate if the display should be in edit mode or not.             
                 * @param entry The Feed Entry to work with.             
                 */
                setAuthors(authorsAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
                /**
                 * Function to set the title format for the authors section of the author row in the template to some value from the entry.
                 * Function to set the title format for the authors section of the author row in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the author data is filled out from an entry.
                 * 
                 * @param authorHeaderNode The DOM node to attach the author section header data to.             
                 * @param entry The Feed Entry to work with.             
                 */
                setAuthorsHeader(authorHeaderNode: HTMLElement, entry: Object): void;
                /**
                 * Function to set the contents of the content node in the template to some value from the entry.
                 * Function to set the contents of the content node in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param contentAnchorNode             
                 * @param editMode Boolean to indicate if the display should be in edit mode or not.             
                 * @param entry The Feed Entry to work with.             
                 */
                setContent(contentAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
                /**
                 * Function to set the contents of the content node in the template to some value from the entry.
                 * Function to set the contents of the content node in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param contentHeaderNode The DOM node to attach the content data to.             
                 * @param entry The Feed Entry to work with.             
                 */
                setContentHeader(contentHeaderNode: HTMLElement, entry: Object): void;
                /**
                 * Function to set the contents of the contributor node in the template to some value from the entry.
                 * Function to set the contents of the contributor node in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param contributorsAnchorNode The DOM node to attach the contributor data to.             
                 * @param editMode Boolean to indicate if the display should be in edit mode or not.             
                 * @param entry The Feed Entry to work with.             
                 */
                setContributors(contributorsAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
                /**
                 * Function to set the contents of the contributor header node in the template to some value from the entry.
                 * Function to set the contents of the contributor header node in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param contributorsHeaderNode The DOM node to attach the contributor title to.             
                 * @param entry The Feed Entry to work with.             
                 */
                setContributorsHeader(contributorsHeaderNode: HTMLElement, entry: Object): void;
                /**
                 * Function for setting which sections of the entry should be displayed.
                 * 
                 * @param sectionsArray Array of string names that indicate which sections to display.             
                 */
                setDisplaySections(sectionsArray: any[]): any;
                /**
                 * Function to set the current entry that is being edited.
                 * 
                 * @param entry Instance of dojox.atom.io.model.Entry to display for reading/editing.             
                 * @param feed             
                 * @param leaveMenuState             
                 */
                setEntry(entry: Object, feed: Object, leaveMenuState: boolean): void;
                /**
                 * Function to set whether a field in the view is valid and displayable.
                 * Function to set whether a field in the view is valid and displayable.
                 * This is needed for over-riding of the set* functions and customization of how data is displayed in the attach point.
                 * So if custom implementations use their own display logic, they can still enable the field.
                 * 
                 * @param field The field name to set the valid parameter on.  Such as 'content', 'id', etc.             
                 * @param isValid Flag denoting if the field is valid or not.             
                 */
                setFieldValidity(field: String, isValid: boolean): any;
                /**
                 * Function to set the contents of the ID  node in the template to some value from the entry.
                 * Function to set the contents of the ID node in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param idAnchorNode The DOM node to attach the ID data to.             
                 * @param editMode Boolean to indicate if the display should be in edit mode or not.             
                 * @param entry The Feed Entry to work with.             
                 */
                setId(idAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
                /**
                 * Function to set the contents of the ID  node in the template to some value from the entry.
                 * Function to set the contents of the ID node in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param idHeaderNode             
                 * @param entry The Feed Entry to work with.             
                 */
                setIdHeader(idHeaderNode: HTMLElement, entry: Object): void;
                /**
                 * Function to set the contents of the summary  node in the template to some value from the entry.
                 * Function to set the contents of the summary node in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param summaryAnchorNode The DOM node to attach the content data to.             
                 * @param editMode Boolean to indicate if the display should be in edit mode or not.             
                 * @param entry The Feed Entry to work with.             
                 */
                setSummary(summaryAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
                /**
                 * Function to set the contents of the summary  node in the template to some value from the entry.
                 * Function to set the contents of the summary node in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param summaryHeaderNode The DOM node to attach the summary title to.             
                 * @param entry The Feed Entry to work with.             
                 */
                setSummaryHeader(summaryHeaderNode: HTMLElement, entry: Object): void;
                /**
                 * Function to set the contents of the title node in the template to some value from the entry.
                 * Function to set the contents of the title node in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param titleAnchorNode The DOM node to attach the title data to.             
                 * @param editMode Boolean to indicate if the display should be in edit mode or not.             
                 * @param entry The Feed Entry to work with.             
                 */
                setTitle(titleAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
                /**
                 * Function to set the contents of the title header node in the template to some value.
                 * Function to set the contents of the title header node in the template to some value.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param titleHeaderNode             
                 * @param entry The Feed Entry to work with.             
                 */
                setTitleHeader(titleHeaderNode: HTMLElement, entry: Object): void;
                /**
                 * Function to set the contents of the updated  node in the template to some value from the entry.
                 * Function to set the contents of the updated node in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param updatedAnchorNode The DOM node to attach the updated data to.             
                 * @param editMode Boolean to indicate if the display should be in edit mode or not.             
                 * @param entry The Feed Entry to work with.             
                 */
                setUpdated(updatedAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
                /**
                 * Function to set the contents of the updated header node in the template to some value from the entry.
                 * Function to set the contents of the updated header node in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param updatedHeaderNode The DOM node to attach the updated header data to.             
                 * @param entry The Feed Entry to work with.             
                 */
                setUpdatedHeader(updatedHeaderNode: HTMLElement, entry: Object): void;
                /**
                 * 
                 */
                startup(): void;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(topic.subscribe()) instead.
                 * 
                 * Subscribes to the specified topic and calls the specified method
                 * of this object and registers for unsubscribe() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.subscribe, except with the
                 * implicit use of this widget as the target object.
                 * 
                 * @param t The topic             
                 * @param method The callback             
                 */
                subscribe(t: String, method: Function): any;
                /**
                 * Returns a string that represents the widget.
                 * When a widget is cast to a string, this method will be used to generate the
                 * output. Currently, it does not implement any sort of reversible
                 * serialization.
                 * 
                 */
                toString(): string;
                /**
                 * Deprecated. Override destroy() instead to implement custom widget tear-down
                 * behavior.
                 * 
                 */
                uninitialize(): boolean;
                /**
                 * Deprecated, will be removed in 2.0, use handle.remove() instead.
                 * 
                 * Unsubscribes handle created by this.subscribe.
                 * Also removes handle from this widget's list of subscriptions
                 * 
                 * @param handle             
                 */
                unsubscribe(handle: Object): void;
                /**
                 * Watches a property for changes
                 * 
                 * @param name               OptionalIndicates the property to watch. This is optional (the callback may be theonly parameter), and if omitted, all the properties will be watched             
                 * @param callback The function to execute when the property changes. This will be called afterthe property has been changed. The callback will be called with the |this|set to the instance, the first argument as the name of the property, thesecond argument as the old value and the third argument as the new value.             
                 */
                watch(property: string, callback:{(property?:string, oldValue?:any, newValue?: any):void}) :{unwatch():void};
                /**
                 * Static method to get a template based on the templatePath or
                 * templateString key
                 */
                getCachedTemplate(): any;
                /**
                 * Called when the widget stops being "active" because
                 * focus moved to something outside of it, or the user
                 * clicked somewhere outside of it, or the widget was
                 * hidden.
                 * 
                 */
                onBlur(): void;
                /**
                 * Connect to this function to receive notifications of mouse click events.
                 * 
                 * @param event mouse Event             
                 */
                onClick(event: any): void;
                /**
                 * Called when this widget is being displayed as a popup (ex: a Calendar popped
                 * up from a DateTextBox), and it is hidden.
                 * This is called from the dijit.popup code, and should not be called directly.
                 * 
                 * Also used as a parameter for children of dijit/layout/StackContainer or subclasses.
                 * Callback if a user tries to close the child.   Child will be closed if this function returns true.
                 * 
                 */
                onClose(): boolean;
                /**
                 * Connect to this function to receive notifications of mouse double click events.
                 * 
                 * @param event mouse Event             
                 */
                onDblClick(event: any): void;
                /**
                 * Called when the widget becomes "active" because
                 * it or a widget inside of it either has focus, or has recently
                 * been clicked.
                 * 
                 */
                onFocus(): void;
                /**
                 * Called when another widget becomes the selected pane in a
                 * dijit/layout/TabContainer, dijit/layout/StackContainer,
                 * dijit/layout/AccordionContainer, etc.
                 * 
                 * Also called to indicate hide of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
                 * 
                 */
                onHide(): void;
                /**
                 * Connect to this function to receive notifications of keys being pressed down.
                 * 
                 * @param event key Event             
                 */
                onKeyDown(event: any): void;
                /**
                 * Connect to this function to receive notifications of printable keys being typed.
                 * 
                 * @param event key Event             
                 */
                onKeyPress(event: any): void;
                /**
                 * Connect to this function to receive notifications of keys being released.
                 * 
                 * @param event key Event             
                 */
                onKeyUp(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse button is pressed down.
                 * 
                 * @param event mouse Event             
                 */
                onMouseDown(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse moves onto this widget.
                 * 
                 * @param event mouse Event             
                 */
                onMouseEnter(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse moves off of this widget.
                 * 
                 * @param event mouse Event             
                 */
                onMouseLeave(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse moves over nodes contained within this widget.
                 * 
                 * @param event mouse Event             
                 */
                onMouseMove(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse moves off of nodes contained within this widget.
                 * 
                 * @param event mouse Event             
                 */
                onMouseOut(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse moves onto nodes contained within this widget.
                 * 
                 * @param event mouse Event             
                 */
                onMouseOver(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse button is released.
                 * 
                 * @param event mouse Event             
                 */
                onMouseUp(event: any): void;
                /**
                 * Called when this widget becomes the selected pane in a
                 * dijit/layout/TabContainer, dijit/layout/StackContainer,
                 * dijit/layout/AccordionContainer, etc.
                 * 
                 * Also called to indicate display of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
                 * 
                 */
                onShow(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/atom/widget/FeedViewer.html
             *
             * An ATOM feed viewer that allows for viewing a feed, deleting entries, and editing entries.
             * 
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
             */
            class FeedViewer extends dijit._Widget implements dijit._Templated, dijit._Container {
                constructor(params?: Object, srcNodeRef?: HTMLElement);
                /**
                 * 
                 */
                "alertsEnabled": boolean;
                set(property:"alertsEnabled", value: boolean): void;
                get(property:"alertsEnabled"): boolean;
                watch(property:"alertsEnabled", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * Object to which attach points and events will be scoped.  Defaults
                 * to 'this'.
                 * 
                 */
                "attachScope": Object;
                set(property:"attachScope", value: Object): void;
                get(property:"attachScope"): Object;
                watch(property:"attachScope", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * Deprecated. Instead of attributeMap, widget should have a _setXXXAttr attribute
                 * for each XXX attribute to be mapped to the DOM.
                 * 
                 * attributeMap sets up a "binding" between attributes (aka properties)
                 * of the widget and the widget's DOM.
                 * Changes to widget attributes listed in attributeMap will be
                 * reflected into the DOM.
                 * 
                 * For example, calling set('title', 'hello')
                 * on a TitlePane will automatically cause the TitlePane's DOM to update
                 * with the new title.
                 * 
                 * attributeMap is a hash where the key is an attribute of the widget,
                 * and the value reflects a binding to a:
                 * 
                 * DOM node attribute
                 *   focus: {node: "focusNode", type: "attribute"}
                 * Maps this.focus to this.focusNode.focus
                 * 
                 * DOM node innerHTML
                 *   title: { node: "titleNode", type: "innerHTML" }
                 * Maps this.title to this.titleNode.innerHTML
                 * 
                 * DOM node innerText
                 *   title: { node: "titleNode", type: "innerText" }
                 * Maps this.title to this.titleNode.innerText
                 * 
                 * DOM node CSS class
                 *   myClass: { node: "domNode", type: "class" }
                 * Maps this.myClass to this.domNode.className
                 * 
                 * If the value is an array, then each element in the array matches one of the
                 * formats of the above list.
                 * 
                 * There are also some shorthands for backwards compatibility:
                 * 
                 * string --> { node: string, type: "attribute" }, for example:
                 * "focusNode" ---> { node: "focusNode", type: "attribute" }
                 * "" --> { node: "domNode", type: "attribute" }
                 * 
                 */
                "attributeMap": Object;
                set(property:"attributeMap", value: Object): void;
                get(property:"attributeMap"): Object;
                watch(property:"attributeMap", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * Root CSS class of the widget (ex: dijitTextBox), used to construct CSS classes to indicate
                 * widget state.
                 * 
                 */
                "baseClass": string;
                set(property:"baseClass", value: string): void;
                get(property:"baseClass"): string;
                watch(property:"baseClass", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * 
                 */
                "class": string;
                set(property:"class", value: string): void;
                get(property:"class"): string;
                watch(property:"class", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * Designates where children of the source DOM node will be placed.
                 * "Children" in this case refers to both DOM nodes and widgets.
                 * For example, for myWidget:
                 * 
                 * <div data-dojo-type=myWidget>
                 *     <b> here's a plain DOM node
                 *     <span data-dojo-type=subWidget>and a widget</span>
                 *     <i> and another plain DOM node </i>
                 * </div>
                 * containerNode would point to:
                 * 
                 * <b> here's a plain DOM node
                 * <span data-dojo-type=subWidget>and a widget</span>
                 * <i> and another plain DOM node </i>
                 * In templated widgets, "containerNode" is set via a
                 * data-dojo-attach-point assignment.
                 * 
                 * containerNode must be defined for any widget that accepts innerHTML
                 * (like ContentPane or BorderContainer or even Button), and conversely
                 * is null for widgets that don't, like TextBox.
                 * 
                 */
                "containerNode": HTMLElement;
                set(property:"containerNode", value: HTMLElement): void;
                get(property:"containerNode"): HTMLElement;
                watch(property:"containerNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                /**
                 * Used to provide a context require to the dojo/parser in order to be
                 * able to use relative MIDs (e.g. ./Widget) in the widget's template.
                 * 
                 */
                "contextRequire": Function;
                set(property:"contextRequire", value: Function): void;
                get(property:"contextRequire"): Function;
                watch(property:"contextRequire", callback:{(property?:string, oldValue?:Function, newValue?: Function):void}) :{unwatch():void}
                /**
                 * Bi-directional support, as defined by the HTML DIR
                 * attribute. Either left-to-right "ltr" or right-to-left "rtl".  If undefined, widgets renders in page's
                 * default direction.
                 * 
                 */
                "dir": string;
                set(property:"dir", value: string): void;
                get(property:"dir"): string;
                watch(property:"dir", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * This is our visible representation of the widget! Other DOM
                 * Nodes may by assigned to other properties, usually through the
                 * template system's data-dojo-attach-point syntax, but the domNode
                 * property is the canonical "top level" node in widget UI.
                 * 
                 */
                "domNode": HTMLElement;
                set(property:"domNode", value: HTMLElement): void;
                get(property:"domNode"): HTMLElement;
                watch(property:"domNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                /**
                 * 
                 */
                "entrySelectionTopic": string;
                set(property:"entrySelectionTopic", value: string): void;
                get(property:"entrySelectionTopic"): string;
                watch(property:"entrySelectionTopic", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * 
                 */
                "feedViewerTable": Object;
                set(property:"feedViewerTable", value: Object): void;
                get(property:"feedViewerTable"): Object;
                watch(property:"feedViewerTable", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * 
                 */
                "feedViewerTableBody": Object;
                set(property:"feedViewerTableBody", value: Object): void;
                get(property:"feedViewerTableBody"): Object;
                watch(property:"feedViewerTableBody", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * This widget or a widget it contains has focus, or is "active" because
                 * it was recently clicked.
                 * 
                 */
                "focused": boolean;
                set(property:"focused", value: boolean): void;
                get(property:"focused"): boolean;
                watch(property:"focused", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * A unique, opaque ID string that can be assigned by users or by the
                 * system. If the developer passes an ID which is known not to be
                 * unique, the specified ID is ignored and the system-generated ID is
                 * used instead.
                 * 
                 */
                "id": string;
                set(property:"id", value: string): void;
                get(property:"id"): string;
                watch(property:"id", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * Rarely used.  Overrides the default Dojo locale used to render this widget,
                 * as defined by the HTML LANG attribute.
                 * Value must be among the list of locales specified during by the Dojo bootstrap,
                 * formatted according to RFC 3066 (like en-us).
                 * 
                 */
                "lang": string;
                set(property:"lang", value: string): void;
                get(property:"lang"): string;
                watch(property:"lang", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * 
                 */
                "localSaveOnly": boolean;
                set(property:"localSaveOnly", value: boolean): void;
                get(property:"localSaveOnly"): boolean;
                watch(property:"localSaveOnly", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * The document this widget belongs to.  If not specified to constructor, will default to
                 * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
                 * 
                 */
                "ownerDocument": Object;
                set(property:"ownerDocument", value: Object): void;
                get(property:"ownerDocument"): Object;
                watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * 
                 */
                "searchContainerNode": boolean;
                set(property:"searchContainerNode", value: boolean): void;
                get(property:"searchContainerNode"): boolean;
                watch(property:"searchContainerNode", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * pointer to original DOM node
                 * 
                 */
                "srcNodeRef": HTMLElement;
                set(property:"srcNodeRef", value: HTMLElement): void;
                get(property:"srcNodeRef"): HTMLElement;
                watch(property:"srcNodeRef", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                /**
                 * HTML style attributes as cssText string or name/value hash
                 * 
                 */
                "style": string;
                set(property:"style", value: string): void;
                get(property:"style"): string;
                watch(property:"style", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * Path to template (HTML file) for this widget relative to dojo.baseUrl.
                 * Deprecated: use templateString with require([... "dojo/text!..."], ...) instead
                 * 
                 */
                "templatePath": string;
                set(property:"templatePath", value: string): void;
                get(property:"templatePath"): string;
                watch(property:"templatePath", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * 
                 */
                "templateString": string;
                set(property:"templateString", value: string): void;
                get(property:"templateString"): string;
                watch(property:"templateString", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * HTML title attribute.
                 * 
                 * For form widgets this specifies a tooltip to display when hovering over
                 * the widget (just like the native HTML title attribute).
                 * 
                 * For TitlePane or for when this widget is a child of a TabContainer, AccordionContainer,
                 * etc., it's used to specify the tab label, accordion pane title, etc.  In this case it's
                 * interpreted as HTML.
                 * 
                 */
                "title": string;
                set(property:"title", value: string): void;
                get(property:"title"): string;
                watch(property:"title", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * When this widget's title attribute is used to for a tab label, accordion pane title, etc.,
                 * this specifies the tooltip to appear when the mouse is hovered over that text.
                 * 
                 */
                "tooltip": string;
                set(property:"tooltip", value: string): void;
                get(property:"tooltip"): string;
                watch(property:"tooltip", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * 
                 */
                "url": string;
                set(property:"url", value: string): void;
                get(property:"url"): string;
                watch(property:"url", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * Should we parse the template to find widgets that might be
                 * declared in markup inside it?  False by default.
                 * 
                 */
                "widgetsInTemplate": boolean;
                set(property:"widgetsInTemplate", value: boolean): void;
                get(property:"widgetsInTemplate"): boolean;
                watch(property:"widgetsInTemplate", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * 
                 */
                "xmethod": boolean;
                set(property:"xmethod", value: boolean): void;
                get(property:"xmethod"): boolean;
                watch(property:"xmethod", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * Function to add a filter for entry inclusion in the feed view.
                 * 
                 * @param filter The basic items to filter on and the values.Should be of format: {scheme: some text or null, term: some text or null, label: some text or null}             
                 */
                addCategoryIncludeFilter(filter: Object): any;
                /**
                 * Makes the given widget a child of this widget.
                 * Inserts specified child widget's dom node as a child of this widget's
                 * container node, and possibly does other processing (such as layout).
                 * 
                 * @param widget             
                 * @param insertIndex               Optional            
                 */
                addChild(widget: dijit._WidgetBase, insertIndex: number): void;
                /**
                 * Function for appending an entry to the feed view.
                 * 
                 * @param entry The dojox.atom.io.model.Entry object to append             
                 */
                appendEntry(entry: Object): any;
                /**
                 * Function for appending a new grouping of entries to the feed view.
                 * 
                 * @param titleText             
                 */
                appendGrouping(titleText: String): any;
                /**
                 * 
                 */
                AtomEntryCategoryFilter(): void;
                /**
                 * This method is deprecated, use get() or set() directly.
                 * 
                 * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
                 * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
                 */
                attr(name: String, value: Object): any;
                /**
                 * This method is deprecated, use get() or set() directly.
                 * 
                 * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
                 * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
                 */
                attr(name: Object, value: Object): any;
                /**
                 * Construct the UI for this widget, setting this.domNode.
                 * Most widgets will mixin dijit._TemplatedMixin, which implements this method.
                 * 
                 */
                buildRendering(): void;
                /**
                 * 
                 */
                CategoryIncludeFilter(): void;
                /**
                 * Function clearing all current entries in the feed view.
                 * 
                 */
                clear(): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: Object, event: String, method: String): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: any, event: String, method: String): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: Object, event: Function, method: String): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: any, event: Function, method: String): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: Object, event: String, method: Function): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: any, event: String, method: Function): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: Object, event: Function, method: Function): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: any, event: Function, method: Function): any;
                /**
                 * Wrapper to setTimeout to avoid deferred functions executing
                 * after the originating widget has been destroyed.
                 * Returns an object handle with a remove method (that returns null) (replaces clearTimeout).
                 * 
                 * @param fcn Function reference.             
                 * @param delay               OptionalDelay, defaults to 0.             
                 */
                defer(fcn: Function, delay: number): Object;
                /**
                 * Function for deleting a row from the view
                 * 
                 * @param entryRow             
                 */
                deleteEntry(entryRow: Object): void;
                /**
                 * Destroys this widget, including all descendants and subscriptions.
                 * 
                 */
                destroy(): void;
                /**
                 * Recursively destroy the children of this widget and their
                 * descendants.
                 * 
                 * @param preserveDom               OptionalIf true, the preserveDom attribute is passed to all descendantwidget's .destroy() method. Not for use with _Templatedwidgets.             
                 */
                destroyDescendants(preserveDom: boolean): void;
                /**
                 * Destroy this widget and its descendants
                 * This is the generic "destructor" function that all widget users
                 * should call to cleanly discard with a widget. Once a widget is
                 * destroyed, it is removed from the manager object.
                 * 
                 * @param preserveDom               OptionalIf true, this method will leave the original DOM structurealone of descendant Widgets. Note: This will NOT work withdijit._TemplatedMixin widgets.             
                 */
                destroyRecursive(preserveDom: boolean): void;
                /**
                 * Destroys the DOM nodes associated with this widget.
                 * 
                 * @param preserveDom               OptionalIf true, this method will leave the original DOM structure aloneduring tear-down. Note: this will not work with _Templatedwidgets yet.             
                 */
                destroyRendering(preserveDom?: boolean): void;
                /**
                 * Deprecated, will be removed in 2.0, use handle.remove() instead.
                 * 
                 * Disconnects handle created by connect.
                 * 
                 * @param handle             
                 */
                disconnect(handle: any): void;
                /**
                 * Used by widgets to signal that a synthetic event occurred, ex:
                 * 
                 * myWidget.emit("attrmodified-selectedChildWidget", {}).
                 * Emits an event on this.domNode named type.toLowerCase(), based on eventObj.
                 * Also calls onType() method, if present, and returns value from that method.
                 * By default passes eventObj to callback, but will pass callbackArgs instead, if specified.
                 * Modifies eventObj by adding missing parameters (bubbles, cancelable, widget).
                 * 
                 * @param type             
                 * @param eventObj               Optional            
                 * @param callbackArgs               Optional            
                 */
                emit(type: String, eventObj: Object, callbackArgs: any[]): any;
                /**
                 * 
                 */
                FeedViewerEntry(): void;
                /**
                 * 
                 */
                FeedViewerGrouping(): void;
                /**
                 * Get a property from a widget.
                 * Get a named property from a widget. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * 
                 * For example, if the widget has properties foo and bar
                 * and a method named _getFooAttr(), calling:
                 * myWidget.get("foo") would be equivalent to calling
                 * widget._getFooAttr() and myWidget.get("bar")
                 * would be equivalent to the expression
                 * widget.bar2
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Returns all direct children of this widget, i.e. all widgets underneath this.containerNode whose parent
                 * is this widget.   Note that it does not return all descendants, but rather just direct children.
                 * Analogous to Node.childNodes,
                 * except containing widgets rather than DOMNodes.
                 * 
                 * The result intentionally excludes internally created widgets (a.k.a. supporting widgets)
                 * outside of this.containerNode.
                 * 
                 * Note that the array returned is a simple array.  Application code should not assume
                 * existence of methods like forEach().
                 * 
                 */
                getChildren(): any[];
                /**
                 * Returns all the widgets contained by this, i.e., all widgets underneath this.containerNode.
                 * This method should generally be avoided as it returns widgets declared in templates, which are
                 * supposed to be internal/hidden, but it's left here for back-compat reasons.
                 * 
                 */
                getDescendants(): any[];
                /**
                 * Gets the index of the child in this container or -1 if not found
                 * 
                 * @param child             
                 */
                getIndexOfChild(child: dijit._WidgetBase): any;
                /**
                 * Returns the parent widget of this widget.
                 * 
                 */
                getParent(): any;
                /**
                 * Returns true if widget has child widgets, i.e. if this.containerNode contains widgets.
                 * 
                 */
                hasChildren(): boolean;
                /**
                 * Return true if this widget can currently be focused
                 * and false if not
                 * 
                 */
                isFocusable(): any;
                /**
                 * Return this widget's explicit or implicit orientation (true for LTR, false for RTL)
                 * 
                 */
                isLeftToRight(): any;
                /**
                 * 
                 * @param type protected             
                 * @param func             
                 */
                on(type: String, func: Function): any;
                /**
                 * 
                 * @param type protected             
                 * @param func             
                 */
                on(type: Function, func: Function): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 * 
                 * @param reference Widget, DOMNode, or id of widget or DOMNode             
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                 */
                placeAt(reference: String, position: String): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 * 
                 * @param reference Widget, DOMNode, or id of widget or DOMNode             
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                 */
                placeAt(reference: HTMLElement, position: String): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 * 
                 * @param reference Widget, DOMNode, or id of widget or DOMNode             
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                 */
                placeAt(reference: dijit._WidgetBase, position: String): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 * 
                 * @param reference Widget, DOMNode, or id of widget or DOMNode             
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                 */
                placeAt(reference: String, position: number): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 * 
                 * @param reference Widget, DOMNode, or id of widget or DOMNode             
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                 */
                placeAt(reference: HTMLElement, position: number): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 * 
                 * @param reference Widget, DOMNode, or id of widget or DOMNode             
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                 */
                placeAt(reference: dijit._WidgetBase, position: number): any;
                /**
                 * The postCreate function.
                 * The postCreate function.  Creates our AtomIO object for future interactions and subscribes to the
                 * event given in markup/creation.
                 * 
                 */
                postCreate(): void;
                /**
                 * Called after the parameters to the widget have been read-in,
                 * but before the widget template is instantiated. Especially
                 * useful to set properties that are referenced in the widget
                 * template.
                 * 
                 */
                postMixInProperties(): void;
                /**
                 * Function to remove a filter for entry inclusion in the feed view.
                 * 
                 * @param filter The basic items to identify the filter that is present.Should be of format: {scheme: some text or null, term: some text or null, label: some text or null}             
                 */
                removeCategoryIncludeFilter(filter: Object): any;
                /**
                 * Removes the passed widget instance from this widget but does
                 * not destroy it.  You can also pass in an integer indicating
                 * the index within the container to remove (ie, removeChild(5) removes the sixth widget).
                 * 
                 * @param widget             
                 */
                removeChild(widget: dijit._WidgetBase): void;
                /**
                 * Removes the passed widget instance from this widget but does
                 * not destroy it.  You can also pass in an integer indicating
                 * the index within the container to remove (ie, removeChild(5) removes the sixth widget).
                 * 
                 * @param widget             
                 */
                removeChild(widget: number): void;
                /**
                 * Set a property on a widget
                 * Sets named properties on a widget which may potentially be handled by a
                 * setter in the widget.
                 * 
                 * For example, if the widget has properties foo and bar
                 * and a method named _setFooAttr(), calling
                 * myWidget.set("foo", "Howdy!") would be equivalent to calling
                 * widget._setFooAttr("Howdy!") and myWidget.set("bar", 3)
                 * would be equivalent to the statement widget.bar = 3;
                 * 
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * myWidget.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * });
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: any, value: any): any;
                /**
                 * Deprecated.  Use set() instead.
                 * 
                 * @param attr             
                 * @param value             
                 */
                setAttribute(attr: String, value: any): void;
                /**
                 * Function setting the dojox.atom.io.model.Feed data into the view.
                 * 
                 * @param feed             
                 */
                setFeed(feed: Object): any;
                /**
                 * Function setting the feed from a URL which to get the feed.
                 * 
                 * @param url The URL to the feed to load.             
                 */
                setFeedFromUrl(url: String): any;
                /**
                 * The startup function.
                 * The startup function.  Parses the filters and sets the feed based on the given url.
                 * 
                 */
                startup(): void;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(topic.subscribe()) instead.
                 * 
                 * Subscribes to the specified topic and calls the specified method
                 * of this object and registers for unsubscribe() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.subscribe, except with the
                 * implicit use of this widget as the target object.
                 * 
                 * @param t The topic             
                 * @param method The callback             
                 */
                subscribe(t: String, method: Function): any;
                /**
                 * Returns a string that represents the widget.
                 * When a widget is cast to a string, this method will be used to generate the
                 * output. Currently, it does not implement any sort of reversible
                 * serialization.
                 * 
                 */
                toString(): string;
                /**
                 * Deprecated. Override destroy() instead to implement custom widget tear-down
                 * behavior.
                 * 
                 */
                uninitialize(): boolean;
                /**
                 * Deprecated, will be removed in 2.0, use handle.remove() instead.
                 * 
                 * Unsubscribes handle created by this.subscribe.
                 * Also removes handle from this widget's list of subscriptions
                 * 
                 * @param handle             
                 */
                unsubscribe(handle: Object): void;
                /**
                 * Watches a property for changes
                 * 
                 * @param name               OptionalIndicates the property to watch. This is optional (the callback may be theonly parameter), and if omitted, all the properties will be watched             
                 * @param callback The function to execute when the property changes. This will be called afterthe property has been changed. The callback will be called with the |this|set to the instance, the first argument as the name of the property, thesecond argument as the old value and the third argument as the new value.             
                 */
                watch(property: string, callback:{(property?:string, oldValue?:any, newValue?: any):void}) :{unwatch():void};
                /**
                 * Static method to get a template based on the templatePath or
                 * templateString key
                 */
                getCachedTemplate(): any;
                /**
                 * Called when the widget stops being "active" because
                 * focus moved to something outside of it, or the user
                 * clicked somewhere outside of it, or the widget was
                 * hidden.
                 * 
                 */
                onBlur(): void;
                /**
                 * Connect to this function to receive notifications of mouse click events.
                 * 
                 * @param event mouse Event             
                 */
                onClick(event: any): void;
                /**
                 * Called when this widget is being displayed as a popup (ex: a Calendar popped
                 * up from a DateTextBox), and it is hidden.
                 * This is called from the dijit.popup code, and should not be called directly.
                 * 
                 * Also used as a parameter for children of dijit/layout/StackContainer or subclasses.
                 * Callback if a user tries to close the child.   Child will be closed if this function returns true.
                 * 
                 */
                onClose(): boolean;
                /**
                 * Connect to this function to receive notifications of mouse double click events.
                 * 
                 * @param event mouse Event             
                 */
                onDblClick(event: any): void;
                /**
                 * Function intended for over-riding/replacement as an attachpoint to for other items to recieve
                 * selection notification.
                 * 
                 * @param entry The dojox.atom.io.model.Entry object selected.             
                 */
                onEntrySelected(entry: Object): any;
                /**
                 * Called when the widget becomes "active" because
                 * it or a widget inside of it either has focus, or has recently
                 * been clicked.
                 * 
                 */
                onFocus(): void;
                /**
                 * Called when another widget becomes the selected pane in a
                 * dijit/layout/TabContainer, dijit/layout/StackContainer,
                 * dijit/layout/AccordionContainer, etc.
                 * 
                 * Also called to indicate hide of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
                 * 
                 */
                onHide(): void;
                /**
                 * Connect to this function to receive notifications of keys being pressed down.
                 * 
                 * @param event key Event             
                 */
                onKeyDown(event: any): void;
                /**
                 * Connect to this function to receive notifications of printable keys being typed.
                 * 
                 * @param event key Event             
                 */
                onKeyPress(event: any): void;
                /**
                 * Connect to this function to receive notifications of keys being released.
                 * 
                 * @param event key Event             
                 */
                onKeyUp(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse button is pressed down.
                 * 
                 * @param event mouse Event             
                 */
                onMouseDown(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse moves onto this widget.
                 * 
                 * @param event mouse Event             
                 */
                onMouseEnter(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse moves off of this widget.
                 * 
                 * @param event mouse Event             
                 */
                onMouseLeave(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse moves over nodes contained within this widget.
                 * 
                 * @param event mouse Event             
                 */
                onMouseMove(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse moves off of nodes contained within this widget.
                 * 
                 * @param event mouse Event             
                 */
                onMouseOut(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse moves onto nodes contained within this widget.
                 * 
                 * @param event mouse Event             
                 */
                onMouseOver(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse button is released.
                 * 
                 * @param event mouse Event             
                 */
                onMouseUp(event: any): void;
                /**
                 * Called when this widget becomes the selected pane in a
                 * dijit/layout/TabContainer, dijit/layout/StackContainer,
                 * dijit/layout/AccordionContainer, etc.
                 * 
                 * Also called to indicate display of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
                 * 
                 */
                onShow(): void;
            }
            module FeedViewer {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/atom/widget/FeedViewer.AtomEntryCategoryFilter.html
                 *
                 * A filter to be applied to the list of entries.
                 * 
                 */
                class AtomEntryCategoryFilter {
                    constructor();
                    /**
                     * 
                     */
                    "isFilter": boolean;
                    /**
                     * 
                     */
                    "label": string;
                    /**
                     * 
                     */
                    "scheme": string;
                    /**
                     * 
                     */
                    "term": string;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/atom/widget/FeedViewer.CategoryIncludeFilter.html
                 *
                 * 
                 * @param scheme     
                 * @param term     
                 * @param label     
                 */
                class CategoryIncludeFilter {
                    constructor(scheme: any, term: any, label: any);
                    /**
                     * Function to determine if this category filter matches against a category on an atom entry
                     * 
                     * @param entry             
                     */
                    match(entry: any): any;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/atom/widget/FeedViewer.FeedViewerEntry.html
                 *
                 * Widget for handling the display of an entry and specific events associated with it.
                 * 
                 * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
                 * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
                 */
                class FeedViewerEntry extends dijit._Widget implements dijit._Templated {
                    constructor(params?: Object, srcNodeRef?: HTMLElement);
                    /**
                     * Object to which attach points and events will be scoped.  Defaults
                     * to 'this'.
                     * 
                     */
                    "attachScope": Object;
                    set(property:"attachScope", value: Object): void;
                    get(property:"attachScope"): Object;
                    watch(property:"attachScope", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * Deprecated. Instead of attributeMap, widget should have a _setXXXAttr attribute
                     * for each XXX attribute to be mapped to the DOM.
                     * 
                     * attributeMap sets up a "binding" between attributes (aka properties)
                     * of the widget and the widget's DOM.
                     * Changes to widget attributes listed in attributeMap will be
                     * reflected into the DOM.
                     * 
                     * For example, calling set('title', 'hello')
                     * on a TitlePane will automatically cause the TitlePane's DOM to update
                     * with the new title.
                     * 
                     * attributeMap is a hash where the key is an attribute of the widget,
                     * and the value reflects a binding to a:
                     * 
                     * DOM node attribute
                     *   focus: {node: "focusNode", type: "attribute"}
                     * Maps this.focus to this.focusNode.focus
                     * 
                     * DOM node innerHTML
                     *   title: { node: "titleNode", type: "innerHTML" }
                     * Maps this.title to this.titleNode.innerHTML
                     * 
                     * DOM node innerText
                     *   title: { node: "titleNode", type: "innerText" }
                     * Maps this.title to this.titleNode.innerText
                     * 
                     * DOM node CSS class
                     *   myClass: { node: "domNode", type: "class" }
                     * Maps this.myClass to this.domNode.className
                     * 
                     * If the value is an array, then each element in the array matches one of the
                     * formats of the above list.
                     * 
                     * There are also some shorthands for backwards compatibility:
                     * 
                     * string --> { node: string, type: "attribute" }, for example:
                     * "focusNode" ---> { node: "focusNode", type: "attribute" }
                     * "" --> { node: "domNode", type: "attribute" }
                     * 
                     */
                    "attributeMap": Object;
                    set(property:"attributeMap", value: Object): void;
                    get(property:"attributeMap"): Object;
                    watch(property:"attributeMap", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * Root CSS class of the widget (ex: dijitTextBox), used to construct CSS classes to indicate
                     * widget state.
                     * 
                     */
                    "baseClass": string;
                    set(property:"baseClass", value: string): void;
                    get(property:"baseClass"): string;
                    watch(property:"baseClass", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "class": string;
                    set(property:"class", value: string): void;
                    get(property:"class"): string;
                    watch(property:"class", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * Designates where children of the source DOM node will be placed.
                     * "Children" in this case refers to both DOM nodes and widgets.
                     * For example, for myWidget:
                     * 
                     * <div data-dojo-type=myWidget>
                     *     <b> here's a plain DOM node
                     *     <span data-dojo-type=subWidget>and a widget</span>
                     *     <i> and another plain DOM node </i>
                     * </div>
                     * containerNode would point to:
                     * 
                     * <b> here's a plain DOM node
                     * <span data-dojo-type=subWidget>and a widget</span>
                     * <i> and another plain DOM node </i>
                     * In templated widgets, "containerNode" is set via a
                     * data-dojo-attach-point assignment.
                     * 
                     * containerNode must be defined for any widget that accepts innerHTML
                     * (like ContentPane or BorderContainer or even Button), and conversely
                     * is null for widgets that don't, like TextBox.
                     * 
                     */
                    "containerNode": HTMLElement;
                    set(property:"containerNode", value: HTMLElement): void;
                    get(property:"containerNode"): HTMLElement;
                    watch(property:"containerNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                    /**
                     * Used to provide a context require to the dojo/parser in order to be
                     * able to use relative MIDs (e.g. ./Widget) in the widget's template.
                     * 
                     */
                    "contextRequire": Function;
                    set(property:"contextRequire", value: Function): void;
                    get(property:"contextRequire"): Function;
                    watch(property:"contextRequire", callback:{(property?:string, oldValue?:Function, newValue?: Function):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "deleteButton": Object;
                    set(property:"deleteButton", value: Object): void;
                    get(property:"deleteButton"): Object;
                    watch(property:"deleteButton", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * Bi-directional support, as defined by the HTML DIR
                     * attribute. Either left-to-right "ltr" or right-to-left "rtl".  If undefined, widgets renders in page's
                     * default direction.
                     * 
                     */
                    "dir": string;
                    set(property:"dir", value: string): void;
                    get(property:"dir"): string;
                    watch(property:"dir", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * This is our visible representation of the widget! Other DOM
                     * Nodes may by assigned to other properties, usually through the
                     * template system's data-dojo-attach-point syntax, but the domNode
                     * property is the canonical "top level" node in widget UI.
                     * 
                     */
                    "domNode": HTMLElement;
                    set(property:"domNode", value: HTMLElement): void;
                    get(property:"domNode"): HTMLElement;
                    watch(property:"domNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "entry": Object;
                    set(property:"entry", value: Object): void;
                    get(property:"entry"): Object;
                    watch(property:"entry", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "entryNode": Object;
                    set(property:"entryNode", value: Object): void;
                    get(property:"entryNode"): Object;
                    watch(property:"entryNode", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "feed": Object;
                    set(property:"feed", value: Object): void;
                    get(property:"feed"): Object;
                    watch(property:"feed", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * This widget or a widget it contains has focus, or is "active" because
                     * it was recently clicked.
                     * 
                     */
                    "focused": boolean;
                    set(property:"focused", value: boolean): void;
                    get(property:"focused"): boolean;
                    watch(property:"focused", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                    /**
                     * A unique, opaque ID string that can be assigned by users or by the
                     * system. If the developer passes an ID which is known not to be
                     * unique, the specified ID is ignored and the system-generated ID is
                     * used instead.
                     * 
                     */
                    "id": string;
                    set(property:"id", value: string): void;
                    get(property:"id"): string;
                    watch(property:"id", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * Rarely used.  Overrides the default Dojo locale used to render this widget,
                     * as defined by the HTML LANG attribute.
                     * Value must be among the list of locales specified during by the Dojo bootstrap,
                     * formatted according to RFC 3066 (like en-us).
                     * 
                     */
                    "lang": string;
                    set(property:"lang", value: string): void;
                    get(property:"lang"): string;
                    watch(property:"lang", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * The document this widget belongs to.  If not specified to constructor, will default to
                     * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
                     * 
                     */
                    "ownerDocument": Object;
                    set(property:"ownerDocument", value: Object): void;
                    get(property:"ownerDocument"): Object;
                    watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "searchContainerNode": boolean;
                    set(property:"searchContainerNode", value: boolean): void;
                    get(property:"searchContainerNode"): boolean;
                    watch(property:"searchContainerNode", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                    /**
                     * pointer to original DOM node
                     * 
                     */
                    "srcNodeRef": HTMLElement;
                    set(property:"srcNodeRef", value: HTMLElement): void;
                    get(property:"srcNodeRef"): HTMLElement;
                    watch(property:"srcNodeRef", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                    /**
                     * HTML style attributes as cssText string or name/value hash
                     * 
                     */
                    "style": string;
                    set(property:"style", value: string): void;
                    get(property:"style"): string;
                    watch(property:"style", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * Path to template (HTML file) for this widget relative to dojo.baseUrl.
                     * Deprecated: use templateString with require([... "dojo/text!..."], ...) instead
                     * 
                     */
                    "templatePath": string;
                    set(property:"templatePath", value: string): void;
                    get(property:"templatePath"): string;
                    watch(property:"templatePath", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "templateString": string;
                    set(property:"templateString", value: string): void;
                    get(property:"templateString"): string;
                    watch(property:"templateString", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "timeNode": Object;
                    set(property:"timeNode", value: Object): void;
                    get(property:"timeNode"): Object;
                    watch(property:"timeNode", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * HTML title attribute.
                     * 
                     * For form widgets this specifies a tooltip to display when hovering over
                     * the widget (just like the native HTML title attribute).
                     * 
                     * For TitlePane or for when this widget is a child of a TabContainer, AccordionContainer,
                     * etc., it's used to specify the tab label, accordion pane title, etc.  In this case it's
                     * interpreted as HTML.
                     * 
                     */
                    "title": string;
                    set(property:"title", value: string): void;
                    get(property:"title"): string;
                    watch(property:"title", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * When this widget's title attribute is used to for a tab label, accordion pane title, etc.,
                     * this specifies the tooltip to appear when the mouse is hovered over that text.
                     * 
                     */
                    "tooltip": string;
                    set(property:"tooltip", value: string): void;
                    get(property:"tooltip"): string;
                    watch(property:"tooltip", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * Should we parse the template to find widgets that might be
                     * declared in markup inside it?  False by default.
                     * 
                     */
                    "widgetsInTemplate": boolean;
                    set(property:"widgetsInTemplate", value: boolean): void;
                    get(property:"widgetsInTemplate"): boolean;
                    watch(property:"widgetsInTemplate", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                    /**
                     * This method is deprecated, use get() or set() directly.
                     * 
                     * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
                     * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
                     */
                    attr(name: String, value: Object): any;
                    /**
                     * This method is deprecated, use get() or set() directly.
                     * 
                     * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
                     * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
                     */
                    attr(name: Object, value: Object): any;
                    /**
                     * Construct the UI for this widget, setting this.domNode.
                     * Most widgets will mixin dijit._TemplatedMixin, which implements this method.
                     * 
                     */
                    buildRendering(): void;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: Object, event: String, method: String): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: any, event: String, method: String): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: Object, event: Function, method: String): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: any, event: Function, method: String): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: Object, event: String, method: Function): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: any, event: String, method: Function): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: Object, event: Function, method: Function): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: any, event: Function, method: Function): any;
                    /**
                     * Wrapper to setTimeout to avoid deferred functions executing
                     * after the originating widget has been destroyed.
                     * Returns an object handle with a remove method (that returns null) (replaces clearTimeout).
                     * 
                     * @param fcn Function reference.             
                     * @param delay               OptionalDelay, defaults to 0.             
                     */
                    defer(fcn: Function, delay: number): Object;
                    /**
                     * Function to handle the delete event and delete the entry.
                     * 
                     * @param event             
                     */
                    deleteEntry(event: Object): any;
                    /**
                     * Destroy this widget, but not its descendants.  Descendants means widgets inside of
                     * this.containerNode.   Will also destroy any resources (including widgets) registered via this.own().
                     * 
                     * This method will also destroy internal widgets such as those created from a template,
                     * assuming those widgets exist inside of this.domNode but outside of this.containerNode.
                     * 
                     * For 2.0 it's planned that this method will also destroy descendant widgets, so apps should not
                     * depend on the current ability to destroy a widget without destroying its descendants.   Generally
                     * they should use destroyRecursive() for widgets with children.
                     * 
                     * @param preserveDom If true, this method will leave the original DOM structure alone.Note: This will not yet work with _TemplatedMixin widgets             
                     */
                    destroy(preserveDom?: boolean): void;
                    /**
                     * Recursively destroy the children of this widget and their
                     * descendants.
                     * 
                     * @param preserveDom               OptionalIf true, the preserveDom attribute is passed to all descendantwidget's .destroy() method. Not for use with _Templatedwidgets.             
                     */
                    destroyDescendants(preserveDom: boolean): void;
                    /**
                     * Destroy this widget and its descendants
                     * This is the generic "destructor" function that all widget users
                     * should call to cleanly discard with a widget. Once a widget is
                     * destroyed, it is removed from the manager object.
                     * 
                     * @param preserveDom               OptionalIf true, this method will leave the original DOM structurealone of descendant Widgets. Note: This will NOT work withdijit._TemplatedMixin widgets.             
                     */
                    destroyRecursive(preserveDom: boolean): void;
                    /**
                     * Destroys the DOM nodes associated with this widget.
                     * 
                     * @param preserveDom               OptionalIf true, this method will leave the original DOM structure aloneduring tear-down. Note: this will not work with _Templatedwidgets yet.             
                     */
                    destroyRendering(preserveDom?: boolean): void;
                    /**
                     * Function to disable the delete action on this entry.
                     * 
                     */
                    disableDelete(): any;
                    /**
                     * Deprecated, will be removed in 2.0, use handle.remove() instead.
                     * 
                     * Disconnects handle created by connect.
                     * 
                     * @param handle             
                     */
                    disconnect(handle: any): void;
                    /**
                     * Used by widgets to signal that a synthetic event occurred, ex:
                     * 
                     * myWidget.emit("attrmodified-selectedChildWidget", {}).
                     * Emits an event on this.domNode named type.toLowerCase(), based on eventObj.
                     * Also calls onType() method, if present, and returns value from that method.
                     * By default passes eventObj to callback, but will pass callbackArgs instead, if specified.
                     * Modifies eventObj by adding missing parameters (bubbles, cancelable, widget).
                     * 
                     * @param type             
                     * @param eventObj               Optional            
                     * @param callbackArgs               Optional            
                     */
                    emit(type: String, eventObj: Object, callbackArgs: any[]): any;
                    /**
                     * Function to enable the delete action on this entry.
                     * 
                     */
                    enableDelete(): any;
                    /**
                     * Get a property from a widget.
                     * Get a named property from a widget. The property may
                     * potentially be retrieved via a getter method. If no getter is defined, this
                     * just retrieves the object's property.
                     * 
                     * For example, if the widget has properties foo and bar
                     * and a method named _getFooAttr(), calling:
                     * myWidget.get("foo") would be equivalent to calling
                     * widget._getFooAttr() and myWidget.get("bar")
                     * would be equivalent to the expression
                     * widget.bar2
                     * 
                     * @param name The property to get.             
                     */
                    get(name: any): any;
                    /**
                     * Returns all direct children of this widget, i.e. all widgets underneath this.containerNode whose parent
                     * is this widget.   Note that it does not return all descendants, but rather just direct children.
                     * Analogous to Node.childNodes,
                     * except containing widgets rather than DOMNodes.
                     * 
                     * The result intentionally excludes internally created widgets (a.k.a. supporting widgets)
                     * outside of this.containerNode.
                     * 
                     * Note that the array returned is a simple array.  Application code should not assume
                     * existence of methods like forEach().
                     * 
                     */
                    getChildren(): any[];
                    /**
                     * Returns all the widgets contained by this, i.e., all widgets underneath this.containerNode.
                     * This method should generally be avoided as it returns widgets declared in templates, which are
                     * supposed to be internal/hidden, but it's left here for back-compat reasons.
                     * 
                     */
                    getDescendants(): any[];
                    /**
                     * Returns the parent widget of this widget.
                     * 
                     */
                    getParent(): any;
                    /**
                     * Return true if this widget can currently be focused
                     * and false if not
                     * 
                     */
                    isFocusable(): any;
                    /**
                     * Return this widget's explicit or implicit orientation (true for LTR, false for RTL)
                     * 
                     */
                    isLeftToRight(): any;
                    /**
                     * 
                     * @param type protected             
                     * @param func             
                     */
                    on(type: String, func: Function): any;
                    /**
                     * 
                     * @param type protected             
                     * @param func             
                     */
                    on(type: Function, func: Function): any;
                    /**
                     * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                     * already removed/destroyed manually.
                     * 
                     */
                    own(): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: String, position: String): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: HTMLElement, position: String): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: dijit._WidgetBase, position: String): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: String, position: number): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: HTMLElement, position: number): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: dijit._WidgetBase, position: number): any;
                    /**
                     * 
                     */
                    postCreate(): void;
                    /**
                     * Called after the parameters to the widget have been read-in,
                     * but before the widget template is instantiated. Especially
                     * useful to set properties that are referenced in the widget
                     * template.
                     * 
                     */
                    postMixInProperties(): void;
                    /**
                     * Set a property on a widget
                     * Sets named properties on a widget which may potentially be handled by a
                     * setter in the widget.
                     * 
                     * For example, if the widget has properties foo and bar
                     * and a method named _setFooAttr(), calling
                     * myWidget.set("foo", "Howdy!") would be equivalent to calling
                     * widget._setFooAttr("Howdy!") and myWidget.set("bar", 3)
                     * would be equivalent to the statement widget.bar = 3;
                     * 
                     * set() may also be called with a hash of name/value pairs, ex:
                     * 
                     * myWidget.set({
                     *     foo: "Howdy",
                     *     bar: 3
                     * });
                     * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                     * 
                     * @param name The property to set.             
                     * @param value The value to set in the property.             
                     */
                    set(name: any, value: any): any;
                    /**
                     * Deprecated.  Use set() instead.
                     * 
                     * @param attr             
                     * @param value             
                     */
                    setAttribute(attr: String, value: any): void;
                    /**
                     * Function to set the time of the entry.
                     * 
                     * @param timeText The string form of the date.             
                     */
                    setTime(timeText: String): any;
                    /**
                     * Function to set the title of the entry.
                     * 
                     * @param text The title.             
                     */
                    setTitle(text: String): any;
                    /**
                     * Processing after the DOM fragment is added to the document
                     * Called after a widget and its children have been created and added to the page,
                     * and all related widgets have finished their create() cycle, up through postCreate().
                     * 
                     * Note that startup() may be called while the widget is still hidden, for example if the widget is
                     * inside a hidden dijit/Dialog or an unselected tab of a dijit/layout/TabContainer.
                     * For widgets that need to do layout, it's best to put that layout code inside resize(), and then
                     * extend dijit/layout/_LayoutWidget so that resize() is called when the widget is visible.
                     * 
                     */
                    startup(): void;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(topic.subscribe()) instead.
                     * 
                     * Subscribes to the specified topic and calls the specified method
                     * of this object and registers for unsubscribe() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.subscribe, except with the
                     * implicit use of this widget as the target object.
                     * 
                     * @param t The topic             
                     * @param method The callback             
                     */
                    subscribe(t: String, method: Function): any;
                    /**
                     * Returns a string that represents the widget.
                     * When a widget is cast to a string, this method will be used to generate the
                     * output. Currently, it does not implement any sort of reversible
                     * serialization.
                     * 
                     */
                    toString(): string;
                    /**
                     * Deprecated. Override destroy() instead to implement custom widget tear-down
                     * behavior.
                     * 
                     */
                    uninitialize(): boolean;
                    /**
                     * Deprecated, will be removed in 2.0, use handle.remove() instead.
                     * 
                     * Unsubscribes handle created by this.subscribe.
                     * Also removes handle from this widget's list of subscriptions
                     * 
                     * @param handle             
                     */
                    unsubscribe(handle: Object): void;
                    /**
                     * Watches a property for changes
                     * 
                     * @param name               OptionalIndicates the property to watch. This is optional (the callback may be theonly parameter), and if omitted, all the properties will be watched             
                     * @param callback The function to execute when the property changes. This will be called afterthe property has been changed. The callback will be called with the |this|set to the instance, the first argument as the name of the property, thesecond argument as the old value and the third argument as the new value.             
                     */
                    watch(property: string, callback:{(property?:string, oldValue?:any, newValue?: any):void}) :{unwatch():void};
                    /**
                     * Static method to get a template based on the templatePath or
                     * templateString key
                     */
                    getCachedTemplate(): any;
                    /**
                     * Called when the widget stops being "active" because
                     * focus moved to something outside of it, or the user
                     * clicked somewhere outside of it, or the widget was
                     * hidden.
                     * 
                     */
                    onBlur(): void;
                    /**
                     * Attach point for when a row is clicked on.
                     * 
                     * @param e The event generated by the click.             
                     */
                    onClick(e: Object): void;
                    /**
                     * Called when this widget is being displayed as a popup (ex: a Calendar popped
                     * up from a DateTextBox), and it is hidden.
                     * This is called from the dijit.popup code, and should not be called directly.
                     * 
                     * Also used as a parameter for children of dijit/layout/StackContainer or subclasses.
                     * Callback if a user tries to close the child.   Child will be closed if this function returns true.
                     * 
                     */
                    onClose(): boolean;
                    /**
                     * Connect to this function to receive notifications of mouse double click events.
                     * 
                     * @param event mouse Event             
                     */
                    onDblClick(event: any): void;
                    /**
                     * Called when the widget becomes "active" because
                     * it or a widget inside of it either has focus, or has recently
                     * been clicked.
                     * 
                     */
                    onFocus(): void;
                    /**
                     * Called when another widget becomes the selected pane in a
                     * dijit/layout/TabContainer, dijit/layout/StackContainer,
                     * dijit/layout/AccordionContainer, etc.
                     * 
                     * Also called to indicate hide of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
                     * 
                     */
                    onHide(): void;
                    /**
                     * Connect to this function to receive notifications of keys being pressed down.
                     * 
                     * @param event key Event             
                     */
                    onKeyDown(event: any): void;
                    /**
                     * Connect to this function to receive notifications of printable keys being typed.
                     * 
                     * @param event key Event             
                     */
                    onKeyPress(event: any): void;
                    /**
                     * Connect to this function to receive notifications of keys being released.
                     * 
                     * @param event key Event             
                     */
                    onKeyUp(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse button is pressed down.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseDown(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves onto this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseEnter(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves off of this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseLeave(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves over nodes contained within this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseMove(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves off of nodes contained within this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseOut(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves onto nodes contained within this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseOver(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse button is released.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseUp(event: any): void;
                    /**
                     * Called when this widget becomes the selected pane in a
                     * dijit/layout/TabContainer, dijit/layout/StackContainer,
                     * dijit/layout/AccordionContainer, etc.
                     * 
                     * Also called to indicate display of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
                     * 
                     */
                    onShow(): void;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/atom/widget/FeedViewer.FeedViewerGrouping.html
                 *
                 * Grouping of feed entries.
                 * 
                 * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
                 * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
                 */
                class FeedViewerGrouping extends dijit._Widget implements dijit._Templated {
                    constructor(params?: Object, srcNodeRef?: HTMLElement);
                    /**
                     * Object to which attach points and events will be scoped.  Defaults
                     * to 'this'.
                     * 
                     */
                    "attachScope": Object;
                    set(property:"attachScope", value: Object): void;
                    get(property:"attachScope"): Object;
                    watch(property:"attachScope", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * Deprecated. Instead of attributeMap, widget should have a _setXXXAttr attribute
                     * for each XXX attribute to be mapped to the DOM.
                     * 
                     * attributeMap sets up a "binding" between attributes (aka properties)
                     * of the widget and the widget's DOM.
                     * Changes to widget attributes listed in attributeMap will be
                     * reflected into the DOM.
                     * 
                     * For example, calling set('title', 'hello')
                     * on a TitlePane will automatically cause the TitlePane's DOM to update
                     * with the new title.
                     * 
                     * attributeMap is a hash where the key is an attribute of the widget,
                     * and the value reflects a binding to a:
                     * 
                     * DOM node attribute
                     *   focus: {node: "focusNode", type: "attribute"}
                     * Maps this.focus to this.focusNode.focus
                     * 
                     * DOM node innerHTML
                     *   title: { node: "titleNode", type: "innerHTML" }
                     * Maps this.title to this.titleNode.innerHTML
                     * 
                     * DOM node innerText
                     *   title: { node: "titleNode", type: "innerText" }
                     * Maps this.title to this.titleNode.innerText
                     * 
                     * DOM node CSS class
                     *   myClass: { node: "domNode", type: "class" }
                     * Maps this.myClass to this.domNode.className
                     * 
                     * If the value is an array, then each element in the array matches one of the
                     * formats of the above list.
                     * 
                     * There are also some shorthands for backwards compatibility:
                     * 
                     * string --> { node: string, type: "attribute" }, for example:
                     * "focusNode" ---> { node: "focusNode", type: "attribute" }
                     * "" --> { node: "domNode", type: "attribute" }
                     * 
                     */
                    "attributeMap": Object;
                    set(property:"attributeMap", value: Object): void;
                    get(property:"attributeMap"): Object;
                    watch(property:"attributeMap", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * Root CSS class of the widget (ex: dijitTextBox), used to construct CSS classes to indicate
                     * widget state.
                     * 
                     */
                    "baseClass": string;
                    set(property:"baseClass", value: string): void;
                    get(property:"baseClass"): string;
                    watch(property:"baseClass", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "class": string;
                    set(property:"class", value: string): void;
                    get(property:"class"): string;
                    watch(property:"class", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * Designates where children of the source DOM node will be placed.
                     * "Children" in this case refers to both DOM nodes and widgets.
                     * For example, for myWidget:
                     * 
                     * <div data-dojo-type=myWidget>
                     *     <b> here's a plain DOM node
                     *     <span data-dojo-type=subWidget>and a widget</span>
                     *     <i> and another plain DOM node </i>
                     * </div>
                     * containerNode would point to:
                     * 
                     * <b> here's a plain DOM node
                     * <span data-dojo-type=subWidget>and a widget</span>
                     * <i> and another plain DOM node </i>
                     * In templated widgets, "containerNode" is set via a
                     * data-dojo-attach-point assignment.
                     * 
                     * containerNode must be defined for any widget that accepts innerHTML
                     * (like ContentPane or BorderContainer or even Button), and conversely
                     * is null for widgets that don't, like TextBox.
                     * 
                     */
                    "containerNode": HTMLElement;
                    set(property:"containerNode", value: HTMLElement): void;
                    get(property:"containerNode"): HTMLElement;
                    watch(property:"containerNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                    /**
                     * Used to provide a context require to the dojo/parser in order to be
                     * able to use relative MIDs (e.g. ./Widget) in the widget's template.
                     * 
                     */
                    "contextRequire": Function;
                    set(property:"contextRequire", value: Function): void;
                    get(property:"contextRequire"): Function;
                    watch(property:"contextRequire", callback:{(property?:string, oldValue?:Function, newValue?: Function):void}) :{unwatch():void}
                    /**
                     * Bi-directional support, as defined by the HTML DIR
                     * attribute. Either left-to-right "ltr" or right-to-left "rtl".  If undefined, widgets renders in page's
                     * default direction.
                     * 
                     */
                    "dir": string;
                    set(property:"dir", value: string): void;
                    get(property:"dir"): string;
                    watch(property:"dir", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * This is our visible representation of the widget! Other DOM
                     * Nodes may by assigned to other properties, usually through the
                     * template system's data-dojo-attach-point syntax, but the domNode
                     * property is the canonical "top level" node in widget UI.
                     * 
                     */
                    "domNode": HTMLElement;
                    set(property:"domNode", value: HTMLElement): void;
                    get(property:"domNode"): HTMLElement;
                    watch(property:"domNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                    /**
                     * This widget or a widget it contains has focus, or is "active" because
                     * it was recently clicked.
                     * 
                     */
                    "focused": boolean;
                    set(property:"focused", value: boolean): void;
                    get(property:"focused"): boolean;
                    watch(property:"focused", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "groupingNode": Object;
                    set(property:"groupingNode", value: Object): void;
                    get(property:"groupingNode"): Object;
                    watch(property:"groupingNode", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * A unique, opaque ID string that can be assigned by users or by the
                     * system. If the developer passes an ID which is known not to be
                     * unique, the specified ID is ignored and the system-generated ID is
                     * used instead.
                     * 
                     */
                    "id": string;
                    set(property:"id", value: string): void;
                    get(property:"id"): string;
                    watch(property:"id", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * Rarely used.  Overrides the default Dojo locale used to render this widget,
                     * as defined by the HTML LANG attribute.
                     * Value must be among the list of locales specified during by the Dojo bootstrap,
                     * formatted according to RFC 3066 (like en-us).
                     * 
                     */
                    "lang": string;
                    set(property:"lang", value: string): void;
                    get(property:"lang"): string;
                    watch(property:"lang", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * The document this widget belongs to.  If not specified to constructor, will default to
                     * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
                     * 
                     */
                    "ownerDocument": Object;
                    set(property:"ownerDocument", value: Object): void;
                    get(property:"ownerDocument"): Object;
                    watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "searchContainerNode": boolean;
                    set(property:"searchContainerNode", value: boolean): void;
                    get(property:"searchContainerNode"): boolean;
                    watch(property:"searchContainerNode", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                    /**
                     * pointer to original DOM node
                     * 
                     */
                    "srcNodeRef": HTMLElement;
                    set(property:"srcNodeRef", value: HTMLElement): void;
                    get(property:"srcNodeRef"): HTMLElement;
                    watch(property:"srcNodeRef", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                    /**
                     * HTML style attributes as cssText string or name/value hash
                     * 
                     */
                    "style": string;
                    set(property:"style", value: string): void;
                    get(property:"style"): string;
                    watch(property:"style", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * Path to template (HTML file) for this widget relative to dojo.baseUrl.
                     * Deprecated: use templateString with require([... "dojo/text!..."], ...) instead
                     * 
                     */
                    "templatePath": string;
                    set(property:"templatePath", value: string): void;
                    get(property:"templatePath"): string;
                    watch(property:"templatePath", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "templateString": string;
                    set(property:"templateString", value: string): void;
                    get(property:"templateString"): string;
                    watch(property:"templateString", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * HTML title attribute.
                     * 
                     * For form widgets this specifies a tooltip to display when hovering over
                     * the widget (just like the native HTML title attribute).
                     * 
                     * For TitlePane or for when this widget is a child of a TabContainer, AccordionContainer,
                     * etc., it's used to specify the tab label, accordion pane title, etc.  In this case it's
                     * interpreted as HTML.
                     * 
                     */
                    "title": string;
                    set(property:"title", value: string): void;
                    get(property:"title"): string;
                    watch(property:"title", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "titleNode": Object;
                    set(property:"titleNode", value: Object): void;
                    get(property:"titleNode"): Object;
                    watch(property:"titleNode", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * When this widget's title attribute is used to for a tab label, accordion pane title, etc.,
                     * this specifies the tooltip to appear when the mouse is hovered over that text.
                     * 
                     */
                    "tooltip": string;
                    set(property:"tooltip", value: string): void;
                    get(property:"tooltip"): string;
                    watch(property:"tooltip", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * Should we parse the template to find widgets that might be
                     * declared in markup inside it?  False by default.
                     * 
                     */
                    "widgetsInTemplate": boolean;
                    set(property:"widgetsInTemplate", value: boolean): void;
                    get(property:"widgetsInTemplate"): boolean;
                    watch(property:"widgetsInTemplate", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                    /**
                     * This method is deprecated, use get() or set() directly.
                     * 
                     * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
                     * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
                     */
                    attr(name: String, value: Object): any;
                    /**
                     * This method is deprecated, use get() or set() directly.
                     * 
                     * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
                     * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
                     */
                    attr(name: Object, value: Object): any;
                    /**
                     * Construct the UI for this widget, setting this.domNode.
                     * Most widgets will mixin dijit._TemplatedMixin, which implements this method.
                     * 
                     */
                    buildRendering(): void;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: Object, event: String, method: String): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: any, event: String, method: String): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: Object, event: Function, method: String): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: any, event: Function, method: String): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: Object, event: String, method: Function): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: any, event: String, method: Function): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: Object, event: Function, method: Function): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: any, event: Function, method: Function): any;
                    /**
                     * Wrapper to setTimeout to avoid deferred functions executing
                     * after the originating widget has been destroyed.
                     * Returns an object handle with a remove method (that returns null) (replaces clearTimeout).
                     * 
                     * @param fcn Function reference.             
                     * @param delay               OptionalDelay, defaults to 0.             
                     */
                    defer(fcn: Function, delay: number): Object;
                    /**
                     * Destroy this widget, but not its descendants.  Descendants means widgets inside of
                     * this.containerNode.   Will also destroy any resources (including widgets) registered via this.own().
                     * 
                     * This method will also destroy internal widgets such as those created from a template,
                     * assuming those widgets exist inside of this.domNode but outside of this.containerNode.
                     * 
                     * For 2.0 it's planned that this method will also destroy descendant widgets, so apps should not
                     * depend on the current ability to destroy a widget without destroying its descendants.   Generally
                     * they should use destroyRecursive() for widgets with children.
                     * 
                     * @param preserveDom If true, this method will leave the original DOM structure alone.Note: This will not yet work with _TemplatedMixin widgets             
                     */
                    destroy(preserveDom?: boolean): void;
                    /**
                     * Recursively destroy the children of this widget and their
                     * descendants.
                     * 
                     * @param preserveDom               OptionalIf true, the preserveDom attribute is passed to all descendantwidget's .destroy() method. Not for use with _Templatedwidgets.             
                     */
                    destroyDescendants(preserveDom: boolean): void;
                    /**
                     * Destroy this widget and its descendants
                     * This is the generic "destructor" function that all widget users
                     * should call to cleanly discard with a widget. Once a widget is
                     * destroyed, it is removed from the manager object.
                     * 
                     * @param preserveDom               OptionalIf true, this method will leave the original DOM structurealone of descendant Widgets. Note: This will NOT work withdijit._TemplatedMixin widgets.             
                     */
                    destroyRecursive(preserveDom: boolean): void;
                    /**
                     * Destroys the DOM nodes associated with this widget.
                     * 
                     * @param preserveDom               OptionalIf true, this method will leave the original DOM structure aloneduring tear-down. Note: this will not work with _Templatedwidgets yet.             
                     */
                    destroyRendering(preserveDom?: boolean): void;
                    /**
                     * Deprecated, will be removed in 2.0, use handle.remove() instead.
                     * 
                     * Disconnects handle created by connect.
                     * 
                     * @param handle             
                     */
                    disconnect(handle: any): void;
                    /**
                     * Used by widgets to signal that a synthetic event occurred, ex:
                     * 
                     * myWidget.emit("attrmodified-selectedChildWidget", {}).
                     * Emits an event on this.domNode named type.toLowerCase(), based on eventObj.
                     * Also calls onType() method, if present, and returns value from that method.
                     * By default passes eventObj to callback, but will pass callbackArgs instead, if specified.
                     * Modifies eventObj by adding missing parameters (bubbles, cancelable, widget).
                     * 
                     * @param type             
                     * @param eventObj               Optional            
                     * @param callbackArgs               Optional            
                     */
                    emit(type: String, eventObj: Object, callbackArgs: any[]): any;
                    /**
                     * Get a property from a widget.
                     * Get a named property from a widget. The property may
                     * potentially be retrieved via a getter method. If no getter is defined, this
                     * just retrieves the object's property.
                     * 
                     * For example, if the widget has properties foo and bar
                     * and a method named _getFooAttr(), calling:
                     * myWidget.get("foo") would be equivalent to calling
                     * widget._getFooAttr() and myWidget.get("bar")
                     * would be equivalent to the expression
                     * widget.bar2
                     * 
                     * @param name The property to get.             
                     */
                    get(name: any): any;
                    /**
                     * Returns all direct children of this widget, i.e. all widgets underneath this.containerNode whose parent
                     * is this widget.   Note that it does not return all descendants, but rather just direct children.
                     * Analogous to Node.childNodes,
                     * except containing widgets rather than DOMNodes.
                     * 
                     * The result intentionally excludes internally created widgets (a.k.a. supporting widgets)
                     * outside of this.containerNode.
                     * 
                     * Note that the array returned is a simple array.  Application code should not assume
                     * existence of methods like forEach().
                     * 
                     */
                    getChildren(): any[];
                    /**
                     * Returns all the widgets contained by this, i.e., all widgets underneath this.containerNode.
                     * This method should generally be avoided as it returns widgets declared in templates, which are
                     * supposed to be internal/hidden, but it's left here for back-compat reasons.
                     * 
                     */
                    getDescendants(): any[];
                    /**
                     * Returns the parent widget of this widget.
                     * 
                     */
                    getParent(): any;
                    /**
                     * Return true if this widget can currently be focused
                     * and false if not
                     * 
                     */
                    isFocusable(): any;
                    /**
                     * Return this widget's explicit or implicit orientation (true for LTR, false for RTL)
                     * 
                     */
                    isLeftToRight(): any;
                    /**
                     * 
                     * @param type protected             
                     * @param func             
                     */
                    on(type: String, func: Function): any;
                    /**
                     * 
                     * @param type protected             
                     * @param func             
                     */
                    on(type: Function, func: Function): any;
                    /**
                     * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                     * already removed/destroyed manually.
                     * 
                     */
                    own(): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: String, position: String): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: HTMLElement, position: String): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: dijit._WidgetBase, position: String): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: String, position: number): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: HTMLElement, position: number): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: dijit._WidgetBase, position: number): any;
                    /**
                     * 
                     */
                    postCreate(): void;
                    /**
                     * Called after the parameters to the widget have been read-in,
                     * but before the widget template is instantiated. Especially
                     * useful to set properties that are referenced in the widget
                     * template.
                     * 
                     */
                    postMixInProperties(): void;
                    /**
                     * Set a property on a widget
                     * Sets named properties on a widget which may potentially be handled by a
                     * setter in the widget.
                     * 
                     * For example, if the widget has properties foo and bar
                     * and a method named _setFooAttr(), calling
                     * myWidget.set("foo", "Howdy!") would be equivalent to calling
                     * widget._setFooAttr("Howdy!") and myWidget.set("bar", 3)
                     * would be equivalent to the statement widget.bar = 3;
                     * 
                     * set() may also be called with a hash of name/value pairs, ex:
                     * 
                     * myWidget.set({
                     *     foo: "Howdy",
                     *     bar: 3
                     * });
                     * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                     * 
                     * @param name The property to set.             
                     * @param value The value to set in the property.             
                     */
                    set(name: any, value: any): any;
                    /**
                     * Deprecated.  Use set() instead.
                     * 
                     * @param attr             
                     * @param value             
                     */
                    setAttribute(attr: String, value: any): void;
                    /**
                     * Sets the text to be shown above this grouping.
                     * 
                     * @param text The text to show.             
                     */
                    setText(text: any): void;
                    /**
                     * Processing after the DOM fragment is added to the document
                     * Called after a widget and its children have been created and added to the page,
                     * and all related widgets have finished their create() cycle, up through postCreate().
                     * 
                     * Note that startup() may be called while the widget is still hidden, for example if the widget is
                     * inside a hidden dijit/Dialog or an unselected tab of a dijit/layout/TabContainer.
                     * For widgets that need to do layout, it's best to put that layout code inside resize(), and then
                     * extend dijit/layout/_LayoutWidget so that resize() is called when the widget is visible.
                     * 
                     */
                    startup(): void;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(topic.subscribe()) instead.
                     * 
                     * Subscribes to the specified topic and calls the specified method
                     * of this object and registers for unsubscribe() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.subscribe, except with the
                     * implicit use of this widget as the target object.
                     * 
                     * @param t The topic             
                     * @param method The callback             
                     */
                    subscribe(t: String, method: Function): any;
                    /**
                     * Returns a string that represents the widget.
                     * When a widget is cast to a string, this method will be used to generate the
                     * output. Currently, it does not implement any sort of reversible
                     * serialization.
                     * 
                     */
                    toString(): string;
                    /**
                     * Deprecated. Override destroy() instead to implement custom widget tear-down
                     * behavior.
                     * 
                     */
                    uninitialize(): boolean;
                    /**
                     * Deprecated, will be removed in 2.0, use handle.remove() instead.
                     * 
                     * Unsubscribes handle created by this.subscribe.
                     * Also removes handle from this widget's list of subscriptions
                     * 
                     * @param handle             
                     */
                    unsubscribe(handle: Object): void;
                    /**
                     * Watches a property for changes
                     * 
                     * @param name               OptionalIndicates the property to watch. This is optional (the callback may be theonly parameter), and if omitted, all the properties will be watched             
                     * @param callback The function to execute when the property changes. This will be called afterthe property has been changed. The callback will be called with the |this|set to the instance, the first argument as the name of the property, thesecond argument as the old value and the third argument as the new value.             
                     */
                    watch(property: string, callback:{(property?:string, oldValue?:any, newValue?: any):void}) :{unwatch():void};
                    /**
                     * Static method to get a template based on the templatePath or
                     * templateString key
                     */
                    getCachedTemplate(): any;
                    /**
                     * Called when the widget stops being "active" because
                     * focus moved to something outside of it, or the user
                     * clicked somewhere outside of it, or the widget was
                     * hidden.
                     * 
                     */
                    onBlur(): void;
                    /**
                     * Connect to this function to receive notifications of mouse click events.
                     * 
                     * @param event mouse Event             
                     */
                    onClick(event: any): void;
                    /**
                     * Called when this widget is being displayed as a popup (ex: a Calendar popped
                     * up from a DateTextBox), and it is hidden.
                     * This is called from the dijit.popup code, and should not be called directly.
                     * 
                     * Also used as a parameter for children of dijit/layout/StackContainer or subclasses.
                     * Callback if a user tries to close the child.   Child will be closed if this function returns true.
                     * 
                     */
                    onClose(): boolean;
                    /**
                     * Connect to this function to receive notifications of mouse double click events.
                     * 
                     * @param event mouse Event             
                     */
                    onDblClick(event: any): void;
                    /**
                     * Called when the widget becomes "active" because
                     * it or a widget inside of it either has focus, or has recently
                     * been clicked.
                     * 
                     */
                    onFocus(): void;
                    /**
                     * Called when another widget becomes the selected pane in a
                     * dijit/layout/TabContainer, dijit/layout/StackContainer,
                     * dijit/layout/AccordionContainer, etc.
                     * 
                     * Also called to indicate hide of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
                     * 
                     */
                    onHide(): void;
                    /**
                     * Connect to this function to receive notifications of keys being pressed down.
                     * 
                     * @param event key Event             
                     */
                    onKeyDown(event: any): void;
                    /**
                     * Connect to this function to receive notifications of printable keys being typed.
                     * 
                     * @param event key Event             
                     */
                    onKeyPress(event: any): void;
                    /**
                     * Connect to this function to receive notifications of keys being released.
                     * 
                     * @param event key Event             
                     */
                    onKeyUp(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse button is pressed down.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseDown(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves onto this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseEnter(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves off of this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseLeave(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves over nodes contained within this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseMove(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves off of nodes contained within this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseOut(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves onto nodes contained within this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseOver(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse button is released.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseUp(event: any): void;
                    /**
                     * Called when this widget becomes the selected pane in a
                     * dijit/layout/TabContainer, dijit/layout/StackContainer,
                     * dijit/layout/AccordionContainer, etc.
                     * 
                     * Also called to indicate display of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
                     * 
                     */
                    onShow(): void;
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/atom/widget/FeedEntryViewer.html
             *
             * An ATOM feed entry editor for publishing updated ATOM entries, or viewing non-editable entries.
             * 
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
             */
            class FeedEntryViewer extends dijit._Widget implements dijit._Templated, dijit._Container {
                constructor(params?: Object, srcNodeRef?: HTMLElement);
                /**
                 * Object to which attach points and events will be scoped.  Defaults
                 * to 'this'.
                 * 
                 */
                "attachScope": Object;
                set(property:"attachScope", value: Object): void;
                get(property:"attachScope"): Object;
                watch(property:"attachScope", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * Deprecated. Instead of attributeMap, widget should have a _setXXXAttr attribute
                 * for each XXX attribute to be mapped to the DOM.
                 * 
                 * attributeMap sets up a "binding" between attributes (aka properties)
                 * of the widget and the widget's DOM.
                 * Changes to widget attributes listed in attributeMap will be
                 * reflected into the DOM.
                 * 
                 * For example, calling set('title', 'hello')
                 * on a TitlePane will automatically cause the TitlePane's DOM to update
                 * with the new title.
                 * 
                 * attributeMap is a hash where the key is an attribute of the widget,
                 * and the value reflects a binding to a:
                 * 
                 * DOM node attribute
                 *   focus: {node: "focusNode", type: "attribute"}
                 * Maps this.focus to this.focusNode.focus
                 * 
                 * DOM node innerHTML
                 *   title: { node: "titleNode", type: "innerHTML" }
                 * Maps this.title to this.titleNode.innerHTML
                 * 
                 * DOM node innerText
                 *   title: { node: "titleNode", type: "innerText" }
                 * Maps this.title to this.titleNode.innerText
                 * 
                 * DOM node CSS class
                 *   myClass: { node: "domNode", type: "class" }
                 * Maps this.myClass to this.domNode.className
                 * 
                 * If the value is an array, then each element in the array matches one of the
                 * formats of the above list.
                 * 
                 * There are also some shorthands for backwards compatibility:
                 * 
                 * string --> { node: string, type: "attribute" }, for example:
                 * "focusNode" ---> { node: "focusNode", type: "attribute" }
                 * "" --> { node: "domNode", type: "attribute" }
                 * 
                 */
                "attributeMap": Object;
                set(property:"attributeMap", value: Object): void;
                get(property:"attributeMap"): Object;
                watch(property:"attributeMap", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * Root CSS class of the widget (ex: dijitTextBox), used to construct CSS classes to indicate
                 * widget state.
                 * 
                 */
                "baseClass": string;
                set(property:"baseClass", value: string): void;
                get(property:"baseClass"): string;
                watch(property:"baseClass", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * 
                 */
                "class": string;
                set(property:"class", value: string): void;
                get(property:"class"): string;
                watch(property:"class", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * Designates where children of the source DOM node will be placed.
                 * "Children" in this case refers to both DOM nodes and widgets.
                 * For example, for myWidget:
                 * 
                 * <div data-dojo-type=myWidget>
                 *     <b> here's a plain DOM node
                 *     <span data-dojo-type=subWidget>and a widget</span>
                 *     <i> and another plain DOM node </i>
                 * </div>
                 * containerNode would point to:
                 * 
                 * <b> here's a plain DOM node
                 * <span data-dojo-type=subWidget>and a widget</span>
                 * <i> and another plain DOM node </i>
                 * In templated widgets, "containerNode" is set via a
                 * data-dojo-attach-point assignment.
                 * 
                 * containerNode must be defined for any widget that accepts innerHTML
                 * (like ContentPane or BorderContainer or even Button), and conversely
                 * is null for widgets that don't, like TextBox.
                 * 
                 */
                "containerNode": HTMLElement;
                set(property:"containerNode", value: HTMLElement): void;
                get(property:"containerNode"): HTMLElement;
                watch(property:"containerNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                /**
                 * Used to provide a context require to the dojo/parser in order to be
                 * able to use relative MIDs (e.g. ./Widget) in the widget's template.
                 * 
                 */
                "contextRequire": Function;
                set(property:"contextRequire", value: Function): void;
                get(property:"contextRequire"): Function;
                watch(property:"contextRequire", callback:{(property?:string, oldValue?:Function, newValue?: Function):void}) :{unwatch():void}
                /**
                 * Bi-directional support, as defined by the HTML DIR
                 * attribute. Either left-to-right "ltr" or right-to-left "rtl".  If undefined, widgets renders in page's
                 * default direction.
                 * 
                 */
                "dir": string;
                set(property:"dir", value: string): void;
                get(property:"dir"): string;
                watch(property:"dir", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * 
                 */
                "displayEntrySections": string;
                set(property:"displayEntrySections", value: string): void;
                get(property:"displayEntrySections"): string;
                watch(property:"displayEntrySections", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * This is our visible representation of the widget! Other DOM
                 * Nodes may by assigned to other properties, usually through the
                 * template system's data-dojo-attach-point syntax, but the domNode
                 * property is the canonical "top level" node in widget UI.
                 * 
                 */
                "domNode": HTMLElement;
                set(property:"domNode", value: HTMLElement): void;
                get(property:"domNode"): HTMLElement;
                watch(property:"domNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                /**
                 * 
                 */
                "enableMenu": boolean;
                set(property:"enableMenu", value: boolean): void;
                get(property:"enableMenu"): boolean;
                watch(property:"enableMenu", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * 
                 */
                "enableMenuFade": boolean;
                set(property:"enableMenuFade", value: boolean): void;
                get(property:"enableMenuFade"): boolean;
                watch(property:"enableMenuFade", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * 
                 */
                "entrySelectionTopic": string;
                set(property:"entrySelectionTopic", value: string): void;
                get(property:"entrySelectionTopic"): string;
                watch(property:"entrySelectionTopic", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * This widget or a widget it contains has focus, or is "active" because
                 * it was recently clicked.
                 * 
                 */
                "focused": boolean;
                set(property:"focused", value: boolean): void;
                get(property:"focused"): boolean;
                watch(property:"focused", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * A unique, opaque ID string that can be assigned by users or by the
                 * system. If the developer passes an ID which is known not to be
                 * unique, the specified ID is ignored and the system-generated ID is
                 * used instead.
                 * 
                 */
                "id": string;
                set(property:"id", value: string): void;
                get(property:"id"): string;
                watch(property:"id", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * Rarely used.  Overrides the default Dojo locale used to render this widget,
                 * as defined by the HTML LANG attribute.
                 * Value must be among the list of locales specified during by the Dojo bootstrap,
                 * formatted according to RFC 3066 (like en-us).
                 * 
                 */
                "lang": string;
                set(property:"lang", value: string): void;
                get(property:"lang"): string;
                watch(property:"lang", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * The document this widget belongs to.  If not specified to constructor, will default to
                 * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
                 * 
                 */
                "ownerDocument": Object;
                set(property:"ownerDocument", value: Object): void;
                get(property:"ownerDocument"): Object;
                watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * 
                 */
                "searchContainerNode": boolean;
                set(property:"searchContainerNode", value: boolean): void;
                get(property:"searchContainerNode"): boolean;
                watch(property:"searchContainerNode", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * pointer to original DOM node
                 * 
                 */
                "srcNodeRef": HTMLElement;
                set(property:"srcNodeRef", value: HTMLElement): void;
                get(property:"srcNodeRef"): HTMLElement;
                watch(property:"srcNodeRef", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                /**
                 * HTML style attributes as cssText string or name/value hash
                 * 
                 */
                "style": string;
                set(property:"style", value: string): void;
                get(property:"style"): string;
                watch(property:"style", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * Path to template (HTML file) for this widget relative to dojo.baseUrl.
                 * Deprecated: use templateString with require([... "dojo/text!..."], ...) instead
                 * 
                 */
                "templatePath": string;
                set(property:"templatePath", value: string): void;
                get(property:"templatePath"): string;
                watch(property:"templatePath", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * 
                 */
                "templateString": string;
                set(property:"templateString", value: string): void;
                get(property:"templateString"): string;
                watch(property:"templateString", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * HTML title attribute.
                 * 
                 * For form widgets this specifies a tooltip to display when hovering over
                 * the widget (just like the native HTML title attribute).
                 * 
                 * For TitlePane or for when this widget is a child of a TabContainer, AccordionContainer,
                 * etc., it's used to specify the tab label, accordion pane title, etc.  In this case it's
                 * interpreted as HTML.
                 * 
                 */
                "title": string;
                set(property:"title", value: string): void;
                get(property:"title"): string;
                watch(property:"title", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * When this widget's title attribute is used to for a tab label, accordion pane title, etc.,
                 * this specifies the tooltip to appear when the mouse is hovered over that text.
                 * 
                 */
                "tooltip": string;
                set(property:"tooltip", value: string): void;
                get(property:"tooltip"): string;
                watch(property:"tooltip", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * Should we parse the template to find widgets that might be
                 * declared in markup inside it?  False by default.
                 * 
                 */
                "widgetsInTemplate": boolean;
                set(property:"widgetsInTemplate", value: boolean): void;
                get(property:"widgetsInTemplate"): boolean;
                watch(property:"widgetsInTemplate", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * Makes the given widget a child of this widget.
                 * Inserts specified child widget's dom node as a child of this widget's
                 * container node, and possibly does other processing (such as layout).
                 * 
                 * @param widget             
                 * @param insertIndex               Optional            
                 */
                addChild(widget: dijit._WidgetBase, insertIndex: number): void;
                /**
                 * This method is deprecated, use get() or set() directly.
                 * 
                 * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
                 * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
                 */
                attr(name: String, value: Object): any;
                /**
                 * This method is deprecated, use get() or set() directly.
                 * 
                 * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
                 * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
                 */
                attr(name: Object, value: Object): any;
                /**
                 * Construct the UI for this widget, setting this.domNode.
                 * Most widgets will mixin dijit._TemplatedMixin, which implements this method.
                 * 
                 */
                buildRendering(): void;
                /**
                 * Function to clear the state of the widget.
                 * 
                 */
                clear(): void;
                /**
                 * Function to clear all the display nodes for the ATOM entry from the viewer.
                 * 
                 */
                clearNodes(): void;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: Object, event: String, method: String): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: any, event: String, method: String): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: Object, event: Function, method: String): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: any, event: Function, method: String): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: Object, event: String, method: Function): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: any, event: String, method: Function): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: Object, event: Function, method: Function): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: any, event: Function, method: Function): any;
                /**
                 * Wrapper to setTimeout to avoid deferred functions executing
                 * after the originating widget has been destroyed.
                 * Returns an object handle with a remove method (that returns null) (replaces clearTimeout).
                 * 
                 * @param fcn Function reference.             
                 * @param delay               OptionalDelay, defaults to 0.             
                 */
                defer(fcn: Function, delay: number): Object;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * Recursively destroy the children of this widget and their
                 * descendants.
                 * 
                 * @param preserveDom               OptionalIf true, the preserveDom attribute is passed to all descendantwidget's .destroy() method. Not for use with _Templatedwidgets.             
                 */
                destroyDescendants(preserveDom: boolean): void;
                /**
                 * Destroy this widget and its descendants
                 * This is the generic "destructor" function that all widget users
                 * should call to cleanly discard with a widget. Once a widget is
                 * destroyed, it is removed from the manager object.
                 * 
                 * @param preserveDom               OptionalIf true, this method will leave the original DOM structurealone of descendant Widgets. Note: This will NOT work withdijit._TemplatedMixin widgets.             
                 */
                destroyRecursive(preserveDom: boolean): void;
                /**
                 * Destroys the DOM nodes associated with this widget.
                 * 
                 * @param preserveDom               OptionalIf true, this method will leave the original DOM structure aloneduring tear-down. Note: this will not work with _Templatedwidgets yet.             
                 */
                destroyRendering(preserveDom?: boolean): void;
                /**
                 * Deprecated, will be removed in 2.0, use handle.remove() instead.
                 * 
                 * Disconnects handle created by connect.
                 * 
                 * @param handle             
                 */
                disconnect(handle: any): void;
                /**
                 * Used by widgets to signal that a synthetic event occurred, ex:
                 * 
                 * myWidget.emit("attrmodified-selectedChildWidget", {}).
                 * Emits an event on this.domNode named type.toLowerCase(), based on eventObj.
                 * Also calls onType() method, if present, and returns value from that method.
                 * By default passes eventObj to callback, but will pass callbackArgs instead, if specified.
                 * Modifies eventObj by adding missing parameters (bubbles, cancelable, widget).
                 * 
                 * @param type             
                 * @param eventObj               Optional            
                 * @param callbackArgs               Optional            
                 */
                emit(type: String, eventObj: Object, callbackArgs: any[]): any;
                /**
                 * 
                 */
                EntryHeader(): void;
                /**
                 * Get a property from a widget.
                 * Get a named property from a widget. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * 
                 * For example, if the widget has properties foo and bar
                 * and a method named _getFooAttr(), calling:
                 * myWidget.get("foo") would be equivalent to calling
                 * widget._getFooAttr() and myWidget.get("bar")
                 * would be equivalent to the expression
                 * widget.bar2
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Returns all direct children of this widget, i.e. all widgets underneath this.containerNode whose parent
                 * is this widget.   Note that it does not return all descendants, but rather just direct children.
                 * Analogous to Node.childNodes,
                 * except containing widgets rather than DOMNodes.
                 * 
                 * The result intentionally excludes internally created widgets (a.k.a. supporting widgets)
                 * outside of this.containerNode.
                 * 
                 * Note that the array returned is a simple array.  Application code should not assume
                 * existence of methods like forEach().
                 * 
                 */
                getChildren(): any[];
                /**
                 * Returns all the widgets contained by this, i.e., all widgets underneath this.containerNode.
                 * This method should generally be avoided as it returns widgets declared in templates, which are
                 * supposed to be internal/hidden, but it's left here for back-compat reasons.
                 * 
                 */
                getDescendants(): any[];
                /**
                 * 
                 */
                getEntry(): any;
                /**
                 * 
                 */
                getFeed(): any;
                /**
                 * Gets the index of the child in this container or -1 if not found
                 * 
                 * @param child             
                 */
                getIndexOfChild(child: dijit._WidgetBase): any;
                /**
                 * Returns the parent widget of this widget.
                 * 
                 */
                getParent(): any;
                /**
                 * Returns true if widget has child widgets, i.e. if this.containerNode contains widgets.
                 * 
                 */
                hasChildren(): boolean;
                /**
                 * Function to return if a displayable field is valid or not
                 * 
                 * @param field The field name to get the valid parameter of.  Such as 'content', 'id', etc.             
                 */
                isFieldValid(field: String): any;
                /**
                 * Return true if this widget can currently be focused
                 * and false if not
                 * 
                 */
                isFocusable(): any;
                /**
                 * Return this widget's explicit or implicit orientation (true for LTR, false for RTL)
                 * 
                 */
                isLeftToRight(): any;
                /**
                 * 
                 * @param type protected             
                 * @param func             
                 */
                on(type: String, func: Function): any;
                /**
                 * 
                 * @param type protected             
                 * @param func             
                 */
                on(type: Function, func: Function): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 * 
                 * @param reference Widget, DOMNode, or id of widget or DOMNode             
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                 */
                placeAt(reference: String, position: String): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 * 
                 * @param reference Widget, DOMNode, or id of widget or DOMNode             
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                 */
                placeAt(reference: HTMLElement, position: String): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 * 
                 * @param reference Widget, DOMNode, or id of widget or DOMNode             
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                 */
                placeAt(reference: dijit._WidgetBase, position: String): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 * 
                 * @param reference Widget, DOMNode, or id of widget or DOMNode             
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                 */
                placeAt(reference: String, position: number): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 * 
                 * @param reference Widget, DOMNode, or id of widget or DOMNode             
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                 */
                placeAt(reference: HTMLElement, position: number): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 * 
                 * @param reference Widget, DOMNode, or id of widget or DOMNode             
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                 */
                placeAt(reference: dijit._WidgetBase, position: number): any;
                /**
                 * 
                 */
                postCreate(): void;
                /**
                 * Called after the parameters to the widget have been read-in,
                 * but before the widget template is instantiated. Especially
                 * useful to set properties that are referenced in the widget
                 * template.
                 * 
                 */
                postMixInProperties(): void;
                /**
                 * Removes the passed widget instance from this widget but does
                 * not destroy it.  You can also pass in an integer indicating
                 * the index within the container to remove (ie, removeChild(5) removes the sixth widget).
                 * 
                 * @param widget             
                 */
                removeChild(widget: dijit._WidgetBase): void;
                /**
                 * Removes the passed widget instance from this widget but does
                 * not destroy it.  You can also pass in an integer indicating
                 * the index within the container to remove (ie, removeChild(5) removes the sixth widget).
                 * 
                 * @param widget             
                 */
                removeChild(widget: number): void;
                /**
                 * Set a property on a widget
                 * Sets named properties on a widget which may potentially be handled by a
                 * setter in the widget.
                 * 
                 * For example, if the widget has properties foo and bar
                 * and a method named _setFooAttr(), calling
                 * myWidget.set("foo", "Howdy!") would be equivalent to calling
                 * widget._setFooAttr("Howdy!") and myWidget.set("bar", 3)
                 * would be equivalent to the statement widget.bar = 3;
                 * 
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * myWidget.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * });
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: any, value: any): any;
                /**
                 * Deprecated.  Use set() instead.
                 * 
                 * @param attr             
                 * @param value             
                 */
                setAttribute(attr: String, value: any): void;
                /**
                 * Function to set the contents of the author node in the template to some value from the entry.
                 * Function to set the contents of the author node in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param authorsAnchorNode The DOM node to attach the author data to.             
                 * @param editMode Boolean to indicate if the display should be in edit mode or not.             
                 * @param entry The Feed Entry to work with.             
                 */
                setAuthors(authorsAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
                /**
                 * Function to set the title format for the authors section of the author row in the template to some value from the entry.
                 * Function to set the title format for the authors section of the author row in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the author data is filled out from an entry.
                 * 
                 * @param authorHeaderNode The DOM node to attach the author section header data to.             
                 * @param entry The Feed Entry to work with.             
                 */
                setAuthorsHeader(authorHeaderNode: HTMLElement, entry: Object): void;
                /**
                 * Function to set the contents of the content node in the template to some value from the entry.
                 * Function to set the contents of the content node in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param contentAnchorNode The DOM node to attach the content data to.             
                 * @param editMode Boolean to indicate if the display should be in edit mode or not.             
                 * @param entry The Feed Entry to work with.             
                 */
                setContent(contentAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
                /**
                 * Function to set the contents of the content node in the template to some value from the entry.
                 * Function to set the contents of the content node in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param contentHeaderNode The DOM node to attach the content data to.             
                 * @param entry The Feed Entry to work with.             
                 */
                setContentHeader(contentHeaderNode: HTMLElement, entry: Object): void;
                /**
                 * Function to set the contents of the contributor node in the template to some value from the entry.
                 * Function to set the contents of the contributor node in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param contributorsAnchorNode The DOM node to attach the contributor data to.             
                 * @param editMode Boolean to indicate if the display should be in edit mode or not.             
                 * @param entry The Feed Entry to work with.             
                 */
                setContributors(contributorsAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
                /**
                 * Function to set the contents of the contributor header node in the template to some value from the entry.
                 * Function to set the contents of the contributor header node in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param contributorsHeaderNode The DOM node to attach the contributor title to.             
                 * @param entry The Feed Entry to work with.             
                 */
                setContributorsHeader(contributorsHeaderNode: HTMLElement, entry: Object): void;
                /**
                 * Function for setting which sections of the entry should be displayed.
                 * 
                 * @param sectionsArray Array of string names that indicate which sections to display.             
                 */
                setDisplaySections(sectionsArray: any[]): any;
                /**
                 * Function to set the current entry that is being edited.
                 * 
                 * @param entry Instance of dojox.atom.io.model.Entry to display for reading/editing.             
                 * @param feed             
                 * @param leaveMenuState             
                 */
                setEntry(entry: Object, feed: Object, leaveMenuState: boolean): void;
                /**
                 * Function to set whether a field in the view is valid and displayable.
                 * Function to set whether a field in the view is valid and displayable.
                 * This is needed for over-riding of the set* functions and customization of how data is displayed in the attach point.
                 * So if custom implementations use their own display logic, they can still enable the field.
                 * 
                 * @param field The field name to set the valid parameter on.  Such as 'content', 'id', etc.             
                 * @param isValid Flag denoting if the field is valid or not.             
                 */
                setFieldValidity(field: String, isValid: boolean): any;
                /**
                 * Function to set the contents of the ID  node in the template to some value from the entry.
                 * Function to set the contents of the ID node in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param idAnchorNode The DOM node to attach the ID data to.             
                 * @param editMode Boolean to indicate if the display should be in edit mode or not.             
                 * @param entry The Feed Entry to work with.             
                 */
                setId(idAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
                /**
                 * Function to set the contents of the ID  node in the template to some value from the entry.
                 * Function to set the contents of the ID node in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param idHeaderNode             
                 * @param entry The Feed Entry to work with.             
                 */
                setIdHeader(idHeaderNode: HTMLElement, entry: Object): void;
                /**
                 * Function to set the contents of the summary  node in the template to some value from the entry.
                 * Function to set the contents of the summary node in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param summaryAnchorNode The DOM node to attach the summary data to.             
                 * @param editMode Boolean to indicate if the display should be in edit mode or not.             
                 * @param entry The Feed Entry to work with.             
                 */
                setSummary(summaryAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
                /**
                 * Function to set the contents of the summary  node in the template to some value from the entry.
                 * Function to set the contents of the summary node in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param summaryHeaderNode The DOM node to attach the summary title to.             
                 * @param entry The Feed Entry to work with.             
                 */
                setSummaryHeader(summaryHeaderNode: HTMLElement, entry: Object): void;
                /**
                 * Function to set the contents of the title node in the template to some value from the entry.
                 * Function to set the contents of the title node in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param titleAnchorNode The DOM node to attach the title data to.             
                 * @param editMode Boolean to indicate if the display should be in edit mode or not.             
                 * @param entry The Feed Entry to work with.             
                 */
                setTitle(titleAnchorNode: any, editMode: any, entry: any): void;
                /**
                 * Function to set the contents of the title header node in the template to some value.
                 * Function to set the contents of the title header node in the template to some value.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param titleHeaderNode             
                 * @param entry The Feed Entry to work with.             
                 */
                setTitleHeader(titleHeaderNode: HTMLElement, entry: Object): void;
                /**
                 * Function to set the contents of the updated  node in the template to some value from the entry.
                 * Function to set the contents of the updated node in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param updatedAnchorNode The DOM node to attach the udpated data to.             
                 * @param editMode Boolean to indicate if the display should be in edit mode or not.             
                 * @param entry The Feed Entry to work with.             
                 */
                setUpdated(updatedAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
                /**
                 * Function to set the contents of the updated header node in the template to some value from the entry.
                 * Function to set the contents of the updated header node in the template to some value from the entry.
                 * This exists specifically so users can over-ride how the title data is filled out from an entry.
                 * 
                 * @param updatedHeaderNode The DOM node to attach the updated header data to.             
                 * @param entry The Feed Entry to work with.             
                 */
                setUpdatedHeader(updatedHeaderNode: HTMLElement, entry: Object): void;
                /**
                 * 
                 */
                startup(): void;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(topic.subscribe()) instead.
                 * 
                 * Subscribes to the specified topic and calls the specified method
                 * of this object and registers for unsubscribe() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.subscribe, except with the
                 * implicit use of this widget as the target object.
                 * 
                 * @param t The topic             
                 * @param method The callback             
                 */
                subscribe(t: String, method: Function): any;
                /**
                 * Returns a string that represents the widget.
                 * When a widget is cast to a string, this method will be used to generate the
                 * output. Currently, it does not implement any sort of reversible
                 * serialization.
                 * 
                 */
                toString(): string;
                /**
                 * Deprecated. Override destroy() instead to implement custom widget tear-down
                 * behavior.
                 * 
                 */
                uninitialize(): boolean;
                /**
                 * Deprecated, will be removed in 2.0, use handle.remove() instead.
                 * 
                 * Unsubscribes handle created by this.subscribe.
                 * Also removes handle from this widget's list of subscriptions
                 * 
                 * @param handle             
                 */
                unsubscribe(handle: Object): void;
                /**
                 * Watches a property for changes
                 * 
                 * @param name               OptionalIndicates the property to watch. This is optional (the callback may be theonly parameter), and if omitted, all the properties will be watched             
                 * @param callback The function to execute when the property changes. This will be called afterthe property has been changed. The callback will be called with the |this|set to the instance, the first argument as the name of the property, thesecond argument as the old value and the third argument as the new value.             
                 */
                watch(property: string, callback:{(property?:string, oldValue?:any, newValue?: any):void}) :{unwatch():void};
                /**
                 * Static method to get a template based on the templatePath or
                 * templateString key
                 */
                getCachedTemplate(): any;
                /**
                 * Called when the widget stops being "active" because
                 * focus moved to something outside of it, or the user
                 * clicked somewhere outside of it, or the widget was
                 * hidden.
                 * 
                 */
                onBlur(): void;
                /**
                 * Connect to this function to receive notifications of mouse click events.
                 * 
                 * @param event mouse Event             
                 */
                onClick(event: any): void;
                /**
                 * Called when this widget is being displayed as a popup (ex: a Calendar popped
                 * up from a DateTextBox), and it is hidden.
                 * This is called from the dijit.popup code, and should not be called directly.
                 * 
                 * Also used as a parameter for children of dijit/layout/StackContainer or subclasses.
                 * Callback if a user tries to close the child.   Child will be closed if this function returns true.
                 * 
                 */
                onClose(): boolean;
                /**
                 * Connect to this function to receive notifications of mouse double click events.
                 * 
                 * @param event mouse Event             
                 */
                onDblClick(event: any): void;
                /**
                 * Called when the widget becomes "active" because
                 * it or a widget inside of it either has focus, or has recently
                 * been clicked.
                 * 
                 */
                onFocus(): void;
                /**
                 * Called when another widget becomes the selected pane in a
                 * dijit/layout/TabContainer, dijit/layout/StackContainer,
                 * dijit/layout/AccordionContainer, etc.
                 * 
                 * Also called to indicate hide of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
                 * 
                 */
                onHide(): void;
                /**
                 * Connect to this function to receive notifications of keys being pressed down.
                 * 
                 * @param event key Event             
                 */
                onKeyDown(event: any): void;
                /**
                 * Connect to this function to receive notifications of printable keys being typed.
                 * 
                 * @param event key Event             
                 */
                onKeyPress(event: any): void;
                /**
                 * Connect to this function to receive notifications of keys being released.
                 * 
                 * @param event key Event             
                 */
                onKeyUp(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse button is pressed down.
                 * 
                 * @param event mouse Event             
                 */
                onMouseDown(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse moves onto this widget.
                 * 
                 * @param event mouse Event             
                 */
                onMouseEnter(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse moves off of this widget.
                 * 
                 * @param event mouse Event             
                 */
                onMouseLeave(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse moves over nodes contained within this widget.
                 * 
                 * @param event mouse Event             
                 */
                onMouseMove(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse moves off of nodes contained within this widget.
                 * 
                 * @param event mouse Event             
                 */
                onMouseOut(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse moves onto nodes contained within this widget.
                 * 
                 * @param event mouse Event             
                 */
                onMouseOver(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse button is released.
                 * 
                 * @param event mouse Event             
                 */
                onMouseUp(event: any): void;
                /**
                 * Called when this widget becomes the selected pane in a
                 * dijit/layout/TabContainer, dijit/layout/StackContainer,
                 * dijit/layout/AccordionContainer, etc.
                 * 
                 * Also called to indicate display of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
                 * 
                 */
                onShow(): void;
            }
            module FeedEntryViewer {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/atom/widget/FeedEntryViewer.EntryHeader.html
                 *
                 * Widget representing a header in a FeedEntryViewer/Editor
                 * 
                 * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
                 * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
                 */
                class EntryHeader extends dijit._Widget implements dijit._Templated, dijit._Container {
                    constructor(params?: Object, srcNodeRef?: HTMLElement);
                    /**
                     * Object to which attach points and events will be scoped.  Defaults
                     * to 'this'.
                     * 
                     */
                    "attachScope": Object;
                    set(property:"attachScope", value: Object): void;
                    get(property:"attachScope"): Object;
                    watch(property:"attachScope", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * Deprecated. Instead of attributeMap, widget should have a _setXXXAttr attribute
                     * for each XXX attribute to be mapped to the DOM.
                     * 
                     * attributeMap sets up a "binding" between attributes (aka properties)
                     * of the widget and the widget's DOM.
                     * Changes to widget attributes listed in attributeMap will be
                     * reflected into the DOM.
                     * 
                     * For example, calling set('title', 'hello')
                     * on a TitlePane will automatically cause the TitlePane's DOM to update
                     * with the new title.
                     * 
                     * attributeMap is a hash where the key is an attribute of the widget,
                     * and the value reflects a binding to a:
                     * 
                     * DOM node attribute
                     *   focus: {node: "focusNode", type: "attribute"}
                     * Maps this.focus to this.focusNode.focus
                     * 
                     * DOM node innerHTML
                     *   title: { node: "titleNode", type: "innerHTML" }
                     * Maps this.title to this.titleNode.innerHTML
                     * 
                     * DOM node innerText
                     *   title: { node: "titleNode", type: "innerText" }
                     * Maps this.title to this.titleNode.innerText
                     * 
                     * DOM node CSS class
                     *   myClass: { node: "domNode", type: "class" }
                     * Maps this.myClass to this.domNode.className
                     * 
                     * If the value is an array, then each element in the array matches one of the
                     * formats of the above list.
                     * 
                     * There are also some shorthands for backwards compatibility:
                     * 
                     * string --> { node: string, type: "attribute" }, for example:
                     * "focusNode" ---> { node: "focusNode", type: "attribute" }
                     * "" --> { node: "domNode", type: "attribute" }
                     * 
                     */
                    "attributeMap": Object;
                    set(property:"attributeMap", value: Object): void;
                    get(property:"attributeMap"): Object;
                    watch(property:"attributeMap", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * Root CSS class of the widget (ex: dijitTextBox), used to construct CSS classes to indicate
                     * widget state.
                     * 
                     */
                    "baseClass": string;
                    set(property:"baseClass", value: string): void;
                    get(property:"baseClass"): string;
                    watch(property:"baseClass", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "class": string;
                    set(property:"class", value: string): void;
                    get(property:"class"): string;
                    watch(property:"class", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * Designates where children of the source DOM node will be placed.
                     * "Children" in this case refers to both DOM nodes and widgets.
                     * For example, for myWidget:
                     * 
                     * <div data-dojo-type=myWidget>
                     *     <b> here's a plain DOM node
                     *     <span data-dojo-type=subWidget>and a widget</span>
                     *     <i> and another plain DOM node </i>
                     * </div>
                     * containerNode would point to:
                     * 
                     * <b> here's a plain DOM node
                     * <span data-dojo-type=subWidget>and a widget</span>
                     * <i> and another plain DOM node </i>
                     * In templated widgets, "containerNode" is set via a
                     * data-dojo-attach-point assignment.
                     * 
                     * containerNode must be defined for any widget that accepts innerHTML
                     * (like ContentPane or BorderContainer or even Button), and conversely
                     * is null for widgets that don't, like TextBox.
                     * 
                     */
                    "containerNode": HTMLElement;
                    set(property:"containerNode", value: HTMLElement): void;
                    get(property:"containerNode"): HTMLElement;
                    watch(property:"containerNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                    /**
                     * Used to provide a context require to the dojo/parser in order to be
                     * able to use relative MIDs (e.g. ./Widget) in the widget's template.
                     * 
                     */
                    "contextRequire": Function;
                    set(property:"contextRequire", value: Function): void;
                    get(property:"contextRequire"): Function;
                    watch(property:"contextRequire", callback:{(property?:string, oldValue?:Function, newValue?: Function):void}) :{unwatch():void}
                    /**
                     * Bi-directional support, as defined by the HTML DIR
                     * attribute. Either left-to-right "ltr" or right-to-left "rtl".  If undefined, widgets renders in page's
                     * default direction.
                     * 
                     */
                    "dir": string;
                    set(property:"dir", value: string): void;
                    get(property:"dir"): string;
                    watch(property:"dir", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * This is our visible representation of the widget! Other DOM
                     * Nodes may by assigned to other properties, usually through the
                     * template system's data-dojo-attach-point syntax, but the domNode
                     * property is the canonical "top level" node in widget UI.
                     * 
                     */
                    "domNode": HTMLElement;
                    set(property:"domNode", value: HTMLElement): void;
                    get(property:"domNode"): HTMLElement;
                    watch(property:"domNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                    /**
                     * This widget or a widget it contains has focus, or is "active" because
                     * it was recently clicked.
                     * 
                     */
                    "focused": boolean;
                    set(property:"focused", value: boolean): void;
                    get(property:"focused"): boolean;
                    watch(property:"focused", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                    /**
                     * A unique, opaque ID string that can be assigned by users or by the
                     * system. If the developer passes an ID which is known not to be
                     * unique, the specified ID is ignored and the system-generated ID is
                     * used instead.
                     * 
                     */
                    "id": string;
                    set(property:"id", value: string): void;
                    get(property:"id"): string;
                    watch(property:"id", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * Rarely used.  Overrides the default Dojo locale used to render this widget,
                     * as defined by the HTML LANG attribute.
                     * Value must be among the list of locales specified during by the Dojo bootstrap,
                     * formatted according to RFC 3066 (like en-us).
                     * 
                     */
                    "lang": string;
                    set(property:"lang", value: string): void;
                    get(property:"lang"): string;
                    watch(property:"lang", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * The document this widget belongs to.  If not specified to constructor, will default to
                     * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
                     * 
                     */
                    "ownerDocument": Object;
                    set(property:"ownerDocument", value: Object): void;
                    get(property:"ownerDocument"): Object;
                    watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "searchContainerNode": boolean;
                    set(property:"searchContainerNode", value: boolean): void;
                    get(property:"searchContainerNode"): boolean;
                    watch(property:"searchContainerNode", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                    /**
                     * pointer to original DOM node
                     * 
                     */
                    "srcNodeRef": HTMLElement;
                    set(property:"srcNodeRef", value: HTMLElement): void;
                    get(property:"srcNodeRef"): HTMLElement;
                    watch(property:"srcNodeRef", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                    /**
                     * HTML style attributes as cssText string or name/value hash
                     * 
                     */
                    "style": string;
                    set(property:"style", value: string): void;
                    get(property:"style"): string;
                    watch(property:"style", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * Path to template (HTML file) for this widget relative to dojo.baseUrl.
                     * Deprecated: use templateString with require([... "dojo/text!..."], ...) instead
                     * 
                     */
                    "templatePath": string;
                    set(property:"templatePath", value: string): void;
                    get(property:"templatePath"): string;
                    watch(property:"templatePath", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "templateString": string;
                    set(property:"templateString", value: string): void;
                    get(property:"templateString"): string;
                    watch(property:"templateString", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "title": string;
                    set(property:"title", value: string): void;
                    get(property:"title"): string;
                    watch(property:"title", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * When this widget's title attribute is used to for a tab label, accordion pane title, etc.,
                     * this specifies the tooltip to appear when the mouse is hovered over that text.
                     * 
                     */
                    "tooltip": string;
                    set(property:"tooltip", value: string): void;
                    get(property:"tooltip"): string;
                    watch(property:"tooltip", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * Should we parse the template to find widgets that might be
                     * declared in markup inside it?  False by default.
                     * 
                     */
                    "widgetsInTemplate": boolean;
                    set(property:"widgetsInTemplate", value: boolean): void;
                    get(property:"widgetsInTemplate"): boolean;
                    watch(property:"widgetsInTemplate", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                    /**
                     * Makes the given widget a child of this widget.
                     * Inserts specified child widget's dom node as a child of this widget's
                     * container node, and possibly does other processing (such as layout).
                     * 
                     * @param widget             
                     * @param insertIndex               Optional            
                     */
                    addChild(widget: dijit._WidgetBase, insertIndex: number): void;
                    /**
                     * This method is deprecated, use get() or set() directly.
                     * 
                     * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
                     * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
                     */
                    attr(name: String, value: Object): any;
                    /**
                     * This method is deprecated, use get() or set() directly.
                     * 
                     * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
                     * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
                     */
                    attr(name: Object, value: Object): any;
                    /**
                     * Construct the UI for this widget, setting this.domNode.
                     * Most widgets will mixin dijit._TemplatedMixin, which implements this method.
                     * 
                     */
                    buildRendering(): void;
                    /**
                     * 
                     */
                    clear(): void;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: Object, event: String, method: String): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: any, event: String, method: String): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: Object, event: Function, method: String): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: any, event: Function, method: String): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: Object, event: String, method: Function): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: any, event: String, method: Function): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: Object, event: Function, method: Function): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: any, event: Function, method: Function): any;
                    /**
                     * Wrapper to setTimeout to avoid deferred functions executing
                     * after the originating widget has been destroyed.
                     * Returns an object handle with a remove method (that returns null) (replaces clearTimeout).
                     * 
                     * @param fcn Function reference.             
                     * @param delay               OptionalDelay, defaults to 0.             
                     */
                    defer(fcn: Function, delay: number): Object;
                    /**
                     * 
                     */
                    destroy(): void;
                    /**
                     * Recursively destroy the children of this widget and their
                     * descendants.
                     * 
                     * @param preserveDom               OptionalIf true, the preserveDom attribute is passed to all descendantwidget's .destroy() method. Not for use with _Templatedwidgets.             
                     */
                    destroyDescendants(preserveDom: boolean): void;
                    /**
                     * Destroy this widget and its descendants
                     * This is the generic "destructor" function that all widget users
                     * should call to cleanly discard with a widget. Once a widget is
                     * destroyed, it is removed from the manager object.
                     * 
                     * @param preserveDom               OptionalIf true, this method will leave the original DOM structurealone of descendant Widgets. Note: This will NOT work withdijit._TemplatedMixin widgets.             
                     */
                    destroyRecursive(preserveDom: boolean): void;
                    /**
                     * Destroys the DOM nodes associated with this widget.
                     * 
                     * @param preserveDom               OptionalIf true, this method will leave the original DOM structure aloneduring tear-down. Note: this will not work with _Templatedwidgets yet.             
                     */
                    destroyRendering(preserveDom?: boolean): void;
                    /**
                     * Deprecated, will be removed in 2.0, use handle.remove() instead.
                     * 
                     * Disconnects handle created by connect.
                     * 
                     * @param handle             
                     */
                    disconnect(handle: any): void;
                    /**
                     * Used by widgets to signal that a synthetic event occurred, ex:
                     * 
                     * myWidget.emit("attrmodified-selectedChildWidget", {}).
                     * Emits an event on this.domNode named type.toLowerCase(), based on eventObj.
                     * Also calls onType() method, if present, and returns value from that method.
                     * By default passes eventObj to callback, but will pass callbackArgs instead, if specified.
                     * Modifies eventObj by adding missing parameters (bubbles, cancelable, widget).
                     * 
                     * @param type             
                     * @param eventObj               Optional            
                     * @param callbackArgs               Optional            
                     */
                    emit(type: String, eventObj: Object, callbackArgs: any[]): any;
                    /**
                     * Get a property from a widget.
                     * Get a named property from a widget. The property may
                     * potentially be retrieved via a getter method. If no getter is defined, this
                     * just retrieves the object's property.
                     * 
                     * For example, if the widget has properties foo and bar
                     * and a method named _getFooAttr(), calling:
                     * myWidget.get("foo") would be equivalent to calling
                     * widget._getFooAttr() and myWidget.get("bar")
                     * would be equivalent to the expression
                     * widget.bar2
                     * 
                     * @param name The property to get.             
                     */
                    get(name: any): any;
                    /**
                     * Returns all direct children of this widget, i.e. all widgets underneath this.containerNode whose parent
                     * is this widget.   Note that it does not return all descendants, but rather just direct children.
                     * Analogous to Node.childNodes,
                     * except containing widgets rather than DOMNodes.
                     * 
                     * The result intentionally excludes internally created widgets (a.k.a. supporting widgets)
                     * outside of this.containerNode.
                     * 
                     * Note that the array returned is a simple array.  Application code should not assume
                     * existence of methods like forEach().
                     * 
                     */
                    getChildren(): any[];
                    /**
                     * Returns all the widgets contained by this, i.e., all widgets underneath this.containerNode.
                     * This method should generally be avoided as it returns widgets declared in templates, which are
                     * supposed to be internal/hidden, but it's left here for back-compat reasons.
                     * 
                     */
                    getDescendants(): any[];
                    /**
                     * Gets the index of the child in this container or -1 if not found
                     * 
                     * @param child             
                     */
                    getIndexOfChild(child: dijit._WidgetBase): any;
                    /**
                     * Returns the parent widget of this widget.
                     * 
                     */
                    getParent(): any;
                    /**
                     * Returns true if widget has child widgets, i.e. if this.containerNode contains widgets.
                     * 
                     */
                    hasChildren(): boolean;
                    /**
                     * Return true if this widget can currently be focused
                     * and false if not
                     * 
                     */
                    isFocusable(): any;
                    /**
                     * Return this widget's explicit or implicit orientation (true for LTR, false for RTL)
                     * 
                     */
                    isLeftToRight(): any;
                    /**
                     * 
                     * @param type protected             
                     * @param func             
                     */
                    on(type: String, func: Function): any;
                    /**
                     * 
                     * @param type protected             
                     * @param func             
                     */
                    on(type: Function, func: Function): any;
                    /**
                     * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                     * already removed/destroyed manually.
                     * 
                     */
                    own(): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: String, position: String): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: HTMLElement, position: String): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: dijit._WidgetBase, position: String): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: String, position: number): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: HTMLElement, position: number): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: dijit._WidgetBase, position: number): any;
                    /**
                     * 
                     */
                    postCreate(): void;
                    /**
                     * Called after the parameters to the widget have been read-in,
                     * but before the widget template is instantiated. Especially
                     * useful to set properties that are referenced in the widget
                     * template.
                     * 
                     */
                    postMixInProperties(): void;
                    /**
                     * Removes the passed widget instance from this widget but does
                     * not destroy it.  You can also pass in an integer indicating
                     * the index within the container to remove (ie, removeChild(5) removes the sixth widget).
                     * 
                     * @param widget             
                     */
                    removeChild(widget: dijit._WidgetBase): void;
                    /**
                     * Removes the passed widget instance from this widget but does
                     * not destroy it.  You can also pass in an integer indicating
                     * the index within the container to remove (ie, removeChild(5) removes the sixth widget).
                     * 
                     * @param widget             
                     */
                    removeChild(widget: number): void;
                    /**
                     * Set a property on a widget
                     * Sets named properties on a widget which may potentially be handled by a
                     * setter in the widget.
                     * 
                     * For example, if the widget has properties foo and bar
                     * and a method named _setFooAttr(), calling
                     * myWidget.set("foo", "Howdy!") would be equivalent to calling
                     * widget._setFooAttr("Howdy!") and myWidget.set("bar", 3)
                     * would be equivalent to the statement widget.bar = 3;
                     * 
                     * set() may also be called with a hash of name/value pairs, ex:
                     * 
                     * myWidget.set({
                     *     foo: "Howdy",
                     *     bar: 3
                     * });
                     * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                     * 
                     * @param name The property to set.             
                     * @param value The value to set in the property.             
                     */
                    set(name: any, value: any): any;
                    /**
                     * Deprecated.  Use set() instead.
                     * 
                     * @param attr             
                     * @param value             
                     */
                    setAttribute(attr: String, value: any): void;
                    /**
                     * 
                     * @param title             
                     */
                    setListHeader(title: String): void;
                    /**
                     * Processing after the DOM fragment is added to the document
                     * Called after a widget and its children have been created and added to the page,
                     * and all related widgets have finished their create() cycle, up through postCreate().
                     * 
                     * Note that startup() may be called while the widget is still hidden, for example if the widget is
                     * inside a hidden dijit/Dialog or an unselected tab of a dijit/layout/TabContainer.
                     * For widgets that need to do layout, it's best to put that layout code inside resize(), and then
                     * extend dijit/layout/_LayoutWidget so that resize() is called when the widget is visible.
                     * 
                     */
                    startup(): void;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(topic.subscribe()) instead.
                     * 
                     * Subscribes to the specified topic and calls the specified method
                     * of this object and registers for unsubscribe() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.subscribe, except with the
                     * implicit use of this widget as the target object.
                     * 
                     * @param t The topic             
                     * @param method The callback             
                     */
                    subscribe(t: String, method: Function): any;
                    /**
                     * Returns a string that represents the widget.
                     * When a widget is cast to a string, this method will be used to generate the
                     * output. Currently, it does not implement any sort of reversible
                     * serialization.
                     * 
                     */
                    toString(): string;
                    /**
                     * Deprecated. Override destroy() instead to implement custom widget tear-down
                     * behavior.
                     * 
                     */
                    uninitialize(): boolean;
                    /**
                     * Deprecated, will be removed in 2.0, use handle.remove() instead.
                     * 
                     * Unsubscribes handle created by this.subscribe.
                     * Also removes handle from this widget's list of subscriptions
                     * 
                     * @param handle             
                     */
                    unsubscribe(handle: Object): void;
                    /**
                     * Watches a property for changes
                     * 
                     * @param name               OptionalIndicates the property to watch. This is optional (the callback may be theonly parameter), and if omitted, all the properties will be watched             
                     * @param callback The function to execute when the property changes. This will be called afterthe property has been changed. The callback will be called with the |this|set to the instance, the first argument as the name of the property, thesecond argument as the old value and the third argument as the new value.             
                     */
                    watch(property: string, callback:{(property?:string, oldValue?:any, newValue?: any):void}) :{unwatch():void};
                    /**
                     * Static method to get a template based on the templatePath or
                     * templateString key
                     */
                    getCachedTemplate(): any;
                    /**
                     * Called when the widget stops being "active" because
                     * focus moved to something outside of it, or the user
                     * clicked somewhere outside of it, or the widget was
                     * hidden.
                     * 
                     */
                    onBlur(): void;
                    /**
                     * Connect to this function to receive notifications of mouse click events.
                     * 
                     * @param event mouse Event             
                     */
                    onClick(event: any): void;
                    /**
                     * Called when this widget is being displayed as a popup (ex: a Calendar popped
                     * up from a DateTextBox), and it is hidden.
                     * This is called from the dijit.popup code, and should not be called directly.
                     * 
                     * Also used as a parameter for children of dijit/layout/StackContainer or subclasses.
                     * Callback if a user tries to close the child.   Child will be closed if this function returns true.
                     * 
                     */
                    onClose(): boolean;
                    /**
                     * Connect to this function to receive notifications of mouse double click events.
                     * 
                     * @param event mouse Event             
                     */
                    onDblClick(event: any): void;
                    /**
                     * Called when the widget becomes "active" because
                     * it or a widget inside of it either has focus, or has recently
                     * been clicked.
                     * 
                     */
                    onFocus(): void;
                    /**
                     * Called when another widget becomes the selected pane in a
                     * dijit/layout/TabContainer, dijit/layout/StackContainer,
                     * dijit/layout/AccordionContainer, etc.
                     * 
                     * Also called to indicate hide of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
                     * 
                     */
                    onHide(): void;
                    /**
                     * Connect to this function to receive notifications of keys being pressed down.
                     * 
                     * @param event key Event             
                     */
                    onKeyDown(event: any): void;
                    /**
                     * Connect to this function to receive notifications of printable keys being typed.
                     * 
                     * @param event key Event             
                     */
                    onKeyPress(event: any): void;
                    /**
                     * Connect to this function to receive notifications of keys being released.
                     * 
                     * @param event key Event             
                     */
                    onKeyUp(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse button is pressed down.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseDown(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves onto this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseEnter(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves off of this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseLeave(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves over nodes contained within this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseMove(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves off of nodes contained within this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseOut(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves onto nodes contained within this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseOver(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse button is released.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseUp(event: any): void;
                    /**
                     * Called when this widget becomes the selected pane in a
                     * dijit/layout/TabContainer, dijit/layout/StackContainer,
                     * dijit/layout/AccordionContainer, etc.
                     * 
                     * Also called to indicate display of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
                     * 
                     */
                    onShow(): void;
                }
            }

        }

    }

}

declare module "dojox/atom/io/model" {
    var exp: dojox.atom.io.model
    export=exp;
}
declare module "dojox/atom/io/model.Category" {
    var exp: dojox.atom.io.model.Category
    export=exp;
}
declare module "dojox/atom/io/model.Content" {
    var exp: dojox.atom.io.model.Content
    export=exp;
}
declare module "dojox/atom/io/model.AtomItem" {
    var exp: dojox.atom.io.model.AtomItem
    export=exp;
}
declare module "dojox/atom/io/model.Generator" {
    var exp: dojox.atom.io.model.Generator
    export=exp;
}
declare module "dojox/atom/io/model.Entry" {
    var exp: dojox.atom.io.model.Entry
    export=exp;
}
declare module "dojox/atom/io/model.Collection" {
    var exp: dojox.atom.io.model.Collection
    export=exp;
}
declare module "dojox/atom/io/model.Feed" {
    var exp: dojox.atom.io.model.Feed
    export=exp;
}
declare module "dojox/atom/io/model.Link" {
    var exp: dojox.atom.io.model.Link
    export=exp;
}
declare module "dojox/atom/io/model.Node" {
    var exp: dojox.atom.io.model.Node
    export=exp;
}
declare module "dojox/atom/io/model.Person" {
    var exp: dojox.atom.io.model.Person
    export=exp;
}
declare module "dojox/atom/io/model.Service" {
    var exp: dojox.atom.io.model.Service
    export=exp;
}
declare module "dojox/atom/io/model.Workspace" {
    var exp: dojox.atom.io.model.Workspace
    export=exp;
}
declare module "dojox/atom/io/model._Constants" {
    var exp: dojox.atom.io.model._Constants
    export=exp;
}
declare module "dojox/atom/io/model._actions" {
    var exp: dojox.atom.io.model._actions
    export=exp;
}
declare module "dojox/atom/io/model.util" {
    var exp: dojox.atom.io.model.util
    export=exp;
}
declare module "dojox/atom/io/Connection" {
    var exp: dojox.atom.io.Connection
    export=exp;
}
declare module "dojox/atom/widget/FeedViewer" {
    var exp: dojox.atom.widget.FeedViewer
    export=exp;
}
declare module "dojox/atom/widget/FeedViewer.CategoryIncludeFilter" {
    var exp: dojox.atom.widget.FeedViewer.CategoryIncludeFilter
    export=exp;
}
declare module "dojox/atom/widget/FeedViewer.AtomEntryCategoryFilter" {
    var exp: dojox.atom.widget.FeedViewer.AtomEntryCategoryFilter
    export=exp;
}
declare module "dojox/atom/widget/FeedViewer.FeedViewerEntry" {
    var exp: dojox.atom.widget.FeedViewer.FeedViewerEntry
    export=exp;
}
declare module "dojox/atom/widget/FeedViewer.FeedViewerGrouping" {
    var exp: dojox.atom.widget.FeedViewer.FeedViewerGrouping
    export=exp;
}
declare module "dojox/atom/widget/FeedEntryViewer" {
    var exp: dojox.atom.widget.FeedEntryViewer
    export=exp;
}
declare module "dojox/atom/widget/FeedEntryViewer.EntryHeader" {
    var exp: dojox.atom.widget.FeedEntryViewer.EntryHeader
    export=exp;
}
declare module "dojox/atom/widget/FeedEntryEditor" {
    var exp: dojox.atom.widget.FeedEntryEditor
    export=exp;
}
