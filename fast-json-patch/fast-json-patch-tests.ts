import * as jsonpatch from 'fast-json-patch'

var myobj:{
    firstName:string,
    contactDetails: {
        phoneNumbers:string[]
    }
} = { firstName:"Albert", contactDetails: { phoneNumbers: [ ] } };
var patches = [
   {op:"replace", path:"/firstName", value:"Joachim" },
   {op:"add", path:"/lastName", value:"Wester" },
   {op:"add", path:"/contactDetails/phoneNumbers/0", value:{ number:"555-123" }  }
   ];
jsonpatch.apply( myobj, patches );

var myobj2 = { firstName:"Joachim", lastName:"Wester", contactDetails: { phoneNumbers: [ { number:"555-123" }] } };
var observer = jsonpatch.observe( myobj2 );
myobj2.firstName = "Albert";
myobj2.contactDetails.phoneNumbers[0].number = "123";
myobj2.contactDetails.phoneNumbers.push({number:"456"});
var patches2 = jsonpatch.generate(observer);

var objA = {user: {firstName: "Albert", lastName: "Einstein"}};
var objB = {user: {firstName: "Albert", lastName: "Collins"}};
var diff = jsonpatch.compare(objA, objB);

var obj = {user: {firstName: "Albert"}};
var patches3 = [{op: "replace", path: "/user/firstName", value: "Albert"}, {op: "replace", path: "/user/lastName", value: "Einstein"}];
var errors = jsonpatch.validate(patches, obj);
if (errors.length == 0) {
 //there are no errors!
}
else {
  for (var i=0; i < errors.length; i++) {
    if (!errors[i]) {
      console.log("Valid patch at index", i, patches[i]);
    }
    else {
      console.error("Invalid patch at index", i, errors[i], patches[i]);
    }
  }
}
