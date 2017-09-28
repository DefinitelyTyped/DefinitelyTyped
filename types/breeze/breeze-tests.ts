

import core = breeze.core;
import config = breeze.config;

function test_dataType() {
    var typ = breeze.DataType.DateTime;
    var nm = typ.getName();
    var dv = typ.defaultValue;
    var isDate = typ.isDate;
    var isFloat = typ.isFloat;
    var isInteger = typ.isInteger;
    var isNumeric = typ.isNumeric;
    var qjod = typ.quoteJsonOData;
    var symbs = breeze.DataType.getSymbols();
    var x = typ.parentEnum === <breeze.core.IEnum> breeze.DataType;
    var isFalse = breeze.DataType.contains(breeze.DataType.Double);
    var dt = breeze.DataType.fromName("Decimal");

}

function test_dataProperty() {
    var lastNameProp = new breeze.DataProperty({
        name: "lastName",
        dataType: breeze.DataType.String,
        isNullable: true,
        maxLength: 20
    });
    var personEntityType: breeze.EntityType;
    personEntityType.addProperty(lastNameProp);
}

function test_dataService() {
    var ds = new breeze.DataService({
        serviceName: "breeze/NorthwindIBModel",
        hasServerMetadata: true
    });
    var em = new breeze.EntityManager({
        dataService: ds
    });

}

function test_entityAspect() {
    var order: breeze.Entity;
    order.entityAspect.acceptChanges();
    var entityKey = order.entityAspect.getKey();
    var valErrors = order.entityAspect.getValidationErrors();
    var orderDateErrors = order.entityAspect.getValidationErrors("OrderDate");
    var orderDateProperty = order.entityType.getProperty("OrderDate");
    var orderDateErrors = order.entityAspect.getValidationErrors(orderDateProperty);
    order.entityAspect.loadNavigationProperty("Orders").then(function (data: breeze.QueryResult) {
        var orders = data.results;
    }).catch(function (exception) { });
    order.entityAspect.rejectChanges();
    order.entityAspect.setDeleted();
    order.entityAspect.setModified();
    order.entityAspect.setUnchanged();
    var isOk = order.entityAspect.validateEntity();
    if (!isOk) {
        var errors = order.entityAspect.getValidationErrors();
    }
    var isOk = order.entityAspect.validateProperty("Order");
    var orderDateProperty = order.entityType.getProperty("OrderDate");
    //var isOk = order.entityAspect.validateProperty(OrderDateProperty);
    order.entityAspect.propertyChanged.subscribe(function (propertyChangedArgs) {
        var entity = propertyChangedArgs.entity;
        var propertyNameChanged = propertyChangedArgs.propertyName;
        var oldValue = propertyChangedArgs.oldValue;
        var newValue = propertyChangedArgs.newValue;
    });
    order.entityAspect.validationErrorsChanged.subscribe(function (validationChangeArgs) {
        var entity = validationChangeArgs.entity;
        var errorsAdded = validationChangeArgs.added;
        var errorsCleared = validationChangeArgs.removed;
    });

}

function test_entityKey() {
    var em1: breeze.EntityManager;
    var employee1: breeze.Entity;
    var empType = em1.metadataStore.getEntityType("Employee");
    var entityKey = new breeze.EntityKey(<breeze.EntityType> empType, 1);
    var empKey = employee1.entityAspect.getKey();
    var empTerrType = em1.metadataStore.getEntityType("EmployeeTerritory");
    var empTerrKey = new breeze.EntityKey(<breeze.EntityType> empTerrType, [1, 77]);
    var empType = em1.metadataStore.getEntityType("Employee");
    var empKey1 = new breeze.EntityKey(<breeze.EntityType> empType, 1);
    var empKey2 = employee1.entityAspect.getKey();
    if (empKey1.equals(empKey2)) { }
    if (breeze.EntityKey.equals(empKey1, empKey2)) { }
}

function test_metadataStore() {
    var ms = new breeze.MetadataStore();
    var entityManager = new breeze.EntityManager({
        serviceName: "breeze/NorthwindIBModel",
        metadataStore: ms
    });
    var em1: breeze.EntityManager;
    em1.setProperties({ metadataStore: ms });
    var metadataAsString = ms.exportMetadata();
    window.localStorage.setItem("metadata", metadataAsString);
    var metadataFromStorage = window.localStorage.getItem("metadata");
    var newMetadataStore = new breeze.MetadataStore();
    newMetadataStore.importMetadata(metadataFromStorage);
    var ms = new breeze.MetadataStore();
    ms.fetchMetadata("breeze/NorthwindIBModel")
        .then(function (rawMetadata) { })
        .catch(function (exception) { });
    var odType = em1.metadataStore.getEntityType("OrderDetail");
    var badType = em1.metadataStore.getEntityType("Foo", false);
    var allTypes = em1.metadataStore.getEntityTypes();
    if (!em1.metadataStore.hasMetadataFor("breeze/NorthwindIBModel")) { }
    var metadataAsString = ms.exportMetadata();
    window.localStorage.setItem("metadata", metadataAsString);
    var metadataFromStorage = window.localStorage.getItem("metadata");
    var newMetadataStore = breeze.MetadataStore.importMetadata(metadataFromStorage);
    var metadataAsString = ms.exportMetadata();
    window.localStorage.setItem("metadata", metadataAsString);
    var metadataFromStorage = window.localStorage.getItem("metadata");
    var newMetadataStore = new breeze.MetadataStore();
    newMetadataStore.importMetadata(metadataFromStorage);
    if (em1.metadataStore.isEmpty()) { }
    var Customer = function () {
        this.miscData = "asdf";
    }
    em1.metadataStore.registerEntityTypeCtor("Customer", Customer);
}

