import Vue from 'vue';
import VueStoragePlugin, * as VueStorage from 'vue-ls';

const storageOptions: VueStorage.Options = {
    namespace: 'my_project',
    name: 'ls',
    storage: VueStorage.Types.Local,
};

Vue.use(VueStoragePlugin, storageOptions);
