import {ListElement} from "./ListElement";

class LinkedList<T extends ListElement>{

    private prev_elem:T;
    private curr_elem:T;
    private elem_class:{new(data:any):T;};
    private sort_func:Function;
    private length_num:number;

    public start:T;
    public end:T;

    public cloned_list:LinkedList<T>;

    // current elem props
    public prev:T;
    public data:any;
    public next:T;

    /**
     *
     */
    public constructor() {}

////////////////////////////////////////////////
//////////////////// PUBLIC ////////////////////
////////////////////////////////////////////////

    /**
     *
     */
    public init(c: {new(data:any): T; }, init_data:Array<any> = []):void {
        this.start = null;
        this.end = null;
        this.prev_elem = null;
        this.curr_elem = null;
        this.cloned_list = null;
        this.length_num = 0;

        this.prev = null;
        this.data = null;
        this.next = null;
        this.sort_func = this.defaultSortFunc();
        this.elem_class = c;

        this.setUpList(init_data);
    }

    /**
     *
     * @param data
     * @param ll
     * @returns {LinkedList<T>}
     */
    public addElem(data:any, ll:LinkedList<T> = null):LinkedList<T> {
        return this.addElemRight(data, ll);
    }

    /**
     *
     * @param data
     * @param ll
     * @returns {LinkedList<T>}
     */
    public addElemRight(data:any, ll:LinkedList<T> = null):LinkedList<T> {

        //var list: LinkedList<T> = this.getContext(ll);

        var new_elem: T = new this.elem_class(data);

        if (!this.isFirstElem(new_elem)) {
            new_elem.prev = this.end;
            this.end.next = new_elem;
            this.end = this.end.next;
        }

        this.curr_elem = this.end;
        this.prev_elem = this.end;
        this.length_num++;

        return this.setCurrentProps();
    }

    /**
     *
     * @param data
     * @param ll
     * @returns {LinkedList<T>}
     */
    public addElemLeft(data:any, ll:LinkedList<T> = null):LinkedList<T> {

        var list: LinkedList<T> = this.getContext(ll);

        var new_elem:T = new list.elem_class(data);

        if (!list.isFirstElem(new_elem)) {
            new_elem.next = list.start;
            list.start.prev = new_elem;
            list.start = list.start.prev;
        }

        list.curr_elem = list.start;
        list.prev_elem = list.start;
        this.length_num++;

        return list.setCurrentProps();
    }

    /**
     *
     * @param elem
     */
    public removeElem(elem:T = null):LinkedList<T> {

        if (elem === null) {
            elem = this.curr_elem;
        }

        if (this.isStart(elem)) {
            this.removeStart();
            this.curr_elem = this.start;
        }
        else if (this.isEnd(elem)) {
            this.removeEnd();
            this.curr_elem = this.end;
        }
        else {
            var prev_elem:T = elem.prev;
            var next_elem:T = elem.next;

            if (prev_elem) {
                prev_elem.next = next_elem;
            }
            if (next_elem) {
                next_elem.prev = prev_elem;
            }

            this.curr_elem = next_elem;
            this.length_num--;
        }

        elem = null;

        return this.setCurrentProps();
    }

    /**
     *
     * @param pos
     */
    public removeElemByPos(pos:number):LinkedList<T> {

        if (pos === 0) {
            this.removeStart();
            this.curr_elem = this.start;

            return this.setCurrentProps();
        }

        var i:number = 0;
        var current:T = this.start;

        while (current !== null) {
            if (i === pos) {
                this.curr_elem = current.prev;
                this.removeElem(current);
                break;
            }
            i++;
            current = current.next;
        }

        //this.length_num--;
        return this.setCurrentProps();
    }

    /**
     *
     * @param data
     */
    public removeElemByData(data:any):LinkedList<T> {
        var current:T = this.start;

        while (current !== null) {
            if (current.data === data) {
                this.curr_elem = current.prev;
                this.removeElem(current);
                break;
            }
            current = current.next;
        }

        //this.length_num--;
        return this.setCurrentProps();
    }