function test_entityManager() {
    var entityManager = new breeze.EntityManager("breeze/NorthwindIBModel");
    var em1 = new breeze.EntityManager({ serviceName: "breeze/NorthwindIBModel" });
    var metadataStore = new breeze.MetadataStore();
    var entityManager = new breeze.EntityManager({
        serviceName: "breeze/NorthwindIBModel",
        metadataStore: metadataStore
    });

    new breeze.QueryOptions({
        mergeStrategy: null,
        fetchStrategy: this.fetchStrategy
    });
    var queryOptions = new breeze.QueryOptions({
        mergeStrategy: breeze.MergeStrategy.OverwriteChanges,
        fetchStrategy: breeze.FetchStrategy.FromServer
    });
    var validationOptions = new breeze.ValidationOptions({
        validateOnAttach: true,
        validateOnSave: true,
        validateOnQuery: false
    });
    var entityManager = new breeze.EntityManager({
        serviceName: "breeze/NorthwindIBModel",
        queryOptions: queryOptions,
        validationOptions: validationOptions
    });
    var custType = <breeze.EntityType> em1.metadataStore.getEntityType("Customer");
    var cust1 = custType.createEntity();
    em1.addEntity(cust1);

    var cust2 = em1.createEntity("Customer", { companyName: "foo" });
    var cust3 = em1.createEntity("foo", { xxx: 3 }, breeze.EntityState.Added);

    em1.attachEntity(cust1, breeze.EntityState.Added);
    em1.clear();
    var em2 = em1.createEmptyCopy();
    em1.detachEntity(cust1);
    var serviceName: string;
    var em = new breeze.EntityManager(serviceName);
    var query = new breeze.EntityQuery("Orders");
    em.executeQuery(query)
      .then(function (data: breeze.QueryResult) {
          var orders = data.results;
      }).catch(function (err) {
      });
    var em = new breeze.EntityManager(serviceName);
    var query = new breeze.EntityQuery("Orders");
    em.executeQuery(query,
       function (data: breeze.QueryResult) {
           var orders = data.results;
       },
       function (err) {
       });
    var em = new breeze.EntityManager(serviceName);
    var query = new breeze.EntityQuery("Orders").using(em);
    query.execute()
      .then(function (data: breeze.QueryResult) {
          var orders = data.results;
      }).catch(function (err) {
      });
    var em = new breeze.EntityManager(serviceName);
    var query = new breeze.EntityQuery("Orders");
    var orders = em.executeQueryLocally(query);
    var em = new breeze.EntityManager(serviceName);
    var query = new breeze.EntityQuery("Orders").using(breeze.FetchStrategy.FromLocalCache);
    em.executeQuery(query)
      .then(function (data: breeze.QueryResult) {
          var orders = data.results;
      }).catch(function (err) {
      });
    var bundle = em1.exportEntities();
    window.localStorage.setItem("myEntityManager", bundle);
    var bundleFromStorage = window.localStorage.getItem("myEntityManager");
    var em2 = new breeze.EntityManager({
        serviceName: em1.serviceName,
        metadataStore: em1.metadataStore
    });
    em2.importEntities(bundleFromStorage);
    var entitiesToExport: breeze.Entity[];
    var bundle = em1.exportEntities(entitiesToExport);
    em2.importEntities(bundle, { mergeStrategy: breeze.MergeStrategy.PreserveChanges });
    var em1 = new breeze.EntityManager("breeze/NorthwindIBModel");
    em1.fetchMetadata()
       .then(function () {
           var metadataStore = em1.metadataStore;
       })
       .catch(function (exception) {
       });
    var employeeType = em1.metadataStore.getEntityType("Employee");
    var employeeKey = new breeze.EntityKey(<breeze.EntityType> employeeType, 1);
    var employee = em1.fetchEntityByKey(employeeKey);
    var emp2 = em1.fetchEntityByKey("Employee", 6);
    var emp3 = em1.fetchEntityByKey("Entityee", [6]);
    var custType = <breeze.EntityType> em1.metadataStore.getEntityType("Customer");
    var custumer = custType.createEntity();
    var customerId = em.generateTempKeyValue(custumer);
    em1.saveChanges()
        .then(function (data: breeze.SaveResult) {
            var sameCust1 = data.entities[0];
        });
    var changedEntities = em1.getChanges();
    var custType = <breeze.EntityType> em1.metadataStore.getEntityType("Customer");
    var changedCustomers = em1.getChanges(custType);
    var custType = <breeze.EntityType> em1.metadataStore.getEntityType("Customer");
    var orderType = <breeze.EntityType> em1.metadataStore.getEntityType("Order");
    var changedCustomersAndOrders = em1.getChanges([custType, orderType]);
    var entities = em1.getEntities();
    var custType = <breeze.EntityType> em1.metadataStore.getEntityType("Customer");
    var customers = em1.getEntities(custType);
    var custType = <breeze.EntityType> em1.metadataStore.getEntityType("Customer");
    var orderType = <breeze.EntityType> em1.metadataStore.getEntityType("Order");
    var customersAndOrders = em1.getChanges([custType, orderType]);
    var custType = <breeze.EntityType> em1.metadataStore.getEntityType("Customer");
    var orderType = <breeze.EntityType> em1.metadataStore.getEntityType("Order");
    var addedCustomersAndOrders = em1.getEntities([custType, orderType], breeze.EntityState.Added);
    if (em1.hasChanges()) { }
    var custType = <breeze.EntityType> em1.metadataStore.getEntityType("Customer");
    if (em1.hasChanges(custType)) { }
    var custType = <breeze.EntityType> em1.metadataStore.getEntityType("Customer");
    var orderType = <breeze.EntityType> em1.metadataStore.getEntityType("Order");
    if (em1.hasChanges([custType, orderType])) { };

    var bundle = em1.exportEntities();
    window.localStorage.setItem("myEntityManager", bundle);
    var bundleFromStorage = window.localStorage.getItem("myEntityManager");
    var em2 = breeze.EntityManager.importEntities(bundleFromStorage);
    var bundle = em1.exportEntities();
    var em2 = new breeze.EntityManager({
        serviceName: em1.serviceName,
        metadataStore: em1.metadataStore
    });
    em2.importEntities(bundle);
    var bundle2 = em1.exportEntities(null, { asString: true, includeMetadata: true });
    em2.importEntities(bundle2, { mergeStrategy: breeze.MergeStrategy.PreserveChanges });
    em.saveChanges().then(function (saveResult: breeze.SaveResult) {
        var savedEntities = saveResult.entities;
        var keyMappings = saveResult.keyMappings;
    }).catch(function (e) {
    });
    var saveOptions = new breeze.SaveOptions({ allowConcurrentSaves: true });
    var entitiesToSave: breeze.Entity[];
    em.saveChanges(entitiesToSave, saveOptions).then(function (saveResult: breeze.SaveResult) {
        var savedEntities = saveResult.entities;
        var keyMappings = saveResult.keyMappings;
    }).catch(function (e) {
    });
    em.saveChanges(entitiesToSave, null,
        function (saveResult: breeze.SaveResult) {
            var savedEntities = saveResult.entities;
            var keyMappings = saveResult.keyMappings;
        }, function (e) { }
    );
    em1.setProperties({
        serviceName: "breeze/foo",
    });
    var em = new breeze.EntityManager({ serviceName: "breeze/NorthwindIBModel" });
    em.entityChanged.subscribe(function (changeArgs) {
        var action = changeArgs.entityAction;
        var entity = changeArgs.entity;
    });
    var em = new breeze.EntityManager({ serviceName: "breeze/NorthwindIBModel" });
    em.hasChangesChanged.subscribe(function (args) {
        var hasChanges = args.hasChanges;
        var entityManager = args.entityManager;
    });
}

