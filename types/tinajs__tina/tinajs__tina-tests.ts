import { Page } from "@tinajs/tina";

Page.define({
    properties: {
        content: String
    }
});

Page.define({
    data: {
        count: 0
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
