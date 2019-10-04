// Type definitions for dombehind-plugin-jqueryui x.x
// Project: https://github.com/s-ueno/DomBehind
// Definitions by: s-ueno <https://github.com/s-ueno>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module collections {
    interface ICompareFunction<T> {
        (a: T, b: T): number;
    }
    interface IEqualsFunction<T> {
        (a: T, b: T): boolean;
    }
    interface ILoopFunction<T> {
        (a: T): boolean;
    }
    function defaultCompare<T>(a: T, b: T): number;
    function defaultEquals<T>(a: T, b: T): boolean;
    function defaultToString(item: any): string;
    function makeString<T>(item: T, join?: string): string;
    function isFunction(func: any): boolean;
    function isUndefined(obj: any): boolean;
    function isString(obj: any): boolean;
    function reverseCompareFunction<T>(compareFunction: ICompareFunction<T>): ICompareFunction<T>;
    function compareToEquals<T>(compareFunction: ICompareFunction<T>): IEqualsFunction<T>;
    module arrays {
        function indexOf<T>(array: T[], item: T, equalsFunction?: collections.IEqualsFunction<T>): number;
        function lastIndexOf<T>(array: T[], item: T, equalsFunction?: collections.IEqualsFunction<T>): number;
        function contains<T>(array: T[], item: T, equalsFunction?: collections.IEqualsFunction<T>): boolean;
        function remove<T>(array: T[], item: T, equalsFunction?: collections.IEqualsFunction<T>): boolean;
        function frequency<T>(array: T[], item: T, equalsFunction?: collections.IEqualsFunction<T>): number;
        function equals<T>(array1: T[], array2: T[], equalsFunction?: collections.IEqualsFunction<T>): boolean;
        function copy<T>(array: T[]): T[];
        function swap<T>(array: T[], i: number, j: number): boolean;
        function toString<T>(array: T[]): string;
        function forEach<T>(array: T[], callback: (item: T) => boolean): void;
    }
    interface ILinkedListNode<T> {
        element: T;
        next: ILinkedListNode<T>;
    }
    class LinkedList<T> {
        firstNode: ILinkedListNode<T>;
        private lastNode;
        private nElements;
        constructor();
        add(item: T, index?: number): boolean;
        first(): T;
        last(): T;
        elementAtIndex(index: number): T;
        indexOf(item: T, equalsFunction?: IEqualsFunction<T>): number;
        contains(item: T, equalsFunction?: IEqualsFunction<T>): boolean;
        remove(item: T, equalsFunction?: IEqualsFunction<T>): boolean;
        clear(): void;
        equals(other: LinkedList<T>, equalsFunction?: IEqualsFunction<T>): boolean;
        private equalsAux;
        removeElementAtIndex(index: number): T;
        forEach(callback: (item: T) => boolean): void;
        reverse(): void;
        toArray(): T[];
        size(): number;
        isEmpty(): boolean;
        toString(): string;
        private nodeAtIndex;
        private createNode;
    }
    interface IDictionaryPair<K, V> {
        key: K;
        value: V;
    }
    class Dictionary<K, V> {
        protected table: {
            [key: string]: IDictionaryPair<K, V>;
        };
        protected nElements: number;
        protected toStr: (key: K) => string;
        constructor(toStrFunction?: (key: K) => string);
        getValue(key: K): V;
        setValue(key: K, value: V): V;
        remove(key: K): V;
        keys(): K[];
        values(): V[];
        forEach(callback: (key: K, value: V) => any): void;
        containsKey(key: K): boolean;
        clear(): void;
        size(): number;
        isEmpty(): boolean;
        toString(): string;
    }
    class LinkedDictionary<K, V> extends Dictionary<K, V> {
        private head;
        private tail;
        constructor(toStrFunction?: (key: K) => string);
        private appendToTail;
        private getLinkedDictionaryPair;
        getValue(key: K): V;
        remove(key: K): V;
        clear(): void;
        private replace;
        setValue(key: K, value: V): V;
        keys(): K[];
        values(): V[];
        forEach(callback: (key: K, value: V) => any): void;
    }
    class MultiDictionary<K, V> {
        private dict;
        private equalsF;
        private allowDuplicate;
        constructor(toStrFunction?: (key: K) => string, valuesEqualsFunction?: IEqualsFunction<V>, allowDuplicateValues?: boolean);
        getValue(key: K): V[];
        setValue(key: K, value: V): boolean;
        remove(key: K, value?: V): boolean;
        keys(): K[];
        values(): V[];
        containsKey(key: K): boolean;
        clear(): void;
        size(): number;
        isEmpty(): boolean;
    }
    class Heap<T> {
        private data;
        private compare;
        constructor(compareFunction?: ICompareFunction<T>);
        private leftChildIndex;
        private rightChildIndex;
        private parentIndex;
        private minIndex;
        private siftUp;
        private siftDown;
        peek(): T;
        add(element: T): boolean;
        removeRoot(): T;
        contains(element: T): boolean;
        size(): number;
        isEmpty(): boolean;
        clear(): void;
        forEach(callback: (item: T) => boolean): void;
    }
    class Stack<T> {
        private list;
        constructor();
        push(elem: T): boolean;
        add(elem: T): boolean;
        pop(): T;
        peek(): T;
        size(): number;
        contains(elem: T, equalsFunction?: IEqualsFunction<T>): boolean;
        isEmpty(): boolean;
        clear(): void;
        forEach(callback: ILoopFunction<T>): void;
    }
    class Queue<T> {
        private list;
        constructor();
        enqueue(elem: T): boolean;
        add(elem: T): boolean;
        dequeue(): T;
        peek(): T;
        size(): number;
        contains(elem: T, equalsFunction?: IEqualsFunction<T>): boolean;
        isEmpty(): boolean;
        clear(): void;
        forEach(callback: ILoopFunction<T>): void;
    }
    class PriorityQueue<T> {
        private heap;
        constructor(compareFunction?: ICompareFunction<T>);
        enqueue(element: T): boolean;
        add(element: T): boolean;
        dequeue(): T;
        peek(): T;
        contains(element: T): boolean;
        isEmpty(): boolean;
        size(): number;
        clear(): void;
        forEach(callback: ILoopFunction<T>): void;
    }
    class Set<T> {
        private dictionary;
        constructor(toStringFunction?: (item: T) => string);
        contains(element: T): boolean;
        add(element: T): boolean;
        intersection(otherSet: Set<T>): void;
        union(otherSet: Set<T>): void;
        difference(otherSet: Set<T>): void;
        isSubsetOf(otherSet: Set<T>): boolean;
        remove(element: T): boolean;
        forEach(callback: ILoopFunction<T>): void;
        toArray(): T[];
        isEmpty(): boolean;
        size(): number;
        clear(): void;
        toString(): string;
    }
    class Bag<T> {
        private toStrF;
        private dictionary;
        private nElements;
        constructor(toStrFunction?: (item: T) => string);
        add(element: T, nCopies?: number): boolean;
        count(element: T): number;
        contains(element: T): boolean;
        remove(element: T, nCopies?: number): boolean;
        toArray(): T[];
        toSet(): Set<T>;
        forEach(callback: ILoopFunction<T>): void;
        size(): number;
        isEmpty(): boolean;
        clear(): void;
    }
    class BSTree<T> {
        private root;
        private compare;
        private nElements;
        constructor(compareFunction?: ICompareFunction<T>);
        add(element: T): boolean;
        clear(): void;
        isEmpty(): boolean;
        size(): number;
        contains(element: T): boolean;
        remove(element: T): boolean;
        inorderTraversal(callback: ILoopFunction<T>): void;
        preorderTraversal(callback: ILoopFunction<T>): void;
        postorderTraversal(callback: ILoopFunction<T>): void;
        levelTraversal(callback: ILoopFunction<T>): void;
        minimum(): T;
        maximum(): T;
        forEach(callback: ILoopFunction<T>): void;
        toArray(): T[];
        height(): number;
        private searchNode;
        private transplant;
        private removeNode;
        private inorderTraversalAux;
        private levelTraversalAux;
        private preorderTraversalAux;
        private postorderTraversalAux;
        private minimumAux;
        private maximumAux;
        private heightAux;
        private insertNode;
        private createNode;
    }
}

