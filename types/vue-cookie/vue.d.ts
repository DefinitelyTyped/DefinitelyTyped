import VueCookie from './index';

/**
 * vue-cookie 为 Vue 提供的实例方法。
 *
 * @author ChenYong
 * @date 2018-09-07
 */
declare module 'vue/types/vue' {
    interface Vue {
        $cookie: VueCookie;
    }
}
