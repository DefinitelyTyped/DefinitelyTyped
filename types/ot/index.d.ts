import { EventEmitter } from "events";

/**
 * A selection is basically an array of ranges. Every range represents a real
 * selection or a cursor in the document (when the start position equals the
 * end position of the range). The array must not be empty.
 */
export class Selection {
    ranges: Selection.Range[];
    position: number;
    selectionEnd?: any;
    equals(other: Selection): boolean;
    somethingSelected(): boolean;
    /**
     * Return the more current selection information.
     * @param operation The op
     */
    compose(operation: TextOperation): Selection;
    /**
     * Update the selection with respect to an operation.
     * @param operation The op
     */
    transform(operation: TextOperation): Selection;
    /**
     * Convenience method for creating selections only containing a single cursor
     * and no real selection range.
     * @param position The pos
     */
    static createCursor(position: number): Selection;
    static fromJSON(obj: string): Selection;
}

export namespace Selection {
    /*
     * Range has `anchor` and `head` properties, which are zero-based indices into
     * the document. The `anchor` is the side of the selection that stays fixed,
     * `head` is the side of the selection where the cursor is. When both are
     * equal, the range represents a cursor.
     */
    class Range {
        anchor: number;
        head: number;
        constructor(anchor: number, head: number);
        equals(other: Range): boolean;
        isEmpty(): boolean;
        transform(operation: TextOperation): Range;
        static fromJSON(object: { anchor: number; head: number }): Range;
    }
}

export type SerializedTextOperation = Array<string | number>;

/**
 * Operation are essentially lists of ops. There are three types of ops:
 *
 * * Retain ops: Advance the cursor position by a given number of characters.
 *   Represented by positive ints.
 * * Insert ops: Insert a given string at the current cursor position.
 *   Represented by strings.
 * * Delete ops: Delete the next n characters. Represented by negative ints.
 *
 * After an operation is constructed, the user of the library can specify the
 * actions of an operation (skip/insert/delete) with the three builder
 * methods. They all return the operation for convenient chaining.
 */
export class TextOperation {
    /**
     * An operation's baseLength is the length of every string the operation
     * can be applied to.
     */
    baseLength: number;
    /**
     * When an operation is applied to an input string, you can think of this as
     * if an imaginary cursor runs over the entire string and skips over some
     * parts, deletes some parts and inserts characters at some positions. These
     * actions (skip/delete/insert) are stored as an array in the "ops" property.
     */
    ops: SerializedTextOperation;
    /**
     * The targetLength is the length of every string that results from applying
     * the operation on a valid input string.
     */
    targetLength: number;
    equals(other: TextOperation): boolean;
    /**
     * Apply an operation to a string, returning a new string. Throws an error if
     * there's a mismatch between the input string and the operation.
     * @param doc The doc
     */
    apply(doc: string): string;
    /**
     * Computes the inverse of an operation. The inverse of an operation is the
     * operation that reverts the effects of the operation, e.g. when you have an
     * operation 'insert("hello "); skip(6);' then the inverse is 'delete("hello ");
     * skip(6);'. The inverse should be used for implementing undo.
     * @param doc The doc
     */
    invert(doc: string): TextOperation;
    /**
     * Compose merges two consecutive operations into one operation, that
     * preserves the changes of both. Or, in other words, for each input string S
     * and a pair of consecutive operations A and B,
     * apply(apply(S, A), B) = apply(S, compose(A, B)) must hold.
     * @param operation The op
     */
    compose(operation: TextOperation): TextOperation;
    /**
     * When you use ctrl-z to undo your latest changes, you expect the program not
     * to undo every single keystroke but to undo your last sentence you wrote at
     * a stretch or the deletion you did by holding the backspace key down. This
     * This can be implemented by composing operations on the undo stack. This
     * method can help decide whether two operations should be composed. It
     * returns true if the operations are consecutive insert operations or both
     * operations delete text at the same position. You may want to include other
     * factors like the time since the last change in your decision.
     * @param operation The op
     */
    shouldBeComposedWith(operation: TextOperation): boolean;
    /**
     * Decides whether two operations should be composed with each other
     * if they were inverted, that is
     * `shouldBeComposedWith(a, b) = shouldBeComposedWithInverted(b^{-1}, a^{-1})`.
     * @param operation The op
     */
    shouldBeComposedWithInverted(operation: TextOperation): boolean;
    /**
     * Delete a string at the current position.
     * @param str The string or its length
     */
    delete(str: number | string): TextOperation;
    /**
     * Insert a string at the current position.
     * @param str The string
     */
    insert(str: string): TextOperation;
    /**
     * Skip over a given number of characters.
     * @param length The length
     */
    retain(length: number): TextOperation;
    /**
     * Tests whether this operation has no effect.
     */
    isNoop(): boolean;
    /**
     * Pretty printing.
     */
    toString(): string;
    /**
     * Converts operation into a JSON value.
     */
    toJSON(): SerializedTextOperation;
    /**
     * Converts a plain JS object into an operation and validates it.
     * @param operation The op
     */
    static fromJSON(operation: SerializedTextOperation): TextOperation;
    /**
     * Delete ops: Delete the next n characters. Represented by negative ints.
     * @param operation The op
     */
    static isDelete(operation: string | number): boolean;
    /**
     * Insert ops: Insert a given string at the current cursor position.
     *   Represented by strings.
     * @param operation The op
     */
    static isInsert(operation: string | number): boolean;
    /**
     * Retain ops: Advance the cursor position by a given number of characters.
     *   Represented by positive ints.
     * @param operation The op
     */
    static isRetain(operation: string | number): boolean;
    /**
     * Transform takes two operations A and B that happened concurrently and
     * produces two operations A' and B' (in an array) such that
     * `apply(apply(S, A), B') = apply(apply(S, B), A')`. This function is the
     * heart of OT.
     * @param left The left op
     * @param right The right op
     */
    static transform(left: TextOperation, right: TextOperation): TextOperation;
}