function test_entityQuery() {
    var query = new breeze.EntityQuery("Customers");
    var query = new breeze.EntityQuery("Customers")
       .where("CompanyName", "startsWith", "C")
       .orderBy("Region");
    var serviceName: string;
    var em = new breeze.EntityManager(serviceName);
    var query = new breeze.EntityQuery("Orders").using(em);
    query.execute()
        .then(function (data: breeze.QueryResult) { })
        .catch(function (err) { });
    var em = new breeze.EntityManager(serviceName);
    var query = new breeze.EntityQuery("Orders").using(em);
    query.execute(
       function (data: breeze.QueryResult) {
           var orders = data.results;
       },
       function (err) { });
    var em = new breeze.EntityManager(serviceName);
    var query = new breeze.EntityQuery("Orders");
    em.executeQuery(query)
      .then(function (data: breeze.QueryResult) {
          var orders = data.results;
      }).catch(function (err) {
      });
    var query = new breeze.EntityQuery("Orders").using(em);
    var orders = query.executeLocally();
    var query = new breeze.EntityQuery("Customers")
        .where("CompanyName", "startsWith", "C")
        .expand("Orders");
    var query = new breeze.EntityQuery("Orders")
        .expand("Customer, Employee");
    var query = new breeze.EntityQuery("Orders")
        .expand("Customer, OrderDetails, OrderDetails.Product");
    var query = breeze.EntityQuery.from("Customers");
    var query = new breeze.EntityQuery("Customers");
    var query = new breeze.EntityQuery().from("Customers");
    var customer: breeze.Entity;
    var customers: breeze.Entity[];
    var customersQuery = breeze.EntityQuery.fromEntities(customers);
    var customersQuery = breeze.EntityQuery.fromEntities(customers)
        .where("Region", breeze.FilterQueryOp.NotEquals, null);
    var customerQuery = breeze.EntityQuery.fromEntities(customer);
    var metadataStore: breeze.MetadataStore;
    var empType = metadataStore.getEntityType("Employee");
    var entityKey = new breeze.EntityKey(<breeze.EntityType> empType, 1);
    var query = breeze.EntityQuery.fromEntityKey(entityKey);
    var employee: breeze.Entity;
    var entityKey = employee.entityAspect.getKey();
    var query = breeze.EntityQuery.fromEntityKey(entityKey);
    var ordersNavProp = employee.entityType.getProperty("Orders");
    var query = breeze.EntityQuery.fromEntityNavigation(employee, <breeze.NavigationProperty> ordersNavProp);
    var query = new breeze.EntityQuery("Customers")
        .orderBy("CompanyName");
    var query = new breeze.EntityQuery("Customers")
        .orderBy("Region, CompanyName");
    var query = new breeze.EntityQuery("Products")
        .orderBy("Category.CategoryName");
    var query = new breeze.EntityQuery("Customers")
        .orderBy("CompanyName desc");
    var query = new breeze.EntityQuery("Customers")
        .orderBy("Region desc, CompanyName desc");
    var query = new breeze.EntityQuery("Customers")
        .orderByDesc("CompanyName");
    var query = new breeze.EntityQuery("Customers")
        .where("CompanyName", "startsWith", "C")
        .select("CompanyName");
    var query = new breeze.EntityQuery("Customers")
        .where("CompanyName", "startsWith", "C")
        .select("Orders");
    var query = new breeze.EntityQuery("Customers")
        .where("CompanyName", "startsWith", "C")
        .select("CompanyName, Orders");
    var query = new breeze.EntityQuery("Orders")
        .where("Customer.CompanyName", "startsWith", "C")
        .select("Customer.CompanyName, Customer, OrderDate");
    var query = new breeze.EntityQuery("Customers")
       .where("CompanyName", "startsWith", "C")
       .skip(5);
    var query = new breeze.EntityQuery("Customers")
        .take(5);
    var query = new breeze.EntityQuery("Customers")
        .top(5);
    var em = new breeze.EntityManager(serviceName);
    var query = new breeze.EntityQuery("Orders")
        .using(em);
    var em = new breeze.EntityManager(serviceName);
    var query = new breeze.EntityQuery("Orders")
        .using(breeze.MergeStrategy.PreserveChanges);
    var em = new breeze.EntityManager(serviceName);
    var query = new breeze.EntityQuery("Orders")
        .using(breeze.FetchStrategy.FromLocalCache);
    var adapter = new breeze.JsonResultsAdapter({ name: "foo", visitNode: function (x) { return x; } });
    var q2 = query.using(adapter);
    var query = new breeze.EntityQuery("Customers")
        .where("CompanyName", "startsWith", "C");
    var query = new breeze.EntityQuery("Customers")
        .where("CompanyName", breeze.FilterQueryOp.StartsWith, "C");
    var pred = new breeze.Predicate("CompanyName", breeze.FilterQueryOp.StartsWith, "C");
    var query = new breeze.EntityQuery("Customers")
        .where(pred);
    var pred = breeze.Predicate.create("CompanyName", "startswith", "C").and("Region", breeze.FilterQueryOp.Equals, null);
    var query = new breeze.EntityQuery("Customers")
        .where(pred);
    var query = new breeze.EntityQuery("Products")
        .where("Category.CategoryName", "startswith", "S");
    var query = new breeze.EntityQuery("Customers")
        .where("toLower(CompanyName)", "startsWith", "c");
    var query = new breeze.EntityQuery("Customers")
        .where("toUpper(substring(CompanyName, 1, 2))", breeze.FilterQueryOp.Equals, "OM");
    var q2 = query.toType("foo").orderBy("foo2");

    var pred = new breeze.Predicate('items', 'any', 'serialNumber', 'contains', '12345');
    var pred = new breeze.Predicate('items', breeze.FilterQueryOp.Any, 'serialNumber', breeze.FilterQueryOp.Contains, '12345');
    var pred = breeze.Predicate.create('items', 'any', 'serialNumber', 'contains', '12345');
    var pred = breeze.Predicate.create('items', breeze.FilterQueryOp.Any, 'serialNumber', breeze.FilterQueryOp.Contains, '12345');

    var json = query.toJSON();
}

