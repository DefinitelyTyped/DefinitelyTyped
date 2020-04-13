// Type definitions for Google Realtime API
// Project: https://developers.google.com/google-apps/realtime/
// Definitions by: Dustin Wehr <http://cs.toronto.edu/~wehr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// This definition file is merge-compatible with ../gapi/gapi.d.ts

// Note the occurrences of "INCOMPLETE". For some interfaces and object types, I have only included
// the properties and methods that I've actually used so-far, and will add more as they become useful to me.
// Or, maybe you want to complete them?

// For Typescript newbs: To get shorter names, use e.g.
//   type CollabModel = gapi.drive.realtime.Model;
//   interface CollabList<T> extends gapi.drive.realtime.CollaborativeList<T> {}
// See section "Type Aliases" of http://www.typescriptlang.org/Content/TypeScript%20Language%20Specification.pdf

// gapi is a global var introduced by https://apis.google.com/js/api.js
declare namespace gapi.drive.realtime {
	export type CollaborativeObjectType = 'EditableString' | 'Map' | 'List'

	export type GoogEventHandler = ((evt:ObjectChangedEvent) => void) | ((e:Event) => void) | EventListener;

	// Complete
	// https://developers.google.com/google-apps/realtime/reference/gapi.drive.realtime.Collaborator
	export class Collaborator {
		// The HTML color associated with this collaborator. When possible, collaborators are assigned unique colors.
		color	: string;

		// The display name for this collaborator.
		displayName	: string;

		// True if this collaborator is anonymous, false otherwise.
		isAnonymous	: boolean

		// True if this collaborator is the local user, false otherwise.
		isMe :	boolean;

		// The permission ID for this collaborator. This ID is stable for a given user and is compatible with the
		// Drive API permissions APIs. Use the userId property for all other uses.
		permissionId : string;

		// A URL that points to the profile photo for this collaborator, or to a generic profile photo for
		// anonymous collaborators.
		photoUrl : string;

		// The session ID for this collaborator. A single user may have multiple sessions if they have the same document
		// open on multiple devices or in multiple browser tabs.
		sessionId	: string;

		// The user ID for this collaborator. This ID is stable for a given user and is compatible with most Google APIs
		// except the Drive API permission APIs. For an ID which is compatible with the Drive API permission APIs,
		// use the permissionId property.
		userId : string;

		constructor (sessionId:string, userId:string, displayName:string, color:string, isMe:boolean, isAnonymous:boolean,
		     photoUrl:string, permissionId:string);
	}

	// Complete
	// https://developers.google.com/google-apps/realtime/reference/gapi.drive.realtime.CollaborativeObject
	export class CollaborativeObject {
		// The id of this collaborative object. Read-only.
		id:string;

		// The type of this collaborative object. For standard collaborative objects,
		// see gapi.drive.realtime.CollaborrativeType for possible values; for custom collaborative objects, this value is
		// application-defined.
		// Addition: the possible values for standard objects are EditableString, List, and Map.
		type:CollaborativeObjectType;

		// Adds an event listener to the event target. The same handler can only be added once per the type.
		// Even if you add the same handler multiple times using the same type then it will only be called once
		// when the event is dispatched.
		addEventListener(type:string, listener:GoogEventHandler, opt_capture?:boolean):void;

		// Removes all event listeners from this object.
		removeAllEventListeners():void;

		// Removes an event listener from the event target. The handler must be the same object as the one added.
		// If the handler has not been added then nothing is done.
		removeEventListener(type:string, listener:GoogEventHandler, opt_capture?:boolean):void;

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
		size:number;

		static type:'Map';

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

		static type:'EditableString';

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

		static type:"List";

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
		getObject: (id:string) => CollaborativeObject;

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
		create(ref:string|Function, ...var_args:any[]):any;

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

