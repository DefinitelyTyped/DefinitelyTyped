
Stamplay.init('sample');
var userFn = Stamplay.User();
var user = new userFn.Model;
var colTags = Stamplay.Cobject('tag');
var tags = new colTags.Collection();

// Signing up
var registrationData = {
   email : 'user@provider.com',
   password: 'mySecret'
 };

user.signup(registrationData).then(() => {
  user.set('phoneNumber', '020 123 4567' );
  return user.save();
}).then(() => {
  var number = user.get('phoneNumber');
  console.log(number); // number value is 020 123 4567
});


// Action
var colFoo = Stamplay.Cobject('foo');
var fooMod = new colFoo.Model();
fooMod.fetch(5)
  .then(() => fooMod.upVote())
  .then(
  () => {
    //success callback
  }, (err: any) => {
    //error callback
  }
)
