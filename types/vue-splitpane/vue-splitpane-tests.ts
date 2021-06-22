import Vue from 'vue';
import splitPane from 'vue-splitpane';
new Vue({
  el: '#app',
  data: {},
  components: {
    'split-pane': splitPane,
  },
  template: `<split-pane v-on:resize="resize" :min-percent='20' :default-percent='30' split="vertical">
    <template slot="paneL">
      A
    </template>
    <template slot="paneR">
      B
    </template>
  </split-pane>`,
});
