import wepy from "wepy";

export class MyApp extends wepy.app {
    async onLoad() {
        this.use("requestfix");
    }
}

export class MyComponent extends wepy.component {
    data = {
        reveal: false,
        img: "",
        animationData: "",
        imgClassName: "",
        imgMode: "scaleToFill",
        title: "loading",
        titleClassName: ""
    };

    methods = {};

    onLoad() {
        super.onLoad();
    }
}

export class BindJwc extends wepy.page {
    config = {
        navigationBarTitleText: "校历",
        enablePullDownRefresh: true
    };
    mixins = [];
    data = {};
    computed = {
        termName(): number {
            return 1;
        }
    };
    methods = {
        returnToday(): number {
            return 123;
        }
    };

    init() {}
    async onLoad() {}
}