function test_entityState() {
    var anEntity: breeze.Entity;
    var es = anEntity.entityAspect.entityState;
    es.isAdded();
    es === breeze.EntityState.Added;
    var es = anEntity.entityAspect.entityState;
    es.isAddedModifiedOrDeleted();
    es === breeze.EntityState.Added || es === breeze.EntityState.Modified || es === breeze.EntityState.Deleted;
    var es = anEntity.entityAspect.entityState;
    es.isDeleted();
    es === breeze.EntityState.Deleted;
    var es = anEntity.entityAspect.entityState;
    es.isDetached();
    es === breeze.EntityState.Detached;
    var es = anEntity.entityAspect.entityState;
    es.isModified();
    es === breeze.EntityState.Modified;
    var es = anEntity.entityAspect.entityState;
    es.isUnchanged();
    es === breeze.EntityState.Unchanged;
    var es = anEntity.entityAspect.entityState;
    es.isUnchangedOrModified();

    return es === breeze.EntityState.Unchanged || es === breeze.EntityState.Modified;
}

function test_entityType() {
    var myMetadataStore: breeze.MetadataStore;
    var myEntityType: breeze.EntityType;
    var dataProperty1: breeze.DataProperty, dataProperty2: breeze.DataProperty, navigationProperty1: breeze.DataProperty;
    var em1: breeze.EntityManager;
    /* NOTE https://github.com/DefinitelyTyped/DefinitelyTyped/pull/5590
    var entityManager = new breeze.EntityType({
        metadataStore: myMetadataStore,
        serviceName: "breeze/NorthwindIBModel",
        name: "person",
        namespace: "myAppNamespace"
    });
     */
    myEntityType.addProperty(dataProperty1);
    myEntityType.addProperty(dataProperty2);
    myEntityType.addProperty(navigationProperty1);
    var custType = <breeze.EntityType> em1.metadataStore.getEntityType("Customer");
    var countryProp = custType.getProperty("Country");
    var valFn = function (v: string) {
        if (v == null) return true;
        return (v.substring(0,2) === "US");
    };
    var countryValidator = new breeze.Validator("countryIsUS", valFn,
        { displayName: "Country", messageTemplate: "'%displayName%' must start with 'US'" });
    custType.addValidator(countryValidator, countryProp);
    countryProp.validators.push(countryValidator);
    var someEntityLevelValidator: breeze.Validator;
    custType.addValidator(someEntityLevelValidator);
    custType.validators.push(someEntityLevelValidator);
    var custType = <breeze.EntityType> em1.metadataStore.getEntityType("Customer");
    var cust1 = custType.createEntity();
    em1.addEntity(cust1);
    var custType = <breeze.EntityType> em1.metadataStore.getEntityType("Customer");
    var customerNameDataProp = custType.getDataProperty("CustomerName");
    var custType = <breeze.EntityType> em1.metadataStore.getEntityType("Customer");
    var customerOrdersNavProp = custType.getDataProperty("Orders");
    var custType = <breeze.EntityType> em1.metadataStore.getEntityType("Customer");
    var arrayOfProps = custType.getProperties();
    var custType = <breeze.EntityType> em1.metadataStore.getEntityType("Customer");
    var companyNameProp = custType.getProperty("CompanyName");
    var orderDetailType = <breeze.EntityType> em1.metadataStore.getEntityType("OrderDetail");
    var companyNameProp2 = orderDetailType.getProperty("Order.Customer.CompanyName");
    var custType = <breeze.EntityType> em1.metadataStore.getEntityType("Customer");
    var arrayOfPropNames = custType.getPropertyNames();
    var custType = <breeze.EntityType> em1.metadataStore.getEntityType("Customer");
    custType.setProperties({
        autoGeneratedKeyType: breeze.AutoGeneratedKeyType.Identity,
        defaultResourceName: "CustomersAndIncludedOrders"
    });
}

