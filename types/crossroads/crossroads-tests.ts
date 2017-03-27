import crossroads = require('crossroads');

//String rule with param:
//match '/news/123' passing "123" as param to handler
var route1 = crossroads.addRoute('/news/{id}', function(id: any){
  console.log(id);
});

//String rule with optional param:
//match '/foo/123/bar' passing "123" and "bar" as param
//match '/foo/45' passing 45 as param (slug is optional)
var route2 = crossroads.addRoute('/foo/{id}/:slug:');
//addRoute returns a Route object
route2.matched.add(console.log, console);

//RegExp rule:
//match '/lorem/ipsum' passing "ipsum" as param to handler
//note the capturing group around segment
var route3 = crossroads.addRoute(/^\/lorem\/([a-z]+)$/, function(id: any){
  console.log(id);
});

//String rule with rest segments:
//match '/foo/123/edit' passing "123" as argument
//match '/foo/45/asd/123/edit' passing "45/asd/123" as argument
var route4 = crossroads.addRoute('/foo/{id*}/edit');
//addRoute returns a Route object
route4.matched.add(console.log, console);

//Query String:
//match 'foo.php?lorem=ipsum&dolor=amet'
crossroads.addRoute('foo.php{?query}', function(query: any){
    // query strings are decoded into objects
    console.log('lorem '+ query.lorem +' dolor sit '+ query.dolor);
});

var sectionRoute = crossroads.addRoute('/{section}/{id}');
function onSectionMatch(section: any, id: any){
  console.log(section +' - '+ id);
}
sectionRoute.matched.add(onSectionMatch);
//will match `sectionRoute` passing "news" and `123` as param
crossroads.parse('/news/123');

//will match `sectionRoute` and pass "lorem" and "ipsum" as first arguments
crossroads.parse('/news/123', ["lorem", "ipsum"]);

var route1 = crossroads.addRoute('/news/{id}');
crossroads.bypassed.add(function(request: any){
    console.log(request);
});
//won't match any route, triggering `bypassed` Signal
crossroads.parse('/foo');


crossroads.routed.add(function(request: any, data: any){
    console.log(request);
    console.log(data.route +' - '+ data.params +' - '+ data.isFirst);
});
crossroads.parse('/news/123'); //match `route1`, triggering `routed` Signal

var otherRouter = crossroads.create();
otherRouter.addRoute('/news/{id}', function(id: any){
    console.log(id);
});
otherRouter.parse('/news/123');

crossroads.routed.add(otherRouter.parse, otherRouter);
crossroads.bypassed.add(otherRouter.parse, otherRouter);
// same effect as calling: `crossroads.pipe(otherRouter)`

crossroads.normalizeFn = crossroads.NORM_AS_OBJECT;
crossroads.addRoute('/{foo}/{bar}', function(vals: any){
    //can access captured values as object properties
    console.log(vals.foo +' - '+ vals.bar);
});
crossroads.parse('/lorem/ipsum');

crossroads.normalizeFn = crossroads.NORM_AS_ARRAY;
crossroads.addRoute('/{foo}/{bar}', function(vals: any){
    //can access captured values as Array items
    console.log(vals[0] +' - '+ vals[1]);
});
crossroads.parse('/dolor/amet');

crossroads.normalizeFn = function(request: any, vals: any){
    //make sure first argument is always "news"
    return ['news', vals.id];
};
crossroads.addRoute('/{cat}/{id}', function(cat: any, id: any){
    console.log(cat +' - '+ id);
});
crossroads.parse('/article/123');

crossroads.shouldTypecast = true; //default = false
crossroads.addRoute('/news/{id}', function(id: any){
    console.log(id); // 12 (remove trailing zeroes since it's typecasted)
});
crossroads.parse('/news/00012');

crossroads.shouldTypecast = false; //default = false
crossroads.addRoute('/news/{id}', function(id: any){
    console.log(id); // "00012" (keep trailing zeroes)
});
crossroads.parse('/news/00012');

