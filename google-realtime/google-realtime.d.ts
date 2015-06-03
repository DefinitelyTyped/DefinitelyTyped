// Type definitions for Google Realtime API
// Project: https://developers.google.com/google-apps/realtime/
// Definitions by: Dustin Wehr <http://cs.toronto.edu/~wehr>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// For Typescript newbs: To get shorter names, use e.g.
//   type CollabModel = googleRealtime.Model;
//   interface CollabList<T> extends googleRealtime.CollaborativeList<T> {}
// See section "Type Aliases" of http://www.typescriptlang.org/Content/TypeScript%20Language%20Specification.pdf

// Note the occurrences of "INCOMPLETE". For some interfaces and object types, I have only included
// the properties and methods that I've actually used so-far, and will add more as they become useful to me.
// Or, maybe you want to complete them?

declare module googleRealtime {

	// Complete
	// https://developers.google.com/google-apps/realtime/reference/gapi.drive.realtime.CollaborativeObject
	export class CollaborativeObject {
		// The id of this collaborative object. Read-only.
		id:string;

		// The type of this collaborative object. For standard collaborative objects,
		// see gapi.drive.realtime.CollaborrativeType for possible values; for custom collaborative objects, this value is
		// application-defined.
		// Addition: the possible values for standard objects are EditableString, List, and Map.
		type:string;

		// Adds an event listener to the event target. The same handler can only be added once per the type.
		// Even if you add the same handler multiple times using the same type then it will only be called once
		// when the event is dispatched.
		addEventListener(type:string, listener:(e:Event) => void | EventListener, opt_capture?:boolean):void;

		// Removes all event listeners from this object.
		removeAllEventListeners():void;

		// Removes an event listener from the event target. The handler must be the same object as the one added.
		// If the handler has not been added then nothing is done.
		removeEventListener(type:string, listener:(e:Event) => void | EventListener, opt_capture?:boolean):void;

		// Returns a string representation of this collaborative object.
		toString():string;
	}

	// Complete
	// https://developers.google.com/google-apps/realtime/reference/gapi.drive.realtime.IndexReference
	export class IndexReference<V> extends CollaborativeObject {
		// (Categories of) the shift behavior of an index reference when the element it points at is deleted.
		static DeleteMode:{
			SHIFT_AFTER_DELETE: string
			SHIFT_BEFORE_DELETE: string
			SHIFT_TO_INVALID: string
		};

		//The index of the current location the reference points to. Write to this property to change the referenced index.
		index:number;

		// The behavior of this index reference when the element it points at is deleted.
		// @return one of the elements of DeleteMode
		deleteMode():string;

		// The object this reference points to. Read-only.
		referencedObject():V;
	}

	// Complete
	// https://developers.google.com/google-apps/realtime/reference/gapi.drive.realtime.CollaborativeMap
	export class CollaborativeMap<V> extends CollaborativeObject {
		size:string;

		static type:string; // equals "Map"

		// Removes all entries.
		clear():void;

		// Removes the entry for the given key (if such an entry exists).
		// @return the value that was mapped to this key, or null if there was no existing value.
		delete(key:string):V;

		// Returns the value mapped to the given key.
		get(key:string):V;

		// Checks if this map contains an entry for the given key.
		has(key:string):boolean;

		// Returns whether this map is empty.
		isEmpty():boolean;

		// Returns an array containing a copy of the items in this map. Modifications to the returned array do
		// not modify this collaborative map.
		// @return non-null Array of Arrays, where the inner arrays are tupples [string, V]
		items():[string,V][];

		// Returns an array containing a copy of the keys in this map. Modifications to the returned array
		// do not modify this collaborative map.
		keys():string[];

		// Put the value into the map with the given key, overwriting an existing value for that key.
		// @return the old map value, if any, that used to be mapped to the given key.
		set(key:string, value:V):V;

		// Returns an array containing a copy of the values in this map. Modifications to the returned array
		// do not modify this collaborative map.
		values():V[];
	}

