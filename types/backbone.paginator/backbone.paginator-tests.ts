/// <reference types="jquery" />

import * as Backbone from 'backbone';

class TestModel extends Backbone.Model{};

var makeFetchOptions = <TCol extends Backbone.PageableCollection<TestModel>>() => {
  return {
    reset: true,
    url:   'example.com',
    beforeSend: (jqxhr: JQueryXHR) => {},
    success: (model: TestModel, response: any, options: any) => {},
    error:   (collection: TCol, jqxhr: JQueryXHR, options: any) => {},
    parse: false,
  };
};

namespace InitializingWithNoOption {
  class TestCollection extends Backbone.PageableCollection<TestModel> {
    constructor(){
      super();
    }
  }
  var testCollection = new TestCollection();
}

namespace InitializingWithOptions {
  class TestCollection extends Backbone.PageableCollection<TestModel> {
    constructor(models?: TestModel[], options?: Backbone.PageableInitialOptions){
      super();
    }
  }

  var testCollection1 = new TestCollection();

  var testCollection2 = new TestCollection([
    new TestModel(),
    new TestModel()
  ]);

  var testCollection3 = new TestCollection([], {});

  var testCollection4 = new TestCollection([],{
    comparator: ()=>1,
    full:       true,
    state:      {},
    queryParam: {},
  });

  var testCollection5 = new TestCollection([],{
    state: {
      firstPage:    0,
      lastPage:     0,
      currentPage:  0,
      pageSize:     1,
      totalPages:   1,
      totalRecords: 1,
      sortKey:      'id',
      order:        1,
          },
          queryParam: {
      currentPage:  'current_page',
      pageSize:     'page_size',
      totalPages:   'total_pages',
      totalRecords: 'total_records',
      sortKey:      'sort_key',
      order:        'order',
      directions:   '',
    },
  });

  var testCollection6 = new TestCollection([
    {} as TestModel,
    {} as TestModel,
  ]);
}

namespace Fetching {
  class TestCollection extends Backbone.PageableCollection<TestModel> {
    constructor(models?: TestModel[], options?: Backbone.PageableInitialOptions){
      super();
    }
  }

  var testCollection = new TestCollection();

  var result:JQueryXHR = testCollection.fetch();

  testCollection.fetch({});

  testCollection.fetch(makeFetchOptions<TestCollection>());
}

namespace Paging {
  class TestCollection extends Backbone.PageableCollection<TestModel> {
    constructor(models?: TestModel[], options?: Backbone.PageableInitialOptions){
      super();
    }
  }

  var options = makeFetchOptions<TestCollection>();

  var testCollection = new TestCollection();


  var result:JQueryXHR|TestCollection = testCollection.getFirstPage();

  testCollection.getFirstPage(options);

  testCollection.getFirstPage({silent: false});
  testCollection.getFirstPage({url: 'zombocom'});


  result = testCollection.getLastPage();

  testCollection.getLastPage(options);

  testCollection.getLastPage({silent: true});
  testCollection.getLastPage({url: 'chickensnack'});


  result = testCollection.getNextPage();

  testCollection.getNextPage(options);

  testCollection.getNextPage({silent: false});
  testCollection.getNextPage({url: 'hampsterdance'});


  result = testCollection.getPage(1);

  testCollection.getPage("1", options);

  testCollection.getPage(1, {silent: true});
  testCollection.getPage(1, {url: 'badcandy'});


  result = testCollection.getPageByOffset(1);

  testCollection.getPageByOffset(1, options);

  testCollection.getPageByOffset(1, {silent: false});
  testCollection.getPageByOffset(1, {url: 'oldmanmurray'});


  result = testCollection.getPreviousPage();

  testCollection.getPreviousPage(options);

  testCollection.getPreviousPage({silent: false});
  testCollection.getPreviousPage({url: 'uncyclopedia'});


  var hasPage:boolean = testCollection.hasNextPage();

  hasPage = testCollection.hasPreviousPage();
}




namespace Parse {
  class TestCollection extends Backbone.PageableCollection<TestModel> {
    constructor(models?: TestModel[],
    options?: Backbone.PageableInitialOptions){
      super();
    }
  }

  var testCollection = new TestCollection();

  var result:any[] = testCollection.parse({}, {});


  var resultLinks:any = testCollection.parseLinks({}, {});

  resultLinks = testCollection.parseLinks({}, { xhr: $.ajax({}) } );


  result = testCollection.parseRecords({}, {});

  var resultState: Backbone.PageableState = testCollection.parseState(
    {},
    {
      currentPage:  'current_page',
      pageSize:     'page_size',
      totalPages:   'total_pages',
      totalRecords: 'total_records',
      sortKey:      'sort_key',
      order:        'order',
      directions:   '',
          },
          {
      firstPage:    0,
      lastPage:     0,
      currentPage:  0,
      pageSize:     1,
      totalPages:   1,
      totalRecords: 1,
      sortKey:      'id',
      order:        1,
    },
    {});
}

namespace Setting {
  class TestCollection extends Backbone.PageableCollection<TestModel> {
    constructor(models?: TestModel[], options?: Backbone.PageableInitialOptions){
      super();
    }
  }

  var testCollection = new TestCollection();

  var options = makeFetchOptions<TestCollection>();

  var result1:JQueryXHR|TestCollection
    = testCollection.setPageSize(1, options);


  var result2:TestCollection
    = testCollection.setSorting('id', 1, { full: true});

  result1 = testCollection.switchMode(
  'server',
  {fetch: true, resetState: true}
      );
}

namespace Syncing {
  class TestCollection extends Backbone.PageableCollection<TestModel> {
    constructor(models?: TestModel[], options?: Backbone.PageableInitialOptions){
      super();
    }
  }

  var testCollection = new TestCollection();

  var result:JQueryXHR = testCollection.sync('server', new TestModel(), {});

  result = testCollection.sync('server', testCollection, {});
}

namespace Confllict {
  var result: typeof Backbone.PageableCollection = Backbone.PageableCollection.noConflict();
}
