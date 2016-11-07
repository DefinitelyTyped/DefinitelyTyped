

var query = new jo('http://test.com');

// Base URI
query.baseUri;

// To string
query.toString();

// Order by
query.orderBy('PropertyName');
query.orderBy('PropertyName').asc();
query.orderBy('PropertyName').desc();
query.orderBy('PropertyName').asc().desc();
query.resetOrderBy();
query.setOrderByDefault('PropertyName');
query.toggleOrderBy('CustomerId'); // TODO Example with callback.

query
    .setOrderByDefault('p1', 'desc')
    .orderBy('p2')
    .asc();
	
// Top
query.top(10);
query.resetTop();
query.setTopDefault(5);
query
    .setTopDefault(5)
    .top(10);

// Skip
query.skip(5);
query.resetSkip();
query.setSkipDefault(5);
query
    .setSkipDefault(5)
    .skip(10);

// Select
query.select(['Property1', 'Property2']);
query.resetSelect();
query.setSelectDefault(['CustomerId', 'CustomerName']);
query
    .setSelectDefault(['CustomerId', 'CustomerName'])
    .select(['CustomerId', 'CustomerName', 'Address']);

// Expand
query.expand('Customer');
query.resetExpand();
query.setExpandDefault('Customer');
query
    .setExpandDefault('Customer')
    .expand('Product');

// Format
query.format().atom();
query.format().xml();
query.format().json();
query.format().custom('text/csv');

query.formatDefault().atom();

query
    .formatDefault()
    .atom()
    .format()
    .json();
	
query.resetFormat();

// Inlinecount
query.inlineCount().allPages();
query.inlineCount().none();

query.inlineCountDefault().allPages();

query
    .inlineCountDefault()
    .allPages()
    .inlineCount()
    .none();
	
query.resetInlineCount();

// Filter
var clause = new jo.FilterClause('PropertyName');
clause.eq(5);
query.filter(clause);

query
    .andFilter(new jo.FilterClause('Property1').eq(5))
    .andFilter(new jo.FilterClause('Property2').eq(10));
	
query
    .orFilter(new jo.FilterClause('Property1').eq(5))
    .orFilter(new jo.FilterClause('Property2').eq(10));
	
query
    .filter(new jo.FilterClause('p1').eq(1))
    .andFilter(new jo.FilterClause('p2').eq(5))
    .orFilter(new jo.FilterClause('p3').eq(10));

query.removeFilter('CustomerName');

var clause = new jo.FilterClause('CustomerId');
clause.isEmpty();

var clause = new jo.FilterClause('CustomerId').eq(1);
clause.isEmpty();

query.andFilter(new jo.FilterClause('Status').eq('Pending'));
query.captureFilter();
query.resetToCapturedFilter();
query.resetFilter();

// Casts
query.filter(new jo.FilterClause('DateAdded').eq(jo.datetime('2013-03-01')));
query.filter(new jo.FilterClause('CustomerId').eq(jo.guid('3F2504E0-4F89-11D3-9A0C-0305E82C3301')));
query.filter(new jo.FilterClause('Price').eq(jo.decimal(24.97)));
query.filter(new jo.FilterClause('Price').eq(jo.single(24.97)));
query.filter(new jo.FilterClause('Price').eq(jo.double(24.97)));

// Logical Operators
query.filter(new jo.FilterClause('PropertyName').eq('test'));
query.filter(new jo.FilterClause('PropertyName').eq(10));
query.filter(new jo.FilterClause('CustomerName').not().eq('bob'));
query.filter(new jo.FilterClause('CustomerName').not().endswith('bob'));

// Precedence Groups
var group = new jo.PrecedenceGroup(new jo.FilterClause('Name').eq('Bob'));
query.filter(group);

var group2 = new jo.PrecedenceGroup(new jo.FilterClause('Name').eq('Bob')).orFilter(new jo.FilterClause('Name').eq('George'));
query.filter(group2);

query
    .filter(new jo.FilterClause('Id').eq(1))
    .andFilter(new jo.PrecedenceGroup(new jo.FilterClause('Name').startswith('a').eq(true))
        .orFilter(new jo.FilterClause('Name').startswith('b').eq(true)));
		
// Setting filter defaults
query.defaultFilter(new jo.FilterClause('Id').eq(1));
query
    .defaultFilter(new jo.FilterClause('Id').eq(1))
    .filter(new jo.FilterClause('Name').eq('bob'));
query
    .defaultFilter(new jo.FilterClause('Id').eq(1))
    .filter(new jo.FilterClause('Name').eq('bob'));
query.resetFilter();

// Arithmetic Methods
query.filter(new jo.FilterClause('PropertyName').add(5).eq(10));

// String Functions
query.filter(new jo.FilterClause('PropertyName').substringof('test').eq(true));
query.filter(new jo.FilterClause('PropertyName').toLower().substringof('test').eq(true));
query.filter(new jo.FilterClause('PropertyName').endswith('test').eq(true));
query.filter(new jo.FilterClause('PropertyName').startswith('test').eq(true));
query.filter(new jo.FilterClause('PropertyName').length().eq(10));
query.filter(new jo.FilterClause('PropertyName').indexof('test').eq(1));
query.filter(new jo.FilterClause('PropertyName').replace('test', 'bob').eq('bob'));
query.filter(new jo.FilterClause('PropertyName').substring(1).eq('test'));
query.filter(new jo.FilterClause('PropertyName').substring(1,2).eq('test'));
query.filter(new jo.FilterClause('PropertyName').toLower().eq('test'));
query.filter(new jo.FilterClause('PropertyName').toUpper().eq('TEST'));
query.filter(new jo.FilterClause('PropertyName').trim().eq('test'));

// Concat
query.filter(new jo.FilterClause().Concat(new jo.Concat('FirstName', 'LastName')).eq('BobSmith'));
query.filter(new jo.FilterClause().Concat(new jo.Concat(new jo.Concat('City', jo.literal(', ')), 'State')).eq('Birmingham, Alabama'));

// Date Functions
query.filter(new jo.FilterClause('Birthday').day().eq(2));
query.filter(new jo.FilterClause('Birthday').hour().eq(2));
query.filter(new jo.FilterClause('Birthday').minute().eq(2));
query.filter(new jo.FilterClause('Birthday').month().eq(2));
query.filter(new jo.FilterClause('Birthday').second().eq(2));
query.filter(new jo.FilterClause('Birthday').year().eq(2));

// Math Functions
query.filter(new jo.FilterClause('Price').round().eq(2));
query.filter(new jo.FilterClause('Price').floor().eq(2));
query.filter(new jo.FilterClause('Price').ceiling().eq(2));

// Saving Local
query.saveLocal();
jo.loadLocal();

query.saveLocal("key");
jo.loadLocal("key");