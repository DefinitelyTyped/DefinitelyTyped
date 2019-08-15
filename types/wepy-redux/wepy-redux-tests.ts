import wepy from "wepy";
import { createStore } from "redux";
import { connect, getStore, setStore } from "wepy-redux";

const store = createStore(
    (counter: number | undefined, action: { type: string; payload: number }) =>
        counter || 0 + action.payload,
    0
);

setStore(store);

const s = getStore();
s.dispatch({ type: "a" });

interface State {
    counter: {
        num: number;
    };
}

@connect(
    {
        num(state: State) {
            return state.counter.num;
        },
        inc: "inc"
    },
    {
        addNum: "INCREMENT",
        asyncInc: () => {}
    }
)
export default class Index extends wepy.page {
    // methods
    methods = {
        // method values
    };
    // on load
    onLoad() {}
}
