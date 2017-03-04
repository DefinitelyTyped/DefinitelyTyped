import {ListElement} from "../ListElement";
import {LinkedList} from "../LinkedList";

class DummyData {

    ////////////////
    // DUMMY DATA //
    ////////////////

    public static listFromArrayData(data_arr:Array<any>, take_instance:boolean = false):LinkedList<ListElement> {
        let ll:LinkedList<ListElement> = new LinkedList<ListElement>();
        if (take_instance) {
            return DummyData.listFromArrayData_instance;
        }
        ll.init(ListElement, data_arr);
        DummyData.listFromArrayData_instance = ll;
        return ll;
    }

    private static listFromArrayData_instance:LinkedList<ListElement>;


} export{DummyData as DD};
