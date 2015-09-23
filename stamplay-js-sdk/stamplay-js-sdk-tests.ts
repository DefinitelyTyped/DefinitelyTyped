/// <reference path="stamplay-js-sdk.d.ts" />

var userFn = Stamplay.User();
var user = new userFn.Model;
var colTags = new Stamplay.Cobject('tag');
var tags = colTags.Collection;

// Signing up
var registrationData = {
   email : 'user@provider.com',
   password: 'mySecret'
 };

user.signup(registrationData).then(function(){
       user.set('phoneNumber', '020 123 4567' );
       return user.save();
     }).then(function(){
       var number = user.get('phoneNumber');
       console.log(number); // number value is 020 123 4567
     });


// Action
var colFoo = new Stamplay.Cobject('foo');
var fooMod = colFoo.Model;
fooMod.fetch(5).then(
  function(){
    return fooMod.upVote()
  }
).then(
  function(){
    //success callback
  }, function( err : any ){
    //error callback
  }
)
