import * as uid from 'uid-safe';

uid(18, function (err, string) {
  if (err) throw err
  // do something with the string 
});

uid(18).then(function (string) {
  // do something with the string 
})

var string = uid.sync(18);