	export type EventType = 'object_changed' | 'values_set' | 'values_added' | 'values_removed' | 'value_changed' |
		'text_inserted' | 'text_deleted' | 'collaborator_joined' | 'collaborator_left' | 'reference_shifted' |
		'document_save_state_changed' | 'undo_redo_state_changed' | 'attribute_changed';
	export const EventType:{
		// A collaborative object has changed. This event wraps a specific event, and bubbles to ancestors.
		// Defaults to object_changed.
		OBJECT_CHANGED:'object_changed'

		// Values in a list are changed in place.
		// Defaults to values_set.
		VALUES_SET:'values_set',

		// New values have been added to the list.
		// values_added
		VALUES_ADDED:'values_added'

		// Values have been removed from the list.
		// values_removed
		VALUES_REMOVED:'values_removed'

		// A map or custom object value has changed. Note this could be a new value or deleted value.
		// value_changed
		VALUE_CHANGED:'value_changed'

		// Text has been inserted into a string.
		// text_inserted
		TEXT_INSERTED:'text_inserted'

		// Text has been removed from a string.
		// text_deleted
		TEXT_DELETED:'text_deleted'

		// A new collaborator joined the document. Listen on the gapi.drive.realtime.Document for these changes.
		// collaborator_joined
		COLLABORATOR_JOINED:'collaborator_joined'

		// A collaborator left the document. Listen on the gapi.drive.realtime.Document for these changes.
		// collaborator_left
		COLLABORATOR_LEFT:'collaborator_left'

		// An index reference changed.
		// reference_shifted
		REFERENCE_SHIFTED:'reference_shifted'

		// The document save state changed. Listen on the gapi.drive.realtime.Document for these changes.
		// document_save_state_changed
		DOCUMENT_SAVE_STATE_CHANGED:'document_save_state_changed'

		// The model canUndo/canRedo state changed. Listen on the gapi.drive.realtime.Model for these changes.
		// undo_redo_state_changed
		UNDO_REDO_STATE_CHANGED:'undo_redo_state_changed'

		// A metadata attribute of the document changed. This is fired on changes to:
		// gapi.drive.realtime.Attribute.IS_READ_ONLY
		// Listen on the gapi.drive.realtime.Document for these changes.
		// attribute_changed
		ATTRIBUTE_CHANGED:'attribute_changed'
	}

	// Complete
	// https://developers.google.com/google-apps/realtime/reference/gapi.drive.realtime.BaseModelEvent
	export interface BaseModelEvent {
		// Whether this event bubbles.
		bubbles :  boolean;

		// The list of names from the hierarchy of compound operations that initiated this event.
		compoundOperationNames : string[];

		// True if this event originated in the local session.
		isLocal  : boolean;

		// True if this event originated from a redo call.
		isRedo : boolean;

		// True if this event originated from an undo call.
		isUndo : boolean;

		// Prevents an event from performing its default action. In the Realtime API, this function is only present
		// for compatibility with the DOM event interface and therefore it does nothing.
		preventDefault()  : void;

		// The id of the session that initiated this event.
		sessionId :  string;

		// The collaborative object that initiated this event.
		target :  CollaborativeObject;

		// The type of the event.
		type :  EventType;

		// The user id of the user that initiated this event.
		userId :  string;

		// Stops an event which bubbles from propagating to the target's parent.
		stopPropagation() :  void;

		/* Parameters:
		 target
		 gapi.drive.realtime.CollaborativeObject
		 The collaborative object that initiated the event.
		 Value must not be null.

		 sessionId
		 string
		 The id of the session that initiated the event.

		 userId
		 string
		 The user id of the user that initiated the event.

		 compoundOperationNames
		 Array of string
		 The list of names from the hierarchy of compound operations that initiated the event.
		 Value must not be null.

		 isLocal
		 boolean
		 True if the event originated in the local session.

		 isUndo
		 boolean
		 True if the event originated from an undo call.

		 isRedo
		 boolean
		 True if the event originated from a redo call.
		 */
		new (target:CollaborativeObject, sessionId:string, userId:string, compoundOperationNames:string[],
		     isLocal:boolean, isUndo:boolean, isRedo:boolean) : BaseModelEvent;
	}

