declare namespace oj {  
  interface IndexerModel {
    getIndexableSections(): Array<string>|Array<object>;
    getMissingSections(): Array<string>|Array<object>;
    setSection(section: string|object): Promise<string>|Promise<object>;
  }
  var IndexerModel: {
    prototype: IndexerModel;

    SECTION_OTHERS: {id: string, label: string};
  }

}
