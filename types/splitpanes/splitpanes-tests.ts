import Vue from 'vue';
import { Splitpane, Pane } from 'splitpanes';

new Vue({
    el: '#app',
    data: {},
    components: {
        Splitpane,
        Pane,
    },
    template: `
        <Splitpane class="default-theme" horizontal @resize="horizontalResize($event)" :dblClickSplitter="false"
                   :push-other-panes="false">
        <Pane splitpanes-min="2" splitpanes-size="35" splitpanes-max="85">
            A
        </Pane>
        <Pane splitpanes-min="2" splitpanes-size="65" splitpanes-max="85">
            B
        </Pane>
        </Splitpane>
    `,
});