	// Complete
	// https://developers.google.com/google-apps/realtime/reference/gapi.drive.realtime.ObjectChangedEvent
	export interface ObjectChangedEvent extends BaseModelEvent {
		// parameters as in BaseModelEvent above except for addition of:
		// events:
		// Array of gapi.drive.realtime.BaseModelEvent
		// The specific events that document the changes that occurred on the object.
		// Value must not be null.
		new (target:CollaborativeObject, sessionId:string, userId:string, compoundOperationNames:string[],
		     isLocal:boolean, isUndo:boolean, isRedo:boolean, events:BaseModelEvent[]) : ObjectChangedEvent;

		// The specific events that document the changes that occurred on the object.
		events : BaseModelEvent[];
	}

	// https://developers.google.com/google-apps/realtime/reference/gapi.drive.realtime.ValuesAddedEvent
	export interface ValuesAddedEvent<V> extends BaseModelEvent {
		new (target:CollaborativeObject, sessionId:string, userId:string, compoundOperationNames:string[],
		     isLocal:boolean, isUndo:boolean, isRedo:boolean, index:number,
		     values:V[], movedFromList:CollaborativeList<V>, movedFromIndex:number):ValuesAddedEvent<V>;

		// The index of the first added value
		index:number;

		// The index in the source collaborative list that the values were moved from, or null if this insert is not the result of a move operation.
		movedFromIndex:number;

		// The collaborative list that the values were moved from, or null if this insertion is not the result of a move operation.
		movedFromList:CollaborativeList<V>;
	}

	// https://developers.google.com/google-apps/realtime/reference/gapi.drive.realtime.ValuesRemovedEvent
	export interface ValuesRemovedEvent<V> extends BaseModelEvent {
		new (target:CollaborativeObject, sessionId:string, userId:string, compoundOperationNames:string[],
		     isLocal:boolean, isUndo:boolean, isRedo:boolean, index:number,
		     values:V[], movedToList:CollaborativeList<V>, movedToIndex:number):ValuesRemovedEvent<V>;

		// The index of the first removed value.
		index:number;

		// The index in the collaborative list that the values were moved to, or null if this delete is not the result of a move operation.
		movedToIndex:number;

		// The collaborative list that the values were moved to, or null if this delete is not the result of a move operation.
		movedToList:CollaborativeList<V>;
	}


	// Complete
	// https://developers.google.com/google-apps/realtime/reference/gapi.drive.realtime.Document
	export class Document {
		// Whether the document is closed. Read-only; call close() to close the document.
		isClosed : boolean;

		// Whether the document is stored in Google Drive. Read-only.
		// This property is false for documents created using gapi.drive.realtime.newInMemoryDocument or
		// gapi.drive.realtime.loadFromJson and true for all other documents.
		isInGoogleDrive : boolean;

		// The approximate amount of time (in milliseconds) that changes have been waiting to be saved in Google Drive.
		// If there are no unsaved changes or this is an in-memory document, this value is always 0.
		// This value should remain low (for example, less than a few seconds) as long as the network is healthy and
		// changes are being saved as quickly as they are generated. If the network is unreliable or down, or if changes
		// are being made to the model more quickly than they can be saved, this value will continue to grow until the
		// network catches up and the changes are successfully saved.
		saveDelay : number;

		// Adds an event listener to the event target. The same handler can only be added once per the type.
		// Even if you add the same handler multiple times using the same type then it will only be called once when
		// the event is dispatched.
		addEventListener(type:string, listener:GoogEventHandler, opt_capture?:boolean) : void;

		// Closes the document and disconnects from the server.
		// After this function is called, event listeners will no longer fire and attempts to access the document, model,
		// or model objects will throw a gapi.drive.realtime.DocumentClosedError.
		// Calling this function after the document has been closed will have no effect.
		close():void;

		// Gets an array of collaborators active in this session. Each collaborator is a jsMap with these fields:
		// sessionId, userId, displayName, color, isMe, isAnonymous.
		getCollaborators() :	Collaborator[];

		// Gets the collaborative model associated with this document.
		// @return non-null Model
		getModel():Model;

		// Removes all event listeners from this object.
		removeAllEventListeners()	: void;

		// Removes an event listener from the event target. The handler must be the same object as the one added.
		// If the handler has not been added then nothing is done.
		removeEventListener(type:string, listener:GoogEventHandler, opt_capture?:boolean) :	void;

