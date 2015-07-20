/// <reference path="vue.d.ts" />
module myapp {
  "use strict";
  export class Application extends Vue {
    constructor() {
      super();
      Vue.config.debug = true;
      this._init({
        // data is necessary to always write in init()
        data: {
          text: "hello world."
          //        },
          //        methods : {
          //          action : this.action
          /* same as unser */
        }
      });
      this.methods = {
        action: this.action
      }
    }
    action(): void {
      console.log("action");
    }
  }
}

var app = new myapp.Application();
app.$mount("#main");