	// Complete
	// https://developers.google.com/google-apps/realtime/reference/gapi.drive.realtime.CollaborativeString
	export class CollaborativeString extends CollaborativeObject {
		// The length of the string. Read only.
		length:number;

		// The text of this collaborative string. Reading from this property is equivalent to calling getText(). Writing to this property is equivalent to calling setText().
		text:string;

		static type:string; // equals "EditableString"

		// Appends a string to the end of this one.
		append(text:string):void;

		// Gets a string representation of the collaborative string.
		getText():string;

		// Inserts a string into the collaborative string at a specific index.
		insertString(index:number, text:string):void;

		// Creates an IndexReference at the given {@code index}. If {@code canBeDeleted} is set, then a delete
		// over the index will delete the reference. Otherwise the reference will shift to the beginning of the deleted range.
		registerReference(index:number, canBeDeleted:boolean):IndexReference<CollaborativeString>;

		// Deletes the text between startIndex (inclusive) and endIndex (exclusive).
		removeRange(startIndex:number, endIndex:number):void;

		// Sets the contents of this collaborative string. Note that this method performs a text diff between the
		// current string contents and the new contents so that the string will be modified using the minimum number
		// of text inserts and deletes possible to change the current contents to the newly-specified contents.
		setText(text:string):void;
	}

	// Complete
	// https://developers.google.com/google-apps/realtime/reference/gapi.drive.realtime.CollaborativeList
	export class CollaborativeList<V> extends CollaborativeObject {
		// The number of entries in the list. Assign to this field to reduce the size of the list.
		// Note that the length given must be less than or equal to the current size.
		// The length of a list cannot be extended in this way.
		length:number;

		static type:string; // equals "List"

		// Returns a copy of the contents of this collaborative list as an array.
		// Changes to the returned object will not affect the original collaborative list.
		asArray():V[];

		// Removes all values from the list.
		clear():void;

		// Gets the value at the given index.
		get(ind:number):V;

		//Returns the first index of the given value, or -1 if it cannot be found.
		indexOf(value:V, opt_comparatorFn?:(x1:V, x2:V) => boolean):number;

		//Inserts an item into the list at a given index.
		insert(index:number, value:V):void;

		// Inserts a list of items into the list at a given index.
		insertAll(index:number, values:V[]):void;

		// Returns the last index of the given value, or -1 if it cannot be found.
		lastIndexOf(value:V, opt_comparatorFn?:(x1:V, x2:V) => boolean):number;

		//Moves a single element in this list (at index) to immediately before destinationIndex.
		//Both indices are with respect to the position of elements before the move.
		//For example, given the list: ['A', 'B', 'C']
		//move(0, 0) is a no-op
		//move(0, 1) is a no-op
		//move(0, 2) yields ['B', 'A', 'C'] ('A' is moved to immediately before 'C')
		//move(0, 3) yields ['B', 'C', 'A'] ('A' is moved to immediately before an imaginary element after the list end)
		//move(1, 0) yields ['B', 'A', 'C'] ('B' is moved to immediately before 'A')
		//move(1, 1) is a no-op
		//move(1, 2) is a no-op
		//move(1, 3) yields ['A', 'C', 'B'] ('B' is moved to immediately before an imaginary element after the list end)
		move(index:number, destinationIndex:number):void;

		// Moves a single element in this list (at index) to immediately before destinationIndex in the list destination.
		// Both indices are with respect to the position of elements before the move.
		// If the provided destination is this list, this function is identical to move(index, destinationIndex).
		moveToList(index:number, destination:CollaborativeList<V>, destinationIndex:number):void;

		// Adds an item to the end of the list.
		// @return the new length of the list
		push(value:V):number;

		// Adds an array of values to the end of the list.
		pushAll(values:V[]):void;

