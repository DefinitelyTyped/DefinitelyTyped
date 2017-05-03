import {IListElement} from "./interface/IListElement";

class ListElement implements IListElement {

    public prev:any;
    public next:any;
    public data:any;

    public constructor(data:any) {
        this.prev = null;
        this.next = null;
        this.data = data;
    }

} export {ListElement}