declare namespace DomBehind {
    abstract class Application {
        static readonly Current: Application;
        private static _app;
        static Resolve(): void;
        protected OnBrowserBack(): void;
        SafeAction(func: Function, context?: any, ...args: any[]): any;
        abstract UnhandledException(error: any): void;
        readonly DefaultActionPolicy: Data.ActionPolicy[];
        readonly Navigator: Navigation.INavigator;
        private _navigator;
    }
}

interface JQueryStatic {
    BindingAnnotation(selector: string, resolveViewType: () => any, resolveViewModelType: () => any): JQueryPromise<any>;
}
declare class annotationCollection {
    private lazyList;
    Any(selector: string, resolveViewType: () => any, resolveViewModelType: () => any): boolean;
    Add(selector: string, resolveViewType: () => any, resolveViewModelType: () => any): void;
    Remove(selector: string, resolveViewType: () => any, resolveViewModelType: () => any): void;
    ToArray(): {
        Selector: string;
        ResolveViewType: () => any;
        ResolveViewModelType: () => any;
    }[];
    Pop(peek?: boolean): void;
}
declare var __lazyCollection: annotationCollection;
declare namespace DomBehind {
}

declare namespace DomBehind {
    abstract class BizView implements IDisposable {
        Container: JQuery;
        private _container;
        DataContext: any;
        private _dataContext;
        abstract BuildBinding(): void;
        OnDataContextPropertyChanged(sender: any, e: PropertyChangedEventArgs): void;
        ViewLoaded(responseText: string, textStatus: string, XMLHttpRequest: XMLHttpRequest): void;
        Ensure(): void;
        protected UnSubscribe(): void;
        protected Subscribe(): void;
        protected CreateBindingBuilder<T extends BizViewModel>(): BindingBehaviorBuilder<T>;
        BindingBehaviors: Data.BindingBehaviorCollection;
        UpdateTarget(mark?: string): void;
        UpdateSource(mark?: string): void;
        Validate(mark?: string): boolean;
        RemoveValidator(mark?: string): void;
        ClearValidator(mark?: string): void;
        Dispose(): void;
        protected _disposed: boolean;
    }
}

declare namespace DomBehind {
    abstract class BizViewModel extends NotifiableImp implements Data.IExceptionHandling {
        constructor();
        protected NotifyEvent<TEvent>(event: TypedEvent<TEvent>, args: TEvent): void;
        Title: string;
        private _title;
        IsVisible: boolean;
        View: BizView;
        private _view;
        protected OnViewChanged(): void;
        Initialized: boolean;
        abstract Initialize(): any;
        Activate(): void;
        UpdateTarget(mark?: string): void;
        UpdateSource(mark?: string): void;
        Validate(mark?: string): boolean;
        ClearValidation(mark?: string): void;
        protected LastErrors(mark?: string): DomBehind.Validation.Validator[];
        protected ThrownValidate(mark?: string): void;
        protected WaitingOverlay(func: Function, handled?: boolean, image?: string): any;
        protected SafeAction(func: Function, handled?: boolean, ...policies: Data.ActionPolicy[]): any;
        Catch(ex: Data.ActionPolicyExceptionEventArgs): void;
        protected readonly Navigator: Navigation.INavigator;
        IsEnabled: boolean;
        ShowInfomation(message: string, title?: string): void;
        ShowWarning(message: string, title?: string): void;
        ShowError(message: string, title?: string): void;
        ShowMessage(message: string, title?: string, status?: MessageStatus): void;
        ShowYesNo(message: string, title?: string, option?: {
            status?: MessageStatus;
            yesCallback?: Function;
            noCallBack?: Function;
        }): void;
        ShowOkCancel(message: string, title?: string, option?: {
            status?: MessageStatus;
            okCallback?: Function;
            cancelCallBack?: Function;
        }): void;
        Dispose(): void;
    }
}

declare namespace DomBehind {
    class IndexedDBHelper<T> {
        constructor(ctor: TypedConstructor<T>, db: string);
        DbName: string;
        TableName: string;
        Drop(): JQueryPromise<any>;
        List(): JQueryPromise<T[]>;
        Truncate(): JQueryPromise<any>;
        FindRowAsync(exp: (obj: T) => string | number, value: string | number): JQueryPromise<T>;
        FindRowsAsync(exp: (obj: T) => string | number, value: string | number): JQueryPromise<T[]>;
        protected FetchCursor(indexStore: IDBIndex, value: string | number, d: JQueryDeferred<any>): void;
        UpsertAsync(entity: T | Array<T>, primaryKey?: (obj: T) => string | number): JQueryPromise<any>;
        DeleteAsync(entity: T | Array<T>): JQueryPromise<any>;
        protected Open(): JQueryPromise<IDBDatabase>;
        protected Upgrade(version: number, action: (db: any) => void): void;
    }
}

declare namespace DomBehind {
    class Locator {
        private static _container;
        static Push(ins: any): void;
        static ToArray(): any[];
        static List<T>(typeT: new (...params: any[]) => T, predicate?: (obj: T) => boolean): T[];
        static First<T>(typeT: new (...params: any[]) => T, predicate?: (obj: T) => boolean): T;
        static Remove<T>(typeT: new (...params: any[]) => T, predicate?: (obj: T) => boolean): void;
        static Clear(): void;
    }
}

declare namespace DomBehind {
    class Repository {
        private static contextList;
        static AddService(context: string, getType: () => any, priority?: number): void;
        static RemoveService(context: string): void;
        static GetService<T>(context: string): T;
        static CreateInstance<T>(resolveType: () => any): {};
    }
}

declare namespace DomBehind {
    interface TypedConstructor<T> {
        new (): T;
    }
    class TypedFactory<T> {
        private _ctor;
        constructor(_ctor: TypedConstructor<T>);
        CreateInstance(): T;
    }
}

declare namespace DomBehind {
    class Appeal {
        static _clearTimeout: any;
        static IsEnabledProperty: Data.DependencyProperty;
        private static styleIdentity;
        private static css;
        static Register(behavior: Data.DataBindingBehavior): void;
        protected Behavior: Data.DataBindingBehavior;
        protected Render(newValue: boolean): void;
    }
}

declare namespace DomBehind {
    class Breadbrumb {
        Selector: string;
        constructor(Selector: string);
        static AllowLocalStorage: boolean;
        Parse(newUri: string, title: string, isRoot?: boolean): string;
        protected ParseRestUri(newUri: string, isRoot: boolean, title: string): string;
        protected ParseSessionStorage(newUri: string, isRoot: boolean, title: string): string;
        protected ToCompress(input: any): string;
        protected ToDecompress(input: string): any;
        protected static SplitQueryString(s: string): Array<{
            Key: string;
            Value: string;
        }>;
        protected static GetLocalStorage(id: string): string;
        protected static SetLocalStorage(id: string, value: string): void;
        Update(): void;
        protected BuildStack(s: string): any;
        Pop(count?: number): void;
    }
}

