import { Page, Component } from "@tinajs/tina";

Page.define({
    properties: {
        content: String
    }
});

Page.define({
    data: {
        count: 0
    },
    compute({ count }) {
        return { countPlus1: count + 1 };
    },
    onLoad() {
        this.data.count;
    },
    methods: {
        handleTapButton() {
            this.data.count;
        }
    }
});

Component.define({
    data: {}
});
