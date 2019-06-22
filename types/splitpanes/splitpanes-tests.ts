import Vue from 'vue';
import SplitPanes from 'splitpanes';
new Vue({
  el: '#app',
  data: {},
  components: {
    'SplitPanes': SplitPanes,
  },
  template: `<SplitPanes class="default-theme" horizontal @resize="horizontalResize($event)" :dblClickSplitter="false" :push-other-panes="false">
    <span splitpanes-min="2" splitpanes-size="35" splitpanes-max="85">
        A
     </span>
    <span splitpanes-min="2" splitpanes-size="65" splitpanes-max="85">
        B
     </span>
  </SplitPanes>`,
});
