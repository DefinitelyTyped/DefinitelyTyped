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
        <!-- Basic test -->
        <Splitpane>
        <Pane>
            A
        </Pane>
        <Pane>
            B
        </Pane>
        </Splitpane>

        <!-- Splitpane Prop test -->
        <Splitpane horizontal=true pushOtherPanes=true dblClickSplitter=true firstSplitter=true>
        <Pane>
            A
        </Pane>
        <Pane>
            B
        </Pane>
        </Splitpane>

        <!-- Pane Prop test -->
        <Splitpane>
        <Pane size="2" minSize="1" maxSize="3">
            A
        </Pane>
        <Pane size=2 minSize=1 maxSize=3>
            B
        </Pane>
        </Splitpane>
    `,
});