declare namespace DomBehind {
    interface IFileInfo {
        name: string;
        size: number;
        type: string;
        uri: string;
    }
    interface ISelectedFiles extends JQueryEventObject {
        files: IFileInfo[];
    }
    interface IFileUploader {
        UpdateAll(): any;
        Update(file: IFileInfo): any;
    }
    class FileBrowser extends Data.ActionBindingBehavior implements IFileUploader {
        static SelectedFiles: IEventBuilder;
        Ensure(): void;
        Files: Array<IFileInfo>;
        AllowMultiFiles: boolean;
        AcceptValue: string;
        InstanceExpression: LamdaExpression;
        UploadUri: string;
        ProgressExpression: Function;
        CompletedExpression: Function;
        ErrorExpression: Function;
        AlwaysExpression: Function;
        MaximumNumberOfAjax: number;
        UpdateAll(): JQueryPromise<JQueryPromise<any>[]>;
        Update(file: IFileInfo): JQueryPromise<any>;
        OnProgress(e: {
            loaded: number;
            total: number;
            percent: number;
            file: IFileInfo;
        }): void;
        OnCompleted(e: {
            response: any;
            file: IFileInfo;
        }): void;
        OnError(e: {
            file: IFileInfo;
            error: any;
        }): void;
        OnAlways(): void;
    }
    class FileBrowserBindingBehaviorBuilder<T> extends Data.ActionBindingBehaviorBuilder<T> {
        constructor(owner: BizView);
        AllowMultiFiles(): FileBrowserBindingBehaviorBuilder<T>;
        AcceptFilter(filter: string): FileBrowserBindingBehaviorBuilder<T>;
        UploadUri(uri: string): FileBrowserBindingBehaviorBuilder<T>;
        BindingUploader(exp: (owner: T) => IFileUploader): FileBrowserBindingBehaviorBuilder<T>;
        BindingUploaderProgress(exp: (owner: T, e: {
            loaded: number;
            total: number;
            percent: number;
            file: IFileInfo;
        }) => void): FileBrowserBindingBehaviorBuilder<T>;
        BindingUploaderComplete(exp: (owner: T, e: {
            response: any;
            file: IFileInfo;
        }) => void): FileBrowserBindingBehaviorBuilder<any>;
        BindingUploaderError(exp: (owner: T, e: {
            file: IFileInfo;
            error: any;
        }) => void): FileBrowserBindingBehaviorBuilder<any>;
        BindingUploaderAlways(exp: (owner: T) => void): FileBrowserBindingBehaviorBuilder<any>;
        MaximumNumberOfAjax(number: number): FileBrowserBindingBehaviorBuilder<T>;
    }
    interface BindingBehaviorBuilder<T> {
        BuildFileBrowser(selectedEvent?: (x: T, args: ISelectedFiles) => void): FileBrowserBindingBehaviorBuilder<T>;
    }
}

declare namespace DomBehind {
    enum FlipAnimation {
        Flip = 0,
        Slide = 1
    }
    interface IFlipOption {
        front?: JQuery;
        back?: JQuery;
        fit?: boolean;
        animation?: FlipAnimation;
    }
    class FlipBehavior extends Data.DataBindingBehavior {
        Option: IFlipOption;
        static readonly IdentityKey = "flip-identity";
        static readonly IsFlipProperty: Data.DependencyProperty;
        private static readonly ValueKey;
        protected SetValue(el: JQuery, newValue: boolean): void;
        private static readonly css;
        private static readonly cssIdentity;
        static Register(behavior: FlipBehavior): void;
    }
    class FlipBindingBehaviorBuilder<T> extends BindingBehaviorBuilder<T> {
        constructor(owner: BizView);
        BindingFlip(exp: (owner: T) => boolean, option?: IFlipOption): BindingBehaviorBuilder<T>;
    }
    interface BindingBehaviorBuilder<T> {
        FlipElement(frontSelector: string, backSelector: string): FlipBindingBehaviorBuilder<T>;
    }
}

declare namespace DomBehind {
    interface BindingBehaviorBuilder<T> {
        InputType(inputType: InputType): BindingBehaviorBuilder<T>;
    }
    enum InputType {
        Hidden = 0,
        Text = 1,
        Search = 2,
        Tel = 3,
        Url = 4,
        Email = 5,
        Password = 6,
        DateTime = 7,
        Date = 8,
        Month = 9,
        Week = 10,
        Time = 11,
        DateTimeLocal = 12,
        Number = 13,
        Range = 14,
        Color = 15,
        Checkbox = 16,
        Radio = 17,
        File = 18,
        Submit = 19,
        Image = 20,
        Reset = 21,
        Button = 22
    }
}

declare namespace DomBehind {
    interface ITableOption {
        class?: string;
        isHover?: boolean;
        isStriped?: boolean;
        isBordered?: boolean;
    }
    interface ITableHeaderBodyOption {
        caption?: string;
        width?: string;
        value?: (x: any) => any;
        convertTarget?: (x: any) => any;
        headerClass?: string;
        cellClass?: (x: any) => any;
    }
    class ListView extends Data.DataBindingBehavior {
        static ItemsSourceProperty: Data.DependencyProperty;
        ItemsSource: Data.ListCollectionView;
        Clear(): void;
        private _items;
        TableOption: ITableOption;
        protected readonly DefaultTableOption: ITableOption;
        Ensure(): void;
        protected TableId: string;
        protected HeaderId: string;
        protected BodyId: string;
        AddColumn(option: ITableHeaderBodyOption): void;
        Columns: Array<ITableHeaderBodyOption>;
    }
    class TableBindingBehaviorBuilder<TRow> extends BindingBehaviorBuilder<TRow> {
        constructor(owner: BizView);
        ColumnBinding(title: string, binding: (row: TRow) => any, option?: ITableHeaderBodyOption): TableBindingBehaviorBuilder<TRow>;
    }
    interface BindingBehaviorBuilder<T> {
        BuildListView<TRow>(itemSource: (x: T) => any, option?: ITableOption): TableBindingBehaviorBuilder<TRow>;
    }
}

declare namespace DomBehind {
    enum MessageStatus {
        Infomation = 0,
        Warning = 1,
        Error = 2
    }
    class MessaageBox {
        static ShowInfomation(message: string, title?: string): void;
        static ShowWarning(message: string, title?: string): void;
        static ShowError(message: string, title?: string): void;
        static ShowMessage(message: string, title?: string, status?: MessageStatus): void;
        static ShowYesNo(message: string, title?: string, option?: {
            status?: MessageStatus;
            yesCallback?: Function;
            noCallBack?: Function;
        }): void;
        static ShowOkCancel(message: string, title?: string, option?: {
            status?: MessageStatus;
            okCallback?: Function;
            cancelCallBack?: Function;
        }): void;
        static BuiltIn<T>(lazy: () => TypedConstructor<T>): void;
        private static _lazy;
        private static readonly Container;
        private static _container;
    }
    interface IMessageContainer {
        ShowMessage(message: string, title?: string, status?: MessageStatus): any;
        ShowYesNo(message: string, title?: string, option?: {
            status?: MessageStatus;
            yesCallback?: Function;
            noCallBack?: Function;
        }): any;
        ShowOkCancel(message: string, title?: string, option?: {
            status?: MessageStatus;
            okCallback?: Function;
            cancelCallBack?: Function;
        }): any;
    }
    class DefaultMessageContainer implements IMessageContainer {
        ShowMessage(message: string, title?: string, status?: MessageStatus): void;
        ShowYesNo(message: string, title?: string, option?: {
            status?: MessageStatus;
            yesCallback?: Function;
            noCallBack?: Function;
        }): void;
        ShowOkCancel(message: string, title?: string, option?: {
            status?: MessageStatus;
            okCallback?: Function;
            cancelCallBack?: Function;
        }): void;
    }
}