var sectionRouter = crossroads.create();
var navRouter = crossroads.create();

sectionRouter.pipe(navRouter);
// will also call `parse()` on `navRouter`
sectionRouter.parse('foo');

var navRouter = crossroads.create();

sectionRouter.pipe(navRouter);
// will also call `parse()` on `navRouter`
sectionRouter.parse('foo');

sectionRouter.unpipe(navRouter);
// won't forward url since they aren't piped anymore
sectionRouter.parse('bar');

var route1 = crossroads.addRoute('/news/{id}');
route1.matched.add(function(id: any){
  console.log('handler 1: '+ id);
});
route1.matched.add(function(id: any){
  console.log('handler 2: '+ id);
});
crossroads.parse('/news/123'); //will trigger both handlers of `route1`

//note that `rules` keys have the same as route pattern segments
route1.rules = {

    //match only values inside array
    section : ['blog', 'news', '123'],

    //validate dates on the format "yyyy-mm-dd"
    date : /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,

    /*
     * @param {string|number|boolean} value  Request segment value.
     * @param {string} request  Value passed to crossroads.parse method.
     * @param {object} valuesObj  Values of all pattern segments.
     * @return {boolean} If segment value is valid.
     */
    id : function(value: any, request: string, valuesObj: any): boolean{
        if(isNaN(value)){
            return false;
        }else{
            if(+value < 100 && valuesObj.section == 'blog'){
                return true;
            }else if(valuesObj.section == 'news'){
                return true;
            }else{
                return false;
            }
        }
    },

    /**
     * `request_` is a special rule used to validate whole request
     * It can be an Array, RegExp or Function.
     * Note that request will be typecasted if value is a boolean
     * or number and crossroads.shouldTypecast = true (default = false).
     */
    request_ : function(request: any){
        return (request != '123');
    },

    /**
     * Normalize params that should be dispatched by Route.matched signal
     * @param {*} request Value passed to crossroads.parse method.
     * @param {object} vals All segments captured by route, it also have a
     *  special property `vals_` which contains all the captured values and
     *  also a property `request_`.
     * @return {array} Array containing parameters.
     */
    normalize_ : function(request: any, vals: any): Array<any> {
        //ignore "date" since it isn't important for the application
        return [vals.section, vals.id];
    }

};

route1.match("/foo/2011-05-04/2"); //false. {section} isn't valid
route1.match("/blog/20110504/2"); //false. {date} isn't valid
route1.match("/blog/2011-05-04/999"); //false. {id} is too high
route1.match("/blog/2011-05-04/2"); //true. all segments validate


var route1 = crossroads.addRoute(/([\-\w]+)\/([\-\w]+)\/([\-\w]+)/);

//note that `rules` keys represent capturing group index
route1.rules = {
  '0' : ['blog', 'news', '123'],
  '1' : /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
  '2' : function(value: any, request: any, valuesObj: any){
          return ! isNaN(value);
        }
};

route1.match("/foo/2011-05-04/2"); //false. {0} isn't valid
route1.match("/blog/20110504/2"); //false. {1} isn't valid
route1.match("/blog/2011-05-04/abc"); //false. {2} isn't numeric
route1.match("/blog/2011-05-04/2"); //true. all segments validate

var projectsRoute = crossroads.addRoute('/projects/:id:');
projectsRoute.add(console.log, console);
projectsRoute.greedy = true; // greedy!

var projectDetailRoute = crossroads.addRoute('/projects/{id}', null, 2);
projectDetailRoute.add(console.log, console);

//match `projectsRoute`
crossroads.parse('/projects');

//match `projectDetailRoute` (priority 2) than `projectsRoute`
crossroads.parse('/projects/123');

route1.match('/foo/bar'); //false
route1.match('/news/123'); //true
route1.match('/news/foo-bar'); //true

route1.interpolate({id: 123});   // "news/123"
route1.interpolate({id: 'foo'}); // "news/foo"
