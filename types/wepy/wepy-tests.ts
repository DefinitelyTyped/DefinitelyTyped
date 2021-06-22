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

    config = {};

    methods = {};

    async onLoad() {
        super.onLoad();
        await wepy.request("http://www.weixin.com");
        const a = await wepy.request({
            url: "www.weixin.com",
            data: { a: 1, b: 2 },
            header: {
                "content-type": "application/json"
            },
            method: "POST"
        });
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