declare namespace DomBehind {
    interface BindingBehaviorBuilder<T> {
        Scrolling(): BindingBehaviorBuilder<T>;
        SlideAnimation(): BindingBehaviorBuilder<T>;
    }
}

declare namespace DomBehind.Controls {
    interface ISelectableElement extends IDisplayMemberPath {
        __Selector: JQuery;
        __Element: HTMLOptionElement;
    }
    class Selector {
        Behavior: Data.DataBindingBehavior;
        static ItemsSourceProperty: Data.DependencyProperty;
        static AllowMultipleProperty: Data.DependencyProperty;
        protected static IgnoreMark: string;
        protected static InstanceMark: string;
        static Register(behavior: Data.DataBindingBehavior): void;
        constructor(Behavior: Data.DataBindingBehavior);
        protected UpdateTargetEventHandle: (sender: any, e: any) => void;
        protected UpdateSourceEventHandle: (sender: any, e: any) => void;
        protected PropertyChangedEventHandle: (sender: any, e: any) => void;
        protected UpdateSource(e: JQueryEventObject): boolean;
        protected OnUpdateTarget(sender: Data.DataBindingBehavior, data: any): void;
        protected OnDataSourcePropertyChanged(sender: Data.ListCollectionView, e: PropertyChangedEventArgs): void;
        protected Render(source: Data.ListCollectionView): void;
        protected Multiple: boolean;
        protected RenderOption(element: JQuery, source: Data.ListCollectionView, value: any): void;
        protected EnsureDisplayMemberPath(path: string): IDisplayMemberPath;
        protected EnsureElement(option: JQuery): ISelectableElement;
        private AddedHandle;
        private RemovedHandle;
        protected Added(source: Data.ListCollectionView, obj: any): void;
        protected Removed(source: Data.ListCollectionView, obj: any): void;
        protected Select(source: Data.ListCollectionView): void;
        private SingleSelect;
        private MultipleSelect;
        protected HasChanges(source: Data.ListCollectionView): boolean;
        protected Subscribe(source: Data.ListCollectionView): void;
        protected UnSubscribe(source: Data.ListCollectionView): void;
        static GetDisplayValue(value: any, displayMemberPath: string): any;
    }
}
declare namespace DomBehind.Data {
    interface DataBindingBehaviorBuilder<T> {
        Multiple(): DataBindingBehaviorBuilder<T>;
        Multiple(allowMultiple: (x: T) => boolean): DataBindingBehaviorBuilder<T>;
    }
}

declare namespace DomBehind.Controls {
    class Tab extends Selector {
        static ItemsSourceProperty: Data.DependencyProperty;
        protected static IgnoreMark: string;
        protected static InstanceMark: string;
        static Register(behavior: Data.DataBindingBehavior): void;
        protected Render(source: Data.ListCollectionView): void;
        HeaderContainer: JQuery;
        ContentContainer: JQuery;
        protected NewAdd(source: Data.ListCollectionView, option: Tab.UriOption, isActive?: boolean): Tab.BindingOption;
        protected Options: Tab.BindingOption[];
        protected Added(source: Data.ListCollectionView, obj: any): void;
        protected Removed(source: Data.ListCollectionView, obj: Tab.UriOption): void;
    }
    namespace Tab {
        interface OptionInternal extends IIdentity, IDisplayMemberPath {
            __header?: JQuery;
            __content?: JQuery;
            View?: BizView;
            ViewModel?: BizViewModel;
        }
        interface UriOption extends OptionInternal {
            Uri: string;
        }
        class BindingOption {
            protected Parent: Tab;
            constructor(Parent: Tab);
            readonly HeaderContainer: JQuery;
            Header: JQuery;
            readonly ContentContainer: JQuery;
            Content: JQuery;
            Option: OptionInternal;
            Source: Data.ListCollectionView;
            IsActive: boolean;
            Ensure(): void;
            protected PropertyChangedSafeHandle: (sender: any, e: PropertyChangedEventArgs) => void;
            protected OnRecievePropertyChanged(e: PropertyChangedEventArgs): void;
        }
    }
}

declare namespace DomBehind {
    interface ITemplateListViewOption<T> {
        template: string;
        columnClick?: (owner: T, e: ITemplateListViewColumnClickEventArgs) => void;
        ascClass?: string;
        descClass?: string;
    }
    interface ITemplateListViewColumn {
        templateSelector?: string;
        header?: string;
        expression?: (row: any) => any;
        expressionAction?: (owner: any, row: any) => void;
        convertTarget?: (value: any, element?: any) => any;
        attachedEvent?: IEventBuilder;
        dependencyProperty?: Data.DependencyProperty;
        mode?: Data.BindingMode;
        allowBubbling?: boolean;
    }
    interface ITemplateListViewColumnClickEventArgs {
        isAsc?: boolean;
        text?: string;
        value?: string;
        selector?: string;
        sender?: TemplateListView;
        target?: any;
    }
    class TemplateListView extends Data.DataBindingBehavior {
        static ItemsSourceProperty: Data.DependencyProperty;
        Owner: BizView;
        Option: ITemplateListViewOption<any>;
        Columns: Array<ITemplateListViewColumn>;
        LastOption: ITemplateListViewColumn;
        RowStyleExpression: (row: any) => string;
        AlternateStyle: {
            Selector: string;
            Css: string;
        };
        ItemsSource: Data.ListCollectionView;
        private FindTemplate;
        RemoveAll(): void;
        ClearSortMarks(): void;
        Ensure(): void;
        protected OnColumnClick(e: JQueryEventObject, header: string): void;
        protected readonly DefaultOption: ITemplateListViewOption<any>;
    }
    class TemplateListViewBindingBehaviorBuilder<TOwner, TRow> extends BindingBehaviorBuilder<TRow> {
        constructor(owner: BizView);
        BindingColumn(selector: string, exp: (x: TRow) => any, option?: ITemplateListViewColumn): TemplateListViewBindingBehaviorBuilder<TOwner, TRow>;
        BindingColumnAction(selector: string, exp: (x: TOwner, args: TRow) => void, option?: ITemplateListViewColumn): TemplateListViewBindingBehaviorBuilder<TOwner, TRow>;
        BindingProperty(dp: Data.DependencyProperty, selector: string, exp: (x: TRow) => any, option?: ITemplateListViewColumn): TemplateListViewBindingBehaviorBuilder<TOwner, TRow>;
        BindingEvent(ev: IEventBuilder, selector: string, exp: (x: TOwner, args: TRow) => void, option?: ITemplateListViewColumn): TemplateListViewBindingBehaviorBuilder<TOwner, TRow>;
        BindingRowStyle(exp: (x: TRow) => string): TemplateListViewBindingBehaviorBuilder<TOwner, TRow>;
        BindingAlternateRowStyle(selector: string, css: string): TemplateListViewBindingBehaviorBuilder<any, any>;
    }
    interface BindingBehaviorBuilder<T> {
        BuildTemplateItems<TRow>(itemsSource: (x: T) => any, option: ITemplateListViewOption<T>): TemplateListViewBindingBehaviorBuilder<T, TRow>;
    }
}