    /**
     *
     * @param data
     * @param pos
     * @returns {LinkedList}
     */
    public insertElem(data:any, pos:number = -1):LinkedList<T> {

        var elem:T = new this.elem_class(data);

        if (pos == 0 || (pos <= -1 && (this.curr_elem && this.curr_elem.prev === null)) || this.curr_elem === null) {
            // new start elem
            this.addElemLeft(data);
        }
        else if (pos >= this.length()) {
            // new end elem
            this.addElemRight(data);
        }
        else if ((pos < this.length()) && (pos > 0)) {
            // insert at position
            var i:number = 0;
            this.toStart();
            while (i < pos) {
                this.toNext();
                i++;
            }
            this.insertBeforeCurrent(elem);
        }
        else {
            // insert before current
            this.insertBeforeCurrent(elem);
        }

        return this.setCurrentProps();
    }

    /**
     *
     * @returns {number}
     */
    public length():number {

        /*var i:number = 0;
        var current:T = this.start;

        while (current) {
            i++;
            current = current.next;
        }

        return i;*/
        return this.length_num;
    }

    /**
     *
     * @returns {LinkedList<T>}
     */
    public toStart(ll:LinkedList<T> = null):LinkedList<T> {
        var list: LinkedList<T> = this.getContext(ll);
        list.curr_elem = list.start;
        return list.setCurrentProps();
    }

    /**
     *
      * @returns {LinkedList<T>}
     */
    public toNext(ll:LinkedList<T> = null):LinkedList<T> {
        var list: LinkedList<T> = this.getContext(ll);
        list.curr_elem = (list.curr_elem.next) ? list.curr_elem.next : list.end;
        return list.setCurrentProps();
    }

    /**
     *
     * @returns {LinkedList<T>}
     */
    public toPrev(ll:LinkedList<T> = null):LinkedList<T> {
        var list: LinkedList<T> = this.getContext(ll);
        list.curr_elem = (list.curr_elem.prev) ? list.curr_elem.prev : list.start;
        return list.setCurrentProps();
    }

    /**
     * 
     * @returns {LinkedList<T>}
     */
    public toEnd(ll:LinkedList<T> = null):LinkedList<T> {
        var list: LinkedList<T> = this.getContext(ll);
        list.curr_elem = list.end;
        return list.setCurrentProps();
    }

    /**
     *
     * @returns {T}
     */
    public get():T {
        return (this.curr_elem) ? this.curr_elem : this.prev_elem;
    }

    /**
     *
     */
    public destroy():void {

        while (this.start !== null) {
            this.removeStart();
        }

        this.end = null;
        this.curr_elem = null;
        this.prev_elem = null;
        this.prev = null;
        this.data = null;
        this.next = null;
        this.sort_func = null;
        this.length_num = 0;
    }

    /**
     * Is passed elem the first of the list?
     *
     * @param elem
     * @returns {boolean}
     */
    public isStart(elem:T = null):boolean {
        var elem_to_test:T = (elem) ? elem : this.curr_elem;
        return elem_to_test === this.start;
    }

    /**
     * Is passed elem the last of the list?
     *
     * @param elem
     * @returns {boolean}
     */
    public isEnd(elem:T = null):boolean {
        var elem_to_test:T = (elem) ? elem : this.curr_elem;
        return elem_to_test === this.end;
    }

    /**
     *
     * @param return_cloned
     * @returns {LinkedList<T>}
     */
    public clone(return_cloned:boolean = false):LinkedList<T> {

        // init
        let ll:LinkedList<T> = new LinkedList<T>();
        ll.init(this.elem_class);

        // add elems
        let current:T = this.start;
        while(current) {
            ll.addElem(current.data);
            current = current.next;
        }

        this.cloned_list = ll;

        if (return_cloned) {
            return ll;
        }

        return this.setCurrentProps();
    }

    /**
     *
     * @param list_to_append
     * @returns {LinkedList}
     */
    public concat(list_to_append:LinkedList<T>):LinkedList<T> {

        let current:T = list_to_append.start;

        while(current) {
            this.addElem(current.data);
            current = current.next;
        }

        return this;
    }

    /**
     *
     * @param list_to_merge
     * @param func
     * @returns {LinkedList<T>}
     */
    public rMerge(list_to_merge:LinkedList<T>, func:Function = null):LinkedList<T> {
        return this.concat(list_to_merge).rSort(func);
    }