export class Client {
    revision: number;
    state: Client.Synchronized;
    constructor(revision: number);
    setState(state: Client.Synchronized): void;
    /**
     * Call this method when the user changes the document.
     * @param operation The op
     */
    applyClient(operation: TextOperation): void;
    /**
     * Call this method with a new operation from the server
     * @param operation The op
     */
    applyServer(operation: TextOperation): void;
    serverAck(): void;
    serverReconnect(): void;
    /**
     * Transforms a selection from the latest known server state to the current
     * client state. For example, if we get from the server the information that
     * another user's cursor is at position 3, but the server hasn't yet received
     * our newest operation, an insertion of 5 characters at the beginning of the
     * document, the correct position of the other user's cursor in our current
     * document is 8.
     * @param selection The selection
     */
    transformSelection(selection: Selection): Selection;
    /**
     * Override this method.
     * @param revision The revision
     * @param operation The op
     */
    sendOperation(revision: number, operation: TextOperation): void;
    /**
     * Override this method.
     * @param operation The op
     */
    applyOperation(operation: TextOperation): void;
}

export namespace Client {
    interface Sync<C, S, A> {
        applyClient(client: Client, operation: TextOperation): C;
        applyServer(client: Client, operation: TextOperation): S;
        serverAck(): A;
        transformSelection(selection: Selection): Selection;
    }
    /**
     * In the 'Synchronized' state, there is no pending operation that the client
     * has sent to the server.
     */
    interface Synchronized extends Sync<AwaitingConfirm, Synchronized, never> {}
    function Synchronized(): Synchronized;
    /**
     * In the 'AwaitingConfirm' state, there's one operation the client has sent
     * to the server and is still waiting for an acknowledgement.
     */
    interface AwaitingConfirm extends Sync<AwaitingWithBuffer, AwaitingConfirm, Synchronized> {
        outstanding: TextOperation;
        resend(client: Client): void;
    }
    function AwaitingConfirm(outstanding: TextOperation): AwaitingConfirm;
    /**
     * In the 'AwaitingWithBuffer' state, the client is waiting for an operation
     * to be acknowledged by the server while buffering the edits the user makes
     */
    interface AwaitingWithBuffer extends Sync<AwaitingWithBuffer, AwaitingWithBuffer, AwaitingConfirm> {
        outstanding: TextOperation;
        buffer: TextOperation;
        resend(client: Client): void;
    }
    function AwaitingWithBuffer(outstanding: TextOperation, buffer: TextOperation): AwaitingWithBuffer;
}

export class Server {
    document: string;
    operations?: TextOperation[] | undefined;
    /**
     * Constructor. Takes the current document as a string and optionally the array
     * of all operations.
     * @param document The doc
     * @param operations The ops
     */
    constructor(document: string, operations?: TextOperation[]);
    /**
     * Call this method whenever you receive an operation from a client.
     * @param revision The revision
     * @param operation The op
     */
    receiveOperation(revision: number, operation: TextOperation): TextOperation;
}

export class SimpleTextOperation {
    apply(doc: string): string;
    toString(): string;
    equals(other: SimpleTextOperation): boolean;
    static transform(a: SimpleTextOperation, b: SimpleTextOperation): [SimpleTextOperation, SimpleTextOperation];
    /**
     * Convert a normal, composable `TextOperation` into an array of
     * `SimpleTextOperation`s.
     * @param operation The op
     */
    static fromTextOperation(operation: TextOperation): SimpleTextOperation[];
}

export namespace SimpleTextOperation {
    /**
     * Insert the string `str` at the zero-based `position` in the document.
     */
    class Insert extends SimpleTextOperation {
        constructor(str: string, position: number);
    }
    /**
     * Delete `count` many characters at the zero-based `position` in the document.
     */
    class Delete extends SimpleTextOperation {
        constructor(count: number, position: number);
    }
    /**
     * An operation that does nothing. This is needed for the result of the
     * transformation of two deletions of the same character.
     */
    class Noop extends SimpleTextOperation {}
}

