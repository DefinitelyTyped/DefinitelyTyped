import Vue from 'vue';

new Vue({
  el: '#app',
  methods: {
    logout(): void {
      this.$auth.logout();
    },
  },
  template: `
    Logout
    <a @click="logout">
        Logout
    </a>
`,
});
