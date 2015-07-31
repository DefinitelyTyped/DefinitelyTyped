/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../backbone/backbone.d.ts" />
/// <reference path="backbone.paginator.d.ts" />

module BackbonePaginatorTests {

  class TestModel extends Backbone.Model{};

  var makeFetchOptions = <TCol extends Backbone.PageableCollection<TestModel>>() => {
    return {
      reset: true,
      url:   'example.com',
      beforeSend: (jqxhr: JQueryXHR) => {},
      success: (model: TestModel, response: any, options: any) => {},
      error:   (collection: TCol, jqxhr: JQueryXHR, options: any) => {},
      parse: '',
    };
  };


  module InitializingWithNoOption {

    class TestCollection extends Backbone.PageableCollection<TestModel> {
      constructor(){
	super();
      }
    }

    var testCollection = new TestCollection();

  }



  module InitializingWithOptions {

    class TestCollection extends Backbone.PageableCollection<TestModel> {

      constructor(models?: TestModel[],
		  options?: Backbone.PageableInitialOptions){
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
      <TestModel>{},
      <TestModel>{},
    ]);

  }



  module Fetching {

    class TestCollection extends Backbone.PageableCollection<TestModel> {
      constructor(models?: TestModel[],
		  options?: Backbone.PageableInitialOptions){
	super();
      }
    }


    var testCollection = new TestCollection();

    var result:JQueryXHR = testCollection.fetch();

    testCollection.fetch({});

    testCollection.fetch(makeFetchOptions<TestCollection>());

  }



  module Paging {

    class TestCollection extends Backbone.PageableCollection<TestModel> {
      constructor(models?: TestModel[],
		  options?: Backbone.PageableInitialOptions){
	super();
      }
    }

    var options = makeFetchOptions<TestCollection>();

    var testCollection = new TestCollection();


    var result:JQueryXHR|TestCollection = testCollection.getFirstPage();

    testCollection.getFirstPage(options);
   
    // 'silent's type is boolean. (structural subtyping)
    testCollection.getFirstPage({silent: 'aa'});
    // 'url's type is string. (structural subtyping)
    testCollection.getFirstPage({url: true});


    result = testCollection.getLastPage();

    testCollection.getLastPage(options);

    // 'silent's type is boolean. (structural subtyping)
    testCollection.getLastPage({silent: 'aa'});
    // 'url's type is string. (structural subtyping)
    testCollection.getLastPage({url: true});


    result = testCollection.getNextPage();

    testCollection.getNextPage(options);

    // 'silent's type is boolean. (structural subtyping)
    testCollection.getNextPage({silent: 'aa'});
    // 'url's type is string. (structural subtyping)
    testCollection.getNextPage({url: true});


    result = testCollection.getPage(1);

    testCollection.getPage("1", options);

    // 'silent's type is boolean. (structural subtyping)
    testCollection.getPage(1, {silent: 'aa'});
    // 'url's type is string. (structural subtyping)
    testCollection.getPage(1, {url: true});


    result = testCollection.getPageByOffset(1);

    testCollection.getPageByOffset(1, options);

    // 'silent's type is boolean. (structural subtyping)
    testCollection.getPageByOffset(1, {silent: 'aa'});
    // 'url's type is string. (structural subtyping)
    testCollection.getPageByOffset(1, {url: true});


    result = testCollection.getPreviousPage();

    testCollection.getPreviousPage(options);

    // 'silent's type is boolean. (structural subtyping)
    testCollection.getPreviousPage({silent: 'aa'});
    // 'url's type is string. (structural subtyping)
    testCollection.getPreviousPage({url: true});


    var hasPage:boolean = testCollection.hasNextPage();

    hasPage = testCollection.hasPreviousPage();

  }




  module Parse {

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



  module Setting {

    class TestCollection extends Backbone.PageableCollection<TestModel> {
      constructor(models?: TestModel[],
		  options?: Backbone.PageableInitialOptions){
	super();
      }
    }

    var testCollection = new TestCollection();

    var options = makeFetchOptions<TestCollection>();


    var result1:JQueryXHR|TestCollection
	    = testCollection.setPageSize(1, options);


    var result2:TestCollection
	    = testCollection.setSorting('id', 1, options);


    result1 = testCollection.switchMode(
		'server',
		{fetch: true, resetState: true}
	      );

  }



  module Syncing {

    class TestCollection extends Backbone.PageableCollection<TestModel> {
      constructor(models?: TestModel[],
		  options?: Backbone.PageableInitialOptions){
	super();
      }
    }

    var testCollection = new TestCollection();


    var result:JQueryXHR = testCollection.sync('server', new TestModel(), {});

    result = testCollection.sync('server', testCollection, {});

  }



  module Confllict {

    var result:typeof Backbone.PageableCollection
	    = Backbone.PageableCollection.noConflict();

  }

}
