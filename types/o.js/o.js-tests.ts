import * as o from 'o.js';
import * as Q from "q";

interface Product {
    ID : number;
    Name : string;
    Description : string;
    ReleaseDate : string;
    DiscontinuedDate : Date;
    Rating: number;
    Price: number;
}
interface Category {
    ID : number;
    Name : string;
}

// copy pasta all the examples from the readme!

o('http://services.odata.org/V4/OData/OData.svc/Products')
    .get<Product>(function(data) {
        console.log(data); //returns an array of Product data
    });



o('http://services.odata.org/V4/OData/OData.svc/Products')
    .take(5)
    .skip(2)
    .get<Product>(function(data) {
        console.log(data); //An array of 5 products skiped by 2
    });



o('http://services.odata.org/V4/OData/OData.svc/Products')
    .find(':0')
    .route<Product>('Product/Detail/:0/:1',function(data) {
        console.log('Route Product/Detail/'+this.param[0]+'/'+this.param[1]+' triggered. Result:');
        console.log(data);
    });



var oHandler = o('http://services.odata.org/V4/OData/OData.svc/Products');
//do somehtting
oHandler.find(1);
// do some more................
//get the data
oHandler.get<Product>(function(data) {
    console.log(data);
    //or the saved var also contains the data:
    console.log(oHandler.data);
});



Q.all<any>([
    o('http://services.odata.org/V4/OData/OData.svc/Products(4)').get<Product>(),
    o('http://services.odata.org/V4/OData/OData.svc/Categories').take(2).get<Category[]>()
]).then(function(oHandlerArray) {
    //The oHandler array contains the Product oHandler and the Group oHandler:
    console.log(oHandlerArray[0].data); // 1 Product with id 4
    console.log(oHandlerArray[1].data.length); // 2 Categories
});



o('http://services.odata.org/V4/OData/OData.svc/Products(2)')
    .get<Product>()
    .then(function(oHandler) {
        console.log(oHandler.data);
    }).fail(function(ex) {
        console.log(ex);
    });



o('http://services.odata.org/V4/OData/OData.svc/Products')
    .post({Name:'Example 1',Description:'a'})
    .post({Name:'Example 2',Description:'b'})
    .save<Product>(function(data) {
        console.log("Two Products added");
    });



o('http://services.odata.org/V4/OData/OData.svc/Products(1)')
    .patch({Name:'NewName'})
    .save<Product>(function(data) {
        console.log("Product Name changed");
    });



o('http://services.odata.org/V4/OData/OData.svc/Products(1)')
    .remove()
    .save<Product>(function(data) {
        console.log("Product deleted");
    });



o('http://services.odata.org/V4/OData/OData.svc/Products(1)')
    .ref('Categories', 2)
    .save<Product>(function(data) {
        console.log("Product(1) associated with Categories(2)");
    });



o('http://services.odata.org/V4/OData/OData.svc/Products')
    .find(2)
    .get<Product>()
    .then(function(oHandler) {
        oHandler.data.Name="NewName";
        return(o.save<Product>());
    }).then(function(oHandler) {
        console.log(oHandler.data.Name); //NewName
    }).fail(function(ex) {
        console.log("error");
    });



// set an endpoint
o().config({
    endpoint:'http://services.odata.org/V4/OData/OData.svc'
});
// after you have set an endpoint, you can shorten your queries:
o('Products').get<Product>(function(data) {
    //same result like the first example on this page
});



//basic config
o().config({
    endpoint:null,    // your odata endpoint for the service
    format:'json',        // currently only json is supported
    autoFormat: false,
    version:4,        // oData version (currently supported version 4. However most also work with version 3.)
    strictMode:true,  // strict mode throws exception, non strict mode only logs them
    start:null,       // a function which is executed on loading
    ready:null,       // a function which is executed on ready
    error:null,       // a function which is executed on error
    headers:[{name: '', value: ''}],       // a array of additional headers e.g.: [{name:'headername',value:'headervalue'}]
    username:null,    // a basic auth username
    password:null,    // a basic auth password
    isAsync:true      //set this to false to make synced (a)jax calls. (dosn't work with basic auth!)
});