		// Creates an IndexReference at the given index. If canBeDeleted is true, then a delete over the index will delete
		// the reference. Otherwise the reference will shift to the beginning of the deleted range.
		registerReference(index:number, canBeDeleted:boolean):IndexReference<CollaborativeList<V>>;

		// Removes the item at the given index from the list.
		remove(index:number):void;

		// Removes the items between startIndex (inclusive) and endIndex (exclusive).
		removeRange(startIndex:number, endIndex:number):void;

		// Removes the first instance of the given value from the list.
		// @return whether the item was removed
		removeValue(value:V):boolean;

		// Replaces items in the list with the given items, starting at the given index.
		replaceRange(index:number, values:V[]):void;

		// Sets the item at the given index
		set(index:number, value:V):void;
	}

	// Complete
	// https://developers.google.com/google-apps/realtime/reference/gapi.drive.realtime.Model
	export class Model {

		// Returns the collaborative object with the given id.
		// @return non-null Object
		getObject:any;

		// An estimate of the number of bytes used by data stored in the model.
		bytesUsed:number;

		// True if the model can currently redo.
		canRedo:boolean;

		// True if the model can currently undo.
		canUndo:boolean;

		// Creates the native JS object for a given collaborative object type.
		// @return non-null Object
		createJsObject(typeName:string):any;

		// Adds an event listener to the event target.
		// The same handler can only be added once per the type. Even if you add the same handler multiple times using the
		// same type then it will only be called once when the event is dispatched.
		addEventListener(type:string, listener:() => void | EventListener, opt_capture?:boolean):void;

		// Starts a compound operation. If a name is given, that name will be recorded in the mutation for use in revision
		// history, undo menus, etc. When beginCompoundOperation() is called, all subsequent edits to the data model will
		// be batched together in the undo stack and revision history until endCompoundOperation() is called.
		// Compound operations may be nested inside other compound operations.
		// If the root compound operation is undoable, all nested compound operations must be undoable as well.
		// If the root compound operation is non-undoable, nested operations can be undoable, although the entire operation
		// will obey the root's opt_isUndoable value.
		// Note that the compound operation MUST start and end in the same synchronous execution block. If this invariant
		// is violated, the data model will become invalid and all future changes will fail.
		beginCompoundOperation(opt_name?:string, opt_isUndoable?:boolean):void;


		// Creates and returns a new collaborative object. This can be used to create custom collaborative objects.
		// For built in types, use the specific create* functions.
		// @return non-null Object
		create(ref, ...var_args:any[]):any;

		// Creates a collaborative list.
		createList<T>(opt_initialValue?:Array<T>):CollaborativeList<T>;

		// Creates a collaborative map.
		createMap<T>(opt_initialValue?:Array<[string,T]>):CollaborativeMap<T>;

		// Creates a collaborative string.
		createString(opt_initialValue?:string):CollaborativeString;

		//Ends a compound operation. This method will throw an exception if no compound operation is in progress.
		endCompoundOperation():void;

		// Returns the root of the object model.
		getRoot():CollaborativeMap<any>;

		// The mode of the document. If true, the document is read-only. If false, it is editable.
		isReadOnly():boolean;

		// Redo the last thing the active collaborator undid.
		redo():void;

		// Removes all event listeners from this object.
		removeAllEventListeners():void;

		// Removes an event listener from the event target. The handler must be the same object as the one added.
		// If the handler has not been added then nothing is done.
		removeEventListener(type:string, listener:() => void | EventListener, opt_capture?:boolean):void;

		// The current server revision number for this model. The revision number begins at 1 (the initial empty model)
		// and is incremented each time the model is changed on the server (either by the current session or any
		// other collaborator). Because this revision number includes only changes that the server knows about,
		// it is only updated while this client is connected to the Realtime API server and it does not include changes
		// that have not yet been saved to the server.
		serverRevision():number;