declare namespace DomBehind {
    class UIElement {
        static ValueProperty: Data.DependencyProperty;
        static TextProperty: Data.DependencyProperty;
        static SrcProperty: Data.DependencyProperty;
        static HrefProperty: Data.DependencyProperty;
        static IsEnabledProperty: Data.DependencyProperty;
        static IsVisibleProperty: Data.DependencyProperty;
        static OpacityProperty: Data.DependencyProperty;
        static PlaceHolderProperty: Data.DependencyProperty;
        static IsCheckedProperty: Data.DependencyProperty;
        static MaxLengthProperty: Data.DependencyProperty;
        static MaxNumericProperty: Data.DependencyProperty;
        static MinNumericProperty: Data.DependencyProperty;
        static BackgroundColorProperty: Data.DependencyProperty;
        static ColorProperty: Data.DependencyProperty;
        static BackgroundImageProperty: Data.DependencyProperty;
        static ClassProperty: Data.DependencyProperty;
        static HtmlSource: Data.DependencyProperty;
        static Click: IEventBuilder;
        static Enter: IEventBuilder;
        static Keydown: IEventBuilder;
        static FocusIn: IEventBuilder;
        static LostFocus: IEventBuilder;
        static Initialize: IEventBuilder;
        static Activate: IEventBuilder;
        static ModalClosing: IEventBuilder;
        static EnabledChanged: IEventBuilder;
        static RaiseEnabledChanged(element: JQuery, isEnabled: boolean): void;
    }
    interface BindingBehaviorBuilder<T> {
        ClearLastBindingValueWhenDisabled(option?: {
            clearAction?: (owner: T, value: any) => any;
        }): any;
    }
}

declare namespace DomBehind.Data {
    class ActionBindingBehavior extends BindingBehavior {
        Event: IEvent;
        protected EventHandle: (sender: any, e: any) => void;
        Action: Function;
        protected ActionHandle: (e: any) => void;
        ActionParameterCount: number;
        AllowBubbling: boolean;
        Ensure(): void;
        OnTrigger(e: any): void;
        ActionPolicyCollection: ActionPolicy[];
        protected readonly ActionInvoker: ActionPolicy;
        private _actionInvoker;
        CreateActionInvoker(policies: ActionPolicy[]): ActionPolicy;
        protected Do(sender: any, e: any): void;
        Dispose(): void;
    }
}

declare namespace DomBehind.Data {
    class ActionBindingBehaviorBuilder<T> extends BindingBehaviorBuilder<T> {
        constructor(owner: BizView);
        protected readonly Behavior: Data.ActionBindingBehavior;
        ActionPolicy(...policies: Data.ActionPolicy[]): ActionBindingBehaviorBuilder<T>;
    }
}

declare namespace DomBehind.Data {
    abstract class BindingBehavior implements IDisposable {
        DataContext: any;
        Element: JQuery;
        BindingPolicy: BindingPolicy;
        Priolity: number;
        AdditionalInfo: collections.LinkedDictionary<string, any>;
        abstract Ensure(): void;
        Dispose(): void;
        protected _disposed: boolean;
    }
}

declare namespace DomBehind {
    class BindingBehaviorBuilder<T> {
        constructor(owner: BizView);
        Owner: BizView;
        Element(selector: string): BindingBehaviorBuilder<T>;
        Element(uiElement: JQuery): BindingBehaviorBuilder<T>;
        CurrentElement: JQuery;
        CurrentSelector: string;
        CurrentBehavior: Data.BindingBehavior;
        SetValue(dp: Data.DependencyProperty, value: any): BindingBehaviorBuilder<T>;
        Binding<P>(property: Data.DependencyProperty, bindingExpression: (x: T) => P, mode?: Data.BindingMode, updateTrigger?: Data.UpdateSourceTrigger): Data.DataBindingBehaviorBuilder<T>;
        SetConverter(conv: IValueConverter): BindingBehaviorBuilder<T>;
        ConvertTarget(exp: (x: any) => any): BindingBehaviorBuilder<T>;
        ConvertSource(exp: (x: any) => any): BindingBehaviorBuilder<T>;
        BindingViewViewModel(view: (x: T) => BizView, viewModel: (x: T) => BizViewModel): BindingBehaviorBuilder<T>;
        BindingAction(event: IEventBuilder, action: (x: T) => any): BindingBehaviorBuilder<T>;
        BindingAction(event: IEventBuilder, action: (x: T, args: any) => void): BindingBehaviorBuilder<T>;
        BindingActionWithOption(event: IEventBuilder, action: (x: T, args: any) => void, option?: {
            allowBubbling?: boolean;
            args?: any;
        }): BindingBehaviorBuilder<T>;
        Add<TBehavior extends Data.BindingBehavior>(behavior: TBehavior): TBehavior;
    }
    class SimpleConverter implements DomBehind.IValueConverter {
        Convert(value: any): any;
        ConvertHandler: (x: any) => any;
        ConvertBack(value: any): any;
        ConvertBackHandler: (x: any) => any;
    }
}

declare namespace DomBehind.Data {
    class BindingBehaviorCollection extends collections.LinkedList<Data.BindingBehavior> implements IDisposable {
        Ensure(): void;
        ListDataBindingBehavior(mark?: string): Data.DataBindingBehavior[];
        UpdateTarget(mark?: string): void;
        UpdateSource(mark?: string): void;
        Dispose(): void;
        protected _disposed: boolean;
    }
}

declare namespace DomBehind.Data {
    class BindingPolicy {
        Trigger: UpdateSourceTrigger;
        Mode: BindingMode;
        Converter: IValueConverter;
        Validators: Validation.ValidatorCollection;
    }
}

declare namespace DomBehind.Data {
    class DataBindingBehavior extends BindingBehavior {
        Property: Data.DependencyProperty;
        PInfo: PropertyInfo;
        private _pinfo;
        Marks: string[];
        readonly ValueCore: any;
        UpdateSourceEvent: IEvent;
        UpdateSource(): void;
        UpdateTargetEvent: IEvent;
        UpdateTarget(): void;
        Ensure(): void;
        protected Events: string[];
        protected EventsOff(): void;
        Dispose(): void;
    }
}

declare namespace DomBehind.Data {
    class DataBindingBehaviorBuilder<T> extends BindingBehaviorBuilder<T> {
        constructor(owner: BizView);
        protected readonly Behavior: Data.DataBindingBehavior;
        PartialMark(...mark: string[]): DataBindingBehaviorBuilder<T>;
        Converter(converter: IValueConverter): DataBindingBehaviorBuilder<T>;
        AddValidator<T extends Validation.Validator>(validator: T): T;
    }
}

declare namespace DomBehind.Data {
    class DependencyProperty {
        constructor(name: string);
        readonly PropertyName: string;
        private _propertyName;
        readonly GetValue: (jQuery: JQuery) => any;
        private _getter;
        readonly SetValue: (jQuery: JQuery, value: any, caller?: any) => void;
        private _setter;
        readonly UpdateSourceTrigger: UpdateSourceTrigger;
        private _updateSourceTrigger;
        readonly BindingMode: BindingMode;
        private _bindingMode;
        readonly Ensure: (behavior: DataBindingBehavior) => void;
        private _ensure;
        static RegisterAttached(propertyName: string, getValue: (jQuery: JQuery) => any, setValue: (jQuery: JQuery, value: any, caller?: any) => void, defaultUpdateSourceTrigger?: UpdateSourceTrigger, mode?: BindingMode, ensure?: (behavior: DataBindingBehavior) => void): DependencyProperty;
    }
}

