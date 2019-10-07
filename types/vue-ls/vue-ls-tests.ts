import Vue from 'vue';
import { VueStorage, Options, Types } from 'vue-ls';

const storageOptions: Options = {
    namespace: 'my_project',
    name: 'ls',
    storage: Types.Local,
};

Vue.use(VueStorage, storageOptions);