//function test_enum() {
//    var prototype = {
//        nextDay: function () {
//            var nextIndex = (this.dayIndex + 1) % 7;
//            return DayOfWeek.getSymbols()[nextIndex];
//        }
//    };
//    var DayOfWeek = new core.Enum("DayOfWeek", prototype);
//    DayOfWeek.Monday = DayOfWeek.addSymbol({ dayIndex: 0 });
//    var symbol = DayOfWeek.Friday;
//    if (DayOfWeek.contains(symbol)) { }
//    var dayOfWeek = DayOfWeek.from("Thursday");
//    var symbols = DayOfWeek.getNames();
//    var symbols = DayOfWeek.getSymbols();
//    if (core.Enum.isSymbol(DayOfWeek.Wednesday)) { };
//    DayOfWeek.seal();
//    var name = DayOfWeek.Monday.getName();
//    var name = DayOfWeek.Monday.toString();


//    var prototype = {
//        nextDay: function () {
//            var nextIndex = (this.dayIndex + 1) % 7;
//            return DayOfWeek.getSymbols()[nextIndex];
//        }
//    };
//    var DayOfWeek = new core.Enum("DayOfWeek", prototype);
//    DayOfWeek.Monday = DayOfWeek.addSymbol({ dayIndex: 0 });
//    DayOfWeek.Tuesday = DayOfWeek.addSymbol({ dayIndex: 1 });
//    DayOfWeek.Wednesday = DayOfWeek.addSymbol({ dayIndex: 2 });
//    DayOfWeek.Thursday = DayOfWeek.addSymbol({ dayIndex: 3 });
//    DayOfWeek.Friday = DayOfWeek.addSymbol({ dayIndex: 4 });
//    DayOfWeek.Saturday = DayOfWeek.addSymbol({ dayIndex: 5, isWeekend: true });
//    DayOfWeek.Sunday = DayOfWeek.addSymbol({ dayIndex: 6, isWeekend: true });
//    DayOfWeek.seal();
//    DayOfWeek.Monday.nextDay() === DayOfWeek.Tuesday;
//    DayOfWeek.Sunday.nextDay() === DayOfWeek.Monday;
//    DayOfWeek.Tuesday.isWeekend === undefined;
//    DayOfWeek.Saturday.isWeekend == true;
//    DayOfWeek instanceof core.Enum;
//    core.Enum.isSymbol(DayOfWeek.Wednesday);
//    DayOfWeek.contains(DayOfWeek.Thursday);
//    DayOfWeek.Tuesday.parentEnum == DayOfWeek;
//    DayOfWeek.getSymbols().length === 7;
//    DayOfWeek.Friday.toString() === "Friday";
//}
interface CustomEntityManager extends breeze.EntityManager {
    customTag: string;
}