declare namespace DomBehind.Data {
    class ViewViewModelBindingBehavior extends BindingBehavior {
        GetView: (x: any) => BizView;
        GetViewModel: (x: any) => BizViewModel;
        View: BizView;
        ViewModel: BizViewModel;
        Ensure(): void;
        Dispose(): void;
    }
}

declare namespace DomBehind.Data {
    abstract class ActionPolicy {
        abstract Priority(): number;
        abstract Begin(): void;
        abstract Done(): void;
        abstract Fail(ex: ActionPolicyExceptionEventArgs): void;
        abstract Always(): void;
        Do(func: Function): any;
        NextPolicy: ActionPolicy;
        Behavior: ActionBindingBehavior;
    }
}

declare namespace DomBehind.Data {
    class ActionPolicyExceptionEventArgs extends EventArgs {
        constructor(sender: any, errorData: any);
        Handled: boolean;
        Data: any;
        Sender: any;
    }
}

declare namespace DomBehind.Data {
    class ExceptionHandlingActionPolicy extends ActionPolicy {
        Priority(): number;
        private _priority;
        Begin(): void;
        Done(): void;
        Fail(ex: ActionPolicyExceptionEventArgs): void;
        Always(): void;
    }
}

declare namespace DomBehind.Data {
    interface IExceptionHandling {
        Catch(ex: ActionPolicyExceptionEventArgs): void;
    }
}

declare namespace DomBehind.Data {
    class SuppressDuplicateActionPolicy extends ActionPolicy {
        Priority(): number;
        private _priority;
        protected IsEnabled: DependencyProperty;
        Begin(): void;
        private referencecount;
        private engaged;
        Done(): void;
        Fail(ex: ActionPolicyExceptionEventArgs): void;
        Always(): void;
    }
}

declare namespace DomBehind.Data {
    class ValidationExceptionHandlingActionPolicy extends ActionPolicy {
        Priority(): number;
        private _priority;
        Begin(): void;
        Done(): void;
        Fail(ex: ActionPolicyExceptionEventArgs): void;
        protected SetCustomError(vex: Validation.ValidationException): void;
        protected readonly Supported: boolean;
        protected readonly ViewModel: BizViewModel;
        protected readonly View: BizView;
        protected readonly Owner: JQuery;
        Always(): void;
    }
}

declare namespace DomBehind.Data {
    interface IWaitingOverlayOption {
        Color: string;
        Custom: string;
        Fade: any;
        Fontawesome: string;
        Image: string;
        ImagePosition: string;
        MaxSize: string;
        MinSize: string;
        ResizeInterval: number;
        Size: any;
        ZIndex: number;
    }
    abstract class WaitingOverlayActionPolicy extends ActionPolicy {
        constructor(option?: IWaitingOverlayOption);
        readonly Option: IWaitingOverlayOption;
        private _option;
        Priority(): number;
        private _priority;
        protected abstract Container(): JQuery;
        protected abstract IsWholePage(): boolean;
        Begin(): void;
        protected Resize(overlay: JQuery): void;
        Done(): void;
        Fail(ex: ActionPolicyExceptionEventArgs): void;
        Always(): void;
    }
    class ElementWaitingOverlayActionPolicy extends WaitingOverlayActionPolicy {
        constructor(element: JQuery, option?: IWaitingOverlayOption);
        protected Container(): JQuery;
        private _container;
        protected IsWholePage(): boolean;
    }
    class WindowWaitingOverlayActionPolicy extends ElementWaitingOverlayActionPolicy {
        constructor(option?: IWaitingOverlayOption);
        protected IsWholePage(): boolean;
    }
}
declare namespace DomBehind.Data {
    interface ActionBindingBehaviorBuilder<T> {
        WaitingOverlay(policy?: Data.WaitingOverlayActionPolicy): ActionBindingBehaviorBuilder<T>;
    }
}

interface Array<T> {
    Where(predicate: (value: T) => boolean): Array<T>;
    Select<U>(select: (value: T) => U): Array<U>;
    Any(predicate?: (value: T) => boolean): boolean;
    OrderBy(selector: (value: T) => any): Array<T>;
    OrderByDecording(selector: (value: T) => any): Array<T>;
    FirstOrDefault(predicate?: (x: T) => boolean): T;
    LastOrDefault(predicate?: (x: T) => boolean): T;
    GroupBy(selector: (value: T) => any): Array<{
        Key: any;
        Values: Array<T>;
    }>;
    SequenceEqual(target: Array<T>, predicate?: (x1: T, x2: T) => boolean): boolean;
    Sum(selector: (value: T) => number): number;
    Chunk(size: number): Array<Array<T>>;
}

interface JQueryStatic {
    GenerateZIndex(): number;
    GetLocalStorage<T>(key: string, defaultValue?: T): T;
    SetLocalStorage(key: string, value: any): void;
    GetSessionStorage<T>(key: string, defaultValue?: T): T;
    SetSessionStorage<T>(key: string, value: T): void;
    GetDomStorage<T>(key: string, defaultValue?: T): T;
    SetDomStorage<T>(key: string, value: T): void;
    GetWindowDynamic<T>(key: string, defaultValue?: T): T;
    SetWindowDynamic<T>(key: string, value?: T): any;
    SetRootUri(uri: string): void;
    GetRootUri(): string;
    AbsoluteUri(uri: string): string;
    ClientDetection(): {
        OS?: string;
        OSVersion?: string;
        Browser?: string;
        BrowserMajorVersion?: string;
        IsMobile?: boolean;
        FlashVersion?: string;
        AllowCookies?: boolean;
        Screen?: string;
        UserAgent?: string;
    };
}
declare const z_indexKey: string;
declare const w_dynamicPrefix: string;
interface JQuery {
    ValidityState(): ValidityState;
    HasError(): boolean;
    SetCustomError(errorMessage: string): void;
    ClearCustomError(): void;
    CheckValidity(allChildren?: boolean): void;
    Raise(event: DomBehind.IEventBuilder, ensure?: (x: JQueryEventObject) => void): JQueryEventObject;
}

interface ObjectConstructor {
    IsNullOrUndefined(obj: any): boolean;
    IsPromise(obj: any): boolean;
    NameOf(name: any): string;
}

interface String {
    ExtendedPrototype(key: any, value: any): void;
}

interface StringConstructor {
    IsNullOrEmpty(str: string): boolean;
    IsNullOrWhiteSpace(str: string): boolean;
    Split(value: string, separator: string): string[];
}
declare enum StringSplitOptions {
    None = 0,
    RemoveEmptyEntries = 1
}
interface String {
    Split(separator: string, option?: StringSplitOptions): string[];
    Escape(): string;
    UnEscape(): string;
    Replace(searchValue: string, replaceValue: string): string;
    Repeat(count: number): string;
    PadLeft(totalWidth: number, paddingChar: string): string;
    PadRight(totalWidth: number, paddingChar: string): string;
    SubString(start: number, length: number): string;
    Contains(s: string): boolean;
    StartsWith(s: string): boolean;
    EndsWith(s: string): boolean;
}

