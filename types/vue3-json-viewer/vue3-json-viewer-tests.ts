import { createApp } from "vue";
import { JsonViewer } from "vue3-json-viewer";
import "vue3-json-viewer/dist/index.css";

const objToDisplay = {
    test: "foo",
};

createApp({
    components: {
        "JsonViewer": JsonViewer,
    },
    template: `<JsonViewer :value="${objToDisplay}" boxed theme="light" />`,
}).mount("#app");