function test_event() {
    var myEntityManager: CustomEntityManager;
    var myEntity: breeze.Entity, person: breeze.Entity;
    var salaryEvent = new core.Event("salaryEvent", person);
    core.Event.enable("propertyChanged", myEntityManager, false);
    core.Event.enable("propertyChanged", myEntityManager, true);
    core.Event.enable("propertyChanged", myEntity.entityAspect, false);
    core.Event.enable("propertyChanged", myEntity.entityAspect, <Function> null);
    core.Event.enable("validationErrorsChanged", myEntityManager, function (em: CustomEntityManager) {
        return em.customTag === "blue";
    });
    core.Event.isEnabled("propertyChanged", myEntityManager);
    salaryEvent.publish({ eventType: "payRaise", amount: 100 });
    salaryEvent.publish({ eventType: "payRaise", amount: 100 }, true);
    salaryEvent.publish({ eventType: "payRaise", amount: 100 }, true, function (error) { });
    salaryEvent.publishAsync({ eventType: "payRaise", amount: 100 });
    salaryEvent.publishAsync({ eventType: "payRaise", amount: 100 }, function (error) { });
    salaryEvent.subscribe(function (eventArgs) {
        if (eventArgs.eventType === "payRaise") { }
    });
    var order: breeze.Entity;
    order.entityAspect.propertyChanged.subscribe(function (pcEvent) {
        if (pcEvent.propertyName === "OrderDate") { }
    });
    var token = order.entityAspect.propertyChanged.subscribe(function (pcEvent) { });
    order.entityAspect.propertyChanged.unsubscribe(token);
}

function test_localQueryComparisonOptions() {
    var lqco = new breeze.LocalQueryComparisonOptions({
        name: "caseSensitive-nonSQL",
        isCaseSensitive: true,
        usesSql92CompliantStringComparison: false
    });
    lqco.setAsDefault();
    var ms = new breeze.MetadataStore({ localQueryComparisonOptions: lqco });
    var em = new breeze.EntityManager({ metadataStore: ms });
    var lqco = new breeze.LocalQueryComparisonOptions({
        isCaseSensitive: false,
        usesSql92CompliantStringComparison: true
    });
    lqco.setAsDefault();
}

function test_namingConventions() {
    var namingConv = new breeze.NamingConvention({
        serverPropertyNameToClient: function (serverPropertyName) {
            return serverPropertyName.substr(0, 1).toLowerCase() + serverPropertyName.substr(1);
        },
        clientPropertyNameToServer: function (clientPropertyName) {
            return clientPropertyName.substr(0, 1).toUpperCase() + clientPropertyName.substr(1);
        }
    });
    var nc = new breeze.NamingConvention({
        serverPropertyNameToClient: function (x) {
            return "xxx";
        }
    });
    var ms = new breeze.MetadataStore({ namingConvention: namingConv });
    var em = new breeze.EntityManager({ metadataStore: ms });
    var namingConv = new breeze.NamingConvention({
        serverPropertyNameToClient: function (serverPropertyName) {
            return serverPropertyName.substr(0, 1).toLowerCase() + serverPropertyName.substr(1);
        },
        clientPropertyNameToServer: function (clientPropertyName) {
            return clientPropertyName.substr(0, 1).toUpperCase() + clientPropertyName.substr(1);
        }
    });
    namingConv.setAsDefault();
}

function test_navigationProperty() {
    var homeAddressProp = new breeze.NavigationProperty({
        name: "homeAddress",
        entityTypeName: "Address:#myNamespace",
        isScalar: true,
        associationName: "address_person",
        foreignKeyNames: ["homeAddressId"]
    });
    var homeAddressIdProp = new breeze.DataProperty({
        name: "homeAddressId",
        dataType: breeze.DataType.Int32
    });
    var personEntityType: breeze.EntityType;
    personEntityType.addProperty(homeAddressProp);
    personEntityType.addProperty(homeAddressIdProp);
}

function test_predicate() {
    var p1 = new breeze.Predicate("CompanyName", "StartsWith", "B");
    var p1a = breeze.Predicate.create("CompanyName", "==", "City");
    var p2a = p1a.and(p1a.not());
    var query = new breeze.EntityQuery("Customers").where(p1);
    var p2 = new breeze.Predicate("Region", breeze.FilterQueryOp.Equals, null);
    var query = new breeze.EntityQuery("Customers").where(p2);
    var dt = new Date(88, 9, 12);
    var p1 = breeze.Predicate.create("OrderDate", "ne", dt);
    var p2 = breeze.Predicate.create("ShipCity", "startsWith", "C");
    var p3 = breeze.Predicate.create("Freight", ">", 100);
    var newPred = p1.and(p2, p3);
    var preds = [p2, p3];
    var newPred = p1.and(preds);
    var p4 = breeze.Predicate.create("ShipCity", "startswith", "F")
        .and("Size", "gt", 2000);
    var dt = new Date(88, 9, 12);
    var p1 = breeze.Predicate.create("OrderDate", "ne", dt);
    var p2 = breeze.Predicate.create("ShipCity", "startsWith", "C");
    var p3 = breeze.Predicate.create("Freight", ">", 100);
    var newPred = breeze.Predicate.and(p1, p2, p3);
    var preds = [p1, p2, p3];
    var newPred = breeze.Predicate.and(preds);
    var p1 = breeze.Predicate.create("Freight", "gt", 100);
    var predArgs: any[] = ["Freight", "gt", 100];
    var p1 = breeze.Predicate.create(predArgs);
    var p1 = new breeze.Predicate("Freight", "gt", 100);
    var p1 = new breeze.Predicate("CompanyName", "StartsWith", "B");
    if (breeze.Predicate.isPredicate(p1)) { }
    var p1 = breeze.Predicate.create("Freight", "gt", 100);
    var not_p1 = breeze.Predicate.not(p1);
    var not_p1 = p1.not();
    var not_p1 = breeze.Predicate.create("Freight", "le", 100);
    var dt = new Date(88, 9, 12);
    var p1 = breeze.Predicate.create("OrderDate", "ne", dt);
    var p2 = breeze.Predicate.create("ShipCity", "startsWith", "C");
    var p3 = breeze.Predicate.create("Freight", ">", 100);
    var newPred = breeze.Predicate.or(p1, p2, p3);
    var preds = [p1, p2, p3];
    var newPred = breeze.Predicate.or(preds);
    var dt = new Date(88, 9, 12);
    var p1 = breeze.Predicate.create("OrderDate", "ne", dt);
    var p2 = breeze.Predicate.create("ShipCity", "startsWith", "C");
    var p3 = breeze.Predicate.create("Freight", ">", 100);
    var newPred = p1.and(p2, p3);
    var preds = [p2, p3];
    var newPred = p1.and(preds);
    var p4 = breeze.Predicate.create("ShipCity", "startswith", "F")
        .or("Size", "gt", 2000);
}