declare namespace DomBehind.Navigation {
    class DefaultNavigator implements INavigator {
        NewWindow(uri: string, target?: string, style?: string): Window;
        Move(uri: string): any;
        Move(uri: string, historyBack: boolean): any;
        Reload(forcedReload?: boolean): void;
        protected DefaultSetting: IModalHelperSettings;
        ShowModal(arg: any, option?: IModalHelperSettings): JQueryPromise<any>;
    }
}

declare namespace DomBehind.Navigation {
    enum ModalStartupLocation {
        CenterScreen = 0,
        Manual = 1
    }
    interface IModalHelperSettings {
        FadeInDuration?: number;
        FadeOutDuration?: number;
        AllowCloseByClickOverlay?: boolean;
        ShowCloseButton?: boolean;
        ShowHeader?: boolean;
        StartupLocation?: ModalStartupLocation;
        StartupLocationTop?: number;
        StartupLocationLeft?: number;
        Height?: string;
        Width?: string;
    }
    interface INavigator {
        ShowModal(uri: string, option?: IModalHelperSettings): JQueryPromise<any>;
        ShowModal(jquery: JQuery, option?: IModalHelperSettings): JQueryPromise<any>;
        Move(uri: string): any;
        Move(uri: string, historyBack: boolean): any;
        NewWindow(uri: string, target?: string, style?: string): Window;
        Reload(forcedReload?: boolean): any;
    }
}

declare namespace DomBehind {
    enum PoolType {
        PreLoad = 1,
        Reload = 2
    }
}

declare namespace DomBehind.Threading {
    class WorkerPool {
        protected static Pool: WorkerWrapper[];
        static Register(type: () => any, defaultPoolCount?: number): void;
        static Do(type: any, arg: any): JQueryPromise<any>;
    }
}

declare namespace DomBehind.Threading {
    abstract class WorkerWrapper {
        protected readonly Thread: Worker;
        private _thread;
        Load(): void;
        protected readonly WorkerScript: string;
        PoolType: PoolType;
        Do(arg: any): JQueryPromise<any>;
        Terminate(): void;
    }
}

declare namespace DomBehind {
    class AjaxException extends Exception {
        JqXHR?: JQueryXHR;
        TextStatus?: string;
        ErrorThrown?: string;
        constructor(JqXHR?: JQueryXHR, TextStatus?: string, ErrorThrown?: string);
        readonly ErrorStatus: number;
        readonly ErrorTitle: string;
        ToString(): string;
    }
}

declare namespace DomBehind {
    class ApplicationException extends Exception {
        Message?: string;
        constructor(Message?: string);
        ToString(): string;
    }
    class ApplicationAggregateException extends Exception {
        exceptions: Exception[];
        constructor(exceptions: Exception[]);
    }
}

declare namespace DomBehind.Data {
    enum BindingMode {
        TwoWay = 0,
        OneWay = 1,
        OneWayToSource = 2
    }
}

declare namespace DomBehind {
    class CancelEventArgs {
        Cancel: boolean;
        constructor(Cancel?: boolean);
    }
}

declare namespace DomBehind {
    class CollectionChangedEventArgs extends EventArgs {
        Item: any;
    }
}

declare namespace DomBehind {
    class EventArgs {
    }
}

declare namespace DomBehind {
    interface IEventName {
        EventName: string;
    }
    interface IEvent extends IEventName, IDisposable {
        AddHandler(handler: {
            (sender: any, data: any): void;
        }): void;
        RemoveHandler(handler: {
            (sender: any, data: any): void;
        }): void;
        Clear(): any;
        Raise(sender: any, data: any): void;
        Ensure(behavior: any): any;
    }
    class TypedEvent<T> implements IEvent {
        EventName: string;
        private _eventName;
        private handlers;
        AddHandler(handler: {
            (sender: any, data: T): void;
        }): void;
        RemoveHandler(handler: {
            (sender: any, data: T): void;
        }): void;
        Raise(sender: any, data: T): void;
        Clear(): void;
        EnsureHandler: (behavior: any) => void;
        Ensure(behavior: any): void;
        Dispose(): void;
        protected _disposed: boolean;
    }
    interface IEventBuilder {
        Create(): IEvent;
        EventName: string;
    }
    class EventBuilder<T> implements IEventBuilder {
        constructor(eventName: string);
        Create(): IEvent;
        readonly EventName: string;
        private _eventName;
        static RegisterAttached<T>(eventName?: string, ensure?: (behavior: any) => void): IEventBuilder;
        private ensureHandler;
    }
}

declare namespace DomBehind {
    class Exception {
        Message?: string;
        constructor(Message?: string);
        ToString(): string;
    }
}

declare function NewUid(): string;
interface IIdentity {
    __uuid?: string;
}
declare function ExtendIIdentity(): IIdentity;
declare function using<T extends DomBehind.IDisposable>(resource: T, func: (resource: T) => void): void;

declare namespace DomBehind {
    interface IDisplayMemberPath {
        DisplayMemberPath?: string;
    }
}

declare namespace DomBehind {
    interface IDisposable {
        Dispose(): void;
    }
}

declare namespace DomBehind {
    class PropertyChangedEventArgs extends EventArgs {
        Name?: string;
        constructor(Name?: string);
    }
    interface INotifyPropertyChanged {
        PropertyChanged: TypedEvent<PropertyChangedEventArgs>;
    }
}

declare namespace DomBehind {
    class PropertyChangingEventArgs extends EventArgs {
        Name?: string;
        OldValue?: any;
        NewValue?: any;
        constructor(Name?: string, OldValue?: any, NewValue?: any);
    }
    interface INotifyPropertyChanging {
        PropertyChanging: TypedEvent<PropertyChangingEventArgs>;
    }
}

declare namespace DomBehind {
    interface IValueConverter {
        Convert(value: any): any;
        ConvertBack(value: any): any;
    }
}

declare namespace DomBehind {
    class List<T> extends collections.LinkedList<T> {
    }
}

declare namespace DomBehind.Data {
    class ListCollectionView extends NotifiableImp {
        DisplayMemberPath?: string;
        constructor(source: Array<any>, DisplayMemberPath?: string);
        protected Source: collections.LinkedList<any>;
        protected List: collections.LinkedList<any>;
        private _current;
        Current: any;
        OnCurrentChanging(): CancelEventArgs;
        CurrentChanging: TypedEvent<CancelEventArgs>;
        OnCurrentChanged(): void;
        CurrentChanged: TypedEvent<EventArgs>;
        Find(predicate: (x: any) => boolean): any;
        Contains(obj: any): boolean;
        Select(obj: any): ListCollectionView;
        UnSelect(): ListCollectionView;
        MoveFirst(): ListCollectionView;
        MoveLast(): ListCollectionView;
        MoveToPosition(index: number): ListCollectionView;
        Filter: (obj: any) => boolean;
        Grouping: (obj: any) => any;
        Refresh(): ListCollectionView;
        protected RefreshRaw(): void;
        OnPropertyChanged(name?: string): void;
        ViewReflected: ListCollectionView.ViewReflectedStatus;
        Begin(): ListCollectionView;
        End(): ListCollectionView;
        Add(obj: any): void;
        Added: TypedEvent<CollectionChangedEventArgs>;
        Remove(obj: any): void;
        Removed: TypedEvent<CollectionChangedEventArgs>;
        ToArray(): Array<any>;
        private engaged;
    }
}
declare namespace DomBehind.Data.ListCollectionView {
    enum ViewReflectedStatus {
        None = 0,
        NoReflected = 1,
        Reflected = 2
    }
}