		// Saves a copy of this document to a new file. After this function is called, all changes to this document no
		// longer affect the old document and are instead saved to the new file.
		// The provided file ID must refer to a valid file in Drive which does not have any Realtime data for your app.
		// This function can also be used on an in-memory file to convert it to a Drive-connected file.
		saveAs(fileId:string)	: void;

	}

	// Complete
	// https://developers.google.com/google-apps/realtime/reference/gapi.drive.realtime#.ErrorType
	export type ErrorType =
		"concurrent_creation" | "invalid_compound_operation" | "invalid_json_syntax" |
		"missing_property" | "not_found" | "forbidden" | "server_error" | "client_error" |
		"token_refresh_required" | "invalid_element_type" | "no_write_permission" |
		"fatal_network_error" | "unexpected_element";
	export const ErrorType : {
		// Another user created the document's initial state after
		// gapi.drive.realtime.load was called but before the local
		// creation was saved.
		CONCURRENT_CREATION: ErrorType,

		// A compound operation was still open at the end of a
		// synchronous block. Compound operations must always
		// be ended in the same synchronous block that they
		// are started.
		INVALID_COMPOUND_OPERATION: ErrorType,

		// The user tried to decode a brix model that
		// contained invalid json.
		INVALID_JSON_SYNTAX: ErrorType,

		// The user tried to decode a brix model that was
		// missing a neccessary property.
		MISSING_PROPERTY: ErrorType,

		// The provided document ID could not be found.
		NOT_FOUND: ErrorType,

		// The user associated with the provided OAuth token
		// is not authorized to access the provided document
		// ID.
		FORBIDDEN: ErrorType,

		// An internal error occurred in the Drive Realtime
		// API server.
		SERVER_ERROR: ErrorType,

		// An internal error occurred in the Drive Realtime API client.
		CLIENT_ERROR: ErrorType,

		// The provided OAuth token is no longer valid and
		// must be refreshed.
		TOKEN_REFRESH_REQUIRED: ErrorType,

		// The provided JSON element does not have the
		// expected type.
		INVALID_ELEMENT_TYPE: ErrorType,

		// The user does not have permission to edit the
		// document.
		NO_WRITE_PERMISSION: ErrorType,

		// A network error occurred on a request to the
		// Realtime API server for a request which can not be
		// retried. The document may no longer be used after
		// this error has occurred. This error can only be
		// corrected by reloading the document.
		FATAL_NETWORK_ERROR: ErrorType,

		// The provided JSON element has the correct JSON type
		// but does not have the correct expected Realtime
		// type.
		UNEXPECTED_ELEMENT: ErrorType,
	};

	// Complete
	// https://developers.google.com/google-apps/realtime/reference/gapi.drive.realtime.Error
	export class Error {
		constructor (type: string, message: string, isFatal: boolean);

		// The type of the error that occurred.
		type: ErrorType;

		// A message describing the error.
	  	message: string;

		// Whether the error is fatal. Fatal errors cannot be recovered
		// from and require the document to be reloaded.
	  	isFatal: boolean;

		// Returns a string representation of the error object.
		toString(): string;
	}

	// Complete
	// Opens the debugger application on the current page. The debugger shows all realtime documents that the
	// page has loaded and is able to view, edit and debug all aspects of each realtime document.
	export function debug() : void;

	/* Creates a new file with fake network communications. This file will not talk to the server and will only
	   exist in memory for as long as the browser session persists.
	   https://developers.google.com/google-apps/realtime/reference/gapi.drive.realtime#.newInMemoryDocument
	 @Param opt_onLoaded {function(non-null gapi.drive.realtime.Document)}
	 A callback that will be called when the realtime document is ready. The created or opened realtime document
	 object will be passed to this function.

	 @Param opt_initializerFn {function(non-null gapi.drive.realtime.Model)}
	 An optional initialization function that will be called before onLoaded only the first time that the document
	 is loaded. The document's gapi.drive.realtime.Model object will be passed to this function.

	 @Param opt_errorFn {function(non-null gapi.drive.realtime.Error)}
	 An optional error handling function that will be called if an error occurs while the document is being
	 loaded or edited. A gapi.drive.realtime.Error object describing the error will be passed to this function.
	*/
	export function newInMemoryDocument(
		opt_onLoaded? : (d:Document) => void,
		opt_initializerFn? : (m:Model) => void,
		opt_errorFn? : (e:gapi.drive.realtime.Error) => void
	) : Document;

