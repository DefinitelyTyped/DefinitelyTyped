import Vue from 'vue';
import * as VueCookie from 'vue-cookie';


let v = new Vue({
    template: "<app></app>",
    el: "root",
});

VueCookie.install(Vue);

console.assert(typeof v.$cookie.get('test') === 'string');

console.assert(v.$cookie.set('test', 'Hi I\'m cookie', {expires: 1000}) === undefined);

v.$cookie.delete('test');

console.assert(v.$cookie.get('test') === '');