declare namespace DomBehind {
    class NotifiableImp implements IDisposable, INotifyPropertyChanged {
        PropertyChanged: TypedEvent<PropertyChangedEventArgs>;
        protected GetProperty<T>(name: string, defaultValue?: T): T;
        protected SetProperty<T>(name: string, value: T): boolean;
        protected _dic: {
            [key: string]: any;
        };
        Dispose(): void;
        protected _disposed: boolean;
        OnPropertyChanged(name: string): void;
    }
}

declare namespace DomBehind {
    class Observable<T> {
        protected source: T;
        static Register<T>(target: T, ...marks: string[]): Observable<T>;
        static RegisterAttached<T>(target: T, option?: {
            wrapper?: (value: any, name?: string) => any;
            marks?: string[];
        }): Observable<T>;
        PropertyChanging: TypedEvent<PropertyChangingEventArgs>;
        PropertyChanged: TypedEvent<PropertyChangedEventArgs>;
        protected Wrapper: (value: any, name: string) => any;
        constructor(source: T, option?: {
            wrapper?: (value: any, name?: string) => any;
            marks?: string[];
        });
        protected Recurcive(source: any, name: string, parentName: string): void;
        readonly Source: T;
        protected CreateDescriptor(notifibleName: string, value: any): PropertyDescriptor;
    }
}

declare namespace DomBehind {
    class PropertyInfo implements IDisposable {
        DataContext: any;
        MemberPath: string;
        constructor(DataContext: any, MemberPath: string);
        SetValue(value: any): void;
        GetValue(): any;
        Dispose(): void;
    }
    class LamdaExpression extends PropertyInfo {
        Lamda: (x: any) => any;
        constructor(dataContext: any, Lamda: (x: any) => any);
        private static ParsePropertyPath;
        private static _extractor;
        private static _extractor_Minified;
        private static NameOf;
        Dispose(): void;
        static Path<T>(exp: (x: T) => any): string;
        static GetValueCore(dataContext: any, lamda: (x: any) => any): any;
    }
    class BooleanFakeExpression extends PropertyInfo {
        Value: boolean;
        constructor(Value: boolean);
        SetValue(value: any): void;
        GetValue(): any;
    }
}

declare namespace DomBehind.Data {
    enum UpdateSourceTrigger {
        Explicit = 0,
        LostForcus = 1,
        PropertyChanged = 2
    }
}

declare namespace DomBehind.Validation {
    class ValidationException {
        Message: string;
        Selector: string;
        constructor(Message: string, Selector: string);
    }
    class AggregateValidationException {
        Items: ValidationException[];
        constructor(Items: ValidationException[]);
    }
}

declare namespace DomBehind {
    interface BizView {
        DependencyValidate(mark?: string): any;
        DependencyValidateSetup(): any;
        DependencyValidateClear(mark?: string): any;
    }
}

declare namespace DomBehind.Validation {
    class MaxLengthValidator extends Validator {
        constructor();
        Dispose(): void;
    }
}
declare namespace DomBehind {
    interface BindingBehaviorBuilder<T> {
        MaxLength(maxlength: number, message?: string, applyRule?: (x: T) => boolean): BindingBehaviorBuilder<T>;
        MaxLength(maxlength: number, message?: (x: T) => string, applyRule?: (x: T) => boolean): BindingBehaviorBuilder<T>;
        MaxLength(maxlength: (x: T) => number, message?: (x: T) => string, applyRule?: (x: T) => boolean): BindingBehaviorBuilder<T>;
        MaxLength(maxlength: any, message?: any, applyRule?: (x: T) => boolean): BindingBehaviorBuilder<T>;
        MaxNumeric(max: number): any;
        MinNumeric(min: number): any;
    }
}

declare namespace DomBehind.Validation {
    class PipelineValidator extends DomBehind.Validation.Validator {
        constructor();
        protected Validators: DomBehind.Validation.Validator[];
        Error: DomBehind.Validation.Validator;
        Validate(value: any): boolean;
        Apply(): void;
        RemoveValidation(): void;
        ClearValidation(): void;
        AddValidation(): void;
        AddValidator(validator: DomBehind.Validation.Validator): void;
        Dispose(): void;
    }
}
declare namespace DomBehind {
    interface BindingBehaviorBuilder<T> {
        AddPipelineValidator(validator: Validation.Validator): BindingBehaviorBuilder<T>;
    }
}

declare namespace DomBehind.Validation {
    class RegexValidator extends Validator {
        constructor();
        RemoveValidation(): void;
        protected ValidationMessage(validity: ValidityState): string;
        Dispose(): void;
    }
}
declare namespace DomBehind.Data {
    interface DataBindingBehaviorBuilder<T> {
        Pattern(regex: string, message?: string, applyRule?: (x: T) => boolean): DataBindingBehaviorBuilder<T>;
        Pattern(regex: string, message?: (x: T) => string, applyRule?: (x: T) => boolean): DataBindingBehaviorBuilder<T>;
        Pattern(regex: (x: T) => string, message?: (x: T) => string, applyRule?: (x: T) => boolean): DataBindingBehaviorBuilder<T>;
        Pattern(regex: any, message?: any, applyRule?: (x: T) => boolean): DataBindingBehaviorBuilder<T>;
    }
}

declare namespace DomBehind.Validation {
    class RequiredValidator extends Validator {
        constructor();
        Dispose(): void;
    }
}
declare namespace DomBehind.Data {
    interface DataBindingBehaviorBuilder<T> {
        Required(message?: string, applyRule?: (x: T) => boolean): DataBindingBehaviorBuilder<T>;
        Required(message?: (x: T) => string, applyRule?: (x: T) => boolean): DataBindingBehaviorBuilder<T>;
        Required(message?: any, applyRule?: (x: T) => boolean): DataBindingBehaviorBuilder<T>;
    }
}

declare namespace DomBehind.Validation {
    abstract class Validator implements IDisposable {
        constructor(attribute?: string);
        Behavior: Data.DataBindingBehavior;
        Message: any;
        AllowApply: (x: any) => boolean;
        Attribute: string;
        HasError: boolean;
        AttributeExpression: any;
        readonly AttributeValue: string | number;
        protected ParseAttributeValue(): any;
        OnValidationg(): void;
        Apply(): void;
        RemoveValidation(): void;
        private static readonly _ignoreMarks;
        ClearValidation(): void;
        AddValidation(): void;
        Validate(value: any): boolean;
        protected ValidationMessage(validity: ValidityState): string;
        Dispose(): void;
        protected _disposed: boolean;
    }
}

declare namespace DomBehind.Validation {
    class ValidatorCollection extends collections.LinkedList<Validator> implements IDisposable {
        RemoveValidator(): void;
        ClearValidator(): void;
        ApplyValidator(): void;
        Validate(): boolean;
        Dispose(): void;
        protected _disposed: boolean;
    }
}

declare namespace DomBehind.Web {
    class PlainXMLHttpRequestWorker extends Threading.WorkerWrapper {
        protected readonly WorkerScript: string;
    }
}

declare namespace DomBehind.Web {
    abstract class WebService<TRequest, TResponse> {
        protected abstract readonly Url: string;
        Timeout: number;
        Execute(request?: TRequest): TResponse;
        ExecuteAsync(request?: TRequest, option?: JQueryAjaxSettings): JQueryPromise<TResponse>;
        ExecuteAjax(request?: TRequest, option?: JQueryAjaxSettings): JQueryPromise<TResponse>;
        protected readonly DefaultPostSetting: JQueryAjaxSettings;
    }
}