    /**
     * TODO: merge list without recoursion
     *
     * @param list_to_merge
     * @param func
     * @returns {LinkedList<T>}
     */
    public merge(list_to_merge:LinkedList<T>, func:Function = null):LinkedList<T> {
        return this.concat(list_to_merge).sort(func);
    }

    /**
     *
     * @returns {Array}
     */
    public toArray():Array<any> {

        var current:T = this.start;
        var arr_to_return:Array<any> = [];

        while (current) {
            arr_to_return.push(current.data);
            current = current.next;
        }

        return arr_to_return;
    }

    /**
     *
     * @param sort_func
     * @param list
     */
    public rSort(sort_func:Function = null, list:LinkedList<T> = null):LinkedList<T> {
        if (sort_func !== null) {
            this.sort_func = sort_func;
        }
        return this.setState(this.rMergeSort(list));
    }

    /**
     *
     * @param sort_func
     * @param list
     */
    public sort(sort_func:Function = null, list:LinkedList<T> = null):LinkedList<T> {
        if (sort_func !== null) {
            this.sort_func = sort_func;
        }
        return this.setState(this.mergeSort(list));
    }

    /**
     *
     * @param list
     * @param equality_func
     * @returns {boolean}
     */
    public isEqual(list:LinkedList<T>, equality_func:(a:T, b:T) => boolean = null):boolean {

        let current_list_elem:T = list.start;
        let current_this_elem:T = this.start;

        if (list.length() !== this.length()) {
            return false;
        }

        if (equality_func === null) {
            equality_func = (a:T, b:T):boolean => {
                return a.data === b.data;
            }
        }

        while (current_list_elem) {

            if (equality_func(current_list_elem, current_this_elem)) {
                return false;
            }

            current_list_elem = current_list_elem.next;
            current_this_elem = current_this_elem.next;
        }

        return true;
    }

    /**
     *
     * @param data
     * @returns {any}
     */
    public contain(data:any):T|null {
        let current:T = this.start;

        while(current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }

        return null;
    }

    /**
     *
     * @param data
     * @returns {Array<number>}
     */
    public pos(data:any):Array<number> {

        let current:T = this.start;
        let i:number = 0;
        let pos_arr:Array<number> = [];

        while(current) {
            if (current.data === data) {
                pos_arr.push(i);
            }
            i++;
            current = current.next;
        }

        return pos_arr;
    }

    /**
     *
     * @param pos
     */
    public getElemAtPos(pos:number):T {

        let current:T = this.start;
        let i:number = 0;

        while(current) {
            if (i === pos) {
                return current
            }
            i++;
            current = current.next;
        }

        return null;

    }


/////////////////////////////////////////////////
//////////////////// PRIVATE ////////////////////
/////////////////////////////////////////////////

    /**
     *
     * @param ll
     * @returns {LinkedList<T>}
     */
    private getContext(ll:LinkedList<T>):LinkedList<T> {
        var list:LinkedList<T>;

        if (ll) {
            list = ll;
        }
        else {
            list = this;
        }

        return list
    }

    /**
     *
     * @returns {(a:T, b:T)=>boolean}
     */
    private defaultSortFunc() {
        return (a:T, b:T):boolean => {
            return a <= b;
        }
    }

    /**
     * TODO: destroy sub lists?
     *
     * @param ll
     * @returns {any}
     */
    private rMergeSort(ll:LinkedList<T>):LinkedList<T> {

        var list:LinkedList<T>;

        if (ll) {
            list = ll;
        }
        else {
            list = this;
        }

        var l:number = list.length();

        if (l <= 1) {
            return list;
        }

        var sub_list_left:LinkedList<T> = new LinkedList<T>();
        var sub_list_right:LinkedList<T> = new LinkedList<T>();
        var i:number = 0;
        var current:T = list.start;

        sub_list_left.init(this.elem_class);
        sub_list_right.init(this.elem_class);

        // TODO: try to refactor using pointers and moving functions
        while (current) {
            if (i < l/2) {
                sub_list_left.addElem(current.data);
            }
            else {
                sub_list_right.addElem(current.data);
            }
            current = current.next;
            i++;
        }

        sub_list_left = this.rMergeSort(sub_list_left);
        sub_list_right = this.rMergeSort(sub_list_right);

        return this.mergeMethod(sub_list_left, sub_list_right);
    }

