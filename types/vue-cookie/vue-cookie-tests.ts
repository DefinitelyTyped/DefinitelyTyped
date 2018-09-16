/**
 * 测试。
 * <br>
 * 在 Vue.js 的 main.ts 中加入以下代码即可。
 *
 * @author ChenYong
 * @date 2018-09-07
 */
import Vue from 'vue';
import VueCookie from 'vue-cookie';

Vue.use(VueCookie);

new Vue({
    el: '#app',
    mounted() {
        // Vue.prototype == this
        Vue.prototype.$cookie.set('test', 'test');

        console.log(Vue.prototype.$cookie.get('test'));
    }
});
