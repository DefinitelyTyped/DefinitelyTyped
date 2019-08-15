import CamlBuilder from 'camljs'

var caml = new CamlBuilder().Where()
	.Any(
	CamlBuilder.Expression().TextField("Email").EqualTo("support@google.com"),
	CamlBuilder.Expression().TextField("Email").EqualTo("plus@google.com"),
	CamlBuilder.Expression().TextField("Title").BeginsWith("[Google]"),
	CamlBuilder.Expression().TextField("Content").Contains("Google")
	)
	.ToString();


caml = new CamlBuilder().Where()
	.UserField("AssignedTo").EqualToCurrentUser()
	.Or()
	.UserField("AssignedTo").Membership.CurrentUserGroups()
	.GroupBy("Category")
	.OrderBy("Priority").ThenBy("Title")
	.ToString();

caml = new CamlBuilder().Where()
	.All(
	CamlBuilder.Expression().All(
		CamlBuilder.Expression().BooleanField("Enabled").IsTrue(),
		CamlBuilder.Expression().UserMultiField("TargetAudience").EqualTo("55").Or().UserMultiField("TargetAudience").EqualTo("66")
		),
	CamlBuilder.Expression().Any(
		CamlBuilder.Expression().TextField("NotificationScope").EqualTo("77"),
		CamlBuilder.Expression().TextField("NotificationScope").EqualTo("88").And().TextField("ScopeWebRelativeUrl").EqualTo("99")
		)
	)
	.ToString();

var caml = new CamlBuilder().Where()
	.LookupField("Category").Id().In([2, 3, 10])
	.And()
	.DateField("ExpirationDate").GreaterThan(CamlBuilder.CamlValues.Now)
	.OrderBy("ExpirationDate")
	.ToString()


caml = new CamlBuilder().Where().CounterField("ID").In([1, 2, 3]).ToString();

caml = CamlBuilder.Expression()
	.All(
		CamlBuilder.Expression().DateField("BroadcastExpires").GreaterThanOrEqualTo(CamlBuilder.CamlValues.Today),
		CamlBuilder.Expression().Any(
			CamlBuilder.Expression().UserField("BroadcastTo").IsInCurrentUserGroups(),
			CamlBuilder.Expression().UserField("BroadcastTo").EqualToCurrentUser()
		),
		CamlBuilder.Expression().DateRangesOverlap(CamlBuilder.DateRangesOverlapType.Year, new Date().toISOString())
	)
	.ToString();

caml = new CamlBuilder().Where().DateTimeField("Created").GreaterThan(new Date(Date.UTC(2013,0,1))).ToString();

// Aggregations and extended syntax of GroupBy
var query = new CamlBuilder()
    .View(["Category", { count: "ID" }, { sum: "Amount" }])
    .Query()
    .GroupBy("Category", true, 100)
    .ToString();

// ContentTypeId field
var query = new CamlBuilder()
    .Where()
    .TextField("Title").EqualTo("Document")
    .And()
    .ContentTypeIdField().BeginsWith("0x101")
    .ToString();

// joins
var query = new CamlBuilder()
    .View(["Title", "Country", "Population"])
    .LeftJoin("Country", "Country").Select("y4r6", "Population")
    .Query()
    .Where()
    .NumberField("Population").LessThan(10)
    .ToString();

// RowLimit & Scope
var camlBuilder1 = new CamlBuilder()
    .View(["ID", "Created"])
    .RowLimit(20, true)
    .Scope(CamlBuilder.ViewScope.RecursiveAll)
    .Query()
    .Where()
    .TextField("Title").BeginsWith("A")
    .ToString();
