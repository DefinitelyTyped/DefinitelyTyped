import { DataProvider } from '../ojdataprovider';
interface TreeDataProvider<K, D> extends DataProvider<K, D> {
    getChildDataProvider(parentKey: any): TreeDataProvider<K, D>;
}
export = TreeDataProvider;