export interface EditorSocketIOServer<S extends { id: string } = any, C = any> extends EventEmitter, Server {
    // new(document: string, operations: TextOperation[], docId: string, mayWrite?: (_: any, cb: (b: boolean) => void) => void): EditorSocketIOServer;
    addClient(socket: S): void;
    onOperation(socket: S, revision: number, operation: string, selection: string): void;
    updateSelection(socket: S, selection: string): void;
    setName(socket: S, name: string): void;
    getClient(clientId: string): C;
    onDisconnect(socket: S): void;
}

export {};
type UndoState = "normal" | "undoing" | "redoing";

export class UndoManager {
    /**
     * Create a new UndoManager with an optional maximum history size.
     * @param maxItems The max history size
     */
    constructor(maxItems?: number);
    state: UndoState;
    dontCompose: boolean;
    undoStack: WrappedOperation[];
    redoStack: WrappedOperation[];
    /**
     * Add an operation to the undo or redo stack, depending on the current state
     * of the UndoManager.
     * @param operation The operation added must be the inverse of the last
     * edit.
     * @param compose When `true`, compose the operation with the last operation
     * unless the last operation was alread pushed on the redo stack or was hidden
     * by a newer operation on the undo stack
     */
    add(operation: TextOperation | WrappedOperation, compose?: boolean): void;
    /**
     * Transform the undo and redo stacks against a operation by another client.
     * @param operation The op
     */
    transform(operation: TextOperation | WrappedOperation): void;
    /**
     * Perform an undo by calling a function with the latest operation on the undo
     * stack.
     * @param fun The function is expected to call the `add` method with the inverse
     * of the operation, which pushes the inverse on the redo stack.
     */
    performUndo(fun: (op: WrappedOperation) => void): void;
    /**
     * The inverse of `performUndo`.
     * @param fun The function
     */
    performRedo(fun: (op: WrappedOperation) => void): void;
    /**
     * Is the undo stack not empty?
     */
    canUndo(): boolean;
    /**
     * Is the redo stack not empty?
     */
    canRedo(): boolean;
    /**
     * Whether the UndoManager is currently performing an undo.
     */
    isUndoing(): boolean;
    /**
     * Whether the UndoManager is currently performing a redo.
     */
    isRedoing(): boolean;
}

/**
 * A WrappedOperation contains an operation and corresponing metadata.
 */
export class WrappedOperation<T = any> {
    wrapped: TextOperation;
    meta: T;
    constructor(operation: TextOperation, meta?: T);
    apply(doc: string): string;
    invert(doc: string): WrappedOperation<T>;
    compose(operation: WrappedOperation<T>): WrappedOperation<T>;
    static transform<T>(left: WrappedOperation<T>, right: WrappedOperation<T>): WrappedOperation<T>;
}

export interface ClientAdapter {
    registerUndo(fun: () => void): void;
    registerRedo(fun: () => void): void;
    getValue(): string;
    applyOperation(operation: TextOperation): void;
    setSelection(selection?: Selection): void;
    getSelection(): Selection;
    registerCallbacks(callbacks: ClientAdapterCallbacks): void;
    setOtherSelection(selection: Selection, color: string, otherClientId: string): Mark;
}

export interface ClientAdapterCallbacks {
    change(operation: TextOperation, inverse: TextOperation): void;
    selectionChange(): void;
    blur(): void;
}

export interface ServerAdapter {
    sendSelection(selection?: Selection): void;
    sendOperation(revision: number, operation: SerializedTextOperation, selection?: Selection): void;
    registerCallbacks(callbacks: ServerAdapterCallbacks): void;
}

export interface ServerAdapterCallbacks {
    client_left(clientId: string): void;
    set_name(clientId: string, name: string): void;
    ack(): void;
    operation(operation: SerializedTextOperation): void;
    selection(clientId: string, selection: string): void;
    clients(clients: any): void;
    reconnect(): void;
}

export interface ClientObj {
    clientId: string;
    name?: string | undefined;
    selection: string;
}

export interface Clients<T = any> {
    [clientId: string]: T;
}

export interface Mark {
    clear(): void;
}

export class EditorClient extends Client {
    revision: number;
    clients: { [key: string]: EditorClient.OtherClient };
    serverAdapter: any;
    editorAdapter: any;

    constructor(revision: number, clients: ClientObj[], serverAdapter: ServerAdapter, editorAdapter: ClientAdapter);

    // not sure about all those signatures
    addClient(clientId: string, clientObj: ClientObj): void;
    initializeClients(clients: Clients): void;
    getClientObject(clientId: string): ClientObj;
    onClientLeft(clientId: string): void;
    initializeClientList(): void;
    applyUnredo(operation: TextOperation): void;
    undo(): void;
    redo(): void;
    onChange(textOperation: TextOperation, inverse: TextOperation): void;
    updateSelection(): void;
    onSelectionChange(): void;
    onBlur(): void;
    sendSelection(selection: Selection): void;
    sendOperation(revision: number, operation: TextOperation): void;
    applyOperation(operation: TextOperation): void;
}

// TODO
export namespace EditorClient {
    class SelfMeta {}
    class OtherClient {}
}
export const version: string;