	/* Loads an existing file by id.
	https://developers.google.com/google-apps/realtime/reference/gapi.drive.realtime#.load

	 @Param fileId {string}  Id of the file to load.

	 @Param onLoaded {function(non-null gapi.drive.realtime.Document)}
	 A callback that will be called when the realtime document is ready. The created or opened realtime document
	 object will be passed to this function.

	 @Param opt_initializerFn {function(non-null gapi.drive.realtime.Model)}
	 An optional initialization function that will be called before onLoaded only the first time that the document
	 is loaded. The document's gapi.drive.realtime.Model object will be passed to this function.

	 @Param opt_errorFn {function(non-null gapi.drive.realtime.Error)}
	 An optional error handling function that will be called if an error occurs while the document is being
	 loaded or edited. A gapi.drive.realtime.Error object describing the error will be passed to this function.
	*/
	export function load(
		fileId:string,
		onLoaded? : (d:Document) => void,
		opt_initializerFn? : (m:Model) => void,
		opt_errorFn? : (e:Error) => void
	):void;

	export function loadAppDataDocument(
		onLoaded:(x:Document) => void,
		opt_initializerFn?:(x:Model) => void,
		opt_errorFn?:(e:Error) => void
	):void

	// Loads an in-memory document from a json string.
	// This document does not talk to the server and will only exist in memory for as long as the browser session exists.
	export function loadFromJson(
		json:string,
		opt_errorFn?:(e:Error) => void
	):Document

}


declare namespace gapi.drive.realtime.databinding {
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

	export function bindString(s:CollaborativeString, textinput:HTMLInputElement) : Binding
}


// rtclient is a global var introduced by realtime-client-utils.js
declare namespace rtclient {
	// INCOMPLETE
	export interface RealtimeLoader {
		start():void;
		load():void;
		handleErrors(e:gapi.drive.realtime.Error):void;
	}
	interface RealtimeLoaderFactory {
		new (options:LoaderOptions) : RealtimeLoader;
	}

	// ***********************************
	// NOTE THIS IS OUT OF DATE. realtime-client-utils.js has been rewritten, with the new version "Realtime Utils 1.0.0".
	// Will add typings for the new version later.
	// The remainder of this file types some (not all) things in realtime-client-utils.js, found here:
	// https://developers.google.com/google-apps/realtime/realtime-quickstart
	// and
	// https://apis.google.com/js/api.js
	// ***********************************


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
		initializeModel: (model:gapi.drive.realtime.Model) => void;

		// Function to be called every time a Realtime file is loaded.
		onFileLoaded: (rtdoc:gapi.drive.realtime.Document) => void;
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
		RealtimeLoader : RealtimeLoaderFactory;

		/**
		 * Creates a new Realtime file.
		 * @param title {string} title of the newly created file.
		 * @param mimeType {string} the MIME type of the new file.
		 * @param callback {(file:DriveAPIFileResource) => void} the callback to call after creation.
		 */
		createRealtimeFile(title:string, mimeType:string, callback:(file:DriveAPIFileResource) => void) : void;
	}

	export var RealtimeLoader : RealtimeLoaderFactory

	/**
	 * Creates a new Realtime file.
	 * @param title {string} title of the newly created file.
	 * @param mimeType {string} the MIME type of the new file.
	 * @param callback {(file:DriveAPIFileResource) => void} the callback to call after creation.
	 */
	export function createRealtimeFile(title:string, mimeType:string, callback:(file:DriveAPIFileResource) => void) : void
}

// INCOMPLETE
declare namespace rtclient.params {
	// string containing one or more file ids separated by spaces.
	export var fileIds:string
}

