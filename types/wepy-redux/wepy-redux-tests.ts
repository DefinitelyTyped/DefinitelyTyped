import wepy from "wepy";
import { connect } from "wepy-redux";

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
