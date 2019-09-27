import Vue from 'vue';
import VueStorage, { StorageOptions, StorageTypes } from 'vue-ls';

const storageOptions: StorageOptions = {
  namespace: 'my_project',
  name: 'ls',
  storage: StorageTypes.Local,
};

Vue.use(VueStorage, storageOptions);