    /**
     * TODO: merge sort without recoursion
     *
     * @param list
     * @returns {LinkedList}
     */
    private mergeSort(list:LinkedList<T>):LinkedList<T> {
        return this;
    }

    /**
     *
     * @param sub_list_left
     * @param sub_list_right
     * @returns {LinkedList}
     */
    private mergeMethod(sub_list_left:LinkedList<T>,
                        sub_list_right:LinkedList<T>):LinkedList<T> {

        var sub_list_result:LinkedList<T> = new LinkedList<T>();
        sub_list_result.init(this.elem_class);

        var current_left:T = sub_list_left.start;
        var current_right:T = sub_list_right.start;

        while (current_left != null && current_right != null) {
            if (this.sort_func(sub_list_left.start.data, sub_list_right.start.data)) {
                sub_list_result.addElem(current_left.data);
                sub_list_left.removeElem(current_left);
            }
            else {
                sub_list_result.addElem(current_right.data);
                sub_list_right.removeElem(current_right);
            }

            current_left = sub_list_left.start;
            current_right = sub_list_right.start;
        }

        while (current_left != null) {
            sub_list_result.addElem(current_left.data);
            sub_list_left.removeElem(current_left);
            current_left = sub_list_left.start;
        }

        while (current_right != null) {
            sub_list_result.addElem(current_right.data);
            sub_list_right.removeElem(current_right);
            current_right = sub_list_right.start;
        }

        return sub_list_result;
    }

    /**
     *
     * @param arr
     */
    private destroyArray(arr:Array<any>) {
        var l:number = arr.length;
        for (var i = l - 1; i >= 0; i--) {
            arr.pop();
        }
    }

    /**
     *
     */
    private setUpList(init_data:Array<any>):void {

        var l:number = init_data.length;

        for (let i = 0; i < l; i++) {
            let data:any = init_data[i];
            this.addElem(data);
        }
    }

    /**
     *
     * @param elem
     */
    private insertBeforeCurrent(elem:T):void {
        var before_elem:T = this.curr_elem.prev;
        var after_elem:T = this.curr_elem;

        elem.prev = before_elem;
        elem.next = after_elem;
        before_elem.next = elem;
        after_elem.prev = elem;
        this.length_num++;

        this.curr_elem = elem;
    }

    /**
     *
     * @returns {LinkedList}
     */
    private setCurrentProps():LinkedList<T> {
        this.prev = (this.curr_elem) ? this.curr_elem.prev : null;
        this.data = (this.curr_elem) ? this.curr_elem.data : null;
        this.next = (this.curr_elem) ? this.curr_elem.next : null;
        return this;
    }

    /**
     *
     * @param context
     * @returns {LinkedList}
     */
    private setState(context:LinkedList<T>):LinkedList<T> {
        
        this.prev_elem = context.prev_elem;
        this.curr_elem = context.curr_elem;
        this.elem_class = context.elem_class;
        this.sort_func = context.sort_func;

        this.start = context.start;
        this.end = context.end;

        this.cloned_list = context.cloned_list;

        // current elem props
        this.prev = context.prev;
        this.data = context.data;
        this.next = context.next;

        return this;
    }

    /**
     *
     */
    private removeStart():void {
        this.start = this.start.next;
        if (this.start) {
            this.start.prev = null;
        }
        this.length_num--;
    }

    /**
     *
     */
    private removeEnd():void {
        this.end = this.end.prev;
        if (this.end) {
            this.end.next = null;
        }
        this.length_num--;
    }

    /**
     * There's an empty list?
     *
     * @param new_elem
     * @returns {boolean}
     */
    private isFirstElem(new_elem:T):boolean {
        if (this.start === null) {
            this.startList(new_elem);
            return true;
        }
        return false;
    }

    /**
     * Put the first elem in the list
     *
     * @param new_elem
     */
    private startList(new_elem:T):void {
        this.start = new_elem;
        this.end = this.start;
    }

} export {LinkedList};