		// Serializes this data model to a JSON-based format which is compatible with the Realtime API's import/export
		// REST API. The exported JSON can also be used with gapi.drive.realtime.loadFromJson to load an in-memory
		// version of this data model which does not require a network connection.
		// See https://developers.google.com/drive/v2/reference/realtime/update for more information.
		toJson(opt_appId?:string, opt_revision?:number):string;

		// Undo the last thing the active collaborator did.
		undo():void;
	}

	// INCOMPLETE
	// https://developers.google.com/google-apps/realtime/reference/gapi.drive.realtime.Document
	export class Document {
		// Gets the collaborative model associated with this document.
		// @return non-null Model
		getModel():Model;

		// Closes the document and disconnects from the server.
		// After this function is called, event listeners will no longer fire and attempts to access the document, model,
		// or model objects will throw a gapi.drive.realtime.DocumentClosedError.
		// Calling this function after the document has been closed will have no effect.
		close():void;
	}


	// ***********************************
	// The remainder of this file types some (not all) things in realtime-client-utils.js, found here:
	// https://developers.google.com/google-apps/realtime/realtime-quickstart
	// and
	// https://apis.google.com/js/api.js
	// ***********************************

	// INCOMPLETE
	export class Loader {
		start():void;

		load():void;
	}

	// Complete
	export interface LoaderOptions {
		// Your Application ID from the Google APIs Console.
		appId: string;

		// Autocreate files right after auth automatically.
		autoCreate: boolean;

		// Client ID from the console.
		clientId: string;

		// The ID of the button to click to authorize. Must be a DOM element ID.
		authButtonElementId: string;

		// The MIME type of newly created Drive Files. By default the application
		// specific MIME type will be used:
		// application/vnd.google-apps.drive-sdk.
		newFileMimeType: string;
		//newFileMimeType = null // default

		// Function to be called to initialize custom Collaborative Objects types.
		registerTypes: () => void;

		// The name of newly created Drive files, if no title is specified.
		defaultTitle: string;

		// Function to be called after authorization and before loading files.
		afterAuth: () => void;

		// Function to be called when a Realtime model is first created.
		initializeModel: (model:Model) => void;

		// Function to be called every time a Realtime file is loaded.
		onFileLoaded: (rtdoc:Document) => void;
	}

	// INCOMPLETE
	export interface DriveAPIFileResource {
		id: string;
	}

	// INCOMPLETE
	export interface ClientUtils {
		// INCOMPLETE
		params: {
			// string containing one or more file ids separated by spaces.
			fileIds : string
		};
		RealtimeLoader : (options:googleRealtime.LoaderOptions) => void;

		/**
		 * Creates a new Realtime file.
		 * @param title {string} title of the newly created file.
		 * @param mimeType {string} the MIME type of the new file.
		 * @param callback {(file:DriveAPIFileResource) => void} the callback to call after creation.
		 */
		createRealtimeFile(title:string, mimeType:string, callback:(file:DriveAPIFileResource) => void);
	}

	// COMPLETE
	// https://developers.google.com/google-apps/realtime/reference/gapi.drive.realtime.databinding.Binding
	export interface  Binding {
		// Throws gapi.drive.realtime.databinding.AlreadyBoundError If domElement has already been bound.

		// The collaborative object to bind.
		collaborativeObject : CollaborativeObject;

		// The DOM element that the collaborative object is bound to. Value must not be null.
		domElement : Element;

		// Unbinds the domElement from collaborativeObject.
		unbind() : void;
	}

	export interface GoogleAPI {
		drive : {
			realtime : {
				databinding : {
					bindString(s:googleRealtime.CollaborativeString, textinput:HTMLInputElement) : googleRealtime.Binding;
				}
				TextInsertedEvent : {
					type: string;
				}
				TextDeletedEvent : {
					type: string;
				}
			}
		}
	}

}

// global var introduced by realtime-client-utils.js
declare var rtclient:googleRealtime.ClientUtils;

// global var introduced by https://apis.google.com/js/api.js
declare var gapi: googleRealtime.GoogleAPI;