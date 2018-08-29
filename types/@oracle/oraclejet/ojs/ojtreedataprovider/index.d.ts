/// <reference types='ojs/ojdataprovider'/>
declare namespace oj {  
  interface TreeDataProvider<K, D> extends DataProvider<K, D> {
    getChildDataProvider(any): TreeDataProvider<K, D>
  }

}
