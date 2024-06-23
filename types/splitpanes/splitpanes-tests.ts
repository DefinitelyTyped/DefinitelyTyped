import { Pane, Splitpanes } from "splitpanes";
import Vue from "vue";

new Vue({
    el: "#app",
    data: {},
    components: {
        Splitpanes,
        Pane,
    },
    template: `
        <!-- Basic test -->
        <Splitpanes>
        <Pane>
            A
        </Pane>
        <Pane>
            B
        </Pane>
        </Splitpanes>

        <!-- Splitpane Prop test -->
        <Splitpanes horizontal=true pushOtherPanes=true dblClickSplitter=true firstSplitter=true>
        <Pane>
            A
        </Pane>
        <Pane>
            B
        </Pane>
        </Splitpanes>

        <!-- Pane Prop test -->
        <Splitpanes>
        <Pane size="2" minSize="1" maxSize="3">
            A
        </Pane>
        <Pane size=2 minSize=1 maxSize=3>
            B
        </Pane>
        </Splitpanes>
    `,
});
