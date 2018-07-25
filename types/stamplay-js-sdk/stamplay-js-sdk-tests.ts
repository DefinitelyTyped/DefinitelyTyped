Stamplay.init('sample');
const userFn = Stamplay.User();
const user = new userFn.Model();
const colTags = Stamplay.Cobject('tag');
const tags = new colTags.Collection();

// Signing up
const registrationData = {
   email : 'user@provider.com',
   password: 'mySecret'
 };

user.signup(registrationData).then(() => {
  user.set('phoneNumber', '020 123 4567');
  return user.save();
}).then(() => {
  const number = user.get('phoneNumber');
  console.log(number); // number value is 020 123 4567
});

// Action
const colFoo = Stamplay.Cobject('foo');
const fooMod = new colFoo.Model();
fooMod.fetch(5)
  .then(() => fooMod.upVote())
  .then(
  () => {
    // success callback
  }, (err: any) => {
    // error callback
  }
);