function test_queryOptions() {
    var em1: breeze.EntityManager;
    var newQo = new breeze.QueryOptions({ mergeStrategy: breeze.MergeStrategy.OverwriteChanges });
    em1.setProperties({ queryOptions: newQo });
    var newQo = new breeze.QueryOptions({ mergeStrategy: breeze.MergeStrategy.OverwriteChanges });
    newQo.setAsDefault();
    var queryOptions = em1.queryOptions.using(breeze.MergeStrategy.PreserveChanges);
    var queryOptions = em1.queryOptions.using(breeze.FetchStrategy.FromLocalCache);
    var queryOptions = em1.queryOptions.using({ mergeStrategy: breeze.MergeStrategy.OverwriteChanges });
}

function test_validationOptions() {
    var newVo = new breeze.ValidationOptions({ validateOnSave: false, validateOnAttach: false });
    var em1: breeze.EntityManager;
    em1.setProperties({ validationOptions: newVo });
    var validationOptions = new breeze.ValidationOptions()
    var newOptions = validationOptions.using({ validateOnQuery: true, validateOnSave: false });
    newOptions.setAsDefault();
    var validationOptions = new breeze.ValidationOptions();
    var newOptions = validationOptions.using({ validateOnQuery: true, validateOnSave: false });
}

interface NumericRange{
    max: number;
	min: number;
}

interface NumericRangeValidatorFunctionContext extends breeze.ValidatorFunctionContext, NumericRange {
}

function test_validator() {
    var valFn = function (v: any) {
        if (v == null) return true;
        return ( v.substr(0,2)=== "US");
    };
    var countryValidator = new breeze.Validator("countryIsUS", valFn, {
        displayName: "Country",
        messageTemplate: "'%displayName%' must start with 'US'"
    });
    var metadataStore: breeze.MetadataStore;
    var custType = <breeze.EntityType> metadataStore.getEntityType("Customer");
    var countryProp = custType.getProperty("Country");
    countryProp.validators.push(countryValidator);
    function isValidZipCode(value: string) {
        var re = /^\d{5}([\-]\d{4})?$/;
        return (re.test(value));
    }
    var valFn = function (v: any) {
        if (v.getProperty("Country") === "USA") {
            var postalCode = v.getProperty("PostalCode");
            return isValidZipCode(postalCode);
        }
        return true;
    };
    var zipCodeValidator = new breeze.Validator("zipCodeValidator", valFn,
        { messageTemplate: "For the US, this is not a valid PostalCode" });
    var em1: breeze.EntityManager;
    var custType = <breeze.EntityType> em1.metadataStore.getEntityType("Customer");
    custType.validators.push(zipCodeValidator);
    var numericRangeValidator = function (context: NumericRange) {
        var valFn = function (v: any, ctx: NumericRangeValidatorFunctionContext) {
            if (v == null) return true;
            if (typeof (v) !== "number") return false;
            if (ctx.min != null && v < ctx.min) return false;
            if (ctx.max != null && v > ctx.max) return false;
            return true;
        };
        return new breeze.Validator("numericRange", valFn, {
            messageTemplate: "'%displayName%' must be an integer between the values of %min% and %max%",
            min: context.min,
            max: context.max
        });
    };
    freightProperty.validators.push(numericRangeValidator({ min: 100, max: 500 }));
    var productType = <breeze.EntityType> em1.metadataStore.getEntityType("Product");
    var discontinuedProperty = productType.getProperty("Discontinued");
    discontinuedProperty.validators.push(breeze.Validator.bool());
    var orderType = <breeze.EntityType> em1.metadataStore.getEntityType("Order");
    var freightProperty = orderType.getProperty("Freight");
    regionProperty.validators.push(breeze.Validator.byte());
    orderType = <breeze.EntityType> em1.metadataStore.getEntityType("Order");
    var orderDateProperty = orderType.getProperty("OrderDate");
    orderDateProperty.validators.push(breeze.Validator.date());
    /* NOTE https://github.com/DefinitelyTyped/DefinitelyTyped/pull/5590
    var v0 = breeze.Validator.maxLength({ maxLength: 5, displayName: "City" });
    v0.validate("adasdfasdf");
    var errMessage = v0.getMessage();
     */
    custType = <breeze.EntityType> em1.metadataStore.getEntityType("Customer");
    var customerIdProperty = custType.getProperty("CustomerID");
    customerIdProperty.validators.push(breeze.Validator.guid());
    orderType = <breeze.EntityType> em1.metadataStore.getEntityType("Order");
    freightProperty = orderType.getProperty("Freight");
    freightProperty.validators.push(breeze.Validator.int16());
    orderType = <breeze.EntityType> em1.metadataStore.getEntityType("Order");
    freightProperty = orderType.getProperty("Freight");
    freightProperty.validators.push(breeze.Validator.int32());
    orderType = <breeze.EntityType> em1.metadataStore.getEntityType("Order");
    freightProperty = orderType.getProperty("Freight");
    freightProperty.validators.push(breeze.Validator.int64());
    custType = <breeze.EntityType> em1.metadataStore.getEntityType("Customer");
    var regionProperty = custType.getProperty("Region");
    regionProperty.validators.push(breeze.Validator.maxLength({ maxLength: 5 }));
    orderType = <breeze.EntityType> em1.metadataStore.getEntityType("Order");
    freightProperty = orderType.getProperty("Freight");
    freightProperty.validators.push(breeze.Validator.number());
    custType = <breeze.EntityType> em1.metadataStore.getEntityType("Customer");
    regionProperty = custType.getProperty("Region");
    regionProperty.validators.push(breeze.Validator.required());
    custType = <breeze.EntityType> em1.metadataStore.getEntityType("Customer");
    regionProperty = custType.getProperty("Region");
    regionProperty.validators.push(breeze.Validator.string());
    custType = <breeze.EntityType> em1.metadataStore.getEntityType("Customer");
     regionProperty = custType.getProperty("Region");
    /* NOTE https://github.com/DefinitelyTyped/DefinitelyTyped/pull/5590
    regionProperty.validators.push(breeze.Validator.stringLength({ minLength: 2, maxLength: 5 }));
    var validator = breeze.Validator.maxLength({ maxLength: 5, displayName: "City" });
    var result = validator.validate("asdf");
    var ok = result === null;
    result = validator.validate("adasdfasdf");
    var errMsg = result.errorMessage;
    var context = result.context;
    var sameValidator = result.validator;
     */
    var valFn = function (v: any) {
        if (v == null) return true;
        return (v.substr(0,2) === "US");
    };
    var countryValidator = new breeze.Validator("countryIsUS", valFn, { displayName: "Country" });
    breeze.Validator.messageTemplates["countryIsUS"] = "'%displayName%' must start with 'US'";

    breeze.Validator.register(countryValidator);
    breeze.Validator.registerFactory(() => countryValidator, "country");

    var urlValidator = breeze.Validator.url({ messageTemplate: 'u got that wrong' });
}

function test_demo() {

    var manager = new breeze.EntityManager('breeze/northwind');

    var query = new breeze.EntityQuery()
        .from("Employees");

    manager.executeQuery(query).then(function (data: breeze.QueryResult) { });
}

function test_corefns() {
    var o1: Object;
    var kvfn = function (p: any) { return p; }
    core.objectForEach(o1, kvfn);

    var o2: Object;
    var o3: Object;
    o3 = core.extend(o1, o2);

    var f1: Function;
    var f2: Function;
    f1 = core.propEq("name", "Joe");
    f1 = core.pluck("name");

    var a1: any[];
    var a2: any[];
    var a3: any[];
    var b: boolean;
    var n: number;

    var f3 = function (e1: any, e2: any) { return e1 == e2; };
    var f4 = function (e1: any) { return false; };
    b = core.arrayEquals(a1, a2, f3);
    b = core.arrayFirst(a1, f4);
    n = core.arrayIndexOf(a1, f4);
    b = core.arrayRemoveItem(a1, "whatever", false);
    a3 = core.arrayZip(a1, a2, f3);

    var f5 = function () { return false; };
    o1 = core.requireLib("libc,stdio", "Library not found");
    o1 = core.using(o2, "something", "x", f5);
    f2 = core.memoize(f4);
    var s: string;
    s = core.getUuid();
    n = core.durationToSeconds(s);

    b = core.isDate(s);
    b = core.isGuid(s);
    b = core.isDuration(s);
    b = core.isFunction(s);
    b = core.isEmpty(s);
    b = core.isNumeric(s);

    b = core.stringStartsWith(s, "pre");
    b = core.stringEndsWith(s, "suf");
    s = core.formatString("My %1 is full of %2", "hovercraft", "eels");

}

function test_config() {
    var s: string;
    s = config.ajax;
    s = config.dataService;
    var o: Object;
    o = config.functionRegistry;
    o = config.getAdapter("myInterfaceName", "myAdapterName");
    o = config.getAdapterInstance("myInterfaceName", "myAdapterName");
    config.initializeAdapterInstance("myInterfaceName", "myAdapterName", true);
    config.initializeAdapterInstances({ ajax: "", dataService: "" });
    s = config.interfaceInitialized.type;
    o = config.interfaceRegistry;
    o = config.objectRegistry;
    var f1: Function;
    config.registerAdapter("myAdapterName", f1);
    config.registerFunction(f1, "myFunction");
    config.registerType(f1, "myCtor");
    s = config.stringifyPad;
    o = config.typeRegistry;
}
